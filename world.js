import * as THREE from "three";
import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';
import { prewarmClippingVariantsForVisibleMaterials, prewarmWaterReflection } from "./functions";

export class WorldClass {
  constructor(scene, camera, renderer, paramsClass, isMobile, audioClass) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.paramsClass = paramsClass;
    this.isMobile = isMobile;
    this.audioClass = audioClass;

    this.ambientLight = new THREE.AmbientLight(0xaaaaaa, 1); 

    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
    this.hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    this.hemiLight.position.set(0, 10, 0);

    this.dirLight = new THREE.DirectionalLight(0xffffff, 2);
    this.dirLight.position.set(0, 5, 5); 
    this.dirLight.castShadow = true;
    this.dirLight.shadow.camera.far = 100; 

    this.topLight = 1000;
    this.targetObject = new THREE.Object3D();
    this.dirLight.target = this.targetObject;
    this.helper = new THREE.DirectionalLightHelper(this.dirLight, 3);

    this.water;
    this.night = false;
    this._prevCamX = this.camera.position.x;

    this.thunder = false;
    this.thunderStart = false;

    // Тайминг грозы
    this.isThunderActive = false;                 
    this.thunderEndTimestampMs = 0;               
    this.nextThunderFlashTimestampMs = 0;         
    this.minThunderIntervalMs = 1000;             
    this.maxThunderIntervalMs = 3000;             
    this.currentThunderIndex = 0;                 

    this.rain = false;
    this.rainStart = false;
    this.isRainActive = false;
    this.rainEndTimestampMs = 0;

    this.activeLightningLines = [];
    
    this.lightningMaterialBase = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,   
      depthWrite: false                   
    });

    this.clock = new THREE.Clock;
    this.deltaSeconds;
    this.lightningFade = 0;


    // --- RAIN: НОВЫЕ ПАРАМЕТРЫ (LINES) ---
    this.rainDropCount = 9000;               // Увеличили количество, так как линии тоньше
    this.rainAreaHalfWidth = 20;             // Чуть шире зона
    this.rainAreaHalfDepth = 20;             
    this.rainTopY = 15;                      // Сбрасываем выше
    this.rainBottomY = -5;

    this.rainGeometry = new THREE.BufferGeometry();
    
    // Для линий нужно 2 вершины на каплю * 3 координаты
    this.rainPositions = new Float32Array(this.rainDropCount * 2 * 3);
    // Цвета для градиента (прозрачный хвост)
    this.rainColors = new Float32Array(this.rainDropCount * 2 * 3);
    
    this.rainVelocities = new Float32Array(this.rainDropCount);   
  }

  async loadRain() {
    // Инициализация дождя на основе линий (LineSegments)
    
    for (let i = 0; i < this.rainDropCount; i++) {
      // Рандомная позиция
      const x = (Math.random() - 0.5) * this.rainAreaHalfWidth * 2;
      const y = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY;
      const z = (Math.random() - 0.5) * this.rainAreaHalfDepth * 2;
      
      // Скорость падения (быстрая)
      const speed = 25 + Math.random() * 15; 
      this.rainVelocities[i] = speed;

      const idx = i * 6; // stride 6 (2 вершины * 3 оси)

      // Вершина 1 (Голова)
      this.rainPositions[idx + 0] = x;
      this.rainPositions[idx + 1] = y;
      this.rainPositions[idx + 2] = z;
      
      // Цвет головы (светлый)
      const cBase = 0.8 + Math.random() * 0.2;
      this.rainColors[idx + 0] = 0.7 * cBase; 
      this.rainColors[idx + 1] = 0.8 * cBase; 
      this.rainColors[idx + 2] = 1.0 * cBase;

      // Вершина 2 (Хвост) - пока ставим там же, в updateLighting растянем
      this.rainPositions[idx + 3] = x;
      this.rainPositions[idx + 4] = y + 0.5; 
      this.rainPositions[idx + 5] = z;

      // Цвет хвоста (более темный и прозрачный эффект через материал)
      this.rainColors[idx + 3] = 0.2 * cBase; 
      this.rainColors[idx + 4] = 0.3 * cBase; 
      this.rainColors[idx + 5] = 0.5 * cBase;
    }

    this.rainGeometry.setAttribute("position", new THREE.BufferAttribute(this.rainPositions, 3));
    this.rainGeometry.setAttribute("color", new THREE.BufferAttribute(this.rainColors, 3));

    // МАТЕРИАЛ ЛИНИЙ
    this.rainMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,       // Важно: использовать цвета вершин для градиента
      transparent: true,
      opacity: 0.4,             // Общая прозрачность
      depthWrite: false,        // Не перекрывать другие прозрачные объекты
      blending: THREE.AdditiveBlending
    });

    // Используем LineSegments вместо Points
    this.rainPoints = new THREE.LineSegments(this.rainGeometry, this.rainMaterial);
    this.rainPoints.layers.set(1);
    // Frustum culling можно отключить, так как мы сами управляем позициями, 
    // но для линий это не критично, если мы обновляем boundingSphere,
    // или просто ставим frustumCulled = false, чтобы дождь не мигал при поворотах.
    this.rainPoints.frustumCulled = false; 
  }


  async loadWaterSky() {
    this.waterGeometry = new THREE.PlaneGeometry(900, 500);

    this.water = new Water(
      this.waterGeometry,
      {
        textureWidth: 500,
        textureHeight: 500,
        waterNormals: new THREE.TextureLoader().load('textures/waternormals.jpg', function (texture) {
          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        }),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffaaaa,
        waterColor: 0x001e4f,
        distortionScale: 0.5,
        fog: this.scene.fog !== undefined
      }
    );

    this.water.rotation.x = - Math.PI / 2;
    this.water.position.x = 200;
    this.isMobile ? this.water.position.y = -2 : this.water.position.y = -2;

    this.sun = new THREE.Vector3();
    this.sky = new Sky();
    this.sky.scale.setScalar(10000);
    this.scene.add(this.sky);

    const skyUniforms = this.sky.material.uniforms;
    skyUniforms['turbidity'].value = 1;
    skyUniforms['rayleigh'].value = 3;
    skyUniforms['mieCoefficient'].value = 0.0005;
    skyUniforms['mieDirectionalG'].value = 0.8;

    this.parameters = {
      elevation: 5,
      azimuth: 170,
      top: false
    };

    this.blackSky = new THREE.Mesh(new THREE.PlaneGeometry(10000, 10000), new THREE.MeshBasicMaterial({ color: 0x08081a, side: THREE.DoubleSide, transparent: true, opacity: 0 }));
    this.blackSky.position.z = -1000
    this.scene.add(this.blackSky);

    // Звезды
    const STAR_COUNT = 1500;
    const positions = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);
    const colors = new Float32Array(STAR_COUNT * 3);

    for (let i = 0; i < STAR_COUNT; i++) {
      positions[3 * i] = Math.random() * 600 - 300;
      positions[3 * i + 1] = Math.random() * 150 - 100;
      positions[3 * i + 2] = Math.random() * 300 - 500;
      sizes[i] = Math.random() * 2.0 + 0.7;
      const color = new THREE.Color().setHSL(
        0.5 + Math.random() * 0.1,
        0.6 + Math.random() * 0.3,
        0.85 + Math.random() * 0.15
      );
      colors[3 * i] = color.r;
      colors[3 * i + 1] = color.g;
      colors[3 * i + 2] = color.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      varying float vRandom;
      void main() {
        vColor = color;
        vRandom = size;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z); 
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      uniform float opacity;
      varying vec3 vColor;
      varying float vRandom;
      uniform float time;
      void main() {
        float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
        float alpha = smoothstep(0.5, 0.45, dist);
        float twinkle = 0.7 + 0.5 * sin(time * 2.0 + vRandom * 10.0);
        gl_FragColor = vec4(vColor, alpha * twinkle * opacity);
      }
    `;

    this.materialStars = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        opacity: { value: 0.0 }, 
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.stars = new THREE.Points(geometry, this.materialStars);
    this.stars.layers.set(1);
    this.scene.add(this.stars);
    this.camera.layers.enable(1);
  }


  updateSky() {
    const camX = this.camera.position.x;
    const dir = Math.sign(camX - this._prevCamX);
    this._prevCamX = dir;

    this.stars.position.x = this.camera.position.x;

    const phi = THREE.MathUtils.degToRad(90 - this.parameters.elevation);
    const theta = THREE.MathUtils.degToRad(this.parameters.azimuth);
    this.sun.setFromSphericalCoords(1, phi, theta);

    this.sky.material.uniforms['sunPosition'].value.copy(this.sun);
    this.water.material.uniforms['sunDirection'].value.copy(this.sun).normalize();

    if (this.paramsClass.gameDir == 'hor') {
      if (this.sun.y < -0.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder) {
        this.materialStars.uniforms.opacity.value += 0.001;
        if (this.blackSky.material.opacity < 0.8) this.blackSky.material.opacity += 0.001;
      }
      else if (this.sun.y > -0.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) {
        this.materialStars.uniforms.opacity.value -= 0.001;
        this.blackSky.material.opacity -= 0.01;
      }
      if (this.thunder) {
        this.blackSky.material.opacity = 0;
      }

      if (this.parameters.elevation < -8) {
        this.parameters.top = true;
      }
      else if (this.parameters.elevation > 6) {
        this.parameters.top = false;
        this.rainStart = false;
      }

      if (!this.parameters.top) {
        if (!this.thunder) this.parameters.elevation -= 0.003;

        this.dirLight.intensity -= 0.0003;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity -= 0.0003;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));

        if (!this.thunder) {
          this.renderer.toneMappingExposure -= 0.0003;
          this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));
        }
      }
      else {
        if (!this.thunder) this.parameters.elevation += 0.003;

        this.dirLight.intensity += 0.0003;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity += 0.0003;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));

        this.renderer.toneMappingExposure += 0.00020;
        this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));
      }

      if (!this.rainStart && this.parameters.elevation < 2 && this.parameters.elevation > 1.5) { 
        this.rain = true;
        this.startRain();
        if (this.audioClass.musicOn) this.audioClass.rainAudio.play();
        this.rainStart = true;
      }

      if (this.parameters.elevation < -4.1 && !this.thunderStart) {
        this.thunder = true;
        this.startThunder();       
        this.thunderStart = true;
      }

      if (this.parameters.elevation < -2) {
        this.night = true;
      }
      else {
        this.night = false;
        this.thunderStart = false;
      }
    }

    if (this.paramsClass.gameDir == 'vert') {
      // Логика вертикальной игры (оставлена как есть)
      const minElevation = -100;
      const maxElevation = 100;
      this.parameters.azimuth = 150;

      this.stars.position.y = this.camera.position.y;

      if (this.prevCameraYSun === undefined) {
        this.prevCameraYSun = this.camera.position.y;
      }
      const deltaY = this.camera.position.y - this.prevCameraYSun;
      this.parameters.elevation -= deltaY * 0.05;
      this.blackSky.material.opacity += deltaY * 0.02;
      this.materialStars.uniforms.opacity.value += deltaY * 0.008;

      if (this.camera.position.y < this.topLight && deltaY < 0) {
        this.dirLight.intensity -= deltaY * 0.05;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity -= deltaY * 0.05;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));

        this.renderer.toneMappingExposure -= deltaY * 0.05;
        this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));
      }
      else if (this.topLight && deltaY > 0) {
        this.dirLight.intensity -= deltaY * 0.05;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity -= deltaY * 0.05;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));

        this.renderer.toneMappingExposure -= deltaY * 0.01;
        this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));
      }

      if (this.dirLight.intensity > 0.55 && this.dirLight.intensity < 0.57 && this.camera.position.y > 10) {
        this.topLight = this.camera.position.y
      }

      this.prevCameraYSun = this.camera.position.y;

      if (this.camera.position.y > 30) {
        this.night = true;
      } else {
        this.night = false;
      }
    }
    this.materialStars.uniforms.time.value = performance.now() * 0.001;
  }

  waterUpdate() {
    const time = performance.now() * 0.001;
    this.water.material.uniforms['time'].value += 0.4 / 60.0;
  }


  async loadWorld() {
    await this.loadWaterSky()
    await this.loadRain()
    this.scene.add(this.hemiLight);
    this.scene.add(this.dirLight);
    this.scene.add(this.targetObject);
    this.scene.add(this.water);

    prewarmClippingVariantsForVisibleMaterials(this.renderer, this.scene, this.camera);
    prewarmWaterReflection(this.water, this.renderer, this.scene, this.camera);
  }


  updateLighting() {

    // --- ДОЖДЬ: отключение по времени
    if (this.isRainActive && performance.now() >= this.rainEndTimestampMs) {
      this.scene.remove(this.rainPoints);
      this.isRainActive = false;
      this.rain = false;
      if (this.audioClass.musicOn) this.audioClass.rainAudio.stop();
    }

    const nowMs = performance.now();

    // --- ГРОЗА
    if (this.thunder) {
      if (nowMs >= this.nextThunderFlashTimestampMs) {
        this.triggerThunderFlashNow();
        this.scheduleNextThunderFlash(nowMs);
      }
      if (nowMs >= this.thunderEndTimestampMs) {
        this.thunder = false;
        this.isThunderActive = false;
      }
    }

    this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10);
    this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);

    const d = 10; 
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;

    this.deltaSeconds = Math.min(this.clock.getDelta(), 0.033);

    for (let i = this.activeLightningLines.length - 1; i >= 0; i--) {
      const line = this.activeLightningLines[i];
      line.userData.life -= this.deltaSeconds / 1.5;
      line.material.opacity *= 0.78;

      if (line.userData.life <= 0 || line.material.opacity <= 0.02) {
        this.scene.remove(line);
        line.geometry.dispose();
        line.material.dispose();
        this.activeLightningLines.splice(i, 1);
      }
    }

    if (this.lightningFade > 0) {
      this.lightningFade -= this.deltaSeconds * 1.7; 
      this.lightningFade = Math.max(0, this.lightningFade);
      this.renderer.toneMappingExposure = 0.03 + this.lightningFade * 0.97;
    }

    // --- RAIN UPDATE (LINES VERSION) ---
    if (this.rain) {
      const rainPositionAttr = this.rainGeometry.getAttribute("position");
      const array = rainPositionAttr.array;
      
      const time = performance.now() * 0.001;
      // Глобальный ветер
      const globalWindX = Math.sin(time * 0.1) * 1.0; 
      const globalWindZ = Math.cos(time * 0.05) * 0.5;

      const camX = this.camera.position.x;
      const camZ = this.camera.position.z;

      for (let i = 0; i < this.rainDropCount; i++) {
        const idx = i * 6; // Индекс головы капли
        const speed = this.rainVelocities[i];
        const tailLen = speed * 0.005; // Длина штриха зависит от скорости

        // 1. Двигаем ГОЛОВУ капли
        // Y падает вниз
        array[idx + 1] -= speed * this.deltaSeconds;
        // X и Z смещаем ветром
        array[idx + 0] += globalWindX * this.deltaSeconds * 0.5;
        array[idx + 2] += globalWindZ * this.deltaSeconds * 0.5;

        // 2. Проверка выхода за пределы "коробки" по высоте (Y)
        if (array[idx + 1] < this.rainBottomY) {
            // Респаун сверху
            array[idx + 1] = this.rainTopY;
            // Случайная позиция вокруг камеры
            array[idx + 0] = camX + (Math.random() - 0.5) * this.rainAreaHalfWidth * 2;
            array[idx + 2] = camZ + (Math.random() - 0.5) * this.rainAreaHalfDepth * 2;
        }

        // 3. Wrapping (бесконечный мир по X и Z)
        // Если капля улетела слишком далеко от камеры - переносим её на другую сторону
        if (array[idx + 0] > camX + this.rainAreaHalfWidth) array[idx + 0] -= this.rainAreaHalfWidth * 2;
        if (array[idx + 0] < camX - this.rainAreaHalfWidth) array[idx + 0] += this.rainAreaHalfWidth * 2;
        
        if (array[idx + 2] > camZ + this.rainAreaHalfDepth) array[idx + 2] -= this.rainAreaHalfDepth * 2;
        if (array[idx + 2] < camZ - this.rainAreaHalfDepth) array[idx + 2] += this.rainAreaHalfDepth * 2;

        // 4. Двигаем ХВОСТ капли
        // Хвост рассчитываем относительно головы + вектор движения (наклон)
        // Хвост X = Голова X - смещение ветра (чтобы капля наклонялась по ветру)
        array[idx + 3] = array[idx + 0] - (globalWindX * this.deltaSeconds * 2); 
        // Хвост Y = Голова Y + длина (хвост выше)
        array[idx + 4] = array[idx + 1] + tailLen;
        // Хвост Z
        array[idx + 5] = array[idx + 2] - (globalWindZ * this.deltaSeconds * 2);
      }

      rainPositionAttr.needsUpdate = true;
      // Сам объект rainPoints двигать не нужно, мы двигаем вершины в мировых координатах вокруг камеры
    }

    this.waterUpdate();
    this.updateSky();
  }

  startRain() {
    if (this.isRainActive) return;

    this.scene.add(this.rainPoints);
    this.isRainActive = true;

    const nowMs = performance.now();
    this.rainEndTimestampMs = nowMs + 70000;
  }

  startThunder() {
    if (!this.thunder) return;
    const nowMs = performance.now();
    this.isThunderActive = true;
    this.thunderEndTimestampMs = nowMs + 16000;
    this.triggerThunderFlashNow();
    this.scheduleNextThunderFlash(nowMs);
  }

  triggerThunderFlashNow() {
    if (!this.thunder) return;
    const audioList = this.audioClass.thundersAudio;
    if (audioList && audioList.length > 0) {
      const sound = audioList[this.currentThunderIndex % audioList.length].music;
      if (sound.isPlaying) sound.stop();
      if (this.audioClass.musicOn) sound.play();
      this.currentThunderIndex++;
    }
    this.triggerLightningFlash();
    this.lightningFade = 1.0;
  }

  scheduleNextThunderFlash(referenceNowMs) {
    const interval = this.minThunderIntervalMs
      + Math.random() * (this.maxThunderIntervalMs - this.minThunderIntervalMs);
    this.nextThunderFlashTimestampMs = referenceNowMs + interval;
  }

  stopThunderImmediately() {
    this.thunder = false;
    this.isThunderActive = false;
    this.thunderEndTimestampMs = 0;
    this.nextThunderFlashTimestampMs = 0;
  }

  createLightningBolt(startX, startY, startZ) {
    const endX = startX + (Math.random() - 0.5) * 6;
    const endY = -4 + Math.random() * 3;
    const endZ = startZ + (Math.random() - 0.5) * 6;

    const dirX = endX - startX;
    const dirY = endY - startY;
    const dirZ = endZ - startZ;
    const dirLen = Math.hypot(dirX, dirY, dirZ) || 1;
    const tx = dirX / dirLen, ty = dirY / dirLen, tz = dirZ / dirLen; 

    const normX = dirX / dirLen, normY = dirY / dirLen, normZ = dirZ / dirLen;
    const perpX = -normZ, perpY = 0, perpZ = normX;

    const upGuess = Math.abs(ty) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
    const tangent = new THREE.Vector3(tx, ty, tz);
    const perp1 = new THREE.Vector3().crossVectors(tangent, upGuess).normalize();   
    const perp2 = new THREE.Vector3().crossVectors(tangent, perp1).normalize();     

    const waveFreq1 = 2.0 + Math.random() * 2.0;   
    const waveAmp1 = 1.2;                         
    const wavePhase1 = Math.random() * Math.PI * 2;

    const waveFreq2 = 3.0 + Math.random() * 2.5;   
    const waveAmp2 = 0.8;                         
    const wavePhase2 = Math.random() * Math.PI * 2;

    const segmentCount = 28;        
    const baseAmplitude = 4.0;      
    const positions = [];

    for (let i = 0; i <= segmentCount; i++) {
      const t = i / segmentCount;
      const decay = 1.0 - t; 

      let px = startX + dirX * t;
      let py = startY + dirY * t;
      let pz = startZ + dirZ * t;

      const bend1 = Math.sin(t * Math.PI * waveFreq1 + wavePhase1) * waveAmp1 * (0.3 + 0.7 * decay);
      const bend2 = Math.sin(t * Math.PI * waveFreq2 + wavePhase2) * waveAmp2 * (0.3 + 0.7 * decay);

      const jitter1 = (Math.random() - 0.5) * 2.0 * baseAmplitude * decay;
      const jitter2 = (Math.random() - 0.5) * 1.6 * baseAmplitude * decay;
      const spike = Math.random() < 0.12 ? (Math.random() - 0.5) * 3.5 * decay : 0;

      px += perp1.x * (bend1 + jitter1 + spike) + perp2.x * (bend2 + jitter2 * 0.7);
      py += perp1.y * (bend1 + jitter1 * 0.5) + perp2.y * (bend2 + jitter2 * 0.5);
      pz += perp1.z * (bend1 + jitter1 + spike) + perp2.z * (bend2 + jitter2 * 0.7);

      positions.push(px, py, pz);

      if (i > 3 && i < segmentCount - 3 && Math.random() < 0.22) {
        const branchPositions = [];
        const branchSteps = 3 + Math.floor(Math.random() * 2);
        const branchScale = 0.25 + Math.random() * 0.35;

        let bx = px, by = py, bz = pz;
        branchPositions.push(bx, by, bz);
        for (let s = 1; s <= branchSteps; s++) {
          bx += (Math.random() - 0.5) * baseAmplitude * branchScale;
          by += -(0.8 + Math.random() * 0.8) * branchScale; 
          bz += (Math.random() - 0.5) * baseAmplitude * branchScale;
          branchPositions.push(bx, by, bz);
        }
        const branchGeometry = new THREE.BufferGeometry();
        branchGeometry.setAttribute("position", new THREE.Float32BufferAttribute(branchPositions, 3));
        const branchLine = new THREE.Line(branchGeometry, this.lightningMaterialBase.clone());
        branchLine.material.opacity = 0.6;                  
        branchLine.userData.life = 0.16 + Math.random() * 0.12;
        this.scene.add(branchLine);
        this.activeLightningLines.push(branchLine);
      }
    }

    const duplicateCount = 2; 
    for (let d = -1; d <= duplicateCount; d++) {
      const isCore = (d === -1);
      const offsetDirection = isCore ? 0 : (d % 2 === 0 ? 1 : -1); 
      const baseSpread = 0.55 + Math.random() * 0.45;             
      const waveAmplitude = 0.35;                                  
      const wavePhase = Math.random() * Math.PI * 2;               

      const jittered = [];
      const pointCount = positions.length / 3;

      for (let i = 0; i < pointCount; i++) {
        const t = i / (pointCount - 1); 

        const fanScale = (0.35 + 0.85 * t); 
        const sineBend = Math.sin(t * Math.PI * 2 + wavePhase) * waveAmplitude * (0.2 + 0.8 * t);

        const offsetX = perpX * offsetDirection * baseSpread * fanScale + perpZ * sineBend * 0.3;
        const offsetY = perpY * offsetDirection * baseSpread * fanScale + sineBend * 0.05; 
        const offsetZ = perpZ * offsetDirection * baseSpread * fanScale - perpX * sineBend * 0.3;

        const ix = i * 3 + 0;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        const baseX = positions[ix];
        const baseY = positions[iy];
        const baseZ = positions[iz];

        if (isCore) {
          jittered.push(
            baseX + (Math.random() - 0.5) * 0.05,
            baseY + (Math.random() - 0.5) * 0.05,
            baseZ + (Math.random() - 0.5) * 0.05
          );
        } else {
          jittered.push(
            baseX + offsetX + (Math.random() - 0.5) * 0.2,
            baseY + offsetY + (Math.random() - 0.5) * 0.2,
            baseZ + offsetZ + (Math.random() - 0.5) * 0.2
          );
        }
      }

      const lightningGeometry = new THREE.BufferGeometry();
      lightningGeometry.setAttribute("position", new THREE.Float32BufferAttribute(jittered, 3));

      const line = new THREE.Line(lightningGeometry, this.lightningMaterialBase.clone());
      line.material.opacity = isCore ? 0.95 : 0.32; 
      line.userData.life = 0.22 + Math.random() * 0.18;
      this.scene.add(line);
      this.activeLightningLines.push(line);
    }

  }

  triggerLightningFlash() {
    const startX = this.camera.position.x + (Math.random() - 0.5) * 30;
    const startY = 34 + Math.random() * 6;
    const startZ = -10 - Math.random() * 20;
    this.createLightningBolt(startX, startY, startZ);
  }
}
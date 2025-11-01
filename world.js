import * as THREE from "three";
import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';

export class WorldClass {
  constructor(scene, camera, renderer, paramsClass, isMobile, audioClass) {
    this.scene = scene;
    this.camera = camera;
    this.renderer = renderer;
    this.paramsClass = paramsClass;
    this.isMobile = isMobile;
    this.audioClass = audioClass;

    this.ambientLight = new THREE.AmbientLight(0xaaaaaa, 1); // soft white light

    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
    //hemiLight.color.setHSL(0.6, 0.6, 0.6);

    this.hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    this.hemiLight.position.set(0, 10, 0);


    this.dirLight = new THREE.DirectionalLight(0xffffff, 2);
    //this.dirLight.color.setHSL(0.1, 1, 0.95);
    this.dirLight.position.set(0, 5, 5); // Измените позицию
    this.dirLight.castShadow = true;
    this.dirLight.shadow.camera.far = 100; // Убедитесь, что это значение достаточно велико

    this.topLight = 1000;


    this.targetObject = new THREE.Object3D();


    this.dirLight.target = this.targetObject;

    this.helper = new THREE.DirectionalLightHelper(this.dirLight, 3);

    this.water;

    this.night = false;

    this._prevCamX = this.camera.position.x;

    this.thunder = false;
    this.thunderStart = false;

    // тайминг грозы
    this.isThunderActive = false;                 // дублировать не обязательно, но удобно для читаемости
    this.thunderEndTimestampMs = 0;               // когда гроза должна закончиться
    this.nextThunderFlashTimestampMs = 0;         // когда делать следующую вспышку
    this.minThunderIntervalMs = 1000;             // минимум между вспышками
    this.maxThunderIntervalMs = 3000;             // максимум между вспышками
    this.currentThunderIndex = 0;                 // какой звук грозы проигрывать далее

    this.rain = false;
    this.rainStart = false;
    this.isRainActive = false;
    this.rainEndTimestampMs = 0;

    this.activeLightningLines = [];
    // this.lightningMaterialBase = new THREE.LineBasicMaterial({
    //   color: 0xffffff,
    //   transparent: true,
    //   opacity: 1,
    //   emissive: new THREE.Color(0xffffff),
    //   emissiveIntensity: 6.0,     // будем анимировать/задавать по инстансу
    // });
    this.lightningMaterialBase = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 1,
      blending: THREE.AdditiveBlending,   // ← аддитивное смешивание
      depthWrite: false                   // ← не пишем в глубину, чтобы свечение не “глушилось”
    });

    this.clock = new THREE.Clock;
    this.deltaSeconds;
    this.lightningFade = 0;


    // --- RAIN: setup (дёшево и сердито)
    this.rainDropCount = 1500;               // 800–1500 обычно хватает
    this.rainAreaHalfWidth = 10;             // половина ширины облака по X
    this.rainAreaHalfDepth = 22;             // половина глубины облака по Z
    this.rainTopY = 7;
    this.rainBottomY = -2;

    this.rainGeometry = new THREE.BufferGeometry();
    this.rainPositions = new Float32Array(this.rainDropCount * 3);
    this.rainVelocities = new Float32Array(this.rainDropCount);   // скорость падения
    this.rainWindPhase = new Float32Array(this.rainDropCount);     // индивидуальная фаза ветра


  }

  async loadRain() {

    for (let i = 0; i < this.rainDropCount; i++) {
      const baseIndex = i * 3;
      this.rainPositions[baseIndex + 0] = (Math.random() - 0.5) * this.rainAreaHalfWidth * 2; // x
      this.rainPositions[baseIndex + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY; // y
      this.rainPositions[baseIndex + 2] = (Math.random() - 0.5) * this.rainAreaHalfDepth * 2 - 35; // z
      this.rainVelocities[i] = 10 + Math.random() * 10;         // юниты/сек
      // this.rainVelocities[i] = 6 + Math.random() * 1;         // юниты/сек

      this.rainWindPhase[i] = Math.random() * Math.PI * 20;
    }

    const colors = new Float32Array(this.rainDropCount * 3);
    for (let i = 0; i < this.rainDropCount; i++) {
      const cBase = 0.80 + Math.random() * 0.2;  // лёгкая вариация
      colors[i * 3 + 0] = 0.70 * cBase;            // R
      colors[i * 3 + 1] = 0.80 * cBase;            // G
      colors[i * 3 + 2] = 1.00 * cBase;            // B
    }
    this.rainGeometry.setAttribute("position", new THREE.BufferAttribute(this.rainPositions, 3));
    this.rainGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // текстура-штрих
    this.rainStreakTex = this.makeRainStreakTexture();

    // МАТЕРИАЛ: один draw call, экранный размер (без sizeAttenuation)
    this.rainMaterial = new THREE.PointsMaterial({
      color: 0x8888cc,
      vertexColors: true,
      map: this.rainStreakTex,
      alphaTest: 0.79,           // режем края по альфе
      transparent: true,
      opacity: 0.96,
      size: 0.18,                 // пиксели (т.к. sizeAttenuation: false)
      sizeAttenuation: true,    // стабильный “штрих” независимо от дистанции
      depthWrite: true,
      blending: THREE.AdditiveBlending
    });


    this.rainPoints = new THREE.Points(this.rainGeometry, this.rainMaterial);
    this.rainPoints.layers.set(1);

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





    // Генерируем позиции звёзд
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

    // Шейдеры
    const vertexShader = `
  attribute float size;
  varying vec3 vColor;
  varying float vRandom;

  void main() {
    vColor = color;
    vRandom = size;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z); // масштабирование по перспективе
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

  // Мерцание (анимируем альфу)
  float twinkle = 0.7 + 0.5 * sin(time * 2.0 + vRandom * 10.0);

  // Главная строка: альфа теперь умножается на uniform opacity!
  gl_FragColor = vec4(vColor, alpha * twinkle * opacity);
}
`;

    this.materialStars = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0.0 },
        opacity: { value: 0.0 }, // значение по умолчанию — невидимы
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      vertexColors: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    // Points
    this.stars = new THREE.Points(geometry, this.materialStars);
    this.stars.layers.set(1);
    this.scene.add(this.stars);
    this.camera.layers.enable(1);

  }





  updateSky() {

    const camX = this.camera.position.x;
    const dir = Math.sign(camX - this._prevCamX); // 1 -> вправо, -1 -> влево, 0 -> стоит
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
        //this.parameters.azimuth = 150;
        this.parameters.top = true;

      }
      else if (this.parameters.elevation > 6) {
        //this.parameters.azimuth = 150;
        this.parameters.top = false;
        this.rainStart = false;
      }

      if (!this.parameters.top) {
        //this.parameters.azimuth -= 3;
        if (!this.thunder) this.parameters.elevation -= 0.003;

        this.dirLight.intensity -= 0.0003;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity -= 0.0003;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));

        if (this.thunder) {
          //this.renderer.toneMappingExposure = 0.05;
        }
        else {
          this.renderer.toneMappingExposure -= 0.0003;
          this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));
        }


      }
      else {
        //this.parameters.azimuth += 0.03;
        if (!this.thunder) this.parameters.elevation += 0.003;

        this.dirLight.intensity += 0.0003;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity += 0.0003;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));

        this.renderer.toneMappingExposure += 0.00020;
        this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));


      }


      if (!this.rainStart && this.parameters.elevation < 2 && this.parameters.elevation > 1.5) { //
        this.rain = true;
        this.startRain();
        if (this.audioClass.musicOn) this.audioClass.rainAudio.play();
        this.rainStart = true;
      }



      if (this.parameters.elevation < -4.1 && !this.thunderStart) {
        this.thunder = true;
        this.startThunder();        // теперь сама выставляет таймер окончания
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



      const minElevation = -100;
      const maxElevation = 100;

      this.parameters.azimuth = 150;


      this.stars.position.y = this.camera.position.y;

      if (this.prevCameraYSun === undefined) {
        this.prevCameraYSun = this.camera.position.y;
      }

      const deltaY = this.camera.position.y - this.prevCameraYSun;

      // Инвертируем изменение elevation относительно движения камеры по Y
      this.parameters.elevation -= deltaY * 0.05;

      //this.stars.material.opacity -= deltaY * 0.1;
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



      // Ограничиваем диапазон elevation (по желанию)
      // this.parameters.elevation = Math.max(minElevation, Math.min(maxElevation, this.parameters.elevation));

      // Обновляем prevCameraYSun для следующего кадра!
      this.prevCameraYSun = this.camera.position.y;

      if (this.camera.position.y > 30) {
        this.night = true;
      }
      else {
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
    //this.scene.add(this.ambientLight);
    await this.loadWaterSky()
    await this.loadRain()
    this.scene.add(this.hemiLight);
    this.scene.add(this.dirLight);
    this.scene.add(this.targetObject);
    this.scene.add(this.water);

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

    // --- ГРОЗА: управление без setTimeout
    if (this.thunder) {
      // если пришло время — делаем вспышку
      if (nowMs >= this.nextThunderFlashTimestampMs) {
        this.triggerThunderFlashNow();
        this.scheduleNextThunderFlash(nowMs);
      }

      // если время грозы вышло — выключаем её
      if (nowMs >= this.thunderEndTimestampMs) {
        this.thunder = false;
        this.isThunderActive = false;
      }
    }

    this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10);
    this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);

    // // Обновление камеры теней
    const d = 10; // Размер камеры теней
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
      this.lightningFade -= this.deltaSeconds * 1.7; // 0.5 сек (1 / 2.0 = 0.5)
      this.lightningFade = Math.max(0, this.lightningFade);
      this.renderer.toneMappingExposure = 0.03 + this.lightningFade * 0.97;
    }

    if (this.rain) {
      // --- RAIN: update
      const rainPositionAttr = this.rainGeometry.getAttribute("position");
      const windGlobal = Math.sin(performance.now() * 0.0012) * 0.8;  // общий ветер
      const cameraCenterX = this.camera.position.x;
      const cameraCenterZ = this.camera.position.z;

      for (let i = 0; i < this.rainDropCount; i++) {
        const baseIndex = i * 3;

        // горизонтальный сдвиг: общий ветер + индивидуальная волна
        const windLocal = Math.sin(this.rainWindPhase[i] + performance.now() * 0.002) * 0.35 + windGlobal * 0.4;
        this.rainPositions[baseIndex + 0] += windLocal * this.deltaSeconds * 8.0;

        // падение вниз
        this.rainPositions[baseIndex + 1] -= this.rainVelocities[i] * (1.0 + Math.abs(windGlobal) * 0.3) * this.deltaSeconds;

        // привязка “облака” к камере, чтобы частицы не улетали вдаль
        const worldX = cameraCenterX + this.rainPositions[baseIndex + 0];
        const worldZ = cameraCenterZ + this.rainPositions[baseIndex + 2];

        // ресет капли снизу вверх
        if (this.rainPositions[baseIndex + 1] < this.rainBottomY) {
          this.rainPositions[baseIndex + 1] = this.rainTopY;
          this.rainPositions[baseIndex + 0] = (Math.random() - 0.5) * this.rainAreaHalfWidth * 2;
          this.rainPositions[baseIndex + 2] = (Math.random() - 0.5) * this.rainAreaHalfDepth * 2 - 35;
          this.rainWindPhase[i] = Math.random() * Math.PI * 2;
        }

        // переносим “облако” за камерой, если вышли за края (циклическая зона)
        if (this.rainPositions[baseIndex + 0] > this.rainAreaHalfWidth) this.rainPositions[baseIndex + 0] -= this.rainAreaHalfWidth * 2;
        if (this.rainPositions[baseIndex + 0] < -this.rainAreaHalfWidth) this.rainPositions[baseIndex + 0] += this.rainAreaHalfWidth * 2;
        if (this.rainPositions[baseIndex + 2] > this.rainAreaHalfDepth) this.rainPositions[baseIndex + 2] -= this.rainAreaHalfDepth * 2 - 35;
        if (this.rainPositions[baseIndex + 2] < -this.rainAreaHalfDepth) this.rainPositions[baseIndex + 2] += this.rainAreaHalfDepth * 2 - 35;
      }

      // центрируем облако у камеры и помечаем апдейт
      this.rainPoints.position.set(cameraCenterX, 0, cameraCenterZ);
      rainPositionAttr.needsUpdate = true;
    }


    this.waterUpdate();
    this.updateSky();

  }

  startRain() {
    if (this.isRainActive) return;

    this.scene.add(this.rainPoints);
    this.isRainActive = true;

    const nowMs = performance.now();
    this.rainEndTimestampMs = nowMs + 70000; // дождь длится 15 секунд (можешь менять)
  }


  startThunder() {
    if (!this.thunder) return;

    const nowMs = performance.now();

    // Запускаем «сессию» грозы на 16 секунд (как было в setTimeout)
    this.isThunderActive = true;
    this.thunderEndTimestampMs = nowMs + 16000;

    // Мгновенно даём первую вспышку, чтобы ощущалось реактивно
    this.triggerThunderFlashNow();

    // Планируем следующую вспышку уже через случайный интервал
    this.scheduleNextThunderFlash(nowMs);
  }

  // Вспышка + звук прямо сейчас
  triggerThunderFlashNow() {
    if (!this.thunder) return;

    // звук
    const audioList = this.audioClass.thundersAudio;
    if (audioList && audioList.length > 0) {
      const sound = audioList[this.currentThunderIndex % audioList.length].music;
      if (sound.isPlaying) sound.stop();
      if (this.audioClass.musicOn) sound.play();
      this.currentThunderIndex++;
    }

    // вспышка и экспозиция
    this.triggerLightningFlash();
    this.lightningFade = 1.0;
  }

  // Назначить время следующей вспышки
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




    // Простейший перпендикуляр (в плоскости XZ) для поперечного смещения



    // Направление основного ствола
    const dirX = endX - startX;
    const dirY = endY - startY;
    const dirZ = endZ - startZ;
    const dirLen = Math.hypot(dirX, dirY, dirZ) || 1;
    const tx = dirX / dirLen, ty = dirY / dirLen, tz = dirZ / dirLen; // tangent

    const normX = dirX / dirLen, normY = dirY / dirLen, normZ = dirZ / dirLen;
    const perpX = -normZ, perpY = 0, perpZ = normX;

    // Строим два ортонормальных перпендикуляра к стволу (перп и бинормаль)
    const upGuess = Math.abs(ty) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
    const tangent = new THREE.Vector3(tx, ty, tz);
    const perp1 = new THREE.Vector3().crossVectors(tangent, upGuess).normalize();   // первый перпендикуляр
    const perp2 = new THREE.Vector3().crossVectors(tangent, perp1).normalize();     // второй перпендикуляр (бинормаль)

    // Параметры волн изгиба (можно подкрутить)
    const waveFreq1 = 2.0 + Math.random() * 2.0;   // частота волны 1
    const waveAmp1 = 1.2;                         // амплитуда волны 1
    const wavePhase1 = Math.random() * Math.PI * 2;

    const waveFreq2 = 3.0 + Math.random() * 2.5;   // частота волны 2
    const waveAmp2 = 0.8;                         // амплитуда волны 2
    const wavePhase2 = Math.random() * Math.PI * 2;

    const segmentCount = 28;        // можно оставить как у тебя
    const baseAmplitude = 4.0;      // базовый поперечный шум в начале
    const positions = [];

    // Генерим ломаную со спадающей амплитудой и редкими резкими изломами
    for (let i = 0; i <= segmentCount; i++) {
      const t = i / segmentCount;
      const decay = 1.0 - t; // шум убывает к концу

      // базовая точка на отрезке
      let px = startX + dirX * t;
      let py = startY + dirY * t;
      let pz = startZ + dirZ * t;

      // синус-изгибы вдоль траектории (в двух перпендикулярных осях)
      const bend1 = Math.sin(t * Math.PI * waveFreq1 + wavePhase1) * waveAmp1 * (0.3 + 0.7 * decay);
      const bend2 = Math.sin(t * Math.PI * waveFreq2 + wavePhase2) * waveAmp2 * (0.3 + 0.7 * decay);

      // случайный рваный шум + редкий “спайк”
      const jitter1 = (Math.random() - 0.5) * 2.0 * baseAmplitude * decay;
      const jitter2 = (Math.random() - 0.5) * 1.6 * baseAmplitude * decay;
      const spike = Math.random() < 0.12 ? (Math.random() - 0.5) * 3.5 * decay : 0;

      // суммарное поперечное смещение
      px += perp1.x * (bend1 + jitter1 + spike) + perp2.x * (bend2 + jitter2 * 0.7);
      py += perp1.y * (bend1 + jitter1 * 0.5) + perp2.y * (bend2 + jitter2 * 0.5);
      pz += perp1.z * (bend1 + jitter1 + spike) + perp2.z * (bend2 + jitter2 * 0.7);

      positions.push(px, py, pz);

      // Короткая боковая ветка с небольшой вероятностью
      if (i > 3 && i < segmentCount - 3 && Math.random() < 0.22) {
        const branchPositions = [];
        const branchSteps = 3 + Math.floor(Math.random() * 2);
        const branchScale = 0.25 + Math.random() * 0.35;

        let bx = px, by = py, bz = pz;
        branchPositions.push(bx, by, bz);
        for (let s = 1; s <= branchSteps; s++) {
          bx += (Math.random() - 0.5) * baseAmplitude * branchScale;
          by += -(0.8 + Math.random() * 0.8) * branchScale; // вниз
          bz += (Math.random() - 0.5) * baseAmplitude * branchScale;
          branchPositions.push(bx, by, bz);
        }
        const branchGeometry = new THREE.BufferGeometry();
        branchGeometry.setAttribute("position", new THREE.Float32BufferAttribute(branchPositions, 3));
        const branchLine = new THREE.Line(branchGeometry, this.lightningMaterialBase.clone());
        branchLine.material.opacity = 0.6;                  // слабее основного
        branchLine.userData.life = 0.16 + Math.random() * 0.12;
        this.scene.add(branchLine);

        this.activeLightningLines.push(branchLine);
      }
    }

    // Псевдо-толщина с веером и электрическим изгибом
    const duplicateCount = 2; // 2–3 копии хватает
    for (let d = -1; d <= duplicateCount; d++) {
      const isCore = (d === -1);
      const offsetDirection = isCore ? 0 : (d % 2 === 0 ? 1 : -1); // вправо/влево
      const baseSpread = 0.55 + Math.random() * 0.45;             // базовый разлёт
      const waveAmplitude = 0.35;                                  // амплитуда волны
      const wavePhase = Math.random() * Math.PI * 2;               // фаза для различия копий

      const jittered = [];
      const pointCount = positions.length / 3;

      for (let i = 0; i < pointCount; i++) {
        const t = i / (pointCount - 1); // 0..1 вдоль молнии (к концу — больше разлёт)

        // направленное смещение в плоскости перпендикулярной стволу
        const fanScale = (0.35 + 0.85 * t); // к концу шире
        const sineBend = Math.sin(t * Math.PI * 2 + wavePhase) * waveAmplitude * (0.2 + 0.8 * t);

        const offsetX = perpX * offsetDirection * baseSpread * fanScale + perpZ * sineBend * 0.3;
        const offsetY = perpY * offsetDirection * baseSpread * fanScale + sineBend * 0.05; // чуть-чуть по Y
        const offsetZ = perpZ * offsetDirection * baseSpread * fanScale - perpX * sineBend * 0.3;

        const ix = i * 3 + 0;
        const iy = i * 3 + 1;
        const iz = i * 3 + 2;

        const baseX = positions[ix];
        const baseY = positions[iy];
        const baseZ = positions[iz];

        if (isCore) {
          // ядро без направленного смещения, только микро-джиттер чтобы не было идеально ровным
          jittered.push(
            baseX + (Math.random() - 0.5) * 0.05,
            baseY + (Math.random() - 0.5) * 0.05,
            baseZ + (Math.random() - 0.5) * 0.05
          );
        } else {
          // копии — в стороны + волновой изгиб
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
      line.material.opacity = isCore ? 0.95 : 0.32; // ядро ярче, копии мягче
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



  makeRainStreakTexture() {
    const width = 2;   // ширина капли (узкая)
    const height = 40; // длина капли
    const data = new Uint8Array(width * height * 4);

    for (let y = 0; y < height; y++) {
      const alpha = Math.pow(Math.sin((y / (height - 1)) * Math.PI), 1.5); // мягкий градиент
      for (let x = 0; x < width; x++) {
        const i = (y * width + x) * 4;
        data[i + 0] = 255;
        data[i + 1] = 255;
        data[i + 2] = 255;
        data[i + 3] = Math.round(alpha * 255);
      }
    }

    const tex = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
    tex.needsUpdate = true;
    tex.magFilter = THREE.LinearFilter;
    tex.minFilter = THREE.LinearFilter;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    tex.rotation = Math.PI / 2; // ← ПОВОРАЧИВАЕМ штрих вертикально
    tex.center.set(0.5, 0.5);   // чтобы поворот происходил из центра
    return tex;
  }


}

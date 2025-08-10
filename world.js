import * as THREE from "three";
import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';

export class WorldClass {
  constructor(scene, camera, levelClass, renderer) {
    this.scene = scene;
    this.camera = camera;
    this.levelClass = levelClass;
    this.renderer = renderer;

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

    const width = 50;
    const height = 50;
    const intensity = 2;
    this.pointLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
    this.pointLight.position.set(30, 40, 0);
    this.pointLight.lookAt(0, 0, 0);


  }


  async loadWaterSky() {


    this.waterGeometry = new THREE.PlaneGeometry(1000, 500);

    this.water = new Water(
      this.waterGeometry,
      {
        textureWidth: 500,
        textureHeight: 500,
        waterNormals: new THREE.TextureLoader().load('textures/waternormals.jpg', function (texture) {

          texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

        }),
        sunDirection: new THREE.Vector3(),
        sunColor: 0xffffff,
        waterColor: 0x001e4f,
        distortionScale: 0.5,

        fog: this.scene.fog !== undefined
      }
    );

    this.water.rotation.x = - Math.PI / 2;
    this.water.position.y = 0;

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

    this.stars.position.x = this.camera.position.x;


    const phi = THREE.MathUtils.degToRad(90 - this.parameters.elevation);
    const theta = THREE.MathUtils.degToRad(this.parameters.azimuth);
    this.sun.setFromSphericalCoords(1, phi, theta);

    this.sky.material.uniforms['sunPosition'].value.copy(this.sun);
    this.water.material.uniforms['sunDirection'].value.copy(this.sun).normalize();

    if (this.levelClass.gameDir == 'hor') {
      if (this.sun.y < -0.07 && this.materialStars.uniforms.opacity.value < 1) {
        this.materialStars.uniforms.opacity.value += 0.001;
        if (this.blackSky.material.opacity < 0.8) this.blackSky.material.opacity += 0.001;
      }
      else if (this.sun.y > -0.07 && this.materialStars.uniforms.opacity.value > 0) {
        this.materialStars.uniforms.opacity.value -= 0.001;
        this.blackSky.material.opacity -= 0.001;
      }

      if (this.parameters.elevation < -8) {
        //this.parameters.azimuth = 150;
        this.parameters.top = true;

      }
      else if (this.parameters.elevation > 6) {
        //this.parameters.azimuth = 150;
        this.parameters.top = false;
      }

      if (!this.parameters.top) {
        //this.parameters.azimuth -= 3;
        this.parameters.elevation -= 0.003;

        this.dirLight.intensity -= 0.0003;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity -= 0.0003;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));

        this.renderer.toneMappingExposure -= 0.0003;
        this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));

        

        
      }
      else {
        //this.parameters.azimuth += 0.03;
        this.parameters.elevation += 0.003;

        this.dirLight.intensity += 0.0003;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity += 0.0003;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));

        this.renderer.toneMappingExposure += 0.00024;
        this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));

        
      }
    }

console.log(this.renderer.toneMappingExposure);



    if (this.levelClass.gameDir == 'vert') {

      const minElevation = -100;
      const maxElevation = 100;

      this.parameters.azimuth = 150;


      this.stars.position.y = this.camera.position.y;

      if (this.prevCameraYSun === undefined) {
        this.prevCameraYSun = this.camera.position.y;
      }

      const deltaY = this.camera.position.y - this.prevCameraYSun;

      // Инвертируем изменение elevation относительно движения камеры по Y
      this.parameters.elevation -= deltaY * 0.01;

      //this.stars.material.opacity -= deltaY * 0.1;
      this.blackSky.material.opacity += deltaY * 0.01;
      this.materialStars.uniforms.opacity.value += deltaY * 0.003;

      if (this.camera.position.y < this.topLight && deltaY < 0) {
        this.dirLight.intensity -= deltaY * 0.03;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity -= deltaY * 0.03;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));
        
        this.renderer.toneMappingExposure -= deltaY * 0.03;
        this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));
      }
      else if (this.topLight && deltaY > 0) {
        this.dirLight.intensity -= deltaY * 0.03;
        this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity));
        this.hemiLight.intensity -= deltaY * 0.03;
        this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity));

        this.renderer.toneMappingExposure -= deltaY * 0.03;
        this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure));

        
        
      }

      if (this.dirLight.intensity > 0.55 && this.dirLight.intensity < 0.57) {
        this.topLight = this.camera.position.y
        

      }



      // Ограничиваем диапазон elevation (по желанию)
      this.parameters.elevation = Math.max(minElevation, Math.min(maxElevation, this.parameters.elevation));

      // Обновляем prevCameraYSun для следующего кадра!
      this.prevCameraYSun = this.camera.position.y;
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
    this.scene.add(this.hemiLight);
    this.scene.add(this.dirLight);
    this.scene.add(this.targetObject);
    this.scene.add(this.water);
    //this.scene.add(this.pointLight);
    // scene.add(helper);
  }


  updateLighting() {
    this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10);
    this.dirLight.position.set(this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.x, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.y + 2, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.z);

    // // Обновление камеры теней
    const d = 10; // Размер камеры теней
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;


    //this.pointLight.lookAt(this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)])

    this.waterUpdate();
    this.updateSky();
  }




}
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


    this.targetObject = new THREE.Object3D();


    this.dirLight.target = this.targetObject;

    this.helper = new THREE.DirectionalLightHelper(this.dirLight, 3);

    this.day = false;


    this.water;
    this.waterGeometry = new THREE.PlaneGeometry(100, 100);

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
        distortionScale: 1,

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

    this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);



    this.plane = new THREE.Mesh(new THREE.PlaneGeometry(10000, 10000), new THREE.MeshBasicMaterial({ color: 0x0000, side: THREE.DoubleSide, transparent: true, opacity: 0 }));
    this.plane.position.z = -1000
    this.scene.add(this.plane);



    const count = 1000;

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[3 * i] = Math.random() * 800 - 400;
      positions[3 * i + 1] = Math.random() * 400 - 200;
      positions[3 * i + 2] = Math.random() * 100 - 500;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.3, transparent: true, opacity: 0 });

    this.points = new THREE.Points(geometry, material);
    this.points.layers.set(1);
    this.camera.layers.enable(1);
    this.scene.add(this.points);


  }

  updateSun() {

    

    const phi = THREE.MathUtils.degToRad(90 - this.parameters.elevation);
    const theta = THREE.MathUtils.degToRad(this.parameters.azimuth);
    this.sun.setFromSphericalCoords(1, phi, theta);

    

    this.sky.material.uniforms['sunPosition'].value.copy(this.sun);
    this.water.material.uniforms['sunDirection'].value.copy(this.sun).normalize();

    

    if (this.levelClass.gameDir == 'hor') {
      if (this.sun.y < -0.05 && this.points.material.opacity < 1) {
        this.points.material.opacity += 0.001;
        this.plane.material.opacity += 0.01;
      }
      else if (this.sun.y > -0.05 && this.points.material.opacity > 0) {
        this.points.material.opacity -= 0.01;
        this.plane.material.opacity -= 0.1;
      }

      if (this.parameters.elevation < -8) {
        //this.parameters.azimuth = 150;
        this.parameters.top = true;
        this.day ? this.day = false : this.day = true;

      }
      else if (this.parameters.elevation > 8) {
        //this.parameters.azimuth = 150;
        this.parameters.top = false;
      }

      if (!this.parameters.top) {
        //this.parameters.azimuth -= 3;
        this.parameters.elevation -= 0.003;
      }
      else {
        //this.parameters.azimuth += 0.03;
        this.parameters.elevation += 0.003;
        // if (this.day) {
        //   if (this.sky.material.uniforms['rayleigh'].value > 0) this.sky.material.uniforms['rayleigh'].value -= 0.05;
        //   else this.sky.material.uniforms['rayleigh'].value = 0
        // }
        // else {
        //   if (this.sky.material.uniforms['rayleigh'].value < 3) this.sky.material.uniforms['rayleigh'].value += 0.05;
        //   else this.sky.material.uniforms['rayleigh'].value = 3
        // }
      }
    }





    //console.log(this.sky.material.uniforms['rayleigh'].value);


    // const minElevation = -100;
    // const maxElevation = 100;

    // if (this.prevCameraYSun === undefined) {
    //   this.prevCameraYSun = this.camera.position.y;
    // }

    // const deltaY = this.camera.position.y - this.prevCameraYSun;

    // // Инвертируем изменение elevation относительно движения камеры по Y
    // this.parameters.elevation -= deltaY * 0.001;
    // console.log(this.prevCameraYSun)

    // // Ограничиваем диапазон elevation (по желанию)
    // //this.parameters.elevation = Math.max(minElevation, Math.min(maxElevation, this.parameters.elevation));

    // this.prevCameraY = this.camera.position.y;




  }

  waterUpdate() {

    const time = performance.now() * 0.001;
    this.water.material.uniforms['time'].value += 0.4 / 60.0;





  }

  loadWorld() {
    //scene.add(ambientLight);
    this.scene.add(this.hemiLight);
    this.scene.add(this.dirLight);
    this.scene.add(this.targetObject);
    this.scene.add(this.water);
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

    // dirLight.shadow.camera.far = 5000; // Убедитесь, что это значение достаточно велико

    this.waterUpdate();
    this.updateSun();
  }






}
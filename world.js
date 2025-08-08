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
    this.waterGeometry = new THREE.PlaneGeometry(10000, 300);

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



    this.blackSky = new THREE.Mesh(new THREE.PlaneGeometry(1000, 1000), new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide, transparent: true, opacity: 0 }));
    this.blackSky.position.z = -1000
    this.scene.add(this.blackSky);




    this.countStars = 1500;

    this.starsGeometry = new THREE.BufferGeometry();
    this.starsPositions = new Float32Array(this.countStars * 3);
    for (let i = 0; i < this.countStars; i++) {
      this.starsPositions[3 * i] = Math.random() * 600 - 300;
      this.starsPositions[3 * i + 1] = Math.random() * 150 - 100;
      this.starsPositions[3 * i + 2] = Math.random() * 300 - 500;
    }
    this.starsGeometry.setAttribute('position', new THREE.BufferAttribute(this.starsPositions, 3));
    this.starsMaterial = new THREE.PointsMaterial({ color: 0x999999, size: Math.random() * (1.0 - 0.3) + 0.3, transparent: true, opacity: 0 });

    this.stars = new THREE.Points(this.starsGeometry, this.starsMaterial);
    this.stars.layers.set(1);
    this.camera.layers.enable(1);
    this.scene.add(this.stars);

    this.flyingStar = Math.floor(Math.random() * Math.round(this.countStars / 3));
    const x = this.starsPositions[this.flyingStar * 3 + 0];
    const y = this.starsPositions[this.flyingStar * 3 + 1];
    const z = this.starsPositions[this.flyingStar * 3 + 2];

    const singleStarGeometry = new THREE.BufferGeometry();
    singleStarGeometry.setAttribute('position', new THREE.Float32BufferAttribute([x, y, z], 3));
    const singleStarMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 1.0, transparent: true, opacity: 0 });
    this.singleStar = new THREE.Points(singleStarGeometry, singleStarMaterial);



    this.singleStar.userData.x = Math.random() * (1.5 - 0.3) + 0.3;

    this.singleStar.layers.set(1);

    this.scene.add(this.singleStar);

  }



  updateSun() {




    this.stars.position.x = this.camera.position.x;


    if (this.stars.material.opacity > 0.9) {
      const positionSingleStar = this.singleStar.geometry.attributes.position.array;



      if (positionSingleStar[1] > 0) {
        //positionSingleStar[2] += 1;
        positionSingleStar[1] -= 2;
        positionSingleStar[0] -= this.singleStar.userData.x;
      }
      else {
        this.flyingStar = Math.floor(Math.random() * Math.round(this.countStars / 3));
        this.singleStar.userData.x = Math.random() * (5.5 - 1.5) + 1.5;
        positionSingleStar[0] = this.starsPositions[this.flyingStar * 3 + 0]
        positionSingleStar[1] = this.starsPositions[this.flyingStar * 3 + 1]
        positionSingleStar[2] = this.starsPositions[this.flyingStar * 3 + 2]

      }
      this.singleStar.geometry.attributes.position.needsUpdate = true;
    }







    const phi = THREE.MathUtils.degToRad(90 - this.parameters.elevation);
    const theta = THREE.MathUtils.degToRad(this.parameters.azimuth);
    this.sun.setFromSphericalCoords(1, phi, theta);

    this.sky.material.uniforms['sunPosition'].value.copy(this.sun);
    this.water.material.uniforms['sunDirection'].value.copy(this.sun).normalize();

    if (this.levelClass.gameDir == 'hor') {
      if (this.sun.y < -0.07 && this.stars.material.opacity < 1) {
        this.stars.material.opacity += 0.001;
        this.singleStar.material.opacity += 0.001;
        if (this.blackSky.material.opacity < 0.8) this.blackSky.material.opacity += 0.001;
      }
      else if (this.sun.y > -0.07 && this.stars.material.opacity > 0) {
        this.stars.material.opacity -= 0.001;
        this.blackSky.material.opacity -= 0.001;
        this.singleStar.material.opacity -= 0.01;
      }

      if (this.parameters.elevation < -8) {
        //this.parameters.azimuth = 150;
        this.parameters.top = true;
        this.day ? this.day = false : this.day = true;

      }
      else if (this.parameters.elevation > 6) {
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
      }
    }





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
      //this.singleStar.material.opacity += 0.001;
      this.blackSky.material.opacity += deltaY * 0.01;
      this.stars.material.opacity += deltaY * 0.01;


      // Ограничиваем диапазон elevation (по желанию)
      this.parameters.elevation = Math.max(minElevation, Math.min(maxElevation, this.parameters.elevation));

      // Обновляем prevCameraYSun для следующего кадра!
      this.prevCameraYSun = this.camera.position.y;
    }

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
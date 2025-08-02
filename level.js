import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { getRandomNumber } from './functions';

import { Water } from 'three/addons/objects/Water.js';
import { Sky } from 'three/addons/objects/Sky.js';

export class LevelClass {
  constructor(scene, audioClass, physicsClass, renderer, camera) {
    this.scene = scene;
    this.audioClass = audioClass;
    this.physicsClass = physicsClass;
    this.renderer = renderer;
    this.camera = camera;
    this.planeWidth = 4;
    this.planeHeight = 10;
    this.geometryPlane = new THREE.BoxGeometry(this.planeWidth * 1.5, this.planeHeight, 1);
    this.materialPlane = new THREE.MeshStandardMaterial({ color: 0x00cc00 });
    this.plane = new THREE.Mesh(this.geometryPlane, this.materialPlane);
    this.plane.receiveShadow = true;
    this.plane.position.y = -this.planeHeight / 2;
    this.plane.userData.name = 'plane';
    this.planes = [];


    this.planeTop = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.6, 1.2), new THREE.MeshStandardMaterial({ color: 0xcccc00, transparent: true, opacity: 0.1 }));
    this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
    this.planeTop.userData.direction = 1;
    this.topPlanes = [];

    this.planeGrass = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.2, 1.2), new THREE.MeshPhongMaterial({ color: 0x00cc00, transparent: true, opacity: 1 }));
    this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
    this.planeGrass.castShadow = true;
    this.planeGrass.receiveShadow = true;
    this.planeGrass.userData.name = 'tops';
    this.planeGrass.userData.direction = 1;
    this.grassPlanes = [];

    this.boostHatModel;
    this.boostHatMesh;
    this.boostHatPropeller;

    this.boostHatModels = [];
    this.boostHatMeshes = [];

    this.players = [];

    this.cloudModel;
    this.clouds = [];

    this.backModel;
    this.backModels = [];


    this.leftEdge = new THREE.Vector3(-1, 0, 0); // NDC: -1 по X (левый экран)
    this.rightEdge = new THREE.Vector3(1, 0, 0); // NDC: +1 по X (правый экран)

    this.leftEdge.unproject(camera);
    this.rightEdge.unproject(camera);





    this.water;
    this.waterGeometry = new THREE.PlaneGeometry(10000, 10000);

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
    this.water.position.y = - 1.5;

    this.sun = new THREE.Vector3();

    this.sky = new Sky();
    this.sky.scale.setScalar(10000);
    //scene.add(sky);

    const skyUniforms = this.sky.material.uniforms;

    skyUniforms['turbidity'].value = 1;
    skyUniforms['rayleigh'].value = 7;
    skyUniforms['mieCoefficient'].value = 0.0005;
    skyUniforms['mieDirectionalG'].value = 0.8;

    this.parameters = {
      elevation: 6,
      azimuth: 150,
      top: false
    };

    this.pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    //this.sceneEnv = new THREE.Scene();

    let renderTarget;


    this.gameNum = 1;
    this.gameDir = 'vert';


  }

  updateSun() {

    const phi = THREE.MathUtils.degToRad(90 - this.parameters.elevation);
    const theta = THREE.MathUtils.degToRad(this.parameters.azimuth);

    this.sun.setFromSphericalCoords(1, phi, theta);

    this.sky.material.uniforms['sunPosition'].value.copy(this.sun);
    this.water.material.uniforms['sunDirection'].value.copy(this.sun).normalize();

    //if (this.renderTarget !== undefined) this.renderTarget.dispose();

    this.scene.add(this.sky);

    // this.renderTarget = this.pmremGenerator.fromScene(this.scene);
    // this.scene.add(this.sky);

    // this.scene.environment = this.renderTarget.texture;

    if (this.parameters.elevation < -5) {
      this.parameters.azimuth = 150;
      this.parameters.top = true;
    }
    else if (this.parameters.elevation > 7) {
      this.parameters.azimuth = 150;
      this.parameters.top = false;
    }

    if (!this.parameters.top) {
      this.parameters.azimuth += 0.01;
      this.parameters.elevation -= 0.001;
    }
    else {
      this.parameters.azimuth += 0.01;
      this.parameters.elevation += 0.001;
    }

  }

  waterUpdate() {
    this.updateSun()
    const time = performance.now() * 0.001;
    this.water.material.uniforms['time'].value += 0.4 / 60.0;
  }

  async loadTexture() {
    const loader = new THREE.TextureLoader();

    loader.load(
      'textures/povrezdennaa-tekstura-ili-fon.jpg',
      (texture) => {
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: 1
        });
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(this.planeWidth / 4, this.planeHeight / 4);
        this.plane.material = material;
      },
      // onProgress callback currently not supported
      undefined,
      function (err) {
        console.error('An error happened.');
      }
    );

    loader.load(
      'textures/povrezdennaa-tekstura-ili-fon.jpg',
      (texture) => {
        const material = new THREE.MeshStandardMaterial({
          map: texture,

        });
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(this.planeWidth / 1, this.planeHeight / 8);
        this.planeGrass.material = material;
      },
      // onProgress callback currently not supported
      undefined,
      function (err) {
        console.error('An error happened.');
      }
    );
  }

  async createLevel() {

    await this.loadTexture()
    await this.loadBoostsModel();
    await this.loadEnvironmentModel();


    switch (this.gameNum) {
      case 1:
      case 2:
        this.gameDir = 'hor'
        let previousX = -2.5; // Начальная позиция по оси X

        for (let i = 0; i < 50; i++) {
          let newPlane = this.plane.clone();
          let newPlaneTop = this.planeTop.clone();
          let newPlaneGrass = this.planeGrass.clone();

          let randomW = getRandomNumber(this.planeWidth / 8, this.planeWidth);
          let fixedDistance = getRandomNumber(2, 4);
          let randomX = previousX + randomW / 2 + fixedDistance; // Увеличиваем позицию на половину ширины и фиксированное расстояние
          let randomY = getRandomNumber(-1, 1) - this.planeHeight / 2;

          if (i > 0) {
            this.changeMeshWidth(newPlane, randomW);
            this.changeMeshWidth(newPlaneTop, randomW + 0.3);
            this.changeMeshWidth(newPlaneGrass, randomW + 0.3);
          }

          if (i > 0) newPlane.position.x = randomX;
          if (i > 0) newPlane.position.y = randomY;

          if (i > 0) newPlaneTop.position.x = randomX;
          if (i > 0) newPlaneTop.position.y = randomY + this.planeHeight / 2 + 0.1;

          if (i > 0) newPlaneGrass.position.x = randomX;
          if (i > 0) newPlaneGrass.position.y = randomY + this.planeHeight / 2;



          this.planes.push(newPlane);
          this.topPlanes.push(newPlaneTop);
          this.grassPlanes.push(newPlaneGrass);

          // Обновляем предыдущую позицию по оси X
          previousX = randomX + randomW / 2; // Устанавливаем предыдущую позицию на половину ширины новой плоскости
        }
        break;




      case 3:
      case 4:

        this.gameDir = 'vert'
        let previousY = -4;

        for (let i = 0; i < 50; i++) {
          let newPlaneTop = this.planeTop.clone();
          let newPlaneGrass = this.planeGrass.clone();

          newPlaneGrass.userData.speed = getRandomNumber(2, 10);

          let randomW = getRandomNumber(this.planeWidth / 8, this.planeWidth * 4);
          let fixedDistance = getRandomNumber(3, 4);

          let randomY = previousY + fixedDistance; // Увеличиваем позицию по Y
          newPlaneTop.position.y = randomY;
          newPlaneGrass.position.y = randomY;

          if (i > 0) {
            this.changeMeshWidth(newPlaneTop, randomW + 0.3);
            this.changeMeshWidth(newPlaneGrass, randomW + 0.3);
          }
          else {
            this.changeMeshWidth(newPlaneTop, 20);
            this.changeMeshWidth(newPlaneGrass, 20);
          }



          this.topPlanes.push(newPlaneTop);
          this.grassPlanes.push(newPlaneGrass);

          previousY = randomY;

        }



        // let previousY = -2.5; // Начальная позиция по оси Y

        // for (let i = 0; i < 50; i++) {
        //  let newPlane = this.plane.clone();
        //  let newPlaneTop = this.planeTop.clone();
        //  let newPlaneGrass = this.planeGrass.clone();

        //  let randomW = getRandomNumber(this.planeWidth / 8, this.planeWidth);
        //  let fixedDistance = getRandomNumber(2, 4);
        //  let randomY = previousY + randomW / 2 + fixedDistance; // Увеличиваем позицию по Y
        //  let randomX = getRandomNumber(-1, 1) - this.planeHeight / 2; // Случайная позиция по X

        //  if (i > 0) {
        //   this.changeMeshWidth(newPlane, randomW);
        //   this.changeMeshWidth(newPlaneTop, randomW + 0.3);
        //   this.changeMeshWidth(newPlaneGrass, randomW + 0.3);
        //  }

        //  if (i > 0) newPlane.position.y = randomY;
        //  if (i > 0) newPlane.position.x = randomX;

        //  if (i > 0) newPlaneTop.position.y = randomY;
        //  if (i > 0) newPlaneTop.position.x = randomX + this.planeHeight / 2 + 0.1;

        //  if (i > 0) newPlaneGrass.position.y = randomY;
        //  if (i > 0) newPlaneGrass.position.x = randomX + this.planeHeight / 2;

        //  this.planes.push(newPlane);
        //  this.topPlanes.push(newPlaneTop);
        //  this.grassPlanes.push(newPlaneGrass);

        //  // Обновляем предыдущую позицию по оси Y
        //  previousY = randomY + randomW / 2; // Устанавливаем предыдущую позицию на половину ширины новой плоскости
        // }
        break;
    }
  }

  animateTops() {
    if (this.gameDir == 'vert') {

      console.log(window.innerWidth)



      for (let i = 0; i < this.grassPlanes.length; i++) {
        this.topPlanes[i].position.copy(this.grassPlanes[i].position);


        if (this.grassPlanes[i].position.x > 7) {
          this.grassPlanes[i].userData.direction = 0;
        }
        else if (this.grassPlanes[i].position.x < -7) {
          this.grassPlanes[i].userData.direction = 1;
        }
        if (this.grassPlanes[i].userData.direction == 0) {
          this.grassPlanes[i].userData.body.setLinvel({ x: -this.grassPlanes[i].userData.speed, y: 0, z: 0 });
        }
        else {
          this.grassPlanes[i].userData.body.setLinvel({ x: this.grassPlanes[i].userData.speed, y: 0, z: 0 });
        }

      }
    }
  }







  changeMeshWidth(mesh, newWidth) {
    // Изменяем ширину геометрии
    mesh.geometry.dispose(); // Освобождаем старую геометрию
    mesh.geometry = new THREE.BoxGeometry(newWidth, mesh.geometry.parameters.height, mesh.geometry.parameters.depth);
  }





  async loadBoostsModel() {
    const gltfLoader = new GLTFLoader();
    const url = 'models/boosts/hat.glb';


    await gltfLoader.loadAsync(url).then((gltf) => {
      const root = gltf.scene;
      this.boostHatModel = root;

      this.boostHatPropeller = this.boostHatModel.children[0].children[1]
      this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];

      this.boostHatModel.rotation.x = Math.PI / 13;
      this.boostHatModel.rotation.y = Math.PI / 2;
      this.boostHatModel.position.y = 2;
      this.boostHatModel.position.x = 4;
      this.boostHatModel.scale.x = 0.015;
      this.boostHatModel.scale.y = 0.015;
      this.boostHatModel.scale.z = 0.015;

      this.boostHatModel.userData.fly = false;
    })
  }








  async loadEnvironmentModel() {
    const gltfLoader = new GLTFLoader();


    const url = 'models/environment/clouds.glb';

    await gltfLoader.loadAsync(url).then((gltf) => {
      const root = gltf.scene;
      this.cloudModel = root;
      this.cloudModel.children.forEach((value, index, array) => {

        value.position.x = index * 3;
        value.position.y = 4;
        value.position.z = -25;
        value.scale.x = 0.9;
        value.scale.y = 0.9;
        value.scale.z = 0.9;
        //this.clouds.push(value)
      })

    })

    // const url2 = 'models/environment/back.glb';/////////////////////////////////////////////////////////////////////???

    // await gltfLoader.loadAsync(url2).then((gltf) => {
    //  const root = gltf.scene;
    //  this.backModel = root;

    //  this.backModel.position.y = -20;
    //  this.backModel.position.z = -40;

    //  // this.boostHatModel.rotation.x = Math.PI / 13;
    //  // this.boostHatModel.rotation.y = Math.PI / 2;
    //  // this.cloudModel.position.y = 3;
    //  // this.cloudModel.position.z = -15;
    //  // this.cloudModel.scale.x = 0.4;
    //  // this.cloudModel.scale.y = 0.4;
    //  // this.cloudModel.scale.z = 0.4;

    //  // this.clouds.push(this.cloudModel)
    // })
  }

  async loadEnvironments() {
    for (let i = 0; i < this.grassPlanes.length; i++) {
      if (this.planes.length == this.grassPlanes.length) {
        this.scene.add(this.planes[i]);
        this.physicsClass.addPhysicsToObject(this.planes[i]);
      }

      this.scene.add(this.grassPlanes[i]);
      this.physicsClass.addPhysicsToObject(this.grassPlanes[i]);
      if (this.gameDir == 'vert') {
        this.grassPlanes[i].userData.collide.setFriction(500)
      }

      this.scene.add(this.topPlanes[i]);
    }

    for (let i = 1; i < 10; i++) {
      let newBoostHatModel = this.boostHatModel.clone();
      newBoostHatModel.position.x = i * 3;
      this.scene.add(newBoostHatModel);
      this.boostHatModels.push(newBoostHatModel);
      this.boostHatMeshes.push(newBoostHatModel.children[0].children[0].children[0]);
    }

    this.clouds.forEach((value, index, array) => {
      this.scene.add(value);
    })

    this.scene.add(this.water);
  }


  levelAnimate(camera) {
    this.animateTops();

    this.boostHatModels.forEach((value, index, array) => {
      value.children[0].children[1].rotation.y += 0.05;
    })

    const frustum = new THREE.Frustum();
    const cameraViewProjectionMatrix = new THREE.Matrix4();
    cameraViewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);



    if (this.clouds.length > 0 && this.clouds[0].position.x < camera.position.x && !frustum.intersectsObject(this.clouds[0])) {
      this.clouds[0].position.copy(new THREE.Vector3(
        this.clouds[this.clouds.length - 1].position.x + 10,
        this.clouds[this.clouds.length - 1].position.y,
        this.clouds[this.clouds.length - 1].position.z,
      ));
      this.clouds.push(this.clouds.shift())
    }

    if (this.clouds.length > 0) {
      this.clouds.forEach((value, index, array) => {
        value.position.x -= 0.02;
      })
    }

  }




  maxSpeed() {
    let players = this.players;
    if (players.length === 0) return -1; // Если массив пустой, возвращаем -1

    let maxIndex = 0; // Начинаем с первого элемента
    let maxValue = players[0].player.position.x; // Сохраняем значение первого элемента

    for (let i = 1; i < players.length; i++) {
      // Проверяем, существует ли player и его position
      if (players[i].player && players[i].player.position) {
        if (players[i].player.position.x > maxValue) {
          maxValue = players[i].player.position.x; // Обновляем максимальное значение
          maxIndex = i; // Обновляем индекс максимального значения
        }
      } else {
        console.warn(`Player at index ${i} is missing player or position properties.`);
      }
    }

    return maxIndex; // Возвращаем индекс элемента с максимальным значением
  }


  async loadPlayers() {

    for (let i = 0; i < this.players.length; i++) {
      let player = this.players[i];
      player.player.position.x = player.player.position.x + i * 1;
      this.physicsClass.addPhysicsToObject(player.player);
      if (this.gameDir == 'vert') {
        player.player.userData.collider.setFriction(500)
      }
      await player.loadPlayerModel();

      player.player.userData.startPos = player.player.position.clone();

      this.scene.add(player.player);
      this.scene.add(player.playerOut);
      this.scene.add(player.playerModel);

      this.topPlanes.push(player.playerOut);

      this.scene.add(player.playerModel)


      if (i < this.players[0].playerColors.length) {
        player.head.children[0].material.color.set(this.players[0].playerColors[i]);
      }
      else {
        this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors);
      }

      player.player.userData.audio.push(this.audioClass.readyJumpAudio.clone())
      if (this.audioClass.quacks.length > i) player.player.userData.audio.push(this.audioClass.quacks[i].clone())
      else player.player.userData.audio.push(this.audioClass.quacks[0].clone())
    }
  }


  cameraMove(camera) {

    // camera.position.set(levelClass.players[maxSpeed(players)].player.position.x - 0, 0 + 1, 15)
    // camera.lookAt(levelClass.players[maxSpeed(players)].player.position)

    // camera.position.set(players[0].player.position.x + 2, players[0].player.position.y + 5, 15)
    // camera.lookAt(players[0].player.position)

    //camera.position.x += 0.03;




    console.log(this.rightEdge);



    switch (this.gameNum) {
      case 1:
        camera.position.x += 0.03;
        camera.position.y = 2;
        camera.position.z = 17;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 2:
        camera.position.x = this.players[this.maxSpeed(this.players)].player.position.x;
        camera.position.y = 2;
        camera.position.z = 17;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 3:
        camera.position.y += 0.01;
        camera.position.x = 0;
        camera.position.z = 27;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 4:
        camera.position.y = this.players[this.maxSpeed(this.players)].player.position.y;
        camera.position.x = 0;
        camera.position.z = 27;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
    }

  }

}





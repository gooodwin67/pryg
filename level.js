import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { getRandomNumber } from './functions';

export class LevelClass {
  constructor(scene, audioClass, physicsClass, renderer, camera, isMobile) {
    this.scene = scene;
    this.audioClass = audioClass;
    this.physicsClass = physicsClass;
    this.renderer = renderer;
    this.camera = camera;
    this.isMobile = isMobile;
    this.planeWidth = 4;
    this.planeHeight = 10;
    this.geometryPlane = new THREE.BoxGeometry(this.planeWidth * 1.5, this.planeHeight, 1);
    this.materialPlane = new THREE.MeshStandardMaterial({ color: 0x00cc00 });
    this.plane = new THREE.Mesh(this.geometryPlane, this.materialPlane);
    this.plane.receiveShadow = true;
    this.plane.position.y = -this.planeHeight / 2;
    this.plane.userData.name = 'plane';
    this.planes = [];


    this.planeTop = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.4, 1.2), new THREE.MeshStandardMaterial({ color: 0xcccc00, transparent: true, opacity: 0.0 }));
    this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
    this.planeTop.userData.direction = 1;
    this.topPlanes = [];

    this.planeGrass = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.5, 1.2), new THREE.MeshPhongMaterial({ color: 0x00cc00, transparent: true, opacity: 1 }));
    this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
    this.planeGrass.castShadow = true;
    this.planeGrass.receiveShadow = true;
    this.planeGrass.userData.name = 'tops';
    this.planeGrass.userData.direction = 1;
    this.grassPlanes = [];

    this.planeSensor = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.4, 1.2), new THREE.MeshPhongMaterial({ color: 0x00ff00, transparent: true, opacity: 0.0 }));
    this.planeSensor.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
    this.planeSensor.userData.name = 'top_sensor';

    this.sensorPlanes = [];

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

    this.bounds;
    this.getHorizontalWorldBounds()





    let renderTarget;


    this.gameNum = 1;
    this.gameDir = 'vert';


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

    this.cameraMove(this.camera);
    this.getHorizontalWorldBounds();

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
          let fixedDistance = getRandomNumber(2, 3);
          let randomX = previousX + randomW / 2 + fixedDistance; // Увеличиваем позицию на половину ширины и фиксированное расстояние
          let randomY = getRandomNumber(-1, 1) - this.planeHeight / 2;

          if (i > 0) {
            this.changeMeshWidth(newPlane, randomW);
            this.changeMeshWidth(newPlaneTop, randomW + 0.3);
            this.changeMeshWidth(newPlaneGrass, randomW + 0.3);

          }
          if (i > 0) {
            newPlane.position.x = randomX;
            newPlane.position.y = randomY + this.planeHeight / 6;

            newPlaneTop.position.x = randomX;
            newPlaneTop.position.y = randomY + this.planeHeight / 1.5 + 0.2;

            newPlaneGrass.position.x = randomX;
            newPlaneGrass.position.y = randomY + this.planeHeight / 1.5;
          }
          else {
            newPlaneTop.position.y = newPlaneGrass.position.y + 0.2;
          }





          this.planes.push(newPlane);
          this.topPlanes.push(newPlaneTop);
          this.grassPlanes.push(newPlaneGrass);



          previousX = randomX + randomW / 2;
        }
        break;

      case 3:
      case 4:

        this.gameDir = 'vert'
        let previousY = -4;

        for (let i = 0; i < 50; i++) {
          let newPlaneTop = this.planeTop.clone();
          let newPlaneGrass = this.planeGrass.clone();
          let newPlaneSensor = this.planeSensor.clone();

          newPlaneGrass.userData.speed = getRandomNumber(4, 10) / 100;

          let randomW = getRandomNumber(this.bounds.rightX / 2, this.bounds.rightX / 12);
          let fixedDistance = getRandomNumber(3, 4);

          let randomY = previousY + fixedDistance; // Увеличиваем позицию по Y
          newPlaneTop.position.y = randomY;
          newPlaneGrass.position.y = randomY;
          newPlaneSensor.position.y = randomY;

          if (i > 0) {
            this.changeMeshWidth(newPlaneTop, randomW + 0.3);
            this.changeMeshWidth(newPlaneGrass, randomW + 0.3);
            this.changeMeshWidth(newPlaneSensor, randomW + 0.5);
          }
          else {
            this.changeMeshWidth(newPlaneTop, 10);
            this.changeMeshWidth(newPlaneGrass, 10);
            this.changeMeshWidth(newPlaneSensor, 10);
          }

          this.topPlanes.push(newPlaneTop);
          this.grassPlanes.push(newPlaneGrass);
          this.sensorPlanes.push(newPlaneSensor);

          previousY = randomY;

        }

        break;
    }
  }

  getHorizontalWorldBounds(z = 0) {
    const ndcLeft = new THREE.Vector3(-1, 0, 0.5); // левый край в NDC
    const ndcRight = new THREE.Vector3(1, 0, 0.5); // правый край в NDC

    // Преобразуем в мировые координаты
    ndcLeft.unproject(this.camera);
    ndcRight.unproject(this.camera);

    // Если платформа не на камере, проецируем на плоскость Z = нужная глубина
    if (this.camera.isPerspectiveCamera) {
      const cameraPos = this.camera.position;

      const dirLeft = ndcLeft.clone().sub(cameraPos).normalize();
      const dirRight = ndcRight.clone().sub(cameraPos).normalize();

      const distance = (z - cameraPos.z) / dirLeft.z;

      const worldLeft = cameraPos.clone().add(dirLeft.multiplyScalar(distance));
      const worldRight = cameraPos.clone().add(dirRight.multiplyScalar(distance));

      this.bounds = {
        leftX: worldLeft.x,
        rightX: worldRight.x
      };

    }

  }

  animateTops() {

    if (this.gameDir == 'vert') {

      for (let i = 0; i < this.grassPlanes.length; i++) {
        const grass = this.grassPlanes[i];
        const top = this.topPlanes[i];
        const body = grass.userData.body;
        const speed = grass.userData.speed;

        const currentPos = body.translation();

        // Используем реальные границы экрана
        if (currentPos.x > this.bounds.rightX - grass.userData.size.x / 2) {
          grass.userData.direction = -1;
        } else if (currentPos.x < this.bounds.leftX + grass.userData.size.x / 2) {
          grass.userData.direction = 1;
        }

        const moveX = grass.userData.direction * speed;
        const newX = currentPos.x + moveX;

        if (i > 0) {
          body.setNextKinematicTranslation({
            x: newX,
            y: currentPos.y,
            z: currentPos.z
          });
        }

        this.sensorPlanes[i].position.set(newX, currentPos.y - 0.2, currentPos.z)


        top.position.set(newX, currentPos.y + 0.6, currentPos.z);
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


        this.scene.add(this.sensorPlanes[i]);
      }

      this.scene.add(this.topPlanes[i]);
    }

    for (let i = 1; i < 10; i++) {
      let newBoostHatModel = this.boostHatModel.clone();
      if (this.gameDir == 'vert') {
        newBoostHatModel.position.y = i * 3;
      }
      else {
        newBoostHatModel.position.x = i * 3;
      }
      this.scene.add(newBoostHatModel);
      this.boostHatModels.push(newBoostHatModel);
      this.boostHatMeshes.push(newBoostHatModel.children[0].children[0].children[0]);
    }

    this.clouds.forEach((value, index, array) => {
      this.scene.add(value);
    })


  }


  levelAnimate() {
    this.animateTops();

    this.boostHatModels.forEach((value, index, array) => {
      value.children[0].children[1].rotation.y += 0.05;
    })

  }




  maxSpeed() {
    let players = this.players;
    if (players.length === 0) return -1; // Если массив пустой, возвращаем -1

    let maxIndex = 0; // Начинаем с первого элемента
    let maxValue;
    if (this.gameDir == 'vert') {
      maxValue = players[0].player.position.y;
    }
    else {
      maxValue = players[0].player.position.x;
    }

    for (let i = 1; i < players.length; i++) {
      // Проверяем, существует ли player и его position
      if (players[i].player && players[i].player.position) {
        if (this.gameDir == 'vert') {
          if (players[i].player.position.y > maxValue) {
            maxValue = players[i].player.position.y; // Обновляем максимальное значение
            maxIndex = i; // Обновляем индекс максимального значения
          }
        }
        else {
          if (players[i].player.position.x > maxValue) {
            maxValue = players[i].player.position.x; // Обновляем максимальное значение
            maxIndex = i; // Обновляем индекс максимального значения
          }
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

    switch (this.gameNum) {
      case 1:
        camera.position.x += 0.03;
        camera.position.y = this.isMobile ? 5 : 4;
        camera.position.z = this.isMobile ? 17 : 19;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 2:
        camera.position.x = this.players[this.maxSpeed(this.players)].player.position.x;
        camera.position.y = this.isMobile ? 5 : 4;
        camera.position.z = this.isMobile ? 17 : 19;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 3:
        camera.position.y += 0.01;
        camera.position.x = 0;
        camera.position.z = this.isMobile ? 20 : 22;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 4:
        camera.position.y = this.players[this.maxSpeed(this.players)].player.position.y + 2;
        camera.position.x = 0;
        camera.position.z = this.isMobile ? 20 : 22;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
    }

  }

}





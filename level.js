import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { getRandomNumber } from './functions';

import { Water } from 'three/addons/objects/Water.js';

export class LevelClass {
 constructor(scene, audioClass, physicsClass) {
  this.scene = scene;
  this.audioClass = audioClass;
  this.physicsClass = physicsClass;
  this.planeWidth = 4;
  this.planeHeight = 10;
  this.geometryPlane = new THREE.BoxGeometry(this.planeWidth * 1.5, this.planeHeight, 1);
  this.materialPlane = new THREE.MeshStandardMaterial({ color: 0x00cc00 });
  this.plane = new THREE.Mesh(this.geometryPlane, this.materialPlane);
  this.plane.receiveShadow = true;
  this.plane.position.y = -this.planeHeight / 2;
  this.plane.userData.name = 'plane';
  this.planes = [];


  this.planeTop = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.6, 1.2), new THREE.MeshStandardMaterial({ color: 0xcccc00, transparent: true, opacity: 0.0 }));
  this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
  this.topPlanes = [];

  this.planeGrass = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.2, 1.2), new THREE.MeshPhongMaterial({ color: 0x00cc00, transparent: true, opacity: 1 }));
  this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
  this.planeGrass.castShadow = true;
  this.planeGrass.receiveShadow = true;
  this.planeGrass.userData.name = 'tops';
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


 }

 waterUpdate() {
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

  let previousX = -2.5; // Начальная позиция по оси X

  for (let i = 0; i < 50; i++) {
   let newPlane = this.plane.clone();
   let newPlaneTop = this.planeTop.clone();
   let newPlaneGrass = this.planeGrass.clone();

   // Генерируем случайную ширину для плоскости
   let randomW = getRandomNumber(this.planeWidth / 8, this.planeWidth);

   // Генерируем случайное расстояние между плоскостями
   let fixedDistance = getRandomNumber(2, 4); // Случайное значение от 2 до 4

   // Устанавливаем позицию по оси X с учетом ширины плоскости и фиксированного расстояния
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
    this.clouds.push(value)
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
  for (let i = 0; i < this.planes.length; i++) {
   this.scene.add(this.planes[i]);
   this.physicsClass.addPhysicsToObject(this.planes[i]);

   this.scene.add(this.grassPlanes[i]);
   this.physicsClass.addPhysicsToObject(this.grassPlanes[i]);

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
  this.boostHatModels.forEach((value, index, array) => {
   value.children[0].children[1].rotation.y += 0.05;
  })

  const frustum = new THREE.Frustum();
  const cameraViewProjectionMatrix = new THREE.Matrix4();
  cameraViewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
  frustum.setFromProjectionMatrix(cameraViewProjectionMatrix);



  if (this.clouds[0].position.x < camera.position.x && !frustum.intersectsObject(this.clouds[0])) {
   this.clouds[0].position.copy(new THREE.Vector3(
    this.clouds[this.clouds.length - 1].position.x + 10,
    this.clouds[this.clouds.length - 1].position.y,
    this.clouds[this.clouds.length - 1].position.z,
   ));
   this.clouds.push(this.clouds.shift())
  }


  this.clouds.forEach((value, index, array) => {
   value.position.x -= 0.02;
  })

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



}





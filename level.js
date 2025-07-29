import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { getRandomNumber } from './functions';

export class LevelClass {
 constructor() {

  this.planeWidth = 4;
  this.planeHeight = 10;
  this.geometryPlane = new THREE.BoxGeometry(this.planeWidth * 1.5, this.planeHeight, 1);
  this.materialPlane = new THREE.MeshStandardMaterial({ color: 0x00cc00 });
  this.plane = new THREE.Mesh(this.geometryPlane, this.materialPlane);
  this.plane.receiveShadow = true;
  this.plane.position.y = -this.planeHeight / 2;
  this.plane.userData.name = 'plane';
  this.planes = [];


  // scene.add(plane);
  // physicsClass.addPhysicsToObject(plane)


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
   let randomW = getRandomNumber(this.planeWidth / 4, this.planeWidth);

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



  const url2 = 'models/environment/back.glb';/////////////////////////////////////////////////////////////////////???

  await gltfLoader.loadAsync(url2).then((gltf) => {
   const root = gltf.scene;
   this.backModel = root;

   this.backModel.position.y = -20;
   this.backModel.position.z = -40;





   // this.boostHatModel.rotation.x = Math.PI / 13;
   // this.boostHatModel.rotation.y = Math.PI / 2;
   // this.cloudModel.position.y = 3;
   // this.cloudModel.position.z = -15;
   // this.cloudModel.scale.x = 0.4;
   // this.cloudModel.scale.y = 0.4;
   // this.cloudModel.scale.z = 0.4;

   // this.clouds.push(this.cloudModel)
  })
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



}





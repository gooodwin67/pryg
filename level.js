import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { getRandomNumber } from './functions';

export class LevelClass {
 constructor() {

  this.planeWidth = 4;
  this.planeHeight = 10;
  this.geometryPlane = new THREE.BoxGeometry(this.planeWidth, this.planeHeight, 1);
  this.materialPlane = new THREE.MeshStandardMaterial({ color: 0x00cc00 });
  this.plane = new THREE.Mesh(this.geometryPlane, this.materialPlane);
  this.plane.receiveShadow = true;
  this.plane.position.y = -this.planeHeight / 2;
  this.plane.userData.name = 'plane';
  this.planes = [];


  // scene.add(plane);
  // physicsClass.addPhysicsToObject(plane)


  this.planeTop = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.2, 0.2), new THREE.MeshStandardMaterial({ color: 0xcccc00, transparent: true, opacity: 0 }));
  this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
  this.topPlanes = [];

  this.planeGrass = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.2, 1.2), new THREE.MeshPhongMaterial({ color: 0x00cc00, transparent: true, opacity: 1 }));
  this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
  this.planeGrass.castShadow = true;
  this.planeGrass.receiveShadow = true;
  this.planeGrass.userData.name = 'plane';
  this.grassPlanes = [];








 }

 async createLevel() {
  let previousX = -4.5; // Начальная позиция по оси X

  for (let i = 0; i < 50; i++) {
   let newPlane = this.plane.clone();
   let newPlaneTop = this.planeTop.clone();
   let newPlaneGrass = this.planeGrass.clone();


   const loader = new THREE.TextureLoader();

   loader.load(
    'textures/ground.jpg',
    (texture) => {
     const material = new THREE.MeshBasicMaterial({
      map: texture,
     });
     texture.wrapS = THREE.RepeatWrapping;
     texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set(this.planeWidth / 2, this.planeHeight / 4);
     newPlane.material = material;
    },
    // onProgress callback currently not supported
    undefined,
    function (err) {
     console.error('An error happened.');
    }
   );

   loader.load(
    'textures/grass.jpg',
    (texture) => {
     const material = new THREE.MeshStandardMaterial({
      map: texture,
     });
     texture.wrapS = THREE.RepeatWrapping;
     texture.wrapT = THREE.RepeatWrapping;
     texture.repeat.set(this.planeWidth / 1, this.planeHeight / 8);
     newPlaneGrass.material = material;
    },
    // onProgress callback currently not supported
    undefined,
    function (err) {
     console.error('An error happened.');
    }
   );




   // Генерируем случайную ширину для плоскости
   let randomW = getRandomNumber(this.planeWidth / 2, this.planeWidth);

   // Генерируем случайное расстояние между плоскостями
   let fixedDistance = getRandomNumber(2, 4); // Случайное значение от 2 до 4

   // Устанавливаем позицию по оси X с учетом ширины плоскости и фиксированного расстояния
   let randomX = previousX + randomW / 2 + fixedDistance; // Увеличиваем позицию на половину ширины и фиксированное расстояние
   let randomY = getRandomNumber(-1, 1) - this.planeHeight / 2;

   this.changeMeshWidth(newPlane, randomW);
   this.changeMeshWidth(newPlaneTop, randomW + 0.3);
   this.changeMeshWidth(newPlaneGrass, randomW + 0.3);

   newPlane.position.x = randomX;
   newPlane.position.y = randomY;

   newPlaneTop.position.x = randomX;
   newPlaneTop.position.y = randomY + this.planeHeight / 2 + 0.1;

   newPlaneGrass.position.x = randomX;
   newPlaneGrass.position.y = randomY + this.planeHeight / 2;



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



}





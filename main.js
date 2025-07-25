// npx vite --host
// npm install vite-plugin-top-level-await --save-dev

// npm run build 
// npm run deploy 

////////////phys/////////


import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import RAPIER from '@dimforge/rapier3d-compat';

import { PlayerClass } from "./player";
import { PhysicsClass } from "./physics";


console.clear();

let world;
let dataLoaded = false;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc9e1f4);
// scene.fog = new THREE.Fog(scene.background, 1, 60);

const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.z = 15;
camera.position.y = 2;



let stats = new Stats();
document.body.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

const ambientLight = new THREE.AmbientLight(0xaaaaaa, 1); // soft white light
//scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 100, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 3);
//dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(1, 2, 0.2);
dirLight.position.multiplyScalar(120);
scene.add(dirLight);




//let controls = new OrbitControls(camera, renderer.domElement);





/*//////////////////////////////////////////////////////////////////////////////////////////*/



let eventQueue;

let players = [];

let physicsClass;


let plane;
let planes = [];


async function initClases() {

  await RAPIER.init();
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));
  eventQueue = new RAPIER.EventQueue(true);







  physicsClass = new PhysicsClass(world, RAPIER);


  players.push(new PlayerClass());
  players.push(new PlayerClass());
  players.push(new PlayerClass());

  physicsClass.addPhysicsToObject(players[0].player)
  physicsClass.addPhysicsToObject(players[1].player)
  physicsClass.addPhysicsToObject(players[2].player)

  await players[0].loadPlayerModel();
  await players[1].loadPlayerModel();
  await players[2].loadPlayerModel();

  scene.add(players[0].player)
  scene.add(players[1].player)
  scene.add(players[2].player)

  scene.add(players[0].playerOut)
  scene.add(players[1].playerOut)
  scene.add(players[2].playerOut)

  planes.push(players[0].playerOut)
  planes.push(players[1].playerOut)
  planes.push(players[2].playerOut)

  scene.add(players[0].playerModel)
  scene.add(players[1].playerModel)
  scene.add(players[2].playerModel)


  const geometryPlane = new THREE.BoxGeometry(2, 10, 1);
  const materialPlane = new THREE.MeshStandardMaterial({ color: 0x00cc00 });
  plane = new THREE.Mesh(geometryPlane, materialPlane);
  plane.userData.name = 'plane';
  plane.position.y = -6;
  scene.add(plane);
  physicsClass.addPhysicsToObject(plane)

  let planeTop = new THREE.Mesh(new THREE.BoxGeometry(2, 0.1, 1), new THREE.MeshStandardMaterial({ color: 0xcccc00, transparent: true, opacity: 0.5 }));
  planeTop.position.y = -1.02;
  scene.add(planeTop);
  planes.push(planeTop);

  for (let i = 0; i < 50; i++) {
    let newPlane = plane.clone();
    let newPlaneTop = planeTop.clone();
    let randomX = (i + 1) * getRandomNumber(3, 4);
    let randomY = getRandomNumber(-4, -7);
    newPlane.position.x = randomX;
    newPlane.position.y = randomY;
    newPlaneTop.position.x = randomX;
    newPlaneTop.position.y = randomY + 5;
    scene.add(newPlane);
    scene.add(newPlaneTop);
    planes.push(newPlaneTop);

    physicsClass.addPhysicsToObject(newPlane)
  }



  dataLoaded = true;
}
initClases();

async function initEntity() {

}

async function initScenes() {

}

async function initMatch() {
  //toggleLoader();

  await initEntity();
  await initScenes();

  //toggleLoader();
}



function maxSpeed(players) {
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



function animate() {
  if (dataLoaded) {

    //console.log(players[0].player.userData.onGround)

    players.forEach((value, index, array) => {
      value.playerMove()
    })


    camera.position.set(players[maxSpeed(players)].player.position.x - 0, 0 + 0, 15)
    //camera.lookAt(players[maxSpeed(players)].player.position)





    // camera.position.set(players[0].player.position.x + 0, players[0].player.position.y + 1, 15)
    //camera.lookAt(player.position)
    // camera.position.x += 0.03;
    // camera.position.y = 1;




    players.forEach((value, index, array) => {
      if (detectCollisionCubeAndArray(value.player, planes)) {
        value.player.userData.onGround = true;
      }
      else {
        value.player.userData.onGround = false;
      }
    })




    eventQueue.drainCollisionEvents((handle1, handle2, started) => {

      //console.log(physicsClass.playersHandles.includes(handle2))
      // console.log(physicsClass.playersHandles)
      // console.log(physicsClass.playersHandles)
      // console.log(handle1)


      // if (physicsClass.playersHandles.indexOf(handle1.toString())) {
      //   players[handle1].player.userData.onGround = true;
      // }


      // if ((handle2 == value.handle && started) || ((physicsClass.playersHandles.includes(handle2) && started))) {
      //   players.forEach((value, index, array) => {

      //     value.player.userData.onGround = true;


      //   })
      // }



      allWallBodyCollision.forEach((value, index) => {
        if (handle2 == value.handle && started) {


        }
      })
    })


    stats.update();
    for (let i = 0, n = physicsClass.dynamicBodies.length; i < n; i++) {
      physicsClass.dynamicBodies[i][0].position.copy(physicsClass.dynamicBodies[i][1].translation())
      physicsClass.dynamicBodies[i][0].quaternion.copy(physicsClass.dynamicBodies[i][1].rotation())
    }

    world.step(eventQueue)//(/*eventQueue*/);

    renderer.render(scene, camera);
  }

}

renderer.setAnimationLoop(animate);
















window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);
window.addEventListener('mousedown', onKeyDown);
window.addEventListener('mouseup', onKeyUp);


function onKeyDown(event) {

  switch (event.code) {
    case undefined:
      downKeys(players[0].player);
      break;
    case 'KeyW':
    case 'ArrowUp':

      break;
    case 'KeyZ':
    case 'ArrowDown':
      downKeys(players[1].player);
      break;
    case 'KeyM':
    case 'ArrowLeft':
      downKeys(players[2].player);
      break;
    case 'KeyD':
    case 'ArrowRight':
      break;
  }
}

function onKeyUp(event) {
  switch (event.code) {
    case undefined:
      upKeys(players[0].player);
      break;
    case 'KeyW':
    case 'ArrowUp':
      break;
    case 'KeyZ':
    case 'ArrowDown':
      upKeys(players[1].player);
      break;
    case 'KeyM':
    case 'ArrowLeft':
      upKeys(players[2].player);
      break;
    case 'KeyD':
    case 'ArrowRight':
      break;
  }
}

function downKeys(player) {
  if (player.userData.onGround) {
    player.userData.readyJump = true;
  }
}
function upKeys(player) {
  if (player.userData.readyJump) {
    player.userData.jumping = true;
    player.userData.readyJump = false;

    player.userData.onGround = false;


  }
}


function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}

export function detectCollisionCubes(object1, object2) {
  object1.geometry.computeBoundingBox();
  object2.geometry.computeBoundingBox();
  object1.updateMatrixWorld();
  object2.updateMatrixWorld();
  let box1 = object1.geometry.boundingBox.clone();
  box1.applyMatrix4(object1.matrixWorld);
  let box2 = object2.geometry.boundingBox.clone();
  box2.applyMatrix4(object2.matrixWorld);

  //if (box1.intersectsBox(box2)) $('.info').text(1);
  return box1.intersectsBox(box2);
}


export function detectCollisionCubeAndArray(object1, array) {
  object1.geometry.computeBoundingBox();

  array.forEach(function (item, index, array) {
    item.geometry.computeBoundingBox();
  });

  object1.updateMatrixWorld();
  array.forEach(function (item, index, array) {
    item.updateMatrixWorld();
  });

  let box1 = object1.geometry.boundingBox.clone();
  box1.applyMatrix4(object1.matrixWorld);

  var intersect = false;

  // array.forEach(function (item, index, array) {
  for (let i = array.length - 1; i > -1; i--) {

    if (array[i].userData.id == undefined || array[i].userData.id != object1.uuid) {
      let box2 = array[i].geometry.boundingBox.clone();
      box2.applyMatrix4(array[i].matrixWorld);

      if (box2.intersectsBox(box1)) {
        intersect = array[i];
      }
    }

  }
  // });



  //if (intersect.userData.id == object1.uuid) {
  // console.log(object1.uuid)
  // console.log(intersect.userData.id)
  //}



  return intersect;



}

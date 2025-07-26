// npx vite --host
// npm install vite-plugin-top-level-await --save-dev

// npm run build 
// npm run deploy 

////////////phys/////////


import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import RAPIER from '@dimforge/rapier3d-compat';

import { detectDevice } from "./functions";


import { PlayerClass } from "./player";
import { LevelClass } from "./level";
import { PhysicsClass } from "./physics";


console.clear();

let world;
let dataLoaded = false;

let mouse = new THREE.Vector3;
let raycaster = new THREE.Raycaster;

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc9e1f4);
// scene.fog = new THREE.Fog(scene.background, 1, 60);

const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.z = 7;
camera.position.y = 2;

const isMobile = detectDevice();

let stats = new Stats();
document.body.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  // if (isMobile) {
  //   camera.aspect = document.body.offsetWidth / document.body.offsetHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(innerWidth, innerHeight);
  // }
  // else {
  //   camera.aspect = document.body.offsetWidth / document.body.offsetHeight;
  //   camera.updateProjectionMatrix();
  //   renderer.setSize(document.body.offsetWidth, document.body.offsetHeight);
  // }
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

const ambientLight = new THREE.AmbientLight(0xaaaaaa, 1); // soft white light
//scene.add(ambientLight);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 10, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(0, 5, 5); // Измените позицию
dirLight.castShadow = true;
dirLight.shadow.camera.far = 10; // Убедитесь, что это значение достаточно велико



scene.add(dirLight);

const targetObject = new THREE.Object3D();
scene.add(targetObject);

dirLight.target = targetObject;



const helper = new THREE.DirectionalLightHelper(dirLight, 3);
// scene.add(helper);

function updateLighting() {

  dirLight.target.position.set(players[maxSpeed(players)].player.position.x - 4, -20, -10)



  dirLight.position.set(players[maxSpeed(players)].player.position.x, players[maxSpeed(players)].player.position.y + 2, players[1].player.position.z);


  // // Обновление камеры теней
  const d = 10; // Размер камеры теней
  dirLight.shadow.camera.left = -d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = -d;

  // dirLight.shadow.camera.far = 5000; // Убедитесь, что это значение достаточно велико
}


// let controls = new OrbitControls(camera, renderer.domElement);





/*//////////////////////////////////////////////////////////////////////////////////////////*/



let eventQueue;

let players = [];

let physicsClass;
let levelClass;





async function initClases() {

  await RAPIER.init();
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));
  eventQueue = new RAPIER.EventQueue(true);







  physicsClass = new PhysicsClass(world, RAPIER);
  levelClass = new LevelClass();


  players.push(new PlayerClass());
  players.push(new PlayerClass());


  const colors = [0xf2b0b0, 0xb0f2b0, 0xf4f07a, 0xb0b0f2];



  for (let i = 0; i < players.length; i++) {
    let player = players[i];
    physicsClass.addPhysicsToObject(player.player);
    await player.loadPlayerModel();

    scene.add(player.player);
    scene.add(player.playerOut);
    scene.add(player.playerModel);

    levelClass.topPlanes.push(player.playerOut);

    scene.add(player.playerModel)


    if (i < colors.length) {
      player.head.children[0].material.color.set(colors[i]);
    }
    else {
      colors.splice(colors.length, 0, ...colors);
    }
  }









  dataLoaded = true;
}


async function initEntity() {

  //scene.add(levelClass.plane);
  //console.log(levelClass.planes)

  await levelClass.createLevel();

  for (let i = 0; i < levelClass.planes.length; i++) {
    scene.add(levelClass.planes[i]);
    physicsClass.addPhysicsToObject(levelClass.planes[i]);

    scene.add(levelClass.grassPlanes[i]);
    physicsClass.addPhysicsToObject(levelClass.grassPlanes[i]);

    scene.add(levelClass.topPlanes[i]);
  }



  //scene.add(levelClass.planeTop);




}

async function initScenes() {

}

async function initMatch() {
  //toggleLoader();
  await initClases();
  await initEntity();
  await initScenes();

  //toggleLoader();
}

initMatch();



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

    updateLighting()




    // camera.position.set(players[maxSpeed(players)].player.position.x - 0, 0 + 1, 15)
    // camera.lookAt(players[maxSpeed(players)].player.position)





    // camera.position.set(players[0].player.position.x + 2, players[0].player.position.y + 5, 15)
    // camera.lookAt(players[0].player.position)


    //camera.position.x += 0.03;
    camera.position.x = players[maxSpeed(players)].player.position.x;
    camera.position.y = 3;
    camera.position.z = 15;
    camera.lookAt(camera.position.x, camera.position.y - 2, 0)




    players.forEach((value, index, array) => {
      if (detectCollisionCubeAndArray(value.player, levelClass.topPlanes)) {
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

document.addEventListener('touchend', onTapUp);
document.addEventListener('touchstart', onTapDown);

function onTapDown(event) {

  let rect = renderer.domElement.getBoundingClientRect();

  event = event.changedTouches[0];

  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = - ((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  if (mouse.x > 0) {
    downKeys(players[0].player);
  }
  else {
    downKeys(players[1].player);
  }

}
function onTapUp(event) {
  if (mouse.x > 0) {
    upKeys(players[0].player);
  }
  else {
    upKeys(players[1].player);
  }
}


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

  if (player.userData.onGround) player.userData.readyJump = true;

}
function upKeys(player) {
  if (player.userData.readyJump && player.userData.onGround) {
    player.userData.jumping = true;
    player.userData.readyJump = false;
    player.userData.onGround = false;
  }
  else if (!player.userData.onGround) {
    player.userData.readyJump = false;
  }
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

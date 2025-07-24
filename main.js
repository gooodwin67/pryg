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


async function initClases() {

  await RAPIER.init();
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));
  eventQueue = new RAPIER.EventQueue(true);







  physicsClass = new PhysicsClass(world, RAPIER);


  players.push(new PlayerClass());
  players.push(new PlayerClass());

  physicsClass.addPhysicsToObject(players[0].player)
  physicsClass.addPhysicsToObject(players[1].player)

  await players[0].loadPlayerModel();
  await players[1].loadPlayerModel();

  scene.add(players[0].player)
  scene.add(players[1].player)

  scene.add(players[0].playerModel)
  scene.add(players[1].playerModel)


  const geometryPlane = new THREE.BoxGeometry(2, 10, 1);
  const materialPlane = new THREE.MeshStandardMaterial({ color: 0x00cc00 });
  plane = new THREE.Mesh(geometryPlane, materialPlane);
  plane.userData.name = 'plane';
  plane.position.y = -6;
  scene.add(plane);
  physicsClass.addPhysicsToObject(plane)

  for (let i = 0; i < 50; i++) {
    let newPlane = plane.clone();
    newPlane.position.x = (i + 1) * getRandomNumber(3, 4);
    newPlane.position.y = getRandomNumber(-4, -7);
    scene.add(newPlane);

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







function animate() {
  if (dataLoaded) {

    players.forEach((value, index, array) => {
      value.playerMove()
    })


    camera.position.set(players[0].player.position.x + 0, players[0].player.position.y + 1, 15)
    //camera.lookAt(player.position)
    //camera.position.x += 0.03;



    eventQueue.drainCollisionEvents((handle1, handle2, started) => {


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
      players[0].player.userData.readyJump = true;
      break;
    case 'KeyW':
    case 'ArrowUp':

      break;
    case 'KeyS':
    case 'ArrowDown':
      players[1].player.userData.readyJump = true;
      break;
    case 'KeyA':
    case 'ArrowLeft':
      break;
    case 'KeyD':
    case 'ArrowRight':
      break;
  }
}

function onKeyUp(event) {
  switch (event.code) {
    case undefined:
      if (players[0].player.userData.readyJump) players[0].player.userData.jumping = true;
      players[0].player.userData.readyJump = false;
      break;
    case 'KeyW':
    case 'ArrowUp':

      break;
    case 'KeyS':
    case 'ArrowDown':
      if (players[1].player.userData.readyJump) players[1].player.userData.jumping = true;
      players[1].player.userData.readyJump = false;
      break;
    case 'KeyA':
    case 'ArrowLeft':
      break;
    case 'KeyD':
    case 'ArrowRight':
      break;
  }
}




function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}
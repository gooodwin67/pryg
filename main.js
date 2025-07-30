// npx vite --host
// npm install vite-plugin-top-level-await --save-dev

// npm run build 
// npm run deploy 

////////////phys/////////


import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import RAPIER from '@dimforge/rapier3d-compat';

import { detectDevice, detectCollisionCubes, detectCollisionCubeAndArray } from "./functions";


import { PlayerClass } from "./player";
import { LevelClass } from "./level";
import { PhysicsClass } from "./physics";

import { AudioClass } from "./audio";
import { ControlClass } from './control';


console.clear();

let world;
let dataLoaded = false;

let delta = 0;
let deltaTime;
let interval = 1 / 60;
let clock = new THREE.Clock();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc9e1f4);
scene.fog = new THREE.Fog(scene.background, 1, 53);

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
//hemiLight.color.setHSL(0.6, 0.6, 0.6);

hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 10, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 2);
//dirLight.color.setHSL(0.1, 1, 0.95);
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

  dirLight.target.position.set(camera.position.x - 4, -20, 10)
  dirLight.position.set(levelClass.players[levelClass.maxSpeed(levelClass.players)].player.position.x, levelClass.players[levelClass.maxSpeed(levelClass.players)].player.position.y + 2, levelClass.players[1].player.position.z);

  // // Обновление камеры теней
  const d = 10; // Размер камеры теней
  dirLight.shadow.camera.left = -d;
  dirLight.shadow.camera.right = d;
  dirLight.shadow.camera.top = d;
  dirLight.shadow.camera.bottom = -d;

  // dirLight.shadow.camera.far = 5000; // Убедитесь, что это значение достаточно велико
}


//let controls = new OrbitControls(camera, renderer.domElement);





/*//////////////////////////////////////////////////////////////////////////////////////////*/



let eventQueue;

let physicsClass;
let levelClass;

let audioClass;
let controlClass;











async function initClases() {

  await RAPIER.init();
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));
  eventQueue = new RAPIER.EventQueue(true);





  audioClass = new AudioClass();
  await audioClass.loadAudio();

  physicsClass = new PhysicsClass(world, RAPIER);
  levelClass = new LevelClass(scene);

  levelClass.players.push(new PlayerClass(scene, audioClass, levelClass));
  levelClass.players.push(new PlayerClass(scene, audioClass, levelClass));
  levelClass.players.push(new PlayerClass(scene, audioClass, levelClass));

  controlClass = new ControlClass(levelClass, isMobile);
  controlClass.addKeyListeners();

}


async function initEntity() {

  await levelClass.createLevel();

  for (let i = 0; i < levelClass.planes.length; i++) {
    scene.add(levelClass.planes[i]);
    physicsClass.addPhysicsToObject(levelClass.planes[i]);

    scene.add(levelClass.grassPlanes[i]);
    physicsClass.addPhysicsToObject(levelClass.grassPlanes[i]);

    scene.add(levelClass.topPlanes[i]);
  }

  for (let i = 1; i < 10; i++) {
    let newBoostHatModel = levelClass.boostHatModel.clone();
    newBoostHatModel.position.x = i * 3;
    scene.add(newBoostHatModel);
    levelClass.boostHatModels.push(newBoostHatModel);
    levelClass.boostHatMeshes.push(newBoostHatModel.children[0].children[0].children[0]);
  }

  levelClass.clouds.forEach((value, index, array) => {
    scene.add(value);
  })

  scene.add(levelClass.water);



  /*////////////////////////////////////////////////////////////////////////////////////////////////////*/



  const colors = [0xf2b0b0, 0xb0f2b0, 0xf4f07a, 0xb0b0f2];


  for (let i = 0; i < levelClass.players.length; i++) {
    let player = levelClass.players[i];
    player.player.position.x = player.player.position.x + i * 1;
    physicsClass.addPhysicsToObject(player.player);
    await player.loadPlayerModel();

    player.player.userData.startPos = player.player.position.clone();

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

    player.player.userData.audio.push(audioClass.readyJumpAudio.clone())
    if (audioClass.quacks.length > i) player.player.userData.audio.push(audioClass.quacks[i].clone())
    else player.player.userData.audio.push(audioClass.quacks[0].clone())
  }


  dataLoaded = true;

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







function animate() {
  if (dataLoaded) {

    levelClass.waterUpdate();

    levelClass.players.forEach((value, index, array) => {
      value.playerMove()
    })

    updateLighting();

    levelClass.levelAnimate(camera);




    // camera.position.set(levelClass.players[maxSpeed(players)].player.position.x - 0, 0 + 1, 15)
    // camera.lookAt(levelClass.players[maxSpeed(players)].player.position)

    // camera.position.set(players[0].player.position.x + 2, players[0].player.position.y + 5, 15)
    // camera.lookAt(players[0].player.position)


    //camera.position.x += 0.03;
    camera.position.x = levelClass.players[levelClass.maxSpeed(levelClass.players)].player.position.x;
    camera.position.y = 2;
    camera.position.z = 17;
    camera.lookAt(camera.position.x, camera.position.y - 2, 0);





    // eventQueue.drainCollisionEvents((handle1, handle2, started) => {

    //   allWallBodyCollision.forEach((value, index) => {
    //     if (handle2 == value.handle && started) {

    //     }
    //   })
    // })


    stats.update();
    for (let i = 0, n = physicsClass.dynamicBodies.length; i < n; i++) {
      physicsClass.dynamicBodies[i][0].position.copy(physicsClass.dynamicBodies[i][1].translation())
      physicsClass.dynamicBodies[i][0].quaternion.copy(physicsClass.dynamicBodies[i][1].rotation())
    }
    world.step(eventQueue)//(/*eventQueue*/);
    renderer.render(scene, camera);
  }

}

renderer.setAnimationLoop(() => {
  delta += clock.getDelta();
  if (delta > interval/* && !pause*/) {
    animate()
    renderer.render(scene, camera);
    delta = delta % interval;
  }
});









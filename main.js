// npx vite --host
// npm install vite-plugin-top-level-await --save-dev

// npm run build 
// npm run deploy 

////////////phys/////////


import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { detectDevice, detectCollisionCubes, detectCollisionCubeAndArray, makeCollisionMaskFromArrays, getObjectGroupInfo } from "./functions";


import { PlayerClass } from "./player";
import { LevelClass } from "./level";
import { PhysicsClass } from "./physics";

import { AudioClass } from "./audio";
import { ControlClass } from './control';
import { WorldClass } from './world';
import { MenuClass } from './menu';


console.clear();

let world;
let dataLoaded = false;

let delta = 0;
let interval = 1 / 60;
let clock = new THREE.Clock();

let eventQueue;

let menuClass;

let worldClass;
let physicsClass;
let levelClass;
let audioClass;
let controlClass;



const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc9e1f4);
// scene.fog = new THREE.Fog(scene.background, 1, 50);


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

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;




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




let controls = new OrbitControls(camera, renderer.domElement);
/*//////////////////////////////////////////////////////////////////////////////////////////*/




async function initClases(chels) {
  const RAPIER = await import('@dimforge/rapier3d');
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));

  eventQueue = new RAPIER.EventQueue(true);
  physicsClass = new PhysicsClass(world, RAPIER);



  audioClass = new AudioClass();
  levelClass = new LevelClass(scene, audioClass, physicsClass, renderer, camera, isMobile);
  worldClass = new WorldClass(scene, camera, levelClass, renderer);

  for (let i = 0; i < chels; i++) {
    levelClass.players.push(new PlayerClass(scene, audioClass, levelClass));
  }
  controlClass = new ControlClass(levelClass, isMobile, renderer, camera);
}


async function initEntity() {

  await worldClass.loadWorld();
  await audioClass.loadAudio();


}
async function initLevel() {


  await levelClass.createLevel();

  await levelClass.loadEnvironments();

  await levelClass.loadPlayers();


  //console.log(levelClass.grassPlanes[0].userData.collider)


  if (levelClass.grassPlanes.length > 0) {
    levelClass.grassPlanes.forEach((value, index) => {
      levelClass.grassPlanes[index].userData.collide.setCollisionGroups(makeCollisionMaskFromArrays([0], [1]))
    })
  }


  if (levelClass.players.length > 0) {
    levelClass.players.forEach((value, index) => {
      levelClass.players[index].player.userData.collider.setCollisionGroups(makeCollisionMaskFromArrays([1], [0, 1]))


    })
  }







}

async function initMatch(chels, gameNum) {
  menuClass.toggleLoader(true);

  await initClases(chels);
  levelClass.gameNum = gameNum
  await initEntity();
  await initLevel();

  menuClass.toggleLoader(false);
  dataLoaded = true;
}

menuClass = new MenuClass(initMatch);


function animate() {
  if (dataLoaded) {


    levelClass.players.forEach((value, index, array) => {
      value.playerMove()
    })
    worldClass.updateLighting();
    levelClass.levelAnimate(camera);
    levelClass.cameraMove(camera);







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
    physicsClass.updateInstancedTransforms();
    world.step(eventQueue);
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

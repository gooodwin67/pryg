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




//let controls = new OrbitControls(camera, renderer.domElement);
/*//////////////////////////////////////////////////////////////////////////////////////////*/

















async function initClases(chels) {
  await RAPIER.init();
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));
  eventQueue = new RAPIER.EventQueue(true);
  physicsClass = new PhysicsClass(world, RAPIER);

  world.physicsHooks = {
    filterContactPair: (collider1, collider2, context) => {
      // Возвращаем true/false для разрешения контакта
    },
    //filterIntersectionPair: undefined // не нужен в нашем случае
  };








  audioClass = new AudioClass();
  levelClass = new LevelClass(scene, audioClass, physicsClass, renderer, camera);
  worldClass = new WorldClass(scene, camera, levelClass);

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

    levelClass.waterUpdate();
    levelClass.players.forEach((value, index, array) => {
      value.playerMove()
    })
    worldClass.updateLighting();
    levelClass.levelAnimate(camera);
    levelClass.cameraMove(camera);



    for (const player of levelClass.players) {

      const playerCollider = player.player.userData.collider;
      const playerBody = player.player.userData.body;



      if (!playerCollider || !playerBody || !levelClass.gameDir == 'vert') continue;


      const playerPos = playerBody.translation();
      const playerVel = playerBody.linvel();

      for (const platform of physicsClass.allTops) {
        const platformCollider = platform.userData.collide;
        const platformPos = platform.position;

        const isBelow = playerPos.y < platformPos.y;
        const isRising = playerVel.y > 0;
        const closeEnough = Math.abs(playerPos.y - platformPos.y) < 1.0;

        const handleKey = player.player.userData.handle.toString();

        if (isBelow && isRising && closeEnough) {
          if (!platform.userData.playerHandlesInside.has(handleKey)) {
            platform.userData.playerHandlesInside.add(handleKey);
          }
        }

        const hasPassedAbove = playerPos.y > platformPos.y + 0.5;
        const isFallingOrStationary = playerVel.y <= 0;

        if (hasPassedAbove && isFallingOrStationary) {
          platform.userData.playerHandlesInside.delete(handleKey);
        }

        // Активируем/деактивируем сенсорность платформы
        if (platform.userData.playerHandlesInside.has(handleKey)) {
          platformCollider.setSensor(true);
        } else {
          platformCollider.setSensor(false);
        }
      }
    }



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

// npx vite --host
// npm install vite-plugin-top-level-await --save-dev

// npm run build 
// npm run deploy 

////////////phys/////////


import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { detectDevice, detectCollisionCubes, detectCollisionCubeAndArray, makeCollisionMaskFromArrays, getObjectGroupInfo, createSplashSystem, createRippleRing } from "./functions";


import { PlayerClass } from "./player";
import { LevelClass } from "./level";
import { PhysicsClass } from "./physics";

import { AudioClass } from "./audio";
import { ControlClass } from './control';
import { WorldClass } from './world';
import { MenuClass } from './menu';
import { ParamsClass } from './params';
import { ScoreClass } from './score';
import { GameClass } from './game';
import { DataClass } from './data';

import { contain } from 'three/src/extras/TextureUtils.js';


console.clear();

let world;




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
let paramsClass;
let scoreClass;

let dataClass;




let gameClass = new GameClass();





const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc9e1f4);
// scene.fog = new THREE.Fog(scene.background, 1, 50);

const splash = createSplashSystem({ scene });
const ring = createRippleRing({ scene });





const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.y = 2;


// ★ фиксируем HFOV не от текущего окна, а от референсного aspect
const DESIGN_ASPECT = 16 / 9; // выбери свою базу (можно 16/9)
const baseVFOV = THREE.MathUtils.degToRad(25);
const FIXED_HFOV = 2 * Math.atan(Math.tan(baseVFOV / 2) * DESIGN_ASPECT);


const isMobile = detectDevice();

///////////////////////////////////////


function setVhVar() {
  const h = (window.visualViewport?.height || window.innerHeight) * 0.01;
  document.documentElement.style.setProperty('--vh', `${h}px`);
}
setVhVar();
window.addEventListener('resize', setVhVar);
window.addEventListener('orientationchange', setVhVar);

///////////////////////////////////////

let stats = new Stats();
document.body.appendChild(stats.dom);
stats.dom.style.top = "0px";
stats.dom.style.left = "48%";

const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;








// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
//   if (isMobile) {
//     camera.aspect = document.body.offsetWidth / document.body.offsetHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(innerWidth, innerHeight);
//   }
//   else {
//     camera.aspect = document.body.offsetWidth / document.body.offsetHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(document.body.offsetWidth, document.body.offsetHeight);
//   }
//   // camera.aspect = window.innerWidth / window.innerHeight;
//   // camera.updateProjectionMatrix();

//   // renderer.setSize(window.innerWidth, window.innerHeight);
// }

function onWindowResize() {
  const w = document.body.offsetWidth;
  const h = document.body.offsetHeight;
  const aspect = w / h;

  // пересчитываем вертикальный FOV при фиксированном горизонтальном
  let vFOV = 2.5 * Math.atan(Math.tan(FIXED_HFOV / 2) / aspect);

  // необязательные «ограждения», чтобы на экстремальных экранах не уходить в микроскопические/гигантские значения
  const vMin = THREE.MathUtils.degToRad(12);
  const vMax = THREE.MathUtils.degToRad(70);
  vFOV = THREE.MathUtils.clamp(vFOV, vMin, vMax);

  camera.fov = THREE.MathUtils.radToDeg(vFOV);
  camera.aspect = aspect;
  camera.updateProjectionMatrix();

  renderer.setSize(w, h);
}
window.addEventListener('resize', onWindowResize);
onWindowResize();



document.body.addEventListener("touchstart", function () {
  document.body.requestFullscreen().then(() => {
    screen.orientation.lock("landscape");
  })

}, false);




// let controls = new OrbitControls(camera, renderer.domElement);
/*//////////////////////////////////////////////////////////////////////////////////////////*/



async function BeforeStart() {
  toggleLoader(true);

  dataClass = new DataClass();
  await dataClass.loadLocalData();
  await dataClass.loadLevels(0);
  await dataClass.loadLevelsContest();






  audioClass = new AudioClass();
  await audioClass.loadAudio();

  menuClass = new MenuClass(initMatch, dataClass.loadLevels, gameClass, audioClass, dataClass);

  toggleLoader(false);
}
await BeforeStart();



async function initClases(chels) {


  const RAPIER = await import('@dimforge/rapier3d');
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));

  eventQueue = new RAPIER.EventQueue(true);

  physicsClass = new PhysicsClass(world, RAPIER);

  scoreClass = new ScoreClass(camera, dataClass);



  worldClass = new WorldClass(scene, camera, renderer, paramsClass, isMobile, audioClass);

  levelClass = new LevelClass(scene, audioClass, physicsClass, renderer, camera, isMobile, paramsClass, worldClass, initMatch, dataClass, gameClass, splash, ring, scoreClass);

  for (let i = 0; i < chels; i++) {
    levelClass.players.push(new PlayerClass(dataClass, scene, audioClass, levelClass, paramsClass, camera, gameClass));
  }
  controlClass = new ControlClass(levelClass, isMobile, renderer, camera, paramsClass, audioClass);
  controlClass.addKeyListeners();
}


async function initEntity() {

  await worldClass.loadWorld();
  // worldClass.startThunder();
  // worldClass.startRain();


  if (audioClass.musicOn) audioClass.backAudio.play();
  if (audioClass.musicOn) audioClass.oceanAudio.play();


}
async function initLevel(levelsMode) {


  await levelClass.createLevel(levelsMode);
  await levelClass.loadEnvironments();
  await levelClass.loadPlayers();

  if (levelClass.objs.grassPlanes.data.length > 0) {
    levelClass.objs.grassPlanes.data.forEach((value, index) => {
      levelClass.objs.grassPlanes.data[index].userData.collide.setCollisionGroups(makeCollisionMaskFromArrays([0], [1]))
    })
  }
  if (levelClass.players.length > 0) {
    levelClass.players.forEach((value, index) => {
      levelClass.players[index].player.userData.collider.setCollisionGroups(makeCollisionMaskFromArrays([1], [0, 1]))
    })
  }
}


async function initMatch(chels, gameNum, levelsMode = false) {
  resetMatch();
  menuClass.toggleLoader(true);

  paramsClass = new ParamsClass();

  await initClases(chels);

  levelClass.gameNum = gameNum;
  await initEntity();
  await initLevel(levelsMode);


  paramsClass.gameDir === 'hor' ? scoreClass.loadRecsToHud(0, levelClass.players.length - 1) : scoreClass.loadRecsToHud(1, levelClass.players.length - 1);


  setTimeout(() => {
    menuClass.toggleLoader(false);
    paramsClass.dataLoaded = true;
    gameClass.gameStarting = true;
    dataClass.gameInit = true;


  }, 300)

}



function resetMatch() {

  // camera.position.z = 7;
  camera.position.y = 2;
  camera.position.x = 0;

  renderer.toneMappingExposure = 1.05;

  if (controlClass != undefined) controlClass.removedKeyListeners();

  worldClass = null;
  physicsClass = null;
  levelClass = null;

  controlClass = null;
  paramsClass = null;
  scoreClass = null;
}







function animate() {

  console.log(dataClass.gameInit)
  if (gameClass.gameStarting && document.querySelector('.menu_in_game').classList.contains('hidden_screen') && paramsClass.dataLoaded) {
    levelClass.showScreen('menu_in_game');
  }

  if (dataClass.gameInit && !levelClass.levelsMode && document.querySelector('.hud').classList.contains('hidden_screen') && paramsClass.dataLoaded) {
    menuClass.showScreen('hud');
  }
  else if (!dataClass.gameInit && !document.querySelector('.hud').classList.contains('hidden_screen')) {
    menuClass.hideScreen('hud');
  }



  if (gameClass.gameStarting) {
    splash.update(dt);
    ring.update(dt);
  }


  if (paramsClass.dataLoaded && gameClass.gameStarting) {








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
    if (gameClass.gameStarting) renderer.render(scene, camera);
  }

}



let accumulator = 0;
const dt = 1 / 60;
const maxFrame = 0.1;

renderer.setAnimationLoop(() => {
  if (paramsClass != undefined) {
    let frameDelta = clock.getDelta();
    if (frameDelta > maxFrame) frameDelta = maxFrame;

    accumulator += frameDelta;

    while (accumulator >= dt) {
      animate(dt); // твоя игровая логика и рендер
      accumulator -= dt;
    }
  }
});







function toggleLoader(need) {
  if (!need) document.querySelector('.loader_screen').classList.add('hidden_screen');
  else document.querySelector('.loader_screen').classList.remove('hidden_screen');
}




document.addEventListener("visibilitychange", function () {

  if (document.visibilityState === 'visible') {
    if (!gameClass.pause && !gameClass.showGamePopup) {
      gameClass.gameStarting = true;

      audioClass.togglePauseAll(!gameClass.gameStarting);
    }
    gameClass.visible = true;

  } else {

    if (!gameClass.pause && !gameClass.showGamePopup) {
      gameClass.gameStarting = false;
      audioClass.togglePauseAll(!gameClass.gameStarting);
    }
    else if (!gameClass.pause) {
      audioClass.togglePauseAll(!gameClass.gameStarting);
    }
    gameClass.visible = false;

  }

});


document.querySelector('.pause_btn').addEventListener('click', () => {

  if (!gameClass.pause && gameClass.gameStarting) {
    gameClass.pause = !gameClass.pause;

    if (gameClass.pause) {

      levelClass.showPopupInGame()

      gameClass.gameStarting = false;
      audioClass.togglePauseAll(!gameClass.gameStarting);

      levelClass.showScreen('popup_game_btn_close');



    }
    // else {
    //   gameClass.gameStarting = true;
    //   audioClass.togglePauseAll(!gameClass.gameStarting);
    //   levelClass.hideScreen('popup_in_game');
    // }
  }


})

document.querySelector('.popup_game_btn_close').addEventListener('click', () => {
  if (gameClass.pause || gameClass.gameStarting) {
    gameClass.pause = !gameClass.pause;
    gameClass.gameStarting = true;
    audioClass.togglePauseAll(!gameClass.gameStarting);
    if (worldClass.rain && !audioClass.rainAudio.isPlaying) audioClass.rainAudio.play();
    if (!audioClass.oceanAudio.isPlaying) audioClass.oceanAudio.play();
    levelClass.hideScreen('popup_in_game');
    levelClass.hideScreen('popup_game_btn_close');
  }
})

document.querySelector('.sound_btn').addEventListener('click', () => {
  const muted = audioClass.isMuted();
  audioClass.toggleMute(!muted)
})



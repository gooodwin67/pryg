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
import { ParamsClass } from './params';
import { ScoreClass } from './score';
import { GameClass } from './game';
import { contain } from 'three/src/extras/TextureUtils.js';


console.clear();

let world;

let gameInit = false;


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
let gameClass = new GameClass();


const levelsStatus = [
  // 'available','completed','locked',
  'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available', 'available',
];
let allLevels = levelsStatus.length;



const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc9e1f4);
// scene.fog = new THREE.Fog(scene.background, 1, 50);


const camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1, 2000);
//camera.position.z = 7;
camera.position.y = 2;


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

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;


onWindowResize();



window.addEventListener('resize', onWindowResize, false);
function onWindowResize() {
  if (isMobile) {
    camera.aspect = document.body.offsetWidth / document.body.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(innerWidth, innerHeight);
  }
  else {
    camera.aspect = document.body.offsetWidth / document.body.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(document.body.offsetWidth, document.body.offsetHeight);
  }
  // camera.aspect = window.innerWidth / window.innerHeight;
  // camera.updateProjectionMatrix();

  // renderer.setSize(window.innerWidth, window.innerHeight);
}



document.body.addEventListener("touchstart", function () {
  document.body.requestFullscreen().then(() => {
    screen.orientation.lock("landscape");
  })

}, false);




// let controls = new OrbitControls(camera, renderer.domElement);
/*//////////////////////////////////////////////////////////////////////////////////////////*/



async function BeforeStart() {
  toggleLoader(true);
  audioClass = new AudioClass();
  await audioClass.loadAudio();
  menuClass = new MenuClass(initMatch, loadLevels, gameClass, audioClass);
  toggleLoader(false);
}
await BeforeStart();



async function initClases(chels) {


  const RAPIER = await import('@dimforge/rapier3d');
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));

  eventQueue = new RAPIER.EventQueue(true);

  physicsClass = new PhysicsClass(world, RAPIER);
  scoreClass = new ScoreClass(camera);




  worldClass = new WorldClass(scene, camera, renderer, paramsClass, isMobile, audioClass);

  levelClass = new LevelClass(scene, audioClass, physicsClass, renderer, camera, isMobile, paramsClass, worldClass, initMatch, allLevels, gameClass);

  for (let i = 0; i < chels; i++) {
    levelClass.players.push(new PlayerClass(scene, audioClass, levelClass, paramsClass, camera, gameClass));
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



  setTimeout(() => {
    menuClass.showScreen('hud');
    menuClass.toggleLoader(false);
    paramsClass.dataLoaded = true;
    gameClass.gameStarting = true;
    gameInit = true;

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


  if (!gameClass.gameStarting && !gameClass.showGamePopup) {

    if (!document.querySelector('.menu_in_game').classList.contains('hidden_screen')) {
      document.querySelector('.menu_in_game').classList.add('hidden_screen');
    }
  }
  if (gameClass.pause || (gameClass.gameStarting && !gameClass.showGamePopup)) {
    if (document.querySelector('.menu_in_game').classList.contains('hidden_screen')) {
      document.querySelector('.menu_in_game').classList.remove('hidden_screen');
    }
    if (!gameClass.pause) {
      document.querySelector('.sound_btn_wrap').classList.remove('hidden_screen');
    }
    else {
      document.querySelector('.sound_btn_wrap').classList.add('hidden_screen');
    }
  }


  if (paramsClass.dataLoaded && gameClass.gameStarting) {



    if (paramsClass.gameDir == 'hor') {
      scoreClass.updateMetersFloat(camera.position.x - scoreClass.startX);
    }
    else {
      scoreClass.updateMetersFloat(camera.position.y - scoreClass.startY);
    }



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





/**
 * levelsStatus: массив статусов уровней.
 * Допустимые значения: 'completed' | 'available' | 'locked'
 */
async function loadLevels() {
  const levelsContainer = document.querySelector('.levels_blocks');
  if (!levelsContainer) return;

  // Перегенерируем контейнер и помечаем, что будет re-enter
  levelsContainer.classList.add('levels_blocks--reenter');
  levelsContainer.innerHTML = '';

  const documentFragment = document.createDocumentFragment();

  const getLevelConfig = (levelStatus) => {
    switch (levelStatus) {
      case 'completed':
        return { modifierClass: 'levels_block--completed', labelText: 'Пройден', ariaState: 'уровень пройден' };
      case 'available':
        return { modifierClass: 'levels_block--available', labelText: 'Доступен', ariaState: 'уровень доступен' };
      default:
        return { modifierClass: 'levels_block--locked', labelText: 'Закрыт', ariaState: 'уровень закрыт' };
    }
  };

  const baseDelayMs = 40;     // базовая задержка между плитками
  const startDelayMs = 60;    // стартовая задержка для первой
  const maxDelayMs = 600;     // ограничим максимальную задержку

  for (let levelIndex = 0; levelIndex < levelsStatus.length; levelIndex++) {
    const levelStatus = levelsStatus[levelIndex];
    const { modifierClass, labelText, ariaState } = getLevelConfig(levelStatus);

    const levelElement = document.createElement('div');
    levelElement.className = `levels_block ${modifierClass}`;
    levelElement.setAttribute('data-level', String(levelIndex + 1));
    levelElement.setAttribute('role', 'button');
    levelElement.setAttribute('tabindex', levelStatus === 'locked' ? '-1' : '0');
    levelElement.setAttribute('aria-label', `Уровень ${levelIndex + 1}, ${ariaState}`);

    // Задаём индивидуальную задержку входа через CSS-переменную
    const computedDelay = Math.min(startDelayMs + levelIndex * baseDelayMs, maxDelayMs);
    levelElement.style.setProperty('--show-delay', `${computedDelay}ms`);

    // Внутренняя разметка
    const numberElement = document.createElement('div');
    numberElement.className = 'levels_block_number';
    numberElement.textContent = String(levelIndex + 1);

    const statusElement = document.createElement('div');
    statusElement.className = 'levels_block_status';

    const statusChipElement = document.createElement('span');
    statusChipElement.className = `status_chip ${levelStatus === 'completed'
      ? 'status_chip--completed'
      : levelStatus === 'available'
        ? 'status_chip--available'
        : 'status_chip--locked'
      }`;
    statusChipElement.textContent = labelText;

    statusElement.append(statusChipElement);
    levelElement.append(numberElement, statusElement);

    // Клики/клавиатура
    levelElement.addEventListener('click', () => {
      if (levelStatus === 'locked') return;
      document.querySelectorAll('.levels_block').forEach((element) => element.classList.remove('active'));
      levelElement.classList.add('active');
      console.log(`Выбран уровень ${levelIndex + 1}`);
      // startLevel(levelIndex + 1);
    });

    levelElement.addEventListener('keydown', (keyboardEvent) => {
      if (levelStatus === 'locked') return;
      if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
        keyboardEvent.preventDefault();
        levelElement.click();
      }
    });

    documentFragment.append(levelElement);
  }

  levelsContainer.append(documentFragment);

  // Отдельным кадром включаем класс анимации — чтобы браузер посчитал стартовые стили
  requestAnimationFrame(() => {
    levelsContainer.classList.remove('levels_blocks--reenter');
    levelsContainer.querySelectorAll('.levels_block').forEach((levelElement) => {
      levelElement.classList.add('levels_block--enter');
    });
  });
}

/**
 * Пере-анимация уже отрисованных уровней (например, при возвращении на экран)
 */
function replayLevelsEnterAnimation() {
  const levelsContainer = document.querySelector('.levels_blocks');
  if (!levelsContainer) return;
  const levelElements = Array.from(levelsContainer.querySelectorAll('.levels_block'));
  levelElements.forEach((levelElement) => {
    levelElement.classList.remove('levels_block--enter');
    // Сброс анимации
    // eslint-disable-next-line no-unused-expressions
    void levelElement.offsetWidth;
    levelElement.classList.add('levels_block--enter');
  });
}


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

  if (gameClass.pause || gameClass.gameStarting) {
    gameClass.pause = !gameClass.pause;

    if (gameClass.pause) {

      gameClass.gameStarting = false;
      audioClass.togglePauseAll(!gameClass.gameStarting);
      levelClass.showPopupInGame()


    }
    else {
      gameClass.gameStarting = true;
      audioClass.togglePauseAll(!gameClass.gameStarting);
      levelClass.hideScreen('popup_in_game');
    }
  }


})

document.querySelector('.sound_btn').addEventListener('click', () => {
  const muted = audioClass.isMuted();
  audioClass.toggleMute(!muted)
})
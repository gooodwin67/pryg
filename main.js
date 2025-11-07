import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';

import { detectDevice, makeCollisionMaskFromArrays, createSplashSystem, createRippleRing } from "./functions";

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
import { AssetsManager } from './assets-manager';

import { initI18n } from './i18n.js';


console.clear();

let world;




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
let assetsManager;




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
window.visualViewport?.addEventListener('resize', setVhVar);

/////////////////////////////////////

let stats = new Stats();
document.body.appendChild(stats.dom);
stats.dom.style.top = "0px";
stats.dom.style.left = "548%";

const renderer = new THREE.WebGLRenderer({ antialias: false });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;









function onWindowResize() {
  const w = document.body.offsetWidth;
  const h = document.body.offsetHeight;
  const aspect = w / h;

  // пересчитываем вертикальный FOV при фиксированном горизонтальном
  let vFOV = 2 * Math.atan(Math.tan(FIXED_HFOV / 2) / aspect);
  // let vFOV = 2.5 * Math.atan(Math.tan(FIXED_HFOV / 2) / aspect);

  // необязательные «ограждения», чтобы на экстремальных экранах не уходить в микроскопические/гигантские значения
  const vMin = THREE.MathUtils.degToRad(4);
  const vMax = THREE.MathUtils.degToRad(90);
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

// document.body.addEventListener("touchstart", async function () {
//   try {
//     // Проверяем, поддерживается ли fullscreen
//     const el = document.documentElement;
//     if (el.requestFullscreen) {
//       await el.requestFullscreen();
//     } else if (el.webkitRequestFullscreen) {
//       await el.webkitRequestFullscreen(); // для Safari
//     }


//     // Поворот экрана на iOS не работает, просто подгоняем вьюпорт
//     if (window.screen.orientation?.lock) {
//       await window.screen.orientation.lock("landscape").catch(() => { });
//     }
//   } catch (e) {
//     console.warn('Fullscreen not supported', e);
//   }
// }, { once: true });



// let controls = new OrbitControls(camera, renderer.domElement);
/*//////////////////////////////////////////////////////////////////////////////////////////*/

let loaderLine = document.querySelector('.loader_line');


async function BeforeStart() {
  toggleLoader(true);

  dataClass = new DataClass();
  initI18n();

  assetsManager = new AssetsManager();
  await assetsManager.loadModels();
  await assetsManager.loadBoostsModel();
  loaderLine.setAttribute("style", "width:30%");

  await assetsManager.loadTexture();
  await preloadPopupBackgrounds();
  loaderLine.setAttribute("style", "width:30%");


  audioClass = new AudioClass();
  await audioClass.loadAudio();
  loaderLine.setAttribute("style", "width:60%");


  await dataClass.loadLocalData();
  await dataClass.loadLevels(0);
  await dataClass.loadLevelsContest();

  loaderLine.setAttribute("style", "width:100%");


  menuClass = new MenuClass(initMatch, dataClass.loadLevels, gameClass, audioClass, dataClass);

  toggleLoader(false);
  loaderLine.setAttribute("style", "width:0%");
}
await BeforeStart();


async function preloadPopupBackgrounds() {
  ['images/back-win.jpg', 'images/back-loose.jpg', 'images/back-dead.jpg', 'images/main.jpg'].forEach(src => {
    const img = new Image();
    img.decoding = 'async';
    img.src = src;
  });
};




async function initClases(chels) {


  const RAPIER = await import('@dimforge/rapier3d');
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));

  eventQueue = new RAPIER.EventQueue(true);

  physicsClass = new PhysicsClass(world, RAPIER);

  scoreClass = new ScoreClass(camera, dataClass);



  worldClass = new WorldClass(scene, camera, renderer, paramsClass, isMobile, audioClass);

  levelClass = new LevelClass(scene, audioClass, physicsClass, renderer, camera, isMobile, paramsClass, worldClass, initMatch, dataClass, gameClass, splash, ring, scoreClass, menuClass, assetsManager);

  for (let i = 0; i < chels; i++) {
    levelClass.players.push(new PlayerClass(dataClass, scene, audioClass, levelClass, paramsClass, camera, gameClass, assetsManager));
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
  await levelClass.loadPlayers();
  await levelClass.loadEnvironments();


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
  loaderLine.setAttribute("style", "width:30%");

  levelClass.gameNum = gameNum;
  await initEntity();
  loaderLine.setAttribute("style", "width:60%");
  await initLevel(levelsMode);
  loaderLine.setAttribute("style", "width:90%");



  paramsClass.gameDir === 'hor' ? scoreClass.loadRecsToHud(0, levelClass.players.length - 1) : scoreClass.loadRecsToHud(1, levelClass.players.length - 1);
  paramsClass.dataLoaded = true;
  gameClass.gameStarting = true;
  dataClass.gameInit = true;
  loaderLine.setAttribute("style", "width:100%");

  setTimeout(() => {
    menuClass.toggleLoader(false);
    loaderLine.setAttribute("style", "width:0%");
  }, 1000)

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





  if (gameClass.gameStarting && document.querySelector('.menu_in_game').classList.contains('hidden_screen') && paramsClass.dataLoaded) {
    levelClass.showScreen('menu_in_game');
  }

  if (dataClass.gameInit && gameClass.gameStarting && !levelClass.levelsMode && document.querySelector('.hud').classList.contains('hidden_screen') && paramsClass.dataLoaded) {
    menuClass.showScreen('hud');
    menuClass.hideScreen('level_hud_wrap');


  }
  else if (!dataClass.gameInit && !document.querySelector('.hud').classList.contains('hidden_screen')) {
    menuClass.hideScreen('hud');
    menuClass.showScreen('level_hud_wrap');
  }

  if (dataClass.gameInit && gameClass.gameStarting && levelClass.levelsMode && !document.querySelector('.player_panel_rec').classList.contains('hidden_screen')) {
    document.querySelectorAll('.player_panel_rec').forEach((value, index, array) => {
      value.classList.add('hidden_screen')
    })
  }
  else if (dataClass.gameInit && gameClass.gameStarting && !levelClass.levelsMode && document.querySelector('.player_panel_rec').classList.contains('hidden_screen')) {
    document.querySelectorAll('.player_panel_rec').forEach((value, index, array) => {
      value.classList.remove('hidden_screen')
    })
  }







  if (gameClass.gameStarting) {
    splash.update(dt);
    ring.update(dt);
  }


  if (paramsClass.dataLoaded && gameClass.gameStarting) {



    stats.dom.style.left = "48%";




    levelClass.players.forEach((value, index, array) => {
      value.playerMove()
    })
    worldClass.updateLighting();
    levelClass.levelAnimate(camera);

    levelClass.cameraMove(camera);








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
  const loader = document.querySelector('.loader_screen');
  if (!loader) return;

  if (need) {
    loader.classList.remove('hidden_screen');
  } else {
    // Плавное скрытие
    loader.classList.add('hidden_screen');
  }
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


document.querySelector('.pause_btn_wrap').addEventListener('click', () => {

  if (!gameClass.pause && gameClass.gameStarting) {
    gameClass.pause = !gameClass.pause;

    if (gameClass.pause) {

      levelClass.showPopupInGame()

      gameClass.gameStarting = false;
      audioClass.togglePauseAll(!gameClass.gameStarting);

      // document.querySelector('.pause_btn').classList.toggle('open');

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

document.querySelector('.sound_btn_wrap').addEventListener('click', () => {
  const muted = audioClass.isMuted();
  audioClass.toggleMute(!muted)
  document.querySelector('.volume-icon__input').classList.toggle('volume_off')
})








function initCustomScroll() {
  const screens = [
    '.free_game_screen',
    '.levels_game_screen',
    '.levels_game_screen_contest',
    '.main_screen'
  ];

  let activeEl = null;            // текущий видимый экран (контейнер со скроллом)
  let progress = null;           // его же .scroll-progress
  let bar = null;           // и .scroll-progress__bar
  let dragging = false;
  let startY = 0, startScroll = 0;

  const getActiveScreen = () => {
    for (const sel of screens) {
      const el = document.querySelector(sel);
      if (el && !el.classList.contains('hidden_screen')) return el;
    }
    return null;
  };

  const bindToActive = () => {
    const nextEl = getActiveScreen();
    if (nextEl === activeEl) return;

    // отписываемся от старого
    if (activeEl) activeEl.removeEventListener('scroll', update, { passive: true });
    if (bar) {
      bar.removeEventListener('mousedown', onDown);
      bar.removeEventListener('touchstart', onDown);
    }

    // берём новый экран и его бар
    activeEl = nextEl;
    progress = activeEl ? activeEl.querySelector('.scroll-progress') : null;
    bar = progress ? progress.querySelector('.scroll-progress__bar') : null;

    if (activeEl) activeEl.addEventListener('scroll', update, { passive: true });
    if (bar) {
      bar.addEventListener('mousedown', onDown);
      bar.addEventListener('touchstart', onDown);
    }
    update(); // первичный пересчёт
  };

  const update = () => {
    if (!activeEl || !progress || !bar) return;

    const h = activeEl.clientHeight;
    const sh = activeEl.scrollHeight;
    const st = activeEl.scrollTop;

    // если скролла нет — прячем бар
    if (sh <= h + 1) {
      progress.classList.remove('visible');
      return;
    }
    progress.classList.add('visible');

    const trackH = progress.getBoundingClientRect().height;
    const minThumb = 24;
    const thumbH = Math.max((h / sh) * trackH, minThumb);
    const maxScroll = sh - h;
    const maxTop = trackH - thumbH;
    const topPx = maxScroll > 0 ? (st / maxScroll) * maxTop : 0;

    bar.style.height = `${thumbH}px`;
    bar.style.top = `${topPx}px`;
  };

  // drag для активного бара
  const onDown = (e) => {
    if (!activeEl || !bar) return;
    dragging = true;
    startY = e.touches ? e.touches[0].clientY : e.clientY;
    startScroll = activeEl.scrollTop;
    document.body.style.userSelect = 'none';
    e.preventDefault();
  };

  const onMove = (e) => {
    if (!dragging || !activeEl || !bar || !progress) return;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    const dy = y - startY;

    const trackH = progress.getBoundingClientRect().height;
    const h = activeEl.clientHeight;
    const sh = activeEl.scrollHeight;

    const denom = Math.max(1, (trackH - bar.offsetHeight));
    const ratio = (sh - h) / denom;
    activeEl.scrollTop = startScroll + dy * ratio;
  };

  const onUp = () => {
    dragging = false;
    document.body.style.userSelect = '';
  };

  // глобальные слушатели (одни на всё приложение)
  window.addEventListener('resize', () => { bindToActive(); update(); });
  window.addEventListener('mousemove', onMove, { passive: false });
  window.addEventListener('touchmove', onMove, { passive: false });
  window.addEventListener('mouseup', onUp);
  window.addEventListener('touchend', onUp);

  // следим за переключением экранов (класс hidden_screen меняется)
  const mo = new MutationObserver(() => { bindToActive(); });
  mo.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'] });

  // старт
  bindToActive();
}
initCustomScroll();


// // --- Плавное скрытие для всех .fadeable с .hidden_screen --- //
// (function installSmoothHidden() {
//   const TAG = '_screen';

//   const makeFadeable = (el) => {
//     if (!(el instanceof Element)) return;
//     if (!el.classList) return;
//     if (!el.className.includes(TAG)) return; // экраны вида main_screen, loader_screen...
//     if (!el.classList.contains('fadeable')) el.classList.add('fadeable');

//     // запомним нормальный display
//     if (!el.dataset.displayOrig) {
//       const cs = getComputedStyle(el);
//       el.dataset.displayOrig = cs.display !== 'none' ? cs.display : 'block';
//     }
//     // если изначально скрыт — сразу уберём из потока
//     if (el.classList.contains('hidden_screen')) {
//       el.style.display = 'none';
//     }
//   };

//   // 1) промаркировать уже существующие
//   document.querySelectorAll('[class*="_screen"]').forEach(makeFadeable);

//   // 2) следить за добавлением новых узлов и изменением классов
//   const mo = new MutationObserver((muts) => {
//     for (const m of muts) {
//       // новые элементы
//       if (m.type === 'childList') {
//         m.addedNodes.forEach((n) => {
//           if (!(n instanceof Element)) return;
//           if (n.matches?.('[class*="_screen"]')) makeFadeable(n);
//           // и вложенные
//           n.querySelectorAll?.('[class*="_screen"]').forEach(makeFadeable);
//         });
//       }
//       // изменения классов
//       if (m.type === 'attributes' && m.attributeName === 'class') {
//         const el = m.target;
//         if (!(el instanceof Element)) continue;
//         if (!el.classList.contains('fadeable')) continue;

//         // показываем: вернуть display ПЕРЕД началом fade-in
//         if (!el.classList.contains('hidden_screen')) {
//           const orig = el.dataset.displayOrig || 'block';
//           el.style.display = orig;
//           // форс-рефлоу — чтобы точно стартовал переход opacity
//           // eslint-disable-next-line no-unused-expressions
//           el.offsetWidth;
//         }
//       }
//     }
//   });

//   mo.observe(document.body, {
//     subtree: true,
//     childList: true,
//     attributes: true,
//     attributeFilter: ['class'],
//   });

//   // 3) когда opacity-переход закончился и элемент скрыт — убрать из потока
//   document.body.addEventListener('transitionend', (e) => {
//     const el = e.target;
//     if (!(el instanceof Element)) return;
//     if (!el.classList.contains('fadeable')) return;
//     if (e.propertyName !== 'opacity') return;
//     if (el.classList.contains('hidden_screen')) {
//       el.style.display = 'none';
//     }
//   }, true);
// })();





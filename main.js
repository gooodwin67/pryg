// npx vite --host
// npm install vite-plugin-top-level-await --save-dev

// npm run build 
// npm run deploy 

////////////phys/////////


import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


console.clear();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xc9e1f4);
// scene.fog = new THREE.Fog(scene.background, 1, 60);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 9, 11);

let stats = new Stats();
document.body.appendChild(stats.dom);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap


// let controls = new OrbitControls(camera, labelRenderer.domElement);
// controls.enableDamping = true;
// controls.target.set(0, 0, 0);

/*//////////////////////////////////////////////////////////////////////////////////////////*/






async function initClases() {
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
  stats.update();
  renderer.render(scene, camera);

}
renderer.setAnimationLoop(animate);

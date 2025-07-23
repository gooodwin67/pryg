// npx vite --host
// npm install vite-plugin-top-level-await --save-dev

// npm run build 
// npm run deploy 

////////////phys/////////


import * as THREE from 'three';
import Stats from 'three/addons/libs/stats.module.js';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import RAPIER from '@dimforge/rapier3d-compat';


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




let controls = new OrbitControls(camera, renderer.domElement);





/*//////////////////////////////////////////////////////////////////////////////////////////*/


let playerEyeIn;
let block;
let playerEye;
let playerMouth;
let eyeWidth = 0.1;
let eyeHeight = 0.1;

let eventQueue;



async function initClases() {

  await RAPIER.init();
  world = new RAPIER.World(new RAPIER.Vector3(0, -9.81, 0));
  eventQueue = new RAPIER.EventQueue(true);

  const geometry1 = new THREE.BoxGeometry(0.1, 0.1, 0.1);
  const material1 = new THREE.MeshStandardMaterial({ color: 0xaa0000 });
  block = new THREE.Mesh(geometry1, material1);
  block.position.y = 2
  block.position.x = 3
  scene.add(block);



  const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
  const material = new THREE.MeshStandardMaterial({ color: 0x0000aa });
  let playerHead = new THREE.Mesh(geometry, material);

  const geometryEye = new THREE.CircleGeometry(0.08, 10);
  const materialEye = new THREE.MeshBasicMaterial({ color: 0xffffff });
  playerEye = new THREE.Mesh(geometryEye, materialEye);
  playerEye.position.z = 0.23
  playerEye.position.x = 0.10
  playerEye.position.y = 0.1

  const geometryEyeIn = new THREE.CircleGeometry(0.03, 10);
  const materialEyeIn = new THREE.MeshBasicMaterial({ color: 0x000000 });
  playerEyeIn = new THREE.Mesh(geometryEyeIn, materialEyeIn);
  playerEyeIn.position.z = 0.25
  playerEyeIn.position.x = 0.10
  playerEyeIn.position.y = 0.1

  const geometryMouth = new THREE.BoxGeometry(0.15, 0.02, 0.001);
  const materialMouth = new THREE.MeshBasicMaterial({ color: 0xffffff });
  playerMouth = new THREE.Mesh(geometryMouth, materialMouth);
  playerMouth.position.z = 0.22
  playerMouth.position.x = 0.12
  playerMouth.position.y = -0.1

  player = new THREE.Group();
  player.add(playerHead)
  player.add(playerEye)
  player.add(playerEyeIn)
  player.add(playerMouth)

  player.userData.name = 'player';
  player.userData.playerPowerJump = 3;
  scene.add(player);
  addPhysicsToObject(player);








  const geometryPlane = new THREE.BoxGeometry(2, 10, 1);
  const materialPlane = new THREE.MeshStandardMaterial({ color: 0x00cc00 });
  plane = new THREE.Mesh(geometryPlane, materialPlane);
  plane.userData.name = 'plane';
  plane.position.y = -6;
  scene.add(plane);
  addPhysicsToObject(plane);

  for (let i = 0; i < 50; i++) {
    let newPlane = plane.clone();
    newPlane.position.x = (i + 1) * getRandomNumber(3, 4);
    newPlane.position.y = getRandomNumber(-4, -7);
    scene.add(newPlane);
    addPhysicsToObject(newPlane);
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

    playerMove(player, playerBody);
    camera.position.set(player.position.x + 0, player.position.y + 1, 15)

    camera.lookAt(player.position)
    //camera.position.x += 0.03;



    eventQueue.drainCollisionEvents((handle1, handle2, started) => {


      allWallBodyCollision.forEach((value, index) => {
        if (handle2 == value.handle && started) {

          block.position.set(dynamicBodies[allWallBodyCollision.indexOf(value) + 2][0].position.x, dynamicBodies[allWallBodyCollision.indexOf(value) + 2][0].position.y + 5, block.position.z)
          console.log(dynamicBodies[allWallBodyCollision.indexOf(value) + 1][0])
        }
      })
    })


    stats.update();
    for (let i = 0, n = dynamicBodies.length; i < n; i++) {
      dynamicBodies[i][0].position.copy(dynamicBodies[i][1].translation())
      dynamicBodies[i][0].quaternion.copy(dynamicBodies[i][1].rotation())
    }

    world.step(eventQueue)//(/*eventQueue*/);

    renderer.render(scene, camera);
  }

}

renderer.setAnimationLoop(animate);











let dynamicBodies = [];
let allWallBodyCollision = [];

let player;
let playerBody;
let playerCollider;
let playerShape;



let plane;
let planes = [];



function addPhysicsToObject(obj) {
  let body;
  let shape;

  const originalRotation = obj.rotation.clone();
  obj.rotation.set(0, 0, 0);
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  obj.rotation.copy(originalRotation);

  if (obj.userData.name.includes('player')) {

    player.userData.size = size;
    player.userData.orgRotation = originalRotation;

    body = world.createRigidBody(RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(false, false, true).setLinearDamping(0).setAngularDamping(2.0));
    shape = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2).setMass(1).setRestitution(0).setFriction(0);

    playerBody = body;
    playerShape = shape;
    shape.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);

    playerCollider = world.createCollider(shape, body)

    player.userData.handle = playerBody.handle;

    dynamicBodies.push([obj, body, obj.id])


    // const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5, wireframe: true });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(obj.position.x, obj.position.y, obj.position.z)
    // cube.rotation.copy(originalRotation);
    // scene.add(cube);

  }
  else if (obj.userData.name.includes('plane')) {

    plane.userData.size = size;
    plane.userData.orgRotation = originalRotation;

    body = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2.0));
    shape = RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2).setMass(1).setRestitution(0.4).setFriction(10);


    shape.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);

    let collide = world.createCollider(shape, body)

    allWallBodyCollision.push(collide);

    plane.userData.handle = body.handle;

    dynamicBodies.push([obj, body, obj.id])


    // const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5, wireframe: true });
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.set(obj.position.x, obj.position.y, obj.position.z)
    // cube.rotation.copy(originalRotation);
    // scene.add(cube);

  }
}

window.addEventListener('keydown', onKeyDown);
window.addEventListener('keyup', onKeyUp);


function onKeyDown(event) {
  switch (event.code) {
    case 'KeyW':
    case 'ArrowUp':
      player.userData.readyJump = true;
      break;
    case 'KeyS':
    case 'ArrowDown':
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
    case 'KeyW':
    case 'ArrowUp':
      if (player.userData.readyJump) player.userData.jumping = true;
      player.userData.readyJump = false;
      break;
    case 'KeyS':
    case 'ArrowDown':
      break;
    case 'KeyA':
    case 'ArrowLeft':
      break;
    case 'KeyD':
    case 'ArrowRight':
      break;
  }
}

function playerMove(obj, objBody) {
  if (obj.userData.readyJump) {
    if (playerEye.scale.x < 1.4) {
      playerEye.scale.x += 0.01;
      playerMouth.scale.y += 0.05;
    }
    if (playerEye.scale.y < 1.4) {
      playerEye.scale.y += 0.01;
    }
    if (obj.userData.playerPowerJump < 10) obj.userData.playerPowerJump += 0.1;
  }
  else {

  }

  if (obj.userData.jumping) {
    playerBody.applyImpulse({ x: obj.userData.playerPowerJump / 2, y: obj.userData.playerPowerJump, z: 0 }, true);
    obj.userData.playerPowerJump = 3;
    playerEye.scale.set(1, 1, 1);
    playerMouth.scale.y = 1;
    obj.userData.jumping = false;
  }



  // Получаем позицию блока в системе координат головы
  const targetLocalPos = new THREE.Vector3();
  block.getWorldPosition(targetLocalPos);
  player.worldToLocal(targetLocalPos);


  // Получаем позицию глаза в системе координат головы
  const eyeLocalPos = new THREE.Vector3();
  playerEyeIn.getWorldPosition(eyeLocalPos);
  player.worldToLocal(eyeLocalPos);

  // Вычисляем направление в локальных координатах
  const direction = new THREE.Vector3()
    .subVectors(targetLocalPos, eyeLocalPos)
    .normalize();

  // Вычисляем смещение
  let offsetX = direction.x / 20;
  let offsetY = direction.y / 20;

  // Ограничиваем смещение
  offsetX = Math.max(-0.06, Math.min(0.06, offsetX));
  offsetY = Math.max(-0.06, Math.min(0.06, offsetY));

  // Применяем смещение
  playerEyeIn.position.x = playerEye.position.x + offsetX;
  playerEyeIn.position.y = playerEye.position.y + offsetY;
};


function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min
}
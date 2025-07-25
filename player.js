import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class PlayerClass {
 constructor() {
  this.playerHeight = 0.5;
  this.playerWidth = 0.3;
  this.player = new THREE.Mesh(new THREE.BoxGeometry(this.playerWidth, this.playerHeight, this.playerWidth), new THREE.MeshStandardMaterial({ color: 0xff0000, transparent: true, opacity: 0.0 }));
  this.player.rotation.y = Math.PI;
  this.player.userData.name = 'player';
  this.player.userData.readyJump = false;
  this.player.userData.jumping = false;
  this.player.userData.playerPowerJump = 1;
  this.player.userData.body = 0;
  this.player.userData.onGround = false;
  this.playerModel;

  this.playerOut = new THREE.Mesh(new THREE.BoxGeometry(this.playerWidth, this.playerHeight + 0.1, this.playerWidth1), new THREE.MeshStandardMaterial({ color: 0xffff00, transparent: true, opacity: 0.0 }));

  this.playerOut.userData.id = this.player.uuid;


  this.leftHand;
  this.rightHand;
  this.head;
  this.headPosition;
 }


 async loadPlayerModel() {
  const gltfLoader = new GLTFLoader();
  const url = 'models/players/player1.glb';


  await gltfLoader.loadAsync(url).then((gltf) => {
   const root = gltf.scene;
   this.playerModel = root;



   this.leftHand = this.playerModel.children[0].children[1];
   this.rightHand = this.playerModel.children[0].children[0];
   this.head = this.playerModel.children[0].children[2];


   this.playerModel.rotation.y = Math.PI;
   this.playerModel.scale.x = 0.6;
   this.playerModel.scale.y = 0.6;
   this.playerModel.scale.z = 0.6;
  })
 }

 playerMove() {




  this.playerModel.position.x = this.player.position.x;
  this.playerModel.position.y = this.player.position.y - this.playerHeight / 2;
  this.playerModel.position.z = this.player.position.z;


  this.playerOut.position.copy(this.player.position);
  this.playerOut.rotation.copy(this.player.rotation);





  //this.playerModel.quaternion.copy(this.player.userData.body.rotation())

  const targetRightHandRotation = this.player.userData.readyJump ? Math.PI / 2 : 0;
  const targetLeftHandRotation = this.player.userData.readyJump ? -Math.PI / 2 : 0;
  const targetHeadRotation = this.player.userData.readyJump ? Math.PI / 8 : 0;

  const targetHeadPositionY = this.player.userData.readyJump ? 0.75 : 1.18;
  const targetHeadPositionZ = this.player.userData.readyJump ? 0.75 : 0.15;

  const targetBodyPositionX = this.player.userData.readyJump ? this.player.position.x - 1.25 : this.player.position.x;
  const targetBodyPositionY = this.player.userData.readyJump ? this.player.position.y + 0.75 : this.player.position.y - this.playerHeight / 2;


  //Плавно интерполируем углы поворота
  this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, targetRightHandRotation, 0.1);
  this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, targetLeftHandRotation, 0.1);
  this.head.rotation.x = this.lerp(this.head.rotation.x, targetHeadRotation, 0.1);

  // Плавно интерполируем позицию головы по оси Y и Z
  this.head.position.y = this.lerp(this.head.position.y, targetHeadPositionY, 0.1);
  this.head.position.z = this.lerp(this.head.position.z, targetHeadPositionZ, 0.1);

  // Плавно интерполируем позицию туловища по оси X Y
  // this.playerModel.position.x = this.lerp(this.player.position.x, targetBodyPositionX, 0.1);
  //this.playerModel.position.y = this.lerp(this.player.position.y - this.playerHeight / 2, targetBodyPositionY, 0.1);

  //Поворот тела
  const rotationBodyX = this.player.userData.readyJump ? 0.70 : 0;
  this.player.userData.body.setRotation({
   w: this.player.userData.body.rotation().w,
   x: this.lerp(this.player.userData.body.rotation().x, rotationBodyX, 0.1),
   y: this.player.userData.body.rotation().y,
   z: this.player.userData.body.rotation().z,
  });

  if (this.player.userData.readyJump) {
   if (this.player.userData.playerPowerJump < 5) this.player.userData.playerPowerJump += 0.1;
  }

  if (this.player.userData.jumping) {
   this.player.userData.body.applyImpulse({ x: this.player.userData.playerPowerJump / 3.0, y: this.player.userData.playerPowerJump, z: 0 }, true);
   this.player.userData.playerPowerJump = 1;
   this.player.userData.jumping = false;
  }
 }
 lerp(start, end, t) {
  return start + (end - start) * t;
 }



}
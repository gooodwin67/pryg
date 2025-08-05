import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { detectCollisionCubes, detectCollisionCubeAndArray } from "./functions";


export class PlayerClass {
  constructor(scene, audioClass, levelClass) {
    this.scene = scene;
    this.audioClass = audioClass;
    this.levelClass = levelClass;
    this.playerHeight = 0.7;
    this.playerWidth = 0.3;
    this.player = new THREE.Mesh(new THREE.BoxGeometry(this.playerWidth, this.playerHeight, this.playerWidth), new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: true, opacity: 0.0 }));
    this.player.material.depthWrite = false; // Отключаем запись в буфер глубины
    this.player.rotation.y = Math.PI;
    this.player.position.y = 0.8;
    this.player.position.x = -2;
    this.player.userData.name = 'player';
    this.player.userData.readyJump = false;
    this.player.userData.jumping = false;
    this.player.userData.playerPowerJump = 1;
    this.player.userData.body = 0;
    this.player.userData.onGround = false;
    this.player.userData.audio = [];
    this.player.userData.canFly = false;
    this.player.userData.hatBoost = 0;
    this.player.userData.numHatBoost = 0;
    this.player.userData.live = true;
    this.player.userData.startPos;

    this.playerModel;

    this.playerOut = new THREE.Mesh(new THREE.BoxGeometry(this.playerWidth, this.playerHeight + 0.1, this.playerWidth), new THREE.MeshStandardMaterial({ color: 0xffff00, transparent: true, opacity: 0.0 }));
    this.playerOut.material.depthWrite = false; // Отключаем запись в буфер глубины

    this.playerOut.userData.id = this.player.uuid;


    this.leftHand;
    this.rightHand;
    this.head;
    this.headPosition;

    this.playerColors = [0xf2b0b0, 0xb0f2b0, 0xf4f07a, 0xb0b0f2];
  }


  async loadPlayerModel() {
    const gltfLoader = new GLTFLoader();
    const url = 'models/players/player1.glb';


    await gltfLoader.loadAsync(url).then((gltf) => {
      const root = gltf.scene;
      this.playerModel = root;

      this.playerModel.traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });
      this.playerModel.children[0].traverse(function (child) {
        if (child.isMesh) {
          child.castShadow = true;
        }
      });

      this.leftHand = this.playerModel.children[0].children[1];
      this.rightHand = this.playerModel.children[0].children[0];
      this.head = this.playerModel.children[0].children[2];
      this.player.userData.head = this.head;


      this.playerModel.rotation.y = Math.PI;
      this.playerModel.scale.x = 0.7;
      this.playerModel.scale.y = 0.7;
      this.playerModel.scale.z = 0.7;
    })
  }

  playerMove() {

    if (detectCollisionCubeAndArray(this.player, this.levelClass.sensorPlanes)) {
      console.log(123)
    }




    if (detectCollisionCubeAndArray(this.player, this.levelClass.topPlanes)) {
      this.player.userData.onGround = true;
    }
    else {
      this.player.userData.onGround = false;
    }

    this.playerModel.position.x = this.player.position.x;
    this.playerModel.position.y = this.player.position.y - this.playerHeight / 2;
    this.playerModel.position.z = this.player.position.z;


    this.playerOut.position.copy(this.player.position);
    this.playerOut.rotation.copy(this.player.rotation);





    if (detectCollisionCubeAndArray(this.player, this.levelClass.boostHatMeshes)) {
      if (this.player.userData.canFly) {
        this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(detectCollisionCubeAndArray(this.player, this.levelClass.boostHatMeshes))].position.copy(new THREE.Vector3(
          this.player.userData.head.getWorldPosition(new THREE.Vector3).x - 0.05,
          this.player.userData.head.getWorldPosition(new THREE.Vector3).y + 0.15,
          this.player.userData.head.getWorldPosition(new THREE.Vector3).z + 0.1)
        );

        this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(detectCollisionCubeAndArray(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += 0.4;


      }
      if (!this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(detectCollisionCubeAndArray(this.player, this.levelClass.boostHatMeshes))].userData.fly) {
        this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(detectCollisionCubeAndArray(this.player, this.levelClass.boostHatMeshes));
        this.player.userData.canFly = true;
        this.player.userData.hatBoost = 2;
      }
      this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(detectCollisionCubeAndArray(this.player, this.levelClass.boostHatMeshes))].userData.fly = true;

    }








    if (this.playerModel.position.y < -2) this.player.userData.live = false;

    if (!this.player.userData.live) {

      this.player.userData.body.setTranslation(this.player.userData.startPos);


      this.player.userData.readyJump = false;
      this.player.userData.canFly = false;
      this.player.userData.hatBoost = 0;
      this.player.userData.numHatBoost = 0;

      this.player.userData.jumping = false;
      this.player.userData.playerPowerJump = 1;

      this.player.userData.onGround = false;
      this.player.userData.body.setLinvel({ x: 0.0, y: 0.0, z: 0.0 }, true);








    }

    else {
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
        if (this.player.userData.playerPowerJump < 8) this.player.userData.playerPowerJump += 0.2;
      }

      if (this.player.userData.jumping) {

        this.player.userData.body.setLinvel({ x: 0, y: 0, z: 0 }, true);

        this.player.userData.body.applyImpulse({
          x: this.levelClass.gameDir == 'hor' ? this.player.userData.playerPowerJump / 3.0 : 0,
          y: this.player.userData.playerPowerJump / 1.4,
          z: 0
        }, true);
        this.player.userData.playerPowerJump = 1;


        this.player.userData.jumping = false;
      }
    }
  }
  lerp(start, end, t) {
    return start + (end - start) * t;
  }






}
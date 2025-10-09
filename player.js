import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { detectCollisionCubes, detectCollisionCubeAndArrayInst, detectCollisionCubeAndArray, makeCollisionMaskFromArrays, getObjectGroupInfo } from "./functions";


export class PlayerClass {
  constructor(scene, audioClass, levelClass, paramsClass, camera) {
    this.scene = scene;
    this.audioClass = audioClass;
    this.levelClass = levelClass;
    this.paramsClass = paramsClass;
    this.camera = camera;

    this.playerHeight = 0.9;
    this.playerWidth = 0.5;
    this.player = new THREE.Mesh(new THREE.BoxGeometry(this.playerWidth, this.playerHeight, this.playerWidth), new THREE.MeshPhongMaterial({ color: 0xff0000, transparent: true, opacity: 0.0 }));
    this.player.material.depthWrite = false; // Отключаем запись в буфер глубины
    this.player.rotation.y = Math.PI;
    this.player.position.y = 1.2;
    this.player.position.x = -0.4;
    this.player.userData.name = 'player';
    this.player.userData.readyJump = false;
    this.player.userData.jumping = false;
    this.player.userData.playerPowerJump = 1;
    this.player.userData.body = 0;
    this.player.userData.onGround = false;
    this.player.userData.audio = [];
    this.player.userData.canFly = false;
    this.player.userData.canFlyNum = null;
    this.player.userData.canFlyJumps = 0;
    this.player.userData.canFlyJumpsMax = 3;
    this.player.userData.live = true;
    this.player.userData.startPos;
    this.player.userData.deadPos;
    this.player.userData.playerAlive = false;

    this.player.userData.lives = 3;

    this.player.userData.finish = false;


    this.playerModel;

    this.playerOut = new THREE.Mesh(new THREE.BoxGeometry(this.playerWidth, this.playerHeight + 0.1, this.playerWidth), new THREE.MeshStandardMaterial({ color: 0xffff00, transparent: true, opacity: 0.0 }));
    this.playerOut.material.depthWrite = false; // Отключаем запись в буфер глубины

    this.playerOut.userData.id = this.player.uuid;


    this.leftHand;
    this.rightHand;
    this.head;
    this.headPosition;

    this.playerColors = [0xf2b0b0, 0xb0f2b0, 0xf4f07a];
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
      this.playerModel.scale.x = 1.3;
      this.playerModel.scale.y = 1.3;
      this.playerModel.scale.z = 1.3;
    })
  }

  playerMove() {

    // console.log(this.paramsClass.gameDir)

    if ((this.paramsClass.gameDir == 'hor' && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround) || (this.paramsClass.gameDir == 'vert' && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + 0.5 && this.player.userData.onGround)) {
      console.log('finish')
    }

    if (detectCollisionCubeAndArrayInst(this.player, this.levelClass.objs.sensorPlanes.data)) {
      const [memberGroups, filterGroups] = getObjectGroupInfo(this.player.userData.collider);
      if (filterGroups[0] == 0) {
        this.player.userData.collider.setCollisionGroups(makeCollisionMaskFromArrays([1], [1]))
      }
    }
    else {
      const [memberGroups, filterGroups] = getObjectGroupInfo(this.player.userData.collider);
      if (filterGroups[0] != 0) {

        this.player.userData.collider.setCollisionGroups(makeCollisionMaskFromArrays([1], [0, 1]))

      }
    }





    if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && detectCollisionCubeAndArrayInst(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(detectCollisionCubeAndArrayInst(this.player, this.levelClass.boostHatMeshes))].userData.fly && (this.levelClass.boostHatMeshes.indexOf(detectCollisionCubeAndArrayInst(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum)) {

      if (!this.player.userData.canFly) {
        this.player.userData.canFly = true;
        this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax;
        this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(detectCollisionCubeAndArrayInst(this.player, this.levelClass.boostHatMeshes));
        this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = true;
        if (this.audioClass.takeAudio.isPlaying) this.audioClass.stopMusic(['take']);
        this.audioClass.playMusic(['take']);
      }




    }

    if (this.player.userData.canFlyJumps) {
      this.levelClass.boostHatModels[this.player.userData.canFlyNum].position.copy(new THREE.Vector3(
        this.player.userData.head.getWorldPosition(new THREE.Vector3).x - 0.03,
        this.player.userData.head.getWorldPosition(new THREE.Vector3).y + 0.20,
        this.player.userData.head.getWorldPosition(new THREE.Vector3).z + 0)
      );
      this.levelClass.boostHatModels[this.player.userData.canFlyNum].children[0].children[1].rotation.y += 0.4;

    }








    if (detectCollisionCubeAndArrayInst(this.player, this.levelClass.objs.topPlanes.data) || detectCollisionCubeAndArrayInst(this.player, this.levelClass.playerOuts)) {
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





    if (this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.paramsClass.gameDir == 'hor') {
      this.player.userData.lives = 0;
      this.levelClass.needDeath(this.player);
    }

    if (this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY) * 2 && this.player.userData.live) {
      this.player.userData.lives = 0;
      this.levelClass.needDeath(this.player);
    }




    if (this.player.position.y < -4) {
      if (this.levelClass.players.length < 2) {

        if (this.player.userData.live) {
          this.audioClass.pauseMusic(['back']);
          this.audioClass.playMusic(['inwater']);




          if (!this.levelClass.levelsMode) {
            if (this.levelClass.gameNum == 2) this.player.userData.lives--;
            else if (this.levelClass.gameNum == 4) this.player.userData.lives = 0;

            if (this.levelClass.gameNum == 2 && this.player.userData.lives < 1) this.levelClass.showPopupInGame(true);
            else if (this.levelClass.gameNum == 4 && this.player.userData.lives < 1) this.levelClass.showPopupInGame(false);
          }
          else {
            this.player.userData.lives = 0;
            this.levelClass.showPopupInGame(true);
          }
          this.paramsClass.gameStarting = false;
        }
        this.player.userData.canFlyJumps = 0;
        this.player.userData.live = false;
      }
      else {
        if (this.player.userData.live) {
          if (this.levelClass.gameNum == 2) this.player.userData.lives--;
          else if (this.levelClass.gameNum == 4) this.player.userData.lives = 0;
          this.audioClass.stopMusic(['inwater']);
          this.audioClass.playMusic(['inwater']);
          this.player.userData.canFlyJumps = 0;
          this.player.userData.live = false;
        }
        if (this.levelClass.players.every(value => !value.player.userData.live) && this.levelClass.players.every(value => value.player.userData.lives < 1) && this.paramsClass.gameStarting) {
          this.audioClass.pauseMusic(['back']);
          this.levelClass.showPopupInGame(false);
          this.paramsClass.gameStarting = false;
        }
      }
      if (this.player.userData.lives > 0) {
        this.levelClass.boostHatModels.forEach((value, index, array) => {
          value.userData.fly = false;
        })
        this.playerAliving(false);
        this.audioClass.playMusic(['back']);
      }









      if (!this.player.userData.live) {

        this.player.userData.body.setLinvel(new THREE.Vector3(0, 0, 0));


        if (this.player.userData.canFlyNum) this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = false;

        if (this.player.userData.deadPos != this.player.userData.startPos) {

          this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find(item =>
            item.position.x >= this.player.position.x - 5
          )?.position;
          if (this.player.userData.deadPos == undefined) {
            this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position;
          }

        }


        if (this.player.userData.playerAlive) {

          this.player.userData.readyJump = false;
          this.player.userData.canFly = false;
          this.player.userData.canFlyJumps = 0;
          this.player.userData.canFlyNum = null;


          this.player.userData.jumping = false;
          this.player.userData.playerPowerJump = 1;

          this.player.userData.onGround = false;
          this.player.userData.body.setLinvel({ x: 0.0, y: 0.0, z: 0.0 }, true);

          this.player.userData.body.setTranslation(new THREE.Vector3(this.player.userData.deadPos.x + (0.1 + Math.random() * 0.2), this.player.userData.deadPos.y + 0.3, this.player.userData.deadPos.z));

          this.player.userData.deadPos = new THREE.Vector3(0, 0, 0);

          this.player.userData.live = true;

          this.player.userData.playerAlive = false;
        }

      }
    }

    else {
      //this.playerModel.quaternion.copy(this.player.userData.body.rotation())

      const targetRightHandRotation = this.player.userData.readyJump ? Math.PI / 2 : 0;
      const targetLeftHandRotation = this.player.userData.readyJump ? -Math.PI / 2 : 0;

      const targetRightHandRotation2 = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0;
      const targetLeftHandRotation2 = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0;

      const targetHeadRotation = this.player.userData.readyJump ? Math.PI / 8 : 0;

      const targetHeadRotationZ = this.player.userData.body.linvel().y < -0.4 ? Math.PI / 7 : 0;
      const targetHeadRotationZ2 = this.player.userData.body.linvel().y > 0.4 ? Math.PI / -5.9 : 0;

      const targetHeadPositionY = this.player.userData.readyJump ? 0.75 : 1.18;
      const targetHeadPositionZ = this.player.userData.readyJump ? 0.55 : 0.15;



      //Плавно интерполируем углы поворота
      this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, targetRightHandRotation, 0.1);
      this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, targetLeftHandRotation, 0.1);

      this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, targetRightHandRotation2, 0.1);
      this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, targetLeftHandRotation2, 0.1);

      this.head.rotation.x = this.lerp(this.head.rotation.x, targetHeadRotation, 0.1);

      // Плавно интерполируем позицию головы по оси Y и Z
      this.head.position.y = this.lerp(this.head.position.y, targetHeadPositionY, 0.1);
      this.head.position.z = this.lerp(this.head.position.z, targetHeadPositionZ, 0.1);

      this.head.rotation.z = this.lerp(this.head.rotation.z, targetHeadRotationZ, 0.1);
      this.head.rotation.z = this.lerp(this.head.rotation.z, targetHeadRotationZ2, 0.1);

      const targetPlayerRotationZ = !this.player.userData.onGround ? Math.PI / 1.2 : Math.PI;
      this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, targetPlayerRotationZ, 0.4);




      //Поворот тела
      const rotationBodyX = this.player.userData.readyJump ? 0.60 : 0;
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
          x: this.paramsClass.gameDir == 'hor' ? this.player.userData.playerPowerJump / 3 : 0,
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


  playerAliving(reset) {
    if (reset) {
      this.player.userData.deadPos = this.player.userData.startPos;
      this.player.userData.lives = 3;
    }
    this.player.userData.playerAlive = true;
    setTimeout(() => {
      this.paramsClass.gameStarting = true;

    }, 100);
  }



}
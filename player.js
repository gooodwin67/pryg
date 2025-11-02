import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

import { detectCollisionCubes, detectCollisionCubeAndArrayInst, detectCollisionCubeAndArray, makeCollisionMaskFromArrays, getObjectGroupInfo, getRandomNumber } from "./functions";


export class PlayerClass {
  constructor(dataClass, scene, audioClass, levelClass, paramsClass, camera, gameClass) {
    this.dataClass = dataClass;
    this.scene = scene;
    this.audioClass = audioClass;
    this.levelClass = levelClass;
    this.paramsClass = paramsClass;
    this.camera = camera;
    this.gameClass = gameClass;

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

    this.player.userData.score;


    this.player.userData.maxLives = 3;

    this.player.userData.lives = this.player.userData.maxLives;

    this.player.userData.bonusHeart = 0;

    this.player.userData.finish = false;

    this.player.userData.splash = false;


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

    // console.log(new THREE.Vector3(
    //   this.levelClass.players[0].player.userData.finish,
    //   this.levelClass.players[1].player.userData.finish,
    //   // this.levelClass.players[2].player.userData.finish,
    // ))

    if (this.levelClass.levelsMode && this.dataClass.levelCoopMode == 'coop') {
      if (this.levelClass.players.every(value => value.player.userData.finish)) {
        this.levelClass.players.forEach(element => {
          element.player.userData.body.setTranslation(new THREE.Vector3(0, -5, 0));

        });
      }
      else if (this.levelClass.players.every(value => value.player.userData.finish || value.player.userData.lives <= 0)) {

        this.levelClass.players.forEach(element => {
          element.player.userData.body.setTranslation(new THREE.Vector3(0, -5, 0));
          //this.player.userData.finish = false;
        });
      }
    }
    else if (this.levelClass.levelsMode && this.dataClass.levelCoopMode == 'contest') {

      if (this.levelClass.players.some(value => value.player.userData.finish)) {
        this.levelClass.players.forEach(element => {
          element.player.userData.body.setTranslation(new THREE.Vector3(0, -5, 0));
        });
      }
      // else if (this.levelClass.players.every(value => value.player.userData.finish || value.player.userData.lives <= 0)) {

      //   this.levelClass.players.forEach(element => {
      //     element.player.userData.body.setTranslation(new THREE.Vector3(0, -5, 0));
      //     //this.player.userData.finish = false;
      //   });
      // }
    }

    if ((this.paramsClass.gameDir == 'hor' && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround) || (this.paramsClass.gameDir == 'vert' && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + 0.5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0)) {

      if (!this.player.userData.finish) {

        this.player.userData.finish = true;


        // setTimeout(() => {
        //   // this.gameClass.gameStarting = false;
        //   this.levelClass.showPopupInGame(false, true);
        //   this.player.userData.finish = true;
        // }, 200);

      }

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
        if (this.audioClass.musicOn) this.audioClass.playMusic(['take']);
      }




    }










    if (detectCollisionCubeAndArrayInst(this.player, this.levelClass.objs.topPlanes.data) || detectCollisionCubeAndArrayInst(this.player, this.levelClass.playerOuts)) {
      this.player.userData.onGround = true;
    }
    else {
      this.player.userData.onGround = false;
    }

    if (detectCollisionCubeAndArrayInst(this.player, this.levelClass.objs.livesBlocks.data) && !detectCollisionCubeAndArrayInst(this.player, this.levelClass.objs.livesBlocks.data).userData.taked) {
      if (this.player.userData.lives < this.player.userData.maxLives) {
        this.player.userData.lives++;
        if (this.audioClass.takeAudio.isPlaying) this.audioClass.stopMusic(['take']);
        if (this.audioClass.musicOn) this.audioClass.playMusic(['take']);
        this.reLiveField();
        detectCollisionCubeAndArrayInst(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = true;
      }

    }


    this.playerModel.position.x = this.player.position.x;
    this.playerModel.position.y = this.player.position.y - this.playerHeight / 2;
    this.playerModel.position.z = this.player.position.z;


    this.playerOut.position.copy(this.player.position);
    this.playerOut.rotation.copy(this.player.rotation);




    if (this.paramsClass.gameDir == 'hor' && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.levelClass.canHorDie) {
      this.player.userData.lives = 0;
      this.reLiveField();
      this.player.userData.body.setTranslation(new THREE.Vector3(this.player.userData.body.translation().x, -5, 0));
    }

    if (this.paramsClass.gameDir == 'vert' && this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY - this.levelClass.bounds.bottomY) / 2 * 1.7 && this.player.userData.live) {
      this.player.userData.lives = 0;
      this.reLiveField();

      this.player.userData.body.setTranslation(new THREE.Vector3(0, -5, 0));
    }

    if (!this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == 'hor') {
      this.levelClass.canHorDie = true;
    }


    if (this.player.position.y < -2 && this.gameClass.gameStarting) {

      if (!this.player.userData.splash) {
        if (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live) {
          this.audioClass.stopMusic(['inwater'])
          if (this.audioClass.musicOn && this.dataClass.levelCoopMode == 'coop') {

            this.audioClass.playMusic(['inwater']);
          }
          else if (this.audioClass.musicOn && this.dataClass.levelCoopMode == 'contest' && !this.levelClass.players.some(value => value.player.userData.finish)) {
            this.audioClass.playMusic(['inwater']);
          }
        }
        this.levelClass.splash.trigger(new THREE.Vector3(this.player.position.x, this.player.position.y + 0.0, this.player.position.z), 2.0);
        this.levelClass.ring.trigger(new THREE.Vector3(this.player.position.x, this.player.position.y + 0.1, this.player.position.z));
      }
      this.player.userData.splash = true;
    }


    if (this.player.position.y < -4 && this.gameClass.gameStarting) {
      this.player.userData.splash = false;

      if (this.levelClass.players.length < 2) {

        if (this.player.userData.live) {
          this.audioClass.pauseMusic(['back']);
          if (!this.player.userData.finish && !this.gameClass.pause) {
            // if (this.audioClass.musicOn) this.audioClass.playMusic(['inwater']);
          }




          if (!this.levelClass.levelsMode) {

            if (this.levelClass.gameNum == 2) {
              this.player.userData.lives--;
            }
            else if (this.levelClass.gameNum == 4) {
              this.player.userData.lives = 0;
            }


            if (this.levelClass.gameNum == 2 && this.player.userData.lives < 1) this.levelClass.showPopupInGame(true);
            else if (this.levelClass.gameNum == 4 && this.player.userData.lives < 1) this.levelClass.showPopupInGame(false);
            this.paramsClass.allDie = true;
          }
          else {

            this.player.userData.lives = 0;
            if (this.player.userData.finish) {
              this.levelClass.showPopupInGame(false, true);
            }
            else {
              this.levelClass.showPopupInGame(true, true);
            }

            this.paramsClass.allDie = true;
          }
          if (this.player.userData.lives < 1) {

            // this.gameClass.gameStarting = false;


          }
        }
        this.player.userData.canFlyJumps = 0;
        this.player.userData.live = false;
      }
      else {
        if (this.player.userData.live) {

          if (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1) this.player.userData.lives--;
          else if (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) this.player.userData.lives = 0;

          if (this.levelClass.levelsMode) this.player.userData.lives = 0;

          // this.audioClass.stopMusic(['inwater']);
          if (!this.player.userData.finish) {
            // if (this.audioClass.musicOn) this.audioClass.playMusic(['inwater']);
          }
          this.player.userData.canFlyJumps = 0;
          this.player.userData.live = false;
        }
        if (this.levelClass.players.every(value => !value.player.userData.live) && this.levelClass.players.every(value => value.player.userData.lives < 1) && this.gameClass.gameStarting) {

          this.audioClass.pauseMusic(['back']);
          this.audioClass.pauseMusic(['rain']);
          if (this.dataClass.levelCoopMode == 'coop') {
            if (this.levelClass.players.every(value => value.player.userData.finish)) {
              this.levelClass.showPopupInGame(false, true);
            }
            else {

              this.levelClass.showPopupInGame(true);
            }

            this.paramsClass.allDie = true;
            // this.gameClass.gameStarting = false;
          }
          else if (this.dataClass.levelCoopMode == 'contest') {
            if (this.levelClass.players.some(value => value.player.userData.finish)) {
              this.levelClass.showPopupInGame(false, true);

              this.levelClass.players.forEach((value, index, array) => {
                if (value.player.userData.finish) {
                  this.dataClass.table.levelsStatusContest[this.levelClass.levelsMode - 1] = index + 1;
                  console.log(this.dataClass.table.levelsStatusContest)
                  this.dataClass.saveLocalData();
                  this.dataClass.loadLevelsContest();
                  this.dataClass.loadLocalData();
                }
              })
            }
            else {
              this.levelClass.showPopupInGame(true);
            }


            this.paramsClass.allDie = true;
            // this.gameClass.gameStarting = false;
          } {

          }
        }
      }
      if (this.player.userData.lives > 0) {
        this.levelClass.boostHatModels.forEach((value, index, array) => {
          value.userData.fly = false;
        })
        this.playerAliving(false);
        if (this.audioClass.musicOn) this.audioClass.playMusic(['back']);
        if (this.audioClass.musicOn && this.levelClass.worldClass.rain) this.audioClass.playMusic(['rain']);
      }









      if (!this.player.userData.live || this.player.userData.finish) {

        this.player.userData.body.setLinvel(new THREE.Vector3(0, 0, 0));


        if (this.player.userData.canFlyNum) this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = false;

        if (this.player.userData.deadPos != this.player.userData.startPos) {


          const planes = this.levelClass.objs.grassPlanes.data;
          for (let i = 0; i < planes.length - 1; i++) {
            const item = planes[i];
            if (item.position.x >= this.player.position.x - 1 && !item.userData.moveHor && !item.userData.moveVert) {
              this.player.userData.deadPos = item.position;
              break;
            }
          }


          // this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find(item =>
          //   item.position.x <= this.player.position.x - 5
          // )?.position;
          if (this.player.userData.deadPos == undefined) {
            this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position;///////////////////////////////
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

          if (this.paramsClass.gameDir == 'vert') {
            this.player.userData.body.setTranslation(new THREE.Vector3(this.player.userData.deadPos.x + (0.1 + Math.random() * 0.2), this.player.userData.deadPos.y + 1.1, this.player.userData.deadPos.z));
          }
          else {
            this.player.userData.body.setTranslation(new THREE.Vector3(this.player.userData.deadPos.x + (0.1 + Math.random() * 0.2), this.player.userData.deadPos.y + getRandomNumber(1.1, 3.1), this.player.userData.deadPos.z));
          }

          this.player.userData.deadPos = new THREE.Vector3(0, 0, 0);

          this.player.userData.live = true;

          this.player.userData.playerAlive = false;

        }

      }
      this.reLiveField()
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
    if (this.player.userData.canFlyJumps) {
      const boostHatModel = this.levelClass.boostHatModels[this.player.userData.canFlyNum];
      const playerHead = this.player.userData.head;

      // Один раз сохраняем исходный масштаб
      if (!boostHatModel.userData.originalScale) {
        boostHatModel.userData.originalScale = boostHatModel.scale.clone();
      }

      // Отцепляем в корень сцены, чтобы не ловить масштаб родителя
      if (boostHatModel.parent !== this.scene) {
        this.scene.attach(boostHatModel);
      }

      // Обновляем мировые матрицы
      this.playerModel.updateMatrixWorld(true);
      playerHead.updateWorldMatrix(true, false);

      // 1) Мировая поза головы
      const headWorldPosition = new THREE.Vector3().setFromMatrixPosition(this.player.userData.head.matrixWorld);
      const headWorldQuaternion = new THREE.Quaternion();
      this.player.userData.head.getWorldQuaternion(headWorldQuaternion);

      // 2) Фиксированный оффсет
      const hatQuaternionOffset = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, 0));
      const finalHatQuaternion = headWorldQuaternion.clone().multiply(hatQuaternionOffset);

      // 3) Смещение
      const hatLocalOffset = new THREE.Vector3(0.01, 0.14, 0.05);
      const hatWorldOffset = hatLocalOffset.clone().applyQuaternion(finalHatQuaternion);

      // 4) Применяем
      boostHatModel.quaternion.copy(finalHatQuaternion);
      boostHatModel.position.copy(headWorldPosition).add(hatWorldOffset);

      // Вращение пропеллера
      boostHatModel.children[0].children[1].rotation.y += 0.4;

      // ⚠️ Запоминаем последнюю позицию и ориентацию, чтобы потом "заморозить" её
      boostHatModel.userData.lastPos = boostHatModel.position.clone();
      boostHatModel.userData.lastQuat = boostHatModel.quaternion.clone();
    }
    else {
      // Если прыжки закончились — шапка больше не следует за игроком
      const num = this.player.userData.canFlyNum;
      if (num !== null && this.levelClass.boostHatModels[num]) {
        const boostHatModel = this.levelClass.boostHatModels[num];

        // Возвращаем "стационарное" состояние
        if (boostHatModel.userData.lastPos) {
          boostHatModel.position.copy(boostHatModel.userData.lastPos);
          boostHatModel.quaternion.copy(boostHatModel.userData.lastQuat);
        }

        // Сбрасываем флаг полёта
        boostHatModel.userData.fly = false;

        // Можно добавить лёгкое вращение пропеллера после “отсоединения”, чисто для красоты
        boostHatModel.children[0].children[1].rotation.y += 0.02;
      }
    }

  }
  lerp(start, end, t) {
    return start + (end - start) * t;
  }


  playerAliving(reset) {
    this.paramsClass.allDie = false;
    this.player.userData.playerAlive = true;

    if (reset) {
      this.levelClass.reloadLevel(this.levelClass.players.findIndex((value, index, array) => { return value.player == this.player }));
      this.levelClass.canHorDie = false;
      this.player.userData.deadPos = this.player.userData.startPos;
      if (!this.levelClass.levelsMode) {
        this.player.userData.lives = this.player.userData.maxLives;
      }
      else {
        this.player.userData.lives = 1;
      }

      this.reLiveField();

    }


    setTimeout(() => {
      this.gameClass.gameStarting = true;
      this.player.userData.splash = false;
    }, 100);
  }

  reLiveField() {
    let mas = document.querySelectorAll('.player_panel_bottom_lives')[this.levelClass.players.findIndex((value, index, array) => { return value.player == this.player })].children;
    let masHeartNum = document.querySelectorAll('.num_bonus_heart')[this.levelClass.players.findIndex((value, index, array) => { return value.player == this.player })];
    for (let i = 0; i < mas.length; i++) {
      if (i > this.player.userData.lives - 1) {
        mas[i].classList.add('opacity_screen')
      }
      else {
        if (mas[i].classList.contains('opacity_screen')) mas[i].classList.remove('opacity_screen');
      }
    }
    if (this.player.userData.lives > 3) {
      if (masHeartNum.classList.contains('opacity_screen')) masHeartNum.classList.remove('opacity_screen');
      masHeartNum.textContent = this.player.userData.bonusHeart;

    }
    else {
      if (!masHeartNum.classList.contains('opacity_screen')) masHeartNum.classList.add('opacity_screen');
    }


  }



}
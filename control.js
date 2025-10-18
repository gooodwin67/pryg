import * as THREE from "three";

export class ControlClass {
  constructor(levelClass, isMobile, renderer, camera, paramsClass) {
    this.levelClass = levelClass;
    this.isMobile = isMobile;
    this.renderer = renderer;
    this.camera = camera;
    this.paramsClass = paramsClass;

    this.mouse = new THREE.Vector3;
    this.raycaster = new THREE.Raycaster;

  }

  addKeyListeners() {
    window.addEventListener('keydown', this.onKeyDown);
    window.addEventListener('keyup', this.onKeyUp);
    window.addEventListener('mousedown', this.onKeyDown);
    window.addEventListener('mouseup', this.onKeyUp);
    document.addEventListener('touchend', this.onTapUp);
    document.addEventListener('touchstart', this.onTapDown);
  }

  removedKeyListeners() {
    window.removeEventListener('keydown', this.onKeyDown);
    window.removeEventListener('keyup', this.onKeyUp);
    window.removeEventListener('mousedown', this.onKeyDown);
    window.removeEventListener('mouseup', this.onKeyUp);
    document.removeEventListener('touchend', this.onTapUp);
    document.removeEventListener('touchstart', this.onTapDown);
  }




  onTapDown = (event) => {
    let rect = this.renderer.domElement.getBoundingClientRect();
    event = event.changedTouches[0];
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = - ((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    if (this.mouse.x > 0) {
      this.downKeys(this.levelClass.players[0].player);
    }
    else {
      if (this.levelClass.players.length > 1) this.downKeys(this.levelClass.players[1].player);
    }
  }



  onTapUp = (event) => {
    let rect = this.renderer.domElement.getBoundingClientRect();
    event = event.changedTouches[0];
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = - ((event.clientY - rect.top) / rect.height) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    if (this.mouse.x > 0) {
      this.upKeys(this.levelClass.players[0].player);
    }
    else {
      if (this.levelClass.players.length > 1) this.upKeys(this.levelClass.players[1].player);
    }
  }



  onKeyDown = (event) => {

    switch (event.code) {
      case undefined:
        if (!this.isMobile) this.downKeys(this.levelClass.players[0].player);
        break;
      case 'KeyW':
      case 'ArrowUp':
        break;
      case 'KeyZ':
      case 'ArrowDown':
        this.downKeys(this.levelClass.players[1].player);
        break;
      case 'KeyM':
      case 'ArrowLeft':
        this.downKeys(this.levelClass.players[2].player);
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.levelClass.players.forEach((value, index, array) => {
          value.player.userData.playerAlive = true;
          //this.levelClass.resetLevel();
        })
        break;
      case 'KeyP':
        this.paramsClass.gameStarting = !this.paramsClass.gameStarting;
    }
  }



  onKeyUp = (event) => {
    switch (event.code) {
      case undefined:
        if (!this.isMobile) this.upKeys(this.levelClass.players[0].player);
        break;
      case 'KeyW':
      case 'ArrowUp':
        break;
      case 'KeyZ':
      case 'ArrowDown':
        this.upKeys(this.levelClass.players[1].player);
        break;
      case 'KeyM':
      case 'ArrowLeft':
        this.upKeys(this.levelClass.players[2].player);
        break;
      case 'KeyD':
      case 'ArrowRight':

        break;
    }
  }



  downKeys(player) {

    if (player.userData.live) {
      if (player.userData.onGround) {
        player.userData.readyJump = true;
        player.userData.audio[0].play();
      }
      else if (player.userData.canFly) {
        player.userData.readyJump = true;
        player.userData.audio[0].play();

      }
      // player.userData.readyJump = true;
      // player.userData.audio[0].play();
    }
  }



  upKeys(player) {
    if (player.userData.live) {

      if (player.userData.canFly && !player.userData.onGround) {
        if (player.userData.canFlyJumps > 0) {
          player.userData.canFlyJumps--;
          if (player.userData.canFlyJumps == 0) {

            setTimeout(() => {
              player.userData.canFly = false;
              this.levelClass.boostHatModels[player.userData.canFlyNum].userData.fly = false;
              // player.userData.canFlyNum = null;
            }, 1000);

          }
        }
      }

      if (player.userData.readyJump && player.userData.onGround) {
        player.userData.jumping = true;
        player.userData.readyJump = false;
        player.userData.audio[0].stop();
        if (!player.userData.audio[1].isPlaying) player.userData.audio[1].play();
        player.userData.onGround = false;
      }
      else if (!player.userData.onGround) {
        if (player.userData.canFly) {
          player.userData.jumping = true;
          player.userData.readyJump = false;
          player.userData.audio[0].stop();
          if (!player.userData.audio[1].isPlaying) player.userData.audio[1].play();
          player.userData.onGround = false;
          player.userData.hatBoost--;
          if (player.userData.hatBoost == 0) {
            player.userData.canFly = false;
            setTimeout(() => {
              this.levelClass.boostHatModels[player.userData.numHatBoost].userData.fly = false;
            }, 500)
          }
        }
        else {
          player.userData.readyJump = false;
          player.userData.audio[0].stop();
        }
      }
    }
  }






}
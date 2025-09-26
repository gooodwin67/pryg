import * as THREE from 'three';

export class AudioClass {
  constructor() {

    this.backAudio;
    this.oceanAudio;

    this.inwaterAudio;

    this.readyJumpAudio;
    this.jumpAudio;
    this.jumpAudio2;
    this.jumpAudio3;
    this.jumpAudio4;

    this.quacks = [];
    this.musics = [];


  }

  async loadAudio() {
    const listener = new THREE.AudioListener();

    const audioLoader = new THREE.AudioLoader();

    await audioLoader.loadAsync('audio/back1.mp3').then((buffer) => {
      this.backAudio = new THREE.PositionalAudio(listener);
      this.backAudio.setBuffer(buffer);
      this.backAudio.setLoop(true);
      this.backAudio.setRefDistance(100);
      this.backAudio.setVolume(2);
      this.musics.push({
        name: 'back',
        music: this.backAudio,
      })

    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/ocean.wav').then((buffer) => {
      this.oceanAudio = new THREE.PositionalAudio(listener);
      this.oceanAudio.setBuffer(buffer);
      this.oceanAudio.setLoop(true);
      this.oceanAudio.setRefDistance(100);
      this.oceanAudio.setVolume(0.4);
      this.musics.push({
        name: 'ocean',
        music: this.oceanAudio,
      })

    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/inwater.wav').then((buffer) => {
      this.inwaterAudio = new THREE.PositionalAudio(listener);
      this.inwaterAudio.setBuffer(buffer);
      this.inwaterAudio.setLoop(false);
      this.inwaterAudio.setRefDistance(200);
      this.inwaterAudio.setVolume(1);
      this.musics.push({
        name: 'inwater',
        music: this.inwaterAudio,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/ready-jump.wav').then((buffer) => {
      this.readyJumpAudio = new THREE.PositionalAudio(listener);
      this.readyJumpAudio.setBuffer(buffer);
      this.readyJumpAudio.setLoop(false);
      this.readyJumpAudio.setRefDistance(400);
      this.readyJumpAudio.setVolume(30);
      this.readyJumpAudio.setPlaybackRate(2);
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/quack1.mp3').then((buffer) => {
      this.jumpAudio = new THREE.PositionalAudio(listener);
      this.jumpAudio.setBuffer(buffer);
      this.jumpAudio.setLoop(false);
      this.jumpAudio.setRefDistance(400);
      this.jumpAudio.setVolume(0.3);
      this.quacks.push(this.jumpAudio)
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/quack2.mp3').then((buffer) => {
      this.jumpAudio2 = new THREE.PositionalAudio(listener);
      this.jumpAudio2.setBuffer(buffer);
      this.jumpAudio2.setLoop(false);
      this.jumpAudio2.setRefDistance(400);
      this.jumpAudio2.setVolume(0.3);
      this.quacks.push(this.jumpAudio2)
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/quack3.mp3').then((buffer) => {
      this.jumpAudio3 = new THREE.PositionalAudio(listener);
      this.jumpAudio3.setBuffer(buffer);
      this.jumpAudio3.setLoop(false);
      this.jumpAudio3.setRefDistance(400);
      this.jumpAudio3.setVolume(0.3);
      this.quacks.push(this.jumpAudio3)
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/quack5.mp3').then((buffer) => {
      this.jumpAudio4 = new THREE.PositionalAudio(listener);
      this.jumpAudio4.setBuffer(buffer);
      this.jumpAudio4.setLoop(false);
      this.jumpAudio4.setRefDistance(400);
      this.jumpAudio4.setVolume(0.3);
      this.quacks.push(this.jumpAudio4)
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });


  }
  stopMusic(musics) {
    if (musics == 0) {
      this.musics.forEach((value, index, array) => {
        value['music'].stop();
      })
    }
    else {
      musics.forEach((value, index, array) => {
        this.musics.find((el) => el['name'] === value)['music'].stop();
      })
    }
  }
  pauseMusic(musics) {
    musics.forEach((value, index, array) => {
      this.musics.find((el) => el['name'] === value)['music'].pause();
    })
  }
  playMusic(musics) {
    musics.forEach((value, index, array) => {
      let mus = this.musics.find((el) => el['name'] === value)['music'];
      if (!mus.isPlaying) mus.play();
    })
  }
}
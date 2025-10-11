import * as THREE from 'three';

export class AudioClass {
  constructor() {

    this.backAudio;
    this.backAudio2;
    this.backAudio3;
    this.oceanAudio;

    this.inwaterAudio;
    this.takeAudio;

    this.readyJumpAudio;
    this.jumpAudio;
    this.jumpAudio2;
    this.jumpAudio3;

    this.quacks = [];
    this.musics = [];

    this.musicDay = true;
    this.musicNight = false;
    this.timeToChange = 2;




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
        name: 'back1',
        music: this.backAudio,
      })

    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/back2.mp3').then((buffer) => {
      this.backAudio2 = new THREE.PositionalAudio(listener);
      this.backAudio2.setBuffer(buffer);
      this.backAudio2.setLoop(true);
      this.backAudio2.setRefDistance(100);
      this.backAudio2.setVolume(2);
      this.musics.push({
        name: 'back2',
        music: this.backAudio2,
      })

    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/back3.mp3').then((buffer) => {
      this.backAudio3 = new THREE.PositionalAudio(listener);
      this.backAudio3.setBuffer(buffer);
      this.backAudio3.setLoop(true);
      this.backAudio3.setRefDistance(100);
      this.backAudio3.setVolume(0.5);
      this.musics.push({
        name: 'back3',
        music: this.backAudio3,
      })

    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/ocean.mp3').then((buffer) => {
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

    await audioLoader.loadAsync('audio/inwater.mp3').then((buffer) => {
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

    await audioLoader.loadAsync('audio/loose.mp3').then((buffer) => {
      this.looseAudio = new THREE.PositionalAudio(listener);
      this.looseAudio.setBuffer(buffer);
      this.looseAudio.setLoop(false);
      this.looseAudio.setRefDistance(200);
      this.looseAudio.setVolume(1);
      this.musics.push({
        name: 'loose',
        music: this.looseAudio,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/take.mp3').then((buffer) => {
      this.takeAudio = new THREE.PositionalAudio(listener);
      this.takeAudio.setBuffer(buffer);
      this.takeAudio.setLoop(false);
      this.takeAudio.setRefDistance(200);
      this.takeAudio.setVolume(2);
      this.musics.push({
        name: 'take',
        music: this.takeAudio,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/ready-jump.mp3').then((buffer) => {
      this.readyJumpAudio = new THREE.PositionalAudio(listener);
      this.readyJumpAudio.setBuffer(buffer);
      this.readyJumpAudio.setLoop(false);
      this.readyJumpAudio.setRefDistance(10);
      this.readyJumpAudio.setVolume(2);
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


    this.musics.push({
      name: 'back',
      music: this.backAudio,
    })


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
  dayNight(day = true, hor = false) {
    if (day && !this.musicDay) {

      if (this.timeToChange > 0) {
        this.timeToChange -= 0.01;
        this.musics.find((el) => el['name'] === 'back')['music'].setVolume(this.timeToChange);
      }
      else {
        this.timeToChange = 0;
        this.stopMusic(['back']);
        this.musics.find((el) => el['name'] === 'back')['music'] = this.musics.find((el) => el['name'] === 'back1')['music'];
        this.playMusic(['back']);
        this.musicNight = false;
        this.musicDay = true;
        this.timeToChange = 2;
        this.musics.find((el) => el['name'] === 'back')['music'].setVolume(this.timeToChange);
      }
    }
    else if (!day && !this.musicNight) {

      if (this.timeToChange > 0) {
        this.timeToChange -= 0.01;
        this.musics.find((el) => el['name'] === 'back')['music'].setVolume(this.timeToChange);
      }
      else {
        this.timeToChange = 0;
        this.stopMusic(['back']);
        console.log(hor);
        this.musics.find((el) => el['name'] === 'back')['music'] = this.musics.find((el) => !hor ? el['name'] === 'back2' : el['name'] === 'back3')['music'];
        this.playMusic(['back']);
        this.musicNight = true;
        this.musicDay = false;
        this.timeToChange = 2;
        this.musics.find((el) => el['name'] === 'back')['music'].setVolume(this.timeToChange);
      }





    }
  }
}
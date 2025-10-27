import * as THREE from 'three';

export class AudioClass {
  constructor() {

    this.backAudio;
    this.backAudio2;
    this.backAudio3;
    this.oceanAudio;


    this.rainAudio;
    this.thunderAudio;
    this.thunderAudio2;
    this.thunderAudio3;
    this.thundersAudio = [];

    this.inwaterAudio;
    this.takeAudio;
    this.looseAudio;

    this.readyJumpAudio;
    this.jumpAudio;
    this.jumpAudio2;
    this.jumpAudio3;

    this.quacks = [];
    this.musics = [];

    this.musicNowPlaying = [];

    this.musicDay = true;
    this.musicNight = false;
    this.timeToChange = 2;

    this._attached = false;

    this.listener = new THREE.AudioListener();

    this.musicOn = true;


  }

  hardStopAll() {
    // останавливаем всё, что есть
    this.musics.forEach(({ music }) => {
      try { music.stop(); } catch { }
    });
    this.quacks.forEach(s => { try { s.stop(); } catch { } });
    this.thundersAudio.forEach(t => { try { t.music.stop(); } catch { } });

    // пустим очередь возобновления паузы
    this.musicNowPlaying = [];
  }

  toggleMute(isMuted) {
    if (isMuted) {
      // При выключении — останавливаем полностью аудио поток
      this.musicOn = false;
      this.listener.context.suspend();
    } else {
      // При включении — возобновляем
      this.musicOn = true;
      this.listener.context.resume();
      this.playMusic(['back']);
    }
  }

  isMuted() {
    return this.listener.context.state === 'suspended';
  }

  attachTo(camera) {
    if (this._attached) return;
    camera.add(this.listener);
    this._attached = true;
  }

  async loadAudio() {


    const audioLoader = new THREE.AudioLoader();

    await audioLoader.loadAsync('audio/back1.mp3').then((buffer) => {
      this.backAudio = new THREE.PositionalAudio(this.listener);
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
      this.backAudio2 = new THREE.PositionalAudio(this.listener);
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
      this.backAudio3 = new THREE.PositionalAudio(this.listener);
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
      this.oceanAudio = new THREE.PositionalAudio(this.listener);
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
      this.inwaterAudio = new THREE.PositionalAudio(this.listener);
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
      this.looseAudio = new THREE.PositionalAudio(this.listener);
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
      this.takeAudio = new THREE.PositionalAudio(this.listener);
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
      this.readyJumpAudio = new THREE.PositionalAudio(this.listener);
      this.readyJumpAudio.setBuffer(buffer);
      this.readyJumpAudio.setLoop(false);
      this.readyJumpAudio.setRefDistance(1000);
      this.readyJumpAudio.setVolume(200);
      this.readyJumpAudio.setPlaybackRate(2);
      this.musics.push({
        name: 'readyJump',
        music: this.readyJumpAudio,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/quack1.mp3').then((buffer) => {
      this.jumpAudio = new THREE.PositionalAudio(this.listener);
      this.jumpAudio.setBuffer(buffer);
      this.jumpAudio.setLoop(false);
      this.jumpAudio.setRefDistance(2000);
      this.jumpAudio.setVolume(2);
      this.quacks.push(this.jumpAudio)
      this.musics.push({
        name: 'quack1',
        music: this.jumpAudio,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/quack2.mp3').then((buffer) => {
      this.jumpAudio2 = new THREE.PositionalAudio(this.listener);
      this.jumpAudio2.setBuffer(buffer);
      this.jumpAudio2.setLoop(false);
      this.jumpAudio2.setRefDistance(400);
      this.jumpAudio2.setVolume(0.3);
      this.quacks.push(this.jumpAudio2)
      this.musics.push({
        name: 'quack2',
        music: this.jumpAudio2,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/quack3.mp3').then((buffer) => {
      this.jumpAudio3 = new THREE.PositionalAudio(this.listener);
      this.jumpAudio3.setBuffer(buffer);
      this.jumpAudio3.setLoop(false);
      this.jumpAudio3.setRefDistance(400);
      this.jumpAudio3.setVolume(0.3);
      this.quacks.push(this.jumpAudio3)
      this.musics.push({
        name: 'quack3',
        music: this.jumpAudio3,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/rain.mp3').then((buffer) => {
      this.rainAudio = new THREE.PositionalAudio(this.listener);
      this.rainAudio.setBuffer(buffer);
      this.rainAudio.setLoop(true);
      this.rainAudio.setRefDistance(400);
      this.rainAudio.setVolume(1);
      this.musics.push({
        name: 'rain',
        music: this.rainAudio,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/thunder.mp3').then((buffer) => {
      this.thunderAudio = new THREE.PositionalAudio(this.listener);
      this.thunderAudio.setBuffer(buffer);
      this.thunderAudio.setLoop(false);
      this.thunderAudio.setRefDistance(400);
      this.thunderAudio.setVolume(1);
      this.thundersAudio.push({
        name: 'thunder1',
        music: this.thunderAudio,
      })
      this.musics.push({
        name: 'thunder1',
        music: this.thunderAudio,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/thunder2.mp3').then((buffer) => {
      this.thunderAudio2 = new THREE.PositionalAudio(this.listener);
      this.thunderAudio2.setBuffer(buffer);
      this.thunderAudio2.setLoop(false);
      this.thunderAudio2.setRefDistance(400);
      this.thunderAudio2.setVolume(1);
      this.thundersAudio.push({
        name: 'thunder2',
        music: this.thunderAudio2,
      })
      this.musics.push({
        name: 'thunder2',
        music: this.thunderAudio2,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    await audioLoader.loadAsync('audio/thunder3.mp3').then((buffer) => {
      this.thunderAudio3 = new THREE.PositionalAudio(this.listener);
      this.thunderAudio3.setBuffer(buffer);
      this.thunderAudio3.setLoop(false);
      this.thunderAudio3.setRefDistance(400);
      this.thunderAudio3.setVolume(1);
      this.thundersAudio.push({
        name: 'thunder3',
        music: this.thunderAudio3,
      })
      this.musics.push({
        name: 'thunder3',
        music: this.thunderAudio3,
      })
    }).catch((error) => {
      console.error('Ошибка при загрузке аудио:', error);
    });

    this.musics.push({
      name: 'back',
      music: this.backAudio,
    })


  }
  stopMusic(musics) {
    if (this.musicOn) {
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
  }
  pauseMusic(musics) {
    if (this.musicOn) {
      musics.forEach((value, index, array) => {
        this.musics.find((el) => el['name'] === value)['music'].pause();
      })
    }
  }
  playMusic(musics) {

    musics.forEach((value, index, array) => {
      let mus = this.musics.find((el) => el['name'] === value)['music'];
      if (!mus.isPlaying && this.musicOn) mus.play();
    })

  }

  togglePauseAll(isPaused) {
    if (this.musicOn) {
      if (isPaused) {
        // Если включили паузу — создаём пустой список и запоминаем, что играло
        this.musicNowPlaying = [];
        this.musics.forEach(({ music }) => {
          if (music.isPlaying) {
            music.pause();
            this.musicNowPlaying.push(music);
          }
        });
      } else {
        // Если снимаем паузу — возобновляем только те, что играли
        if (this.musicNowPlaying && this.musicNowPlaying.length) {
          this.musicNowPlaying.forEach((playingMusic) => {
            if (!playingMusic.isPlaying) playingMusic.play();
          });
          // очищаем после восстановления, чтобы не было накопления ссылок
          this.musicNowPlaying = [];
        }
      }
    }
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
        if (this.musicOn) this.playMusic(['back']);
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
        this.musics.find((el) => el['name'] === 'back')['music'] = this.musics.find((el) => !hor ? el['name'] === 'back2' : el['name'] === 'back3')['music'];
        if (this.musicOn) this.playMusic(['back']);
        this.musicNight = true;
        this.musicDay = false;
        this.timeToChange = 2;
        this.musics.find((el) => el['name'] === 'back')['music'].setVolume(this.timeToChange);
      }

    }

  }
}
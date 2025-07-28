import * as THREE from 'three';

export class AudioClass {
  constructor() {
    this.readyJumpAudio;
    this.jumpAudio;
    this.jumpAudio2;
    this.jumpAudio3;
    this.jumpAudio4;

    this.quacks = [];


  }

  async loadAudio() {
    const listener = new THREE.AudioListener();

    const audioLoader = new THREE.AudioLoader();
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
}
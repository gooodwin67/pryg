import * as THREE from 'three';

export class AudioClass {
    constructor() {
        this.readyJumpAudio;
        this.jumpAudio;

        
    }

    async loadAudio() {
        const listener = new THREE.AudioListener();
              
        const audioLoader = new THREE.AudioLoader();
        await audioLoader.loadAsync('audio/ready-jump.wav').then((buffer) => {
            this.readyJumpAudio = new THREE.PositionalAudio(listener);
            this.readyJumpAudio.setBuffer(buffer);
            this.readyJumpAudio.setLoop(false);
            this.readyJumpAudio.setRefDistance(400);
            this.readyJumpAudio.setVolume(3);
            this.readyJumpAudio.setPlaybackRate(2);
        }).catch((error) => {
          console.error('Ошибка при загрузке аудио:', error);
        });

        await audioLoader.loadAsync('audio/quack.mp3').then((buffer) => {
            this.jumpAudio = new THREE.PositionalAudio(listener);
            this.jumpAudio.setBuffer(buffer);
            this.jumpAudio.setLoop(false);
            this.jumpAudio.setRefDistance(400);
            this.jumpAudio.setVolume(3);
        }).catch((error) => {
          console.error('Ошибка при загрузке аудио:', error);
        });
      
      }
}
import * as THREE from "three";

export class MenuClass {
  constructor(initMatch) {
    this.initMatch = initMatch;
    this.mainMenu(this.initMatch);

  }




  mainMenu = () => {
    document.querySelector('.new_game_btn1').addEventListener('click', () => {
      this.hideScreen('main_screen');
      this.showScreen('free_game_screen');
    })

    document.querySelector('.new_game_btn2').addEventListener('click', () => {
      this.hideScreen('main_screen');
      this.showScreen('together_game_screen');
    })

    document.querySelector('.free_game_btn1_1').addEventListener('click', () => {
      this.hideScreen('free_game_screen');
      this.initMatch(1, 1);
    })
    document.querySelector('.free_game_btn1_2').addEventListener('click', () => {
      this.hideScreen('free_game_screen');
      this.initMatch(1, 2);
    })
    document.querySelector('.free_game_btn1_3').addEventListener('click', () => {
      this.hideScreen('free_game_screen');
      this.initMatch(1, 3);
    })
    document.querySelector('.free_game_btn1_4').addEventListener('click', () => {
      this.hideScreen('free_game_screen');
      this.initMatch(1, 4);
    })



    document.querySelector('.together_game_btn1').addEventListener('click', () => {
      this.hideScreen('together_game_screen');
      this.initMatch(2, 1);
    })
    document.querySelector('.together_game_btn2').addEventListener('click', () => {
      this.hideScreen('together_game_screen');
      this.initMatch(2, 4);
    })

  }

  toggleLoader(need) {
    if (!need) document.querySelector('.loader_screen').classList.add('hidden_screen');
    else document.querySelector('.loader_screen').classList.remove('hidden_screen');
  }

  hideScreen(screen) {
    document.querySelector(`.${screen}`).classList.add('hidden_screen');
  }
  showScreen(screen) {
    document.querySelector(`.${screen}`).classList.remove('hidden_screen');
  }






}
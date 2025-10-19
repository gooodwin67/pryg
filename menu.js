import * as THREE from "three";

export class MenuClass {
  constructor(initMatch) {
    this.initMatch = initMatch;
    this.mainMenu(this.initMatch);

    this.playersNum = 2;
    this.levelPlayersNum = 1;

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

    document.querySelector('.new_game_btn3').addEventListener('click', () => {
      this.hideScreen('main_screen');
      this.showScreen('levels_game_screen');
    })

    document.querySelectorAll('.levels_blocks .levels_block').forEach((value, index, array) => {
      value.addEventListener('click', () => {
        this.hideScreen('levels_game_screen');
        this.initMatch(this.levelPlayersNum, 1, index + 1, true)
      })
    })

    document.querySelectorAll('.level_game_chels').forEach((value, index, array) => {
      value.addEventListener('click', () => {
        document.querySelectorAll('.level_game_chels').forEach((item) => {

          item.classList.remove('level_game_chels_active');
        });
        value.classList.add('level_game_chels_active');
        
        this.levelPlayersNum = index + 1;
      })
    })





    // document.querySelector('.free_game_btn1_1').addEventListener('click', () => {
    //   this.hideScreen('free_game_screen');
    //   this.initMatch(1, 1);
    // })
    document.querySelector('.free_game_btn1_2').addEventListener('click', () => {
      this.hideScreen('free_game_screen');
      this.initMatch(1, 2);

    })
    // document.querySelector('.free_game_btn1_3').addEventListener('click', () => {
    //   this.hideScreen('free_game_screen');
    //   this.initMatch(1, 3);
    // })
    document.querySelector('.free_game_btn1_4').addEventListener('click', () => {
      this.hideScreen('free_game_screen');
      this.initMatch(1, 4, false, false);
    })



    document.querySelector('.together_game_btn1_1').addEventListener('click', () => {
      this.hideScreen('together_game_screen');
      this.initMatch(this.playersNum, 1);
    })
    document.querySelector('.together_game_btn1_2').addEventListener('click', () => {
      this.hideScreen('together_game_screen');
      this.initMatch(this.playersNum, 2);
    })
    document.querySelector('.together_game_btn1_3').addEventListener('click', () => {
      this.hideScreen('together_game_screen');
      this.initMatch(this.playersNum, 3, false, false);
    })
    document.querySelector('.together_game_btn1_4').addEventListener('click', () => {
      this.hideScreen('together_game_screen');
      this.initMatch(this.playersNum, 4, false, false);
    })




    document.querySelectorAll('.together_game_chels').forEach((value, index, array) => {
      value.addEventListener('click', () => {
        document.querySelectorAll('.together_game_chels').forEach((item) => {
          item.classList.remove('together_game_chels_active');
        });
        value.classList.add('together_game_chels_active');
        this.playersNum = index + 2;
      })
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
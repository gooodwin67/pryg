import * as THREE from "three";

export class MenuClass {
  constructor(initMatch, loadLevels, gameClass, audioClass, dataClass) {
    this.initMatch = initMatch;
    this.loadLevels = loadLevels;
    this.gameClass = gameClass;
    this.audioClass = audioClass;
    this.dataClass = dataClass;
    this.loadLevels();
    this.mainMenu(this.initMatch);

    this.playersNum = 1;
    this.levelPlayersNum = 1;

    this.loadRecsData();

  }

  loadRecsData() {

    this.dataClass.loadLocalData()

    let masTables = this.dataClass.masTables;
    let tables = document.querySelectorAll('.rec_table_small');

    let my = 'free_game_my_rec';
    let notMy = '';

    tables[0].innerHTML = '';
    tables[1].innerHTML = '';

    masTables.forEach((value, index, array) => {
      masTables[index].forEach((val, i, array) => {

        if (masTables[index][i].findIndex(el => el.name === 'Мой рекорд') < 3) {

          tables[index].insertAdjacentHTML('beforeend', `
          <div class='rec_table_small_block ${this.playersNum == i + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${masTables[index][i][0].name == "Мой рекорд" ? my : notMy}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${masTables[index][i][0].name}</span>
                <div><span class='place_rec'>${masTables[index][i][0].rec}</span><span>м</span></div>
            </div>
            <div class='green_back two_place ${masTables[index][i][1].name == "Мой рекорд" ? my : notMy}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${masTables[index][i][1].name}</span>
                <div><span class='place_rec'>${masTables[index][i][1].rec}</span><span>м</span></div>
            </div>
            <div class='blue_back three_place ${masTables[index][i][2].name == "Мой рекорд" ? my : notMy}'>
                <span class='place_num'>3</span>
                <span class='rec_table_small_name'>${masTables[index][i][2].name}</span>
                <div><span class='place_rec'>${masTables[index][i][2].rec}</span><span>м</span></div>
            </div>
          </div>
        `);
        }
        else {
          tables[index].insertAdjacentHTML('beforeend', `
          <div class='rec_table_small_block ${this.playersNum == i + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${masTables[index][i][0].name}</span>
                <div><span class='place_rec'>${masTables[index][i][0].rec}</span><span>м</span></div>
            </div>
            <div class='green_back two_place}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${masTables[index][i][1].name}</span>
                <div><span class='place_rec'>${masTables[index][i][1].rec}</span><span>м</span></div>
            </div>
            <div class='blue_back three_place ${my}'>
                <span class='place_num'>${masTables[index][i][3].pos}</span>
                <span class='rec_table_small_name'>${masTables[index][i][3].name}</span>
                <div><span class='place_rec'>${masTables[index][i][3].rec}</span><span>м</span></div>
            </div>
          </div>
        `);
        }
      })
    })
  }


  mainMenu = () => {
    document.querySelector('.new_game_btn1').addEventListener('click', () => {
      this.hideScreen('main_screen');
      this.showScreen('free_game_screen');
    })


    document.querySelector('.new_game_btn3').addEventListener('click', async () => {
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
      this.initMatch(this.playersNum, 2);

    })
    // document.querySelector('.free_game_btn1_3').addEventListener('click', () => {
    //   this.hideScreen('free_game_screen');
    //   this.initMatch(1, 3);
    // })
    document.querySelector('.free_game_btn1_4').addEventListener('click', () => {
      this.hideScreen('free_game_screen');
      this.initMatch(this.playersNum, 4, false, false);
    })





    document.querySelectorAll('.free_game_chels').forEach((value, index, array) => {
      value.addEventListener('click', () => {
        document.querySelectorAll('.free_game_chels').forEach((item) => {
          item.classList.remove('free_game_chels_active');
        });
        value.classList.add('free_game_chels_active');
        this.playersNum = index + 1;
        this.loadRecsData();
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
import { t } from './i18n.js'; //язык

const MY_REC_NAMES = new Set(["Мой рекорд", "My record"]);

function isMy(row) {
  if (!row) return false;
  if (row.isMine === true) return true;
  const mine = t('leaderboard.mine', 'Мой рекорд');
  return row.name === mine;
}


export class MenuClass {
  constructor(initMatch, loadLevels, gameClass, audioClass, dataClass) {
    this.initMatch = initMatch;
    this.loadLevels = loadLevels;
    this.gameClass = gameClass;
    this.audioClass = audioClass;
    this.dataClass = dataClass;

    this.playersNum = 1;
    this.levelPlayersNum = 1;

    // this.loadLevels(this.levelPlayersNum - 1);
    this.mainMenu(this.initMatch);



    this.loadRecsData();

  }

  loadRecsData() {


    let masTables = this.dataClass.masTables;
    let tables = document.querySelectorAll('.rec_table_small');

    let my = 'free_game_my_rec';
    let notMy = '';

    tables[0].innerHTML = '';
    tables[1].innerHTML = '';


    masTables.forEach((value, index, array) => {
      masTables[index].forEach((val, i, array) => {

        

        const mine = t('leaderboard.mine', 'Мой рекорд');
        if (masTables[index][i].findIndex(el => el && el.name === mine) < 3) {

          tables[index].insertAdjacentHTML('beforeend', `
          <div class='rec_table_small_block ${this.playersNum == i + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${isMy(masTables[index][i][0]) ? my : notMy}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${masTables[index][i][0].name}</span>
                <div><span class='place_rec'>${masTables[index][i][0].rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
            </div>
            <div class='green_back two_place ${isMy(masTables[index][i][1]) ? my : notMy}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${masTables[index][i][1].name}</span>
                <div><span class='place_rec'>${masTables[index][i][1].rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
            </div>
            <div class='blue_back three_place ${isMy(masTables[index][i][2]) ? my : notMy}'>
                <span class='place_num'>${masTables[index][i][2]?.pos > 2 ? masTables[index][i][2]?.pos: 3}</span>
                <span class='rec_table_small_name'>${masTables[index][i][2].name}</span>
                <div><span class='place_rec'>${masTables[index][i][2].rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
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
                <div><span class='place_rec'>${masTables[index][i][0].rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
            </div>
            <div class='green_back two_place}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${masTables[index][i][1].name}</span>
                <div><span class='place_rec'>${masTables[index][i][1].rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
            </div>
            <div class='blue_back three_place ${my}'>
            <span class='place_num'>${masTables[index][i][2]?.pos > 2 ? masTables[index][i][2]?.pos: 3}</span>
                <span class='rec_table_small_name'>${masTables[index][i][3].name}</span>
                <div><span class='place_rec'>${masTables[index][i][3].rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
            </div>
          </div>
        `);
        }
      })
    })

  }


  mainMenu = () => {
    document.querySelector('.new_game_btn1').addEventListener('click', () => {
      this.loadRecsData()
      this.hideScreen('main_screen');
      this.showScreen('free_game_screen');
    })

    document.querySelector('.new_game_btn2').addEventListener('click', async () => {
      this.dataClass.levelCoopMode = 'coop';
      document.querySelectorAll('.levels_game_screen .level_game_chels').forEach((value, index, array) => {
        if (value.classList.contains('level_game_chels_active')) {
          this.levelPlayersNum = index + 1;
          this.dataClass.loadLevels(this.levelPlayersNum - 1);
        }
      })

      this.hideScreen('main_screen');
      this.showScreen('levels_game_screen');
    })

    document.querySelector('.new_game_btn3').addEventListener('click', async () => {
      this.dataClass.levelCoopMode = 'contest';
      document.querySelectorAll('.levels_game_screen_contest .level_game_chels_contest').forEach((value, index, array) => {
        if (value.classList.contains('level_game_chels_contest_active')) {
          this.levelPlayersNum = index + 2;
        }
      })
      this.hideScreen('main_screen');
      this.showScreen('levels_game_screen_contest');
    })





    document.querySelectorAll('.arrow_back').forEach((value, index, array) => {
      value.addEventListener('click', () => {
        value.parentElement.parentElement.classList.add('hidden_screen');
        this.showScreen('main_screen');
      })
    })




    const levelsContainer = document.querySelector('.levels_blocks');
    levelsContainer.addEventListener('click', (e) => {
      const block = e.target.closest('.levels_block');
      if (!block) return;

      // не пускаем в закрытые уровни
      if (block.classList.contains('levels_block--locked')) return;

      const levelIndex = Number(block.dataset.level) || 1; // из data-level
      // визуальная подсветка (если нужна)
      levelsContainer.querySelectorAll('.levels_block').forEach(el => el.classList.remove('active'));
      block.classList.add('active');

      this.hideScreen('levels_game_screen');
      this.initMatch(this.levelPlayersNum, 1, levelIndex, true);
    });

    const levelsContainerContest = document.querySelector('.levels_blocks_contest');
    levelsContainerContest.addEventListener('click', (e) => {
      const block = e.target.closest('.levels_block');
      if (!block) return;

      // не пускаем в закрытые уровни
      //if (block.classList.contains('levels_block--locked')) return;

      const levelIndex = Number(block.dataset.level) || 1; // из data-level
      // визуальная подсветка (если нужна)
      levelsContainerContest.querySelectorAll('.levels_block').forEach(el => el.classList.remove('active'));
      block.classList.add('active');

      this.hideScreen('levels_game_screen_contest');
      this.initMatch(this.levelPlayersNum, 1, levelIndex, true);
    });
    document.querySelector('.contest_game_btn').addEventListener('click', (e) => {
      const levelIndex = Math.floor(Math.random() * this.dataClass.allLevels);
      this.hideScreen('levels_game_screen_contest');
      this.initMatch(this.levelPlayersNum, 1, levelIndex, true);
    })



    document.querySelectorAll('.level_game_chels').forEach((value, index, array) => {
      value.addEventListener('click', () => {

        if (this.levelPlayersNum != index + 1) {
          document.querySelectorAll('.level_game_chels').forEach((item) => {

            item.classList.remove('level_game_chels_active');
          });
          value.classList.add('level_game_chels_active');

          this.levelPlayersNum = index + 1;

          this.dataClass.loadLevels(this.levelPlayersNum - 1);
        }
      })
    })
    document.querySelectorAll('.level_game_chels_contest').forEach((value, index, array) => {
      value.addEventListener('click', () => {


        if (this.levelPlayersNum != index + 2) {


          document.querySelectorAll('.level_game_chels_contest').forEach((item) => {

            item.classList.remove('level_game_chels_contest_active');
          });
          value.classList.add('level_game_chels_contest_active');

          this.levelPlayersNum = index + 2;

          // this.dataClass.loadLevelsContest();

        }
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





    document.querySelectorAll('.free_game_chels').forEach((value, index) => {
      value.addEventListener('click', () => {
        // визуально подсветим выбранную “человечку”
        document.querySelectorAll('.free_game_chels').forEach((item) => {
          item.classList.remove('free_game_chels_active');
        });
        value.classList.add('free_game_chels_active');

        const nextPlayersNum = index + 1;

        // 1) плавно прячем текущие видимые блоки в обеих таблицах
        const tables = document.querySelectorAll('.rec_table_small');
        const visibles = [];
        tables.forEach(t => {
          const cur = t.querySelector('.rec_table_small_block:not(.hidden_screen)');
          if (cur) {
            visibles.push(cur);
            // чтобы анимация точно стартанула
            cur.getBoundingClientRect();
            cur.classList.add('anim-out');
          }
        });

        // 2) когда ВСЕ видимые скрылись — перерисуем и плавно покажем новые
        let done = 0;
        const afterOut = () => {
          done++;
          if (done < visibles.length) return;

          // обновляем целевое число игроков и перестраиваем DOM
          this.playersNum = nextPlayersNum;
          this.loadRecsData();

          // 3) добавим “появление” для новых видимых блоков
          const newVisibles = [];
          document.querySelectorAll('.rec_table_small').forEach(t => {
            const nv = t.querySelector('.rec_table_small_block:not(.hidden_screen)');
            if (nv) {
              nv.classList.add('anim-in');
              newVisibles.push(nv);
            }
          });

          // следующий кадр — включаем проигрывание
          requestAnimationFrame(() => {
            newVisibles.forEach(nv => {
              // форсим рефлоу для надёжного старта
              nv.getBoundingClientRect();
              nv.classList.add('anim-play');
            });

            // убрать служебные классы после завершения перехода
            const clear = (el) => {
              el.classList.remove('anim-in', 'anim-play');
              el.removeEventListener('transitionend', clear);
            };
            newVisibles.forEach(nv => nv.addEventListener('transitionend', () => clear(nv), { once: true }));
          });
        };

        // подписываемся на завершение скрытия
        if (visibles.length === 0) {
          // если вдруг ничего видимого не было, просто обновим
          this.playersNum = nextPlayersNum;
          this.loadRecsData();
        } else {
          visibles.forEach(v => {
            v.addEventListener('transitionend', () => {
              v.classList.remove('anim-out');
              v.removeEventListener('transitionend', afterOut);
              afterOut();
            }, { once: true });
          });
        }
      });
    });








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
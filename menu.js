import { t } from './i18n.js'; //язык

const MY_REC_NAMES = new Set(['Мой рекорд', 'My record']);

function isMy(row) {
  if (!row) return false;
  if (row.isMine === true) return true;
  const mine = t('leaderboard.mine', 'Мой рекорд');
  return row.name === mine;
}

export class MenuClass {
  constructor(initMatch, gameClass, audioClass, dataClass) {
    this.initMatch = initMatch;
    this.gameClass = gameClass;
    this.audioClass = audioClass;
    this.dataClass = dataClass;

    this.playersNum = 1;
    this.levelPlayersNum = 1;
  }

  // ⚠ Никаких DOM-операций в конструкторе!
  // Вызываем ЭТОТ метод уже после создания menuClass
  init() {
    this.mainMenu();
    this.loadRecsData();

  }

  loadRecsData() {
    const masTables = this.dataClass.masTables;
    const tables = document.querySelectorAll('.rec_table_small');

    if (!masTables || !Array.isArray(masTables) || tables.length < 2) {
      return;
    }

    const my = 'free_game_my_rec';
    const notMy = '';

    tables[0].innerHTML = '';
    tables[1].innerHTML = '';

    masTables.forEach((tableByPlayers, tableIndex) => {
      if (!Array.isArray(tableByPlayers)) return;

      tableByPlayers.forEach((rowsForPlayers, playersIndex) => {
        if (!Array.isArray(rowsForPlayers) || rowsForPlayers.length === 0) return;

        const rows = rowsForPlayers;
        const row0 = rows[0];
        const row1 = rows[1];
        const row2 = rows[2];
        const row3 = rows[3];

        if (!row0 || !row1 || !row2) return;

        const mine = t('leaderboard.mine', 'Мой рекорд');

        const hasMineInTop3 =
          rows.findIndex((el) => el && el.name === mine) < 3 &&
          rows.findIndex((el) => el && el.name === mine) !== -1;

        const isVisible = this.playersNum === playersIndex + 1 ? '' : 'hidden_screen';

        if (hasMineInTop3) {
          tables[tableIndex].insertAdjacentHTML(
            'beforeend',
            `
              <div class="rec_table_small_block ${isVisible}">
                <div class="yellow_back one_place ${isMy(row0) ? my : notMy}">
                    <span class="place_num">1</span>
                    <span class="rec_table_small_name">${row0.name}</span>
                    <div><span class="place_rec">${row0.rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
                </div>
                <div class="green_back two_place ${isMy(row1) ? my : notMy}">
                    <span class="place_num">2</span>
                    <span class="rec_table_small_name">${row1.name}</span>
                    <div><span class="place_rec">${row1.rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
                </div>
                <div class="blue_back three_place ${isMy(row2) ? my : notMy}">
                    <span class="place_num">${row2.pos > 2 ? row2.pos : 3}</span>
                    <span class="rec_table_small_name">${row2.name}</span>
                    <div><span class="place_rec">${row2.rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
                </div>
              </div>
            `
          );
        } else if (row3) {
          tables[tableIndex].insertAdjacentHTML(
            'beforeend',
            `
              <div class="rec_table_small_block ${isVisible}">
                <div class="yellow_back one_place">
                    <span class="place_num">1</span>
                    <span class="rec_table_small_name">${row0.name}</span>
                    <div><span class="place_rec">${row0.rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
                </div>
                <div class="green_back two_place}">
                    <span class="place_num">2</span>
                    <span class="rec_table_small_name">${row1.name}</span>
                    <div><span class="place_rec">${row1.rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
                </div>
                <div class="blue_back three_place ${my}">
                  <span class="place_num">${row2.pos > 2 ? row2.pos : 3}</span>
                  <span class="rec_table_small_name">${row3.name}</span>
                  <div><span class="place_rec">${row3.rec}</span><span>${t('hud.metersLabel', 'м')}</span></div>
                </div>
              </div>
            `
          );
        }
      });
    });
  }

  mainMenu() {
    const newGameButton1 = document.querySelector('.new_game_btn1');
    const newGameButton2 = document.querySelector('.new_game_btn2');
    const newGameButton3 = document.querySelector('.new_game_btn3');
    const contestGameButton = document.querySelector('.contest_game_btn');
    const levelsContainer = document.querySelector('.levels_blocks');
    const levelsContainerContest = document.querySelector('.levels_blocks_contest');

    if (newGameButton1) {
      newGameButton1.addEventListener('click', () => {
        this.loadRecsData();
        this.hideScreen('main_screen');
        this.showScreen('free_game_screen');
      });
    }

    if (newGameButton2) {
      newGameButton2.addEventListener('click', async () => {
        this.dataClass.levelCoopMode = 'coop';

        document
          .querySelectorAll('.levels_game_screen .level_game_chels')
          .forEach((levelPlayersElement, index) => {
            if (levelPlayersElement.classList.contains('level_game_chels_active')) {
              this.levelPlayersNum = index + 1;
              this.dataClass.loadLevels(this.levelPlayersNum - 1);
            }
          });

        this.hideScreen('main_screen');
        this.showScreen('levels_game_screen');
      });
    }

    if (newGameButton3) {
      newGameButton3.addEventListener('click', async () => {
        this.dataClass.levelCoopMode = 'contest';

        document
          .querySelectorAll('.levels_game_screen_contest .level_game_chels_contest')
          .forEach((levelPlayersElement, index) => {
            if (levelPlayersElement.classList.contains('level_game_chels_contest_active')) {
              this.levelPlayersNum = index + 2;
            }
          });

        this.hideScreen('main_screen');
        this.showScreen('levels_game_screen_contest');
      });
    }

    document.querySelectorAll('.arrow_back').forEach((backButtonElement) => {
      backButtonElement.addEventListener('click', () => {
        backButtonElement.parentElement.parentElement.classList.add('hidden_screen');
        this.showScreen('main_screen');
      });
    });

    if (levelsContainer) {
      levelsContainer.addEventListener('click', (event) => {
        const levelBlockElement = event.target.closest('.levels_block');
        if (!levelBlockElement) return;
        if (levelBlockElement.classList.contains('levels_block--locked')) return;

        const levelIndex = Number(levelBlockElement.dataset.level) || 1;

        levelsContainer
          .querySelectorAll('.levels_block')
          .forEach((element) => element.classList.remove('active'));
        levelBlockElement.classList.add('active');

        this.hideScreen('levels_game_screen');
        this.initMatch(this.levelPlayersNum, 1, levelIndex, true);
      });
    }

    if (levelsContainerContest) {
      levelsContainerContest.addEventListener('click', (event) => {
        const levelBlockElement = event.target.closest('.levels_block');
        if (!levelBlockElement) return;

        const levelIndex = Number(levelBlockElement.dataset.level) || 1;

        levelsContainerContest
          .querySelectorAll('.levels_block')
          .forEach((element) => element.classList.remove('active'));
        levelBlockElement.classList.add('active');

        this.hideScreen('levels_game_screen_contest');
        this.initMatch(this.levelPlayersNum, 1, levelIndex, true);
      });
    }

    if (contestGameButton) {
      contestGameButton.addEventListener('click', () => {
        const levelIndex = Math.floor(Math.random() * this.dataClass.allLevels);
        this.hideScreen('levels_game_screen_contest');
        this.initMatch(this.levelPlayersNum, 1, levelIndex, true);
      });
    }

    document.querySelectorAll('.level_game_chels').forEach((element, index) => {
      element.addEventListener('click', () => {
        if (this.levelPlayersNum !== index + 1) {
          document.querySelectorAll('.level_game_chels').forEach((item) => {
            item.classList.remove('level_game_chels_active');
          });
          element.classList.add('level_game_chels_active');

          this.levelPlayersNum = index + 1;
          this.dataClass.loadLevels(this.levelPlayersNum - 1);
        }
      });
    });

    document
      .querySelectorAll('.level_game_chels_contest')
      .forEach((levelPlayersContestElement, index) => {
        levelPlayersContestElement.addEventListener('click', () => {
          if (this.levelPlayersNum !== index + 2) {
            document.querySelectorAll('.level_game_chels_contest').forEach((item) => {
              item.classList.remove('level_game_chels_contest_active');
            });
            levelPlayersContestElement.classList.add('level_game_chels_contest_active');

            this.levelPlayersNum = index + 2;
          }
        });
      });

    const freeGameButtonOcean = document.querySelector('.free_game_btn1_2');
    const freeGameButtonSpace = document.querySelector('.free_game_btn1_4');

    if (freeGameButtonOcean) {
      freeGameButtonOcean.addEventListener('click', () => {
        ym(105298813, 'reachGoal', 'play_ocean');
        this.hideScreen('free_game_screen');
        this.initMatch(this.playersNum, 2);
      });
    }

    if (freeGameButtonSpace) {
      freeGameButtonSpace.addEventListener('click', () => {
        ym(105298813, 'reachGoal', 'play_space');
        this.hideScreen('free_game_screen');
        this.initMatch(this.playersNum, 4, false, false);
      });
    }

    document.querySelectorAll('.free_game_chels').forEach((playerButtonElement, index) => {
      playerButtonElement.addEventListener('click', () => {
        document.querySelectorAll('.free_game_chels').forEach((item) => {
          item.classList.remove('free_game_chels_active');
        });
        playerButtonElement.classList.add('free_game_chels_active');

        const nextPlayersNum = index + 1;

        const tables = document.querySelectorAll('.rec_table_small');
        const visibleBlocks = [];
        tables.forEach((tableElement) => {
          const visibleBlock = tableElement.querySelector('.rec_table_small_block:not(.hidden_screen)');
          if (visibleBlock) {
            visibleBlocks.push(visibleBlock);
            visibleBlock.getBoundingClientRect();
            visibleBlock.classList.add('anim-out');
          }
        });

        let done = 0;
        const afterOut = () => {
          done++;
          if (done < visibleBlocks.length) return;

          this.playersNum = nextPlayersNum;
          this.loadRecsData();

          const newVisibleBlocks = [];
          document.querySelectorAll('.rec_table_small').forEach((tableElement) => {
            const newVisibleBlock = tableElement.querySelector('.rec_table_small_block:not(.hidden_screen)');
            if (newVisibleBlock) {
              newVisibleBlock.classList.add('anim-in');
              newVisibleBlocks.push(newVisibleBlock);
            }
          });

          requestAnimationFrame(() => {
            newVisibleBlocks.forEach((newVisibleBlock) => {
              newVisibleBlock.getBoundingClientRect();
              newVisibleBlock.classList.add('anim-play');
            });

            const clear = (element) => {
              element.classList.remove('anim-in', 'anim-play');
              element.removeEventListener('transitionend', clear);
            };
            newVisibleBlocks.forEach((newVisibleBlock) =>
              newVisibleBlock.addEventListener('transitionend', () => clear(newVisibleBlock), {
                once: true,
              })
            );
          });
        };

        if (visibleBlocks.length === 0) {
          this.playersNum = nextPlayersNum;
          this.loadRecsData();
        } else {
          visibleBlocks.forEach((visibleBlock) => {
            visibleBlock.addEventListener(
              'transitionend',
              () => {
                visibleBlock.classList.remove('anim-out');
                visibleBlock.removeEventListener('transitionend', afterOut);
                afterOut();
              },
              { once: true }
            );
          });
        }
      });
    });
  }

  toggleLoader(need) {
    const loader = document.querySelector('.loader_screen');
    if (!loader) return;

    if (!need) {
      loader.classList.add('hidden_screen');
    } else {
      loader.classList.remove('hidden_screen');
    }
  }

  hideScreen(screenClassName) {
    const element = document.querySelector(`.${screenClassName}`);
    if (element) {
      element.classList.add('hidden_screen');
    }
  }

  showScreen(screenClassName) {
    const element = document.querySelector(`.${screenClassName}`);
    if (element) {
      element.classList.remove('hidden_screen');
    }
  }
}

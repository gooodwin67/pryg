import { t } from './i18n.js';

export class DataClass {
  constructor() {
    this.gameInit = false;

    // this.names = ["Билли", "Вилли", "Дилли"];



    this.levelsStatus = [[
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ], [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ], [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]];


    this.levelCoopMode = 'coop' //contest

    this.allLevels = 10;

    this.table = {
      updateDate: 11147,
      levelsStatusContest: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      player: {
        levels: [0, 0, 0],
        bonusHat: [false, false, false],
        bonusHeart: [0, 0, 0],
      },
      hor: [
        [
          {
            pos: 0,
            name: 'Мой рекорд',
            rec: 1,
          },
          {
            pos: 1,
            name: '',
            rec: 5,
          },
          {
            pos: 2,
            name: '',
            rec: 4,
          },
          {
            pos: 3,
            name: '',
            rec: 2,
          },
        ],
        [
          {
            pos: 0,
            name: 'Мой рекорд',
            rec: 2,
          },
          {
            pos: 1,
            name: 'Серж',
            rec: 5,
          },
          {
            pos: 2,
            name: 'Коля',
            rec: 4,
          },
          {
            pos: 3,
            name: 'Паша',
            rec: 10,
          },
        ],
        [
          {
            pos: 0,
            name: 'Мой рекорд',
            rec: 0,
          },
          {
            pos: 1,
            name: '',
            rec: 0,
          },
          {
            pos: 2,
            name: '',
            rec: 0,
          },
          {
            pos: 3,
            name: '',
            rec: 0,
          },
        ],
      ],
      vert: [
        [
          {
            pos: 0,
            name: 'Мой рекорд',
            rec: 0,
          },
          {
            pos: 1,
            name: '',
            rec: 0,
          },
          {
            pos: 2,
            name: '',
            rec: 0,
          },
          {
            pos: 3,
            name: '',
            rec: 0,
          },
        ],
        [
          {
            pos: 0,
            name: 'Мой рекорд',
            rec: 0,
          },
          {
            pos: 1,
            name: '',
            rec: 0,
          },
          {
            pos: 2,
            name: '',
            rec: 0,
          },
          {
            pos: 3,
            name: '',
            rec: 0,
          },
        ],
        [
          {
            pos: 0,
            name: 'Мой рекорд',
            rec: 0,
          },
          {
            pos: 1,
            name: '',
            rec: 0,
          },
          {
            pos: 2,
            name: '',
            rec: 0,
          },
          {
            pos: 3,
            name: '',
            rec: 0,
          },
        ],
      ]
    }

    this.masTables = [];



  }



  async clearData() {
    localStorage.clear();
  }



  async saveLocalData() {

    // if (this.levelCoopMode == 'coop') {
    //   if (players != null) {
    //     for (let i = 0; i < players; i++) {
    //       this.table.player.levels[i] = level;
    //       this.table.player.bonusHeart[i] = bonusHat;

    //     }   
    //   }
    // }


    localStorage.setItem('table', JSON.stringify(this.table));
  }

  async loadLocalData() {



    // this.clearData();

    if (localStorage.getItem('table') !== null) {
      let tableTemp = JSON.parse(localStorage.getItem('table', this.table));
      if (tableTemp.updateDate != this.table.updateDate) {
        this.clearData();
        localStorage.setItem('table', JSON.stringify(this.table));
      }
      else {
        this.table = JSON.parse(localStorage.getItem('table', this.table));
      }
    }
    else {
      localStorage.setItem('table', JSON.stringify(this.table));
    }
    let horOne = this.table['hor'][0].sort((a, b) => b.rec - a.rec);
    let horTwo = this.table['hor'][1].sort((a, b) => b.rec - a.rec);
    let horThree = this.table['hor'][2].sort((a, b) => b.rec - a.rec);

    let vertOne = this.table['vert'][0].sort((a, b) => b.rec - a.rec);
    let vertTwo = this.table['vert'][1].sort((a, b) => b.rec - a.rec);
    let vertThree = this.table['vert'][2].sort((a, b) => b.rec - a.rec);

    this.masTables = [
      [horOne, horTwo, horThree],
      [vertOne, vertTwo, vertThree],
    ]



    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < this.allLevels; j++) {
        if (j < this.table.player.levels[i]) {
          this.levelsStatus[i][j] = 'completed'
        }
        else if (j == this.table.player.levels[i]) {
          this.levelsStatus[i][j] = 'available'
        }
        else {
          this.levelsStatus[i][j] = 'locked'
        }
      }
    }
  }


  /**
   * levelsStatus: массив статусов уровней.
   * Допустимые значения: 'completed' | 'available' | 'locked'
   */
  async loadLevels(numChels) {

    const levelsContainer = document.querySelector('.levels_blocks');
    if (!levelsContainer) return;

    // Перегенерируем контейнер и помечаем, что будет re-enter
    levelsContainer.classList.add('levels_blocks--reenter');
    levelsContainer.innerHTML = '';

    const documentFragment = document.createDocumentFragment();

    const getLevelConfig = (levelStatus) => {
      switch (levelStatus) {
        case 'completed':
          return {
            modifierClass: 'levels_block--completed',
            labelText: t('levels.status.completed', 'Пройден'),
            ariaState: t('levels.status.completedAria', 'уровень пройден')
          };
        case 'available':
          return {
            modifierClass: 'levels_block--available',
            labelText: t('levels.status.available', 'Доступен'),
            ariaState: t('levels.status.availableAria', 'уровень доступен')
          };
        default:
          return {
            modifierClass: 'levels_block--locked',
            labelText: t('levels.status.locked', 'Закрыт'),
            ariaState: t('levels.status.lockedAria', 'уровень закрыт')
          };
      }
    }

    const baseDelayMs = 40;     // базовая задержка между плитками
    const startDelayMs = 60;    // стартовая задержка для первой
    const maxDelayMs = 600;     // ограничим максимальную задержку


    for (let levelIndex = 0; levelIndex < this.levelsStatus[numChels].length; levelIndex++) {
      const levelStatus = this.levelsStatus[numChels][levelIndex];
      const { modifierClass, labelText, ariaState } = getLevelConfig(levelStatus);

      // ★ ОПРЕДЕЛЯЕМ 10-й УРОВЕНЬ ★
      const isSuperLevel = levelIndex === 9; // индекс 9 = 10-й уровень

      const levelElement = document.createElement('div');
      levelElement.className = `levels_block ${modifierClass}${isSuperLevel ? ' levels_block--super' : ''}`;
      levelElement.setAttribute('data-level', String(levelIndex + 1));
      levelElement.setAttribute('role', 'button');
      levelElement.setAttribute('tabindex', levelStatus === 'locked' ? '-1' : '0');
      levelElement.setAttribute('aria-label', `Уровень ${levelIndex + 1}, ${ariaState}${isSuperLevel ? ', бонусный уровень' : ''}`);

      const computedDelay = Math.min(startDelayMs + levelIndex * baseDelayMs, maxDelayMs);
      levelElement.style.setProperty('--show-delay', `${computedDelay}ms`);

      // Номер уровня
      const numberElement = document.createElement('div');
      numberElement.className = 'levels_block_number';
      numberElement.textContent = String(levelIndex + 1);

      // ★ ИКОНКА СЕРДЕЧКА ТОЛЬКО ДЛЯ 10-ГО УРОВНЯ ★
      if (isSuperLevel) {
        const rewardIcon = document.createElement('div');
        rewardIcon.className = 'level_reward_icon';
        rewardIcon.innerHTML = '+❤️'; // Текст не переводится, просто символ
        levelElement.appendChild(rewardIcon);
      }

      // Статус (без изменений)
      const statusElement = document.createElement('div');
      statusElement.className = 'levels_block_status';

      const statusChipElement = document.createElement('span');
      statusChipElement.className = `status_chip ${levelStatus === 'completed'
        ? 'status_chip--completed'
        : levelStatus === 'available'
          ? 'status_chip--available'
          : 'status_chip--locked'
        }`;

      statusChipElement.setAttribute('data-i18n', `levels.status.${levelStatus}`);
      statusChipElement.textContent = labelText;

      statusElement.appendChild(statusChipElement);
      levelElement.append(numberElement, statusElement);

      // Клики (ваш существующий код)
      levelElement.addEventListener('click', () => {
        if (levelStatus === 'locked') return;
        document.querySelectorAll('.levels_block').forEach(el => el.classList.remove('active'));
        levelElement.classList.add('active');
      });

      levelElement.addEventListener('keydown', (e) => {
        if (levelStatus === 'locked') return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          levelElement.click();
        }
      });

      documentFragment.appendChild(levelElement);
    }

    levelsContainer.append(documentFragment);

    // Отдельным кадром включаем класс анимации — чтобы браузер посчитал стартовые стили
    requestAnimationFrame(() => {
      levelsContainer.classList.remove('levels_blocks--reenter');
      levelsContainer.querySelectorAll('.levels_block').forEach((levelElement) => {
        levelElement.classList.add('levels_block--enter');
        // если это супер-уровень — добавить флаг после завершения входной анимации
        if (levelElement.classList.contains('levels_block--super')) {
          levelElement.addEventListener('animationend', (e) => {
            if (e.animationName === 'level-tile-in') {
              levelElement.classList.add('levels_block--enter-done');
            }
          });
        }
      });
    });

  }

  async loadLevelsContest() {
    const levelsContainer = document.querySelector('.levels_blocks_contest');
    if (!levelsContainer) return;

    levelsContainer.classList.add('levels_blocks--reenter');
    levelsContainer.innerHTML = '';

    const fragment = document.createDocumentFragment();

    const baseDelay = 40;
    const startDelay = 60;
    const maxDelay = 600;



    for (let i = 0; i < this.allLevels; i++) {
      const levelNumber = i + 1;
      const contestValue = this.table.levelsStatusContest?.[i] ?? 0;



      const levelElement = document.createElement('div');
      levelElement.className = 'levels_block levels_block--contest';
      levelElement.setAttribute('data-level', levelNumber);
      levelElement.setAttribute('role', 'button');
      levelElement.setAttribute('tabindex', '0');
      levelElement.setAttribute(
        'aria-label',
        `Уровень ${levelNumber}, значение ${contestValue}`
      );

      // задержка появления
      const delay = Math.min(startDelay + i * baseDelay, maxDelay);
      levelElement.style.setProperty('--show-delay', `${delay}ms`);

      if (contestValue) levelElement.classList.add(`level_player${contestValue}`);

      // номер уровня (как раньше)
      const numberElement = document.createElement('div');
      numberElement.className = 'levels_block_number';
      numberElement.textContent = String(levelNumber);

      // вместо статуса — число из массива




      const statusElement = document.createElement('div');
      statusElement.className = 'levels_block_status';

      if (contestValue) {
        // ДОБАВЬТЕ data-i18n АТРИБУТ
        statusElement.setAttribute('data-i18n', `contest.player${contestValue}`);
        statusElement.textContent = t(`contest.player${contestValue}`);
      } else {
        statusElement.textContent = '';
      }

      // Получаем имена ДИНАМИЧЕСКИ при каждом рендере:
      const playerName = contestValue ? t(`contest.player${contestValue}`) : '';
      statusElement.textContent = playerName;

      levelElement.append(numberElement, statusElement);

      // кликабельность без ограничений
      levelElement.addEventListener('click', () => {
        document.querySelectorAll('.levels_block').forEach((el) =>
          el.classList.remove('active')
        );
        levelElement.classList.add('active');

        // startLevel(levelNumber);
      });

      levelElement.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          levelElement.click();
        }
      });

      fragment.append(levelElement);
    }

    levelsContainer.append(fragment);

    requestAnimationFrame(() => {
      levelsContainer.classList.remove('levels_blocks--reenter');
      levelsContainer.querySelectorAll('.levels_block').forEach((el) => {
        el.classList.add('levels_block--enter');
      });
    });
  }


  /**
   * Пере-анимация уже отрисованных уровней (например, при возвращении на экран)
   */
  replayLevelsEnterAnimation() {
    const levelsContainer = document.querySelector('.levels_blocks');
    if (!levelsContainer) return;
    const levelElements = Array.from(levelsContainer.querySelectorAll('.levels_block'));
    levelElements.forEach((levelElement) => {
      levelElement.classList.remove('levels_block--enter');
      // Сброс анимации
      // eslint-disable-next-line no-unused-expressions
      void levelElement.offsetWidth;
      levelElement.classList.add('levels_block--enter');
    });
  }


}


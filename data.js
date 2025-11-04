import * as THREE from "three";

export class DataClass {
  constructor() {
    this.gameInit = false;

    this.names = ["Билли", "Вилли", "Дилли"];



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
      updateDate: 11132,
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
            rec: 6,
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

    // console.log(this.table.player.bonusHeart[0])

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
          return { modifierClass: 'levels_block--completed', labelText: 'Пройден', ariaState: 'уровень пройден' };
        case 'available':
          return { modifierClass: 'levels_block--available', labelText: 'Доступен', ariaState: 'уровень доступен' };
        default:
          return { modifierClass: 'levels_block--locked', labelText: 'Закрыт', ariaState: 'уровень закрыт' };
      }
    };

    const baseDelayMs = 40;     // базовая задержка между плитками
    const startDelayMs = 60;    // стартовая задержка для первой
    const maxDelayMs = 600;     // ограничим максимальную задержку


    for (let levelIndex = 0; levelIndex < this.levelsStatus[numChels].length; levelIndex++) {
      const levelStatus = this.levelsStatus[numChels][levelIndex];
      const { modifierClass, labelText, ariaState } = getLevelConfig(levelStatus);

      const levelElement = document.createElement('div');
      levelElement.className = `levels_block ${modifierClass}`;
      levelElement.setAttribute('data-level', String(levelIndex + 1));
      levelElement.setAttribute('role', 'button');
      levelElement.setAttribute('tabindex', levelStatus === 'locked' ? '-1' : '0');
      levelElement.setAttribute('aria-label', `Уровень ${levelIndex + 1}, ${ariaState}`);

      // Задаём индивидуальную задержку входа через CSS-переменную
      const computedDelay = Math.min(startDelayMs + levelIndex * baseDelayMs, maxDelayMs);
      levelElement.style.setProperty('--show-delay', `${computedDelay}ms`);

      // Внутренняя разметка
      const numberElement = document.createElement('div');
      numberElement.className = 'levels_block_number';
      numberElement.textContent = String(levelIndex + 1);

      const statusElement = document.createElement('div');
      statusElement.className = 'levels_block_status';

      const statusChipElement = document.createElement('span');
      statusChipElement.className = `status_chip ${levelStatus === 'completed'
        ? 'status_chip--completed'
        : levelStatus === 'available'
          ? 'status_chip--available'
          : 'status_chip--locked'
        }`;
      statusChipElement.textContent = labelText;

      statusElement.append(statusChipElement);
      levelElement.append(numberElement, statusElement);

      // Клики/клавиатура
      levelElement.addEventListener('click', () => {
        if (levelStatus === 'locked') return;
        document.querySelectorAll('.levels_block').forEach((element) => element.classList.remove('active'));
        levelElement.classList.add('active');
        console.log(`Выбран уровень ${levelIndex + 1}`);
        // startLevel(levelIndex + 1);
      });

      levelElement.addEventListener('keydown', (keyboardEvent) => {
        if (levelStatus === 'locked') return;
        if (keyboardEvent.key === 'Enter' || keyboardEvent.key === ' ') {
          keyboardEvent.preventDefault();
          levelElement.click();
        }
      });

      documentFragment.append(levelElement);
    }

    levelsContainer.append(documentFragment);

    // Отдельным кадром включаем класс анимации — чтобы браузер посчитал стартовые стили
    requestAnimationFrame(() => {
      levelsContainer.classList.remove('levels_blocks--reenter');
      levelsContainer.querySelectorAll('.levels_block').forEach((levelElement) => {
        levelElement.classList.add('levels_block--enter');
      });
    });
  }

  loadLevelsContest() {
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
      if (contestValue) statusElement.textContent = this.names[contestValue - 1];

      levelElement.append(numberElement, statusElement);

      // кликабельность без ограничений
      levelElement.addEventListener('click', () => {
        document.querySelectorAll('.levels_block').forEach((el) =>
          el.classList.remove('active')
        );
        levelElement.classList.add('active');
        console.log(`Выбран уровень ${levelNumber} (значение: ${contestValue})`);
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


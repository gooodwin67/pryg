import { t } from './i18n.js';

export class DataClass {
  constructor() {
    this.gameInit = false;

    this.yandexPlayer = {
      id: 0,
      player: null,
    };



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

    this.localStorageKey = 'gameData';

    this.disableSelection = () => {
      const elements = document.querySelectorAll('.levels_block, .status_chip, .levels_block_number');
      elements.forEach(el => {
        el.style.userSelect = 'none';
        el.style.webkitUserSelect = 'none';
        el.style.webkitTapHighlightColor = 'transparent';
        el.draggable = false;
      });
    };

  }




  async clearData() {
    localStorage.clear();
  }

  getMineLabel() {
    return t('leaderboard.mine', this.getMineLabel());
  }

  saveLocalData() {
    // try {
    //   this.ensureVersionStamp();
    //   localStorage.setItem(this.localStorageKey, JSON.stringify(this.table));
    // } catch (error) {
    //   console.warn('Local save failed:', error);
    // }
  }

  async loadLocalData() {
    

    this.processDataAfterLoad();
    // try {
    //   const raw = localStorage.getItem(this.localStorageKey);
    //   if (raw) {
    //     const parsed = JSON.parse(raw);
    //     if (parsed && typeof parsed === 'object') {
    //       this.table = parsed;
    //     }
    //   }
    // } catch (error) {
    //   console.warn('Local load failed:', error);
    // }
    // // всегда обрабатываем что есть
    // this.ensureVersionStamp();
    // this.processDataAfterLoad();
  }


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

    this.disableSelection()

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
    this.disableSelection()
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

  processDataAfterLoad() {
    // строим masTables из table.hor/vert ровно так, как их ожидает menu.js
    const buildRowsForMenu = (row) => {
      // row[1..3] — это то, что мы только что проставили из лидерборда
      const firstThree = [row[1], row[2], row[3]].map((x, idx) => (
        x ? { pos: x.pos, name: x.name, rec: x.rec } : { pos: idx + 1, name: '', rec: 0 }
      ));
      const hasMyInFirst3 = firstThree.some(x => x && x.name === this.getMineLabel());

      if (hasMyInFirst3) {
        // кейс: я в топ-3 — меню будет рендерить 0,1,2 индексы
        return firstThree; // длина 3
      } else {
        // кейс: я НЕ в топ-3 — меню возьмёт 0,1 и специальный элемент [3]
        const me = row[3] && row[3].name === this.getMineLabel()
          ? { pos: row[3].pos, name: this.getMineLabel(), rec: row[3].rec }
          : { pos: 0, name: this.getMineLabel(), rec: row[0]?.rec || 0 }; // запасной вариант
        return [ firstThree[0], firstThree[1], firstThree[2], me ]; // ОБЯЗАТЕЛЬНО с индексом [3]
      }
    };

    this.masTables = [
      [ buildRowsForMenu(this.table.hor[0]), buildRowsForMenu(this.table.hor[1]), buildRowsForMenu(this.table.hor[2]) ],
      [ buildRowsForMenu(this.table.vert[0]), buildRowsForMenu(this.table.vert[1]), buildRowsForMenu(this.table.vert[2]) ],
    ];
    


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





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async initYandexPlayer() {
  if (!this.yandexPlayer.player) {
    this.yandexPlayer.player = await ysdk.getPlayer();


    // ysdk.leaderboards.getEntries('ocean1').then(res => console.log(res));
    // ysdk.leaderboards.getEntries('ocean2').then(res => console.log(res));
    



  }
}

// --- 2. ПРОСТО: загрузить table из облака, без локала/слияний ---
async loadTableFromCloud() {
  await this.initYandexPlayer();

  try {
    const cloud = await this.yandexPlayer.player.getData(['table']);
    if (cloud && cloud.table && typeof cloud.table === 'object') {
      // есть данные — используем их
      this.table = cloud.table;
    } else {
      // игрок впервые — создаём новую таблицу по умолчанию
      console.log('Первый вход: создаём новую table');
      this.table = this.createDefaultTable();
      await this.saveTableToCloud(); // сразу записываем базовую структуру в облако
    }
  } catch (error) {
    console.warn('Cloud load failed:', error);
    // если ошибка сети или SDK, создаём дефолт
    this.table = this.createDefaultTable();
  }

  this.processDataAfterLoad();
}


// дефолтная структура для нового игрока
createDefaultTable() {
  return {
    updateDate: Date.now(),
    player: {
      levels: [0, 0, 0],
      bonusHat: [false, false, false],
      bonusHeart: [0, 0, 0],
    },
    levelsStatusContest: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    hor: [
      [ { pos: 0, name: this.getMineLabel(), rec: 0 }, {}, {}, {} ],
      [ { pos: 0, name: this.getMineLabel(), rec: 0 }, {}, {}, {} ],
      [ { pos: 0, name: this.getMineLabel(), rec: 0 }, {}, {}, {} ],
    ],
    vert: [
      [ { pos: 0, name: this.getMineLabel(), rec: 0 }, {}, {}, {} ],
      [ { pos: 0, name: this.getMineLabel(), rec: 0 }, {}, {}, {} ],
      [ { pos: 0, name: this.getMineLabel(), rec: 0 }, {}, {}, {} ],
    ],
  };
}

// --- 3. ПРОСТО: сохранить table в облако ---
async saveTableToCloud({ flush = false } = {}) {
  await this.initYandexPlayer();
  try {
    await this.yandexPlayer.player.setData({ table: this.table }, flush);
  } catch (error) {
    console.warn('Cloud save failed:', error);
  }
}


// --- 4. Загрузить ТОЛЬКО ТОП-3 из набора лидербордов в table.hor/vert ---
// pos:0 (Мой рекорд) НЕ трогаем.
leaderboardsPartIds = ['ocean1', 'ocean2', 'ocean3', 'space1', 'space2', 'space3'];
leaderboardPlacement = {
  ocean1: { group: 'hor', row: 0 },
  ocean2: { group: 'hor', row: 1 },
  ocean3: { group: 'hor', row: 2 },
  space1: { group: 'vert', row: 0 },
  space2: { group: 'vert', row: 1 },
  space3: { group: 'vert', row: 2 },
};




ensureRowsForLeaderboards() {
  const makeRow = () => ([
    { pos: 0, name: this.getMineLabel(), rec: 0 },
    { pos: 1, name: '', rec: 0 },
    { pos: 2, name: '', rec: 0 },
    { pos: 3, name: '', rec: 0 },
  ]);
  if (!this.table.hor) this.table.hor = [makeRow(), makeRow(), makeRow()];
  if (!this.table.vert) this.table.vert = [makeRow(), makeRow(), makeRow()];
  for (let index = 0; index < 3; index++) {
    if (!Array.isArray(this.table.hor[index]) || this.table.hor[index].length !== 4) this.table.hor[index] = makeRow();
    if (!Array.isArray(this.table.vert[index]) || this.table.vert[index].length !== 4) this.table.vert[index] = makeRow();
  }
}

async loadLeaderboardsTop3(ysdkInstance) {
  await this.initYandexPlayer();
  this.ensureRowsForLeaderboards();

  // получаем UID игрока (нужен для сравнения)
  const myUid = this.yandexPlayer?.player?.getUniqueID
    ? this.yandexPlayer.player.getUniqueID()
    : null;

  const loadOne = async (leaderboardId) => {
    try {
      // тянем топ-3 и мою запись отдельно (чтобы знать точный ранг)
      const [topRes, myEntry] = await Promise.all([
        ysdkInstance.leaderboards.getEntries(leaderboardId, {
          quantityTop: 3,
          includeUser: true,
          quantityAround: 0,
        }),
        ysdkInstance.leaderboards.getPlayerEntry(leaderboardId).catch(() => null),
      ]);

      // нормализуем топ-3
      const top3Raw = (topRes.entries || []).map(e => ({
        uid: e.player?.uniqueID || null,
        name: e.player?.publicName || 'Anon',
        rec: typeof e.score === 'number' ? e.score : 0,
        pos: e.rank || 0, // реальный ранг из ЯИ
      }));
      top3Raw.sort((a, b) => b.rec - a.rec);

      // заготовка итоговых 3 строки
      let displayRows = [];

      if (myEntry && myUid) {
        const myRank = myEntry.rank || 0;
        const myScore = typeof myEntry.score === 'number' ? myEntry.score : 0;

        const iAmInTop3 = top3Raw.some(x => x.uid === myUid);

        if (iAmInTop3) {
          // Я в топ-3: заменяем имя на "Мой рекорд"
          displayRows = top3Raw.slice(0, 3).map(item => ({
            pos: item.uid === myUid ? item.pos : item.pos, // оставляем реальный ранг
            name: item.uid === myUid ? this.getMineLabel() : item.name,
            rec: item.rec,
          }));
        } else {
          // Я не в топ-3: берём топ-2 (без меня на всякий случай) + я третьей строкой с моим реальным рангом
          const top2 = top3Raw.filter(x => x.uid !== myUid).slice(0, 2).map(item => ({
            pos: item.pos,
            name: item.name,
            rec: item.rec,
          }));
          const meRow = { pos: myRank || 0, name: this.getMineLabel(), rec: myScore };
          displayRows = [...top2, meRow];
        }

        // обновим pos:0 (мой рекорд) числом
        const placementForPos0 = this.leaderboardPlacement[leaderboardId];
        if (placementForPos0) {
          const targetRow0 = placementForPos0.group === 'hor'
            ? this.table.hor[placementForPos0.row]
            : this.table.vert[placementForPos0.row];
          if (targetRow0 && targetRow0[0]) targetRow0[0].rec = myScore;
        }

      } else {
        // не авторизован или записи нет: просто топ-3 как есть
        displayRows = top3Raw.slice(0, 3).map(item => ({
          pos: item.pos,
          name: item.name,
          rec: item.rec,
        }));
      }

      // положим три строки в pos:1..3 (pos:0 не трогаем)
      const placement = this.leaderboardPlacement[leaderboardId];
      if (!placement) return;

      const targetRow = placement.group === 'hor'
        ? this.table.hor[placement.row]
        : this.table.vert[placement.row];

      // пишем pos:1..3 для отображения
      for (let i = 0; i < 3; i++) {
        const src = displayRows[i] || { pos: i + 1, name: '', rec: 0 };
        targetRow[i + 1] = { pos: src.pos, name: src.name, rec: src.rec };
      }
      const iAmShownInTop3 = displayRows.some(r => r.name === this.getMineLabel());
      if (!iAmShownInTop3 && myEntry && myUid) {
        const myRank = myEntry.rank || 0;
        const myScore = typeof myEntry.score === 'number' ? myEntry.score : 0;
        targetRow[3] = { pos: myRank, name: this.getMineLabel(), rec: myScore };
      }

    } catch (error) {
      console.warn(`Leaderboard ${leaderboardId} smart top-3 failed:`, error);
      const placement = this.leaderboardPlacement[leaderboardId];
      if (!placement) return;
      const targetRow = placement.group === 'hor'
        ? this.table.hor[placement.row]
        : this.table.vert[placement.row];
      for (let i = 1; i <= 3; i++) targetRow[i] = { pos: i, name: '', rec: 0 };
    }
  };

  await Promise.all(this.leaderboardsPartIds.map(loadOne));

  // обновляем ваши производные структуры
  this.processDataAfterLoad();
}





// --- 5. Отправить МОЙ результат в конкретный лидерборд ---
async submitMyScore(ysdkInstance, leaderboardId, scoreValue) {
  const numericScore = Number(scoreValue) || 0;
  try {
    const allowed = await ysdkInstance.isAvailableMethod('leaderboards.setScore');
    
    if (!allowed) return;
    await ysdkInstance.leaderboards.setScore(leaderboardId, numericScore);
  } catch (error) {
    console.warn('Submit score failed:', error);
  }
}


}
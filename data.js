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



  saveLocalData() {
    try {
      this.ensureVersionStamp();
      localStorage.setItem(this.localStorageKey, JSON.stringify(this.table));
    } catch (error) {
      console.warn('Local save failed:', error);
    }
  }

  async loadLocalData() {
    try {
      const raw = localStorage.getItem(this.localStorageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
          this.table = parsed;
        }
      }
    } catch (error) {
      console.warn('Local load failed:', error);
    }
    // всегда обрабатываем что есть
    this.ensureVersionStamp();
    this.processDataAfterLoad();
  }

  // 3) Сеть: загрузка + слияние по версии
  async loadNetworkDataAndMerge() {
    try {
      const player = await ysdk.getPlayer();
      this.yandexPlayer.player = player;

      const cloudData = await player.getData(['table']);
      const cloudTable = cloudData && cloudData.table ? cloudData.table : null;

      if (!cloudTable) {
        // В облаке пусто — просто пушим локал в облако
        await this.saveNetworkData({ flush: false });
        return;
      }

      // гарантируем штампы версии
      this.ensureVersionStamp(this.table);
      this.ensureVersionStamp(cloudTable);

      // выбираем более свежие данные
      const newerIsCloud = (cloudTable.meta.updatedAt || 0) > (this.table.meta.updatedAt || 0);

      if (newerIsCloud) {
        this.table = cloudTable;
        this.processDataAfterLoad();
        // опционально сохранить в локал
        this.saveLocalData();
      } else {
        // локальные новее — оставляем их и пушим в облако
        await this.saveNetworkData({ flush: false });
      }

    } catch (error) {
      console.warn('Cloud load/merge failed:', error);
    }
  }

  // 4) Сохранение в облако
  async saveNetworkData({ flush = false } = {}) {
    try {
      if (!this.yandexPlayer.player) return;
      this.ensureVersionStamp();
      await this.yandexPlayer.player.setData({ table: this.table }, flush);
    } catch (error) {
      console.warn('Cloud save failed:', error);
    }
  }

  // 6) Утилита для версии
  ensureVersionStamp(target = this.table) {
    if (!target.meta) target.meta = {};
    target.meta.updatedAt = Date.now();
  }



  processDataAfterLoad() {
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





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Минимальный рабочий код
// Вставьте в ваш DataClass (или рядом) и вызовите loadLeaderboardsAtStart(ysdk) как раньше.

/** --- КОНФИГ --- */
leaderboardsPartIds = ['ocean1', 'ocean2', 'ocean3', 'space1', 'space2', 'space3'];
leaderboardMainId = 'main';

// Куда класть каждый борд: группа (hor/vert) и индекс строки (row)
leaderboardPlacement = {
  ocean1: { group: 'hor', row: 0 },
  ocean2: { group: 'hor', row: 1 },
  ocean3: { group: 'hor', row: 2 },
  space1: { group: 'vert', row: 0 },
  space2: { group: 'vert', row: 1 },
  space3: { group: 'vert', row: 2 },
};

/** --- ИНИЦИАЛИЗАЦИЯ ХРАНИЛИЩ --- */
initLeaderboardsStorage() {
  if (!this.table) this.table = {};
  if (!this.table.leaderboards) this.table.leaderboards = {};
  if (!this.table.leaderboardsByPlayer) this.table.leaderboardsByPlayer = {};

  // hor/vert: по 3 строки (для ocean1..3 и space1..3). Каждая строка = 4 ячейки (pos:0..3)
  if (!this.table.hor) this.table.hor = [[], [], []];
  if (!this.table.vert) this.table.vert = [[], [], []];

  // заполняем плейсхолдерами, если пусто
  const createEmptyRow = () => ([
    { pos: 0, name: 'Мой рекорд', rec: 0 },
    { pos: 1, name: '', rec: 0 },
    { pos: 2, name: '', rec: 0 },
    { pos: 3, name: '', rec: 0 },
  ]);

  for (let i = 0; i < 3; i++) {
    if (!Array.isArray(this.table.hor[i]) || this.table.hor[i].length !== 4) this.table.hor[i] = createEmptyRow();
    if (!Array.isArray(this.table.vert[i]) || this.table.vert[i].length !== 4) this.table.vert[i] = createEmptyRow();
  }
}

/** --- ЗАГРУЗКА И РАСКЛАДКА --- */
async loadLeaderboardsAtStart(ysdkInstance) {
  this.initLeaderboardsStorage();

  const fetchPromises = this.leaderboardsPartIds.map(async (leaderboardId) => {
    // 1) читаем топ и мою запись
    const entries = await this.readLeaderboardTop(ysdkInstance, leaderboardId).catch(() => []);
    const myEntry = await this.readMyEntrySafe(ysdkInstance, leaderboardId);

    // 2) сохраняем сырые данные (опционально)
    this.table.leaderboards[leaderboardId] = entries;
    if (!this.table.leaderboardsByPlayer.me) this.table.leaderboardsByPlayer.me = {};
    this.table.leaderboardsByPlayer.me[leaderboardId] = myEntry ? (typeof myEntry.score === 'number' ? myEntry.score : 0) : 0;

    // 3) формируем ряд для hor/vert: pos:0 — Мои очки, pos:1..3 — топ-3
    const myScore = this.getMyScoreForBoard(leaderboardId);
    const rowData = this.makeRowFromLeaderboard(entries, myScore, 'Мой рекорд');

    // 4) кладём rowData в нужную группу/ряд
    this.placeRow(leaderboardId, rowData);
  });

  await Promise.all(fetchPromises);

  // дальше ваш пайплайн
  // this.processDataAfterLoad(); // если нужно — раскомментируйте
  this.saveLocalData?.();
  await this.saveNetworkData?.({ flush: false });
}

/** --- ХЕЛПЕРЫ --- */

// Берём "мой рекорд" из ваших пользовательских данных, если он у вас уже есть,
// иначе — используем счёт из лидерборда (они должны совпадать, но источник выберите единый).
getMyScoreForBoard(leaderboardId) {
  // 1) приоритет — то, как вы храните рекорд игрока (замените на ваши поля, если отличаются)
  if (this.playerData?.records && typeof this.playerData.records[leaderboardId] === 'number') {
    return this.playerData.records[leaderboardId];
  }
  // 2) фоллбек — то, что пришло из лидерборда
  const fromLeaderboard = this.table.leaderboardsByPlayer?.me?.[leaderboardId];
  return typeof fromLeaderboard === 'number' ? fromLeaderboard : 0;
}

// Превращает getEntries -> массив из 4 объектов:
// [0] = мой рекорд, [1..3] = топ-3 по борду
makeRowFromLeaderboard(entries, myScore, myLabel) {
  // берём первые 3 записи; если меньше — добиваем нулями
  const top3 = (entries || []).slice(0, 3);
  while (top3.length < 3) top3.push({ name: '', rec: 0 });

  // pos — это позиция в UI, не ранк
  const row = [
    { pos: 0, name: myLabel, rec: typeof myScore === 'number' ? myScore : 0 },
    { pos: 1, name: top3[0].name || '', rec: typeof top3[0].rec === 'number' ? top3[0].rec : 0 },
    { pos: 2, name: top3[1].name || '', rec: typeof top3[1].rec === 'number' ? top3[1].rec : 0 },
    { pos: 3, name: top3[2].name || '', rec: typeof top3[2].rec === 'number' ? top3[2].rec : 0 },
  ];
  return row;
}

// Положить сформированный ряд в hor/vert по карте размещения
placeRow(leaderboardId, rowData) {
  const placement = this.leaderboardPlacement[leaderboardId];
  if (!placement) return;

  if (placement.group === 'hor') {
    this.table.hor[placement.row] = rowData;
  } else if (placement.group === 'vert') {
    this.table.vert[placement.row] = rowData;
  }
}

/** --- ЧТЕНИЕ ИЗ YSDK --- */
async readLeaderboardTop(ysdkInstance, leaderboardId) {
  const result = await ysdkInstance.leaderboards.getEntries(leaderboardId, {
    quantityTop: 10,
    includeUser: true,
    quantityAround: 0,
  });

  // нормализация под (name, rec)
  const normalized = (result.entries || []).map(entry => ({
    name: entry.player?.publicName || 'Anon',
    rec: typeof entry.score === 'number' ? entry.score : 0,
  }));
  // сортировка по счёту на случай, если SDK вернул неотсортированно
  normalized.sort((a, b) => b.rec - a.rec);
  return normalized;
}

async readMyEntrySafe(ysdkInstance, leaderboardId) {
  try {
    return await ysdkInstance.leaderboards.getPlayerEntry(leaderboardId);
  } catch {
    return null;
  }
}






//////////////////////////////////////////////////////////////////////////////////////////

// Минимальный рабочий код
// Вставьте в ваш DataClass

/**
 * Сохранить результат в борд и обновить main (сумма по всем частям).
 * @param {object} ysdkInstance - инстанс Yandex SDK
 * @param {string} leaderboardId - id борда (например, 'ocean1' / 'space2' и т.д.)
 * @param {number} newScore - новый результат игрока для этого борда
 */
async saveResult(ysdkInstance, leaderboardId, newScore) {
  if (!this.playerData) this.playerData = {};
  if (!this.playerData.records) this.playerData.records = {};
  if (!this.table) this.table = {};
  if (!this.table.leaderboardsByPlayer) this.table.leaderboardsByPlayer = { me: {} };

  // 1) Обновляем локальный лучший результат по борду (берём максимум)
  const previousBest = typeof this.playerData.records[leaderboardId] === 'number'
    ? this.playerData.records[leaderboardId]
    : 0;
  const bestForBoard = Math.max(previousBest, Number(newScore) || 0);
  this.playerData.records[leaderboardId] = bestForBoard;
  this.table.leaderboardsByPlayer.me[leaderboardId] = bestForBoard;

  // 2) Отправляем в лидерборд (если разрешено)
  try {
    const canSetScore = await ysdkInstance.isAvailableMethod('leaderboards.setScore');
    if (canSetScore) {
      await ysdkInstance.leaderboards.setScore(leaderboardId, bestForBoard);
    }
  } catch (_) {
    // не критично — сохраняем локально и идём дальше
  }

  // 3) Обновляем pos:0 в hor/vert (мой рекорд) для соответствующей строки
  if (this.leaderboardPlacement && this.leaderboardPlacement[leaderboardId]) {
    const placement = this.leaderboardPlacement[leaderboardId];
    if (placement.group === 'hor' && Array.isArray(this.table.hor?.[placement.row])) {
      this.table.hor[placement.row][0].rec = bestForBoard;
    }
    if (placement.group === 'vert' && Array.isArray(this.table.vert?.[placement.row])) {
      this.table.vert[placement.row][0].rec = bestForBoard;
    }
  }

  // 4) Пересчитываем сумму по всем частям и отправляем в main
  try {
    const totalScore = this.leaderboardsPartIds.reduce((accumulator, partId) => {
      const value = typeof this.playerData.records[partId] === 'number' ? this.playerData.records[partId] : 0;
      return accumulator + value;
    }, 0);

    const canSetScore = await ysdkInstance.isAvailableMethod('leaderboards.setScore');
    if (canSetScore) {
      await ysdkInstance.leaderboards.setScore(this.leaderboardMainId, totalScore);
    }

    // при желании можно сохранить "мой" ряд для main локально
    if (!this.table.leaderboards) this.table.leaderboards = {};
    if (!this.table.leaderboards[this.leaderboardMainId]) this.table.leaderboards[this.leaderboardMainId] = [];
    const myDisplayName = this.yandexPlayer?.player?.getName ? this.yandexPlayer.player.getName() : 'Me';
    const existingIndex = this.table.leaderboards[this.leaderboardMainId].findIndex(item => item.name === myDisplayName);
    const myMainRow = { pos: 0, name: myDisplayName, rec: totalScore };
    if (existingIndex >= 0) this.table.leaderboards[this.leaderboardMainId][existingIndex] = myMainRow;
    else this.table.leaderboards[this.leaderboardMainId].unshift(myMainRow);
  } catch (_) {
    // не валим флоу
  }

  // 5) Сохраняем ваше локальное/сетевое состояние (если у вас есть эти методы)
  this.saveLocalData?.();
  await this.saveNetworkData?.({ flush: false });

  // 6) (опционально) можно тут же подтянуть топ и обновить pos:1..3
  //    const entries = await this.readLeaderboardTop(ysdkInstance, leaderboardId).catch(() => []);
  //    const rowData = this.makeRowFromLeaderboard(entries, bestForBoard, 'Мой рекорд');
  //    this.placeRow(leaderboardId, rowData);

  return bestForBoard;
}







}
// i18n.js
const messages = {
    ru: {
        ui: { langToggle: "EN" },
        title: "УТИНАЯ БРАТВА",
        modes: {
            champ: { title: "Чемпионат", desc: "Установите лучшее время (1,2,3 игрока)" },
            coop: { title: "Прохождение", desc: "Совместное прохождение уровней" },
            versus: { title: "Соревнование", desc: "Определите лучшего в прохождении" }
        },
        free: {
            playersTitle: "Сколько игроков",
            gameChoice: "Выбор игры",
            tip1: "Для каждого количества игроков своя таблица рекордов",
            tip2: "Учитывается пройденный путь каждого игрока в команде",
            tip3: "Проходите 10 уровень в кооперативе, чтобы получить 4ю жизнь на 10 попыток в рекордах",
            ocean: "Океан",
            space: "Космос",
        },
        levels: {
            playersTitle: "Сколько игроков",
            levelChoice: "Выбор уровня",
            tip1: "Проходите уровни разным количеством игроков",
            tip2: "Каждый раз, проходя 10й уровень, игрок получает 4 сердечко в рекордах на несколько попыток. 10 уровень всегда разный!",
            tip3: "Для прохождения уровня все игроки должны дойти до финиша",
            status: {
                completed: "Пройден",
                available: "Доступен",
                locked: "Закрыт",
                completedAria: "уровень пройден",
                availableAria: "уровень доступен",
                lockedAria: "уровень закрыт"
            },
        },
        contest: {
            playersTitle: "Сколько игроков",
            levelChoice: "Выбор уровня",
            random: "Случайный уровень",
            tip1: "Соревнуйтесь друг с другом. Побеждает тот, кто первый доберется до финиша",
            tip2: "Цвет уровня окрашивается в цвет победителя",
            tip3: "Цель - окрасить все уровни в свои цвета",
            player1: "Билли",
            player2: "Вилли",
            player3: "Дилли",
        },

        players: { billy: "Билли", willy: "Вилли", dilly: "Дилли", lives: "Жизни:" },
        hud: { metersLabel: "м", records: "Рекорды:", mine: "Мой:", world: "Мировой:", secPlayer: "Я", thirdPlayer: "Ь" },
        popup: { continue: "Продолжить +", next: "Следующий уровень", restart: "Начать заново", levelSelect: "Выбор уровня", exit: "Выйти в меню" },
        loader: { loading: "Загрузка..." },

    },
    en: {
        ui: { langToggle: "RU" },
        title: "DUCK BROS",
        modes: {
            champ: { title: "Championship", desc: "Set the best time (1,2,3 players)" },
            coop: { title: "Beat levels", desc: "Beat levels together" },
            versus: { title: "Versus", desc: "Find out who’s fastest" }
        },
        free: {
            playersTitle: "Players",
            gameChoice: "Game selection",
            tip1: "Each player count has its own leaderboard",
            tip2: "We sum distance traveled by each teammate",
            tip3: "Beat level 10 in co-op to get the 4th heart for 10 championship attempts. 10 level always random!",
            ocean: "Ocean",
            space: "Space",
        },
        levels: {
            playersTitle: "Players",
            levelChoice: "Level selection",
            tip1: "Beat levels with different team sizes",
            tip2: "Each time you beat level 10 you get a 4th heart for a few championship attempts",
            tip3: "To finish a level, all players must reach the goal",
            status: {
                completed: "Completed",
                available: "Available",
                locked: "Locked",
                completedAria: "level completed",
                availableAria: "level available",
                lockedAria: "level locked"
            },
        },
        contest: {
            playersTitle: "Players",
            levelChoice: "Level selection",
            random: "Random level",
            tip1: "Race each other: first to finish wins",
            tip2: "The level gets dyed in the winner’s color",
            tip3: "Goal: dye all levels in your color",
            player1: "Billy",
            player2: "Willy",
            player3: "Dilly",
        },
        players: { billy: "Billy", willy: "Willy", dilly: "Dilly", lives: "Lives:" },
        hud: { metersLabel: "m", records: "Records:", mine: "Mine:", world: "World:", secPlayer: "Z", thirdPlayer: "M" },
        popup: { continue: "Continue +", next: "Next level", restart: "Restart", levelSelect: "Level select", exit: "Main menu" },
        loader: { loading: "Loading..." },
    }
};

function get(obj, path) { return path.split('.').reduce((o, k) => o && o[k], obj); }

export function applyTranslations(locale = 'ru', root = document) {
    const dict = messages[locale] || messages.ru;

    root.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const val = get(dict, key);
        if (val != null) el.textContent = val; // fallback останется, если ключа нет
    });

    document.documentElement.lang = locale;
    localStorage.setItem('locale', locale);

    // обновим текст на кнопке
    const btn = document.getElementById('lang-toggle');

    if (btn) {
        const flag = document.getElementById('flag');
        if (get(dict, 'ui.langToggle') === 'ru' || (locale === 'ru')) {

            flag.classList.remove('us');
            flag.classList.add('ru');
            flag.src = "images/ru.svg"


        }
        else {
            flag.classList.remove('ru');
            flag.classList.add('us');
            flag.src = "images/us.svg"


        }
    }
}

export function initI18n() {
    const saved = localStorage.getItem('locale') || 'ru';
    applyTranslations(saved);

    //  const btn = document.getElementById('lang-toggle');
    //  if (btn) {
    //   btn.addEventListener('click', () => {
    //    const curr = localStorage.getItem('locale') || 'ru';
    //    const next = curr === 'ru' ? 'en' : 'ru';
    //    applyTranslations(next);
    //   });
    //  }

    const toggle = document.getElementById('lang-toggle');
    const flag = document.getElementById('flag');

    if (toggle) {
        toggle.addEventListener('click', () => {
            const curr = localStorage.getItem('locale') || 'ru';
            const next = curr === 'ru' ? 'en' : 'ru';
            applyTranslations(next);

            // if(flag.classList.contains('ru')){
            //     flag.classList.remove('ru');
            //     flag.classList.add('us');
            //     flag.src="https://flagicons.lipis.dev/flags/4x3/us.svg"
            // }
            // else {
            //     flag.classList.remove('us');
            //     flag.classList.add('ru');
            //     flag.src="https://flagicons.lipis.dev/flags/4x3/ru.svg"
            // }
        })
    }




    // toggle.onclick=switchLang;

    // function switchLang(){
    //   //en to fr
    //   if(flag.classList.contains('ru')){
    //     flag.classList.remove('ru');
    //     flag.classList.add('us');
    //     flag.src="https://flagicons.lipis.dev/flags/4x3/us.svg"
    //   }
    //   //fr to en
    //   else{
    //     flag.classList.remove('us');
    //     flag.classList.add('ru');
    //     flag.src="https://flagicons.lipis.dev/flags/4x3/ru.svg"
    //   }
    // }


}


export function t(path, fallback = "") {
    const locale = localStorage.getItem('locale') || 'ru';
    const dict = messages[locale] || messages.ru;
    const val = path.split('.').reduce((o, k) => (o && o[k]), dict);
    return (val ?? fallback);
}
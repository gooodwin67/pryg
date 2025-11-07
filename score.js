
export class ScoreClass {
  constructor(camera, dataClass) {
    this.camera = camera;
    this.dataClass = dataClass;

    this.score = 0;

    this.startX = this.camera.position.x;
    this.startY = this.camera.position.y;

    this.metersFloatEl = document.getElementById('meters-float');
    this.myRecField = document.getElementById('myRecord');
    this.worldRecField = document.getElementById('worldRecord');
    this.playerPanels = Array.from(document.querySelectorAll('.player_panel_rec_num')).slice(0, 3);

    this.worldRec = 0;
    this.myRec = 0;
  }

  loadRecsToHud(mode = 0, num = 0) {
    this.worldRec = this.dataClass.masTables[mode][num][0].rec;
    this.myRec = this.dataClass.masTables[mode][num].find((value) => value['pos'] == 0).rec; /////////////////////////////////////////

    this.myRecField.textContent = this.myRec;
    this.worldRecField.textContent = this.worldRec;
  }

  // updateMetersFloat(to) {
  //   to = Math.max(0, Math.floor(to));
  //   if (to === shownFloat) return;
  //   const from = shownFloat;
  //   const start = performance.now(), dur = 50;

  //   const step = (t) => {
  //     const k = Math.min(1, (t - start) / dur);
  //     const eased = 1 - Math.pow(1 - k, 4);
  //     const val = Math.round(from + (to - from) * eased);
  //     this.score = val;

  //     if (this.score + 1 > this.myRec) {
  //       this.myRec = this.score;
  //       this.myRecField.textContent = this.myRec;
  //     }
  //     if (this.score + 1 > this.worldRec) {
  //       this.worldRec = this.score;
  //       this.worldRecField.textContent = this.myRec;
  //     }

  //     this.metersFloatEl.textContent = String(val).padStart(3, '0');
  //     if (k < 1) requestAnimationFrame(step);
  //     else shownFloat = to;
  //   }

  //   requestAnimationFrame(step);
  // }

  // score.js
  updateMetersFloat(_ignored, players, gameDir = 'hor') {

    const axis = (gameDir === 'vert') ? 'y' : 'x';
    const eps = 1e-4; // порог, чтобы игнорировать микродвижения из физики

    // 1) Обновляем накопленные очки у каждого игрока
    for (const p of players) {
      const obj = p?.player;
      if (!obj) continue;

      const ud = obj.userData || (obj.userData = {});
      if (ud.score == null) ud.score = 0;
      let cur = obj.position?.[axis] ?? 0;



      if (ud._lastMeterPos == null) ud._lastMeterPos = cur;



      // Респаун обрабатываем только в горизонтали (в вертикали респаунов нет)
      if (gameDir !== 'vert' && ud._wasLive === false && ud.live) {
        ud._lastMeterPos = cur; // точка отсчёта = место возрождения
      }


      if (ud.live) {
        const delta = cur - ud._lastMeterPos;
        const add = (delta > eps) ? delta : 0; // только вперёд
        if (add !== 0) {
          ud.score += add;
          ud._lastMeterPos = cur;
        }
      }

      if (ud.score === 0) {
        // новый забег или жёсткий сброс — начинаем считать от текущей точки
        ud._lastMeterPos = cur;
      }

      ud._wasLive = !!ud.live;
    }

    // 2) Обновляем три индивидуальных спана + считаем общую сумму
    if (!this.playerPanels) {
      this.playerPanels = Array.from(document.querySelectorAll('.player_panel_rec_num')).slice(0, 3);
    }

    let total = 0;
    for (let i = 0; i < 3; i++) {
      const span = this.playerPanels[i];
      const player = players[i]?.player;
      const score = Math.max(0, Math.floor(player?.userData?.score || 0));
      total += score;
      if (span) span.textContent = String(score).padStart(3, '0');
    }

    // 3) Плавно анимируем общий HUD к сумме трёх игроков
    const to = Math.max(0, Math.floor(total));
    if (to === shownFloat) return;

    const from = shownFloat;
    const start = performance.now();
    const dur = 50;

    const step = (t) => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 4);
      const val = Math.round(from + (to - from) * eased);
      this.score = val;

      // // Рекорды
      // if (this.score > this.myRec) {
      //   this.myRec = this.score;
      //   // if (this.myRecField) this.myRecField.textContent = this.myRec;
      // }
      // if (this.score > this.worldRec) {
      //   this.worldRec = this.score;
      //   // if (this.worldRecField) this.worldRecField.textContent = this.worldRec;
      // }

      if (this.metersFloatEl) this.metersFloatEl.textContent = String(val).padStart(3, '0');

      if (k < 1) requestAnimationFrame(step);
      else shownFloat = to;
    };

    requestAnimationFrame(step);
  }




}



let shownFloat = 0;

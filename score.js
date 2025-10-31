import * as THREE from "three";

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

    this.worldRec = 0;
    this.myRec = 0;
  }

  loadRecsToHud(mode = 0, num = 0) {
    this.worldRec = this.dataClass.masTables[mode][num][0].rec;
    this.myRec = this.dataClass.masTables[mode][num].find((value) => value['pos'] == 0).rec; /////////////////////////////////////////

    this.myRecField.textContent = this.myRec;
    this.worldRecField.textContent = this.worldRec;
  }

  updateMetersFloat(to) {
    to = Math.max(0, Math.floor(to));
    if (to === this.shownFloat) return;
    const from = shownFloat;
    const start = performance.now(), dur = 50;

    const step = (t) => {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 4);
      const val = Math.round(from + (to - from) * eased);
      this.score = val;

      if (this.score + 1 > this.myRec) {
        this.myRec = this.score;
        this.myRecField.textContent = this.myRec;
      }
      if (this.score + 1 > this.worldRec) {
        this.worldRec = this.score;
        this.worldRecField.textContent = this.myRec;
      }

      this.metersFloatEl.textContent = String(val).padStart(3, '0');
      if (k < 1) requestAnimationFrame(step);
      else shownFloat = to;
    }

    requestAnimationFrame(step);
  }


}



let shownFloat = 0;

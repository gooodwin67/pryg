import * as THREE from "three";

export class ScoreClass {
  constructor(camera) {
    this.camera = camera;

    this.score = 0;

    this.startX = this.camera.position.x;
    this.startY = this.camera.position.y;

  }

  updateMetersFloat(to) {
    to = Math.max(0, Math.floor(to));
    if (to === this.shownFloat) return;
    const from = shownFloat;
    const start = performance.now(), dur = 200;

    function step(t) {
      const k = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - k, 4);
      const val = Math.round(from + (to - from) * eased);
      metersFloatEl.textContent = String(val).padStart(3, '0');
      if (k < 1) requestAnimationFrame(step);
      else shownFloat = to;
    }

    requestAnimationFrame(step);
  }


}

const metersFloatEl = document.getElementById('meters-float');

let shownFloat = 0;

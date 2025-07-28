/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const Tp = 2;
const bs = "attached", yo = "detached";
const Ep = 1e3;
const gt = "srgb", Et = "srgb-linear", dr = "linear", Qe = "srgb";
const Rs = "300 es";
class ci {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return false;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const s = i.indexOf(t);
      s !== -1 && i.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let s = 0, a = i.length; s < a; s++) i[s].call(this, e);
      e.target = null;
    }
  }
}
const xt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let ws = 1234567;
const Ei = Math.PI / 180, ri = 180 / Math.PI;
function Wt() {
  const r = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (xt[r & 255] + xt[r >> 8 & 255] + xt[r >> 16 & 255] + xt[r >> 24 & 255] + "-" + xt[e & 255] + xt[e >> 8 & 255] + "-" + xt[e >> 16 & 15 | 64] + xt[e >> 24 & 255] + "-" + xt[t & 63 | 128] + xt[t >> 8 & 255] + "-" + xt[t >> 16 & 255] + xt[t >> 24 & 255] + xt[n & 255] + xt[n >> 8 & 255] + xt[n >> 16 & 255] + xt[n >> 24 & 255]).toLowerCase();
}
function Fe(r, e, t) {
  return Math.max(e, Math.min(t, r));
}
function as(r, e) {
  return (r % e + e) % e;
}
function To(r, e, t, n, i) {
  return n + (r - e) * (i - n) / (t - e);
}
function Eo(r, e, t) {
  return r !== e ? (t - r) / (e - r) : 0;
}
function Ai(r, e, t) {
  return (1 - t) * r + t * e;
}
function Ao(r, e, t, n) {
  return Ai(r, e, 1 - Math.exp(-t * n));
}
function bo(r, e = 1) {
  return e - Math.abs(as(r, e * 2) - e);
}
function Ro(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * (3 - 2 * r));
}
function wo(r, e, t) {
  return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e), r * r * r * (r * (r * 6 - 15) + 10));
}
function Co(r, e) {
  return r + Math.floor(Math.random() * (e - r + 1));
}
function Po(r, e) {
  return r + Math.random() * (e - r);
}
function Lo(r) {
  return r * (0.5 - Math.random());
}
function Do(r) {
  r !== void 0 && (ws = r);
  let e = ws += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function Io(r) {
  return r * Ei;
}
function Uo(r) {
  return r * ri;
}
function No(r) {
  return (r & r - 1) === 0 && r !== 0;
}
function Fo(r) {
  return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2));
}
function Oo(r) {
  return Math.pow(2, Math.floor(Math.log(r) / Math.LN2));
}
function Bo(r, e, t, n, i) {
  const s = Math.cos, a = Math.sin, o = s(t / 2), l = a(t / 2), c = s((e + n) / 2), h = a((e + n) / 2), u = s((e - n) / 2), d = a((e - n) / 2), p = s((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      r.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      r.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      r.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      r.set(o * h, l * g, l * p, o * c);
      break;
    case "YXY":
      r.set(l * p, o * h, l * g, o * c);
      break;
    case "ZYZ":
      r.set(l * g, l * p, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function zt(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return r / 4294967295;
    case Uint16Array:
      return r / 65535;
    case Uint8Array:
      return r / 255;
    case Int32Array:
      return Math.max(r / 2147483647, -1);
    case Int16Array:
      return Math.max(r / 32767, -1);
    case Int8Array:
      return Math.max(r / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function $e(r, e) {
  switch (e.constructor) {
    case Float32Array:
      return r;
    case Uint32Array:
      return Math.round(r * 4294967295);
    case Uint16Array:
      return Math.round(r * 65535);
    case Uint8Array:
      return Math.round(r * 255);
    case Int32Array:
      return Math.round(r * 2147483647);
    case Int16Array:
      return Math.round(r * 32767);
    case Int8Array:
      return Math.round(r * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const Go = { DEG2RAD: Ei, RAD2DEG: ri, generateUUID: Wt, clamp: Fe, euclideanModulo: as, mapLinear: To, inverseLerp: Eo, lerp: Ai, damp: Ao, pingpong: bo, smoothstep: Ro, smootherstep: wo, randInt: Co, randFloat: Po, randFloatSpread: Lo, seededRandom: Do, degToRad: Io, radToDeg: Uo, isPowerOfTwo: No, ceilPowerOfTwo: Fo, floorPowerOfTwo: Oo, setQuaternionFromProperEuler: Bo, normalize: $e, denormalize: zt };
class Be {
  constructor(e = 0, t = 0) {
    Be.prototype.isVector2 = true, this.x = e, this.y = t;
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return this.x = e, this.y = t, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = e.elements;
    return this.x = i[0] * t + i[3] * n + i[6], this.y = i[1] * t + i[4] * n + i[7], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this;
  }
  clamp(e, t) {
    return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this;
  }
  clampScalar(e, t) {
    return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Fe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this;
  }
  rotateAround(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = this.x - e.x, a = this.y - e.y;
    return this.x = s * n - a * i + e.x, this.y = s * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Le {
  constructor(e, t, n, i, s, a, o, l, c) {
    Le.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c);
  }
  set(e, t, n, i, s, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = s, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrix3Column(this, 0), t.setFromMatrix3Column(this, 1), n.setFromMatrix3Column(this, 2), this;
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], p = n[5], g = n[8], _ = i[0], m = i[3], f = i[6], A = i[1], E = i[4], S = i[7], I = i[2], b = i[5], w = i[8];
    return s[0] = a * _ + o * A + l * I, s[3] = a * m + o * E + l * b, s[6] = a * f + o * S + l * w, s[1] = c * _ + h * A + u * I, s[4] = c * m + h * E + u * b, s[7] = c * f + h * S + u * w, s[2] = d * _ + p * A + g * I, s[5] = d * m + p * E + g * b, s[8] = d * f + p * S + g * w, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * s * h + n * o * l + i * s * c - i * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, d = o * l - h * s, p = c * s - a * l, g = t * u + n * d + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * c - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = d * _, e[4] = (h * t - i * l) * _, e[5] = (i * s - o * t) * _, e[6] = p * _, e[7] = (n * l - c * t) * _, e[8] = (a * t - n * s) * _, this;
  }
  transpose() {
    let e;
    const t = this.elements;
    return e = t[1], t[1] = t[3], t[3] = e, e = t[2], t[2] = t[6], t[6] = e, e = t[5], t[5] = t[7], t[7] = e, this;
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8], this;
  }
  setUvTransform(e, t, n, i, s, a, o) {
    const l = Math.cos(s), c = Math.sin(s);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -i * c, i * l, -i * (-c * a + l * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(vr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(vr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(vr.makeTranslation(e, t)), this;
  }
  makeTranslation(e, t) {
    return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1), this;
  }
  makeRotation(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, n, t, 0, 0, 0, 1), this;
  }
  makeScale(e, t) {
    return this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e;
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const vr = new Le();
function Ya(r) {
  for (let e = r.length - 1; e >= 0; --e) if (r[e] >= 65535) return true;
  return false;
}
function Ri(r) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", r);
}
function ko() {
  const r = Ri("canvas");
  return r.style.display = "block", r;
}
const Cs = {};
function ei(r) {
  r in Cs || (Cs[r] = true, console.warn(r));
}
function Ho(r, e, t) {
  return new Promise(function(n, i) {
    function s() {
      switch (r.clientWaitSync(e, r.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case r.WAIT_FAILED:
          i();
          break;
        case r.TIMEOUT_EXPIRED:
          setTimeout(s, t);
          break;
        default:
          n();
      }
    }
    setTimeout(s, t);
  });
}
function zo(r) {
  const e = r.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function Vo(r) {
  const e = r.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Ps = new Le().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Ls = new Le().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Wo() {
  const r = { enabled: true, workingColorSpace: Et, spaces: {}, convert: function(i, s, a) {
    return this.enabled === false || s === a || !s || !a || (this.spaces[s].transfer === Qe && (i.r = ln(i.r), i.g = ln(i.g), i.b = ln(i.b)), this.spaces[s].primaries !== this.spaces[a].primaries && (i.applyMatrix3(this.spaces[s].toXYZ), i.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === Qe && (i.r = ni(i.r), i.g = ni(i.g), i.b = ni(i.b))), i;
  }, fromWorkingColorSpace: function(i, s) {
    return this.convert(i, this.workingColorSpace, s);
  }, toWorkingColorSpace: function(i, s) {
    return this.convert(i, s, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === "" ? dr : this.spaces[i].transfer;
  }, getLuminanceCoefficients: function(i, s = this.workingColorSpace) {
    return i.fromArray(this.spaces[s].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, s, a) {
    return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return r.define({ [Et]: { primaries: e, whitePoint: n, transfer: dr, toXYZ: Ps, fromXYZ: Ls, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: gt }, outputColorSpaceConfig: { drawingBufferColorSpace: gt } }, [gt]: { primaries: e, whitePoint: n, transfer: Qe, toXYZ: Ps, fromXYZ: Ls, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: gt } } }), r;
}
const ze = Wo();
function ln(r) {
  return r < 0.04045 ? r * 0.0773993808 : Math.pow(r * 0.9478672986 + 0.0521327014, 2.4);
}
function ni(r) {
  return r < 31308e-7 ? r * 12.92 : 1.055 * Math.pow(r, 0.41666) - 0.055;
}
let kn;
class Xo {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      kn === void 0 && (kn = Ri("canvas")), kn.width = e.width, kn.height = e.height;
      const n = kn.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = kn;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = Ri("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), s = i.data;
      for (let a = 0; a < s.length; a++) s[a] = ln(s[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(ln(t[n] / 255) * 255) : t[n] = ln(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let qo = 0;
class Ka {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: qo++ }), this.uuid = Wt(), this.data = e, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let s;
      if (Array.isArray(i)) {
        s = [];
        for (let a = 0, o = i.length; a < o; a++) i[a].isDataTexture ? s.push(Mr(i[a].image)) : s.push(Mr(i[a]));
      } else s = Mr(i);
      n.url = s;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function Mr(r) {
  return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? Xo.getDataURL(r) : r.data ? { data: Array.from(r.data), width: r.width, height: r.height, type: r.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Yo = 0;
class pt extends ci {
  constructor(e = pt.DEFAULT_IMAGE, t = pt.DEFAULT_MAPPING, n = 1001, i = 1001, s = 1006, a = 1008, o = 1023, l = 1009, c = pt.DEFAULT_ANISOTROPY, h = "") {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Yo++ }), this.uuid = Wt(), this.name = "", this.source = new Ka(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = s, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new Be(0, 0), this.repeat = new Be(1, 1), this.center = new Be(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new Le(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.name = e.name, this.source = e.source, this.mipmaps = e.mipmaps.slice(0), this.mapping = e.mapping, this.channel = e.channel, this.wrapS = e.wrapS, this.wrapT = e.wrapT, this.magFilter = e.magFilter, this.minFilter = e.minFilter, this.anisotropy = e.anisotropy, this.format = e.format, this.internalFormat = e.internalFormat, this.type = e.type, this.offset.copy(e.offset), this.repeat.copy(e.repeat), this.center.copy(e.center), this.rotation = e.rotation, this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrix.copy(e.matrix), this.generateMipmaps = e.generateMipmaps, this.premultiplyAlpha = e.premultiplyAlpha, this.flipY = e.flipY, this.unpackAlignment = e.unpackAlignment, this.colorSpace = e.colorSpace, this.userData = JSON.parse(JSON.stringify(e.userData)), this.needsUpdate = true, this;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = { metadata: { version: 4.6, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(e).uuid, mapping: this.mapping, channel: this.channel, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, internalFormat: this.internalFormat, type: this.type, colorSpace: this.colorSpace, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, generateMipmaps: this.generateMipmaps, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
    return Object.keys(this.userData).length > 0 && (n.userData = this.userData), t || (e.textures[this.uuid] = n), n;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== 300) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case 1e3:
        e.x = e.x - Math.floor(e.x);
        break;
      case 1001:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case 1002:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case 1e3:
        e.y = e.y - Math.floor(e.y);
        break;
      case 1001:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case 1002:
        Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
        break;
    }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === true && (this.version++, this.source.needsUpdate = true);
  }
  set needsPMREMUpdate(e) {
    e === true && this.pmremVersion++;
  }
}
pt.DEFAULT_IMAGE = null;
pt.DEFAULT_MAPPING = 300;
pt.DEFAULT_ANISOTROPY = 1;
class Ye {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    Ye.prototype.isVector4 = true, this.x = e, this.y = t, this.z = n, this.w = i;
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return this.x = e, this.y = t, this.z = n, this.w = i, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this.w = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setW(e) {
    return this.w = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this.w = e.w !== void 0 ? e.w : 1, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this.w += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this.w = e.w + t.w, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this.w += e.w * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this.w -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this.w = e.w - t.w, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this.w *= e.w, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s, this;
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this.w /= e.w, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return t < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t), this;
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, s;
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], p = l[5], g = l[9], _ = l[2], m = l[6], f = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + p + f - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const E = (c + 1) / 2, S = (p + 1) / 2, I = (f + 1) / 2, b = (h + d) / 4, w = (u + _) / 4, N = (g + m) / 4;
      return E > S && E > I ? E < 0.01 ? (n = 0, i = 0.707106781, s = 0.707106781) : (n = Math.sqrt(E), i = b / n, s = w / n) : S > I ? S < 0.01 ? (n = 0.707106781, i = 0, s = 0.707106781) : (i = Math.sqrt(S), n = b / i, s = N / i) : I < 0.01 ? (n = 0.707106781, i = 0.707106781, s = 0) : (s = Math.sqrt(I), n = w / s, i = N / s), this.set(n, i, s, t), this;
    }
    let A = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(A) < 1e-3 && (A = 1), this.x = (m - g) / A, this.y = (u - _) / A, this.z = (d - h) / A, this.w = Math.acos((c + p + f - 1) / 2), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this.w = t[15], this;
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this.w = Math.min(this.w, e.w), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this.w = Math.max(this.w, e.w), this;
  }
  clamp(e, t) {
    return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this.z = Fe(this.z, e.z, t.z), this.w = Fe(this.w, e.w, t.w), this;
  }
  clampScalar(e, t) {
    return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this.z = Fe(this.z, e, t), this.w = Fe(this.w, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this.w += (e.w - this.w) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this.w = e.w + (t.w - e.w) * n, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this.w = e[t + 3], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e[t + 3] = this.w, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this.w = e.getW(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Ko extends ci {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ye(0, 0, e, t), this.scissorTest = false, this.viewport = new Ye(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: 1006, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const s = new pt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    s.flipY = false, s.generateMipmaps = n.generateMipmaps, s.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = s.clone(), this.textures[o].isRenderTargetTexture = true;
    this.depthBuffer = n.depthBuffer, this.stencilBuffer = n.stencilBuffer, this.resolveDepthBuffer = n.resolveDepthBuffer, this.resolveStencilBuffer = n.resolveStencilBuffer, this.depthTexture = n.depthTexture, this.samples = n.samples;
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      this.width = e, this.height = t, this.depth = n;
      for (let i = 0, s = this.textures.length; i < s; i++) this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
      this.dispose();
    }
    this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.width = e.width, this.height = e.height, this.depth = e.depth, this.scissor.copy(e.scissor), this.scissorTest = e.scissorTest, this.viewport.copy(e.viewport), this.textures.length = 0;
    for (let n = 0, i = e.textures.length; n < i; n++) this.textures[n] = e.textures[n].clone(), this.textures[n].isRenderTargetTexture = true;
    const t = Object.assign({}, e.texture.image);
    return this.texture.source = new Ka(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class On extends Ko {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class ja extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class jo extends pt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = 1003, this.minFilter = 1003, this.wrapR = 1001, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class jt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, s, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = s[a + 0], p = s[a + 1], g = s[a + 2], _ = s[a + 3];
    if (o === 0) {
      e[t + 0] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
      return;
    }
    if (o === 1) {
      e[t + 0] = d, e[t + 1] = p, e[t + 2] = g, e[t + 3] = _;
      return;
    }
    if (u !== _ || l !== d || c !== p || h !== g) {
      let m = 1 - o;
      const f = l * d + c * p + h * g + u * _, A = f >= 0 ? 1 : -1, E = 1 - f * f;
      if (E > Number.EPSILON) {
        const I = Math.sqrt(E), b = Math.atan2(I, f * A);
        m = Math.sin(m * b) / I, o = Math.sin(o * b) / I;
      }
      const S = o * A;
      if (l = l * m + d * S, c = c * m + p * S, h = h * m + g * S, u = u * m + _ * S, m === 1 - o) {
        const I = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= I, c *= I, h *= I, u *= I;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, s, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = s[a], d = s[a + 1], p = s[a + 2], g = s[a + 3];
    return e[t] = o * g + h * u + l * p - c * d, e[t + 1] = l * g + h * d + c * u - o * p, e[t + 2] = c * g + h * p + o * d - l * u, e[t + 3] = h * g - o * u - l * d - c * p, e;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    this._w = e, this._onChangeCallback();
  }
  set(e, t, n, i) {
    return this._x = e, this._y = t, this._z = n, this._w = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return this._x = e.x, this._y = e.y, this._z = e.z, this._w = e.w, this._onChangeCallback(), this;
  }
  setFromEuler(e, t = true) {
    const n = e._x, i = e._y, s = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(s / 2), d = l(n / 2), p = l(i / 2), g = l(s / 2);
    switch (a) {
      case "XYZ":
        this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "YXZ":
        this._x = d * h * u + c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
        break;
      case "ZXY":
        this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "ZYX":
        this._x = d * h * u - c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u + d * p * g;
        break;
      case "YZX":
        this._x = d * h * u + c * p * g, this._y = c * p * u + d * h * g, this._z = c * h * g - d * p * u, this._w = c * h * u - d * p * g;
        break;
      case "XZY":
        this._x = d * h * u - c * p * g, this._y = c * p * u - d * h * g, this._z = c * h * g + d * p * u, this._w = c * h * u + d * p * g;
        break;
      default:
        console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a);
    }
    return t === true && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2, i = Math.sin(n);
    return this._x = e.x * i, this._y = e.y * i, this._z = e.z * i, this._w = Math.cos(n), this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e) {
    const t = e.elements, n = t[0], i = t[4], s = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (s - c) * p, this._z = (a - i) * p;
    } else if (n > o && n > u) {
      const p = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (s + c) / p;
    } else if (o > u) {
      const p = 2 * Math.sqrt(1 + o - n - u);
      this._w = (s - c) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / p, this._x = (s + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return n < Number.EPSILON ? (n = 0, Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y, this._y = e.x, this._z = 0, this._w = n) : (this._x = 0, this._y = -e.z, this._z = e.y, this._w = n)) : (this._x = e.y * t.z - e.z * t.y, this._y = e.z * t.x - e.x * t.z, this._z = e.x * t.y - e.y * t.x, this._w = n), this.normalize();
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Fe(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return e === 0 ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (e = 1 / e, this._x = this._x * e, this._y = this._y * e, this._z = this._z * e, this._w = this._w * e), this._onChangeCallback(), this;
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x, i = e._y, s = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + i * c - s * l, this._y = i * h + a * l + s * o - n * c, this._z = s * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - s * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, s = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + s * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = s, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * s + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = s * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), s = Math.sqrt(n);
    return this.set(i * Math.sin(e), i * Math.cos(e), s * Math.sin(t), s * Math.cos(t));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, t = 0) {
    return this._x = e[t], this._y = e[t + 1], this._z = e[t + 2], this._w = e[t + 3], this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._w, e;
  }
  fromBufferAttribute(e, t) {
    return this._x = e.getX(t), this._y = e.getY(t), this._z = e.getZ(t), this._w = e.getW(t), this._onChangeCallback(), this;
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    L.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
  }
  set(e, t, n) {
    return n === void 0 && (n = this.z), this.x = e, this.y = t, this.z = n, this;
  }
  setScalar(e) {
    return this.x = e, this.y = e, this.z = e, this;
  }
  setX(e) {
    return this.x = e, this;
  }
  setY(e) {
    return this.y = e, this;
  }
  setZ(e) {
    return this.z = e, this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return this.x = e.x, this.y = e.y, this.z = e.z, this;
  }
  add(e) {
    return this.x += e.x, this.y += e.y, this.z += e.z, this;
  }
  addScalar(e) {
    return this.x += e, this.y += e, this.z += e, this;
  }
  addVectors(e, t) {
    return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
  }
  addScaledVector(e, t) {
    return this.x += e.x * t, this.y += e.y * t, this.z += e.z * t, this;
  }
  sub(e) {
    return this.x -= e.x, this.y -= e.y, this.z -= e.z, this;
  }
  subScalar(e) {
    return this.x -= e, this.y -= e, this.z -= e, this;
  }
  subVectors(e, t) {
    return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
  }
  multiply(e) {
    return this.x *= e.x, this.y *= e.y, this.z *= e.z, this;
  }
  multiplyScalar(e) {
    return this.x *= e, this.y *= e, this.z *= e, this;
  }
  multiplyVectors(e, t) {
    return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
  }
  applyEuler(e) {
    return this.applyQuaternion(Ds.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ds.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[3] * n + s[6] * i, this.y = s[1] * t + s[4] * n + s[7] * i, this.z = s[2] * t + s[5] * n + s[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements, a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
    return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a, this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a, this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, s = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), h = 2 * (o * t - s * i), u = 2 * (s * n - a * t);
    return this.x = t + l * c + a * u - o * h, this.y = n + l * h + o * c - s * u, this.z = i + l * u + s * h - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, s = e.elements;
    return this.x = s[0] * t + s[4] * n + s[8] * i, this.y = s[1] * t + s[5] * n + s[9] * i, this.z = s[2] * t + s[6] * n + s[10] * i, this.normalize();
  }
  divide(e) {
    return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return this.x = Math.min(this.x, e.x), this.y = Math.min(this.y, e.y), this.z = Math.min(this.z, e.z), this;
  }
  max(e) {
    return this.x = Math.max(this.x, e.x), this.y = Math.max(this.y, e.y), this.z = Math.max(this.z, e.z), this;
  }
  clamp(e, t) {
    return this.x = Fe(this.x, e.x, t.x), this.y = Fe(this.y, e.y, t.y), this.z = Fe(this.z, e.z, t.z), this;
  }
  clampScalar(e, t) {
    return this.x = Fe(this.x, e, t), this.y = Fe(this.y, e, t), this.z = Fe(this.z, e, t), this;
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(Fe(n, e, t));
  }
  floor() {
    return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
  }
  ceil() {
    return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
  }
  round() {
    return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
  }
  roundToZero() {
    return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
  }
  negate() {
    return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this.z += (e.z - this.z) * t, this;
  }
  lerpVectors(e, t, n) {
    return this.x = e.x + (t.x - e.x) * n, this.y = e.y + (t.y - e.y) * n, this.z = e.z + (t.z - e.z) * n, this;
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x, i = e.y, s = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = i * l - s * o, this.y = s * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return Sr.copy(this).projectOnVector(e), this.sub(Sr);
  }
  reflect(e) {
    return this.sub(Sr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(Fe(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x, n = this.y - e.y, i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return this.x = i * Math.sin(n), this.y = Math.cos(t) * e, this.z = i * Math.cos(n), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return this.x = e * Math.sin(t), this.y = n, this.z = e * Math.cos(t), this;
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return this.x = t[12], this.y = t[13], this.z = t[14], this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(), n = this.setFromMatrixColumn(e, 1).length(), i = this.setFromMatrixColumn(e, 2).length();
    return this.x = t, this.y = n, this.z = i, this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return this.x = e._x, this.y = e._y, this.z = e._z, this;
  }
  setFromColor(e) {
    return this.x = e.r, this.y = e.g, this.z = e.b, this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return this.x = e[t], this.y = e[t + 1], this.z = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.x, e[t + 1] = this.y, e[t + 2] = this.z, e;
  }
  fromBufferAttribute(e, t) {
    return this.x = e.getX(t), this.y = e.getY(t), this.z = e.getZ(t), this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2, t = Math.random() * 2 - 1, n = Math.sqrt(1 - t * t);
    return this.x = n * Math.cos(e), this.y = t, this.z = n * Math.sin(e), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Sr = new L(), Ds = new jt();
class cn {
  constructor(e = new L(1 / 0, 1 / 0, 1 / 0), t = new L(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(Gt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(Gt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = Gt.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = false) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = false) {
    e.updateWorldMatrix(false, false);
    const n = e.geometry;
    if (n !== void 0) {
      const s = n.getAttribute("position");
      if (t === true && s !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = s.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, Gt) : Gt.fromBufferAttribute(s, a), Gt.applyMatrix4(e.matrixWorld), this.expandByPoint(Gt);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), Ni.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), Ni.copy(n.boundingBox)), Ni.applyMatrix4(e.matrixWorld), this.union(Ni);
    }
    const i = e.children;
    for (let s = 0, a = i.length; s < a; s++) this.expandByObject(i[s], t);
    return this;
  }
  containsPoint(e) {
    return e.x >= this.min.x && e.x <= this.max.x && e.y >= this.min.y && e.y <= this.max.y && e.z >= this.min.z && e.z <= this.max.z;
  }
  containsBox(e) {
    return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z;
  }
  getParameter(e, t) {
    return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z));
  }
  intersectsBox(e) {
    return e.max.x >= this.min.x && e.min.x <= this.max.x && e.max.y >= this.min.y && e.min.y <= this.max.y && e.max.z >= this.min.z && e.min.z <= this.max.z;
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, Gt), Gt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(pi), Fi.subVectors(this.max, pi), Hn.subVectors(e.a, pi), zn.subVectors(e.b, pi), Vn.subVectors(e.c, pi), hn.subVectors(zn, Hn), un.subVectors(Vn, zn), Sn.subVectors(Hn, Vn);
    let t = [0, -hn.z, hn.y, 0, -un.z, un.y, 0, -Sn.z, Sn.y, hn.z, 0, -hn.x, un.z, 0, -un.x, Sn.z, 0, -Sn.x, -hn.y, hn.x, 0, -un.y, un.x, 0, -Sn.y, Sn.x, 0];
    return !yr(t, Hn, zn, Vn, Fi) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !yr(t, Hn, zn, Vn, Fi)) ? false : (Oi.crossVectors(hn, un), t = [Oi.x, Oi.y, Oi.z], yr(t, Hn, zn, Vn, Fi));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, Gt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(Gt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (en[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), en[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), en[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), en[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), en[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), en[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), en[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), en[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(en), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const en = [new L(), new L(), new L(), new L(), new L(), new L(), new L(), new L()], Gt = new L(), Ni = new cn(), Hn = new L(), zn = new L(), Vn = new L(), hn = new L(), un = new L(), Sn = new L(), pi = new L(), Fi = new L(), Oi = new L(), yn = new L();
function yr(r, e, t, n, i) {
  for (let s = 0, a = r.length - 3; s <= a; s += 3) {
    yn.fromArray(r, s);
    const o = i.x * Math.abs(yn.x) + i.y * Math.abs(yn.y) + i.z * Math.abs(yn.z), l = e.dot(yn), c = t.dot(yn), h = n.dot(yn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const Zo = new cn(), mi = new L(), Tr = new L();
class Zt {
  constructor(e = new L(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Zo.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let s = 0, a = e.length; s < a; s++) i = Math.max(i, n.distanceToSquared(e[s]));
    return this.radius = Math.sqrt(i), this;
  }
  copy(e) {
    return this.center.copy(e.center), this.radius = e.radius, this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), this.radius = -1, this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return t.copy(e), n > this.radius * this.radius && (t.sub(this.center).normalize(), t.multiplyScalar(this.radius).add(this.center)), t;
  }
  getBoundingBox(e) {
    return this.isEmpty() ? (e.makeEmpty(), e) : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), this.radius = this.radius * e.getMaxScaleOnAxis(), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), this.radius = 0, this;
    mi.subVectors(e, this.center);
    const t = mi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(mi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (Tr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(mi.copy(e.center).add(Tr)), this.expandByPoint(mi.copy(e.center).sub(Tr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const tn = new L(), Er = new L(), Bi = new L(), dn = new L(), Ar = new L(), Gi = new L(), br = new L();
class Ci {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    this.origin = e, this.direction = t;
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, tn)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = tn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (tn.copy(this.origin).addScaledVector(this.direction, t), tn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    Er.copy(e).add(t).multiplyScalar(0.5), Bi.copy(t).sub(e).normalize(), dn.copy(this.origin).sub(Er);
    const s = e.distanceTo(t) * 0.5, a = -this.direction.dot(Bi), o = dn.dot(this.direction), l = -dn.dot(Bi), c = dn.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, p, g;
    if (h > 0) if (u = a * l - o, d = a * o - l, g = s * h, u >= 0) if (d >= -g) if (d <= g) {
      const _ = 1 / h;
      u *= _, d *= _, p = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c;
    } else d = s, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    else d = -s, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    else d <= -g ? (u = Math.max(0, -(-a * s + o)), d = u > 0 ? -s : Math.min(Math.max(-s, -l), s), p = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-s, -l), s), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * s + o)), d = u > 0 ? s : Math.min(Math.max(-s, -l), s), p = -u * u + d * (d + 2 * l) + c);
    else d = a > 0 ? -s : s, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(Er).addScaledVector(Bi, d), p;
  }
  intersectSphere(e, t) {
    tn.subVectors(e.center, this.origin);
    const n = tn.dot(this.direction), i = tn.dot(tn) - n * n, s = e.radius * e.radius;
    if (i > s) return null;
    const a = Math.sqrt(s - i), o = n - a, l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, s, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (s = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || s > i || ((s > n || isNaN(n)) && (n = s), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, tn) !== null;
  }
  intersectTriangle(e, t, n, i, s) {
    Ar.subVectors(t, e), Gi.subVectors(n, e), br.crossVectors(Ar, Gi);
    let a = this.direction.dot(br), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    dn.subVectors(this.origin, e);
    const l = o * this.direction.dot(Gi.crossVectors(dn, Gi));
    if (l < 0) return null;
    const c = o * this.direction.dot(Ar.cross(dn));
    if (c < 0 || l + c > a) return null;
    const h = -o * dn.dot(br);
    return h < 0 ? null : this.at(h / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Ce {
  constructor(e, t, n, i, s, a, o, l, c, h, u, d, p, g, _, m) {
    Ce.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, s, a, o, l, c, h, u, d, p, g, _, m);
  }
  set(e, t, n, i, s, a, o, l, c, h, u, d, p, g, _, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = s, f[5] = a, f[9] = o, f[13] = l, f[2] = c, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = g, f[11] = _, f[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Ce().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements, n = e.elements;
    return t[0] = n[0], t[1] = n[1], t[2] = n[2], t[3] = n[3], t[4] = n[4], t[5] = n[5], t[6] = n[6], t[7] = n[7], t[8] = n[8], t[9] = n[9], t[10] = n[10], t[11] = n[11], t[12] = n[12], t[13] = n[13], t[14] = n[14], t[15] = n[15], this;
  }
  copyPosition(e) {
    const t = this.elements, n = e.elements;
    return t[12] = n[12], t[13] = n[13], t[14] = n[14], this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1), this;
  }
  extractBasis(e, t, n) {
    return e.setFromMatrixColumn(this, 0), t.setFromMatrixColumn(this, 1), n.setFromMatrixColumn(this, 2), this;
  }
  makeBasis(e, t, n) {
    return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const t = this.elements, n = e.elements, i = 1 / Wn.setFromMatrixColumn(e, 0).length(), s = 1 / Wn.setFromMatrixColumn(e, 1).length(), a = 1 / Wn.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * s, t[5] = n[5] * s, t[6] = n[6] * s, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(s), u = Math.sin(s);
    if (e.order === "XYZ") {
      const d = a * h, p = a * u, g = o * h, _ = o * u;
      t[0] = l * h, t[4] = -l * u, t[8] = c, t[1] = p + g * c, t[5] = d - _ * c, t[9] = -o * l, t[2] = _ - d * c, t[6] = g + p * c, t[10] = a * l;
    } else if (e.order === "YXZ") {
      const d = l * h, p = l * u, g = c * h, _ = c * u;
      t[0] = d + _ * o, t[4] = g * o - p, t[8] = a * c, t[1] = a * u, t[5] = a * h, t[9] = -o, t[2] = p * o - g, t[6] = _ + d * o, t[10] = a * l;
    } else if (e.order === "ZXY") {
      const d = l * h, p = l * u, g = c * h, _ = c * u;
      t[0] = d - _ * o, t[4] = -a * u, t[8] = g + p * o, t[1] = p + g * o, t[5] = a * h, t[9] = _ - d * o, t[2] = -a * c, t[6] = o, t[10] = a * l;
    } else if (e.order === "ZYX") {
      const d = a * h, p = a * u, g = o * h, _ = o * u;
      t[0] = l * h, t[4] = g * c - p, t[8] = d * c + _, t[1] = l * u, t[5] = _ * c + d, t[9] = p * c - g, t[2] = -c, t[6] = o * l, t[10] = a * l;
    } else if (e.order === "YZX") {
      const d = a * l, p = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = _ - d * u, t[8] = g * u + p, t[1] = u, t[5] = a * h, t[9] = -o * h, t[2] = -c * h, t[6] = p * u + g, t[10] = d - _ * u;
    } else if (e.order === "XZY") {
      const d = a * l, p = a * c, g = o * l, _ = o * c;
      t[0] = l * h, t[4] = -u, t[8] = c * h, t[1] = d * u + _, t[5] = a * h, t[9] = p * u - g, t[2] = g * u - p, t[6] = o * h, t[10] = _ * u + d;
    }
    return t[3] = 0, t[7] = 0, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromQuaternion(e) {
    return this.compose($o, e, Jo);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return wt.subVectors(e, t), wt.lengthSq() === 0 && (wt.z = 1), wt.normalize(), fn.crossVectors(n, wt), fn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? wt.x += 1e-4 : wt.z += 1e-4, wt.normalize(), fn.crossVectors(n, wt)), fn.normalize(), ki.crossVectors(wt, fn), i[0] = fn.x, i[4] = ki.x, i[8] = wt.x, i[1] = fn.y, i[5] = ki.y, i[9] = wt.y, i[2] = fn.z, i[6] = ki.z, i[10] = wt.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, s = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], p = n[13], g = n[2], _ = n[6], m = n[10], f = n[14], A = n[3], E = n[7], S = n[11], I = n[15], b = i[0], w = i[4], N = i[8], y = i[12], M = i[1], C = i[5], q = i[9], G = i[13], W = i[2], Z = i[6], z = i[10], Q = i[14], H = i[3], re = i[7], he = i[11], _e = i[15];
    return s[0] = a * b + o * M + l * W + c * H, s[4] = a * w + o * C + l * Z + c * re, s[8] = a * N + o * q + l * z + c * he, s[12] = a * y + o * G + l * Q + c * _e, s[1] = h * b + u * M + d * W + p * H, s[5] = h * w + u * C + d * Z + p * re, s[9] = h * N + u * q + d * z + p * he, s[13] = h * y + u * G + d * Q + p * _e, s[2] = g * b + _ * M + m * W + f * H, s[6] = g * w + _ * C + m * Z + f * re, s[10] = g * N + _ * q + m * z + f * he, s[14] = g * y + _ * G + m * Q + f * _e, s[3] = A * b + E * M + S * W + I * H, s[7] = A * w + E * C + S * Z + I * re, s[11] = A * N + E * q + S * z + I * he, s[15] = A * y + E * G + S * Q + I * _e, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], s = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], p = e[14], g = e[3], _ = e[7], m = e[11], f = e[15];
    return g * (+s * l * u - i * c * u - s * o * d + n * c * d + i * o * p - n * l * p) + _ * (+t * l * p - t * c * d + s * a * d - i * a * p + i * c * h - s * l * h) + m * (+t * c * u - t * o * p - s * a * u + n * a * p + s * o * h - n * c * h) + f * (-i * o * h - t * l * u + t * o * d + i * a * u - n * a * d + n * l * h);
  }
  transpose() {
    const e = this.elements;
    let t;
    return t = e[1], e[1] = e[4], e[4] = t, t = e[2], e[2] = e[8], e[8] = t, t = e[6], e[6] = e[9], e[9] = t, t = e[3], e[3] = e[12], e[12] = t, t = e[7], e[7] = e[13], e[13] = t, t = e[11], e[11] = e[14], e[14] = t, this;
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return e.isVector3 ? (i[12] = e.x, i[13] = e.y, i[14] = e.z) : (i[12] = e, i[13] = t, i[14] = n), this;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], s = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], p = e[11], g = e[12], _ = e[13], m = e[14], f = e[15], A = u * m * c - _ * d * c + _ * l * p - o * m * p - u * l * f + o * d * f, E = g * d * c - h * m * c - g * l * p + a * m * p + h * l * f - a * d * f, S = h * _ * c - g * u * c + g * o * p - a * _ * p - h * o * f + a * u * f, I = g * u * l - h * _ * l - g * o * d + a * _ * d + h * o * m - a * u * m, b = t * A + n * E + i * S + s * I;
    if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / b;
    return e[0] = A * w, e[1] = (_ * d * s - u * m * s - _ * i * p + n * m * p + u * i * f - n * d * f) * w, e[2] = (o * m * s - _ * l * s + _ * i * c - n * m * c - o * i * f + n * l * f) * w, e[3] = (u * l * s - o * d * s - u * i * c + n * d * c + o * i * p - n * l * p) * w, e[4] = E * w, e[5] = (h * m * s - g * d * s + g * i * p - t * m * p - h * i * f + t * d * f) * w, e[6] = (g * l * s - a * m * s - g * i * c + t * m * c + a * i * f - t * l * f) * w, e[7] = (a * d * s - h * l * s + h * i * c - t * d * c - a * i * p + t * l * p) * w, e[8] = S * w, e[9] = (g * u * s - h * _ * s - g * n * p + t * _ * p + h * n * f - t * u * f) * w, e[10] = (a * _ * s - g * o * s + g * n * c - t * _ * c - a * n * f + t * o * f) * w, e[11] = (h * o * s - a * u * s - h * n * c + t * u * c + a * n * p - t * o * p) * w, e[12] = I * w, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * m + t * u * m) * w, e[14] = (g * o * i - a * _ * i - g * n * l + t * _ * l + a * n * m - t * o * m) * w, e[15] = (a * u * i - h * o * i + h * n * l - t * u * l - a * n * d + t * o * d) * w, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, s = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= s, t[1] *= n, t[5] *= i, t[9] *= s, t[2] *= n, t[6] *= i, t[10] *= s, t[3] *= n, t[7] *= i, t[11] *= s, this;
  }
  getMaxScaleOnAxis() {
    const e = this.elements, t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2], n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6], i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e), n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t), i = Math.sin(t), s = 1 - n, a = e.x, o = e.y, l = e.z, c = s * a, h = s * o;
    return this.set(c * a + n, c * o - i * l, c * l + i * o, 0, c * o + i * l, h * o + n, h * l - i * a, 0, c * l - i * o, h * l + i * a, s * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, s, a) {
    return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements, s = t._x, a = t._y, o = t._z, l = t._w, c = s + s, h = a + a, u = o + o, d = s * c, p = s * h, g = s * u, _ = a * h, m = a * u, f = o * u, A = l * c, E = l * h, S = l * u, I = n.x, b = n.y, w = n.z;
    return i[0] = (1 - (_ + f)) * I, i[1] = (p + S) * I, i[2] = (g - E) * I, i[3] = 0, i[4] = (p - S) * b, i[5] = (1 - (d + f)) * b, i[6] = (m + A) * b, i[7] = 0, i[8] = (g + E) * w, i[9] = (m - A) * w, i[10] = (1 - (d + _)) * w, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let s = Wn.set(i[0], i[1], i[2]).length();
    const a = Wn.set(i[4], i[5], i[6]).length(), o = Wn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (s = -s), e.x = i[12], e.y = i[13], e.z = i[14], kt.copy(this);
    const c = 1 / s, h = 1 / a, u = 1 / o;
    return kt.elements[0] *= c, kt.elements[1] *= c, kt.elements[2] *= c, kt.elements[4] *= h, kt.elements[5] *= h, kt.elements[6] *= h, kt.elements[8] *= u, kt.elements[9] *= u, kt.elements[10] *= u, t.setFromRotationMatrix(kt), n.x = s, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, s, a, o = 2e3) {
    const l = this.elements, c = 2 * s / (t - e), h = 2 * s / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let p, g;
    if (o === 2e3) p = -(a + s) / (a - s), g = -2 * a * s / (a - s);
    else if (o === 2001) p = -a / (a - s), g = -a * s / (a - s);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, s, a, o = 2e3) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - s), d = (t + e) * c, p = (n + i) * h;
    let g, _;
    if (o === 2e3) g = (a + s) * u, _ = -2 * u;
    else if (o === 2001) g = s * u, _ = -1 * u;
    else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
    return l[0] = 2 * c, l[4] = 0, l[8] = 0, l[12] = -d, l[1] = 0, l[5] = 2 * h, l[9] = 0, l[13] = -p, l[2] = 0, l[6] = 0, l[10] = _, l[14] = -g, l[3] = 0, l[7] = 0, l[11] = 0, l[15] = 1, this;
  }
  equals(e) {
    const t = this.elements, n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return false;
    return true;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return e[t] = n[0], e[t + 1] = n[1], e[t + 2] = n[2], e[t + 3] = n[3], e[t + 4] = n[4], e[t + 5] = n[5], e[t + 6] = n[6], e[t + 7] = n[7], e[t + 8] = n[8], e[t + 9] = n[9], e[t + 10] = n[10], e[t + 11] = n[11], e[t + 12] = n[12], e[t + 13] = n[13], e[t + 14] = n[14], e[t + 15] = n[15], e;
  }
}
const Wn = new L(), kt = new Ce(), $o = new L(0, 0, 0), Jo = new L(1, 1, 1), fn = new L(), ki = new L(), wt = new L(), Is = new Ce(), Us = new jt();
class Yt {
  constructor(e = 0, t = 0, n = 0, i = Yt.DEFAULT_ORDER) {
    this.isEuler = true, this._x = e, this._y = t, this._z = n, this._order = i;
  }
  get x() {
    return this._x;
  }
  set x(e) {
    this._x = e, this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    this._y = e, this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    this._z = e, this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    this._order = e, this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return this._x = e, this._y = t, this._z = n, this._order = i, this._onChangeCallback(), this;
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return this._x = e._x, this._y = e._y, this._z = e._z, this._order = e._order, this._onChangeCallback(), this;
  }
  setFromRotationMatrix(e, t = this._order, n = true) {
    const i = e.elements, s = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Fe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Fe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, s), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Fe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, s));
        break;
      case "ZYX":
        this._y = Math.asin(-Fe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, s)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Fe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, s)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Fe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Is.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Is, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Us.setFromEuler(this), this.setFromQuaternion(Us, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return this._x = e[0], this._y = e[1], this._z = e[2], e[3] !== void 0 && (this._order = e[3]), this._onChangeCallback(), this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this._x, e[t + 1] = this._y, e[t + 2] = this._z, e[t + 3] = this._order, e;
  }
  _onChange(e) {
    return this._onChangeCallback = e, this;
  }
  _onChangeCallback() {
  }
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
Yt.DEFAULT_ORDER = "XYZ";
class os {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = (1 << e | 0) >>> 0;
  }
  enable(e) {
    this.mask |= 1 << e | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= 1 << e | 0;
  }
  disable(e) {
    this.mask &= ~(1 << e | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & (1 << e | 0)) !== 0;
  }
}
let Qo = 0;
const Ns = new L(), Xn = new jt(), nn = new Ce(), Hi = new L(), gi = new L(), el = new L(), tl = new jt(), Fs = new L(1, 0, 0), Os = new L(0, 1, 0), Bs = new L(0, 0, 1), Gs = { type: "added" }, nl = { type: "removed" }, qn = { type: "childadded", child: null }, Rr = { type: "childremoved", child: null };
class tt extends ci {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: Qo++ }), this.uuid = Wt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = tt.DEFAULT_UP.clone();
    const e = new L(), t = new Yt(), n = new jt(), i = new L(1, 1, 1);
    function s() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(s), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new Ce() }, normalMatrix: { value: new Le() } }), this.matrix = new Ce(), this.matrixWorld = new Ce(), this.matrixAutoUpdate = tt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new os(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
  }
  onBeforeShadow() {
  }
  onAfterShadow() {
  }
  onBeforeRender() {
  }
  onAfterRender() {
  }
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(e), this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, true);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return Xn.setFromAxisAngle(e, t), this.quaternion.multiply(Xn), this;
  }
  rotateOnWorldAxis(e, t) {
    return Xn.setFromAxisAngle(e, t), this.quaternion.premultiply(Xn), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Fs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Os, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Bs, e);
  }
  translateOnAxis(e, t) {
    return Ns.copy(e).applyQuaternion(this.quaternion), this.position.add(Ns.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(Fs, e);
  }
  translateY(e) {
    return this.translateOnAxis(Os, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Bs, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(nn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Hi.copy(e) : Hi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), gi.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? nn.lookAt(gi, Hi, this.up) : nn.lookAt(Hi, gi, this.up), this.quaternion.setFromRotationMatrix(nn), i && (nn.extractRotation(i.matrixWorld), Xn.setFromRotationMatrix(nn), this.quaternion.premultiply(Xn.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Gs), qn.child = e, this.dispatchEvent(qn), qn.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(nl), Rr.child = e, this.dispatchEvent(Rr), Rr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), nn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), nn.multiply(e.parent.matrixWorld)), e.applyMatrix4(nn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(Gs), qn.child = e, this.dispatchEvent(qn), qn.child = null, this;
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let s = 0, a = i.length; s < a; s++) i[s].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(gi, e, el), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(gi, tl, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(true, false);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {
  }
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === false) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale), this.matrixWorldNeedsUpdate = true;
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || e) && (this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = false, e = true);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (e === true && n !== null && n.updateWorldMatrix(true, false), this.matrixAutoUpdate && this.updateMatrix(), this.matrixWorldAutoUpdate === true && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), t === true) {
      const i = this.children;
      for (let s = 0, a = i.length; s < a; s++) i[s].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({ boxInitialized: o.boxInitialized, boxMin: o.box.min.toArray(), boxMax: o.box.max.toArray(), sphereInitialized: o.sphereInitialized, sphereRadius: o.sphere.radius, sphereCenter: o.sphere.center.toArray() })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          s(e.shapes, u);
        }
        else s(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (s(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(s(e.materials, this.material[l]));
      i.material = o;
    } else i.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(s(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries), l = a(e.materials), c = a(e.textures), h = a(e.images), u = a(e.shapes), d = a(e.skeletons), p = a(e.animations), g = a(e.nodes);
      o.length > 0 && (n.geometries = o), l.length > 0 && (n.materials = l), c.length > 0 && (n.textures = c), h.length > 0 && (n.images = h), u.length > 0 && (n.shapes = u), d.length > 0 && (n.skeletons = d), p.length > 0 && (n.animations = p), g.length > 0 && (n.nodes = g);
    }
    return n.object = i, n;
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        delete h.metadata, l.push(h);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = true) {
    if (this.name = e.name, this.up.copy(e.up), this.position.copy(e.position), this.rotation.order = e.rotation.order, this.quaternion.copy(e.quaternion), this.scale.copy(e.scale), this.matrix.copy(e.matrix), this.matrixWorld.copy(e.matrixWorld), this.matrixAutoUpdate = e.matrixAutoUpdate, this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate, this.layers.mask = e.layers.mask, this.visible = e.visible, this.castShadow = e.castShadow, this.receiveShadow = e.receiveShadow, this.frustumCulled = e.frustumCulled, this.renderOrder = e.renderOrder, this.animations = e.animations.slice(), this.userData = JSON.parse(JSON.stringify(e.userData)), t === true) for (let n = 0; n < e.children.length; n++) {
      const i = e.children[n];
      this.add(i.clone());
    }
    return this;
  }
}
tt.DEFAULT_UP = new L(0, 1, 0);
tt.DEFAULT_MATRIX_AUTO_UPDATE = true;
tt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Ht = new L(), rn = new L(), wr = new L(), sn = new L(), Yn = new L(), Kn = new L(), ks = new L(), Cr = new L(), Pr = new L(), Lr = new L(), Dr = new Ye(), Ir = new Ye(), Ur = new Ye();
class Vt {
  constructor(e = new L(), t = new L(), n = new L()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Ht.subVectors(e, t), i.cross(Ht);
    const s = i.lengthSq();
    return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, s) {
    Ht.subVectors(i, t), rn.subVectors(n, t), wr.subVectors(e, t);
    const a = Ht.dot(Ht), o = Ht.dot(rn), l = Ht.dot(wr), c = rn.dot(rn), h = rn.dot(wr), u = a * c - o * o;
    if (u === 0) return s.set(0, 0, 0), null;
    const d = 1 / u, p = (c * l - o * h) * d, g = (a * h - o * l) * d;
    return s.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, sn) === null ? false : sn.x >= 0 && sn.y >= 0 && sn.x + sn.y <= 1;
  }
  static getInterpolation(e, t, n, i, s, a, o, l) {
    return this.getBarycoord(e, t, n, i, sn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(s, sn.x), l.addScaledVector(a, sn.y), l.addScaledVector(o, sn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, s, a) {
    return Dr.setScalar(0), Ir.setScalar(0), Ur.setScalar(0), Dr.fromBufferAttribute(e, t), Ir.fromBufferAttribute(e, n), Ur.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(Dr, s.x), a.addScaledVector(Ir, s.y), a.addScaledVector(Ur, s.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return Ht.subVectors(n, t), rn.subVectors(e, t), Ht.cross(rn).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return this.a.fromBufferAttribute(e, t), this.b.fromBufferAttribute(e, n), this.c.fromBufferAttribute(e, i), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return Ht.subVectors(this.c, this.b), rn.subVectors(this.a, this.b), Ht.cross(rn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Vt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Vt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, s) {
    return Vt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s);
  }
  containsPoint(e) {
    return Vt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Vt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, s = this.c;
    let a, o;
    Yn.subVectors(i, n), Kn.subVectors(s, n), Cr.subVectors(e, n);
    const l = Yn.dot(Cr), c = Kn.dot(Cr);
    if (l <= 0 && c <= 0) return t.copy(n);
    Pr.subVectors(e, i);
    const h = Yn.dot(Pr), u = Kn.dot(Pr);
    if (h >= 0 && u <= h) return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return a = l / (l - h), t.copy(n).addScaledVector(Yn, a);
    Lr.subVectors(e, s);
    const p = Yn.dot(Lr), g = Kn.dot(Lr);
    if (g >= 0 && p <= g) return t.copy(s);
    const _ = p * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0) return o = c / (c - g), t.copy(n).addScaledVector(Kn, o);
    const m = h * g - p * u;
    if (m <= 0 && u - h >= 0 && p - g >= 0) return ks.subVectors(s, i), o = (u - h) / (u - h + (p - g)), t.copy(i).addScaledVector(ks, o);
    const f = 1 / (m + _ + d);
    return a = _ * f, o = d * f, t.copy(n).addScaledVector(Yn, a).addScaledVector(Kn, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const Za = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, pn = { h: 0, s: 0, l: 0 }, zi = { h: 0, s: 0, l: 0 };
function Nr(r, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r;
}
class Ee {
  constructor(e, t, n) {
    return this.isColor = true, this.r = 1, this.g = 1, this.b = 1, this.set(e, t, n);
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return this.r = e, this.g = e, this.b = e, this;
  }
  setHex(e, t = gt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, ze.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = ze.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, ze.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = ze.workingColorSpace) {
    if (e = as(e, 1), t = Fe(t, 0, 1), n = Fe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const s = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - s;
      this.r = Nr(a, s, e + 1 / 3), this.g = Nr(a, s, e), this.b = Nr(a, s, e - 1 / 3);
    }
    return ze.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = gt) {
    function n(s) {
      s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let s;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
          if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(s[4]), this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const s = i[1], a = s.length;
      if (a === 3) return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(s, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = gt) {
    const n = Za[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = ln(e.r), this.g = ln(e.g), this.b = ln(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = ni(e.r), this.g = ni(e.g), this.b = ni(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = gt) {
    return ze.fromWorkingColorSpace(vt.copy(this), e), Math.round(Fe(vt.r * 255, 0, 255)) * 65536 + Math.round(Fe(vt.g * 255, 0, 255)) * 256 + Math.round(Fe(vt.b * 255, 0, 255));
  }
  getHexString(e = gt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = ze.workingColorSpace) {
    ze.fromWorkingColorSpace(vt.copy(this), t);
    const n = vt.r, i = vt.g, s = vt.b, a = Math.max(n, i, s), o = Math.min(n, i, s);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (i - s) / u + (i < s ? 6 : 0);
          break;
        case i:
          l = (s - n) / u + 2;
          break;
        case s:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = ze.workingColorSpace) {
    return ze.fromWorkingColorSpace(vt.copy(this), t), e.r = vt.r, e.g = vt.g, e.b = vt.b, e;
  }
  getStyle(e = gt) {
    ze.fromWorkingColorSpace(vt.copy(this), e);
    const t = vt.r, n = vt.g, i = vt.b;
    return e !== gt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(pn), this.setHSL(pn.h + e, pn.s + t, pn.l + n);
  }
  add(e) {
    return this.r += e.r, this.g += e.g, this.b += e.b, this;
  }
  addColors(e, t) {
    return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
  }
  addScalar(e) {
    return this.r += e, this.g += e, this.b += e, this;
  }
  sub(e) {
    return this.r = Math.max(0, this.r - e.r), this.g = Math.max(0, this.g - e.g), this.b = Math.max(0, this.b - e.b), this;
  }
  multiply(e) {
    return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
  }
  multiplyScalar(e) {
    return this.r *= e, this.g *= e, this.b *= e, this;
  }
  lerp(e, t) {
    return this.r += (e.r - this.r) * t, this.g += (e.g - this.g) * t, this.b += (e.b - this.b) * t, this;
  }
  lerpColors(e, t, n) {
    return this.r = e.r + (t.r - e.r) * n, this.g = e.g + (t.g - e.g) * n, this.b = e.b + (t.b - e.b) * n, this;
  }
  lerpHSL(e, t) {
    this.getHSL(pn), e.getHSL(zi);
    const n = Ai(pn.h, zi.h, t), i = Ai(pn.s, zi.s, t), s = Ai(pn.l, zi.l, t);
    return this.setHSL(n, i, s), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, s = e.elements;
    return this.r = s[0] * t + s[3] * n + s[6] * i, this.g = s[1] * t + s[4] * n + s[7] * i, this.b = s[2] * t + s[5] * n + s[8] * i, this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return this.r = e[t], this.g = e[t + 1], this.b = e[t + 2], this;
  }
  toArray(e = [], t = 0) {
    return e[t] = this.r, e[t + 1] = this.g, e[t + 2] = this.b, e;
  }
  fromBufferAttribute(e, t) {
    return this.r = e.getX(t), this.g = e.getY(t), this.b = e.getZ(t), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const vt = new Ee();
Ee.NAMES = Za;
let il = 0;
class Xt extends ci {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: il++ }), this.uuid = Wt(), this.name = "", this.type = "Material", this.blending = 1, this.side = 0, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = 204, this.blendDst = 205, this.blendEquation = 100, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new Ee(0, 0, 0), this.blendAlpha = 0, this.depthFunc = 3, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = 519, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = 7680, this.stencilZFail = 7680, this.stencilZPass = 7680, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, this._alphaTest = e;
  }
  onBeforeRender() {
  }
  onBeforeCompile() {
  }
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0) for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
        continue;
      }
      const i = this[t];
      if (i === void 0) {
        console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
        continue;
      }
      i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n;
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = { metadata: { version: 4.6, type: "Material", generator: "Material.toJSON" } };
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== 1 && (n.blending = this.blending), this.side !== 0 && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== 204 && (n.blendSrc = this.blendSrc), this.blendDst !== 205 && (n.blendDst = this.blendDst), this.blendEquation !== 100 && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== 3 && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== 519 && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== 7680 && (n.stencilFail = this.stencilFail), this.stencilZFail !== 7680 && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== 7680 && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const s = i(e.textures), a = i(e.images);
      s.length > 0 && (n.textures = s), a.length > 0 && (n.images = a);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.name = e.name, this.blending = e.blending, this.side = e.side, this.vertexColors = e.vertexColors, this.opacity = e.opacity, this.transparent = e.transparent, this.blendSrc = e.blendSrc, this.blendDst = e.blendDst, this.blendEquation = e.blendEquation, this.blendSrcAlpha = e.blendSrcAlpha, this.blendDstAlpha = e.blendDstAlpha, this.blendEquationAlpha = e.blendEquationAlpha, this.blendColor.copy(e.blendColor), this.blendAlpha = e.blendAlpha, this.depthFunc = e.depthFunc, this.depthTest = e.depthTest, this.depthWrite = e.depthWrite, this.stencilWriteMask = e.stencilWriteMask, this.stencilFunc = e.stencilFunc, this.stencilRef = e.stencilRef, this.stencilFuncMask = e.stencilFuncMask, this.stencilFail = e.stencilFail, this.stencilZFail = e.stencilZFail, this.stencilZPass = e.stencilZPass, this.stencilWrite = e.stencilWrite;
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let s = 0; s !== i; ++s) n[s] = t[s].clone();
    }
    return this.clippingPlanes = n, this.clipIntersection = e.clipIntersection, this.clipShadows = e.clipShadows, this.shadowSide = e.shadowSide, this.colorWrite = e.colorWrite, this.precision = e.precision, this.polygonOffset = e.polygonOffset, this.polygonOffsetFactor = e.polygonOffsetFactor, this.polygonOffsetUnits = e.polygonOffsetUnits, this.dithering = e.dithering, this.alphaTest = e.alphaTest, this.alphaHash = e.alphaHash, this.alphaToCoverage = e.alphaToCoverage, this.premultipliedAlpha = e.premultipliedAlpha, this.forceSinglePass = e.forceSinglePass, this.visible = e.visible, this.toneMapped = e.toneMapped, this.userData = JSON.parse(JSON.stringify(e.userData)), this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  onBuild() {
    console.warn("Material: onBuild() has been removed.");
  }
}
class Nn extends Xt {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new Ee(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Yt(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ht = new L(), Vi = new Be();
class Tt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0;
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.name = e.name, this.array = new e.array.constructor(e.array), this.itemSize = e.itemSize, this.count = e.count, this.normalized = e.normalized, this.usage = e.usage, this.gpuType = e.gpuType, this;
  }
  copyAt(e, t, n) {
    e *= this.itemSize, n *= t.itemSize;
    for (let i = 0, s = this.itemSize; i < s; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) Vi.fromBufferAttribute(this, t), Vi.applyMatrix3(e), this.setXY(t, Vi.x, Vi.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ht.fromBufferAttribute(this, t), ht.applyMatrix3(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) ht.fromBufferAttribute(this, t), ht.applyMatrix4(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) ht.fromBufferAttribute(this, t), ht.applyNormalMatrix(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) ht.fromBufferAttribute(this, t), ht.transformDirection(e), this.setXYZ(t, ht.x, ht.y, ht.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = $e(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = $e(t, this.array), n = $e(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e *= this.itemSize, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array), s = $e(s, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = s, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== 35044 && (e.usage = this.usage), e;
  }
}
class $a extends Tt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Ja extends Tt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class qt extends Tt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let rl = 0;
const Ut = new Ce(), Fr = new tt(), jn = new L(), Ct = new cn(), _i = new cn(), ft = new L();
class Ft extends ci {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: rl++ }), this.uuid = Wt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (Ya(e) ? Ja : $a)(e, 1) : this.index = e, this;
  }
  setIndirect(e) {
    return this.indirect = e, this;
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return this.attributes[e] = t, this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    this.drawRange.start = e, this.drawRange.count = t;
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), t.needsUpdate = true);
    const n = this.attributes.normal;
    if (n !== void 0) {
      const s = new Le().getNormalMatrix(e);
      n.applyNormalMatrix(s), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return Ut.makeRotationFromQuaternion(e), this.applyMatrix4(Ut), this;
  }
  rotateX(e) {
    return Ut.makeRotationX(e), this.applyMatrix4(Ut), this;
  }
  rotateY(e) {
    return Ut.makeRotationY(e), this.applyMatrix4(Ut), this;
  }
  rotateZ(e) {
    return Ut.makeRotationZ(e), this.applyMatrix4(Ut), this;
  }
  translate(e, t, n) {
    return Ut.makeTranslation(e, t, n), this.applyMatrix4(Ut), this;
  }
  scale(e, t, n) {
    return Ut.makeScale(e, t, n), this.applyMatrix4(Ut), this;
  }
  lookAt(e) {
    return Fr.lookAt(e), Fr.updateMatrix(), this.applyMatrix4(Fr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(jn).negate(), this.translate(jn.x, jn.y, jn.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, s = e.length; i < s; i++) {
        const a = e[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new qt(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        const s = e[i];
        t.setXYZ(i, s.x, s.y, s.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new cn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new L(-1 / 0, -1 / 0, -1 / 0), new L(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
        const s = t[n];
        Ct.setFromBufferAttribute(s), this.morphTargetsRelative ? (ft.addVectors(this.boundingBox.min, Ct.min), this.boundingBox.expandByPoint(ft), ft.addVectors(this.boundingBox.max, Ct.max), this.boundingBox.expandByPoint(ft)) : (this.boundingBox.expandByPoint(Ct.min), this.boundingBox.expandByPoint(Ct.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Zt());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Ct.setFromBufferAttribute(e), t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s];
        _i.setFromBufferAttribute(o), this.morphTargetsRelative ? (ft.addVectors(Ct.min, _i.min), Ct.expandByPoint(ft), ft.addVectors(Ct.max, _i.max), Ct.expandByPoint(ft)) : (Ct.expandByPoint(_i.min), Ct.expandByPoint(_i.max));
      }
      Ct.getCenter(n);
      let i = 0;
      for (let s = 0, a = e.count; s < a; s++) ft.fromBufferAttribute(e, s), i = Math.max(i, n.distanceToSquared(ft));
      if (t) for (let s = 0, a = t.length; s < a; s++) {
        const o = t[s], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) ft.fromBufferAttribute(o, c), l && (jn.fromBufferAttribute(e, c), ft.add(jn)), i = Math.max(i, n.distanceToSquared(ft));
      }
      this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this);
    }
  }
  computeTangents() {
    const e = this.index, t = this.attributes;
    if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
      console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
      return;
    }
    const n = t.position, i = t.normal, s = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new Tt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let N = 0; N < n.count; N++) o[N] = new L(), l[N] = new L();
    const c = new L(), h = new L(), u = new L(), d = new Be(), p = new Be(), g = new Be(), _ = new L(), m = new L();
    function f(N, y, M) {
      c.fromBufferAttribute(n, N), h.fromBufferAttribute(n, y), u.fromBufferAttribute(n, M), d.fromBufferAttribute(s, N), p.fromBufferAttribute(s, y), g.fromBufferAttribute(s, M), h.sub(c), u.sub(c), p.sub(d), g.sub(d);
      const C = 1 / (p.x * g.y - g.x * p.y);
      isFinite(C) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -p.y).multiplyScalar(C), m.copy(u).multiplyScalar(p.x).addScaledVector(h, -g.x).multiplyScalar(C), o[N].add(_), o[y].add(_), o[M].add(_), l[N].add(m), l[y].add(m), l[M].add(m));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: e.count }]);
    for (let N = 0, y = A.length; N < y; ++N) {
      const M = A[N], C = M.start, q = M.count;
      for (let G = C, W = C + q; G < W; G += 3) f(e.getX(G + 0), e.getX(G + 1), e.getX(G + 2));
    }
    const E = new L(), S = new L(), I = new L(), b = new L();
    function w(N) {
      I.fromBufferAttribute(i, N), b.copy(I);
      const y = o[N];
      E.copy(y), E.sub(I.multiplyScalar(I.dot(y))).normalize(), S.crossVectors(b, y);
      const C = S.dot(l[N]) < 0 ? -1 : 1;
      a.setXYZW(N, E.x, E.y, E.z, C);
    }
    for (let N = 0, y = A.length; N < y; ++N) {
      const M = A[N], C = M.start, q = M.count;
      for (let G = C, W = C + q; G < W; G += 3) w(e.getX(G + 0)), w(e.getX(G + 1)), w(e.getX(G + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new Tt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
      const i = new L(), s = new L(), a = new L(), o = new L(), l = new L(), c = new L(), h = new L(), u = new L();
      if (e) for (let d = 0, p = e.count; d < p; d += 3) {
        const g = e.getX(d + 0), _ = e.getX(d + 1), m = e.getX(d + 2);
        i.fromBufferAttribute(t, g), s.fromBufferAttribute(t, _), a.fromBufferAttribute(t, m), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let d = 0, p = t.count; d < p; d += 3) i.fromBufferAttribute(t, d + 0), s.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, s), u.subVectors(i, s), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) ft.fromBufferAttribute(e, t), ft.normalize(), e.setXYZ(t, ft.x, ft.y, ft.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h);
      let p = 0, g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        o.isInterleavedBufferAttribute ? p = l[_] * o.data.stride + o.offset : p = l[_] * h;
        for (let f = 0; f < h; f++) d[g++] = c[p++];
      }
      return new Tt(d, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Ft(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [], c = s[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h], p = e(d, n);
        l.push(p);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "BufferGeometry", generator: "BufferGeometry.toJSON" } };
    if (e.uuid = this.uuid, e.type = this.type, this.name !== "" && (e.name = this.name), Object.keys(this.userData).length > 0 && (e.userData = this.userData), this.parameters !== void 0) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null && (e.data.index = { type: t.array.constructor.name, array: Array.prototype.slice.call(t.array) });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let s = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const p = c[u];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, s = true);
    }
    s && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return o !== null && (e.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), e;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const h = [], u = s[c];
      for (let d = 0, p = u.length; d < p; d++) h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return l !== null && (this.boundingSphere = l.clone()), this.drawRange.start = e.drawRange.start, this.drawRange.count = e.drawRange.count, this.userData = e.userData, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Hs = new Ce(), Tn = new Ci(), Wi = new Zt(), zs = new L(), Xi = new L(), qi = new L(), Yi = new L(), Or = new L(), Ki = new L(), Vs = new L(), ji = new L();
class Pt extends tt {
  constructor(e = new Ft(), t = new Nn()) {
    super(), this.isMesh = true, this.type = "Mesh", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()), e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, s = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      Ki.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const h = o[l], u = s[l];
        h !== 0 && (Or.fromBufferAttribute(u, e), a ? Ki.addScaledVector(Or, h) : Ki.addScaledVector(Or.sub(t), h));
      }
      t.add(Ki);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, s = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), Wi.copy(n.boundingSphere), Wi.applyMatrix4(s), Tn.copy(e.ray).recast(e.near), !(Wi.containsPoint(Tn.origin) === false && (Tn.intersectSphere(Wi, zs) === null || Tn.origin.distanceToSquared(zs) > (e.far - e.near) ** 2)) && (Hs.copy(s).invert(), Tn.copy(e.ray).applyMatrix4(Hs), !(n.boundingBox !== null && Tn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Tn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const s = this.geometry, a = this.material, o = s.index, l = s.attributes.position, c = s.attributes.uv, h = s.attributes.uv1, u = s.attributes.normal, d = s.groups, p = s.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], f = a[m.materialIndex], A = Math.max(m.start, p.start), E = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
      for (let S = A, I = E; S < I; S += 3) {
        const b = o.getX(S), w = o.getX(S + 1), N = o.getX(S + 2);
        i = Zi(this, f, e, n, c, h, u, b, w, N), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const g = Math.max(0, p.start), _ = Math.min(o.count, p.start + p.count);
      for (let m = g, f = _; m < f; m += 3) {
        const A = o.getX(m), E = o.getX(m + 1), S = o.getX(m + 2);
        i = Zi(this, a, e, n, c, h, u, A, E, S), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], f = a[m.materialIndex], A = Math.max(m.start, p.start), E = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
      for (let S = A, I = E; S < I; S += 3) {
        const b = S, w = S + 1, N = S + 2;
        i = Zi(this, f, e, n, c, h, u, b, w, N), i && (i.faceIndex = Math.floor(S / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const g = Math.max(0, p.start), _ = Math.min(l.count, p.start + p.count);
      for (let m = g, f = _; m < f; m += 3) {
        const A = m, E = m + 1, S = m + 2;
        i = Zi(this, a, e, n, c, h, u, A, E, S), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
  }
}
function sl(r, e, t, n, i, s, a, o) {
  let l;
  if (e.side === 1 ? l = n.intersectTriangle(a, s, i, true, o) : l = n.intersectTriangle(i, s, a, e.side === 0, o), l === null) return null;
  ji.copy(o), ji.applyMatrix4(r.matrixWorld);
  const c = t.ray.origin.distanceTo(ji);
  return c < t.near || c > t.far ? null : { distance: c, point: ji.clone(), object: r };
}
function Zi(r, e, t, n, i, s, a, o, l, c) {
  r.getVertexPosition(o, Xi), r.getVertexPosition(l, qi), r.getVertexPosition(c, Yi);
  const h = sl(r, e, t, n, Xi, qi, Yi, Vs);
  if (h) {
    const u = new L();
    Vt.getBarycoord(Vs, Xi, qi, Yi, u), i && (h.uv = Vt.getInterpolatedAttribute(i, o, l, c, u, new Be())), s && (h.uv1 = Vt.getInterpolatedAttribute(s, o, l, c, u, new Be())), a && (h.normal = Vt.getInterpolatedAttribute(a, o, l, c, u, new L()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a: o, b: l, c, normal: new L(), materialIndex: 0 };
    Vt.getNormal(Xi, qi, Yi, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class Pi extends Ft {
  constructor(e = 1, t = 1, n = 1, i = 1, s = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: s, depthSegments: a };
    const o = this;
    i = Math.floor(i), s = Math.floor(s), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, s, 0), g("z", "y", "x", 1, -1, n, t, -e, a, s, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, s, 4), g("x", "y", "z", -1, -1, e, t, -n, i, s, 5), this.setIndex(l), this.setAttribute("position", new qt(c, 3)), this.setAttribute("normal", new qt(h, 3)), this.setAttribute("uv", new qt(u, 2));
    function g(_, m, f, A, E, S, I, b, w, N, y) {
      const M = S / w, C = I / N, q = S / 2, G = I / 2, W = b / 2, Z = w + 1, z = N + 1;
      let Q = 0, H = 0;
      const re = new L();
      for (let he = 0; he < z; he++) {
        const _e = he * C - G;
        for (let Ue = 0; Ue < Z; Ue++) {
          const et = Ue * M - q;
          re[_] = et * A, re[m] = _e * E, re[f] = W, c.push(re.x, re.y, re.z), re[_] = 0, re[m] = 0, re[f] = b > 0 ? 1 : -1, h.push(re.x, re.y, re.z), u.push(Ue / w), u.push(1 - he / N), Q += 1;
        }
      }
      for (let he = 0; he < N; he++) for (let _e = 0; _e < w; _e++) {
        const Ue = d + _e + Z * he, et = d + _e + Z * (he + 1), X = d + (_e + 1) + Z * (he + 1), ee = d + (_e + 1) + Z * he;
        l.push(Ue, et, ee), l.push(et, X, ee), H += 6;
      }
      o.addGroup(p, H, y), p += H, d += Q;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new Pi(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function si(r) {
  const e = {};
  for (const t in r) {
    e[t] = {};
    for (const n in r[t]) {
      const i = r[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function yt(r) {
  const e = {};
  for (let t = 0; t < r.length; t++) {
    const n = si(r[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function al(r) {
  const e = [];
  for (let t = 0; t < r.length; t++) e.push(r[t].clone());
  return e;
}
function Qa(r) {
  const e = r.getRenderTarget();
  return e === null ? r.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : ze.workingColorSpace;
}
const ol = { clone: si, merge: yt };
var ll = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, cl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class xn extends Xt {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = ll, this.fragmentShader = cl, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = si(e.uniforms), this.uniformsGroups = al(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    t.glslVersion = this.glslVersion, t.uniforms = {};
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture ? t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid } : a && a.isColor ? t.uniforms[i] = { type: "c", value: a.getHex() } : a && a.isVector2 ? t.uniforms[i] = { type: "v2", value: a.toArray() } : a && a.isVector3 ? t.uniforms[i] = { type: "v3", value: a.toArray() } : a && a.isVector4 ? t.uniforms[i] = { type: "v4", value: a.toArray() } : a && a.isMatrix3 ? t.uniforms[i] = { type: "m3", value: a.toArray() } : a && a.isMatrix4 ? t.uniforms[i] = { type: "m4", value: a.toArray() } : t.uniforms[i] = { value: a };
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines), t.vertexShader = this.vertexShader, t.fragmentShader = this.fragmentShader, t.lights = this.lights, t.clipping = this.clipping;
    const n = {};
    for (const i in this.extensions) this.extensions[i] === true && (n[i] = true);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class eo extends tt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Ce(), this.projectionMatrix = new Ce(), this.projectionMatrixInverse = new Ce(), this.coordinateSystem = 2e3;
  }
  copy(e, t) {
    return super.copy(e, t), this.matrixWorldInverse.copy(e.matrixWorldInverse), this.projectionMatrix.copy(e.projectionMatrix), this.projectionMatrixInverse.copy(e.projectionMatrixInverse), this.coordinateSystem = e.coordinateSystem, this;
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const mn = new L(), Ws = new Be(), Xs = new Be();
class bt extends eo {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = ri * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Ei * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return ri * 2 * Math.atan(Math.tan(Ei * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    mn.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(mn.x, mn.y).multiplyScalar(-e / mn.z), mn.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(mn.x, mn.y).multiplyScalar(-e / mn.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Ws, Xs), t.subVectors(Xs, Ws);
  }
  setViewOffset(e, t, n, i, s, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(Ei * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, s = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      s += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (s += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const Zn = -90, $n = 1;
class hl extends tt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new bt(Zn, $n, e, t);
    i.layers = this.layers, this.add(i);
    const s = new bt(Zn, $n, e, t);
    s.layers = this.layers, this.add(s);
    const a = new bt(Zn, $n, e, t);
    a.layers = this.layers, this.add(a);
    const o = new bt(Zn, $n, e, t);
    o.layers = this.layers, this.add(o);
    const l = new bt(Zn, $n, e, t);
    l.layers = this.layers, this.add(l);
    const c = new bt(Zn, $n, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, s, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === 2e3) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), s.up.set(0, 0, -1), s.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === 2001) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), s.up.set(0, 0, 1), s.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [s, a, o, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, i), e.render(t, s), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class to extends pt {
  constructor(e, t, n, i, s, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : 301, super(e, t, n, i, s, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class ul extends On {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new to(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : 1006;
  }
  fromEquirectangularTexture(e, t) {
    this.texture.type = t.type, this.texture.colorSpace = t.colorSpace, this.texture.generateMipmaps = t.generateMipmaps, this.texture.minFilter = t.minFilter, this.texture.magFilter = t.magFilter;
    const n = { uniforms: { tEquirect: { value: null } }, vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`, fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			` }, i = new Pi(5, 5, 5), s = new xn({ name: "CubemapFromEquirect", uniforms: si(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: 1, blending: 0 });
    s.uniforms.tEquirect.value = t;
    const a = new Pt(i, s), o = t.minFilter;
    return t.minFilter === 1008 && (t.minFilter = 1006), new hl(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(s);
  }
}
class Ap extends tt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new Yt(), this.environmentIntensity = 1, this.environmentRotation = new Yt(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class dl {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = 35044, this.updateRanges = [], this.version = 0, this.uuid = Wt();
  }
  onUploadCallback() {
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  setUsage(e) {
    return this.usage = e, this;
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return this.array = new e.array.constructor(e.array), this.count = e.count, this.stride = e.stride, this.usage = e.usage, this;
  }
  copyAt(e, t, n) {
    e *= this.stride, n *= t.stride;
    for (let i = 0, s = this.stride; i < s; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Wt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Wt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const St = new L();
class ls {
  constructor(e, t, n, i = false) {
    this.isInterleavedBufferAttribute = true, this.name = "", this.data = e, this.itemSize = t, this.offset = n, this.normalized = i;
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++) St.fromBufferAttribute(this, t), St.applyMatrix4(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) St.fromBufferAttribute(this, t), St.applyNormalMatrix(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) St.fromBufferAttribute(this, t), St.transformDirection(e), this.setXYZ(t, St.x, St.y, St.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = $e(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = $e(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = zt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = $e(t, this.array), n = $e(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, s) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = $e(t, this.array), n = $e(n, this.array), i = $e(i, this.array), s = $e(s, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = s, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return new Tt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new ls(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let s = 0; s < this.itemSize; s++) t.push(this.data.array[i + s]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
const qs = new L(), Ys = new Ye(), Ks = new Ye(), fl = new L(), js = new Ce(), $i = new L(), Br = new Zt(), Zs = new Ce(), Gr = new Ci();
class pl extends Pt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = bs, this.bindMatrix = new Ce(), this.bindMatrixInverse = new Ce(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new cn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, $i), this.boundingBox.expandByPoint($i);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new Zt()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, $i), this.boundingSphere.expandByPoint($i);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Br.copy(this.boundingSphere), Br.applyMatrix4(i), e.ray.intersectsSphere(Br) !== false && (Zs.copy(i).invert(), Gr.copy(e.ray).applyMatrix4(Zs), !(this.boundingBox !== null && Gr.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, Gr)));
  }
  getVertexPosition(e, t) {
    return super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t;
  }
  bind(e, t) {
    this.skeleton = e, t === void 0 && (this.updateMatrixWorld(true), this.skeleton.calculateInverses(), t = this.matrixWorld), this.bindMatrix.copy(t), this.bindMatrixInverse.copy(t).invert();
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ye(), t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const s = 1 / e.manhattanLength();
      s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === bs ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === yo ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Ys.fromBufferAttribute(i.attributes.skinIndex, e), Ks.fromBufferAttribute(i.attributes.skinWeight, e), qs.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let s = 0; s < 4; s++) {
      const a = Ks.getComponent(s);
      if (a !== 0) {
        const o = Ys.getComponent(s);
        js.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(fl.copy(qs).applyMatrix4(js), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class no extends tt {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class io extends pt {
  constructor(e = null, t = 1, n = 1, i, s, a, o, l, c = 1003, h = 1003, u, d) {
    super(null, a, o, l, c, h, i, s, u, d), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const $s = new Ce(), ml = new Ce();
class cs {
  constructor(e = [], t = []) {
    this.uuid = Wt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Ce());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Ce();
      this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(), this.boneInverses.push(n);
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(), n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld), n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones, t = this.boneInverses, n = this.boneMatrices, i = this.boneTexture;
    for (let s = 0, a = e.length; s < a; s++) {
      const o = e[s] ? e[s].matrixWorld : ml;
      $s.multiplyMatrices(o, t[s]), $s.toArray(n, s * 16);
    }
    i !== null && (i.needsUpdate = true);
  }
  clone() {
    return new cs(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new io(t, e, e, 1023, 1015);
    return n.needsUpdate = true, this.boneMatrices = t, this.boneTexture = n, this;
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null && (this.boneTexture.dispose(), this.boneTexture = null);
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const s = e.bones[n];
      let a = t[s];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s), a = new no()), this.bones.push(a), this.boneInverses.push(new Ce().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class es extends Tt {
  constructor(e, t, n, i = 1) {
    super(e, t, n), this.isInstancedBufferAttribute = true, this.meshPerAttribute = i;
  }
  copy(e) {
    return super.copy(e), this.meshPerAttribute = e.meshPerAttribute, this;
  }
  toJSON() {
    const e = super.toJSON();
    return e.meshPerAttribute = this.meshPerAttribute, e.isInstancedBufferAttribute = true, e;
  }
}
const Jn = new Ce(), Js = new Ce(), Ji = [], Qs = new cn(), gl = new Ce(), xi = new Pt(), vi = new Zt();
class _l extends Pt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new es(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, gl);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new cn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, Jn), Qs.copy(e.boundingBox).applyMatrix4(Jn), this.boundingBox.union(Qs);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new Zt()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, Jn), vi.copy(e.boundingSphere).applyMatrix4(Jn), this.boundingSphere.union(vi);
  }
  copy(e, t) {
    return super.copy(e, t), this.instanceMatrix.copy(e.instanceMatrix), e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()), e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()), this.count = e.count, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, s = n.length + 1, a = e * s + 1;
    for (let o = 0; o < n.length; o++) n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (xi.geometry = this.geometry, xi.material = this.material, xi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), vi.copy(this.boundingSphere), vi.applyMatrix4(n), e.ray.intersectsSphere(vi) !== false)) for (let s = 0; s < i; s++) {
      this.getMatrixAt(s, Jn), Js.multiplyMatrices(n, Jn), xi.matrixWorld = Js, xi.raycast(e, Ji);
      for (let a = 0, o = Ji.length; a < o; a++) {
        const l = Ji[a];
        l.instanceId = s, l.object = this, t.push(l);
      }
      Ji.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new es(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new io(new Float32Array(i * this.count), i, this.count, 1028, 1015));
    const s = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++) a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = i * e;
    s[l] = o, s.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
const kr = new L(), xl = new L(), vl = new Le();
class Dn {
  constructor(e = new L(1, 0, 0), t = 0) {
    this.isPlane = true, this.normal = e, this.constant = t;
  }
  set(e, t) {
    return this.normal.copy(e), this.constant = t, this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), this.constant = i, this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = kr.subVectors(n, t).cross(xl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), this.constant = e.constant, this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), this.constant *= e, this;
  }
  negate() {
    return this.constant *= -1, this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(kr), i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / i;
    return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start), n = this.distanceToPoint(e.end);
    return t < 0 && n > 0 || n < 0 && t > 0;
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || vl.getNormalMatrix(e), i = this.coplanarPoint(kr).applyMatrix4(e), s = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(s), this;
  }
  translate(e) {
    return this.constant -= e.dot(this.normal), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const En = new Zt(), Qi = new L();
class hs {
  constructor(e = new Dn(), t = new Dn(), n = new Dn(), i = new Dn(), s = new Dn(), a = new Dn()) {
    this.planes = [e, t, n, i, s, a];
  }
  set(e, t, n, i, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = 2e3) {
    const n = this.planes, i = e.elements, s = i[0], a = i[1], o = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], p = i[8], g = i[9], _ = i[10], m = i[11], f = i[12], A = i[13], E = i[14], S = i[15];
    if (n[0].setComponents(l - s, d - c, m - p, S - f).normalize(), n[1].setComponents(l + s, d + c, m + p, S + f).normalize(), n[2].setComponents(l + a, d + h, m + g, S + A).normalize(), n[3].setComponents(l - a, d - h, m - g, S - A).normalize(), n[4].setComponents(l - o, d - u, m - _, S - E).normalize(), t === 2e3) n[5].setComponents(l + o, d + u, m + _, S + E).normalize();
    else if (t === 2001) n[5].setComponents(o, u, _, E).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), En.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), En.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(En);
  }
  intersectsSprite(e) {
    return En.center.set(0, 0, 0), En.radius = 0.7071067811865476, En.applyMatrix4(e.matrixWorld), this.intersectsSphere(En);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let s = 0; s < 6; s++) if (t[s].distanceToPoint(n) < i) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Qi.x = i.normal.x > 0 ? e.max.x : e.min.x, Qi.y = i.normal.y > 0 ? e.max.y : e.min.y, Qi.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Qi) < 0) return false;
    }
    return true;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return false;
    return true;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class us extends Xt {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new Ee(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const fr = new L(), pr = new L(), ea = new Ce(), Mi = new Ci(), er = new Zt(), Hr = new L(), ta = new L();
class wi extends tt {
  constructor(e = new Ft(), t = new us()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, s = t.count; i < s; i++) fr.fromBufferAttribute(t, i - 1), pr.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += fr.distanceTo(pr);
      e.setAttribute("lineDistance", new qt(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), er.copy(n.boundingSphere), er.applyMatrix4(i), er.radius += s, e.ray.intersectsSphere(er) === false) return;
    ea.copy(i).invert(), Mi.copy(e.ray).applyMatrix4(ea);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let _ = p, m = g - 1; _ < m; _ += c) {
        const f = h.getX(_), A = h.getX(_ + 1), E = tr(this, e, Mi, l, f, A);
        E && t.push(E);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1), m = h.getX(p), f = tr(this, e, Mi, l, _, m);
        f && t.push(f);
      }
    } else {
      const p = Math.max(0, a.start), g = Math.min(d.count, a.start + a.count);
      for (let _ = p, m = g - 1; _ < m; _ += c) {
        const f = tr(this, e, Mi, l, _, _ + 1);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const _ = tr(this, e, Mi, l, g - 1, p);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function tr(r, e, t, n, i, s) {
  const a = r.geometry.attributes.position;
  if (fr.fromBufferAttribute(a, i), pr.fromBufferAttribute(a, s), t.distanceSqToSegment(fr, pr, Hr, ta) > n) return;
  Hr.applyMatrix4(r.matrixWorld);
  const l = e.ray.origin.distanceTo(Hr);
  if (!(l < e.near || l > e.far)) return { distance: l, point: ta.clone().applyMatrix4(r.matrixWorld), index: i, face: null, faceIndex: null, barycoord: null, object: r };
}
const na = new L(), ia = new L();
class Ml extends wi {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, s = t.count; i < s; i += 2) na.fromBufferAttribute(t, i), ia.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + na.distanceTo(ia);
      e.setAttribute("lineDistance", new qt(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class Sl extends wi {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class ro extends Xt {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new Ee(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const ra = new Ce(), ts = new Ci(), nr = new Zt(), ir = new L();
class yl extends tt {
  constructor(e = new Ft(), t = new ro()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, s = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), nr.copy(n.boundingSphere), nr.applyMatrix4(i), nr.radius += s, e.ray.intersectsSphere(nr) === false) return;
    ra.copy(i).invert(), ts.copy(e.ray).applyMatrix4(ra);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++) {
        const m = c.getX(g);
        ir.fromBufferAttribute(u, m), sa(ir, m, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(u.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++) ir.fromBufferAttribute(u, g), sa(ir, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let s = 0, a = i.length; s < a; s++) {
          const o = i[s].name || String(s);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = s;
        }
      }
    }
  }
}
function sa(r, e, t, n, i, s, a) {
  const o = ts.distanceSqToPoint(r);
  if (o < t) {
    const l = new L();
    ts.closestPointToPoint(r, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    s.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class Fn extends tt {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
class so extends pt {
  constructor(e, t, n, i, s, a, o, l, c, h = 1026) {
    if (h !== 1026 && h !== 1027) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === 1026 && (n = 1014), n === void 0 && h === 1027 && (n = 1020), super(null, i, s, a, o, l, h, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : 1003, this.minFilter = l !== void 0 ? l : 1003, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class mr extends Ft {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i };
    const s = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, d = t / l, p = [], g = [], _ = [], m = [];
    for (let f = 0; f < h; f++) {
      const A = f * d - a;
      for (let E = 0; E < c; E++) {
        const S = E * u - s;
        g.push(S, -A, 0), _.push(0, 0, 1), m.push(E / o), m.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++) for (let A = 0; A < o; A++) {
      const E = A + c * f, S = A + c * (f + 1), I = A + 1 + c * (f + 1), b = A + 1 + c * f;
      p.push(E, S, b), p.push(S, I, b);
    }
    this.setIndex(p), this.setAttribute("position", new qt(g, 3)), this.setAttribute("normal", new qt(_, 3)), this.setAttribute("uv", new qt(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new mr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class ds extends Xt {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new Ee(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Yt(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class $t extends ds {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new Be(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Fe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new Ee(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new Ee(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new Ee(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    this._anisotropy > 0 != e > 0 && this.version++, this._anisotropy = e;
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    this._clearcoat > 0 != e > 0 && this.version++, this._clearcoat = e;
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    this._iridescence > 0 != e > 0 && this.version++, this._iridescence = e;
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    this._dispersion > 0 != e > 0 && this.version++, this._dispersion = e;
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    this._sheen > 0 != e > 0 && this.version++, this._sheen = e;
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    this._transmission > 0 != e > 0 && this.version++, this._transmission = e;
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "", PHYSICAL: "" }, this.anisotropy = e.anisotropy, this.anisotropyRotation = e.anisotropyRotation, this.anisotropyMap = e.anisotropyMap, this.clearcoat = e.clearcoat, this.clearcoatMap = e.clearcoatMap, this.clearcoatRoughness = e.clearcoatRoughness, this.clearcoatRoughnessMap = e.clearcoatRoughnessMap, this.clearcoatNormalMap = e.clearcoatNormalMap, this.clearcoatNormalScale.copy(e.clearcoatNormalScale), this.dispersion = e.dispersion, this.ior = e.ior, this.iridescence = e.iridescence, this.iridescenceMap = e.iridescenceMap, this.iridescenceIOR = e.iridescenceIOR, this.iridescenceThicknessRange = [...e.iridescenceThicknessRange], this.iridescenceThicknessMap = e.iridescenceThicknessMap, this.sheen = e.sheen, this.sheenColor.copy(e.sheenColor), this.sheenColorMap = e.sheenColorMap, this.sheenRoughness = e.sheenRoughness, this.sheenRoughnessMap = e.sheenRoughnessMap, this.transmission = e.transmission, this.transmissionMap = e.transmissionMap, this.thickness = e.thickness, this.thicknessMap = e.thicknessMap, this.attenuationDistance = e.attenuationDistance, this.attenuationColor.copy(e.attenuationColor), this.specularIntensity = e.specularIntensity, this.specularIntensityMap = e.specularIntensityMap, this.specularColor.copy(e.specularColor), this.specularColorMap = e.specularColorMap, this;
  }
}
class bp extends Xt {
  constructor(e) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new Ee(16777215), this.specular = new Ee(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new Ee(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = 0, this.normalScale = new Be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new Yt(), this.combine = 0, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class Tl extends Xt {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = 3200, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class El extends Xt {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function rr(r, e, t) {
  return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r);
}
function Al(r) {
  return ArrayBuffer.isView(r) && !(r instanceof DataView);
}
function bl(r) {
  function e(i, s) {
    return r[i] - r[s];
  }
  const t = r.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function aa(r, e, t) {
  const n = r.length, i = new r.constructor(n);
  for (let s = 0, a = 0; a !== n; ++s) {
    const o = t[s] * e;
    for (let l = 0; l !== e; ++l) i[a++] = r[o + l];
  }
  return i;
}
function ao(r, e, t, n) {
  let i = 1, s = r[0];
  for (; s !== void 0 && s[n] === void 0; ) s = r[i++];
  if (s === void 0) return;
  let a = s[n];
  if (a !== void 0) if (Array.isArray(a)) do
    a = s[n], a !== void 0 && (e.push(s.time), t.push.apply(t, a)), s = r[i++];
  while (s !== void 0);
  else if (a.toArray !== void 0) do
    a = s[n], a !== void 0 && (e.push(s.time), a.toArray(t, t.length)), s = r[i++];
  while (s !== void 0);
  else do
    a = s[n], a !== void 0 && (e.push(s.time), t.push(a)), s = r[i++];
  while (s !== void 0);
}
class Li {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], s = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < s) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (s = i, i = t[++n], e < i) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= s)) {
            const o = t[1];
            e < o && (n = 2, s = o);
            for (let l = n - 2; ; ) {
              if (s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = s, s = t[--n - 1], e >= s) break e;
            }
            a = n, n = 0;
            break t;
          }
          break n;
        }
        for (; n < a; ) {
          const o = n + a >>> 1;
          e < t[o] ? a = o : n = o + 1;
        }
        if (i = t[n], s = t[n - 1], s === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, s, i);
    }
    return this.interpolate_(n, s, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[s + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Rl extends Li {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: 2400, endingEnd: 2400 };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let s = e - 2, a = e + 1, o = i[s], l = i[a];
    if (o === void 0) switch (this.getSettings_().endingStart) {
      case 2401:
        s = e, o = 2 * t - n;
        break;
      case 2402:
        s = i.length - 2, o = t + i[s] - i[s + 1];
        break;
      default:
        s = e, o = n;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case 2401:
        a = e, l = 2 * n - t;
        break;
      case 2402:
        a = 1, l = n + i[1] - i[0];
        break;
      default:
        a = e - 1, l = t;
    }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = s * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, f = -d * m + 2 * d * _ - d * g, A = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, E = (-1 - p) * m + (1.5 + p) * _ + 0.5 * g, S = p * m - p * _;
    for (let I = 0; I !== o; ++I) s[I] = f * a[h + I] + A * a[c + I] + E * a[l + I] + S * a[u + I];
    return s;
  }
}
class wl extends Li {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== o; ++d) s[d] = a[c + d] * u + a[l + d] * h;
    return s;
  }
}
class Cl extends Li {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Jt {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = rr(t, this.TimeBufferType), this.values = rr(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = { name: e.name, times: rr(e.times, Array), values: rr(e.values, Array) };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Cl(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new wl(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Rl(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case 2300:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case 2301:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case 2302:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === void 0) if (e !== this.DefaultInterpolation) this.setInterpolation(this.DefaultInterpolation);
      else throw new Error(n);
      return console.warn("THREE.KeyframeTrack:", n), this;
    }
    return this.createInterpolant = t, this;
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return 2300;
      case this.InterpolantFactoryMethodLinear:
        return 2301;
      case this.InterpolantFactoryMethodSmooth:
        return 2302;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times, i = n.length;
    let s = 0, a = i - 1;
    for (; s !== i && n[s] < e; ) ++s;
    for (; a !== -1 && n[a] > t; ) --a;
    if (++a, s !== 0 || a !== i) {
      s >= a && (a = Math.max(a, 1), s = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(s, a), this.values = this.values.slice(s * o, a * o);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const n = this.times, i = this.values, s = n.length;
    s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let a = null;
    for (let o = 0; o !== s; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, l), e = false;
        break;
      }
      if (a !== null && a > l) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, o, l, a), e = false;
        break;
      }
      a = l;
    }
    if (i !== void 0 && Al(i)) for (let o = 0, l = i.length; o !== l; ++o) {
      const c = i[o];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === 2302, s = e.length - 1;
    let a = 1;
    for (let o = 1; o < s; ++o) {
      let l = false;
      const c = e[o], h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0])) if (i) l = true;
      else {
        const u = o * n, d = u - n, p = u + n;
        for (let g = 0; g !== n; ++g) {
          const _ = t[u + g];
          if (_ !== t[d + g] || _ !== t[p + g]) {
            l = true;
            break;
          }
        }
      }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n, d = a * n;
          for (let p = 0; p !== n; ++p) t[d + p] = t[u + p];
        }
        ++a;
      }
    }
    if (s > 0) {
      e[a] = e[s];
      for (let o = s * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
Jt.prototype.TimeBufferType = Float32Array;
Jt.prototype.ValueBufferType = Float32Array;
Jt.prototype.DefaultInterpolation = 2301;
class hi extends Jt {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
hi.prototype.ValueTypeName = "bool";
hi.prototype.ValueBufferType = Array;
hi.prototype.DefaultInterpolation = 2300;
hi.prototype.InterpolantFactoryMethodLinear = void 0;
hi.prototype.InterpolantFactoryMethodSmooth = void 0;
class oo extends Jt {
}
oo.prototype.ValueTypeName = "color";
class ai extends Jt {
}
ai.prototype.ValueTypeName = "number";
class Pl extends Li {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4) jt.slerpFlat(s, 0, a, c - o, a, c, l);
    return s;
  }
}
class oi extends Jt {
  InterpolantFactoryMethodLinear(e) {
    return new Pl(this.times, this.values, this.getValueSize(), e);
  }
}
oi.prototype.ValueTypeName = "quaternion";
oi.prototype.InterpolantFactoryMethodSmooth = void 0;
class ui extends Jt {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ui.prototype.ValueTypeName = "string";
ui.prototype.ValueBufferType = Array;
ui.prototype.DefaultInterpolation = 2300;
ui.prototype.InterpolantFactoryMethodLinear = void 0;
ui.prototype.InterpolantFactoryMethodSmooth = void 0;
class li extends Jt {
}
li.prototype.ValueTypeName = "vector";
class Ll {
  constructor(e = "", t = -1, n = [], i = 2500) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Wt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(Il(n[a]).scale(i));
    const s = new this(e.name, e.duration, t, e.blendMode);
    return s.uuid = e.uuid, s;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let s = 0, a = n.length; s !== a; ++s) t.push(Jt.toJSON(n[s]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const s = t.length, a = [];
    for (let o = 0; o < s; o++) {
      let l = [], c = [];
      l.push((o + s - 1) % s, o, (o + 1) % s), c.push(0, 1, 0);
      const h = bl(l);
      l = aa(l, 1, h), c = aa(c, 1, h), !i && l[0] === 0 && (l.push(s), c.push(c[0])), a.push(new ai(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n));
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = i.geometry && i.geometry.animations || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {}, s = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(s);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        d || (i[u] = d = []), d.push(c);
      }
    }
    const a = [];
    for (const o in i) a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (!e) return console.error("THREE.AnimationClip: No animation in JSONLoader data."), null;
    const n = function(u, d, p, g, _) {
      if (p.length !== 0) {
        const m = [], f = [];
        ao(p, m, f, g), m.length !== 0 && _.push(new u(d, m, f));
      }
    }, i = [], s = e.name || "default", a = e.fps || 30, o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0)) if (d[0].morphTargets) {
        const p = {};
        let g;
        for (g = 0; g < d.length; g++) if (d[g].morphTargets) for (let _ = 0; _ < d[g].morphTargets.length; _++) p[d[g].morphTargets[_]] = -1;
        for (const _ in p) {
          const m = [], f = [];
          for (let A = 0; A !== d[g].morphTargets.length; ++A) {
            const E = d[g];
            m.push(E.time), f.push(E.morphTarget === _ ? 1 : 0);
          }
          i.push(new ai(".morphTargetInfluence[" + _ + "]", m, f));
        }
        l = p.length * a;
      } else {
        const p = ".bones[" + t[u].name + "]";
        n(li, p + ".position", d, "pos", i), n(oi, p + ".quaternion", d, "rot", i), n(li, p + ".scale", d, "scl", i);
      }
    }
    return i.length === 0 ? null : new this(s, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const s = this.tracks[n];
      t = Math.max(t, s.times[s.times.length - 1]);
    }
    return this.duration = t, this;
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = true;
    for (let t = 0; t < this.tracks.length; t++) e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Dl(r) {
  switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return ai;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return li;
    case "color":
      return oo;
    case "quaternion":
      return oi;
    case "bool":
    case "boolean":
      return hi;
    case "string":
      return ui;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r);
}
function Il(r) {
  if (r.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Dl(r.type);
  if (r.times === void 0) {
    const t = [], n = [];
    ao(r.keys, t, n, "value"), r.times = t, r.values = n;
  }
  return e.parse !== void 0 ? e.parse(r) : new e(r.name, r.times, r.values, r.interpolation);
}
const _n = { enabled: false, files: {}, add: function(r, e) {
  this.enabled !== false && (this.files[r] = e);
}, get: function(r) {
  if (this.enabled !== false) return this.files[r];
}, remove: function(r) {
  delete this.files[r];
}, clear: function() {
  this.files = {};
} };
class Ul {
  constructor(e, t, n) {
    const i = this;
    let s = false, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, s === false && i.onStart !== void 0 && i.onStart(h, a, o), s = true;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (s = false, i.onLoad !== void 0 && i.onLoad());
    }, this.itemError = function(h) {
      i.onError !== void 0 && i.onError(h);
    }, this.resolveURL = function(h) {
      return l ? l(h) : h;
    }, this.setURLModifier = function(h) {
      return l = h, this;
    }, this.addHandler = function(h, u) {
      return c.push(h, u), this;
    }, this.removeHandler = function(h) {
      const u = c.indexOf(h);
      return u !== -1 && c.splice(u, 2), this;
    }, this.getHandler = function(h) {
      for (let u = 0, d = c.length; u < d; u += 2) {
        const p = c[u], g = c[u + 1];
        if (p.global && (p.lastIndex = 0), p.test(h)) return g;
      }
      return null;
    };
  }
}
const Nl = new Ul();
class Bn {
  constructor(e) {
    this.manager = e !== void 0 ? e : Nl, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.load(e, i, t, s);
    });
  }
  parse() {
  }
  setCrossOrigin(e) {
    return this.crossOrigin = e, this;
  }
  setWithCredentials(e) {
    return this.withCredentials = e, this;
  }
  setPath(e) {
    return this.path = e, this;
  }
  setResourcePath(e) {
    return this.resourcePath = e, this;
  }
  setRequestHeader(e) {
    return this.requestHeader = e, this;
  }
}
Bn.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const an = {};
class Fl extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class fs extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = _n.get(e);
    if (s !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(s), this.manager.itemEnd(e);
    }, 0), s;
    if (an[e] !== void 0) {
      an[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    an[e] = [], an[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = an[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, g = p !== 0;
        let _ = 0;
        const m = new ReadableStream({ start(f) {
          A();
          function A() {
            u.read().then(({ done: E, value: S }) => {
              if (E) f.close();
              else {
                _ += S.byteLength;
                const I = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: p });
                for (let b = 0, w = h.length; b < w; b++) {
                  const N = h[b];
                  N.onProgress && N.onProgress(I);
                }
                f.enqueue(S), A();
              }
            }, (E) => {
              f.error(E);
            });
          }
        } });
        return new Response(m);
      } else throw new Fl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
    }).then((c) => {
      switch (l) {
        case "arraybuffer":
          return c.arrayBuffer();
        case "blob":
          return c.blob();
        case "document":
          return c.text().then((h) => new DOMParser().parseFromString(h, o));
        case "json":
          return c.json();
        default:
          if (o === void 0) return c.text();
          {
            const u = /charset="?([^;"\s]*)"?/i.exec(o), d = u && u[1] ? u[1].toLowerCase() : void 0, p = new TextDecoder(d);
            return c.arrayBuffer().then((g) => p.decode(g));
          }
      }
    }).then((c) => {
      _n.add(e, c);
      const h = an[e];
      delete an[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const h = an[e];
      if (h === void 0) throw this.manager.itemError(e), c;
      delete an[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onError && p.onError(c);
      }
      this.manager.itemError(e);
    }).finally(() => {
      this.manager.itemEnd(e);
    }), this.manager.itemStart(e);
  }
  setResponseType(e) {
    return this.responseType = e, this;
  }
  setMimeType(e) {
    return this.mimeType = e, this;
  }
}
class Ol extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = _n.get(e);
    if (a !== void 0) return s.manager.itemStart(e), setTimeout(function() {
      t && t(a), s.manager.itemEnd(e);
    }, 0), a;
    const o = Ri("img");
    function l() {
      h(), _n.add(e, this), t && t(this), s.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), s.manager.itemError(e), s.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, false), o.removeEventListener("error", c, false);
    }
    return o.addEventListener("load", l, false), o.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), s.manager.itemStart(e), o.src = e, o;
  }
}
class Bl extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = new pt(), a = new Ol(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      s.image = o, s.needsUpdate = true, t !== void 0 && t(s);
    }, n, i), s;
  }
}
class Di extends tt {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new Ee(e), this.intensity = t;
  }
  dispose() {
  }
  copy(e, t) {
    return super.copy(e, t), this.color.copy(e.color), this.intensity = e.intensity, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.color = this.color.getHex(), t.object.intensity = this.intensity, this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()), this.distance !== void 0 && (t.object.distance = this.distance), this.angle !== void 0 && (t.object.angle = this.angle), this.decay !== void 0 && (t.object.decay = this.decay), this.penumbra !== void 0 && (t.object.penumbra = this.penumbra), this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()), this.target !== void 0 && (t.object.target = this.target.uuid), t;
  }
}
class Rp extends Di {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(tt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new Ee(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const zr = new Ce(), oa = new L(), la = new L();
class ps {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new Be(512, 512), this.map = null, this.mapPass = null, this.matrix = new Ce(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new hs(), this._frameExtents = new Be(1, 1), this._viewportCount = 1, this._viewports = [new Ye(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    oa.setFromMatrixPosition(e.matrixWorld), t.position.copy(oa), la.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(la), t.updateMatrixWorld(), zr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(zr), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(zr);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return this.camera = e.camera.clone(), this.intensity = e.intensity, this.bias = e.bias, this.radius = e.radius, this.mapSize.copy(e.mapSize), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return this.intensity !== 1 && (e.intensity = this.intensity), this.bias !== 0 && (e.bias = this.bias), this.normalBias !== 0 && (e.normalBias = this.normalBias), this.radius !== 1 && (e.radius = this.radius), (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()), e.camera = this.camera.toJSON(false).object, delete e.camera.matrix, e;
  }
}
class Gl extends ps {
  constructor() {
    super(new bt(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = ri * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, s = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n, t.aspect = i, t.far = s, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class kl extends Di {
  constructor(e, t, n = 0, i = Math.PI / 3, s = 0, a = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(tt.DEFAULT_UP), this.updateMatrix(), this.target = new tt(), this.distance = n, this.angle = i, this.penumbra = s, this.decay = a, this.map = null, this.shadow = new Gl();
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.angle = e.angle, this.penumbra = e.penumbra, this.decay = e.decay, this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
const ca = new Ce(), Si = new L(), Vr = new L();
class Hl extends ps {
  constructor() {
    super(new bt(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new Be(4, 2), this._viewportCount = 6, this._viewports = [new Ye(2, 1, 1, 1), new Ye(0, 1, 1, 1), new Ye(3, 1, 1, 1), new Ye(1, 1, 1, 1), new Ye(3, 0, 1, 1), new Ye(1, 0, 1, 1)], this._cubeDirections = [new L(1, 0, 0), new L(-1, 0, 0), new L(0, 0, 1), new L(0, 0, -1), new L(0, 1, 0), new L(0, -1, 0)], this._cubeUps = [new L(0, 1, 0), new L(0, 1, 0), new L(0, 1, 0), new L(0, 1, 0), new L(0, 0, 1), new L(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, s = e.distance || n.far;
    s !== n.far && (n.far = s, n.updateProjectionMatrix()), Si.setFromMatrixPosition(e.matrixWorld), n.position.copy(Si), Vr.copy(n.position), Vr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Vr), n.updateMatrixWorld(), i.makeTranslation(-Si.x, -Si.y, -Si.z), ca.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ca);
  }
}
class zl extends Di {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Hl();
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return super.copy(e, t), this.distance = e.distance, this.decay = e.decay, this.shadow = e.shadow.clone(), this;
  }
}
class ms extends eo {
  constructor(e = -1, t = 1, n = 1, i = -1, s = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = s, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, s, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = s, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let s = n - e, a = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      s += c * this.view.offsetX, a = s + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class Vl extends ps {
  constructor() {
    super(new ms(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class Wl extends Di {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(tt.DEFAULT_UP), this.updateMatrix(), this.target = new tt(), this.shadow = new Vl();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class wp extends Di {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class bi {
  static decodeText(e) {
    if (console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."), typeof TextDecoder < "u") return new TextDecoder().decode(e);
    let t = "";
    for (let n = 0, i = e.length; n < i; n++) t += String.fromCharCode(e[n]);
    try {
      return decodeURIComponent(escape(t));
    } catch {
      return t;
    }
  }
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")), /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e);
  }
}
class Xl extends Bn {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const s = this, a = _n.get(e);
    if (a !== void 0) {
      if (s.manager.itemStart(e), a.then) {
        a.then((c) => {
          t && t(c), s.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), s.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const l = fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(s.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return _n.add(e, c), t && t(c), s.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), _n.remove(e), s.manager.itemError(e), s.manager.itemEnd(e);
    });
    _n.add(e, l), s.manager.itemStart(e);
  }
}
let sr;
class lo {
  static getContext() {
    return sr === void 0 && (sr = new (window.AudioContext || window.webkitAudioContext)()), sr;
  }
  static setContext(e) {
    sr = e;
  }
}
class Cp extends Bn {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const s = this, a = new fs(this.manager);
    a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(l) {
      try {
        const c = l.slice(0);
        lo.getContext().decodeAudioData(c, function(u) {
          t(u);
        }).catch(o);
      } catch (c) {
        o(c);
      }
    }, n, i);
    function o(l) {
      i ? i(l) : console.error(l), s.manager.itemError(e);
    }
  }
}
class ql extends bt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e;
  }
}
class Yl {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = ha(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
  }
  stop() {
    this.getElapsedTime(), this.running = false, this.autoStart = false;
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = ha();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function ha() {
  return performance.now();
}
const An = new L(), ua = new jt(), Kl = new L(), bn = new L();
class Pp extends tt {
  constructor() {
    super(), this.type = "AudioListener", this.context = lo.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new Yl();
  }
  getInput() {
    return this.gain;
  }
  removeFilter() {
    return this.filter !== null && (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination), this.gain.connect(this.context.destination), this.filter = null), this;
  }
  getFilter() {
    return this.filter;
  }
  setFilter(e) {
    return this.filter !== null ? (this.gain.disconnect(this.filter), this.filter.disconnect(this.context.destination)) : this.gain.disconnect(this.context.destination), this.filter = e, this.gain.connect(this.filter), this.filter.connect(this.context.destination), this;
  }
  getMasterVolume() {
    return this.gain.gain.value;
  }
  setMasterVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e);
    const t = this.context.listener, n = this.up;
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(An, ua, Kl), bn.set(0, 0, -1).applyQuaternion(ua), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(An.x, i), t.positionY.linearRampToValueAtTime(An.y, i), t.positionZ.linearRampToValueAtTime(An.z, i), t.forwardX.linearRampToValueAtTime(bn.x, i), t.forwardY.linearRampToValueAtTime(bn.y, i), t.forwardZ.linearRampToValueAtTime(bn.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
    } else t.setPosition(An.x, An.y, An.z), t.setOrientation(bn.x, bn.y, bn.z, n.x, n.y, n.z);
  }
}
class jl extends tt {
  constructor(e) {
    super(), this.type = "Audio", this.listener = e, this.context = e.context, this.gain = this.context.createGain(), this.gain.connect(e.getInput()), this.autoplay = false, this.buffer = null, this.detune = 0, this.loop = false, this.loopStart = 0, this.loopEnd = 0, this.offset = 0, this.duration = void 0, this.playbackRate = 1, this.isPlaying = false, this.hasPlaybackControl = true, this.source = null, this.sourceType = "empty", this._startedAt = 0, this._progress = 0, this._connected = false, this.filters = [];
  }
  getOutput() {
    return this.gain;
  }
  setNodeSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "audioNode", this.source = e, this.connect(), this;
  }
  setMediaElementSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaNode", this.source = this.context.createMediaElementSource(e), this.connect(), this;
  }
  setMediaStreamSource(e) {
    return this.hasPlaybackControl = false, this.sourceType = "mediaStreamNode", this.source = this.context.createMediaStreamSource(e), this.connect(), this;
  }
  setBuffer(e) {
    return this.buffer = e, this.sourceType = "buffer", this.autoplay && this.play(), this;
  }
  play(e = 0) {
    if (this.isPlaying === true) {
      console.warn("THREE.Audio: Audio is already playing.");
      return;
    }
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    this._startedAt = this.context.currentTime + e;
    const t = this.context.createBufferSource();
    return t.buffer = this.buffer, t.loop = this.loop, t.loopStart = this.loopStart, t.loopEnd = this.loopEnd, t.onended = this.onEnded.bind(this), t.start(this._startedAt, this._progress + this.offset, this.duration), this.isPlaying = true, this.source = t, this.setDetune(this.detune), this.setPlaybackRate(this.playbackRate), this.connect();
  }
  pause() {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.isPlaying === true && (this._progress += Math.max(this.context.currentTime - this._startedAt, 0) * this.playbackRate, this.loop === true && (this._progress = this._progress % (this.duration || this.buffer.duration)), this.source.stop(), this.source.onended = null, this.isPlaying = false), this;
  }
  stop(e = 0) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this._progress = 0, this.source !== null && (this.source.stop(this.context.currentTime + e), this.source.onended = null), this.isPlaying = false, this;
  }
  connect() {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].connect(this.filters[e]);
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else this.source.connect(this.getOutput());
    return this._connected = true, this;
  }
  disconnect() {
    if (this._connected !== false) {
      if (this.filters.length > 0) {
        this.source.disconnect(this.filters[0]);
        for (let e = 1, t = this.filters.length; e < t; e++) this.filters[e - 1].disconnect(this.filters[e]);
        this.filters[this.filters.length - 1].disconnect(this.getOutput());
      } else this.source.disconnect(this.getOutput());
      return this._connected = false, this;
    }
  }
  getFilters() {
    return this.filters;
  }
  setFilters(e) {
    return e || (e = []), this._connected === true ? (this.disconnect(), this.filters = e.slice(), this.connect()) : this.filters = e.slice(), this;
  }
  setDetune(e) {
    return this.detune = e, this.isPlaying === true && this.source.detune !== void 0 && this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01), this;
  }
  getDetune() {
    return this.detune;
  }
  getFilter() {
    return this.getFilters()[0];
  }
  setFilter(e) {
    return this.setFilters(e ? [e] : []);
  }
  setPlaybackRate(e) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.playbackRate = e, this.isPlaying === true && this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01), this;
  }
  getPlaybackRate() {
    return this.playbackRate;
  }
  onEnded() {
    this.isPlaying = false, this._progress = 0;
  }
  getLoop() {
    return this.hasPlaybackControl === false ? (console.warn("THREE.Audio: this Audio has no playback control."), false) : this.loop;
  }
  setLoop(e) {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return;
    }
    return this.loop = e, this.isPlaying === true && (this.source.loop = this.loop), this;
  }
  setLoopStart(e) {
    return this.loopStart = e, this;
  }
  setLoopEnd(e) {
    return this.loopEnd = e, this;
  }
  getVolume() {
    return this.gain.gain.value;
  }
  setVolume(e) {
    return this.gain.gain.setTargetAtTime(e, this.context.currentTime, 0.01), this;
  }
  copy(e, t) {
    return super.copy(e, t), e.sourceType !== "buffer" ? (console.warn("THREE.Audio: Audio source type cannot be copied."), this) : (this.autoplay = e.autoplay, this.buffer = e.buffer, this.detune = e.detune, this.loop = e.loop, this.loopStart = e.loopStart, this.loopEnd = e.loopEnd, this.offset = e.offset, this.duration = e.duration, this.playbackRate = e.playbackRate, this.hasPlaybackControl = e.hasPlaybackControl, this.sourceType = e.sourceType, this.filters = e.filters.slice(), this);
  }
  clone(e) {
    return new this.constructor(this.listener).copy(this, e);
  }
}
const Rn = new L(), da = new jt(), Zl = new L(), wn = new L();
class Lp extends jl {
  constructor(e) {
    super(e), this.panner = this.context.createPanner(), this.panner.panningModel = "HRTF", this.panner.connect(this.gain);
  }
  connect() {
    super.connect(), this.panner.connect(this.gain);
  }
  disconnect() {
    super.disconnect(), this.panner.disconnect(this.gain);
  }
  getOutput() {
    return this.panner;
  }
  getRefDistance() {
    return this.panner.refDistance;
  }
  setRefDistance(e) {
    return this.panner.refDistance = e, this;
  }
  getRolloffFactor() {
    return this.panner.rolloffFactor;
  }
  setRolloffFactor(e) {
    return this.panner.rolloffFactor = e, this;
  }
  getDistanceModel() {
    return this.panner.distanceModel;
  }
  setDistanceModel(e) {
    return this.panner.distanceModel = e, this;
  }
  getMaxDistance() {
    return this.panner.maxDistance;
  }
  setMaxDistance(e) {
    return this.panner.maxDistance = e, this;
  }
  setDirectionalCone(e, t, n) {
    return this.panner.coneInnerAngle = e, this.panner.coneOuterAngle = t, this.panner.coneOuterGain = n, this;
  }
  updateMatrixWorld(e) {
    if (super.updateMatrixWorld(e), this.hasPlaybackControl === true && this.isPlaying === false) return;
    this.matrixWorld.decompose(Rn, da, Zl), wn.set(0, 0, 1).applyQuaternion(da);
    const t = this.panner;
    if (t.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(Rn.x, n), t.positionY.linearRampToValueAtTime(Rn.y, n), t.positionZ.linearRampToValueAtTime(Rn.z, n), t.orientationX.linearRampToValueAtTime(wn.x, n), t.orientationY.linearRampToValueAtTime(wn.y, n), t.orientationZ.linearRampToValueAtTime(wn.z, n);
    } else t.setPosition(Rn.x, Rn.y, Rn.z), t.setOrientation(wn.x, wn.y, wn.z);
  }
}
const gs = "\\[\\]\\.:\\/", $l = new RegExp("[" + gs + "]", "g"), _s = "[^" + gs + "]", Jl = "[^" + gs.replace("\\.", "") + "]", Ql = /((?:WC+[\/:])*)/.source.replace("WC", _s), ec = /(WCOD+)?/.source.replace("WCOD", Jl), tc = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", _s), nc = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", _s), ic = new RegExp("^" + Ql + ec + tc + nc + "$"), rc = ["material", "materials", "bones", "map"];
class sc {
  constructor(e, t, n) {
    const i = n || Je.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i) n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t) e[t].unbind();
  }
}
class Je {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Je.parseTrackName(t), this.node = Je.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Je.Composite(e, t, n) : new Je(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace($l, "");
  }
  static parseTrackName(e) {
    const t = ic.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const s = n.nodeName.substring(i + 1);
      rc.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = s);
    }
    if (n.propertyName === null || n.propertyName.length === 0) throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
    return n;
  }
  static findNode(e, t) {
    if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid) return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function(s) {
        for (let a = 0; a < s.length; a++) {
          const o = s[a];
          if (o.name === t || o.uuid === t) return o;
          const l = n(o.children);
          if (l) return l;
        }
        return null;
      }, i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {
  }
  _setValue_unavailable() {
  }
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    this.targetObject[this.propertyName] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, s = n.length; i !== s; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.needsUpdate = true;
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t], this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.needsUpdate = true;
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    this.resolvedProperty.fromArray(e, t), this.targetObject.matrixWorldNeedsUpdate = true;
  }
  _getValue_unbound(e, t) {
    this.bind(), this.getValue(e, t);
  }
  _setValue_unbound(e, t) {
    this.bind(), this.setValue(e, t);
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath, n = t.objectName, i = t.propertyName;
    let s = t.propertyIndex;
    if (e || (e = Je.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
      console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.materials) {
            console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++) if (e[h].name === c) {
            c = h;
            break;
          }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
            return;
          }
          if (!e.material.map) {
            console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error("THREE.PropertyBinding: Trying to update property for track: " + c + "." + i + " but it wasn't found.", e);
      return;
    }
    let o = this.Versioning.None;
    this.targetObject = e, e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
    let l = this.BindingType.Direct;
    if (s !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = s;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Je.Composite = sc;
Je.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
Je.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
Je.prototype.GetterByBindingType = [Je.prototype._getValue_direct, Je.prototype._getValue_array, Je.prototype._getValue_arrayElement, Je.prototype._getValue_toArray];
Je.prototype.SetterByBindingTypeAndVersioning = [[Je.prototype._setValue_direct, Je.prototype._setValue_direct_setNeedsUpdate, Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Je.prototype._setValue_array, Je.prototype._setValue_array_setNeedsUpdate, Je.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Je.prototype._setValue_arrayElement, Je.prototype._setValue_arrayElement_setNeedsUpdate, Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Je.prototype._setValue_fromArray, Je.prototype._setValue_fromArray_setNeedsUpdate, Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
const fa = new Ce();
class Dp {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Ci(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new os(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return fa.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(fa), this;
  }
  intersectObject(e, t = true, n = []) {
    return ns(e, this, n, t), n.sort(pa), n;
  }
  intersectObjects(e, t = true, n = []) {
    for (let i = 0, s = e.length; i < s; i++) ns(e[i], this, n, t);
    return n.sort(pa), n;
  }
}
function pa(r, e) {
  return r.distance - e.distance;
}
function ns(r, e, t, n) {
  let i = true;
  if (r.layers.test(e.layers) && r.raycast(e, t) === false && (i = false), i === true && n === true) {
    const s = r.children;
    for (let a = 0, o = s.length; a < o; a++) ns(s[a], e, t, true);
  }
}
const ma = new L(), ar = new L(), ga = new L();
class Ip extends tt {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = n, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let i = new Ft();
    i.setAttribute("position", new qt([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
    const s = new us({ fog: false, toneMapped: false });
    this.lightPlane = new wi(i, s), this.add(this.lightPlane), i = new Ft(), i.setAttribute("position", new qt([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new wi(i, s), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.light.target.updateWorldMatrix(true, false), ma.setFromMatrixPosition(this.light.matrixWorld), ar.setFromMatrixPosition(this.light.target.matrixWorld), ga.subVectors(ar, ma), this.lightPlane.lookAt(ar), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(ar), this.targetLine.scale.z = ga.length();
  }
}
function _a(r, e, t, n) {
  const i = ac(n);
  switch (t) {
    case 1021:
      return r * e;
    case 1024:
      return r * e;
    case 1025:
      return r * e * 2;
    case 1028:
      return r * e / i.components * i.byteLength;
    case 1029:
      return r * e / i.components * i.byteLength;
    case 1030:
      return r * e * 2 / i.components * i.byteLength;
    case 1031:
      return r * e * 2 / i.components * i.byteLength;
    case 1022:
      return r * e * 3 / i.components * i.byteLength;
    case 1023:
      return r * e * 4 / i.components * i.byteLength;
    case 1033:
      return r * e * 4 / i.components * i.byteLength;
    case 33776:
    case 33777:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 33778:
    case 33779:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 35841:
    case 35843:
      return Math.max(r, 16) * Math.max(e, 8) / 4;
    case 35840:
    case 35842:
      return Math.max(r, 8) * Math.max(e, 8) / 2;
    case 36196:
    case 37492:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case 37496:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37808:
      return Math.floor((r + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case 37809:
      return Math.floor((r + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case 37810:
      return Math.floor((r + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case 37811:
      return Math.floor((r + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case 37812:
      return Math.floor((r + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case 37813:
      return Math.floor((r + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case 37814:
      return Math.floor((r + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case 37815:
      return Math.floor((r + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case 37816:
      return Math.floor((r + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case 37817:
      return Math.floor((r + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case 37818:
      return Math.floor((r + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case 37819:
      return Math.floor((r + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case 37820:
      return Math.floor((r + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case 37821:
      return Math.floor((r + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case 36492:
    case 36494:
    case 36495:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
    case 36283:
    case 36284:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 8;
    case 36285:
    case 36286:
      return Math.ceil(r / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function ac(r) {
  switch (r) {
    case 1009:
    case 1010:
      return { byteLength: 1, components: 1 };
    case 1012:
    case 1011:
    case 1016:
      return { byteLength: 2, components: 1 };
    case 1017:
    case 1018:
      return { byteLength: 2, components: 4 };
    case 1014:
    case 1013:
    case 1015:
      return { byteLength: 4, components: 1 };
    case 35902:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${r}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "171" } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "171");
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function co() {
  let r = null, e = false, t = null, n = null;
  function i(s, a) {
    t(s, a), n = r.requestAnimationFrame(i);
  }
  return { start: function() {
    e !== true && t !== null && (n = r.requestAnimationFrame(i), e = true);
  }, stop: function() {
    r.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(s) {
    t = s;
  }, setContext: function(s) {
    r = s;
  } };
}
function oc(r) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, d = r.createBuffer();
    r.bindBuffer(l, d), r.bufferData(l, c, h), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array) p = r.FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? p = r.HALF_FLOAT : p = r.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) p = r.SHORT;
    else if (c instanceof Uint32Array) p = r.UNSIGNED_INT;
    else if (c instanceof Int32Array) p = r.INT;
    else if (c instanceof Int8Array) p = r.BYTE;
    else if (c instanceof Uint8Array) p = r.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) p = r.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: p, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function n(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (r.bindBuffer(c, o), u.length === 0) r.bufferSubData(c, 0, h);
    else {
      u.sort((p, g) => p.start - g.start);
      let d = 0;
      for (let p = 1; p < u.length; p++) {
        const g = u[d], _ = u[p];
        _.start <= g.start + g.count + 1 ? g.count = Math.max(g.count, _.start + _.count - g.start) : (++d, u[d] = _);
      }
      u.length = d + 1;
      for (let p = 0, g = u.length; p < g; p++) {
        const _ = u[p];
        r.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function s(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (r.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute) {
      const h = e.get(o);
      (!h || h.version < o.version) && e.set(o, { buffer: o.buffer, type: o.type, bytesPerElement: o.elementSize, version: o.version });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength) throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
      n(c.buffer, o, l), c.version = o.version;
    }
  }
  return { get: i, remove: s, update: a };
}
var lc = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, cc = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`, hc = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, uc = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, dc = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, fc = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, pc = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`, mc = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, gc = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`, _c = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, xc = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, vc = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, Mc = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`, Sc = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`, yc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`, Tc = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`, Ec = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Ac = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, bc = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Rc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, wc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Cc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Pc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`, Lc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`, Dc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`, Ic = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`, Uc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, Nc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Fc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Oc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Bc = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Gc = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, kc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`, Hc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, zc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`, Vc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Wc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`, Xc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, qc = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Yc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Kc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, jc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`, Zc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, $c = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, Jc = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, Qc = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`, eh = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`, th = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, nh = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, ih = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, rh = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, sh = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`, ah = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`, oh = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`, lh = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`, ch = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, hh = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, uh = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, dh = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, fh = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, ph = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, mh = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, gh = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`, _h = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, xh = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, vh = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Mh = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, Sh = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, yh = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Th = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`, Eh = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Ah = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`, bh = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`, Rh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, wh = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Ch = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ph = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`, Lh = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Dh = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, Ih = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, Uh = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Nh = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Fh = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`, Oh = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Bh = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Gh = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, kh = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, Hh = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, zh = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Vh = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`, Wh = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`, Xh = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`, qh = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`, Yh = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, Kh = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`, jh = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, Zh = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`, $h = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, Jh = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, Qh = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, eu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`, tu = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`, nu = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`, iu = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, ru = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`, su = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`, au = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const ou = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, lu = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, cu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, hu = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, uu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, du = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, fu = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`, pu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`, mu = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`, gu = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`, _u = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, xu = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vu = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, Mu = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Su = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`, yu = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Tu = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Eu = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Au = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`, bu = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Ru = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`, wu = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`, Cu = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Pu = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Lu = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`, Du = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Iu = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Uu = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`, Nu = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`, Fu = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`, Ou = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`, Bu = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Gu = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`, ku = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`, Ie = { alphahash_fragment: lc, alphahash_pars_fragment: cc, alphamap_fragment: hc, alphamap_pars_fragment: uc, alphatest_fragment: dc, alphatest_pars_fragment: fc, aomap_fragment: pc, aomap_pars_fragment: mc, batching_pars_vertex: gc, batching_vertex: _c, begin_vertex: xc, beginnormal_vertex: vc, bsdfs: Mc, iridescence_fragment: Sc, bumpmap_pars_fragment: yc, clipping_planes_fragment: Tc, clipping_planes_pars_fragment: Ec, clipping_planes_pars_vertex: Ac, clipping_planes_vertex: bc, color_fragment: Rc, color_pars_fragment: wc, color_pars_vertex: Cc, color_vertex: Pc, common: Lc, cube_uv_reflection_fragment: Dc, defaultnormal_vertex: Ic, displacementmap_pars_vertex: Uc, displacementmap_vertex: Nc, emissivemap_fragment: Fc, emissivemap_pars_fragment: Oc, colorspace_fragment: Bc, colorspace_pars_fragment: Gc, envmap_fragment: kc, envmap_common_pars_fragment: Hc, envmap_pars_fragment: zc, envmap_pars_vertex: Vc, envmap_physical_pars_fragment: eh, envmap_vertex: Wc, fog_vertex: Xc, fog_pars_vertex: qc, fog_fragment: Yc, fog_pars_fragment: Kc, gradientmap_pars_fragment: jc, lightmap_pars_fragment: Zc, lights_lambert_fragment: $c, lights_lambert_pars_fragment: Jc, lights_pars_begin: Qc, lights_toon_fragment: th, lights_toon_pars_fragment: nh, lights_phong_fragment: ih, lights_phong_pars_fragment: rh, lights_physical_fragment: sh, lights_physical_pars_fragment: ah, lights_fragment_begin: oh, lights_fragment_maps: lh, lights_fragment_end: ch, logdepthbuf_fragment: hh, logdepthbuf_pars_fragment: uh, logdepthbuf_pars_vertex: dh, logdepthbuf_vertex: fh, map_fragment: ph, map_pars_fragment: mh, map_particle_fragment: gh, map_particle_pars_fragment: _h, metalnessmap_fragment: xh, metalnessmap_pars_fragment: vh, morphinstance_vertex: Mh, morphcolor_vertex: Sh, morphnormal_vertex: yh, morphtarget_pars_vertex: Th, morphtarget_vertex: Eh, normal_fragment_begin: Ah, normal_fragment_maps: bh, normal_pars_fragment: Rh, normal_pars_vertex: wh, normal_vertex: Ch, normalmap_pars_fragment: Ph, clearcoat_normal_fragment_begin: Lh, clearcoat_normal_fragment_maps: Dh, clearcoat_pars_fragment: Ih, iridescence_pars_fragment: Uh, opaque_fragment: Nh, packing: Fh, premultiplied_alpha_fragment: Oh, project_vertex: Bh, dithering_fragment: Gh, dithering_pars_fragment: kh, roughnessmap_fragment: Hh, roughnessmap_pars_fragment: zh, shadowmap_pars_fragment: Vh, shadowmap_pars_vertex: Wh, shadowmap_vertex: Xh, shadowmask_pars_fragment: qh, skinbase_vertex: Yh, skinning_pars_vertex: Kh, skinning_vertex: jh, skinnormal_vertex: Zh, specularmap_fragment: $h, specularmap_pars_fragment: Jh, tonemapping_fragment: Qh, tonemapping_pars_fragment: eu, transmission_fragment: tu, transmission_pars_fragment: nu, uv_pars_fragment: iu, uv_pars_vertex: ru, uv_vertex: su, worldpos_vertex: au, background_vert: ou, background_frag: lu, backgroundCube_vert: cu, backgroundCube_frag: hu, cube_vert: uu, cube_frag: du, depth_vert: fu, depth_frag: pu, distanceRGBA_vert: mu, distanceRGBA_frag: gu, equirect_vert: _u, equirect_frag: xu, linedashed_vert: vu, linedashed_frag: Mu, meshbasic_vert: Su, meshbasic_frag: yu, meshlambert_vert: Tu, meshlambert_frag: Eu, meshmatcap_vert: Au, meshmatcap_frag: bu, meshnormal_vert: Ru, meshnormal_frag: wu, meshphong_vert: Cu, meshphong_frag: Pu, meshphysical_vert: Lu, meshphysical_frag: Du, meshtoon_vert: Iu, meshtoon_frag: Uu, points_vert: Nu, points_frag: Fu, shadow_vert: Ou, shadow_frag: Bu, sprite_vert: Gu, sprite_frag: ku }, te = { common: { diffuse: { value: new Ee(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new Le() }, alphaMap: { value: null }, alphaMapTransform: { value: new Le() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Le() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new Le() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new Le() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new Le() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new Le() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new Le() }, normalScale: { value: new Be(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new Le() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Le() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Le() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Le() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new Ee(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new Ee(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new Le() }, alphaTest: { value: 0 }, uvTransform: { value: new Le() } }, sprite: { diffuse: { value: new Ee(16777215) }, opacity: { value: 1 }, center: { value: new Be(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new Le() }, alphaMap: { value: null }, alphaMapTransform: { value: new Le() }, alphaTest: { value: 0 } } }, Kt = { basic: { uniforms: yt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.fog]), vertexShader: Ie.meshbasic_vert, fragmentShader: Ie.meshbasic_frag }, lambert: { uniforms: yt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.fog, te.lights, { emissive: { value: new Ee(0) } }]), vertexShader: Ie.meshlambert_vert, fragmentShader: Ie.meshlambert_frag }, phong: { uniforms: yt([te.common, te.specularmap, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.fog, te.lights, { emissive: { value: new Ee(0) }, specular: { value: new Ee(1118481) }, shininess: { value: 30 } }]), vertexShader: Ie.meshphong_vert, fragmentShader: Ie.meshphong_frag }, standard: { uniforms: yt([te.common, te.envmap, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.roughnessmap, te.metalnessmap, te.fog, te.lights, { emissive: { value: new Ee(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ie.meshphysical_vert, fragmentShader: Ie.meshphysical_frag }, toon: { uniforms: yt([te.common, te.aomap, te.lightmap, te.emissivemap, te.bumpmap, te.normalmap, te.displacementmap, te.gradientmap, te.fog, te.lights, { emissive: { value: new Ee(0) } }]), vertexShader: Ie.meshtoon_vert, fragmentShader: Ie.meshtoon_frag }, matcap: { uniforms: yt([te.common, te.bumpmap, te.normalmap, te.displacementmap, te.fog, { matcap: { value: null } }]), vertexShader: Ie.meshmatcap_vert, fragmentShader: Ie.meshmatcap_frag }, points: { uniforms: yt([te.points, te.fog]), vertexShader: Ie.points_vert, fragmentShader: Ie.points_frag }, dashed: { uniforms: yt([te.common, te.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ie.linedashed_vert, fragmentShader: Ie.linedashed_frag }, depth: { uniforms: yt([te.common, te.displacementmap]), vertexShader: Ie.depth_vert, fragmentShader: Ie.depth_frag }, normal: { uniforms: yt([te.common, te.bumpmap, te.normalmap, te.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ie.meshnormal_vert, fragmentShader: Ie.meshnormal_frag }, sprite: { uniforms: yt([te.sprite, te.fog]), vertexShader: Ie.sprite_vert, fragmentShader: Ie.sprite_frag }, background: { uniforms: { uvTransform: { value: new Le() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ie.background_vert, fragmentShader: Ie.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new Le() } }, vertexShader: Ie.backgroundCube_vert, fragmentShader: Ie.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ie.cube_vert, fragmentShader: Ie.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ie.equirect_vert, fragmentShader: Ie.equirect_frag }, distanceRGBA: { uniforms: yt([te.common, te.displacementmap, { referencePosition: { value: new L() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ie.distanceRGBA_vert, fragmentShader: Ie.distanceRGBA_frag }, shadow: { uniforms: yt([te.lights, te.fog, { color: { value: new Ee(0) }, opacity: { value: 1 } }]), vertexShader: Ie.shadow_vert, fragmentShader: Ie.shadow_frag } };
Kt.physical = { uniforms: yt([Kt.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new Le() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new Le() }, clearcoatNormalScale: { value: new Be(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new Le() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new Le() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new Le() }, sheen: { value: 0 }, sheenColor: { value: new Ee(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new Le() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new Le() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new Le() }, transmissionSamplerSize: { value: new Be() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new Le() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new Ee(0) }, specularColor: { value: new Ee(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new Le() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new Le() }, anisotropyVector: { value: new Be() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new Le() } }]), vertexShader: Ie.meshphysical_vert, fragmentShader: Ie.meshphysical_frag };
const or = { r: 0, b: 0, g: 0 }, Cn = new Yt(), Hu = new Ce();
function zu(r, e, t, n, i, s, a) {
  const o = new Ee(0);
  let l = s === true ? 0 : 1, c, h, u = null, d = 0, p = null;
  function g(E) {
    let S = E.isScene === true ? E.background : null;
    return S && S.isTexture && (S = (E.backgroundBlurriness > 0 ? t : e).get(S)), S;
  }
  function _(E) {
    let S = false;
    const I = g(E);
    I === null ? f(o, l) : I && I.isColor && (f(I, 1), S = true);
    const b = r.xr.getEnvironmentBlendMode();
    b === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : b === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (r.autoClear || S) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil));
  }
  function m(E, S) {
    const I = g(S);
    I && (I.isCubeTexture || I.mapping === 306) ? (h === void 0 && (h = new Pt(new Pi(1, 1, 1), new xn({ name: "BackgroundCubeMaterial", uniforms: si(Kt.backgroundCube.uniforms), vertexShader: Kt.backgroundCube.vertexShader, fragmentShader: Kt.backgroundCube.fragmentShader, side: 1, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(b, w, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(h)), Cn.copy(S.backgroundRotation), Cn.x *= -1, Cn.y *= -1, Cn.z *= -1, I.isCubeTexture && I.isRenderTargetTexture === false && (Cn.y *= -1, Cn.z *= -1), h.material.uniforms.envMap.value = I, h.material.uniforms.flipEnvMap.value = I.isCubeTexture && I.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = S.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(Hu.makeRotationFromEuler(Cn)), h.material.toneMapped = ze.getTransfer(I.colorSpace) !== Qe, (u !== I || d !== I.version || p !== r.toneMapping) && (h.material.needsUpdate = true, u = I, d = I.version, p = r.toneMapping), h.layers.enableAll(), E.unshift(h, h.geometry, h.material, 0, 0, null)) : I && I.isTexture && (c === void 0 && (c = new Pt(new mr(2, 2), new xn({ name: "BackgroundMaterial", uniforms: si(Kt.background.uniforms), vertexShader: Kt.background.vertexShader, fragmentShader: Kt.background.fragmentShader, side: 0, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = I, c.material.uniforms.backgroundIntensity.value = S.backgroundIntensity, c.material.toneMapped = ze.getTransfer(I.colorSpace) !== Qe, I.matrixAutoUpdate === true && I.updateMatrix(), c.material.uniforms.uvTransform.value.copy(I.matrix), (u !== I || d !== I.version || p !== r.toneMapping) && (c.material.needsUpdate = true, u = I, d = I.version, p = r.toneMapping), c.layers.enableAll(), E.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function f(E, S) {
    E.getRGB(or, Qa(r)), n.buffers.color.setClear(or.r, or.g, or.b, S, a);
  }
  function A() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose()), c !== void 0 && (c.geometry.dispose(), c.material.dispose());
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(E, S = 1) {
    o.set(E), l = S, f(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(E) {
    l = E, f(o, l);
  }, render: _, addToRenderList: m, dispose: A };
}
function Vu(r, e) {
  const t = r.getParameter(r.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let s = i, a = false;
  function o(M, C, q, G, W) {
    let Z = false;
    const z = u(G, q, C);
    s !== z && (s = z, c(s.object)), Z = p(M, G, q, W), Z && g(M, G, q, W), W !== null && e.update(W, r.ELEMENT_ARRAY_BUFFER), (Z || a) && (a = false, S(M, C, q, G), W !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(W).buffer));
  }
  function l() {
    return r.createVertexArray();
  }
  function c(M) {
    return r.bindVertexArray(M);
  }
  function h(M) {
    return r.deleteVertexArray(M);
  }
  function u(M, C, q) {
    const G = q.wireframe === true;
    let W = n[M.id];
    W === void 0 && (W = {}, n[M.id] = W);
    let Z = W[C.id];
    Z === void 0 && (Z = {}, W[C.id] = Z);
    let z = Z[G];
    return z === void 0 && (z = d(l()), Z[G] = z), z;
  }
  function d(M) {
    const C = [], q = [], G = [];
    for (let W = 0; W < t; W++) C[W] = 0, q[W] = 0, G[W] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: C, enabledAttributes: q, attributeDivisors: G, object: M, attributes: {}, index: null };
  }
  function p(M, C, q, G) {
    const W = s.attributes, Z = C.attributes;
    let z = 0;
    const Q = q.getAttributes();
    for (const H in Q) if (Q[H].location >= 0) {
      const he = W[H];
      let _e = Z[H];
      if (_e === void 0 && (H === "instanceMatrix" && M.instanceMatrix && (_e = M.instanceMatrix), H === "instanceColor" && M.instanceColor && (_e = M.instanceColor)), he === void 0 || he.attribute !== _e || _e && he.data !== _e.data) return true;
      z++;
    }
    return s.attributesNum !== z || s.index !== G;
  }
  function g(M, C, q, G) {
    const W = {}, Z = C.attributes;
    let z = 0;
    const Q = q.getAttributes();
    for (const H in Q) if (Q[H].location >= 0) {
      let he = Z[H];
      he === void 0 && (H === "instanceMatrix" && M.instanceMatrix && (he = M.instanceMatrix), H === "instanceColor" && M.instanceColor && (he = M.instanceColor));
      const _e = {};
      _e.attribute = he, he && he.data && (_e.data = he.data), W[H] = _e, z++;
    }
    s.attributes = W, s.attributesNum = z, s.index = G;
  }
  function _() {
    const M = s.newAttributes;
    for (let C = 0, q = M.length; C < q; C++) M[C] = 0;
  }
  function m(M) {
    f(M, 0);
  }
  function f(M, C) {
    const q = s.newAttributes, G = s.enabledAttributes, W = s.attributeDivisors;
    q[M] = 1, G[M] === 0 && (r.enableVertexAttribArray(M), G[M] = 1), W[M] !== C && (r.vertexAttribDivisor(M, C), W[M] = C);
  }
  function A() {
    const M = s.newAttributes, C = s.enabledAttributes;
    for (let q = 0, G = C.length; q < G; q++) C[q] !== M[q] && (r.disableVertexAttribArray(q), C[q] = 0);
  }
  function E(M, C, q, G, W, Z, z) {
    z === true ? r.vertexAttribIPointer(M, C, q, W, Z) : r.vertexAttribPointer(M, C, q, G, W, Z);
  }
  function S(M, C, q, G) {
    _();
    const W = G.attributes, Z = q.getAttributes(), z = C.defaultAttributeValues;
    for (const Q in Z) {
      const H = Z[Q];
      if (H.location >= 0) {
        let re = W[Q];
        if (re === void 0 && (Q === "instanceMatrix" && M.instanceMatrix && (re = M.instanceMatrix), Q === "instanceColor" && M.instanceColor && (re = M.instanceColor)), re !== void 0) {
          const he = re.normalized, _e = re.itemSize, Ue = e.get(re);
          if (Ue === void 0) continue;
          const et = Ue.buffer, X = Ue.type, ee = Ue.bytesPerElement, me = X === r.INT || X === r.UNSIGNED_INT || re.gpuType === 1013;
          if (re.isInterleavedBufferAttribute) {
            const se = re.data, Te = se.stride, we = re.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let Ne = 0; Ne < H.locationSize; Ne++) f(H.location + Ne, se.meshPerAttribute);
              M.isInstancedMesh !== true && G._maxInstanceCount === void 0 && (G._maxInstanceCount = se.meshPerAttribute * se.count);
            } else for (let Ne = 0; Ne < H.locationSize; Ne++) m(H.location + Ne);
            r.bindBuffer(r.ARRAY_BUFFER, et);
            for (let Ne = 0; Ne < H.locationSize; Ne++) E(H.location + Ne, _e / H.locationSize, X, he, Te * ee, (we + _e / H.locationSize * Ne) * ee, me);
          } else {
            if (re.isInstancedBufferAttribute) {
              for (let se = 0; se < H.locationSize; se++) f(H.location + se, re.meshPerAttribute);
              M.isInstancedMesh !== true && G._maxInstanceCount === void 0 && (G._maxInstanceCount = re.meshPerAttribute * re.count);
            } else for (let se = 0; se < H.locationSize; se++) m(H.location + se);
            r.bindBuffer(r.ARRAY_BUFFER, et);
            for (let se = 0; se < H.locationSize; se++) E(H.location + se, _e / H.locationSize, X, he, _e * ee, _e / H.locationSize * se * ee, me);
          }
        } else if (z !== void 0) {
          const he = z[Q];
          if (he !== void 0) switch (he.length) {
            case 2:
              r.vertexAttrib2fv(H.location, he);
              break;
            case 3:
              r.vertexAttrib3fv(H.location, he);
              break;
            case 4:
              r.vertexAttrib4fv(H.location, he);
              break;
            default:
              r.vertexAttrib1fv(H.location, he);
          }
        }
      }
    }
    A();
  }
  function I() {
    N();
    for (const M in n) {
      const C = n[M];
      for (const q in C) {
        const G = C[q];
        for (const W in G) h(G[W].object), delete G[W];
        delete C[q];
      }
      delete n[M];
    }
  }
  function b(M) {
    if (n[M.id] === void 0) return;
    const C = n[M.id];
    for (const q in C) {
      const G = C[q];
      for (const W in G) h(G[W].object), delete G[W];
      delete C[q];
    }
    delete n[M.id];
  }
  function w(M) {
    for (const C in n) {
      const q = n[C];
      if (q[M.id] === void 0) continue;
      const G = q[M.id];
      for (const W in G) h(G[W].object), delete G[W];
      delete q[M.id];
    }
  }
  function N() {
    y(), a = true, s !== i && (s = i, c(s.object));
  }
  function y() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: o, reset: N, resetDefaultState: y, dispose: I, releaseStatesOfGeometry: b, releaseStatesOfProgram: w, initAttributes: _, enableAttribute: m, disableUnusedAttributes: A };
}
function Wu(r, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function s(c, h) {
    r.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (r.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let p = 0;
    for (let g = 0; g < u; g++) p += h[g];
    t.update(p, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const p = e.get("WEBGL_multi_draw");
    if (p === null) for (let g = 0; g < c.length; g++) a(c[g], h[g], d[g]);
    else {
      p.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++) g += h[_] * d[_];
      t.update(g, n, 1);
    }
  }
  this.setMode = i, this.render = s, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function Xu(r, e, t, n) {
  let i;
  function s() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const w = e.get("EXT_texture_filter_anisotropic");
      i = r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(w) {
    return !(w !== 1023 && n.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(w) {
    const N = w === 1016 && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(w !== 1009 && n.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && w !== 1015 && !N);
  }
  function l(w) {
    if (w === "highp") {
      if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0) return "highp";
      w = "mediump";
    }
    return w === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === true, d = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), p = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS), g = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = r.getParameter(r.MAX_TEXTURE_SIZE), m = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE), f = r.getParameter(r.MAX_VERTEX_ATTRIBS), A = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS), E = r.getParameter(r.MAX_VARYING_VECTORS), S = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS), I = g > 0, b = r.getParameter(r.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: s, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: d, maxTextures: p, maxVertexTextures: g, maxTextureSize: _, maxCubemapSize: m, maxAttributes: f, maxVertexUniforms: A, maxVaryings: E, maxFragmentUniforms: S, vertexTextures: I, maxSamples: b };
}
function qu(r) {
  const e = this;
  let t = null, n = 0, i = false, s = false;
  const a = new Dn(), o = new Le(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const p = u.length !== 0 || d || n !== 0 || i;
    return i = d, n = u.length, p;
  }, this.beginShadows = function() {
    s = true, h(null);
  }, this.endShadows = function() {
    s = false;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, p) {
    const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, f = r.get(u);
    if (!i || g === null || g.length === 0 || s && !m) s ? h(null) : c();
    else {
      const A = s ? 0 : n, E = A * 4;
      let S = f.clippingState || null;
      l.value = S, S = h(g, d, E, p);
      for (let I = 0; I !== E; ++I) S[I] = t[I];
      f.clippingState = S, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += A;
    }
  };
  function c() {
    l.value !== t && (l.value = t, l.needsUpdate = n > 0), e.numPlanes = n, e.numIntersection = 0;
  }
  function h(u, d, p, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (m = l.value, g !== true || m === null) {
        const f = p + _ * 4, A = d.matrixWorldInverse;
        o.getNormalMatrix(A), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let E = 0, S = p; E !== _; ++E, S += 4) a.copy(u[E]).applyMatrix4(A, o), a.normal.toArray(m, S), m[S + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = true;
    }
    return e.numPlanes = _, e.numIntersection = 0, m;
  }
}
function Yu(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === 303 ? a.mapping = 301 : o === 304 && (a.mapping = 302), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === 303 || o === 304) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new ul(l.height);
          return c.fromEquirectangularTexture(r, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping);
        } else return null;
      }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: s };
}
const ti = 4, xa = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], Un = 20, Wr = new ms(), va = new Ee();
let Xr = null, qr = 0, Yr = 0, Kr = false;
const In = (1 + Math.sqrt(5)) / 2, Qn = 1 / In, Ma = [new L(-In, Qn, 0), new L(In, Qn, 0), new L(-Qn, 0, In), new L(Qn, 0, In), new L(0, In, -Qn), new L(0, In, Qn), new L(-1, 1, -1), new L(1, 1, -1), new L(-1, 1, 1), new L(1, 1, 1)];
class Sa {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Xr = this._renderer.getRenderTarget(), qr = this._renderer.getActiveCubeFace(), Yr = this._renderer.getActiveMipmapLevel(), Kr = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    const s = this._allocateTargets();
    return s.depthBuffer = true, this._sceneToCubeUV(e, n, i, s), t > 0 && this._blur(s, 0, 0, t), this._applyPMREM(s), this._cleanup(s), s;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Ea(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = Ta(), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(), this._cubemapMaterial !== null && this._cubemapMaterial.dispose(), this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    this._lodMax = Math.floor(Math.log2(e)), this._cubeSize = Math.pow(2, this._lodMax);
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(), this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Xr, qr, Yr), this._renderer.xr.enabled = Kr, e.scissorTest = false, lr(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === 301 || e.mapping === 302 ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Xr = this._renderer.getRenderTarget(), qr = this._renderer.getActiveCubeFace(), Yr = this._renderer.getActiveMipmapLevel(), Kr = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: 1006, minFilter: 1006, generateMipmaps: false, type: 1016, format: 1023, colorSpace: Et, depthBuffer: false }, i = ya(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = ya(e, t, n);
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = Ku(s)), this._blurMaterial = ju(s, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Pt(this._lodPlanes[0], e);
    this._renderer.compile(t, Wr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new bt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(va), h.toneMapping = 0, h.autoClear = false;
    const p = new Nn({ name: "PMREM.Background", side: 1, depthWrite: false, depthTest: false }), g = new Pt(new Pi(), p);
    let _ = false;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, _ = true) : (p.color.copy(va), _ = true);
    for (let f = 0; f < 6; f++) {
      const A = f % 3;
      A === 0 ? (o.up.set(0, l[f], 0), o.lookAt(c[f], 0, 0)) : A === 1 ? (o.up.set(0, 0, l[f]), o.lookAt(0, c[f], 0)) : (o.up.set(0, l[f], 0), o.lookAt(0, 0, c[f]));
      const E = this._cubeSize;
      lr(i, A * E, f > 2 ? E : 0, E, E), h.setRenderTarget(i), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === 301 || e.mapping === 302;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ea()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Ta());
    const s = i ? this._cubemapMaterial : this._equirectMaterial, a = new Pt(this._lodPlanes[0], s), o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    lr(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Wr);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const i = this._lodPlanes.length;
    for (let s = 1; s < i; s++) {
      const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1]), o = Ma[(i - s - 1) % Ma.length];
      this._blur(e, s - 1, s, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", s), this._halfBlur(a, e, n, n, i, "longitudinal", s);
  }
  _halfBlur(e, t, n, i, s, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new Pt(this._lodPlanes[i], c), d = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(s) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * Un - 1), _ = s / g, m = isFinite(s) ? 1 + Math.floor(h * _) : Un;
    m > Un && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Un}`);
    const f = [];
    let A = 0;
    for (let w = 0; w < Un; ++w) {
      const N = w / _, y = Math.exp(-N * N / 2);
      f.push(y), w === 0 ? A += y : w < m && (A += 2 * y);
    }
    for (let w = 0; w < f.length; w++) f[w] = f[w] / A;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: E } = this;
    d.dTheta.value = g, d.mipInt.value = E - n;
    const S = this._sizeLods[i], I = 3 * S * (i > E - ti ? i - E + ti : 0), b = 4 * (this._cubeSize - S);
    lr(t, I, b, 3 * S, 2 * S), l.setRenderTarget(t), l.render(u, Wr);
  }
}
function Ku(r) {
  const e = [], t = [], n = [];
  let i = r;
  const s = r - ti + 1 + xa.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > r - ti ? l = xa[a - r + ti - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, g = 6, _ = 3, m = 2, f = 1, A = new Float32Array(_ * g * p), E = new Float32Array(m * g * p), S = new Float32Array(f * g * p);
    for (let b = 0; b < p; b++) {
      const w = b % 3 * 2 / 3 - 1, N = b > 2 ? 0 : -1, y = [w, N, 0, w + 2 / 3, N, 0, w + 2 / 3, N + 1, 0, w, N, 0, w + 2 / 3, N + 1, 0, w, N + 1, 0];
      A.set(y, _ * g * b), E.set(d, m * g * b);
      const M = [b, b, b, b, b, b];
      S.set(M, f * g * b);
    }
    const I = new Ft();
    I.setAttribute("position", new Tt(A, _)), I.setAttribute("uv", new Tt(E, m)), I.setAttribute("faceIndex", new Tt(S, f)), e.push(I), i > ti && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function ya(r, e, t) {
  const n = new On(r, e, t);
  return n.texture.mapping = 306, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function lr(r, e, t, n, i) {
  r.viewport.set(e, t, n, i), r.scissor.set(e, t, n, i);
}
function ju(r, e, t) {
  const n = new Float32Array(Un), i = new L(0, 1, 0);
  return new xn({ name: "SphericalGaussianBlur", defines: { n: Un, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${r}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: xs(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`, blending: 0, depthTest: false, depthWrite: false });
}
function Ta() {
  return new xn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: xs(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`, blending: 0, depthTest: false, depthWrite: false });
}
function Ea() {
  return new xn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: xs(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: 0, depthTest: false, depthWrite: false });
}
function xs() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Zu(r) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === 303 || l === 304, h = l === 301 || l === 302;
      if (c || h) {
        let u = e.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d) return t === null && (t = new Sa(r)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const p = o.image;
          return c && p && p.height > 0 || h && p && i(p) ? (t === null && (t = new Sa(r)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", s), u.texture) : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener("dispose", s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: a };
}
function $u(r) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = r.getExtension(n);
    }
    return e[n] = i, i;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const i = t(n);
    return i === null && ei("THREE.WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function Ju(r, e, t, n) {
  const i = {}, s = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes) e.remove(d.attributes[g]);
    d.removeEventListener("dispose", a), delete i[d.id];
    const p = s.get(d);
    p && (e.remove(p), s.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === true || (d.addEventListener("dispose", a), i[d.id] = true, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const p in d) e.update(d[p], r.ARRAY_BUFFER);
  }
  function c(u) {
    const d = [], p = u.index, g = u.attributes.position;
    let _ = 0;
    if (p !== null) {
      const A = p.array;
      _ = p.version;
      for (let E = 0, S = A.length; E < S; E += 3) {
        const I = A[E + 0], b = A[E + 1], w = A[E + 2];
        d.push(I, b, b, w, w, I);
      }
    } else if (g !== void 0) {
      const A = g.array;
      _ = g.version;
      for (let E = 0, S = A.length / 3 - 1; E < S; E += 3) {
        const I = E + 0, b = E + 1, w = E + 2;
        d.push(I, b, b, w, w, I);
      }
    } else return;
    const m = new (Ya(d) ? Ja : $a)(d, 1);
    m.version = _;
    const f = s.get(u);
    f && e.remove(f), s.set(u, m);
  }
  function h(u) {
    const d = s.get(u);
    if (d) {
      const p = u.index;
      p !== null && d.version < p.version && c(u);
    } else c(u);
    return s.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function Qu(r, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let s, a;
  function o(d) {
    s = d.type, a = d.bytesPerElement;
  }
  function l(d, p) {
    r.drawElements(n, p, s, d * a), t.update(p, n, 1);
  }
  function c(d, p, g) {
    g !== 0 && (r.drawElementsInstanced(n, p, s, d * a, g), t.update(p, n, g));
  }
  function h(d, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, s, d, 0, g);
    let m = 0;
    for (let f = 0; f < g; f++) m += p[f];
    t.update(m, n, 1);
  }
  function u(d, p, g, _) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let f = 0; f < d.length; f++) c(d[f] / a, p[f], _[f]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, s, d, 0, _, 0, g);
      let f = 0;
      for (let A = 0; A < g; A++) f += p[A] * _[A];
      t.update(f, n, 1);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function ed(r) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(s, a, o) {
    switch (t.calls++, a) {
      case r.TRIANGLES:
        t.triangles += o * (s / 3);
        break;
      case r.LINES:
        t.lines += o * (s / 2);
        break;
      case r.LINE_STRIP:
        t.lines += o * (s - 1);
        break;
      case r.LINE_LOOP:
        t.lines += o * s;
        break;
      case r.POINTS:
        t.points += o * s;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    t.calls = 0, t.triangles = 0, t.points = 0, t.lines = 0;
  }
  return { memory: e, render: t, programs: null, autoReset: true, reset: i, update: n };
}
function td(r, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Ye();
  function s(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let y = function() {
        w.dispose(), n.delete(o), o.removeEventListener("dispose", y);
      };
      d !== void 0 && d.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], f = o.morphAttributes.normal || [], A = o.morphAttributes.color || [];
      let E = 0;
      p === true && (E = 1), g === true && (E = 2), _ === true && (E = 3);
      let S = o.attributes.position.count * E, I = 1;
      S > e.maxTextureSize && (I = Math.ceil(S / e.maxTextureSize), S = e.maxTextureSize);
      const b = new Float32Array(S * I * 4 * u), w = new ja(b, S, I, u);
      w.type = 1015, w.needsUpdate = true;
      const N = E * 4;
      for (let M = 0; M < u; M++) {
        const C = m[M], q = f[M], G = A[M], W = S * I * 4 * M;
        for (let Z = 0; Z < C.count; Z++) {
          const z = Z * N;
          p === true && (i.fromBufferAttribute(C, Z), b[W + z + 0] = i.x, b[W + z + 1] = i.y, b[W + z + 2] = i.z, b[W + z + 3] = 0), g === true && (i.fromBufferAttribute(q, Z), b[W + z + 4] = i.x, b[W + z + 5] = i.y, b[W + z + 6] = i.z, b[W + z + 7] = 0), _ === true && (i.fromBufferAttribute(G, Z), b[W + z + 8] = i.x, b[W + z + 9] = i.y, b[W + z + 10] = i.z, b[W + z + 11] = G.itemSize === 4 ? i.w : 1);
        }
      }
      d = { count: u, texture: w, size: new Be(S, I) }, n.set(o, d), o.addEventListener("dispose", y);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(r, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let _ = 0; _ < c.length; _++) p += c[_];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(r, "morphTargetBaseInfluence", g), l.getUniforms().setValue(r, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(r, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(r, "morphTargetsTextureSize", d.size);
  }
  return { update: s };
}
function nd(r, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function s(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, r.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, r.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function a() {
    i = /* @__PURE__ */ new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener("dispose", o), t.remove(c.instanceMatrix), c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
const ho = new pt(), Aa = new so(1, 1), uo = new ja(), fo = new jo(), po = new to(), ba = [], Ra = [], wa = new Float32Array(16), Ca = new Float32Array(9), Pa = new Float32Array(4);
function di(r, e, t) {
  const n = r[0];
  if (n <= 0 || n > 0) return r;
  const i = e * t;
  let s = ba[i];
  if (s === void 0 && (s = new Float32Array(i), ba[i] = s), e !== 0) {
    n.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, r[a].toArray(s, o);
  }
  return s;
}
function ut(r, e) {
  if (r.length !== e.length) return false;
  for (let t = 0, n = r.length; t < n; t++) if (r[t] !== e[t]) return false;
  return true;
}
function dt(r, e) {
  for (let t = 0, n = e.length; t < n; t++) r[t] = e[t];
}
function gr(r, e) {
  let t = Ra[e];
  t === void 0 && (t = new Int32Array(e), Ra[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = r.allocateTextureUnit();
  return t;
}
function id(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1f(this.addr, e), t[0] = e);
}
function rd(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    r.uniform2fv(this.addr, e), dt(t, e);
  }
}
function sd(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ut(t, e)) return;
    r.uniform3fv(this.addr, e), dt(t, e);
  }
}
function ad(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    r.uniform4fv(this.addr, e), dt(t, e);
  }
}
function od(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    r.uniformMatrix2fv(this.addr, false, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    Pa.set(n), r.uniformMatrix2fv(this.addr, false, Pa), dt(t, n);
  }
}
function ld(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    r.uniformMatrix3fv(this.addr, false, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    Ca.set(n), r.uniformMatrix3fv(this.addr, false, Ca), dt(t, n);
  }
}
function cd(r, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ut(t, e)) return;
    r.uniformMatrix4fv(this.addr, false, e), dt(t, e);
  } else {
    if (ut(t, n)) return;
    wa.set(n), r.uniformMatrix4fv(this.addr, false, wa), dt(t, n);
  }
}
function hd(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1i(this.addr, e), t[0] = e);
}
function ud(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    r.uniform2iv(this.addr, e), dt(t, e);
  }
}
function dd(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e)) return;
    r.uniform3iv(this.addr, e), dt(t, e);
  }
}
function fd(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    r.uniform4iv(this.addr, e), dt(t, e);
  }
}
function pd(r, e) {
  const t = this.cache;
  t[0] !== e && (r.uniform1ui(this.addr, e), t[0] = e);
}
function md(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ut(t, e)) return;
    r.uniform2uiv(this.addr, e), dt(t, e);
  }
}
function gd(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ut(t, e)) return;
    r.uniform3uiv(this.addr, e), dt(t, e);
  }
}
function _d(r, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ut(t, e)) return;
    r.uniform4uiv(this.addr, e), dt(t, e);
  }
}
function xd(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i);
  let s;
  this.type === r.SAMPLER_2D_SHADOW ? (Aa.compareFunction = 515, s = Aa) : s = ho, t.setTexture2D(e || s, i);
}
function vd(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || fo, i);
}
function Md(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || po, i);
}
function Sd(r, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (r.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || uo, i);
}
function yd(r) {
  switch (r) {
    case 5126:
      return id;
    case 35664:
      return rd;
    case 35665:
      return sd;
    case 35666:
      return ad;
    case 35674:
      return od;
    case 35675:
      return ld;
    case 35676:
      return cd;
    case 5124:
    case 35670:
      return hd;
    case 35667:
    case 35671:
      return ud;
    case 35668:
    case 35672:
      return dd;
    case 35669:
    case 35673:
      return fd;
    case 5125:
      return pd;
    case 36294:
      return md;
    case 36295:
      return gd;
    case 36296:
      return _d;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return xd;
    case 35679:
    case 36299:
    case 36307:
      return vd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Md;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Sd;
  }
}
function Td(r, e) {
  r.uniform1fv(this.addr, e);
}
function Ed(r, e) {
  const t = di(e, this.size, 2);
  r.uniform2fv(this.addr, t);
}
function Ad(r, e) {
  const t = di(e, this.size, 3);
  r.uniform3fv(this.addr, t);
}
function bd(r, e) {
  const t = di(e, this.size, 4);
  r.uniform4fv(this.addr, t);
}
function Rd(r, e) {
  const t = di(e, this.size, 4);
  r.uniformMatrix2fv(this.addr, false, t);
}
function wd(r, e) {
  const t = di(e, this.size, 9);
  r.uniformMatrix3fv(this.addr, false, t);
}
function Cd(r, e) {
  const t = di(e, this.size, 16);
  r.uniformMatrix4fv(this.addr, false, t);
}
function Pd(r, e) {
  r.uniform1iv(this.addr, e);
}
function Ld(r, e) {
  r.uniform2iv(this.addr, e);
}
function Dd(r, e) {
  r.uniform3iv(this.addr, e);
}
function Id(r, e) {
  r.uniform4iv(this.addr, e);
}
function Ud(r, e) {
  r.uniform1uiv(this.addr, e);
}
function Nd(r, e) {
  r.uniform2uiv(this.addr, e);
}
function Fd(r, e) {
  r.uniform3uiv(this.addr, e);
}
function Od(r, e) {
  r.uniform4uiv(this.addr, e);
}
function Bd(r, e, t) {
  const n = this.cache, i = e.length, s = gr(t, i);
  ut(n, s) || (r.uniform1iv(this.addr, s), dt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || ho, s[a]);
}
function Gd(r, e, t) {
  const n = this.cache, i = e.length, s = gr(t, i);
  ut(n, s) || (r.uniform1iv(this.addr, s), dt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || fo, s[a]);
}
function kd(r, e, t) {
  const n = this.cache, i = e.length, s = gr(t, i);
  ut(n, s) || (r.uniform1iv(this.addr, s), dt(n, s));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || po, s[a]);
}
function Hd(r, e, t) {
  const n = this.cache, i = e.length, s = gr(t, i);
  ut(n, s) || (r.uniform1iv(this.addr, s), dt(n, s));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || uo, s[a]);
}
function zd(r) {
  switch (r) {
    case 5126:
      return Td;
    case 35664:
      return Ed;
    case 35665:
      return Ad;
    case 35666:
      return bd;
    case 35674:
      return Rd;
    case 35675:
      return wd;
    case 35676:
      return Cd;
    case 5124:
    case 35670:
      return Pd;
    case 35667:
    case 35671:
      return Ld;
    case 35668:
    case 35672:
      return Dd;
    case 35669:
    case 35673:
      return Id;
    case 5125:
      return Ud;
    case 36294:
      return Nd;
    case 36295:
      return Fd;
    case 36296:
      return Od;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Bd;
    case 35679:
    case 36299:
    case 36307:
      return Gd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return kd;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Hd;
  }
}
class Vd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = yd(t.type);
  }
}
class Wd {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = zd(t.type);
  }
}
class Xd {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let s = 0, a = i.length; s !== a; ++s) {
      const o = i[s];
      o.setValue(e, t[o.id], n);
    }
  }
}
const jr = /(\w+)(\])?(\[|\.)?/g;
function La(r, e) {
  r.seq.push(e), r.map[e.id] = e;
}
function qd(r, e, t) {
  const n = r.name, i = n.length;
  for (jr.lastIndex = 0; ; ) {
    const s = jr.exec(n), a = jr.lastIndex;
    let o = s[1];
    const l = s[2] === "]", c = s[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      La(t, c === void 0 ? new Vd(o, r, e) : new Wd(o, r, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new Xd(o), La(t, u)), t = u;
    }
  }
}
class hr {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const s = e.getActiveUniform(t, i), a = e.getUniformLocation(t, s.name);
      qd(s, a, this);
    }
  }
  setValue(e, t, n, i) {
    const s = this.map[t];
    s !== void 0 && s.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let s = 0, a = t.length; s !== a; ++s) {
      const o = t[s], l = n[o.id];
      l.needsUpdate !== false && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, s = e.length; i !== s; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Da(r, e, t) {
  const n = r.createShader(e);
  return r.shaderSource(n, t), r.compileShader(n), n;
}
const Yd = 37297;
let Kd = 0;
function jd(r, e) {
  const t = r.split(`
`), n = [], i = Math.max(e - 6, 0), s = Math.min(e + 6, t.length);
  for (let a = i; a < s; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Ia = new Le();
function Zd(r) {
  ze._getMatrix(Ia, ze.workingColorSpace, r);
  const e = `mat3( ${Ia.elements.map((t) => t.toFixed(4))} )`;
  switch (ze.getTransfer(r)) {
    case dr:
      return [e, "LinearTransferOETF"];
    case Qe:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", r), [e, "LinearTransferOETF"];
  }
}
function Ua(r, e, t) {
  const n = r.getShaderParameter(e, r.COMPILE_STATUS), i = r.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const s = /ERROR: 0:(\d+)/.exec(i);
  if (s) {
    const a = parseInt(s[1]);
    return t.toUpperCase() + `

` + i + `

` + jd(r.getShaderSource(e), a);
  } else return i;
}
function $d(r, e) {
  const t = Zd(e);
  return [`vec4 ${r}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function Jd(r, e) {
  let t;
  switch (e) {
    case 1:
      t = "Linear";
      break;
    case 2:
      t = "Reinhard";
      break;
    case 3:
      t = "Cineon";
      break;
    case 4:
      t = "ACESFilmic";
      break;
    case 6:
      t = "AgX";
      break;
    case 7:
      t = "Neutral";
      break;
    case 5:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const cr = new L();
function Qd() {
  ze.getLuminanceCoefficients(cr);
  const r = cr.x.toFixed(4), e = cr.y.toFixed(4), t = cr.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${r}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function ef(r) {
  return [r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(Ti).join(`
`);
}
function tf(r) {
  const e = [];
  for (const t in r) {
    const n = r[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function nf(r, e) {
  const t = {}, n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const s = r.getActiveAttrib(e, i), a = s.name;
    let o = 1;
    s.type === r.FLOAT_MAT2 && (o = 2), s.type === r.FLOAT_MAT3 && (o = 3), s.type === r.FLOAT_MAT4 && (o = 4), t[a] = { type: s.type, location: r.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function Ti(r) {
  return r !== "";
}
function Na(r, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Fa(r, e) {
  return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const rf = /^[ \t]*#include +<([\w\d./]+)>/gm;
function is(r) {
  return r.replace(rf, af);
}
const sf = /* @__PURE__ */ new Map();
function af(r, e) {
  let t = Ie[e];
  if (t === void 0) {
    const n = sf.get(e);
    if (n !== void 0) t = Ie[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return is(t);
}
const of = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Oa(r) {
  return r.replace(of, lf);
}
function lf(r, e, t, n) {
  let i = "";
  for (let s = parseInt(e); s < parseInt(t); s++) i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
  return i;
}
function Ba(r) {
  let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
  return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function cf(r) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return r.shadowMapType === 1 ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === 2 ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === 3 && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function hf(r) {
  let e = "ENVMAP_TYPE_CUBE";
  if (r.envMap) switch (r.envMapMode) {
    case 301:
    case 302:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case 306:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function uf(r) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (r.envMap) switch (r.envMapMode) {
    case 302:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function df(r) {
  let e = "ENVMAP_BLENDING_NONE";
  if (r.envMap) switch (r.combine) {
    case 0:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case 1:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case 2:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function ff(r) {
  const e = r.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function pf(r, e, t, n) {
  const i = r.getContext(), s = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = cf(t), c = hf(t), h = uf(t), u = df(t), d = ff(t), p = ef(t), g = tf(s), _ = i.createProgram();
  let m, f, A = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Ti).join(`
`), m.length > 0 && (m += `
`), f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(Ti).join(`
`), f.length > 0 && (f += `
`)) : (m = [Ba(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(Ti).join(`
`), f = [Ba(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== 0 ? "#define TONE_MAPPING" : "", t.toneMapping !== 0 ? Ie.tonemapping_pars_fragment : "", t.toneMapping !== 0 ? Jd("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ie.colorspace_pars_fragment, $d("linearToOutputTexel", t.outputColorSpace), Qd(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(Ti).join(`
`)), a = is(a), a = Na(a, t), a = Fa(a, t), o = is(o), o = Na(o, t), o = Fa(o, t), a = Oa(a), o = Oa(o), t.isRawShaderMaterial !== true && (A = `#version 300 es
`, m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, f = ["#define varying in", t.glslVersion === Rs ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Rs ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + f);
  const E = A + m + a, S = A + f + o, I = Da(i, i.VERTEX_SHADER, E), b = Da(i, i.FRAGMENT_SHADER, S);
  i.attachShader(_, I), i.attachShader(_, b), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function w(C) {
    if (r.debug.checkShaderErrors) {
      const q = i.getProgramInfoLog(_).trim(), G = i.getShaderInfoLog(I).trim(), W = i.getShaderInfoLog(b).trim();
      let Z = true, z = true;
      if (i.getProgramParameter(_, i.LINK_STATUS) === false) if (Z = false, typeof r.debug.onShaderError == "function") r.debug.onShaderError(i, _, I, b);
      else {
        const Q = Ua(i, I, "vertex"), H = Ua(i, b, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + C.name + `
Material Type: ` + C.type + `

Program Info Log: ` + q + `
` + Q + `
` + H);
      }
      else q !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", q) : (G === "" || W === "") && (z = false);
      z && (C.diagnostics = { runnable: Z, programLog: q, vertexShader: { log: G, prefix: m }, fragmentShader: { log: W, prefix: f } });
    }
    i.deleteShader(I), i.deleteShader(b), N = new hr(i, _), y = nf(i, _);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && w(this), N;
  };
  let y;
  this.getAttributes = function() {
    return y === void 0 && w(this), y;
  };
  let M = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = i.getProgramParameter(_, Yd)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = Kd++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = I, this.fragmentShader = b, this;
}
let mf = 0;
class gf {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), s = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === false && (a.add(i), i.usedTimes++), a.has(s) === false && (a.add(s), s.usedTimes++), this;
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t) n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return n === void 0 && (n = /* @__PURE__ */ new Set(), t.set(e, n)), n;
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return n === void 0 && (n = new _f(e), t.set(e, n)), n;
  }
}
class _f {
  constructor(e) {
    this.id = mf++, this.code = e, this.usedTimes = 0;
  }
}
function xf(r, e, t, n, i, s, a) {
  const o = new os(), l = new gf(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let p = i.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(y) {
    return c.add(y), y === 0 ? "uv" : `uv${y}`;
  }
  function m(y, M, C, q, G) {
    const W = q.fog, Z = G.geometry, z = y.isMeshStandardMaterial ? q.environment : null, Q = (y.isMeshStandardMaterial ? t : e).get(y.envMap || z), H = Q && Q.mapping === 306 ? Q.image.height : null, re = g[y.type];
    y.precision !== null && (p = i.getMaxPrecision(y.precision), p !== y.precision && console.warn("THREE.WebGLProgram.getParameters:", y.precision, "not supported, using", p, "instead."));
    const he = Z.morphAttributes.position || Z.morphAttributes.normal || Z.morphAttributes.color, _e = he !== void 0 ? he.length : 0;
    let Ue = 0;
    Z.morphAttributes.position !== void 0 && (Ue = 1), Z.morphAttributes.normal !== void 0 && (Ue = 2), Z.morphAttributes.color !== void 0 && (Ue = 3);
    let et, X, ee, me;
    if (re) {
      const Ze = Kt[re];
      et = Ze.vertexShader, X = Ze.fragmentShader;
    } else et = y.vertexShader, X = y.fragmentShader, l.update(y), ee = l.getVertexShaderID(y), me = l.getFragmentShaderID(y);
    const se = r.getRenderTarget(), Te = r.state.buffers.depth.getReversed(), we = G.isInstancedMesh === true, Ne = G.isBatchedMesh === true, st = !!y.map, Ve = !!y.matcap, lt = !!Q, R = !!y.aoMap, Lt = !!y.lightMap, Ge = !!y.bumpMap, ke = !!y.normalMap, xe = !!y.displacementMap, it = !!y.emissiveMap, ve = !!y.metalnessMap, T = !!y.roughnessMap, x = y.anisotropy > 0, F = y.clearcoat > 0, Y = y.dispersion > 0, j = y.iridescence > 0, V = y.sheen > 0, ge = y.transmission > 0, ae = x && !!y.anisotropyMap, ue = F && !!y.clearcoatMap, We = F && !!y.clearcoatNormalMap, J = F && !!y.clearcoatRoughnessMap, de = j && !!y.iridescenceMap, ye = j && !!y.iridescenceThicknessMap, Ae = V && !!y.sheenColorMap, fe = V && !!y.sheenRoughnessMap, He = !!y.specularMap, De = !!y.specularColorMap, nt = !!y.specularIntensityMap, P = ge && !!y.transmissionMap, ne = ge && !!y.thicknessMap, k = !!y.gradientMap, K = !!y.alphaMap, le = y.alphaTest > 0, oe = !!y.alphaHash, Pe = !!y.extensions;
    let at = 0;
    y.toneMapped && (se === null || se.isXRRenderTarget === true) && (at = r.toneMapping);
    const _t = { shaderID: re, shaderType: y.type, shaderName: y.name, vertexShader: et, fragmentShader: X, defines: y.defines, customVertexShaderID: ee, customFragmentShaderID: me, isRawShaderMaterial: y.isRawShaderMaterial === true, glslVersion: y.glslVersion, precision: p, batching: Ne, batchingColor: Ne && G._colorsTexture !== null, instancing: we, instancingColor: we && G.instanceColor !== null, instancingMorph: we && G.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: se === null ? r.outputColorSpace : se.isXRRenderTarget === true ? se.texture.colorSpace : Et, alphaToCoverage: !!y.alphaToCoverage, map: st, matcap: Ve, envMap: lt, envMapMode: lt && Q.mapping, envMapCubeUVHeight: H, aoMap: R, lightMap: Lt, bumpMap: Ge, normalMap: ke, displacementMap: d && xe, emissiveMap: it, normalMapObjectSpace: ke && y.normalMapType === 1, normalMapTangentSpace: ke && y.normalMapType === 0, metalnessMap: ve, roughnessMap: T, anisotropy: x, anisotropyMap: ae, clearcoat: F, clearcoatMap: ue, clearcoatNormalMap: We, clearcoatRoughnessMap: J, dispersion: Y, iridescence: j, iridescenceMap: de, iridescenceThicknessMap: ye, sheen: V, sheenColorMap: Ae, sheenRoughnessMap: fe, specularMap: He, specularColorMap: De, specularIntensityMap: nt, transmission: ge, transmissionMap: P, thicknessMap: ne, gradientMap: k, opaque: y.transparent === false && y.blending === 1 && y.alphaToCoverage === false, alphaMap: K, alphaTest: le, alphaHash: oe, combine: y.combine, mapUv: st && _(y.map.channel), aoMapUv: R && _(y.aoMap.channel), lightMapUv: Lt && _(y.lightMap.channel), bumpMapUv: Ge && _(y.bumpMap.channel), normalMapUv: ke && _(y.normalMap.channel), displacementMapUv: xe && _(y.displacementMap.channel), emissiveMapUv: it && _(y.emissiveMap.channel), metalnessMapUv: ve && _(y.metalnessMap.channel), roughnessMapUv: T && _(y.roughnessMap.channel), anisotropyMapUv: ae && _(y.anisotropyMap.channel), clearcoatMapUv: ue && _(y.clearcoatMap.channel), clearcoatNormalMapUv: We && _(y.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: J && _(y.clearcoatRoughnessMap.channel), iridescenceMapUv: de && _(y.iridescenceMap.channel), iridescenceThicknessMapUv: ye && _(y.iridescenceThicknessMap.channel), sheenColorMapUv: Ae && _(y.sheenColorMap.channel), sheenRoughnessMapUv: fe && _(y.sheenRoughnessMap.channel), specularMapUv: He && _(y.specularMap.channel), specularColorMapUv: De && _(y.specularColorMap.channel), specularIntensityMapUv: nt && _(y.specularIntensityMap.channel), transmissionMapUv: P && _(y.transmissionMap.channel), thicknessMapUv: ne && _(y.thicknessMap.channel), alphaMapUv: K && _(y.alphaMap.channel), vertexTangents: !!Z.attributes.tangent && (ke || x), vertexColors: y.vertexColors, vertexAlphas: y.vertexColors === true && !!Z.attributes.color && Z.attributes.color.itemSize === 4, pointsUvs: G.isPoints === true && !!Z.attributes.uv && (st || K), fog: !!W, useFog: y.fog === true, fogExp2: !!W && W.isFogExp2, flatShading: y.flatShading === true, sizeAttenuation: y.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: Te, skinning: G.isSkinnedMesh === true, morphTargets: Z.morphAttributes.position !== void 0, morphNormals: Z.morphAttributes.normal !== void 0, morphColors: Z.morphAttributes.color !== void 0, morphTargetsCount: _e, morphTextureStride: Ue, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: y.dithering, shadowMapEnabled: r.shadowMap.enabled && C.length > 0, shadowMapType: r.shadowMap.type, toneMapping: at, decodeVideoTexture: st && y.map.isVideoTexture === true && ze.getTransfer(y.map.colorSpace) === Qe, decodeVideoTextureEmissive: it && y.emissiveMap.isVideoTexture === true && ze.getTransfer(y.emissiveMap.colorSpace) === Qe, premultipliedAlpha: y.premultipliedAlpha, doubleSided: y.side === 2, flipSided: y.side === 1, useDepthPacking: y.depthPacking >= 0, depthPacking: y.depthPacking || 0, index0AttributeName: y.index0AttributeName, extensionClipCullDistance: Pe && y.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Pe && y.extensions.multiDraw === true || Ne) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: y.customProgramCacheKey() };
    return _t.vertexUv1s = c.has(1), _t.vertexUv2s = c.has(2), _t.vertexUv3s = c.has(3), c.clear(), _t;
  }
  function f(y) {
    const M = [];
    if (y.shaderID ? M.push(y.shaderID) : (M.push(y.customVertexShaderID), M.push(y.customFragmentShaderID)), y.defines !== void 0) for (const C in y.defines) M.push(C), M.push(y.defines[C]);
    return y.isRawShaderMaterial === false && (A(M, y), E(M, y), M.push(r.outputColorSpace)), M.push(y.customProgramCacheKey), M.join();
  }
  function A(y, M) {
    y.push(M.precision), y.push(M.outputColorSpace), y.push(M.envMapMode), y.push(M.envMapCubeUVHeight), y.push(M.mapUv), y.push(M.alphaMapUv), y.push(M.lightMapUv), y.push(M.aoMapUv), y.push(M.bumpMapUv), y.push(M.normalMapUv), y.push(M.displacementMapUv), y.push(M.emissiveMapUv), y.push(M.metalnessMapUv), y.push(M.roughnessMapUv), y.push(M.anisotropyMapUv), y.push(M.clearcoatMapUv), y.push(M.clearcoatNormalMapUv), y.push(M.clearcoatRoughnessMapUv), y.push(M.iridescenceMapUv), y.push(M.iridescenceThicknessMapUv), y.push(M.sheenColorMapUv), y.push(M.sheenRoughnessMapUv), y.push(M.specularMapUv), y.push(M.specularColorMapUv), y.push(M.specularIntensityMapUv), y.push(M.transmissionMapUv), y.push(M.thicknessMapUv), y.push(M.combine), y.push(M.fogExp2), y.push(M.sizeAttenuation), y.push(M.morphTargetsCount), y.push(M.morphAttributeCount), y.push(M.numDirLights), y.push(M.numPointLights), y.push(M.numSpotLights), y.push(M.numSpotLightMaps), y.push(M.numHemiLights), y.push(M.numRectAreaLights), y.push(M.numDirLightShadows), y.push(M.numPointLightShadows), y.push(M.numSpotLightShadows), y.push(M.numSpotLightShadowsWithMaps), y.push(M.numLightProbes), y.push(M.shadowMapType), y.push(M.toneMapping), y.push(M.numClippingPlanes), y.push(M.numClipIntersection), y.push(M.depthPacking);
  }
  function E(y, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), y.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), y.push(o.mask);
  }
  function S(y) {
    const M = g[y.type];
    let C;
    if (M) {
      const q = Kt[M];
      C = ol.clone(q.uniforms);
    } else C = y.uniforms;
    return C;
  }
  function I(y, M) {
    let C;
    for (let q = 0, G = h.length; q < G; q++) {
      const W = h[q];
      if (W.cacheKey === M) {
        C = W, ++C.usedTimes;
        break;
      }
    }
    return C === void 0 && (C = new pf(r, M, y, s), h.push(C)), C;
  }
  function b(y) {
    if (--y.usedTimes === 0) {
      const M = h.indexOf(y);
      h[M] = h[h.length - 1], h.pop(), y.destroy();
    }
  }
  function w(y) {
    l.remove(y);
  }
  function N() {
    l.dispose();
  }
  return { getParameters: m, getProgramCacheKey: f, getUniforms: S, acquireProgram: I, releaseProgram: b, releaseShaderCache: w, programs: h, dispose: N };
}
function vf() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return r.has(a);
  }
  function t(a) {
    let o = r.get(a);
    return o === void 0 && (o = {}, r.set(a, o)), o;
  }
  function n(a) {
    r.delete(a);
  }
  function i(a, o, l) {
    r.get(a)[o] = l;
  }
  function s() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: i, dispose: s };
}
function Mf(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id;
}
function Ga(r, e) {
  return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id;
}
function ka() {
  const r = [];
  let e = 0;
  const t = [], n = [], i = [];
  function s() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, p, g, _, m) {
    let f = r[e];
    return f === void 0 ? (f = { id: u.id, object: u, geometry: d, material: p, groupOrder: g, renderOrder: u.renderOrder, z: _, group: m }, r[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = g, f.renderOrder = u.renderOrder, f.z = _, f.group = m), e++, f;
  }
  function o(u, d, p, g, _, m) {
    const f = a(u, d, p, g, _, m);
    p.transmission > 0 ? n.push(f) : p.transparent === true ? i.push(f) : t.push(f);
  }
  function l(u, d, p, g, _, m) {
    const f = a(u, d, p, g, _, m);
    p.transmission > 0 ? n.unshift(f) : p.transparent === true ? i.unshift(f) : t.unshift(f);
  }
  function c(u, d) {
    t.length > 1 && t.sort(u || Mf), n.length > 1 && n.sort(d || Ga), i.length > 1 && i.sort(d || Ga);
  }
  function h() {
    for (let u = e, d = r.length; u < d; u++) {
      const p = r[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: i, init: s, push: o, unshift: l, finish: h, sort: c };
}
function Sf() {
  let r = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const s = r.get(n);
    let a;
    return s === void 0 ? (a = new ka(), r.set(n, [a])) : i >= s.length ? (a = new ka(), s.push(a)) : a = s[i], a;
  }
  function t() {
    r = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function yf() {
  const r = {};
  return { get: function(e) {
    if (r[e.id] !== void 0) return r[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new L(), color: new Ee() };
        break;
      case "SpotLight":
        t = { position: new L(), direction: new L(), color: new Ee(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new L(), color: new Ee(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new L(), skyColor: new Ee(), groundColor: new Ee() };
        break;
      case "RectAreaLight":
        t = { color: new Ee(), position: new L(), halfWidth: new L(), halfHeight: new L() };
        break;
    }
    return r[e.id] = t, t;
  } };
}
function Tf() {
  const r = {};
  return { get: function(e) {
    if (r[e.id] !== void 0) return r[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Be() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Be() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new Be(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return r[e.id] = t, t;
  } };
}
let Ef = 0;
function Af(r, e) {
  return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0);
}
function bf(r) {
  const e = new yf(), t = Tf(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new L());
  const i = new L(), s = new Ce(), a = new Ce();
  function o(c) {
    let h = 0, u = 0, d = 0;
    for (let y = 0; y < 9; y++) n.probe[y].set(0, 0, 0);
    let p = 0, g = 0, _ = 0, m = 0, f = 0, A = 0, E = 0, S = 0, I = 0, b = 0, w = 0;
    c.sort(Af);
    for (let y = 0, M = c.length; y < M; y++) {
      const C = c[y], q = C.color, G = C.intensity, W = C.distance, Z = C.shadow && C.shadow.map ? C.shadow.map.texture : null;
      if (C.isAmbientLight) h += q.r * G, u += q.g * G, d += q.b * G;
      else if (C.isLightProbe) {
        for (let z = 0; z < 9; z++) n.probe[z].addScaledVector(C.sh.coefficients[z], G);
        w++;
      } else if (C.isDirectionalLight) {
        const z = e.get(C);
        if (z.color.copy(C.color).multiplyScalar(C.intensity), C.castShadow) {
          const Q = C.shadow, H = t.get(C);
          H.shadowIntensity = Q.intensity, H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, n.directionalShadow[p] = H, n.directionalShadowMap[p] = Z, n.directionalShadowMatrix[p] = C.shadow.matrix, A++;
        }
        n.directional[p] = z, p++;
      } else if (C.isSpotLight) {
        const z = e.get(C);
        z.position.setFromMatrixPosition(C.matrixWorld), z.color.copy(q).multiplyScalar(G), z.distance = W, z.coneCos = Math.cos(C.angle), z.penumbraCos = Math.cos(C.angle * (1 - C.penumbra)), z.decay = C.decay, n.spot[_] = z;
        const Q = C.shadow;
        if (C.map && (n.spotLightMap[I] = C.map, I++, Q.updateMatrices(C), C.castShadow && b++), n.spotLightMatrix[_] = Q.matrix, C.castShadow) {
          const H = t.get(C);
          H.shadowIntensity = Q.intensity, H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, n.spotShadow[_] = H, n.spotShadowMap[_] = Z, S++;
        }
        _++;
      } else if (C.isRectAreaLight) {
        const z = e.get(C);
        z.color.copy(q).multiplyScalar(G), z.halfWidth.set(C.width * 0.5, 0, 0), z.halfHeight.set(0, C.height * 0.5, 0), n.rectArea[m] = z, m++;
      } else if (C.isPointLight) {
        const z = e.get(C);
        if (z.color.copy(C.color).multiplyScalar(C.intensity), z.distance = C.distance, z.decay = C.decay, C.castShadow) {
          const Q = C.shadow, H = t.get(C);
          H.shadowIntensity = Q.intensity, H.shadowBias = Q.bias, H.shadowNormalBias = Q.normalBias, H.shadowRadius = Q.radius, H.shadowMapSize = Q.mapSize, H.shadowCameraNear = Q.camera.near, H.shadowCameraFar = Q.camera.far, n.pointShadow[g] = H, n.pointShadowMap[g] = Z, n.pointShadowMatrix[g] = C.shadow.matrix, E++;
        }
        n.point[g] = z, g++;
      } else if (C.isHemisphereLight) {
        const z = e.get(C);
        z.skyColor.copy(C.color).multiplyScalar(G), z.groundColor.copy(C.groundColor).multiplyScalar(G), n.hemi[f] = z, f++;
      }
    }
    m > 0 && (r.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = te.LTC_FLOAT_1, n.rectAreaLTC2 = te.LTC_FLOAT_2) : (n.rectAreaLTC1 = te.LTC_HALF_1, n.rectAreaLTC2 = te.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const N = n.hash;
    (N.directionalLength !== p || N.pointLength !== g || N.spotLength !== _ || N.rectAreaLength !== m || N.hemiLength !== f || N.numDirectionalShadows !== A || N.numPointShadows !== E || N.numSpotShadows !== S || N.numSpotMaps !== I || N.numLightProbes !== w) && (n.directional.length = p, n.spot.length = _, n.rectArea.length = m, n.point.length = g, n.hemi.length = f, n.directionalShadow.length = A, n.directionalShadowMap.length = A, n.pointShadow.length = E, n.pointShadowMap.length = E, n.spotShadow.length = S, n.spotShadowMap.length = S, n.directionalShadowMatrix.length = A, n.pointShadowMatrix.length = E, n.spotLightMatrix.length = S + I - b, n.spotLightMap.length = I, n.numSpotLightShadowsWithMaps = b, n.numLightProbes = w, N.directionalLength = p, N.pointLength = g, N.spotLength = _, N.rectAreaLength = m, N.hemiLength = f, N.numDirectionalShadows = A, N.numPointShadows = E, N.numSpotShadows = S, N.numSpotMaps = I, N.numLightProbes = w, n.version = Ef++);
  }
  function l(c, h) {
    let u = 0, d = 0, p = 0, g = 0, _ = 0;
    const m = h.matrixWorldInverse;
    for (let f = 0, A = c.length; f < A; f++) {
      const E = c[f];
      if (E.isDirectionalLight) {
        const S = n.directional[u];
        S.direction.setFromMatrixPosition(E.matrixWorld), i.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(m), u++;
      } else if (E.isSpotLight) {
        const S = n.spot[p];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), S.direction.setFromMatrixPosition(E.matrixWorld), i.setFromMatrixPosition(E.target.matrixWorld), S.direction.sub(i), S.direction.transformDirection(m), p++;
      } else if (E.isRectAreaLight) {
        const S = n.rectArea[g];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), a.identity(), s.copy(E.matrixWorld), s.premultiply(m), a.extractRotation(s), S.halfWidth.set(E.width * 0.5, 0, 0), S.halfHeight.set(0, E.height * 0.5, 0), S.halfWidth.applyMatrix4(a), S.halfHeight.applyMatrix4(a), g++;
      } else if (E.isPointLight) {
        const S = n.point[d];
        S.position.setFromMatrixPosition(E.matrixWorld), S.position.applyMatrix4(m), d++;
      } else if (E.isHemisphereLight) {
        const S = n.hemi[_];
        S.direction.setFromMatrixPosition(E.matrixWorld), S.direction.transformDirection(m), _++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function Ha(r) {
  const e = new bf(r), t = [], n = [];
  function i(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function s(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = { lightsArray: t, shadowsArray: n, camera: null, lights: e, transmissionRenderTarget: {} };
  return { init: i, state: c, setupLights: o, setupLightsView: l, pushLight: s, pushShadow: a };
}
function Rf(r) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, s = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new Ha(r), e.set(i, [o])) : s >= a.length ? (o = new Ha(r), a.push(o)) : o = a[s], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const wf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Cf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Pf(r, e, t) {
  let n = new hs();
  const i = new Be(), s = new Be(), a = new Ye(), o = new Tl({ depthPacking: 3201 }), l = new El(), c = {}, h = t.maxTextureSize, u = { 0: 1, 1: 0, 2: 2 }, d = new xn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new Be() }, radius: { value: 4 } }, vertexShader: wf, fragmentShader: Cf }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Ft();
  g.setAttribute("position", new Tt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new Pt(g, d), m = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = 1;
  let f = this.type;
  this.render = function(b, w, N) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || b.length === 0) return;
    const y = r.getRenderTarget(), M = r.getActiveCubeFace(), C = r.getActiveMipmapLevel(), q = r.state;
    q.setBlending(0), q.buffers.color.setClear(1, 1, 1, 1), q.buffers.depth.setTest(true), q.setScissorTest(false);
    const G = f !== 3 && this.type === 3, W = f === 3 && this.type !== 3;
    for (let Z = 0, z = b.length; Z < z; Z++) {
      const Q = b[Z], H = Q.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === false && H.needsUpdate === false) continue;
      i.copy(H.mapSize);
      const re = H.getFrameExtents();
      if (i.multiply(re), s.copy(H.mapSize), (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / re.x), i.x = s.x * re.x, H.mapSize.x = s.x), i.y > h && (s.y = Math.floor(h / re.y), i.y = s.y * re.y, H.mapSize.y = s.y)), H.map === null || G === true || W === true) {
        const _e = this.type !== 3 ? { minFilter: 1003, magFilter: 1003 } : {};
        H.map !== null && H.map.dispose(), H.map = new On(i.x, i.y, _e), H.map.texture.name = Q.name + ".shadowMap", H.camera.updateProjectionMatrix();
      }
      r.setRenderTarget(H.map), r.clear();
      const he = H.getViewportCount();
      for (let _e = 0; _e < he; _e++) {
        const Ue = H.getViewport(_e);
        a.set(s.x * Ue.x, s.y * Ue.y, s.x * Ue.z, s.y * Ue.w), q.viewport(a), H.updateMatrices(Q, _e), n = H.getFrustum(), S(w, N, H.camera, Q, this.type);
      }
      H.isPointLightShadow !== true && this.type === 3 && A(H, N), H.needsUpdate = false;
    }
    f = this.type, m.needsUpdate = false, r.setRenderTarget(y, M, C);
  };
  function A(b, w) {
    const N = e.update(_);
    d.defines.VSM_SAMPLES !== b.blurSamples && (d.defines.VSM_SAMPLES = b.blurSamples, p.defines.VSM_SAMPLES = b.blurSamples, d.needsUpdate = true, p.needsUpdate = true), b.mapPass === null && (b.mapPass = new On(i.x, i.y)), d.uniforms.shadow_pass.value = b.map.texture, d.uniforms.resolution.value = b.mapSize, d.uniforms.radius.value = b.radius, r.setRenderTarget(b.mapPass), r.clear(), r.renderBufferDirect(w, null, N, d, _, null), p.uniforms.shadow_pass.value = b.mapPass.texture, p.uniforms.resolution.value = b.mapSize, p.uniforms.radius.value = b.radius, r.setRenderTarget(b.map), r.clear(), r.renderBufferDirect(w, null, N, p, _, null);
  }
  function E(b, w, N, y) {
    let M = null;
    const C = N.isPointLight === true ? b.customDistanceMaterial : b.customDepthMaterial;
    if (C !== void 0) M = C;
    else if (M = N.isPointLight === true ? l : o, r.localClippingEnabled && w.clipShadows === true && Array.isArray(w.clippingPlanes) && w.clippingPlanes.length !== 0 || w.displacementMap && w.displacementScale !== 0 || w.alphaMap && w.alphaTest > 0 || w.map && w.alphaTest > 0) {
      const q = M.uuid, G = w.uuid;
      let W = c[q];
      W === void 0 && (W = {}, c[q] = W);
      let Z = W[G];
      Z === void 0 && (Z = M.clone(), W[G] = Z, w.addEventListener("dispose", I)), M = Z;
    }
    if (M.visible = w.visible, M.wireframe = w.wireframe, y === 3 ? M.side = w.shadowSide !== null ? w.shadowSide : w.side : M.side = w.shadowSide !== null ? w.shadowSide : u[w.side], M.alphaMap = w.alphaMap, M.alphaTest = w.alphaTest, M.map = w.map, M.clipShadows = w.clipShadows, M.clippingPlanes = w.clippingPlanes, M.clipIntersection = w.clipIntersection, M.displacementMap = w.displacementMap, M.displacementScale = w.displacementScale, M.displacementBias = w.displacementBias, M.wireframeLinewidth = w.wireframeLinewidth, M.linewidth = w.linewidth, N.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const q = r.properties.get(M);
      q.light = N;
    }
    return M;
  }
  function S(b, w, N, y, M) {
    if (b.visible === false) return;
    if (b.layers.test(w.layers) && (b.isMesh || b.isLine || b.isPoints) && (b.castShadow || b.receiveShadow && M === 3) && (!b.frustumCulled || n.intersectsObject(b))) {
      b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, b.matrixWorld);
      const G = e.update(b), W = b.material;
      if (Array.isArray(W)) {
        const Z = G.groups;
        for (let z = 0, Q = Z.length; z < Q; z++) {
          const H = Z[z], re = W[H.materialIndex];
          if (re && re.visible) {
            const he = E(b, re, y, M);
            b.onBeforeShadow(r, b, w, N, G, he, H), r.renderBufferDirect(N, null, G, he, b, H), b.onAfterShadow(r, b, w, N, G, he, H);
          }
        }
      } else if (W.visible) {
        const Z = E(b, W, y, M);
        b.onBeforeShadow(r, b, w, N, G, Z, null), r.renderBufferDirect(N, null, G, Z, b, null), b.onAfterShadow(r, b, w, N, G, Z, null);
      }
    }
    const q = b.children;
    for (let G = 0, W = q.length; G < W; G++) S(q[G], w, N, y, M);
  }
  function I(b) {
    b.target.removeEventListener("dispose", I);
    for (const N in c) {
      const y = c[N], M = b.target.uuid;
      M in y && (y[M].dispose(), delete y[M]);
    }
  }
}
const Lf = { 0: 1, 2: 6, 4: 7, 3: 5, 1: 0, 6: 2, 7: 4, 5: 3 };
function Df(r, e) {
  function t() {
    let P = false;
    const ne = new Ye();
    let k = null;
    const K = new Ye(0, 0, 0, 0);
    return { setMask: function(le) {
      k !== le && !P && (r.colorMask(le, le, le, le), k = le);
    }, setLocked: function(le) {
      P = le;
    }, setClear: function(le, oe, Pe, at, _t) {
      _t === true && (le *= at, oe *= at, Pe *= at), ne.set(le, oe, Pe, at), K.equals(ne) === false && (r.clearColor(le, oe, Pe, at), K.copy(ne));
    }, reset: function() {
      P = false, k = null, K.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let P = false, ne = false, k = null, K = null, le = null;
    return { setReversed: function(oe) {
      if (ne !== oe) {
        const Pe = e.get("EXT_clip_control");
        ne ? Pe.clipControlEXT(Pe.LOWER_LEFT_EXT, Pe.ZERO_TO_ONE_EXT) : Pe.clipControlEXT(Pe.LOWER_LEFT_EXT, Pe.NEGATIVE_ONE_TO_ONE_EXT);
        const at = le;
        le = null, this.setClear(at);
      }
      ne = oe;
    }, getReversed: function() {
      return ne;
    }, setTest: function(oe) {
      oe ? se(r.DEPTH_TEST) : Te(r.DEPTH_TEST);
    }, setMask: function(oe) {
      k !== oe && !P && (r.depthMask(oe), k = oe);
    }, setFunc: function(oe) {
      if (ne && (oe = Lf[oe]), K !== oe) {
        switch (oe) {
          case 0:
            r.depthFunc(r.NEVER);
            break;
          case 1:
            r.depthFunc(r.ALWAYS);
            break;
          case 2:
            r.depthFunc(r.LESS);
            break;
          case 3:
            r.depthFunc(r.LEQUAL);
            break;
          case 4:
            r.depthFunc(r.EQUAL);
            break;
          case 5:
            r.depthFunc(r.GEQUAL);
            break;
          case 6:
            r.depthFunc(r.GREATER);
            break;
          case 7:
            r.depthFunc(r.NOTEQUAL);
            break;
          default:
            r.depthFunc(r.LEQUAL);
        }
        K = oe;
      }
    }, setLocked: function(oe) {
      P = oe;
    }, setClear: function(oe) {
      le !== oe && (ne && (oe = 1 - oe), r.clearDepth(oe), le = oe);
    }, reset: function() {
      P = false, k = null, K = null, le = null, ne = false;
    } };
  }
  function i() {
    let P = false, ne = null, k = null, K = null, le = null, oe = null, Pe = null, at = null, _t = null;
    return { setTest: function(Ze) {
      P || (Ze ? se(r.STENCIL_TEST) : Te(r.STENCIL_TEST));
    }, setMask: function(Ze) {
      ne !== Ze && !P && (r.stencilMask(Ze), ne = Ze);
    }, setFunc: function(Ze, Ot, Qt) {
      (k !== Ze || K !== Ot || le !== Qt) && (r.stencilFunc(Ze, Ot, Qt), k = Ze, K = Ot, le = Qt);
    }, setOp: function(Ze, Ot, Qt) {
      (oe !== Ze || Pe !== Ot || at !== Qt) && (r.stencilOp(Ze, Ot, Qt), oe = Ze, Pe = Ot, at = Qt);
    }, setLocked: function(Ze) {
      P = Ze;
    }, setClear: function(Ze) {
      _t !== Ze && (r.clearStencil(Ze), _t = Ze);
    }, reset: function() {
      P = false, ne = null, k = null, K = null, le = null, oe = null, Pe = null, at = null, _t = null;
    } };
  }
  const s = new t(), a = new n(), o = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, _ = false, m = null, f = null, A = null, E = null, S = null, I = null, b = null, w = new Ee(0, 0, 0), N = 0, y = false, M = null, C = null, q = null, G = null, W = null;
  const Z = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let z = false, Q = 0;
  const H = r.getParameter(r.VERSION);
  H.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(H)[1]), z = Q >= 1) : H.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(H)[1]), z = Q >= 2);
  let re = null, he = {};
  const _e = r.getParameter(r.SCISSOR_BOX), Ue = r.getParameter(r.VIEWPORT), et = new Ye().fromArray(_e), X = new Ye().fromArray(Ue);
  function ee(P, ne, k, K) {
    const le = new Uint8Array(4), oe = r.createTexture();
    r.bindTexture(P, oe), r.texParameteri(P, r.TEXTURE_MIN_FILTER, r.NEAREST), r.texParameteri(P, r.TEXTURE_MAG_FILTER, r.NEAREST);
    for (let Pe = 0; Pe < k; Pe++) P === r.TEXTURE_3D || P === r.TEXTURE_2D_ARRAY ? r.texImage3D(ne, 0, r.RGBA, 1, 1, K, 0, r.RGBA, r.UNSIGNED_BYTE, le) : r.texImage2D(ne + Pe, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, le);
    return oe;
  }
  const me = {};
  me[r.TEXTURE_2D] = ee(r.TEXTURE_2D, r.TEXTURE_2D, 1), me[r.TEXTURE_CUBE_MAP] = ee(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6), me[r.TEXTURE_2D_ARRAY] = ee(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1), me[r.TEXTURE_3D] = ee(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1), s.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), se(r.DEPTH_TEST), a.setFunc(3), Ge(false), ke(1), se(r.CULL_FACE), R(0);
  function se(P) {
    h[P] !== true && (r.enable(P), h[P] = true);
  }
  function Te(P) {
    h[P] !== false && (r.disable(P), h[P] = false);
  }
  function we(P, ne) {
    return u[P] !== ne ? (r.bindFramebuffer(P, ne), u[P] = ne, P === r.DRAW_FRAMEBUFFER && (u[r.FRAMEBUFFER] = ne), P === r.FRAMEBUFFER && (u[r.DRAW_FRAMEBUFFER] = ne), true) : false;
  }
  function Ne(P, ne) {
    let k = p, K = false;
    if (P) {
      k = d.get(ne), k === void 0 && (k = [], d.set(ne, k));
      const le = P.textures;
      if (k.length !== le.length || k[0] !== r.COLOR_ATTACHMENT0) {
        for (let oe = 0, Pe = le.length; oe < Pe; oe++) k[oe] = r.COLOR_ATTACHMENT0 + oe;
        k.length = le.length, K = true;
      }
    } else k[0] !== r.BACK && (k[0] = r.BACK, K = true);
    K && r.drawBuffers(k);
  }
  function st(P) {
    return g !== P ? (r.useProgram(P), g = P, true) : false;
  }
  const Ve = { 100: r.FUNC_ADD, 101: r.FUNC_SUBTRACT, 102: r.FUNC_REVERSE_SUBTRACT };
  Ve[103] = r.MIN, Ve[104] = r.MAX;
  const lt = { 200: r.ZERO, 201: r.ONE, 202: r.SRC_COLOR, 204: r.SRC_ALPHA, 210: r.SRC_ALPHA_SATURATE, 208: r.DST_COLOR, 206: r.DST_ALPHA, 203: r.ONE_MINUS_SRC_COLOR, 205: r.ONE_MINUS_SRC_ALPHA, 209: r.ONE_MINUS_DST_COLOR, 207: r.ONE_MINUS_DST_ALPHA, 211: r.CONSTANT_COLOR, 212: r.ONE_MINUS_CONSTANT_COLOR, 213: r.CONSTANT_ALPHA, 214: r.ONE_MINUS_CONSTANT_ALPHA };
  function R(P, ne, k, K, le, oe, Pe, at, _t, Ze) {
    if (P === 0) {
      _ === true && (Te(r.BLEND), _ = false);
      return;
    }
    if (_ === false && (se(r.BLEND), _ = true), P !== 5) {
      if (P !== m || Ze !== y) {
        if ((f !== 100 || S !== 100) && (r.blendEquation(r.FUNC_ADD), f = 100, S = 100), Ze) switch (P) {
          case 1:
            r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            r.blendFunc(r.ONE, r.ONE);
            break;
          case 3:
            r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
            break;
          case 4:
            r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break;
        }
        else switch (P) {
          case 1:
            r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
            break;
          case 2:
            r.blendFunc(r.SRC_ALPHA, r.ONE);
            break;
          case 3:
            r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
            break;
          case 4:
            r.blendFunc(r.ZERO, r.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", P);
            break;
        }
        A = null, E = null, I = null, b = null, w.set(0, 0, 0), N = 0, m = P, y = Ze;
      }
      return;
    }
    le = le || ne, oe = oe || k, Pe = Pe || K, (ne !== f || le !== S) && (r.blendEquationSeparate(Ve[ne], Ve[le]), f = ne, S = le), (k !== A || K !== E || oe !== I || Pe !== b) && (r.blendFuncSeparate(lt[k], lt[K], lt[oe], lt[Pe]), A = k, E = K, I = oe, b = Pe), (at.equals(w) === false || _t !== N) && (r.blendColor(at.r, at.g, at.b, _t), w.copy(at), N = _t), m = P, y = false;
  }
  function Lt(P, ne) {
    P.side === 2 ? Te(r.CULL_FACE) : se(r.CULL_FACE);
    let k = P.side === 1;
    ne && (k = !k), Ge(k), P.blending === 1 && P.transparent === false ? R(0) : R(P.blending, P.blendEquation, P.blendSrc, P.blendDst, P.blendEquationAlpha, P.blendSrcAlpha, P.blendDstAlpha, P.blendColor, P.blendAlpha, P.premultipliedAlpha), a.setFunc(P.depthFunc), a.setTest(P.depthTest), a.setMask(P.depthWrite), s.setMask(P.colorWrite);
    const K = P.stencilWrite;
    o.setTest(K), K && (o.setMask(P.stencilWriteMask), o.setFunc(P.stencilFunc, P.stencilRef, P.stencilFuncMask), o.setOp(P.stencilFail, P.stencilZFail, P.stencilZPass)), it(P.polygonOffset, P.polygonOffsetFactor, P.polygonOffsetUnits), P.alphaToCoverage === true ? se(r.SAMPLE_ALPHA_TO_COVERAGE) : Te(r.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Ge(P) {
    M !== P && (P ? r.frontFace(r.CW) : r.frontFace(r.CCW), M = P);
  }
  function ke(P) {
    P !== 0 ? (se(r.CULL_FACE), P !== C && (P === 1 ? r.cullFace(r.BACK) : P === 2 ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : Te(r.CULL_FACE), C = P;
  }
  function xe(P) {
    P !== q && (z && r.lineWidth(P), q = P);
  }
  function it(P, ne, k) {
    P ? (se(r.POLYGON_OFFSET_FILL), (G !== ne || W !== k) && (r.polygonOffset(ne, k), G = ne, W = k)) : Te(r.POLYGON_OFFSET_FILL);
  }
  function ve(P) {
    P ? se(r.SCISSOR_TEST) : Te(r.SCISSOR_TEST);
  }
  function T(P) {
    P === void 0 && (P = r.TEXTURE0 + Z - 1), re !== P && (r.activeTexture(P), re = P);
  }
  function x(P, ne, k) {
    k === void 0 && (re === null ? k = r.TEXTURE0 + Z - 1 : k = re);
    let K = he[k];
    K === void 0 && (K = { type: void 0, texture: void 0 }, he[k] = K), (K.type !== P || K.texture !== ne) && (re !== k && (r.activeTexture(k), re = k), r.bindTexture(P, ne || me[P]), K.type = P, K.texture = ne);
  }
  function F() {
    const P = he[re];
    P !== void 0 && P.type !== void 0 && (r.bindTexture(P.type, null), P.type = void 0, P.texture = void 0);
  }
  function Y() {
    try {
      r.compressedTexImage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function j() {
    try {
      r.compressedTexImage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function V() {
    try {
      r.texSubImage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ge() {
    try {
      r.texSubImage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ae() {
    try {
      r.compressedTexSubImage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ue() {
    try {
      r.compressedTexSubImage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function We() {
    try {
      r.texStorage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function J() {
    try {
      r.texStorage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function de() {
    try {
      r.texImage2D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function ye() {
    try {
      r.texImage3D.apply(r, arguments);
    } catch (P) {
      console.error("THREE.WebGLState:", P);
    }
  }
  function Ae(P) {
    et.equals(P) === false && (r.scissor(P.x, P.y, P.z, P.w), et.copy(P));
  }
  function fe(P) {
    X.equals(P) === false && (r.viewport(P.x, P.y, P.z, P.w), X.copy(P));
  }
  function He(P, ne) {
    let k = c.get(ne);
    k === void 0 && (k = /* @__PURE__ */ new WeakMap(), c.set(ne, k));
    let K = k.get(P);
    K === void 0 && (K = r.getUniformBlockIndex(ne, P.name), k.set(P, K));
  }
  function De(P, ne) {
    const K = c.get(ne).get(P);
    l.get(ne) !== K && (r.uniformBlockBinding(ne, K, P.__bindingPointIndex), l.set(ne, K));
  }
  function nt() {
    r.disable(r.BLEND), r.disable(r.CULL_FACE), r.disable(r.DEPTH_TEST), r.disable(r.POLYGON_OFFSET_FILL), r.disable(r.SCISSOR_TEST), r.disable(r.STENCIL_TEST), r.disable(r.SAMPLE_ALPHA_TO_COVERAGE), r.blendEquation(r.FUNC_ADD), r.blendFunc(r.ONE, r.ZERO), r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO), r.blendColor(0, 0, 0, 0), r.colorMask(true, true, true, true), r.clearColor(0, 0, 0, 0), r.depthMask(true), r.depthFunc(r.LESS), a.setReversed(false), r.clearDepth(1), r.stencilMask(4294967295), r.stencilFunc(r.ALWAYS, 0, 4294967295), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), r.clearStencil(0), r.cullFace(r.BACK), r.frontFace(r.CCW), r.polygonOffset(0, 0), r.activeTexture(r.TEXTURE0), r.bindFramebuffer(r.FRAMEBUFFER, null), r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), r.bindFramebuffer(r.READ_FRAMEBUFFER, null), r.useProgram(null), r.lineWidth(1), r.scissor(0, 0, r.canvas.width, r.canvas.height), r.viewport(0, 0, r.canvas.width, r.canvas.height), h = {}, re = null, he = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, _ = false, m = null, f = null, A = null, E = null, S = null, I = null, b = null, w = new Ee(0, 0, 0), N = 0, y = false, M = null, C = null, q = null, G = null, W = null, et.set(0, 0, r.canvas.width, r.canvas.height), X.set(0, 0, r.canvas.width, r.canvas.height), s.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: s, depth: a, stencil: o }, enable: se, disable: Te, bindFramebuffer: we, drawBuffers: Ne, useProgram: st, setBlending: R, setMaterial: Lt, setFlipSided: Ge, setCullFace: ke, setLineWidth: xe, setPolygonOffset: it, setScissorTest: ve, activeTexture: T, bindTexture: x, unbindTexture: F, compressedTexImage2D: Y, compressedTexImage3D: j, texImage2D: de, texImage3D: ye, updateUBOMapping: He, uniformBlockBinding: De, texStorage2D: We, texStorage3D: J, texSubImage2D: V, texSubImage3D: ge, compressedTexSubImage2D: ae, compressedTexSubImage3D: ue, scissor: Ae, viewport: fe, reset: nt };
}
function If(r, e, t, n, i, s, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new Be(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(T, x) {
    return p ? new OffscreenCanvas(T, x) : Ri("canvas");
  }
  function _(T, x, F) {
    let Y = 1;
    const j = ve(T);
    if ((j.width > F || j.height > F) && (Y = F / Math.max(j.width, j.height)), Y < 1) if (typeof HTMLImageElement < "u" && T instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && T instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && T instanceof ImageBitmap || typeof VideoFrame < "u" && T instanceof VideoFrame) {
      const V = Math.floor(Y * j.width), ge = Math.floor(Y * j.height);
      u === void 0 && (u = g(V, ge));
      const ae = x ? g(V, ge) : u;
      return ae.width = V, ae.height = ge, ae.getContext("2d").drawImage(T, 0, 0, V, ge), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + V + "x" + ge + ")."), ae;
    } else return "data" in T && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."), T;
    return T;
  }
  function m(T) {
    return T.generateMipmaps;
  }
  function f(T) {
    r.generateMipmap(T);
  }
  function A(T) {
    return T.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : T.isWebGL3DRenderTarget ? r.TEXTURE_3D : T.isWebGLArrayRenderTarget || T.isCompressedArrayTexture ? r.TEXTURE_2D_ARRAY : r.TEXTURE_2D;
  }
  function E(T, x, F, Y, j = false) {
    if (T !== null) {
      if (r[T] !== void 0) return r[T];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + T + "'");
    }
    let V = x;
    if (x === r.RED && (F === r.FLOAT && (V = r.R32F), F === r.HALF_FLOAT && (V = r.R16F), F === r.UNSIGNED_BYTE && (V = r.R8)), x === r.RED_INTEGER && (F === r.UNSIGNED_BYTE && (V = r.R8UI), F === r.UNSIGNED_SHORT && (V = r.R16UI), F === r.UNSIGNED_INT && (V = r.R32UI), F === r.BYTE && (V = r.R8I), F === r.SHORT && (V = r.R16I), F === r.INT && (V = r.R32I)), x === r.RG && (F === r.FLOAT && (V = r.RG32F), F === r.HALF_FLOAT && (V = r.RG16F), F === r.UNSIGNED_BYTE && (V = r.RG8)), x === r.RG_INTEGER && (F === r.UNSIGNED_BYTE && (V = r.RG8UI), F === r.UNSIGNED_SHORT && (V = r.RG16UI), F === r.UNSIGNED_INT && (V = r.RG32UI), F === r.BYTE && (V = r.RG8I), F === r.SHORT && (V = r.RG16I), F === r.INT && (V = r.RG32I)), x === r.RGB_INTEGER && (F === r.UNSIGNED_BYTE && (V = r.RGB8UI), F === r.UNSIGNED_SHORT && (V = r.RGB16UI), F === r.UNSIGNED_INT && (V = r.RGB32UI), F === r.BYTE && (V = r.RGB8I), F === r.SHORT && (V = r.RGB16I), F === r.INT && (V = r.RGB32I)), x === r.RGBA_INTEGER && (F === r.UNSIGNED_BYTE && (V = r.RGBA8UI), F === r.UNSIGNED_SHORT && (V = r.RGBA16UI), F === r.UNSIGNED_INT && (V = r.RGBA32UI), F === r.BYTE && (V = r.RGBA8I), F === r.SHORT && (V = r.RGBA16I), F === r.INT && (V = r.RGBA32I)), x === r.RGB && F === r.UNSIGNED_INT_5_9_9_9_REV && (V = r.RGB9_E5), x === r.RGBA) {
      const ge = j ? dr : ze.getTransfer(Y);
      F === r.FLOAT && (V = r.RGBA32F), F === r.HALF_FLOAT && (V = r.RGBA16F), F === r.UNSIGNED_BYTE && (V = ge === Qe ? r.SRGB8_ALPHA8 : r.RGBA8), F === r.UNSIGNED_SHORT_4_4_4_4 && (V = r.RGBA4), F === r.UNSIGNED_SHORT_5_5_5_1 && (V = r.RGB5_A1);
    }
    return (V === r.R16F || V === r.R32F || V === r.RG16F || V === r.RG32F || V === r.RGBA16F || V === r.RGBA32F) && e.get("EXT_color_buffer_float"), V;
  }
  function S(T, x) {
    let F;
    return T ? x === null || x === 1014 || x === 1020 ? F = r.DEPTH24_STENCIL8 : x === 1015 ? F = r.DEPTH32F_STENCIL8 : x === 1012 && (F = r.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === 1014 || x === 1020 ? F = r.DEPTH_COMPONENT24 : x === 1015 ? F = r.DEPTH_COMPONENT32F : x === 1012 && (F = r.DEPTH_COMPONENT16), F;
  }
  function I(T, x) {
    return m(T) === true || T.isFramebufferTexture && T.minFilter !== 1003 && T.minFilter !== 1006 ? Math.log2(Math.max(x.width, x.height)) + 1 : T.mipmaps !== void 0 && T.mipmaps.length > 0 ? T.mipmaps.length : T.isCompressedTexture && Array.isArray(T.image) ? x.mipmaps.length : 1;
  }
  function b(T) {
    const x = T.target;
    x.removeEventListener("dispose", b), N(x), x.isVideoTexture && h.delete(x);
  }
  function w(T) {
    const x = T.target;
    x.removeEventListener("dispose", w), M(x);
  }
  function N(T) {
    const x = n.get(T);
    if (x.__webglInit === void 0) return;
    const F = T.source, Y = d.get(F);
    if (Y) {
      const j = Y[x.__cacheKey];
      j.usedTimes--, j.usedTimes === 0 && y(T), Object.keys(Y).length === 0 && d.delete(F);
    }
    n.remove(T);
  }
  function y(T) {
    const x = n.get(T);
    r.deleteTexture(x.__webglTexture);
    const F = T.source, Y = d.get(F);
    delete Y[x.__cacheKey], a.memory.textures--;
  }
  function M(T) {
    const x = n.get(T);
    if (T.depthTexture && (T.depthTexture.dispose(), n.remove(T.depthTexture)), T.isWebGLCubeRenderTarget) for (let Y = 0; Y < 6; Y++) {
      if (Array.isArray(x.__webglFramebuffer[Y])) for (let j = 0; j < x.__webglFramebuffer[Y].length; j++) r.deleteFramebuffer(x.__webglFramebuffer[Y][j]);
      else r.deleteFramebuffer(x.__webglFramebuffer[Y]);
      x.__webglDepthbuffer && r.deleteRenderbuffer(x.__webglDepthbuffer[Y]);
    }
    else {
      if (Array.isArray(x.__webglFramebuffer)) for (let Y = 0; Y < x.__webglFramebuffer.length; Y++) r.deleteFramebuffer(x.__webglFramebuffer[Y]);
      else r.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && r.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && r.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer) for (let Y = 0; Y < x.__webglColorRenderbuffer.length; Y++) x.__webglColorRenderbuffer[Y] && r.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);
      x.__webglDepthRenderbuffer && r.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const F = T.textures;
    for (let Y = 0, j = F.length; Y < j; Y++) {
      const V = n.get(F[Y]);
      V.__webglTexture && (r.deleteTexture(V.__webglTexture), a.memory.textures--), n.remove(F[Y]);
    }
    n.remove(T);
  }
  let C = 0;
  function q() {
    C = 0;
  }
  function G() {
    const T = C;
    return T >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + T + " texture units while this GPU supports only " + i.maxTextures), C += 1, T;
  }
  function W(T) {
    const x = [];
    return x.push(T.wrapS), x.push(T.wrapT), x.push(T.wrapR || 0), x.push(T.magFilter), x.push(T.minFilter), x.push(T.anisotropy), x.push(T.internalFormat), x.push(T.format), x.push(T.type), x.push(T.generateMipmaps), x.push(T.premultiplyAlpha), x.push(T.flipY), x.push(T.unpackAlignment), x.push(T.colorSpace), x.join();
  }
  function Z(T, x) {
    const F = n.get(T);
    if (T.isVideoTexture && xe(T), T.isRenderTargetTexture === false && T.version > 0 && F.__version !== T.version) {
      const Y = T.image;
      if (Y === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (Y.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        X(F, T, x);
        return;
      }
    }
    t.bindTexture(r.TEXTURE_2D, F.__webglTexture, r.TEXTURE0 + x);
  }
  function z(T, x) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      X(F, T, x);
      return;
    }
    t.bindTexture(r.TEXTURE_2D_ARRAY, F.__webglTexture, r.TEXTURE0 + x);
  }
  function Q(T, x) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      X(F, T, x);
      return;
    }
    t.bindTexture(r.TEXTURE_3D, F.__webglTexture, r.TEXTURE0 + x);
  }
  function H(T, x) {
    const F = n.get(T);
    if (T.version > 0 && F.__version !== T.version) {
      ee(F, T, x);
      return;
    }
    t.bindTexture(r.TEXTURE_CUBE_MAP, F.__webglTexture, r.TEXTURE0 + x);
  }
  const re = { 1e3: r.REPEAT, 1001: r.CLAMP_TO_EDGE, 1002: r.MIRRORED_REPEAT }, he = { 1003: r.NEAREST, 1004: r.NEAREST_MIPMAP_NEAREST, 1005: r.NEAREST_MIPMAP_LINEAR, 1006: r.LINEAR, 1007: r.LINEAR_MIPMAP_NEAREST, 1008: r.LINEAR_MIPMAP_LINEAR }, _e = { 512: r.NEVER, 519: r.ALWAYS, 513: r.LESS, 515: r.LEQUAL, 514: r.EQUAL, 518: r.GEQUAL, 516: r.GREATER, 517: r.NOTEQUAL };
  function Ue(T, x) {
    if (x.type === 1015 && e.has("OES_texture_float_linear") === false && (x.magFilter === 1006 || x.magFilter === 1007 || x.magFilter === 1005 || x.magFilter === 1008 || x.minFilter === 1006 || x.minFilter === 1007 || x.minFilter === 1005 || x.minFilter === 1008) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), r.texParameteri(T, r.TEXTURE_WRAP_S, re[x.wrapS]), r.texParameteri(T, r.TEXTURE_WRAP_T, re[x.wrapT]), (T === r.TEXTURE_3D || T === r.TEXTURE_2D_ARRAY) && r.texParameteri(T, r.TEXTURE_WRAP_R, re[x.wrapR]), r.texParameteri(T, r.TEXTURE_MAG_FILTER, he[x.magFilter]), r.texParameteri(T, r.TEXTURE_MIN_FILTER, he[x.minFilter]), x.compareFunction && (r.texParameteri(T, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE), r.texParameteri(T, r.TEXTURE_COMPARE_FUNC, _e[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (x.magFilter === 1003 || x.minFilter !== 1005 && x.minFilter !== 1008 || x.type === 1015 && e.has("OES_texture_float_linear") === false) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        r.texParameterf(T, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function et(T, x) {
    let F = false;
    T.__webglInit === void 0 && (T.__webglInit = true, x.addEventListener("dispose", b));
    const Y = x.source;
    let j = d.get(Y);
    j === void 0 && (j = {}, d.set(Y, j));
    const V = W(x);
    if (V !== T.__cacheKey) {
      j[V] === void 0 && (j[V] = { texture: r.createTexture(), usedTimes: 0 }, a.memory.textures++, F = true), j[V].usedTimes++;
      const ge = j[T.__cacheKey];
      ge !== void 0 && (j[T.__cacheKey].usedTimes--, ge.usedTimes === 0 && y(x)), T.__cacheKey = V, T.__webglTexture = j[V].texture;
    }
    return F;
  }
  function X(T, x, F) {
    let Y = r.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (Y = r.TEXTURE_2D_ARRAY), x.isData3DTexture && (Y = r.TEXTURE_3D);
    const j = et(T, x), V = x.source;
    t.bindTexture(Y, T.__webglTexture, r.TEXTURE0 + F);
    const ge = n.get(V);
    if (V.version !== ge.__version || j === true) {
      t.activeTexture(r.TEXTURE0 + F);
      const ae = ze.getPrimaries(ze.workingColorSpace), ue = x.colorSpace === "" ? null : ze.getPrimaries(x.colorSpace), We = x.colorSpace === "" || ae === ue ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, We);
      let J = _(x.image, false, i.maxTextureSize);
      J = it(x, J);
      const de = s.convert(x.format, x.colorSpace), ye = s.convert(x.type);
      let Ae = E(x.internalFormat, de, ye, x.colorSpace, x.isVideoTexture);
      Ue(Y, x);
      let fe;
      const He = x.mipmaps, De = x.isVideoTexture !== true, nt = ge.__version === void 0 || j === true, P = V.dataReady, ne = I(x, J);
      if (x.isDepthTexture) Ae = S(x.format === 1027, x.type), nt && (De ? t.texStorage2D(r.TEXTURE_2D, 1, Ae, J.width, J.height) : t.texImage2D(r.TEXTURE_2D, 0, Ae, J.width, J.height, 0, de, ye, null));
      else if (x.isDataTexture) if (He.length > 0) {
        De && nt && t.texStorage2D(r.TEXTURE_2D, ne, Ae, He[0].width, He[0].height);
        for (let k = 0, K = He.length; k < K; k++) fe = He[k], De ? P && t.texSubImage2D(r.TEXTURE_2D, k, 0, 0, fe.width, fe.height, de, ye, fe.data) : t.texImage2D(r.TEXTURE_2D, k, Ae, fe.width, fe.height, 0, de, ye, fe.data);
        x.generateMipmaps = false;
      } else De ? (nt && t.texStorage2D(r.TEXTURE_2D, ne, Ae, J.width, J.height), P && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, J.width, J.height, de, ye, J.data)) : t.texImage2D(r.TEXTURE_2D, 0, Ae, J.width, J.height, 0, de, ye, J.data);
      else if (x.isCompressedTexture) if (x.isCompressedArrayTexture) {
        De && nt && t.texStorage3D(r.TEXTURE_2D_ARRAY, ne, Ae, He[0].width, He[0].height, J.depth);
        for (let k = 0, K = He.length; k < K; k++) if (fe = He[k], x.format !== 1023) if (de !== null) if (De) {
          if (P) if (x.layerUpdates.size > 0) {
            const le = _a(fe.width, fe.height, x.format, x.type);
            for (const oe of x.layerUpdates) {
              const Pe = fe.data.subarray(oe * le / fe.data.BYTES_PER_ELEMENT, (oe + 1) * le / fe.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, k, 0, 0, oe, fe.width, fe.height, 1, de, Pe);
            }
            x.clearLayerUpdates();
          } else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, k, 0, 0, 0, fe.width, fe.height, J.depth, de, fe.data);
        } else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, k, Ae, fe.width, fe.height, J.depth, 0, fe.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else De ? P && t.texSubImage3D(r.TEXTURE_2D_ARRAY, k, 0, 0, 0, fe.width, fe.height, J.depth, de, ye, fe.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, k, Ae, fe.width, fe.height, J.depth, 0, de, ye, fe.data);
      } else {
        De && nt && t.texStorage2D(r.TEXTURE_2D, ne, Ae, He[0].width, He[0].height);
        for (let k = 0, K = He.length; k < K; k++) fe = He[k], x.format !== 1023 ? de !== null ? De ? P && t.compressedTexSubImage2D(r.TEXTURE_2D, k, 0, 0, fe.width, fe.height, de, fe.data) : t.compressedTexImage2D(r.TEXTURE_2D, k, Ae, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : De ? P && t.texSubImage2D(r.TEXTURE_2D, k, 0, 0, fe.width, fe.height, de, ye, fe.data) : t.texImage2D(r.TEXTURE_2D, k, Ae, fe.width, fe.height, 0, de, ye, fe.data);
      }
      else if (x.isDataArrayTexture) if (De) {
        if (nt && t.texStorage3D(r.TEXTURE_2D_ARRAY, ne, Ae, J.width, J.height, J.depth), P) if (x.layerUpdates.size > 0) {
          const k = _a(J.width, J.height, x.format, x.type);
          for (const K of x.layerUpdates) {
            const le = J.data.subarray(K * k / J.data.BYTES_PER_ELEMENT, (K + 1) * k / J.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, K, J.width, J.height, 1, de, ye, le);
          }
          x.clearLayerUpdates();
        } else t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, de, ye, J.data);
      } else t.texImage3D(r.TEXTURE_2D_ARRAY, 0, Ae, J.width, J.height, J.depth, 0, de, ye, J.data);
      else if (x.isData3DTexture) De ? (nt && t.texStorage3D(r.TEXTURE_3D, ne, Ae, J.width, J.height, J.depth), P && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, de, ye, J.data)) : t.texImage3D(r.TEXTURE_3D, 0, Ae, J.width, J.height, J.depth, 0, de, ye, J.data);
      else if (x.isFramebufferTexture) {
        if (nt) if (De) t.texStorage2D(r.TEXTURE_2D, ne, Ae, J.width, J.height);
        else {
          let k = J.width, K = J.height;
          for (let le = 0; le < ne; le++) t.texImage2D(r.TEXTURE_2D, le, Ae, k, K, 0, de, ye, null), k >>= 1, K >>= 1;
        }
      } else if (He.length > 0) {
        if (De && nt) {
          const k = ve(He[0]);
          t.texStorage2D(r.TEXTURE_2D, ne, Ae, k.width, k.height);
        }
        for (let k = 0, K = He.length; k < K; k++) fe = He[k], De ? P && t.texSubImage2D(r.TEXTURE_2D, k, 0, 0, de, ye, fe) : t.texImage2D(r.TEXTURE_2D, k, Ae, de, ye, fe);
        x.generateMipmaps = false;
      } else if (De) {
        if (nt) {
          const k = ve(J);
          t.texStorage2D(r.TEXTURE_2D, ne, Ae, k.width, k.height);
        }
        P && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, de, ye, J);
      } else t.texImage2D(r.TEXTURE_2D, 0, Ae, de, ye, J);
      m(x) && f(Y), ge.__version = V.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function ee(T, x, F) {
    if (x.image.length !== 6) return;
    const Y = et(T, x), j = x.source;
    t.bindTexture(r.TEXTURE_CUBE_MAP, T.__webglTexture, r.TEXTURE0 + F);
    const V = n.get(j);
    if (j.version !== V.__version || Y === true) {
      t.activeTexture(r.TEXTURE0 + F);
      const ge = ze.getPrimaries(ze.workingColorSpace), ae = x.colorSpace === "" ? null : ze.getPrimaries(x.colorSpace), ue = x.colorSpace === "" || ge === ae ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
      r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, x.flipY), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), r.pixelStorei(r.UNPACK_ALIGNMENT, x.unpackAlignment), r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      const We = x.isCompressedTexture || x.image[0].isCompressedTexture, J = x.image[0] && x.image[0].isDataTexture, de = [];
      for (let K = 0; K < 6; K++) !We && !J ? de[K] = _(x.image[K], true, i.maxCubemapSize) : de[K] = J ? x.image[K].image : x.image[K], de[K] = it(x, de[K]);
      const ye = de[0], Ae = s.convert(x.format, x.colorSpace), fe = s.convert(x.type), He = E(x.internalFormat, Ae, fe, x.colorSpace), De = x.isVideoTexture !== true, nt = V.__version === void 0 || Y === true, P = j.dataReady;
      let ne = I(x, ye);
      Ue(r.TEXTURE_CUBE_MAP, x);
      let k;
      if (We) {
        De && nt && t.texStorage2D(r.TEXTURE_CUBE_MAP, ne, He, ye.width, ye.height);
        for (let K = 0; K < 6; K++) {
          k = de[K].mipmaps;
          for (let le = 0; le < k.length; le++) {
            const oe = k[le];
            x.format !== 1023 ? Ae !== null ? De ? P && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, 0, 0, oe.width, oe.height, Ae, oe.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, He, oe.width, oe.height, 0, oe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : De ? P && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, 0, 0, oe.width, oe.height, Ae, fe, oe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, le, He, oe.width, oe.height, 0, Ae, fe, oe.data);
          }
        }
      } else {
        if (k = x.mipmaps, De && nt) {
          k.length > 0 && ne++;
          const K = ve(de[0]);
          t.texStorage2D(r.TEXTURE_CUBE_MAP, ne, He, K.width, K.height);
        }
        for (let K = 0; K < 6; K++) if (J) {
          De ? P && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, de[K].width, de[K].height, Ae, fe, de[K].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, He, de[K].width, de[K].height, 0, Ae, fe, de[K].data);
          for (let le = 0; le < k.length; le++) {
            const Pe = k[le].image[K].image;
            De ? P && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, 0, 0, Pe.width, Pe.height, Ae, fe, Pe.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, He, Pe.width, Pe.height, 0, Ae, fe, Pe.data);
          }
        } else {
          De ? P && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, 0, 0, Ae, fe, de[K]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, 0, He, Ae, fe, de[K]);
          for (let le = 0; le < k.length; le++) {
            const oe = k[le];
            De ? P && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, 0, 0, Ae, fe, oe.image[K]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + K, le + 1, He, Ae, fe, oe.image[K]);
          }
        }
      }
      m(x) && f(r.TEXTURE_CUBE_MAP), V.__version = j.version, x.onUpdate && x.onUpdate(x);
    }
    T.__version = x.version;
  }
  function me(T, x, F, Y, j, V) {
    const ge = s.convert(F.format, F.colorSpace), ae = s.convert(F.type), ue = E(F.internalFormat, ge, ae, F.colorSpace), We = n.get(x), J = n.get(F);
    if (J.__renderTarget = x, !We.__hasExternalTextures) {
      const de = Math.max(1, x.width >> V), ye = Math.max(1, x.height >> V);
      j === r.TEXTURE_3D || j === r.TEXTURE_2D_ARRAY ? t.texImage3D(j, V, ue, de, ye, x.depth, 0, ge, ae, null) : t.texImage2D(j, V, ue, de, ye, 0, ge, ae, null);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, T), ke(x) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Y, j, J.__webglTexture, 0, Ge(x)) : (j === r.TEXTURE_2D || j >= r.TEXTURE_CUBE_MAP_POSITIVE_X && j <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Y, j, J.__webglTexture, V), t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function se(T, x, F) {
    if (r.bindRenderbuffer(r.RENDERBUFFER, T), x.depthBuffer) {
      const Y = x.depthTexture, j = Y && Y.isDepthTexture ? Y.type : null, V = S(x.stencilBuffer, j), ge = x.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, ae = Ge(x);
      ke(x) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, ae, V, x.width, x.height) : F ? r.renderbufferStorageMultisample(r.RENDERBUFFER, ae, V, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, V, x.width, x.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, ge, r.RENDERBUFFER, T);
    } else {
      const Y = x.textures;
      for (let j = 0; j < Y.length; j++) {
        const V = Y[j], ge = s.convert(V.format, V.colorSpace), ae = s.convert(V.type), ue = E(V.internalFormat, ge, ae, V.colorSpace), We = Ge(x);
        F && ke(x) === false ? r.renderbufferStorageMultisample(r.RENDERBUFFER, We, ue, x.width, x.height) : ke(x) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, We, ue, x.width, x.height) : r.renderbufferStorage(r.RENDERBUFFER, ue, x.width, x.height);
      }
    }
    r.bindRenderbuffer(r.RENDERBUFFER, null);
  }
  function Te(T, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(r.FRAMEBUFFER, T), !(x.depthTexture && x.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const Y = n.get(x.depthTexture);
    Y.__renderTarget = x, (!Y.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = true), Z(x.depthTexture, 0);
    const j = Y.__webglTexture, V = Ge(x);
    if (x.depthTexture.format === 1026) ke(x) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, j, 0, V) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, j, 0);
    else if (x.depthTexture.format === 1027) ke(x) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, j, 0, V) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, j, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function we(T) {
    const x = n.get(T), F = T.isWebGLCubeRenderTarget === true;
    if (x.__boundDepthTexture !== T.depthTexture) {
      const Y = T.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), Y) {
        const j = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, Y.removeEventListener("dispose", j);
        };
        Y.addEventListener("dispose", j), x.__depthDisposeCallback = j;
      }
      x.__boundDepthTexture = Y;
    }
    if (T.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      Te(x.__webglFramebuffer, T);
    } else if (F) {
      x.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++) if (t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer[Y]), x.__webglDepthbuffer[Y] === void 0) x.__webglDepthbuffer[Y] = r.createRenderbuffer(), se(x.__webglDepthbuffer[Y], T, false);
      else {
        const j = T.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, V = x.__webglDepthbuffer[Y];
        r.bindRenderbuffer(r.RENDERBUFFER, V), r.framebufferRenderbuffer(r.FRAMEBUFFER, j, r.RENDERBUFFER, V);
      }
    } else if (t.bindFramebuffer(r.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0) x.__webglDepthbuffer = r.createRenderbuffer(), se(x.__webglDepthbuffer, T, false);
    else {
      const Y = T.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, j = x.__webglDepthbuffer;
      r.bindRenderbuffer(r.RENDERBUFFER, j), r.framebufferRenderbuffer(r.FRAMEBUFFER, Y, r.RENDERBUFFER, j);
    }
    t.bindFramebuffer(r.FRAMEBUFFER, null);
  }
  function Ne(T, x, F) {
    const Y = n.get(T);
    x !== void 0 && me(Y.__webglFramebuffer, T, T.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0), F !== void 0 && we(T);
  }
  function st(T) {
    const x = T.texture, F = n.get(T), Y = n.get(x);
    T.addEventListener("dispose", w);
    const j = T.textures, V = T.isWebGLCubeRenderTarget === true, ge = j.length > 1;
    if (ge || (Y.__webglTexture === void 0 && (Y.__webglTexture = r.createTexture()), Y.__version = x.version, a.memory.textures++), V) {
      F.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++) if (x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer[ae] = [];
        for (let ue = 0; ue < x.mipmaps.length; ue++) F.__webglFramebuffer[ae][ue] = r.createFramebuffer();
      } else F.__webglFramebuffer[ae] = r.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let ae = 0; ae < x.mipmaps.length; ae++) F.__webglFramebuffer[ae] = r.createFramebuffer();
      } else F.__webglFramebuffer = r.createFramebuffer();
      if (ge) for (let ae = 0, ue = j.length; ae < ue; ae++) {
        const We = n.get(j[ae]);
        We.__webglTexture === void 0 && (We.__webglTexture = r.createTexture(), a.memory.textures++);
      }
      if (T.samples > 0 && ke(T) === false) {
        F.__webglMultisampledFramebuffer = r.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(r.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < j.length; ae++) {
          const ue = j[ae];
          F.__webglColorRenderbuffer[ae] = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, F.__webglColorRenderbuffer[ae]);
          const We = s.convert(ue.format, ue.colorSpace), J = s.convert(ue.type), de = E(ue.internalFormat, We, J, ue.colorSpace, T.isXRRenderTarget === true), ye = Ge(T);
          r.renderbufferStorageMultisample(r.RENDERBUFFER, ye, de, T.width, T.height), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ae, r.RENDERBUFFER, F.__webglColorRenderbuffer[ae]);
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null), T.depthBuffer && (F.__webglDepthRenderbuffer = r.createRenderbuffer(), se(F.__webglDepthRenderbuffer, T, true)), t.bindFramebuffer(r.FRAMEBUFFER, null);
      }
    }
    if (V) {
      t.bindTexture(r.TEXTURE_CUBE_MAP, Y.__webglTexture), Ue(r.TEXTURE_CUBE_MAP, x);
      for (let ae = 0; ae < 6; ae++) if (x.mipmaps && x.mipmaps.length > 0) for (let ue = 0; ue < x.mipmaps.length; ue++) me(F.__webglFramebuffer[ae][ue], T, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ae, ue);
      else me(F.__webglFramebuffer[ae], T, x, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      m(x) && f(r.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ge) {
      for (let ae = 0, ue = j.length; ae < ue; ae++) {
        const We = j[ae], J = n.get(We);
        t.bindTexture(r.TEXTURE_2D, J.__webglTexture), Ue(r.TEXTURE_2D, We), me(F.__webglFramebuffer, T, We, r.COLOR_ATTACHMENT0 + ae, r.TEXTURE_2D, 0), m(We) && f(r.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = r.TEXTURE_2D;
      if ((T.isWebGL3DRenderTarget || T.isWebGLArrayRenderTarget) && (ae = T.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY), t.bindTexture(ae, Y.__webglTexture), Ue(ae, x), x.mipmaps && x.mipmaps.length > 0) for (let ue = 0; ue < x.mipmaps.length; ue++) me(F.__webglFramebuffer[ue], T, x, r.COLOR_ATTACHMENT0, ae, ue);
      else me(F.__webglFramebuffer, T, x, r.COLOR_ATTACHMENT0, ae, 0);
      m(x) && f(ae), t.unbindTexture();
    }
    T.depthBuffer && we(T);
  }
  function Ve(T) {
    const x = T.textures;
    for (let F = 0, Y = x.length; F < Y; F++) {
      const j = x[F];
      if (m(j)) {
        const V = A(T), ge = n.get(j).__webglTexture;
        t.bindTexture(V, ge), f(V), t.unbindTexture();
      }
    }
  }
  const lt = [], R = [];
  function Lt(T) {
    if (T.samples > 0) {
      if (ke(T) === false) {
        const x = T.textures, F = T.width, Y = T.height;
        let j = r.COLOR_BUFFER_BIT;
        const V = T.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT, ge = n.get(T), ae = x.length > 1;
        if (ae) for (let ue = 0; ue < x.length; ue++) t.bindFramebuffer(r.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.RENDERBUFFER, null), t.bindFramebuffer(r.FRAMEBUFFER, ge.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.TEXTURE_2D, null, 0);
        t.bindFramebuffer(r.READ_FRAMEBUFFER, ge.__webglMultisampledFramebuffer), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, ge.__webglFramebuffer);
        for (let ue = 0; ue < x.length; ue++) {
          if (T.resolveDepthBuffer && (T.depthBuffer && (j |= r.DEPTH_BUFFER_BIT), T.stencilBuffer && T.resolveStencilBuffer && (j |= r.STENCIL_BUFFER_BIT)), ae) {
            r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, ge.__webglColorRenderbuffer[ue]);
            const We = n.get(x[ue]).__webglTexture;
            r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, We, 0);
          }
          r.blitFramebuffer(0, 0, F, Y, 0, 0, F, Y, j, r.NEAREST), l === true && (lt.length = 0, R.length = 0, lt.push(r.COLOR_ATTACHMENT0 + ue), T.depthBuffer && T.resolveDepthBuffer === false && (lt.push(V), R.push(V), r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, R)), r.invalidateFramebuffer(r.READ_FRAMEBUFFER, lt));
        }
        if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null), t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null), ae) for (let ue = 0; ue < x.length; ue++) {
          t.bindFramebuffer(r.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.RENDERBUFFER, ge.__webglColorRenderbuffer[ue]);
          const We = n.get(x[ue]).__webglTexture;
          t.bindFramebuffer(r.FRAMEBUFFER, ge.__webglFramebuffer), r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ue, r.TEXTURE_2D, We, 0);
        }
        t.bindFramebuffer(r.DRAW_FRAMEBUFFER, ge.__webglMultisampledFramebuffer);
      } else if (T.depthBuffer && T.resolveDepthBuffer === false && l) {
        const x = T.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
        r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function Ge(T) {
    return Math.min(i.maxSamples, T.samples);
  }
  function ke(T) {
    const x = n.get(T);
    return T.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && x.__useRenderToTexture !== false;
  }
  function xe(T) {
    const x = a.render.frame;
    h.get(T) !== x && (h.set(T, x), T.update());
  }
  function it(T, x) {
    const F = T.colorSpace, Y = T.format, j = T.type;
    return T.isCompressedTexture === true || T.isVideoTexture === true || F !== Et && F !== "" && (ze.getTransfer(F) === Qe ? (Y !== 1023 || j !== 1009) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), x;
  }
  function ve(T) {
    return typeof HTMLImageElement < "u" && T instanceof HTMLImageElement ? (c.width = T.naturalWidth || T.width, c.height = T.naturalHeight || T.height) : typeof VideoFrame < "u" && T instanceof VideoFrame ? (c.width = T.displayWidth, c.height = T.displayHeight) : (c.width = T.width, c.height = T.height), c;
  }
  this.allocateTextureUnit = G, this.resetTextureUnits = q, this.setTexture2D = Z, this.setTexture2DArray = z, this.setTexture3D = Q, this.setTextureCube = H, this.rebindTextures = Ne, this.setupRenderTarget = st, this.updateRenderTargetMipmap = Ve, this.updateMultisampleRenderTarget = Lt, this.setupDepthRenderbuffer = we, this.setupFrameBufferTexture = me, this.useMultisampledRTT = ke;
}
function Uf(r, e) {
  function t(n, i = "") {
    let s;
    const a = ze.getTransfer(i);
    if (n === 1009) return r.UNSIGNED_BYTE;
    if (n === 1017) return r.UNSIGNED_SHORT_4_4_4_4;
    if (n === 1018) return r.UNSIGNED_SHORT_5_5_5_1;
    if (n === 35902) return r.UNSIGNED_INT_5_9_9_9_REV;
    if (n === 1010) return r.BYTE;
    if (n === 1011) return r.SHORT;
    if (n === 1012) return r.UNSIGNED_SHORT;
    if (n === 1013) return r.INT;
    if (n === 1014) return r.UNSIGNED_INT;
    if (n === 1015) return r.FLOAT;
    if (n === 1016) return r.HALF_FLOAT;
    if (n === 1021) return r.ALPHA;
    if (n === 1022) return r.RGB;
    if (n === 1023) return r.RGBA;
    if (n === 1024) return r.LUMINANCE;
    if (n === 1025) return r.LUMINANCE_ALPHA;
    if (n === 1026) return r.DEPTH_COMPONENT;
    if (n === 1027) return r.DEPTH_STENCIL;
    if (n === 1028) return r.RED;
    if (n === 1029) return r.RED_INTEGER;
    if (n === 1030) return r.RG;
    if (n === 1031) return r.RG_INTEGER;
    if (n === 1033) return r.RGBA_INTEGER;
    if (n === 33776 || n === 33777 || n === 33778 || n === 33779) if (a === Qe) if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"), s !== null) {
      if (n === 33776) return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === 33777) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === 33778) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === 33779) return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (s = e.get("WEBGL_compressed_texture_s3tc"), s !== null) {
      if (n === 33776) return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === 33777) return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === 33778) return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === 33779) return s.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === 35840 || n === 35841 || n === 35842 || n === 35843) if (s = e.get("WEBGL_compressed_texture_pvrtc"), s !== null) {
      if (n === 35840) return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === 35841) return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === 35842) return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === 35843) return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === 36196 || n === 37492 || n === 37496) if (s = e.get("WEBGL_compressed_texture_etc"), s !== null) {
      if (n === 36196 || n === 37492) return a === Qe ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
      if (n === 37496) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === 37808 || n === 37809 || n === 37810 || n === 37811 || n === 37812 || n === 37813 || n === 37814 || n === 37815 || n === 37816 || n === 37817 || n === 37818 || n === 37819 || n === 37820 || n === 37821) if (s = e.get("WEBGL_compressed_texture_astc"), s !== null) {
      if (n === 37808) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === 37809) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === 37810) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === 37811) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === 37812) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === 37813) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === 37814) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === 37815) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === 37816) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === 37817) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === 37818) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === 37819) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === 37820) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === 37821) return a === Qe ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === 36492 || n === 36494 || n === 36495) if (s = e.get("EXT_texture_compression_bptc"), s !== null) {
      if (n === 36492) return a === Qe ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === 36494) return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === 36495) return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === 36283 || n === 36284 || n === 36285 || n === 36286) if (s = e.get("EXT_texture_compression_rgtc"), s !== null) {
      if (n === 36492) return s.COMPRESSED_RED_RGTC1_EXT;
      if (n === 36284) return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === 36285) return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === 36286) return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === 1020 ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null;
  }
  return { convert: t };
}
const Nf = { type: "move" };
class Zr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new Fn(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new Fn(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new L(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new L()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new Fn(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new L(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new L()), this._grip;
  }
  dispatchEvent(e) {
    return this._targetRay !== null && this._targetRay.dispatchEvent(e), this._grip !== null && this._grip.dispatchEvent(e), this._hand !== null && this._hand.dispatchEvent(e), this;
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return this.dispatchEvent({ type: "connected", data: e }), this;
  }
  disconnect(e) {
    return this.dispatchEvent({ type: "disconnected", data: e }), this._targetRay !== null && (this._targetRay.visible = false), this._grip !== null && (this._grip.visible = false), this._hand !== null && (this._hand.visible = false), this;
  }
  update(e, t, n) {
    let i = null, s = null, a = null;
    const o = this._targetRay, l = this._grip, c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = true;
        for (const _ of e.hand.values()) {
          const m = t.getJointPose(_, n), f = this._getHandJoint(c, _);
          m !== null && (f.matrix.fromArray(m.transform.matrix), f.matrix.decompose(f.position, f.rotation, f.scale), f.matrixWorldNeedsUpdate = true, f.jointRadius = m.radius), f.visible = m !== null;
        }
        const h = c.joints["index-finger-tip"], u = c.joints["thumb-tip"], d = h.position.distanceTo(u.position), p = 0.02, g = 5e-3;
        c.inputState.pinching && d > p + g ? (c.inputState.pinching = false, this.dispatchEvent({ type: "pinchend", handedness: e.handedness, target: this })) : !c.inputState.pinching && d <= p - g && (c.inputState.pinching = true, this.dispatchEvent({ type: "pinchstart", handedness: e.handedness, target: this }));
      } else l !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n), s !== null && (l.matrix.fromArray(s.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, s.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(s.linearVelocity)) : l.hasLinearVelocity = false, s.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(s.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && s !== null && (i = s), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, i.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = false, i.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(Nf)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = s !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Fn();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Ff = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Of = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Bf {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new pt(), s = e.properties.get(i);
      s.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new xn({ vertexShader: Ff, fragmentShader: Of, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Pt(new mr(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    this.texture = null, this.mesh = null;
  }
  getDepthTexture() {
    return this.texture;
  }
}
class Gf extends ci {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, s = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, p = null, g = null;
    const _ = new Bf(), m = t.getContextAttributes();
    let f = null, A = null;
    const E = [], S = [], I = new Be();
    let b = null;
    const w = new bt();
    w.viewport = new Ye();
    const N = new bt();
    N.viewport = new Ye();
    const y = [w, N], M = new ql();
    let C = null, q = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(X) {
      let ee = E[X];
      return ee === void 0 && (ee = new Zr(), E[X] = ee), ee.getTargetRaySpace();
    }, this.getControllerGrip = function(X) {
      let ee = E[X];
      return ee === void 0 && (ee = new Zr(), E[X] = ee), ee.getGripSpace();
    }, this.getHand = function(X) {
      let ee = E[X];
      return ee === void 0 && (ee = new Zr(), E[X] = ee), ee.getHandSpace();
    };
    function G(X) {
      const ee = S.indexOf(X.inputSource);
      if (ee === -1) return;
      const me = E[ee];
      me !== void 0 && (me.update(X.inputSource, X.frame, c || a), me.dispatchEvent({ type: X.type, data: X.inputSource }));
    }
    function W() {
      i.removeEventListener("select", G), i.removeEventListener("selectstart", G), i.removeEventListener("selectend", G), i.removeEventListener("squeeze", G), i.removeEventListener("squeezestart", G), i.removeEventListener("squeezeend", G), i.removeEventListener("end", W), i.removeEventListener("inputsourceschange", Z);
      for (let X = 0; X < E.length; X++) {
        const ee = S[X];
        ee !== null && (S[X] = null, E[X].disconnect(ee));
      }
      C = null, q = null, _.reset(), e.setRenderTarget(f), p = null, d = null, u = null, i = null, A = null, et.stop(), n.isPresenting = false, e.setPixelRatio(b), e.setSize(I.width, I.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(X) {
      s = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(X) {
      o = X, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(X) {
      c = X;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(X) {
      if (i = X, i !== null) {
        if (f = e.getRenderTarget(), i.addEventListener("select", G), i.addEventListener("selectstart", G), i.addEventListener("selectend", G), i.addEventListener("squeeze", G), i.addEventListener("squeezestart", G), i.addEventListener("squeezeend", G), i.addEventListener("end", W), i.addEventListener("inputsourceschange", Z), m.xrCompatible !== true && await t.makeXRCompatible(), b = e.getPixelRatio(), e.getSize(I), i.renderState.layers === void 0) {
          const ee = { antialias: m.antialias, alpha: true, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: s };
          p = new XRWebGLLayer(i, t, ee), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, false), A = new On(p.framebufferWidth, p.framebufferHeight, { format: 1023, type: 1009, colorSpace: e.outputColorSpace, stencilBuffer: m.stencil });
        } else {
          let ee = null, me = null, se = null;
          m.depth && (se = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ee = m.stencil ? 1027 : 1026, me = m.stencil ? 1020 : 1014);
          const Te = { colorFormat: t.RGBA8, depthFormat: se, scaleFactor: s };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(Te), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), A = new On(d.textureWidth, d.textureHeight, { format: 1023, type: 1009, depthTexture: new so(d.textureWidth, d.textureHeight, me, void 0, void 0, void 0, void 0, void 0, void 0, ee), stencilBuffer: m.stencil, colorSpace: e.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false });
        }
        A.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), et.setContext(i), et.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function Z(X) {
      for (let ee = 0; ee < X.removed.length; ee++) {
        const me = X.removed[ee], se = S.indexOf(me);
        se >= 0 && (S[se] = null, E[se].disconnect(me));
      }
      for (let ee = 0; ee < X.added.length; ee++) {
        const me = X.added[ee];
        let se = S.indexOf(me);
        if (se === -1) {
          for (let we = 0; we < E.length; we++) if (we >= S.length) {
            S.push(me), se = we;
            break;
          } else if (S[we] === null) {
            S[we] = me, se = we;
            break;
          }
          if (se === -1) break;
        }
        const Te = E[se];
        Te && Te.connect(me);
      }
    }
    const z = new L(), Q = new L();
    function H(X, ee, me) {
      z.setFromMatrixPosition(ee.matrixWorld), Q.setFromMatrixPosition(me.matrixWorld);
      const se = z.distanceTo(Q), Te = ee.projectionMatrix.elements, we = me.projectionMatrix.elements, Ne = Te[14] / (Te[10] - 1), st = Te[14] / (Te[10] + 1), Ve = (Te[9] + 1) / Te[5], lt = (Te[9] - 1) / Te[5], R = (Te[8] - 1) / Te[0], Lt = (we[8] + 1) / we[0], Ge = Ne * R, ke = Ne * Lt, xe = se / (-R + Lt), it = xe * -R;
      if (ee.matrixWorld.decompose(X.position, X.quaternion, X.scale), X.translateX(it), X.translateZ(xe), X.matrixWorld.compose(X.position, X.quaternion, X.scale), X.matrixWorldInverse.copy(X.matrixWorld).invert(), Te[10] === -1) X.projectionMatrix.copy(ee.projectionMatrix), X.projectionMatrixInverse.copy(ee.projectionMatrixInverse);
      else {
        const ve = Ne + xe, T = st + xe, x = Ge - it, F = ke + (se - it), Y = Ve * st / T * ve, j = lt * st / T * ve;
        X.projectionMatrix.makePerspective(x, F, Y, j, ve, T), X.projectionMatrixInverse.copy(X.projectionMatrix).invert();
      }
    }
    function re(X, ee) {
      ee === null ? X.matrixWorld.copy(X.matrix) : X.matrixWorld.multiplyMatrices(ee.matrixWorld, X.matrix), X.matrixWorldInverse.copy(X.matrixWorld).invert();
    }
    this.updateCamera = function(X) {
      if (i === null) return;
      let ee = X.near, me = X.far;
      _.texture !== null && (_.depthNear > 0 && (ee = _.depthNear), _.depthFar > 0 && (me = _.depthFar)), M.near = N.near = w.near = ee, M.far = N.far = w.far = me, (C !== M.near || q !== M.far) && (i.updateRenderState({ depthNear: M.near, depthFar: M.far }), C = M.near, q = M.far), w.layers.mask = X.layers.mask | 2, N.layers.mask = X.layers.mask | 4, M.layers.mask = w.layers.mask | N.layers.mask;
      const se = X.parent, Te = M.cameras;
      re(M, se);
      for (let we = 0; we < Te.length; we++) re(Te[we], se);
      Te.length === 2 ? H(M, w, N) : M.projectionMatrix.copy(w.projectionMatrix), he(X, M, se);
    };
    function he(X, ee, me) {
      me === null ? X.matrix.copy(ee.matrixWorld) : (X.matrix.copy(me.matrixWorld), X.matrix.invert(), X.matrix.multiply(ee.matrixWorld)), X.matrix.decompose(X.position, X.quaternion, X.scale), X.updateMatrixWorld(true), X.projectionMatrix.copy(ee.projectionMatrix), X.projectionMatrixInverse.copy(ee.projectionMatrixInverse), X.isPerspectiveCamera && (X.fov = ri * 2 * Math.atan(1 / X.projectionMatrix.elements[5]), X.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(d === null && p === null)) return l;
    }, this.setFoveation = function(X) {
      l = X, d !== null && (d.fixedFoveation = X), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = X);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(M);
    };
    let _e = null;
    function Ue(X, ee) {
      if (h = ee.getViewerPose(c || a), g = ee, h !== null) {
        const me = h.views;
        p !== null && (e.setRenderTargetFramebuffer(A, p.framebuffer), e.setRenderTarget(A));
        let se = false;
        me.length !== M.cameras.length && (M.cameras.length = 0, se = true);
        for (let we = 0; we < me.length; we++) {
          const Ne = me[we];
          let st = null;
          if (p !== null) st = p.getViewport(Ne);
          else {
            const lt = u.getViewSubImage(d, Ne);
            st = lt.viewport, we === 0 && (e.setRenderTargetTextures(A, lt.colorTexture, d.ignoreDepthValues ? void 0 : lt.depthStencilTexture), e.setRenderTarget(A));
          }
          let Ve = y[we];
          Ve === void 0 && (Ve = new bt(), Ve.layers.enable(we), Ve.viewport = new Ye(), y[we] = Ve), Ve.matrix.fromArray(Ne.transform.matrix), Ve.matrix.decompose(Ve.position, Ve.quaternion, Ve.scale), Ve.projectionMatrix.fromArray(Ne.projectionMatrix), Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(), Ve.viewport.set(st.x, st.y, st.width, st.height), we === 0 && (M.matrix.copy(Ve.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), se === true && M.cameras.push(Ve);
        }
        const Te = i.enabledFeatures;
        if (Te && Te.includes("depth-sensing")) {
          const we = u.getDepthInformation(me[0]);
          we && we.isValid && we.texture && _.init(e, we, i.renderState);
        }
      }
      for (let me = 0; me < E.length; me++) {
        const se = S[me], Te = E[me];
        se !== null && Te !== void 0 && Te.update(se, ee, c || a);
      }
      _e && _e(X, ee), ee.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ee }), g = null;
    }
    const et = new co();
    et.setAnimationLoop(Ue), this.setAnimationLoop = function(X) {
      _e = X;
    }, this.dispose = function() {
    };
  }
}
const Pn = new Yt(), kf = new Ce();
function Hf(r, e) {
  function t(m, f) {
    m.matrixAutoUpdate === true && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, Qa(r)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function i(m, f, A, E, S) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(m, f) : f.isMeshToonMaterial ? (s(m, f), u(m, f)) : f.isMeshPhongMaterial ? (s(m, f), h(m, f)) : f.isMeshStandardMaterial ? (s(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, S)) : f.isMeshMatcapMaterial ? (s(m, f), g(m, f)) : f.isMeshDepthMaterial ? s(m, f) : f.isMeshDistanceMaterial ? (s(m, f), _(m, f)) : f.isMeshNormalMaterial ? s(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? l(m, f, A, E) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = false);
  }
  function s(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === 1 && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === 1 && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const A = e.get(f), E = A.envMap, S = A.envMapRotation;
    E && (m.envMap.value = E, Pn.copy(S), Pn.x *= -1, Pn.y *= -1, Pn.z *= -1, E.isCubeTexture && E.isRenderTargetTexture === false && (Pn.y *= -1, Pn.z *= -1), m.envMapRotation.value.setFromMatrix4(kf.makeRotationFromEuler(Pn)), m.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function a(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function o(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function l(m, f, A, E) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * A, m.scale.value = E * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function c(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.rotation.value = f.rotation, f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
  }
  function h(m, f) {
    m.specular.value.copy(f.specular), m.shininess.value = Math.max(f.shininess, 1e-4);
  }
  function u(m, f) {
    f.gradientMap && (m.gradientMap.value = f.gradientMap);
  }
  function d(m, f) {
    m.metalness.value = f.metalness, f.metalnessMap && (m.metalnessMap.value = f.metalnessMap, t(f.metalnessMap, m.metalnessMapTransform)), m.roughness.value = f.roughness, f.roughnessMap && (m.roughnessMap.value = f.roughnessMap, t(f.roughnessMap, m.roughnessMapTransform)), f.envMap && (m.envMapIntensity.value = f.envMapIntensity);
  }
  function p(m, f, A) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === 1 && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = A.texture, m.transmissionSamplerSize.value.set(A.width, A.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function _(m, f) {
    const A = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(A.matrixWorld), m.nearDistance.value = A.shadow.camera.near, m.farDistance.value = A.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function zf(r, e, t, n) {
  let i = {}, s = {}, a = [];
  const o = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(A, E) {
    const S = E.program;
    n.uniformBlockBinding(A, S);
  }
  function c(A, E) {
    let S = i[A.id];
    S === void 0 && (g(A), S = h(A), i[A.id] = S, A.addEventListener("dispose", m));
    const I = E.program;
    n.updateUBOMapping(A, I);
    const b = e.render.frame;
    s[A.id] !== b && (d(A), s[A.id] = b);
  }
  function h(A) {
    const E = u();
    A.__bindingPointIndex = E;
    const S = r.createBuffer(), I = A.__size, b = A.usage;
    return r.bindBuffer(r.UNIFORM_BUFFER, S), r.bufferData(r.UNIFORM_BUFFER, I, b), r.bindBuffer(r.UNIFORM_BUFFER, null), r.bindBufferBase(r.UNIFORM_BUFFER, E, S), S;
  }
  function u() {
    for (let A = 0; A < o; A++) if (a.indexOf(A) === -1) return a.push(A), A;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(A) {
    const E = i[A.id], S = A.uniforms, I = A.__cache;
    r.bindBuffer(r.UNIFORM_BUFFER, E);
    for (let b = 0, w = S.length; b < w; b++) {
      const N = Array.isArray(S[b]) ? S[b] : [S[b]];
      for (let y = 0, M = N.length; y < M; y++) {
        const C = N[y];
        if (p(C, b, y, I) === true) {
          const q = C.__offset, G = Array.isArray(C.value) ? C.value : [C.value];
          let W = 0;
          for (let Z = 0; Z < G.length; Z++) {
            const z = G[Z], Q = _(z);
            typeof z == "number" || typeof z == "boolean" ? (C.__data[0] = z, r.bufferSubData(r.UNIFORM_BUFFER, q + W, C.__data)) : z.isMatrix3 ? (C.__data[0] = z.elements[0], C.__data[1] = z.elements[1], C.__data[2] = z.elements[2], C.__data[3] = 0, C.__data[4] = z.elements[3], C.__data[5] = z.elements[4], C.__data[6] = z.elements[5], C.__data[7] = 0, C.__data[8] = z.elements[6], C.__data[9] = z.elements[7], C.__data[10] = z.elements[8], C.__data[11] = 0) : (z.toArray(C.__data, W), W += Q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          r.bufferSubData(r.UNIFORM_BUFFER, q, C.__data);
        }
      }
    }
    r.bindBuffer(r.UNIFORM_BUFFER, null);
  }
  function p(A, E, S, I) {
    const b = A.value, w = E + "_" + S;
    if (I[w] === void 0) return typeof b == "number" || typeof b == "boolean" ? I[w] = b : I[w] = b.clone(), true;
    {
      const N = I[w];
      if (typeof b == "number" || typeof b == "boolean") {
        if (N !== b) return I[w] = b, true;
      } else if (N.equals(b) === false) return N.copy(b), true;
    }
    return false;
  }
  function g(A) {
    const E = A.uniforms;
    let S = 0;
    const I = 16;
    for (let w = 0, N = E.length; w < N; w++) {
      const y = Array.isArray(E[w]) ? E[w] : [E[w]];
      for (let M = 0, C = y.length; M < C; M++) {
        const q = y[M], G = Array.isArray(q.value) ? q.value : [q.value];
        for (let W = 0, Z = G.length; W < Z; W++) {
          const z = G[W], Q = _(z), H = S % I, re = H % Q.boundary, he = H + re;
          S += re, he !== 0 && I - he < Q.storage && (S += I - he), q.__data = new Float32Array(Q.storage / Float32Array.BYTES_PER_ELEMENT), q.__offset = S, S += Q.storage;
        }
      }
    }
    const b = S % I;
    return b > 0 && (S += I - b), A.__size = S, A.__cache = {}, this;
  }
  function _(A) {
    const E = { boundary: 0, storage: 0 };
    return typeof A == "number" || typeof A == "boolean" ? (E.boundary = 4, E.storage = 4) : A.isVector2 ? (E.boundary = 8, E.storage = 8) : A.isVector3 || A.isColor ? (E.boundary = 16, E.storage = 12) : A.isVector4 ? (E.boundary = 16, E.storage = 16) : A.isMatrix3 ? (E.boundary = 48, E.storage = 48) : A.isMatrix4 ? (E.boundary = 64, E.storage = 64) : A.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", A), E;
  }
  function m(A) {
    const E = A.target;
    E.removeEventListener("dispose", m);
    const S = a.indexOf(E.__bindingPointIndex);
    a.splice(S, 1), r.deleteBuffer(i[E.id]), delete i[E.id], delete s[E.id];
  }
  function f() {
    for (const A in i) r.deleteBuffer(i[A]);
    a = [], i = {}, s = {};
  }
  return { bind: l, update: c, dispose: f };
}
class Up {
  constructor(e = {}) {
    const { canvas: t = ko(), context: n = null, depth: i = true, stencil: s = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reverseDepthBuffer: d = false } = e;
    this.isWebGLRenderer = true;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else p = a;
    const g = new Uint32Array(4), _ = new Int32Array(4);
    let m = null, f = null;
    const A = [], E = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = gt, this.toneMapping = 0, this.toneMappingExposure = 1;
    const S = this;
    let I = false, b = 0, w = 0, N = null, y = -1, M = null;
    const C = new Ye(), q = new Ye();
    let G = null;
    const W = new Ee(0);
    let Z = 0, z = t.width, Q = t.height, H = 1, re = null, he = null;
    const _e = new Ye(0, 0, z, Q), Ue = new Ye(0, 0, z, Q);
    let et = false;
    const X = new hs();
    let ee = false, me = false;
    const se = new Ce(), Te = new Ce(), we = new L(), Ne = new Ye(), st = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Ve = false;
    function lt() {
      return N === null ? H : 1;
    }
    let R = n;
    function Lt(v, D) {
      return t.getContext(v, D);
    }
    try {
      const v = { alpha: true, depth: i, stencil: s, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r171"), t.addEventListener("webglcontextlost", K, false), t.addEventListener("webglcontextrestored", le, false), t.addEventListener("webglcontextcreationerror", oe, false), R === null) {
        const D = "webgl2";
        if (R = Lt(D, v), R === null) throw Lt(D) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let Ge, ke, xe, it, ve, T, x, F, Y, j, V, ge, ae, ue, We, J, de, ye, Ae, fe, He, De, nt, P;
    function ne() {
      Ge = new $u(R), Ge.init(), De = new Uf(R, Ge), ke = new Xu(R, Ge, e, De), xe = new Df(R, Ge), ke.reverseDepthBuffer && d && xe.buffers.depth.setReversed(true), it = new ed(R), ve = new vf(), T = new If(R, Ge, xe, ve, ke, De, it), x = new Yu(S), F = new Zu(S), Y = new oc(R), nt = new Vu(R, Y), j = new Ju(R, Y, it, nt), V = new nd(R, j, Y, it), Ae = new td(R, ke, T), J = new qu(ve), ge = new xf(S, x, F, Ge, ke, nt, J), ae = new Hf(S, ve), ue = new Sf(), We = new Rf(Ge), ye = new zu(S, x, F, xe, V, p, l), de = new Pf(S, V, ke), P = new zf(R, it, ke, xe), fe = new Wu(R, Ge, it), He = new Qu(R, Ge, it), it.programs = ge.programs, S.capabilities = ke, S.extensions = Ge, S.properties = ve, S.renderLists = ue, S.shadowMap = de, S.state = xe, S.info = it;
    }
    ne();
    const k = new Gf(S, R);
    this.xr = k, this.getContext = function() {
      return R;
    }, this.getContextAttributes = function() {
      return R.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = Ge.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = Ge.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return H;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (H = v, this.setSize(z, Q, false));
    }, this.getSize = function(v) {
      return v.set(z, Q);
    }, this.setSize = function(v, D, O = true) {
      if (k.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      z = v, Q = D, t.width = Math.floor(v * H), t.height = Math.floor(D * H), O === true && (t.style.width = v + "px", t.style.height = D + "px"), this.setViewport(0, 0, v, D);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(z * H, Q * H).floor();
    }, this.setDrawingBufferSize = function(v, D, O) {
      z = v, Q = D, H = O, t.width = Math.floor(v * O), t.height = Math.floor(D * O), this.setViewport(0, 0, v, D);
    }, this.getCurrentViewport = function(v) {
      return v.copy(C);
    }, this.getViewport = function(v) {
      return v.copy(_e);
    }, this.setViewport = function(v, D, O, B) {
      v.isVector4 ? _e.set(v.x, v.y, v.z, v.w) : _e.set(v, D, O, B), xe.viewport(C.copy(_e).multiplyScalar(H).round());
    }, this.getScissor = function(v) {
      return v.copy(Ue);
    }, this.setScissor = function(v, D, O, B) {
      v.isVector4 ? Ue.set(v.x, v.y, v.z, v.w) : Ue.set(v, D, O, B), xe.scissor(q.copy(Ue).multiplyScalar(H).round());
    }, this.getScissorTest = function() {
      return et;
    }, this.setScissorTest = function(v) {
      xe.setScissorTest(et = v);
    }, this.setOpaqueSort = function(v) {
      re = v;
    }, this.setTransparentSort = function(v) {
      he = v;
    }, this.getClearColor = function(v) {
      return v.copy(ye.getClearColor());
    }, this.setClearColor = function() {
      ye.setClearColor.apply(ye, arguments);
    }, this.getClearAlpha = function() {
      return ye.getClearAlpha();
    }, this.setClearAlpha = function() {
      ye.setClearAlpha.apply(ye, arguments);
    }, this.clear = function(v = true, D = true, O = true) {
      let B = 0;
      if (v) {
        let U = false;
        if (N !== null) {
          const $ = N.texture.format;
          U = $ === 1033 || $ === 1031 || $ === 1029;
        }
        if (U) {
          const $ = N.texture.type, ie = $ === 1009 || $ === 1014 || $ === 1012 || $ === 1020 || $ === 1017 || $ === 1018, ce = ye.getClearColor(), pe = ye.getClearAlpha(), be = ce.r, Re = ce.g, Me = ce.b;
          ie ? (g[0] = be, g[1] = Re, g[2] = Me, g[3] = pe, R.clearBufferuiv(R.COLOR, 0, g)) : (_[0] = be, _[1] = Re, _[2] = Me, _[3] = pe, R.clearBufferiv(R.COLOR, 0, _));
        } else B |= R.COLOR_BUFFER_BIT;
      }
      D && (B |= R.DEPTH_BUFFER_BIT), O && (B |= R.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), R.clear(B);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", K, false), t.removeEventListener("webglcontextrestored", le, false), t.removeEventListener("webglcontextcreationerror", oe, false), ye.dispose(), ue.dispose(), We.dispose(), ve.dispose(), x.dispose(), F.dispose(), V.dispose(), nt.dispose(), P.dispose(), ge.dispose(), k.dispose(), k.removeEventListener("sessionstart", vs), k.removeEventListener("sessionend", Ms), vn.stop();
    };
    function K(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), I = true;
    }
    function le() {
      console.log("THREE.WebGLRenderer: Context Restored."), I = false;
      const v = it.autoReset, D = de.enabled, O = de.autoUpdate, B = de.needsUpdate, U = de.type;
      ne(), it.autoReset = v, de.enabled = D, de.autoUpdate = O, de.needsUpdate = B, de.type = U;
    }
    function oe(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function Pe(v) {
      const D = v.target;
      D.removeEventListener("dispose", Pe), at(D);
    }
    function at(v) {
      _t(v), ve.remove(v);
    }
    function _t(v) {
      const D = ve.get(v).programs;
      D !== void 0 && (D.forEach(function(O) {
        ge.releaseProgram(O);
      }), v.isShaderMaterial && ge.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, D, O, B, U, $) {
      D === null && (D = st);
      const ie = U.isMesh && U.matrixWorld.determinant() < 0, ce = _o(v, D, O, B, U);
      xe.setMaterial(B, ie);
      let pe = O.index, be = 1;
      if (B.wireframe === true) {
        if (pe = j.getWireframeAttribute(O), pe === void 0) return;
        be = 2;
      }
      const Re = O.drawRange, Me = O.attributes.position;
      let Xe = Re.start * be, Ke = (Re.start + Re.count) * be;
      $ !== null && (Xe = Math.max(Xe, $.start * be), Ke = Math.min(Ke, ($.start + $.count) * be)), pe !== null ? (Xe = Math.max(Xe, 0), Ke = Math.min(Ke, pe.count)) : Me != null && (Xe = Math.max(Xe, 0), Ke = Math.min(Ke, Me.count));
      const ct = Ke - Xe;
      if (ct < 0 || ct === 1 / 0) return;
      nt.setup(U, B, ce, O, pe);
      let ot, qe = fe;
      if (pe !== null && (ot = Y.get(pe), qe = He, qe.setIndex(ot)), U.isMesh) B.wireframe === true ? (xe.setLineWidth(B.wireframeLinewidth * lt()), qe.setMode(R.LINES)) : qe.setMode(R.TRIANGLES);
      else if (U.isLine) {
        let Se = B.linewidth;
        Se === void 0 && (Se = 1), xe.setLineWidth(Se * lt()), U.isLineSegments ? qe.setMode(R.LINES) : U.isLineLoop ? qe.setMode(R.LINE_LOOP) : qe.setMode(R.LINE_STRIP);
      } else U.isPoints ? qe.setMode(R.POINTS) : U.isSprite && qe.setMode(R.TRIANGLES);
      if (U.isBatchedMesh) if (U._multiDrawInstances !== null) qe.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
      else if (Ge.get("WEBGL_multi_draw")) qe.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else {
        const Se = U._multiDrawStarts, mt = U._multiDrawCounts, je = U._multiDrawCount, Bt = pe ? Y.get(pe).bytesPerElement : 1, Gn = ve.get(B).currentProgram.getUniforms();
        for (let Rt = 0; Rt < je; Rt++) Gn.setValue(R, "_gl_DrawID", Rt), qe.render(Se[Rt] / Bt, mt[Rt]);
      }
      else if (U.isInstancedMesh) qe.renderInstances(Xe, ct, U.count);
      else if (O.isInstancedBufferGeometry) {
        const Se = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, mt = Math.min(O.instanceCount, Se);
        qe.renderInstances(Xe, ct, mt);
      } else qe.render(Xe, ct);
    };
    function Ze(v, D, O) {
      v.transparent === true && v.side === 2 && v.forceSinglePass === false ? (v.side = 1, v.needsUpdate = true, Ui(v, D, O), v.side = 0, v.needsUpdate = true, Ui(v, D, O), v.side = 2) : Ui(v, D, O);
    }
    this.compile = function(v, D, O = null) {
      O === null && (O = v), f = We.get(O), f.init(D), E.push(f), O.traverseVisible(function(U) {
        U.isLight && U.layers.test(D.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), v !== O && v.traverseVisible(function(U) {
        U.isLight && U.layers.test(D.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), f.setupLights();
      const B = /* @__PURE__ */ new Set();
      return v.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
        const $ = U.material;
        if ($) if (Array.isArray($)) for (let ie = 0; ie < $.length; ie++) {
          const ce = $[ie];
          Ze(ce, O, U), B.add(ce);
        }
        else Ze($, O, U), B.add($);
      }), E.pop(), f = null, B;
    }, this.compileAsync = function(v, D, O = null) {
      const B = this.compile(v, D, O);
      return new Promise((U) => {
        function $() {
          if (B.forEach(function(ie) {
            ve.get(ie).currentProgram.isReady() && B.delete(ie);
          }), B.size === 0) {
            U(v);
            return;
          }
          setTimeout($, 10);
        }
        Ge.get("KHR_parallel_shader_compile") !== null ? $() : setTimeout($, 10);
      });
    };
    let Ot = null;
    function Qt(v) {
      Ot && Ot(v);
    }
    function vs() {
      vn.stop();
    }
    function Ms() {
      vn.start();
    }
    const vn = new co();
    vn.setAnimationLoop(Qt), typeof self < "u" && vn.setContext(self), this.setAnimationLoop = function(v) {
      Ot = v, k.setAnimationLoop(v), v === null ? vn.stop() : vn.start();
    }, k.addEventListener("sessionstart", vs), k.addEventListener("sessionend", Ms), this.render = function(v, D) {
      if (D !== void 0 && D.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (I === true) return;
      if (v.matrixWorldAutoUpdate === true && v.updateMatrixWorld(), D.parent === null && D.matrixWorldAutoUpdate === true && D.updateMatrixWorld(), k.enabled === true && k.isPresenting === true && (k.cameraAutoUpdate === true && k.updateCamera(D), D = k.getCamera()), v.isScene === true && v.onBeforeRender(S, v, D, N), f = We.get(v, E.length), f.init(D), E.push(f), Te.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse), X.setFromProjectionMatrix(Te), me = this.localClippingEnabled, ee = J.init(this.clippingPlanes, me), m = ue.get(v, A.length), m.init(), A.push(m), k.enabled === true && k.isPresenting === true) {
        const $ = S.xr.getDepthSensingMesh();
        $ !== null && _r($, D, -1 / 0, S.sortObjects);
      }
      _r(v, D, 0, S.sortObjects), m.finish(), S.sortObjects === true && m.sort(re, he), Ve = k.enabled === false || k.isPresenting === false || k.hasDepthSensing() === false, Ve && ye.addToRenderList(m, v), this.info.render.frame++, ee === true && J.beginShadows();
      const O = f.state.shadowsArray;
      de.render(O, v, D), ee === true && J.endShadows(), this.info.autoReset === true && this.info.reset();
      const B = m.opaque, U = m.transmissive;
      if (f.setupLights(), D.isArrayCamera) {
        const $ = D.cameras;
        if (U.length > 0) for (let ie = 0, ce = $.length; ie < ce; ie++) {
          const pe = $[ie];
          ys(B, U, v, pe);
        }
        Ve && ye.render(v);
        for (let ie = 0, ce = $.length; ie < ce; ie++) {
          const pe = $[ie];
          Ss(m, v, pe, pe.viewport);
        }
      } else U.length > 0 && ys(B, U, v, D), Ve && ye.render(v), Ss(m, v, D);
      N !== null && (T.updateMultisampleRenderTarget(N), T.updateRenderTargetMipmap(N)), v.isScene === true && v.onAfterRender(S, v, D), nt.resetDefaultState(), y = -1, M = null, E.pop(), E.length > 0 ? (f = E[E.length - 1], ee === true && J.setGlobalState(S.clippingPlanes, f.state.camera)) : f = null, A.pop(), A.length > 0 ? m = A[A.length - 1] : m = null;
    };
    function _r(v, D, O, B) {
      if (v.visible === false) return;
      if (v.layers.test(D.layers)) {
        if (v.isGroup) O = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === true && v.update(D);
        else if (v.isLight) f.pushLight(v), v.castShadow && f.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || X.intersectsSprite(v)) {
            B && Ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Te);
            const ie = V.update(v), ce = v.material;
            ce.visible && m.push(v, ie, ce, O, Ne.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || X.intersectsObject(v))) {
          const ie = V.update(v), ce = v.material;
          if (B && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Ne.copy(v.boundingSphere.center)) : (ie.boundingSphere === null && ie.computeBoundingSphere(), Ne.copy(ie.boundingSphere.center)), Ne.applyMatrix4(v.matrixWorld).applyMatrix4(Te)), Array.isArray(ce)) {
            const pe = ie.groups;
            for (let be = 0, Re = pe.length; be < Re; be++) {
              const Me = pe[be], Xe = ce[Me.materialIndex];
              Xe && Xe.visible && m.push(v, ie, Xe, O, Ne.z, Me);
            }
          } else ce.visible && m.push(v, ie, ce, O, Ne.z, null);
        }
      }
      const $ = v.children;
      for (let ie = 0, ce = $.length; ie < ce; ie++) _r($[ie], D, O, B);
    }
    function Ss(v, D, O, B) {
      const U = v.opaque, $ = v.transmissive, ie = v.transparent;
      f.setupLightsView(O), ee === true && J.setGlobalState(S.clippingPlanes, O), B && xe.viewport(C.copy(B)), U.length > 0 && Ii(U, D, O), $.length > 0 && Ii($, D, O), ie.length > 0 && Ii(ie, D, O), xe.buffers.depth.setTest(true), xe.buffers.depth.setMask(true), xe.buffers.color.setMask(true), xe.setPolygonOffset(false);
    }
    function ys(v, D, O, B) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      f.state.transmissionRenderTarget[B.id] === void 0 && (f.state.transmissionRenderTarget[B.id] = new On(1, 1, { generateMipmaps: true, type: Ge.has("EXT_color_buffer_half_float") || Ge.has("EXT_color_buffer_float") ? 1016 : 1009, minFilter: 1008, samples: 4, stencilBuffer: s, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: ze.workingColorSpace }));
      const $ = f.state.transmissionRenderTarget[B.id], ie = B.viewport || C;
      $.setSize(ie.z, ie.w);
      const ce = S.getRenderTarget();
      S.setRenderTarget($), S.getClearColor(W), Z = S.getClearAlpha(), Z < 1 && S.setClearColor(16777215, 0.5), S.clear(), Ve && ye.render(O);
      const pe = S.toneMapping;
      S.toneMapping = 0;
      const be = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), f.setupLightsView(B), ee === true && J.setGlobalState(S.clippingPlanes, B), Ii(v, O, B), T.updateMultisampleRenderTarget($), T.updateRenderTargetMipmap($), Ge.has("WEBGL_multisampled_render_to_texture") === false) {
        let Re = false;
        for (let Me = 0, Xe = D.length; Me < Xe; Me++) {
          const Ke = D[Me], ct = Ke.object, ot = Ke.geometry, qe = Ke.material, Se = Ke.group;
          if (qe.side === 2 && ct.layers.test(B.layers)) {
            const mt = qe.side;
            qe.side = 1, qe.needsUpdate = true, Ts(ct, O, B, ot, qe, Se), qe.side = mt, qe.needsUpdate = true, Re = true;
          }
        }
        Re === true && (T.updateMultisampleRenderTarget($), T.updateRenderTargetMipmap($));
      }
      S.setRenderTarget(ce), S.setClearColor(W, Z), be !== void 0 && (B.viewport = be), S.toneMapping = pe;
    }
    function Ii(v, D, O) {
      const B = D.isScene === true ? D.overrideMaterial : null;
      for (let U = 0, $ = v.length; U < $; U++) {
        const ie = v[U], ce = ie.object, pe = ie.geometry, be = B === null ? ie.material : B, Re = ie.group;
        ce.layers.test(O.layers) && Ts(ce, D, O, pe, be, Re);
      }
    }
    function Ts(v, D, O, B, U, $) {
      v.onBeforeRender(S, D, O, B, U, $), v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), U.onBeforeRender(S, D, O, B, v, $), U.transparent === true && U.side === 2 && U.forceSinglePass === false ? (U.side = 1, U.needsUpdate = true, S.renderBufferDirect(O, D, B, U, v, $), U.side = 0, U.needsUpdate = true, S.renderBufferDirect(O, D, B, U, v, $), U.side = 2) : S.renderBufferDirect(O, D, B, U, v, $), v.onAfterRender(S, D, O, B, U, $);
    }
    function Ui(v, D, O) {
      D.isScene !== true && (D = st);
      const B = ve.get(v), U = f.state.lights, $ = f.state.shadowsArray, ie = U.state.version, ce = ge.getParameters(v, U.state, $, D, O), pe = ge.getProgramCacheKey(ce);
      let be = B.programs;
      B.environment = v.isMeshStandardMaterial ? D.environment : null, B.fog = D.fog, B.envMap = (v.isMeshStandardMaterial ? F : x).get(v.envMap || B.environment), B.envMapRotation = B.environment !== null && v.envMap === null ? D.environmentRotation : v.envMapRotation, be === void 0 && (v.addEventListener("dispose", Pe), be = /* @__PURE__ */ new Map(), B.programs = be);
      let Re = be.get(pe);
      if (Re !== void 0) {
        if (B.currentProgram === Re && B.lightsStateVersion === ie) return As(v, ce), Re;
      } else ce.uniforms = ge.getUniforms(v), v.onBeforeCompile(ce, S), Re = ge.acquireProgram(ce, pe), be.set(pe, Re), B.uniforms = ce.uniforms;
      const Me = B.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === true) && (Me.clippingPlanes = J.uniform), As(v, ce), B.needsLights = vo(v), B.lightsStateVersion = ie, B.needsLights && (Me.ambientLightColor.value = U.state.ambient, Me.lightProbe.value = U.state.probe, Me.directionalLights.value = U.state.directional, Me.directionalLightShadows.value = U.state.directionalShadow, Me.spotLights.value = U.state.spot, Me.spotLightShadows.value = U.state.spotShadow, Me.rectAreaLights.value = U.state.rectArea, Me.ltc_1.value = U.state.rectAreaLTC1, Me.ltc_2.value = U.state.rectAreaLTC2, Me.pointLights.value = U.state.point, Me.pointLightShadows.value = U.state.pointShadow, Me.hemisphereLights.value = U.state.hemi, Me.directionalShadowMap.value = U.state.directionalShadowMap, Me.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Me.spotShadowMap.value = U.state.spotShadowMap, Me.spotLightMatrix.value = U.state.spotLightMatrix, Me.spotLightMap.value = U.state.spotLightMap, Me.pointShadowMap.value = U.state.pointShadowMap, Me.pointShadowMatrix.value = U.state.pointShadowMatrix), B.currentProgram = Re, B.uniformsList = null, Re;
    }
    function Es(v) {
      if (v.uniformsList === null) {
        const D = v.currentProgram.getUniforms();
        v.uniformsList = hr.seqWithValue(D.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function As(v, D) {
      const O = ve.get(v);
      O.outputColorSpace = D.outputColorSpace, O.batching = D.batching, O.batchingColor = D.batchingColor, O.instancing = D.instancing, O.instancingColor = D.instancingColor, O.instancingMorph = D.instancingMorph, O.skinning = D.skinning, O.morphTargets = D.morphTargets, O.morphNormals = D.morphNormals, O.morphColors = D.morphColors, O.morphTargetsCount = D.morphTargetsCount, O.numClippingPlanes = D.numClippingPlanes, O.numIntersection = D.numClipIntersection, O.vertexAlphas = D.vertexAlphas, O.vertexTangents = D.vertexTangents, O.toneMapping = D.toneMapping;
    }
    function _o(v, D, O, B, U) {
      D.isScene !== true && (D = st), T.resetTextureUnits();
      const $ = D.fog, ie = B.isMeshStandardMaterial ? D.environment : null, ce = N === null ? S.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : Et, pe = (B.isMeshStandardMaterial ? F : x).get(B.envMap || ie), be = B.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, Re = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Me = !!O.morphAttributes.position, Xe = !!O.morphAttributes.normal, Ke = !!O.morphAttributes.color;
      let ct = 0;
      B.toneMapped && (N === null || N.isXRRenderTarget === true) && (ct = S.toneMapping);
      const ot = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, qe = ot !== void 0 ? ot.length : 0, Se = ve.get(B), mt = f.state.lights;
      if (ee === true && (me === true || v !== M)) {
        const Mt = v === M && B.id === y;
        J.setState(B, v, Mt);
      }
      let je = false;
      B.version === Se.__version ? (Se.needsLights && Se.lightsStateVersion !== mt.state.version || Se.outputColorSpace !== ce || U.isBatchedMesh && Se.batching === false || !U.isBatchedMesh && Se.batching === true || U.isBatchedMesh && Se.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Se.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Se.instancing === false || !U.isInstancedMesh && Se.instancing === true || U.isSkinnedMesh && Se.skinning === false || !U.isSkinnedMesh && Se.skinning === true || U.isInstancedMesh && Se.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Se.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Se.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Se.instancingMorph === false && U.morphTexture !== null || Se.envMap !== pe || B.fog === true && Se.fog !== $ || Se.numClippingPlanes !== void 0 && (Se.numClippingPlanes !== J.numPlanes || Se.numIntersection !== J.numIntersection) || Se.vertexAlphas !== be || Se.vertexTangents !== Re || Se.morphTargets !== Me || Se.morphNormals !== Xe || Se.morphColors !== Ke || Se.toneMapping !== ct || Se.morphTargetsCount !== qe) && (je = true) : (je = true, Se.__version = B.version);
      let Bt = Se.currentProgram;
      je === true && (Bt = Ui(B, D, U));
      let Gn = false, Rt = false, fi = false;
      const rt = Bt.getUniforms(), Dt = Se.uniforms;
      if (xe.useProgram(Bt.program) && (Gn = true, Rt = true, fi = true), B.id !== y && (y = B.id, Rt = true), Gn || M !== v) {
        xe.buffers.depth.getReversed() ? (se.copy(v.projectionMatrix), zo(se), Vo(se), rt.setValue(R, "projectionMatrix", se)) : rt.setValue(R, "projectionMatrix", v.projectionMatrix), rt.setValue(R, "viewMatrix", v.matrixWorldInverse);
        const At = rt.map.cameraPosition;
        At !== void 0 && At.setValue(R, we.setFromMatrixPosition(v.matrixWorld)), ke.logarithmicDepthBuffer && rt.setValue(R, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && rt.setValue(R, "isOrthographic", v.isOrthographicCamera === true), M !== v && (M = v, Rt = true, fi = true);
      }
      if (U.isSkinnedMesh) {
        rt.setOptional(R, U, "bindMatrix"), rt.setOptional(R, U, "bindMatrixInverse");
        const Mt = U.skeleton;
        Mt && (Mt.boneTexture === null && Mt.computeBoneTexture(), rt.setValue(R, "boneTexture", Mt.boneTexture, T));
      }
      U.isBatchedMesh && (rt.setOptional(R, U, "batchingTexture"), rt.setValue(R, "batchingTexture", U._matricesTexture, T), rt.setOptional(R, U, "batchingIdTexture"), rt.setValue(R, "batchingIdTexture", U._indirectTexture, T), rt.setOptional(R, U, "batchingColorTexture"), U._colorsTexture !== null && rt.setValue(R, "batchingColorTexture", U._colorsTexture, T));
      const It = O.morphAttributes;
      if ((It.position !== void 0 || It.normal !== void 0 || It.color !== void 0) && Ae.update(U, O, Bt), (Rt || Se.receiveShadow !== U.receiveShadow) && (Se.receiveShadow = U.receiveShadow, rt.setValue(R, "receiveShadow", U.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Dt.envMap.value = pe, Dt.flipEnvMap.value = pe.isCubeTexture && pe.isRenderTargetTexture === false ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && D.environment !== null && (Dt.envMapIntensity.value = D.environmentIntensity), Rt && (rt.setValue(R, "toneMappingExposure", S.toneMappingExposure), Se.needsLights && xo(Dt, fi), $ && B.fog === true && ae.refreshFogUniforms(Dt, $), ae.refreshMaterialUniforms(Dt, B, H, Q, f.state.transmissionRenderTarget[v.id]), hr.upload(R, Es(Se), Dt, T)), B.isShaderMaterial && B.uniformsNeedUpdate === true && (hr.upload(R, Es(Se), Dt, T), B.uniformsNeedUpdate = false), B.isSpriteMaterial && rt.setValue(R, "center", U.center), rt.setValue(R, "modelViewMatrix", U.modelViewMatrix), rt.setValue(R, "normalMatrix", U.normalMatrix), rt.setValue(R, "modelMatrix", U.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const Mt = B.uniformsGroups;
        for (let At = 0, xr = Mt.length; At < xr; At++) {
          const Mn = Mt[At];
          P.update(Mn, Bt), P.bind(Mn, Bt);
        }
      }
      return Bt;
    }
    function xo(v, D) {
      v.ambientLightColor.needsUpdate = D, v.lightProbe.needsUpdate = D, v.directionalLights.needsUpdate = D, v.directionalLightShadows.needsUpdate = D, v.pointLights.needsUpdate = D, v.pointLightShadows.needsUpdate = D, v.spotLights.needsUpdate = D, v.spotLightShadows.needsUpdate = D, v.rectAreaLights.needsUpdate = D, v.hemisphereLights.needsUpdate = D;
    }
    function vo(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === true;
    }
    this.getActiveCubeFace = function() {
      return b;
    }, this.getActiveMipmapLevel = function() {
      return w;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(v, D, O) {
      ve.get(v.texture).__webglTexture = D, ve.get(v.depthTexture).__webglTexture = O;
      const B = ve.get(v);
      B.__hasExternalTextures = true, B.__autoAllocateDepthBuffer = O === void 0, B.__autoAllocateDepthBuffer || Ge.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(v, D) {
      const O = ve.get(v);
      O.__webglFramebuffer = D, O.__useDefaultFramebuffer = D === void 0;
    }, this.setRenderTarget = function(v, D = 0, O = 0) {
      N = v, b = D, w = O;
      let B = true, U = null, $ = false, ie = false;
      if (v) {
        const pe = ve.get(v);
        if (pe.__useDefaultFramebuffer !== void 0) xe.bindFramebuffer(R.FRAMEBUFFER, null), B = false;
        else if (pe.__webglFramebuffer === void 0) T.setupRenderTarget(v);
        else if (pe.__hasExternalTextures) T.rebindTextures(v, ve.get(v.texture).__webglTexture, ve.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Me = v.depthTexture;
          if (pe.__boundDepthTexture !== Me) {
            if (Me !== null && ve.has(Me) && (v.width !== Me.image.width || v.height !== Me.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            T.setupDepthRenderbuffer(v);
          }
        }
        const be = v.texture;
        (be.isData3DTexture || be.isDataArrayTexture || be.isCompressedArrayTexture) && (ie = true);
        const Re = ve.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Re[D]) ? U = Re[D][O] : U = Re[D], $ = true) : v.samples > 0 && T.useMultisampledRTT(v) === false ? U = ve.get(v).__webglMultisampledFramebuffer : Array.isArray(Re) ? U = Re[O] : U = Re, C.copy(v.viewport), q.copy(v.scissor), G = v.scissorTest;
      } else C.copy(_e).multiplyScalar(H).floor(), q.copy(Ue).multiplyScalar(H).floor(), G = et;
      if (xe.bindFramebuffer(R.FRAMEBUFFER, U) && B && xe.drawBuffers(v, U), xe.viewport(C), xe.scissor(q), xe.setScissorTest(G), $) {
        const pe = ve.get(v.texture);
        R.framebufferTexture2D(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_CUBE_MAP_POSITIVE_X + D, pe.__webglTexture, O);
      } else if (ie) {
        const pe = ve.get(v.texture), be = D || 0;
        R.framebufferTextureLayer(R.FRAMEBUFFER, R.COLOR_ATTACHMENT0, pe.__webglTexture, O || 0, be);
      }
      y = -1;
    }, this.readRenderTargetPixels = function(v, D, O, B, U, $, ie) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let ce = ve.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce) {
        xe.bindFramebuffer(R.FRAMEBUFFER, ce);
        try {
          const pe = v.texture, be = pe.format, Re = pe.type;
          if (!ke.textureFormatReadable(be)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ke.textureTypeReadable(Re)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          D >= 0 && D <= v.width - B && O >= 0 && O <= v.height - U && R.readPixels(D, O, B, U, De.convert(be), De.convert(Re), $);
        } finally {
          const pe = N !== null ? ve.get(N).__webglFramebuffer : null;
          xe.bindFramebuffer(R.FRAMEBUFFER, pe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, D, O, B, U, $, ie) {
      if (!(v && v.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let ce = ve.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && ie !== void 0 && (ce = ce[ie]), ce) {
        const pe = v.texture, be = pe.format, Re = pe.type;
        if (!ke.textureFormatReadable(be)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ke.textureTypeReadable(Re)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (D >= 0 && D <= v.width - B && O >= 0 && O <= v.height - U) {
          xe.bindFramebuffer(R.FRAMEBUFFER, ce);
          const Me = R.createBuffer();
          R.bindBuffer(R.PIXEL_PACK_BUFFER, Me), R.bufferData(R.PIXEL_PACK_BUFFER, $.byteLength, R.STREAM_READ), R.readPixels(D, O, B, U, De.convert(be), De.convert(Re), 0);
          const Xe = N !== null ? ve.get(N).__webglFramebuffer : null;
          xe.bindFramebuffer(R.FRAMEBUFFER, Xe);
          const Ke = R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return R.flush(), await Ho(R, Ke, 4), R.bindBuffer(R.PIXEL_PACK_BUFFER, Me), R.getBufferSubData(R.PIXEL_PACK_BUFFER, 0, $), R.deleteBuffer(Me), R.deleteSync(Ke), $;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(v, D = null, O = 0) {
      v.isTexture !== true && (ei("WebGLRenderer: copyFramebufferToTexture function signature has changed."), D = arguments[0] || null, v = arguments[1]);
      const B = Math.pow(2, -O), U = Math.floor(v.image.width * B), $ = Math.floor(v.image.height * B), ie = D !== null ? D.x : 0, ce = D !== null ? D.y : 0;
      T.setTexture2D(v, 0), R.copyTexSubImage2D(R.TEXTURE_2D, O, 0, 0, ie, ce, U, $), xe.unbindTexture();
    };
    const Mo = R.createFramebuffer(), So = R.createFramebuffer();
    this.copyTextureToTexture = function(v, D, O = null, B = null, U = 0, $ = null) {
      v.isTexture !== true && (ei("WebGLRenderer: copyTextureToTexture function signature has changed."), B = arguments[0] || null, v = arguments[1], D = arguments[2], $ = arguments[3] || 0, O = null), $ === null && (U !== 0 ? (ei("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), $ = U, U = 0) : $ = 0);
      let ie, ce, pe, be, Re, Me, Xe, Ke, ct;
      const ot = v.isCompressedTexture ? v.mipmaps[$] : v.image;
      if (O !== null) ie = O.max.x - O.min.x, ce = O.max.y - O.min.y, pe = O.isBox3 ? O.max.z - O.min.z : 1, be = O.min.x, Re = O.min.y, Me = O.isBox3 ? O.min.z : 0;
      else {
        const It = Math.pow(2, -U);
        ie = Math.floor(ot.width * It), ce = Math.floor(ot.height * It), v.isDataArrayTexture ? pe = ot.depth : v.isData3DTexture ? pe = Math.floor(ot.depth * It) : pe = 1, be = 0, Re = 0, Me = 0;
      }
      B !== null ? (Xe = B.x, Ke = B.y, ct = B.z) : (Xe = 0, Ke = 0, ct = 0);
      const qe = De.convert(D.format), Se = De.convert(D.type);
      let mt;
      D.isData3DTexture ? (T.setTexture3D(D, 0), mt = R.TEXTURE_3D) : D.isDataArrayTexture || D.isCompressedArrayTexture ? (T.setTexture2DArray(D, 0), mt = R.TEXTURE_2D_ARRAY) : (T.setTexture2D(D, 0), mt = R.TEXTURE_2D), R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL, D.flipY), R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL, D.premultiplyAlpha), R.pixelStorei(R.UNPACK_ALIGNMENT, D.unpackAlignment);
      const je = R.getParameter(R.UNPACK_ROW_LENGTH), Bt = R.getParameter(R.UNPACK_IMAGE_HEIGHT), Gn = R.getParameter(R.UNPACK_SKIP_PIXELS), Rt = R.getParameter(R.UNPACK_SKIP_ROWS), fi = R.getParameter(R.UNPACK_SKIP_IMAGES);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, ot.width), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, ot.height), R.pixelStorei(R.UNPACK_SKIP_PIXELS, be), R.pixelStorei(R.UNPACK_SKIP_ROWS, Re), R.pixelStorei(R.UNPACK_SKIP_IMAGES, Me);
      const rt = v.isDataArrayTexture || v.isData3DTexture, Dt = D.isDataArrayTexture || D.isData3DTexture;
      if (v.isDepthTexture) {
        const It = ve.get(v), Mt = ve.get(D), At = ve.get(It.__renderTarget), xr = ve.get(Mt.__renderTarget);
        xe.bindFramebuffer(R.READ_FRAMEBUFFER, At.__webglFramebuffer), xe.bindFramebuffer(R.DRAW_FRAMEBUFFER, xr.__webglFramebuffer);
        for (let Mn = 0; Mn < pe; Mn++) rt && (R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, ve.get(v).__webglTexture, U, Me + Mn), R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, ve.get(D).__webglTexture, $, ct + Mn)), R.blitFramebuffer(be, Re, ie, ce, Xe, Ke, ie, ce, R.DEPTH_BUFFER_BIT, R.NEAREST);
        xe.bindFramebuffer(R.READ_FRAMEBUFFER, null), xe.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || v.isRenderTargetTexture || ve.has(v)) {
        const It = ve.get(v), Mt = ve.get(D);
        xe.bindFramebuffer(R.READ_FRAMEBUFFER, Mo), xe.bindFramebuffer(R.DRAW_FRAMEBUFFER, So);
        for (let At = 0; At < pe; At++) rt ? R.framebufferTextureLayer(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, It.__webglTexture, U, Me + At) : R.framebufferTexture2D(R.READ_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, It.__webglTexture, U), Dt ? R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, Mt.__webglTexture, $, ct + At) : R.framebufferTexture2D(R.DRAW_FRAMEBUFFER, R.COLOR_ATTACHMENT0, R.TEXTURE_2D, Mt.__webglTexture, $), U !== 0 ? R.blitFramebuffer(be, Re, ie, ce, Xe, Ke, ie, ce, R.COLOR_BUFFER_BIT, R.NEAREST) : Dt ? R.copyTexSubImage3D(mt, $, Xe, Ke, ct + At, be, Re, ie, ce) : R.copyTexSubImage2D(mt, $, Xe, Ke, be, Re, ie, ce);
        xe.bindFramebuffer(R.READ_FRAMEBUFFER, null), xe.bindFramebuffer(R.DRAW_FRAMEBUFFER, null);
      } else Dt ? v.isDataTexture || v.isData3DTexture ? R.texSubImage3D(mt, $, Xe, Ke, ct, ie, ce, pe, qe, Se, ot.data) : D.isCompressedArrayTexture ? R.compressedTexSubImage3D(mt, $, Xe, Ke, ct, ie, ce, pe, qe, ot.data) : R.texSubImage3D(mt, $, Xe, Ke, ct, ie, ce, pe, qe, Se, ot) : v.isDataTexture ? R.texSubImage2D(R.TEXTURE_2D, $, Xe, Ke, ie, ce, qe, Se, ot.data) : v.isCompressedTexture ? R.compressedTexSubImage2D(R.TEXTURE_2D, $, Xe, Ke, ot.width, ot.height, qe, ot.data) : R.texSubImage2D(R.TEXTURE_2D, $, Xe, Ke, ie, ce, qe, Se, ot);
      R.pixelStorei(R.UNPACK_ROW_LENGTH, je), R.pixelStorei(R.UNPACK_IMAGE_HEIGHT, Bt), R.pixelStorei(R.UNPACK_SKIP_PIXELS, Gn), R.pixelStorei(R.UNPACK_SKIP_ROWS, Rt), R.pixelStorei(R.UNPACK_SKIP_IMAGES, fi), $ === 0 && D.generateMipmaps && R.generateMipmap(mt), xe.unbindTexture();
    }, this.copyTextureToTexture3D = function(v, D, O = null, B = null, U = 0) {
      return v.isTexture !== true && (ei("WebGLRenderer: copyTextureToTexture3D function signature has changed."), O = arguments[0] || null, B = arguments[1] || null, v = arguments[2], D = arguments[3], U = arguments[4] || 0), ei('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(v, D, O, B, U);
    }, this.initRenderTarget = function(v) {
      ve.get(v).__webglFramebuffer === void 0 && T.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? T.setTextureCube(v, 0) : v.isData3DTexture ? T.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? T.setTexture2DArray(v, 0) : T.setTexture2D(v, 0), xe.unbindTexture();
    }, this.resetState = function() {
      b = 0, w = 0, N = null, xe.reset(), nt.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return 2e3;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = ze._getDrawingBufferColorSpace(e), t.unpackColorSpace = ze._getUnpackColorSpace();
  }
}
var ur = function() {
  var r = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) {
    h.preventDefault(), n(++r % e.children.length);
  }, false);
  function t(h) {
    return e.appendChild(h.dom), h;
  }
  function n(h) {
    for (var u = 0; u < e.children.length; u++) e.children[u].style.display = u === h ? "block" : "none";
    r = h;
  }
  var i = (performance || Date).now(), s = i, a = 0, o = t(new ur.Panel("FPS", "#0ff", "#002")), l = t(new ur.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = t(new ur.Panel("MB", "#f08", "#201"));
  return n(0), { REVISION: 16, dom: e, addPanel: t, showPanel: n, begin: function() {
    i = (performance || Date).now();
  }, end: function() {
    a++;
    var h = (performance || Date).now();
    if (l.update(h - i, 200), h >= s + 1e3 && (o.update(a * 1e3 / (h - s), 100), s = h, a = 0, c)) {
      var u = performance.memory;
      c.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    i = this.end();
  }, domElement: e, setMode: n };
};
ur.Panel = function(r, e, t) {
  var n = 1 / 0, i = 0, s = Math.round, a = s(window.devicePixelRatio || 1), o = 80 * a, l = 48 * a, c = 3 * a, h = 2 * a, u = 3 * a, d = 15 * a, p = 74 * a, g = 30 * a, _ = document.createElement("canvas");
  _.width = o, _.height = l, _.style.cssText = "width:80px;height:48px";
  var m = _.getContext("2d");
  return m.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = t, m.fillRect(0, 0, o, l), m.fillStyle = e, m.fillText(r, c, h), m.fillRect(u, d, p, g), m.fillStyle = t, m.globalAlpha = 0.9, m.fillRect(u, d, p, g), { dom: _, update: function(f, A) {
    n = Math.min(n, f), i = Math.max(i, f), m.fillStyle = t, m.globalAlpha = 1, m.fillRect(0, 0, o, d), m.fillStyle = e, m.fillText(s(f) + " " + r + " (" + s(n) + "-" + s(i) + ")", c, h), m.drawImage(_, u + a, d, p - a, g, u, d, p - a, g), m.fillRect(u + p - a, d, a, g), m.fillStyle = t, m.globalAlpha = 0.9, m.fillRect(u + p - a, d, a, s((1 - f / A) * g));
  } };
};
function za(r, e) {
  if (e === 0) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), r;
  if (e === 2 || e === 1) {
    let t = r.getIndex();
    if (t === null) {
      const a = [], o = r.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++) a.push(l);
        r.setIndex(a), t = r.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), r;
    }
    const n = t.count - 2, i = [];
    if (e === 2) for (let a = 1; a <= n; a++) i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else for (let a = 0; a < n; a++) a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const s = r.clone();
    return s.setIndex(i), s.clearGroups(), s;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), r;
}
class Np extends Bn {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new Yf(t);
    }), this.register(function(t) {
      return new Kf(t);
    }), this.register(function(t) {
      return new ip(t);
    }), this.register(function(t) {
      return new rp(t);
    }), this.register(function(t) {
      return new sp(t);
    }), this.register(function(t) {
      return new Zf(t);
    }), this.register(function(t) {
      return new $f(t);
    }), this.register(function(t) {
      return new Jf(t);
    }), this.register(function(t) {
      return new Qf(t);
    }), this.register(function(t) {
      return new qf(t);
    }), this.register(function(t) {
      return new ep(t);
    }), this.register(function(t) {
      return new jf(t);
    }), this.register(function(t) {
      return new np(t);
    }), this.register(function(t) {
      return new tp(t);
    }), this.register(function(t) {
      return new Wf(t);
    }), this.register(function(t) {
      return new ap(t);
    }), this.register(function(t) {
      return new op(t);
    });
  }
  load(e, t, n, i) {
    const s = this;
    let a;
    if (this.resourcePath !== "") a = this.resourcePath;
    else if (this.path !== "") {
      const c = bi.extractUrlBase(e);
      a = bi.resolveURL(c, this.path);
    } else a = bi.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), s.manager.itemError(e), s.manager.itemEnd(e);
    }, l = new fs(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        s.parse(c, a, function(h) {
          t(h), s.manager.itemEnd(e);
        }, o);
      } catch (h) {
        o(h);
      }
    }, n, o);
  }
  setDRACOLoader(e) {
    return this.dracoLoader = e, this;
  }
  setKTX2Loader(e) {
    return this.ktx2Loader = e, this;
  }
  setMeshoptDecoder(e) {
    return this.meshoptDecoder = e, this;
  }
  register(e) {
    return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e), this;
  }
  unregister(e) {
    return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this;
  }
  parse(e, t, n, i) {
    let s;
    const a = {}, o = {}, l = new TextDecoder();
    if (typeof e == "string") s = JSON.parse(e);
    else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === mo) {
      try {
        a[Oe.KHR_BINARY_GLTF] = new lp(e);
      } catch (u) {
        i && i(u);
        return;
      }
      s = JSON.parse(a[Oe.KHR_BINARY_GLTF].content);
    } else s = JSON.parse(l.decode(e));
    else s = e;
    if (s.asset === void 0 || s.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new Sp(s, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = true;
    }
    if (s.extensionsUsed) for (let h = 0; h < s.extensionsUsed.length; ++h) {
      const u = s.extensionsUsed[h], d = s.extensionsRequired || [];
      switch (u) {
        case Oe.KHR_MATERIALS_UNLIT:
          a[u] = new Xf();
          break;
        case Oe.KHR_DRACO_MESH_COMPRESSION:
          a[u] = new cp(s, this.dracoLoader);
          break;
        case Oe.KHR_TEXTURE_TRANSFORM:
          a[u] = new hp();
          break;
        case Oe.KHR_MESH_QUANTIZATION:
          a[u] = new up();
          break;
        default:
          d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
      }
    }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, s) {
      n.parse(e, t, i, s);
    });
  }
}
function Vf() {
  let r = {};
  return { get: function(e) {
    return r[e];
  }, add: function(e, t) {
    r[e] = t;
  }, remove: function(e) {
    delete r[e];
  }, removeAll: function() {
    r = {};
  } };
}
const Oe = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class Wf {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const s = t[n];
      s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const s = t.json, l = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new Ee(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Et);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new Wl(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new zl(h), c.distance = u;
        break;
      case "spot":
        c = new kl(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, on(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, s = n.json.nodes[e], o = (s.extensions && s.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class Xf {
  constructor() {
    this.name = Oe.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Nn;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new Ee(1, 1, 1), e.opacity = 1;
    const s = t.pbrMetallicRoughness;
    if (s) {
      if (Array.isArray(s.baseColorFactor)) {
        const a = s.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], Et), e.opacity = a[3];
      }
      s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, gt));
    }
    return Promise.all(i);
  }
}
class qf {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = i.extensions[this.name].emissiveStrength;
    return s !== void 0 && (t.emissiveIntensity = s), Promise.resolve();
  }
}
class Yf {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Be(o, o);
    }
    return Promise.all(s);
  }
}
class Kf {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = i.extensions[this.name];
    return t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0, Promise.resolve();
  }
}
class jf {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(s);
  }
}
class Zf {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [];
    t.sheenColor = new Ee(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Et);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, gt)), a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(s);
  }
}
class $f {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(s);
  }
}
class Jf {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new Ee().setRGB(o[0], o[1], o[2], Et), Promise.all(s);
  }
}
class Qf {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = i.extensions[this.name];
    return t.ior = s.ior !== void 0 ? s.ior : 1.5, Promise.resolve();
  }
}
class ep {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new Ee().setRGB(o[0], o[1], o[2], Et), a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, gt)), Promise.all(s);
  }
}
class tp {
  constructor(e) {
    this.parser = e, this.name = Oe.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(s);
  }
}
class np {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : $t;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const s = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(s);
  }
}
class ip {
  constructor(e) {
    this.parser = e, this.name = Oe.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const s = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, s.source, a);
  }
}
class rp {
  constructor(e) {
    this.parser = e, this.name = Oe.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t]) return null;
    const a = s.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class sp {
  constructor(e) {
    this.parser = e, this.name = Oe.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, s = i.textures[e];
    if (!s.extensions || !s.extensions[t]) return null;
    const a = s.extensions[t], o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return this.detectSupport().then(function(c) {
      if (c) return n.loadTextureImage(e, a.source, l);
      if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
      return n.loadTexture(e);
    });
  }
  detectSupport() {
    return this.isSupported || (this.isSupported = new Promise(function(e) {
      const t = new Image();
      t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
        e(t.height === 1);
      };
    })), this.isSupported;
  }
}
class ap {
  constructor(e) {
    this.name = Oe.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], s = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return s.then(function(o) {
        const l = i.byteOffset || 0, c = i.byteLength || 0, h = i.count, u = i.byteStride, d = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(p) {
          return p.buffer;
        }) : a.ready.then(function() {
          const p = new ArrayBuffer(h * u);
          return a.decodeGltfBuffer(new Uint8Array(p), h, u, d, i.mode, i.filter), p;
        });
      });
    } else return null;
  }
}
class op {
  constructor(e) {
    this.name = Oe.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives) if (c.mode !== Nt.TRIANGLES && c.mode !== Nt.TRIANGLE_STRIP && c.mode !== Nt.TRIANGLE_FAN && c.mode !== void 0) return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a) o.push(this.parser.getDependency("accessor", a[c]).then((h) => (l[c] = h, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, p = [];
      for (const g of u) {
        const _ = new Ce(), m = new L(), f = new jt(), A = new L(1, 1, 1), E = new _l(g.geometry, g.material, d);
        for (let S = 0; S < d; S++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, S), l.ROTATION && f.fromBufferAttribute(l.ROTATION, S), l.SCALE && A.fromBufferAttribute(l.SCALE, S), E.setMatrixAt(S, _.compose(m, f, A));
        for (const S in l) if (S === "_COLOR_0") {
          const I = l[S];
          E.instanceColor = new es(I.array, I.itemSize, I.normalized);
        } else S !== "TRANSLATION" && S !== "ROTATION" && S !== "SCALE" && g.geometry.setAttribute(S, l[S]);
        tt.prototype.copy.call(E, g), this.parser.assignFinalMaterial(E), p.push(E);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const mo = "glTF", yi = 12, Va = { JSON: 1313821514, BIN: 5130562 };
class lp {
  constructor(e) {
    this.name = Oe.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, yi), n = new TextDecoder();
    if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, true), length: t.getUint32(8, true) }, this.header.magic !== mo) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - yi, s = new DataView(e, yi);
    let a = 0;
    for (; a < i; ) {
      const o = s.getUint32(a, true);
      a += 4;
      const l = s.getUint32(a, true);
      if (a += 4, l === Va.JSON) {
        const c = new Uint8Array(e, yi + a, o);
        this.content = n.decode(c);
      } else if (l === Va.BIN) {
        const c = yi + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class cp {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Oe.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, s = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const h in a) {
      const u = rs[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = rs[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], p = ii[d.componentType];
        c[u] = p.name, l[u] = d.normalized === true;
      }
    }
    return t.getDependency("bufferView", s).then(function(h) {
      return new Promise(function(u, d) {
        i.decodeDracoFile(h, function(p) {
          for (const g in p.attributes) {
            const _ = p.attributes[g], m = l[g];
            m !== void 0 && (_.normalized = m);
          }
          u(p);
        }, o, c, Et, d);
      });
    });
  }
}
class hp {
  constructor() {
    this.name = Oe.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class up {
  constructor() {
    this.name = Oe.KHR_MESH_QUANTIZATION;
  }
}
class go extends Li {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, s = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[s + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const s = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = i - t, u = (n - t) / h, d = u * u, p = d * u, g = e * c, _ = g - c, m = -2 * p + 3 * d, f = p - d, A = 1 - m, E = f - d + u;
    for (let S = 0; S !== o; S++) {
      const I = a[_ + S + o], b = a[_ + S + l] * h, w = a[g + S + o], N = a[g + S] * h;
      s[S] = A * I + E * b + m * w + f * N;
    }
    return s;
  }
}
const dp = new jt();
class fp extends go {
  interpolate_(e, t, n, i) {
    const s = super.interpolate_(e, t, n, i);
    return dp.fromArray(s).normalize().toArray(s), s;
  }
}
const Nt = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, ii = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, Wa = { 9728: 1003, 9729: 1006, 9984: 1004, 9985: 1007, 9986: 1005, 9987: 1008 }, Xa = { 33071: 1001, 33648: 1002, 10497: 1e3 }, $r = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, rs = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, gn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, pp = { CUBICSPLINE: void 0, LINEAR: 2301, STEP: 2300 }, Jr = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function mp(r) {
  return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new ds({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: 0 })), r.DefaultMaterial;
}
function Ln(r, e, t) {
  for (const n in t.extensions) r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function on(r, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function gp(r, e, t) {
  let n = false, i = false, s = false;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (i = true), u.COLOR_0 !== void 0 && (s = true), n && i && s) break;
  }
  if (!n && !i && !s) return Promise.resolve(r);
  const a = [], o = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
      o.push(d);
    }
    if (s) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (r.morphAttributes.position = h), i && (r.morphAttributes.normal = u), s && (r.morphAttributes.color = d), r.morphTargetsRelative = true, r;
  });
}
function _p(r, e) {
  if (r.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) r.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (r.morphTargetInfluences.length === t.length) {
      r.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++) r.morphTargetDictionary[t[n]] = n;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function xp(r) {
  let e;
  const t = r.extensions && r.extensions[Oe.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Qr(t.attributes) : e = r.indices + ":" + Qr(r.attributes) + ":" + r.mode, r.targets !== void 0) for (let n = 0, i = r.targets.length; n < i; n++) e += ":" + Qr(r.targets[n]);
  return e;
}
function Qr(r) {
  let e = "";
  const t = Object.keys(r).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + r[t[n]] + ";";
  return e;
}
function ss(r) {
  switch (r) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
  }
}
function vp(r) {
  return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : r.search(/\.ktx2($|\?)/i) > 0 || r.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const Mp = new Ce();
class Sp {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new Vf(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, i = -1, s = false, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === true;
      const l = o.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, s = o.indexOf("Firefox") > -1, a = s ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || s && a < 98 ? this.textureLoader = new Bl(this.options.manager) : this.textureLoader = new Xl(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new fs(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, s = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
    }).then(function(a) {
      const o = { scene: a[0][i.scene || 0], scenes: a[0], animations: a[1], cameras: a[2], asset: i.asset, parser: n, userData: {} };
      return Ln(s, o, i), on(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        for (const l of o.scenes) l.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, s = t.length; i < s; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++) e[a[o]].isBone = true;
    }
    for (let i = 0, s = e.length; i < s; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = true)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), s = (a, o) => {
      const l = this.associations.get(a);
      l != null && this.associations.set(o, l);
      for (const [c, h] of a.children.entries()) s(h, o.children[c]);
    };
    return s(n, i), i.name += "_instance_" + e.uses[t]++, i;
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const s = e(t[i]);
      s && n.push(s);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function(s) {
            return s.loadNode && s.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(s) {
            return s.loadMesh && s.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(s) {
            return s.loadBufferView && s.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(s) {
            return s.loadMaterial && s.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(s) {
            return s.loadTexture && s.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(s) {
            return s.loadAnimation && s.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(s) {
            return s != this && s.getDependency && s.getDependency(e, t);
          }), !i) throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this, i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      t = Promise.all(i.map(function(s, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[Oe.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(s, a) {
      n.load(bi.resolveURL(t.uri, i.path), s, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, s = t.byteOffset || 0;
      return n.slice(s, s + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = $r[i.type], o = ii[i.componentType], l = i.normalized === true, c = new o(i.count * a);
      return Promise.resolve(new Tt(c, a, l));
    }
    const s = [];
    return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null), i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), s.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(s).then(function(a) {
      const o = a[0], l = $r[i.type], c = ii[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === true;
      let _, m;
      if (p && p !== u) {
        const f = Math.floor(d / p), A = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let E = t.cache.get(A);
        E || (_ = new c(o, f * p, i.count * p / h), E = new dl(_, p / h), t.cache.add(A, E)), m = new ls(E, l, d % p / h, g);
      } else o === null ? _ = new c(i.count * l) : _ = new c(o, d, i.count * l), m = new Tt(_, l, g);
      if (i.sparse !== void 0) {
        const f = $r.SCALAR, A = ii[i.sparse.indices.componentType], E = i.sparse.indices.byteOffset || 0, S = i.sparse.values.byteOffset || 0, I = new A(a[1], E, i.sparse.count * f), b = new c(a[2], S, i.sparse.count * l);
        o !== null && (m = new Tt(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
        for (let w = 0, N = I.length; w < N; w++) {
          const y = I[w];
          if (m.setX(y, b[w * l]), l >= 2 && m.setY(y, b[w * l + 1]), l >= 3 && m.setZ(y, b[w * l + 2]), l >= 4 && m.setW(y, b[w * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, s = t.textures[e].source, a = t.images[s];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, s, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, s = this.json, a = s.textures[e], o = s.images[t], l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = false, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === false && (h.name = o.uri);
      const d = (s.samplers || {})[a.sampler] || {};
      return h.magFilter = Wa[d.magFilter] || 1006, h.minFilter = Wa[d.minFilter] || 1008, h.wrapS = Xa[d.wrapS] || 1e3, h.wrapT = Xa[d.wrapT] || 1e3, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== 1003 && h.minFilter !== 1006, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, s = this.options;
    if (this.sourceCache[e] !== void 0) return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e], o = self.URL || self.webkitURL;
    let l = a.uri || "", c = false;
    if (a.bufferView !== void 0) l = n.getDependency("bufferView", a.bufferView).then(function(u) {
      c = true;
      const d = new Blob([u], { type: a.mimeType });
      return l = o.createObjectURL(d), l;
    });
    else if (a.uri === void 0) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
    const h = Promise.resolve(l).then(function(u) {
      return new Promise(function(d, p) {
        let g = d;
        t.isImageBitmapLoader === true && (g = function(_) {
          const m = new pt(_);
          m.needsUpdate = true, d(m);
        }), t.load(bi.resolveURL(u, s.path), g, void 0, p);
      });
    }).then(function(u) {
      return c === true && o.revokeObjectURL(l), on(u, a), u.userData.mimeType = a.mimeType || vp(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const s = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), s.extensions[Oe.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[Oe.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = s.associations.get(a);
          a = s.extensions[Oe.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), s.associations.set(a, l);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, s = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new ro(), Xt.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new us(), Xt.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
    }
    if (i || s || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), s && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), s && (l.vertexColors = true), a && (l.flatShading = true), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return ds;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, s = n.materials[e];
    let a;
    const o = {}, l = s.extensions || {}, c = [];
    if (l[Oe.KHR_MATERIALS_UNLIT]) {
      const u = i[Oe.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), c.push(u.extendParams(o, s, t));
    } else {
      const u = s.pbrMetallicRoughness || {};
      if (o.color = new Ee(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Et), o.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, gt)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    s.doubleSided === true && (o.side = 2);
    const h = s.alphaMode || Jr.OPAQUE;
    if (h === Jr.BLEND ? (o.transparent = true, o.depthWrite = false) : (o.transparent = false, h === Jr.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : 0.5)), s.normalTexture !== void 0 && a !== Nn && (c.push(t.assignTexture(o, "normalMap", s.normalTexture)), o.normalScale = new Be(1, 1), s.normalTexture.scale !== void 0)) {
      const u = s.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (s.occlusionTexture !== void 0 && a !== Nn && (c.push(t.assignTexture(o, "aoMap", s.occlusionTexture)), s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)), s.emissiveFactor !== void 0 && a !== Nn) {
      const u = s.emissiveFactor;
      o.emissive = new Ee().setRGB(u[0], u[1], u[2], Et);
    }
    return s.emissiveTexture !== void 0 && a !== Nn && c.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, gt)), Promise.all(c).then(function() {
      const u = new a(o);
      return s.name && (u.name = s.name), on(u, s), t.associations.set(u, { materials: e }), s.extensions && Ln(i, u, s), u;
    });
  }
  createUniqueName(e) {
    const t = Je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function s(o) {
      return n[Oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return qa(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = xp(c), u = i[h];
      if (u) a.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[Oe.KHR_DRACO_MESH_COMPRESSION] ? d = s(c) : d = qa(new Ft(), c, t), i[h] = { primitive: c, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, s = n.meshes[e], a = s.primitives, o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const h = a[l].material === void 0 ? mp(this.cache) : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const _ = h[p], m = a[p];
        let f;
        const A = c[p];
        if (m.mode === Nt.TRIANGLES || m.mode === Nt.TRIANGLE_STRIP || m.mode === Nt.TRIANGLE_FAN || m.mode === void 0) f = s.isSkinnedMesh === true ? new pl(_, A) : new Pt(_, A), f.isSkinnedMesh === true && f.normalizeSkinWeights(), m.mode === Nt.TRIANGLE_STRIP ? f.geometry = za(f.geometry, 1) : m.mode === Nt.TRIANGLE_FAN && (f.geometry = za(f.geometry, 2));
        else if (m.mode === Nt.LINES) f = new Ml(_, A);
        else if (m.mode === Nt.LINE_STRIP) f = new wi(_, A);
        else if (m.mode === Nt.LINE_LOOP) f = new Sl(_, A);
        else if (m.mode === Nt.POINTS) f = new yl(_, A);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && _p(f, s), f.name = t.createUniqueName(s.name || "mesh_" + e), on(f, s), m.extensions && Ln(i, f, m), t.assignFinalMaterial(f), u.push(f);
      }
      for (let p = 0, g = u.length; p < g; p++) t.associations.set(u[p], { meshes: e, primitives: p });
      if (u.length === 1) return s.extensions && Ln(i, u[0], s), u[0];
      const d = new Fn();
      s.extensions && Ln(i, d, s), t.associations.set(d, { meshes: e });
      for (let p = 0, g = u.length; p < g; p++) d.add(u[p]);
      return d;
    });
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e], i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return n.type === "perspective" ? t = new bt(Go.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new ms(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), on(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, s = t.joints.length; i < s; i++) n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const s = i.pop(), a = i, o = [], l = [];
      for (let c = 0, h = a.length; c < h; c++) {
        const u = a[c];
        if (u) {
          o.push(u);
          const d = new Ce();
          s !== null && d.fromArray(s.array, c * 16), l.push(d);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new cs(o, l);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], s = i.name ? i.name : "animation_" + e, a = [], o = [], l = [], c = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const p = i.channels[u], g = i.samplers[p.sampler], _ = p.target, m = _.node, f = i.parameters !== void 0 ? i.parameters[g.input] : g.input, A = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", f)), l.push(this.getDependency("accessor", A)), c.push(g), h.push(_));
    }
    return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l), Promise.all(c), Promise.all(h)]).then(function(u) {
      const d = u[0], p = u[1], g = u[2], _ = u[3], m = u[4], f = [];
      for (let A = 0, E = d.length; A < E; A++) {
        const S = d[A], I = p[A], b = g[A], w = _[A], N = m[A];
        if (S === void 0) continue;
        S.updateMatrix && S.updateMatrix();
        const y = n._createAnimationTracks(S, I, b, w, N);
        if (y) for (let M = 0; M < y.length; M++) f.push(y[M]);
      }
      return new Ll(s, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
      const a = n._getNodeRef(n.meshCache, i.mesh, s);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh) for (let l = 0, c = i.weights.length; l < c; l++) o.morphTargetInfluences[l] = i.weights[l];
      }), a;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], s = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let c = 0, h = o.length; c < h; c++) a.push(n.getDependency("node", o[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([s, Promise.all(a), l]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      d !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, Mp);
      });
      for (let p = 0, g = u.length; p < g; p++) h.add(u[p]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const s = t.nodes[e], a = s.name ? i.createUniqueName(s.name) : "", o = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && o.push(l), s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, s.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let h;
      if (s.isBone === true ? h = new no() : c.length > 1 ? h = new Fn() : c.length === 1 ? h = c[0] : h = new tt(), h !== c[0]) for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
      if (s.name && (h.userData.name = s.name, h.name = a), on(h, s), s.extensions && Ln(n, h, s), s.matrix !== void 0) {
        const u = new Ce();
        u.fromArray(s.matrix), h.applyMatrix4(u);
      } else s.translation !== void 0 && h.position.fromArray(s.translation), s.rotation !== void 0 && h.quaternion.fromArray(s.rotation), s.scale !== void 0 && h.scale.fromArray(s.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, s = new Fn();
    n.name && (s.name = i.createUniqueName(n.name)), on(s, n), n.extensions && Ln(t, s, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++) o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++) s.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations) (d instanceof Xt || d instanceof pt) && u.set(d, p);
        return h.traverse((d) => {
          const p = i.associations.get(d);
          p != null && u.set(d, p);
        }), u;
      };
      return i.associations = c(s), s;
    });
  }
  _createAnimationTracks(e, t, n, i, s) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    gn[s.path] === gn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(o);
    let c;
    switch (gn[s.path]) {
      case gn.weights:
        c = ai;
        break;
      case gn.rotation:
        c = oi;
        break;
      case gn.position:
      case gn.scale:
        c = li;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = ai;
            break;
          case 2:
          case 3:
          default:
            c = li;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? pp[i.interpolation] : 2301, u = this._getArrayFromAccessor(n);
    for (let d = 0, p = l.length; d < p; d++) {
      const g = new c(l[d] + "." + gn[s.path], t.array, u, h);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = ss(t.constructor), i = new Float32Array(t.length);
      for (let s = 0, a = t.length; s < a; s++) i[s] = t[s] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof oi ? fp : go;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function yp(r, e, t) {
  const n = e.attributes, i = new cn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(new L(l[0], l[1], l[2]), new L(c[0], c[1], c[2])), o.normalized) {
        const h = ss(ii[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const s = e.targets;
  if (s !== void 0) {
    const o = new L(), l = new L();
    for (let c = 0, h = s.length; c < h; c++) {
      const u = s[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const _ = ss(ii[d.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  r.boundingBox = i;
  const a = new Zt();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, r.boundingSphere = a;
}
function qa(r, e, t) {
  const n = e.attributes, i = [];
  function s(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      r.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = rs[a] || a.toLowerCase();
    o in r.attributes || i.push(s(n[a], o));
  }
  if (e.indices !== void 0 && !r.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      r.setIndex(o);
    });
    i.push(a);
  }
  return ze.workingColorSpace !== Et && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ze.workingColorSpace}" not supported.`), on(r, e), yp(r, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? gp(r, e.targets, t) : r;
  });
}
export {
  Pp as A,
  Pi as B,
  Ee as C,
  Wl as D,
  hs as F,
  Np as G,
  Rp as H,
  Pt as M,
  tt as O,
  Lp as P,
  Ep as R,
  Ap as S,
  Bl as T,
  L as V,
  Up as W,
  bp as a,
  ds as b,
  Nn as c,
  Ce as d,
  cn as e,
  Cp as f,
  bt as g,
  ur as h,
  Tp as i,
  wp as j,
  Ip as k,
  Yl as l,
  Dp as m
};

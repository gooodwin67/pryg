/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const bi = { ROTATE: 0, DOLLY: 1, PAN: 2 }, Ei = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 }, zc = 0, _o = 1, Hc = 2, Kl = 1, Vc = 2, _n = 3, an = 0, Dt = 1, rn = 2, Fn = 0, Ai = 1, xo = 2, vo = 3, Mo = 4, Gc = 5, Qn = 100, Wc = 101, Xc = 102, Yc = 103, qc = 104, jc = 200, Kc = 201, Zc = 202, $c = 203, jr = 204, Kr = 205, Jc = 206, Qc = 207, eh = 208, th = 209, nh = 210, ih = 211, sh = 212, rh = 213, ah = 214, Zr = 0, $r = 1, Jr = 2, Pi = 3, Qr = 4, ea = 5, ta = 6, na = 7, za = 0, oh = 1, lh = 2, On = 0, ch = 1, hh = 2, uh = 3, dh = 4, fh = 5, ph = 6, mh = 7, yo = "attached", gh = "detached", Zl = 300, Li = 301, Di = 302, ia = 303, sa = 304, ar = 306, Ii = 1e3, Un = 1001, tr = 1002, At = 1003, $l = 1004, ts = 1005, Ft = 1006, qs = 1007, Mn = 1008, En = 1009, Jl = 1010, Ql = 1011, as = 1012, Ha = 1013, ii = 1014, Jt = 1015, us = 1016, Va = 1017, Ga = 1018, Ui = 1020, ec = 35902, tc = 1021, nc = 1022, Vt = 1023, ic = 1024, sc = 1025, wi = 1026, Ni = 1027, Wa = 1028, Xa = 1029, rc = 1030, Ya = 1031, qa = 1033, js = 33776, Ks = 33777, Zs = 33778, $s = 33779, ra = 35840, aa = 35841, oa = 35842, la = 35843, ca = 36196, ha = 37492, ua = 37496, da = 37808, fa = 37809, pa = 37810, ma = 37811, ga = 37812, _a = 37813, xa = 37814, va = 37815, Ma = 37816, ya = 37817, Sa = 37818, Ea = 37819, Ta = 37820, ba = 37821, Js = 36492, Aa = 36494, wa = 36495, ac = 36283, Ra = 36284, Ca = 36285, Pa = 36286, os = 2300, ls = 2301, ur = 2302, So = 2400, Eo = 2401, To = 2402, _h = 2500, xh = 0, oc = 1, La = 2, vh = 3200, Mh = 3201, ja = 0, yh = 1, In = "", xt = "srgb", Rt = "srgb-linear", nr = "linear", et = "srgb", oi = 7680, bo = 519, Sh = 512, Eh = 513, Th = 514, lc = 515, bh = 516, Ah = 517, wh = 518, Rh = 519, Da = 35044, Ao = "300 es", yn = 2e3, ir = 2001;
class si {
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
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const Mt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let wo = 1234567;
const is = Math.PI / 180, Fi = 180 / Math.PI;
function Qt() {
  const s = Math.random() * 4294967295 | 0, e = Math.random() * 4294967295 | 0, t = Math.random() * 4294967295 | 0, n = Math.random() * 4294967295 | 0;
  return (Mt[s & 255] + Mt[s >> 8 & 255] + Mt[s >> 16 & 255] + Mt[s >> 24 & 255] + "-" + Mt[e & 255] + Mt[e >> 8 & 255] + "-" + Mt[e >> 16 & 15 | 64] + Mt[e >> 24 & 255] + "-" + Mt[t & 63 | 128] + Mt[t >> 8 & 255] + "-" + Mt[t >> 16 & 255] + Mt[t >> 24 & 255] + Mt[n & 255] + Mt[n >> 8 & 255] + Mt[n >> 16 & 255] + Mt[n >> 24 & 255]).toLowerCase();
}
function Fe(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Ka(s, e) {
  return (s % e + e) % e;
}
function Ch(s, e, t, n, i) {
  return n + (s - e) * (i - n) / (t - e);
}
function Ph(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function ss(s, e, t) {
  return (1 - t) * s + t * e;
}
function Lh(s, e, t, n) {
  return ss(s, e, 1 - Math.exp(-t * n));
}
function Dh(s, e = 1) {
  return e - Math.abs(Ka(s, e * 2) - e);
}
function Ih(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * (3 - 2 * s));
}
function Uh(s, e, t) {
  return s <= e ? 0 : s >= t ? 1 : (s = (s - e) / (t - e), s * s * s * (s * (s * 6 - 15) + 10));
}
function Nh(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Fh(s, e) {
  return s + Math.random() * (e - s);
}
function Oh(s) {
  return s * (0.5 - Math.random());
}
function Bh(s) {
  s !== void 0 && (wo = s);
  let e = wo += 1831565813;
  return e = Math.imul(e ^ e >>> 15, e | 1), e ^= e + Math.imul(e ^ e >>> 7, e | 61), ((e ^ e >>> 14) >>> 0) / 4294967296;
}
function kh(s) {
  return s * is;
}
function zh(s) {
  return s * Fi;
}
function Hh(s) {
  return (s & s - 1) === 0 && s !== 0;
}
function Vh(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function Gh(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function Wh(s, e, t, n, i) {
  const r = Math.cos, a = Math.sin, o = r(t / 2), l = a(t / 2), c = r((e + n) / 2), h = a((e + n) / 2), u = r((e - n) / 2), d = a((e - n) / 2), p = r((n - e) / 2), g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      s.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      s.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      s.set(o * h, l * g, l * p, o * c);
      break;
    case "YXY":
      s.set(l * p, o * h, l * g, o * c);
      break;
    case "ZYZ":
      s.set(l * g, l * p, o * h, o * c);
      break;
    default:
      console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i);
  }
}
function Zt(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Je(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const cc = { DEG2RAD: is, RAD2DEG: Fi, generateUUID: Qt, clamp: Fe, euclideanModulo: Ka, mapLinear: Ch, inverseLerp: Ph, lerp: ss, damp: Lh, pingpong: Dh, smoothstep: Ih, smootherstep: Uh, randInt: Nh, randFloat: Fh, randFloatSpread: Oh, seededRandom: Bh, degToRad: kh, radToDeg: zh, isPowerOfTwo: Hh, ceilPowerOfTwo: Vh, floorPowerOfTwo: Gh, setQuaternionFromProperEuler: Wh, normalize: Je, denormalize: Zt };
class be {
  constructor(e = 0, t = 0) {
    be.prototype.isVector2 = true, this.x = e, this.y = t;
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
    const n = Math.cos(t), i = Math.sin(t), r = this.x - e.x, a = this.y - e.y;
    return this.x = r * n - a * i + e.x, this.y = r * i + a * n + e.y, this;
  }
  random() {
    return this.x = Math.random(), this.y = Math.random(), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class De {
  constructor(e, t, n, i, r, a, o, l, c) {
    De.prototype.isMatrix3 = true, this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c);
  }
  set(e, t, n, i, r, a, o, l, c) {
    const h = this.elements;
    return h[0] = e, h[1] = i, h[2] = o, h[3] = t, h[4] = r, h[5] = l, h[6] = n, h[7] = a, h[8] = c, this;
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
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[3], l = n[6], c = n[1], h = n[4], u = n[7], d = n[2], p = n[5], g = n[8], _ = i[0], m = i[3], f = i[6], b = i[1], T = i[4], y = i[7], L = i[2], w = i[5], A = i[8];
    return r[0] = a * _ + o * b + l * L, r[3] = a * m + o * T + l * w, r[6] = a * f + o * y + l * A, r[1] = c * _ + h * b + u * L, r[4] = c * m + h * T + u * w, r[7] = c * f + h * y + u * A, r[2] = d * _ + p * b + g * L, r[5] = d * m + p * T + g * w, r[8] = d * f + p * y + g * A, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[3] *= e, t[6] *= e, t[1] *= e, t[4] *= e, t[7] *= e, t[2] *= e, t[5] *= e, t[8] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8];
    return t * a * h - t * o * c - n * r * h + n * o * l + i * r * c - i * a * l;
  }
  invert() {
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = h * a - o * c, d = o * l - h * r, p = c * r - a * l, g = t * u + n * d + i * p;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return e[0] = u * _, e[1] = (i * c - h * n) * _, e[2] = (o * n - i * a) * _, e[3] = d * _, e[4] = (h * t - i * l) * _, e[5] = (i * r - o * t) * _, e[6] = p * _, e[7] = (n * l - c * t) * _, e[8] = (a * t - n * r) * _, this;
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
  setUvTransform(e, t, n, i, r, a, o) {
    const l = Math.cos(r), c = Math.sin(r);
    return this.set(n * l, n * c, -n * (l * a + c * o) + a + e, -i * c, i * l, -i * (-c * a + l * o) + o + t, 0, 0, 1), this;
  }
  scale(e, t) {
    return this.premultiply(dr.makeScale(e, t)), this;
  }
  rotate(e) {
    return this.premultiply(dr.makeRotation(-e)), this;
  }
  translate(e, t) {
    return this.premultiply(dr.makeTranslation(e, t)), this;
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
const dr = new De();
function hc(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return true;
  return false;
}
function cs(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Xh() {
  const s = cs("canvas");
  return s.style.display = "block", s;
}
const Ro = {};
function Si(s) {
  s in Ro || (Ro[s] = true, console.warn(s));
}
function Yh(s, e, t) {
  return new Promise(function(n, i) {
    function r() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
function qh(s) {
  const e = s.elements;
  e[2] = 0.5 * e[2] + 0.5 * e[3], e[6] = 0.5 * e[6] + 0.5 * e[7], e[10] = 0.5 * e[10] + 0.5 * e[11], e[14] = 0.5 * e[14] + 0.5 * e[15];
}
function jh(s) {
  const e = s.elements;
  e[11] === -1 ? (e[10] = -e[10] - 1, e[14] = -e[14]) : (e[10] = -e[10], e[14] = -e[14] + 1);
}
const Co = new De().set(0.4123908, 0.3575843, 0.1804808, 0.212639, 0.7151687, 0.0721923, 0.0193308, 0.1191948, 0.9505322), Po = new De().set(3.2409699, -1.5373832, -0.4986108, -0.9692436, 1.8759675, 0.0415551, 0.0556301, -0.203977, 1.0569715);
function Kh() {
  const s = { enabled: true, workingColorSpace: Rt, spaces: {}, convert: function(i, r, a) {
    return this.enabled === false || r === a || !r || !a || (this.spaces[r].transfer === et && (i.r = Sn(i.r), i.g = Sn(i.g), i.b = Sn(i.b)), this.spaces[r].primaries !== this.spaces[a].primaries && (i.applyMatrix3(this.spaces[r].toXYZ), i.applyMatrix3(this.spaces[a].fromXYZ)), this.spaces[a].transfer === et && (i.r = Ri(i.r), i.g = Ri(i.g), i.b = Ri(i.b))), i;
  }, fromWorkingColorSpace: function(i, r) {
    return this.convert(i, this.workingColorSpace, r);
  }, toWorkingColorSpace: function(i, r) {
    return this.convert(i, r, this.workingColorSpace);
  }, getPrimaries: function(i) {
    return this.spaces[i].primaries;
  }, getTransfer: function(i) {
    return i === In ? nr : this.spaces[i].transfer;
  }, getLuminanceCoefficients: function(i, r = this.workingColorSpace) {
    return i.fromArray(this.spaces[r].luminanceCoefficients);
  }, define: function(i) {
    Object.assign(this.spaces, i);
  }, _getMatrix: function(i, r, a) {
    return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
  }, _getDrawingBufferColorSpace: function(i) {
    return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
  }, _getUnpackColorSpace: function(i = this.workingColorSpace) {
    return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
  } }, e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06], t = [0.2126, 0.7152, 0.0722], n = [0.3127, 0.329];
  return s.define({ [Rt]: { primaries: e, whitePoint: n, transfer: nr, toXYZ: Co, fromXYZ: Po, luminanceCoefficients: t, workingColorSpaceConfig: { unpackColorSpace: xt }, outputColorSpaceConfig: { drawingBufferColorSpace: xt } }, [xt]: { primaries: e, whitePoint: n, transfer: et, toXYZ: Co, fromXYZ: Po, luminanceCoefficients: t, outputColorSpaceConfig: { drawingBufferColorSpace: xt } } }), s;
}
const Ve = Kh();
function Sn(s) {
  return s < 0.04045 ? s * 0.0773993808 : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Ri(s) {
  return s < 31308e-7 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let li;
class Zh {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      li === void 0 && (li = cs("canvas")), li.width = e.width, li.height = e.height;
      const n = li.getContext("2d");
      e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height), t = li;
    }
    return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e), t.toDataURL("image/jpeg", 0.6)) : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
      const t = cs("canvas");
      t.width = e.width, t.height = e.height;
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height), r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = Sn(r[a] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++) t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(Sn(t[n] / 255) * 255) : t[n] = Sn(t[n]);
      return { data: t, width: e.width, height: e.height };
    } else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), e;
  }
}
let $h = 0;
class uc {
  constructor(e = null) {
    this.isSource = true, Object.defineProperty(this, "id", { value: $h++ }), this.uuid = Qt(), this.data = e, this.dataReady = true, this.version = 0;
  }
  set needsUpdate(e) {
    e === true && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" }, i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++) i[a].isDataTexture ? r.push(fr(i[a].image)) : r.push(fr(i[a]));
      } else r = fr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function fr(s) {
  return typeof HTMLImageElement < "u" && s instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && s instanceof ImageBitmap ? Zh.getDataURL(s) : s.data ? { data: Array.from(s.data), width: s.width, height: s.height, type: s.data.constructor.name } : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let Jh = 0;
class gt extends si {
  constructor(e = gt.DEFAULT_IMAGE, t = gt.DEFAULT_MAPPING, n = Un, i = Un, r = Ft, a = Mn, o = Vt, l = En, c = gt.DEFAULT_ANISOTROPY, h = In) {
    super(), this.isTexture = true, Object.defineProperty(this, "id", { value: Jh++ }), this.uuid = Qt(), this.name = "", this.source = new uc(e), this.mipmaps = [], this.mapping = t, this.channel = 0, this.wrapS = n, this.wrapT = i, this.magFilter = r, this.minFilter = a, this.anisotropy = c, this.format = o, this.internalFormat = null, this.type = l, this.offset = new be(0, 0), this.repeat = new be(1, 1), this.center = new be(0, 0), this.rotation = 0, this.matrixAutoUpdate = true, this.matrix = new De(), this.generateMipmaps = true, this.premultiplyAlpha = false, this.flipY = true, this.unpackAlignment = 4, this.colorSpace = h, this.userData = {}, this.version = 0, this.onUpdate = null, this.isRenderTargetTexture = false, this.pmremVersion = 0;
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
    if (this.mapping !== Zl) return e;
    if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
      case Ii:
        e.x = e.x - Math.floor(e.x);
        break;
      case Un:
        e.x = e.x < 0 ? 0 : 1;
        break;
      case tr:
        Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
        break;
    }
    if (e.y < 0 || e.y > 1) switch (this.wrapT) {
      case Ii:
        e.y = e.y - Math.floor(e.y);
        break;
      case Un:
        e.y = e.y < 0 ? 0 : 1;
        break;
      case tr:
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
gt.DEFAULT_IMAGE = null;
gt.DEFAULT_MAPPING = Zl;
gt.DEFAULT_ANISOTROPY = 1;
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
    const t = this.x, n = this.y, i = this.z, r = this.w, a = e.elements;
    return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r, this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r, this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r, this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r, this;
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
    let t, n, i, r;
    const l = e.elements, c = l[0], h = l[4], u = l[8], d = l[1], p = l[5], g = l[9], _ = l[2], m = l[6], f = l[10];
    if (Math.abs(h - d) < 0.01 && Math.abs(u - _) < 0.01 && Math.abs(g - m) < 0.01) {
      if (Math.abs(h + d) < 0.1 && Math.abs(u + _) < 0.1 && Math.abs(g + m) < 0.1 && Math.abs(c + p + f - 3) < 0.1) return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const T = (c + 1) / 2, y = (p + 1) / 2, L = (f + 1) / 2, w = (h + d) / 4, A = (u + _) / 4, N = (g + m) / 4;
      return T > y && T > L ? T < 0.01 ? (n = 0, i = 0.707106781, r = 0.707106781) : (n = Math.sqrt(T), i = w / n, r = A / n) : y > L ? y < 0.01 ? (n = 0.707106781, i = 0, r = 0.707106781) : (i = Math.sqrt(y), n = w / i, r = N / i) : L < 0.01 ? (n = 0.707106781, i = 0.707106781, r = 0) : (r = Math.sqrt(L), n = A / r, i = N / r), this.set(n, i, r, t), this;
    }
    let b = Math.sqrt((m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h));
    return Math.abs(b) < 1e-3 && (b = 1), this.x = (m - g) / b, this.y = (u - _) / b, this.z = (d - h) / b, this.w = Math.acos((c + p + f - 1) / 2), this;
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
class Qh extends si {
  constructor(e = 1, t = 1, n = {}) {
    super(), this.isRenderTarget = true, this.width = e, this.height = t, this.depth = 1, this.scissor = new Ye(0, 0, e, t), this.scissorTest = false, this.viewport = new Ye(0, 0, e, t);
    const i = { width: e, height: t, depth: 1 };
    n = Object.assign({ generateMipmaps: false, internalFormat: null, minFilter: Ft, depthBuffer: true, stencilBuffer: false, resolveDepthBuffer: true, resolveStencilBuffer: true, depthTexture: null, samples: 0, count: 1 }, n);
    const r = new gt(i, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.colorSpace);
    r.flipY = false, r.generateMipmaps = n.generateMipmaps, r.internalFormat = n.internalFormat, this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++) this.textures[o] = r.clone(), this.textures[o].isRenderTargetTexture = true;
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
      for (let i = 0, r = this.textures.length; i < r; i++) this.textures[i].image.width = e, this.textures[i].image.height = t, this.textures[i].image.depth = n;
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
    return this.texture.source = new uc(t), this.depthBuffer = e.depthBuffer, this.stencilBuffer = e.stencilBuffer, this.resolveDepthBuffer = e.resolveDepthBuffer, this.resolveStencilBuffer = e.resolveStencilBuffer, e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()), this.samples = e.samples, this;
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Bn extends Qh {
  constructor(e = 1, t = 1, n = {}) {
    super(e, t, n), this.isWebGLRenderTarget = true;
  }
}
class dc extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isDataArrayTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = At, this.minFilter = At, this.wrapR = Un, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1, this.layerUpdates = /* @__PURE__ */ new Set();
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class eu extends gt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null), this.isData3DTexture = true, this.image = { data: e, width: t, height: n, depth: i }, this.magFilter = At, this.minFilter = At, this.wrapR = Un, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
class Gt {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    this.isQuaternion = true, this._x = e, this._y = t, this._z = n, this._w = i;
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let l = n[i + 0], c = n[i + 1], h = n[i + 2], u = n[i + 3];
    const d = r[a + 0], p = r[a + 1], g = r[a + 2], _ = r[a + 3];
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
      const f = l * d + c * p + h * g + u * _, b = f >= 0 ? 1 : -1, T = 1 - f * f;
      if (T > Number.EPSILON) {
        const L = Math.sqrt(T), w = Math.atan2(L, f * b);
        m = Math.sin(m * w) / L, o = Math.sin(o * w) / L;
      }
      const y = o * b;
      if (l = l * m + d * y, c = c * m + p * y, h = h * m + g * y, u = u * m + _ * y, m === 1 - o) {
        const L = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        l *= L, c *= L, h *= L, u *= L;
      }
    }
    e[t] = l, e[t + 1] = c, e[t + 2] = h, e[t + 3] = u;
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i], l = n[i + 1], c = n[i + 2], h = n[i + 3], u = r[a], d = r[a + 1], p = r[a + 2], g = r[a + 3];
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
    const n = e._x, i = e._y, r = e._z, a = e._order, o = Math.cos, l = Math.sin, c = o(n / 2), h = o(i / 2), u = o(r / 2), d = l(n / 2), p = l(i / 2), g = l(r / 2);
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
    const t = e.elements, n = t[0], i = t[4], r = t[8], a = t[1], o = t[5], l = t[9], c = t[2], h = t[6], u = t[10], d = n + o + u;
    if (d > 0) {
      const p = 0.5 / Math.sqrt(d + 1);
      this._w = 0.25 / p, this._x = (h - l) * p, this._y = (r - c) * p, this._z = (a - i) * p;
    } else if (n > o && n > u) {
      const p = 2 * Math.sqrt(1 + n - o - u);
      this._w = (h - l) / p, this._x = 0.25 * p, this._y = (i + a) / p, this._z = (r + c) / p;
    } else if (o > u) {
      const p = 2 * Math.sqrt(1 + o - n - u);
      this._w = (r - c) / p, this._x = (i + a) / p, this._y = 0.25 * p, this._z = (l + h) / p;
    } else {
      const p = 2 * Math.sqrt(1 + u - n - o);
      this._w = (a - i) / p, this._x = (r + c) / p, this._y = (l + h) / p, this._z = 0.25 * p;
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
    const n = e._x, i = e._y, r = e._z, a = e._w, o = t._x, l = t._y, c = t._z, h = t._w;
    return this._x = n * h + a * o + i * c - r * l, this._y = i * h + a * l + r * o - n * c, this._z = r * h + a * c + n * l - i * o, this._w = a * h - n * o - i * l - r * c, this._onChangeCallback(), this;
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x, i = this._y, r = this._z, a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (o < 0 ? (this._w = -e._w, this._x = -e._x, this._y = -e._y, this._z = -e._z, o = -o) : this.copy(e), o >= 1) return this._w = a, this._x = n, this._y = i, this._z = r, this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const p = 1 - t;
      return this._w = p * a + t * this._w, this._x = p * n + t * this._x, this._y = p * i + t * this._y, this._z = p * r + t * this._z, this.normalize(), this;
    }
    const c = Math.sqrt(l), h = Math.atan2(c, o), u = Math.sin((1 - t) * h) / c, d = Math.sin(t * h) / c;
    return this._w = a * u + this._w * d, this._x = n * u + this._x * d, this._y = i * u + this._y * d, this._z = r * u + this._z * d, this._onChangeCallback(), this;
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(), t = 2 * Math.PI * Math.random(), n = Math.random(), i = Math.sqrt(1 - n), r = Math.sqrt(n);
    return this.set(i * Math.sin(e), i * Math.cos(e), r * Math.sin(t), r * Math.cos(t));
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
class R {
  constructor(e = 0, t = 0, n = 0) {
    R.prototype.isVector3 = true, this.x = e, this.y = t, this.z = n;
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
    return this.applyQuaternion(Lo.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Lo.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[3] * n + r[6] * i, this.y = r[1] * t + r[4] * n + r[7] * i, this.z = r[2] * t + r[5] * n + r[8] * i, this;
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements, a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a, this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a, this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a, this;
  }
  applyQuaternion(e) {
    const t = this.x, n = this.y, i = this.z, r = e.x, a = e.y, o = e.z, l = e.w, c = 2 * (a * i - o * n), h = 2 * (o * t - r * i), u = 2 * (r * n - a * t);
    return this.x = t + l * c + a * u - o * h, this.y = n + l * h + o * c - r * u, this.z = i + l * u + r * h - a * c, this;
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const t = this.x, n = this.y, i = this.z, r = e.elements;
    return this.x = r[0] * t + r[4] * n + r[8] * i, this.y = r[1] * t + r[5] * n + r[9] * i, this.z = r[2] * t + r[6] * n + r[10] * i, this.normalize();
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
    const n = e.x, i = e.y, r = e.z, a = t.x, o = t.y, l = t.z;
    return this.x = i * l - r * o, this.y = r * a - n * l, this.z = n * o - i * a, this;
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return pr.copy(this).projectOnVector(e), this.sub(pr);
  }
  reflect(e) {
    return this.sub(pr.copy(e).multiplyScalar(2 * this.dot(e)));
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
const pr = new R(), Lo = new Gt();
class bn {
  constructor(e = new R(1 / 0, 1 / 0, 1 / 0), t = new R(-1 / 0, -1 / 0, -1 / 0)) {
    this.isBox3 = true, this.min = e, this.max = t;
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3) this.expandByPoint(qt.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++) this.expandByPoint(qt.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = qt.copy(t).multiplyScalar(0.5);
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
      const r = n.getAttribute("position");
      if (t === true && r !== void 0 && e.isInstancedMesh !== true) for (let a = 0, o = r.count; a < o; a++) e.isMesh === true ? e.getVertexPosition(a, qt) : qt.fromBufferAttribute(r, a), qt.applyMatrix4(e.matrixWorld), this.expandByPoint(qt);
      else e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(), _s.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(), _s.copy(n.boundingBox)), _s.applyMatrix4(e.matrixWorld), this.union(_s);
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], t);
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
    return this.clampPoint(e.center, qt), qt.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let t, n;
    return e.normal.x > 0 ? (t = e.normal.x * this.min.x, n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x, n = e.normal.x * this.min.x), e.normal.y > 0 ? (t += e.normal.y * this.min.y, n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y, n += e.normal.y * this.min.y), e.normal.z > 0 ? (t += e.normal.z * this.min.z, n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z, n += e.normal.z * this.min.z), t <= -e.constant && n >= -e.constant;
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return false;
    this.getCenter(Yi), xs.subVectors(this.max, Yi), ci.subVectors(e.a, Yi), hi.subVectors(e.b, Yi), ui.subVectors(e.c, Yi), An.subVectors(hi, ci), wn.subVectors(ui, hi), Hn.subVectors(ci, ui);
    let t = [0, -An.z, An.y, 0, -wn.z, wn.y, 0, -Hn.z, Hn.y, An.z, 0, -An.x, wn.z, 0, -wn.x, Hn.z, 0, -Hn.x, -An.y, An.x, 0, -wn.y, wn.x, 0, -Hn.y, Hn.x, 0];
    return !mr(t, ci, hi, ui, xs) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1], !mr(t, ci, hi, ui, xs)) ? false : (vs.crossVectors(An, wn), t = [vs.x, vs.y, vs.z], mr(t, ci, hi, ui, xs));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, qt).distanceTo(e);
  }
  getBoundingSphere(e) {
    return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center), e.radius = this.getSize(qt).length() * 0.5), e;
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty() ? this : (un[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e), un[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e), un[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e), un[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e), un[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e), un[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e), un[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e), un[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e), this.setFromPoints(un), this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const un = [new R(), new R(), new R(), new R(), new R(), new R(), new R(), new R()], qt = new R(), _s = new bn(), ci = new R(), hi = new R(), ui = new R(), An = new R(), wn = new R(), Hn = new R(), Yi = new R(), xs = new R(), vs = new R(), Vn = new R();
function mr(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Vn.fromArray(s, r);
    const o = i.x * Math.abs(Vn.x) + i.y * Math.abs(Vn.y) + i.z * Math.abs(Vn.z), l = e.dot(Vn), c = t.dot(Vn), h = n.dot(Vn);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return false;
  }
  return true;
}
const tu = new bn(), qi = new R(), gr = new R();
class on {
  constructor(e = new R(), t = -1) {
    this.isSphere = true, this.center = e, this.radius = t;
  }
  set(e, t) {
    return this.center.copy(e), this.radius = t, this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : tu.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++) i = Math.max(i, n.distanceToSquared(e[r]));
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
    qi.subVectors(e, this.center);
    const t = qi.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t), i = (n - this.radius) * 0.5;
      this.center.addScaledVector(qi, i / n), this.radius += i;
    }
    return this;
  }
  union(e) {
    return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e), this) : (this.center.equals(e.center) === true ? this.radius = Math.max(this.radius, e.radius) : (gr.subVectors(e.center, this.center).setLength(e.radius), this.expandByPoint(qi.copy(e.center).add(gr)), this.expandByPoint(qi.copy(e.center).sub(gr))), this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const dn = new R(), _r = new R(), Ms = new R(), Rn = new R(), xr = new R(), ys = new R(), vr = new R();
class Hi {
  constructor(e = new R(), t = new R(0, 0, -1)) {
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
    return this.origin.copy(this.at(e, dn)), this;
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
    const t = dn.subVectors(e, this.origin).dot(this.direction);
    return t < 0 ? this.origin.distanceToSquared(e) : (dn.copy(this.origin).addScaledVector(this.direction, t), dn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    _r.copy(e).add(t).multiplyScalar(0.5), Ms.copy(t).sub(e).normalize(), Rn.copy(this.origin).sub(_r);
    const r = e.distanceTo(t) * 0.5, a = -this.direction.dot(Ms), o = Rn.dot(this.direction), l = -Rn.dot(Ms), c = Rn.lengthSq(), h = Math.abs(1 - a * a);
    let u, d, p, g;
    if (h > 0) if (u = a * l - o, d = a * o - l, g = r * h, u >= 0) if (d >= -g) if (d <= g) {
      const _ = 1 / h;
      u *= _, d *= _, p = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c;
    } else d = r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    else d = -r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    else d <= -g ? (u = Math.max(0, -(-a * r + o)), d = u > 0 ? -r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c) : d <= g ? (u = 0, d = Math.min(Math.max(-r, -l), r), p = d * (d + 2 * l) + c) : (u = Math.max(0, -(a * r + o)), d = u > 0 ? r : Math.min(Math.max(-r, -l), r), p = -u * u + d * (d + 2 * l) + c);
    else d = a > 0 ? -r : r, u = Math.max(0, -(a * d + o)), p = -u * u + d * (d + 2 * l) + c;
    return n && n.copy(this.origin).addScaledVector(this.direction, u), i && i.copy(_r).addScaledVector(Ms, d), p;
  }
  intersectSphere(e, t) {
    dn.subVectors(e.center, this.origin);
    const n = dn.dot(this.direction), i = dn.dot(dn) - n * n, r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i), o = n - a, l = n + a;
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
    let n, i, r, a, o, l;
    const c = 1 / this.direction.x, h = 1 / this.direction.y, u = 1 / this.direction.z, d = this.origin;
    return c >= 0 ? (n = (e.min.x - d.x) * c, i = (e.max.x - d.x) * c) : (n = (e.max.x - d.x) * c, i = (e.min.x - d.x) * c), h >= 0 ? (r = (e.min.y - d.y) * h, a = (e.max.y - d.y) * h) : (r = (e.max.y - d.y) * h, a = (e.min.y - d.y) * h), n > a || r > i || ((r > n || isNaN(n)) && (n = r), (a < i || isNaN(i)) && (i = a), u >= 0 ? (o = (e.min.z - d.z) * u, l = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u, l = (e.min.z - d.z) * u), n > l || o > i) || ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0) ? null : this.at(n >= 0 ? n : i, t);
  }
  intersectsBox(e) {
    return this.intersectBox(e, dn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    xr.subVectors(t, e), ys.subVectors(n, e), vr.crossVectors(xr, ys);
    let a = this.direction.dot(vr), o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) o = -1, a = -a;
    else return null;
    Rn.subVectors(this.origin, e);
    const l = o * this.direction.dot(ys.crossVectors(Rn, ys));
    if (l < 0) return null;
    const c = o * this.direction.dot(xr.cross(Rn));
    if (c < 0 || l + c > a) return null;
    const h = -o * Rn.dot(vr);
    return h < 0 ? null : this.at(h / a, r);
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
class Re {
  constructor(e, t, n, i, r, a, o, l, c, h, u, d, p, g, _, m) {
    Re.prototype.isMatrix4 = true, this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], e !== void 0 && this.set(e, t, n, i, r, a, o, l, c, h, u, d, p, g, _, m);
  }
  set(e, t, n, i, r, a, o, l, c, h, u, d, p, g, _, m) {
    const f = this.elements;
    return f[0] = e, f[4] = t, f[8] = n, f[12] = i, f[1] = r, f[5] = a, f[9] = o, f[13] = l, f[2] = c, f[6] = h, f[10] = u, f[14] = d, f[3] = p, f[7] = g, f[11] = _, f[15] = m, this;
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new Re().fromArray(this.elements);
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
    const t = this.elements, n = e.elements, i = 1 / di.setFromMatrixColumn(e, 0).length(), r = 1 / di.setFromMatrixColumn(e, 1).length(), a = 1 / di.setFromMatrixColumn(e, 2).length();
    return t[0] = n[0] * i, t[1] = n[1] * i, t[2] = n[2] * i, t[3] = 0, t[4] = n[4] * r, t[5] = n[5] * r, t[6] = n[6] * r, t[7] = 0, t[8] = n[8] * a, t[9] = n[9] * a, t[10] = n[10] * a, t[11] = 0, t[12] = 0, t[13] = 0, t[14] = 0, t[15] = 1, this;
  }
  makeRotationFromEuler(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z, a = Math.cos(n), o = Math.sin(n), l = Math.cos(i), c = Math.sin(i), h = Math.cos(r), u = Math.sin(r);
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
    return this.compose(nu, e, iu);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return Ut.subVectors(e, t), Ut.lengthSq() === 0 && (Ut.z = 1), Ut.normalize(), Cn.crossVectors(n, Ut), Cn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ut.x += 1e-4 : Ut.z += 1e-4, Ut.normalize(), Cn.crossVectors(n, Ut)), Cn.normalize(), Ss.crossVectors(Ut, Cn), i[0] = Cn.x, i[4] = Ss.x, i[8] = Ut.x, i[1] = Cn.y, i[5] = Ss.y, i[9] = Ut.y, i[2] = Cn.z, i[6] = Ss.z, i[10] = Ut.z, this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements, i = t.elements, r = this.elements, a = n[0], o = n[4], l = n[8], c = n[12], h = n[1], u = n[5], d = n[9], p = n[13], g = n[2], _ = n[6], m = n[10], f = n[14], b = n[3], T = n[7], y = n[11], L = n[15], w = i[0], A = i[4], N = i[8], S = i[12], M = i[1], P = i[5], G = i[9], k = i[13], W = i[2], K = i[6], H = i[10], Q = i[14], z = i[3], te = i[7], ce = i[11], _e = i[15];
    return r[0] = a * w + o * M + l * W + c * z, r[4] = a * A + o * P + l * K + c * te, r[8] = a * N + o * G + l * H + c * ce, r[12] = a * S + o * k + l * Q + c * _e, r[1] = h * w + u * M + d * W + p * z, r[5] = h * A + u * P + d * K + p * te, r[9] = h * N + u * G + d * H + p * ce, r[13] = h * S + u * k + d * Q + p * _e, r[2] = g * w + _ * M + m * W + f * z, r[6] = g * A + _ * P + m * K + f * te, r[10] = g * N + _ * G + m * H + f * ce, r[14] = g * S + _ * k + m * Q + f * _e, r[3] = b * w + T * M + y * W + L * z, r[7] = b * A + T * P + y * K + L * te, r[11] = b * N + T * G + y * H + L * ce, r[15] = b * S + T * k + y * Q + L * _e, this;
  }
  multiplyScalar(e) {
    const t = this.elements;
    return t[0] *= e, t[4] *= e, t[8] *= e, t[12] *= e, t[1] *= e, t[5] *= e, t[9] *= e, t[13] *= e, t[2] *= e, t[6] *= e, t[10] *= e, t[14] *= e, t[3] *= e, t[7] *= e, t[11] *= e, t[15] *= e, this;
  }
  determinant() {
    const e = this.elements, t = e[0], n = e[4], i = e[8], r = e[12], a = e[1], o = e[5], l = e[9], c = e[13], h = e[2], u = e[6], d = e[10], p = e[14], g = e[3], _ = e[7], m = e[11], f = e[15];
    return g * (+r * l * u - i * c * u - r * o * d + n * c * d + i * o * p - n * l * p) + _ * (+t * l * p - t * c * d + r * a * d - i * a * p + i * c * h - r * l * h) + m * (+t * c * u - t * o * p - r * a * u + n * a * p + r * o * h - n * c * h) + f * (-i * o * h - t * l * u + t * o * d + i * a * u - n * a * d + n * l * h);
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
    const e = this.elements, t = e[0], n = e[1], i = e[2], r = e[3], a = e[4], o = e[5], l = e[6], c = e[7], h = e[8], u = e[9], d = e[10], p = e[11], g = e[12], _ = e[13], m = e[14], f = e[15], b = u * m * c - _ * d * c + _ * l * p - o * m * p - u * l * f + o * d * f, T = g * d * c - h * m * c - g * l * p + a * m * p + h * l * f - a * d * f, y = h * _ * c - g * u * c + g * o * p - a * _ * p - h * o * f + a * u * f, L = g * u * l - h * _ * l - g * o * d + a * _ * d + h * o * m - a * u * m, w = t * b + n * T + i * y + r * L;
    if (w === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const A = 1 / w;
    return e[0] = b * A, e[1] = (_ * d * r - u * m * r - _ * i * p + n * m * p + u * i * f - n * d * f) * A, e[2] = (o * m * r - _ * l * r + _ * i * c - n * m * c - o * i * f + n * l * f) * A, e[3] = (u * l * r - o * d * r - u * i * c + n * d * c + o * i * p - n * l * p) * A, e[4] = T * A, e[5] = (h * m * r - g * d * r + g * i * p - t * m * p - h * i * f + t * d * f) * A, e[6] = (g * l * r - a * m * r - g * i * c + t * m * c + a * i * f - t * l * f) * A, e[7] = (a * d * r - h * l * r + h * i * c - t * d * c - a * i * p + t * l * p) * A, e[8] = y * A, e[9] = (g * u * r - h * _ * r - g * n * p + t * _ * p + h * n * f - t * u * f) * A, e[10] = (a * _ * r - g * o * r + g * n * c - t * _ * c - a * n * f + t * o * f) * A, e[11] = (h * o * r - a * u * r - h * n * c + t * u * c + a * n * p - t * o * p) * A, e[12] = L * A, e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * m + t * u * m) * A, e[14] = (g * o * i - a * _ * i - g * n * l + t * _ * l + a * n * m - t * o * m) * A, e[15] = (a * u * i - h * o * i + h * n * l - t * u * l - a * n * d + t * o * d) * A, this;
  }
  scale(e) {
    const t = this.elements, n = e.x, i = e.y, r = e.z;
    return t[0] *= n, t[4] *= i, t[8] *= r, t[1] *= n, t[5] *= i, t[9] *= r, t[2] *= n, t[6] *= i, t[10] *= r, t[3] *= n, t[7] *= i, t[11] *= r, this;
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
    const n = Math.cos(t), i = Math.sin(t), r = 1 - n, a = e.x, o = e.y, l = e.z, c = r * a, h = r * o;
    return this.set(c * a + n, c * o - i * l, c * l + i * o, 0, c * o + i * l, h * o + n, h * l - i * a, 0, c * l - i * o, h * l + i * a, r * l * l + n, 0, 0, 0, 0, 1), this;
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, a) {
    return this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements, r = t._x, a = t._y, o = t._z, l = t._w, c = r + r, h = a + a, u = o + o, d = r * c, p = r * h, g = r * u, _ = a * h, m = a * u, f = o * u, b = l * c, T = l * h, y = l * u, L = n.x, w = n.y, A = n.z;
    return i[0] = (1 - (_ + f)) * L, i[1] = (p + y) * L, i[2] = (g - T) * L, i[3] = 0, i[4] = (p - y) * w, i[5] = (1 - (d + f)) * w, i[6] = (m + b) * w, i[7] = 0, i[8] = (g + T) * A, i[9] = (m - b) * A, i[10] = (1 - (d + _)) * A, i[11] = 0, i[12] = e.x, i[13] = e.y, i[14] = e.z, i[15] = 1, this;
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = di.set(i[0], i[1], i[2]).length();
    const a = di.set(i[4], i[5], i[6]).length(), o = di.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r), e.x = i[12], e.y = i[13], e.z = i[14], jt.copy(this);
    const c = 1 / r, h = 1 / a, u = 1 / o;
    return jt.elements[0] *= c, jt.elements[1] *= c, jt.elements[2] *= c, jt.elements[4] *= h, jt.elements[5] *= h, jt.elements[6] *= h, jt.elements[8] *= u, jt.elements[9] *= u, jt.elements[10] *= u, t.setFromRotationMatrix(jt), n.x = r, n.y = a, n.z = o, this;
  }
  makePerspective(e, t, n, i, r, a, o = yn) {
    const l = this.elements, c = 2 * r / (t - e), h = 2 * r / (n - i), u = (t + e) / (t - e), d = (n + i) / (n - i);
    let p, g;
    if (o === yn) p = -(a + r) / (a - r), g = -2 * a * r / (a - r);
    else if (o === ir) p = -a / (a - r), g = -a * r / (a - r);
    else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
    return l[0] = c, l[4] = 0, l[8] = u, l[12] = 0, l[1] = 0, l[5] = h, l[9] = d, l[13] = 0, l[2] = 0, l[6] = 0, l[10] = p, l[14] = g, l[3] = 0, l[7] = 0, l[11] = -1, l[15] = 0, this;
  }
  makeOrthographic(e, t, n, i, r, a, o = yn) {
    const l = this.elements, c = 1 / (t - e), h = 1 / (n - i), u = 1 / (a - r), d = (t + e) * c, p = (n + i) * h;
    let g, _;
    if (o === yn) g = (a + r) * u, _ = -2 * u;
    else if (o === ir) g = r * u, _ = -1 * u;
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
const di = new R(), jt = new Re(), nu = new R(0, 0, 0), iu = new R(1, 1, 1), Cn = new R(), Ss = new R(), Ut = new R(), Do = new Re(), Io = new Gt();
class nn {
  constructor(e = 0, t = 0, n = 0, i = nn.DEFAULT_ORDER) {
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
    const i = e.elements, r = i[0], a = i[4], o = i[8], l = i[1], c = i[5], h = i[9], u = i[2], d = i[6], p = i[10];
    switch (t) {
      case "XYZ":
        this._y = Math.asin(Fe(o, -1, 1)), Math.abs(o) < 0.9999999 ? (this._x = Math.atan2(-h, p), this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(d, c), this._z = 0);
        break;
      case "YXZ":
        this._x = Math.asin(-Fe(h, -1, 1)), Math.abs(h) < 0.9999999 ? (this._y = Math.atan2(o, p), this._z = Math.atan2(l, c)) : (this._y = Math.atan2(-u, r), this._z = 0);
        break;
      case "ZXY":
        this._x = Math.asin(Fe(d, -1, 1)), Math.abs(d) < 0.9999999 ? (this._y = Math.atan2(-u, p), this._z = Math.atan2(-a, c)) : (this._y = 0, this._z = Math.atan2(l, r));
        break;
      case "ZYX":
        this._y = Math.asin(-Fe(u, -1, 1)), Math.abs(u) < 0.9999999 ? (this._x = Math.atan2(d, p), this._z = Math.atan2(l, r)) : (this._x = 0, this._z = Math.atan2(-a, c));
        break;
      case "YZX":
        this._z = Math.asin(Fe(l, -1, 1)), Math.abs(l) < 0.9999999 ? (this._x = Math.atan2(-h, c), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(o, p));
        break;
      case "XZY":
        this._z = Math.asin(-Fe(a, -1, 1)), Math.abs(a) < 0.9999999 ? (this._x = Math.atan2(d, c), this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-h, p), this._y = 0);
        break;
      default:
        console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t);
    }
    return this._order = t, n === true && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return Do.makeRotationFromQuaternion(e), this.setFromRotationMatrix(Do, t, n);
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Io.setFromEuler(this), this.setFromQuaternion(Io, e);
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
nn.DEFAULT_ORDER = "XYZ";
class Za {
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
let su = 0;
const Uo = new R(), fi = new Gt(), fn = new Re(), Es = new R(), ji = new R(), ru = new R(), au = new Gt(), No = new R(1, 0, 0), Fo = new R(0, 1, 0), Oo = new R(0, 0, 1), Bo = { type: "added" }, ou = { type: "removed" }, pi = { type: "childadded", child: null }, Mr = { type: "childremoved", child: null };
class nt extends si {
  constructor() {
    super(), this.isObject3D = true, Object.defineProperty(this, "id", { value: su++ }), this.uuid = Qt(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = nt.DEFAULT_UP.clone();
    const e = new R(), t = new nn(), n = new Gt(), i = new R(1, 1, 1);
    function r() {
      n.setFromEuler(t, false);
    }
    function a() {
      t.setFromQuaternion(n, void 0, false);
    }
    t._onChange(r), n._onChange(a), Object.defineProperties(this, { position: { configurable: true, enumerable: true, value: e }, rotation: { configurable: true, enumerable: true, value: t }, quaternion: { configurable: true, enumerable: true, value: n }, scale: { configurable: true, enumerable: true, value: i }, modelViewMatrix: { value: new Re() }, normalMatrix: { value: new De() } }), this.matrix = new Re(), this.matrixWorld = new Re(), this.matrixAutoUpdate = nt.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = false, this.layers = new Za(), this.visible = true, this.castShadow = false, this.receiveShadow = false, this.frustumCulled = true, this.renderOrder = 0, this.animations = [], this.userData = {};
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
    return fi.setFromAxisAngle(e, t), this.quaternion.multiply(fi), this;
  }
  rotateOnWorldAxis(e, t) {
    return fi.setFromAxisAngle(e, t), this.quaternion.premultiply(fi), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(No, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Fo, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(Oo, e);
  }
  translateOnAxis(e, t) {
    return Uo.copy(e).applyQuaternion(this.quaternion), this.position.add(Uo.multiplyScalar(t)), this;
  }
  translateX(e) {
    return this.translateOnAxis(No, e);
  }
  translateY(e) {
    return this.translateOnAxis(Fo, e);
  }
  translateZ(e) {
    return this.translateOnAxis(Oo, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(true, false), e.applyMatrix4(fn.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Es.copy(e) : Es.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(true, false), ji.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? fn.lookAt(ji, Es, this.up) : fn.lookAt(Es, ji, this.up), this.quaternion.setFromRotationMatrix(fn), i && (fn.extractRotation(i.matrixWorld), fi.setFromRotationMatrix(fn), this.quaternion.premultiply(fi.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this) : (e && e.isObject3D ? (e.removeFromParent(), e.parent = this, this.children.push(e), e.dispatchEvent(Bo), pi.child = e, this.dispatchEvent(pi), pi.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e), this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return t !== -1 && (e.parent = null, this.children.splice(t, 1), e.dispatchEvent(ou), Mr.child = e, this.dispatchEvent(Mr), Mr.child = null), this;
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return this.updateWorldMatrix(true, false), fn.copy(this.matrixWorld).invert(), e.parent !== null && (e.parent.updateWorldMatrix(true, false), fn.multiply(e.parent.matrixWorld)), e.applyMatrix4(fn), e.removeFromParent(), e.parent = this, this.children.push(e), e.updateWorldMatrix(false, true), e.dispatchEvent(Bo), pi.child = e, this.dispatchEvent(pi), pi.child = null, this;
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
    for (let r = 0, a = i.length; r < a; r++) i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(true, false), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ji, e, ru), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(true, false), this.matrixWorld.decompose(ji, au, e), e;
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
      for (let r = 0, a = i.length; r < a; r++) i[r].updateWorldMatrix(false, true);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string", n = {};
    t && (e = { geometries: {}, materials: {}, textures: {}, images: {}, shapes: {}, skeletons: {}, animations: {}, nodes: {} }, n.metadata = { version: 4.6, type: "Object", generator: "Object3D.toJSON" });
    const i = {};
    i.uuid = this.uuid, i.type = this.type, this.name !== "" && (i.name = this.name), this.castShadow === true && (i.castShadow = true), this.receiveShadow === true && (i.receiveShadow = true), this.visible === false && (i.visible = false), this.frustumCulled === false && (i.frustumCulled = false), this.renderOrder !== 0 && (i.renderOrder = this.renderOrder), Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), this.matrixAutoUpdate === false && (i.matrixAutoUpdate = false), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.visibility = this._visibility, i.active = this._active, i.bounds = this._bounds.map((o) => ({ boxInitialized: o.boxInitialized, boxMin: o.box.min.toArray(), boxMax: o.box.max.toArray(), sphereInitialized: o.sphereInitialized, sphereRadius: o.sphere.radius, sphereCenter: o.sphere.center.toArray() })), i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.geometryCount = this._geometryCount, i.matricesTexture = this._matricesTexture.toJSON(e), this._colorsTexture !== null && (i.colorsTexture = this._colorsTexture.toJSON(e)), this.boundingSphere !== null && (i.boundingSphere = { center: i.boundingSphere.center.toArray(), radius: i.boundingSphere.radius }), this.boundingBox !== null && (i.boundingBox = { min: i.boundingBox.min.toArray(), max: i.boundingBox.max.toArray() }));
    function r(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)), this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== true && (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l)) for (let c = 0, h = l.length; c < h; c++) {
          const u = l[c];
          r(e.shapes, u);
        }
        else r(e.shapes, l);
      }
    }
    if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), this.skeleton !== void 0 && (r(e.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), this.material !== void 0) if (Array.isArray(this.material)) {
      const o = [];
      for (let l = 0, c = this.material.length; l < c; l++) o.push(r(e.materials, this.material[l]));
      i.material = o;
    } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++) i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(r(e.animations, l));
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
nt.DEFAULT_UP = new R(0, 1, 0);
nt.DEFAULT_MATRIX_AUTO_UPDATE = true;
nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = true;
const Kt = new R(), pn = new R(), yr = new R(), mn = new R(), mi = new R(), gi = new R(), ko = new R(), Sr = new R(), Er = new R(), Tr = new R(), br = new Ye(), Ar = new Ye(), wr = new Ye();
class $t {
  constructor(e = new R(), t = new R(), n = new R()) {
    this.a = e, this.b = t, this.c = n;
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), Kt.subVectors(e, t), i.cross(Kt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    Kt.subVectors(i, t), pn.subVectors(n, t), yr.subVectors(e, t);
    const a = Kt.dot(Kt), o = Kt.dot(pn), l = Kt.dot(yr), c = pn.dot(pn), h = pn.dot(yr), u = a * c - o * o;
    if (u === 0) return r.set(0, 0, 0), null;
    const d = 1 / u, p = (c * l - o * h) * d, g = (a * h - o * l) * d;
    return r.set(1 - p - g, g, p);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, mn) === null ? false : mn.x >= 0 && mn.y >= 0 && mn.x + mn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, l) {
    return this.getBarycoord(e, t, n, i, mn) === null ? (l.x = 0, l.y = 0, "z" in l && (l.z = 0), "w" in l && (l.w = 0), null) : (l.setScalar(0), l.addScaledVector(r, mn.x), l.addScaledVector(a, mn.y), l.addScaledVector(o, mn.z), l);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return br.setScalar(0), Ar.setScalar(0), wr.setScalar(0), br.fromBufferAttribute(e, t), Ar.fromBufferAttribute(e, n), wr.fromBufferAttribute(e, i), a.setScalar(0), a.addScaledVector(br, r.x), a.addScaledVector(Ar, r.y), a.addScaledVector(wr, r.z), a;
  }
  static isFrontFacing(e, t, n, i) {
    return Kt.subVectors(n, t), pn.subVectors(e, t), Kt.cross(pn).dot(i) < 0;
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
    return Kt.subVectors(this.c, this.b), pn.subVectors(this.a, this.b), Kt.cross(pn).length() * 0.5;
  }
  getMidpoint(e) {
    return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return $t.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return $t.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return $t.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return $t.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return $t.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a, i = this.b, r = this.c;
    let a, o;
    mi.subVectors(i, n), gi.subVectors(r, n), Sr.subVectors(e, n);
    const l = mi.dot(Sr), c = gi.dot(Sr);
    if (l <= 0 && c <= 0) return t.copy(n);
    Er.subVectors(e, i);
    const h = mi.dot(Er), u = gi.dot(Er);
    if (h >= 0 && u <= h) return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0) return a = l / (l - h), t.copy(n).addScaledVector(mi, a);
    Tr.subVectors(e, r);
    const p = mi.dot(Tr), g = gi.dot(Tr);
    if (g >= 0 && p <= g) return t.copy(r);
    const _ = p * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0) return o = c / (c - g), t.copy(n).addScaledVector(gi, o);
    const m = h * g - p * u;
    if (m <= 0 && u - h >= 0 && p - g >= 0) return ko.subVectors(r, i), o = (u - h) / (u - h + (p - g)), t.copy(i).addScaledVector(ko, o);
    const f = 1 / (m + _ + d);
    return a = _ * f, o = d * f, t.copy(n).addScaledVector(mi, a).addScaledVector(gi, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const fc = { aliceblue: 15792383, antiquewhite: 16444375, aqua: 65535, aquamarine: 8388564, azure: 15794175, beige: 16119260, bisque: 16770244, black: 0, blanchedalmond: 16772045, blue: 255, blueviolet: 9055202, brown: 10824234, burlywood: 14596231, cadetblue: 6266528, chartreuse: 8388352, chocolate: 13789470, coral: 16744272, cornflowerblue: 6591981, cornsilk: 16775388, crimson: 14423100, cyan: 65535, darkblue: 139, darkcyan: 35723, darkgoldenrod: 12092939, darkgray: 11119017, darkgreen: 25600, darkgrey: 11119017, darkkhaki: 12433259, darkmagenta: 9109643, darkolivegreen: 5597999, darkorange: 16747520, darkorchid: 10040012, darkred: 9109504, darksalmon: 15308410, darkseagreen: 9419919, darkslateblue: 4734347, darkslategray: 3100495, darkslategrey: 3100495, darkturquoise: 52945, darkviolet: 9699539, deeppink: 16716947, deepskyblue: 49151, dimgray: 6908265, dimgrey: 6908265, dodgerblue: 2003199, firebrick: 11674146, floralwhite: 16775920, forestgreen: 2263842, fuchsia: 16711935, gainsboro: 14474460, ghostwhite: 16316671, gold: 16766720, goldenrod: 14329120, gray: 8421504, green: 32768, greenyellow: 11403055, grey: 8421504, honeydew: 15794160, hotpink: 16738740, indianred: 13458524, indigo: 4915330, ivory: 16777200, khaki: 15787660, lavender: 15132410, lavenderblush: 16773365, lawngreen: 8190976, lemonchiffon: 16775885, lightblue: 11393254, lightcoral: 15761536, lightcyan: 14745599, lightgoldenrodyellow: 16448210, lightgray: 13882323, lightgreen: 9498256, lightgrey: 13882323, lightpink: 16758465, lightsalmon: 16752762, lightseagreen: 2142890, lightskyblue: 8900346, lightslategray: 7833753, lightslategrey: 7833753, lightsteelblue: 11584734, lightyellow: 16777184, lime: 65280, limegreen: 3329330, linen: 16445670, magenta: 16711935, maroon: 8388608, mediumaquamarine: 6737322, mediumblue: 205, mediumorchid: 12211667, mediumpurple: 9662683, mediumseagreen: 3978097, mediumslateblue: 8087790, mediumspringgreen: 64154, mediumturquoise: 4772300, mediumvioletred: 13047173, midnightblue: 1644912, mintcream: 16121850, mistyrose: 16770273, moccasin: 16770229, navajowhite: 16768685, navy: 128, oldlace: 16643558, olive: 8421376, olivedrab: 7048739, orange: 16753920, orangered: 16729344, orchid: 14315734, palegoldenrod: 15657130, palegreen: 10025880, paleturquoise: 11529966, palevioletred: 14381203, papayawhip: 16773077, peachpuff: 16767673, peru: 13468991, pink: 16761035, plum: 14524637, powderblue: 11591910, purple: 8388736, rebeccapurple: 6697881, red: 16711680, rosybrown: 12357519, royalblue: 4286945, saddlebrown: 9127187, salmon: 16416882, sandybrown: 16032864, seagreen: 3050327, seashell: 16774638, sienna: 10506797, silver: 12632256, skyblue: 8900331, slateblue: 6970061, slategray: 7372944, slategrey: 7372944, snow: 16775930, springgreen: 65407, steelblue: 4620980, tan: 13808780, teal: 32896, thistle: 14204888, tomato: 16737095, turquoise: 4251856, violet: 15631086, wheat: 16113331, white: 16777215, whitesmoke: 16119285, yellow: 16776960, yellowgreen: 10145074 }, Pn = { h: 0, s: 0, l: 0 }, Ts = { h: 0, s: 0, l: 0 };
function Rr(s, e, t) {
  return t < 0 && (t += 1), t > 1 && (t -= 1), t < 1 / 6 ? s + (e - s) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? s + (e - s) * 6 * (2 / 3 - t) : s;
}
class ye {
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
  setHex(e, t = xt) {
    return e = Math.floor(e), this.r = (e >> 16 & 255) / 255, this.g = (e >> 8 & 255) / 255, this.b = (e & 255) / 255, Ve.toWorkingColorSpace(this, t), this;
  }
  setRGB(e, t, n, i = Ve.workingColorSpace) {
    return this.r = e, this.g = t, this.b = n, Ve.toWorkingColorSpace(this, i), this;
  }
  setHSL(e, t, n, i = Ve.workingColorSpace) {
    if (e = Ka(e, 1), t = Fe(t, 0, 1), n = Fe(n, 0, 1), t === 0) this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t, a = 2 * n - r;
      this.r = Rr(a, r, e + 1 / 3), this.g = Rr(a, r, e), this.b = Rr(a, r, e - 1 / 3);
    }
    return Ve.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = xt) {
    function n(r) {
      r !== void 0 && parseFloat(r) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.");
    }
    let i;
    if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
      let r;
      const a = i[1], o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (r = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(255, parseInt(r[1], 10)) / 255, Math.min(255, parseInt(r[2], 10)) / 255, Math.min(255, parseInt(r[3], 10)) / 255, t);
          if (r = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setRGB(Math.min(100, parseInt(r[1], 10)) / 100, Math.min(100, parseInt(r[2], 10)) / 100, Math.min(100, parseInt(r[3], 10)) / 100, t);
          break;
        case "hsl":
        case "hsla":
          if (r = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)) return n(r[4]), this.setHSL(parseFloat(r[1]) / 360, parseFloat(r[2]) / 100, parseFloat(r[3]) / 100, t);
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
      const r = i[1], a = r.length;
      if (a === 3) return this.setRGB(parseInt(r.charAt(0), 16) / 15, parseInt(r.charAt(1), 16) / 15, parseInt(r.charAt(2), 16) / 15, t);
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = xt) {
    const n = fc[e.toLowerCase()];
    return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return this.r = e.r, this.g = e.g, this.b = e.b, this;
  }
  copySRGBToLinear(e) {
    return this.r = Sn(e.r), this.g = Sn(e.g), this.b = Sn(e.b), this;
  }
  copyLinearToSRGB(e) {
    return this.r = Ri(e.r), this.g = Ri(e.g), this.b = Ri(e.b), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = xt) {
    return Ve.fromWorkingColorSpace(yt.copy(this), e), Math.round(Fe(yt.r * 255, 0, 255)) * 65536 + Math.round(Fe(yt.g * 255, 0, 255)) * 256 + Math.round(Fe(yt.b * 255, 0, 255));
  }
  getHexString(e = xt) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = Ve.workingColorSpace) {
    Ve.fromWorkingColorSpace(yt.copy(this), t);
    const n = yt.r, i = yt.g, r = yt.b, a = Math.max(n, i, r), o = Math.min(n, i, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) l = 0, c = 0;
    else {
      const u = a - o;
      switch (c = h <= 0.5 ? u / (a + o) : u / (2 - a - o), a) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return e.h = l, e.s = c, e.l = h, e;
  }
  getRGB(e, t = Ve.workingColorSpace) {
    return Ve.fromWorkingColorSpace(yt.copy(this), t), e.r = yt.r, e.g = yt.g, e.b = yt.b, e;
  }
  getStyle(e = xt) {
    Ve.fromWorkingColorSpace(yt.copy(this), e);
    const t = yt.r, n = yt.g, i = yt.b;
    return e !== xt ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return this.getHSL(Pn), this.setHSL(Pn.h + e, Pn.s + t, Pn.l + n);
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
    this.getHSL(Pn), e.getHSL(Ts);
    const n = ss(Pn.h, Ts.h, t), i = ss(Pn.s, Ts.s, t), r = ss(Pn.l, Ts.l, t);
    return this.setHSL(n, i, r), this;
  }
  setFromVector3(e) {
    return this.r = e.x, this.g = e.y, this.b = e.z, this;
  }
  applyMatrix3(e) {
    const t = this.r, n = this.g, i = this.b, r = e.elements;
    return this.r = r[0] * t + r[3] * n + r[6] * i, this.g = r[1] * t + r[4] * n + r[7] * i, this.b = r[2] * t + r[5] * n + r[8] * i, this;
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
const yt = new ye();
ye.NAMES = fc;
let lu = 0;
class en extends si {
  constructor() {
    super(), this.isMaterial = true, Object.defineProperty(this, "id", { value: lu++ }), this.uuid = Qt(), this.name = "", this.type = "Material", this.blending = Ai, this.side = an, this.vertexColors = false, this.opacity = 1, this.transparent = false, this.alphaHash = false, this.blendSrc = jr, this.blendDst = Kr, this.blendEquation = Qn, this.blendSrcAlpha = null, this.blendDstAlpha = null, this.blendEquationAlpha = null, this.blendColor = new ye(0, 0, 0), this.blendAlpha = 0, this.depthFunc = Pi, this.depthTest = true, this.depthWrite = true, this.stencilWriteMask = 255, this.stencilFunc = bo, this.stencilRef = 0, this.stencilFuncMask = 255, this.stencilFail = oi, this.stencilZFail = oi, this.stencilZPass = oi, this.stencilWrite = false, this.clippingPlanes = null, this.clipIntersection = false, this.clipShadows = false, this.shadowSide = null, this.colorWrite = true, this.precision = null, this.polygonOffset = false, this.polygonOffsetFactor = 0, this.polygonOffsetUnits = 0, this.dithering = false, this.alphaToCoverage = false, this.premultipliedAlpha = false, this.forceSinglePass = false, this.visible = true, this.toneMapped = true, this.userData = {}, this.version = 0, this._alphaTest = 0;
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
    n.uuid = this.uuid, n.type = this.type, this.name !== "" && (n.name = this.name), this.color && this.color.isColor && (n.color = this.color.getHex()), this.roughness !== void 0 && (n.roughness = this.roughness), this.metalness !== void 0 && (n.metalness = this.metalness), this.sheen !== void 0 && (n.sheen = this.sheen), this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()), this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness), this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()), this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity), this.specular && this.specular.isColor && (n.specular = this.specular.getHex()), this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity), this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()), this.shininess !== void 0 && (n.shininess = this.shininess), this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat), this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness), this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid), this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid), this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid, n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()), this.dispersion !== void 0 && (n.dispersion = this.dispersion), this.iridescence !== void 0 && (n.iridescence = this.iridescence), this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR), this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange), this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid), this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid), this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy), this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation), this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid), this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid), this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid), this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid), this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid, n.lightMapIntensity = this.lightMapIntensity), this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid, n.aoMapIntensity = this.aoMapIntensity), this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid, n.bumpScale = this.bumpScale), this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid, n.normalMapType = this.normalMapType, n.normalScale = this.normalScale.toArray()), this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid, n.displacementScale = this.displacementScale, n.displacementBias = this.displacementBias), this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid), this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid), this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid), this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid), this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid), this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid), this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid, this.combine !== void 0 && (n.combine = this.combine)), this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()), this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity), this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity), this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio), this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid), this.transmission !== void 0 && (n.transmission = this.transmission), this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid), this.thickness !== void 0 && (n.thickness = this.thickness), this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid), this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance), this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()), this.size !== void 0 && (n.size = this.size), this.shadowSide !== null && (n.shadowSide = this.shadowSide), this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation), this.blending !== Ai && (n.blending = this.blending), this.side !== an && (n.side = this.side), this.vertexColors === true && (n.vertexColors = true), this.opacity < 1 && (n.opacity = this.opacity), this.transparent === true && (n.transparent = true), this.blendSrc !== jr && (n.blendSrc = this.blendSrc), this.blendDst !== Kr && (n.blendDst = this.blendDst), this.blendEquation !== Qn && (n.blendEquation = this.blendEquation), this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha), this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha), this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha), this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()), this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha), this.depthFunc !== Pi && (n.depthFunc = this.depthFunc), this.depthTest === false && (n.depthTest = this.depthTest), this.depthWrite === false && (n.depthWrite = this.depthWrite), this.colorWrite === false && (n.colorWrite = this.colorWrite), this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask), this.stencilFunc !== bo && (n.stencilFunc = this.stencilFunc), this.stencilRef !== 0 && (n.stencilRef = this.stencilRef), this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask), this.stencilFail !== oi && (n.stencilFail = this.stencilFail), this.stencilZFail !== oi && (n.stencilZFail = this.stencilZFail), this.stencilZPass !== oi && (n.stencilZPass = this.stencilZPass), this.stencilWrite === true && (n.stencilWrite = this.stencilWrite), this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation), this.polygonOffset === true && (n.polygonOffset = true), this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor), this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits), this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth), this.dashSize !== void 0 && (n.dashSize = this.dashSize), this.gapSize !== void 0 && (n.gapSize = this.gapSize), this.scale !== void 0 && (n.scale = this.scale), this.dithering === true && (n.dithering = true), this.alphaTest > 0 && (n.alphaTest = this.alphaTest), this.alphaHash === true && (n.alphaHash = true), this.alphaToCoverage === true && (n.alphaToCoverage = true), this.premultipliedAlpha === true && (n.premultipliedAlpha = true), this.forceSinglePass === true && (n.forceSinglePass = true), this.wireframe === true && (n.wireframe = true), this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth), this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap), this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin), this.flatShading === true && (n.flatShading = true), this.visible === false && (n.visible = false), this.toneMapped === false && (n.toneMapped = false), this.fog === false && (n.fog = false), Object.keys(this.userData).length > 0 && (n.userData = this.userData);
    function i(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (t) {
      const r = i(e.textures), a = i(e.images);
      r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a);
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
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
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
class ti extends en {
  constructor(e) {
    super(), this.isMeshBasicMaterial = true, this.type = "MeshBasicMaterial", this.color = new ye(16777215), this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new nn(), this.combine = za, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.fog = e.fog, this;
  }
}
const ut = new R(), bs = new be();
class wt {
  constructor(e, t, n = false) {
    if (Array.isArray(e)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    this.isBufferAttribute = true, this.name = "", this.array = e, this.itemSize = t, this.count = e !== void 0 ? e.length / t : 0, this.normalized = n, this.usage = Da, this.updateRanges = [], this.gpuType = Jt, this.version = 0;
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
    for (let i = 0, r = this.itemSize; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2) for (let t = 0, n = this.count; t < n; t++) bs.fromBufferAttribute(this, t), bs.applyMatrix3(e), this.setXY(t, bs.x, bs.y);
    else if (this.itemSize === 3) for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix3(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyMatrix4(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.applyNormalMatrix(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) ut.fromBufferAttribute(this, t), ut.transformDirection(e), this.setXYZ(t, ut.x, ut.y, ut.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return this.normalized && (n = Zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Je(n, this.array)), this.array[e * this.itemSize + t] = n, this;
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setX(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize] = t, this;
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setY(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 1] = t, this;
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setZ(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 2] = t, this;
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setW(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.array[e * this.itemSize + 3] = t, this;
  }
  setXY(e, t, n) {
    return e *= this.itemSize, this.normalized && (t = Je(t, this.array), n = Je(n, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e *= this.itemSize, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), i = Je(i, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e *= this.itemSize, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), i = Je(i, this.array), r = Je(r, this.array)), this.array[e + 0] = t, this.array[e + 1] = n, this.array[e + 2] = i, this.array[e + 3] = r, this;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = { itemSize: this.itemSize, type: this.array.constructor.name, array: Array.from(this.array), normalized: this.normalized };
    return this.name !== "" && (e.name = this.name), this.usage !== Da && (e.usage = this.usage), e;
  }
}
class pc extends wt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class mc extends wt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class tn extends wt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let cu = 0;
const zt = new Re(), Cr = new nt(), _i = new R(), Nt = new bn(), Ki = new bn(), mt = new R();
class Wt extends si {
  constructor() {
    super(), this.isBufferGeometry = true, Object.defineProperty(this, "id", { value: cu++ }), this.uuid = Qt(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = false, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = { start: 0, count: 1 / 0 }, this.userData = {};
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? this.index = new (hc(e) ? mc : pc)(e, 1) : this.index = e, this;
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
      const r = new De().getNormalMatrix(e);
      n.applyNormalMatrix(r), n.needsUpdate = true;
    }
    const i = this.attributes.tangent;
    return i !== void 0 && (i.transformDirection(e), i.needsUpdate = true), this.boundingBox !== null && this.computeBoundingBox(), this.boundingSphere !== null && this.computeBoundingSphere(), this;
  }
  applyQuaternion(e) {
    return zt.makeRotationFromQuaternion(e), this.applyMatrix4(zt), this;
  }
  rotateX(e) {
    return zt.makeRotationX(e), this.applyMatrix4(zt), this;
  }
  rotateY(e) {
    return zt.makeRotationY(e), this.applyMatrix4(zt), this;
  }
  rotateZ(e) {
    return zt.makeRotationZ(e), this.applyMatrix4(zt), this;
  }
  translate(e, t, n) {
    return zt.makeTranslation(e, t, n), this.applyMatrix4(zt), this;
  }
  scale(e, t, n) {
    return zt.makeScale(e, t, n), this.applyMatrix4(zt), this;
  }
  lookAt(e) {
    return Cr.lookAt(e), Cr.updateMatrix(), this.applyMatrix4(Cr.matrix), this;
  }
  center() {
    return this.computeBoundingBox(), this.boundingBox.getCenter(_i).negate(), this.translate(_i.x, _i.y, _i.z), this;
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, r = e.length; i < r; i++) {
        const a = e[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new tn(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        const r = e[i];
        t.setXYZ(i, r.x, r.y, r.z || 0);
      }
      e.length > t.count && console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), t.needsUpdate = true;
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new bn());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), this.boundingBox.set(new R(-1 / 0, -1 / 0, -1 / 0), new R(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if (this.boundingBox.setFromBufferAttribute(e), t) for (let n = 0, i = t.length; n < i; n++) {
        const r = t[n];
        Nt.setFromBufferAttribute(r), this.morphTargetsRelative ? (mt.addVectors(this.boundingBox.min, Nt.min), this.boundingBox.expandByPoint(mt), mt.addVectors(this.boundingBox.max, Nt.max), this.boundingBox.expandByPoint(mt)) : (this.boundingBox.expandByPoint(Nt.min), this.boundingBox.expandByPoint(Nt.max));
      }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this);
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new on());
    const e = this.attributes.position, t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), this.boundingSphere.set(new R(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if (Nt.setFromBufferAttribute(e), t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r];
        Ki.setFromBufferAttribute(o), this.morphTargetsRelative ? (mt.addVectors(Nt.min, Ki.min), Nt.expandByPoint(mt), mt.addVectors(Nt.max, Ki.max), Nt.expandByPoint(mt)) : (Nt.expandByPoint(Ki.min), Nt.expandByPoint(Ki.max));
      }
      Nt.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++) mt.fromBufferAttribute(e, r), i = Math.max(i, n.distanceToSquared(mt));
      if (t) for (let r = 0, a = t.length; r < a; r++) {
        const o = t[r], l = this.morphTargetsRelative;
        for (let c = 0, h = o.count; c < h; c++) mt.fromBufferAttribute(o, c), l && (_i.fromBufferAttribute(e, c), mt.add(_i)), i = Math.max(i, n.distanceToSquared(mt));
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
    const n = t.position, i = t.normal, r = t.uv;
    this.hasAttribute("tangent") === false && this.setAttribute("tangent", new wt(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"), o = [], l = [];
    for (let N = 0; N < n.count; N++) o[N] = new R(), l[N] = new R();
    const c = new R(), h = new R(), u = new R(), d = new be(), p = new be(), g = new be(), _ = new R(), m = new R();
    function f(N, S, M) {
      c.fromBufferAttribute(n, N), h.fromBufferAttribute(n, S), u.fromBufferAttribute(n, M), d.fromBufferAttribute(r, N), p.fromBufferAttribute(r, S), g.fromBufferAttribute(r, M), h.sub(c), u.sub(c), p.sub(d), g.sub(d);
      const P = 1 / (p.x * g.y - g.x * p.y);
      isFinite(P) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -p.y).multiplyScalar(P), m.copy(u).multiplyScalar(p.x).addScaledVector(h, -g.x).multiplyScalar(P), o[N].add(_), o[S].add(_), o[M].add(_), l[N].add(m), l[S].add(m), l[M].add(m));
    }
    let b = this.groups;
    b.length === 0 && (b = [{ start: 0, count: e.count }]);
    for (let N = 0, S = b.length; N < S; ++N) {
      const M = b[N], P = M.start, G = M.count;
      for (let k = P, W = P + G; k < W; k += 3) f(e.getX(k + 0), e.getX(k + 1), e.getX(k + 2));
    }
    const T = new R(), y = new R(), L = new R(), w = new R();
    function A(N) {
      L.fromBufferAttribute(i, N), w.copy(L);
      const S = o[N];
      T.copy(S), T.sub(L.multiplyScalar(L.dot(S))).normalize(), y.crossVectors(w, S);
      const P = y.dot(l[N]) < 0 ? -1 : 1;
      a.setXYZW(N, T.x, T.y, T.z, P);
    }
    for (let N = 0, S = b.length; N < S; ++N) {
      const M = b[N], P = M.start, G = M.count;
      for (let k = P, W = P + G; k < W; k += 3) A(e.getX(k + 0)), A(e.getX(k + 1)), A(e.getX(k + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index, t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0) n = new wt(new Float32Array(t.count * 3), 3), this.setAttribute("normal", n);
      else for (let d = 0, p = n.count; d < p; d++) n.setXYZ(d, 0, 0, 0);
      const i = new R(), r = new R(), a = new R(), o = new R(), l = new R(), c = new R(), h = new R(), u = new R();
      if (e) for (let d = 0, p = e.count; d < p; d += 3) {
        const g = e.getX(d + 0), _ = e.getX(d + 1), m = e.getX(d + 2);
        i.fromBufferAttribute(t, g), r.fromBufferAttribute(t, _), a.fromBufferAttribute(t, m), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), o.fromBufferAttribute(n, g), l.fromBufferAttribute(n, _), c.fromBufferAttribute(n, m), o.add(h), l.add(h), c.add(h), n.setXYZ(g, o.x, o.y, o.z), n.setXYZ(_, l.x, l.y, l.z), n.setXYZ(m, c.x, c.y, c.z);
      }
      else for (let d = 0, p = t.count; d < p; d += 3) i.fromBufferAttribute(t, d + 0), r.fromBufferAttribute(t, d + 1), a.fromBufferAttribute(t, d + 2), h.subVectors(a, r), u.subVectors(i, r), h.cross(u), n.setXYZ(d + 0, h.x, h.y, h.z), n.setXYZ(d + 1, h.x, h.y, h.z), n.setXYZ(d + 2, h.x, h.y, h.z);
      this.normalizeNormals(), n.needsUpdate = true;
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++) mt.fromBufferAttribute(e, t), mt.normalize(), e.setXYZ(t, mt.x, mt.y, mt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array, h = o.itemSize, u = o.normalized, d = new c.constructor(l.length * h);
      let p = 0, g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        o.isInterleavedBufferAttribute ? p = l[_] * o.data.stride + o.offset : p = l[_] * h;
        for (let f = 0; f < h; f++) d[g++] = c[p++];
      }
      return new wt(d, h, u);
    }
    if (this.index === null) return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
    const t = new Wt(), n = this.index.array, i = this.attributes;
    for (const o in i) {
      const l = i[o], c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [], c = r[o];
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
    let r = false;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l], h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const p = c[u];
        h.push(p.toJSON(e.data));
      }
      h.length > 0 && (i[l] = h, r = true);
    }
    r && (e.data.morphAttributes = i, e.data.morphTargetsRelative = this.morphTargetsRelative);
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
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [], u = r[c];
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
const zo = new Re(), Gn = new Hi(), As = new on(), Ho = new R(), ws = new R(), Rs = new R(), Cs = new R(), Pr = new R(), Ps = new R(), Vo = new R(), Ls = new R();
class Lt extends nt {
  constructor(e = new Wt(), t = new ti()) {
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
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry, i = n.attributes.position, r = n.morphAttributes.position, a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      Ps.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l], u = r[l];
        h !== 0 && (Pr.fromBufferAttribute(u, e), a ? Ps.addScaledVector(Pr, h) : Ps.addScaledVector(Pr.sub(t), h));
      }
      t.add(Ps);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.material, r = this.matrixWorld;
    i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(), As.copy(n.boundingSphere), As.applyMatrix4(r), Gn.copy(e.ray).recast(e.near), !(As.containsPoint(Gn.origin) === false && (Gn.intersectSphere(As, Ho) === null || Gn.origin.distanceToSquared(Ho) > (e.far - e.near) ** 2)) && (zo.copy(r).invert(), Gn.copy(e.ray).applyMatrix4(zo), !(n.boundingBox !== null && Gn.intersectsBox(n.boundingBox) === false) && this._computeIntersections(e, t, Gn)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry, a = this.material, o = r.index, l = r.attributes.position, c = r.attributes.uv, h = r.attributes.uv1, u = r.attributes.normal, d = r.groups, p = r.drawRange;
    if (o !== null) if (Array.isArray(a)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], f = a[m.materialIndex], b = Math.max(m.start, p.start), T = Math.min(o.count, Math.min(m.start + m.count, p.start + p.count));
      for (let y = b, L = T; y < L; y += 3) {
        const w = o.getX(y), A = o.getX(y + 1), N = o.getX(y + 2);
        i = Ds(this, f, e, n, c, h, u, w, A, N), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const g = Math.max(0, p.start), _ = Math.min(o.count, p.start + p.count);
      for (let m = g, f = _; m < f; m += 3) {
        const b = o.getX(m), T = o.getX(m + 1), y = o.getX(m + 2);
        i = Ds(this, a, e, n, c, h, u, b, T, y), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
    else if (l !== void 0) if (Array.isArray(a)) for (let g = 0, _ = d.length; g < _; g++) {
      const m = d[g], f = a[m.materialIndex], b = Math.max(m.start, p.start), T = Math.min(l.count, Math.min(m.start + m.count, p.start + p.count));
      for (let y = b, L = T; y < L; y += 3) {
        const w = y, A = y + 1, N = y + 2;
        i = Ds(this, f, e, n, c, h, u, w, A, N), i && (i.faceIndex = Math.floor(y / 3), i.face.materialIndex = m.materialIndex, t.push(i));
      }
    }
    else {
      const g = Math.max(0, p.start), _ = Math.min(l.count, p.start + p.count);
      for (let m = g, f = _; m < f; m += 3) {
        const b = m, T = m + 1, y = m + 2;
        i = Ds(this, a, e, n, c, h, u, b, T, y), i && (i.faceIndex = Math.floor(m / 3), t.push(i));
      }
    }
  }
}
function hu(s, e, t, n, i, r, a, o) {
  let l;
  if (e.side === Dt ? l = n.intersectTriangle(a, r, i, true, o) : l = n.intersectTriangle(i, r, a, e.side === an, o), l === null) return null;
  Ls.copy(o), Ls.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(Ls);
  return c < t.near || c > t.far ? null : { distance: c, point: Ls.clone(), object: s };
}
function Ds(s, e, t, n, i, r, a, o, l, c) {
  s.getVertexPosition(o, ws), s.getVertexPosition(l, Rs), s.getVertexPosition(c, Cs);
  const h = hu(s, e, t, n, ws, Rs, Cs, Vo);
  if (h) {
    const u = new R();
    $t.getBarycoord(Vo, ws, Rs, Cs, u), i && (h.uv = $t.getInterpolatedAttribute(i, o, l, c, u, new be())), r && (h.uv1 = $t.getInterpolatedAttribute(r, o, l, c, u, new be())), a && (h.normal = $t.getInterpolatedAttribute(a, o, l, c, u, new R()), h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
    const d = { a: o, b: l, c, normal: new R(), materialIndex: 0 };
    $t.getNormal(ws, Rs, Cs, d.normal), h.face = d, h.barycoord = u;
  }
  return h;
}
class ds extends Wt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    super(), this.type = "BoxGeometry", this.parameters = { width: e, height: t, depth: n, widthSegments: i, heightSegments: r, depthSegments: a };
    const o = this;
    i = Math.floor(i), r = Math.floor(r), a = Math.floor(a);
    const l = [], c = [], h = [], u = [];
    let d = 0, p = 0;
    g("z", "y", "x", -1, -1, n, t, e, a, r, 0), g("z", "y", "x", 1, -1, n, t, -e, a, r, 1), g("x", "z", "y", 1, 1, e, n, t, i, a, 2), g("x", "z", "y", 1, -1, e, n, -t, i, a, 3), g("x", "y", "z", 1, -1, e, t, n, i, r, 4), g("x", "y", "z", -1, -1, e, t, -n, i, r, 5), this.setIndex(l), this.setAttribute("position", new tn(c, 3)), this.setAttribute("normal", new tn(h, 3)), this.setAttribute("uv", new tn(u, 2));
    function g(_, m, f, b, T, y, L, w, A, N, S) {
      const M = y / A, P = L / N, G = y / 2, k = L / 2, W = w / 2, K = A + 1, H = N + 1;
      let Q = 0, z = 0;
      const te = new R();
      for (let ce = 0; ce < H; ce++) {
        const _e = ce * P - k;
        for (let Ne = 0; Ne < K; Ne++) {
          const je = Ne * M - G;
          te[_] = je * b, te[m] = _e * T, te[f] = W, c.push(te.x, te.y, te.z), te[_] = 0, te[m] = 0, te[f] = w > 0 ? 1 : -1, h.push(te.x, te.y, te.z), u.push(Ne / A), u.push(1 - ce / N), Q += 1;
        }
      }
      for (let ce = 0; ce < N; ce++) for (let _e = 0; _e < A; _e++) {
        const Ne = d + _e + K * ce, je = d + _e + K * (ce + 1), Y = d + (_e + 1) + K * (ce + 1), ee = d + (_e + 1) + K * ce;
        l.push(Ne, je, ee), l.push(je, Y, ee), z += 6;
      }
      o.addGroup(p, z, S), p += z, d += Q;
    }
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new ds(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Oi(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."), e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i;
    }
  }
  return e;
}
function Tt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Oi(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function uu(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function gc(s) {
  const e = s.getRenderTarget();
  return e === null ? s.outputColorSpace : e.isXRRenderTarget === true ? e.texture.colorSpace : Ve.workingColorSpace;
}
const Ia = { clone: Oi, merge: Tt };
var du = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`, fu = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Tn extends en {
  constructor(e) {
    super(), this.isShaderMaterial = true, this.type = "ShaderMaterial", this.defines = {}, this.uniforms = {}, this.uniformsGroups = [], this.vertexShader = du, this.fragmentShader = fu, this.linewidth = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.fog = false, this.lights = false, this.clipping = false, this.forceSinglePass = true, this.extensions = { clipCullDistance: false, multiDraw: false }, this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }, this.index0AttributeName = void 0, this.uniformsNeedUpdate = false, this.glslVersion = null, e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.fragmentShader = e.fragmentShader, this.vertexShader = e.vertexShader, this.uniforms = Oi(e.uniforms), this.uniformsGroups = uu(e.uniformsGroups), this.defines = Object.assign({}, e.defines), this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.fog = e.fog, this.lights = e.lights, this.clipping = e.clipping, this.extensions = Object.assign({}, e.extensions), this.glslVersion = e.glslVersion, this;
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
class _c extends nt {
  constructor() {
    super(), this.isCamera = true, this.type = "Camera", this.matrixWorldInverse = new Re(), this.projectionMatrix = new Re(), this.projectionMatrixInverse = new Re(), this.coordinateSystem = yn;
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
const Ln = new R(), Go = new be(), Wo = new be();
class bt extends _c {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(), this.isPerspectiveCamera = true, this.type = "PerspectiveCamera", this.fov = e, this.zoom = 1, this.near = n, this.far = i, this.focus = 10, this.aspect = t, this.view = null, this.filmGauge = 35, this.filmOffset = 0, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.fov = e.fov, this.zoom = e.zoom, this.near = e.near, this.far = e.far, this.focus = e.focus, this.aspect = e.aspect, this.view = e.view === null ? null : Object.assign({}, e.view), this.filmGauge = e.filmGauge, this.filmOffset = e.filmOffset, this;
  }
  setFocalLength(e) {
    const t = 0.5 * this.getFilmHeight() / e;
    this.fov = Fi * 2 * Math.atan(t), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(is * 0.5 * this.fov);
    return 0.5 * this.getFilmHeight() / e;
  }
  getEffectiveFOV() {
    return Fi * 2 * Math.atan(Math.tan(is * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    Ln.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse), t.set(Ln.x, Ln.y).multiplyScalar(-e / Ln.z), Ln.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse), n.set(Ln.x, Ln.y).multiplyScalar(-e / Ln.z);
  }
  getViewSize(e, t) {
    return this.getViewBounds(e, Go, Wo), t.subVectors(Wo, Go);
  }
  setViewOffset(e, t, n, i, r, a) {
    this.aspect = e / t, this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = e * Math.tan(is * 0.5 * this.fov) / this.zoom, n = 2 * t, i = this.aspect * n, r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth, c = a.fullHeight;
      r += a.offsetX * i / l, t -= a.offsetY * n / c, i *= a.width / l, n *= a.height / c;
    }
    const o = this.filmOffset;
    o !== 0 && (r += e * o / this.getFilmWidth()), this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.fov = this.fov, t.object.zoom = this.zoom, t.object.near = this.near, t.object.far = this.far, t.object.focus = this.focus, t.object.aspect = this.aspect, this.view !== null && (t.object.view = Object.assign({}, this.view)), t.object.filmGauge = this.filmGauge, t.object.filmOffset = this.filmOffset, t;
  }
}
const xi = -90, vi = 1;
class pu extends nt {
  constructor(e, t, n) {
    super(), this.type = "CubeCamera", this.renderTarget = n, this.coordinateSystem = null, this.activeMipmapLevel = 0;
    const i = new bt(xi, vi, e, t);
    i.layers = this.layers, this.add(i);
    const r = new bt(xi, vi, e, t);
    r.layers = this.layers, this.add(r);
    const a = new bt(xi, vi, e, t);
    a.layers = this.layers, this.add(a);
    const o = new bt(xi, vi, e, t);
    o.layers = this.layers, this.add(o);
    const l = new bt(xi, vi, e, t);
    l.layers = this.layers, this.add(l);
    const c = new bt(xi, vi, e, t);
    c.layers = this.layers, this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem, t = this.children.concat(), [n, i, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === yn) n.up.set(0, 1, 0), n.lookAt(1, 0, 0), i.up.set(0, 1, 0), i.lookAt(-1, 0, 0), r.up.set(0, 0, -1), r.lookAt(0, 1, 0), a.up.set(0, 0, 1), a.lookAt(0, -1, 0), o.up.set(0, 1, 0), o.lookAt(0, 0, 1), l.up.set(0, 1, 0), l.lookAt(0, 0, -1);
    else if (e === ir) n.up.set(0, -1, 0), n.lookAt(-1, 0, 0), i.up.set(0, -1, 0), i.lookAt(1, 0, 0), r.up.set(0, 0, 1), r.lookAt(0, 1, 0), a.up.set(0, 0, -1), a.lookAt(0, -1, 0), o.up.set(0, -1, 0), o.lookAt(0, 0, 1), l.up.set(0, -1, 0), l.lookAt(0, 0, -1);
    else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
    for (const c of t) this.add(c), c.updateMatrixWorld();
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem, this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children, u = e.getRenderTarget(), d = e.getActiveCubeFace(), p = e.getActiveMipmapLevel(), g = e.xr.enabled;
    e.xr.enabled = false;
    const _ = n.texture.generateMipmaps;
    n.texture.generateMipmaps = false, e.setRenderTarget(n, 0, i), e.render(t, r), e.setRenderTarget(n, 1, i), e.render(t, a), e.setRenderTarget(n, 2, i), e.render(t, o), e.setRenderTarget(n, 3, i), e.render(t, l), e.setRenderTarget(n, 4, i), e.render(t, c), n.texture.generateMipmaps = _, e.setRenderTarget(n, 5, i), e.render(t, h), e.setRenderTarget(u, d, p), e.xr.enabled = g, n.texture.needsPMREMUpdate = true;
  }
}
class xc extends gt {
  constructor(e, t, n, i, r, a, o, l, c, h) {
    e = e !== void 0 ? e : [], t = t !== void 0 ? t : Li, super(e, t, n, i, r, a, o, l, c, h), this.isCubeTexture = true, this.flipY = false;
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class mu extends Bn {
  constructor(e = 1, t = {}) {
    super(e, e, t), this.isWebGLCubeRenderTarget = true;
    const n = { width: e, height: e, depth: 1 }, i = [n, n, n, n, n, n];
    this.texture = new xc(i, t.mapping, t.wrapS, t.wrapT, t.magFilter, t.minFilter, t.format, t.type, t.anisotropy, t.colorSpace), this.texture.isRenderTargetTexture = true, this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : false, this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : Ft;
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
			` }, i = new ds(5, 5, 5), r = new Tn({ name: "CubemapFromEquirect", uniforms: Oi(n.uniforms), vertexShader: n.vertexShader, fragmentShader: n.fragmentShader, side: Dt, blending: Fn });
    r.uniforms.tEquirect.value = t;
    const a = new Lt(i, r), o = t.minFilter;
    return t.minFilter === Mn && (t.minFilter = Ft), new pu(1, 10, this).update(e, a), t.minFilter = o, a.geometry.dispose(), a.material.dispose(), this;
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
class vc {
  constructor(e, t = 1, n = 1e3) {
    this.isFog = true, this.name = "", this.color = new ye(e), this.near = t, this.far = n;
  }
  clone() {
    return new vc(this.color, this.near, this.far);
  }
  toJSON() {
    return { type: "Fog", name: this.name, color: this.color.getHex(), near: this.near, far: this.far };
  }
}
class H_ extends nt {
  constructor() {
    super(), this.isScene = true, this.type = "Scene", this.background = null, this.environment = null, this.fog = null, this.backgroundBlurriness = 0, this.backgroundIntensity = 1, this.backgroundRotation = new nn(), this.environmentIntensity = 1, this.environmentRotation = new nn(), this.overrideMaterial = null, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  copy(e, t) {
    return super.copy(e, t), e.background !== null && (this.background = e.background.clone()), e.environment !== null && (this.environment = e.environment.clone()), e.fog !== null && (this.fog = e.fog.clone()), this.backgroundBlurriness = e.backgroundBlurriness, this.backgroundIntensity = e.backgroundIntensity, this.backgroundRotation.copy(e.backgroundRotation), this.environmentIntensity = e.environmentIntensity, this.environmentRotation.copy(e.environmentRotation), e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()), this.matrixAutoUpdate = e.matrixAutoUpdate, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness), this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity), t.object.backgroundRotation = this.backgroundRotation.toArray(), this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity), t.object.environmentRotation = this.environmentRotation.toArray(), t;
  }
}
class gu {
  constructor(e, t) {
    this.isInterleavedBuffer = true, this.array = e, this.stride = t, this.count = e !== void 0 ? e.length / t : 0, this.usage = Da, this.updateRanges = [], this.version = 0, this.uuid = Qt();
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
    for (let i = 0, r = this.stride; i < r; i++) this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  clone(e) {
    e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Qt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
    const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]), n = new this.constructor(t, this.stride);
    return n.setUsage(this.usage), n;
  }
  onUpload(e) {
    return this.onUploadCallback = e, this;
  }
  toJSON(e) {
    return e.arrayBuffers === void 0 && (e.arrayBuffers = {}), this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Qt()), e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))), { uuid: this.uuid, buffer: this.array.buffer._uuid, type: this.array.constructor.name, stride: this.stride };
  }
}
const Et = new R();
class $a {
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
    for (let t = 0, n = this.data.count; t < n; t++) Et.fromBufferAttribute(this, t), Et.applyMatrix4(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++) Et.fromBufferAttribute(this, t), Et.applyNormalMatrix(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++) Et.fromBufferAttribute(this, t), Et.transformDirection(e), this.setXYZ(t, Et.x, Et.y, Et.z);
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return this.normalized && (n = Zt(n, this.array)), n;
  }
  setComponent(e, t, n) {
    return this.normalized && (n = Je(n, this.array)), this.data.array[e * this.data.stride + this.offset + t] = n, this;
  }
  setX(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset] = t, this;
  }
  setY(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 1] = t, this;
  }
  setZ(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 2] = t, this;
  }
  setW(e, t) {
    return this.normalized && (t = Je(t, this.array)), this.data.array[e * this.data.stride + this.offset + 3] = t, this;
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return this.normalized && (t = Zt(t, this.array)), t;
  }
  setXY(e, t, n) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), n = Je(n, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this;
  }
  setXYZ(e, t, n, i) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), i = Je(i, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this;
  }
  setXYZW(e, t, n, i, r) {
    return e = e * this.data.stride + this.offset, this.normalized && (t = Je(t, this.array), n = Je(n, this.array), i = Je(i, this.array), r = Je(r, this.array)), this.data.array[e + 0] = t, this.data.array[e + 1] = n, this.data.array[e + 2] = i, this.data.array[e + 3] = r, this;
  }
  clone(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new wt(new this.array.constructor(t), this.itemSize, this.normalized);
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)), new $a(e.interleavedBuffers[this.data.uuid], this.itemSize, this.offset, this.normalized);
  }
  toJSON(e) {
    if (e === void 0) {
      console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return { itemSize: this.itemSize, type: this.array.constructor.name, array: t, normalized: this.normalized };
    } else return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}), e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)), { isInterleavedBufferAttribute: true, itemSize: this.itemSize, data: this.data.uuid, offset: this.offset, normalized: this.normalized };
  }
}
const Xo = new R(), Yo = new Ye(), qo = new Ye(), _u = new R(), jo = new Re(), Is = new R(), Lr = new on(), Ko = new Re(), Dr = new Hi();
class xu extends Lt {
  constructor(e, t) {
    super(e, t), this.isSkinnedMesh = true, this.type = "SkinnedMesh", this.bindMode = yo, this.bindMatrix = new Re(), this.bindMatrixInverse = new Re(), this.boundingBox = null, this.boundingSphere = null;
  }
  computeBoundingBox() {
    const e = this.geometry;
    this.boundingBox === null && (this.boundingBox = new bn()), this.boundingBox.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Is), this.boundingBox.expandByPoint(Is);
  }
  computeBoundingSphere() {
    const e = this.geometry;
    this.boundingSphere === null && (this.boundingSphere = new on()), this.boundingSphere.makeEmpty();
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++) this.getVertexPosition(n, Is), this.boundingSphere.expandByPoint(Is);
  }
  copy(e, t) {
    return super.copy(e, t), this.bindMode = e.bindMode, this.bindMatrix.copy(e.bindMatrix), this.bindMatrixInverse.copy(e.bindMatrixInverse), this.skeleton = e.skeleton, e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()), e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()), this;
  }
  raycast(e, t) {
    const n = this.material, i = this.matrixWorld;
    n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), Lr.copy(this.boundingSphere), Lr.applyMatrix4(i), e.ray.intersectsSphere(Lr) !== false && (Ko.copy(i).invert(), Dr.copy(e.ray).applyMatrix4(Ko), !(this.boundingBox !== null && Dr.intersectsBox(this.boundingBox) === false) && this._computeIntersections(e, t, Dr)));
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
      const r = 1 / e.manhattanLength();
      r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0), t.setXYZW(n, e.x, e.y, e.z, e.w);
    }
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.bindMode === yo ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === gh ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton, i = this.geometry;
    Yo.fromBufferAttribute(i.attributes.skinIndex, e), qo.fromBufferAttribute(i.attributes.skinWeight, e), Xo.copy(t).applyMatrix4(this.bindMatrix), t.set(0, 0, 0);
    for (let r = 0; r < 4; r++) {
      const a = qo.getComponent(r);
      if (a !== 0) {
        const o = Yo.getComponent(r);
        jo.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]), t.addScaledVector(_u.copy(Xo).applyMatrix4(jo), a);
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class Mc extends nt {
  constructor() {
    super(), this.isBone = true, this.type = "Bone";
  }
}
class yc extends gt {
  constructor(e = null, t = 1, n = 1, i, r, a, o, l, c = At, h = At, u, d) {
    super(null, a, o, l, c, h, i, r, u, d), this.isDataTexture = true, this.image = { data: e, width: t, height: n }, this.generateMipmaps = false, this.flipY = false, this.unpackAlignment = 1;
  }
}
const Zo = new Re(), vu = new Re();
class Ja {
  constructor(e = [], t = []) {
    this.uuid = Qt(), this.bones = e.slice(0), this.boneInverses = t, this.boneMatrices = null, this.boneTexture = null, this.init();
  }
  init() {
    const e = this.bones, t = this.boneInverses;
    if (this.boneMatrices = new Float32Array(e.length * 16), t.length === 0) this.calculateInverses();
    else if (e.length !== t.length) {
      console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."), this.boneInverses = [];
      for (let n = 0, i = this.bones.length; n < i; n++) this.boneInverses.push(new Re());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Re();
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
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : vu;
      Zo.multiplyMatrices(o, t[r]), Zo.toArray(n, r * 16);
    }
    i !== null && (i.needsUpdate = true);
  }
  clone() {
    return new Ja(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    e = Math.ceil(e / 4) * 4, e = Math.max(e, 4);
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new yc(t, e, e, Vt, Jt);
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
      const r = e.bones[n];
      let a = t[r];
      a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", r), a = new Mc()), this.bones.push(a), this.boneInverses.push(new Re().fromArray(e.boneInverses[n]));
    }
    return this.init(), this;
  }
  toJSON() {
    const e = { metadata: { version: 4.6, type: "Skeleton", generator: "Skeleton.toJSON" }, bones: [], boneInverses: [] };
    e.uuid = this.uuid;
    const t = this.bones, n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Ua extends wt {
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
const Mi = new Re(), $o = new Re(), Us = [], Jo = new bn(), Mu = new Re(), Zi = new Lt(), $i = new on();
class yu extends Lt {
  constructor(e, t, n) {
    super(e, t), this.isInstancedMesh = true, this.instanceMatrix = new Ua(new Float32Array(n * 16), 16), this.instanceColor = null, this.morphTexture = null, this.count = n, this.boundingBox = null, this.boundingSphere = null;
    for (let i = 0; i < n; i++) this.setMatrixAt(i, Mu);
  }
  computeBoundingBox() {
    const e = this.geometry, t = this.count;
    this.boundingBox === null && (this.boundingBox = new bn()), e.boundingBox === null && e.computeBoundingBox(), this.boundingBox.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, Mi), Jo.copy(e.boundingBox).applyMatrix4(Mi), this.boundingBox.union(Jo);
  }
  computeBoundingSphere() {
    const e = this.geometry, t = this.count;
    this.boundingSphere === null && (this.boundingSphere = new on()), e.boundingSphere === null && e.computeBoundingSphere(), this.boundingSphere.makeEmpty();
    for (let n = 0; n < t; n++) this.getMatrixAt(n, Mi), $i.copy(e.boundingSphere).applyMatrix4(Mi), this.boundingSphere.union($i);
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
    const n = t.morphTargetInfluences, i = this.morphTexture.source.data.data, r = n.length + 1, a = e * r + 1;
    for (let o = 0; o < n.length; o++) n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld, i = this.count;
    if (Zi.geometry = this.geometry, Zi.material = this.material, Zi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(), $i.copy(this.boundingSphere), $i.applyMatrix4(n), e.ray.intersectsSphere($i) !== false)) for (let r = 0; r < i; r++) {
      this.getMatrixAt(r, Mi), $o.multiplyMatrices(n, Mi), Zi.matrixWorld = $o, Zi.raycast(e, Us);
      for (let a = 0, o = Us.length; a < o; a++) {
        const l = Us[a];
        l.instanceId = r, l.object = this, t.push(l);
      }
      Us.length = 0;
    }
  }
  setColorAt(e, t) {
    this.instanceColor === null && (this.instanceColor = new Ua(new Float32Array(this.instanceMatrix.count * 3).fill(1), 3)), t.toArray(this.instanceColor.array, e * 3);
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences, i = n.length + 1;
    this.morphTexture === null && (this.morphTexture = new yc(new Float32Array(i * this.count), i, this.count, Wa, Jt));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++) a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a, l = i * e;
    r[l] = o, r.set(n, l + 1);
  }
  updateMorphTargets() {
  }
  dispose() {
    return this.dispatchEvent({ type: "dispose" }), this.morphTexture !== null && (this.morphTexture.dispose(), this.morphTexture = null), this;
  }
}
const Ir = new R(), Su = new R(), Eu = new De();
class vn {
  constructor(e = new R(1, 0, 0), t = 0) {
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
    const i = Ir.subVectors(n, t).cross(Su.subVectors(e, t)).normalize();
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
    const n = e.delta(Ir), i = this.normal.dot(n);
    if (i === 0) return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
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
    const n = t || Eu.getNormalMatrix(e), i = this.coplanarPoint(Ir).applyMatrix4(e), r = this.normal.applyMatrix3(n).normalize();
    return this.constant = -i.dot(r), this;
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
const Wn = new on(), Ns = new R();
class Qa {
  constructor(e = new vn(), t = new vn(), n = new vn(), i = new vn(), r = new vn(), a = new vn()) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(t), o[2].copy(n), o[3].copy(i), o[4].copy(r), o[5].copy(a), this;
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = yn) {
    const n = this.planes, i = e.elements, r = i[0], a = i[1], o = i[2], l = i[3], c = i[4], h = i[5], u = i[6], d = i[7], p = i[8], g = i[9], _ = i[10], m = i[11], f = i[12], b = i[13], T = i[14], y = i[15];
    if (n[0].setComponents(l - r, d - c, m - p, y - f).normalize(), n[1].setComponents(l + r, d + c, m + p, y + f).normalize(), n[2].setComponents(l + a, d + h, m + g, y + b).normalize(), n[3].setComponents(l - a, d - h, m - g, y - b).normalize(), n[4].setComponents(l - o, d - u, m - _, y - T).normalize(), t === yn) n[5].setComponents(l + o, d + u, m + _, y + T).normalize();
    else if (t === ir) n[5].setComponents(o, u, _, T).normalize();
    else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0) e.boundingSphere === null && e.computeBoundingSphere(), Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const t = e.geometry;
      t.boundingSphere === null && t.computeBoundingSphere(), Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(Wn);
  }
  intersectsSprite(e) {
    return Wn.center.set(0, 0, 0), Wn.radius = 0.7071067811865476, Wn.applyMatrix4(e.matrixWorld), this.intersectsSphere(Wn);
  }
  intersectsSphere(e) {
    const t = this.planes, n = e.center, i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return false;
    return true;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (Ns.x = i.normal.x > 0 ? e.max.x : e.min.x, Ns.y = i.normal.y > 0 ? e.max.y : e.min.y, Ns.z = i.normal.z > 0 ? e.max.z : e.min.z, i.distanceToPoint(Ns) < 0) return false;
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
class eo extends en {
  constructor(e) {
    super(), this.isLineBasicMaterial = true, this.type = "LineBasicMaterial", this.color = new ye(16777215), this.map = null, this.linewidth = 1, this.linecap = "round", this.linejoin = "round", this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.linewidth = e.linewidth, this.linecap = e.linecap, this.linejoin = e.linejoin, this.fog = e.fog, this;
  }
}
const sr = new R(), rr = new R(), Qo = new Re(), Ji = new Hi(), Fs = new on(), Ur = new R(), el = new R();
class hs extends nt {
  constructor(e = new Wt(), t = new eo()) {
    super(), this.isLine = true, this.type = "Line", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [0];
      for (let i = 1, r = t.count; i < r; i++) sr.fromBufferAttribute(t, i - 1), rr.fromBufferAttribute(t, i), n[i] = n[i - 1], n[i] += sr.distanceTo(rr);
      e.setAttribute("lineDistance", new tn(n, 1));
    } else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Line.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Fs.copy(n.boundingSphere), Fs.applyMatrix4(i), Fs.radius += r, e.ray.intersectsSphere(Fs) === false) return;
    Qo.copy(i).invert(), Ji.copy(e.ray).applyMatrix4(Qo);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = this.isLineSegments ? 2 : 1, h = n.index, d = n.attributes.position;
    if (h !== null) {
      const p = Math.max(0, a.start), g = Math.min(h.count, a.start + a.count);
      for (let _ = p, m = g - 1; _ < m; _ += c) {
        const f = h.getX(_), b = h.getX(_ + 1), T = Os(this, e, Ji, l, f, b);
        T && t.push(T);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1), m = h.getX(p), f = Os(this, e, Ji, l, _, m);
        f && t.push(f);
      }
    } else {
      const p = Math.max(0, a.start), g = Math.min(d.count, a.start + a.count);
      for (let _ = p, m = g - 1; _ < m; _ += c) {
        const f = Os(this, e, Ji, l, _, _ + 1);
        f && t.push(f);
      }
      if (this.isLineLoop) {
        const _ = Os(this, e, Ji, l, g - 1, p);
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
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function Os(s, e, t, n, i, r) {
  const a = s.geometry.attributes.position;
  if (sr.fromBufferAttribute(a, i), rr.fromBufferAttribute(a, r), t.distanceSqToSegment(sr, rr, Ur, el) > n) return;
  Ur.applyMatrix4(s.matrixWorld);
  const l = e.ray.origin.distanceTo(Ur);
  if (!(l < e.near || l > e.far)) return { distance: l, point: el.clone().applyMatrix4(s.matrixWorld), index: i, face: null, faceIndex: null, barycoord: null, object: s };
}
const tl = new R(), nl = new R();
class Tu extends hs {
  constructor(e, t) {
    super(e, t), this.isLineSegments = true, this.type = "LineSegments";
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position, n = [];
      for (let i = 0, r = t.count; i < r; i += 2) tl.fromBufferAttribute(t, i), nl.fromBufferAttribute(t, i + 1), n[i] = i === 0 ? 0 : n[i - 1], n[i + 1] = n[i] + tl.distanceTo(nl);
      e.setAttribute("lineDistance", new tn(n, 1));
    } else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
    return this;
  }
}
class bu extends hs {
  constructor(e, t) {
    super(e, t), this.isLineLoop = true, this.type = "LineLoop";
  }
}
class Sc extends en {
  constructor(e) {
    super(), this.isPointsMaterial = true, this.type = "PointsMaterial", this.color = new ye(16777215), this.map = null, this.alphaMap = null, this.size = 1, this.sizeAttenuation = true, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.map = e.map, this.alphaMap = e.alphaMap, this.size = e.size, this.sizeAttenuation = e.sizeAttenuation, this.fog = e.fog, this;
  }
}
const il = new Re(), Na = new Hi(), Bs = new on(), ks = new R();
class Au extends nt {
  constructor(e = new Wt(), t = new Sc()) {
    super(), this.isPoints = true, this.type = "Points", this.geometry = e, this.material = t, this.updateMorphTargets();
  }
  copy(e, t) {
    return super.copy(e, t), this.material = Array.isArray(e.material) ? e.material.slice() : e.material, this.geometry = e.geometry, this;
  }
  raycast(e, t) {
    const n = this.geometry, i = this.matrixWorld, r = e.params.Points.threshold, a = n.drawRange;
    if (n.boundingSphere === null && n.computeBoundingSphere(), Bs.copy(n.boundingSphere), Bs.applyMatrix4(i), Bs.radius += r, e.ray.intersectsSphere(Bs) === false) return;
    il.copy(i).invert(), Na.copy(e.ray).applyMatrix4(il);
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3), l = o * o, c = n.index, u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start), p = Math.min(c.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++) {
        const m = c.getX(g);
        ks.fromBufferAttribute(u, m), sl(ks, m, l, i, e, t, this);
      }
    } else {
      const d = Math.max(0, a.start), p = Math.min(u.count, a.start + a.count);
      for (let g = d, _ = p; g < _; g++) ks.fromBufferAttribute(u, g), sl(ks, g, l, i, e, t, this);
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes, n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        this.morphTargetInfluences = [], this.morphTargetDictionary = {};
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          this.morphTargetInfluences.push(0), this.morphTargetDictionary[o] = r;
        }
      }
    }
  }
}
function sl(s, e, t, n, i, r, a) {
  const o = Na.distanceSqToPoint(s);
  if (o < t) {
    const l = new R();
    Na.closestPointToPoint(s, l), l.applyMatrix4(n);
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, faceIndex: null, barycoord: null, object: a });
  }
}
class ni extends nt {
  constructor() {
    super(), this.isGroup = true, this.type = "Group";
  }
}
class Ec extends gt {
  constructor(e, t, n, i, r, a, o, l, c, h = wi) {
    if (h !== wi && h !== Ni) throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
    n === void 0 && h === wi && (n = ii), n === void 0 && h === Ni && (n = Ui), super(null, i, r, a, o, l, h, n, c), this.isDepthTexture = true, this.image = { width: e, height: t }, this.magFilter = o !== void 0 ? o : At, this.minFilter = l !== void 0 ? l : At, this.flipY = false, this.generateMipmaps = false, this.compareFunction = null;
  }
  copy(e) {
    return super.copy(e), this.compareFunction = e.compareFunction, this;
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.compareFunction !== null && (t.compareFunction = this.compareFunction), t;
  }
}
class or extends Wt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(), this.type = "PlaneGeometry", this.parameters = { width: e, height: t, widthSegments: n, heightSegments: i };
    const r = e / 2, a = t / 2, o = Math.floor(n), l = Math.floor(i), c = o + 1, h = l + 1, u = e / o, d = t / l, p = [], g = [], _ = [], m = [];
    for (let f = 0; f < h; f++) {
      const b = f * d - a;
      for (let T = 0; T < c; T++) {
        const y = T * u - r;
        g.push(y, -b, 0), _.push(0, 0, 1), m.push(T / o), m.push(1 - f / l);
      }
    }
    for (let f = 0; f < l; f++) for (let b = 0; b < o; b++) {
      const T = b + c * f, y = b + c * (f + 1), L = b + 1 + c * (f + 1), w = b + 1 + c * f;
      p.push(T, y, w), p.push(y, L, w);
    }
    this.setIndex(p), this.setAttribute("position", new tn(g, 3)), this.setAttribute("normal", new tn(_, 3)), this.setAttribute("uv", new tn(m, 2));
  }
  copy(e) {
    return super.copy(e), this.parameters = Object.assign({}, e.parameters), this;
  }
  static fromJSON(e) {
    return new or(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class to extends en {
  constructor(e) {
    super(), this.isMeshStandardMaterial = true, this.type = "MeshStandardMaterial", this.defines = { STANDARD: "" }, this.color = new ye(16777215), this.roughness = 1, this.metalness = 0, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ye(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ja, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.roughnessMap = null, this.metalnessMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new nn(), this.envMapIntensity = 1, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.defines = { STANDARD: "" }, this.color.copy(e.color), this.roughness = e.roughness, this.metalness = e.metalness, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.roughnessMap = e.roughnessMap, this.metalnessMap = e.metalnessMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.envMapIntensity = e.envMapIntensity, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class ln extends to {
  constructor(e) {
    super(), this.isMeshPhysicalMaterial = true, this.defines = { STANDARD: "", PHYSICAL: "" }, this.type = "MeshPhysicalMaterial", this.anisotropyRotation = 0, this.anisotropyMap = null, this.clearcoatMap = null, this.clearcoatRoughness = 0, this.clearcoatRoughnessMap = null, this.clearcoatNormalScale = new be(1, 1), this.clearcoatNormalMap = null, this.ior = 1.5, Object.defineProperty(this, "reflectivity", { get: function() {
      return Fe(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1);
    }, set: function(t) {
      this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
    } }), this.iridescenceMap = null, this.iridescenceIOR = 1.3, this.iridescenceThicknessRange = [100, 400], this.iridescenceThicknessMap = null, this.sheenColor = new ye(0), this.sheenColorMap = null, this.sheenRoughness = 1, this.sheenRoughnessMap = null, this.transmissionMap = null, this.thickness = 0, this.thicknessMap = null, this.attenuationDistance = 1 / 0, this.attenuationColor = new ye(1, 1, 1), this.specularIntensity = 1, this.specularIntensityMap = null, this.specularColor = new ye(1, 1, 1), this.specularColorMap = null, this._anisotropy = 0, this._clearcoat = 0, this._dispersion = 0, this._iridescence = 0, this._sheen = 0, this._transmission = 0, this.setValues(e);
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
class V_ extends en {
  constructor(e) {
    super(), this.isMeshPhongMaterial = true, this.type = "MeshPhongMaterial", this.color = new ye(16777215), this.specular = new ye(1118481), this.shininess = 30, this.map = null, this.lightMap = null, this.lightMapIntensity = 1, this.aoMap = null, this.aoMapIntensity = 1, this.emissive = new ye(0), this.emissiveIntensity = 1, this.emissiveMap = null, this.bumpMap = null, this.bumpScale = 1, this.normalMap = null, this.normalMapType = ja, this.normalScale = new be(1, 1), this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.specularMap = null, this.alphaMap = null, this.envMap = null, this.envMapRotation = new nn(), this.combine = za, this.reflectivity = 1, this.refractionRatio = 0.98, this.wireframe = false, this.wireframeLinewidth = 1, this.wireframeLinecap = "round", this.wireframeLinejoin = "round", this.flatShading = false, this.fog = true, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.color.copy(e.color), this.specular.copy(e.specular), this.shininess = e.shininess, this.map = e.map, this.lightMap = e.lightMap, this.lightMapIntensity = e.lightMapIntensity, this.aoMap = e.aoMap, this.aoMapIntensity = e.aoMapIntensity, this.emissive.copy(e.emissive), this.emissiveMap = e.emissiveMap, this.emissiveIntensity = e.emissiveIntensity, this.bumpMap = e.bumpMap, this.bumpScale = e.bumpScale, this.normalMap = e.normalMap, this.normalMapType = e.normalMapType, this.normalScale.copy(e.normalScale), this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.specularMap = e.specularMap, this.alphaMap = e.alphaMap, this.envMap = e.envMap, this.envMapRotation.copy(e.envMapRotation), this.combine = e.combine, this.reflectivity = e.reflectivity, this.refractionRatio = e.refractionRatio, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this.wireframeLinecap = e.wireframeLinecap, this.wireframeLinejoin = e.wireframeLinejoin, this.flatShading = e.flatShading, this.fog = e.fog, this;
  }
}
class wu extends en {
  constructor(e) {
    super(), this.isMeshDepthMaterial = true, this.type = "MeshDepthMaterial", this.depthPacking = vh, this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.wireframe = false, this.wireframeLinewidth = 1, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.depthPacking = e.depthPacking, this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this.wireframe = e.wireframe, this.wireframeLinewidth = e.wireframeLinewidth, this;
  }
}
class Ru extends en {
  constructor(e) {
    super(), this.isMeshDistanceMaterial = true, this.type = "MeshDistanceMaterial", this.map = null, this.alphaMap = null, this.displacementMap = null, this.displacementScale = 1, this.displacementBias = 0, this.setValues(e);
  }
  copy(e) {
    return super.copy(e), this.map = e.map, this.alphaMap = e.alphaMap, this.displacementMap = e.displacementMap, this.displacementScale = e.displacementScale, this.displacementBias = e.displacementBias, this;
  }
}
function zs(s, e, t) {
  return !s || !t && s.constructor === e ? s : typeof e.BYTES_PER_ELEMENT == "number" ? new e(s) : Array.prototype.slice.call(s);
}
function Cu(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function Pu(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length, n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return n.sort(e), n;
}
function rl(s, e, t) {
  const n = s.length, i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l) i[a++] = s[o + l];
  }
  return i;
}
function Tc(s, e, t, n) {
  let i = 1, r = s[0];
  for (; r !== void 0 && r[n] === void 0; ) r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0) if (Array.isArray(a)) do
    a = r[n], a !== void 0 && (e.push(r.time), t.push.apply(t, a)), r = s[i++];
  while (r !== void 0);
  else if (a.toArray !== void 0) do
    a = r[n], a !== void 0 && (e.push(r.time), a.toArray(t, t.length)), r = s[i++];
  while (r !== void 0);
  else do
    a = r[n], a !== void 0 && (e.push(r.time), t.push(a)), r = s[i++];
  while (r !== void 0);
}
class fs {
  constructor(e, t, n, i) {
    this.parameterPositions = e, this._cachedIndex = 0, this.resultBuffer = i !== void 0 ? i : new t.constructor(n), this.sampleValues = t, this.valueSize = n, this.settings = null, this.DefaultSettings_ = {};
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex, i = t[n], r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ; ) {
              if (i === void 0) {
                if (e < r) break i;
                return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
              }
              if (n === o) break;
              if (r = i, i = t[++n], e < i) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && (n = 2, r = o);
            for (let l = n - 2; ; ) {
              if (r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
              if (n === l) break;
              if (i = r, r = t[--n - 1], e >= r) break e;
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
        if (i = t[n], r = t[n - 1], r === void 0) return this._cachedIndex = 0, this.copySampleValue_(0);
        if (i === void 0) return n = t.length, this._cachedIndex = n, this.copySampleValue_(n - 1);
      }
      this._cachedIndex = n, this.intervalChanged_(n, r, i);
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[r + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {
  }
}
class Lu extends fs {
  constructor(e, t, n, i) {
    super(e, t, n, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = { endingStart: So, endingEnd: So };
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2, a = e + 1, o = i[r], l = i[a];
    if (o === void 0) switch (this.getSettings_().endingStart) {
      case Eo:
        r = e, o = 2 * t - n;
        break;
      case To:
        r = i.length - 2, o = t + i[r] - i[r + 1];
        break;
      default:
        r = e, o = n;
    }
    if (l === void 0) switch (this.getSettings_().endingEnd) {
      case Eo:
        a = e, l = 2 * n - t;
        break;
      case To:
        a = 1, l = n + i[1] - i[0];
        break;
      default:
        a = e - 1, l = t;
    }
    const c = (n - t) * 0.5, h = this.valueSize;
    this._weightPrev = c / (t - o), this._weightNext = c / (l - n), this._offsetPrev = r * h, this._offsetNext = a * h;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = this._offsetPrev, u = this._offsetNext, d = this._weightPrev, p = this._weightNext, g = (n - t) / (i - t), _ = g * g, m = _ * g, f = -d * m + 2 * d * _ - d * g, b = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1, T = (-1 - p) * m + (1.5 + p) * _ + 0.5 * g, y = p * m - p * _;
    for (let L = 0; L !== o; ++L) r[L] = f * a[h + L] + b * a[c + L] + T * a[l + L] + y * a[u + L];
    return r;
  }
}
class Du extends fs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = e * o, c = l - o, h = (n - t) / (i - t), u = 1 - h;
    for (let d = 0; d !== o; ++d) r[d] = a[c + d] * u + a[l + d] * h;
    return r;
  }
}
class Iu extends fs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class cn {
  constructor(e, t, n, i) {
    if (e === void 0) throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    this.name = e, this.times = zs(t, this.TimeBufferType), this.values = zs(n, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = { name: e.name, times: zs(e.times, Array), values: zs(e.values, Array) };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return n.type = e.ValueTypeName, n;
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Iu(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Du(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Lu(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case os:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case ls:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case ur:
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
        return os;
      case this.InterpolantFactoryMethodLinear:
        return ls;
      case this.InterpolantFactoryMethodSmooth:
        return ur;
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
    let r = 0, a = i - 1;
    for (; r !== i && n[r] < e; ) ++r;
    for (; a !== -1 && n[a] > t; ) --a;
    if (++a, r !== 0 || a !== i) {
      r >= a && (a = Math.max(a, 1), r = a - 1);
      const o = this.getValueSize();
      this.times = n.slice(r, a), this.values = this.values.slice(r * o, a * o);
    }
    return this;
  }
  validate() {
    let e = true;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this), e = false);
    const n = this.times, i = this.values, r = n.length;
    r === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this), e = false);
    let a = null;
    for (let o = 0; o !== r; o++) {
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
    if (i !== void 0 && Cu(i)) for (let o = 0, l = i.length; o !== l; ++o) {
      const c = i[o];
      if (isNaN(c)) {
        console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, c), e = false;
        break;
      }
    }
    return e;
  }
  optimize() {
    const e = this.times.slice(), t = this.values.slice(), n = this.getValueSize(), i = this.getInterpolation() === ur, r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
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
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
      ++a;
    }
    return a !== e.length ? (this.times = e.slice(0, a), this.values = t.slice(0, a * n)) : (this.times = e, this.values = t), this;
  }
  clone() {
    const e = this.times.slice(), t = this.values.slice(), n = this.constructor, i = new n(this.name, e, t);
    return i.createInterpolant = this.createInterpolant, i;
  }
}
cn.prototype.TimeBufferType = Float32Array;
cn.prototype.ValueBufferType = Float32Array;
cn.prototype.DefaultInterpolation = ls;
class Vi extends cn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Vi.prototype.ValueTypeName = "bool";
Vi.prototype.ValueBufferType = Array;
Vi.prototype.DefaultInterpolation = os;
Vi.prototype.InterpolantFactoryMethodLinear = void 0;
Vi.prototype.InterpolantFactoryMethodSmooth = void 0;
class bc extends cn {
}
bc.prototype.ValueTypeName = "color";
class Bi extends cn {
}
Bi.prototype.ValueTypeName = "number";
class Uu extends fs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4) Gt.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
}
class ki extends cn {
  InterpolantFactoryMethodLinear(e) {
    return new Uu(this.times, this.values, this.getValueSize(), e);
  }
}
ki.prototype.ValueTypeName = "quaternion";
ki.prototype.InterpolantFactoryMethodSmooth = void 0;
class Gi extends cn {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
Gi.prototype.ValueTypeName = "string";
Gi.prototype.ValueBufferType = Array;
Gi.prototype.DefaultInterpolation = os;
Gi.prototype.InterpolantFactoryMethodLinear = void 0;
Gi.prototype.InterpolantFactoryMethodSmooth = void 0;
class zi extends cn {
}
zi.prototype.ValueTypeName = "vector";
class Nu {
  constructor(e = "", t = -1, n = [], i = _h) {
    this.name = e, this.tracks = n, this.duration = t, this.blendMode = i, this.uuid = Qt(), this.duration < 0 && this.resetDuration();
  }
  static parse(e) {
    const t = [], n = e.tracks, i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(Ou(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return r.uuid = e.uuid, r;
  }
  static toJSON(e) {
    const t = [], n = e.tracks, i = { name: e.name, duration: e.duration, tracks: t, uuid: e.uuid, blendMode: e.blendMode };
    for (let r = 0, a = n.length; r !== a; ++r) t.push(cn.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length, a = [];
    for (let o = 0; o < r; o++) {
      let l = [], c = [];
      l.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0);
      const h = Pu(l);
      l = rl(l, 1, h), c = rl(c, 1, h), !i && l[0] === 0 && (l.push(r), c.push(c[0])), a.push(new Bi(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(1 / n));
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
    const i = {}, r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = c.name.match(r);
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
        Tc(p, m, f, g), m.length !== 0 && _.push(new u(d, m, f));
      }
    }, i = [], r = e.name || "default", a = e.fps || 30, o = e.blendMode;
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
          for (let b = 0; b !== d[g].morphTargets.length; ++b) {
            const T = d[g];
            m.push(T.time), f.push(T.morphTarget === _ ? 1 : 0);
          }
          i.push(new Bi(".morphTargetInfluence[" + _ + "]", m, f));
        }
        l = p.length * a;
      } else {
        const p = ".bones[" + t[u].name + "]";
        n(zi, p + ".position", d, "pos", i), n(ki, p + ".quaternion", d, "rot", i), n(zi, p + ".scale", d, "scl", i);
      }
    }
    return i.length === 0 ? null : new this(r, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
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
function Fu(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Bi;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return zi;
    case "color":
      return bc;
    case "quaternion":
      return ki;
    case "bool":
    case "boolean":
      return Vi;
    case "string":
      return Gi;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function Ou(s) {
  if (s.type === void 0) throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Fu(s.type);
  if (s.times === void 0) {
    const t = [], n = [];
    Tc(s.keys, t, n, "value"), s.times = t, s.values = n;
  }
  return e.parse !== void 0 ? e.parse(s) : new e(s.name, s.times, s.values, s.interpolation);
}
const Nn = { enabled: false, files: {}, add: function(s, e) {
  this.enabled !== false && (this.files[s] = e);
}, get: function(s) {
  if (this.enabled !== false) return this.files[s];
}, remove: function(s) {
  delete this.files[s];
}, clear: function() {
  this.files = {};
} };
class Bu {
  constructor(e, t, n) {
    const i = this;
    let r = false, a = 0, o = 0, l;
    const c = [];
    this.onStart = void 0, this.onLoad = e, this.onProgress = t, this.onError = n, this.itemStart = function(h) {
      o++, r === false && i.onStart !== void 0 && i.onStart(h, a, o), r = true;
    }, this.itemEnd = function(h) {
      a++, i.onProgress !== void 0 && i.onProgress(h, a, o), a === o && (r = false, i.onLoad !== void 0 && i.onLoad());
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
const ku = new Bu();
class ri {
  constructor(e) {
    this.manager = e !== void 0 ? e : ku, this.crossOrigin = "anonymous", this.withCredentials = false, this.path = "", this.resourcePath = "", this.requestHeader = {};
  }
  load() {
  }
  loadAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.load(e, i, t, r);
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
ri.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const gn = {};
class zu extends Error {
  constructor(e, t) {
    super(e), this.response = t;
  }
}
class no extends ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = Nn.get(e);
    if (r !== void 0) return this.manager.itemStart(e), setTimeout(() => {
      t && t(r), this.manager.itemEnd(e);
    }, 0), r;
    if (gn[e] !== void 0) {
      gn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    gn[e] = [], gn[e].push({ onLoad: t, onProgress: n, onError: i });
    const a = new Request(e, { headers: new Headers(this.requestHeader), credentials: this.withCredentials ? "include" : "same-origin" }), o = this.mimeType, l = this.responseType;
    fetch(a).then((c) => {
      if (c.status === 200 || c.status === 0) {
        if (c.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."), typeof ReadableStream > "u" || c.body === void 0 || c.body.getReader === void 0) return c;
        const h = gn[e], u = c.body.getReader(), d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"), p = d ? parseInt(d) : 0, g = p !== 0;
        let _ = 0;
        const m = new ReadableStream({ start(f) {
          b();
          function b() {
            u.read().then(({ done: T, value: y }) => {
              if (T) f.close();
              else {
                _ += y.byteLength;
                const L = new ProgressEvent("progress", { lengthComputable: g, loaded: _, total: p });
                for (let w = 0, A = h.length; w < A; w++) {
                  const N = h[w];
                  N.onProgress && N.onProgress(L);
                }
                f.enqueue(y), b();
              }
            }, (T) => {
              f.error(T);
            });
          }
        } });
        return new Response(m);
      } else throw new zu(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`, c);
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
      Nn.add(e, c);
      const h = gn[e];
      delete gn[e];
      for (let u = 0, d = h.length; u < d; u++) {
        const p = h[u];
        p.onLoad && p.onLoad(c);
      }
    }).catch((c) => {
      const h = gn[e];
      if (h === void 0) throw this.manager.itemError(e), c;
      delete gn[e];
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
class Hu extends ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = Nn.get(e);
    if (a !== void 0) return r.manager.itemStart(e), setTimeout(function() {
      t && t(a), r.manager.itemEnd(e);
    }, 0), a;
    const o = cs("img");
    function l() {
      h(), Nn.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(u) {
      h(), i && i(u), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function h() {
      o.removeEventListener("load", l, false), o.removeEventListener("error", c, false);
    }
    return o.addEventListener("load", l, false), o.addEventListener("error", c, false), e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin), r.manager.itemStart(e), o.src = e, o;
  }
}
class Vu extends ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new gt(), a = new Hu(this.manager);
    return a.setCrossOrigin(this.crossOrigin), a.setPath(this.path), a.load(e, function(o) {
      r.image = o, r.needsUpdate = true, t !== void 0 && t(r);
    }, n, i), r;
  }
}
class ps extends nt {
  constructor(e, t = 1) {
    super(), this.isLight = true, this.type = "Light", this.color = new ye(e), this.intensity = t;
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
class G_ extends ps {
  constructor(e, t, n) {
    super(e, n), this.isHemisphereLight = true, this.type = "HemisphereLight", this.position.copy(nt.DEFAULT_UP), this.updateMatrix(), this.groundColor = new ye(t);
  }
  copy(e, t) {
    return super.copy(e, t), this.groundColor.copy(e.groundColor), this;
  }
}
const Nr = new Re(), al = new R(), ol = new R();
class io {
  constructor(e) {
    this.camera = e, this.intensity = 1, this.bias = 0, this.normalBias = 0, this.radius = 1, this.blurSamples = 8, this.mapSize = new be(512, 512), this.map = null, this.mapPass = null, this.matrix = new Re(), this.autoUpdate = true, this.needsUpdate = false, this._frustum = new Qa(), this._frameExtents = new be(1, 1), this._viewportCount = 1, this._viewports = [new Ye(0, 0, 1, 1)];
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera, n = this.matrix;
    al.setFromMatrixPosition(e.matrixWorld), t.position.copy(al), ol.setFromMatrixPosition(e.target.matrixWorld), t.lookAt(ol), t.updateMatrixWorld(), Nr.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse), this._frustum.setFromProjectionMatrix(Nr), n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), n.multiply(Nr);
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
class Gu extends io {
  constructor() {
    super(new bt(50, 1, 0.5, 500)), this.isSpotLightShadow = true, this.focus = 1;
  }
  updateMatrices(e) {
    const t = this.camera, n = Fi * 2 * e.angle * this.focus, i = this.mapSize.width / this.mapSize.height, r = e.distance || t.far;
    (n !== t.fov || i !== t.aspect || r !== t.far) && (t.fov = n, t.aspect = i, t.far = r, t.updateProjectionMatrix()), super.updateMatrices(e);
  }
  copy(e) {
    return super.copy(e), this.focus = e.focus, this;
  }
}
class Wu extends ps {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    super(e, t), this.isSpotLight = true, this.type = "SpotLight", this.position.copy(nt.DEFAULT_UP), this.updateMatrix(), this.target = new nt(), this.distance = n, this.angle = i, this.penumbra = r, this.decay = a, this.map = null, this.shadow = new Gu();
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
const ll = new Re(), Qi = new R(), Fr = new R();
class Xu extends io {
  constructor() {
    super(new bt(90, 1, 0.5, 500)), this.isPointLightShadow = true, this._frameExtents = new be(4, 2), this._viewportCount = 6, this._viewports = [new Ye(2, 1, 1, 1), new Ye(0, 1, 1, 1), new Ye(3, 1, 1, 1), new Ye(1, 1, 1, 1), new Ye(3, 0, 1, 1), new Ye(1, 0, 1, 1)], this._cubeDirections = [new R(1, 0, 0), new R(-1, 0, 0), new R(0, 0, 1), new R(0, 0, -1), new R(0, 1, 0), new R(0, -1, 0)], this._cubeUps = [new R(0, 1, 0), new R(0, 1, 0), new R(0, 1, 0), new R(0, 1, 0), new R(0, 0, 1), new R(0, 0, -1)];
  }
  updateMatrices(e, t = 0) {
    const n = this.camera, i = this.matrix, r = e.distance || n.far;
    r !== n.far && (n.far = r, n.updateProjectionMatrix()), Qi.setFromMatrixPosition(e.matrixWorld), n.position.copy(Qi), Fr.copy(n.position), Fr.add(this._cubeDirections[t]), n.up.copy(this._cubeUps[t]), n.lookAt(Fr), n.updateMatrixWorld(), i.makeTranslation(-Qi.x, -Qi.y, -Qi.z), ll.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse), this._frustum.setFromProjectionMatrix(ll);
  }
}
class Yu extends ps {
  constructor(e, t, n = 0, i = 2) {
    super(e, t), this.isPointLight = true, this.type = "PointLight", this.distance = n, this.decay = i, this.shadow = new Xu();
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
class so extends _c {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    super(), this.isOrthographicCamera = true, this.type = "OrthographicCamera", this.zoom = 1, this.view = null, this.left = e, this.right = t, this.top = n, this.bottom = i, this.near = r, this.far = a, this.updateProjectionMatrix();
  }
  copy(e, t) {
    return super.copy(e, t), this.left = e.left, this.right = e.right, this.top = e.top, this.bottom = e.bottom, this.near = e.near, this.far = e.far, this.zoom = e.zoom, this.view = e.view === null ? null : Object.assign({}, e.view), this;
  }
  setViewOffset(e, t, n, i, r, a) {
    this.view === null && (this.view = { enabled: true, fullWidth: 1, fullHeight: 1, offsetX: 0, offsetY: 0, width: 1, height: 1 }), this.view.enabled = true, this.view.fullWidth = e, this.view.fullHeight = t, this.view.offsetX = n, this.view.offsetY = i, this.view.width = r, this.view.height = a, this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = false), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom), t = (this.top - this.bottom) / (2 * this.zoom), n = (this.right + this.left) / 2, i = (this.top + this.bottom) / 2;
    let r = n - e, a = n + e, o = i + t, l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom, h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      r += c * this.view.offsetX, a = r + c * this.view.width, o -= h * this.view.offsetY, l = o - h * this.view.height;
    }
    this.projectionMatrix.makeOrthographic(r, a, o, l, this.near, this.far, this.coordinateSystem), this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return t.object.zoom = this.zoom, t.object.left = this.left, t.object.right = this.right, t.object.top = this.top, t.object.bottom = this.bottom, t.object.near = this.near, t.object.far = this.far, this.view !== null && (t.object.view = Object.assign({}, this.view)), t;
  }
}
class qu extends io {
  constructor() {
    super(new so(-5, 5, 5, -5, 0.5, 500)), this.isDirectionalLightShadow = true;
  }
}
class ju extends ps {
  constructor(e, t) {
    super(e, t), this.isDirectionalLight = true, this.type = "DirectionalLight", this.position.copy(nt.DEFAULT_UP), this.updateMatrix(), this.target = new nt(), this.shadow = new qu();
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return super.copy(e), this.target = e.target.clone(), this.shadow = e.shadow.clone(), this;
  }
}
class W_ extends ps {
  constructor(e, t) {
    super(e, t), this.isAmbientLight = true, this.type = "AmbientLight";
  }
}
class rs {
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
class Ku extends ri {
  constructor(e) {
    super(e), this.isImageBitmapLoader = true, typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."), typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."), this.options = { premultiplyAlpha: "none" };
  }
  setOptions(e) {
    return this.options = e, this;
  }
  load(e, t, n, i) {
    e === void 0 && (e = ""), this.path !== void 0 && (e = this.path + e), e = this.manager.resolveURL(e);
    const r = this, a = Nn.get(e);
    if (a !== void 0) {
      if (r.manager.itemStart(e), a.then) {
        a.then((c) => {
          t && t(c), r.manager.itemEnd(e);
        }).catch((c) => {
          i && i(c);
        });
        return;
      }
      return setTimeout(function() {
        t && t(a), r.manager.itemEnd(e);
      }, 0), a;
    }
    const o = {};
    o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include", o.headers = this.requestHeader;
    const l = fetch(e, o).then(function(c) {
      return c.blob();
    }).then(function(c) {
      return createImageBitmap(c, Object.assign(r.options, { colorSpaceConversion: "none" }));
    }).then(function(c) {
      return Nn.add(e, c), t && t(c), r.manager.itemEnd(e), c;
    }).catch(function(c) {
      i && i(c), Nn.remove(e), r.manager.itemError(e), r.manager.itemEnd(e);
    });
    Nn.add(e, l), r.manager.itemStart(e);
  }
}
let Hs;
class Ac {
  static getContext() {
    return Hs === void 0 && (Hs = new (window.AudioContext || window.webkitAudioContext)()), Hs;
  }
  static setContext(e) {
    Hs = e;
  }
}
class X_ extends ri {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = this, a = new no(this.manager);
    a.setResponseType("arraybuffer"), a.setPath(this.path), a.setRequestHeader(this.requestHeader), a.setWithCredentials(this.withCredentials), a.load(e, function(l) {
      try {
        const c = l.slice(0);
        Ac.getContext().decodeAudioData(c, function(u) {
          t(u);
        }).catch(o);
      } catch (c) {
        o(c);
      }
    }, n, i);
    function o(l) {
      i ? i(l) : console.error(l), r.manager.itemError(e);
    }
  }
}
class Zu extends bt {
  constructor(e = []) {
    super(), this.isArrayCamera = true, this.cameras = e;
  }
}
class $u {
  constructor(e = true) {
    this.autoStart = e, this.startTime = 0, this.oldTime = 0, this.elapsedTime = 0, this.running = false;
  }
  start() {
    this.startTime = cl(), this.oldTime = this.startTime, this.elapsedTime = 0, this.running = true;
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
      const t = cl();
      e = (t - this.oldTime) / 1e3, this.oldTime = t, this.elapsedTime += e;
    }
    return e;
  }
}
function cl() {
  return performance.now();
}
const Xn = new R(), hl = new Gt(), Ju = new R(), Yn = new R();
class Y_ extends nt {
  constructor() {
    super(), this.type = "AudioListener", this.context = Ac.getContext(), this.gain = this.context.createGain(), this.gain.connect(this.context.destination), this.filter = null, this.timeDelta = 0, this._clock = new $u();
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
    if (this.timeDelta = this._clock.getDelta(), this.matrixWorld.decompose(Xn, hl, Ju), Yn.set(0, 0, -1).applyQuaternion(hl), t.positionX) {
      const i = this.context.currentTime + this.timeDelta;
      t.positionX.linearRampToValueAtTime(Xn.x, i), t.positionY.linearRampToValueAtTime(Xn.y, i), t.positionZ.linearRampToValueAtTime(Xn.z, i), t.forwardX.linearRampToValueAtTime(Yn.x, i), t.forwardY.linearRampToValueAtTime(Yn.y, i), t.forwardZ.linearRampToValueAtTime(Yn.z, i), t.upX.linearRampToValueAtTime(n.x, i), t.upY.linearRampToValueAtTime(n.y, i), t.upZ.linearRampToValueAtTime(n.z, i);
    } else t.setPosition(Xn.x, Xn.y, Xn.z), t.setOrientation(Yn.x, Yn.y, Yn.z, n.x, n.y, n.z);
  }
}
class Qu extends nt {
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
const qn = new R(), ul = new Gt(), ed = new R(), jn = new R();
class q_ extends Qu {
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
    this.matrixWorld.decompose(qn, ul, ed), jn.set(0, 0, 1).applyQuaternion(ul);
    const t = this.panner;
    if (t.positionX) {
      const n = this.context.currentTime + this.listener.timeDelta;
      t.positionX.linearRampToValueAtTime(qn.x, n), t.positionY.linearRampToValueAtTime(qn.y, n), t.positionZ.linearRampToValueAtTime(qn.z, n), t.orientationX.linearRampToValueAtTime(jn.x, n), t.orientationY.linearRampToValueAtTime(jn.y, n), t.orientationZ.linearRampToValueAtTime(jn.z, n);
    } else t.setPosition(qn.x, qn.y, qn.z), t.setOrientation(jn.x, jn.y, jn.z);
  }
}
const ro = "\\[\\]\\.:\\/", td = new RegExp("[" + ro + "]", "g"), ao = "[^" + ro + "]", nd = "[^" + ro.replace("\\.", "") + "]", id = /((?:WC+[\/:])*)/.source.replace("WC", ao), sd = /(WCOD+)?/.source.replace("WCOD", nd), rd = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ao), ad = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ao), od = new RegExp("^" + id + sd + rd + ad + "$"), ld = ["material", "materials", "bones", "map"];
class cd {
  constructor(e, t, n) {
    const i = n || Qe.parseTrackName(t);
    this._targetGroup = e, this._bindings = e.subscribe_(t, i);
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_, i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i) n[i].setValue(e, t);
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
class Qe {
  constructor(e, t, n) {
    this.path = t, this.parsedPath = n || Qe.parseTrackName(t), this.node = Qe.findNode(e, this.parsedPath.nodeName), this.rootNode = e, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup ? new Qe.Composite(e, t, n) : new Qe(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(td, "");
  }
  static parseTrackName(e) {
    const t = od.exec(e);
    if (t === null) throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = { nodeName: t[2], objectName: t[3], objectIndex: t[4], propertyName: t[5], propertyIndex: t[6] }, i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      ld.indexOf(r) !== -1 && (n.nodeName = n.nodeName.substring(0, i), n.objectName = r);
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
      const n = function(r) {
        for (let a = 0; a < r.length; a++) {
          const o = r[a];
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
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
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
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = true;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
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
    let r = t.propertyIndex;
    if (e || (e = Qe.findNode(this.rootNode, t.nodeName), this.node = e), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !e) {
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
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
          return;
        }
        e.morphTargetDictionary[r] !== void 0 && (r = e.morphTargetDictionary[r]);
      }
      l = this.BindingType.ArrayElement, this.resolvedProperty = a, this.propertyIndex = r;
    } else a.fromArray !== void 0 && a.toArray !== void 0 ? (l = this.BindingType.HasFromToArray, this.resolvedProperty = a) : Array.isArray(a) ? (l = this.BindingType.EntireArray, this.resolvedProperty = a) : this.propertyName = i;
    this.getValue = this.GetterByBindingType[l], this.setValue = this.SetterByBindingTypeAndVersioning[l][o];
  }
  unbind() {
    this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
  }
}
Qe.Composite = cd;
Qe.prototype.BindingType = { Direct: 0, EntireArray: 1, ArrayElement: 2, HasFromToArray: 3 };
Qe.prototype.Versioning = { None: 0, NeedsUpdate: 1, MatrixWorldNeedsUpdate: 2 };
Qe.prototype.GetterByBindingType = [Qe.prototype._getValue_direct, Qe.prototype._getValue_array, Qe.prototype._getValue_arrayElement, Qe.prototype._getValue_toArray];
Qe.prototype.SetterByBindingTypeAndVersioning = [[Qe.prototype._setValue_direct, Qe.prototype._setValue_direct_setNeedsUpdate, Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Qe.prototype._setValue_array, Qe.prototype._setValue_array_setNeedsUpdate, Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Qe.prototype._setValue_arrayElement, Qe.prototype._setValue_arrayElement_setNeedsUpdate, Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Qe.prototype._setValue_fromArray, Qe.prototype._setValue_fromArray_setNeedsUpdate, Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
const dl = new Re();
class j_ {
  constructor(e, t, n = 0, i = 1 / 0) {
    this.ray = new Hi(e, t), this.near = n, this.far = i, this.camera = null, this.layers = new Za(), this.params = { Mesh: {}, Line: { threshold: 1 }, LOD: {}, Points: { threshold: 1 }, Sprite: {} };
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld), this.ray.direction.set(e.x, e.y, 0.5).unproject(t).sub(this.ray.origin).normalize(), this.camera = t) : t.isOrthographicCamera ? (this.ray.origin.set(e.x, e.y, (t.near + t.far) / (t.near - t.far)).unproject(t), this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld), this.camera = t) : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return dl.identity().extractRotation(e.matrixWorld), this.ray.origin.setFromMatrixPosition(e.matrixWorld), this.ray.direction.set(0, 0, -1).applyMatrix4(dl), this;
  }
  intersectObject(e, t = true, n = []) {
    return Fa(e, this, n, t), n.sort(fl), n;
  }
  intersectObjects(e, t = true, n = []) {
    for (let i = 0, r = e.length; i < r; i++) Fa(e[i], this, n, t);
    return n.sort(fl), n;
  }
}
function fl(s, e) {
  return s.distance - e.distance;
}
function Fa(s, e, t, n) {
  let i = true;
  if (s.layers.test(e.layers) && s.raycast(e, t) === false && (i = false), i === true && n === true) {
    const r = s.children;
    for (let a = 0, o = r.length; a < o; a++) Fa(r[a], e, t, true);
  }
}
class pl {
  constructor(e = 1, t = 0, n = 0) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  set(e, t, n) {
    return this.radius = e, this.phi = t, this.theta = n, this;
  }
  copy(e) {
    return this.radius = e.radius, this.phi = e.phi, this.theta = e.theta, this;
  }
  makeSafe() {
    return this.phi = Fe(this.phi, 1e-6, Math.PI - 1e-6), this;
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return this.radius = Math.sqrt(e * e + t * t + n * n), this.radius === 0 ? (this.theta = 0, this.phi = 0) : (this.theta = Math.atan2(e, n), this.phi = Math.acos(Fe(t / this.radius, -1, 1))), this;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const ml = new R(), Vs = new R(), gl = new R();
class K_ extends nt {
  constructor(e, t, n) {
    super(), this.light = e, this.matrix = e.matrixWorld, this.matrixAutoUpdate = false, this.color = n, this.type = "DirectionalLightHelper", t === void 0 && (t = 1);
    let i = new Wt();
    i.setAttribute("position", new tn([-t, t, 0, t, t, 0, t, -t, 0, -t, -t, 0, -t, t, 0], 3));
    const r = new eo({ fog: false, toneMapped: false });
    this.lightPlane = new hs(i, r), this.add(this.lightPlane), i = new Wt(), i.setAttribute("position", new tn([0, 0, 0, 0, 0, 1], 3)), this.targetLine = new hs(i, r), this.add(this.targetLine), this.update();
  }
  dispose() {
    this.lightPlane.geometry.dispose(), this.lightPlane.material.dispose(), this.targetLine.geometry.dispose(), this.targetLine.material.dispose();
  }
  update() {
    this.light.updateWorldMatrix(true, false), this.light.target.updateWorldMatrix(true, false), ml.setFromMatrixPosition(this.light.matrixWorld), Vs.setFromMatrixPosition(this.light.target.matrixWorld), gl.subVectors(Vs, ml), this.lightPlane.lookAt(Vs), this.color !== void 0 ? (this.lightPlane.material.color.set(this.color), this.targetLine.material.color.set(this.color)) : (this.lightPlane.material.color.copy(this.light.color), this.targetLine.material.color.copy(this.light.color)), this.targetLine.lookAt(Vs), this.targetLine.scale.z = gl.length();
  }
}
class hd extends si {
  constructor(e, t = null) {
    super(), this.object = e, this.domElement = t, this.enabled = true, this.state = -1, this.keys = {}, this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }, this.touches = { ONE: null, TWO: null };
  }
  connect() {
  }
  disconnect() {
  }
  dispose() {
  }
  update() {
  }
}
function _l(s, e, t, n) {
  const i = ud(n);
  switch (t) {
    case tc:
      return s * e;
    case ic:
      return s * e;
    case sc:
      return s * e * 2;
    case Wa:
      return s * e / i.components * i.byteLength;
    case Xa:
      return s * e / i.components * i.byteLength;
    case rc:
      return s * e * 2 / i.components * i.byteLength;
    case Ya:
      return s * e * 2 / i.components * i.byteLength;
    case nc:
      return s * e * 3 / i.components * i.byteLength;
    case Vt:
      return s * e * 4 / i.components * i.byteLength;
    case qa:
      return s * e * 4 / i.components * i.byteLength;
    case js:
    case Ks:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Zs:
    case $s:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case aa:
    case la:
      return Math.max(s, 16) * Math.max(e, 8) / 4;
    case ra:
    case oa:
      return Math.max(s, 8) * Math.max(e, 8) / 2;
    case ca:
    case ha:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case ua:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case da:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case fa:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case pa:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case ma:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case ga:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case _a:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case xa:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case va:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case Ma:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case ya:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Sa:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Ea:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Ta:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case ba:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case Js:
    case Aa:
    case wa:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case ac:
    case Ra:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case Ca:
    case Pa:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function ud(s) {
  switch (s) {
    case En:
    case Jl:
      return { byteLength: 1, components: 1 };
    case as:
    case Ql:
    case us:
      return { byteLength: 2, components: 1 };
    case Va:
    case Ga:
      return { byteLength: 2, components: 4 };
    case ii:
    case Ha:
    case Jt:
      return { byteLength: 4, components: 1 };
    case ec:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "171" } }));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "171");
/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/
function wc() {
  let s = null, e = false, t = null, n = null;
  function i(r, a) {
    t(r, a), n = s.requestAnimationFrame(i);
  }
  return { start: function() {
    e !== true && t !== null && (n = s.requestAnimationFrame(i), e = true);
  }, stop: function() {
    s.cancelAnimationFrame(n), e = false;
  }, setAnimationLoop: function(r) {
    t = r;
  }, setContext: function(r) {
    s = r;
  } };
}
function dd(s) {
  const e = /* @__PURE__ */ new WeakMap();
  function t(o, l) {
    const c = o.array, h = o.usage, u = c.byteLength, d = s.createBuffer();
    s.bindBuffer(l, d), s.bufferData(l, c, h), o.onUploadCallback();
    let p;
    if (c instanceof Float32Array) p = s.FLOAT;
    else if (c instanceof Uint16Array) o.isFloat16BufferAttribute ? p = s.HALF_FLOAT : p = s.UNSIGNED_SHORT;
    else if (c instanceof Int16Array) p = s.SHORT;
    else if (c instanceof Uint32Array) p = s.UNSIGNED_INT;
    else if (c instanceof Int32Array) p = s.INT;
    else if (c instanceof Int8Array) p = s.BYTE;
    else if (c instanceof Uint8Array) p = s.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) p = s.UNSIGNED_BYTE;
    else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + c);
    return { buffer: d, type: p, bytesPerElement: c.BYTES_PER_ELEMENT, version: o.version, size: u };
  }
  function n(o, l, c) {
    const h = l.array, u = l.updateRanges;
    if (s.bindBuffer(c, o), u.length === 0) s.bufferSubData(c, 0, h);
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
        s.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return o.isInterleavedBufferAttribute && (o = o.data), e.get(o);
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (s.deleteBuffer(l.buffer), e.delete(o));
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
  return { get: i, remove: r, update: a };
}
var fd = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`, pd = `#ifdef USE_ALPHAHASH
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
#endif`, md = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`, gd = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`, _d = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`, xd = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`, vd = `#ifdef USE_AOMAP
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
#endif`, Md = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`, yd = `#ifdef USE_BATCHING
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
#endif`, Sd = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`, Ed = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`, Td = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`, bd = `float G_BlinnPhong_Implicit( ) {
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
} // validated`, Ad = `#ifdef USE_IRIDESCENCE
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
#endif`, wd = `#ifdef USE_BUMPMAP
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
#endif`, Rd = `#if NUM_CLIPPING_PLANES > 0
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
#endif`, Cd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`, Pd = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`, Ld = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`, Dd = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`, Id = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`, Ud = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`, Nd = `#if defined( USE_COLOR_ALPHA )
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
#endif`, Fd = `#define PI 3.141592653589793
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
} // validated`, Od = `#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`, Bd = `vec3 transformedNormal = objectNormal;
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
#endif`, kd = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`, zd = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`, Hd = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`, Vd = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`, Gd = "gl_FragColor = linearToOutputTexel( gl_FragColor );", Wd = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`, Xd = `#ifdef USE_ENVMAP
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
#endif`, Yd = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`, qd = `#ifdef USE_ENVMAP
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
#endif`, jd = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`, Kd = `#ifdef USE_ENVMAP
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
#endif`, Zd = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`, $d = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`, Jd = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`, Qd = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`, ef = `#ifdef USE_GRADIENTMAP
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
}`, tf = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`, nf = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`, sf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`, rf = `uniform bool receiveShadow;
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
#endif`, af = `#ifdef USE_ENVMAP
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
#endif`, of = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`, lf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`, cf = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`, hf = `varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`, uf = `PhysicalMaterial material;
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
#endif`, df = `struct PhysicalMaterial {
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
}`, ff = `
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
#endif`, pf = `#if defined( RE_IndirectDiffuse )
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
#endif`, mf = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`, gf = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`, _f = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, xf = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`, vf = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`, Mf = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`, yf = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`, Sf = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`, Ef = `#if defined( USE_POINTS_UV )
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
#endif`, Tf = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`, bf = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`, Af = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`, wf = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`, Rf = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Cf = `#ifdef USE_MORPHTARGETS
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
#endif`, Pf = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`, Lf = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`, Df = `#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`, If = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Uf = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`, Nf = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`, Ff = `#ifdef USE_NORMALMAP
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
#endif`, Of = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`, Bf = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`, kf = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`, zf = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`, Hf = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`, Vf = `vec3 packNormalToRGB( const in vec3 normal ) {
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
}`, Gf = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`, Wf = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`, Xf = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`, Yf = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`, qf = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`, jf = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`, Kf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, Zf = `#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`, $f = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`, Jf = `float getShadowMask() {
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
}`, Qf = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`, ep = `#ifdef USE_SKINNING
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
#endif`, tp = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`, np = `#ifdef USE_SKINNING
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
#endif`, ip = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`, sp = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`, rp = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`, ap = `#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`, op = `#ifdef USE_TRANSMISSION
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
#endif`, lp = `#ifdef USE_TRANSMISSION
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
#endif`, cp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, hp = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, up = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`, dp = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const fp = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`, pp = `uniform sampler2D t2D;
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
}`, mp = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, gp = `#ifdef ENVMAP_TYPE_CUBE
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
}`, _p = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`, xp = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, vp = `#include <common>
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
}`, Mp = `#if DEPTH_PACKING == 3200
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
}`, yp = `#define DISTANCE
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
}`, Sp = `#define DISTANCE
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
}`, Ep = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`, Tp = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`, bp = `uniform float scale;
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
}`, Ap = `uniform vec3 diffuse;
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
}`, wp = `#include <common>
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
}`, Rp = `uniform vec3 diffuse;
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
}`, Cp = `#define LAMBERT
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
}`, Pp = `#define LAMBERT
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
}`, Lp = `#define MATCAP
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
}`, Dp = `#define MATCAP
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
}`, Ip = `#define NORMAL
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
}`, Up = `#define NORMAL
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
}`, Np = `#define PHONG
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
}`, Fp = `#define PHONG
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
}`, Op = `#define STANDARD
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
}`, Bp = `#define STANDARD
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
}`, kp = `#define TOON
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
}`, zp = `#define TOON
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
}`, Hp = `uniform float size;
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
}`, Vp = `uniform vec3 diffuse;
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
}`, Gp = `#include <common>
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
}`, Wp = `uniform vec3 color;
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
}`, Xp = `uniform float rotation;
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
}`, Yp = `uniform vec3 diffuse;
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
}`, Ue = { alphahash_fragment: fd, alphahash_pars_fragment: pd, alphamap_fragment: md, alphamap_pars_fragment: gd, alphatest_fragment: _d, alphatest_pars_fragment: xd, aomap_fragment: vd, aomap_pars_fragment: Md, batching_pars_vertex: yd, batching_vertex: Sd, begin_vertex: Ed, beginnormal_vertex: Td, bsdfs: bd, iridescence_fragment: Ad, bumpmap_pars_fragment: wd, clipping_planes_fragment: Rd, clipping_planes_pars_fragment: Cd, clipping_planes_pars_vertex: Pd, clipping_planes_vertex: Ld, color_fragment: Dd, color_pars_fragment: Id, color_pars_vertex: Ud, color_vertex: Nd, common: Fd, cube_uv_reflection_fragment: Od, defaultnormal_vertex: Bd, displacementmap_pars_vertex: kd, displacementmap_vertex: zd, emissivemap_fragment: Hd, emissivemap_pars_fragment: Vd, colorspace_fragment: Gd, colorspace_pars_fragment: Wd, envmap_fragment: Xd, envmap_common_pars_fragment: Yd, envmap_pars_fragment: qd, envmap_pars_vertex: jd, envmap_physical_pars_fragment: af, envmap_vertex: Kd, fog_vertex: Zd, fog_pars_vertex: $d, fog_fragment: Jd, fog_pars_fragment: Qd, gradientmap_pars_fragment: ef, lightmap_pars_fragment: tf, lights_lambert_fragment: nf, lights_lambert_pars_fragment: sf, lights_pars_begin: rf, lights_toon_fragment: of, lights_toon_pars_fragment: lf, lights_phong_fragment: cf, lights_phong_pars_fragment: hf, lights_physical_fragment: uf, lights_physical_pars_fragment: df, lights_fragment_begin: ff, lights_fragment_maps: pf, lights_fragment_end: mf, logdepthbuf_fragment: gf, logdepthbuf_pars_fragment: _f, logdepthbuf_pars_vertex: xf, logdepthbuf_vertex: vf, map_fragment: Mf, map_pars_fragment: yf, map_particle_fragment: Sf, map_particle_pars_fragment: Ef, metalnessmap_fragment: Tf, metalnessmap_pars_fragment: bf, morphinstance_vertex: Af, morphcolor_vertex: wf, morphnormal_vertex: Rf, morphtarget_pars_vertex: Cf, morphtarget_vertex: Pf, normal_fragment_begin: Lf, normal_fragment_maps: Df, normal_pars_fragment: If, normal_pars_vertex: Uf, normal_vertex: Nf, normalmap_pars_fragment: Ff, clearcoat_normal_fragment_begin: Of, clearcoat_normal_fragment_maps: Bf, clearcoat_pars_fragment: kf, iridescence_pars_fragment: zf, opaque_fragment: Hf, packing: Vf, premultiplied_alpha_fragment: Gf, project_vertex: Wf, dithering_fragment: Xf, dithering_pars_fragment: Yf, roughnessmap_fragment: qf, roughnessmap_pars_fragment: jf, shadowmap_pars_fragment: Kf, shadowmap_pars_vertex: Zf, shadowmap_vertex: $f, shadowmask_pars_fragment: Jf, skinbase_vertex: Qf, skinning_pars_vertex: ep, skinning_vertex: tp, skinnormal_vertex: np, specularmap_fragment: ip, specularmap_pars_fragment: sp, tonemapping_fragment: rp, tonemapping_pars_fragment: ap, transmission_fragment: op, transmission_pars_fragment: lp, uv_pars_fragment: cp, uv_pars_vertex: hp, uv_vertex: up, worldpos_vertex: dp, background_vert: fp, background_frag: pp, backgroundCube_vert: mp, backgroundCube_frag: gp, cube_vert: _p, cube_frag: xp, depth_vert: vp, depth_frag: Mp, distanceRGBA_vert: yp, distanceRGBA_frag: Sp, equirect_vert: Ep, equirect_frag: Tp, linedashed_vert: bp, linedashed_frag: Ap, meshbasic_vert: wp, meshbasic_frag: Rp, meshlambert_vert: Cp, meshlambert_frag: Pp, meshmatcap_vert: Lp, meshmatcap_frag: Dp, meshnormal_vert: Ip, meshnormal_frag: Up, meshphong_vert: Np, meshphong_frag: Fp, meshphysical_vert: Op, meshphysical_frag: Bp, meshtoon_vert: kp, meshtoon_frag: zp, points_vert: Hp, points_frag: Vp, shadow_vert: Gp, shadow_frag: Wp, sprite_vert: Xp, sprite_frag: Yp }, ne = { common: { diffuse: { value: new ye(16777215) }, opacity: { value: 1 }, map: { value: null }, mapTransform: { value: new De() }, alphaMap: { value: null }, alphaMapTransform: { value: new De() }, alphaTest: { value: 0 } }, specularmap: { specularMap: { value: null }, specularMapTransform: { value: new De() } }, envmap: { envMap: { value: null }, envMapRotation: { value: new De() }, flipEnvMap: { value: -1 }, reflectivity: { value: 1 }, ior: { value: 1.5 }, refractionRatio: { value: 0.98 } }, aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 }, aoMapTransform: { value: new De() } }, lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 }, lightMapTransform: { value: new De() } }, bumpmap: { bumpMap: { value: null }, bumpMapTransform: { value: new De() }, bumpScale: { value: 1 } }, normalmap: { normalMap: { value: null }, normalMapTransform: { value: new De() }, normalScale: { value: new be(1, 1) } }, displacementmap: { displacementMap: { value: null }, displacementMapTransform: { value: new De() }, displacementScale: { value: 1 }, displacementBias: { value: 0 } }, emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new De() } }, metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new De() } }, roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new De() } }, gradientmap: { gradientMap: { value: null } }, fog: { fogDensity: { value: 25e-5 }, fogNear: { value: 1 }, fogFar: { value: 2e3 }, fogColor: { value: new ye(16777215) } }, lights: { ambientLightColor: { value: [] }, lightProbe: { value: [] }, directionalLights: { value: [], properties: { direction: {}, color: {} } }, directionalLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, directionalShadowMap: { value: [] }, directionalShadowMatrix: { value: [] }, spotLights: { value: [], properties: { color: {}, position: {}, direction: {}, distance: {}, coneCos: {}, penumbraCos: {}, decay: {} } }, spotLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} } }, spotLightMap: { value: [] }, spotShadowMap: { value: [] }, spotLightMatrix: { value: [] }, pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } }, pointLightShadows: { value: [], properties: { shadowIntensity: 1, shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {}, shadowCameraNear: {}, shadowCameraFar: {} } }, pointShadowMap: { value: [] }, pointShadowMatrix: { value: [] }, hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } }, rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } }, ltc_1: { value: null }, ltc_2: { value: null } }, points: { diffuse: { value: new ye(16777215) }, opacity: { value: 1 }, size: { value: 1 }, scale: { value: 1 }, map: { value: null }, alphaMap: { value: null }, alphaMapTransform: { value: new De() }, alphaTest: { value: 0 }, uvTransform: { value: new De() } }, sprite: { diffuse: { value: new ye(16777215) }, opacity: { value: 1 }, center: { value: new be(0.5, 0.5) }, rotation: { value: 0 }, map: { value: null }, mapTransform: { value: new De() }, alphaMap: { value: null }, alphaMapTransform: { value: new De() }, alphaTest: { value: 0 } } }, sn = { basic: { uniforms: Tt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.fog]), vertexShader: Ue.meshbasic_vert, fragmentShader: Ue.meshbasic_frag }, lambert: { uniforms: Tt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, { emissive: { value: new ye(0) } }]), vertexShader: Ue.meshlambert_vert, fragmentShader: Ue.meshlambert_frag }, phong: { uniforms: Tt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, { emissive: { value: new ye(0) }, specular: { value: new ye(1118481) }, shininess: { value: 30 } }]), vertexShader: Ue.meshphong_vert, fragmentShader: Ue.meshphong_frag }, standard: { uniforms: Tt([ne.common, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.roughnessmap, ne.metalnessmap, ne.fog, ne.lights, { emissive: { value: new ye(0) }, roughness: { value: 1 }, metalness: { value: 0 }, envMapIntensity: { value: 1 } }]), vertexShader: Ue.meshphysical_vert, fragmentShader: Ue.meshphysical_frag }, toon: { uniforms: Tt([ne.common, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.gradientmap, ne.fog, ne.lights, { emissive: { value: new ye(0) } }]), vertexShader: Ue.meshtoon_vert, fragmentShader: Ue.meshtoon_frag }, matcap: { uniforms: Tt([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, { matcap: { value: null } }]), vertexShader: Ue.meshmatcap_vert, fragmentShader: Ue.meshmatcap_frag }, points: { uniforms: Tt([ne.points, ne.fog]), vertexShader: Ue.points_vert, fragmentShader: Ue.points_frag }, dashed: { uniforms: Tt([ne.common, ne.fog, { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } }]), vertexShader: Ue.linedashed_vert, fragmentShader: Ue.linedashed_frag }, depth: { uniforms: Tt([ne.common, ne.displacementmap]), vertexShader: Ue.depth_vert, fragmentShader: Ue.depth_frag }, normal: { uniforms: Tt([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, { opacity: { value: 1 } }]), vertexShader: Ue.meshnormal_vert, fragmentShader: Ue.meshnormal_frag }, sprite: { uniforms: Tt([ne.sprite, ne.fog]), vertexShader: Ue.sprite_vert, fragmentShader: Ue.sprite_frag }, background: { uniforms: { uvTransform: { value: new De() }, t2D: { value: null }, backgroundIntensity: { value: 1 } }, vertexShader: Ue.background_vert, fragmentShader: Ue.background_frag }, backgroundCube: { uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 }, backgroundBlurriness: { value: 0 }, backgroundIntensity: { value: 1 }, backgroundRotation: { value: new De() } }, vertexShader: Ue.backgroundCube_vert, fragmentShader: Ue.backgroundCube_frag }, cube: { uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } }, vertexShader: Ue.cube_vert, fragmentShader: Ue.cube_frag }, equirect: { uniforms: { tEquirect: { value: null } }, vertexShader: Ue.equirect_vert, fragmentShader: Ue.equirect_frag }, distanceRGBA: { uniforms: Tt([ne.common, ne.displacementmap, { referencePosition: { value: new R() }, nearDistance: { value: 1 }, farDistance: { value: 1e3 } }]), vertexShader: Ue.distanceRGBA_vert, fragmentShader: Ue.distanceRGBA_frag }, shadow: { uniforms: Tt([ne.lights, ne.fog, { color: { value: new ye(0) }, opacity: { value: 1 } }]), vertexShader: Ue.shadow_vert, fragmentShader: Ue.shadow_frag } };
sn.physical = { uniforms: Tt([sn.standard.uniforms, { clearcoat: { value: 0 }, clearcoatMap: { value: null }, clearcoatMapTransform: { value: new De() }, clearcoatNormalMap: { value: null }, clearcoatNormalMapTransform: { value: new De() }, clearcoatNormalScale: { value: new be(1, 1) }, clearcoatRoughness: { value: 0 }, clearcoatRoughnessMap: { value: null }, clearcoatRoughnessMapTransform: { value: new De() }, dispersion: { value: 0 }, iridescence: { value: 0 }, iridescenceMap: { value: null }, iridescenceMapTransform: { value: new De() }, iridescenceIOR: { value: 1.3 }, iridescenceThicknessMinimum: { value: 100 }, iridescenceThicknessMaximum: { value: 400 }, iridescenceThicknessMap: { value: null }, iridescenceThicknessMapTransform: { value: new De() }, sheen: { value: 0 }, sheenColor: { value: new ye(0) }, sheenColorMap: { value: null }, sheenColorMapTransform: { value: new De() }, sheenRoughness: { value: 1 }, sheenRoughnessMap: { value: null }, sheenRoughnessMapTransform: { value: new De() }, transmission: { value: 0 }, transmissionMap: { value: null }, transmissionMapTransform: { value: new De() }, transmissionSamplerSize: { value: new be() }, transmissionSamplerMap: { value: null }, thickness: { value: 0 }, thicknessMap: { value: null }, thicknessMapTransform: { value: new De() }, attenuationDistance: { value: 0 }, attenuationColor: { value: new ye(0) }, specularColor: { value: new ye(1, 1, 1) }, specularColorMap: { value: null }, specularColorMapTransform: { value: new De() }, specularIntensity: { value: 1 }, specularIntensityMap: { value: null }, specularIntensityMapTransform: { value: new De() }, anisotropyVector: { value: new be() }, anisotropyMap: { value: null }, anisotropyMapTransform: { value: new De() } }]), vertexShader: Ue.meshphysical_vert, fragmentShader: Ue.meshphysical_frag };
const Gs = { r: 0, b: 0, g: 0 }, Kn = new nn(), qp = new Re();
function jp(s, e, t, n, i, r, a) {
  const o = new ye(0);
  let l = r === true ? 0 : 1, c, h, u = null, d = 0, p = null;
  function g(T) {
    let y = T.isScene === true ? T.background : null;
    return y && y.isTexture && (y = (T.backgroundBlurriness > 0 ? t : e).get(y)), y;
  }
  function _(T) {
    let y = false;
    const L = g(T);
    L === null ? f(o, l) : L && L.isColor && (f(L, 1), y = true);
    const w = s.xr.getEnvironmentBlendMode();
    w === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : w === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a), (s.autoClear || y) && (n.buffers.depth.setTest(true), n.buffers.depth.setMask(true), n.buffers.color.setMask(true), s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil));
  }
  function m(T, y) {
    const L = g(y);
    L && (L.isCubeTexture || L.mapping === ar) ? (h === void 0 && (h = new Lt(new ds(1, 1, 1), new Tn({ name: "BackgroundCubeMaterial", uniforms: Oi(sn.backgroundCube.uniforms), vertexShader: sn.backgroundCube.vertexShader, fragmentShader: sn.backgroundCube.fragmentShader, side: Dt, depthTest: false, depthWrite: false, fog: false })), h.geometry.deleteAttribute("normal"), h.geometry.deleteAttribute("uv"), h.onBeforeRender = function(w, A, N) {
      this.matrixWorld.copyPosition(N.matrixWorld);
    }, Object.defineProperty(h.material, "envMap", { get: function() {
      return this.uniforms.envMap.value;
    } }), i.update(h)), Kn.copy(y.backgroundRotation), Kn.x *= -1, Kn.y *= -1, Kn.z *= -1, L.isCubeTexture && L.isRenderTargetTexture === false && (Kn.y *= -1, Kn.z *= -1), h.material.uniforms.envMap.value = L, h.material.uniforms.flipEnvMap.value = L.isCubeTexture && L.isRenderTargetTexture === false ? -1 : 1, h.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness, h.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, h.material.uniforms.backgroundRotation.value.setFromMatrix4(qp.makeRotationFromEuler(Kn)), h.material.toneMapped = Ve.getTransfer(L.colorSpace) !== et, (u !== L || d !== L.version || p !== s.toneMapping) && (h.material.needsUpdate = true, u = L, d = L.version, p = s.toneMapping), h.layers.enableAll(), T.unshift(h, h.geometry, h.material, 0, 0, null)) : L && L.isTexture && (c === void 0 && (c = new Lt(new or(2, 2), new Tn({ name: "BackgroundMaterial", uniforms: Oi(sn.background.uniforms), vertexShader: sn.background.vertexShader, fragmentShader: sn.background.fragmentShader, side: an, depthTest: false, depthWrite: false, fog: false })), c.geometry.deleteAttribute("normal"), Object.defineProperty(c.material, "map", { get: function() {
      return this.uniforms.t2D.value;
    } }), i.update(c)), c.material.uniforms.t2D.value = L, c.material.uniforms.backgroundIntensity.value = y.backgroundIntensity, c.material.toneMapped = Ve.getTransfer(L.colorSpace) !== et, L.matrixAutoUpdate === true && L.updateMatrix(), c.material.uniforms.uvTransform.value.copy(L.matrix), (u !== L || d !== L.version || p !== s.toneMapping) && (c.material.needsUpdate = true, u = L, d = L.version, p = s.toneMapping), c.layers.enableAll(), T.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function f(T, y) {
    T.getRGB(Gs, gc(s)), n.buffers.color.setClear(Gs.r, Gs.g, Gs.b, y, a);
  }
  function b() {
    h !== void 0 && (h.geometry.dispose(), h.material.dispose()), c !== void 0 && (c.geometry.dispose(), c.material.dispose());
  }
  return { getClearColor: function() {
    return o;
  }, setClearColor: function(T, y = 1) {
    o.set(T), l = y, f(o, l);
  }, getClearAlpha: function() {
    return l;
  }, setClearAlpha: function(T) {
    l = T, f(o, l);
  }, render: _, addToRenderList: m, dispose: b };
}
function Kp(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS), n = {}, i = d(null);
  let r = i, a = false;
  function o(M, P, G, k, W) {
    let K = false;
    const H = u(k, G, P);
    r !== H && (r = H, c(r.object)), K = p(M, k, G, W), K && g(M, k, G, W), W !== null && e.update(W, s.ELEMENT_ARRAY_BUFFER), (K || a) && (a = false, y(M, P, G, k), W !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(W).buffer));
  }
  function l() {
    return s.createVertexArray();
  }
  function c(M) {
    return s.bindVertexArray(M);
  }
  function h(M) {
    return s.deleteVertexArray(M);
  }
  function u(M, P, G) {
    const k = G.wireframe === true;
    let W = n[M.id];
    W === void 0 && (W = {}, n[M.id] = W);
    let K = W[P.id];
    K === void 0 && (K = {}, W[P.id] = K);
    let H = K[k];
    return H === void 0 && (H = d(l()), K[k] = H), H;
  }
  function d(M) {
    const P = [], G = [], k = [];
    for (let W = 0; W < t; W++) P[W] = 0, G[W] = 0, k[W] = 0;
    return { geometry: null, program: null, wireframe: false, newAttributes: P, enabledAttributes: G, attributeDivisors: k, object: M, attributes: {}, index: null };
  }
  function p(M, P, G, k) {
    const W = r.attributes, K = P.attributes;
    let H = 0;
    const Q = G.getAttributes();
    for (const z in Q) if (Q[z].location >= 0) {
      const ce = W[z];
      let _e = K[z];
      if (_e === void 0 && (z === "instanceMatrix" && M.instanceMatrix && (_e = M.instanceMatrix), z === "instanceColor" && M.instanceColor && (_e = M.instanceColor)), ce === void 0 || ce.attribute !== _e || _e && ce.data !== _e.data) return true;
      H++;
    }
    return r.attributesNum !== H || r.index !== k;
  }
  function g(M, P, G, k) {
    const W = {}, K = P.attributes;
    let H = 0;
    const Q = G.getAttributes();
    for (const z in Q) if (Q[z].location >= 0) {
      let ce = K[z];
      ce === void 0 && (z === "instanceMatrix" && M.instanceMatrix && (ce = M.instanceMatrix), z === "instanceColor" && M.instanceColor && (ce = M.instanceColor));
      const _e = {};
      _e.attribute = ce, ce && ce.data && (_e.data = ce.data), W[z] = _e, H++;
    }
    r.attributes = W, r.attributesNum = H, r.index = k;
  }
  function _() {
    const M = r.newAttributes;
    for (let P = 0, G = M.length; P < G; P++) M[P] = 0;
  }
  function m(M) {
    f(M, 0);
  }
  function f(M, P) {
    const G = r.newAttributes, k = r.enabledAttributes, W = r.attributeDivisors;
    G[M] = 1, k[M] === 0 && (s.enableVertexAttribArray(M), k[M] = 1), W[M] !== P && (s.vertexAttribDivisor(M, P), W[M] = P);
  }
  function b() {
    const M = r.newAttributes, P = r.enabledAttributes;
    for (let G = 0, k = P.length; G < k; G++) P[G] !== M[G] && (s.disableVertexAttribArray(G), P[G] = 0);
  }
  function T(M, P, G, k, W, K, H) {
    H === true ? s.vertexAttribIPointer(M, P, G, W, K) : s.vertexAttribPointer(M, P, G, k, W, K);
  }
  function y(M, P, G, k) {
    _();
    const W = k.attributes, K = G.getAttributes(), H = P.defaultAttributeValues;
    for (const Q in K) {
      const z = K[Q];
      if (z.location >= 0) {
        let te = W[Q];
        if (te === void 0 && (Q === "instanceMatrix" && M.instanceMatrix && (te = M.instanceMatrix), Q === "instanceColor" && M.instanceColor && (te = M.instanceColor)), te !== void 0) {
          const ce = te.normalized, _e = te.itemSize, Ne = e.get(te);
          if (Ne === void 0) continue;
          const je = Ne.buffer, Y = Ne.type, ee = Ne.bytesPerElement, me = Y === s.INT || Y === s.UNSIGNED_INT || te.gpuType === Ha;
          if (te.isInterleavedBufferAttribute) {
            const re = te.data, Te = re.stride, Pe = te.offset;
            if (re.isInstancedInterleavedBuffer) {
              for (let Oe = 0; Oe < z.locationSize; Oe++) f(z.location + Oe, re.meshPerAttribute);
              M.isInstancedMesh !== true && k._maxInstanceCount === void 0 && (k._maxInstanceCount = re.meshPerAttribute * re.count);
            } else for (let Oe = 0; Oe < z.locationSize; Oe++) m(z.location + Oe);
            s.bindBuffer(s.ARRAY_BUFFER, je);
            for (let Oe = 0; Oe < z.locationSize; Oe++) T(z.location + Oe, _e / z.locationSize, Y, ce, Te * ee, (Pe + _e / z.locationSize * Oe) * ee, me);
          } else {
            if (te.isInstancedBufferAttribute) {
              for (let re = 0; re < z.locationSize; re++) f(z.location + re, te.meshPerAttribute);
              M.isInstancedMesh !== true && k._maxInstanceCount === void 0 && (k._maxInstanceCount = te.meshPerAttribute * te.count);
            } else for (let re = 0; re < z.locationSize; re++) m(z.location + re);
            s.bindBuffer(s.ARRAY_BUFFER, je);
            for (let re = 0; re < z.locationSize; re++) T(z.location + re, _e / z.locationSize, Y, ce, _e * ee, _e / z.locationSize * re * ee, me);
          }
        } else if (H !== void 0) {
          const ce = H[Q];
          if (ce !== void 0) switch (ce.length) {
            case 2:
              s.vertexAttrib2fv(z.location, ce);
              break;
            case 3:
              s.vertexAttrib3fv(z.location, ce);
              break;
            case 4:
              s.vertexAttrib4fv(z.location, ce);
              break;
            default:
              s.vertexAttrib1fv(z.location, ce);
          }
        }
      }
    }
    b();
  }
  function L() {
    N();
    for (const M in n) {
      const P = n[M];
      for (const G in P) {
        const k = P[G];
        for (const W in k) h(k[W].object), delete k[W];
        delete P[G];
      }
      delete n[M];
    }
  }
  function w(M) {
    if (n[M.id] === void 0) return;
    const P = n[M.id];
    for (const G in P) {
      const k = P[G];
      for (const W in k) h(k[W].object), delete k[W];
      delete P[G];
    }
    delete n[M.id];
  }
  function A(M) {
    for (const P in n) {
      const G = n[P];
      if (G[M.id] === void 0) continue;
      const k = G[M.id];
      for (const W in k) h(k[W].object), delete k[W];
      delete G[M.id];
    }
  }
  function N() {
    S(), a = true, r !== i && (r = i, c(r.object));
  }
  function S() {
    i.geometry = null, i.program = null, i.wireframe = false;
  }
  return { setup: o, reset: N, resetDefaultState: S, dispose: L, releaseStatesOfGeometry: w, releaseStatesOfProgram: A, initAttributes: _, enableAttribute: m, disableUnusedAttributes: b };
}
function Zp(s, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    s.drawArrays(n, c, h), t.update(h, n, 1);
  }
  function a(c, h, u) {
    u !== 0 && (s.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
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
  this.setMode = i, this.render = r, this.renderInstances = a, this.renderMultiDraw = o, this.renderMultiDrawInstances = l;
}
function $p(s, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === true) {
      const A = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(A) {
    return !(A !== Vt && n.convert(A) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT));
  }
  function o(A) {
    const N = A === us && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(A !== En && n.convert(A) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) && A !== Jt && !N);
  }
  function l(A) {
    if (A === "highp") {
      if (s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision > 0) return "highp";
      A = "mediump";
    }
    return A === "mediump" && s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision > 0 && s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c && (console.warn("THREE.WebGLRenderer:", c, "not supported, using", h, "instead."), c = h);
  const u = t.logarithmicDepthBuffer === true, d = t.reverseDepthBuffer === true && e.has("EXT_clip_control"), p = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS), g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS), _ = s.getParameter(s.MAX_TEXTURE_SIZE), m = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE), f = s.getParameter(s.MAX_VERTEX_ATTRIBS), b = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS), T = s.getParameter(s.MAX_VARYING_VECTORS), y = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS), L = g > 0, w = s.getParameter(s.MAX_SAMPLES);
  return { isWebGL2: true, getMaxAnisotropy: r, getMaxPrecision: l, textureFormatReadable: a, textureTypeReadable: o, precision: c, logarithmicDepthBuffer: u, reverseDepthBuffer: d, maxTextures: p, maxVertexTextures: g, maxTextureSize: _, maxCubemapSize: m, maxAttributes: f, maxVertexUniforms: b, maxVaryings: T, maxFragmentUniforms: y, vertexTextures: L, maxSamples: w };
}
function Jp(s) {
  const e = this;
  let t = null, n = 0, i = false, r = false;
  const a = new vn(), o = new De(), l = { value: null, needsUpdate: false };
  this.uniform = l, this.numPlanes = 0, this.numIntersection = 0, this.init = function(u, d) {
    const p = u.length !== 0 || d || n !== 0 || i;
    return i = d, n = u.length, p;
  }, this.beginShadows = function() {
    r = true, h(null);
  }, this.endShadows = function() {
    r = false;
  }, this.setGlobalState = function(u, d) {
    t = h(u, d, 0);
  }, this.setState = function(u, d, p) {
    const g = u.clippingPlanes, _ = u.clipIntersection, m = u.clipShadows, f = s.get(u);
    if (!i || g === null || g.length === 0 || r && !m) r ? h(null) : c();
    else {
      const b = r ? 0 : n, T = b * 4;
      let y = f.clippingState || null;
      l.value = y, y = h(g, d, T, p);
      for (let L = 0; L !== T; ++L) y[L] = t[L];
      f.clippingState = y, this.numIntersection = _ ? this.numPlanes : 0, this.numPlanes += b;
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
        const f = p + _ * 4, b = d.matrixWorldInverse;
        o.getNormalMatrix(b), (m === null || m.length < f) && (m = new Float32Array(f));
        for (let T = 0, y = p; T !== _; ++T, y += 4) a.copy(u[T]).applyMatrix4(b, o), a.normal.toArray(m, y), m[y + 3] = a.constant;
      }
      l.value = m, l.needsUpdate = true;
    }
    return e.numPlanes = _, e.numIntersection = 0, m;
  }
}
function Qp(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(a, o) {
    return o === ia ? a.mapping = Li : o === sa && (a.mapping = Di), a;
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === ia || o === sa) if (e.has(a)) {
        const l = e.get(a).texture;
        return t(l, a.mapping);
      } else {
        const l = a.image;
        if (l && l.height > 0) {
          const c = new mu(l.height);
          return c.fromEquirectangularTexture(s, a), e.set(a, c), a.addEventListener("dispose", i), t(c.texture, a.mapping);
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
  function r() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: n, dispose: r };
}
const Ti = 4, xl = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582], ei = 20, Or = new so(), vl = new ye();
let Br = null, kr = 0, zr = 0, Hr = false;
const Jn = (1 + Math.sqrt(5)) / 2, yi = 1 / Jn, Ml = [new R(-Jn, yi, 0), new R(Jn, yi, 0), new R(-yi, 0, Jn), new R(yi, 0, Jn), new R(0, Jn, -yi), new R(0, Jn, yi), new R(-1, 1, -1), new R(1, 1, -1), new R(-1, 1, 1), new R(1, 1, 1)];
class yl {
  constructor(e) {
    this._renderer = e, this._pingPongRenderTarget = null, this._lodMax = 0, this._cubeSize = 0, this._lodPlanes = [], this._sizeLods = [], this._sigmas = [], this._blurMaterial = null, this._cubemapMaterial = null, this._equirectMaterial = null, this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    Br = this._renderer.getRenderTarget(), kr = this._renderer.getActiveCubeFace(), zr = this._renderer.getActiveMipmapLevel(), Hr = this._renderer.xr.enabled, this._renderer.xr.enabled = false, this._setSize(256);
    const r = this._allocateTargets();
    return r.depthBuffer = true, this._sceneToCubeUV(e, n, i, r), t > 0 && this._blur(r, 0, 0, t), this._applyPMREM(r), this._cleanup(r), r;
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null && (this._cubemapMaterial = Tl(), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null && (this._equirectMaterial = El(), this._compileMaterial(this._equirectMaterial));
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
    this._renderer.setRenderTarget(Br, kr, zr), this._renderer.xr.enabled = Hr, e.scissorTest = false, Ws(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Li || e.mapping === Di ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4), Br = this._renderer.getRenderTarget(), kr = this._renderer.getActiveCubeFace(), zr = this._renderer.getActiveMipmapLevel(), Hr = this._renderer.xr.enabled, this._renderer.xr.enabled = false;
    const n = t || this._allocateTargets();
    return this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112), t = 4 * this._cubeSize, n = { magFilter: Ft, minFilter: Ft, generateMipmaps: false, type: us, format: Vt, colorSpace: Rt, depthBuffer: false }, i = Sl(e, t, n);
    if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
      this._pingPongRenderTarget !== null && this._dispose(), this._pingPongRenderTarget = Sl(e, t, n);
      const { _lodMax: r } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = em(r)), this._blurMaterial = tm(r, e, t);
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Lt(this._lodPlanes[0], e);
    this._renderer.compile(t, Or);
  }
  _sceneToCubeUV(e, t, n, i) {
    const o = new bt(90, 1, t, n), l = [1, -1, 1, 1, 1, 1], c = [1, 1, 1, -1, -1, -1], h = this._renderer, u = h.autoClear, d = h.toneMapping;
    h.getClearColor(vl), h.toneMapping = On, h.autoClear = false;
    const p = new ti({ name: "PMREM.Background", side: Dt, depthWrite: false, depthTest: false }), g = new Lt(new ds(), p);
    let _ = false;
    const m = e.background;
    m ? m.isColor && (p.color.copy(m), e.background = null, _ = true) : (p.color.copy(vl), _ = true);
    for (let f = 0; f < 6; f++) {
      const b = f % 3;
      b === 0 ? (o.up.set(0, l[f], 0), o.lookAt(c[f], 0, 0)) : b === 1 ? (o.up.set(0, 0, l[f]), o.lookAt(0, c[f], 0)) : (o.up.set(0, l[f], 0), o.lookAt(0, 0, c[f]));
      const T = this._cubeSize;
      Ws(i, b * T, f > 2 ? T : 0, T, T), h.setRenderTarget(i), _ && h.render(g, o), h.render(e, o);
    }
    g.geometry.dispose(), g.material.dispose(), h.toneMapping = d, h.autoClear = u, e.background = m;
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer, i = e.mapping === Li || e.mapping === Di;
    i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Tl()), this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === false ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = El());
    const r = i ? this._cubemapMaterial : this._equirectMaterial, a = new Lt(this._lodPlanes[0], r), o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Ws(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Or);
  }
  _applyPMREM(e) {
    const t = this._renderer, n = t.autoClear;
    t.autoClear = false;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1]), o = Ml[(i - r - 1) % Ml.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, t, n, i, "latitudinal", r), this._halfBlur(a, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const l = this._renderer, c = this._blurMaterial;
    a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
    const h = 3, u = new Lt(this._lodPlanes[i], c), d = c.uniforms, p = this._sizeLods[n] - 1, g = isFinite(r) ? Math.PI / (2 * p) : 2 * Math.PI / (2 * ei - 1), _ = r / g, m = isFinite(r) ? 1 + Math.floor(h * _) : ei;
    m > ei && console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ei}`);
    const f = [];
    let b = 0;
    for (let A = 0; A < ei; ++A) {
      const N = A / _, S = Math.exp(-N * N / 2);
      f.push(S), A === 0 ? b += S : A < m && (b += 2 * S);
    }
    for (let A = 0; A < f.length; A++) f[A] = f[A] / b;
    d.envMap.value = e.texture, d.samples.value = m, d.weights.value = f, d.latitudinal.value = a === "latitudinal", o && (d.poleAxis.value = o);
    const { _lodMax: T } = this;
    d.dTheta.value = g, d.mipInt.value = T - n;
    const y = this._sizeLods[i], L = 3 * y * (i > T - Ti ? i - T + Ti : 0), w = 4 * (this._cubeSize - y);
    Ws(t, L, w, 3 * y, 2 * y), l.setRenderTarget(t), l.render(u, Or);
  }
}
function em(s) {
  const e = [], t = [], n = [];
  let i = s;
  const r = s - Ti + 1 + xl.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    a > s - Ti ? l = xl[a - s + Ti - 1] : a === 0 && (l = 0), n.push(l);
    const c = 1 / (o - 2), h = -c, u = 1 + c, d = [h, h, u, h, u, u, h, h, u, u, h, u], p = 6, g = 6, _ = 3, m = 2, f = 1, b = new Float32Array(_ * g * p), T = new Float32Array(m * g * p), y = new Float32Array(f * g * p);
    for (let w = 0; w < p; w++) {
      const A = w % 3 * 2 / 3 - 1, N = w > 2 ? 0 : -1, S = [A, N, 0, A + 2 / 3, N, 0, A + 2 / 3, N + 1, 0, A, N, 0, A + 2 / 3, N + 1, 0, A, N + 1, 0];
      b.set(S, _ * g * w), T.set(d, m * g * w);
      const M = [w, w, w, w, w, w];
      y.set(M, f * g * w);
    }
    const L = new Wt();
    L.setAttribute("position", new wt(b, _)), L.setAttribute("uv", new wt(T, m)), L.setAttribute("faceIndex", new wt(y, f)), e.push(L), i > Ti && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function Sl(s, e, t) {
  const n = new Bn(s, e, t);
  return n.texture.mapping = ar, n.texture.name = "PMREM.cubeUv", n.scissorTest = true, n;
}
function Ws(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function tm(s, e, t) {
  const n = new Float32Array(ei), i = new R(0, 1, 0);
  return new Tn({ name: "SphericalGaussianBlur", defines: { n: ei, CUBEUV_TEXEL_WIDTH: 1 / e, CUBEUV_TEXEL_HEIGHT: 1 / t, CUBEUV_MAX_MIP: `${s}.0` }, uniforms: { envMap: { value: null }, samples: { value: 1 }, weights: { value: n }, latitudinal: { value: false }, dTheta: { value: 0 }, mipInt: { value: 0 }, poleAxis: { value: i } }, vertexShader: oo(), fragmentShader: `

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
		`, blending: Fn, depthTest: false, depthWrite: false });
}
function El() {
  return new Tn({ name: "EquirectangularToCubeUV", uniforms: { envMap: { value: null } }, vertexShader: oo(), fragmentShader: `

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
		`, blending: Fn, depthTest: false, depthWrite: false });
}
function Tl() {
  return new Tn({ name: "CubemapToCubeUV", uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } }, vertexShader: oo(), fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`, blending: Fn, depthTest: false, depthWrite: false });
}
function oo() {
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
function nm(s) {
  let e = /* @__PURE__ */ new WeakMap(), t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping, c = l === ia || l === sa, h = l === Li || l === Di;
      if (c || h) {
        let u = e.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d) return t === null && (t = new yl(s)), u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), u.texture;
        if (u !== void 0) return u.texture;
        {
          const p = o.image;
          return c && p && p.height > 0 || h && p && i(p) ? (t === null && (t = new yl(s)), u = c ? t.fromEquirectangular(o) : t.fromCubemap(o), u.texture.pmremVersion = o.pmremVersion, e.set(o, u), o.addEventListener("dispose", r), u.texture) : null;
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
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    e = /* @__PURE__ */ new WeakMap(), t !== null && (t.dispose(), t = null);
  }
  return { get: n, dispose: a };
}
function im(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i = s.getExtension("WEBGL_depth_texture") || s.getExtension("MOZ_WEBGL_depth_texture") || s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i = s.getExtension("EXT_texture_filter_anisotropic") || s.getExtension("MOZ_EXT_texture_filter_anisotropic") || s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i = s.getExtension("WEBGL_compressed_texture_s3tc") || s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i = s.getExtension("WEBGL_compressed_texture_pvrtc") || s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return e[n] = i, i;
  }
  return { has: function(n) {
    return t(n) !== null;
  }, init: function() {
    t("EXT_color_buffer_float"), t("WEBGL_clip_cull_distance"), t("OES_texture_float_linear"), t("EXT_color_buffer_half_float"), t("WEBGL_multisampled_render_to_texture"), t("WEBGL_render_shared_exponent");
  }, get: function(n) {
    const i = t(n);
    return i === null && Si("THREE.WebGLRenderer: " + n + " extension not supported."), i;
  } };
}
function sm(s, e, t, n) {
  const i = {}, r = /* @__PURE__ */ new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes) e.remove(d.attributes[g]);
    d.removeEventListener("dispose", a), delete i[d.id];
    const p = r.get(d);
    p && (e.remove(p), r.delete(d)), n.releaseStatesOfGeometry(d), d.isInstancedBufferGeometry === true && delete d._maxInstanceCount, t.memory.geometries--;
  }
  function o(u, d) {
    return i[d.id] === true || (d.addEventListener("dispose", a), i[d.id] = true, t.memory.geometries++), d;
  }
  function l(u) {
    const d = u.attributes;
    for (const p in d) e.update(d[p], s.ARRAY_BUFFER);
  }
  function c(u) {
    const d = [], p = u.index, g = u.attributes.position;
    let _ = 0;
    if (p !== null) {
      const b = p.array;
      _ = p.version;
      for (let T = 0, y = b.length; T < y; T += 3) {
        const L = b[T + 0], w = b[T + 1], A = b[T + 2];
        d.push(L, w, w, A, A, L);
      }
    } else if (g !== void 0) {
      const b = g.array;
      _ = g.version;
      for (let T = 0, y = b.length / 3 - 1; T < y; T += 3) {
        const L = T + 0, w = T + 1, A = T + 2;
        d.push(L, w, w, A, A, L);
      }
    } else return;
    const m = new (hc(d) ? mc : pc)(d, 1);
    m.version = _;
    const f = r.get(u);
    f && e.remove(f), r.set(u, m);
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const p = u.index;
      p !== null && d.version < p.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function rm(s, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    r = d.type, a = d.bytesPerElement;
  }
  function l(d, p) {
    s.drawElements(n, p, r, d * a), t.update(p, n, 1);
  }
  function c(d, p, g) {
    g !== 0 && (s.drawElementsInstanced(n, p, r, d * a, g), t.update(p, n, g));
  }
  function h(d, p, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, p, 0, r, d, 0, g);
    let m = 0;
    for (let f = 0; f < g; f++) m += p[f];
    t.update(m, n, 1);
  }
  function u(d, p, g, _) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let f = 0; f < d.length; f++) c(d[f] / a, p[f], _[f]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, p, 0, r, d, 0, _, 0, g);
      let f = 0;
      for (let b = 0; b < g; b++) f += p[b] * _[b];
      t.update(f, n, 1);
    }
  }
  this.setMode = i, this.setIndex = o, this.render = l, this.renderInstances = c, this.renderMultiDraw = h, this.renderMultiDrawInstances = u;
}
function am(s) {
  const e = { geometries: 0, textures: 0 }, t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch (t.calls++, a) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
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
function om(s, e, t) {
  const n = /* @__PURE__ */ new WeakMap(), i = new Ye();
  function r(a, o, l) {
    const c = a.morphTargetInfluences, h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color, u = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let S = function() {
        A.dispose(), n.delete(o), o.removeEventListener("dispose", S);
      };
      d !== void 0 && d.texture.dispose();
      const p = o.morphAttributes.position !== void 0, g = o.morphAttributes.normal !== void 0, _ = o.morphAttributes.color !== void 0, m = o.morphAttributes.position || [], f = o.morphAttributes.normal || [], b = o.morphAttributes.color || [];
      let T = 0;
      p === true && (T = 1), g === true && (T = 2), _ === true && (T = 3);
      let y = o.attributes.position.count * T, L = 1;
      y > e.maxTextureSize && (L = Math.ceil(y / e.maxTextureSize), y = e.maxTextureSize);
      const w = new Float32Array(y * L * 4 * u), A = new dc(w, y, L, u);
      A.type = Jt, A.needsUpdate = true;
      const N = T * 4;
      for (let M = 0; M < u; M++) {
        const P = m[M], G = f[M], k = b[M], W = y * L * 4 * M;
        for (let K = 0; K < P.count; K++) {
          const H = K * N;
          p === true && (i.fromBufferAttribute(P, K), w[W + H + 0] = i.x, w[W + H + 1] = i.y, w[W + H + 2] = i.z, w[W + H + 3] = 0), g === true && (i.fromBufferAttribute(G, K), w[W + H + 4] = i.x, w[W + H + 5] = i.y, w[W + H + 6] = i.z, w[W + H + 7] = 0), _ === true && (i.fromBufferAttribute(k, K), w[W + H + 8] = i.x, w[W + H + 9] = i.y, w[W + H + 10] = i.z, w[W + H + 11] = k.itemSize === 4 ? i.w : 1);
        }
      }
      d = { count: u, texture: A, size: new be(y, L) }, n.set(o, d), o.addEventListener("dispose", S);
    }
    if (a.isInstancedMesh === true && a.morphTexture !== null) l.getUniforms().setValue(s, "morphTexture", a.morphTexture, t);
    else {
      let p = 0;
      for (let _ = 0; _ < c.length; _++) p += c[_];
      const g = o.morphTargetsRelative ? 1 : 1 - p;
      l.getUniforms().setValue(s, "morphTargetBaseInfluence", g), l.getUniforms().setValue(s, "morphTargetInfluences", c);
    }
    l.getUniforms().setValue(s, "morphTargetsTexture", d.texture, t), l.getUniforms().setValue(s, "morphTargetsTextureSize", d.size);
  }
  return { update: r };
}
function lm(s, e, t, n) {
  let i = /* @__PURE__ */ new WeakMap();
  function r(l) {
    const c = n.render.frame, h = l.geometry, u = e.get(l, h);
    if (i.get(u) !== c && (e.update(u), i.set(u, c)), l.isInstancedMesh && (l.hasEventListener("dispose", o) === false && l.addEventListener("dispose", o), i.get(l) !== c && (t.update(l.instanceMatrix, s.ARRAY_BUFFER), l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER), i.set(l, c))), l.isSkinnedMesh) {
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
  return { update: r, dispose: a };
}
const Rc = new gt(), bl = new Ec(1, 1), Cc = new dc(), Pc = new eu(), Lc = new xc(), Al = [], wl = [], Rl = new Float32Array(16), Cl = new Float32Array(9), Pl = new Float32Array(4);
function Wi(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = Al[i];
  if (r === void 0 && (r = new Float32Array(i), Al[i] = r), e !== 0) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) o += t, s[a].toArray(r, o);
  }
  return r;
}
function ft(s, e) {
  if (s.length !== e.length) return false;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return false;
  return true;
}
function pt(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function lr(s, e) {
  let t = wl[e];
  t === void 0 && (t = new Int32Array(e), wl[e] = t);
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function cm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), t[0] = e);
}
function hm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2f(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    s.uniform2fv(this.addr, e), pt(t, e);
  }
}
function um(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3f(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else if (e.r !== void 0) (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (s.uniform3f(this.addr, e.r, e.g, e.b), t[0] = e.r, t[1] = e.g, t[2] = e.b);
  else {
    if (ft(t, e)) return;
    s.uniform3fv(this.addr, e), pt(t, e);
  }
}
function dm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4f(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    s.uniform4fv(this.addr, e), pt(t, e);
  }
}
function fm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    s.uniformMatrix2fv(this.addr, false, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    Pl.set(n), s.uniformMatrix2fv(this.addr, false, Pl), pt(t, n);
  }
}
function pm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    s.uniformMatrix3fv(this.addr, false, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    Cl.set(n), s.uniformMatrix3fv(this.addr, false, Cl), pt(t, n);
  }
}
function mm(s, e) {
  const t = this.cache, n = e.elements;
  if (n === void 0) {
    if (ft(t, e)) return;
    s.uniformMatrix4fv(this.addr, false, e), pt(t, e);
  } else {
    if (ft(t, n)) return;
    Rl.set(n), s.uniformMatrix4fv(this.addr, false, Rl), pt(t, n);
  }
}
function gm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), t[0] = e);
}
function _m(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2i(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    s.uniform2iv(this.addr, e), pt(t, e);
  }
}
function xm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3i(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    s.uniform3iv(this.addr, e), pt(t, e);
  }
}
function vm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4i(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    s.uniform4iv(this.addr, e), pt(t, e);
  }
}
function Mm(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), t[0] = e);
}
function ym(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y) && (s.uniform2ui(this.addr, e.x, e.y), t[0] = e.x, t[1] = e.y);
  else {
    if (ft(t, e)) return;
    s.uniform2uiv(this.addr, e), pt(t, e);
  }
}
function Sm(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (s.uniform3ui(this.addr, e.x, e.y, e.z), t[0] = e.x, t[1] = e.y, t[2] = e.z);
  else {
    if (ft(t, e)) return;
    s.uniform3uiv(this.addr, e), pt(t, e);
  }
}
function Em(s, e) {
  const t = this.cache;
  if (e.x !== void 0) (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w), t[0] = e.x, t[1] = e.y, t[2] = e.z, t[3] = e.w);
  else {
    if (ft(t, e)) return;
    s.uniform4uiv(this.addr, e), pt(t, e);
  }
}
function Tm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i);
  let r;
  this.type === s.SAMPLER_2D_SHADOW ? (bl.compareFunction = lc, r = bl) : r = Rc, t.setTexture2D(e || r, i);
}
function bm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture3D(e || Pc, i);
}
function Am(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTextureCube(e || Lc, i);
}
function wm(s, e, t) {
  const n = this.cache, i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), n[0] = i), t.setTexture2DArray(e || Cc, i);
}
function Rm(s) {
  switch (s) {
    case 5126:
      return cm;
    case 35664:
      return hm;
    case 35665:
      return um;
    case 35666:
      return dm;
    case 35674:
      return fm;
    case 35675:
      return pm;
    case 35676:
      return mm;
    case 5124:
    case 35670:
      return gm;
    case 35667:
    case 35671:
      return _m;
    case 35668:
    case 35672:
      return xm;
    case 35669:
    case 35673:
      return vm;
    case 5125:
      return Mm;
    case 36294:
      return ym;
    case 36295:
      return Sm;
    case 36296:
      return Em;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Tm;
    case 35679:
    case 36299:
    case 36307:
      return bm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Am;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return wm;
  }
}
function Cm(s, e) {
  s.uniform1fv(this.addr, e);
}
function Pm(s, e) {
  const t = Wi(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Lm(s, e) {
  const t = Wi(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Dm(s, e) {
  const t = Wi(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Im(s, e) {
  const t = Wi(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, false, t);
}
function Um(s, e) {
  const t = Wi(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, false, t);
}
function Nm(s, e) {
  const t = Wi(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, false, t);
}
function Fm(s, e) {
  s.uniform1iv(this.addr, e);
}
function Om(s, e) {
  s.uniform2iv(this.addr, e);
}
function Bm(s, e) {
  s.uniform3iv(this.addr, e);
}
function km(s, e) {
  s.uniform4iv(this.addr, e);
}
function zm(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Hm(s, e) {
  s.uniform2uiv(this.addr, e);
}
function Vm(s, e) {
  s.uniform3uiv(this.addr, e);
}
function Gm(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Wm(s, e, t) {
  const n = this.cache, i = e.length, r = lr(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || Rc, r[a]);
}
function Xm(s, e, t) {
  const n = this.cache, i = e.length, r = lr(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || Pc, r[a]);
}
function Ym(s, e, t) {
  const n = this.cache, i = e.length, r = lr(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || Lc, r[a]);
}
function qm(s, e, t) {
  const n = this.cache, i = e.length, r = lr(t, i);
  ft(n, r) || (s.uniform1iv(this.addr, r), pt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || Cc, r[a]);
}
function jm(s) {
  switch (s) {
    case 5126:
      return Cm;
    case 35664:
      return Pm;
    case 35665:
      return Lm;
    case 35666:
      return Dm;
    case 35674:
      return Im;
    case 35675:
      return Um;
    case 35676:
      return Nm;
    case 5124:
    case 35670:
      return Fm;
    case 35667:
    case 35671:
      return Om;
    case 35668:
    case 35672:
      return Bm;
    case 35669:
    case 35673:
      return km;
    case 5125:
      return zm;
    case 36294:
      return Hm;
    case 36295:
      return Vm;
    case 36296:
      return Gm;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Wm;
    case 35679:
    case 36299:
    case 36307:
      return Xm;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Ym;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return qm;
  }
}
class Km {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.setValue = Rm(t.type);
  }
}
class Zm {
  constructor(e, t, n) {
    this.id = e, this.addr = n, this.cache = [], this.type = t.type, this.size = t.size, this.setValue = jm(t.type);
  }
}
class $m {
  constructor(e) {
    this.id = e, this.seq = [], this.map = {};
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Vr = /(\w+)(\])?(\[|\.)?/g;
function Ll(s, e) {
  s.seq.push(e), s.map[e.id] = e;
}
function Jm(s, e, t) {
  const n = s.name, i = n.length;
  for (Vr.lastIndex = 0; ; ) {
    const r = Vr.exec(n), a = Vr.lastIndex;
    let o = r[1];
    const l = r[2] === "]", c = r[3];
    if (l && (o = o | 0), c === void 0 || c === "[" && a + 2 === i) {
      Ll(t, c === void 0 ? new Km(o, s, e) : new Zm(o, s, e));
      break;
    } else {
      let u = t.map[o];
      u === void 0 && (u = new $m(o), Ll(t, u)), t = u;
    }
  }
}
class Qs {
  constructor(e, t) {
    this.seq = [], this.map = {};
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i), a = e.getUniformLocation(t, r.name);
      Jm(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r], l = n[o.id];
      l.needsUpdate !== false && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function Dl(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
const Qm = 37297;
let eg = 0;
function tg(s, e) {
  const t = s.split(`
`), n = [], i = Math.max(e - 6, 0), r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const Il = new De();
function ng(s) {
  Ve._getMatrix(Il, Ve.workingColorSpace, s);
  const e = `mat3( ${Il.elements.map((t) => t.toFixed(4))} )`;
  switch (Ve.getTransfer(s)) {
    case nr:
      return [e, "LinearTransferOETF"];
    case et:
      return [e, "sRGBTransferOETF"];
    default:
      return console.warn("THREE.WebGLProgram: Unsupported color space: ", s), [e, "LinearTransferOETF"];
  }
}
function Ul(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS), i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const a = parseInt(r[1]);
    return t.toUpperCase() + `

` + i + `

` + tg(s.getShaderSource(e), a);
  } else return i;
}
function ig(s, e) {
  const t = ng(e);
  return [`vec4 ${s}( vec4 value ) {`, `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`, "}"].join(`
`);
}
function sg(s, e) {
  let t;
  switch (e) {
    case ch:
      t = "Linear";
      break;
    case hh:
      t = "Reinhard";
      break;
    case uh:
      t = "Cineon";
      break;
    case dh:
      t = "ACESFilmic";
      break;
    case ph:
      t = "AgX";
      break;
    case mh:
      t = "Neutral";
      break;
    case fh:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e), t = "Linear";
  }
  return "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }";
}
const Xs = new R();
function rg() {
  Ve.getLuminanceCoefficients(Xs);
  const s = Xs.x.toFixed(4), e = Xs.y.toFixed(4), t = Xs.z.toFixed(4);
  return ["float luminance( const in vec3 rgb ) {", `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`, "	return dot( weights, rgb );", "}"].join(`
`);
}
function ag(s) {
  return [s.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter(ns).join(`
`);
}
function og(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== false && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function lg(s, e) {
  const t = {}, n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i), a = r.name;
    let o = 1;
    r.type === s.FLOAT_MAT2 && (o = 2), r.type === s.FLOAT_MAT3 && (o = 3), r.type === s.FLOAT_MAT4 && (o = 4), t[a] = { type: r.type, location: s.getAttribLocation(e, a), locationSize: o };
  }
  return t;
}
function ns(s) {
  return s !== "";
}
function Nl(s, e) {
  const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Fl(s, e) {
  return s.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const cg = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Oa(s) {
  return s.replace(cg, ug);
}
const hg = /* @__PURE__ */ new Map();
function ug(s, e) {
  let t = Ue[e];
  if (t === void 0) {
    const n = hg.get(e);
    if (n !== void 0) t = Ue[n], console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Oa(t);
}
const dg = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Ol(s) {
  return s.replace(dg, fg);
}
function fg(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++) i += n.replace(/\[\s*i\s*\]/g, "[ " + r + " ]").replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function Bl(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return s.precision === "highp" ? e += `
#define HIGH_PRECISION` : s.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : s.precision === "lowp" && (e += `
#define LOW_PRECISION`), e;
}
function pg(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return s.shadowMapType === Kl ? e = "SHADOWMAP_TYPE_PCF" : s.shadowMapType === Vc ? e = "SHADOWMAP_TYPE_PCF_SOFT" : s.shadowMapType === _n && (e = "SHADOWMAP_TYPE_VSM"), e;
}
function mg(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap) switch (s.envMapMode) {
    case Li:
    case Di:
      e = "ENVMAP_TYPE_CUBE";
      break;
    case ar:
      e = "ENVMAP_TYPE_CUBE_UV";
      break;
  }
  return e;
}
function gg(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap) switch (s.envMapMode) {
    case Di:
      e = "ENVMAP_MODE_REFRACTION";
      break;
  }
  return e;
}
function _g(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap) switch (s.combine) {
    case za:
      e = "ENVMAP_BLENDING_MULTIPLY";
      break;
    case oh:
      e = "ENVMAP_BLENDING_MIX";
      break;
    case lh:
      e = "ENVMAP_BLENDING_ADD";
      break;
  }
  return e;
}
function xg(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2, n = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)), texelHeight: n, maxMip: t };
}
function vg(s, e, t, n) {
  const i = s.getContext(), r = t.defines;
  let a = t.vertexShader, o = t.fragmentShader;
  const l = pg(t), c = mg(t), h = gg(t), u = _g(t), d = xg(t), p = ag(t), g = og(r), _ = i.createProgram();
  let m, f, b = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
  t.isRawShaderMaterial ? (m = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(ns).join(`
`), m.length > 0 && (m += `
`), f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter(ns).join(`
`), f.length > 0 && (f += `
`)) : (m = [Bl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.batchingColor ? "#define USE_BATCHING_COLOR" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === false ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter(ns).join(`
`), f = [Bl(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + c : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === false ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor || t.batchingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + l : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.decodeVideoTextureEmissive ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", t.reverseDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== On ? "#define TONE_MAPPING" : "", t.toneMapping !== On ? Ue.tonemapping_pars_fragment : "", t.toneMapping !== On ? sg("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ue.colorspace_pars_fragment, ig("linearToOutputTexel", t.outputColorSpace), rg(), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter(ns).join(`
`)), a = Oa(a), a = Nl(a, t), a = Fl(a, t), o = Oa(o), o = Nl(o, t), o = Fl(o, t), a = Ol(a), o = Ol(o), t.isRawShaderMaterial !== true && (b = `#version 300 es
`, m = [p, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + m, f = ["#define varying in", t.glslVersion === Ao ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === Ao ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + f);
  const T = b + m + a, y = b + f + o, L = Dl(i, i.VERTEX_SHADER, T), w = Dl(i, i.FRAGMENT_SHADER, y);
  i.attachShader(_, L), i.attachShader(_, w), t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === true && i.bindAttribLocation(_, 0, "position"), i.linkProgram(_);
  function A(P) {
    if (s.debug.checkShaderErrors) {
      const G = i.getProgramInfoLog(_).trim(), k = i.getShaderInfoLog(L).trim(), W = i.getShaderInfoLog(w).trim();
      let K = true, H = true;
      if (i.getProgramParameter(_, i.LINK_STATUS) === false) if (K = false, typeof s.debug.onShaderError == "function") s.debug.onShaderError(i, _, L, w);
      else {
        const Q = Ul(i, L, "vertex"), z = Ul(i, w, "fragment");
        console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + P.name + `
Material Type: ` + P.type + `

Program Info Log: ` + G + `
` + Q + `
` + z);
      }
      else G !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", G) : (k === "" || W === "") && (H = false);
      H && (P.diagnostics = { runnable: K, programLog: G, vertexShader: { log: k, prefix: m }, fragmentShader: { log: W, prefix: f } });
    }
    i.deleteShader(L), i.deleteShader(w), N = new Qs(i, _), S = lg(i, _);
  }
  let N;
  this.getUniforms = function() {
    return N === void 0 && A(this), N;
  };
  let S;
  this.getAttributes = function() {
    return S === void 0 && A(this), S;
  };
  let M = t.rendererExtensionParallelShaderCompile === false;
  return this.isReady = function() {
    return M === false && (M = i.getProgramParameter(_, Qm)), M;
  }, this.destroy = function() {
    n.releaseStatesOfProgram(this), i.deleteProgram(_), this.program = void 0;
  }, this.type = t.shaderType, this.name = t.shaderName, this.id = eg++, this.cacheKey = e, this.usedTimes = 1, this.program = _, this.vertexShader = L, this.fragmentShader = w, this;
}
let Mg = 0;
class yg {
  constructor() {
    this.shaderCache = /* @__PURE__ */ new Map(), this.materialCache = /* @__PURE__ */ new Map();
  }
  update(e) {
    const t = e.vertexShader, n = e.fragmentShader, i = this._getShaderStage(t), r = this._getShaderStage(n), a = this._getShaderCacheForMaterial(e);
    return a.has(i) === false && (a.add(i), i.usedTimes++), a.has(r) === false && (a.add(r), r.usedTimes++), this;
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
    return n === void 0 && (n = new Sg(e), t.set(e, n)), n;
  }
}
class Sg {
  constructor(e) {
    this.id = Mg++, this.code = e, this.usedTimes = 0;
  }
}
function Eg(s, e, t, n, i, r, a) {
  const o = new Za(), l = new yg(), c = /* @__PURE__ */ new Set(), h = [], u = i.logarithmicDepthBuffer, d = i.vertexTextures;
  let p = i.precision;
  const g = { MeshDepthMaterial: "depth", MeshDistanceMaterial: "distanceRGBA", MeshNormalMaterial: "normal", MeshBasicMaterial: "basic", MeshLambertMaterial: "lambert", MeshPhongMaterial: "phong", MeshToonMaterial: "toon", MeshStandardMaterial: "physical", MeshPhysicalMaterial: "physical", MeshMatcapMaterial: "matcap", LineBasicMaterial: "basic", LineDashedMaterial: "dashed", PointsMaterial: "points", ShadowMaterial: "shadow", SpriteMaterial: "sprite" };
  function _(S) {
    return c.add(S), S === 0 ? "uv" : `uv${S}`;
  }
  function m(S, M, P, G, k) {
    const W = G.fog, K = k.geometry, H = S.isMeshStandardMaterial ? G.environment : null, Q = (S.isMeshStandardMaterial ? t : e).get(S.envMap || H), z = Q && Q.mapping === ar ? Q.image.height : null, te = g[S.type];
    S.precision !== null && (p = i.getMaxPrecision(S.precision), p !== S.precision && console.warn("THREE.WebGLProgram.getParameters:", S.precision, "not supported, using", p, "instead."));
    const ce = K.morphAttributes.position || K.morphAttributes.normal || K.morphAttributes.color, _e = ce !== void 0 ? ce.length : 0;
    let Ne = 0;
    K.morphAttributes.position !== void 0 && (Ne = 1), K.morphAttributes.normal !== void 0 && (Ne = 2), K.morphAttributes.color !== void 0 && (Ne = 3);
    let je, Y, ee, me;
    if (te) {
      const $e = sn[te];
      je = $e.vertexShader, Y = $e.fragmentShader;
    } else je = S.vertexShader, Y = S.fragmentShader, l.update(S), ee = l.getVertexShaderID(S), me = l.getFragmentShaderID(S);
    const re = s.getRenderTarget(), Te = s.state.buffers.depth.getReversed(), Pe = k.isInstancedMesh === true, Oe = k.isBatchedMesh === true, at = !!S.map, Ge = !!S.matcap, ct = !!Q, C = !!S.aoMap, Ot = !!S.lightMap, ke = !!S.bumpMap, ze = !!S.normalMap, xe = !!S.displacementMap, st = !!S.emissiveMap, ve = !!S.metalnessMap, E = !!S.roughnessMap, x = S.anisotropy > 0, F = S.clearcoat > 0, q = S.dispersion > 0, Z = S.iridescence > 0, X = S.sheen > 0, ge = S.transmission > 0, ae = x && !!S.anisotropyMap, ue = F && !!S.clearcoatMap, We = F && !!S.clearcoatNormalMap, J = F && !!S.clearcoatRoughnessMap, de = Z && !!S.iridescenceMap, Ee = Z && !!S.iridescenceThicknessMap, Ae = X && !!S.sheenColorMap, fe = X && !!S.sheenRoughnessMap, He = !!S.specularMap, Ie = !!S.specularColorMap, it = !!S.specularIntensityMap, D = ge && !!S.transmissionMap, ie = ge && !!S.thicknessMap, V = !!S.gradientMap, j = !!S.alphaMap, le = S.alphaTest > 0, oe = !!S.alphaHash, Le = !!S.extensions;
    let ot = On;
    S.toneMapped && (re === null || re.isXRRenderTarget === true) && (ot = s.toneMapping);
    const vt = { shaderID: te, shaderType: S.type, shaderName: S.name, vertexShader: je, fragmentShader: Y, defines: S.defines, customVertexShaderID: ee, customFragmentShaderID: me, isRawShaderMaterial: S.isRawShaderMaterial === true, glslVersion: S.glslVersion, precision: p, batching: Oe, batchingColor: Oe && k._colorsTexture !== null, instancing: Pe, instancingColor: Pe && k.instanceColor !== null, instancingMorph: Pe && k.morphTexture !== null, supportsVertexTextures: d, outputColorSpace: re === null ? s.outputColorSpace : re.isXRRenderTarget === true ? re.texture.colorSpace : Rt, alphaToCoverage: !!S.alphaToCoverage, map: at, matcap: Ge, envMap: ct, envMapMode: ct && Q.mapping, envMapCubeUVHeight: z, aoMap: C, lightMap: Ot, bumpMap: ke, normalMap: ze, displacementMap: d && xe, emissiveMap: st, normalMapObjectSpace: ze && S.normalMapType === yh, normalMapTangentSpace: ze && S.normalMapType === ja, metalnessMap: ve, roughnessMap: E, anisotropy: x, anisotropyMap: ae, clearcoat: F, clearcoatMap: ue, clearcoatNormalMap: We, clearcoatRoughnessMap: J, dispersion: q, iridescence: Z, iridescenceMap: de, iridescenceThicknessMap: Ee, sheen: X, sheenColorMap: Ae, sheenRoughnessMap: fe, specularMap: He, specularColorMap: Ie, specularIntensityMap: it, transmission: ge, transmissionMap: D, thicknessMap: ie, gradientMap: V, opaque: S.transparent === false && S.blending === Ai && S.alphaToCoverage === false, alphaMap: j, alphaTest: le, alphaHash: oe, combine: S.combine, mapUv: at && _(S.map.channel), aoMapUv: C && _(S.aoMap.channel), lightMapUv: Ot && _(S.lightMap.channel), bumpMapUv: ke && _(S.bumpMap.channel), normalMapUv: ze && _(S.normalMap.channel), displacementMapUv: xe && _(S.displacementMap.channel), emissiveMapUv: st && _(S.emissiveMap.channel), metalnessMapUv: ve && _(S.metalnessMap.channel), roughnessMapUv: E && _(S.roughnessMap.channel), anisotropyMapUv: ae && _(S.anisotropyMap.channel), clearcoatMapUv: ue && _(S.clearcoatMap.channel), clearcoatNormalMapUv: We && _(S.clearcoatNormalMap.channel), clearcoatRoughnessMapUv: J && _(S.clearcoatRoughnessMap.channel), iridescenceMapUv: de && _(S.iridescenceMap.channel), iridescenceThicknessMapUv: Ee && _(S.iridescenceThicknessMap.channel), sheenColorMapUv: Ae && _(S.sheenColorMap.channel), sheenRoughnessMapUv: fe && _(S.sheenRoughnessMap.channel), specularMapUv: He && _(S.specularMap.channel), specularColorMapUv: Ie && _(S.specularColorMap.channel), specularIntensityMapUv: it && _(S.specularIntensityMap.channel), transmissionMapUv: D && _(S.transmissionMap.channel), thicknessMapUv: ie && _(S.thicknessMap.channel), alphaMapUv: j && _(S.alphaMap.channel), vertexTangents: !!K.attributes.tangent && (ze || x), vertexColors: S.vertexColors, vertexAlphas: S.vertexColors === true && !!K.attributes.color && K.attributes.color.itemSize === 4, pointsUvs: k.isPoints === true && !!K.attributes.uv && (at || j), fog: !!W, useFog: S.fog === true, fogExp2: !!W && W.isFogExp2, flatShading: S.flatShading === true, sizeAttenuation: S.sizeAttenuation === true, logarithmicDepthBuffer: u, reverseDepthBuffer: Te, skinning: k.isSkinnedMesh === true, morphTargets: K.morphAttributes.position !== void 0, morphNormals: K.morphAttributes.normal !== void 0, morphColors: K.morphAttributes.color !== void 0, morphTargetsCount: _e, morphTextureStride: Ne, numDirLights: M.directional.length, numPointLights: M.point.length, numSpotLights: M.spot.length, numSpotLightMaps: M.spotLightMap.length, numRectAreaLights: M.rectArea.length, numHemiLights: M.hemi.length, numDirLightShadows: M.directionalShadowMap.length, numPointLightShadows: M.pointShadowMap.length, numSpotLightShadows: M.spotShadowMap.length, numSpotLightShadowsWithMaps: M.numSpotLightShadowsWithMaps, numLightProbes: M.numLightProbes, numClippingPlanes: a.numPlanes, numClipIntersection: a.numIntersection, dithering: S.dithering, shadowMapEnabled: s.shadowMap.enabled && P.length > 0, shadowMapType: s.shadowMap.type, toneMapping: ot, decodeVideoTexture: at && S.map.isVideoTexture === true && Ve.getTransfer(S.map.colorSpace) === et, decodeVideoTextureEmissive: st && S.emissiveMap.isVideoTexture === true && Ve.getTransfer(S.emissiveMap.colorSpace) === et, premultipliedAlpha: S.premultipliedAlpha, doubleSided: S.side === rn, flipSided: S.side === Dt, useDepthPacking: S.depthPacking >= 0, depthPacking: S.depthPacking || 0, index0AttributeName: S.index0AttributeName, extensionClipCullDistance: Le && S.extensions.clipCullDistance === true && n.has("WEBGL_clip_cull_distance"), extensionMultiDraw: (Le && S.extensions.multiDraw === true || Oe) && n.has("WEBGL_multi_draw"), rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"), customProgramCacheKey: S.customProgramCacheKey() };
    return vt.vertexUv1s = c.has(1), vt.vertexUv2s = c.has(2), vt.vertexUv3s = c.has(3), c.clear(), vt;
  }
  function f(S) {
    const M = [];
    if (S.shaderID ? M.push(S.shaderID) : (M.push(S.customVertexShaderID), M.push(S.customFragmentShaderID)), S.defines !== void 0) for (const P in S.defines) M.push(P), M.push(S.defines[P]);
    return S.isRawShaderMaterial === false && (b(M, S), T(M, S), M.push(s.outputColorSpace)), M.push(S.customProgramCacheKey), M.join();
  }
  function b(S, M) {
    S.push(M.precision), S.push(M.outputColorSpace), S.push(M.envMapMode), S.push(M.envMapCubeUVHeight), S.push(M.mapUv), S.push(M.alphaMapUv), S.push(M.lightMapUv), S.push(M.aoMapUv), S.push(M.bumpMapUv), S.push(M.normalMapUv), S.push(M.displacementMapUv), S.push(M.emissiveMapUv), S.push(M.metalnessMapUv), S.push(M.roughnessMapUv), S.push(M.anisotropyMapUv), S.push(M.clearcoatMapUv), S.push(M.clearcoatNormalMapUv), S.push(M.clearcoatRoughnessMapUv), S.push(M.iridescenceMapUv), S.push(M.iridescenceThicknessMapUv), S.push(M.sheenColorMapUv), S.push(M.sheenRoughnessMapUv), S.push(M.specularMapUv), S.push(M.specularColorMapUv), S.push(M.specularIntensityMapUv), S.push(M.transmissionMapUv), S.push(M.thicknessMapUv), S.push(M.combine), S.push(M.fogExp2), S.push(M.sizeAttenuation), S.push(M.morphTargetsCount), S.push(M.morphAttributeCount), S.push(M.numDirLights), S.push(M.numPointLights), S.push(M.numSpotLights), S.push(M.numSpotLightMaps), S.push(M.numHemiLights), S.push(M.numRectAreaLights), S.push(M.numDirLightShadows), S.push(M.numPointLightShadows), S.push(M.numSpotLightShadows), S.push(M.numSpotLightShadowsWithMaps), S.push(M.numLightProbes), S.push(M.shadowMapType), S.push(M.toneMapping), S.push(M.numClippingPlanes), S.push(M.numClipIntersection), S.push(M.depthPacking);
  }
  function T(S, M) {
    o.disableAll(), M.supportsVertexTextures && o.enable(0), M.instancing && o.enable(1), M.instancingColor && o.enable(2), M.instancingMorph && o.enable(3), M.matcap && o.enable(4), M.envMap && o.enable(5), M.normalMapObjectSpace && o.enable(6), M.normalMapTangentSpace && o.enable(7), M.clearcoat && o.enable(8), M.iridescence && o.enable(9), M.alphaTest && o.enable(10), M.vertexColors && o.enable(11), M.vertexAlphas && o.enable(12), M.vertexUv1s && o.enable(13), M.vertexUv2s && o.enable(14), M.vertexUv3s && o.enable(15), M.vertexTangents && o.enable(16), M.anisotropy && o.enable(17), M.alphaHash && o.enable(18), M.batching && o.enable(19), M.dispersion && o.enable(20), M.batchingColor && o.enable(21), S.push(o.mask), o.disableAll(), M.fog && o.enable(0), M.useFog && o.enable(1), M.flatShading && o.enable(2), M.logarithmicDepthBuffer && o.enable(3), M.reverseDepthBuffer && o.enable(4), M.skinning && o.enable(5), M.morphTargets && o.enable(6), M.morphNormals && o.enable(7), M.morphColors && o.enable(8), M.premultipliedAlpha && o.enable(9), M.shadowMapEnabled && o.enable(10), M.doubleSided && o.enable(11), M.flipSided && o.enable(12), M.useDepthPacking && o.enable(13), M.dithering && o.enable(14), M.transmission && o.enable(15), M.sheen && o.enable(16), M.opaque && o.enable(17), M.pointsUvs && o.enable(18), M.decodeVideoTexture && o.enable(19), M.decodeVideoTextureEmissive && o.enable(20), M.alphaToCoverage && o.enable(21), S.push(o.mask);
  }
  function y(S) {
    const M = g[S.type];
    let P;
    if (M) {
      const G = sn[M];
      P = Ia.clone(G.uniforms);
    } else P = S.uniforms;
    return P;
  }
  function L(S, M) {
    let P;
    for (let G = 0, k = h.length; G < k; G++) {
      const W = h[G];
      if (W.cacheKey === M) {
        P = W, ++P.usedTimes;
        break;
      }
    }
    return P === void 0 && (P = new vg(s, M, S, r), h.push(P)), P;
  }
  function w(S) {
    if (--S.usedTimes === 0) {
      const M = h.indexOf(S);
      h[M] = h[h.length - 1], h.pop(), S.destroy();
    }
  }
  function A(S) {
    l.remove(S);
  }
  function N() {
    l.dispose();
  }
  return { getParameters: m, getProgramCacheKey: f, getUniforms: y, acquireProgram: L, releaseProgram: w, releaseShaderCache: A, programs: h, dispose: N };
}
function Tg() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(a) {
    return s.has(a);
  }
  function t(a) {
    let o = s.get(a);
    return o === void 0 && (o = {}, s.set(a, o)), o;
  }
  function n(a) {
    s.delete(a);
  }
  function i(a, o, l) {
    s.get(a)[o] = l;
  }
  function r() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return { has: e, get: t, remove: n, update: i, dispose: r };
}
function bg(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.material.id !== e.material.id ? s.material.id - e.material.id : s.z !== e.z ? s.z - e.z : s.id - e.id;
}
function kl(s, e) {
  return s.groupOrder !== e.groupOrder ? s.groupOrder - e.groupOrder : s.renderOrder !== e.renderOrder ? s.renderOrder - e.renderOrder : s.z !== e.z ? e.z - s.z : s.id - e.id;
}
function zl() {
  const s = [];
  let e = 0;
  const t = [], n = [], i = [];
  function r() {
    e = 0, t.length = 0, n.length = 0, i.length = 0;
  }
  function a(u, d, p, g, _, m) {
    let f = s[e];
    return f === void 0 ? (f = { id: u.id, object: u, geometry: d, material: p, groupOrder: g, renderOrder: u.renderOrder, z: _, group: m }, s[e] = f) : (f.id = u.id, f.object = u, f.geometry = d, f.material = p, f.groupOrder = g, f.renderOrder = u.renderOrder, f.z = _, f.group = m), e++, f;
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
    t.length > 1 && t.sort(u || bg), n.length > 1 && n.sort(d || kl), i.length > 1 && i.sort(d || kl);
  }
  function h() {
    for (let u = e, d = s.length; u < d; u++) {
      const p = s[u];
      if (p.id === null) break;
      p.id = null, p.object = null, p.geometry = null, p.material = null, p.group = null;
    }
  }
  return { opaque: t, transmissive: n, transparent: i, init: r, push: o, unshift: l, finish: h, sort: c };
}
function Ag() {
  let s = /* @__PURE__ */ new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return r === void 0 ? (a = new zl(), s.set(n, [a])) : i >= r.length ? (a = new zl(), r.push(a)) : a = r[i], a;
  }
  function t() {
    s = /* @__PURE__ */ new WeakMap();
  }
  return { get: e, dispose: t };
}
function wg() {
  const s = {};
  return { get: function(e) {
    if (s[e.id] !== void 0) return s[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { direction: new R(), color: new ye() };
        break;
      case "SpotLight":
        t = { position: new R(), direction: new R(), color: new ye(), distance: 0, coneCos: 0, penumbraCos: 0, decay: 0 };
        break;
      case "PointLight":
        t = { position: new R(), color: new ye(), distance: 0, decay: 0 };
        break;
      case "HemisphereLight":
        t = { direction: new R(), skyColor: new ye(), groundColor: new ye() };
        break;
      case "RectAreaLight":
        t = { color: new ye(), position: new R(), halfWidth: new R(), halfHeight: new R() };
        break;
    }
    return s[e.id] = t, t;
  } };
}
function Rg() {
  const s = {};
  return { get: function(e) {
    if (s[e.id] !== void 0) return s[e.id];
    let t;
    switch (e.type) {
      case "DirectionalLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new be() };
        break;
      case "SpotLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new be() };
        break;
      case "PointLight":
        t = { shadowIntensity: 1, shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new be(), shadowCameraNear: 1, shadowCameraFar: 1e3 };
        break;
    }
    return s[e.id] = t, t;
  } };
}
let Cg = 0;
function Pg(s, e) {
  return (e.castShadow ? 2 : 0) - (s.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (s.map ? 1 : 0);
}
function Lg(s) {
  const e = new wg(), t = Rg(), n = { version: 0, hash: { directionalLength: -1, pointLength: -1, spotLength: -1, rectAreaLength: -1, hemiLength: -1, numDirectionalShadows: -1, numPointShadows: -1, numSpotShadows: -1, numSpotMaps: -1, numLightProbes: -1 }, ambient: [0, 0, 0], probe: [], directional: [], directionalShadow: [], directionalShadowMap: [], directionalShadowMatrix: [], spot: [], spotLightMap: [], spotShadow: [], spotShadowMap: [], spotLightMatrix: [], rectArea: [], rectAreaLTC1: null, rectAreaLTC2: null, point: [], pointShadow: [], pointShadowMap: [], pointShadowMatrix: [], hemi: [], numSpotLightShadowsWithMaps: 0, numLightProbes: 0 };
  for (let c = 0; c < 9; c++) n.probe.push(new R());
  const i = new R(), r = new Re(), a = new Re();
  function o(c) {
    let h = 0, u = 0, d = 0;
    for (let S = 0; S < 9; S++) n.probe[S].set(0, 0, 0);
    let p = 0, g = 0, _ = 0, m = 0, f = 0, b = 0, T = 0, y = 0, L = 0, w = 0, A = 0;
    c.sort(Pg);
    for (let S = 0, M = c.length; S < M; S++) {
      const P = c[S], G = P.color, k = P.intensity, W = P.distance, K = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight) h += G.r * k, u += G.g * k, d += G.b * k;
      else if (P.isLightProbe) {
        for (let H = 0; H < 9; H++) n.probe[H].addScaledVector(P.sh.coefficients[H], k);
        A++;
      } else if (P.isDirectionalLight) {
        const H = e.get(P);
        if (H.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow) {
          const Q = P.shadow, z = t.get(P);
          z.shadowIntensity = Q.intensity, z.shadowBias = Q.bias, z.shadowNormalBias = Q.normalBias, z.shadowRadius = Q.radius, z.shadowMapSize = Q.mapSize, n.directionalShadow[p] = z, n.directionalShadowMap[p] = K, n.directionalShadowMatrix[p] = P.shadow.matrix, b++;
        }
        n.directional[p] = H, p++;
      } else if (P.isSpotLight) {
        const H = e.get(P);
        H.position.setFromMatrixPosition(P.matrixWorld), H.color.copy(G).multiplyScalar(k), H.distance = W, H.coneCos = Math.cos(P.angle), H.penumbraCos = Math.cos(P.angle * (1 - P.penumbra)), H.decay = P.decay, n.spot[_] = H;
        const Q = P.shadow;
        if (P.map && (n.spotLightMap[L] = P.map, L++, Q.updateMatrices(P), P.castShadow && w++), n.spotLightMatrix[_] = Q.matrix, P.castShadow) {
          const z = t.get(P);
          z.shadowIntensity = Q.intensity, z.shadowBias = Q.bias, z.shadowNormalBias = Q.normalBias, z.shadowRadius = Q.radius, z.shadowMapSize = Q.mapSize, n.spotShadow[_] = z, n.spotShadowMap[_] = K, y++;
        }
        _++;
      } else if (P.isRectAreaLight) {
        const H = e.get(P);
        H.color.copy(G).multiplyScalar(k), H.halfWidth.set(P.width * 0.5, 0, 0), H.halfHeight.set(0, P.height * 0.5, 0), n.rectArea[m] = H, m++;
      } else if (P.isPointLight) {
        const H = e.get(P);
        if (H.color.copy(P.color).multiplyScalar(P.intensity), H.distance = P.distance, H.decay = P.decay, P.castShadow) {
          const Q = P.shadow, z = t.get(P);
          z.shadowIntensity = Q.intensity, z.shadowBias = Q.bias, z.shadowNormalBias = Q.normalBias, z.shadowRadius = Q.radius, z.shadowMapSize = Q.mapSize, z.shadowCameraNear = Q.camera.near, z.shadowCameraFar = Q.camera.far, n.pointShadow[g] = z, n.pointShadowMap[g] = K, n.pointShadowMatrix[g] = P.shadow.matrix, T++;
        }
        n.point[g] = H, g++;
      } else if (P.isHemisphereLight) {
        const H = e.get(P);
        H.skyColor.copy(P.color).multiplyScalar(k), H.groundColor.copy(P.groundColor).multiplyScalar(k), n.hemi[f] = H, f++;
      }
    }
    m > 0 && (s.has("OES_texture_float_linear") === true ? (n.rectAreaLTC1 = ne.LTC_FLOAT_1, n.rectAreaLTC2 = ne.LTC_FLOAT_2) : (n.rectAreaLTC1 = ne.LTC_HALF_1, n.rectAreaLTC2 = ne.LTC_HALF_2)), n.ambient[0] = h, n.ambient[1] = u, n.ambient[2] = d;
    const N = n.hash;
    (N.directionalLength !== p || N.pointLength !== g || N.spotLength !== _ || N.rectAreaLength !== m || N.hemiLength !== f || N.numDirectionalShadows !== b || N.numPointShadows !== T || N.numSpotShadows !== y || N.numSpotMaps !== L || N.numLightProbes !== A) && (n.directional.length = p, n.spot.length = _, n.rectArea.length = m, n.point.length = g, n.hemi.length = f, n.directionalShadow.length = b, n.directionalShadowMap.length = b, n.pointShadow.length = T, n.pointShadowMap.length = T, n.spotShadow.length = y, n.spotShadowMap.length = y, n.directionalShadowMatrix.length = b, n.pointShadowMatrix.length = T, n.spotLightMatrix.length = y + L - w, n.spotLightMap.length = L, n.numSpotLightShadowsWithMaps = w, n.numLightProbes = A, N.directionalLength = p, N.pointLength = g, N.spotLength = _, N.rectAreaLength = m, N.hemiLength = f, N.numDirectionalShadows = b, N.numPointShadows = T, N.numSpotShadows = y, N.numSpotMaps = L, N.numLightProbes = A, n.version = Cg++);
  }
  function l(c, h) {
    let u = 0, d = 0, p = 0, g = 0, _ = 0;
    const m = h.matrixWorldInverse;
    for (let f = 0, b = c.length; f < b; f++) {
      const T = c[f];
      if (T.isDirectionalLight) {
        const y = n.directional[u];
        y.direction.setFromMatrixPosition(T.matrixWorld), i.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(m), u++;
      } else if (T.isSpotLight) {
        const y = n.spot[p];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), y.direction.setFromMatrixPosition(T.matrixWorld), i.setFromMatrixPosition(T.target.matrixWorld), y.direction.sub(i), y.direction.transformDirection(m), p++;
      } else if (T.isRectAreaLight) {
        const y = n.rectArea[g];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), a.identity(), r.copy(T.matrixWorld), r.premultiply(m), a.extractRotation(r), y.halfWidth.set(T.width * 0.5, 0, 0), y.halfHeight.set(0, T.height * 0.5, 0), y.halfWidth.applyMatrix4(a), y.halfHeight.applyMatrix4(a), g++;
      } else if (T.isPointLight) {
        const y = n.point[d];
        y.position.setFromMatrixPosition(T.matrixWorld), y.position.applyMatrix4(m), d++;
      } else if (T.isHemisphereLight) {
        const y = n.hemi[_];
        y.direction.setFromMatrixPosition(T.matrixWorld), y.direction.transformDirection(m), _++;
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function Hl(s) {
  const e = new Lg(s), t = [], n = [];
  function i(h) {
    c.camera = h, t.length = 0, n.length = 0;
  }
  function r(h) {
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
  return { init: i, state: c, setupLights: o, setupLightsView: l, pushLight: r, pushShadow: a };
}
function Dg(s) {
  let e = /* @__PURE__ */ new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return a === void 0 ? (o = new Hl(s), e.set(i, [o])) : r >= a.length ? (o = new Hl(s), a.push(o)) : o = a[r], o;
  }
  function n() {
    e = /* @__PURE__ */ new WeakMap();
  }
  return { get: t, dispose: n };
}
const Ig = `void main() {
	gl_Position = vec4( position, 1.0 );
}`, Ug = `uniform sampler2D shadow_pass;
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
function Ng(s, e, t) {
  let n = new Qa();
  const i = new be(), r = new be(), a = new Ye(), o = new wu({ depthPacking: Mh }), l = new Ru(), c = {}, h = t.maxTextureSize, u = { [an]: Dt, [Dt]: an, [rn]: rn }, d = new Tn({ defines: { VSM_SAMPLES: 8 }, uniforms: { shadow_pass: { value: null }, resolution: { value: new be() }, radius: { value: 4 } }, vertexShader: Ig, fragmentShader: Ug }), p = d.clone();
  p.defines.HORIZONTAL_PASS = 1;
  const g = new Wt();
  g.setAttribute("position", new wt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const _ = new Lt(g, d), m = this;
  this.enabled = false, this.autoUpdate = true, this.needsUpdate = false, this.type = Kl;
  let f = this.type;
  this.render = function(w, A, N) {
    if (m.enabled === false || m.autoUpdate === false && m.needsUpdate === false || w.length === 0) return;
    const S = s.getRenderTarget(), M = s.getActiveCubeFace(), P = s.getActiveMipmapLevel(), G = s.state;
    G.setBlending(Fn), G.buffers.color.setClear(1, 1, 1, 1), G.buffers.depth.setTest(true), G.setScissorTest(false);
    const k = f !== _n && this.type === _n, W = f === _n && this.type !== _n;
    for (let K = 0, H = w.length; K < H; K++) {
      const Q = w[K], z = Q.shadow;
      if (z === void 0) {
        console.warn("THREE.WebGLShadowMap:", Q, "has no shadow.");
        continue;
      }
      if (z.autoUpdate === false && z.needsUpdate === false) continue;
      i.copy(z.mapSize);
      const te = z.getFrameExtents();
      if (i.multiply(te), r.copy(z.mapSize), (i.x > h || i.y > h) && (i.x > h && (r.x = Math.floor(h / te.x), i.x = r.x * te.x, z.mapSize.x = r.x), i.y > h && (r.y = Math.floor(h / te.y), i.y = r.y * te.y, z.mapSize.y = r.y)), z.map === null || k === true || W === true) {
        const _e = this.type !== _n ? { minFilter: At, magFilter: At } : {};
        z.map !== null && z.map.dispose(), z.map = new Bn(i.x, i.y, _e), z.map.texture.name = Q.name + ".shadowMap", z.camera.updateProjectionMatrix();
      }
      s.setRenderTarget(z.map), s.clear();
      const ce = z.getViewportCount();
      for (let _e = 0; _e < ce; _e++) {
        const Ne = z.getViewport(_e);
        a.set(r.x * Ne.x, r.y * Ne.y, r.x * Ne.z, r.y * Ne.w), G.viewport(a), z.updateMatrices(Q, _e), n = z.getFrustum(), y(A, N, z.camera, Q, this.type);
      }
      z.isPointLightShadow !== true && this.type === _n && b(z, N), z.needsUpdate = false;
    }
    f = this.type, m.needsUpdate = false, s.setRenderTarget(S, M, P);
  };
  function b(w, A) {
    const N = e.update(_);
    d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples, p.defines.VSM_SAMPLES = w.blurSamples, d.needsUpdate = true, p.needsUpdate = true), w.mapPass === null && (w.mapPass = new Bn(i.x, i.y)), d.uniforms.shadow_pass.value = w.map.texture, d.uniforms.resolution.value = w.mapSize, d.uniforms.radius.value = w.radius, s.setRenderTarget(w.mapPass), s.clear(), s.renderBufferDirect(A, null, N, d, _, null), p.uniforms.shadow_pass.value = w.mapPass.texture, p.uniforms.resolution.value = w.mapSize, p.uniforms.radius.value = w.radius, s.setRenderTarget(w.map), s.clear(), s.renderBufferDirect(A, null, N, p, _, null);
  }
  function T(w, A, N, S) {
    let M = null;
    const P = N.isPointLight === true ? w.customDistanceMaterial : w.customDepthMaterial;
    if (P !== void 0) M = P;
    else if (M = N.isPointLight === true ? l : o, s.localClippingEnabled && A.clipShadows === true && Array.isArray(A.clippingPlanes) && A.clippingPlanes.length !== 0 || A.displacementMap && A.displacementScale !== 0 || A.alphaMap && A.alphaTest > 0 || A.map && A.alphaTest > 0) {
      const G = M.uuid, k = A.uuid;
      let W = c[G];
      W === void 0 && (W = {}, c[G] = W);
      let K = W[k];
      K === void 0 && (K = M.clone(), W[k] = K, A.addEventListener("dispose", L)), M = K;
    }
    if (M.visible = A.visible, M.wireframe = A.wireframe, S === _n ? M.side = A.shadowSide !== null ? A.shadowSide : A.side : M.side = A.shadowSide !== null ? A.shadowSide : u[A.side], M.alphaMap = A.alphaMap, M.alphaTest = A.alphaTest, M.map = A.map, M.clipShadows = A.clipShadows, M.clippingPlanes = A.clippingPlanes, M.clipIntersection = A.clipIntersection, M.displacementMap = A.displacementMap, M.displacementScale = A.displacementScale, M.displacementBias = A.displacementBias, M.wireframeLinewidth = A.wireframeLinewidth, M.linewidth = A.linewidth, N.isPointLight === true && M.isMeshDistanceMaterial === true) {
      const G = s.properties.get(M);
      G.light = N;
    }
    return M;
  }
  function y(w, A, N, S, M) {
    if (w.visible === false) return;
    if (w.layers.test(A.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && M === _n) && (!w.frustumCulled || n.intersectsObject(w))) {
      w.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse, w.matrixWorld);
      const k = e.update(w), W = w.material;
      if (Array.isArray(W)) {
        const K = k.groups;
        for (let H = 0, Q = K.length; H < Q; H++) {
          const z = K[H], te = W[z.materialIndex];
          if (te && te.visible) {
            const ce = T(w, te, S, M);
            w.onBeforeShadow(s, w, A, N, k, ce, z), s.renderBufferDirect(N, null, k, ce, w, z), w.onAfterShadow(s, w, A, N, k, ce, z);
          }
        }
      } else if (W.visible) {
        const K = T(w, W, S, M);
        w.onBeforeShadow(s, w, A, N, k, K, null), s.renderBufferDirect(N, null, k, K, w, null), w.onAfterShadow(s, w, A, N, k, K, null);
      }
    }
    const G = w.children;
    for (let k = 0, W = G.length; k < W; k++) y(G[k], A, N, S, M);
  }
  function L(w) {
    w.target.removeEventListener("dispose", L);
    for (const N in c) {
      const S = c[N], M = w.target.uuid;
      M in S && (S[M].dispose(), delete S[M]);
    }
  }
}
const Fg = { [Zr]: $r, [Jr]: ta, [Qr]: na, [Pi]: ea, [$r]: Zr, [ta]: Jr, [na]: Qr, [ea]: Pi };
function Og(s, e) {
  function t() {
    let D = false;
    const ie = new Ye();
    let V = null;
    const j = new Ye(0, 0, 0, 0);
    return { setMask: function(le) {
      V !== le && !D && (s.colorMask(le, le, le, le), V = le);
    }, setLocked: function(le) {
      D = le;
    }, setClear: function(le, oe, Le, ot, vt) {
      vt === true && (le *= ot, oe *= ot, Le *= ot), ie.set(le, oe, Le, ot), j.equals(ie) === false && (s.clearColor(le, oe, Le, ot), j.copy(ie));
    }, reset: function() {
      D = false, V = null, j.set(-1, 0, 0, 0);
    } };
  }
  function n() {
    let D = false, ie = false, V = null, j = null, le = null;
    return { setReversed: function(oe) {
      if (ie !== oe) {
        const Le = e.get("EXT_clip_control");
        ie ? Le.clipControlEXT(Le.LOWER_LEFT_EXT, Le.ZERO_TO_ONE_EXT) : Le.clipControlEXT(Le.LOWER_LEFT_EXT, Le.NEGATIVE_ONE_TO_ONE_EXT);
        const ot = le;
        le = null, this.setClear(ot);
      }
      ie = oe;
    }, getReversed: function() {
      return ie;
    }, setTest: function(oe) {
      oe ? re(s.DEPTH_TEST) : Te(s.DEPTH_TEST);
    }, setMask: function(oe) {
      V !== oe && !D && (s.depthMask(oe), V = oe);
    }, setFunc: function(oe) {
      if (ie && (oe = Fg[oe]), j !== oe) {
        switch (oe) {
          case Zr:
            s.depthFunc(s.NEVER);
            break;
          case $r:
            s.depthFunc(s.ALWAYS);
            break;
          case Jr:
            s.depthFunc(s.LESS);
            break;
          case Pi:
            s.depthFunc(s.LEQUAL);
            break;
          case Qr:
            s.depthFunc(s.EQUAL);
            break;
          case ea:
            s.depthFunc(s.GEQUAL);
            break;
          case ta:
            s.depthFunc(s.GREATER);
            break;
          case na:
            s.depthFunc(s.NOTEQUAL);
            break;
          default:
            s.depthFunc(s.LEQUAL);
        }
        j = oe;
      }
    }, setLocked: function(oe) {
      D = oe;
    }, setClear: function(oe) {
      le !== oe && (ie && (oe = 1 - oe), s.clearDepth(oe), le = oe);
    }, reset: function() {
      D = false, V = null, j = null, le = null, ie = false;
    } };
  }
  function i() {
    let D = false, ie = null, V = null, j = null, le = null, oe = null, Le = null, ot = null, vt = null;
    return { setTest: function($e) {
      D || ($e ? re(s.STENCIL_TEST) : Te(s.STENCIL_TEST));
    }, setMask: function($e) {
      ie !== $e && !D && (s.stencilMask($e), ie = $e);
    }, setFunc: function($e, Xt, hn) {
      (V !== $e || j !== Xt || le !== hn) && (s.stencilFunc($e, Xt, hn), V = $e, j = Xt, le = hn);
    }, setOp: function($e, Xt, hn) {
      (oe !== $e || Le !== Xt || ot !== hn) && (s.stencilOp($e, Xt, hn), oe = $e, Le = Xt, ot = hn);
    }, setLocked: function($e) {
      D = $e;
    }, setClear: function($e) {
      vt !== $e && (s.clearStencil($e), vt = $e);
    }, reset: function() {
      D = false, ie = null, V = null, j = null, le = null, oe = null, Le = null, ot = null, vt = null;
    } };
  }
  const r = new t(), a = new n(), o = new i(), l = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakMap();
  let h = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, _ = false, m = null, f = null, b = null, T = null, y = null, L = null, w = null, A = new ye(0, 0, 0), N = 0, S = false, M = null, P = null, G = null, k = null, W = null;
  const K = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let H = false, Q = 0;
  const z = s.getParameter(s.VERSION);
  z.indexOf("WebGL") !== -1 ? (Q = parseFloat(/^WebGL (\d)/.exec(z)[1]), H = Q >= 1) : z.indexOf("OpenGL ES") !== -1 && (Q = parseFloat(/^OpenGL ES (\d)/.exec(z)[1]), H = Q >= 2);
  let te = null, ce = {};
  const _e = s.getParameter(s.SCISSOR_BOX), Ne = s.getParameter(s.VIEWPORT), je = new Ye().fromArray(_e), Y = new Ye().fromArray(Ne);
  function ee(D, ie, V, j) {
    const le = new Uint8Array(4), oe = s.createTexture();
    s.bindTexture(D, oe), s.texParameteri(D, s.TEXTURE_MIN_FILTER, s.NEAREST), s.texParameteri(D, s.TEXTURE_MAG_FILTER, s.NEAREST);
    for (let Le = 0; Le < V; Le++) D === s.TEXTURE_3D || D === s.TEXTURE_2D_ARRAY ? s.texImage3D(ie, 0, s.RGBA, 1, 1, j, 0, s.RGBA, s.UNSIGNED_BYTE, le) : s.texImage2D(ie + Le, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, le);
    return oe;
  }
  const me = {};
  me[s.TEXTURE_2D] = ee(s.TEXTURE_2D, s.TEXTURE_2D, 1), me[s.TEXTURE_CUBE_MAP] = ee(s.TEXTURE_CUBE_MAP, s.TEXTURE_CUBE_MAP_POSITIVE_X, 6), me[s.TEXTURE_2D_ARRAY] = ee(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1), me[s.TEXTURE_3D] = ee(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1), r.setClear(0, 0, 0, 1), a.setClear(1), o.setClear(0), re(s.DEPTH_TEST), a.setFunc(Pi), ke(false), ze(_o), re(s.CULL_FACE), C(Fn);
  function re(D) {
    h[D] !== true && (s.enable(D), h[D] = true);
  }
  function Te(D) {
    h[D] !== false && (s.disable(D), h[D] = false);
  }
  function Pe(D, ie) {
    return u[D] !== ie ? (s.bindFramebuffer(D, ie), u[D] = ie, D === s.DRAW_FRAMEBUFFER && (u[s.FRAMEBUFFER] = ie), D === s.FRAMEBUFFER && (u[s.DRAW_FRAMEBUFFER] = ie), true) : false;
  }
  function Oe(D, ie) {
    let V = p, j = false;
    if (D) {
      V = d.get(ie), V === void 0 && (V = [], d.set(ie, V));
      const le = D.textures;
      if (V.length !== le.length || V[0] !== s.COLOR_ATTACHMENT0) {
        for (let oe = 0, Le = le.length; oe < Le; oe++) V[oe] = s.COLOR_ATTACHMENT0 + oe;
        V.length = le.length, j = true;
      }
    } else V[0] !== s.BACK && (V[0] = s.BACK, j = true);
    j && s.drawBuffers(V);
  }
  function at(D) {
    return g !== D ? (s.useProgram(D), g = D, true) : false;
  }
  const Ge = { [Qn]: s.FUNC_ADD, [Wc]: s.FUNC_SUBTRACT, [Xc]: s.FUNC_REVERSE_SUBTRACT };
  Ge[Yc] = s.MIN, Ge[qc] = s.MAX;
  const ct = { [jc]: s.ZERO, [Kc]: s.ONE, [Zc]: s.SRC_COLOR, [jr]: s.SRC_ALPHA, [nh]: s.SRC_ALPHA_SATURATE, [eh]: s.DST_COLOR, [Jc]: s.DST_ALPHA, [$c]: s.ONE_MINUS_SRC_COLOR, [Kr]: s.ONE_MINUS_SRC_ALPHA, [th]: s.ONE_MINUS_DST_COLOR, [Qc]: s.ONE_MINUS_DST_ALPHA, [ih]: s.CONSTANT_COLOR, [sh]: s.ONE_MINUS_CONSTANT_COLOR, [rh]: s.CONSTANT_ALPHA, [ah]: s.ONE_MINUS_CONSTANT_ALPHA };
  function C(D, ie, V, j, le, oe, Le, ot, vt, $e) {
    if (D === Fn) {
      _ === true && (Te(s.BLEND), _ = false);
      return;
    }
    if (_ === false && (re(s.BLEND), _ = true), D !== Gc) {
      if (D !== m || $e !== S) {
        if ((f !== Qn || y !== Qn) && (s.blendEquation(s.FUNC_ADD), f = Qn, y = Qn), $e) switch (D) {
          case Ai:
            s.blendFuncSeparate(s.ONE, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case xo:
            s.blendFunc(s.ONE, s.ONE);
            break;
          case vo:
            s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
            break;
          case Mo:
            s.blendFuncSeparate(s.ZERO, s.SRC_COLOR, s.ZERO, s.SRC_ALPHA);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        else switch (D) {
          case Ai:
            s.blendFuncSeparate(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA, s.ONE, s.ONE_MINUS_SRC_ALPHA);
            break;
          case xo:
            s.blendFunc(s.SRC_ALPHA, s.ONE);
            break;
          case vo:
            s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
            break;
          case Mo:
            s.blendFunc(s.ZERO, s.SRC_COLOR);
            break;
          default:
            console.error("THREE.WebGLState: Invalid blending: ", D);
            break;
        }
        b = null, T = null, L = null, w = null, A.set(0, 0, 0), N = 0, m = D, S = $e;
      }
      return;
    }
    le = le || ie, oe = oe || V, Le = Le || j, (ie !== f || le !== y) && (s.blendEquationSeparate(Ge[ie], Ge[le]), f = ie, y = le), (V !== b || j !== T || oe !== L || Le !== w) && (s.blendFuncSeparate(ct[V], ct[j], ct[oe], ct[Le]), b = V, T = j, L = oe, w = Le), (ot.equals(A) === false || vt !== N) && (s.blendColor(ot.r, ot.g, ot.b, vt), A.copy(ot), N = vt), m = D, S = false;
  }
  function Ot(D, ie) {
    D.side === rn ? Te(s.CULL_FACE) : re(s.CULL_FACE);
    let V = D.side === Dt;
    ie && (V = !V), ke(V), D.blending === Ai && D.transparent === false ? C(Fn) : C(D.blending, D.blendEquation, D.blendSrc, D.blendDst, D.blendEquationAlpha, D.blendSrcAlpha, D.blendDstAlpha, D.blendColor, D.blendAlpha, D.premultipliedAlpha), a.setFunc(D.depthFunc), a.setTest(D.depthTest), a.setMask(D.depthWrite), r.setMask(D.colorWrite);
    const j = D.stencilWrite;
    o.setTest(j), j && (o.setMask(D.stencilWriteMask), o.setFunc(D.stencilFunc, D.stencilRef, D.stencilFuncMask), o.setOp(D.stencilFail, D.stencilZFail, D.stencilZPass)), st(D.polygonOffset, D.polygonOffsetFactor, D.polygonOffsetUnits), D.alphaToCoverage === true ? re(s.SAMPLE_ALPHA_TO_COVERAGE) : Te(s.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function ke(D) {
    M !== D && (D ? s.frontFace(s.CW) : s.frontFace(s.CCW), M = D);
  }
  function ze(D) {
    D !== zc ? (re(s.CULL_FACE), D !== P && (D === _o ? s.cullFace(s.BACK) : D === Hc ? s.cullFace(s.FRONT) : s.cullFace(s.FRONT_AND_BACK))) : Te(s.CULL_FACE), P = D;
  }
  function xe(D) {
    D !== G && (H && s.lineWidth(D), G = D);
  }
  function st(D, ie, V) {
    D ? (re(s.POLYGON_OFFSET_FILL), (k !== ie || W !== V) && (s.polygonOffset(ie, V), k = ie, W = V)) : Te(s.POLYGON_OFFSET_FILL);
  }
  function ve(D) {
    D ? re(s.SCISSOR_TEST) : Te(s.SCISSOR_TEST);
  }
  function E(D) {
    D === void 0 && (D = s.TEXTURE0 + K - 1), te !== D && (s.activeTexture(D), te = D);
  }
  function x(D, ie, V) {
    V === void 0 && (te === null ? V = s.TEXTURE0 + K - 1 : V = te);
    let j = ce[V];
    j === void 0 && (j = { type: void 0, texture: void 0 }, ce[V] = j), (j.type !== D || j.texture !== ie) && (te !== V && (s.activeTexture(V), te = V), s.bindTexture(D, ie || me[D]), j.type = D, j.texture = ie);
  }
  function F() {
    const D = ce[te];
    D !== void 0 && D.type !== void 0 && (s.bindTexture(D.type, null), D.type = void 0, D.texture = void 0);
  }
  function q() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Z() {
    try {
      s.compressedTexImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function X() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ge() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ae() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function ue() {
    try {
      s.compressedTexSubImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function We() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function J() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function de() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ee() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (D) {
      console.error("THREE.WebGLState:", D);
    }
  }
  function Ae(D) {
    je.equals(D) === false && (s.scissor(D.x, D.y, D.z, D.w), je.copy(D));
  }
  function fe(D) {
    Y.equals(D) === false && (s.viewport(D.x, D.y, D.z, D.w), Y.copy(D));
  }
  function He(D, ie) {
    let V = c.get(ie);
    V === void 0 && (V = /* @__PURE__ */ new WeakMap(), c.set(ie, V));
    let j = V.get(D);
    j === void 0 && (j = s.getUniformBlockIndex(ie, D.name), V.set(D, j));
  }
  function Ie(D, ie) {
    const j = c.get(ie).get(D);
    l.get(ie) !== j && (s.uniformBlockBinding(ie, j, D.__bindingPointIndex), l.set(ie, j));
  }
  function it() {
    s.disable(s.BLEND), s.disable(s.CULL_FACE), s.disable(s.DEPTH_TEST), s.disable(s.POLYGON_OFFSET_FILL), s.disable(s.SCISSOR_TEST), s.disable(s.STENCIL_TEST), s.disable(s.SAMPLE_ALPHA_TO_COVERAGE), s.blendEquation(s.FUNC_ADD), s.blendFunc(s.ONE, s.ZERO), s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO), s.blendColor(0, 0, 0, 0), s.colorMask(true, true, true, true), s.clearColor(0, 0, 0, 0), s.depthMask(true), s.depthFunc(s.LESS), a.setReversed(false), s.clearDepth(1), s.stencilMask(4294967295), s.stencilFunc(s.ALWAYS, 0, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.KEEP), s.clearStencil(0), s.cullFace(s.BACK), s.frontFace(s.CCW), s.polygonOffset(0, 0), s.activeTexture(s.TEXTURE0), s.bindFramebuffer(s.FRAMEBUFFER, null), s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), s.bindFramebuffer(s.READ_FRAMEBUFFER, null), s.useProgram(null), s.lineWidth(1), s.scissor(0, 0, s.canvas.width, s.canvas.height), s.viewport(0, 0, s.canvas.width, s.canvas.height), h = {}, te = null, ce = {}, u = {}, d = /* @__PURE__ */ new WeakMap(), p = [], g = null, _ = false, m = null, f = null, b = null, T = null, y = null, L = null, w = null, A = new ye(0, 0, 0), N = 0, S = false, M = null, P = null, G = null, k = null, W = null, je.set(0, 0, s.canvas.width, s.canvas.height), Y.set(0, 0, s.canvas.width, s.canvas.height), r.reset(), a.reset(), o.reset();
  }
  return { buffers: { color: r, depth: a, stencil: o }, enable: re, disable: Te, bindFramebuffer: Pe, drawBuffers: Oe, useProgram: at, setBlending: C, setMaterial: Ot, setFlipSided: ke, setCullFace: ze, setLineWidth: xe, setPolygonOffset: st, setScissorTest: ve, activeTexture: E, bindTexture: x, unbindTexture: F, compressedTexImage2D: q, compressedTexImage3D: Z, texImage2D: de, texImage3D: Ee, updateUBOMapping: He, uniformBlockBinding: Ie, texStorage2D: We, texStorage3D: J, texSubImage2D: X, texSubImage3D: ge, compressedTexSubImage2D: ae, compressedTexSubImage3D: ue, scissor: Ae, viewport: fe, reset: it };
}
function Bg(s, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null, l = typeof navigator > "u" ? false : /OculusBrowser/g.test(navigator.userAgent), c = new be(), h = /* @__PURE__ */ new WeakMap();
  let u;
  const d = /* @__PURE__ */ new WeakMap();
  let p = false;
  try {
    p = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {
  }
  function g(E, x) {
    return p ? new OffscreenCanvas(E, x) : cs("canvas");
  }
  function _(E, x, F) {
    let q = 1;
    const Z = ve(E);
    if ((Z.width > F || Z.height > F) && (q = F / Math.max(Z.width, Z.height)), q < 1) if (typeof HTMLImageElement < "u" && E instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && E instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && E instanceof ImageBitmap || typeof VideoFrame < "u" && E instanceof VideoFrame) {
      const X = Math.floor(q * Z.width), ge = Math.floor(q * Z.height);
      u === void 0 && (u = g(X, ge));
      const ae = x ? g(X, ge) : u;
      return ae.width = X, ae.height = ge, ae.getContext("2d").drawImage(E, 0, 0, X, ge), console.warn("THREE.WebGLRenderer: Texture has been resized from (" + Z.width + "x" + Z.height + ") to (" + X + "x" + ge + ")."), ae;
    } else return "data" in E && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + Z.width + "x" + Z.height + ")."), E;
    return E;
  }
  function m(E) {
    return E.generateMipmaps;
  }
  function f(E) {
    s.generateMipmap(E);
  }
  function b(E) {
    return E.isWebGLCubeRenderTarget ? s.TEXTURE_CUBE_MAP : E.isWebGL3DRenderTarget ? s.TEXTURE_3D : E.isWebGLArrayRenderTarget || E.isCompressedArrayTexture ? s.TEXTURE_2D_ARRAY : s.TEXTURE_2D;
  }
  function T(E, x, F, q, Z = false) {
    if (E !== null) {
      if (s[E] !== void 0) return s[E];
      console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + E + "'");
    }
    let X = x;
    if (x === s.RED && (F === s.FLOAT && (X = s.R32F), F === s.HALF_FLOAT && (X = s.R16F), F === s.UNSIGNED_BYTE && (X = s.R8)), x === s.RED_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.R8UI), F === s.UNSIGNED_SHORT && (X = s.R16UI), F === s.UNSIGNED_INT && (X = s.R32UI), F === s.BYTE && (X = s.R8I), F === s.SHORT && (X = s.R16I), F === s.INT && (X = s.R32I)), x === s.RG && (F === s.FLOAT && (X = s.RG32F), F === s.HALF_FLOAT && (X = s.RG16F), F === s.UNSIGNED_BYTE && (X = s.RG8)), x === s.RG_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.RG8UI), F === s.UNSIGNED_SHORT && (X = s.RG16UI), F === s.UNSIGNED_INT && (X = s.RG32UI), F === s.BYTE && (X = s.RG8I), F === s.SHORT && (X = s.RG16I), F === s.INT && (X = s.RG32I)), x === s.RGB_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.RGB8UI), F === s.UNSIGNED_SHORT && (X = s.RGB16UI), F === s.UNSIGNED_INT && (X = s.RGB32UI), F === s.BYTE && (X = s.RGB8I), F === s.SHORT && (X = s.RGB16I), F === s.INT && (X = s.RGB32I)), x === s.RGBA_INTEGER && (F === s.UNSIGNED_BYTE && (X = s.RGBA8UI), F === s.UNSIGNED_SHORT && (X = s.RGBA16UI), F === s.UNSIGNED_INT && (X = s.RGBA32UI), F === s.BYTE && (X = s.RGBA8I), F === s.SHORT && (X = s.RGBA16I), F === s.INT && (X = s.RGBA32I)), x === s.RGB && F === s.UNSIGNED_INT_5_9_9_9_REV && (X = s.RGB9_E5), x === s.RGBA) {
      const ge = Z ? nr : Ve.getTransfer(q);
      F === s.FLOAT && (X = s.RGBA32F), F === s.HALF_FLOAT && (X = s.RGBA16F), F === s.UNSIGNED_BYTE && (X = ge === et ? s.SRGB8_ALPHA8 : s.RGBA8), F === s.UNSIGNED_SHORT_4_4_4_4 && (X = s.RGBA4), F === s.UNSIGNED_SHORT_5_5_5_1 && (X = s.RGB5_A1);
    }
    return (X === s.R16F || X === s.R32F || X === s.RG16F || X === s.RG32F || X === s.RGBA16F || X === s.RGBA32F) && e.get("EXT_color_buffer_float"), X;
  }
  function y(E, x) {
    let F;
    return E ? x === null || x === ii || x === Ui ? F = s.DEPTH24_STENCIL8 : x === Jt ? F = s.DEPTH32F_STENCIL8 : x === as && (F = s.DEPTH24_STENCIL8, console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")) : x === null || x === ii || x === Ui ? F = s.DEPTH_COMPONENT24 : x === Jt ? F = s.DEPTH_COMPONENT32F : x === as && (F = s.DEPTH_COMPONENT16), F;
  }
  function L(E, x) {
    return m(E) === true || E.isFramebufferTexture && E.minFilter !== At && E.minFilter !== Ft ? Math.log2(Math.max(x.width, x.height)) + 1 : E.mipmaps !== void 0 && E.mipmaps.length > 0 ? E.mipmaps.length : E.isCompressedTexture && Array.isArray(E.image) ? x.mipmaps.length : 1;
  }
  function w(E) {
    const x = E.target;
    x.removeEventListener("dispose", w), N(x), x.isVideoTexture && h.delete(x);
  }
  function A(E) {
    const x = E.target;
    x.removeEventListener("dispose", A), M(x);
  }
  function N(E) {
    const x = n.get(E);
    if (x.__webglInit === void 0) return;
    const F = E.source, q = d.get(F);
    if (q) {
      const Z = q[x.__cacheKey];
      Z.usedTimes--, Z.usedTimes === 0 && S(E), Object.keys(q).length === 0 && d.delete(F);
    }
    n.remove(E);
  }
  function S(E) {
    const x = n.get(E);
    s.deleteTexture(x.__webglTexture);
    const F = E.source, q = d.get(F);
    delete q[x.__cacheKey], a.memory.textures--;
  }
  function M(E) {
    const x = n.get(E);
    if (E.depthTexture && (E.depthTexture.dispose(), n.remove(E.depthTexture)), E.isWebGLCubeRenderTarget) for (let q = 0; q < 6; q++) {
      if (Array.isArray(x.__webglFramebuffer[q])) for (let Z = 0; Z < x.__webglFramebuffer[q].length; Z++) s.deleteFramebuffer(x.__webglFramebuffer[q][Z]);
      else s.deleteFramebuffer(x.__webglFramebuffer[q]);
      x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer[q]);
    }
    else {
      if (Array.isArray(x.__webglFramebuffer)) for (let q = 0; q < x.__webglFramebuffer.length; q++) s.deleteFramebuffer(x.__webglFramebuffer[q]);
      else s.deleteFramebuffer(x.__webglFramebuffer);
      if (x.__webglDepthbuffer && s.deleteRenderbuffer(x.__webglDepthbuffer), x.__webglMultisampledFramebuffer && s.deleteFramebuffer(x.__webglMultisampledFramebuffer), x.__webglColorRenderbuffer) for (let q = 0; q < x.__webglColorRenderbuffer.length; q++) x.__webglColorRenderbuffer[q] && s.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);
      x.__webglDepthRenderbuffer && s.deleteRenderbuffer(x.__webglDepthRenderbuffer);
    }
    const F = E.textures;
    for (let q = 0, Z = F.length; q < Z; q++) {
      const X = n.get(F[q]);
      X.__webglTexture && (s.deleteTexture(X.__webglTexture), a.memory.textures--), n.remove(F[q]);
    }
    n.remove(E);
  }
  let P = 0;
  function G() {
    P = 0;
  }
  function k() {
    const E = P;
    return E >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + E + " texture units while this GPU supports only " + i.maxTextures), P += 1, E;
  }
  function W(E) {
    const x = [];
    return x.push(E.wrapS), x.push(E.wrapT), x.push(E.wrapR || 0), x.push(E.magFilter), x.push(E.minFilter), x.push(E.anisotropy), x.push(E.internalFormat), x.push(E.format), x.push(E.type), x.push(E.generateMipmaps), x.push(E.premultiplyAlpha), x.push(E.flipY), x.push(E.unpackAlignment), x.push(E.colorSpace), x.join();
  }
  function K(E, x) {
    const F = n.get(E);
    if (E.isVideoTexture && xe(E), E.isRenderTargetTexture === false && E.version > 0 && F.__version !== E.version) {
      const q = E.image;
      if (q === null) console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
      else if (q.complete === false) console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      else {
        Y(F, E, x);
        return;
      }
    }
    t.bindTexture(s.TEXTURE_2D, F.__webglTexture, s.TEXTURE0 + x);
  }
  function H(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      Y(F, E, x);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, F.__webglTexture, s.TEXTURE0 + x);
  }
  function Q(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      Y(F, E, x);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, F.__webglTexture, s.TEXTURE0 + x);
  }
  function z(E, x) {
    const F = n.get(E);
    if (E.version > 0 && F.__version !== E.version) {
      ee(F, E, x);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, F.__webglTexture, s.TEXTURE0 + x);
  }
  const te = { [Ii]: s.REPEAT, [Un]: s.CLAMP_TO_EDGE, [tr]: s.MIRRORED_REPEAT }, ce = { [At]: s.NEAREST, [$l]: s.NEAREST_MIPMAP_NEAREST, [ts]: s.NEAREST_MIPMAP_LINEAR, [Ft]: s.LINEAR, [qs]: s.LINEAR_MIPMAP_NEAREST, [Mn]: s.LINEAR_MIPMAP_LINEAR }, _e = { [Sh]: s.NEVER, [Rh]: s.ALWAYS, [Eh]: s.LESS, [lc]: s.LEQUAL, [Th]: s.EQUAL, [wh]: s.GEQUAL, [bh]: s.GREATER, [Ah]: s.NOTEQUAL };
  function Ne(E, x) {
    if (x.type === Jt && e.has("OES_texture_float_linear") === false && (x.magFilter === Ft || x.magFilter === qs || x.magFilter === ts || x.magFilter === Mn || x.minFilter === Ft || x.minFilter === qs || x.minFilter === ts || x.minFilter === Mn) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."), s.texParameteri(E, s.TEXTURE_WRAP_S, te[x.wrapS]), s.texParameteri(E, s.TEXTURE_WRAP_T, te[x.wrapT]), (E === s.TEXTURE_3D || E === s.TEXTURE_2D_ARRAY) && s.texParameteri(E, s.TEXTURE_WRAP_R, te[x.wrapR]), s.texParameteri(E, s.TEXTURE_MAG_FILTER, ce[x.magFilter]), s.texParameteri(E, s.TEXTURE_MIN_FILTER, ce[x.minFilter]), x.compareFunction && (s.texParameteri(E, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE), s.texParameteri(E, s.TEXTURE_COMPARE_FUNC, _e[x.compareFunction])), e.has("EXT_texture_filter_anisotropic") === true) {
      if (x.magFilter === At || x.minFilter !== ts && x.minFilter !== Mn || x.type === Jt && e.has("OES_texture_float_linear") === false) return;
      if (x.anisotropy > 1 || n.get(x).__currentAnisotropy) {
        const F = e.get("EXT_texture_filter_anisotropic");
        s.texParameterf(E, F.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(x.anisotropy, i.getMaxAnisotropy())), n.get(x).__currentAnisotropy = x.anisotropy;
      }
    }
  }
  function je(E, x) {
    let F = false;
    E.__webglInit === void 0 && (E.__webglInit = true, x.addEventListener("dispose", w));
    const q = x.source;
    let Z = d.get(q);
    Z === void 0 && (Z = {}, d.set(q, Z));
    const X = W(x);
    if (X !== E.__cacheKey) {
      Z[X] === void 0 && (Z[X] = { texture: s.createTexture(), usedTimes: 0 }, a.memory.textures++, F = true), Z[X].usedTimes++;
      const ge = Z[E.__cacheKey];
      ge !== void 0 && (Z[E.__cacheKey].usedTimes--, ge.usedTimes === 0 && S(x)), E.__cacheKey = X, E.__webglTexture = Z[X].texture;
    }
    return F;
  }
  function Y(E, x, F) {
    let q = s.TEXTURE_2D;
    (x.isDataArrayTexture || x.isCompressedArrayTexture) && (q = s.TEXTURE_2D_ARRAY), x.isData3DTexture && (q = s.TEXTURE_3D);
    const Z = je(E, x), X = x.source;
    t.bindTexture(q, E.__webglTexture, s.TEXTURE0 + F);
    const ge = n.get(X);
    if (X.version !== ge.__version || Z === true) {
      t.activeTexture(s.TEXTURE0 + F);
      const ae = Ve.getPrimaries(Ve.workingColorSpace), ue = x.colorSpace === In ? null : Ve.getPrimaries(x.colorSpace), We = x.colorSpace === In || ae === ue ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, We);
      let J = _(x.image, false, i.maxTextureSize);
      J = st(x, J);
      const de = r.convert(x.format, x.colorSpace), Ee = r.convert(x.type);
      let Ae = T(x.internalFormat, de, Ee, x.colorSpace, x.isVideoTexture);
      Ne(q, x);
      let fe;
      const He = x.mipmaps, Ie = x.isVideoTexture !== true, it = ge.__version === void 0 || Z === true, D = X.dataReady, ie = L(x, J);
      if (x.isDepthTexture) Ae = y(x.format === Ni, x.type), it && (Ie ? t.texStorage2D(s.TEXTURE_2D, 1, Ae, J.width, J.height) : t.texImage2D(s.TEXTURE_2D, 0, Ae, J.width, J.height, 0, de, Ee, null));
      else if (x.isDataTexture) if (He.length > 0) {
        Ie && it && t.texStorage2D(s.TEXTURE_2D, ie, Ae, He[0].width, He[0].height);
        for (let V = 0, j = He.length; V < j; V++) fe = He[V], Ie ? D && t.texSubImage2D(s.TEXTURE_2D, V, 0, 0, fe.width, fe.height, de, Ee, fe.data) : t.texImage2D(s.TEXTURE_2D, V, Ae, fe.width, fe.height, 0, de, Ee, fe.data);
        x.generateMipmaps = false;
      } else Ie ? (it && t.texStorage2D(s.TEXTURE_2D, ie, Ae, J.width, J.height), D && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, J.width, J.height, de, Ee, J.data)) : t.texImage2D(s.TEXTURE_2D, 0, Ae, J.width, J.height, 0, de, Ee, J.data);
      else if (x.isCompressedTexture) if (x.isCompressedArrayTexture) {
        Ie && it && t.texStorage3D(s.TEXTURE_2D_ARRAY, ie, Ae, He[0].width, He[0].height, J.depth);
        for (let V = 0, j = He.length; V < j; V++) if (fe = He[V], x.format !== Vt) if (de !== null) if (Ie) {
          if (D) if (x.layerUpdates.size > 0) {
            const le = _l(fe.width, fe.height, x.format, x.type);
            for (const oe of x.layerUpdates) {
              const Le = fe.data.subarray(oe * le / fe.data.BYTES_PER_ELEMENT, (oe + 1) * le / fe.data.BYTES_PER_ELEMENT);
              t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, V, 0, 0, oe, fe.width, fe.height, 1, de, Le);
            }
            x.clearLayerUpdates();
          } else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY, V, 0, 0, 0, fe.width, fe.height, J.depth, de, fe.data);
        } else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY, V, Ae, fe.width, fe.height, J.depth, 0, fe.data, 0, 0);
        else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
        else Ie ? D && t.texSubImage3D(s.TEXTURE_2D_ARRAY, V, 0, 0, 0, fe.width, fe.height, J.depth, de, Ee, fe.data) : t.texImage3D(s.TEXTURE_2D_ARRAY, V, Ae, fe.width, fe.height, J.depth, 0, de, Ee, fe.data);
      } else {
        Ie && it && t.texStorage2D(s.TEXTURE_2D, ie, Ae, He[0].width, He[0].height);
        for (let V = 0, j = He.length; V < j; V++) fe = He[V], x.format !== Vt ? de !== null ? Ie ? D && t.compressedTexSubImage2D(s.TEXTURE_2D, V, 0, 0, fe.width, fe.height, de, fe.data) : t.compressedTexImage2D(s.TEXTURE_2D, V, Ae, fe.width, fe.height, 0, fe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Ie ? D && t.texSubImage2D(s.TEXTURE_2D, V, 0, 0, fe.width, fe.height, de, Ee, fe.data) : t.texImage2D(s.TEXTURE_2D, V, Ae, fe.width, fe.height, 0, de, Ee, fe.data);
      }
      else if (x.isDataArrayTexture) if (Ie) {
        if (it && t.texStorage3D(s.TEXTURE_2D_ARRAY, ie, Ae, J.width, J.height, J.depth), D) if (x.layerUpdates.size > 0) {
          const V = _l(J.width, J.height, x.format, x.type);
          for (const j of x.layerUpdates) {
            const le = J.data.subarray(j * V / J.data.BYTES_PER_ELEMENT, (j + 1) * V / J.data.BYTES_PER_ELEMENT);
            t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, j, J.width, J.height, 1, de, Ee, le);
          }
          x.clearLayerUpdates();
        } else t.texSubImage3D(s.TEXTURE_2D_ARRAY, 0, 0, 0, 0, J.width, J.height, J.depth, de, Ee, J.data);
      } else t.texImage3D(s.TEXTURE_2D_ARRAY, 0, Ae, J.width, J.height, J.depth, 0, de, Ee, J.data);
      else if (x.isData3DTexture) Ie ? (it && t.texStorage3D(s.TEXTURE_3D, ie, Ae, J.width, J.height, J.depth), D && t.texSubImage3D(s.TEXTURE_3D, 0, 0, 0, 0, J.width, J.height, J.depth, de, Ee, J.data)) : t.texImage3D(s.TEXTURE_3D, 0, Ae, J.width, J.height, J.depth, 0, de, Ee, J.data);
      else if (x.isFramebufferTexture) {
        if (it) if (Ie) t.texStorage2D(s.TEXTURE_2D, ie, Ae, J.width, J.height);
        else {
          let V = J.width, j = J.height;
          for (let le = 0; le < ie; le++) t.texImage2D(s.TEXTURE_2D, le, Ae, V, j, 0, de, Ee, null), V >>= 1, j >>= 1;
        }
      } else if (He.length > 0) {
        if (Ie && it) {
          const V = ve(He[0]);
          t.texStorage2D(s.TEXTURE_2D, ie, Ae, V.width, V.height);
        }
        for (let V = 0, j = He.length; V < j; V++) fe = He[V], Ie ? D && t.texSubImage2D(s.TEXTURE_2D, V, 0, 0, de, Ee, fe) : t.texImage2D(s.TEXTURE_2D, V, Ae, de, Ee, fe);
        x.generateMipmaps = false;
      } else if (Ie) {
        if (it) {
          const V = ve(J);
          t.texStorage2D(s.TEXTURE_2D, ie, Ae, V.width, V.height);
        }
        D && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, de, Ee, J);
      } else t.texImage2D(s.TEXTURE_2D, 0, Ae, de, Ee, J);
      m(x) && f(q), ge.__version = X.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function ee(E, x, F) {
    if (x.image.length !== 6) return;
    const q = je(E, x), Z = x.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, E.__webglTexture, s.TEXTURE0 + F);
    const X = n.get(Z);
    if (Z.version !== X.__version || q === true) {
      t.activeTexture(s.TEXTURE0 + F);
      const ge = Ve.getPrimaries(Ve.workingColorSpace), ae = x.colorSpace === In ? null : Ve.getPrimaries(x.colorSpace), ue = x.colorSpace === In || ge === ae ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, x.flipY), s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, x.premultiplyAlpha), s.pixelStorei(s.UNPACK_ALIGNMENT, x.unpackAlignment), s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      const We = x.isCompressedTexture || x.image[0].isCompressedTexture, J = x.image[0] && x.image[0].isDataTexture, de = [];
      for (let j = 0; j < 6; j++) !We && !J ? de[j] = _(x.image[j], true, i.maxCubemapSize) : de[j] = J ? x.image[j].image : x.image[j], de[j] = st(x, de[j]);
      const Ee = de[0], Ae = r.convert(x.format, x.colorSpace), fe = r.convert(x.type), He = T(x.internalFormat, Ae, fe, x.colorSpace), Ie = x.isVideoTexture !== true, it = X.__version === void 0 || q === true, D = Z.dataReady;
      let ie = L(x, Ee);
      Ne(s.TEXTURE_CUBE_MAP, x);
      let V;
      if (We) {
        Ie && it && t.texStorage2D(s.TEXTURE_CUBE_MAP, ie, He, Ee.width, Ee.height);
        for (let j = 0; j < 6; j++) {
          V = de[j].mipmaps;
          for (let le = 0; le < V.length; le++) {
            const oe = V[le];
            x.format !== Vt ? Ae !== null ? Ie ? D && t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, le, 0, 0, oe.width, oe.height, Ae, oe.data) : t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, le, He, oe.width, oe.height, 0, oe.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, le, 0, 0, oe.width, oe.height, Ae, fe, oe.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, le, He, oe.width, oe.height, 0, Ae, fe, oe.data);
          }
        }
      } else {
        if (V = x.mipmaps, Ie && it) {
          V.length > 0 && ie++;
          const j = ve(de[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, ie, He, j.width, j.height);
        }
        for (let j = 0; j < 6; j++) if (J) {
          Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, de[j].width, de[j].height, Ae, fe, de[j].data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, He, de[j].width, de[j].height, 0, Ae, fe, de[j].data);
          for (let le = 0; le < V.length; le++) {
            const Le = V[le].image[j].image;
            Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, le + 1, 0, 0, Le.width, Le.height, Ae, fe, Le.data) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, le + 1, He, Le.width, Le.height, 0, Ae, fe, Le.data);
          }
        } else {
          Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, 0, 0, Ae, fe, de[j]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, 0, He, Ae, fe, de[j]);
          for (let le = 0; le < V.length; le++) {
            const oe = V[le];
            Ie ? D && t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, le + 1, 0, 0, Ae, fe, oe.image[j]) : t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X + j, le + 1, He, Ae, fe, oe.image[j]);
          }
        }
      }
      m(x) && f(s.TEXTURE_CUBE_MAP), X.__version = Z.version, x.onUpdate && x.onUpdate(x);
    }
    E.__version = x.version;
  }
  function me(E, x, F, q, Z, X) {
    const ge = r.convert(F.format, F.colorSpace), ae = r.convert(F.type), ue = T(F.internalFormat, ge, ae, F.colorSpace), We = n.get(x), J = n.get(F);
    if (J.__renderTarget = x, !We.__hasExternalTextures) {
      const de = Math.max(1, x.width >> X), Ee = Math.max(1, x.height >> X);
      Z === s.TEXTURE_3D || Z === s.TEXTURE_2D_ARRAY ? t.texImage3D(Z, X, ue, de, Ee, x.depth, 0, ge, ae, null) : t.texImage2D(Z, X, ue, de, Ee, 0, ge, ae, null);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, E), ze(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, q, Z, J.__webglTexture, 0, ke(x)) : (Z === s.TEXTURE_2D || Z >= s.TEXTURE_CUBE_MAP_POSITIVE_X && Z <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z) && s.framebufferTexture2D(s.FRAMEBUFFER, q, Z, J.__webglTexture, X), t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function re(E, x, F) {
    if (s.bindRenderbuffer(s.RENDERBUFFER, E), x.depthBuffer) {
      const q = x.depthTexture, Z = q && q.isDepthTexture ? q.type : null, X = y(x.stencilBuffer, Z), ge = x.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ae = ke(x);
      ze(x) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, ae, X, x.width, x.height) : F ? s.renderbufferStorageMultisample(s.RENDERBUFFER, ae, X, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, X, x.width, x.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, ge, s.RENDERBUFFER, E);
    } else {
      const q = x.textures;
      for (let Z = 0; Z < q.length; Z++) {
        const X = q[Z], ge = r.convert(X.format, X.colorSpace), ae = r.convert(X.type), ue = T(X.internalFormat, ge, ae, X.colorSpace), We = ke(x);
        F && ze(x) === false ? s.renderbufferStorageMultisample(s.RENDERBUFFER, We, ue, x.width, x.height) : ze(x) ? o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER, We, ue, x.width, x.height) : s.renderbufferStorage(s.RENDERBUFFER, ue, x.width, x.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function Te(E, x) {
    if (x && x.isWebGLCubeRenderTarget) throw new Error("Depth Texture with cube render targets is not supported");
    if (t.bindFramebuffer(s.FRAMEBUFFER, E), !(x.depthTexture && x.depthTexture.isDepthTexture)) throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
    const q = n.get(x.depthTexture);
    q.__renderTarget = x, (!q.__webglTexture || x.depthTexture.image.width !== x.width || x.depthTexture.image.height !== x.height) && (x.depthTexture.image.width = x.width, x.depthTexture.image.height = x.height, x.depthTexture.needsUpdate = true), K(x.depthTexture, 0);
    const Z = q.__webglTexture, X = ke(x);
    if (x.depthTexture.format === wi) ze(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, Z, 0, X) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, Z, 0);
    else if (x.depthTexture.format === Ni) ze(x) ? o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, Z, 0, X) : s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_STENCIL_ATTACHMENT, s.TEXTURE_2D, Z, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function Pe(E) {
    const x = n.get(E), F = E.isWebGLCubeRenderTarget === true;
    if (x.__boundDepthTexture !== E.depthTexture) {
      const q = E.depthTexture;
      if (x.__depthDisposeCallback && x.__depthDisposeCallback(), q) {
        const Z = () => {
          delete x.__boundDepthTexture, delete x.__depthDisposeCallback, q.removeEventListener("dispose", Z);
        };
        q.addEventListener("dispose", Z), x.__depthDisposeCallback = Z;
      }
      x.__boundDepthTexture = q;
    }
    if (E.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (F) throw new Error("target.depthTexture not supported in Cube render targets");
      Te(x.__webglFramebuffer, E);
    } else if (F) {
      x.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++) if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer[q]), x.__webglDepthbuffer[q] === void 0) x.__webglDepthbuffer[q] = s.createRenderbuffer(), re(x.__webglDepthbuffer[q], E, false);
      else {
        const Z = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, X = x.__webglDepthbuffer[q];
        s.bindRenderbuffer(s.RENDERBUFFER, X), s.framebufferRenderbuffer(s.FRAMEBUFFER, Z, s.RENDERBUFFER, X);
      }
    } else if (t.bindFramebuffer(s.FRAMEBUFFER, x.__webglFramebuffer), x.__webglDepthbuffer === void 0) x.__webglDepthbuffer = s.createRenderbuffer(), re(x.__webglDepthbuffer, E, false);
    else {
      const q = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, Z = x.__webglDepthbuffer;
      s.bindRenderbuffer(s.RENDERBUFFER, Z), s.framebufferRenderbuffer(s.FRAMEBUFFER, q, s.RENDERBUFFER, Z);
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Oe(E, x, F) {
    const q = n.get(E);
    x !== void 0 && me(q.__webglFramebuffer, E, E.texture, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, 0), F !== void 0 && Pe(E);
  }
  function at(E) {
    const x = E.texture, F = n.get(E), q = n.get(x);
    E.addEventListener("dispose", A);
    const Z = E.textures, X = E.isWebGLCubeRenderTarget === true, ge = Z.length > 1;
    if (ge || (q.__webglTexture === void 0 && (q.__webglTexture = s.createTexture()), q.__version = x.version, a.memory.textures++), X) {
      F.__webglFramebuffer = [];
      for (let ae = 0; ae < 6; ae++) if (x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer[ae] = [];
        for (let ue = 0; ue < x.mipmaps.length; ue++) F.__webglFramebuffer[ae][ue] = s.createFramebuffer();
      } else F.__webglFramebuffer[ae] = s.createFramebuffer();
    } else {
      if (x.mipmaps && x.mipmaps.length > 0) {
        F.__webglFramebuffer = [];
        for (let ae = 0; ae < x.mipmaps.length; ae++) F.__webglFramebuffer[ae] = s.createFramebuffer();
      } else F.__webglFramebuffer = s.createFramebuffer();
      if (ge) for (let ae = 0, ue = Z.length; ae < ue; ae++) {
        const We = n.get(Z[ae]);
        We.__webglTexture === void 0 && (We.__webglTexture = s.createTexture(), a.memory.textures++);
      }
      if (E.samples > 0 && ze(E) === false) {
        F.__webglMultisampledFramebuffer = s.createFramebuffer(), F.__webglColorRenderbuffer = [], t.bindFramebuffer(s.FRAMEBUFFER, F.__webglMultisampledFramebuffer);
        for (let ae = 0; ae < Z.length; ae++) {
          const ue = Z[ae];
          F.__webglColorRenderbuffer[ae] = s.createRenderbuffer(), s.bindRenderbuffer(s.RENDERBUFFER, F.__webglColorRenderbuffer[ae]);
          const We = r.convert(ue.format, ue.colorSpace), J = r.convert(ue.type), de = T(ue.internalFormat, We, J, ue.colorSpace, E.isXRRenderTarget === true), Ee = ke(E);
          s.renderbufferStorageMultisample(s.RENDERBUFFER, Ee, de, E.width, E.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ae, s.RENDERBUFFER, F.__webglColorRenderbuffer[ae]);
        }
        s.bindRenderbuffer(s.RENDERBUFFER, null), E.depthBuffer && (F.__webglDepthRenderbuffer = s.createRenderbuffer(), re(F.__webglDepthRenderbuffer, E, true)), t.bindFramebuffer(s.FRAMEBUFFER, null);
      }
    }
    if (X) {
      t.bindTexture(s.TEXTURE_CUBE_MAP, q.__webglTexture), Ne(s.TEXTURE_CUBE_MAP, x);
      for (let ae = 0; ae < 6; ae++) if (x.mipmaps && x.mipmaps.length > 0) for (let ue = 0; ue < x.mipmaps.length; ue++) me(F.__webglFramebuffer[ae][ue], E, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, ue);
      else me(F.__webglFramebuffer[ae], E, x, s.COLOR_ATTACHMENT0, s.TEXTURE_CUBE_MAP_POSITIVE_X + ae, 0);
      m(x) && f(s.TEXTURE_CUBE_MAP), t.unbindTexture();
    } else if (ge) {
      for (let ae = 0, ue = Z.length; ae < ue; ae++) {
        const We = Z[ae], J = n.get(We);
        t.bindTexture(s.TEXTURE_2D, J.__webglTexture), Ne(s.TEXTURE_2D, We), me(F.__webglFramebuffer, E, We, s.COLOR_ATTACHMENT0 + ae, s.TEXTURE_2D, 0), m(We) && f(s.TEXTURE_2D);
      }
      t.unbindTexture();
    } else {
      let ae = s.TEXTURE_2D;
      if ((E.isWebGL3DRenderTarget || E.isWebGLArrayRenderTarget) && (ae = E.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY), t.bindTexture(ae, q.__webglTexture), Ne(ae, x), x.mipmaps && x.mipmaps.length > 0) for (let ue = 0; ue < x.mipmaps.length; ue++) me(F.__webglFramebuffer[ue], E, x, s.COLOR_ATTACHMENT0, ae, ue);
      else me(F.__webglFramebuffer, E, x, s.COLOR_ATTACHMENT0, ae, 0);
      m(x) && f(ae), t.unbindTexture();
    }
    E.depthBuffer && Pe(E);
  }
  function Ge(E) {
    const x = E.textures;
    for (let F = 0, q = x.length; F < q; F++) {
      const Z = x[F];
      if (m(Z)) {
        const X = b(E), ge = n.get(Z).__webglTexture;
        t.bindTexture(X, ge), f(X), t.unbindTexture();
      }
    }
  }
  const ct = [], C = [];
  function Ot(E) {
    if (E.samples > 0) {
      if (ze(E) === false) {
        const x = E.textures, F = E.width, q = E.height;
        let Z = s.COLOR_BUFFER_BIT;
        const X = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT, ge = n.get(E), ae = x.length > 1;
        if (ae) for (let ue = 0; ue < x.length; ue++) t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.RENDERBUFFER, null), t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.TEXTURE_2D, null, 0);
        t.bindFramebuffer(s.READ_FRAMEBUFFER, ge.__webglMultisampledFramebuffer), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ge.__webglFramebuffer);
        for (let ue = 0; ue < x.length; ue++) {
          if (E.resolveDepthBuffer && (E.depthBuffer && (Z |= s.DEPTH_BUFFER_BIT), E.stencilBuffer && E.resolveStencilBuffer && (Z |= s.STENCIL_BUFFER_BIT)), ae) {
            s.framebufferRenderbuffer(s.READ_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, ge.__webglColorRenderbuffer[ue]);
            const We = n.get(x[ue]).__webglTexture;
            s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, We, 0);
          }
          s.blitFramebuffer(0, 0, F, q, 0, 0, F, q, Z, s.NEAREST), l === true && (ct.length = 0, C.length = 0, ct.push(s.COLOR_ATTACHMENT0 + ue), E.depthBuffer && E.resolveDepthBuffer === false && (ct.push(X), C.push(X), s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, C)), s.invalidateFramebuffer(s.READ_FRAMEBUFFER, ct));
        }
        if (t.bindFramebuffer(s.READ_FRAMEBUFFER, null), t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null), ae) for (let ue = 0; ue < x.length; ue++) {
          t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglMultisampledFramebuffer), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.RENDERBUFFER, ge.__webglColorRenderbuffer[ue]);
          const We = n.get(x[ue]).__webglTexture;
          t.bindFramebuffer(s.FRAMEBUFFER, ge.__webglFramebuffer), s.framebufferTexture2D(s.DRAW_FRAMEBUFFER, s.COLOR_ATTACHMENT0 + ue, s.TEXTURE_2D, We, 0);
        }
        t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ge.__webglMultisampledFramebuffer);
      } else if (E.depthBuffer && E.resolveDepthBuffer === false && l) {
        const x = E.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [x]);
      }
    }
  }
  function ke(E) {
    return Math.min(i.maxSamples, E.samples);
  }
  function ze(E) {
    const x = n.get(E);
    return E.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === true && x.__useRenderToTexture !== false;
  }
  function xe(E) {
    const x = a.render.frame;
    h.get(E) !== x && (h.set(E, x), E.update());
  }
  function st(E, x) {
    const F = E.colorSpace, q = E.format, Z = E.type;
    return E.isCompressedTexture === true || E.isVideoTexture === true || F !== Rt && F !== In && (Ve.getTransfer(F) === et ? (q !== Vt || Z !== En) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", F)), x;
  }
  function ve(E) {
    return typeof HTMLImageElement < "u" && E instanceof HTMLImageElement ? (c.width = E.naturalWidth || E.width, c.height = E.naturalHeight || E.height) : typeof VideoFrame < "u" && E instanceof VideoFrame ? (c.width = E.displayWidth, c.height = E.displayHeight) : (c.width = E.width, c.height = E.height), c;
  }
  this.allocateTextureUnit = k, this.resetTextureUnits = G, this.setTexture2D = K, this.setTexture2DArray = H, this.setTexture3D = Q, this.setTextureCube = z, this.rebindTextures = Oe, this.setupRenderTarget = at, this.updateRenderTargetMipmap = Ge, this.updateMultisampleRenderTarget = Ot, this.setupDepthRenderbuffer = Pe, this.setupFrameBufferTexture = me, this.useMultisampledRTT = ze;
}
function kg(s, e) {
  function t(n, i = In) {
    let r;
    const a = Ve.getTransfer(i);
    if (n === En) return s.UNSIGNED_BYTE;
    if (n === Va) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === Ga) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === ec) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === Jl) return s.BYTE;
    if (n === Ql) return s.SHORT;
    if (n === as) return s.UNSIGNED_SHORT;
    if (n === Ha) return s.INT;
    if (n === ii) return s.UNSIGNED_INT;
    if (n === Jt) return s.FLOAT;
    if (n === us) return s.HALF_FLOAT;
    if (n === tc) return s.ALPHA;
    if (n === nc) return s.RGB;
    if (n === Vt) return s.RGBA;
    if (n === ic) return s.LUMINANCE;
    if (n === sc) return s.LUMINANCE_ALPHA;
    if (n === wi) return s.DEPTH_COMPONENT;
    if (n === Ni) return s.DEPTH_STENCIL;
    if (n === Wa) return s.RED;
    if (n === Xa) return s.RED_INTEGER;
    if (n === rc) return s.RG;
    if (n === Ya) return s.RG_INTEGER;
    if (n === qa) return s.RGBA_INTEGER;
    if (n === js || n === Ks || n === Zs || n === $s) if (a === et) if (r = e.get("WEBGL_compressed_texture_s3tc_srgb"), r !== null) {
      if (n === js) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
      if (n === Ks) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
      if (n === Zs) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
      if (n === $s) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
    } else return null;
    else if (r = e.get("WEBGL_compressed_texture_s3tc"), r !== null) {
      if (n === js) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
      if (n === Ks) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
      if (n === Zs) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
      if (n === $s) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
    } else return null;
    if (n === ra || n === aa || n === oa || n === la) if (r = e.get("WEBGL_compressed_texture_pvrtc"), r !== null) {
      if (n === ra) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
      if (n === aa) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
      if (n === oa) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
      if (n === la) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
    } else return null;
    if (n === ca || n === ha || n === ua) if (r = e.get("WEBGL_compressed_texture_etc"), r !== null) {
      if (n === ca || n === ha) return a === et ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
      if (n === ua) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : r.COMPRESSED_RGBA8_ETC2_EAC;
    } else return null;
    if (n === da || n === fa || n === pa || n === ma || n === ga || n === _a || n === xa || n === va || n === Ma || n === ya || n === Sa || n === Ea || n === Ta || n === ba) if (r = e.get("WEBGL_compressed_texture_astc"), r !== null) {
      if (n === da) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
      if (n === fa) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
      if (n === pa) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
      if (n === ma) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
      if (n === ga) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
      if (n === _a) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
      if (n === xa) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
      if (n === va) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
      if (n === Ma) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
      if (n === ya) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
      if (n === Sa) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
      if (n === Ea) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
      if (n === Ta) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
      if (n === ba) return a === et ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
    } else return null;
    if (n === Js || n === Aa || n === wa) if (r = e.get("EXT_texture_compression_bptc"), r !== null) {
      if (n === Js) return a === et ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      if (n === Aa) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
      if (n === wa) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
    } else return null;
    if (n === ac || n === Ra || n === Ca || n === Pa) if (r = e.get("EXT_texture_compression_rgtc"), r !== null) {
      if (n === Js) return r.COMPRESSED_RED_RGTC1_EXT;
      if (n === Ra) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
      if (n === Ca) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
      if (n === Pa) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
    } else return null;
    return n === Ui ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: t };
}
const zg = { type: "move" };
class Gr {
  constructor() {
    this._targetRay = null, this._grip = null, this._hand = null;
  }
  getHandSpace() {
    return this._hand === null && (this._hand = new ni(), this._hand.matrixAutoUpdate = false, this._hand.visible = false, this._hand.joints = {}, this._hand.inputState = { pinching: false }), this._hand;
  }
  getTargetRaySpace() {
    return this._targetRay === null && (this._targetRay = new ni(), this._targetRay.matrixAutoUpdate = false, this._targetRay.visible = false, this._targetRay.hasLinearVelocity = false, this._targetRay.linearVelocity = new R(), this._targetRay.hasAngularVelocity = false, this._targetRay.angularVelocity = new R()), this._targetRay;
  }
  getGripSpace() {
    return this._grip === null && (this._grip = new ni(), this._grip.matrixAutoUpdate = false, this._grip.visible = false, this._grip.hasLinearVelocity = false, this._grip.linearVelocity = new R(), this._grip.hasAngularVelocity = false, this._grip.angularVelocity = new R()), this._grip;
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
    let i = null, r = null, a = null;
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
      } else l !== null && e.gripSpace && (r = t.getPose(e.gripSpace, n), r !== null && (l.matrix.fromArray(r.transform.matrix), l.matrix.decompose(l.position, l.rotation, l.scale), l.matrixWorldNeedsUpdate = true, r.linearVelocity ? (l.hasLinearVelocity = true, l.linearVelocity.copy(r.linearVelocity)) : l.hasLinearVelocity = false, r.angularVelocity ? (l.hasAngularVelocity = true, l.angularVelocity.copy(r.angularVelocity)) : l.hasAngularVelocity = false));
      o !== null && (i = t.getPose(e.targetRaySpace, n), i === null && r !== null && (i = r), i !== null && (o.matrix.fromArray(i.transform.matrix), o.matrix.decompose(o.position, o.rotation, o.scale), o.matrixWorldNeedsUpdate = true, i.linearVelocity ? (o.hasLinearVelocity = true, o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = false, i.angularVelocity ? (o.hasAngularVelocity = true, o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = false, this.dispatchEvent(zg)));
    }
    return o !== null && (o.visible = i !== null), l !== null && (l.visible = r !== null), c !== null && (c.visible = a !== null), this;
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new ni();
      n.matrixAutoUpdate = false, n.visible = false, e.joints[t.jointName] = n, e.add(n);
    }
    return e.joints[t.jointName];
  }
}
const Hg = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`, Vg = `
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
class Gg {
  constructor() {
    this.texture = null, this.mesh = null, this.depthNear = 0, this.depthFar = 0;
  }
  init(e, t, n) {
    if (this.texture === null) {
      const i = new gt(), r = e.properties.get(i);
      r.__webglTexture = t.texture, (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear, this.depthFar = t.depthFar), this.texture = i;
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport, n = new Tn({ vertexShader: Hg, fragmentShader: Vg, uniforms: { depthColor: { value: this.texture }, depthWidth: { value: t.z }, depthHeight: { value: t.w } } });
      this.mesh = new Lt(new or(20, 20), n);
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
class Wg extends si {
  constructor(e, t) {
    super();
    const n = this;
    let i = null, r = 1, a = null, o = "local-floor", l = 1, c = null, h = null, u = null, d = null, p = null, g = null;
    const _ = new Gg(), m = t.getContextAttributes();
    let f = null, b = null;
    const T = [], y = [], L = new be();
    let w = null;
    const A = new bt();
    A.viewport = new Ye();
    const N = new bt();
    N.viewport = new Ye();
    const S = [A, N], M = new Zu();
    let P = null, G = null;
    this.cameraAutoUpdate = true, this.enabled = false, this.isPresenting = false, this.getController = function(Y) {
      let ee = T[Y];
      return ee === void 0 && (ee = new Gr(), T[Y] = ee), ee.getTargetRaySpace();
    }, this.getControllerGrip = function(Y) {
      let ee = T[Y];
      return ee === void 0 && (ee = new Gr(), T[Y] = ee), ee.getGripSpace();
    }, this.getHand = function(Y) {
      let ee = T[Y];
      return ee === void 0 && (ee = new Gr(), T[Y] = ee), ee.getHandSpace();
    };
    function k(Y) {
      const ee = y.indexOf(Y.inputSource);
      if (ee === -1) return;
      const me = T[ee];
      me !== void 0 && (me.update(Y.inputSource, Y.frame, c || a), me.dispatchEvent({ type: Y.type, data: Y.inputSource }));
    }
    function W() {
      i.removeEventListener("select", k), i.removeEventListener("selectstart", k), i.removeEventListener("selectend", k), i.removeEventListener("squeeze", k), i.removeEventListener("squeezestart", k), i.removeEventListener("squeezeend", k), i.removeEventListener("end", W), i.removeEventListener("inputsourceschange", K);
      for (let Y = 0; Y < T.length; Y++) {
        const ee = y[Y];
        ee !== null && (y[Y] = null, T[Y].disconnect(ee));
      }
      P = null, G = null, _.reset(), e.setRenderTarget(f), p = null, d = null, u = null, i = null, b = null, je.stop(), n.isPresenting = false, e.setPixelRatio(w), e.setSize(L.width, L.height, false), n.dispatchEvent({ type: "sessionend" });
    }
    this.setFramebufferScaleFactor = function(Y) {
      r = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.");
    }, this.setReferenceSpaceType = function(Y) {
      o = Y, n.isPresenting === true && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.");
    }, this.getReferenceSpace = function() {
      return c || a;
    }, this.setReferenceSpace = function(Y) {
      c = Y;
    }, this.getBaseLayer = function() {
      return d !== null ? d : p;
    }, this.getBinding = function() {
      return u;
    }, this.getFrame = function() {
      return g;
    }, this.getSession = function() {
      return i;
    }, this.setSession = async function(Y) {
      if (i = Y, i !== null) {
        if (f = e.getRenderTarget(), i.addEventListener("select", k), i.addEventListener("selectstart", k), i.addEventListener("selectend", k), i.addEventListener("squeeze", k), i.addEventListener("squeezestart", k), i.addEventListener("squeezeend", k), i.addEventListener("end", W), i.addEventListener("inputsourceschange", K), m.xrCompatible !== true && await t.makeXRCompatible(), w = e.getPixelRatio(), e.getSize(L), i.renderState.layers === void 0) {
          const ee = { antialias: m.antialias, alpha: true, depth: m.depth, stencil: m.stencil, framebufferScaleFactor: r };
          p = new XRWebGLLayer(i, t, ee), i.updateRenderState({ baseLayer: p }), e.setPixelRatio(1), e.setSize(p.framebufferWidth, p.framebufferHeight, false), b = new Bn(p.framebufferWidth, p.framebufferHeight, { format: Vt, type: En, colorSpace: e.outputColorSpace, stencilBuffer: m.stencil });
        } else {
          let ee = null, me = null, re = null;
          m.depth && (re = m.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24, ee = m.stencil ? Ni : wi, me = m.stencil ? Ui : ii);
          const Te = { colorFormat: t.RGBA8, depthFormat: re, scaleFactor: r };
          u = new XRWebGLBinding(i, t), d = u.createProjectionLayer(Te), i.updateRenderState({ layers: [d] }), e.setPixelRatio(1), e.setSize(d.textureWidth, d.textureHeight, false), b = new Bn(d.textureWidth, d.textureHeight, { format: Vt, type: En, depthTexture: new Ec(d.textureWidth, d.textureHeight, me, void 0, void 0, void 0, void 0, void 0, void 0, ee), stencilBuffer: m.stencil, colorSpace: e.outputColorSpace, samples: m.antialias ? 4 : 0, resolveDepthBuffer: d.ignoreDepthValues === false });
        }
        b.isXRRenderTarget = true, this.setFoveation(l), c = null, a = await i.requestReferenceSpace(o), je.setContext(i), je.start(), n.isPresenting = true, n.dispatchEvent({ type: "sessionstart" });
      }
    }, this.getEnvironmentBlendMode = function() {
      if (i !== null) return i.environmentBlendMode;
    }, this.getDepthTexture = function() {
      return _.getDepthTexture();
    };
    function K(Y) {
      for (let ee = 0; ee < Y.removed.length; ee++) {
        const me = Y.removed[ee], re = y.indexOf(me);
        re >= 0 && (y[re] = null, T[re].disconnect(me));
      }
      for (let ee = 0; ee < Y.added.length; ee++) {
        const me = Y.added[ee];
        let re = y.indexOf(me);
        if (re === -1) {
          for (let Pe = 0; Pe < T.length; Pe++) if (Pe >= y.length) {
            y.push(me), re = Pe;
            break;
          } else if (y[Pe] === null) {
            y[Pe] = me, re = Pe;
            break;
          }
          if (re === -1) break;
        }
        const Te = T[re];
        Te && Te.connect(me);
      }
    }
    const H = new R(), Q = new R();
    function z(Y, ee, me) {
      H.setFromMatrixPosition(ee.matrixWorld), Q.setFromMatrixPosition(me.matrixWorld);
      const re = H.distanceTo(Q), Te = ee.projectionMatrix.elements, Pe = me.projectionMatrix.elements, Oe = Te[14] / (Te[10] - 1), at = Te[14] / (Te[10] + 1), Ge = (Te[9] + 1) / Te[5], ct = (Te[9] - 1) / Te[5], C = (Te[8] - 1) / Te[0], Ot = (Pe[8] + 1) / Pe[0], ke = Oe * C, ze = Oe * Ot, xe = re / (-C + Ot), st = xe * -C;
      if (ee.matrixWorld.decompose(Y.position, Y.quaternion, Y.scale), Y.translateX(st), Y.translateZ(xe), Y.matrixWorld.compose(Y.position, Y.quaternion, Y.scale), Y.matrixWorldInverse.copy(Y.matrixWorld).invert(), Te[10] === -1) Y.projectionMatrix.copy(ee.projectionMatrix), Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse);
      else {
        const ve = Oe + xe, E = at + xe, x = ke - st, F = ze + (re - st), q = Ge * at / E * ve, Z = ct * at / E * ve;
        Y.projectionMatrix.makePerspective(x, F, q, Z, ve, E), Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert();
      }
    }
    function te(Y, ee) {
      ee === null ? Y.matrixWorld.copy(Y.matrix) : Y.matrixWorld.multiplyMatrices(ee.matrixWorld, Y.matrix), Y.matrixWorldInverse.copy(Y.matrixWorld).invert();
    }
    this.updateCamera = function(Y) {
      if (i === null) return;
      let ee = Y.near, me = Y.far;
      _.texture !== null && (_.depthNear > 0 && (ee = _.depthNear), _.depthFar > 0 && (me = _.depthFar)), M.near = N.near = A.near = ee, M.far = N.far = A.far = me, (P !== M.near || G !== M.far) && (i.updateRenderState({ depthNear: M.near, depthFar: M.far }), P = M.near, G = M.far), A.layers.mask = Y.layers.mask | 2, N.layers.mask = Y.layers.mask | 4, M.layers.mask = A.layers.mask | N.layers.mask;
      const re = Y.parent, Te = M.cameras;
      te(M, re);
      for (let Pe = 0; Pe < Te.length; Pe++) te(Te[Pe], re);
      Te.length === 2 ? z(M, A, N) : M.projectionMatrix.copy(A.projectionMatrix), ce(Y, M, re);
    };
    function ce(Y, ee, me) {
      me === null ? Y.matrix.copy(ee.matrixWorld) : (Y.matrix.copy(me.matrixWorld), Y.matrix.invert(), Y.matrix.multiply(ee.matrixWorld)), Y.matrix.decompose(Y.position, Y.quaternion, Y.scale), Y.updateMatrixWorld(true), Y.projectionMatrix.copy(ee.projectionMatrix), Y.projectionMatrixInverse.copy(ee.projectionMatrixInverse), Y.isPerspectiveCamera && (Y.fov = Fi * 2 * Math.atan(1 / Y.projectionMatrix.elements[5]), Y.zoom = 1);
    }
    this.getCamera = function() {
      return M;
    }, this.getFoveation = function() {
      if (!(d === null && p === null)) return l;
    }, this.setFoveation = function(Y) {
      l = Y, d !== null && (d.fixedFoveation = Y), p !== null && p.fixedFoveation !== void 0 && (p.fixedFoveation = Y);
    }, this.hasDepthSensing = function() {
      return _.texture !== null;
    }, this.getDepthSensingMesh = function() {
      return _.getMesh(M);
    };
    let _e = null;
    function Ne(Y, ee) {
      if (h = ee.getViewerPose(c || a), g = ee, h !== null) {
        const me = h.views;
        p !== null && (e.setRenderTargetFramebuffer(b, p.framebuffer), e.setRenderTarget(b));
        let re = false;
        me.length !== M.cameras.length && (M.cameras.length = 0, re = true);
        for (let Pe = 0; Pe < me.length; Pe++) {
          const Oe = me[Pe];
          let at = null;
          if (p !== null) at = p.getViewport(Oe);
          else {
            const ct = u.getViewSubImage(d, Oe);
            at = ct.viewport, Pe === 0 && (e.setRenderTargetTextures(b, ct.colorTexture, d.ignoreDepthValues ? void 0 : ct.depthStencilTexture), e.setRenderTarget(b));
          }
          let Ge = S[Pe];
          Ge === void 0 && (Ge = new bt(), Ge.layers.enable(Pe), Ge.viewport = new Ye(), S[Pe] = Ge), Ge.matrix.fromArray(Oe.transform.matrix), Ge.matrix.decompose(Ge.position, Ge.quaternion, Ge.scale), Ge.projectionMatrix.fromArray(Oe.projectionMatrix), Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(), Ge.viewport.set(at.x, at.y, at.width, at.height), Pe === 0 && (M.matrix.copy(Ge.matrix), M.matrix.decompose(M.position, M.quaternion, M.scale)), re === true && M.cameras.push(Ge);
        }
        const Te = i.enabledFeatures;
        if (Te && Te.includes("depth-sensing")) {
          const Pe = u.getDepthInformation(me[0]);
          Pe && Pe.isValid && Pe.texture && _.init(e, Pe, i.renderState);
        }
      }
      for (let me = 0; me < T.length; me++) {
        const re = y[me], Te = T[me];
        re !== null && Te !== void 0 && Te.update(re, ee, c || a);
      }
      _e && _e(Y, ee), ee.detectedPlanes && n.dispatchEvent({ type: "planesdetected", data: ee }), g = null;
    }
    const je = new wc();
    je.setAnimationLoop(Ne), this.setAnimationLoop = function(Y) {
      _e = Y;
    }, this.dispose = function() {
    };
  }
}
const Zn = new nn(), Xg = new Re();
function Yg(s, e) {
  function t(m, f) {
    m.matrixAutoUpdate === true && m.updateMatrix(), f.value.copy(m.matrix);
  }
  function n(m, f) {
    f.color.getRGB(m.fogColor.value, gc(s)), f.isFog ? (m.fogNear.value = f.near, m.fogFar.value = f.far) : f.isFogExp2 && (m.fogDensity.value = f.density);
  }
  function i(m, f, b, T, y) {
    f.isMeshBasicMaterial || f.isMeshLambertMaterial ? r(m, f) : f.isMeshToonMaterial ? (r(m, f), u(m, f)) : f.isMeshPhongMaterial ? (r(m, f), h(m, f)) : f.isMeshStandardMaterial ? (r(m, f), d(m, f), f.isMeshPhysicalMaterial && p(m, f, y)) : f.isMeshMatcapMaterial ? (r(m, f), g(m, f)) : f.isMeshDepthMaterial ? r(m, f) : f.isMeshDistanceMaterial ? (r(m, f), _(m, f)) : f.isMeshNormalMaterial ? r(m, f) : f.isLineBasicMaterial ? (a(m, f), f.isLineDashedMaterial && o(m, f)) : f.isPointsMaterial ? l(m, f, b, T) : f.isSpriteMaterial ? c(m, f) : f.isShadowMaterial ? (m.color.value.copy(f.color), m.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = false);
  }
  function r(m, f) {
    m.opacity.value = f.opacity, f.color && m.diffuse.value.copy(f.color), f.emissive && m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity), f.map && (m.map.value = f.map, t(f.map, m.mapTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.bumpMap && (m.bumpMap.value = f.bumpMap, t(f.bumpMap, m.bumpMapTransform), m.bumpScale.value = f.bumpScale, f.side === Dt && (m.bumpScale.value *= -1)), f.normalMap && (m.normalMap.value = f.normalMap, t(f.normalMap, m.normalMapTransform), m.normalScale.value.copy(f.normalScale), f.side === Dt && m.normalScale.value.negate()), f.displacementMap && (m.displacementMap.value = f.displacementMap, t(f.displacementMap, m.displacementMapTransform), m.displacementScale.value = f.displacementScale, m.displacementBias.value = f.displacementBias), f.emissiveMap && (m.emissiveMap.value = f.emissiveMap, t(f.emissiveMap, m.emissiveMapTransform)), f.specularMap && (m.specularMap.value = f.specularMap, t(f.specularMap, m.specularMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
    const b = e.get(f), T = b.envMap, y = b.envMapRotation;
    T && (m.envMap.value = T, Zn.copy(y), Zn.x *= -1, Zn.y *= -1, Zn.z *= -1, T.isCubeTexture && T.isRenderTargetTexture === false && (Zn.y *= -1, Zn.z *= -1), m.envMapRotation.value.setFromMatrix4(Xg.makeRotationFromEuler(Zn)), m.flipEnvMap.value = T.isCubeTexture && T.isRenderTargetTexture === false ? -1 : 1, m.reflectivity.value = f.reflectivity, m.ior.value = f.ior, m.refractionRatio.value = f.refractionRatio), f.lightMap && (m.lightMap.value = f.lightMap, m.lightMapIntensity.value = f.lightMapIntensity, t(f.lightMap, m.lightMapTransform)), f.aoMap && (m.aoMap.value = f.aoMap, m.aoMapIntensity.value = f.aoMapIntensity, t(f.aoMap, m.aoMapTransform));
  }
  function a(m, f) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, f.map && (m.map.value = f.map, t(f.map, m.mapTransform));
  }
  function o(m, f) {
    m.dashSize.value = f.dashSize, m.totalSize.value = f.dashSize + f.gapSize, m.scale.value = f.scale;
  }
  function l(m, f, b, T) {
    m.diffuse.value.copy(f.color), m.opacity.value = f.opacity, m.size.value = f.size * b, m.scale.value = T * 0.5, f.map && (m.map.value = f.map, t(f.map, m.uvTransform)), f.alphaMap && (m.alphaMap.value = f.alphaMap, t(f.alphaMap, m.alphaMapTransform)), f.alphaTest > 0 && (m.alphaTest.value = f.alphaTest);
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
  function p(m, f, b) {
    m.ior.value = f.ior, f.sheen > 0 && (m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen), m.sheenRoughness.value = f.sheenRoughness, f.sheenColorMap && (m.sheenColorMap.value = f.sheenColorMap, t(f.sheenColorMap, m.sheenColorMapTransform)), f.sheenRoughnessMap && (m.sheenRoughnessMap.value = f.sheenRoughnessMap, t(f.sheenRoughnessMap, m.sheenRoughnessMapTransform))), f.clearcoat > 0 && (m.clearcoat.value = f.clearcoat, m.clearcoatRoughness.value = f.clearcoatRoughness, f.clearcoatMap && (m.clearcoatMap.value = f.clearcoatMap, t(f.clearcoatMap, m.clearcoatMapTransform)), f.clearcoatRoughnessMap && (m.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap, t(f.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)), f.clearcoatNormalMap && (m.clearcoatNormalMap.value = f.clearcoatNormalMap, t(f.clearcoatNormalMap, m.clearcoatNormalMapTransform), m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale), f.side === Dt && m.clearcoatNormalScale.value.negate())), f.dispersion > 0 && (m.dispersion.value = f.dispersion), f.iridescence > 0 && (m.iridescence.value = f.iridescence, m.iridescenceIOR.value = f.iridescenceIOR, m.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0], m.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1], f.iridescenceMap && (m.iridescenceMap.value = f.iridescenceMap, t(f.iridescenceMap, m.iridescenceMapTransform)), f.iridescenceThicknessMap && (m.iridescenceThicknessMap.value = f.iridescenceThicknessMap, t(f.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))), f.transmission > 0 && (m.transmission.value = f.transmission, m.transmissionSamplerMap.value = b.texture, m.transmissionSamplerSize.value.set(b.width, b.height), f.transmissionMap && (m.transmissionMap.value = f.transmissionMap, t(f.transmissionMap, m.transmissionMapTransform)), m.thickness.value = f.thickness, f.thicknessMap && (m.thicknessMap.value = f.thicknessMap, t(f.thicknessMap, m.thicknessMapTransform)), m.attenuationDistance.value = f.attenuationDistance, m.attenuationColor.value.copy(f.attenuationColor)), f.anisotropy > 0 && (m.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)), f.anisotropyMap && (m.anisotropyMap.value = f.anisotropyMap, t(f.anisotropyMap, m.anisotropyMapTransform))), m.specularIntensity.value = f.specularIntensity, m.specularColor.value.copy(f.specularColor), f.specularColorMap && (m.specularColorMap.value = f.specularColorMap, t(f.specularColorMap, m.specularColorMapTransform)), f.specularIntensityMap && (m.specularIntensityMap.value = f.specularIntensityMap, t(f.specularIntensityMap, m.specularIntensityMapTransform));
  }
  function g(m, f) {
    f.matcap && (m.matcap.value = f.matcap);
  }
  function _(m, f) {
    const b = e.get(f).light;
    m.referencePosition.value.setFromMatrixPosition(b.matrixWorld), m.nearDistance.value = b.shadow.camera.near, m.farDistance.value = b.shadow.camera.far;
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function qg(s, e, t, n) {
  let i = {}, r = {}, a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(b, T) {
    const y = T.program;
    n.uniformBlockBinding(b, y);
  }
  function c(b, T) {
    let y = i[b.id];
    y === void 0 && (g(b), y = h(b), i[b.id] = y, b.addEventListener("dispose", m));
    const L = T.program;
    n.updateUBOMapping(b, L);
    const w = e.render.frame;
    r[b.id] !== w && (d(b), r[b.id] = w);
  }
  function h(b) {
    const T = u();
    b.__bindingPointIndex = T;
    const y = s.createBuffer(), L = b.__size, w = b.usage;
    return s.bindBuffer(s.UNIFORM_BUFFER, y), s.bufferData(s.UNIFORM_BUFFER, L, w), s.bindBuffer(s.UNIFORM_BUFFER, null), s.bindBufferBase(s.UNIFORM_BUFFER, T, y), y;
  }
  function u() {
    for (let b = 0; b < o; b++) if (a.indexOf(b) === -1) return a.push(b), b;
    return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."), 0;
  }
  function d(b) {
    const T = i[b.id], y = b.uniforms, L = b.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, T);
    for (let w = 0, A = y.length; w < A; w++) {
      const N = Array.isArray(y[w]) ? y[w] : [y[w]];
      for (let S = 0, M = N.length; S < M; S++) {
        const P = N[S];
        if (p(P, w, S, L) === true) {
          const G = P.__offset, k = Array.isArray(P.value) ? P.value : [P.value];
          let W = 0;
          for (let K = 0; K < k.length; K++) {
            const H = k[K], Q = _(H);
            typeof H == "number" || typeof H == "boolean" ? (P.__data[0] = H, s.bufferSubData(s.UNIFORM_BUFFER, G + W, P.__data)) : H.isMatrix3 ? (P.__data[0] = H.elements[0], P.__data[1] = H.elements[1], P.__data[2] = H.elements[2], P.__data[3] = 0, P.__data[4] = H.elements[3], P.__data[5] = H.elements[4], P.__data[6] = H.elements[5], P.__data[7] = 0, P.__data[8] = H.elements[6], P.__data[9] = H.elements[7], P.__data[10] = H.elements[8], P.__data[11] = 0) : (H.toArray(P.__data, W), W += Q.storage / Float32Array.BYTES_PER_ELEMENT);
          }
          s.bufferSubData(s.UNIFORM_BUFFER, G, P.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function p(b, T, y, L) {
    const w = b.value, A = T + "_" + y;
    if (L[A] === void 0) return typeof w == "number" || typeof w == "boolean" ? L[A] = w : L[A] = w.clone(), true;
    {
      const N = L[A];
      if (typeof w == "number" || typeof w == "boolean") {
        if (N !== w) return L[A] = w, true;
      } else if (N.equals(w) === false) return N.copy(w), true;
    }
    return false;
  }
  function g(b) {
    const T = b.uniforms;
    let y = 0;
    const L = 16;
    for (let A = 0, N = T.length; A < N; A++) {
      const S = Array.isArray(T[A]) ? T[A] : [T[A]];
      for (let M = 0, P = S.length; M < P; M++) {
        const G = S[M], k = Array.isArray(G.value) ? G.value : [G.value];
        for (let W = 0, K = k.length; W < K; W++) {
          const H = k[W], Q = _(H), z = y % L, te = z % Q.boundary, ce = z + te;
          y += te, ce !== 0 && L - ce < Q.storage && (y += L - ce), G.__data = new Float32Array(Q.storage / Float32Array.BYTES_PER_ELEMENT), G.__offset = y, y += Q.storage;
        }
      }
    }
    const w = y % L;
    return w > 0 && (y += L - w), b.__size = y, b.__cache = {}, this;
  }
  function _(b) {
    const T = { boundary: 0, storage: 0 };
    return typeof b == "number" || typeof b == "boolean" ? (T.boundary = 4, T.storage = 4) : b.isVector2 ? (T.boundary = 8, T.storage = 8) : b.isVector3 || b.isColor ? (T.boundary = 16, T.storage = 12) : b.isVector4 ? (T.boundary = 16, T.storage = 16) : b.isMatrix3 ? (T.boundary = 48, T.storage = 48) : b.isMatrix4 ? (T.boundary = 64, T.storage = 64) : b.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", b), T;
  }
  function m(b) {
    const T = b.target;
    T.removeEventListener("dispose", m);
    const y = a.indexOf(T.__bindingPointIndex);
    a.splice(y, 1), s.deleteBuffer(i[T.id]), delete i[T.id], delete r[T.id];
  }
  function f() {
    for (const b in i) s.deleteBuffer(i[b]);
    a = [], i = {}, r = {};
  }
  return { bind: l, update: c, dispose: f };
}
class Z_ {
  constructor(e = {}) {
    const { canvas: t = Xh(), context: n = null, depth: i = true, stencil: r = false, alpha: a = false, antialias: o = false, premultipliedAlpha: l = true, preserveDrawingBuffer: c = false, powerPreference: h = "default", failIfMajorPerformanceCaveat: u = false, reverseDepthBuffer: d = false } = e;
    this.isWebGLRenderer = true;
    let p;
    if (n !== null) {
      if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext) throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
      p = n.getContextAttributes().alpha;
    } else p = a;
    const g = new Uint32Array(4), _ = new Int32Array(4);
    let m = null, f = null;
    const b = [], T = [];
    this.domElement = t, this.debug = { checkShaderErrors: true, onShaderError: null }, this.autoClear = true, this.autoClearColor = true, this.autoClearDepth = true, this.autoClearStencil = true, this.sortObjects = true, this.clippingPlanes = [], this.localClippingEnabled = false, this._outputColorSpace = xt, this.toneMapping = On, this.toneMappingExposure = 1;
    const y = this;
    let L = false, w = 0, A = 0, N = null, S = -1, M = null;
    const P = new Ye(), G = new Ye();
    let k = null;
    const W = new ye(0);
    let K = 0, H = t.width, Q = t.height, z = 1, te = null, ce = null;
    const _e = new Ye(0, 0, H, Q), Ne = new Ye(0, 0, H, Q);
    let je = false;
    const Y = new Qa();
    let ee = false, me = false;
    const re = new Re(), Te = new Re(), Pe = new R(), Oe = new Ye(), at = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: true };
    let Ge = false;
    function ct() {
      return N === null ? z : 1;
    }
    let C = n;
    function Ot(v, I) {
      return t.getContext(v, I);
    }
    try {
      const v = { alpha: true, depth: i, stencil: r, antialias: o, premultipliedAlpha: l, preserveDrawingBuffer: c, powerPreference: h, failIfMajorPerformanceCaveat: u };
      if ("setAttribute" in t && t.setAttribute("data-engine", "three.js r171"), t.addEventListener("webglcontextlost", j, false), t.addEventListener("webglcontextrestored", le, false), t.addEventListener("webglcontextcreationerror", oe, false), C === null) {
        const I = "webgl2";
        if (C = Ot(I, v), C === null) throw Ot(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
      }
    } catch (v) {
      throw console.error("THREE.WebGLRenderer: " + v.message), v;
    }
    let ke, ze, xe, st, ve, E, x, F, q, Z, X, ge, ae, ue, We, J, de, Ee, Ae, fe, He, Ie, it, D;
    function ie() {
      ke = new im(C), ke.init(), Ie = new kg(C, ke), ze = new $p(C, ke, e, Ie), xe = new Og(C, ke), ze.reverseDepthBuffer && d && xe.buffers.depth.setReversed(true), st = new am(C), ve = new Tg(), E = new Bg(C, ke, xe, ve, ze, Ie, st), x = new Qp(y), F = new nm(y), q = new dd(C), it = new Kp(C, q), Z = new sm(C, q, st, it), X = new lm(C, Z, q, st), Ae = new om(C, ze, E), J = new Jp(ve), ge = new Eg(y, x, F, ke, ze, it, J), ae = new Yg(y, ve), ue = new Ag(), We = new Dg(ke), Ee = new jp(y, x, F, xe, X, p, l), de = new Ng(y, X, ze), D = new qg(C, st, ze, xe), fe = new Zp(C, ke, st), He = new rm(C, ke, st), st.programs = ge.programs, y.capabilities = ze, y.extensions = ke, y.properties = ve, y.renderLists = ue, y.shadowMap = de, y.state = xe, y.info = st;
    }
    ie();
    const V = new Wg(y, C);
    this.xr = V, this.getContext = function() {
      return C;
    }, this.getContextAttributes = function() {
      return C.getContextAttributes();
    }, this.forceContextLoss = function() {
      const v = ke.get("WEBGL_lose_context");
      v && v.loseContext();
    }, this.forceContextRestore = function() {
      const v = ke.get("WEBGL_lose_context");
      v && v.restoreContext();
    }, this.getPixelRatio = function() {
      return z;
    }, this.setPixelRatio = function(v) {
      v !== void 0 && (z = v, this.setSize(H, Q, false));
    }, this.getSize = function(v) {
      return v.set(H, Q);
    }, this.setSize = function(v, I, O = true) {
      if (V.isPresenting) {
        console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
        return;
      }
      H = v, Q = I, t.width = Math.floor(v * z), t.height = Math.floor(I * z), O === true && (t.style.width = v + "px", t.style.height = I + "px"), this.setViewport(0, 0, v, I);
    }, this.getDrawingBufferSize = function(v) {
      return v.set(H * z, Q * z).floor();
    }, this.setDrawingBufferSize = function(v, I, O) {
      H = v, Q = I, z = O, t.width = Math.floor(v * O), t.height = Math.floor(I * O), this.setViewport(0, 0, v, I);
    }, this.getCurrentViewport = function(v) {
      return v.copy(P);
    }, this.getViewport = function(v) {
      return v.copy(_e);
    }, this.setViewport = function(v, I, O, B) {
      v.isVector4 ? _e.set(v.x, v.y, v.z, v.w) : _e.set(v, I, O, B), xe.viewport(P.copy(_e).multiplyScalar(z).round());
    }, this.getScissor = function(v) {
      return v.copy(Ne);
    }, this.setScissor = function(v, I, O, B) {
      v.isVector4 ? Ne.set(v.x, v.y, v.z, v.w) : Ne.set(v, I, O, B), xe.scissor(G.copy(Ne).multiplyScalar(z).round());
    }, this.getScissorTest = function() {
      return je;
    }, this.setScissorTest = function(v) {
      xe.setScissorTest(je = v);
    }, this.setOpaqueSort = function(v) {
      te = v;
    }, this.setTransparentSort = function(v) {
      ce = v;
    }, this.getClearColor = function(v) {
      return v.copy(Ee.getClearColor());
    }, this.setClearColor = function() {
      Ee.setClearColor.apply(Ee, arguments);
    }, this.getClearAlpha = function() {
      return Ee.getClearAlpha();
    }, this.setClearAlpha = function() {
      Ee.setClearAlpha.apply(Ee, arguments);
    }, this.clear = function(v = true, I = true, O = true) {
      let B = 0;
      if (v) {
        let U = false;
        if (N !== null) {
          const $ = N.texture.format;
          U = $ === qa || $ === Ya || $ === Xa;
        }
        if (U) {
          const $ = N.texture.type, se = $ === En || $ === ii || $ === as || $ === Ui || $ === Va || $ === Ga, he = Ee.getClearColor(), pe = Ee.getClearAlpha(), we = he.r, Ce = he.g, Me = he.b;
          se ? (g[0] = we, g[1] = Ce, g[2] = Me, g[3] = pe, C.clearBufferuiv(C.COLOR, 0, g)) : (_[0] = we, _[1] = Ce, _[2] = Me, _[3] = pe, C.clearBufferiv(C.COLOR, 0, _));
        } else B |= C.COLOR_BUFFER_BIT;
      }
      I && (B |= C.DEPTH_BUFFER_BIT), O && (B |= C.STENCIL_BUFFER_BIT, this.state.buffers.stencil.setMask(4294967295)), C.clear(B);
    }, this.clearColor = function() {
      this.clear(true, false, false);
    }, this.clearDepth = function() {
      this.clear(false, true, false);
    }, this.clearStencil = function() {
      this.clear(false, false, true);
    }, this.dispose = function() {
      t.removeEventListener("webglcontextlost", j, false), t.removeEventListener("webglcontextrestored", le, false), t.removeEventListener("webglcontextcreationerror", oe, false), Ee.dispose(), ue.dispose(), We.dispose(), ve.dispose(), x.dispose(), F.dispose(), X.dispose(), it.dispose(), D.dispose(), ge.dispose(), V.dispose(), V.removeEventListener("sessionstart", co), V.removeEventListener("sessionend", ho), kn.stop();
    };
    function j(v) {
      v.preventDefault(), console.log("THREE.WebGLRenderer: Context Lost."), L = true;
    }
    function le() {
      console.log("THREE.WebGLRenderer: Context Restored."), L = false;
      const v = st.autoReset, I = de.enabled, O = de.autoUpdate, B = de.needsUpdate, U = de.type;
      ie(), st.autoReset = v, de.enabled = I, de.autoUpdate = O, de.needsUpdate = B, de.type = U;
    }
    function oe(v) {
      console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", v.statusMessage);
    }
    function Le(v) {
      const I = v.target;
      I.removeEventListener("dispose", Le), ot(I);
    }
    function ot(v) {
      vt(v), ve.remove(v);
    }
    function vt(v) {
      const I = ve.get(v).programs;
      I !== void 0 && (I.forEach(function(O) {
        ge.releaseProgram(O);
      }), v.isShaderMaterial && ge.releaseShaderCache(v));
    }
    this.renderBufferDirect = function(v, I, O, B, U, $) {
      I === null && (I = at);
      const se = U.isMesh && U.matrixWorld.determinant() < 0, he = Nc(v, I, O, B, U);
      xe.setMaterial(B, se);
      let pe = O.index, we = 1;
      if (B.wireframe === true) {
        if (pe = Z.getWireframeAttribute(O), pe === void 0) return;
        we = 2;
      }
      const Ce = O.drawRange, Me = O.attributes.position;
      let Xe = Ce.start * we, Ke = (Ce.start + Ce.count) * we;
      $ !== null && (Xe = Math.max(Xe, $.start * we), Ke = Math.min(Ke, ($.start + $.count) * we)), pe !== null ? (Xe = Math.max(Xe, 0), Ke = Math.min(Ke, pe.count)) : Me != null && (Xe = Math.max(Xe, 0), Ke = Math.min(Ke, Me.count));
      const ht = Ke - Xe;
      if (ht < 0 || ht === 1 / 0) return;
      it.setup(U, B, he, O, pe);
      let lt, qe = fe;
      if (pe !== null && (lt = q.get(pe), qe = He, qe.setIndex(lt)), U.isMesh) B.wireframe === true ? (xe.setLineWidth(B.wireframeLinewidth * ct()), qe.setMode(C.LINES)) : qe.setMode(C.TRIANGLES);
      else if (U.isLine) {
        let Se = B.linewidth;
        Se === void 0 && (Se = 1), xe.setLineWidth(Se * ct()), U.isLineSegments ? qe.setMode(C.LINES) : U.isLineLoop ? qe.setMode(C.LINE_LOOP) : qe.setMode(C.LINE_STRIP);
      } else U.isPoints ? qe.setMode(C.POINTS) : U.isSprite && qe.setMode(C.TRIANGLES);
      if (U.isBatchedMesh) if (U._multiDrawInstances !== null) qe.renderMultiDrawInstances(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount, U._multiDrawInstances);
      else if (ke.get("WEBGL_multi_draw")) qe.renderMultiDraw(U._multiDrawStarts, U._multiDrawCounts, U._multiDrawCount);
      else {
        const Se = U._multiDrawStarts, _t = U._multiDrawCounts, Ze = U._multiDrawCount, Yt = pe ? q.get(pe).bytesPerElement : 1, ai = ve.get(B).currentProgram.getUniforms();
        for (let It = 0; It < Ze; It++) ai.setValue(C, "_gl_DrawID", It), qe.render(Se[It] / Yt, _t[It]);
      }
      else if (U.isInstancedMesh) qe.renderInstances(Xe, ht, U.count);
      else if (O.isInstancedBufferGeometry) {
        const Se = O._maxInstanceCount !== void 0 ? O._maxInstanceCount : 1 / 0, _t = Math.min(O.instanceCount, Se);
        qe.renderInstances(Xe, ht, _t);
      } else qe.render(Xe, ht);
    };
    function $e(v, I, O) {
      v.transparent === true && v.side === rn && v.forceSinglePass === false ? (v.side = Dt, v.needsUpdate = true, gs(v, I, O), v.side = an, v.needsUpdate = true, gs(v, I, O), v.side = rn) : gs(v, I, O);
    }
    this.compile = function(v, I, O = null) {
      O === null && (O = v), f = We.get(O), f.init(I), T.push(f), O.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), v !== O && v.traverseVisible(function(U) {
        U.isLight && U.layers.test(I.layers) && (f.pushLight(U), U.castShadow && f.pushShadow(U));
      }), f.setupLights();
      const B = /* @__PURE__ */ new Set();
      return v.traverse(function(U) {
        if (!(U.isMesh || U.isPoints || U.isLine || U.isSprite)) return;
        const $ = U.material;
        if ($) if (Array.isArray($)) for (let se = 0; se < $.length; se++) {
          const he = $[se];
          $e(he, O, U), B.add(he);
        }
        else $e($, O, U), B.add($);
      }), T.pop(), f = null, B;
    }, this.compileAsync = function(v, I, O = null) {
      const B = this.compile(v, I, O);
      return new Promise((U) => {
        function $() {
          if (B.forEach(function(se) {
            ve.get(se).currentProgram.isReady() && B.delete(se);
          }), B.size === 0) {
            U(v);
            return;
          }
          setTimeout($, 10);
        }
        ke.get("KHR_parallel_shader_compile") !== null ? $() : setTimeout($, 10);
      });
    };
    let Xt = null;
    function hn(v) {
      Xt && Xt(v);
    }
    function co() {
      kn.stop();
    }
    function ho() {
      kn.start();
    }
    const kn = new wc();
    kn.setAnimationLoop(hn), typeof self < "u" && kn.setContext(self), this.setAnimationLoop = function(v) {
      Xt = v, V.setAnimationLoop(v), v === null ? kn.stop() : kn.start();
    }, V.addEventListener("sessionstart", co), V.addEventListener("sessionend", ho), this.render = function(v, I) {
      if (I !== void 0 && I.isCamera !== true) {
        console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
        return;
      }
      if (L === true) return;
      if (v.matrixWorldAutoUpdate === true && v.updateMatrixWorld(), I.parent === null && I.matrixWorldAutoUpdate === true && I.updateMatrixWorld(), V.enabled === true && V.isPresenting === true && (V.cameraAutoUpdate === true && V.updateCamera(I), I = V.getCamera()), v.isScene === true && v.onBeforeRender(y, v, I, N), f = We.get(v, T.length), f.init(I), T.push(f), Te.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse), Y.setFromProjectionMatrix(Te), me = this.localClippingEnabled, ee = J.init(this.clippingPlanes, me), m = ue.get(v, b.length), m.init(), b.push(m), V.enabled === true && V.isPresenting === true) {
        const $ = y.xr.getDepthSensingMesh();
        $ !== null && cr($, I, -1 / 0, y.sortObjects);
      }
      cr(v, I, 0, y.sortObjects), m.finish(), y.sortObjects === true && m.sort(te, ce), Ge = V.enabled === false || V.isPresenting === false || V.hasDepthSensing() === false, Ge && Ee.addToRenderList(m, v), this.info.render.frame++, ee === true && J.beginShadows();
      const O = f.state.shadowsArray;
      de.render(O, v, I), ee === true && J.endShadows(), this.info.autoReset === true && this.info.reset();
      const B = m.opaque, U = m.transmissive;
      if (f.setupLights(), I.isArrayCamera) {
        const $ = I.cameras;
        if (U.length > 0) for (let se = 0, he = $.length; se < he; se++) {
          const pe = $[se];
          fo(B, U, v, pe);
        }
        Ge && Ee.render(v);
        for (let se = 0, he = $.length; se < he; se++) {
          const pe = $[se];
          uo(m, v, pe, pe.viewport);
        }
      } else U.length > 0 && fo(B, U, v, I), Ge && Ee.render(v), uo(m, v, I);
      N !== null && (E.updateMultisampleRenderTarget(N), E.updateRenderTargetMipmap(N)), v.isScene === true && v.onAfterRender(y, v, I), it.resetDefaultState(), S = -1, M = null, T.pop(), T.length > 0 ? (f = T[T.length - 1], ee === true && J.setGlobalState(y.clippingPlanes, f.state.camera)) : f = null, b.pop(), b.length > 0 ? m = b[b.length - 1] : m = null;
    };
    function cr(v, I, O, B) {
      if (v.visible === false) return;
      if (v.layers.test(I.layers)) {
        if (v.isGroup) O = v.renderOrder;
        else if (v.isLOD) v.autoUpdate === true && v.update(I);
        else if (v.isLight) f.pushLight(v), v.castShadow && f.pushShadow(v);
        else if (v.isSprite) {
          if (!v.frustumCulled || Y.intersectsSprite(v)) {
            B && Oe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Te);
            const se = X.update(v), he = v.material;
            he.visible && m.push(v, se, he, O, Oe.z, null);
          }
        } else if ((v.isMesh || v.isLine || v.isPoints) && (!v.frustumCulled || Y.intersectsObject(v))) {
          const se = X.update(v), he = v.material;
          if (B && (v.boundingSphere !== void 0 ? (v.boundingSphere === null && v.computeBoundingSphere(), Oe.copy(v.boundingSphere.center)) : (se.boundingSphere === null && se.computeBoundingSphere(), Oe.copy(se.boundingSphere.center)), Oe.applyMatrix4(v.matrixWorld).applyMatrix4(Te)), Array.isArray(he)) {
            const pe = se.groups;
            for (let we = 0, Ce = pe.length; we < Ce; we++) {
              const Me = pe[we], Xe = he[Me.materialIndex];
              Xe && Xe.visible && m.push(v, se, Xe, O, Oe.z, Me);
            }
          } else he.visible && m.push(v, se, he, O, Oe.z, null);
        }
      }
      const $ = v.children;
      for (let se = 0, he = $.length; se < he; se++) cr($[se], I, O, B);
    }
    function uo(v, I, O, B) {
      const U = v.opaque, $ = v.transmissive, se = v.transparent;
      f.setupLightsView(O), ee === true && J.setGlobalState(y.clippingPlanes, O), B && xe.viewport(P.copy(B)), U.length > 0 && ms(U, I, O), $.length > 0 && ms($, I, O), se.length > 0 && ms(se, I, O), xe.buffers.depth.setTest(true), xe.buffers.depth.setMask(true), xe.buffers.color.setMask(true), xe.setPolygonOffset(false);
    }
    function fo(v, I, O, B) {
      if ((O.isScene === true ? O.overrideMaterial : null) !== null) return;
      f.state.transmissionRenderTarget[B.id] === void 0 && (f.state.transmissionRenderTarget[B.id] = new Bn(1, 1, { generateMipmaps: true, type: ke.has("EXT_color_buffer_half_float") || ke.has("EXT_color_buffer_float") ? us : En, minFilter: Mn, samples: 4, stencilBuffer: r, resolveDepthBuffer: false, resolveStencilBuffer: false, colorSpace: Ve.workingColorSpace }));
      const $ = f.state.transmissionRenderTarget[B.id], se = B.viewport || P;
      $.setSize(se.z, se.w);
      const he = y.getRenderTarget();
      y.setRenderTarget($), y.getClearColor(W), K = y.getClearAlpha(), K < 1 && y.setClearColor(16777215, 0.5), y.clear(), Ge && Ee.render(O);
      const pe = y.toneMapping;
      y.toneMapping = On;
      const we = B.viewport;
      if (B.viewport !== void 0 && (B.viewport = void 0), f.setupLightsView(B), ee === true && J.setGlobalState(y.clippingPlanes, B), ms(v, O, B), E.updateMultisampleRenderTarget($), E.updateRenderTargetMipmap($), ke.has("WEBGL_multisampled_render_to_texture") === false) {
        let Ce = false;
        for (let Me = 0, Xe = I.length; Me < Xe; Me++) {
          const Ke = I[Me], ht = Ke.object, lt = Ke.geometry, qe = Ke.material, Se = Ke.group;
          if (qe.side === rn && ht.layers.test(B.layers)) {
            const _t = qe.side;
            qe.side = Dt, qe.needsUpdate = true, po(ht, O, B, lt, qe, Se), qe.side = _t, qe.needsUpdate = true, Ce = true;
          }
        }
        Ce === true && (E.updateMultisampleRenderTarget($), E.updateRenderTargetMipmap($));
      }
      y.setRenderTarget(he), y.setClearColor(W, K), we !== void 0 && (B.viewport = we), y.toneMapping = pe;
    }
    function ms(v, I, O) {
      const B = I.isScene === true ? I.overrideMaterial : null;
      for (let U = 0, $ = v.length; U < $; U++) {
        const se = v[U], he = se.object, pe = se.geometry, we = B === null ? se.material : B, Ce = se.group;
        he.layers.test(O.layers) && po(he, I, O, pe, we, Ce);
      }
    }
    function po(v, I, O, B, U, $) {
      v.onBeforeRender(y, I, O, B, U, $), v.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse, v.matrixWorld), v.normalMatrix.getNormalMatrix(v.modelViewMatrix), U.onBeforeRender(y, I, O, B, v, $), U.transparent === true && U.side === rn && U.forceSinglePass === false ? (U.side = Dt, U.needsUpdate = true, y.renderBufferDirect(O, I, B, U, v, $), U.side = an, U.needsUpdate = true, y.renderBufferDirect(O, I, B, U, v, $), U.side = rn) : y.renderBufferDirect(O, I, B, U, v, $), v.onAfterRender(y, I, O, B, U, $);
    }
    function gs(v, I, O) {
      I.isScene !== true && (I = at);
      const B = ve.get(v), U = f.state.lights, $ = f.state.shadowsArray, se = U.state.version, he = ge.getParameters(v, U.state, $, I, O), pe = ge.getProgramCacheKey(he);
      let we = B.programs;
      B.environment = v.isMeshStandardMaterial ? I.environment : null, B.fog = I.fog, B.envMap = (v.isMeshStandardMaterial ? F : x).get(v.envMap || B.environment), B.envMapRotation = B.environment !== null && v.envMap === null ? I.environmentRotation : v.envMapRotation, we === void 0 && (v.addEventListener("dispose", Le), we = /* @__PURE__ */ new Map(), B.programs = we);
      let Ce = we.get(pe);
      if (Ce !== void 0) {
        if (B.currentProgram === Ce && B.lightsStateVersion === se) return go(v, he), Ce;
      } else he.uniforms = ge.getUniforms(v), v.onBeforeCompile(he, y), Ce = ge.acquireProgram(he, pe), we.set(pe, Ce), B.uniforms = he.uniforms;
      const Me = B.uniforms;
      return (!v.isShaderMaterial && !v.isRawShaderMaterial || v.clipping === true) && (Me.clippingPlanes = J.uniform), go(v, he), B.needsLights = Oc(v), B.lightsStateVersion = se, B.needsLights && (Me.ambientLightColor.value = U.state.ambient, Me.lightProbe.value = U.state.probe, Me.directionalLights.value = U.state.directional, Me.directionalLightShadows.value = U.state.directionalShadow, Me.spotLights.value = U.state.spot, Me.spotLightShadows.value = U.state.spotShadow, Me.rectAreaLights.value = U.state.rectArea, Me.ltc_1.value = U.state.rectAreaLTC1, Me.ltc_2.value = U.state.rectAreaLTC2, Me.pointLights.value = U.state.point, Me.pointLightShadows.value = U.state.pointShadow, Me.hemisphereLights.value = U.state.hemi, Me.directionalShadowMap.value = U.state.directionalShadowMap, Me.directionalShadowMatrix.value = U.state.directionalShadowMatrix, Me.spotShadowMap.value = U.state.spotShadowMap, Me.spotLightMatrix.value = U.state.spotLightMatrix, Me.spotLightMap.value = U.state.spotLightMap, Me.pointShadowMap.value = U.state.pointShadowMap, Me.pointShadowMatrix.value = U.state.pointShadowMatrix), B.currentProgram = Ce, B.uniformsList = null, Ce;
    }
    function mo(v) {
      if (v.uniformsList === null) {
        const I = v.currentProgram.getUniforms();
        v.uniformsList = Qs.seqWithValue(I.seq, v.uniforms);
      }
      return v.uniformsList;
    }
    function go(v, I) {
      const O = ve.get(v);
      O.outputColorSpace = I.outputColorSpace, O.batching = I.batching, O.batchingColor = I.batchingColor, O.instancing = I.instancing, O.instancingColor = I.instancingColor, O.instancingMorph = I.instancingMorph, O.skinning = I.skinning, O.morphTargets = I.morphTargets, O.morphNormals = I.morphNormals, O.morphColors = I.morphColors, O.morphTargetsCount = I.morphTargetsCount, O.numClippingPlanes = I.numClippingPlanes, O.numIntersection = I.numClipIntersection, O.vertexAlphas = I.vertexAlphas, O.vertexTangents = I.vertexTangents, O.toneMapping = I.toneMapping;
    }
    function Nc(v, I, O, B, U) {
      I.isScene !== true && (I = at), E.resetTextureUnits();
      const $ = I.fog, se = B.isMeshStandardMaterial ? I.environment : null, he = N === null ? y.outputColorSpace : N.isXRRenderTarget === true ? N.texture.colorSpace : Rt, pe = (B.isMeshStandardMaterial ? F : x).get(B.envMap || se), we = B.vertexColors === true && !!O.attributes.color && O.attributes.color.itemSize === 4, Ce = !!O.attributes.tangent && (!!B.normalMap || B.anisotropy > 0), Me = !!O.morphAttributes.position, Xe = !!O.morphAttributes.normal, Ke = !!O.morphAttributes.color;
      let ht = On;
      B.toneMapped && (N === null || N.isXRRenderTarget === true) && (ht = y.toneMapping);
      const lt = O.morphAttributes.position || O.morphAttributes.normal || O.morphAttributes.color, qe = lt !== void 0 ? lt.length : 0, Se = ve.get(B), _t = f.state.lights;
      if (ee === true && (me === true || v !== M)) {
        const St = v === M && B.id === S;
        J.setState(B, v, St);
      }
      let Ze = false;
      B.version === Se.__version ? (Se.needsLights && Se.lightsStateVersion !== _t.state.version || Se.outputColorSpace !== he || U.isBatchedMesh && Se.batching === false || !U.isBatchedMesh && Se.batching === true || U.isBatchedMesh && Se.batchingColor === true && U.colorTexture === null || U.isBatchedMesh && Se.batchingColor === false && U.colorTexture !== null || U.isInstancedMesh && Se.instancing === false || !U.isInstancedMesh && Se.instancing === true || U.isSkinnedMesh && Se.skinning === false || !U.isSkinnedMesh && Se.skinning === true || U.isInstancedMesh && Se.instancingColor === true && U.instanceColor === null || U.isInstancedMesh && Se.instancingColor === false && U.instanceColor !== null || U.isInstancedMesh && Se.instancingMorph === true && U.morphTexture === null || U.isInstancedMesh && Se.instancingMorph === false && U.morphTexture !== null || Se.envMap !== pe || B.fog === true && Se.fog !== $ || Se.numClippingPlanes !== void 0 && (Se.numClippingPlanes !== J.numPlanes || Se.numIntersection !== J.numIntersection) || Se.vertexAlphas !== we || Se.vertexTangents !== Ce || Se.morphTargets !== Me || Se.morphNormals !== Xe || Se.morphColors !== Ke || Se.toneMapping !== ht || Se.morphTargetsCount !== qe) && (Ze = true) : (Ze = true, Se.__version = B.version);
      let Yt = Se.currentProgram;
      Ze === true && (Yt = gs(B, I, U));
      let ai = false, It = false, Xi = false;
      const rt = Yt.getUniforms(), Bt = Se.uniforms;
      if (xe.useProgram(Yt.program) && (ai = true, It = true, Xi = true), B.id !== S && (S = B.id, It = true), ai || M !== v) {
        xe.buffers.depth.getReversed() ? (re.copy(v.projectionMatrix), qh(re), jh(re), rt.setValue(C, "projectionMatrix", re)) : rt.setValue(C, "projectionMatrix", v.projectionMatrix), rt.setValue(C, "viewMatrix", v.matrixWorldInverse);
        const Ct = rt.map.cameraPosition;
        Ct !== void 0 && Ct.setValue(C, Pe.setFromMatrixPosition(v.matrixWorld)), ze.logarithmicDepthBuffer && rt.setValue(C, "logDepthBufFC", 2 / (Math.log(v.far + 1) / Math.LN2)), (B.isMeshPhongMaterial || B.isMeshToonMaterial || B.isMeshLambertMaterial || B.isMeshBasicMaterial || B.isMeshStandardMaterial || B.isShaderMaterial) && rt.setValue(C, "isOrthographic", v.isOrthographicCamera === true), M !== v && (M = v, It = true, Xi = true);
      }
      if (U.isSkinnedMesh) {
        rt.setOptional(C, U, "bindMatrix"), rt.setOptional(C, U, "bindMatrixInverse");
        const St = U.skeleton;
        St && (St.boneTexture === null && St.computeBoneTexture(), rt.setValue(C, "boneTexture", St.boneTexture, E));
      }
      U.isBatchedMesh && (rt.setOptional(C, U, "batchingTexture"), rt.setValue(C, "batchingTexture", U._matricesTexture, E), rt.setOptional(C, U, "batchingIdTexture"), rt.setValue(C, "batchingIdTexture", U._indirectTexture, E), rt.setOptional(C, U, "batchingColorTexture"), U._colorsTexture !== null && rt.setValue(C, "batchingColorTexture", U._colorsTexture, E));
      const kt = O.morphAttributes;
      if ((kt.position !== void 0 || kt.normal !== void 0 || kt.color !== void 0) && Ae.update(U, O, Yt), (It || Se.receiveShadow !== U.receiveShadow) && (Se.receiveShadow = U.receiveShadow, rt.setValue(C, "receiveShadow", U.receiveShadow)), B.isMeshGouraudMaterial && B.envMap !== null && (Bt.envMap.value = pe, Bt.flipEnvMap.value = pe.isCubeTexture && pe.isRenderTargetTexture === false ? -1 : 1), B.isMeshStandardMaterial && B.envMap === null && I.environment !== null && (Bt.envMapIntensity.value = I.environmentIntensity), It && (rt.setValue(C, "toneMappingExposure", y.toneMappingExposure), Se.needsLights && Fc(Bt, Xi), $ && B.fog === true && ae.refreshFogUniforms(Bt, $), ae.refreshMaterialUniforms(Bt, B, z, Q, f.state.transmissionRenderTarget[v.id]), Qs.upload(C, mo(Se), Bt, E)), B.isShaderMaterial && B.uniformsNeedUpdate === true && (Qs.upload(C, mo(Se), Bt, E), B.uniformsNeedUpdate = false), B.isSpriteMaterial && rt.setValue(C, "center", U.center), rt.setValue(C, "modelViewMatrix", U.modelViewMatrix), rt.setValue(C, "normalMatrix", U.normalMatrix), rt.setValue(C, "modelMatrix", U.matrixWorld), B.isShaderMaterial || B.isRawShaderMaterial) {
        const St = B.uniformsGroups;
        for (let Ct = 0, hr = St.length; Ct < hr; Ct++) {
          const zn = St[Ct];
          D.update(zn, Yt), D.bind(zn, Yt);
        }
      }
      return Yt;
    }
    function Fc(v, I) {
      v.ambientLightColor.needsUpdate = I, v.lightProbe.needsUpdate = I, v.directionalLights.needsUpdate = I, v.directionalLightShadows.needsUpdate = I, v.pointLights.needsUpdate = I, v.pointLightShadows.needsUpdate = I, v.spotLights.needsUpdate = I, v.spotLightShadows.needsUpdate = I, v.rectAreaLights.needsUpdate = I, v.hemisphereLights.needsUpdate = I;
    }
    function Oc(v) {
      return v.isMeshLambertMaterial || v.isMeshToonMaterial || v.isMeshPhongMaterial || v.isMeshStandardMaterial || v.isShadowMaterial || v.isShaderMaterial && v.lights === true;
    }
    this.getActiveCubeFace = function() {
      return w;
    }, this.getActiveMipmapLevel = function() {
      return A;
    }, this.getRenderTarget = function() {
      return N;
    }, this.setRenderTargetTextures = function(v, I, O) {
      ve.get(v.texture).__webglTexture = I, ve.get(v.depthTexture).__webglTexture = O;
      const B = ve.get(v);
      B.__hasExternalTextures = true, B.__autoAllocateDepthBuffer = O === void 0, B.__autoAllocateDepthBuffer || ke.has("WEBGL_multisampled_render_to_texture") === true && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"), B.__useRenderToTexture = false);
    }, this.setRenderTargetFramebuffer = function(v, I) {
      const O = ve.get(v);
      O.__webglFramebuffer = I, O.__useDefaultFramebuffer = I === void 0;
    }, this.setRenderTarget = function(v, I = 0, O = 0) {
      N = v, w = I, A = O;
      let B = true, U = null, $ = false, se = false;
      if (v) {
        const pe = ve.get(v);
        if (pe.__useDefaultFramebuffer !== void 0) xe.bindFramebuffer(C.FRAMEBUFFER, null), B = false;
        else if (pe.__webglFramebuffer === void 0) E.setupRenderTarget(v);
        else if (pe.__hasExternalTextures) E.rebindTextures(v, ve.get(v.texture).__webglTexture, ve.get(v.depthTexture).__webglTexture);
        else if (v.depthBuffer) {
          const Me = v.depthTexture;
          if (pe.__boundDepthTexture !== Me) {
            if (Me !== null && ve.has(Me) && (v.width !== Me.image.width || v.height !== Me.image.height)) throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");
            E.setupDepthRenderbuffer(v);
          }
        }
        const we = v.texture;
        (we.isData3DTexture || we.isDataArrayTexture || we.isCompressedArrayTexture) && (se = true);
        const Ce = ve.get(v).__webglFramebuffer;
        v.isWebGLCubeRenderTarget ? (Array.isArray(Ce[I]) ? U = Ce[I][O] : U = Ce[I], $ = true) : v.samples > 0 && E.useMultisampledRTT(v) === false ? U = ve.get(v).__webglMultisampledFramebuffer : Array.isArray(Ce) ? U = Ce[O] : U = Ce, P.copy(v.viewport), G.copy(v.scissor), k = v.scissorTest;
      } else P.copy(_e).multiplyScalar(z).floor(), G.copy(Ne).multiplyScalar(z).floor(), k = je;
      if (xe.bindFramebuffer(C.FRAMEBUFFER, U) && B && xe.drawBuffers(v, U), xe.viewport(P), xe.scissor(G), xe.setScissorTest(k), $) {
        const pe = ve.get(v.texture);
        C.framebufferTexture2D(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_CUBE_MAP_POSITIVE_X + I, pe.__webglTexture, O);
      } else if (se) {
        const pe = ve.get(v.texture), we = I || 0;
        C.framebufferTextureLayer(C.FRAMEBUFFER, C.COLOR_ATTACHMENT0, pe.__webglTexture, O || 0, we);
      }
      S = -1;
    }, this.readRenderTargetPixels = function(v, I, O, B, U, $, se) {
      if (!(v && v.isWebGLRenderTarget)) {
        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
        return;
      }
      let he = ve.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && se !== void 0 && (he = he[se]), he) {
        xe.bindFramebuffer(C.FRAMEBUFFER, he);
        try {
          const pe = v.texture, we = pe.format, Ce = pe.type;
          if (!ze.textureFormatReadable(we)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (!ze.textureTypeReadable(Ce)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          I >= 0 && I <= v.width - B && O >= 0 && O <= v.height - U && C.readPixels(I, O, B, U, Ie.convert(we), Ie.convert(Ce), $);
        } finally {
          const pe = N !== null ? ve.get(N).__webglFramebuffer : null;
          xe.bindFramebuffer(C.FRAMEBUFFER, pe);
        }
      }
    }, this.readRenderTargetPixelsAsync = async function(v, I, O, B, U, $, se) {
      if (!(v && v.isWebGLRenderTarget)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
      let he = ve.get(v).__webglFramebuffer;
      if (v.isWebGLCubeRenderTarget && se !== void 0 && (he = he[se]), he) {
        const pe = v.texture, we = pe.format, Ce = pe.type;
        if (!ze.textureFormatReadable(we)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");
        if (!ze.textureTypeReadable(Ce)) throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");
        if (I >= 0 && I <= v.width - B && O >= 0 && O <= v.height - U) {
          xe.bindFramebuffer(C.FRAMEBUFFER, he);
          const Me = C.createBuffer();
          C.bindBuffer(C.PIXEL_PACK_BUFFER, Me), C.bufferData(C.PIXEL_PACK_BUFFER, $.byteLength, C.STREAM_READ), C.readPixels(I, O, B, U, Ie.convert(we), Ie.convert(Ce), 0);
          const Xe = N !== null ? ve.get(N).__webglFramebuffer : null;
          xe.bindFramebuffer(C.FRAMEBUFFER, Xe);
          const Ke = C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE, 0);
          return C.flush(), await Yh(C, Ke, 4), C.bindBuffer(C.PIXEL_PACK_BUFFER, Me), C.getBufferSubData(C.PIXEL_PACK_BUFFER, 0, $), C.deleteBuffer(Me), C.deleteSync(Ke), $;
        } else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.");
      }
    }, this.copyFramebufferToTexture = function(v, I = null, O = 0) {
      v.isTexture !== true && (Si("WebGLRenderer: copyFramebufferToTexture function signature has changed."), I = arguments[0] || null, v = arguments[1]);
      const B = Math.pow(2, -O), U = Math.floor(v.image.width * B), $ = Math.floor(v.image.height * B), se = I !== null ? I.x : 0, he = I !== null ? I.y : 0;
      E.setTexture2D(v, 0), C.copyTexSubImage2D(C.TEXTURE_2D, O, 0, 0, se, he, U, $), xe.unbindTexture();
    };
    const Bc = C.createFramebuffer(), kc = C.createFramebuffer();
    this.copyTextureToTexture = function(v, I, O = null, B = null, U = 0, $ = null) {
      v.isTexture !== true && (Si("WebGLRenderer: copyTextureToTexture function signature has changed."), B = arguments[0] || null, v = arguments[1], I = arguments[2], $ = arguments[3] || 0, O = null), $ === null && (U !== 0 ? (Si("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."), $ = U, U = 0) : $ = 0);
      let se, he, pe, we, Ce, Me, Xe, Ke, ht;
      const lt = v.isCompressedTexture ? v.mipmaps[$] : v.image;
      if (O !== null) se = O.max.x - O.min.x, he = O.max.y - O.min.y, pe = O.isBox3 ? O.max.z - O.min.z : 1, we = O.min.x, Ce = O.min.y, Me = O.isBox3 ? O.min.z : 0;
      else {
        const kt = Math.pow(2, -U);
        se = Math.floor(lt.width * kt), he = Math.floor(lt.height * kt), v.isDataArrayTexture ? pe = lt.depth : v.isData3DTexture ? pe = Math.floor(lt.depth * kt) : pe = 1, we = 0, Ce = 0, Me = 0;
      }
      B !== null ? (Xe = B.x, Ke = B.y, ht = B.z) : (Xe = 0, Ke = 0, ht = 0);
      const qe = Ie.convert(I.format), Se = Ie.convert(I.type);
      let _t;
      I.isData3DTexture ? (E.setTexture3D(I, 0), _t = C.TEXTURE_3D) : I.isDataArrayTexture || I.isCompressedArrayTexture ? (E.setTexture2DArray(I, 0), _t = C.TEXTURE_2D_ARRAY) : (E.setTexture2D(I, 0), _t = C.TEXTURE_2D), C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL, I.flipY), C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL, I.premultiplyAlpha), C.pixelStorei(C.UNPACK_ALIGNMENT, I.unpackAlignment);
      const Ze = C.getParameter(C.UNPACK_ROW_LENGTH), Yt = C.getParameter(C.UNPACK_IMAGE_HEIGHT), ai = C.getParameter(C.UNPACK_SKIP_PIXELS), It = C.getParameter(C.UNPACK_SKIP_ROWS), Xi = C.getParameter(C.UNPACK_SKIP_IMAGES);
      C.pixelStorei(C.UNPACK_ROW_LENGTH, lt.width), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, lt.height), C.pixelStorei(C.UNPACK_SKIP_PIXELS, we), C.pixelStorei(C.UNPACK_SKIP_ROWS, Ce), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Me);
      const rt = v.isDataArrayTexture || v.isData3DTexture, Bt = I.isDataArrayTexture || I.isData3DTexture;
      if (v.isDepthTexture) {
        const kt = ve.get(v), St = ve.get(I), Ct = ve.get(kt.__renderTarget), hr = ve.get(St.__renderTarget);
        xe.bindFramebuffer(C.READ_FRAMEBUFFER, Ct.__webglFramebuffer), xe.bindFramebuffer(C.DRAW_FRAMEBUFFER, hr.__webglFramebuffer);
        for (let zn = 0; zn < pe; zn++) rt && (C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, ve.get(v).__webglTexture, U, Me + zn), C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, ve.get(I).__webglTexture, $, ht + zn)), C.blitFramebuffer(we, Ce, se, he, Xe, Ke, se, he, C.DEPTH_BUFFER_BIT, C.NEAREST);
        xe.bindFramebuffer(C.READ_FRAMEBUFFER, null), xe.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
      } else if (U !== 0 || v.isRenderTargetTexture || ve.has(v)) {
        const kt = ve.get(v), St = ve.get(I);
        xe.bindFramebuffer(C.READ_FRAMEBUFFER, Bc), xe.bindFramebuffer(C.DRAW_FRAMEBUFFER, kc);
        for (let Ct = 0; Ct < pe; Ct++) rt ? C.framebufferTextureLayer(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, kt.__webglTexture, U, Me + Ct) : C.framebufferTexture2D(C.READ_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, kt.__webglTexture, U), Bt ? C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, St.__webglTexture, $, ht + Ct) : C.framebufferTexture2D(C.DRAW_FRAMEBUFFER, C.COLOR_ATTACHMENT0, C.TEXTURE_2D, St.__webglTexture, $), U !== 0 ? C.blitFramebuffer(we, Ce, se, he, Xe, Ke, se, he, C.COLOR_BUFFER_BIT, C.NEAREST) : Bt ? C.copyTexSubImage3D(_t, $, Xe, Ke, ht + Ct, we, Ce, se, he) : C.copyTexSubImage2D(_t, $, Xe, Ke, we, Ce, se, he);
        xe.bindFramebuffer(C.READ_FRAMEBUFFER, null), xe.bindFramebuffer(C.DRAW_FRAMEBUFFER, null);
      } else Bt ? v.isDataTexture || v.isData3DTexture ? C.texSubImage3D(_t, $, Xe, Ke, ht, se, he, pe, qe, Se, lt.data) : I.isCompressedArrayTexture ? C.compressedTexSubImage3D(_t, $, Xe, Ke, ht, se, he, pe, qe, lt.data) : C.texSubImage3D(_t, $, Xe, Ke, ht, se, he, pe, qe, Se, lt) : v.isDataTexture ? C.texSubImage2D(C.TEXTURE_2D, $, Xe, Ke, se, he, qe, Se, lt.data) : v.isCompressedTexture ? C.compressedTexSubImage2D(C.TEXTURE_2D, $, Xe, Ke, lt.width, lt.height, qe, lt.data) : C.texSubImage2D(C.TEXTURE_2D, $, Xe, Ke, se, he, qe, Se, lt);
      C.pixelStorei(C.UNPACK_ROW_LENGTH, Ze), C.pixelStorei(C.UNPACK_IMAGE_HEIGHT, Yt), C.pixelStorei(C.UNPACK_SKIP_PIXELS, ai), C.pixelStorei(C.UNPACK_SKIP_ROWS, It), C.pixelStorei(C.UNPACK_SKIP_IMAGES, Xi), $ === 0 && I.generateMipmaps && C.generateMipmap(_t), xe.unbindTexture();
    }, this.copyTextureToTexture3D = function(v, I, O = null, B = null, U = 0) {
      return v.isTexture !== true && (Si("WebGLRenderer: copyTextureToTexture3D function signature has changed."), O = arguments[0] || null, B = arguments[1] || null, v = arguments[2], I = arguments[3], U = arguments[4] || 0), Si('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'), this.copyTextureToTexture(v, I, O, B, U);
    }, this.initRenderTarget = function(v) {
      ve.get(v).__webglFramebuffer === void 0 && E.setupRenderTarget(v);
    }, this.initTexture = function(v) {
      v.isCubeTexture ? E.setTextureCube(v, 0) : v.isData3DTexture ? E.setTexture3D(v, 0) : v.isDataArrayTexture || v.isCompressedArrayTexture ? E.setTexture2DArray(v, 0) : E.setTexture2D(v, 0), xe.unbindTexture();
    }, this.resetState = function() {
      w = 0, A = 0, N = null, xe.reset(), it.reset();
    }, typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe", { detail: this }));
  }
  get coordinateSystem() {
    return yn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    t.drawingBufferColorspace = Ve._getDrawingBufferColorSpace(e), t.unpackColorSpace = Ve._getUnpackColorSpace();
  }
}
var er = function() {
  var s = 0, e = document.createElement("div");
  e.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000", e.addEventListener("click", function(h) {
    h.preventDefault(), n(++s % e.children.length);
  }, false);
  function t(h) {
    return e.appendChild(h.dom), h;
  }
  function n(h) {
    for (var u = 0; u < e.children.length; u++) e.children[u].style.display = u === h ? "block" : "none";
    s = h;
  }
  var i = (performance || Date).now(), r = i, a = 0, o = t(new er.Panel("FPS", "#0ff", "#002")), l = t(new er.Panel("MS", "#0f0", "#020"));
  if (self.performance && self.performance.memory) var c = t(new er.Panel("MB", "#f08", "#201"));
  return n(0), { REVISION: 16, dom: e, addPanel: t, showPanel: n, begin: function() {
    i = (performance || Date).now();
  }, end: function() {
    a++;
    var h = (performance || Date).now();
    if (l.update(h - i, 200), h >= r + 1e3 && (o.update(a * 1e3 / (h - r), 100), r = h, a = 0, c)) {
      var u = performance.memory;
      c.update(u.usedJSHeapSize / 1048576, u.jsHeapSizeLimit / 1048576);
    }
    return h;
  }, update: function() {
    i = this.end();
  }, domElement: e, setMode: n };
};
er.Panel = function(s, e, t) {
  var n = 1 / 0, i = 0, r = Math.round, a = r(window.devicePixelRatio || 1), o = 80 * a, l = 48 * a, c = 3 * a, h = 2 * a, u = 3 * a, d = 15 * a, p = 74 * a, g = 30 * a, _ = document.createElement("canvas");
  _.width = o, _.height = l, _.style.cssText = "width:80px;height:48px";
  var m = _.getContext("2d");
  return m.font = "bold " + 9 * a + "px Helvetica,Arial,sans-serif", m.textBaseline = "top", m.fillStyle = t, m.fillRect(0, 0, o, l), m.fillStyle = e, m.fillText(s, c, h), m.fillRect(u, d, p, g), m.fillStyle = t, m.globalAlpha = 0.9, m.fillRect(u, d, p, g), { dom: _, update: function(f, b) {
    n = Math.min(n, f), i = Math.max(i, f), m.fillStyle = t, m.globalAlpha = 1, m.fillRect(0, 0, o, d), m.fillStyle = e, m.fillText(r(f) + " " + s + " (" + r(n) + "-" + r(i) + ")", c, h), m.drawImage(_, u + a, d, p - a, g, u, d, p - a, g), m.fillRect(u + p - a, d, a, g), m.fillStyle = t, m.globalAlpha = 0.9, m.fillRect(u + p - a, d, a, r((1 - f / b) * g));
  } };
};
const Vl = { type: "change" }, lo = { type: "start" }, Dc = { type: "end" }, Ys = new Hi(), Gl = new vn(), jg = Math.cos(70 * cc.DEG2RAD), dt = new R(), Pt = 2 * Math.PI, tt = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_PAN: 4, TOUCH_DOLLY_PAN: 5, TOUCH_DOLLY_ROTATE: 6 }, Wr = 1e-6;
class $_ extends hd {
  constructor(e, t = null) {
    super(e, t), this.state = tt.NONE, this.enabled = true, this.target = new R(), this.cursor = new R(), this.minDistance = 0, this.maxDistance = 1 / 0, this.minZoom = 0, this.maxZoom = 1 / 0, this.minTargetRadius = 0, this.maxTargetRadius = 1 / 0, this.minPolarAngle = 0, this.maxPolarAngle = Math.PI, this.minAzimuthAngle = -1 / 0, this.maxAzimuthAngle = 1 / 0, this.enableDamping = false, this.dampingFactor = 0.05, this.enableZoom = true, this.zoomSpeed = 1, this.enableRotate = true, this.rotateSpeed = 1, this.enablePan = true, this.panSpeed = 1, this.screenSpacePanning = true, this.keyPanSpeed = 7, this.zoomToCursor = false, this.autoRotate = false, this.autoRotateSpeed = 2, this.keys = { LEFT: "ArrowLeft", UP: "ArrowUp", RIGHT: "ArrowRight", BOTTOM: "ArrowDown" }, this.mouseButtons = { LEFT: bi.ROTATE, MIDDLE: bi.DOLLY, RIGHT: bi.PAN }, this.touches = { ONE: Ei.ROTATE, TWO: Ei.DOLLY_PAN }, this.target0 = this.target.clone(), this.position0 = this.object.position.clone(), this.zoom0 = this.object.zoom, this._domElementKeyEvents = null, this._lastPosition = new R(), this._lastQuaternion = new Gt(), this._lastTargetPosition = new R(), this._quat = new Gt().setFromUnitVectors(e.up, new R(0, 1, 0)), this._quatInverse = this._quat.clone().invert(), this._spherical = new pl(), this._sphericalDelta = new pl(), this._scale = 1, this._panOffset = new R(), this._rotateStart = new be(), this._rotateEnd = new be(), this._rotateDelta = new be(), this._panStart = new be(), this._panEnd = new be(), this._panDelta = new be(), this._dollyStart = new be(), this._dollyEnd = new be(), this._dollyDelta = new be(), this._dollyDirection = new R(), this._mouse = new be(), this._performCursorZoom = false, this._pointers = [], this._pointerPositions = {}, this._controlActive = false, this._onPointerMove = Zg.bind(this), this._onPointerDown = Kg.bind(this), this._onPointerUp = $g.bind(this), this._onContextMenu = s_.bind(this), this._onMouseWheel = e_.bind(this), this._onKeyDown = t_.bind(this), this._onTouchStart = n_.bind(this), this._onTouchMove = i_.bind(this), this._onMouseDown = Jg.bind(this), this._onMouseMove = Qg.bind(this), this._interceptControlDown = r_.bind(this), this._interceptControlUp = a_.bind(this), this.domElement !== null && this.connect(), this.update();
  }
  connect() {
    this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointercancel", this._onPointerUp), this.domElement.addEventListener("contextmenu", this._onContextMenu), this.domElement.addEventListener("wheel", this._onMouseWheel, { passive: false }), this.domElement.getRootNode().addEventListener("keydown", this._interceptControlDown, { passive: true, capture: true }), this.domElement.style.touchAction = "none";
  }
  disconnect() {
    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.domElement.removeEventListener("pointercancel", this._onPointerUp), this.domElement.removeEventListener("wheel", this._onMouseWheel), this.domElement.removeEventListener("contextmenu", this._onContextMenu), this.stopListenToKeyEvents(), this.domElement.getRootNode().removeEventListener("keydown", this._interceptControlDown, { capture: true }), this.domElement.style.touchAction = "auto";
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    e.addEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = e;
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null && (this._domElementKeyEvents.removeEventListener("keydown", this._onKeyDown), this._domElementKeyEvents = null);
  }
  saveState() {
    this.target0.copy(this.target), this.position0.copy(this.object.position), this.zoom0 = this.object.zoom;
  }
  reset() {
    this.target.copy(this.target0), this.object.position.copy(this.position0), this.object.zoom = this.zoom0, this.object.updateProjectionMatrix(), this.dispatchEvent(Vl), this.update(), this.state = tt.NONE;
  }
  update(e = null) {
    const t = this.object.position;
    dt.copy(t).sub(this.target), dt.applyQuaternion(this._quat), this._spherical.setFromVector3(dt), this.autoRotate && this.state === tt.NONE && this._rotateLeft(this._getAutoRotationAngle(e)), this.enableDamping ? (this._spherical.theta += this._sphericalDelta.theta * this.dampingFactor, this._spherical.phi += this._sphericalDelta.phi * this.dampingFactor) : (this._spherical.theta += this._sphericalDelta.theta, this._spherical.phi += this._sphericalDelta.phi);
    let n = this.minAzimuthAngle, i = this.maxAzimuthAngle;
    isFinite(n) && isFinite(i) && (n < -Math.PI ? n += Pt : n > Math.PI && (n -= Pt), i < -Math.PI ? i += Pt : i > Math.PI && (i -= Pt), n <= i ? this._spherical.theta = Math.max(n, Math.min(i, this._spherical.theta)) : this._spherical.theta = this._spherical.theta > (n + i) / 2 ? Math.max(n, this._spherical.theta) : Math.min(i, this._spherical.theta)), this._spherical.phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, this._spherical.phi)), this._spherical.makeSafe(), this.enableDamping === true ? this.target.addScaledVector(this._panOffset, this.dampingFactor) : this.target.add(this._panOffset), this.target.sub(this.cursor), this.target.clampLength(this.minTargetRadius, this.maxTargetRadius), this.target.add(this.cursor);
    let r = false;
    if (this.zoomToCursor && this._performCursorZoom || this.object.isOrthographicCamera) this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      this._spherical.radius = this._clampDistance(this._spherical.radius * this._scale), r = a != this._spherical.radius;
    }
    if (dt.setFromSpherical(this._spherical), dt.applyQuaternion(this._quatInverse), t.copy(this.target).add(dt), this.object.lookAt(this.target), this.enableDamping === true ? (this._sphericalDelta.theta *= 1 - this.dampingFactor, this._sphericalDelta.phi *= 1 - this.dampingFactor, this._panOffset.multiplyScalar(1 - this.dampingFactor)) : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)), this.zoomToCursor && this._performCursorZoom) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = dt.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        this.object.position.addScaledVector(this._dollyDirection, l), this.object.updateMatrixWorld(), r = !!l;
      } else if (this.object.isOrthographicCamera) {
        const o = new R(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), this.object.updateProjectionMatrix(), r = l !== this.object.zoom;
        const c = new R(this._mouse.x, this._mouse.y, 0);
        c.unproject(this.object), this.object.position.sub(c).add(o), this.object.updateMatrixWorld(), a = dt.length();
      } else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."), this.zoomToCursor = false;
      a !== null && (this.screenSpacePanning ? this.target.set(0, 0, -1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position) : (Ys.origin.copy(this.object.position), Ys.direction.set(0, 0, -1).transformDirection(this.object.matrix), Math.abs(this.object.up.dot(Ys.direction)) < jg ? this.object.lookAt(this.target) : (Gl.setFromNormalAndCoplanarPoint(this.object.up, this.target), Ys.intersectPlane(Gl, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      this.object.zoom = Math.max(this.minZoom, Math.min(this.maxZoom, this.object.zoom / this._scale)), a !== this.object.zoom && (this.object.updateProjectionMatrix(), r = true);
    }
    return this._scale = 1, this._performCursorZoom = false, r || this._lastPosition.distanceToSquared(this.object.position) > Wr || 8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Wr || this._lastTargetPosition.distanceToSquared(this.target) > Wr ? (this.dispatchEvent(Vl), this._lastPosition.copy(this.object.position), this._lastQuaternion.copy(this.object.quaternion), this._lastTargetPosition.copy(this.target), true) : false;
  }
  _getAutoRotationAngle(e) {
    return e !== null ? Pt / 60 * this.autoRotateSpeed * e : Pt / 60 / 60 * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    dt.setFromMatrixColumn(t, 0), dt.multiplyScalar(-e), this._panOffset.add(dt);
  }
  _panUp(e, t) {
    this.screenSpacePanning === true ? dt.setFromMatrixColumn(t, 1) : (dt.setFromMatrixColumn(t, 0), dt.crossVectors(this.object.up, dt)), dt.multiplyScalar(e), this._panOffset.add(dt);
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      dt.copy(i).sub(this.target);
      let r = dt.length();
      r *= Math.tan(this.object.fov / 2 * Math.PI / 180), this._panLeft(2 * e * r / n.clientHeight, this.object.matrix), this._panUp(2 * t * r / n.clientHeight, this.object.matrix);
    } else this.object.isOrthographicCamera ? (this._panLeft(e * (this.object.right - this.object.left) / this.object.zoom / n.clientWidth, this.object.matrix), this._panUp(t * (this.object.top - this.object.bottom) / this.object.zoom / n.clientHeight, this.object.matrix)) : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."), this.enablePan = false);
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale /= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera ? this._scale *= e : (console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."), this.enableZoom = false);
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = true;
    const n = this.domElement.getBoundingClientRect(), i = e - n.left, r = t - n.top, a = n.width, o = n.height;
    this._mouse.x = i / a * 2 - 1, this._mouse.y = -(r / o) * 2 + 1, this._dollyDirection.set(this._mouse.x, this._mouse.y, 1).unproject(this.object).sub(this.object.position).normalize();
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    this._updateZoomParameters(e.clientX, e.clientX), this._dollyStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    this._rotateEnd.set(e.clientX, e.clientY), this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Pt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Pt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd), this.update();
  }
  _handleMouseMoveDolly(e) {
    this._dollyEnd.set(e.clientX, e.clientY), this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart), this._dollyDelta.y > 0 ? this._dollyOut(this._getZoomScale(this._dollyDelta.y)) : this._dollyDelta.y < 0 && this._dollyIn(this._getZoomScale(this._dollyDelta.y)), this._dollyStart.copy(this._dollyEnd), this.update();
  }
  _handleMouseMovePan(e) {
    this._panEnd.set(e.clientX, e.clientY), this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd), this.update();
  }
  _handleMouseWheel(e) {
    this._updateZoomParameters(e.clientX, e.clientY), e.deltaY < 0 ? this._dollyIn(this._getZoomScale(e.deltaY)) : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)), this.update();
  }
  _handleKeyDown(e) {
    let t = false;
    switch (e.code) {
      case this.keys.UP:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(Pt * this.rotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, this.keyPanSpeed), t = true;
        break;
      case this.keys.BOTTOM:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateUp(-Pt * this.rotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(0, -this.keyPanSpeed), t = true;
        break;
      case this.keys.LEFT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(Pt * this.rotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(this.keyPanSpeed, 0), t = true;
        break;
      case this.keys.RIGHT:
        e.ctrlKey || e.metaKey || e.shiftKey ? this.enableRotate && this._rotateLeft(-Pt * this.rotateSpeed / this.domElement.clientHeight) : this.enablePan && this._pan(-this.keyPanSpeed, 0), t = true;
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enablePan && this._handleTouchStartPan(e);
  }
  _handleTouchStartDollyRotate(e) {
    this.enableZoom && this._handleTouchStartDolly(e), this.enableRotate && this._handleTouchStartRotate(e);
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e), i = 0.5 * (e.pageX + n.x), r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta.subVectors(this._rotateEnd, this._rotateStart).multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    this._rotateLeft(Pt * this._rotateDelta.x / t.clientHeight), this._rotateUp(Pt * this._rotateDelta.y / t.clientHeight), this._rotateStart.copy(this._rotateEnd);
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e), n = 0.5 * (e.pageX + t.x), i = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, i);
    }
    this._panDelta.subVectors(this._panEnd, this._panStart).multiplyScalar(this.panSpeed), this._pan(this._panDelta.x, this._panDelta.y), this._panStart.copy(this._panEnd);
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e), n = e.pageX - t.x, i = e.pageY - t.y, r = Math.sqrt(n * n + i * i);
    this._dollyEnd.set(0, r), this._dollyDelta.set(0, Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed)), this._dollyOut(this._dollyDelta.y), this._dollyStart.copy(this._dollyEnd);
    const a = (e.pageX + t.x) * 0.5, o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enablePan && this._handleTouchMovePan(e);
  }
  _handleTouchMoveDollyRotate(e) {
    this.enableZoom && this._handleTouchMoveDolly(e), this.enableRotate && this._handleTouchMoveRotate(e);
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) {
      this._pointers.splice(t, 1);
      return;
    }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++) if (this._pointers[t] == e.pointerId) return true;
    return false;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    t === void 0 && (t = new be(), this._pointerPositions[e.pointerId] = t), t.set(e.pageX, e.pageY);
  }
  _getSecondPointerPosition(e) {
    const t = e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode, n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n;
  }
}
function Kg(s) {
  this.enabled !== false && (this._pointers.length === 0 && (this.domElement.setPointerCapture(s.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.domElement.addEventListener("pointerup", this._onPointerUp)), !this._isTrackingPointer(s) && (this._addPointer(s), s.pointerType === "touch" ? this._onTouchStart(s) : this._onMouseDown(s)));
}
function Zg(s) {
  this.enabled !== false && (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function $g(s) {
  switch (this._removePointer(s), this._pointers.length) {
    case 0:
      this.domElement.releasePointerCapture(s.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.dispatchEvent(Dc), this.state = tt.NONE;
      break;
    case 1:
      const e = this._pointers[0], t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function Jg(s) {
  let e;
  switch (s.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case bi.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseDownDolly(s), this.state = tt.DOLLY;
      break;
    case bi.ROTATE:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s), this.state = tt.PAN;
      } else {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s), this.state = tt.ROTATE;
      }
      break;
    case bi.PAN:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enableRotate === false) return;
        this._handleMouseDownRotate(s), this.state = tt.ROTATE;
      } else {
        if (this.enablePan === false) return;
        this._handleMouseDownPan(s), this.state = tt.PAN;
      }
      break;
    default:
      this.state = tt.NONE;
  }
  this.state !== tt.NONE && this.dispatchEvent(lo);
}
function Qg(s) {
  switch (this.state) {
    case tt.ROTATE:
      if (this.enableRotate === false) return;
      this._handleMouseMoveRotate(s);
      break;
    case tt.DOLLY:
      if (this.enableZoom === false) return;
      this._handleMouseMoveDolly(s);
      break;
    case tt.PAN:
      if (this.enablePan === false) return;
      this._handleMouseMovePan(s);
      break;
  }
}
function e_(s) {
  this.enabled === false || this.enableZoom === false || this.state !== tt.NONE || (s.preventDefault(), this.dispatchEvent(lo), this._handleMouseWheel(this._customWheelEvent(s)), this.dispatchEvent(Dc));
}
function t_(s) {
  this.enabled !== false && this._handleKeyDown(s);
}
function n_(s) {
  switch (this._trackPointer(s), this._pointers.length) {
    case 1:
      switch (this.touches.ONE) {
        case Ei.ROTATE:
          if (this.enableRotate === false) return;
          this._handleTouchStartRotate(s), this.state = tt.TOUCH_ROTATE;
          break;
        case Ei.PAN:
          if (this.enablePan === false) return;
          this._handleTouchStartPan(s), this.state = tt.TOUCH_PAN;
          break;
        default:
          this.state = tt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case Ei.DOLLY_PAN:
          if (this.enableZoom === false && this.enablePan === false) return;
          this._handleTouchStartDollyPan(s), this.state = tt.TOUCH_DOLLY_PAN;
          break;
        case Ei.DOLLY_ROTATE:
          if (this.enableZoom === false && this.enableRotate === false) return;
          this._handleTouchStartDollyRotate(s), this.state = tt.TOUCH_DOLLY_ROTATE;
          break;
        default:
          this.state = tt.NONE;
      }
      break;
    default:
      this.state = tt.NONE;
  }
  this.state !== tt.NONE && this.dispatchEvent(lo);
}
function i_(s) {
  switch (this._trackPointer(s), this.state) {
    case tt.TOUCH_ROTATE:
      if (this.enableRotate === false) return;
      this._handleTouchMoveRotate(s), this.update();
      break;
    case tt.TOUCH_PAN:
      if (this.enablePan === false) return;
      this._handleTouchMovePan(s), this.update();
      break;
    case tt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === false && this.enablePan === false) return;
      this._handleTouchMoveDollyPan(s), this.update();
      break;
    case tt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === false && this.enableRotate === false) return;
      this._handleTouchMoveDollyRotate(s), this.update();
      break;
    default:
      this.state = tt.NONE;
  }
}
function s_(s) {
  this.enabled !== false && s.preventDefault();
}
function r_(s) {
  s.key === "Control" && (this._controlActive = true, this.domElement.getRootNode().addEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function a_(s) {
  s.key === "Control" && (this._controlActive = false, this.domElement.getRootNode().removeEventListener("keyup", this._interceptControlUp, { passive: true, capture: true }));
}
function Wl(s, e) {
  if (e === xh) return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), s;
  if (e === La || e === oc) {
    let t = s.getIndex();
    if (t === null) {
      const a = [], o = s.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++) a.push(l);
        s.setIndex(a), t = s.getIndex();
      } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), s;
    }
    const n = t.count - 2, i = [];
    if (e === La) for (let a = 1; a <= n; a++) i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1));
    else for (let a = 0; a < n; a++) a % 2 === 0 ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    const r = s.clone();
    return r.setIndex(i), r.clearGroups(), r;
  } else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e), s;
}
class J_ extends ri {
  constructor(e) {
    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register(function(t) {
      return new u_(t);
    }), this.register(function(t) {
      return new d_(t);
    }), this.register(function(t) {
      return new y_(t);
    }), this.register(function(t) {
      return new S_(t);
    }), this.register(function(t) {
      return new E_(t);
    }), this.register(function(t) {
      return new p_(t);
    }), this.register(function(t) {
      return new m_(t);
    }), this.register(function(t) {
      return new g_(t);
    }), this.register(function(t) {
      return new __(t);
    }), this.register(function(t) {
      return new h_(t);
    }), this.register(function(t) {
      return new x_(t);
    }), this.register(function(t) {
      return new f_(t);
    }), this.register(function(t) {
      return new M_(t);
    }), this.register(function(t) {
      return new v_(t);
    }), this.register(function(t) {
      return new l_(t);
    }), this.register(function(t) {
      return new T_(t);
    }), this.register(function(t) {
      return new b_(t);
    });
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "") a = this.resourcePath;
    else if (this.path !== "") {
      const c = rs.extractUrlBase(e);
      a = rs.resolveURL(c, this.path);
    } else a = rs.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function(c) {
      i ? i(c) : console.error(c), r.manager.itemError(e), r.manager.itemEnd(e);
    }, l = new no(this.manager);
    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, function(c) {
      try {
        r.parse(c, a, function(h) {
          t(h), r.manager.itemEnd(e);
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
    let r;
    const a = {}, o = {}, l = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer) if (l.decode(new Uint8Array(e, 0, 4)) === Ic) {
      try {
        a[Be.KHR_BINARY_GLTF] = new A_(e);
      } catch (u) {
        i && i(u);
        return;
      }
      r = JSON.parse(a[Be.KHR_BINARY_GLTF].content);
    } else r = JSON.parse(l.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
      return;
    }
    const c = new k_(r, { path: t || this.resourcePath || "", crossOrigin: this.crossOrigin, requestHeader: this.requestHeader, manager: this.manager, ktx2Loader: this.ktx2Loader, meshoptDecoder: this.meshoptDecoder });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"), o[u.name] = u, a[u.name] = true;
    }
    if (r.extensionsUsed) for (let h = 0; h < r.extensionsUsed.length; ++h) {
      const u = r.extensionsUsed[h], d = r.extensionsRequired || [];
      switch (u) {
        case Be.KHR_MATERIALS_UNLIT:
          a[u] = new c_();
          break;
        case Be.KHR_DRACO_MESH_COMPRESSION:
          a[u] = new w_(r, this.dracoLoader);
          break;
        case Be.KHR_TEXTURE_TRANSFORM:
          a[u] = new R_();
          break;
        case Be.KHR_MESH_QUANTIZATION:
          a[u] = new C_();
          break;
        default:
          d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
      }
    }
    c.setExtensions(a), c.setPlugins(o), c.parse(n, i);
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function(i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function o_() {
  let s = {};
  return { get: function(e) {
    return s[e];
  }, add: function(e, t) {
    s[e] = t;
  }, remove: function(e) {
    delete s[e];
  }, removeAll: function() {
    s = {};
  } };
}
const Be = { KHR_BINARY_GLTF: "KHR_binary_glTF", KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression", KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual", KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat", KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion", KHR_MATERIALS_IOR: "KHR_materials_ior", KHR_MATERIALS_SHEEN: "KHR_materials_sheen", KHR_MATERIALS_SPECULAR: "KHR_materials_specular", KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission", KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence", KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy", KHR_MATERIALS_UNLIT: "KHR_materials_unlit", KHR_MATERIALS_VOLUME: "KHR_materials_volume", KHR_TEXTURE_BASISU: "KHR_texture_basisu", KHR_TEXTURE_TRANSFORM: "KHR_texture_transform", KHR_MESH_QUANTIZATION: "KHR_mesh_quantization", KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength", EXT_MATERIALS_BUMP: "EXT_materials_bump", EXT_TEXTURE_WEBP: "EXT_texture_webp", EXT_TEXTURE_AVIF: "EXT_texture_avif", EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression", EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing" };
class l_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_LIGHTS_PUNCTUAL, this.cache = { refs: {}, uses: {} };
  }
  _markDefs() {
    const e = this.parser, t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions && r.extensions[this.name] && r.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser, n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json, l = ((r.extensions && r.extensions[this.name] || {}).lights || [])[e];
    let c;
    const h = new ye(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Rt);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        c = new ju(h), c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      case "point":
        c = new Yu(h), c.distance = u;
        break;
      case "spot":
        c = new Wu(h), c.distance = u, l.spot = l.spot || {}, l.spot.innerConeAngle = l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0, l.spot.outerConeAngle = l.spot.outerConeAngle !== void 0 ? l.spot.outerConeAngle : Math.PI / 4, c.angle = l.spot.outerConeAngle, c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle, c.target.position.set(0, 0, -1), c.add(c.target);
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return c.position.set(0, 0, 0), c.decay = 2, xn(c, l), l.intensity !== void 0 && (c.intensity = l.intensity), c.name = t.createUniqueName(l.name || "light_" + e), i = Promise.resolve(c), t.cache.add(n, i), i;
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this, n = this.parser, r = n.json.nodes[e], o = (r.extensions && r.extensions[this.name] || {}).light;
    return o === void 0 ? null : this._loadLight(o).then(function(l) {
      return n._getNodeRef(t.cache, o, l);
    });
  }
}
class c_ {
  constructor() {
    this.name = Be.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return ti;
  }
  extendParams(e, t, n) {
    const i = [];
    e.color = new ye(1, 1, 1), e.opacity = 1;
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        e.color.setRGB(a[0], a[1], a[2], Rt), e.opacity = a[3];
      }
      r.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", r.baseColorTexture, xt));
    }
    return Promise.all(i);
  }
}
class h_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_EMISSIVE_STRENGTH;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return r !== void 0 && (t.emissiveIntensity = r), Promise.resolve();
  }
}
class u_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_CLEARCOAT;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor), a.clearcoatTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)), a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor), a.clearcoatRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)), a.clearcoatNormalTexture !== void 0 && (r.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)), a.clearcoatNormalTexture.scale !== void 0)) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new be(o, o);
    }
    return Promise.all(r);
  }
}
class d_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_DISPERSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0, Promise.resolve();
  }
}
class f_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_IRIDESCENCE;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor), a.iridescenceTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)), a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor), t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]), a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum), a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum), a.iridescenceThicknessTexture !== void 0 && r.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)), Promise.all(r);
  }
}
class p_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_SHEEN;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    t.sheenColor = new ye(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Rt);
    }
    return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor), a.sheenColorTexture !== void 0 && r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, xt)), a.sheenRoughnessTexture !== void 0 && r.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)), Promise.all(r);
  }
}
class m_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_TRANSMISSION;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor), a.transmissionTexture !== void 0 && r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)), Promise.all(r);
  }
}
class g_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_VOLUME;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0, a.thicknessTexture !== void 0 && r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)), t.attenuationDistance = a.attenuationDistance || 1 / 0;
    const o = a.attenuationColor || [1, 1, 1];
    return t.attenuationColor = new ye().setRGB(o[0], o[1], o[2], Rt), Promise.all(r);
  }
}
class __ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_IOR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return t.ior = r.ior !== void 0 ? r.ior : 1.5, Promise.resolve();
  }
}
class x_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_SPECULAR;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1, a.specularTexture !== void 0 && r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
    const o = a.specularColorFactor || [1, 1, 1];
    return t.specularColor = new ye().setRGB(o[0], o[1], o[2], Rt), a.specularColorTexture !== void 0 && r.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, xt)), Promise.all(r);
  }
}
class v_ {
  constructor(e) {
    this.parser = e, this.name = Be.EXT_MATERIALS_BUMP;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1, a.bumpTexture !== void 0 && r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)), Promise.all(r);
  }
}
class M_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_MATERIALS_ANISOTROPY;
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : ln;
  }
  extendMaterialParams(e, t) {
    const n = this.parser, i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [], a = i.extensions[this.name];
    return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength), a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation), a.anisotropyTexture !== void 0 && r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)), Promise.all(r);
  }
}
class y_ {
  constructor(e) {
    this.parser = e, this.name = Be.KHR_TEXTURE_BASISU;
  }
  loadTexture(e) {
    const t = this.parser, n = t.json, i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name], a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class S_ {
  constructor(e) {
    this.parser = e, this.name = Be.EXT_TEXTURE_WEBP, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t], o = i.images[a.source];
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
class E_ {
  constructor(e) {
    this.parser = e, this.name = Be.EXT_TEXTURE_AVIF, this.isSupported = null;
  }
  loadTexture(e) {
    const t = this.name, n = this.parser, i = n.json, r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t], o = i.images[a.source];
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
class T_ {
  constructor(e) {
    this.name = Be.EXT_MESHOPT_COMPRESSION, this.parser = e;
  }
  loadBufferView(e) {
    const t = this.parser.json, n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name], r = this.parser.getDependency("buffer", i.buffer), a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
        return null;
      }
      return r.then(function(o) {
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
class b_ {
  constructor(e) {
    this.name = Be.EXT_MESH_GPU_INSTANCING, this.parser = e;
  }
  createNodeMesh(e) {
    const t = this.parser.json, n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0) return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives) if (c.mode !== Ht.TRIANGLES && c.mode !== Ht.TRIANGLE_STRIP && c.mode !== Ht.TRIANGLE_FAN && c.mode !== void 0) return null;
    const a = n.extensions[this.name].attributes, o = [], l = {};
    for (const c in a) o.push(this.parser.getDependency("accessor", a[c]).then((h) => (l[c] = h, l[c])));
    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((c) => {
      const h = c.pop(), u = h.isGroup ? h.children : [h], d = c[0].count, p = [];
      for (const g of u) {
        const _ = new Re(), m = new R(), f = new Gt(), b = new R(1, 1, 1), T = new yu(g.geometry, g.material, d);
        for (let y = 0; y < d; y++) l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, y), l.ROTATION && f.fromBufferAttribute(l.ROTATION, y), l.SCALE && b.fromBufferAttribute(l.SCALE, y), T.setMatrixAt(y, _.compose(m, f, b));
        for (const y in l) if (y === "_COLOR_0") {
          const L = l[y];
          T.instanceColor = new Ua(L.array, L.itemSize, L.normalized);
        } else y !== "TRANSLATION" && y !== "ROTATION" && y !== "SCALE" && g.geometry.setAttribute(y, l[y]);
        nt.prototype.copy.call(T, g), this.parser.assignFinalMaterial(T), p.push(T);
      }
      return h.isGroup ? (h.clear(), h.add(...p), h) : p[0];
    }));
  }
}
const Ic = "glTF", es = 12, Xl = { JSON: 1313821514, BIN: 5130562 };
class A_ {
  constructor(e) {
    this.name = Be.KHR_BINARY_GLTF, this.content = null, this.body = null;
    const t = new DataView(e, 0, es), n = new TextDecoder();
    if (this.header = { magic: n.decode(new Uint8Array(e.slice(0, 4))), version: t.getUint32(4, true), length: t.getUint32(8, true) }, this.header.magic !== Ic) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - es, r = new DataView(e, es);
    let a = 0;
    for (; a < i; ) {
      const o = r.getUint32(a, true);
      a += 4;
      const l = r.getUint32(a, true);
      if (a += 4, l === Xl.JSON) {
        const c = new Uint8Array(e, es + a, o);
        this.content = n.decode(c);
      } else if (l === Xl.BIN) {
        const c = es + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class w_ {
  constructor(e, t) {
    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    this.name = Be.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload();
  }
  decodePrimitive(e, t) {
    const n = this.json, i = this.dracoLoader, r = e.extensions[this.name].bufferView, a = e.extensions[this.name].attributes, o = {}, l = {}, c = {};
    for (const h in a) {
      const u = Ba[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = Ba[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]], p = Ci[d.componentType];
        c[u] = p.name, l[u] = d.normalized === true;
      }
    }
    return t.getDependency("bufferView", r).then(function(h) {
      return new Promise(function(u, d) {
        i.decodeDracoFile(h, function(p) {
          for (const g in p.attributes) {
            const _ = p.attributes[g], m = l[g];
            m !== void 0 && (_.normalized = m);
          }
          u(p);
        }, o, c, Rt, d);
      });
    });
  }
}
class R_ {
  constructor() {
    this.name = Be.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(), t.texCoord !== void 0 && (e.channel = t.texCoord), t.offset !== void 0 && e.offset.fromArray(t.offset), t.rotation !== void 0 && (e.rotation = t.rotation), t.scale !== void 0 && e.repeat.fromArray(t.scale), e.needsUpdate = true), e;
  }
}
class C_ {
  constructor() {
    this.name = Be.KHR_MESH_QUANTIZATION;
  }
}
class Uc extends fs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer, n = this.sampleValues, i = this.valueSize, r = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer, a = this.sampleValues, o = this.valueSize, l = o * 2, c = o * 3, h = i - t, u = (n - t) / h, d = u * u, p = d * u, g = e * c, _ = g - c, m = -2 * p + 3 * d, f = p - d, b = 1 - m, T = f - d + u;
    for (let y = 0; y !== o; y++) {
      const L = a[_ + y + o], w = a[_ + y + l] * h, A = a[g + y + o], N = a[g + y] * h;
      r[y] = b * L + T * w + m * A + f * N;
    }
    return r;
  }
}
const P_ = new Gt();
class L_ extends Uc {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return P_.fromArray(r).normalize().toArray(r), r;
  }
}
const Ht = { POINTS: 0, LINES: 1, LINE_LOOP: 2, LINE_STRIP: 3, TRIANGLES: 4, TRIANGLE_STRIP: 5, TRIANGLE_FAN: 6 }, Ci = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }, Yl = { 9728: At, 9729: Ft, 9984: $l, 9985: qs, 9986: ts, 9987: Mn }, ql = { 33071: Un, 33648: tr, 10497: Ii }, Xr = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 }, Ba = { POSITION: "position", NORMAL: "normal", TANGENT: "tangent", TEXCOORD_0: "uv", TEXCOORD_1: "uv1", TEXCOORD_2: "uv2", TEXCOORD_3: "uv3", COLOR_0: "color", WEIGHTS_0: "skinWeight", JOINTS_0: "skinIndex" }, Dn = { scale: "scale", translation: "position", rotation: "quaternion", weights: "morphTargetInfluences" }, D_ = { CUBICSPLINE: void 0, LINEAR: ls, STEP: os }, Yr = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function I_(s) {
  return s.DefaultMaterial === void 0 && (s.DefaultMaterial = new to({ color: 16777215, emissive: 0, metalness: 1, roughness: 1, transparent: false, depthTest: true, side: an })), s.DefaultMaterial;
}
function $n(s, e, t) {
  for (const n in t.extensions) s[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {}, e.userData.gltfExtensions[n] = t.extensions[n]);
}
function xn(s, e) {
  e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(s.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras));
}
function U_(s, e, t) {
  let n = false, i = false, r = false;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (u.POSITION !== void 0 && (n = true), u.NORMAL !== void 0 && (i = true), u.COLOR_0 !== void 0 && (r = true), n && i && r) break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [], o = [], l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : s.attributes.position;
      a.push(d);
    }
    if (i) {
      const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : s.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : s.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then(function(c) {
    const h = c[0], u = c[1], d = c[2];
    return n && (s.morphAttributes.position = h), i && (s.morphAttributes.normal = u), r && (s.morphAttributes.color = d), s.morphTargetsRelative = true, s;
  });
}
function N_(s, e) {
  if (s.updateMorphTargets(), e.weights !== void 0) for (let t = 0, n = e.weights.length; t < n; t++) s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++) s.morphTargetDictionary[t[n]] = n;
    } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
  }
}
function F_(s) {
  let e;
  const t = s.extensions && s.extensions[Be.KHR_DRACO_MESH_COMPRESSION];
  if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + qr(t.attributes) : e = s.indices + ":" + qr(s.attributes) + ":" + s.mode, s.targets !== void 0) for (let n = 0, i = s.targets.length; n < i; n++) e += ":" + qr(s.targets[n]);
  return e;
}
function qr(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function ka(s) {
  switch (s) {
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
function O_(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0 ? "image/webp" : s.search(/\.ktx2($|\?)/i) > 0 || s.search(/^data\:image\/ktx2/) === 0 ? "image/ktx2" : "image/png";
}
const B_ = new Re();
class k_ {
  constructor(e = {}, t = {}) {
    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new o_(), this.associations = /* @__PURE__ */ new Map(), this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = { refs: {}, uses: {} }, this.cameraCache = { refs: {}, uses: {} }, this.lightCache = { refs: {}, uses: {} }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
    let n = false, i = -1, r = false, a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === true;
      const l = o.match(/Version\/(\d+)/);
      i = n && l ? parseInt(l[1], 10) : -1, r = o.indexOf("Firefox") > -1, a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1;
    }
    typeof createImageBitmap > "u" || n && i < 17 || r && a < 98 ? this.textureLoader = new Vu(this.options.manager) : this.textureLoader = new Ku(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new no(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(true);
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this, i = this.json, r = this.extensions;
    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll(function(a) {
      return a._markDefs && a._markDefs();
    }), Promise.all(this._invokeAll(function(a) {
      return a.beforeRoot && a.beforeRoot();
    })).then(function() {
      return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")]);
    }).then(function(a) {
      const o = { scene: a[0][i.scene || 0], scenes: a[0], animations: a[1], cameras: a[2], asset: i.asset, parser: n, userData: {} };
      return $n(r, o, i), xn(o, i), Promise.all(n._invokeAll(function(l) {
        return l.afterRoot && l.afterRoot(o);
      })).then(function() {
        for (const l of o.scenes) l.updateMatrixWorld();
        e(o);
      });
    }).catch(t);
  }
  _markDefs() {
    const e = this.json.nodes || [], t = this.json.skins || [], n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++) e[a[o]].isBone = true;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh), a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = true)), a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera);
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(), r = (a, o) => {
      const l = this.associations.get(a);
      l != null && this.associations.set(o, l);
      for (const [c, h] of a.children.entries()) r(h, o.children[c]);
    };
    return r(n, i), i.name += "_instance_" + e.uses[t]++, i;
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
      const r = e(t[i]);
      r && n.push(r);
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
          i = this._invokeOne(function(r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function(r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function(r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function(r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function(r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function(r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (i = this._invokeOne(function(r) {
            return r != this && r.getDependency && r.getDependency(e, t);
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
      t = Promise.all(i.map(function(r, a) {
        return n.getDependency(e, a);
      })), this.cache.add(e, t);
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e], n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
    if (t.uri === void 0 && e === 0) return Promise.resolve(this.extensions[Be.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function(r, a) {
      n.load(rs.resolveURL(t.uri, i.path), r, void 0, function() {
        a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'));
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function(n) {
      const i = t.byteLength || 0, r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this, n = this.json, i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = Xr[i.type], o = Ci[i.componentType], l = i.normalized === true, c = new o(i.count * a);
      return Promise.resolve(new wt(c, a, l));
    }
    const r = [];
    return i.bufferView !== void 0 ? r.push(this.getDependency("bufferView", i.bufferView)) : r.push(null), i.sparse !== void 0 && (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)), r.push(this.getDependency("bufferView", i.sparse.values.bufferView))), Promise.all(r).then(function(a) {
      const o = a[0], l = Xr[i.type], c = Ci[i.componentType], h = c.BYTES_PER_ELEMENT, u = h * l, d = i.byteOffset || 0, p = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0, g = i.normalized === true;
      let _, m;
      if (p && p !== u) {
        const f = Math.floor(d / p), b = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
        let T = t.cache.get(b);
        T || (_ = new c(o, f * p, i.count * p / h), T = new gu(_, p / h), t.cache.add(b, T)), m = new $a(T, l, d % p / h, g);
      } else o === null ? _ = new c(i.count * l) : _ = new c(o, d, i.count * l), m = new wt(_, l, g);
      if (i.sparse !== void 0) {
        const f = Xr.SCALAR, b = Ci[i.sparse.indices.componentType], T = i.sparse.indices.byteOffset || 0, y = i.sparse.values.byteOffset || 0, L = new b(a[1], T, i.sparse.count * f), w = new c(a[2], y, i.sparse.count * l);
        o !== null && (m = new wt(m.array.slice(), m.itemSize, m.normalized)), m.normalized = false;
        for (let A = 0, N = L.length; A < N; A++) {
          const S = L[A];
          if (m.setX(S, w[A * l]), l >= 2 && m.setY(S, w[A * l + 1]), l >= 3 && m.setZ(S, w[A * l + 2]), l >= 4 && m.setW(S, w[A * l + 3]), l >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
        }
        m.normalized = g;
      }
      return m;
    });
  }
  loadTexture(e) {
    const t = this.json, n = this.options, r = t.textures[e].source, a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this, r = this.json, a = r.textures[e], o = r.images[t], l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, n).then(function(h) {
      h.flipY = false, h.name = a.name || o.name || "", h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === false && (h.name = o.uri);
      const d = (r.samplers || {})[a.sampler] || {};
      return h.magFilter = Yl[d.magFilter] || Ft, h.minFilter = Yl[d.minFilter] || Mn, h.wrapS = ql[d.wrapS] || Ii, h.wrapT = ql[d.wrapT] || Ii, h.generateMipmaps = !h.isCompressedTexture && h.minFilter !== At && h.minFilter !== Ft, i.associations.set(h, { textures: e }), h;
    }).catch(function() {
      return null;
    });
    return this.textureCache[l] = c, c;
  }
  loadImageSource(e, t) {
    const n = this, i = this.json, r = this.options;
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
          const m = new gt(_);
          m.needsUpdate = true, d(m);
        }), t.load(rs.resolveURL(u, r.path), g, void 0, p);
      });
    }).then(function(u) {
      return c === true && o.revokeObjectURL(l), xn(u, a), u.userData.mimeType = a.mimeType || O_(a.uri), u;
    }).catch(function(u) {
      throw console.error("THREE.GLTFLoader: Couldn't load texture", l), u;
    });
    return this.sourceCache[e] = h, h;
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function(a) {
      if (!a) return null;
      if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(), a.channel = n.texCoord), r.extensions[Be.KHR_TEXTURE_TRANSFORM]) {
        const o = n.extensions !== void 0 ? n.extensions[Be.KHR_TEXTURE_TRANSFORM] : void 0;
        if (o) {
          const l = r.associations.get(a);
          a = r.extensions[Be.KHR_TEXTURE_TRANSFORM].extendTexture(a, o), r.associations.set(a, l);
        }
      }
      return i !== void 0 && (a.colorSpace = i), e[t] = a, a;
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0, r = t.attributes.color !== void 0, a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new Sc(), en.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, l.sizeAttenuation = false, this.cache.add(o, l)), n = l;
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      l || (l = new eo(), en.prototype.copy.call(l, n), l.color.copy(n.color), l.map = n.map, this.cache.add(o, l)), n = l;
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      i && (o += "derivative-tangents:"), r && (o += "vertex-colors:"), a && (o += "flat-shading:");
      let l = this.cache.get(o);
      l || (l = n.clone(), r && (l.vertexColors = true), a && (l.flatShading = true), i && (l.normalScale && (l.normalScale.y *= -1), l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)), this.cache.add(o, l), this.associations.set(l, this.associations.get(n))), n = l;
    }
    e.material = n;
  }
  getMaterialType() {
    return to;
  }
  loadMaterial(e) {
    const t = this, n = this.json, i = this.extensions, r = n.materials[e];
    let a;
    const o = {}, l = r.extensions || {}, c = [];
    if (l[Be.KHR_MATERIALS_UNLIT]) {
      const u = i[Be.KHR_MATERIALS_UNLIT];
      a = u.getMaterialType(), c.push(u.extendParams(o, r, t));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (o.color = new ye(1, 1, 1), o.opacity = 1, Array.isArray(u.baseColorFactor)) {
        const d = u.baseColorFactor;
        o.color.setRGB(d[0], d[1], d[2], Rt), o.opacity = d[3];
      }
      u.baseColorTexture !== void 0 && c.push(t.assignTexture(o, "map", u.baseColorTexture, xt)), o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1, o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1, u.metallicRoughnessTexture !== void 0 && (c.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)), c.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))), a = this._invokeOne(function(d) {
        return d.getMaterialType && d.getMaterialType(e);
      }), c.push(Promise.all(this._invokeAll(function(d) {
        return d.extendMaterialParams && d.extendMaterialParams(e, o);
      })));
    }
    r.doubleSided === true && (o.side = rn);
    const h = r.alphaMode || Yr.OPAQUE;
    if (h === Yr.BLEND ? (o.transparent = true, o.depthWrite = false) : (o.transparent = false, h === Yr.MASK && (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)), r.normalTexture !== void 0 && a !== ti && (c.push(t.assignTexture(o, "normalMap", r.normalTexture)), o.normalScale = new be(1, 1), r.normalTexture.scale !== void 0)) {
      const u = r.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (r.occlusionTexture !== void 0 && a !== ti && (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)), r.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = r.occlusionTexture.strength)), r.emissiveFactor !== void 0 && a !== ti) {
      const u = r.emissiveFactor;
      o.emissive = new ye().setRGB(u[0], u[1], u[2], Rt);
    }
    return r.emissiveTexture !== void 0 && a !== ti && c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, xt)), Promise.all(c).then(function() {
      const u = new a(o);
      return r.name && (u.name = r.name), xn(u, r), t.associations.set(u, { materials: e }), r.extensions && $n(i, u, r), u;
    });
  }
  createUniqueName(e) {
    const t = Qe.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t);
  }
  loadGeometries(e) {
    const t = this, n = this.extensions, i = this.primitiveCache;
    function r(o) {
      return n[Be.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(l) {
        return jl(l, o, t);
      });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o], h = F_(c), u = i[h];
      if (u) a.push(u.promise);
      else {
        let d;
        c.extensions && c.extensions[Be.KHR_DRACO_MESH_COMPRESSION] ? d = r(c) : d = jl(new Wt(), c, t), i[h] = { primitive: c, promise: d }, a.push(d);
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this, n = this.json, i = this.extensions, r = n.meshes[e], a = r.primitives, o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const h = a[l].material === void 0 ? I_(this.cache) : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return o.push(t.loadGeometries(a)), Promise.all(o).then(function(l) {
      const c = l.slice(0, l.length - 1), h = l[l.length - 1], u = [];
      for (let p = 0, g = h.length; p < g; p++) {
        const _ = h[p], m = a[p];
        let f;
        const b = c[p];
        if (m.mode === Ht.TRIANGLES || m.mode === Ht.TRIANGLE_STRIP || m.mode === Ht.TRIANGLE_FAN || m.mode === void 0) f = r.isSkinnedMesh === true ? new xu(_, b) : new Lt(_, b), f.isSkinnedMesh === true && f.normalizeSkinWeights(), m.mode === Ht.TRIANGLE_STRIP ? f.geometry = Wl(f.geometry, oc) : m.mode === Ht.TRIANGLE_FAN && (f.geometry = Wl(f.geometry, La));
        else if (m.mode === Ht.LINES) f = new Tu(_, b);
        else if (m.mode === Ht.LINE_STRIP) f = new hs(_, b);
        else if (m.mode === Ht.LINE_LOOP) f = new bu(_, b);
        else if (m.mode === Ht.POINTS) f = new Au(_, b);
        else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + m.mode);
        Object.keys(f.geometry.morphAttributes).length > 0 && N_(f, r), f.name = t.createUniqueName(r.name || "mesh_" + e), xn(f, r), m.extensions && $n(i, f, m), t.assignFinalMaterial(f), u.push(f);
      }
      for (let p = 0, g = u.length; p < g; p++) t.associations.set(u[p], { meshes: e, primitives: p });
      if (u.length === 1) return r.extensions && $n(i, u[0], r), u[0];
      const d = new ni();
      r.extensions && $n(i, d, r), t.associations.set(d, { meshes: e });
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
    return n.type === "perspective" ? t = new bt(cc.radToDeg(i.yfov), i.aspectRatio || 1, i.znear || 1, i.zfar || 2e6) : n.type === "orthographic" && (t = new so(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)), n.name && (t.name = this.createUniqueName(n.name)), xn(t, n), Promise.resolve(t);
  }
  loadSkin(e) {
    const t = this.json.skins[e], n = [];
    for (let i = 0, r = t.joints.length; i < r; i++) n.push(this._loadNodeShallow(t.joints[i]));
    return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null), Promise.all(n).then(function(i) {
      const r = i.pop(), a = i, o = [], l = [];
      for (let c = 0, h = a.length; c < h; c++) {
        const u = a[c];
        if (u) {
          o.push(u);
          const d = new Re();
          r !== null && d.fromArray(r.array, c * 16), l.push(d);
        } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[c]);
      }
      return new Ja(o, l);
    });
  }
  loadAnimation(e) {
    const t = this.json, n = this, i = t.animations[e], r = i.name ? i.name : "animation_" + e, a = [], o = [], l = [], c = [], h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const p = i.channels[u], g = i.samplers[p.sampler], _ = p.target, m = _.node, f = i.parameters !== void 0 ? i.parameters[g.input] : g.input, b = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 && (a.push(this.getDependency("node", m)), o.push(this.getDependency("accessor", f)), l.push(this.getDependency("accessor", b)), c.push(g), h.push(_));
    }
    return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l), Promise.all(c), Promise.all(h)]).then(function(u) {
      const d = u[0], p = u[1], g = u[2], _ = u[3], m = u[4], f = [];
      for (let b = 0, T = d.length; b < T; b++) {
        const y = d[b], L = p[b], w = g[b], A = _[b], N = m[b];
        if (y === void 0) continue;
        y.updateMatrix && y.updateMatrix();
        const S = n._createAnimationTracks(y, L, w, A, N);
        if (S) for (let M = 0; M < S.length; M++) f.push(S[M]);
      }
      return new Nu(r, void 0, f);
    });
  }
  createNodeMesh(e) {
    const t = this.json, n = this, i = t.nodes[e];
    return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(r) {
      const a = n._getNodeRef(n.meshCache, i.mesh, r);
      return i.weights !== void 0 && a.traverse(function(o) {
        if (o.isMesh) for (let l = 0, c = i.weights.length; l < c; l++) o.morphTargetInfluences[l] = i.weights[l];
      }), a;
    });
  }
  loadNode(e) {
    const t = this.json, n = this, i = t.nodes[e], r = n._loadNodeShallow(e), a = [], o = i.children || [];
    for (let c = 0, h = o.length; c < h; c++) a.push(n.getDependency("node", o[c]));
    const l = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(a), l]).then(function(c) {
      const h = c[0], u = c[1], d = c[2];
      d !== null && h.traverse(function(p) {
        p.isSkinnedMesh && p.bind(d, B_);
      });
      for (let p = 0, g = u.length; p < g; p++) h.add(u[p]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json, n = this.extensions, i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e], a = r.name ? i.createUniqueName(r.name) : "", o = [], l = i._invokeOne(function(c) {
      return c.createNodeMesh && c.createNodeMesh(e);
    });
    return l && o.push(l), r.camera !== void 0 && o.push(i.getDependency("camera", r.camera).then(function(c) {
      return i._getNodeRef(i.cameraCache, r.camera, c);
    })), i._invokeAll(function(c) {
      return c.createNodeAttachment && c.createNodeAttachment(e);
    }).forEach(function(c) {
      o.push(c);
    }), this.nodeCache[e] = Promise.all(o).then(function(c) {
      let h;
      if (r.isBone === true ? h = new Mc() : c.length > 1 ? h = new ni() : c.length === 1 ? h = c[0] : h = new nt(), h !== c[0]) for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
      if (r.name && (h.userData.name = r.name, h.name = a), xn(h, r), r.extensions && $n(n, h, r), r.matrix !== void 0) {
        const u = new Re();
        u.fromArray(r.matrix), h.applyMatrix4(u);
      } else r.translation !== void 0 && h.position.fromArray(r.translation), r.rotation !== void 0 && h.quaternion.fromArray(r.rotation), r.scale !== void 0 && h.scale.fromArray(r.scale);
      return i.associations.has(h) || i.associations.set(h, {}), i.associations.get(h).nodes = e, h;
    }), this.nodeCache[e];
  }
  loadScene(e) {
    const t = this.extensions, n = this.json.scenes[e], i = this, r = new ni();
    n.name && (r.name = i.createUniqueName(n.name)), xn(r, n), n.extensions && $n(t, r, n);
    const a = n.nodes || [], o = [];
    for (let l = 0, c = a.length; l < c; l++) o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function(l) {
      for (let h = 0, u = l.length; h < u; h++) r.add(l[h]);
      const c = (h) => {
        const u = /* @__PURE__ */ new Map();
        for (const [d, p] of i.associations) (d instanceof en || d instanceof gt) && u.set(d, p);
        return h.traverse((d) => {
          const p = i.associations.get(d);
          p != null && u.set(d, p);
        }), u;
      };
      return i.associations = c(r), r;
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [], o = e.name ? e.name : e.uuid, l = [];
    Dn[r.path] === Dn.weights ? e.traverse(function(d) {
      d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
    }) : l.push(o);
    let c;
    switch (Dn[r.path]) {
      case Dn.weights:
        c = Bi;
        break;
      case Dn.rotation:
        c = ki;
        break;
      case Dn.position:
      case Dn.scale:
        c = zi;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Bi;
            break;
          case 2:
          case 3:
          default:
            c = zi;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? D_[i.interpolation] : ls, u = this._getArrayFromAccessor(n);
    for (let d = 0, p = l.length; d < p; d++) {
      const g = new c(l[d] + "." + Dn[r.path], t.array, u, h);
      i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g), a.push(g);
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = ka(t.constructor), i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    e.createInterpolant = function(n) {
      const i = this instanceof ki ? L_ : Uc;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
  }
}
function z_(s, e, t) {
  const n = e.attributes, i = new bn();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION], l = o.min, c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (i.set(new R(l[0], l[1], l[2]), new R(c[0], c[1], c[2])), o.normalized) {
        const h = ka(Ci[o.componentType]);
        i.min.multiplyScalar(h), i.max.multiplyScalar(h);
      }
    } else {
      console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new R(), l = new R();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION], p = d.min, g = d.max;
        if (p !== void 0 && g !== void 0) {
          if (l.setX(Math.max(Math.abs(p[0]), Math.abs(g[0]))), l.setY(Math.max(Math.abs(p[1]), Math.abs(g[1]))), l.setZ(Math.max(Math.abs(p[2]), Math.abs(g[2]))), d.normalized) {
            const _ = ka(Ci[d.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new on();
  i.getCenter(a.center), a.radius = i.min.distanceTo(i.max) / 2, s.boundingSphere = a;
}
function jl(s, e, t) {
  const n = e.attributes, i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function(l) {
      s.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = Ba[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function(o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return Ve.workingColorSpace !== Rt && "COLOR_0" in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`), xn(s, e), z_(s, e, t), Promise.all(i).then(function() {
    return e.targets !== void 0 ? U_(s, e.targets, t) : s;
  });
}
class Q_ extends Lt {
  constructor(e, t = {}) {
    super(e), this.isWater = true;
    const n = this, i = t.textureWidth !== void 0 ? t.textureWidth : 512, r = t.textureHeight !== void 0 ? t.textureHeight : 512, a = t.clipBias !== void 0 ? t.clipBias : 0, o = t.alpha !== void 0 ? t.alpha : 1, l = t.time !== void 0 ? t.time : 0, c = t.waterNormals !== void 0 ? t.waterNormals : null, h = t.sunDirection !== void 0 ? t.sunDirection : new R(0.70707, 0.70707, 0), u = new ye(t.sunColor !== void 0 ? t.sunColor : 16777215), d = new ye(t.waterColor !== void 0 ? t.waterColor : 8355711), p = t.eye !== void 0 ? t.eye : new R(0, 0, 0), g = t.distortionScale !== void 0 ? t.distortionScale : 20, _ = t.side !== void 0 ? t.side : an, m = t.fog !== void 0 ? t.fog : false, f = new vn(), b = new R(), T = new R(), y = new R(), L = new Re(), w = new R(0, 0, -1), A = new Ye(), N = new R(), S = new R(), M = new Ye(), P = new Re(), G = new bt(), k = new Bn(i, r), W = { name: "MirrorShader", uniforms: Ia.merge([ne.fog, ne.lights, { normalSampler: { value: null }, mirrorSampler: { value: null }, alpha: { value: 1 }, time: { value: 0 }, size: { value: 1 }, distortionScale: { value: 20 }, textureMatrix: { value: new Re() }, sunColor: { value: new ye(8355711) }, sunDirection: { value: new R(0.70707, 0.70707, 0) }, eye: { value: new R() }, waterColor: { value: new ye(5592405) } }]), vertexShader: `
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`, fragmentShader: `
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}` }, K = new Tn({ name: W.name, uniforms: Ia.clone(W.uniforms), vertexShader: W.vertexShader, fragmentShader: W.fragmentShader, lights: true, side: _, fog: m });
    K.uniforms.mirrorSampler.value = k.texture, K.uniforms.textureMatrix.value = P, K.uniforms.alpha.value = o, K.uniforms.time.value = l, K.uniforms.normalSampler.value = c, K.uniforms.sunColor.value = u, K.uniforms.waterColor.value = d, K.uniforms.sunDirection.value = h, K.uniforms.distortionScale.value = g, K.uniforms.eye.value = p, n.material = K, n.onBeforeRender = function(H, Q, z) {
      if (T.setFromMatrixPosition(n.matrixWorld), y.setFromMatrixPosition(z.matrixWorld), L.extractRotation(n.matrixWorld), b.set(0, 0, 1), b.applyMatrix4(L), N.subVectors(T, y), N.dot(b) > 0) return;
      N.reflect(b).negate(), N.add(T), L.extractRotation(z.matrixWorld), w.set(0, 0, -1), w.applyMatrix4(L), w.add(y), S.subVectors(T, w), S.reflect(b).negate(), S.add(T), G.position.copy(N), G.up.set(0, 1, 0), G.up.applyMatrix4(L), G.up.reflect(b), G.lookAt(S), G.far = z.far, G.updateMatrixWorld(), G.projectionMatrix.copy(z.projectionMatrix), P.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1), P.multiply(G.projectionMatrix), P.multiply(G.matrixWorldInverse), f.setFromNormalAndCoplanarPoint(b, T), f.applyMatrix4(G.matrixWorldInverse), A.set(f.normal.x, f.normal.y, f.normal.z, f.constant);
      const te = G.projectionMatrix;
      M.x = (Math.sign(A.x) + te.elements[8]) / te.elements[0], M.y = (Math.sign(A.y) + te.elements[9]) / te.elements[5], M.z = -1, M.w = (1 + te.elements[10]) / te.elements[14], A.multiplyScalar(2 / A.dot(M)), te.elements[2] = A.x, te.elements[6] = A.y, te.elements[10] = A.z + 1 - a, te.elements[14] = A.w, p.setFromMatrixPosition(z.matrixWorld);
      const ce = H.getRenderTarget(), _e = H.xr.enabled, Ne = H.shadowMap.autoUpdate;
      n.visible = false, H.xr.enabled = false, H.shadowMap.autoUpdate = false, H.setRenderTarget(k), H.state.buffers.depth.setMask(true), H.autoClear === false && H.clear(), H.render(Q, G), n.visible = true, H.xr.enabled = _e, H.shadowMap.autoUpdate = Ne, H.setRenderTarget(ce);
      const je = z.viewport;
      je !== void 0 && H.state.viewport(je);
    };
  }
}
export {
  Y_ as A,
  ds as B,
  ye as C,
  ju as D,
  Qa as F,
  J_ as G,
  G_ as H,
  Lt as M,
  nt as O,
  q_ as P,
  Ii as R,
  H_ as S,
  Vu as T,
  R as V,
  Z_ as W,
  V_ as a,
  to as b,
  ti as c,
  Re as d,
  bn as e,
  X_ as f,
  vc as g,
  bt as h,
  er as i,
  Vc as j,
  W_ as k,
  K_ as l,
  $_ as m,
  or as n,
  Q_ as o,
  $u as p,
  j_ as q
};

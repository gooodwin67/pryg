import { B as _s, a as us, P as Te, N as Be, b as De, c as Is, C as ae, M as zs, d as xs, V as y, e as ws, f as He, g as Re, W as je, Q as Es, h as rs, i as Ss, j as ys, G as se, E as Q, k as hs, D as _e, S as Fe, l as Ie, m as he, I as ns, n as ls, o as Ge, p as qs, O as ie, R as Ls, q as Rs, r as Ne, s as qe, A as Fs, t as R, u as We, v as Ue, w as Oe, x as Ve, y as Ye, H as $e, z as Ke, F as Xe, L as de, J as Je, K as Ze, T as Se, U as Qe, X as st, Y as ce, Z as pe, _ as et, $ as tt, a0 as at, a1 as it, a2 as ot, a3 as nt, a4 as lt, a5 as rt } from "./three-C68A4lfq.js";
let Yt;
let __tla = (async () => {
  var _a;
  Yt = function() {
    import.meta.url, import("_").then(async (m) => {
      await m.__tla;
      return m;
    }).catch(() => 1), async function* () {
    }().next();
  };
  (function() {
    const s = document.createElement("link").relList;
    if (s && s.supports && s.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
    new MutationObserver((e) => {
      for (const a of e) if (a.type === "childList") for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function t(e) {
      const a = {};
      return e.integrity && (a.integrity = e.integrity), e.referrerPolicy && (a.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? a.credentials = "include" : e.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
    }
    function i(e) {
      if (e.ep) return;
      e.ep = true;
      const a = t(e);
      fetch(e.href, a);
    }
  })();
  const ht = "modulepreload", dt = function(l, s) {
    return new URL(l, s).href;
  }, ue = {}, ct = function(s, t, i) {
    let e = Promise.resolve();
    if (t && t.length > 0) {
      let h = function(c) {
        return Promise.all(c.map((d) => Promise.resolve(d).then((p) => ({
          status: "fulfilled",
          value: p
        }), (p) => ({
          status: "rejected",
          reason: p
        }))));
      };
      const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = (n == null ? void 0 : n.nonce) || (n == null ? void 0 : n.getAttribute("nonce"));
      e = h(t.map((c) => {
        if (c = dt(c, i), c in ue) return;
        ue[c] = true;
        const d = c.endsWith(".css"), p = d ? '[rel="stylesheet"]' : "";
        if (!!i) for (let g = o.length - 1; g >= 0; g--) {
          const b = o[g];
          if (b.href === c && (!d || b.rel === "stylesheet")) return;
        }
        else if (document.querySelector('link[href="'.concat(c, '"]').concat(p))) return;
        const u = document.createElement("link");
        if (u.rel = d ? "stylesheet" : ht, d || (u.as = "script"), u.crossOrigin = "", u.href = c, r && u.setAttribute("nonce", r), document.head.appendChild(u), d) return new Promise((g, b) => {
          u.addEventListener("load", g), u.addEventListener("error", () => b(new Error("Unable to preload CSS for ".concat(c))));
        });
      }));
    }
    function a(o) {
      const n = new Event("vite:preloadError", {
        cancelable: true
      });
      if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
    }
    return e.then((o) => {
      for (const n of o || []) n.status === "rejected" && a(n.reason);
      return s().catch(a);
    });
  };
  function z(l, s) {
    return Math.random() * (s - l) + l;
  }
  function pt() {
    let l = window.matchMedia || window.msMatchMedia;
    return l ? l("(pointer:coarse)").matches : false;
  }
  function me(l) {
    return l.reduce((s, t) => s | 1 << t, 0);
  }
  function Gs(l, s) {
    const t = me(l), i = me(s);
    return "0x" + ((t & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
  }
  function ye(l) {
    const s = l.collisionGroups(), t = s >>> 16 & 65535, i = s & 65535;
    function e(a) {
      const o = [];
      for (let n = 0; n < 16; n++) a & 1 << n && o.push(n);
      return o;
    }
    return [
      e(t),
      e(i)
    ];
  }
  function ut(l) {
    var _a2, _b, _c;
    return typeof l == "number" ? new y(l, l, l) : (l == null ? void 0 : l.isVector3) ? l : new y((_a2 = l == null ? void 0 : l.x) != null ? _a2 : 1, (_b = l == null ? void 0 : l.y) != null ? _b : 1, (_c = l == null ? void 0 : l.z) != null ? _c : 1);
  }
  function fe(l) {
    var _a2, _b, _c;
    return (_c = (_b = (_a2 = l == null ? void 0 : l.userData) == null ? void 0 : _a2.id) != null ? _b : l == null ? void 0 : l.uuid) != null ? _c : l == null ? void 0 : l.id;
  }
  const mt = new ws(new y(-0.5, -0.5, -0.5), new y(0.5, 0.5, 0.5)), be = new He(), ge = new Es();
  function ve(l) {
    var _a2, _b, _c, _d, _e2, _f;
    if (l == null ? void 0 : l.isObject3D) {
      if (l.updateMatrixWorld(true), (_a2 = l.geometry) == null ? void 0 : _a2.isBufferGeometry) {
        const e = l.geometry;
        if (e.boundingBox || e.computeBoundingBox(), e.boundingBox) {
          const a = e.boundingBox.clone();
          return a.applyMatrix4(l.matrixWorld), a;
        }
      }
      return new ws().setFromObject(l);
    }
    const s = (_c = (_b = l.position) != null ? _b : l.pos) != null ? _c : new y(), t = ut((_d = l.size) != null ? _d : 1), i = ((_e2 = l.quaternion) == null ? void 0 : _e2.isQuaternion) ? l.quaternion : ((_f = l.rotation) == null ? void 0 : _f.isEuler) ? ge.setFromEuler(l.rotation) : ge.set(0, 0, 0, 1);
    return be.compose(s, i, t), mt.clone().applyMatrix4(be);
  }
  function V(l, s) {
    const t = ve(l), i = fe(l);
    for (let e = s.length - 1; e >= 0; e--) {
      const a = s[e], o = fe(a);
      if (i !== void 0 && o !== void 0 && i === o) continue;
      if (ve(a).intersectsBox(t)) return a;
    }
    return null;
  }
  function Us(l) {
    var _a2;
    l.traverse((t) => {
      var _a3;
      ((_a3 = t.userData) == null ? void 0 : _a3.persistent) || (t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((i) => i.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose());
    });
    const s = [];
    for (const t of l.children) ((_a2 = t.userData) == null ? void 0 : _a2.persistent) || s.push(t);
    s.forEach((t) => l.remove(t));
  }
  function yt({ scene: l, maxParticles: s = 800, gravity: t = -7.8, drag: i = 2, texture: e = null, pointSize: a = 0.66, blending: o = Be } = {}) {
    if (!l) throw new Error("createSplashSystem: scene is required");
    function n() {
      const M = document.createElement("canvas");
      M.width = M.height = 64;
      const w = M.getContext("2d"), D = w.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
      D.addColorStop(0, "rgba(255,255,255,1)"), D.addColorStop(1, "rgba(255,255,255,0)"), w.fillStyle = D, w.fillRect(0, 0, 64, 64);
      const j = new ae(M);
      return j.anisotropy = 1, j.needsUpdate = true, j;
    }
    const r = e || n(), h = new Float32Array(s * 3), c = new Float32Array(s * 3), d = new Float32Array(s), p = new Float32Array(s), m = new Float32Array(s), u = new Uint8Array(s), g = new _s();
    g.setAttribute("position", new us(h, 3)), g.setAttribute("aSize", new us(m, 1));
    const b = new Te({
      map: r,
      size: a,
      transparent: true,
      depthWrite: false,
      blending: o,
      vertexColors: false,
      sizeAttenuation: true
    }), x = new De(g, b);
    x.userData.persistent = true, x.frustumCulled = false, x.position.set(0, -20, 0), l.add(x);
    let f = 0;
    function k() {
      for (let v = 0; v < s; v++) {
        const M = (f + v) % s;
        if (!u[M]) return f = (M + 1) % s, M;
      }
      return -1;
    }
    function I(v, M, w, D, j) {
      const N = M * 3;
      v[N] = w, v[N + 1] = D, v[N + 2] = j;
    }
    return {
      trigger(v, M = 1, w = {}) {
        const { count: D = 42, spread: j = 0.35, up: N = 3, horiz: K = 2.2, ttl: _ = [
          0.35,
          0.8
        ], sizeJitter: L = 0.5 } = w, X = Math.max(1, Math.floor(D * M));
        for (let bs = 0; bs < X; bs++) {
          const A = k();
          if (A === -1) break;
          const H = Math.sqrt(Math.random()) * j, T = Math.random() * Math.PI * 2, J = H * Math.cos(T), ds = H * Math.sin(T), as = Math.sqrt(Math.random()), Z = Math.cos(T) * K * as * (0.6 + 0.4 * Math.random()), is = Math.sin(T) * K * as * (0.6 + 0.4 * Math.random()), os = N * (0.6 + 0.4 * Math.random()), O = _[0] + Math.random() * (_[1] - _[0]), U = (1 - L / 2 + Math.random() * L) * 1;
          I(h, A, v.x + J, v.y, v.z + ds), I(c, A, Z * M, os * M, is * M), d[A] = O, p[A] = 0, m[A] = U, u[A] = 1;
        }
        g.attributes.position.needsUpdate = true, g.attributes.aSize.needsUpdate = true;
      },
      update(v) {
        if (v <= 0) return;
        const M = t, w = Math.max(0, i);
        let D = false;
        for (let _ = 0; _ < s; _++) {
          if (!u[_]) continue;
          if (D = true, p[_] += v, p[_] >= d[_]) {
            u[_] = 0;
            const T = _ * 3;
            h[T] = 1e9, h[T + 1] = 1e9, h[T + 2] = 1e9;
            continue;
          }
          const L = _ * 3;
          c[L + 1] += M * v;
          const X = c[L], bs = c[L + 1], A = c[L + 2], H = Math.max(0, 1 - w * v);
          c[L] = X * H, c[L + 1] = bs * H, c[L + 2] = A * H, h[L] += c[L] * v, h[L + 1] += c[L + 1] * v, h[L + 2] += c[L + 2] * v;
        }
        D && (g.attributes.position.needsUpdate = true);
        let j = 0, N = 0;
        for (let _ = 0; _ < s; _++) u[_] && (j++, N += 1 - p[_] / d[_]);
        const K = j ? 0.25 + 0.75 * (N / j) : 1;
        b.size = a * K;
      },
      get object3D() {
        return x;
      },
      dispose() {
        l.remove(x), g.dispose(), b.dispose(), e || r.dispose();
      }
    };
  }
  function ft({ scene: l, size: s = 1.5, ttl: t = 0.9 } = {}) {
    const i = new Is(1, 1), e = (() => {
      const m = document.createElement("canvas");
      m.width = m.height = 64;
      const u = m.getContext("2d");
      return u.clearRect(0, 0, 64, 64), u.strokeStyle = "rgba(255,255,255,0.9)", u.lineWidth = 3, u.beginPath(), u.arc(32, 32, 20, 0, Math.PI * 2), u.stroke(), new ae(m);
    })(), a = new zs({
      map: e,
      transparent: true,
      depthWrite: false
    }), o = new xs(i, a);
    o.visible = false, o.userData.persistent = true, l.add(o);
    let n = 0, r = false;
    const h = new y();
    function c(m) {
      h.copy(m), n = 0, r = true, o.visible = true;
    }
    function d(m, u) {
      if (!r) return;
      if (n += m, n >= t) {
        r = false, o.visible = false;
        return;
      }
      o.position.set(h.x, h.y + 0.01, h.z), o.rotation.set(-Math.PI / 2, 0, 0);
      const g = n / t, b = s * (1 + 1.6 * g);
      o.scale.setScalar(b), a.opacity = 1 - g;
    }
    function p() {
      l.remove(o), i.dispose(), a.dispose(), e.dispose();
    }
    return {
      trigger: c,
      update: d,
      dispose: p,
      mesh: o
    };
  }
  function bt(l, s, t, i) {
    var _a2, _b, _c;
    if (!l) return;
    const e = {
      position: l.position.clone(),
      quaternion: l.quaternion.clone()
    }, a = [];
    l.traverse((d) => {
      (d.isMesh || d.isSkinnedMesh) && a.push({
        object3d: d,
        frustumCulled: d.frustumCulled,
        visible: d.visible,
        castShadow: d.castShadow,
        receiveShadow: d.receiveShadow
      });
    });
    const o = (_b = (_a2 = s.shadowMap) == null ? void 0 : _a2.enabled) != null ? _b : false;
    s.shadowMap && (s.shadowMap.enabled = false), a.forEach(({ object3d: d }) => {
      d.frustumCulled = false, d.visible = true, d.castShadow = false;
    });
    const n = t.getWorldDirection(new y()).multiplyScalar(2.5), r = t.position.clone().add(n);
    r.z = t.position.z - 1.5, l.position.copy(r), l.updateMatrixWorld(true), ((_c = l.userData) == null ? void 0 : _c.mixer) && l.userData.mixer.update(1 / 60), s.compile(i, t);
    const h = s.getRenderTarget(), c = new je(1, 1, {
      depthBuffer: false,
      stencilBuffer: false
    });
    s.setRenderTarget(c), s.render(i, t), s.setRenderTarget(h), c.dispose(), l.position.copy(e.position), l.quaternion.copy(e.quaternion), a.forEach(({ object3d: d, frustumCulled: p, visible: m, castShadow: u, receiveShadow: g }) => {
      d.frustumCulled = p, d.visible = m, d.castShadow = u, d.receiveShadow = g;
    }), s.shadowMap && (s.shadowMap.enabled = o);
  }
  function gt(l, s, t) {
    const i = l.localClippingEnabled, e = l.clippingPlanes ? l.clippingPlanes.slice() : [];
    l.localClippingEnabled = true, l.clippingPlanes = [
      new Re(new y(0, 1, 0), -1e9)
    ], l.compile(s, t), l.clippingPlanes = e, l.localClippingEnabled = i;
  }
  function vt(l, s, t, i) {
    if (!l) return;
    const e = s.getRenderTarget(), a = !!s.shadowMap, o = a ? s.shadowMap.autoUpdate : false;
    a && (s.shadowMap.autoUpdate = false);
    const n = l.visible;
    l.visible = true;
    const r = new je(1, 1, {
      depthBuffer: false,
      stencilBuffer: false
    });
    s.setRenderTarget(r), s.render(t, i), s.setRenderTarget(e), r.dispose(), l.visible = n, a && (s.shadowMap.autoUpdate = o, s.shadowMap.needsUpdate = true);
  }
  class wt {
    constructor(s, t, i, e, a, o, n) {
      this.dataClass = s, this.scene = t, this.audioClass = i, this.levelClass = e, this.paramsClass = a, this.camera = o, this.gameClass = n, this.playerHeight = 0.9, this.playerWidth = 0.5, this.player = new xs(new rs(this.playerWidth, this.playerHeight, this.playerWidth), new Ss({
        color: 16711680,
        transparent: true,
        opacity: 0
      })), this.player.material.depthWrite = false, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -0.4, this.player.userData.name = "player", this.player.userData.readyJump = false, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = false, this.player.userData.audio = [], this.player.userData.canFly = false, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = true, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = false, this.player.userData.score, this.player.userData.maxLives = 3, this.player.userData.lives = this.player.userData.maxLives, this.player.userData.bonusHeart = 0, this.player.userData.finish = false, this.player.userData.splash = false, this.playerModel, this.playerOut = new xs(new rs(this.playerWidth, this.playerHeight + 0.1, this.playerWidth), new ys({
        color: 16776960,
        transparent: true,
        opacity: 0
      })), this.playerOut.material.depthWrite = false, this.playerOut.userData.id = this.player.uuid, this.leftHand, this.rightHand, this.head, this.headPosition, this.playerColors = [
        15904944,
        11596464,
        16052346
      ];
    }
    async loadPlayerModel() {
      await new se().loadAsync("models/players/player1.glb").then((i) => {
        const e = i.scene;
        this.playerModel = e, this.playerModel.traverse(function(a) {
          a.isMesh && (a.castShadow = true);
        }), this.playerModel.children[0].traverse(function(a) {
          a.isMesh && (a.castShadow = true);
        }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
      });
    }
    playerMove() {
      if (this.levelClass.levelsMode && this.dataClass.levelCoopMode == "coop" ? this.levelClass.players.every((s) => s.player.userData.finish) ? this.levelClass.players.forEach((s) => {
        s.player.userData.body.setTranslation(new y(0, -5, 0));
      }) : this.levelClass.players.every((s) => s.player.userData.finish || s.player.userData.lives <= 0) && this.levelClass.players.forEach((s) => {
        s.player.userData.body.setTranslation(new y(0, -5, 0));
      }) : this.levelClass.levelsMode && this.dataClass.levelCoopMode == "contest" && this.levelClass.players.some((s) => s.player.userData.finish) && this.levelClass.players.forEach((s) => {
        s.player.userData.body.setTranslation(new y(0, -5, 0));
      }), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + 0.5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = true)), V(this.player, this.levelClass.objs.sensorPlanes.data)) {
        const [s, t] = ye(this.player.userData.collider);
        t[0] == 0 && this.player.userData.collider.setCollisionGroups(Gs([
          1
        ], [
          1
        ]));
      } else {
        const [s, t] = ye(this.player.userData.collider);
        t[0] != 0 && this.player.userData.collider.setCollisionGroups(Gs([
          1
        ], [
          0,
          1
        ]));
      }
      if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && V(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(V(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(V(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = true, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(V(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = true, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
        "take"
      ]), this.audioClass.musicOn && this.audioClass.playMusic([
        "take"
      ]))), V(this.player, this.levelClass.objs.topPlanes.data) || V(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = true : this.player.userData.onGround = false, V(this.player, this.levelClass.objs.livesBlocks.data) && !V(this.player, this.levelClass.objs.livesBlocks.data).userData.taked && this.player.userData.lives < this.player.userData.maxLives && (this.player.userData.lives++, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
        "take"
      ]), this.audioClass.musicOn && this.audioClass.playMusic([
        "take"
      ]), this.reLiveField(), V(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = true), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.7 && this.player.userData.live && this.levelClass.canHorDie && this.levelClass.startAfterReset && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new y(this.player.userData.body.translation().x, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - 13 && this.player.userData.live && this.camera.position.y > 10 && this.levelClass.startAfterReset && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new y(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = true), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && (this.audioClass.stopMusic([
        "inwater"
      ]), this.audioClass.musicOn && this.dataClass.levelCoopMode == "coop" ? this.audioClass.playMusic([
        "inwater"
      ]) : this.audioClass.musicOn && this.dataClass.levelCoopMode == "contest" && !this.levelClass.players.some((s) => s.player.userData.finish) && this.audioClass.playMusic([
        "inwater"
      ])), this.levelClass.splash.trigger(new y(this.player.position.x, this.player.position.y + 20, this.player.position.z), 2), this.levelClass.ring.trigger(new y(this.player.position.x, this.player.position.y + 0.1, this.player.position.z))), this.player.userData.splash = true), this.player.position.y < -4 && this.gameClass.gameStarting) {
        if (this.player.userData.splash = false, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
          "back"
        ]), !this.player.userData.finish && this.gameClass.pause, this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.player.userData.finish ? this.levelClass.showPopupInGame(false, true) : this.levelClass.showPopupInGame(true, true), this.paramsClass.allDie = true) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(true) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(true), this.paramsClass.allDie = true), this.player.userData.lives < 1), this.player.userData.canFlyJumps = 0, this.player.userData.live = false) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.levelClass.levelsMode && (this.player.userData.lives = 0), this.player.userData.finish, this.player.userData.canFlyJumps = 0, this.player.userData.live = false), this.levelClass.players.every((s) => !s.player.userData.live) && this.levelClass.players.every((s) => s.player.userData.lives < 1) && this.gameClass.gameStarting && (this.audioClass.pauseMusic([
          "back"
        ]), this.audioClass.pauseMusic([
          "rain"
        ]), this.dataClass.levelCoopMode == "coop" ? (this.levelClass.players.every((s) => s.player.userData.finish) ? this.levelClass.showPopupInGame(false, true) : this.levelClass.showPopupInGame(true), this.paramsClass.allDie = true) : this.dataClass.levelCoopMode == "contest" && (this.levelClass.players.some((s) => s.player.userData.finish) ? (this.levelClass.showPopupInGame(false, true), this.levelClass.players.forEach((s, t, i) => {
          s.player.userData.finish && (this.dataClass.table.levelsStatusContest[this.levelClass.levelsMode - 1] = t + 1, this.dataClass.loadLevelsContest());
        })) : this.levelClass.showPopupInGame(true), this.paramsClass.allDie = true))), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, t, i) => {
          s.userData.fly = false;
        }), this.playerAliving(false), this.audioClass.musicOn && this.audioClass.playMusic([
          "back"
        ]), this.audioClass.musicOn && this.levelClass.worldClass.rain && this.audioClass.playMusic([
          "rain"
        ])), !this.player.userData.live || this.player.userData.finish) {
          if (this.player.userData.body.setLinvel(new y(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = false), this.player.userData.deadPos != this.player.userData.startPos) {
            const s = this.levelClass.objs.grassPlanes.data;
            for (let t = 0; t < s.length - 1; t++) {
              const i = s[t];
              if (i.position.x >= this.player.position.x - 1 && !i.userData.moveHor && !i.userData.moveVert) {
                this.player.userData.deadPos = i.position;
                break;
              }
            }
            this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position);
          }
          this.player.userData.playerAlive && (this.player.userData.readyJump = false, this.player.userData.canFly = false, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = false, this.player.userData.body.setLinvel({
            x: 0,
            y: 0,
            z: 0
          }, true), this.paramsClass.gameDir == "vert" ? this.player.userData.body.setTranslation(new y(this.player.userData.deadPos.x + (0.1 + Math.random() * 0.2), this.player.userData.deadPos.y, this.player.userData.deadPos.z)) : this.player.userData.body.setTranslation(new y(this.player.userData.deadPos.x + (0.1 + Math.random() * 0.2), this.player.userData.deadPos.y + z(1.1, 3.1), this.player.userData.deadPos.z)), this.player.userData.deadPos = new y(0, 0, 0), this.player.userData.live = true, this.player.userData.playerAlive = false);
        }
        this.reLiveField();
      } else {
        const s = this.player.userData.readyJump ? Math.PI / 2 : 0, t = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, e = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -0.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > 0.4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? 0.75 : 1.18, h = this.player.userData.readyJump ? 0.55 : 0.15;
        this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, 0.1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, 0.1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, 0.1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, 0.1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, 0.1), this.head.position.y = this.lerp(this.head.position.y, r, 0.1), this.head.position.z = this.lerp(this.head.position.z, h, 0.1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, 0.1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, 0.1);
        const c = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
        this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, c, 0.4);
        const d = this.player.userData.readyJump ? 0.71 : 0;
        this.player.userData.body.setRotation({
          w: this.player.userData.body.rotation().w,
          x: this.lerp(this.player.userData.body.rotation().x, d, 0.1),
          y: this.player.userData.body.rotation().y,
          z: this.player.userData.body.rotation().z
        }), this.player.userData.readyJump && this.player.userData.playerPowerJump < 8 && (this.player.userData.playerPowerJump += 0.2), this.player.userData.jumping && (this.player.userData.body.setLinvel({
          x: 0,
          y: 0,
          z: 0
        }, true), this.player.userData.body.applyImpulse({
          x: this.paramsClass.gameDir == "hor" ? this.player.userData.playerPowerJump / 3 : 0,
          y: this.player.userData.playerPowerJump / 1.4,
          z: 0
        }, true), this.player.userData.playerPowerJump = 1, this.player.userData.jumping = false);
      }
      if (this.player.userData.canFlyJumps) {
        const s = this.levelClass.boostHatModels[this.player.userData.canFlyNum], t = this.player.userData.head;
        s.userData.originalScale || (s.userData.originalScale = s.scale.clone()), s.parent !== this.scene && this.scene.attach(s), this.playerModel.updateMatrixWorld(true), t.updateWorldMatrix(true, false);
        const i = new y().setFromMatrixPosition(this.player.userData.head.matrixWorld), e = new Es();
        this.player.userData.head.getWorldQuaternion(e);
        const a = new Es().setFromEuler(new Q(0, Math.PI / 2, 0)), o = e.clone().multiply(a), r = new y(0.01, 0.14, 0.05).clone().applyQuaternion(o);
        s.quaternion.copy(o), s.position.copy(i).add(r), s.children[0].children[1].rotation.y += 0.4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
      } else {
        const s = this.player.userData.canFlyNum;
        if (s !== null && this.levelClass.boostHatModels[s]) {
          const t = this.levelClass.boostHatModels[s];
          t.userData.lastPos && (t.position.copy(t.userData.lastPos), t.quaternion.copy(t.userData.lastQuat)), t.userData.fly = false, t.children[0].children[1].rotation.y += 0.02;
        }
      }
    }
    lerp(s, t, i) {
      return s + (t - s) * i;
    }
    playerAliving(s) {
      this.paramsClass.allDie = false, this.player.userData.playerAlive = true, s && (this.levelClass.reloadLevel(this.levelClass.players.findIndex((t, i, e) => t.player == this.player)), this.levelClass.canHorDie = false, this.player.userData.deadPos = this.player.userData.startPos, this.levelClass.levelsMode ? this.player.userData.lives = 1 : this.player.userData.lives = this.player.userData.maxLives, this.reLiveField(), this.player.userData.score = 0), setTimeout(() => {
        this.gameClass.gameStarting = true, this.player.userData.splash = false;
      }, 100);
    }
    reLiveField() {
      let s = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((i, e, a) => i.player == this.player)].children, t = document.querySelectorAll(".num_bonus_heart")[this.levelClass.players.findIndex((i, e, a) => i.player == this.player)];
      for (let i = 0; i < s.length; i++) i > this.player.userData.lives - 1 ? s[i].classList.add("opacity_my-screen") : s[i].classList.contains("opacity_my-screen") && s[i].classList.remove("opacity_my-screen");
      this.player.userData.lives > 3 ? (t.classList.contains("opacity_my-screen") && t.classList.remove("opacity_my-screen"), t.textContent = this.player.userData.bonusHeart) : t.classList.contains("opacity_my-screen") || t.classList.add("opacity_my-screen");
    }
  }
  const Ns = {
    ru: {
      ui: {
        langToggle: "EN"
      },
      title: "\u0423\u0422\u0418\u041D\u0410\u042F \u0411\u0420\u0410\u0422\u0412\u0410",
      modes: {
        champ: {
          title: "\u0427\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442",
          desc: "\u0423\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 \u043B\u0443\u0447\u0448\u0435\u0435 \u0432\u0440\u0435\u043C\u044F (1,2,3 \u0438\u0433\u0440\u043E\u043A\u0430)"
        },
        coop: {
          title: "\u041F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435",
          desc: "\u0421\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0435 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0443\u0440\u043E\u0432\u043D\u0435\u0439"
        },
        versus: {
          title: "\u0421\u043E\u0440\u0435\u0432\u043D\u043E\u0432\u0430\u043D\u0438\u0435",
          desc: "\u041E\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435 \u043B\u0443\u0447\u0448\u0435\u0433\u043E \u0432 \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u0438"
        }
      },
      free: {
        playersTitle: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0433\u0440\u043E\u043A\u043E\u0432",
        gameChoice: "\u0412\u044B\u0431\u043E\u0440 \u0438\u0433\u0440\u044B",
        tip1: "\u0414\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u0433\u0440\u043E\u043A\u043E\u0432 \u0441\u0432\u043E\u044F \u0442\u0430\u0431\u043B\u0438\u0446\u0430 \u0440\u0435\u043A\u043E\u0440\u0434\u043E\u0432",
        tip2: "\u0423\u0447\u0438\u0442\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u043F\u0440\u043E\u0439\u0434\u0435\u043D\u043D\u044B\u0439 \u043F\u0443\u0442\u044C \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u0438\u0433\u0440\u043E\u043A\u0430 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435",
        tip3: "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043E\u0434\u043D\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439. 1\u0439 \u0438\u0433\u0440\u043E\u043A \u043C\u044B\u0448\u043A\u043E\u0439, 2\u0439 \u0438 3\u0439 \u043A\u043D\u043E\u043F\u043A\u0430\u043C\u0438",
        ocean: "\u041E\u043A\u0435\u0430\u043D",
        space: "\u041A\u043E\u0441\u043C\u043E\u0441"
      },
      levels: {
        playersTitle: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0433\u0440\u043E\u043A\u043E\u0432",
        levelChoice: "\u0412\u044B\u0431\u043E\u0440 \u0443\u0440\u043E\u0432\u043D\u044F",
        tip1: "\u041F\u0440\u043E\u0445\u043E\u0434\u0438\u0442\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u0440\u0430\u0437\u043D\u044B\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u0438\u0433\u0440\u043E\u043A\u043E\u0432",
        tip2: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437, \u043F\u0440\u043E\u0445\u043E\u0434\u044F 10\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C, \u0438\u0433\u0440\u043E\u043A \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0442 4 \u0441\u0435\u0440\u0434\u0435\u0447\u043A\u043E \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 '\u0427\u0435\u043C\u043F\u0438\u043E\u043D\u0430\u0442' \u043D\u0430 \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043F\u044B\u0442\u043E\u043A. 10 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0432\u0441\u0435\u0433\u0434\u0430 \u0440\u0430\u0437\u043D\u044B\u0439!",
        tip3: "\u0414\u043B\u044F \u043F\u0440\u043E\u0445\u043E\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0440\u043E\u0432\u043D\u044F \u0432\u0441\u0435 \u0438\u0433\u0440\u043E\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0434\u043E\u0439\u0442\u0438 \u0434\u043E \u0444\u0438\u043D\u0438\u0448\u0430",
        status: {
          completed: "\u041F\u0440\u043E\u0439\u0434\u0435\u043D",
          available: "\u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D",
          locked: "\u0417\u0430\u043A\u0440\u044B\u0442",
          completedAria: "\u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u043E\u0439\u0434\u0435\u043D",
          availableAria: "\u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D",
          lockedAria: "\u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u043A\u0440\u044B\u0442"
        }
      },
      contest: {
        playersTitle: "\u0421\u043A\u043E\u043B\u044C\u043A\u043E \u0438\u0433\u0440\u043E\u043A\u043E\u0432",
        levelChoice: "\u0412\u044B\u0431\u043E\u0440 \u0443\u0440\u043E\u0432\u043D\u044F",
        random: "\u0421\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
        tip1: "\u0421\u043E\u0440\u0435\u0432\u043D\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u0440\u0443\u0433 \u0441 \u0434\u0440\u0443\u0433\u043E\u043C. \u041F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442 \u0442\u043E\u0442, \u043A\u0442\u043E \u043F\u0435\u0440\u0432\u044B\u0439 \u0434\u043E\u0431\u0435\u0440\u0435\u0442\u0441\u044F \u0434\u043E \u0444\u0438\u043D\u0438\u0448\u0430",
        tip2: "\u0426\u0432\u0435\u0442 \u0443\u0440\u043E\u0432\u043D\u044F \u043E\u043A\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0446\u0432\u0435\u0442 \u043F\u043E\u0431\u0435\u0434\u0438\u0442\u0435\u043B\u044F",
        tip3: "\u0426\u0435\u043B\u044C - \u043E\u043A\u0440\u0430\u0441\u0438\u0442\u044C \u0432\u0441\u0435 \u0443\u0440\u043E\u0432\u043D\u0438 \u0432 \u0441\u0432\u043E\u0438 \u0446\u0432\u0435\u0442\u0430",
        player1: "\u0411\u0438\u043B\u043B\u0438",
        player2: "\u0412\u0438\u043B\u043B\u0438",
        player3: "\u0414\u0438\u043B\u043B\u0438"
      },
      players: {
        billy: "\u0411\u0438\u043B\u043B\u0438",
        willy: "\u0412\u0438\u043B\u043B\u0438",
        dilly: "\u0414\u0438\u043B\u043B\u0438",
        lives: "\u0416\u0438\u0437\u043D\u0438:"
      },
      hud: {
        metersLabel: "\u043C",
        records: "\u0420\u0435\u043A\u043E\u0440\u0434\u044B:",
        mine: "\u041C\u043E\u0439:",
        world: "\u041C\u0438\u0440\u043E\u0432\u043E\u0439:",
        secPlayer: "\u042F",
        thirdPlayer: "\u042C"
      },
      popup: {
        continue: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C +",
        next: "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C",
        restart: "\u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430\u043D\u043E\u0432\u043E",
        levelSelect: "\u0412\u044B\u0431\u043E\u0440 \u0443\u0440\u043E\u0432\u043D\u044F",
        exit: "\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E"
      },
      loader: {
        loading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430..."
      },
      leaderboard: {
        mine: "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434"
      },
      auth: {
        title: "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044C \u0434\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u0438\u044F \u0432 \u0440\u0435\u043A\u043E\u0440\u0434\u0430\u0445",
        cta: "\u0412\u043E\u0439\u0442\u0438"
      }
    },
    en: {
      ui: {
        langToggle: "RU"
      },
      title: "DUCK BROS",
      modes: {
        champ: {
          title: "Championship",
          desc: "Set the best time (1,2,3 players)"
        },
        coop: {
          title: "Beat levels",
          desc: "Beat levels together"
        },
        versus: {
          title: "Versus",
          desc: "Find out who\u2019s fastest"
        }
      },
      free: {
        playersTitle: "Players",
        gameChoice: "Game selection",
        tip1: "Each player count has its own leaderboard",
        tip2: "We sum distance traveled by each teammate",
        tip3: "One-button control. 1st player with the mouse, 2nd and 3rd buttons",
        ocean: "Ocean",
        space: "Space"
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
        }
      },
      contest: {
        playersTitle: "Players",
        levelChoice: "Level selection",
        random: "Random level",
        tip1: "Race each other: first to finish wins",
        tip2: "The level gets dyed in the winner\u2019s color",
        tip3: "Goal: dye all levels in your color",
        player1: "Billy",
        player2: "Willy",
        player3: "Dilly"
      },
      players: {
        billy: "Billy",
        willy: "Willy",
        dilly: "Dilly",
        lives: "Lives:"
      },
      hud: {
        metersLabel: "m",
        records: "Records:",
        mine: "Mine:",
        world: "World:",
        secPlayer: "Z",
        thirdPlayer: "M"
      },
      popup: {
        continue: "Continue +",
        next: "Next level",
        restart: "Restart",
        levelSelect: "Level select",
        exit: "Main menu"
      },
      loader: {
        loading: "Loading..."
      },
      leaderboard: {
        mine: "My record"
      },
      auth: {
        title: "Log in to participate in the records",
        cta: "LogIn"
      }
    }
  };
  function we(l, s) {
    return s.split(".").reduce((t, i) => t && t[i], l);
  }
  function Os(l = "ru", s = document) {
    const t = Ns[l] || Ns.ru;
    if (s.querySelectorAll("[data-i18n]").forEach((e) => {
      const a = e.dataset.i18n, o = we(t, a);
      o != null && (e.textContent = o);
    }), document.documentElement.lang = l, localStorage.setItem("locale", l), document.getElementById("lang-toggle")) {
      const e = document.getElementById("flag");
      we(t, "ui.langToggle") === "ru" || l === "ru" ? (e.classList.remove("us"), e.classList.add("ru"), e.src = "images/ru.svg") : (e.classList.remove("ru"), e.classList.add("us"), e.src = "images/us.svg");
    }
  }
  function xt(l, s) {
    if (s != null) Os(s);
    else {
      const i = localStorage.getItem("locale") || "ru";
      Os(i);
    }
    const t = document.getElementById("lang-toggle");
    document.getElementById("flag"), t && t.addEventListener("click", () => {
      const e = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
      Os(e), l();
    });
  }
  function E(l, s = "") {
    var _a2;
    const t = localStorage.getItem("locale") || "ru", i = Ns[t] || Ns.ru;
    return (_a2 = l.split(".").reduce((a, o) => a && a[o], i)) != null ? _a2 : s;
  }
  const Mt = /* @__PURE__ */ new Set([
    "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434",
    "My record"
  ]), xe = (l) => (l == null ? void 0 : l.isMine) === true || (l == null ? void 0 : l.name) === E("hud.mineRecord", "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434") || Mt.has(l == null ? void 0 : l.name);
  class Ct {
    constructor(s, t, i, e, a, o, n, r, h, c, d, p, m, u, g, b) {
      this.scene = s, this.audioClass = t, this.physicsClass = i, this.renderer = e, this.camera = a, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.initMatch = h, this.gameClass = d, this.splash = p, this.ring = m, this.dataClass = c, this.scoreClass = u, this.menuClass = g, this.assetsManager = b, this.playersLoaded = false, this.cameraSpeed = 0.01, this.score300ChampHorSent = false, this.score100ChampVertSent = false, this.levelsPlayedTracked = /* @__PURE__ */ new Set(), this.levelsContestPlayedTracked = /* @__PURE__ */ new Set(), this.hardHorReachedSent = false, this.hardVertReachedSent = false, this.levelsMode = false, this.levelsNoFric = false, this.allLevels = this.dataClass.allLevels, this.randomNoFric = 0.3, this.randomAnimateHor = 0.2, this.randomAnimateVert = 0.2, this.canShowAds = true, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = true, this.canHorDie = false, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
        min: 1,
        max: 4
      }, this.fixedDistanceVert = {
        min: 3,
        max: 4
      }, this.count = 120, this._dayColor = new hs(16777215), this._nightColor = new hs(16771488), this.mksWidth = 100, this.mksHeight = 100, this.geometryPlane = new Is(this.mksWidth, this.mksHeight), this.materialPlane = new zs({
        color: 0,
        side: _e
      }), this.mks = new xs(this.geometryPlane, this.materialPlane), this.mks.position.z = -550, this.mks.position.x = 100, this.isMobile ? this.mks.position.y = 120 : this.mks.position.y = 140, this.mks.layers.set(1), this.startAfterReset = true;
      const x = new Fe(), f = 0.01;
      x.moveTo(5 * f, 5 * f), x.bezierCurveTo(5 * f, 5 * f, 4 * f, 2 * f, 0 * f, 2 * f), x.bezierCurveTo(-6 * f, 2 * f, -6 * f, 7 * f, -6 * f, 7 * f), x.bezierCurveTo(-6 * f, 10 * f, -3 * f, 14 * f, 5 * f, 18 * f), x.bezierCurveTo(12 * f, 14 * f, 16 * f, 10 * f, 16 * f, 7 * f), x.bezierCurveTo(16 * f, 7 * f, 16 * f, 2 * f, 10 * f, 2 * f), x.bezierCurveTo(7 * f, 2 * f, 5 * f, 5 * f, 5 * f, 5 * f);
      const k = {
        depth: 0.22,
        bevelEnabled: false,
        curveSegments: 12,
        steps: 1
      };
      this.objs = {
        planes: {
          data: Array.from({
            length: this.count
          }, (v, M) => ({
            position: new y(0, -10, 0),
            rotation: new Q(0, 0, 0),
            scale: new y(1, 1, 1),
            size: new y(1, 1, 1),
            userData: {
              name: "plane",
              collide: null,
              body: null,
              speed: null,
              direction: 1
            }
          })),
          geometryPlane: new rs(this.planeWidth, this.planeHeight, this.planeDepth),
          materialPlane: new Ss({
            color: 52224
          }),
          plane: null
        },
        topPlanes: {
          data: Array.from({
            length: this.count
          }, (v, M) => ({
            position: new y(0, -10, 0),
            rotation: new Q(0, 0, 0),
            scale: new y(1, 1, 1),
            size: new y(1, 1, 1),
            userData: {
              name: "topSensor",
              collide: null,
              body: null,
              speed: null,
              direction: 1
            }
          })),
          geometryPlaneTop: new rs(this.planeWidth, 0.4, 1.2),
          materialPlaneTop: new ys({
            color: 13421568,
            transparent: true,
            opacity: 0
          }),
          planeTop: null
        },
        grassPlanes: {
          data: Array.from({
            length: this.count
          }, (v, M) => ({
            position: new y(0, -10, 0),
            rotation: new Q(0, 0, 0),
            scale: new y(1, 1, 1),
            size: new y(1, 1, 1),
            userData: {
              name: "tops",
              collide: null,
              body: null,
              speed: null,
              direction: 1,
              noFriction: false,
              moveHor: false,
              moveVert: false
            }
          })),
          geometryPlaneGrass: new rs(this.planeWidth, 0.5, this.planeDepth + 0.2),
          materialPlaneGrass: new Ss({
            color: 52224,
            transparent: true,
            opacity: 1
          }),
          planeGrass: null
        },
        sensorPlanes: {
          data: Array.from({
            length: this.count
          }, (v, M) => ({
            position: new y(0, -10, 0),
            rotation: new Q(0, 0, 0),
            scale: new y(1, 1, 1),
            size: new y(1, 1, 1),
            userData: {
              name: "sensor",
              collide: null,
              body: null,
              speed: null,
              direction: 1
            }
          })),
          geometryPlaneSensor: new rs(this.planeWidth, 0.4, 1.2),
          materialPlaneSensor: new Ss({
            color: 65280,
            transparent: true,
            opacity: 0
          }),
          planeSensor: null
        },
        lamps: {
          data: Array.from({
            length: this.count
          }, (v, M) => ({
            position: new y(0, -10, 0),
            rotation: new Q(0, 0, 0),
            scale: new y(1, 1, 1),
            size: new y(0.1, 2, 0.1),
            userData: {
              name: "lamp",
              light: false
            }
          })),
          lampHeight: 1,
          geometryLamp: new rs(0.3, 1, 0.3),
          materialLamp: new Ss({
            color: 16777215,
            transparent: false,
            opacity: 1
          }),
          lamp: null
        },
        plafons: {
          data: Array.from({
            length: this.count
          }, (v, M) => ({
            position: new y(0, -10, 0),
            rotation: new Q(0, 0, 0),
            scale: new y(1, 1, 1),
            size: new y(0.6, 0.6, 0.6),
            userData: {
              name: "plafon",
              light: false,
              pointLight: null
            }
          })),
          geometryPlafon: new he(0.32, 24, 16),
          materialPlafon: new ys({
            transparent: true,
            color: 16777215,
            opacity: 0.65,
            roughness: 0,
            metalness: 0,
            emissive: 16777215
          }),
          plafon: null
        },
        bulbs: {
          data: Array.from({
            length: this.count
          }, (v, M) => ({
            position: new y(0, -10, 0),
            rotation: new Q(0, 0, 0),
            scale: new y(1, 1, 1),
            size: new y(0.3, 0.3, 0.3),
            userData: {
              name: "bulb",
              light: false,
              pointLight: null
            }
          })),
          geometryBulb: new he(0.3),
          materialBulb: new ys({
            emissive: new hs(16770979),
            emissiveIntensity: 6,
            color: 16777215
          }),
          bulb: null
        },
        livesBlocks: {
          data: Array.from({
            length: this.count
          }, (v, M) => ({
            position: new y(0, -10, 0),
            rotation: new Q(0, 0, 0),
            scale: new y(1, 1, 1),
            size: new y(0.4, 0.3, 0.1),
            userData: {
              name: "liveBlock",
              taked: false,
              startPos: new y(0, -10, 0)
            }
          })),
          geometryLivesBlock: new Ie(x, k),
          materialLivesBlock: new ys({
            color: 16711680
          }),
          livesBlock: null
        }
      }, this.objs.planes.plane = new ns(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(ls), this.objs.planes.plane.receiveShadow = true, this.objs.planes.plane.castShadow = true, this.objs.planes.plane.frustumCulled = false, this.objs.topPlanes.planeTop = new ns(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(ls), this.objs.topPlanes.planeTop.frustumCulled = false, this.objs.grassPlanes.planeGrass = new ns(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(ls), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = true, this.objs.grassPlanes.planeGrass.castShadow = true, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = false, this.objs.sensorPlanes.planeSensor = new ns(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(ls), this.objs.sensorPlanes.planeSensor.frustumCulled = false, this.objs.sensorPlanes.planeSensor.visible = false, this.objs.lamps.lamp = new ns(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(ls), this.objs.lamps.lamp.frustumCulled = false, this.objs.plafons.plafon = new ns(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(ls), this.objs.plafons.plafon.frustumCulled = false, this.objs.bulbs.bulb = new ns(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(ls), this.objs.bulbs.bulb.frustumCulled = false, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new ns(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(ls), this.objs.livesBlocks.livesBlock.frustumCulled = false, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = true, this.objs.plafons.materialPlafon.onBeforeCompile = (v) => {
        v.uniforms.fresnelPower = {
          value: 2.5
        }, v.fragmentShader = v.fragmentShader.replace("#include <output_fragment>", "\n    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);\n    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );\n    ");
      }, this.objs.plafons.materialPlafon.needsUpdate = true;
      const I = new Float32Array(this.count);
      for (let v = 0; v < this.count; v++) I[v] = 0;
      this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Ge(I, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (v) => {
        v.vertexShader = "\n    attribute float aEmissive;\n    varying float vEmissive;\n  " + v.vertexShader.replace("#include <begin_vertex>", "\n      #include <begin_vertex>\n      vEmissive = aEmissive;\n    "), v.fragmentShader = "\n    varying float vEmissive;\n  " + v.fragmentShader.replace("#include <lights_fragment_begin>", "\n      #include <lights_fragment_begin>\n      // \u0443\u0441\u0438\u043B\u0438\u0432\u0430\u0435\u043C \u044D\u043C\u0438\u0441\u0441\u0438\u044E \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0438\u043D\u0441\u0442\u0430\u043D\u0441\u0430\n      totalEmissiveRadiance *= vEmissive;\n    ");
      }, this.objs.bulbs.materialBulb.needsUpdate = true;
      function W(v = 64) {
        const M = document.createElement("canvas");
        M.width = M.height = v;
        const w = M.getContext("2d"), D = w.createRadialGradient(v / 2, v / 2, 0, v / 2, v / 2, v / 2);
        D.addColorStop(0, "rgba(255, 235, 175, 1)"), D.addColorStop(1, "rgba(255, 235, 175, 0)"), w.fillStyle = D, w.fillRect(0, 0, v, v);
        const j = new ae(M);
        return j.anisotropy = 1, j.generateMipmaps = false, j.needsUpdate = true, j;
      }
      this._glowTex = W(), this._emissive = I, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = 0.9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new y(-1, 0, 0), this.rightEdge = new y(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.gameNum = 1, this.cam = {
        targetX: this.camera.position.x,
        velocityX: 0,
        smoothTime: 0.28,
        targetFilterLambda: 8,
        lookAheadSeconds: 0.2,
        lookAheadMax: 3,
        maxBackJump: 800
      }, this.dt = new qs(), this.menuInGame = () => {
        async function v() {
          return new Promise((M) => {
            ysdk.adv.showFullscreenAdv({
              callbacks: {
                onOpen: () => console.log("Ad opened"),
                onClose: (w) => {
                  console.log("Ad closed", w), M(w);
                },
                onError: (w) => {
                  console.warn("Ad error", w), M(false);
                }
              }
            });
          });
        }
        this.rebindButton(".popup_game_btn1", async () => {
          ysdk.adv.showRewardedVideo({
            callbacks: {
              onOpen: () => {
                console.log("Video ad open.");
              },
              onRewarded: () => {
                console.log("Rewarded!"), this.audioClass.oceanAudio.isPlaying || this.audioClass.oceanAudio.play(), this.boostHatModels.forEach((w, D, j) => {
                  w.userData.fly = false;
                });
                let M = [];
                this.players.forEach((w, D, j) => {
                  M.push(w.player.position.x);
                }), this.players.forEach((w, D, j) => {
                  w.playerAliving(false), w.player.userData.lives = 1, w.player.position.x = Math.max(...M), this.camera.position.x = w.player.position.x;
                }), this.audioClass.pauseMusic([
                  "back"
                ]), this.audioClass.playMusic([
                  "back"
                ]), this.levelsMode || (this.canShowAds = false), this.gameClass.showGamePopup = false, this.hideScreen("popup_in_game");
              },
              onClose: () => {
                console.log("Video ad closed.");
              },
              onError: (M) => {
                console.log("Error while open video ad:", M);
              }
            }
          });
        }), this.rebindButton(".popup_game_btn2", async () => {
          this.audioClass.hardStopAll(), await v();
          let M = [
            0,
            -1,
            1
          ];
          this.players.forEach((w, D, j) => {
            if (w.player.userData.live = false, w.player.userData.score = 0, w.player.userData._lastMeterPos = null, w.player.userData._wasLive = false, w.player.userData.body.setTranslation(new y(0, -5, 0)), w.player.userData.finish = false, w.playerAliving(true), this.levelsMode) {
              let N = this.players[D], K = Math.floor(Math.random() * M.length);
              N.player.userData.startPos.x = M[K], M.splice(K, 1);
            } else w.player.position.x = w.player.position.x - D * 1 + 1;
          }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = 0.01), this.canShowAds = true, this.birdYes && setTimeout(() => {
            this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
              x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
              y: 20,
              z: this.angryBird.userData.body.translation().z
            }), this.angryBird.userData.flying = false;
          }, 100), this.boostHatModels.forEach((w, D, j) => {
            w.position.x = this.boostHatCoords[D][0], w.position.y = this.boostHatCoords[D][1], w.userData.fly = false;
          });
          for (let w = 0; w < this.objs.livesBlocks.data.length; w++) this.objs.livesBlocks.data[w].position = this.objs.livesBlocks.data[w].userData.startPos, this.apply(w, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
          this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = true, this.audioClass.stopMusic([
            "back"
          ]), this.audioClass.playMusic([
            "back"
          ]), this.audioClass.stopMusic([
            "ocean"
          ]), this.audioClass.playMusic([
            "ocean"
          ]), this.camera.position.x = 0, this.gameClass.pause = false, this.gameClass.showGamePopup = false, this.hideScreen("popup_in_game"), setTimeout(() => {
            this.startAfterReset = true;
          }, 3e3);
        }), this.rebindButton(".popup_game_btn15", async () => {
          this.audioClass.hardStopAll(), await v(), this.paramsClass.dataLoaded = false, Us(this.scene), this.audioClass.stopMusic(0), setTimeout(() => {
            let M = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 1;
            M == this.allLevels && this.hideScreen("popup_game_btn15"), this.initMatch(this.players.length, this.gameNum, M, this.birdYes);
          }, 100), setTimeout(() => {
            this.players.forEach((M, w, D) => {
              M.playerAliving(true);
            });
          }, 100), this.gameClass.showGamePopup = false, this.hideScreen("popup_in_game");
        }), this.rebindButton(".popup_game_btn3", async () => {
          this.audioClass.hardStopAll(), await v(), this.gameClass.pause = false, this.gameClass.showGamePopup = false, this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.paramsClass.dataLoaded = false, Us(this.scene), this.audioClass.stopMusic(0), this.dataClass.gameInit = false;
        }), this.rebindButton(".popup_game_btn4", async () => {
          this.audioClass.hardStopAll(), await v(), this.gameClass.pause = false, this.gameClass.showGamePopup = false, this.hideScreen("popup_in_game"), this.dataClass.levelCoopMode == "contest" ? this.showScreen("levels_game_screen_contest") : this.showScreen("levels_game_screen"), this.paramsClass.dataLoaded = false, Us(this.scene), this.audioClass.stopMusic(0), this.dataClass.gameInit = false;
        });
      }, this.menuInGame();
    }
    toVec3(s) {
      var _a2, _b, _c;
      return typeof s == "number" ? new y(s, s, s) : (s == null ? void 0 : s.isVector3) ? s : s ? new y((_a2 = s.x) != null ? _a2 : 1, (_b = s.y) != null ? _b : 1, (_c = s.z) != null ? _c : 1) : new y(1, 1, 1);
    }
    apply(s, t, i) {
      let e = i.userData.invBaseSize;
      if (!e) {
        const r = i.geometry;
        r.computeBoundingBox();
        const h = new y();
        r.boundingBox.getSize(h), e = i.userData.invBaseSize = new y(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
      }
      this._dummy || (this._dummy = new ie());
      const a = this._dummy, o = t[s] || {}, n = this.toVec3(o.size);
      a.position.copy(o.position || new y()), o.rotation ? a.rotation.copy(o.rotation) : a.rotation.set(0, 0, 0), a.scale.set(n.x * e.x, n.y * e.y, n.z * e.z), a.updateMatrix(), i.setMatrixAt(s, a.matrix);
    }
    async loadTexture() {
      (() => {
        let s = this.assetsManager.plane.texture, t = this.assetsManager.plane.material;
        s.wrapS = Ls, s.wrapT = Ls, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = t;
      })(), (() => {
        let s = this.assetsManager.planeGrass.texture, t = this.assetsManager.planeGrass.material;
        s.wrapS = Ls, s.wrapT = Ls, s.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = t;
      })(), (() => {
        this.assetsManager.mks.texture;
        let s = this.assetsManager.mks.material;
        this.mks.material = s;
      })();
    }
    async loadBarriers() {
      let s = new rs(0.5, 0.5, 1), t = new zs({
        color: 52224,
        transparent: true,
        opacity: 0
      });
      this.angryBird = new xs(s, t), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = z(8, 13) / 100, this.angryBird.userData.flying = false, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
    }
    async createLevel(s) {
      if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, document.querySelector(".lev_hud span").textContent = s, await this.loadTexture(), await this.loadBarriers(), this.boostHatModel = this.assetsManager.boostHatModel, this.boostHatPropeller = this.assetsManager.boostHatPropeller, this.boostHatMesh = this.assetsManager.boostHatMesh, this.birdYes && (this.angryBirdModel = this.assetsManager.angryBirdModel, this.scene.add(this.angryBirdModel), bt(this.angryBirdModel, this.renderer, this.camera, this.scene)), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((t, i, e) => {
        document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
      }), this.getHorizontalWorldBounds(), this.cameraMove(this.camera), s) {
        this.isMobile ? this.getHorizontalWorldBounds() : this.getHorizontalWorldBounds(-7);
        let t = -2.5, i = -5, e = false;
        switch (s) {
          case 1:
            this.birdYes = false, this.count = 3, this.paramsClass.gameDir = "hor", this.levelsNoFric = true, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.gameNum = 2, this.cameraSpeed = 0.01, this.fixedDistanceHor.min = 1.5;
            break;
          case 2:
            this.gameNum = 4, this.birdYes = false, this.count = 3, this.paramsClass.gameDir = "vert", this.randomAnimateHor = 0, this.randomAnimateVert = 0;
            break;
          case 3:
            this.birdYes = true, this.count = 5, this.paramsClass.gameDir = "hor", this.levelsNoFric = true, this.randomAnimateHor = 1, this.randomAnimateVert = 0, this.gameNum = 1, this.cameraSpeed = 0.01, this.fixedDistanceHor.min = 1.5;
            break;
          case 4:
            this.gameNum = 3, this.birdYes = true, this.count = 5, this.paramsClass.gameDir = "vert", this.levelsNoFric = true, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.cameraSpeed = 0.01;
            break;
          case 5:
            this.birdYes = true, this.count = 7, this.paramsClass.gameDir = "hor", this.levelsNoFric = false, this.randomNoFric = 1, this.randomAnimateHor = 1, this.randomAnimateVert = 0, this.gameNum = 1, this.cameraSpeed = 0.01, this.fixedDistanceHor.min = 1.5;
            break;
          case 6:
            this.birdYes = true, this.count = 9, this.paramsClass.gameDir = "hor", this.levelsNoFric = false, this.randomNoFric = 1, this.randomAnimateHor = 0.5, this.randomAnimateVert = 1, this.gameNum = 2, this.cameraSpeed = 0.01, this.fixedDistanceHor.min = 1.5;
            break;
          case 7:
            this.gameNum = 4, this.birdYes = false, this.count = 6, this.paramsClass.gameDir = "vert", this.levelsNoFric = true, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.cameraSpeed = 0.01, e = [
              5,
              6,
              5,
              6,
              5,
              6,
              5,
              6,
              5,
              6,
              5,
              6
            ];
            break;
          case 8:
            this.birdYes = true, this.count = 5, this.paramsClass.gameDir = "hor", this.levelsNoFric = true, this.randomNoFric = 0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.gameNum = 2, this.cameraSpeed = 0.01, e = [
              3,
              2,
              2,
              2,
              1,
              6,
              5,
              6,
              5,
              6,
              5,
              1
            ], this.fixedDistanceHor.min = 2;
            break;
          case 9:
            this.gameNum = 3, this.birdYes = false, this.count = 6, this.paramsClass.gameDir = "vert", this.levelsNoFric = true, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.cameraSpeed = 0.01, e = [
              6,
              4,
              3,
              2,
              1,
              6,
              5,
              6,
              5,
              6,
              5,
              6
            ];
            break;
          case 10:
            this.birdYes = true, this.count = 10, this.paramsClass.gameDir = "hor", this.levelsNoFric = false, this.randomNoFric = 0.5, this.randomAnimateHor = 0.5, this.randomAnimateVert = 0.5, this.gameNum = 1, this.cameraSpeed = 0.01, e = [
              2,
              2,
              1,
              1,
              1,
              1,
              1,
              1,
              5,
              6,
              5,
              0.5
            ], this.fixedDistanceHor.min = 3;
            break;
        }
        if (this.paramsClass.gameDir == "hor") {
          for (let a = 0; a < this.count; a++) {
            let o = z(this.planeWidth, this.planeWidth - 1), n = t + o / 2 + z(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = z(-1.2, 1.2) - this.planeHeight / 1.5;
            if (e && (o = e[a]), a == 0 ? (this.objs.planes.data[a].size.x = this.planeWidth, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.planes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[a].size.x = this.planeWidth + 0.3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = this.planeWidth + 0.3, this.objs.grassPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : a == 1 ? (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + 0.3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + 0.3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : a == this.count - 1 ? (e ? this.objs.planes.data[a].size.x = e[e.length - 1] - 0.2 : this.objs.planes.data[a].size.x = 5, this.objs.planes.data[a].size.y = this.planeHeight, e ? this.objs.topPlanes.data[a].size.x = e[e.length - 1] : this.objs.topPlanes.data[a].size.x = 5 + 0.3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, e ? this.objs.grassPlanes.data[a].size.x = e[e.length - 1] : this.objs.grassPlanes.data[a].size.x = 5 + 0.3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + 0.3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + 0.3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), a == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[a].position.x = 0, this.objs.planes.data[a].position.y = r + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[a].position.x = 0, this.objs.topPlanes.data[a].position.y = r + this.planeHeight / 1.5 + 0.2 - 1.5, this.objs.grassPlanes.data[a].position.x = 0, this.objs.grassPlanes.data[a].position.y = r + this.planeHeight / 1.5 - 1.5) : a == 1 ? (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = r + this.planeHeight / 1.5 + 0.2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = r + this.planeHeight / 1.5 + 0.2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 4, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - 0.2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.lights.length < this.lightsCount) {
              const h = new Rs(16247464, 0, 4);
              h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
            }
            this.apply(a, this.objs.planes.data, this.objs.planes.plane), this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), t = n + o / 2;
          }
          for (let a = 0; a < this.count; a++) a > 1 && a < this.count - 1 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[a - 1].userData.moveHor && (this.objs.grassPlanes.data[a].userData.moveHor = {
            x1: this.objs.grassPlanes.data[a - 1].position.x,
            x2: this.objs.grassPlanes.data[a + 1].position.x,
            w1: this.objs.grassPlanes.data[a - 1].size.x / 2,
            w2: this.objs.grassPlanes.data[a + 1].size.x / 2
          }, this.objs.planes.data[a].position.y = -10), a > 1 && a < this.count - 1 && Math.random() < this.randomAnimateVert && (this.objs.grassPlanes.data[a].userData.moveVert = {
            x1: this.objs.grassPlanes.data[a - 1].position.x,
            x2: this.objs.grassPlanes.data[a + 1].position.x,
            w1: this.objs.grassPlanes.data[a - 1].size.x / 2,
            w2: this.objs.grassPlanes.data[a + 1].size.x / 2
          }, this.objs.planes.data[a].position.y = -10);
        } else if (this.paramsClass.gameDir == "vert") {
          this.birdYes = false;
          for (let a = 0; a < this.count; a++) {
            let o = z(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
            e && (o = e[a]), this.minPlaneWidthTic += 0.1, Math.random() < 0.5 ? this.objs.grassPlanes.data[a].userData.direction = 1 : this.objs.grassPlanes.data[a].userData.direction = -1;
            let n = i + z(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
            if (this.objs.topPlanes.data[a].position.y = n - 1.3, this.objs.grassPlanes.data[a].position.y = n, this.objs.sensorPlanes.data[a].position.y = n - 0.3, this.objs.topPlanes.data[a].size.y = 0.3, this.objs.grassPlanes.data[a].size.y = 0.7, this.objs.sensorPlanes.data[a].size.y = 0.9, a > 0 ? (this.objs.topPlanes.data[a].size.x = o + 0.3, this.objs.grassPlanes.data[a].size.x = o + 0.3, this.objs.sensorPlanes.data[a].size.x = o + 0.7) : (this.objs.topPlanes.data[a].size.x = 10, this.objs.grassPlanes.data[a].size.x = 10, this.objs.sensorPlanes.data[a].size.x = 10), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 4, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - 0.2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.grassPlanes.data[a].userData.speed = z(6, 10) / 100, this.lights.length < this.lightsCount) {
              const r = new Rs(16247464, 0, 4);
              r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
            }
            this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n;
          }
        }
        this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = true), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = true), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true, this.objs.lamps.lamp.instanceMatrix.needsUpdate = true, this.objs.plafons.plafon.instanceMatrix.needsUpdate = true, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.isMobile ? this.getHorizontalWorldBounds() : this.getHorizontalWorldBounds(-7);
      } else switch (this.getHorizontalWorldBounds(), this.gameNum) {
        case 1:
        case 2:
          this.paramsClass.gameDir = "hor";
          let t = -2.5;
          for (let e = 0; e < this.count; e++) {
            let a = z(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = t + a / 2 + z(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = z(-1.2, 1.2) - this.planeHeight / 1.5;
            if (e > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += 0.1, e > this.count - 20 ? (this.objs.planes.data[e].size.x = 0.1, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = 0.2 + 0.3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = 0.2 + 0.3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e > 0 ? (this.objs.planes.data[e].size.x = a, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = a + 0.3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = a + 0.3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + 0.3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + 0.3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (n = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = n + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + 0.2 - 1.5, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5 - 1.5) : e == 1 ? (o = 6, this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + 0.2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5) : e > 1 && (this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + 0.2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 4, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - 0.2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
              const r = new Rs(16247464, 0, 4);
              r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
            }
            this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), t = o + a / 2;
          }
          for (let e = 0; e < this.count; e++) if (e > 4 && e < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[e - 1].userData.moveHor && (this.objs.grassPlanes.data[e].userData.moveHor = {
            x1: this.objs.grassPlanes.data[e - 1].position.x,
            x2: this.objs.grassPlanes.data[e + 1].position.x,
            w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
            w2: this.objs.grassPlanes.data[e + 1].size.x / 2
          }, this.objs.planes.data[e].position.y = -10), e > 7 && e < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[e - 1].userData.moveHor && !this.objs.grassPlanes.data[e - 1].userData.moveVert && (this.objs.grassPlanes.data[e].userData.moveVert = {
            x1: this.objs.grassPlanes.data[e - 1].position.x,
            x2: this.objs.grassPlanes.data[e + 1].position.x,
            w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
            w2: this.objs.grassPlanes.data[e + 1].size.x / 2
          }, this.objs.planes.data[e].position.y = -10), this.objs.grassPlanes.data[e].position.y > this.maxHeight && (this.maxHeight = this.objs.grassPlanes.data[e].position.y), e > 7 && Math.random() < 0.1 && !this.objs.grassPlanes.data[e].userData.moveHor && !this.objs.grassPlanes.data[e].userData.moveVert && (this.objs.livesBlocks.data[e].position.x = this.objs.grassPlanes.data[e].position.x - this.objs.grassPlanes.data[e].size.x / 2 + this.objs.livesBlocks.data[e].size.x / 2, this.objs.livesBlocks.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.livesBlocks.data[e].size.y / 2 + 0.2, this.objs.livesBlocks.data[e].userData.startPos = this.objs.livesBlocks.data[e].position.clone()), this.apply(e, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock), e > 2 && (e + 1) % 10 === 1) {
            let a = this.boostHatModel.clone();
            a.position.x = this.objs.grassPlanes.data[e].position.x, a.position.y = this.objs.topPlanes.data[e].position.y + 2, a.rotation.y = -Math.PI / 2, a.userData.num = e, this.boostHatModels.push(a), this.boostHatMeshes.push(a.children[0].children[0].children[0]), this.boostHatCoords.push([
              a.position.x,
              a.position.y
            ]), this.scene.add(a);
          }
          this.objs.planes.plane.instanceMatrix.needsUpdate = true, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true, this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = true, this.objs.lamps.lamp.instanceMatrix.needsUpdate = true, this.objs.plafons.plafon.instanceMatrix.needsUpdate = true, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.livesBlocks.livesBlock), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
          break;
        case 3:
        case 4:
          this.paramsClass.gameDir = "vert";
          let i = -5;
          this.birdYes = false;
          for (let e = 0; e < this.count; e++) {
            let a = z(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
            this.minPlaneWidthTic += 0.1, Math.random() < 0.5 ? this.objs.grassPlanes.data[e].userData.direction = 1 : this.objs.grassPlanes.data[e].userData.direction = -1;
            let o = i + z(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
            if (this.objs.topPlanes.data[e].position.y = o - 1.3, this.objs.grassPlanes.data[e].position.y = o, this.objs.sensorPlanes.data[e].position.y = o - 0.3, this.objs.topPlanes.data[e].size.y = 0.3, this.objs.grassPlanes.data[e].size.y = 0.7, this.objs.sensorPlanes.data[e].size.y = 0.9, e > this.count - 20 && (this.objs.topPlanes.data[e].size.x = a / 8 + 0.1, this.objs.grassPlanes.data[e].size.x = a / 8 + 0.1, this.objs.sensorPlanes.data[e].size.x = a / 8 + 0.4), e > 0 ? (this.objs.topPlanes.data[e].size.x = a + 0.3, this.objs.grassPlanes.data[e].size.x = a + 0.3, this.objs.sensorPlanes.data[e].size.x = a + 0.7) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), e > this.count - 10 ? this.objs.grassPlanes.data[e].userData.speed = z(10, 14) / 100 : this.objs.grassPlanes.data[e].userData.speed = z(6, 10) / 100, this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 4, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - 0.2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, (e + 1) % 7 === 0) {
              let n = this.boostHatModel.clone();
              n.position.x = z(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[e].position.y + 0.5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                n.position.x,
                n.position.y
              ]), this.scene.add(n);
            }
            if (this.lights.length < this.lightsCount) {
              const n = new Rs(16247464, 0, 4);
              n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
            }
            this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), i = o;
          }
          this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = true, this.objs.lamps.lamp.instanceMatrix.needsUpdate = true, this.objs.plafons.plafon.instanceMatrix.needsUpdate = true, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.scene.add(this.mks);
          break;
      }
      this.players.forEach((t, i, e) => {
        t.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y, (s || this.paramsClass.gameDir == "vert") && (t.player.userData.lives = 1, t.reLiveField());
      });
    }
    getHorizontalWorldBounds(s = 0) {
      const t = new y(-1, 0, 0.5), i = new y(1, 0, 0.5), e = new y(0, 1, 0.5), a = new y(0, -1, 0.5);
      if (t.unproject(this.camera), i.unproject(this.camera), e.unproject(this.camera), a.unproject(this.camera), this.camera.isPerspectiveCamera) {
        const o = this.camera.position, n = t.clone().sub(o).normalize(), r = i.clone().sub(o).normalize(), h = e.clone().sub(o).normalize(), c = a.clone().sub(o).normalize(), d = (s - o.z) / n.z, p = (s - o.z) / c.z, m = o.clone().add(n.multiplyScalar(d)), u = o.clone().add(r.multiplyScalar(d)), g = o.clone().add(h.multiplyScalar(p)), b = o.clone().add(c.multiplyScalar(p));
        this.bounds = {
          leftX: m.x,
          rightX: u.x,
          topY: g.y,
          bottomY: b.y
        };
      }
    }
    animateTops() {
      var _a2, _b;
      if (this.paramsClass.gameDir == "hor") {
        let s = false;
        for (let t = 0; t < this.objs.grassPlanes.data.length; t++) {
          const i = this.objs.grassPlanes.data[t], e = i.userData.body, a = i.userData.moveHor, o = i.userData.moveVert;
          if (e && (a || o)) {
            if (a) {
              const n = e.translation(), r = a.x1 + a.w1 + i.size.x * 0.5, h = a.x2 - a.w2 - i.size.x * 0.5, c = (_a2 = i.userData.speed) != null ? _a2 : 0.05;
              n.x >= h && (i.userData.direction = -1), n.x <= r && (i.userData.direction = 1);
              const d = i.userData.direction * c, p = n.x + d;
              e.setNextKinematicTranslation({
                x: p,
                y: n.y,
                z: n.z
              }), i.position.x = p, this.objs.lamps.data[t].position.x = p, this.objs.plafons.data[t].position.x = p, this.objs.bulbs.data[t].position.x = p, this.objs.topPlanes.data[t].position.x = p;
            } else if (o) {
              const n = e.translation(), r = 2, h = 0.5, c = (_b = i.userData.speed) != null ? _b : 0.03;
              n.y >= r && (i.userData.direction = -1), n.y <= h && (i.userData.direction = 1);
              const d = i.userData.direction * c, p = n.y + d;
              e.setNextKinematicTranslation({
                x: n.x,
                y: p,
                z: n.z
              }), i.position.y = p, this.objs.lamps.data[t].position.y = p + this.objs.lamps.lampHeight, this.objs.plafons.data[t].position.y = p + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[t].position.y = p + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[t].position.y = p + 0.2;
            }
          }
          for (let n = 0; n < this.objs.livesBlocks.data.length; n++) this.objs.livesBlocks.data[n].userData.taked ? this.objs.livesBlocks.data[n].position.y < 10 ? (this.objs.livesBlocks.data[n].position.y += 1e-3, this.objs.livesBlocks.data[n].rotation.y += 4e-3) : this.objs.livesBlocks.data[n].userData.taked = false : this.objs.livesBlocks.data[n].rotation.y += 4e-4, this.apply(n, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
          this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = true, this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), s = true;
        }
        s && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true, this.objs.lamps.lamp.instanceMatrix.needsUpdate = true, this.objs.plafons.plafon.instanceMatrix.needsUpdate = true, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true);
      }
      if (this.paramsClass.gameDir == "vert") {
        for (let s = 0; s < this.objs.grassPlanes.data.length; s++) {
          const t = this.objs.grassPlanes.data[s], i = this.objs.topPlanes.data[s];
          this.objs.sensorPlanes.data[s], this.objs.lamps.data[s], this.objs.plafons.data[s], this.objs.bulbs.data[s];
          const e = t.userData.body, a = t.userData.speed, o = e.translation();
          o.x > this.bounds.rightX - t.size.x / 2 ? t.userData.direction = -1 : o.x < this.bounds.leftX + t.size.x / 2 && (t.userData.direction = 1);
          const n = t.userData.direction * a, r = o.x + n;
          s > 0 && e.setNextKinematicTranslation({
            x: r,
            y: o.y,
            z: o.z
          }), this.objs.sensorPlanes.data[s].position.x = r, this.objs.lamps.data[s].position.x = r, this.objs.plafons.data[s].position.x = r, this.objs.bulbs.data[s].position.x = r, this.objs.topPlanes.data[s].position.x = r, this.objs.topPlanes.data[s].position.y = o.y + 0.4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i.position.set(r, o.y + 0.6, o.z);
        }
        this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = true, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true, this.objs.lamps.lamp.instanceMatrix.needsUpdate = true, this.objs.plafons.plafon.instanceMatrix.needsUpdate = true, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true;
      }
    }
    async loadEnvironments() {
      for (let s = 0; s < this.objs.grassPlanes.data.length; s++) this.paramsClass.gameDir == "hor" && (this.physicsClass.addInstancedStatic(this.objs.planes.data, this.objs.planes.plane, s, {
        position: this.objs.planes.data[s].position,
        size: this.objs.planes.data[s].size,
        collide: "123"
      }), this.apply(s, this.objs.planes.data, this.objs.planes.plane)), this.physicsClass.addInstancedStatic(this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass, s, {
        position: this.objs.grassPlanes.data[s].position,
        size: this.objs.grassPlanes.data[s].size,
        collide: "123"
      }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = true, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new hs(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new hs(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new hs(65280));
      this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = true), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true;
    }
    levelAnimate() {
      var _a2, _b, _c, _d;
      if (!this.levelsMode) if (this.paramsClass.gameDir == "hor") {
        if (this.scoreClass.updateMetersFloat(null, this.players, "hor"), !this.hardHorReachedSent) {
          const s = this.count - 10, t = (_b = (_a2 = this.objs.grassPlanes.data[s]) == null ? void 0 : _a2.position.x) != null ? _b : 1 / 0;
          this.players.some((e) => {
            const a = e == null ? void 0 : e.player;
            return a ? a.position.x >= t : false;
          }) && (this.hardHorReachedSent = true, ym(105298813, "reachGoal", "champ_hor_hard_".concat(this.players.length)));
        }
        !this.score300ChampHorSent && this.scoreClass.score >= 300 && (this.score300ChampHorSent = true, ym(105298813, "reachGoal", "score300_champ_hor_".concat(this.players.length)));
      } else {
        if (this.scoreClass.updateMetersFloat(null, this.players, "vert"), !this.hardVertReachedSent) {
          const s = this.count - 10, t = (_d = (_c = this.objs.grassPlanes.data[s]) == null ? void 0 : _c.position.y) != null ? _d : 1 / 0;
          this.players.some((e) => {
            const a = e == null ? void 0 : e.player;
            return a ? a.position.y >= t : false;
          }) && (this.hardVertReachedSent = true, ym(105298813, "reachGoal", "champ_vert_hard_".concat(this.players.length)));
        }
        !this.score100ChampVertSent && this.scoreClass.score >= 100 && (this.score100ChampVertSent = true, ym(105298813, "reachGoal", "score100_champ_vert_".concat(this.players.length)));
      }
      this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(false) : this.audioClass.dayNight(false, "vert"), this.audioClass.dayNight(false)) : this.audioClass.dayNight(true)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = false), this.boostHatModels.forEach((s, t, i) => {
        s.children[0].children[1].rotation.y += 0.05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = 0.1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
      }), this.angryBirdModel.position.set(this.angryBird.position.x, this.angryBird.position.y - 0.2, this.angryBird.position.z + 0.9), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && !this.worldClass.thunder ? (this.angryBird.userData.body.setTranslation({
        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
        y: z(this.maxHeight - 1.5, this.maxHeight + 1),
        z: this.angryBird.userData.body.translation().z
      }), this.birdFlyingMark = this.birdFlyingMark + z(this.distanceToBird, this.distanceToBird + 10), this.angryBird.userData.speed = z(8, 13) / 100, this.angryBird.userData.flying = true) : this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && this.worldClass.thunder && (this.birdFlyingMark = this.birdFlyingMark + z(this.distanceToBird, this.distanceToBird + 10)), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
        x: this.angryBird.userData.body.translation().x -= this.angryBird.userData.speed,
        y: this.angryBird.userData.body.translation().y,
        z: this.angryBird.userData.body.translation().z
      }), this.angryBird.userData.body.translation().x < this.players[this.maxSpeed()].player.position.x - 20 && (this.angryBird.userData.body.setTranslation({
        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
        y: 20,
        z: this.angryBird.userData.body.translation().z
      }), this.angryBird.userData.flying = false)));
    }
    makeGlowSprite() {
      const s = new Ne(new qe({
        map: this._glowTex,
        transparent: true,
        depthWrite: false,
        blending: Fs
      }));
      return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
    }
    lampsAnimate() {
      var _a2, _b, _c, _d, _e2, _f;
      let s = false;
      if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
        this.lampsAnimate.did = false;
        const t = this.camera.position.x - this.bounds.rightX / 1.3, i = this.camera.position.x + this.bounds.rightX * 0.8;
        this.objs.plafons.data.forEach((e, a) => {
          e.pointLight;
          const o = e.position.x >= t && e.position.x <= i, n = a;
          if (o && !e.pointLight && this.lights.length > 0) {
            const r = this.lights.shift();
            e.pointLight = r, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
          }
          if (e.pointLight) {
            const r = e.pointLight;
            r.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 2), e.glow.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 0);
            const h = o ? this.lightIntensity : 0;
            r.intensity = R.lerp(r.intensity, h, 0.15);
            const c = o ? 1 : 0;
            this._emissive[n] = R.lerp(this._emissive[n], c, 0.18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = true;
            const d = 0.5 + this._emissive[n] * 0.8;
            e.glow && e.glow.scale.setScalar(d);
            const p = 1.1, m = this._emissive[n], u = 1 + p * m, g = this.objs.bulbs.baseSize, b = this.objs.bulbs.data[n];
            b.userData._lastBulbFactor !== u && (b.size.set(g.x * u, g.y * u, g.z * u), this.apply(n, this.objs.bulbs.data, this.objs.bulbs.bulb), b.userData._lastBulbFactor = u, s = true), !o && r.intensity <= 0.01 && this._emissive[n] <= 0.02 && (this.lights.push(r), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
          }
        }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true);
      } else {
        let t = false;
        this.objs.plafons.data.forEach((i, e) => {
          const a = i.pointLight;
          if (a) {
            const d = this.objs.lamps.data[e].position;
            a.position.set(d.x, d.y + 1, d.z + 2), i.glow && i.glow.position.set(d.x, d.y + 1, d.z), a.intensity = R.lerp(a.intensity, 0, 0.2), a.intensity <= 0.01 && (a.intensity = 0, this.lights.push(a), i.pointLight = null, i.userData.light = false, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null));
          }
          this.objs.plafons.plafon.setColorAt(e, this._dayColor), t = true, this._emissive && this._emissive.length > e && (this._emissive[e] = 0);
          const o = 1.1, n = this._emissive[e], r = 1 + o * n, h = this.objs.bulbs.baseSize, c = this.objs.bulbs.data[e];
          c.userData._lastBulbFactor !== r && (c.size.set(h.x * r, h.y * r, h.z * r), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), c.userData._lastBulbFactor = r, s = true);
        }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true), t && (this.objs.plafons.plafon.instanceColor.needsUpdate = true, ((_c = (_b = (_a2 = this.objs.bulbs) == null ? void 0 : _a2.geometryBulb) == null ? void 0 : _b.attributes) == null ? void 0 : _c.aEmissive) && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = true));
      }
      else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
        this.lampsAnimate.did = false;
        const t = this.camera.position.y - this.bounds.topY / 1, i = this.camera.position.y + this.bounds.topY * 0.8;
        this.objs.plafons.data.forEach((e, a) => {
          e.pointLight;
          const o = e.position.y >= t && e.position.y <= i, n = a;
          if (o && !e.pointLight && this.lights.length > 0) {
            const r = this.lights.shift();
            e.pointLight = r, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
          }
          if (e.pointLight) {
            const r = e.pointLight;
            r.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 2), e.glow.position.copy(e.position);
            const h = o ? this.lightIntensity : 0;
            r.intensity = R.lerp(r.intensity, h, 0.15);
            const c = o ? 1 : 0;
            this._emissive[n] = R.lerp(this._emissive[n], c, 0.18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = true;
            const d = 0.8 + this._emissive[n] * 0.8;
            e.glow && e.glow.scale.setScalar(d);
            const p = 1, m = this._emissive[n], u = 1 + p * m, g = this.objs.bulbs.baseSize, b = this.objs.bulbs.data[n];
            b.userData._lastBulbFactor !== u && (b.size.set(g.x * u, g.y * u, g.z * u), this.apply(n, this.objs.bulbs.data, this.objs.bulbs.bulb), b.userData._lastBulbFactor = u, s = true), !o && r.intensity <= 0.01 && this._emissive[n] <= 0.02 && (this.lights.push(r), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
          }
        }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true);
      } else {
        let t = false;
        this.objs.plafons.data.forEach((i, e) => {
          const a = i.pointLight;
          !i.pointLight && this._emissive[e] === 0 || (a && (a.intensity = R.lerp(a.intensity, 0, 1), a.intensity <= 0.01 && (a.intensity = 0, this.lights.push(a), i.pointLight = null, i.userData.light = false, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), t = true, this._emissive && this._emissive.length > e && (this._emissive[e] = 0));
        }), t && (this.objs.plafons.plafon.instanceColor.needsUpdate = true, ((_f = (_e2 = (_d = this.objs.bulbs) == null ? void 0 : _d.geometryBulb) == null ? void 0 : _e2.attributes) == null ? void 0 : _f.aEmissive) && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = true));
      }
    }
    resetLevel() {
    }
    maxSpeed(s = false) {
      let t;
      if (s ? t = this.players.filter((a, o, n) => a.player.userData.live) : t = this.players, t.length === 0) return -1;
      let i = 0, e;
      this.paramsClass.gameDir == "vert" ? e = t[0].player.position.y : e = t[0].player.position.x;
      for (let a = 1; a < t.length; a++) t[a].player && t[a].player.userData.live && t[a].player.position && (this.paramsClass.gameDir == "vert" ? t[a].player.position.y > e && (e = t[a].player.position.y, i = a) : t[a].player.position.x > e && (e = t[a].player.position.x, i = a));
      return s ? this.players.indexOf(t[i], 0) : i;
    }
    async loadPlayers() {
      this.reloadLevel();
      for (let s = 0; s < this.players.length; s++) {
        let t = this.players[s];
        this.levelsMode || t.reLiveField(), t.player.position.x = t.player.position.x - s * 1 + 1, this.physicsClass.addPhysicsToObject(t.player), this.paramsClass.gameDir == "vert" && (t.player.position.y = -0, t.player.userData.collider.setFriction(500)), await t.loadPlayerModel(), t.player.userData.startPos = t.player.position.clone(), this.scene.add(t.player), this.scene.add(t.playerOut), this.scene.add(t.playerModel), this.playerOuts.push(t.playerOut), s < this.players[0].playerColors.length ? t.head.children[0].material.color.set(this.players[0].playerColors[s]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), t.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > s ? t.player.userData.audio.push(this.audioClass.quacks[s].clone()) : t.player.userData.audio.push(this.audioClass.quacks[0].clone());
      }
      this.playersLoaded = true;
    }
    cameraMove(s, t) {
      var _a2, _b, _c, _d, _e2, _f;
      const i = Math.min(0.033, Math.max(1e-3, t || 0.016666666666666666));
      switch (this.gameNum) {
        case 1:
          this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = this.isMobile ? 2.5 : 3, s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
          break;
        case 2: {
          const e = Math.max(0, this.maxSpeed(true));
          if (e >= 0 && !this.worldClass.thunder || this.levelsMode) {
            let o = 0;
            this.players.filter((m) => m.player.userData.live).length === 1 ? this.paramsClass.gameDir === "hor" && (o = this.players[e].player.position.x + this.bounds.rightX / 2) : o = this.players[e].player.position.x;
            let r = 0;
            const h = ((_c = (_b = (_a2 = this.players[e]) == null ? void 0 : _a2.player) == null ? void 0 : _b.userData) == null ? void 0 : _c.body) || ((_f = (_e2 = (_d = this.players[e]) == null ? void 0 : _d.player) == null ? void 0 : _e2.userData) == null ? void 0 : _f.collider);
            h && h.linvel && (r = h.linvel().x || 0);
            const c = R.clamp(r * this.cam.lookAheadSeconds, -this.cam.lookAheadMax, this.cam.lookAheadMax), d = o + c;
            this.cam.targetX = this.dampScalar(this.cam.targetX, d, this.cam.targetFilterLambda, i), this.cam.targetX < s.position.x - this.cam.maxBackJump && (this.cam.targetX = s.position.x - this.cam.maxBackJump);
            const p = this.smoothDamp(s.position.x, this.cam.targetX, this.cam.velocityX, this.cam.smoothTime, 1 / 0, i);
            s.position.x = p.newPos, this.cam.velocityX = p.newVel, s.position.y = this.isMobile ? 2.5 : 3, s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
          } else this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 2), s.position.y = (this.isMobile, 3), s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
          break;
        }
        case 3:
          this.gameClass.gameStarting && (s.position.y += this.cameraSpeed), s.position.x = 0, s.position.z = this.isMobile ? 25 : 35, this.cameraSpeed += 1e-6, s.lookAt(s.position.x, s.position.y - 2, 0);
          break;
        case 4:
          this.gameClass.gameStarting && this.playersLoaded && this.players[this.maxSpeed()].player.userData.body.linvel().y > -20 && (s.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), s.position.x = 0, s.position.z = this.isMobile ? 25 : 35, s.lookAt(s.position.x, s.position.y - 2, 0), this.mks.material.opacity = this.worldClass.blackSky.material.opacity, s.position.y > 20 && (this.mks.position.x -= 0.02);
          break;
      }
    }
    damp(s, t, i, e) {
      return s + (t - s) * (1 - Math.exp(-i * e));
    }
    spring(s, t, i, e, a) {
      const o = 2 / e, n = o * a, r = 1 / (1 + n + 0.48 * n * n + 0.235 * n * n * n);
      let h = s - t;
      const c = (i + o * h) * a, d = (i - o * c) * r;
      return {
        newPos: t + (h + c) * r,
        newVel: d
      };
    }
    smoothDamp(s, t, i, e, a, o) {
      e = Math.max(1e-6, e);
      const r = 2 / e, h = r * o, c = 1 / (1 + h + 0.48 * h * h + 0.235 * h * h * h);
      let d = s - t;
      const p = (a > 0 ? a : 1 / 0) * e;
      d = R.clamp(d, -p, p);
      const m = (i + r * d) * o, u = (i - r * m) * c;
      return {
        newPos: t + (d + m) * c,
        newVel: u
      };
    }
    dampScalar(s, t, i, e) {
      const a = 1 - Math.exp(-i * e);
      return s + (t - s) * a;
    }
    async showPopupInGame(s = false, t = false) {
      this.hideScreen("popup_game_btn_close"), this.hideScreen("menu_in_game"), !s || !this.canShowAds || this.levelsMode || this.gameClass.pause ? this.hideScreen("popup_game_btn1") : (s || this.canShowAds) && !this.levelsMode && !this.gameClass.pause && this.showScreen("popup_game_btn1"), this.levelsMode ? this.showScreen("popup_game_btn4") : this.hideScreen("popup_game_btn4"), this.startAfterReset = false;
      let i = 0;
      if (this.scoreClass.score > this.scoreClass.myRec && (this.scoreClass.myRec = this.scoreClass.score, i++), this.scoreClass.score > this.scoreClass.worldRec && (this.scoreClass.worldRec = this.scoreClass.score, i++), i) {
        if (this.paramsClass.gameDir === "hor") {
          const n = this.dataClass.table.hor[this.players.length - 1].find(xe);
          n && (n.rec = this.scoreClass.score), await this.dataClass.submitMyScore(ysdk, "ocean".concat(this.players.length), this.scoreClass.score);
        } else if (this.paramsClass.gameDir === "vert") {
          const n = this.dataClass.table.vert[this.players.length - 1].find(xe);
          n && (n.rec = this.scoreClass.score), await this.dataClass.submitMyScore(ysdk, "space".concat(this.players.length), this.scoreClass.score);
        }
        await this.dataClass.saveTableToCloud();
        const e = this.paramsClass.gameDir === "hor" ? "hor" : "vert", a = this.players.length - 1;
        this.dataClass.updateLocalTop3(e, a, this.scoreClass.myRec), await this.dataClass.refreshMineLabels(), this.menuClass.loadRecsData(), this.paramsClass.gameDir === "hor" ? this.scoreClass.loadRecsToHud(0, this.players.length - 1) : this.scoreClass.loadRecsToHud(1, this.players.length - 1);
      }
      if (this.audioClass.oceanAudio.isPlaying && this.audioClass.oceanAudio.stop(), this.audioClass.rainAudio.isPlaying && this.audioClass.rainAudio.stop(), this.gameClass.pause) document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn15");
      else if (this.gameClass.showGamePopup = true, !this.levelsMode) document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play();
      else if (this.players.every((e) => e.player.userData.finish) && this.dataClass.levelCoopMode == "coop" || this.players.some((e) => e.player.userData.finish) && this.dataClass.levelCoopMode == "contest") {
        if (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.audioClass.winAudio.isPlaying && this.audioClass.winAudio.stop(), this.audioClass.musicOn && this.audioClass.winAudio.play(), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15"), this.hideScreen("popup_game_btn4"), this.dataClass.levelCoopMode == "coop") {
          let e = false, a = false;
          this.levelsPlayedTracked.has(this.levelsMode) || (this.levelsPlayedTracked.add(this.levelsMode), ym(105298813, "reachGoal", "level_coop_".concat(this.levelsMode, "_").concat(this.players.length))), this.players.forEach((o, n, r) => {
            this.levelsMode == this.allLevels && (this.dataClass.table.player.bonusHeart[n] = 10, e = true), this.levelsMode + 1 > this.dataClass.table.player.levels[n] && (this.dataClass.table.player.levels[n] = this.levelsMode, a = true);
          }), (e || a) && (await this.dataClass.saveTableToCloud(), await this.dataClass.loadTableFromCloud(), await this.dataClass.loadLevels(this.players.length - 1));
        } else this.dataClass.levelCoopMode == "contest" && (this.levelsContestPlayedTracked.has(this.levelsMode) || (this.levelsContestPlayedTracked.add(this.levelsMode), ym(105298813, "reachGoal", "level_contest_".concat(this.levelsMode, "_").concat(this.players.length))), this.players.forEach(async (e, a, o) => {
          e.player.userData.finish && this.dataClass.table.levelsStatusContest[this.levelsMode - 1] != a + 1 && (this.dataClass.table.levelsStatusContest[this.levelsMode - 1] = a + 1, await this.dataClass.saveTableToCloud());
        }));
        this.dataClass.loadLevels(this.players.length - 1);
      } else this.hideScreen("popup_game_btn15"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win");
      this.showScreen("popup_in_game"), this.gameClass.gameStarting = false;
    }
    async reloadLevel(s = -1) {
      if (this.paramsClass.gameDir == "hor" && !this.levelsMode) {
        let t = false;
        if (s >= 0) {
          let i = this.players[s];
          this.dataClass.table.player.bonusHeart[s] ? (i.player.userData.maxLives = 4, i.player.userData.lives = i.player.userData.maxLives, i.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[s], this.dataClass.table.player.bonusHeart[s]--, t = true) : (i.player.userData.maxLives = 3, i.player.userData.lives = i.player.userData.maxLives);
        } else {
          let i = [
            0,
            -1,
            1
          ];
          for (let e = 0; e < this.players.length; e++) {
            let a = this.players[e], o = Math.floor(Math.random() * i.length);
            this.levelsMode ? a.player.position.x = i[o] : (a.reLiveField(), a.player.position.x = a.player.position.x - e * 0.3 + 1), i.splice(o, 1), this.dataClass.table.player.bonusHeart[e] ? (a.player.userData.maxLives = 4, a.player.userData.lives = a.player.userData.maxLives, a.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[e], this.dataClass.table.player.bonusHeart[e]--, t = true) : (a.player.userData.maxLives = 3, a.player.userData.lives = a.player.userData.maxLives), this.levelsMode || a.reLiveField();
          }
        }
        t && await this.dataClass.saveTableToCloud();
      }
    }
    rebindButton(s, t) {
      const i = document.querySelector(s), e = i.cloneNode(true);
      return i.parentNode.replaceChild(e, i), e.addEventListener("click", t), e;
    }
    hideScreen(s) {
      document.querySelector(".".concat(s)).classList.add("hidden_screen");
    }
    showScreen(s) {
      document.querySelector(".".concat(s)).classList.remove("hidden_screen");
    }
  }
  class ms {
    constructor(s, t) {
      this.world = s, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new ie();
    }
    static _ensureInvBase(s) {
      if (s.userData.invBase) return s.userData.invBase;
      const t = s.geometry;
      t.computeBoundingBox();
      const i = new y();
      t.boundingBox.getSize(i);
      const e = new y(1 / (i.x || 1), 1 / (i.y || 1), 1 / (i.z || 1));
      return s.userData.invBase = e, e;
    }
    static _toVec3(s) {
      var _a2, _b, _c;
      return typeof s == "number" ? new y(s, s, s) : (s == null ? void 0 : s.isVector3) ? s.clone() : new y((_a2 = s == null ? void 0 : s.x) != null ? _a2 : 1, (_b = s == null ? void 0 : s.y) != null ? _b : 1, (_c = s == null ? void 0 : s.z) != null ? _c : 1);
    }
    addInstancedDynamic(s, t, i) {
      var _a2, _b;
      const e = ms._toVec3(i.size), a = ms._toVec3((_a2 = i.position) != null ? _a2 : {
        x: 0,
        y: 0,
        z: 0
      }), o = ((_b = i.quaternion) == null ? void 0 : _b.isQuaternion) ? i.quaternion : new Es(), n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
        x: o.x,
        y: o.y,
        z: o.z,
        w: o.w
      })), r = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(0.6).setRestitution(0.1);
      this.world.createCollider(r, n), this.instancedBodies.push({
        mesh: s,
        index: t,
        size: e,
        body: n
      });
    }
    addInstancedStatic(s, t, i, e) {
      var _a2, _b;
      const a = ms._toVec3(e.size), o = ms._toVec3((_a2 = e.position) != null ? _a2 : {
        x: 0,
        y: 0,
        z: 0
      }), n = ((_b = e.quaternion) == null ? void 0 : _b.isQuaternion) ? e.quaternion : new Es(), r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
        x: n.x,
        y: n.y,
        z: n.z,
        w: n.w
      })), h = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
      s[i].userData.body = r, s[i].userData.shape = h, s[i].userData.collide = this.world.createCollider(h, r), this.instancedBodies.push({
        mesh: t,
        index: i,
        size: a,
        body: r
      });
    }
    updateInstancedTransforms() {
      const s = this._dummy, t = /* @__PURE__ */ new Set();
      for (const i of this.instancedBodies) {
        const e = ms._ensureInvBase(i.mesh), a = i.body.translation(), o = i.body.rotation();
        s.position.set(a.x, a.y, a.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(i.size.x * e.x, i.size.y * e.y, i.size.z * e.z), s.updateMatrix(), i.mesh.setMatrixAt(i.index, s.matrix), t.add(i.mesh);
      }
      for (const i of t) i.instanceMatrix.needsUpdate = true;
    }
    addPhysicsToObject(s) {
      if (s != null && s.userData.name.includes("player")) {
        let t, i;
        const e = s.rotation.clone();
        s.rotation.set(0, 0, 0), new ws().setFromObject(s);
        const a = Ys(s);
        s.rotation.copy(e), s.userData.size = a, s.userData.orgRotation = e, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(0.6).setRestitution(0).setFriction(0.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = t, s.userData.shape = i;
        let o = t;
        i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
        let n = this.world.createCollider(i, t);
        s.userData.collider = n, s.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
          s,
          t,
          s.id
        ]);
      } else if (s != null && s.userData.name.includes("tops")) {
        let t, i;
        const e = s.rotation.clone();
        s.rotation.set(0, 0, 0), new ws().setFromObject(s);
        const a = Ys(s);
        s.rotation.copy(e), s.userData.size = a, s.userData.orgRotation = e, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(0).setFriction(0.3), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
        let o = this.world.createCollider(i, t);
        s.userData.body = t, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = t.handle, this.dynamicBodies.push([
          s,
          t,
          s.id
        ]), s.userData.playerHandlesInside = /* @__PURE__ */ new Set(), this.allTops.push(s);
      } else if (s != null && s.userData.name.includes("bird")) {
        let t, i;
        const e = s.rotation.clone();
        s.rotation.set(0, 0, 0), new ws().setFromObject(s);
        const a = Ys(s);
        s.rotation.copy(e), s.userData.size = a, s.userData.orgRotation = e, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(1).setFriction(0), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
        let o = this.world.createCollider(i, t);
        s.userData.body = t, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = t.handle, this.dynamicBodies.push([
          s,
          t,
          s.id
        ]);
      }
    }
  }
  const Vs = new y();
  function Ys(l) {
    if (l.isMesh && l.geometry) {
      const t = l.geometry;
      return t.boundingBox || t.computeBoundingBox(), t.boundingBox.getSize(Vs), Vs.multiply(l.scale), Vs.clone();
    }
    return new ws().setFromObject(l).getSize(new y());
  }
  class Pt {
    constructor() {
      this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.looseAudio, this.winAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicNowPlaying = [], this.musicDay = true, this.musicNight = false, this.timeToChange = 2, this._attached = false, this.listener = new We(), this.musicOn = true;
    }
    hardStopAll() {
      this.musics.forEach(({ music: s }) => {
        try {
          s.stop();
        } catch (e) {
        }
      }), this.quacks.forEach((s) => {
        try {
          s.stop();
        } catch (e) {
        }
      }), this.thundersAudio.forEach((s) => {
        try {
          s.music.stop();
        } catch (e) {
        }
      }), this.musicNowPlaying = [];
    }
    toggleMute(s) {
      s ? (this.musicOn = false, this.listener.context.suspend()) : (this.musicOn = true, this.listener.context.resume(), this.playMusic([
        "back"
      ]));
    }
    isMuted() {
      return this.listener.context.state === "suspended";
    }
    attachTo(s) {
      this._attached || (s.add(this.listener), this._attached = true);
    }
    async loadAudio() {
      const s = new Ue(), t = [
        {
          key: "backAudio",
          name: "back1",
          path: "audio/back1.mp3",
          loop: true,
          ref: 100,
          vol: 2
        },
        {
          key: "backAudio2",
          name: "back2",
          path: "audio/back2.mp3",
          loop: true,
          ref: 100,
          vol: 2
        },
        {
          key: "backAudio3",
          name: "back3",
          path: "audio/back3.mp3",
          loop: true,
          ref: 100,
          vol: 0.5
        },
        {
          key: "oceanAudio",
          name: "ocean",
          path: "audio/ocean.mp3",
          loop: true,
          ref: 100,
          vol: 0.4
        },
        {
          key: "inwaterAudio",
          name: "inwater",
          path: "audio/inwater.mp3",
          loop: false,
          ref: 200,
          vol: 1
        },
        {
          key: "looseAudio",
          name: "loose",
          path: "audio/loose.mp3",
          loop: false,
          ref: 200,
          vol: 1
        },
        {
          key: "winAudio",
          name: "win",
          path: "audio/win.mp3",
          loop: false,
          ref: 200,
          vol: 2
        },
        {
          key: "takeAudio",
          name: "take",
          path: "audio/take.mp3",
          loop: false,
          ref: 200,
          vol: 2
        },
        {
          key: "readyJumpAudio",
          name: "readyJump",
          path: "audio/ready-jump.mp3",
          loop: false,
          ref: 1e3,
          vol: 200,
          rate: 2
        },
        {
          key: "jumpAudio",
          name: "quack1",
          path: "audio/quack1.mp3",
          loop: false,
          ref: 2e3,
          vol: 2,
          quack: true
        },
        {
          key: "jumpAudio2",
          name: "quack2",
          path: "audio/quack2.mp3",
          loop: false,
          ref: 400,
          vol: 0.3,
          quack: true
        },
        {
          key: "jumpAudio3",
          name: "quack3",
          path: "audio/quack3.mp3",
          loop: false,
          ref: 400,
          vol: 0.3,
          quack: true
        },
        {
          key: "rainAudio",
          name: "rain",
          path: "audio/rain.mp3",
          loop: true,
          ref: 400,
          vol: 1.5
        },
        {
          key: "thunderAudio",
          name: "thunder1",
          path: "audio/thunder.mp3",
          loop: false,
          ref: 400,
          vol: 1,
          thunder: true
        },
        {
          key: "thunderAudio2",
          name: "thunder2",
          path: "audio/thunder2.mp3",
          loop: false,
          ref: 400,
          vol: 1,
          thunder: true
        },
        {
          key: "thunderAudio3",
          name: "thunder3",
          path: "audio/thunder3.mp3",
          loop: false,
          ref: 400,
          vol: 1,
          thunder: true
        }
      ];
      (await Promise.all(t.map((e) => s.loadAsync(e.path).catch((a) => (console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 ".concat(e.path, ":"), a), null))))).forEach((e, a) => {
        const o = t[a];
        if (!e) return;
        const n = new Oe(this.listener);
        n.setBuffer(e), n.setLoop(o.loop), n.setRefDistance(o.ref), n.setVolume(o.vol), o.rate && n.setPlaybackRate(o.rate), this[o.key] = n, this.musics.push({
          name: o.name,
          music: n
        }), o.quack && this.quacks.push(n), o.thunder && this.thundersAudio.push({
          name: o.name,
          music: n
        });
      }), this.backAudio && this.musics.push({
        name: "back",
        music: this.backAudio
      });
    }
    stopMusic(s) {
      this.musicOn && (s == 0 ? this.musics.forEach((t, i, e) => {
        t.music.stop();
      }) : s.forEach((t, i, e) => {
        this.musics.find((a) => a.name === t).music.stop();
      }));
    }
    pauseMusic(s) {
      this.musicOn && s.forEach((t, i, e) => {
        this.musics.find((a) => a.name === t).music.pause();
      });
    }
    playMusic(s) {
      s.forEach((t, i, e) => {
        let a = this.musics.find((o) => o.name === t).music;
        !a.isPlaying && this.musicOn && a.play();
      });
    }
    togglePauseAll(s) {
      this.musicOn && (s ? (this.musicNowPlaying = [], this.musics.forEach(({ music: t }) => {
        t.isPlaying && (t.pause(), this.musicNowPlaying.push(t));
      })) : this.musicNowPlaying && this.musicNowPlaying.length && (this.musicNowPlaying.forEach((t) => {
        t.isPlaying || t.play();
      }), this.musicNowPlaying = []));
    }
    dayNight(s = true, t = false) {
      s && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= 0.01, this.musics.find((i) => i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
        "back"
      ]), this.musics.find((i) => i.name === "back").music.setVolume(2), this.musics.find((i) => i.name === "back").music = this.musics.find((i) => i.name === "back1").music, this.musicOn && this.playMusic([
        "back"
      ]), this.musicNight = false, this.musicDay = true, this.timeToChange = 2, this.musics.find((i) => i.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= 0.01, this.musics.find((i) => i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
        "back"
      ]), this.musics.find((i) => i.name === "back").music.setVolume(2), this.musics.find((i) => i.name === "back").music = this.musics.find((i) => t ? i.name === "back3" : i.name === "back2").music, this.musicOn && this.playMusic([
        "back"
      ]), this.musicNight = true, this.musicDay = false, this.timeToChange = 2, this.musics.find((i) => i.name === "back").music.setVolume(this.timeToChange)));
    }
  }
  class Dt {
    constructor(s, t, i, e, a, o) {
      this.levelClass = s, this.isMobile = t, this.renderer = i, this.camera = e, this.paramsClass = a, this.audioClass = o, this.mouse = new y(), this.raycaster = new Ve(), this.onTapDown = this.onTapDown.bind(this), this.onTapUp = this.onTapUp.bind(this), this.onKeyDown = this.onKeyDown.bind(this), this.onKeyUp = this.onKeyUp.bind(this);
    }
    addKeyListeners() {
      const s = this.renderer.domElement;
      window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), s.addEventListener("mousedown", this.onKeyDown), s.addEventListener("mouseup", this.onKeyUp), s.addEventListener("touchstart", this.onTapDown, {
        passive: false
      }), s.addEventListener("touchend", this.onTapUp);
    }
    removedKeyListeners() {
      const s = this.renderer.domElement;
      window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), s.removeEventListener("mousedown", this.onKeyDown), s.removeEventListener("mouseup", this.onKeyUp), s.removeEventListener("touchstart", this.onTapDown), s.removeEventListener("touchend", this.onTapUp);
    }
    onTapDown(s) {
      let t = this.renderer.domElement.getBoundingClientRect();
      s = s.changedTouches[0], this.mouse.x = (s.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((s.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.downKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.downKeys(this.levelClass.players[1].player) : this.downKeys(this.levelClass.players[2].player));
    }
    onTapUp(s) {
      let t = this.renderer.domElement.getBoundingClientRect();
      s = s.changedTouches[0], this.mouse.x = (s.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((s.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.upKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.upKeys(this.levelClass.players[1].player) : this.upKeys(this.levelClass.players[2].player));
    }
    onKeyDown(s) {
      switch (s.code) {
        case void 0:
          this.isMobile || this.downKeys(this.levelClass.players[0].player);
          break;
        case "KeyW":
        case "ArrowUp":
          break;
        case "KeyZ":
        case "ArrowDown":
          this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
          break;
        case "KeyM":
        case "ArrowLeft":
          this.levelClass.players.length > 2 && this.downKeys(this.levelClass.players[2].player);
          break;
        case "KeyD":
        case "ArrowRight":
          break;
        case "KeyP":
          this.renderer.setPixelRatio(1);
          break;
      }
    }
    onKeyUp(s) {
      switch (s.code) {
        case void 0:
          this.isMobile || this.upKeys(this.levelClass.players[0].player);
          break;
        case "KeyW":
        case "ArrowUp":
          break;
        case "KeyZ":
        case "ArrowDown":
          this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
          break;
        case "KeyM":
        case "ArrowLeft":
          this.levelClass.players.length > 2 && this.upKeys(this.levelClass.players[2].player);
          break;
      }
    }
    downKeys(s) {
      s.userData.live && (s.userData.onGround ? (!s.userData.readyJump && this.audioClass.musicOn && s.userData.audio[0].play(), s.userData.readyJump = true) : s.userData.canFly && (!s.userData.readyJump && this.audioClass.musicOn && s.userData.audio[0].play(), s.userData.readyJump = true));
    }
    upKeys(s) {
      if (s.userData.live) {
        if (s.userData.canFly && !s.userData.onGround && s.userData.canFlyJumps > 0 && (s.userData.canFlyJumps--, s.userData.canFlyJumps === 0)) {
          const t = s.userData.canFlyNum;
          setTimeout(() => {
            s.userData.canFly = false, this.levelClass && Array.isArray(this.levelClass.boostHatModels) && t !== null && this.levelClass.boostHatModels[t] && (this.levelClass.boostHatModels[t].userData.fly = false);
          }, 1e3);
        }
        if (s.userData.readyJump && s.userData.onGround) s.userData.jumping = true, s.userData.readyJump = false, s.userData.audio[0].stop(), !s.userData.audio[1].isPlaying && this.audioClass.musicOn && s.userData.audio[1].play(), s.userData.onGround = false;
        else if (!s.userData.onGround) if (s.userData.canFly) {
          if (s.userData.jumping = true, s.userData.readyJump = false, s.userData.audio[0].stop(), !s.userData.audio[1].isPlaying && this.audioClass.musicOn && s.userData.audio[1].play(), s.userData.onGround = false, s.userData.hatBoost--, s.userData.hatBoost == 0) {
            s.userData.canFly = false;
            const t = s.userData.numHatBoost;
            setTimeout(() => {
              this.levelClass && Array.isArray(this.levelClass.boostHatModels) && t !== null && this.levelClass.boostHatModels[t] && (this.levelClass.boostHatModels[t].userData.fly = false);
            }, 500);
          }
        } else s.userData.readyJump = false, s.userData.audio[0].stop();
      }
    }
  }
  class jt {
    constructor(s, t, i, e, a, o) {
      this.scene = s, this.camera = t, this.renderer = i, this.paramsClass = e, this.isMobile = a, this.audioClass = o, this.ambientLight = new Ye(11184810, 1), this.hemiLight = new $e(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(0.095, 1, 0.75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ke(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = true, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new ie(), this.dirLight.target = this.targetObject, this.helper = new Xe(this.dirLight, 3), this.water, this.night = false, this._prevCamX = this.camera.position.x, this.thunder = false, this.thunderStart = false, this.isThunderActive = false, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = false, this.rainStart = false, this.isRainActive = false, this.rainEndTimestampMs = 0, this.activeLightningLines = [], this.lightningMaterialBase = new de({
        color: 16777215,
        transparent: true,
        opacity: 1,
        blending: Fs,
        depthWrite: false
      }), this.clock = new qs(), this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 9e3, this.rainAreaHalfWidth = 20, this.rainAreaHalfDepth = 20, this.rainTopY = 15, this.rainBottomY = -5, this.rainGeometry = new _s(), this.rainPositions = new Float32Array(this.rainDropCount * 2 * 3), this.rainColors = new Float32Array(this.rainDropCount * 2 * 3), this.rainVelocities = new Float32Array(this.rainDropCount);
    }
    async loadRain() {
      for (let s = 0; s < this.rainDropCount; s++) {
        const t = (Math.random() - 0.5) * this.rainAreaHalfWidth * 2, i = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, e = (Math.random() - 0.5) * this.rainAreaHalfDepth * 2, a = 25 + Math.random() * 15;
        this.rainVelocities[s] = a;
        const o = s * 6;
        this.rainPositions[o + 0] = t, this.rainPositions[o + 1] = i, this.rainPositions[o + 2] = e;
        const n = 0.8 + Math.random() * 0.2;
        this.rainColors[o + 0] = 0.7 * n, this.rainColors[o + 1] = 0.8 * n, this.rainColors[o + 2] = 1 * n, this.rainPositions[o + 3] = t, this.rainPositions[o + 4] = i + 0.5, this.rainPositions[o + 5] = e, this.rainColors[o + 3] = 0.2 * n, this.rainColors[o + 4] = 0.3 * n, this.rainColors[o + 5] = 0.5 * n;
      }
      this.rainGeometry.setAttribute("position", new us(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new us(this.rainColors, 3)), this.rainMaterial = new de({
        vertexColors: true,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
        blending: Fs
      }), this.rainPoints = new Je(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1), this.rainPoints.frustumCulled = false;
    }
    async loadWaterSky() {
      this.waterGeometry = new Is(900, 500), this.water = new Ze(this.waterGeometry, {
        textureWidth: 500,
        textureHeight: 500,
        waterNormals: new Se().load("textures/waternormals.jpg", function(h) {
          h.wrapS = h.wrapT = Ls;
        }),
        sunDirection: new y(),
        sunColor: 16755370,
        waterColor: 7759,
        distortionScale: 0.5,
        fog: this.scene.fog !== void 0
      }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -2 : this.water.position.y = -2, this.sun = new y(), this.sky = new Qe(), this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
      const s = this.sky.material.uniforms;
      s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = 0.8, this.parameters = {
        elevation: 5,
        azimuth: 170,
        top: false
      }, this.blackSky = new xs(new Is(1e4, 1e4), new zs({
        color: 526362,
        side: _e,
        transparent: true,
        opacity: 0
      })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
      const t = 1500, i = new Float32Array(t * 3), e = new Float32Array(t), a = new Float32Array(t * 3);
      for (let h = 0; h < t; h++) {
        i[3 * h] = Math.random() * 600 - 300, i[3 * h + 1] = Math.random() * 150 - 100, i[3 * h + 2] = Math.random() * 300 - 500, e[h] = Math.random() * 2 + 0.7;
        const c = new hs().setHSL(0.5 + Math.random() * 0.1, 0.6 + Math.random() * 0.3, 0.85 + Math.random() * 0.15);
        a[3 * h] = c.r, a[3 * h + 1] = c.g, a[3 * h + 2] = c.b;
      }
      const o = new _s();
      o.setAttribute("position", new us(i, 3)), o.setAttribute("size", new us(e, 1)), o.setAttribute("color", new us(a, 3));
      const n = "\n      attribute float size;\n      varying vec3 vColor;\n      varying float vRandom;\n      void main() {\n        vColor = color;\n        vRandom = size;\n        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);\n        gl_PointSize = size * (300.0 / -mvPosition.z); \n        gl_Position = projectionMatrix * mvPosition;\n      }\n    ", r = "\n      uniform float opacity;\n      varying vec3 vColor;\n      varying float vRandom;\n      uniform float time;\n      void main() {\n        float dist = distance(gl_PointCoord, vec2(0.5, 0.5));\n        float alpha = smoothstep(0.5, 0.45, dist);\n        float twinkle = 0.7 + 0.5 * sin(time * 2.0 + vRandom * 10.0);\n        gl_FragColor = vec4(vColor, alpha * twinkle * opacity);\n      }\n    ";
      this.materialStars = new st({
        uniforms: {
          time: {
            value: 0
          },
          opacity: {
            value: 0
          }
        },
        vertexShader: n,
        fragmentShader: r,
        transparent: true,
        vertexColors: true,
        depthWrite: false,
        blending: Fs
      }), this.stars = new De(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
    }
    updateSky() {
      const s = this.camera.position.x, t = Math.sign(s - this._prevCamX);
      this._prevCamX = t, this.stars.position.x = this.camera.position.x;
      const i = R.degToRad(90 - this.parameters.elevation), e = R.degToRad(this.parameters.azimuth);
      if (this.sun.setFromSphericalCoords(1, i, e), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -0.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += 1e-3, this.blackSky.material.opacity < 0.8 && (this.blackSky.material.opacity += 1e-3)) : (this.sun.y > -0.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= 1e-3, this.blackSky.material.opacity -= 0.01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = true : this.parameters.elevation > 6 && (this.parameters.top = false, this.rainStart = false), this.parameters.top ? (this.thunder || (this.parameters.elevation += 3e-3), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= 3e-3), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure)))), !this.rainStart && this.parameters.elevation < 2 && this.parameters.elevation > 1.5 && (this.rain = true, this.startRain(), this.audioClass.musicOn && this.audioClass.rainAudio.play(), this.rainStart = true), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = true, this.startThunder(), this.thunderStart = true), this.parameters.elevation < -2 ? this.night = true : (this.night = false, this.thunderStart = false)), this.paramsClass.gameDir == "vert") {
        this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
        const a = this.camera.position.y - this.prevCameraYSun;
        this.parameters.elevation -= a * 0.05, this.blackSky.material.opacity += a * 0.02, this.materialStars.uniforms.opacity.value += a * 8e-3, this.camera.position.y < this.topLight && a < 0 ? (this.dirLight.intensity -= a * 0.05, this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * 0.05, this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= a * 0.05, this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && a > 0 && (this.dirLight.intensity -= a * 0.05, this.dirLight.intensity = Math.max(0.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * 0.05, this.hemiLight.intensity = Math.max(0.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= a * 0.01, this.renderer.toneMappingExposure = Math.max(0.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > 0.55 && this.dirLight.intensity < 0.57 && this.camera.position.y > 10 && (this.topLight = this.camera.position.y), this.prevCameraYSun = this.camera.position.y, this.camera.position.y > 30 ? this.night = true : this.night = false;
      }
      this.materialStars.uniforms.time.value = performance.now() * 1e-3;
    }
    waterUpdate() {
      performance.now() * 1e-3, this.water.material.uniforms.time.value += 0.4 / 60;
    }
    async loadWorld() {
      await this.loadWaterSky(), await this.loadRain(), this.scene.add(this.hemiLight), this.scene.add(this.dirLight), this.scene.add(this.targetObject), this.scene.add(this.water), gt(this.renderer, this.scene, this.camera), vt(this.water, this.renderer, this.scene, this.camera);
    }
    updateLighting() {
      this.isRainActive && performance.now() >= this.rainEndTimestampMs && (this.scene.remove(this.rainPoints), this.isRainActive = false, this.rain = false, this.audioClass.musicOn && this.audioClass.rainAudio.stop());
      const s = performance.now();
      this.thunder && (s >= this.nextThunderFlashTimestampMs && (this.triggerThunderFlashNow(), this.scheduleNextThunderFlash(s)), s >= this.thunderEndTimestampMs && (this.thunder = false, this.isThunderActive = false)), this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);
      const t = 10;
      this.dirLight.shadow.camera.left = -t, this.dirLight.shadow.camera.right = t, this.dirLight.shadow.camera.top = t, this.dirLight.shadow.camera.bottom = -t, this.deltaSeconds = Math.min(this.clock.getDelta(), 0.033);
      for (let i = this.activeLightningLines.length - 1; i >= 0; i--) {
        const e = this.activeLightningLines[i];
        e.userData.life -= this.deltaSeconds / 1.5, e.material.opacity *= 0.78, (e.userData.life <= 0 || e.material.opacity <= 0.02) && (this.scene.remove(e), e.geometry.dispose(), e.material.dispose(), this.activeLightningLines.splice(i, 1));
      }
      if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = 0.03 + this.lightningFade * 0.97), this.rain) {
        const i = this.rainGeometry.getAttribute("position"), e = i.array, a = performance.now() * 1e-3, o = Math.sin(a * 0.1) * 1, n = Math.cos(a * 0.05) * 0.5, r = this.camera.position.x, h = this.camera.position.z;
        for (let c = 0; c < this.rainDropCount; c++) {
          const d = c * 6, p = this.rainVelocities[c], m = p * 5e-3;
          e[d + 1] -= p * this.deltaSeconds, e[d + 0] += o * this.deltaSeconds * 0.5, e[d + 2] += n * this.deltaSeconds * 0.5, e[d + 1] < this.rainBottomY && (e[d + 1] = this.rainTopY, e[d + 0] = r + (Math.random() - 0.5) * this.rainAreaHalfWidth * 2, e[d + 2] = h + (Math.random() - 0.5) * this.rainAreaHalfDepth * 2), e[d + 0] > r + this.rainAreaHalfWidth && (e[d + 0] -= this.rainAreaHalfWidth * 2), e[d + 0] < r - this.rainAreaHalfWidth && (e[d + 0] += this.rainAreaHalfWidth * 2), e[d + 2] > h + this.rainAreaHalfDepth && (e[d + 2] -= this.rainAreaHalfDepth * 2), e[d + 2] < h - this.rainAreaHalfDepth && (e[d + 2] += this.rainAreaHalfDepth * 2), e[d + 3] = e[d + 0] - o * this.deltaSeconds * 2, e[d + 4] = e[d + 1] + m, e[d + 5] = e[d + 2] - n * this.deltaSeconds * 2;
        }
        i.needsUpdate = true;
      }
      this.waterUpdate(), this.updateSky();
    }
    startRain() {
      if (this.isRainActive) return;
      this.scene.add(this.rainPoints), this.isRainActive = true;
      const s = performance.now();
      this.rainEndTimestampMs = s + 7e4;
    }
    startThunder() {
      if (!this.thunder) return;
      const s = performance.now();
      this.isThunderActive = true, this.thunderEndTimestampMs = s + 16e3, this.triggerThunderFlashNow(), this.scheduleNextThunderFlash(s);
    }
    triggerThunderFlashNow() {
      if (!this.thunder) return;
      const s = this.audioClass.thundersAudio;
      if (s && s.length > 0) {
        const t = s[this.currentThunderIndex % s.length].music;
        t.isPlaying && t.stop(), this.audioClass.musicOn && t.play(), this.currentThunderIndex++;
      }
      this.triggerLightningFlash(), this.lightningFade = 1;
    }
    scheduleNextThunderFlash(s) {
      const t = this.minThunderIntervalMs + Math.random() * (this.maxThunderIntervalMs - this.minThunderIntervalMs);
      this.nextThunderFlashTimestampMs = s + t;
    }
    stopThunderImmediately() {
      this.thunder = false, this.isThunderActive = false, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0;
    }
    createLightningBolt(s, t, i) {
      const e = s + (Math.random() - 0.5) * 6, a = -4 + Math.random() * 3, o = i + (Math.random() - 0.5) * 6, n = e - s, r = a - t, h = o - i, c = Math.hypot(n, r, h) || 1, d = n / c, p = r / c, m = h / c, u = n / c, b = -(h / c), x = 0, f = u, k = Math.abs(p) > 0.9 ? new y(1, 0, 0) : new y(0, 1, 0), I = new y(d, p, m), W = new y().crossVectors(I, k).normalize(), v = new y().crossVectors(I, W).normalize(), M = 2 + Math.random() * 2, w = 1.2, D = Math.random() * Math.PI * 2, j = 3 + Math.random() * 2.5, N = 0.8, K = Math.random() * Math.PI * 2, _ = 28, L = 4, X = [];
      for (let A = 0; A <= _; A++) {
        const H = A / _, T = 1 - H;
        let J = s + n * H, ds = t + r * H, as = i + h * H;
        const Z = Math.sin(H * Math.PI * M + D) * w * (0.3 + 0.7 * T), is = Math.sin(H * Math.PI * j + K) * N * (0.3 + 0.7 * T), os = (Math.random() - 0.5) * 2 * L * T, O = (Math.random() - 0.5) * 1.6 * L * T, U = Math.random() < 0.12 ? (Math.random() - 0.5) * 3.5 * T : 0;
        if (J += W.x * (Z + os + U) + v.x * (is + O * 0.7), ds += W.y * (Z + os * 0.5) + v.y * (is + O * 0.5), as += W.z * (Z + os + U) + v.z * (is + O * 0.7), X.push(J, ds, as), A > 3 && A < _ - 3 && Math.random() < 0.22) {
          const cs = [], Cs = 3 + Math.floor(Math.random() * 2), ps = 0.25 + Math.random() * 0.35;
          let Ps = J, Ds = ds, js = as;
          cs.push(Ps, Ds, js);
          for (let Hs = 1; Hs <= Cs; Hs++) Ps += (Math.random() - 0.5) * L * ps, Ds += -(0.8 + Math.random() * 0.8) * ps, js += (Math.random() - 0.5) * L * ps, cs.push(Ps, Ds, js);
          const Bs = new _s();
          Bs.setAttribute("position", new ce(cs, 3));
          const gs = new pe(Bs, this.lightningMaterialBase.clone());
          gs.material.opacity = 0.6, gs.userData.life = 0.16 + Math.random() * 0.12, this.scene.add(gs), this.activeLightningLines.push(gs);
        }
      }
      const bs = 2;
      for (let A = -1; A <= bs; A++) {
        const H = A === -1, T = H ? 0 : A % 2 === 0 ? 1 : -1, J = 0.55 + Math.random() * 0.45, ds = 0.35, as = Math.random() * Math.PI * 2, Z = [], is = X.length / 3;
        for (let U = 0; U < is; U++) {
          const cs = U / (is - 1), Cs = 0.35 + 0.85 * cs, ps = Math.sin(cs * Math.PI * 2 + as) * ds * (0.2 + 0.8 * cs), Ps = b * T * J * Cs + f * ps * 0.3, Ds = x * T * J * Cs + ps * 0.05, js = f * T * J * Cs - b * ps * 0.3, Bs = U * 3 + 0, gs = U * 3 + 1, Hs = U * 3 + 2, ne = X[Bs], le = X[gs], re = X[Hs];
          H ? Z.push(ne + (Math.random() - 0.5) * 0.05, le + (Math.random() - 0.5) * 0.05, re + (Math.random() - 0.5) * 0.05) : Z.push(ne + Ps + (Math.random() - 0.5) * 0.2, le + Ds + (Math.random() - 0.5) * 0.2, re + js + (Math.random() - 0.5) * 0.2);
        }
        const os = new _s();
        os.setAttribute("position", new ce(Z, 3));
        const O = new pe(os, this.lightningMaterialBase.clone());
        O.material.opacity = H ? 0.95 : 0.32, O.userData.life = 0.22 + Math.random() * 0.18, this.scene.add(O), this.activeLightningLines.push(O);
      }
    }
    triggerLightningFlash() {
      const s = this.camera.position.x + (Math.random() - 0.5) * 30, t = 34 + Math.random() * 6, i = -10 - Math.random() * 20;
      this.createLightningBolt(s, t, i);
    }
  }
  function $s(l) {
    if (!l) return false;
    if (l.isMine === true) return true;
    const s = E("leaderboard.mine", "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434");
    return l.name === s;
  }
  class _t {
    constructor(s, t, i, e) {
      this.initMatch = s, this.gameClass = t, this.audioClass = i, this.dataClass = e, this.playersNum = 1, this.levelPlayersNum = 1;
    }
    init() {
      this.mainMenu(), this.loadRecsData();
    }
    loadRecsData() {
      const s = this.dataClass.masTables, t = document.querySelectorAll(".rec_table_small");
      if (!s || !Array.isArray(s) || t.length < 2) return;
      const i = "free_game_my_rec", e = "";
      t[0].innerHTML = "", t[1].innerHTML = "", s.forEach((a, o) => {
        Array.isArray(a) && a.forEach((n, r) => {
          if (!Array.isArray(n) || n.length === 0) return;
          const h = n, c = h[0], d = h[1], p = h[2], m = h[3];
          if (!c || !d || !p) return;
          const u = E("leaderboard.mine", "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434"), g = h.findIndex((x) => x && x.name === u) < 3 && h.findIndex((x) => x && x.name === u) !== -1, b = this.playersNum === r + 1 ? "" : "hidden_screen";
          g ? t[o].insertAdjacentHTML("beforeend", '\n              <div class="rec_table_small_block '.concat(b, '">\n                <div class="yellow_back one_place ').concat($s(c) ? i : e, '">\n                    <span class="place_num">1</span>\n                    <span class="rec_table_small_name">').concat(c.name, '</span>\n                    <div><span class="place_rec">').concat(c.rec, "</span><span>").concat(E("hud.metersLabel", "\u043C"), '</span></div>\n                </div>\n                <div class="green_back two_place ').concat($s(d) ? i : e, '">\n                    <span class="place_num">2</span>\n                    <span class="rec_table_small_name">').concat(d.name, '</span>\n                    <div><span class="place_rec">').concat(d.rec, "</span><span>").concat(E("hud.metersLabel", "\u043C"), '</span></div>\n                </div>\n                <div class="blue_back three_place ').concat($s(p) ? i : e, '">\n                    <span class="place_num">').concat(p.pos > 2 ? p.pos : 3, '</span>\n                    <span class="rec_table_small_name">').concat(p.name, '</span>\n                    <div><span class="place_rec">').concat(p.rec, "</span><span>").concat(E("hud.metersLabel", "\u043C"), "</span></div>\n                </div>\n              </div>\n            ")) : m && t[o].insertAdjacentHTML("beforeend", '\n              <div class="rec_table_small_block '.concat(b, '">\n                <div class="yellow_back one_place">\n                    <span class="place_num">1</span>\n                    <span class="rec_table_small_name">').concat(c.name, '</span>\n                    <div><span class="place_rec">').concat(c.rec, "</span><span>").concat(E("hud.metersLabel", "\u043C"), '</span></div>\n                </div>\n                <div class="green_back two_place}">\n                    <span class="place_num">2</span>\n                    <span class="rec_table_small_name">').concat(d.name, '</span>\n                    <div><span class="place_rec">').concat(d.rec, "</span><span>").concat(E("hud.metersLabel", "\u043C"), '</span></div>\n                </div>\n                <div class="blue_back three_place ').concat(i, '">\n                  <span class="place_num">').concat(p.pos > 2 ? p.pos : 3, '</span>\n                  <span class="rec_table_small_name">').concat(m.name, '</span>\n                  <div><span class="place_rec">').concat(m.rec, "</span><span>").concat(E("hud.metersLabel", "\u043C"), "</span></div>\n                </div>\n              </div>\n            "));
        });
      });
    }
    mainMenu() {
      const s = document.querySelector(".new_game_btn1"), t = document.querySelector(".new_game_btn2"), i = document.querySelector(".new_game_btn3"), e = document.querySelector(".contest_game_btn"), a = document.querySelector(".levels_blocks"), o = document.querySelector(".levels_blocks_contest");
      s && s.addEventListener("click", () => {
        this.loadRecsData(), this.hideScreen("main_screen"), this.showScreen("free_game_screen");
      }), t && t.addEventListener("click", async () => {
        this.dataClass.levelCoopMode = "coop", document.querySelectorAll(".levels_game_screen .level_game_chels").forEach((h, c) => {
          h.classList.contains("level_game_chels_active") && (this.levelPlayersNum = c + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
        }), this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
      }), i && i.addEventListener("click", async () => {
        this.dataClass.levelCoopMode = "contest", document.querySelectorAll(".levels_game_screen_contest .level_game_chels_contest").forEach((h, c) => {
          h.classList.contains("level_game_chels_contest_active") && (this.levelPlayersNum = c + 2);
        }), this.hideScreen("main_screen"), this.showScreen("levels_game_screen_contest");
      }), document.querySelectorAll(".arrow_back").forEach((h) => {
        h.addEventListener("click", () => {
          h.parentElement.parentElement.classList.add("hidden_screen"), this.showScreen("main_screen");
        });
      }), a && a.addEventListener("click", (h) => {
        const c = h.target.closest(".levels_block");
        if (!c || c.classList.contains("levels_block--locked")) return;
        const d = Number(c.dataset.level) || 1;
        a.querySelectorAll(".levels_block").forEach((p) => p.classList.remove("active")), c.classList.add("active"), this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, d, true);
      }), o && o.addEventListener("click", (h) => {
        const c = h.target.closest(".levels_block");
        if (!c) return;
        const d = Number(c.dataset.level) || 1;
        o.querySelectorAll(".levels_block").forEach((p) => p.classList.remove("active")), c.classList.add("active"), this.hideScreen("levels_game_screen_contest"), this.initMatch(this.levelPlayersNum, 1, d, true);
      }), e && e.addEventListener("click", () => {
        const h = Math.floor(Math.random() * this.dataClass.allLevels);
        this.hideScreen("levels_game_screen_contest"), this.initMatch(this.levelPlayersNum, 1, h, true);
      }), document.querySelectorAll(".level_game_chels").forEach((h, c) => {
        h.addEventListener("click", () => {
          this.levelPlayersNum !== c + 1 && (document.querySelectorAll(".level_game_chels").forEach((d) => {
            d.classList.remove("level_game_chels_active");
          }), h.classList.add("level_game_chels_active"), this.levelPlayersNum = c + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
        });
      }), document.querySelectorAll(".level_game_chels_contest").forEach((h, c) => {
        h.addEventListener("click", () => {
          this.levelPlayersNum !== c + 2 && (document.querySelectorAll(".level_game_chels_contest").forEach((d) => {
            d.classList.remove("level_game_chels_contest_active");
          }), h.classList.add("level_game_chels_contest_active"), this.levelPlayersNum = c + 2);
        });
      });
      const n = document.querySelector(".free_game_btn1_2"), r = document.querySelector(".free_game_btn1_4");
      n && n.addEventListener("click", () => {
        ym(105298813, "reachGoal", "play_ocean"), this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 2);
      }), r && r.addEventListener("click", () => {
        ym(105298813, "reachGoal", "play_space"), this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 4, false, false);
      }), document.querySelectorAll(".free_game_chels").forEach((h, c) => {
        h.addEventListener("click", () => {
          document.querySelectorAll(".free_game_chels").forEach((b) => {
            b.classList.remove("free_game_chels_active");
          }), h.classList.add("free_game_chels_active");
          const d = c + 1, p = document.querySelectorAll(".rec_table_small"), m = [];
          p.forEach((b) => {
            const x = b.querySelector(".rec_table_small_block:not(.hidden_screen)");
            x && (m.push(x), x.getBoundingClientRect(), x.classList.add("anim-out"));
          });
          let u = 0;
          const g = () => {
            if (u++, u < m.length) return;
            this.playersNum = d, this.loadRecsData();
            const b = [];
            document.querySelectorAll(".rec_table_small").forEach((x) => {
              const f = x.querySelector(".rec_table_small_block:not(.hidden_screen)");
              f && (f.classList.add("anim-in"), b.push(f));
            }), requestAnimationFrame(() => {
              b.forEach((f) => {
                f.getBoundingClientRect(), f.classList.add("anim-play");
              });
              const x = (f) => {
                f.classList.remove("anim-in", "anim-play"), f.removeEventListener("transitionend", x);
              };
              b.forEach((f) => f.addEventListener("transitionend", () => x(f), {
                once: true
              }));
            });
          };
          m.length === 0 ? (this.playersNum = d, this.loadRecsData()) : m.forEach((b) => {
            b.addEventListener("transitionend", () => {
              b.classList.remove("anim-out"), b.removeEventListener("transitionend", g), g();
            }, {
              once: true
            });
          });
        });
      });
    }
    toggleLoader(s) {
      const t = document.querySelector(".loader_screen");
      t && (s ? t.classList.remove("hidden_screen") : t.classList.add("hidden_screen"));
    }
    hideScreen(s) {
      const t = document.querySelector(".".concat(s));
      t && t.classList.add("hidden_screen");
    }
    showScreen(s) {
      const t = document.querySelector(".".concat(s));
      t && t.classList.remove("hidden_screen");
    }
  }
  class St {
    constructor() {
      this.gameDir = "hor", this.allDie = false, this.dataLoaded = false;
    }
  }
  class Lt {
    constructor(s, t) {
      this.camera = s, this.dataClass = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y, this.metersFloatEl = document.getElementById("meters-float"), this.myRecField = document.getElementById("myRecord"), this.worldRecField = document.getElementById("worldRecord"), this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3), this.worldRec = 0, this.myRec = 0;
    }
    loadRecsToHud(s = 0, t = 0) {
      var _a2, _b, _c, _d, _e2, _f, _g;
      const i = ((_b = (_a2 = this.dataClass.masTables) == null ? void 0 : _a2[s]) == null ? void 0 : _b[t]) || [];
      this.worldRec = Number((_c = i == null ? void 0 : i[0]) == null ? void 0 : _c.rec) || 0;
      const e = E("leaderboard.mine", "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434");
      let a = i.find((o) => o && o.name === e && o.pos !== 0);
      if (!a && ((_d = i == null ? void 0 : i[3]) == null ? void 0 : _d.name) === e && (a = i[3]), !a) {
        const o = s === 0 ? "hor" : "vert";
        a = ((_g = (_f = (_e2 = this.dataClass.table) == null ? void 0 : _e2[o]) == null ? void 0 : _f[t]) == null ? void 0 : _g[0]) || {
          rec: 0
        };
      }
      this.myRec = Number(a.rec) || 0, this.myRecField && (this.myRecField.textContent = this.myRec), this.worldRecField && (this.worldRecField.textContent = this.worldRec);
    }
    updateMetersFloat(s, t, i = "hor") {
      var _a2, _b, _c, _d;
      const e = i === "vert" ? "y" : "x", a = 1e-4;
      for (const p of t) {
        const m = p == null ? void 0 : p.player;
        if (!m) continue;
        const u = m.userData || (m.userData = {});
        u.score == null && (u.score = 0);
        let g = (_b = (_a2 = m.position) == null ? void 0 : _a2[e]) != null ? _b : 0;
        if (u._lastMeterPos == null && (u._lastMeterPos = g), i !== "vert" && u._wasLive === false && u.live && (u._lastMeterPos = g), u.live) {
          const b = g - u._lastMeterPos, x = b > a ? b : 0;
          x !== 0 && (u.score += x, u._lastMeterPos = g);
        }
        u.score === 0 && (u._lastMeterPos = g), u._wasLive = !!u.live;
      }
      this.playerPanels || (this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3));
      let o = 0;
      for (let p = 0; p < 3; p++) {
        const m = this.playerPanels[p], u = (_c = t[p]) == null ? void 0 : _c.player, g = Math.max(0, Math.floor(((_d = u == null ? void 0 : u.userData) == null ? void 0 : _d.score) || 0));
        o += g, m && (m.textContent = String(g).padStart(3, "0"));
      }
      const n = Math.max(0, Math.floor(o));
      if (n === Ks) return;
      const r = Ks, h = performance.now(), c = 50, d = (p) => {
        const m = Math.min(1, (p - h) / c), u = 1 - Math.pow(1 - m, 4), g = Math.round(r + (n - r) * u);
        this.score = g, this.metersFloatEl && (this.metersFloatEl.textContent = String(g).padStart(3, "0")), m < 1 ? requestAnimationFrame(d) : Ks = n;
      };
      requestAnimationFrame(d);
    }
  }
  let Ks = 0;
  class kt {
    constructor() {
      this.gameStarting = false, this.pause = false, this.visible = true, this.showGamePopup = false;
    }
  }
  class At {
    constructor() {
      this.gameInit = false, this.yandexPlayer = {
        id: 0,
        player: null
      }, this.levelsStatus = [
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ]
      ], this.levelCoopMode = "coop", this.allLevels = 10, this.table = {
        updateDate: 11147,
        levelsStatusContest: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        player: {
          levels: [
            0,
            0,
            0
          ],
          bonusHat: [
            false,
            false,
            false
          ],
          bonusHeart: [
            0,
            0,
            0
          ]
        },
        hor: [
          [
            {
              pos: 0,
              name: "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434",
              rec: 0
            },
            {
              pos: 1,
              name: "",
              rec: 0
            },
            {
              pos: 2,
              name: "",
              rec: 0
            },
            {
              pos: 3,
              name: "",
              rec: 0
            }
          ],
          [
            {
              pos: 0,
              name: "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434",
              rec: 0
            },
            {
              pos: 1,
              name: "",
              rec: 0
            },
            {
              pos: 2,
              name: "",
              rec: 0
            },
            {
              pos: 3,
              name: "",
              rec: 0
            }
          ],
          [
            {
              pos: 0,
              name: "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434",
              rec: 0
            },
            {
              pos: 1,
              name: "",
              rec: 0
            },
            {
              pos: 2,
              name: "",
              rec: 0
            },
            {
              pos: 3,
              name: "",
              rec: 0
            }
          ]
        ],
        vert: [
          [
            {
              pos: 0,
              name: "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434",
              rec: 0
            },
            {
              pos: 1,
              name: "",
              rec: 0
            },
            {
              pos: 2,
              name: "",
              rec: 0
            },
            {
              pos: 3,
              name: "",
              rec: 0
            }
          ],
          [
            {
              pos: 0,
              name: "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434",
              rec: 0
            },
            {
              pos: 1,
              name: "",
              rec: 0
            },
            {
              pos: 2,
              name: "",
              rec: 0
            },
            {
              pos: 3,
              name: "",
              rec: 0
            }
          ],
          [
            {
              pos: 0,
              name: "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434",
              rec: 0
            },
            {
              pos: 1,
              name: "",
              rec: 0
            },
            {
              pos: 2,
              name: "",
              rec: 0
            },
            {
              pos: 3,
              name: "",
              rec: 0
            }
          ]
        ]
      }, this.masTables = [], this.mainScore = 0, this.localStorageKey = "gameData", this.disableSelection = () => {
        document.querySelectorAll(".levels_block, .status_chip, .levels_block_number").forEach((t) => {
          t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.style.webkitTapHighlightColor = "transparent", t.draggable = false;
        });
      }, this.leaderboardsPartIds = [
        "ocean1",
        "ocean2",
        "ocean3",
        "space1",
        "space2",
        "space3"
      ], this.leaderboardPlacement = {
        ocean1: {
          group: "hor",
          row: 0
        },
        ocean2: {
          group: "hor",
          row: 1
        },
        ocean3: {
          group: "hor",
          row: 2
        },
        space1: {
          group: "vert",
          row: 0
        },
        space2: {
          group: "vert",
          row: 1
        },
        space3: {
          group: "vert",
          row: 2
        }
      };
    }
    async clearData() {
      localStorage.clear();
    }
    getMineLabel() {
      return E("leaderboard.mine", "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434");
    }
    refreshMineLabels() {
      const s = this.getMineLabel(), t = /* @__PURE__ */ new Set([
        "\u041C\u043E\u0439 \u0440\u0435\u043A\u043E\u0440\u0434",
        "My record"
      ]), i = (e) => {
        if (e) {
          e[0] && (e[0].name = s);
          for (let a = 1; a <= 3; a++) {
            const o = e[a];
            o && (o.isMe === true || t.has(o.name)) && (o.name = s, o.isMe = true);
          }
        }
      };
      [
        "hor",
        "vert"
      ].forEach((e) => {
        if (this.table[e]) for (let a = 0; a < 3; a++) i(this.table[e][a]);
      }), this.processDataAfterLoad();
    }
    async loadLevels(s) {
      const t = document.querySelector(".levels_blocks");
      if (!t) return;
      t.classList.add("levels_blocks--reenter"), t.innerHTML = "";
      const i = document.createDocumentFragment(), e = (r) => {
        switch (r) {
          case "completed":
            return {
              modifierClass: "levels_block--completed",
              labelText: E("levels.status.completed", "\u041F\u0440\u043E\u0439\u0434\u0435\u043D"),
              ariaState: E("levels.status.completedAria", "\u0443\u0440\u043E\u0432\u0435\u043D\u044C \u043F\u0440\u043E\u0439\u0434\u0435\u043D")
            };
          case "available":
            return {
              modifierClass: "levels_block--available",
              labelText: E("levels.status.available", "\u0414\u043E\u0441\u0442\u0443\u043F\u0435\u043D"),
              ariaState: E("levels.status.availableAria", "\u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0434\u043E\u0441\u0442\u0443\u043F\u0435\u043D")
            };
          default:
            return {
              modifierClass: "levels_block--locked",
              labelText: E("levels.status.locked", "\u0417\u0430\u043A\u0440\u044B\u0442"),
              ariaState: E("levels.status.lockedAria", "\u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u043A\u0440\u044B\u0442")
            };
        }
      }, a = 40, o = 60, n = 600;
      for (let r = 0; r < this.levelsStatus[s].length; r++) {
        const h = this.levelsStatus[s][r], { modifierClass: c, labelText: d, ariaState: p } = e(h), m = r === 9, u = document.createElement("div");
        u.className = "levels_block ".concat(c).concat(m ? " levels_block--super" : ""), u.setAttribute("data-level", String(r + 1)), u.setAttribute("role", "button"), u.setAttribute("tabindex", h === "locked" ? "-1" : "0"), u.setAttribute("aria-label", "\u0423\u0440\u043E\u0432\u0435\u043D\u044C ".concat(r + 1, ", ").concat(p).concat(m ? ", \u0431\u043E\u043D\u0443\u0441\u043D\u044B\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C" : ""));
        const g = Math.min(o + r * a, n);
        u.style.setProperty("--show-delay", "".concat(g, "ms"));
        const b = document.createElement("div");
        if (b.className = "levels_block_number", b.textContent = String(r + 1), m) {
          const k = document.createElement("div");
          k.className = "level_reward_icon", k.innerHTML = "+\u2764\uFE0F", u.appendChild(k);
        }
        const x = document.createElement("div");
        x.className = "levels_block_status";
        const f = document.createElement("span");
        f.className = "status_chip ".concat(h === "completed" ? "status_chip--completed" : h === "available" ? "status_chip--available" : "status_chip--locked"), f.setAttribute("data-i18n", "levels.status.".concat(h)), f.textContent = d, x.appendChild(f), u.append(b, x), u.addEventListener("click", () => {
          h !== "locked" && (document.querySelectorAll(".levels_block").forEach((k) => k.classList.remove("active")), u.classList.add("active"));
        }), u.addEventListener("keydown", (k) => {
          h !== "locked" && (k.key === "Enter" || k.key === " ") && (k.preventDefault(), u.click());
        }), i.appendChild(u);
      }
      t.append(i), requestAnimationFrame(() => {
        t.classList.remove("levels_blocks--reenter"), t.querySelectorAll(".levels_block").forEach((r) => {
          r.classList.add("levels_block--enter"), r.classList.contains("levels_block--super") && r.addEventListener("animationend", (h) => {
            h.animationName === "level-tile-in" && r.classList.add("levels_block--enter-done");
          });
        });
      }), this.disableSelection();
    }
    async loadLevelsContest() {
      var _a2, _b;
      const s = document.querySelector(".levels_blocks_contest");
      if (!s) return;
      s.classList.add("levels_blocks--reenter"), s.innerHTML = "";
      const t = document.createDocumentFragment(), i = 40, e = 60, a = 600;
      for (let o = 0; o < this.allLevels; o++) {
        const n = o + 1, r = (_b = (_a2 = this.table.levelsStatusContest) == null ? void 0 : _a2[o]) != null ? _b : 0, h = document.createElement("div");
        h.className = "levels_block levels_block--contest", h.setAttribute("data-level", n), h.setAttribute("role", "button"), h.setAttribute("tabindex", "0"), h.setAttribute("aria-label", "\u0423\u0440\u043E\u0432\u0435\u043D\u044C ".concat(n, ", \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 ").concat(r));
        const c = Math.min(e + o * i, a);
        h.style.setProperty("--show-delay", "".concat(c, "ms")), r && h.classList.add("level_player".concat(r));
        const d = document.createElement("div");
        d.className = "levels_block_number", d.textContent = String(n);
        const p = document.createElement("div");
        p.className = "levels_block_status", r ? (p.setAttribute("data-i18n", "contest.player".concat(r)), p.textContent = E("contest.player".concat(r))) : p.textContent = "";
        const m = r ? E("contest.player".concat(r)) : "";
        p.textContent = m, h.append(d, p), h.addEventListener("click", () => {
          document.querySelectorAll(".levels_block").forEach((u) => u.classList.remove("active")), h.classList.add("active");
        }), h.addEventListener("keydown", (u) => {
          (u.key === "Enter" || u.key === " ") && (u.preventDefault(), h.click());
        }), t.append(h);
      }
      s.append(t), requestAnimationFrame(() => {
        s.classList.remove("levels_blocks--reenter"), s.querySelectorAll(".levels_block").forEach((o) => {
          o.classList.add("levels_block--enter");
        });
      }), this.disableSelection();
    }
    replayLevelsEnterAnimation() {
      const s = document.querySelector(".levels_blocks");
      if (!s) return;
      Array.from(s.querySelectorAll(".levels_block")).forEach((i) => {
        i.classList.remove("levels_block--enter"), i.offsetWidth, i.classList.add("levels_block--enter");
      });
    }
    processDataAfterLoad() {
      const s = (t) => {
        var _a2, _b, _c;
        const i = this.getMineLabel(), e = [
          t[1],
          t[2],
          t[3]
        ].map((h, c) => h ? {
          pos: h.pos,
          name: h.name,
          rec: h.rec
        } : {
          pos: c + 1,
          name: "",
          rec: 0
        }), a = e.some((h) => h && h.name === i), o = Number((_a2 = t == null ? void 0 : t[0]) == null ? void 0 : _a2.rec) || 0, n = ((_b = t == null ? void 0 : t[3]) == null ? void 0 : _b.name) === i && Number(t[3].rec) || 0, r = Math.max(o, n);
        if (a) return e;
        {
          const h = {
            pos: ((_c = t == null ? void 0 : t[3]) == null ? void 0 : _c.name) === i && t[3].pos || 0,
            name: i,
            rec: r
          };
          return [
            e[0],
            e[1],
            e[2],
            h
          ];
        }
      };
      this.masTables = [
        [
          s(this.table.hor[0]),
          s(this.table.hor[1]),
          s(this.table.hor[2])
        ],
        [
          s(this.table.vert[0]),
          s(this.table.vert[1]),
          s(this.table.vert[2])
        ]
      ];
      for (let t = 0; t < 3; t++) for (let i = 0; i < this.allLevels; i++) i < this.table.player.levels[t] ? this.levelsStatus[t][i] = "completed" : i == this.table.player.levels[t] ? this.levelsStatus[t][i] = "available" : this.levelsStatus[t][i] = "locked";
    }
    async initYandexPlayer({ force: s = false } = {}) {
      try {
        (!this.yandexPlayer.player || s) && (this.yandexPlayer.player = await ysdk.getPlayer()), this.yandexPlayer.isAuthorized = await this.yandexPlayer.player.isAuthorized();
      } catch (e) {
        this.yandexPlayer.isAuthorized = false;
      }
      const t = document.querySelector(".autoriz");
      t && (this.yandexPlayer.isAuthorized && console.log("\u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043B\u0438\u0441\u044C"), t.classList.toggle("hidden_screen", this.yandexPlayer.isAuthorized === true), this.yandexPlayer.isAuthorized === true && (t.setAttribute("aria-hidden", "true"), t.style.display = "none"));
    }
    async loadTableFromCloud() {
      await this.initYandexPlayer();
      try {
        const s = await this.yandexPlayer.player.getData([
          "table"
        ]);
        s && s.table && typeof s.table == "object" ? this.table = s.table : (console.log("\u041F\u0435\u0440\u0432\u044B\u0439 \u0432\u0445\u043E\u0434: \u0441\u043E\u0437\u0434\u0430\u0451\u043C \u043D\u043E\u0432\u0443\u044E table"), this.table = this.createDefaultTable(), await this.saveTableToCloud());
      } catch (s) {
        console.warn("Cloud load failed:", s), this.table = this.createDefaultTable();
      }
      this.processDataAfterLoad();
    }
    createDefaultTable() {
      return {
        updateDate: Date.now(),
        player: {
          levels: [
            0,
            0,
            0
          ],
          bonusHat: [
            false,
            false,
            false
          ],
          bonusHeart: [
            0,
            0,
            0
          ]
        },
        levelsStatusContest: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        hor: [
          [
            {
              pos: 0,
              name: this.getMineLabel(),
              rec: 0
            },
            {},
            {},
            {}
          ],
          [
            {
              pos: 0,
              name: this.getMineLabel(),
              rec: 0
            },
            {},
            {},
            {}
          ],
          [
            {
              pos: 0,
              name: this.getMineLabel(),
              rec: 0
            },
            {},
            {},
            {}
          ]
        ],
        vert: [
          [
            {
              pos: 0,
              name: this.getMineLabel(),
              rec: 0
            },
            {},
            {},
            {}
          ],
          [
            {
              pos: 0,
              name: this.getMineLabel(),
              rec: 0
            },
            {},
            {},
            {}
          ],
          [
            {
              pos: 0,
              name: this.getMineLabel(),
              rec: 0
            },
            {},
            {},
            {}
          ]
        ]
      };
    }
    async saveTableToCloud({ flush: s = false } = {}) {
      await this.initYandexPlayer();
      try {
        await this.yandexPlayer.player.setData({
          table: this.table
        }, s);
      } catch (t) {
        console.warn("Cloud save failed:", t);
      }
    }
    ensureRowsForLeaderboards() {
      const s = () => [
        {
          pos: 0,
          name: this.getMineLabel(),
          rec: 0
        },
        {
          pos: 1,
          name: "",
          rec: 0
        },
        {
          pos: 2,
          name: "",
          rec: 0
        },
        {
          pos: 3,
          name: "",
          rec: 0
        }
      ];
      this.table.hor || (this.table.hor = [
        s(),
        s(),
        s()
      ]), this.table.vert || (this.table.vert = [
        s(),
        s(),
        s()
      ]);
      for (let t = 0; t < 3; t++) (!Array.isArray(this.table.hor[t]) || this.table.hor[t].length !== 4) && (this.table.hor[t] = s()), (!Array.isArray(this.table.vert[t]) || this.table.vert[t].length !== 4) && (this.table.vert[t] = s());
    }
    applyLocalMyBestToTop3() {
      var _a2;
      ((_a2 = this.yandexPlayer) == null ? void 0 : _a2.isAuthorized) || [
        "hor",
        "vert"
      ].forEach((s) => {
        var _a3, _b, _c;
        for (let t = 0; t < 3; t++) {
          const i = (_b = (_a3 = this.table) == null ? void 0 : _a3[s]) == null ? void 0 : _b[t];
          if (!i) continue;
          const e = Number((_c = i == null ? void 0 : i[0]) == null ? void 0 : _c.rec) || 0;
          e > 0 && this.updateLocalTop3(s, t, e);
        }
      });
    }
    async loadLeaderboardsTop3(s) {
      var _a2;
      await this.initYandexPlayer(), this.ensureRowsForLeaderboards();
      const t = !!this.yandexPlayer.isAuthorized, i = t && ((_a2 = this.yandexPlayer.player) == null ? void 0 : _a2.getUniqueID) ? this.yandexPlayer.player.getUniqueID() : null, e = async (a) => {
        try {
          const n = ((await s.leaderboards.getEntries(a, {
            quantityTop: 3,
            includeUser: false,
            quantityAround: 0
          })).entries || []).map((p) => {
            var _a3, _b;
            return {
              uid: ((_a3 = p.player) == null ? void 0 : _a3.uniqueID) || null,
              name: ((_b = p.player) == null ? void 0 : _b.publicName) || "Anon",
              rec: typeof p.score == "number" ? p.score : 0,
              pos: p.rank || 0
            };
          });
          let r = null;
          if (t && await s.isAvailableMethod("leaderboards.getPlayerEntry")) try {
            r = await s.leaderboards.getPlayerEntry(a);
          } catch (e2) {
            r = null;
          }
          let h = [];
          if (t && r && i) {
            const p = r.rank || 0, m = typeof r.score == "number" ? r.score : 0;
            if (n.some((b) => b.uid === i)) h = n.slice(0, 3).map((b) => ({
              pos: b.pos,
              name: b.uid === i ? this.getMineLabel() : b.name,
              rec: b.rec,
              isMe: b.uid === i
            }));
            else {
              const b = n.filter((f) => f.uid !== i).slice(0, 2).map((f) => ({
                pos: f.pos,
                name: f.name,
                rec: f.rec
              })), x = {
                pos: p,
                name: this.getMineLabel(),
                rec: m,
                isMe: true
              };
              h = [
                ...b,
                x
              ];
            }
            const g = this.leaderboardPlacement[a];
            if (g) {
              const b = g.group === "hor" ? this.table.hor[g.row] : this.table.vert[g.row];
              b && b[0] && (b[0].rec = m);
            }
          } else h = n.slice(0, 3).map((p) => ({
            pos: p.pos,
            name: p.name,
            rec: p.rec
          }));
          const c = this.leaderboardPlacement[a];
          if (!c) return;
          const d = c.group === "hor" ? this.table.hor[c.row] : this.table.vert[c.row];
          for (let p = 1; p <= 3; p++) {
            const m = h[p - 1] || {
              pos: p,
              name: "",
              rec: 0
            };
            d[p] = {
              pos: m.pos,
              name: m.name,
              rec: m.rec,
              isMe: !!m.isMe
            };
          }
          if (t && !h.some((m) => m.isMe || (m == null ? void 0 : m.name) === this.getMineLabel()) && r && i) {
            const m = r.rank || 0, u = typeof r.score == "number" ? r.score : 0;
            d[3] = {
              pos: m,
              name: this.getMineLabel(),
              rec: u
            };
          }
        } catch (o) {
          console.warn("Leaderboard ".concat(a, " load failed:"), o);
          const n = this.leaderboardPlacement[a];
          if (!n) return;
          const r = n.group === "hor" ? this.table.hor[n.row] : this.table.vert[n.row];
          for (let h = 1; h <= 3; h++) r[h] = {
            pos: h,
            name: "",
            rec: 0
          };
        }
      };
      await Promise.all(this.leaderboardsPartIds.map(e)), this.refreshMineLabels(), this.applyLocalMyBestToTop3(), this.processDataAfterLoad();
    }
    async submitMyScore(s, t, i) {
      const e = Number(i) || 0;
      try {
        if (!await s.isAvailableMethod("leaderboards.setScore")) return;
        const o = this.getMineLabel();
        this.mainScore = [
          ...this.table.hor,
          ...this.table.vert
        ].reduce((n, r) => {
          var _a2, _b;
          const h = Number((_a2 = r == null ? void 0 : r[0]) == null ? void 0 : _a2.rec) || 0, c = ((_b = r == null ? void 0 : r[3]) == null ? void 0 : _b.name) === o && Number(r[3].rec) || 0;
          return n + Math.max(h, c);
        }, 0), setTimeout(async () => {
          try {
            await s.leaderboards.setScore(t, e);
          } catch (n) {
            console.warn("setScore (part) failed:", n);
          }
        }, 0), setTimeout(async () => {
          try {
            await s.leaderboards.setScore("main", this.mainScore);
          } catch (n) {
            console.warn("setScore (main) failed:", n);
          }
        }, 1200);
      } catch (a) {
        console.warn("Submit score failed:", a);
      }
    }
    updateLocalTop3(s, t, i) {
      var _a2, _b, _c, _d;
      const e = this.getMineLabel(), a = (_b = (_a2 = this.table) == null ? void 0 : _a2[s]) == null ? void 0 : _b[t];
      if (!a) return;
      const o = (d, p) => {
        var _a3, _b2;
        return {
          pos: (_a3 = d == null ? void 0 : d.pos) != null ? _a3 : p,
          name: (_b2 = d == null ? void 0 : d.name) != null ? _b2 : "",
          rec: Number(d == null ? void 0 : d.rec) || 0,
          isMe: !!(d == null ? void 0 : d.isMe) || (d == null ? void 0 : d.name) === e
        };
      }, n = Number(i) || 0;
      a[0] = a[0] || {
        pos: 0,
        name: e,
        rec: 0
      }, a[0].name = e, a[0].rec = Math.max(Number(a[0].rec) || 0, n);
      let r = [
        o(a[1], 1),
        o(a[2], 2),
        o(a[3], 3)
      ];
      const h = r.findIndex((d) => d.isMe), c = Math.max(n, Number(a[0].rec) || 0);
      if (h >= 0) r[h].name = e, r[h].isMe = true, r[h].rec = Math.max(r[h].rec, c), r = r.sort((d, p) => p.rec - d.rec).slice(0, 3);
      else {
        const d = ((_c = r[2]) == null ? void 0 : _c.rec) || 0;
        if (c > d) r.push({
          pos: 0,
          name: e,
          rec: c,
          isMe: true
        }), r = r.sort((p, m) => m.rec - p.rec).slice(0, 3);
        else {
          const p = r.filter((b) => !b.isMe).sort((b, x) => x.rec - b.rec), m = p[0] || {
            pos: 1,
            name: "",
            rec: 0
          }, u = p[1] || {
            pos: 2,
            name: "",
            rec: 0
          }, g = {
            pos: ((_d = a[3]) == null ? void 0 : _d.pos) || 0,
            name: e,
            rec: c,
            isMe: true
          };
          r = [
            m,
            u,
            g
          ];
        }
      }
      for (let d = 1; d <= 3; d++) {
        const p = r[d - 1] || {
          pos: d,
          name: "",
          rec: 0
        };
        a[d] = {
          pos: p.pos,
          name: p.name,
          rec: p.rec,
          isMe: !!p.isMe
        };
      }
      this.processDataAfterLoad();
    }
  }
  class zt {
    constructor() {
      this.plane = {
        texture: null,
        material: null
      }, this.planeGrass = {
        texture: null,
        material: null
      }, this.mks = {
        texture: null,
        material: null
      }, this.angryBirdModel, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh;
    }
    async loadTexture() {
      const s = new Se(), [t, i, e] = await Promise.all([
        s.loadAsync("textures/plane.jpg"),
        s.loadAsync("textures/grass.jpg"),
        s.loadAsync("textures/mks.png")
      ]);
      this.plane.texture = t, this.plane.material = new ys({
        map: t,
        transparent: true,
        opacity: 1
      }), this.planeGrass.texture = i, this.planeGrass.material = new ys({
        map: i
      }), this.mks.texture = e, this.mks.material = new zs({
        map: e,
        transparent: true,
        opacity: 0
      });
    }
    async loadModels() {
      await new se().loadAsync("models/bird/bird.glb").then((i) => {
        const e = i.scene, a = i.animations;
        e.scale.x = 2, e.scale.y = 2, e.scale.z = 2, e.position.y = 0, e.rotation.y = -Math.PI / 3, this.angryBirdModel = e, this.angryBirdModel.userData.mixer = new et(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(a[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new qs(), this.angryBirdModel.traverse((n) => {
          (n.isMesh || n.isSkinnedMesh) && (n.castShadow = false, n.receiveShadow = false, n.geometry && !n.geometry.boundingSphere && n.geometry.computeBoundingSphere());
        });
        const o = this.angryBirdModel.children[0].children[0].material;
        o.emissive.set(16777215), o.emissiveIntensity = 0.1;
      });
    }
    async loadBoostsModel() {
      await new se().loadAsync("models/boosts/hat.glb").then((i) => {
        const e = i.scene;
        this.boostHatModel = e, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
        const a = this.boostHatPropeller.children[0].material;
        a.emissive.set(16777215), a.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 17, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = 0.035, this.boostHatModel.scale.y = 0.035, this.boostHatModel.scale.z = 0.035, this.boostHatModel.userData.fly = false, this.boostHatModel.userData.num = 0;
      });
    }
  }
  document.addEventListener("contextmenu", (l) => (l.preventDefault(), false), {
    capture: true
  });
  document.addEventListener("selectstart", (l) => (l.preventDefault(), false), {
    capture: true
  });
  document.addEventListener("dragstart", (l) => (l.preventDefault(), false), {
    capture: true
  });
  document.addEventListener("touchstart", (l) => {
    l.touches.length > 1 && l.preventDefault();
  }, {
    passive: false
  });
  let oe;
  document.addEventListener("touchstart", (l) => {
    oe = setTimeout(() => {
      l.preventDefault();
    }, 500);
  }, {
    passive: false
  });
  document.addEventListener("touchend", () => {
    clearTimeout(oe);
  });
  document.addEventListener("touchmove", () => {
    clearTimeout(oe);
  });
  document.addEventListener("dblclick", (l) => (l.preventDefault(), false), {
    capture: true
  });
  (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (l) => {
    l.target.closest(".new_game_btn, .free_game_btn, .popup_game_btn, .popup_game_btn_close, .level_game_chels, .level_game_chels_contest, .free_game_chels, .contest_game_btn, .arrow_back, .levels_block, .sound_btn_wrap, .pause_btn_wrap, .lang-toggle, .auth_btn, .small_btn") || l.preventDefault();
  }, {
    passive: false
  });
  let ee, Et = new qs(), Le, es = null, Ms = null, ss = null, P = null, S = null, ks = null, q = null, Ts = null, B = null, vs = null, Xs = false, Js = false, C = new kt();
  const fs = new tt();
  fs.background = new hs(13230580);
  const ke = yt({
    scene: fs
  }), Ae = ft({
    scene: fs
  }), G = new at(25, window.innerWidth / window.innerHeight, 0.1, 2e3);
  G.position.y = 2;
  const Tt = 16 / 9, Bt = R.degToRad(25), Ht = 2 * Math.atan(Math.tan(Bt / 2) * Tt), Zs = pt();
  async function Rt() {
    if (window.RAPIER) return window.RAPIER;
    try {
      return await ct(() => import("./@dimforge-BObwuXYQ.js").then(async (m) => {
        await m.__tla;
        return m;
      }), [], import.meta.url);
    } catch (l) {
      if (console.warn("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0438\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C @dimforge/rapier3d \u043A\u0430\u043A \u043C\u043E\u0434\u0443\u043B\u044C", l), window.RAPIER) return window.RAPIER;
      throw l;
    }
  }
  function Ws() {
    var _a2;
    const l = (((_a2 = window.visualViewport) == null ? void 0 : _a2.height) || window.innerHeight) * 0.01;
    document.documentElement.style.setProperty("--vh", "".concat(l, "px"));
  }
  Ws();
  window.addEventListener("resize", Ws);
  window.addEventListener("orientationchange", Ws);
  (_a = window.visualViewport) == null ? void 0 : _a.addEventListener("resize", Ws);
  new it();
  const F = new ot({
    antialias: false
  });
  F.setPixelRatio(Math.min(window.devicePixelRatio, 1));
  F.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(F.domElement);
  F.shadowMap.enabled = true;
  F.shadowMap.type = nt;
  F.outputColorSpace = lt;
  F.toneMapping = rt;
  F.toneMappingExposure = 1.05;
  function ze() {
    const l = document.body.offsetWidth, s = document.body.offsetHeight, t = l / s;
    let i = 2 * Math.atan(Math.tan(Ht / 2) / t);
    const e = R.degToRad(4), a = R.degToRad(90);
    i = R.clamp(i, e, a), G.fov = R.radToDeg(i), G.aspect = t, G.updateProjectionMatrix(), F.setSize(l, s);
  }
  window.addEventListener("resize", ze);
  ze();
  let ts, $ = document.querySelector(".loader_line");
  async function Ft() {
    te(true), B = new At();
    const l = ts.environment.i18n.lang.toLowerCase();
    xt(() => B.refreshMineLabels(), l), vs = new zt(), await vs.loadModels(), await vs.loadBoostsModel(), $.setAttribute("style", "width:30%"), await vs.loadTexture(), await Gt(), $.setAttribute("style", "width:30%"), S = new Pt(), await S.loadAudio(), $.setAttribute("style", "width:60%"), await B.loadTableFromCloud(), await B.loadLeaderboardsTop3(ts), await B.loadLevels(0), await B.loadLevelsContest(), $.setAttribute("style", "width:100%"), es = new _t(Ee, C, S, B), es.init(), ts.features.LoadingAPI.ready(), ts.features.GameplayAPI.stop(), te(false), $.setAttribute("style", "width:0%");
  }
  async function It(l) {
    ts = l, window.ysdk = l;
    try {
      await Ft();
    } catch (s) {
      te(false), window.showInitError ? window.showInitError(s) : console.error("Init error", s);
    }
  }
  async function Gt() {
    [
      "images/back-win.jpg",
      "images/back-loose.jpg",
      "images/back-dead.jpg",
      "images/main.jpg"
    ].forEach((l) => {
      const s = new Image();
      s.decoding = "async", s.src = l;
    });
  }
  async function Nt(l) {
    const s = await Rt();
    ee = new s.World(new s.Vector3(0, -9.81, 0)), Le = new s.EventQueue(true), ss = new ms(ee, s), Ts = new Lt(G, B), Ms = new jt(fs, G, F, q, Zs, S), P = new Ct(fs, S, ss, F, G, Zs, q, Ms, Ee, B, C, ke, Ae, Ts, es, vs);
    for (let t = 0; t < l; t++) P.players.push(new wt(B, fs, S, P, q, G, C, vs));
    ks = new Dt(P, Zs, F, G, q, S), ks.addKeyListeners();
  }
  async function qt() {
    await Ms.loadWorld(), S.musicOn && S.backAudio.play(), S.musicOn && S.oceanAudio.play();
  }
  async function Wt(l) {
    await P.createLevel(l), await P.loadPlayers(), await P.loadEnvironments(), P.objs.grassPlanes.data.length > 0 && P.objs.grassPlanes.data.forEach((s, t) => {
      P.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(Gs([
        0
      ], [
        1
      ]));
    }), P.players.length > 0 && P.players.forEach((s, t) => {
      P.players[t].player.userData.collider.setCollisionGroups(Gs([
        1
      ], [
        0,
        1
      ]));
    });
  }
  async function Ee(l, s, t = false) {
    Ut(), es.toggleLoader(true), q = new St(), await Nt(l), $.setAttribute("style", "width:30%"), P.gameNum = s, await qt(), $.setAttribute("style", "width:60%"), await Wt(t), $.setAttribute("style", "width:90%"), q.gameDir === "hor" ? Ts.loadRecsToHud(0, P.players.length - 1) : Ts.loadRecsToHud(1, P.players.length - 1), q.dataLoaded = true, C.gameStarting = true, B.gameInit = true, $.setAttribute("style", "width:100%"), setTimeout(() => {
      es.toggleLoader(false), $.setAttribute("style", "width:0%");
    }, 1e3);
  }
  function Ut() {
    G.position.y = 2, G.position.x = 0, F.toneMappingExposure = 1.05, ks == null ? void 0 : ks.removedKeyListeners(), Ms = null, ss = null, P = null, ks = null, q = null, Ts = null;
  }
  function Ot(l) {
    if (C.gameStarting && document.querySelector(".menu_in_game").classList.contains("hidden_screen") && q.dataLoaded && P.showScreen("menu_in_game"), B.gameInit && C.gameStarting && !P.levelsMode && document.querySelector(".hud").classList.contains("hidden_screen") && q.dataLoaded ? (es.showScreen("hud"), es.hideScreen("level_hud_wrap")) : !B.gameInit && !document.querySelector(".hud").classList.contains("hidden_screen") && (es.hideScreen("hud"), es.showScreen("level_hud_wrap")), B.gameInit && C.gameStarting && P.levelsMode && !document.querySelector(".player_panel_rec").classList.contains("hidden_screen") ? document.querySelectorAll(".player_panel_rec").forEach((s, t, i) => {
      s.classList.add("hidden_screen");
    }) : B.gameInit && C.gameStarting && !P.levelsMode && document.querySelector(".player_panel_rec").classList.contains("hidden_screen") && document.querySelectorAll(".player_panel_rec").forEach((s, t, i) => {
      s.classList.remove("hidden_screen");
    }), C.gameStarting ? (ke.update(As), Ae.update(As), Xs || (ts.features.GameplayAPI.start(), Xs = true, Js = false)) : Js || (ts.features.GameplayAPI.stop(), Js = true, Xs = false), q.dataLoaded && C.gameStarting) {
      P.players.forEach((s, t, i) => {
        s.playerMove();
      }), Ms.updateLighting(), P.levelAnimate(G), P.cameraMove(G, l);
      for (let s = 0, t = ss.dynamicBodies.length; s < t; s++) ss.dynamicBodies[s][0].position.copy(ss.dynamicBodies[s][1].translation()), ss.dynamicBodies[s][0].quaternion.copy(ss.dynamicBodies[s][1].rotation());
      ss.updateInstancedTransforms(), ee.step(Le), C.gameStarting && F.render(fs, G);
    }
  }
  let Qs = 0;
  const As = 1 / 60, Me = 0.1;
  F.setAnimationLoop(() => {
    if (q != null) {
      let l = Et.getDelta();
      for (l > Me && (l = Me), Qs += l; Qs >= As; ) Ot(As), Qs -= As;
    }
  });
  function te(l) {
    const s = document.querySelector(".loader_screen");
    s && (l ? s.classList.remove("hidden_screen") : s.classList.add("hidden_screen"));
  }
  document.addEventListener("visibilitychange", function() {
    S && (document.visibilityState === "visible" ? (!C.pause && !C.showGamePopup && (C.gameStarting = true, S.togglePauseAll(!C.gameStarting)), C.visible = true) : (!C.pause && !C.showGamePopup ? (C.gameStarting = false, S.togglePauseAll(!C.gameStarting)) : C.pause || S.togglePauseAll(!C.gameStarting), C.visible = false));
  });
  document.querySelector(".autoriz_btn").addEventListener("click", async () => {
    try {
      await ts.auth.openAuthDialog();
    } catch (e) {
    }
    await B.initYandexPlayer({
      force: true
    }), await B.loadTableFromCloud(), await B.loadLeaderboardsTop3(ts);
  });
  document.querySelector(".pause_btn_wrap").addEventListener("click", () => {
    !C.pause && C.gameStarting && (C.pause = !C.pause, C.pause && (P.showPopupInGame(), C.gameStarting = false, S.togglePauseAll(!C.gameStarting), P.showScreen("popup_game_btn_close")));
  });
  document.querySelector(".popup_game_btn_close").addEventListener("click", () => {
    (C.pause || C.gameStarting) && (C.pause = !C.pause, C.gameStarting = true, S.togglePauseAll(!C.gameStarting), Ms.rain && !S.rainAudio.isPlaying && S.rainAudio.play(), S.oceanAudio.isPlaying || S.oceanAudio.play(), P.hideScreen("popup_in_game"), P.hideScreen("popup_game_btn_close"));
  });
  document.querySelector(".sound_btn_wrap").addEventListener("click", () => {
    const l = S.isMuted();
    S.toggleMute(!l), document.querySelector(".volume-icon__input").classList.toggle("volume_off");
  });
  function Vt() {
    const l = [
      ".free_game_screen",
      ".levels_game_screen",
      ".levels_game_screen_contest",
      ".main_screen"
    ];
    let s = null, t = null, i = null, e = false, a = 0, o = 0;
    const n = () => {
      for (const u of l) {
        const g = document.querySelector(u);
        if (g && !g.classList.contains("hidden_screen")) return g;
      }
      return null;
    }, r = () => {
      const u = n();
      u !== s && (s && s.removeEventListener("scroll", h, {
        passive: true
      }), i && (i.removeEventListener("mousedown", c), i.removeEventListener("touchstart", c)), s = u, t = s ? s.querySelector(".scroll-progress") : null, i = t ? t.querySelector(".scroll-progress__bar") : null, s && s.addEventListener("scroll", h, {
        passive: true
      }), i && (i.addEventListener("mousedown", c), i.addEventListener("touchstart", c)), h());
    }, h = () => {
      if (!s || !t || !i) return;
      const u = s.clientHeight, g = s.scrollHeight, b = s.scrollTop;
      if (g <= u + 1) {
        t.classList.remove("visible");
        return;
      }
      t.classList.add("visible");
      const x = t.getBoundingClientRect().height, k = Math.max(u / g * x, 24), I = g - u, W = x - k, v = I > 0 ? b / I * W : 0;
      i.style.height = "".concat(k, "px"), i.style.top = "".concat(v, "px");
    }, c = (u) => {
      !s || !i || (e = true, a = u.touches ? u.touches[0].clientY : u.clientY, o = s.scrollTop, document.body.style.userSelect = "none", u.preventDefault());
    }, d = (u) => {
      if (!e || !s || !i || !t) return;
      const b = (u.touches ? u.touches[0].clientY : u.clientY) - a, x = t.getBoundingClientRect().height, f = s.clientHeight, k = s.scrollHeight, I = Math.max(1, x - i.offsetHeight), W = (k - f) / I;
      s.scrollTop = o + b * W;
    }, p = () => {
      e = false, document.body.style.userSelect = "";
    };
    window.addEventListener("resize", () => {
      r(), h();
    }), window.addEventListener("mousemove", d, {
      passive: false
    }), window.addEventListener("touchmove", d, {
      passive: false
    }), window.addEventListener("mouseup", p), window.addEventListener("touchend", p), new MutationObserver(() => {
      r();
    }).observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: [
        "class"
      ]
    }), r();
  }
  Vt();
  const Y = document.querySelector(".popup_in_game_wrap");
  if (Y) {
    let l = 0;
    Y.addEventListener("touchstart", function(t) {
      !t.touches || t.touches.length === 0 || (l = t.touches[0].clientY, Y.scrollTop);
    }, {
      passive: true
    }), Y.addEventListener("touchmove", function(t) {
      if (!t.touches || t.touches.length === 0) return;
      if (!(Y.scrollHeight > Y.clientHeight)) {
        t.preventDefault();
        return;
      }
      const a = t.touches[0].clientY - l, o = Y.scrollTop <= 0, n = Y.scrollTop + Y.clientHeight >= Y.scrollHeight - 1, r = a > 0, h = a < 0;
      (o && r || n && h) && t.preventDefault();
    }, {
      passive: false
    });
  }
  const Ce = document.querySelector(".popup_in_game");
  Ce && Ce.addEventListener("touchmove", function(l) {
    l.target.closest(".popup_in_game_wrap") || l.preventDefault();
  }, {
    passive: false
  });
  const Pe = document.querySelector(".loader_screen");
  Pe && Pe.addEventListener("touchmove", function(l) {
    l.preventDefault();
  }, {
    passive: false
  });
  (function() {
    function l(s) {
      var t = document.body || document.documentElement;
      if (t) {
        var i = document.getElementById("debug-error-overlay");
        i || (i = document.createElement("div"), i.id = "debug-error-overlay", i.className = "debug_error_overlay", t.appendChild(i)), i.textContent = s;
      }
    }
    window.showInitError = function(s) {
      var t = "Init error";
      s && (s.message ? t += ": " + s.message : t += ": " + String(s)), document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", function() {
        l(t);
      }, {
        once: true
      }) : l(t);
    }, window.initSDK = function() {
      typeof YaGames < "u" ? YaGames.init().then(function(s) {
        window.ysdk = s, It(s);
      }).catch(function(s) {
        window.showInitError(s);
      }) : window.showInitError("YaGames is not defined");
    }, document.readyState === "complete" ? window.initSDK() : window.addEventListener("load", function() {
      window.initSDK();
    });
  })();
})();
export {
  __tla,
  Yt as __vite_legacy_guard
};

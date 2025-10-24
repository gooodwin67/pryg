import { B as ws, a as ls, P as mt, N as jt, b as Is, c as Ns, C as Os, M as Vs, d as Ds, V as p, e as ys, Q as Ms, f as xt, g as ss, h as js, i as rs, G as Ws, E as Y, j as ts, S as Pt, k as Dt, l as $s, I as $, D as Q, m as Mt, n as Bs, O as Ys, T as yt, R as xs, o as zs, A as Ct, p as At, q as St, r as ks, s as es, t as zt, u as kt, v as B, w as Lt, x as _t, H as Bt, y as Ht, z as Et, L as Tt, W as Ft, F as Rt, J as Gt, K as It, U as Qs, X as st, Y as Nt, Z as Wt, _ as tt, $ as et, a0 as qt, a1 as Ut, a2 as Ot, a3 as Vt, a4 as Yt, a5 as Jt, a6 as Xt } from "./three-B76v5LAa.js";
(async ()=>{
    (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload")) return;
        for (const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);
        new MutationObserver((t)=>{
            for (const e of t)if (e.type === "childList") for (const o of e.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function i(t) {
            const e = {};
            return t.integrity && (e.integrity = t.integrity), t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? e.credentials = "include" : t.crossOrigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin", e;
        }
        function a(t) {
            if (t.ep) return;
            t.ep = !0;
            const e = i(t);
            fetch(t.href, e);
        }
    })();
    const Kt = "modulepreload", Zt = function(l, s) {
        return new URL(l, s).href;
    }, it = {}, $t = function(s, i, a) {
        let t = Promise.resolve();
        if (i && i.length > 0) {
            let h = function(u) {
                return Promise.all(u.map((c)=>Promise.resolve(c).then((y)=>({
                            status: "fulfilled",
                            value: y
                        }), (y)=>({
                            status: "rejected",
                            reason: y
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = n?.nonce || n?.getAttribute("nonce");
            t = h(i.map((u)=>{
                if (u = Zt(u, a), u in it) return;
                it[u] = !0;
                const c = u.endsWith(".css"), y = c ? '[rel="stylesheet"]' : "";
                if (!!a) for(let d = o.length - 1; d >= 0; d--){
                    const f = o[d];
                    if (f.href === u && (!c || f.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${u}"]${y}`)) return;
                const m = document.createElement("link");
                if (m.rel = c ? "stylesheet" : Kt, c || (m.as = "script"), m.crossOrigin = "", m.href = u, r && m.setAttribute("nonce", r), document.head.appendChild(m), c) return new Promise((d, f)=>{
                    m.addEventListener("load", d), m.addEventListener("error", ()=>f(new Error(`Unable to preload CSS for ${u}`)));
                });
            }));
        }
        function e(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return t.then((o)=>{
            for (const n of o || [])n.status === "rejected" && e(n.reason);
            return s().catch(e);
        });
    };
    function L(l, s) {
        return Math.random() * (s - l) + l;
    }
    function Qt() {
        let l = window.matchMedia || window.msMatchMedia;
        return l ? l("(pointer:coarse)").matches : !1;
    }
    function at(l) {
        return l.reduce((s, i)=>s | 1 << i, 0);
    }
    function Hs(l, s) {
        const i = at(l), a = at(s);
        return "0x" + ((i & 65535) << 16 | a & 65535).toString(16).padStart(8, "0");
    }
    function ot(l) {
        const s = l.collisionGroups(), i = s >>> 16 & 65535, a = s & 65535;
        function t(e) {
            const o = [];
            for(let n = 0; n < 16; n++)e & 1 << n && o.push(n);
            return o;
        }
        return [
            t(i),
            t(a)
        ];
    }
    function se(l) {
        return typeof l == "number" ? new p(l, l, l) : l?.isVector3 ? l : new p(l?.x ?? 1, l?.y ?? 1, l?.z ?? 1);
    }
    function nt(l) {
        return l?.userData?.id ?? l?.uuid ?? l?.id;
    }
    const te = new ys(new p(-.5, -.5, -.5), new p(.5, .5, .5)), rt = new xt, lt = new Ms;
    function ht(l) {
        if (l?.isObject3D) {
            if (l.updateMatrixWorld(!0), l.geometry?.isBufferGeometry) {
                const t = l.geometry;
                if (t.boundingBox || t.computeBoundingBox(), t.boundingBox) {
                    const e = t.boundingBox.clone();
                    return e.applyMatrix4(l.matrixWorld), e;
                }
            }
            return new ys().setFromObject(l);
        }
        const s = l.position ?? l.pos ?? new p, i = se(l.size ?? 1), a = l.quaternion?.isQuaternion ? l.quaternion : l.rotation?.isEuler ? lt.setFromEuler(l.rotation) : lt.set(0, 0, 0, 1);
        return rt.compose(s, a, i), te.clone().applyMatrix4(rt);
    }
    function N(l, s) {
        const i = ht(l), a = nt(l);
        for(let t = s.length - 1; t >= 0; t--){
            const e = s[t], o = nt(e);
            if (a !== void 0 && o !== void 0 && a === o) continue;
            if (ht(e).intersectsBox(i)) return e;
        }
        return null;
    }
    function dt(l) {
        l.traverse((i)=>{
            i.userData?.persistent || (i.geometry && i.geometry.dispose(), i.material && (Array.isArray(i.material) ? i.material.forEach((a)=>a.dispose()) : i.material.dispose()), i.material && i.material.map && i.material.map.dispose());
        });
        const s = [];
        for (const i of l.children)i.userData?.persistent || s.push(i);
        s.forEach((i)=>l.remove(i));
    }
    function ee({ scene: l, maxParticles: s = 800, gravity: i = -7.8, drag: a = 2, texture: t = null, pointSize: e = .66, blending: o = jt } = {}) {
        if (!l) throw new Error("createSplashSystem: scene is required");
        function n() {
            const j = document.createElement("canvas");
            j.width = j.height = 64;
            const F = j.getContext("2d"), T = F.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
            T.addColorStop(0, "rgba(255,255,255,1)"), T.addColorStop(1, "rgba(255,255,255,0)"), F.fillStyle = T, F.fillRect(0, 0, 64, 64);
            const E = new Os(j);
            return E.anisotropy = 1, E.needsUpdate = !0, E;
        }
        const r = t || n(), h = new Float32Array(s * 3), u = new Float32Array(s * 3), c = new Float32Array(s), y = new Float32Array(s), w = new Float32Array(s), m = new Uint8Array(s), d = new ws;
        d.setAttribute("position", new ls(h, 3)), d.setAttribute("aSize", new ls(w, 1));
        const f = new mt({
            map: r,
            size: e,
            transparent: !0,
            depthWrite: !1,
            blending: o,
            vertexColors: !1,
            sizeAttenuation: !0
        }), C = new Is(d, f);
        C.userData.persistent = !0, C.frustumCulled = !1, l.add(C);
        let is = 0;
        function g() {
            for(let v = 0; v < s; v++){
                const j = (is + v) % s;
                if (!m[j]) return is = (j + 1) % s, j;
            }
            return -1;
        }
        function A(v, j, F, T, E) {
            const G = j * 3;
            v[G] = F, v[G + 1] = T, v[G + 2] = E;
        }
        return {
            trigger (v, j = 1, F = {}) {
                const { count: T = 42, spread: E = .35, up: G = 3, horiz: ps = 2.2, ttl: x = [
                    .35,
                    .8
                ], sizeJitter: P = .5 } = F, U = Math.max(1, Math.floor(T * j));
                for(let us = 0; us < U; us++){
                    const D = g();
                    if (D === -1) break;
                    const k = Math.sqrt(Math.random()) * E, S = Math.random() * Math.PI * 2, O = k * Math.cos(S), as = k * Math.sin(S), X = Math.sqrt(Math.random()), V = Math.cos(S) * ps * X * (.6 + .4 * Math.random()), K = Math.sin(S) * ps * X * (.6 + .4 * Math.random()), Z = G * (.6 + .4 * Math.random()), I = x[0] + Math.random() * (x[1] - x[0]), R = (1 - P / 2 + Math.random() * P) * 1;
                    A(h, D, v.x + O, v.y, v.z + as), A(u, D, V * j, Z * j, K * j), c[D] = I, y[D] = 0, w[D] = R, m[D] = 1;
                }
                d.attributes.position.needsUpdate = !0, d.attributes.aSize.needsUpdate = !0;
            },
            update (v) {
                if (v <= 0) return;
                const j = i, F = Math.max(0, a);
                let T = !1;
                for(let x = 0; x < s; x++){
                    if (!m[x]) continue;
                    if (T = !0, y[x] += v, y[x] >= c[x]) {
                        m[x] = 0;
                        const S = x * 3;
                        h[S] = 1e9, h[S + 1] = 1e9, h[S + 2] = 1e9;
                        continue;
                    }
                    const P = x * 3;
                    u[P + 1] += j * v;
                    const U = u[P], us = u[P + 1], D = u[P + 2], k = Math.max(0, 1 - F * v);
                    u[P] = U * k, u[P + 1] = us * k, u[P + 2] = D * k, h[P] += u[P] * v, h[P + 1] += u[P + 1] * v, h[P + 2] += u[P + 2] * v;
                }
                T && (d.attributes.position.needsUpdate = !0);
                let E = 0, G = 0;
                for(let x = 0; x < s; x++)m[x] && (E++, G += 1 - y[x] / c[x]);
                const ps = E ? .25 + .75 * (G / E) : 1;
                f.size = e * ps;
            },
            get object3D () {
                return C;
            },
            dispose () {
                l.remove(C), d.dispose(), f.dispose(), t || r.dispose();
            }
        };
    }
    function ie({ scene: l, size: s = 1.5, ttl: i = .9 } = {}) {
        const a = new Ns(1, 1), t = (()=>{
            const w = document.createElement("canvas");
            w.width = w.height = 64;
            const m = w.getContext("2d");
            return m.clearRect(0, 0, 64, 64), m.strokeStyle = "rgba(255,255,255,0.9)", m.lineWidth = 3, m.beginPath(), m.arc(32, 32, 20, 0, Math.PI * 2), m.stroke(), new Os(w);
        })(), e = new Vs({
            map: t,
            transparent: !0,
            depthWrite: !1
        }), o = new Ds(a, e);
        o.visible = !1, o.userData.persistent = !0, l.add(o);
        let n = 0, r = !1;
        const h = new p;
        function u(w) {
            h.copy(w), n = 0, r = !0, o.visible = !0;
        }
        function c(w, m) {
            if (!r) return;
            if (n += w, n >= i) {
                r = !1, o.visible = !1;
                return;
            }
            o.position.set(h.x, h.y + .01, h.z), o.rotation.set(-Math.PI / 2, 0, 0);
            const d = n / i, f = s * (1 + 1.6 * d);
            o.scale.setScalar(f), e.opacity = 1 - d;
        }
        function y() {
            l.remove(o), a.dispose(), e.dispose(), t.dispose();
        }
        return {
            trigger: u,
            update: c,
            dispose: y,
            mesh: o
        };
    }
    class ae {
        constructor(s, i, a, t, e, o){
            this.scene = s, this.audioClass = i, this.levelClass = a, this.paramsClass = t, this.camera = e, this.gameClass = o, this.playerHeight = .9, this.playerWidth = .5, this.player = new Ds(new ss(this.playerWidth, this.playerHeight, this.playerWidth), new js({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.player.userData.finish = !1, this.player.userData.splash = !1, this.playerModel, this.playerOut = new Ds(new ss(this.playerWidth, this.playerHeight + .1, this.playerWidth), new rs({
                color: 16776960,
                transparent: !0,
                opacity: 0
            })), this.playerOut.material.depthWrite = !1, this.playerOut.userData.id = this.player.uuid, this.leftHand, this.rightHand, this.head, this.headPosition, this.playerColors = [
                15904944,
                11596464,
                16052346
            ];
        }
        async loadPlayerModel() {
            await new Ws().loadAsync("models/players/player1.glb").then((a)=>{
                const t = a.scene;
                this.playerModel = t, this.playerModel.traverse(function(e) {
                    e.isMesh && (e.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(e) {
                    e.isMesh && (e.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if (this.levelClass.levelsMode && (this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            }) : this.levelClass.players.every((s)=>s.player.userData.finish || s.player.userData.lives <= 0) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            })), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), N(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, i] = ot(this.player.userData.collider);
                i[0] == 0 && this.player.userData.collider.setCollisionGroups(Hs([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, i] = ot(this.player.userData.collider);
                i[0] != 0 && this.player.userData.collider.setCollisionGroups(Hs([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && N(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(N(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(N(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(N(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]))), N(this.player, this.levelClass.objs.topPlanes.data) || N(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, N(this.player, this.levelClass.objs.livesBlocks.data) && !N(this.player, this.levelClass.objs.livesBlocks.data).userData.taked && this.player.userData.lives < 3 && (this.player.userData.lives++, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]), this.reLiveField(), N(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(0, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY - this.levelClass.bounds.bottomY) / 2 * 1.7 && this.player.userData.live && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && this.audioClass.musicOn && this.audioClass.playMusic([
                "inwater"
            ]), this.levelClass.splash.trigger(new p(this.player.position.x, this.player.position.y + 0, this.player.position.z), 2), this.levelClass.ring.trigger(new p(this.player.position.x, this.player.position.y + .1, this.player.position.z))), this.player.userData.splash = !0), this.player.position.y < -4 && this.gameClass.gameStarting) this.player.userData.splash = !1, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                "back"
            ]), !this.player.userData.finish && !this.gameClass.pause && this.audioClass.musicOn && this.audioClass.playMusic([
                "inwater"
            ]), this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.player.userData.finish ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0, !0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.player.userData.lives < 1 && (this.gameClass.gameStarting = !1)), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.levelClass.levelsMode && (this.player.userData.lives = 0), this.audioClass.stopMusic([
                "inwater"
            ]), this.player.userData.finish || this.audioClass.musicOn && this.audioClass.playMusic([
                "inwater"
            ]), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.gameClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0, this.gameClass.gameStarting = !1)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, i, a)=>{
                s.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.musicOn && this.audioClass.playMusic([
                "back"
            ])), (!this.player.userData.live || this.player.userData.finish) && (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((s)=>s.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + 1.1, this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1)), this.reLiveField();
            else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, i = this.player.userData.readyJump ? -Math.PI / 2 : 0, a = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, t = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, e = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, a, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, e, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const u = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, u, .4);
                const c = this.player.userData.readyJump ? .6 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, c, .1),
                    y: this.player.userData.body.rotation().y,
                    z: this.player.userData.body.rotation().z
                }), this.player.userData.readyJump && this.player.userData.playerPowerJump < 8 && (this.player.userData.playerPowerJump += .2), this.player.userData.jumping && (this.player.userData.body.setLinvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0), this.player.userData.body.applyImpulse({
                    x: this.paramsClass.gameDir == "hor" ? this.player.userData.playerPowerJump / 3 : 0,
                    y: this.player.userData.playerPowerJump / 1.4,
                    z: 0
                }, !0), this.player.userData.playerPowerJump = 1, this.player.userData.jumping = !1);
            }
            if (this.player.userData.canFlyJumps) {
                const s = this.levelClass.boostHatModels[this.player.userData.canFlyNum], i = this.player.userData.head;
                s.userData.originalScale || (s.userData.originalScale = s.scale.clone()), s.parent !== this.scene && this.scene.attach(s), this.playerModel.updateMatrixWorld(!0), i.updateWorldMatrix(!0, !1);
                const a = new p().setFromMatrixPosition(this.player.userData.head.matrixWorld), t = new Ms;
                this.player.userData.head.getWorldQuaternion(t);
                const e = new Ms().setFromEuler(new Y(0, Math.PI / 2, 0)), o = t.clone().multiply(e), r = new p(.01, .14, .05).clone().applyQuaternion(o);
                s.quaternion.copy(o), s.position.copy(a).add(r), s.children[0].children[1].rotation.y += .4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
            } else {
                const s = this.player.userData.canFlyNum;
                if (s !== null && this.levelClass.boostHatModels[s]) {
                    const i = this.levelClass.boostHatModels[s];
                    i.userData.lastPos && (i.position.copy(i.userData.lastPos), i.quaternion.copy(i.userData.lastQuat)), i.userData.fly = !1, i.children[0].children[1].rotation.y += .02;
                }
            }
        }
        lerp(s, i, a) {
            return s + (i - s) * a;
        }
        playerAliving(s) {
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, s && (this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.levelClass.levelsMode ? this.player.userData.lives = 1 : this.player.userData.lives = 3, this.reLiveField()), setTimeout(()=>{
                this.gameClass.gameStarting = !0, this.player.userData.splash = !1;
            }, 100);
        }
        reLiveField() {
            let s = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((i, a, t)=>i.player == this.player)].children;
            for(let i = 0; i < s.length; i++)i > this.player.userData.lives - 1 ? s[i].classList.add("hidden_screen") : s[i].classList.contains("hidden_screen") && s[i].classList.remove("hidden_screen");
        }
    }
    class oe {
        constructor(s, i, a, t, e, o, n, r, h, u, c, y, w){
            this.scene = s, this.audioClass = i, this.physicsClass = a, this.renderer = t, this.camera = e, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.initMatch = h, this.gameClass = c, this.splash = y, this.ring = w, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = u, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new ts(16777215), this._nightColor = new ts(16771488);
            const m = new Pt, d = .01;
            m.moveTo(5 * d, 5 * d), m.bezierCurveTo(5 * d, 5 * d, 4 * d, 2 * d, 0 * d, 2 * d), m.bezierCurveTo(-6 * d, 2 * d, -6 * d, 7 * d, -6 * d, 7 * d), m.bezierCurveTo(-6 * d, 10 * d, -3 * d, 14 * d, 5 * d, 18 * d), m.bezierCurveTo(12 * d, 14 * d, 16 * d, 10 * d, 16 * d, 7 * d), m.bezierCurveTo(16 * d, 7 * d, 16 * d, 2 * d, 10 * d, 2 * d), m.bezierCurveTo(7 * d, 2 * d, 5 * d, 5 * d, 5 * d, 5 * d);
            const f = {
                depth: .22,
                bevelEnabled: !1,
                curveSegments: 12,
                steps: 1
            };
            this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (g, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new Y(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(1, 1, 1),
                            userData: {
                                name: "plane",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlane: new ss(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new js({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new Y(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(1, 1, 1),
                            userData: {
                                name: "topSensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneTop: new ss(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new rs({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new Y(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(1, 1, 1),
                            userData: {
                                name: "tops",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1,
                                noFriction: !1,
                                moveHor: !1,
                                moveVert: !1
                            }
                        })),
                    geometryPlaneGrass: new ss(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new js({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new Y(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(1, 1, 1),
                            userData: {
                                name: "sensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneSensor: new ss(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new js({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (g, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new Y(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new ss(.3, 1, .3),
                    materialLamp: new js({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (g, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new Y(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new $s(.32, 24, 16),
                    materialPlafon: new rs({
                        transparent: !0,
                        color: 16777215,
                        opacity: .65,
                        roughness: 0,
                        metalness: 0,
                        emissive: 16777215
                    }),
                    plafon: null
                },
                bulbs: {
                    data: Array.from({
                        length: this.count
                    }, (g, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new Y(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new $s(.3),
                    materialBulb: new rs({
                        emissive: new ts(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                },
                livesBlocks: {
                    data: Array.from({
                        length: this.count
                    }, (g, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new Y(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new p(0, 0, 0)
                            }
                        })),
                    geometryLivesBlock: new Dt(m, f),
                    materialLivesBlock: new rs({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new $(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(Q), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new $(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(Q), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new $(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(Q), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new $(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(Q), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new $(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(Q), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new $(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(Q), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new $(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(Q), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new $(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(Q), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (g)=>{
                g.uniforms.fresnelPower = {
                    value: 2.5
                }, g.fragmentShader = g.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const C = new Float32Array(this.count);
            for(let g = 0; g < this.count; g++)C[g] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Mt(C, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (g)=>{
                g.vertexShader = `
    attribute float aEmissive;
    varying float vEmissive;
  ` + g.vertexShader.replace("#include <begin_vertex>", `
      #include <begin_vertex>
      vEmissive = aEmissive;
    `), g.fragmentShader = `
    varying float vEmissive;
  ` + g.fragmentShader.replace("#include <lights_fragment_begin>", `
      #include <lights_fragment_begin>
      // усиливаем эмиссию в зависимости от инстанса
      totalEmissiveRadiance *= vEmissive;
    `);
            }, this.objs.bulbs.materialBulb.needsUpdate = !0;
            function is(g = 64) {
                const A = document.createElement("canvas");
                A.width = A.height = g;
                const q = A.getContext("2d"), v = q.createRadialGradient(g / 2, g / 2, 0, g / 2, g / 2, g / 2);
                v.addColorStop(0, "rgba(255, 235, 175, 1)"), v.addColorStop(1, "rgba(255, 235, 175, 0)"), q.fillStyle = v, q.fillRect(0, 0, g, g);
                const j = new Os(A);
                return j.anisotropy = 1, j.generateMipmaps = !1, j.needsUpdate = !0, j;
            }
            this._glowTex = is(), this._emissive = C, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(e), this.rightEdge.unproject(e), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Bs, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s : s ? new p(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new p(1, 1, 1);
        }
        apply(s, i, a) {
            let t = a.userData.invBaseSize;
            if (!t) {
                const r = a.geometry;
                r.computeBoundingBox();
                const h = new p;
                r.boundingBox.getSize(h), t = a.userData.invBaseSize = new p(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new Ys;
            const e = this._dummy, o = i[s] || {}, n = this.toVec3(o.size);
            e.position.copy(o.position || new p), o.rotation ? e.rotation.copy(o.rotation) : e.rotation.set(0, 0, 0), e.scale.set(n.x * t.x, n.y * t.y, n.z * t.z), e.updateMatrix(), a.setMatrixAt(s, e.matrix);
        }
        async loadTexture() {
            const s = new yt;
            s.load("textures/plane.jpg", (i)=>{
                const a = new rs({
                    map: i,
                    transparent: !0,
                    opacity: 1
                });
                i.wrapS = xs, i.wrapT = xs, i.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = a;
            }, void 0, function(i) {
                console.error("An error happened.");
            }), s.load("textures/grass.jpg", (i)=>{
                const a = new rs({
                    map: i
                });
                i.wrapS = xs, i.wrapT = xs, i.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = a;
            }, void 0, function(i) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let s = new ss(.5, .7, 1), i = new Vs({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new Ds(s, i), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = L(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((i, a, t)=>{
                document.querySelectorAll(".player_panel")[a].classList.remove("hidden_screen");
            }), s) {
                let i = -2.5, a = -5, t = !1;
                switch(s){
                    case 1:
                        this.birdYes = !1, this.count = 3, this.paramsClass.gameDir = "hor", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.gameNum = 2, this.cameraSpeed = .01, this.fixedDistanceHor.min = 1.5;
                        break;
                    case 2:
                        this.gameNum = 4, this.birdYes = !1, this.count = 3, this.paramsClass.gameDir = "vert", this.randomAnimateHor = 0, this.randomAnimateVert = 0;
                        break;
                    case 3:
                        this.birdYes = !0, this.count = 5, this.paramsClass.gameDir = "hor", this.levelsNoFric = !0, this.randomAnimateHor = 1, this.randomAnimateVert = 0, this.gameNum = 1, this.cameraSpeed = .01, this.fixedDistanceHor.min = 1.5;
                        break;
                    case 4:
                        this.gameNum = 3, this.birdYes = !0, this.count = 5, this.paramsClass.gameDir = "vert", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.cameraSpeed = .01;
                        break;
                    case 5:
                        this.birdYes = !0, this.count = 7, this.paramsClass.gameDir = "hor", this.levelsNoFric = !1, this.randomNoFric = 1, this.randomAnimateHor = 1, this.randomAnimateVert = 0, this.gameNum = 1, this.cameraSpeed = .01, this.fixedDistanceHor.min = 1.5;
                        break;
                    case 6:
                        this.birdYes = !0, this.count = 9, this.paramsClass.gameDir = "hor", this.levelsNoFric = !1, this.randomNoFric = 1, this.randomAnimateHor = .5, this.randomAnimateVert = 1, this.gameNum = 2, this.cameraSpeed = .01, this.fixedDistanceHor.min = 1.5;
                        break;
                    case 7:
                        this.gameNum = 4, this.birdYes = !1, this.count = 6, this.paramsClass.gameDir = "vert", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.cameraSpeed = .01, t = [
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
                        this.birdYes = !0, this.count = 5, this.paramsClass.gameDir = "hor", this.levelsNoFric = !0, this.randomNoFric = 0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.gameNum = 2, this.cameraSpeed = .01, t = [
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
                        this.gameNum = 3, this.birdYes = !1, this.count = 6, this.paramsClass.gameDir = "vert", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.cameraSpeed = .01, t = [
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
                        this.birdYes = !0, this.count = 10, this.paramsClass.gameDir = "hor", this.levelsNoFric = !1, this.randomNoFric = .5, this.randomAnimateHor = .5, this.randomAnimateVert = .5, this.gameNum = 1, this.cameraSpeed = .01, t = [
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
                            .5
                        ], this.fixedDistanceHor.min = 3;
                        break;
                }
                if (this.paramsClass.gameDir == "hor") {
                    for(let e = 0; e < this.count; e++){
                        let o = L(this.planeWidth, this.planeWidth - 1), n = i + o / 2 + L(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = L(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (t && (o = t[e]), e == 0 ? (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.planes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : e == 1 ? (this.objs.planes.data[e].size.x = o, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = o + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = o + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e == this.count - 1 ? (t ? this.objs.planes.data[e].size.x = t[t.length - 1] - .2 : this.objs.planes.data[e].size.x = 5, this.objs.planes.data[e].size.y = this.planeHeight, t ? this.objs.topPlanes.data[e].size.x = t[t.length - 1] : this.objs.topPlanes.data[e].size.x = 5 + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, t ? this.objs.grassPlanes.data[e].size.x = t[t.length - 1] : this.objs.grassPlanes.data[e].size.x = 5 + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = o, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = o + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = o + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = r + this.planeHeight / 1.5) : e == 1 ? (this.objs.planes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[e].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[e].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[e].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[e].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[e].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[e].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new zs(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n + o / 2;
                    }
                    for(let e = 0; e < this.count; e++)e > 1 && e < this.count - 1 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[e - 1].userData.moveHor && (this.objs.grassPlanes.data[e].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10), e > 1 && e < this.count - 1 && Math.random() < this.randomAnimateVert && (this.objs.grassPlanes.data[e].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10);
                } else if (this.paramsClass.gameDir == "vert") {
                    this.birdYes = !1;
                    for(let e = 0; e < this.count; e++){
                        let o = L(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        t && (o = t[e]), this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[e].userData.direction = 1 : this.objs.grassPlanes.data[e].userData.direction = -1;
                        let n = a + L(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[e].position.y = n - 1.3, this.objs.grassPlanes.data[e].position.y = n, this.objs.sensorPlanes.data[e].position.y = n - .3, this.objs.topPlanes.data[e].size.y = .3, this.objs.grassPlanes.data[e].size.y = .7, this.objs.sensorPlanes.data[e].size.y = .9, e > 0 ? (this.objs.topPlanes.data[e].size.x = o + .3, this.objs.grassPlanes.data[e].size.x = o + .3, this.objs.sensorPlanes.data[e].size.x = o + .7) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.grassPlanes.data[e].userData.speed = L(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new zs(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
            } else switch(this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let i = -2.5;
                    for(let t = 0; t < this.count; t++){
                        let e = L(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = i + e / 2 + L(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = L(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (t > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, t > this.count - 20 ? (this.objs.planes.data[t].size.x = .1, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = .2 + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = .2 + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : t > 0 ? (this.objs.planes.data[t].size.x = e, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = e + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = e + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[t].size.x = this.planeWidth, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = this.planeWidth + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), t == 0) n = 1 - this.planeHeight / 1.5, this.objs.planes.data[t].position.x = 0, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = 0, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = 0, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5;
                        else if (t == 1) o = 6, this.objs.planes.data[t].position.x = o, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = o, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = o, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5;
                        else if (t > 1 && (this.objs.planes.data[t].position.x = o, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = o, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = o, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5, (t + 1) % 10 === 1)) {
                            let r = this.boostHatModel.clone();
                            r.position.x = o, r.position.y = this.objs.topPlanes.data[t].position.y + 2, r.rotation.y = -Math.PI / 2, r.userData.num = t, this.boostHatModels.push(r), this.boostHatMeshes.push(r.children[0].children[0].children[0]), this.boostHatCoords.push([
                                r.position.x,
                                r.position.y
                            ]), this.scene.add(r);
                        }
                        if (this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.lights.length < this.lightsCount) {
                            const r = new zs(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(t, this.objs.planes.data, this.objs.planes.plane), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), i = o + e / 2;
                    }
                    for(let t = 0; t < this.count; t++)t > 4 && t < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[t - 1].userData.moveHor && (this.objs.grassPlanes.data[t].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[t - 1].position.x,
                        x2: this.objs.grassPlanes.data[t + 1].position.x,
                        w1: this.objs.grassPlanes.data[t - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[t + 1].size.x / 2
                    }, this.objs.planes.data[t].position.y = -10), t > 7 && t < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[t - 1].userData.moveHor && !this.objs.grassPlanes.data[t - 1].userData.moveVert && (this.objs.grassPlanes.data[t].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[t - 1].position.x,
                        x2: this.objs.grassPlanes.data[t + 1].position.x,
                        w1: this.objs.grassPlanes.data[t - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[t + 1].size.x / 2
                    }, this.objs.planes.data[t].position.y = -10), this.objs.grassPlanes.data[t].position.y > this.maxHeight && (this.maxHeight = this.objs.grassPlanes.data[t].position.y), t > 7 && Math.random() < .1 && !this.objs.grassPlanes.data[t].userData.moveHor && !this.objs.grassPlanes.data[t].userData.moveVert && (this.objs.livesBlocks.data[t].position.x = this.objs.grassPlanes.data[t].position.x - this.objs.grassPlanes.data[t].size.x / 2 + this.objs.livesBlocks.data[t].size.x / 2, this.objs.livesBlocks.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.livesBlocks.data[t].size.y / 2 + .2, this.objs.livesBlocks.data[t].userData.startPos = this.objs.livesBlocks.data[t].position.clone()), this.apply(t, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.livesBlocks.livesBlock), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let a = -5;
                    this.birdYes = !1;
                    for(let t = 0; t < this.count; t++){
                        let e = L(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[t].userData.direction = 1 : this.objs.grassPlanes.data[t].userData.direction = -1;
                        let o = a + L(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[t].position.y = o - 1.3, this.objs.grassPlanes.data[t].position.y = o, this.objs.sensorPlanes.data[t].position.y = o - .3, this.objs.topPlanes.data[t].size.y = .3, this.objs.grassPlanes.data[t].size.y = .7, this.objs.sensorPlanes.data[t].size.y = .9, t > this.count - 20 && (this.objs.topPlanes.data[t].size.x = e / 8 + .1, this.objs.grassPlanes.data[t].size.x = e / 8 + .1, this.objs.sensorPlanes.data[t].size.x = e / 8 + .4), t > 0 ? (this.objs.topPlanes.data[t].size.x = e + .3, this.objs.grassPlanes.data[t].size.x = e + .3, this.objs.sensorPlanes.data[t].size.x = e + .7) : (this.objs.topPlanes.data[t].size.x = 10, this.objs.grassPlanes.data[t].size.x = 10, this.objs.sensorPlanes.data[t].size.x = 10), t > this.count - 10 ? this.objs.grassPlanes.data[t].userData.speed = L(10, 14) / 100 : this.objs.grassPlanes.data[t].userData.speed = L(6, 10) / 100, this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, (t + 1) % 7 === 0) {
                            let n = this.boostHatModel.clone();
                            n.position.x = L(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[t].position.y + .5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                                n.position.x,
                                n.position.y
                            ]), this.scene.add(n);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const n = new zs(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), a = o;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
            this.players.forEach((i, a, t)=>{
                i.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y, s && (i.player.userData.lives = 1, i.reLiveField());
            });
        }
        getHorizontalWorldBounds(s = 0) {
            const i = new p(-1, 0, .5), a = new p(1, 0, .5), t = new p(0, 1, .5), e = new p(0, -1, .5);
            if (i.unproject(this.camera), a.unproject(this.camera), t.unproject(this.camera), e.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = i.clone().sub(o).normalize(), r = a.clone().sub(o).normalize(), h = t.clone().sub(o).normalize(), u = e.clone().sub(o).normalize(), c = (s - o.z) / n.z, y = (s - o.z) / u.z, w = o.clone().add(n.multiplyScalar(c)), m = o.clone().add(r.multiplyScalar(c)), d = o.clone().add(h.multiplyScalar(y)), f = o.clone().add(u.multiplyScalar(y));
                this.bounds = {
                    leftX: w.x,
                    rightX: m.x,
                    topY: d.y,
                    bottomY: f.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let s = !1;
                for(let i = 0; i < this.objs.grassPlanes.data.length; i++){
                    const a = this.objs.grassPlanes.data[i], t = a.userData.body, e = a.userData.moveHor, o = a.userData.moveVert;
                    if (t && (e || o)) {
                        if (e) {
                            const n = t.translation(), r = e.x1 + e.w1 + a.size.x * .5, h = e.x2 - e.w2 - a.size.x * .5, u = a.userData.speed ?? .05;
                            n.x >= h && (a.userData.direction = -1), n.x <= r && (a.userData.direction = 1);
                            const c = a.userData.direction * u, y = n.x + c;
                            t.setNextKinematicTranslation({
                                x: y,
                                y: n.y,
                                z: n.z
                            }), a.position.x = y, this.objs.lamps.data[i].position.x = y, this.objs.plafons.data[i].position.x = y, this.objs.bulbs.data[i].position.x = y, this.objs.topPlanes.data[i].position.x = y;
                        } else if (o) {
                            const n = t.translation(), r = 2, h = .5, u = a.userData.speed ?? .03;
                            n.y >= r && (a.userData.direction = -1), n.y <= h && (a.userData.direction = 1);
                            const c = a.userData.direction * u, y = n.y + c;
                            t.setNextKinematicTranslation({
                                x: n.x,
                                y,
                                z: n.z
                            }), a.position.y = y, this.objs.lamps.data[i].position.y = y + this.objs.lamps.lampHeight, this.objs.plafons.data[i].position.y = y + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[i].position.y = y + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[i].position.y = y + .2;
                        }
                    }
                    for(let n = 0; n < this.objs.livesBlocks.data.length; n++)this.objs.livesBlocks.data[n].userData.taked ? this.objs.livesBlocks.data[n].position.y < 10 ? (this.objs.livesBlocks.data[n].position.y += .001, this.objs.livesBlocks.data[n].rotation.y += .004) : this.objs.livesBlocks.data[n].userData.taked = !1 : this.objs.livesBlocks.data[n].rotation.y += 4e-4, this.apply(n, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb), s = !0;
                }
                s && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let s = 0; s < this.objs.grassPlanes.data.length; s++){
                    const i = this.objs.grassPlanes.data[s], a = this.objs.topPlanes.data[s];
                    this.objs.sensorPlanes.data[s], this.objs.lamps.data[s], this.objs.plafons.data[s], this.objs.bulbs.data[s];
                    const t = i.userData.body, e = i.userData.speed, o = t.translation();
                    o.x > this.bounds.rightX - i.size.x / 2 ? i.userData.direction = -1 : o.x < this.bounds.leftX + i.size.x / 2 && (i.userData.direction = 1);
                    const n = i.userData.direction * e, r = o.x + n;
                    s > 0 && t.setNextKinematicTranslation({
                        x: r,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[s].position.x = r, this.objs.lamps.data[s].position.x = r, this.objs.plafons.data[s].position.x = r, this.objs.bulbs.data[s].position.x = r, this.objs.topPlanes.data[s].position.x = r, this.objs.topPlanes.data[s].position.y = o.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), a.position.set(r, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBirdModel() {
            await new Ws().loadAsync("models/bird/bird.glb").then((a)=>{
                const t = a.scene, e = a.animations;
                t.scale.x = 2, t.scale.y = 2, t.scale.z = 2, t.position.y = 0, t.rotation.y = -Math.PI / 3, this.angryBirdModel = t, this.angryBirdModel.userData.mixer = new Ct(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(e[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Bs;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new Ws().loadAsync("models/boosts/hat.glb").then((a)=>{
                const t = a.scene;
                this.boostHatModel = t, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
                const e = this.boostHatPropeller.children[0].material;
                e.emissive.set(16777215), e.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 17, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .035, this.boostHatModel.scale.y = .035, this.boostHatModel.scale.z = .035, this.boostHatModel.userData.fly = !1, this.boostHatModel.userData.num = 0;
            });
        }
        async loadEnvironments() {
            for(let s = 0; s < this.objs.grassPlanes.data.length; s++)this.paramsClass.gameDir == "hor" && (this.physicsClass.addInstancedStatic(this.objs.planes.data, this.objs.planes.plane, s, {
                position: this.objs.planes.data[s].position,
                size: this.objs.planes.data[s].size,
                collide: "123"
            }), this.apply(s, this.objs.planes.data, this.objs.planes.plane)), this.physicsClass.addInstancedStatic(this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass, s, {
                position: this.objs.grassPlanes.data[s].position,
                size: this.objs.grassPlanes.data[s].size,
                collide: "123"
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new ts(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new ts(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new ts(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, i, a)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new p(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: L(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird, this.angryBird.userData.speed = L(8, 13) / 100, this.angryBird.userData.flying = !0), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
                x: this.angryBird.userData.body.translation().x -= this.angryBird.userData.speed,
                y: this.angryBird.userData.body.translation().y,
                z: this.angryBird.userData.body.translation().z
            }), this.angryBird.userData.body.translation().x < this.players[this.maxSpeed()].player.position.x - 20 && (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: 20,
                z: this.angryBird.userData.body.translation().z
            }), this.angryBird.userData.flying = !1)));
        }
        makeGlowSprite() {
            const s = new At(new St({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: ks
            }));
            return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
        }
        lampsAnimate() {
            let s = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.x - this.bounds.rightX / 1.3, t = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((e, o)=>{
                    e.pointLight;
                    const n = e.position.x >= a && e.position.x <= t, r = o;
                    if (n && !e.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        e.pointLight = h, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const h = e.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), e.glow.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 0);
                        const u = n ? this.lightIntensity : 0;
                        h.intensity = es.lerp(h.intensity, u, .15);
                        const c = n ? 1 : 0;
                        this._emissive[r] = es.lerp(this._emissive[r], c, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const y = .5 + this._emissive[r] * .8;
                        e.glow && e.glow.scale.setScalar(y);
                        const w = 1.1, m = this._emissive[r], d = 1 + w * m, f = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[r];
                        C.userData._lastBulbFactor !== d && (C.size.set(f.x * d, f.y * d, f.z * d), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = d, s = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((t, e)=>{
                    const o = t.pointLight;
                    o && (o.intensity = es.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), t.pointLight = null, t.userData.light = !1, t.glow && (this.scene.remove(t.glow), this.glowPool.push(t.glow), t.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), a = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0);
                    const n = 1.1, r = this._emissive[e], h = 1 + n * r, u = this.objs.bulbs.baseSize, c = this.objs.bulbs.data[e];
                    c.userData._lastBulbFactor !== h && (c.size.set(u.x * h, u.y * h, u.z * h), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), c.userData._lastBulbFactor = h, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.y - this.bounds.topY / 2, t = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((e, o)=>{
                    e.pointLight;
                    const n = e.position.y >= a && e.position.y <= t, r = o;
                    if (n && !e.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        e.pointLight = h, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const h = e.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), e.glow.position.copy(e.position);
                        const u = n ? this.lightIntensity : 0;
                        h.intensity = es.lerp(h.intensity, u, .15);
                        const c = n ? 1 : 0;
                        this._emissive[r] = es.lerp(this._emissive[r], c, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const y = .8 + this._emissive[r] * .8;
                        e.glow && e.glow.scale.setScalar(y);
                        const w = 1, m = this._emissive[r], d = 1 + w * m, f = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[r];
                        C.userData._lastBulbFactor !== d && (C.size.set(f.x * d, f.y * d, f.z * d), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = d, s = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((t, e)=>{
                    const o = t.pointLight;
                    !t.pointLight && this._emissive[e] === 0 || (o && (o.intensity = es.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), t.pointLight = null, t.userData.light = !1, t.glow && (this.scene.remove(t.glow), this.glowPool.push(t.glow), t.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), a = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0));
                }), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed(s = !1) {
            let i;
            if (s ? i = this.players.filter((e, o, n)=>e.player.userData.live) : i = this.players, i.length === 0) return -1;
            let a = 0, t;
            this.paramsClass.gameDir == "vert" ? t = i[0].player.position.y : t = i[0].player.position.x;
            for(let e = 1; e < i.length; e++)i[e].player && i[e].player.userData.live && i[e].player.position && (this.paramsClass.gameDir == "vert" ? i[e].player.position.y > t && (t = i[e].player.position.y, a = e) : i[e].player.position.x > t && (t = i[e].player.position.x, a = e));
            return s ? this.players.indexOf(i[a], 0) : a;
        }
        async loadPlayers() {
            for(let s = 0; s < this.players.length; s++){
                let i = this.players[s];
                i.player.position.x = i.player.position.x - s * 1 + 1, this.physicsClass.addPhysicsToObject(i.player), this.paramsClass.gameDir == "vert" && (i.player.position.y = -0, i.player.userData.collider.setFriction(500)), await i.loadPlayerModel(), i.player.userData.startPos = i.player.position.clone(), this.scene.add(i.player), this.scene.add(i.playerOut), this.scene.add(i.playerModel), this.playerOuts.push(i.playerOut), s < this.players[0].playerColors.length ? i.head.children[0].material.color.set(this.players[0].playerColors[s]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), i.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > s ? i.player.userData.audio.push(this.audioClass.quacks[s].clone()) : i.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(s, i = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = (this.isMobile, 3), s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const a = this.maxSpeed(!0);
                        if (a >= 0) {
                            let t = 0;
                            this.players.length > 1 ? t = this.players[a].player.position.x : this.paramsClass.gameDir == "hor" && (t = this.players[a].player.position.x + this.bounds.rightX / 2);
                            const e = this.cam.maxBackJump;
                            t < this.cam.targetX - e ? this.cam.targetX = this.cam.targetX - e : this.cam.targetX = t;
                            const o = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .25, i);
                            s.position.x = o.newPos, this.cam.velX = o.newVel, s.position.y = (this.isMobile, 3), s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                        }
                        break;
                    }
                case 3:
                    this.getHorizontalWorldBounds(), this.gameClass.gameStarting && (s.position.y += this.cameraSpeed), s.position.x = 0, s.position.z = this.isMobile ? 20 : 32, this.cameraSpeed += 1e-6, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 4:
                    this.getHorizontalWorldBounds(), this.gameClass.gameStarting && (s.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), s.position.x = 0, s.position.z = this.isMobile ? 25 : 32, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
            }
        }
        damp(s, i, a, t) {
            return s + (i - s) * (1 - Math.exp(-a * t));
        }
        spring(s, i, a, t, e) {
            const o = 2 / t, n = o * e, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = s - i;
            const u = (a + o * h) * e, c = (a - o * u) * r;
            return {
                newPos: i + (h + u) * r,
                newVel: c
            };
        }
        showPopupInGame(s = !1, i = !1) {
            this.gameClass.pause ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn1")) : (this.gameClass.showGamePopup = !0, this.levelsMode ? this.players.every((a)=>a.player.userData.finish) ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15")) : (this.hideScreen("popup_game_btn15"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win")) : (!s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play())), this.showScreen("popup_in_game");
        }
        rebindButton(s, i) {
            const a = document.querySelector(s), t = a.cloneNode(!0);
            return a.parentNode.replaceChild(t, a), t.addEventListener("click", i), t;
        }
        menuInGame = ()=>{
            this.rebindButton(".popup_game_btn1", ()=>{
                this.hideScreen("popup_in_game"), this.boostHatModels.forEach((s, i, a)=>{
                    s.userData.fly = !1;
                }), this.players[0].playerAliving(!1), this.players[0].player.userData.lives = 1, this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1), this.gameClass.showGamePopup = !1;
            }), this.rebindButton(".popup_game_btn2", ()=>{
                this.audioClass.hardStopAll(), this.players.forEach((s, i, a)=>{
                    s.player.userData.live = !1, s.player.userData.body.setTranslation(new p(0, -5, 0)), s.player.userData.finish = !1, s.playerAliving(!0);
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((s, i, a)=>{
                    s.position.x = this.boostHatCoords[i][0], s.position.y = this.boostHatCoords[i][1], s.userData.fly = !1;
                });
                for(let s = 0; s < this.objs.livesBlocks.data.length; s++)this.objs.livesBlocks.data[s].position = this.objs.livesBlocks.data[s].userData.startPos, this.apply(s, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.hideScreen("popup_in_game"), this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.audioClass.stopMusic([
                    "ocean"
                ]), this.audioClass.playMusic([
                    "ocean"
                ]), this.hideScreen("popup_in_game"), this.gameClass.pause = !1, this.gameClass.showGamePopup = !1;
            }), this.rebindButton(".popup_game_btn15", ()=>{
                this.audioClass.hardStopAll(), this.paramsClass.dataLoaded = !1, dt(this.scene), this.audioClass.stopMusic(0), this.hideScreen("popup_in_game"), setTimeout(()=>{
                    let s = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 777;
                    this.initMatch(this.players.length, this.gameNum, s, this.birdYes);
                }, 100), this.players.forEach((s, i, a)=>{
                    s.playerAliving(!0);
                }), this.gameClass.showGamePopup = !1;
            }), this.rebindButton(".popup_game_btn3", ()=>{
                this.audioClass.hardStopAll(), this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.paramsClass.dataLoaded = !1, dt(this.scene), this.audioClass.stopMusic(0);
            });
        };
        hideScreen(s) {
            document.querySelector(`.${s}`).classList.add("hidden_screen");
        }
        showScreen(s) {
            document.querySelector(`.${s}`).classList.remove("hidden_screen");
        }
    }
    class hs {
        constructor(s, i){
            this.world = s, this.RAPIER = i, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Ys;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const i = s.geometry;
            i.computeBoundingBox();
            const a = new p;
            i.boundingBox.getSize(a);
            const t = new p(1 / (a.x || 1), 1 / (a.y || 1), 1 / (a.z || 1));
            return s.userData.invBase = t, t;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s.clone() : new p(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, i, a) {
            const t = hs._toVec3(a.size), e = hs._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = a.quaternion?.isQuaternion ? a.quaternion : new Ms, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.x, e.y, e.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), r = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(r, n), this.instancedBodies.push({
                mesh: s,
                index: i,
                size: t,
                body: n
            });
        }
        addInstancedStatic(s, i, a, t) {
            const e = hs._toVec3(t.size), o = hs._toVec3(t.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = t.quaternion?.isQuaternion ? t.quaternion : new Ms, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(1.6).setRestitution(0);
            s[a].userData.body = r, s[a].userData.shape = h, s[a].userData.collide = this.world.createCollider(h, r), this.instancedBodies.push({
                mesh: i,
                index: a,
                size: e,
                body: r
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, i = new Set;
            for (const a of this.instancedBodies){
                const t = hs._ensureInvBase(a.mesh), e = a.body.translation(), o = a.body.rotation();
                s.position.set(e.x, e.y, e.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(a.size.x * t.x, a.size.y * t.y, a.size.z * t.z), s.updateMatrix(), a.mesh.setMatrixAt(a.index, s.matrix), i.add(a.mesh);
            }
            for (const a of i)a.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let i, a;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new ys().setFromObject(s);
                const e = Rs(s);
                s.rotation.copy(t), s.userData.size = e, s.userData.orgRotation = t, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = i, s.userData.shape = a;
                let o = i;
                a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(a, i);
                s.userData.collider = n, s.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    s,
                    i,
                    s.id
                ]);
            } else if (s != null && s.userData.name.includes("tops")) {
                let i, a;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new ys().setFromObject(s);
                const e = Rs(s);
                s.rotation.copy(t), s.userData.size = e, s.userData.orgRotation = t, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setMass(1).setRestitution(0).setFriction(.3), a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(a, i);
                s.userData.body = i, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = i.handle, this.dynamicBodies.push([
                    s,
                    i,
                    s.id
                ]), s.userData.playerHandlesInside = new Set, this.allTops.push(s);
            } else if (s != null && s.userData.name.includes("bird")) {
                let i, a;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new ys().setFromObject(s);
                const e = Rs(s);
                s.rotation.copy(t), s.userData.size = e, s.userData.orgRotation = t, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setMass(1).setRestitution(1).setFriction(0), a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(a, i);
                s.userData.body = i, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = i.handle, this.dynamicBodies.push([
                    s,
                    i,
                    s.id
                ]);
            }
        }
    }
    const Fs = new p;
    function Rs(l) {
        if (l.isMesh && l.geometry) {
            const i = l.geometry;
            return i.boundingBox || i.computeBoundingBox(), i.boundingBox.getSize(Fs), Fs.multiply(l.scale), Fs.clone();
        }
        return new ys().setFromObject(l).getSize(new p);
    }
    class ne {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.looseAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicNowPlaying = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2, this._attached = !1, this.listener = new zt, this.musicOn = !0;
        }
        hardStopAll() {
            this.musics.forEach(({ music: s })=>{
                try {
                    s.stop();
                } catch  {}
            }), this.quacks.forEach((s)=>{
                try {
                    s.stop();
                } catch  {}
            }), this.thundersAudio.forEach((s)=>{
                try {
                    s.music.stop();
                } catch  {}
            }), this.musicNowPlaying = [];
        }
        toggleMute(s) {
            s ? (this.musicOn = !1, this.listener.context.suspend()) : (this.musicOn = !0, this.listener.context.resume(), this.playMusic([
                "back"
            ]));
        }
        isMuted() {
            return this.listener.context.state === "suspended";
        }
        attachTo(s) {
            this._attached || (s.add(this.listener), this._attached = !0);
        }
        async loadAudio() {
            const s = new kt;
            await s.loadAsync("audio/back1.mp3").then((i)=>{
                this.backAudio = new B(this.listener), this.backAudio.setBuffer(i), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/back2.mp3").then((i)=>{
                this.backAudio2 = new B(this.listener), this.backAudio2.setBuffer(i), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/back3.mp3").then((i)=>{
                this.backAudio3 = new B(this.listener), this.backAudio3.setBuffer(i), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(.5), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/ocean.mp3").then((i)=>{
                this.oceanAudio = new B(this.listener), this.oceanAudio.setBuffer(i), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/inwater.mp3").then((i)=>{
                this.inwaterAudio = new B(this.listener), this.inwaterAudio.setBuffer(i), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/loose.mp3").then((i)=>{
                this.looseAudio = new B(this.listener), this.looseAudio.setBuffer(i), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/take.mp3").then((i)=>{
                this.takeAudio = new B(this.listener), this.takeAudio.setBuffer(i), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/ready-jump.mp3").then((i)=>{
                this.readyJumpAudio = new B(this.listener), this.readyJumpAudio.setBuffer(i), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(1e3), this.readyJumpAudio.setVolume(200), this.readyJumpAudio.setPlaybackRate(2), this.musics.push({
                    name: "readyJump",
                    music: this.readyJumpAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/quack1.mp3").then((i)=>{
                this.jumpAudio = new B(this.listener), this.jumpAudio.setBuffer(i), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(2e3), this.jumpAudio.setVolume(2), this.quacks.push(this.jumpAudio), this.musics.push({
                    name: "quack1",
                    music: this.jumpAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/quack2.mp3").then((i)=>{
                this.jumpAudio2 = new B(this.listener), this.jumpAudio2.setBuffer(i), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2), this.musics.push({
                    name: "quack2",
                    music: this.jumpAudio2
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/quack3.mp3").then((i)=>{
                this.jumpAudio3 = new B(this.listener), this.jumpAudio3.setBuffer(i), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3), this.musics.push({
                    name: "quack3",
                    music: this.jumpAudio3
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/rain.mp3").then((i)=>{
                this.rainAudio = new B(this.listener), this.rainAudio.setBuffer(i), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1), this.musics.push({
                    name: "rain",
                    music: this.rainAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/thunder.mp3").then((i)=>{
                this.thunderAudio = new B(this.listener), this.thunderAudio.setBuffer(i), this.thunderAudio.setLoop(!1), this.thunderAudio.setRefDistance(400), this.thunderAudio.setVolume(1), this.thundersAudio.push({
                    name: "thunder1",
                    music: this.thunderAudio
                }), this.musics.push({
                    name: "thunder1",
                    music: this.rainAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/thunder2.mp3").then((i)=>{
                this.thunderAudio2 = new B(this.listener), this.thunderAudio2.setBuffer(i), this.thunderAudio2.setLoop(!1), this.thunderAudio2.setRefDistance(400), this.thunderAudio2.setVolume(1), this.thundersAudio.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                }), this.musics.push({
                    name: "thunder2",
                    music: this.rainAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await s.loadAsync("audio/thunder3.mp3").then((i)=>{
                this.thunderAudio3 = new B(this.listener), this.thunderAudio3.setBuffer(i), this.thunderAudio3.setLoop(!1), this.thunderAudio3.setRefDistance(400), this.thunderAudio3.setVolume(1), this.thundersAudio.push({
                    name: "thunder3",
                    music: this.thunderAudio3
                }), this.musics.push({
                    name: "thunder3",
                    music: this.rainAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), this.musics.push({
                name: "back",
                music: this.backAudio
            });
        }
        stopMusic(s) {
            this.musicOn && (s == 0 ? this.musics.forEach((i, a, t)=>{
                i.music.stop();
            }) : s.forEach((i, a, t)=>{
                this.musics.find((e)=>e.name === i).music.stop();
            }));
        }
        pauseMusic(s) {
            this.musicOn && s.forEach((i, a, t)=>{
                this.musics.find((e)=>e.name === i).music.pause();
            });
        }
        playMusic(s) {
            s.forEach((i, a, t)=>{
                let e = this.musics.find((o)=>o.name === i).music;
                !e.isPlaying && this.musicOn && e.play();
            });
        }
        togglePauseAll(s) {
            this.musicOn && (s ? (this.musicNowPlaying = [], this.musics.forEach(({ music: i })=>{
                i.isPlaying && (i.pause(), this.musicNowPlaying.push(i));
            })) : this.musicNowPlaying && this.musicNowPlaying.length && (this.musicNowPlaying.forEach((i)=>{
                i.isPlaying || i.play();
            }), this.musicNowPlaying = []));
        }
        dayNight(s = !0, i = !1) {
            s && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((a)=>a.name === "back").music = this.musics.find((a)=>a.name === "back1").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((a)=>a.name === "back").music = this.musics.find((a)=>i ? a.name === "back3" : a.name === "back2").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class re {
        constructor(s, i, a, t, e, o){
            this.levelClass = s, this.isMobile = i, this.renderer = a, this.camera = t, this.paramsClass = e, this.audioClass = o, this.mouse = new p, this.raycaster = new Lt;
        }
        addKeyListeners() {
            const s = this.renderer.domElement;
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), s.addEventListener("mousedown", this.onKeyDown), s.addEventListener("mouseup", this.onKeyUp), s.addEventListener("touchstart", this.onTapDown, {
                passive: !1
            }), s.addEventListener("touchend", this.onTapUp);
        }
        removedKeyListeners() {
            const s = this.renderer.domElement;
            window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), s.removeEventListener("mousedown", this.onKeyDown), s.removeEventListener("mouseup", this.onKeyUp), s.removeEventListener("touchstart", this.onTapDown), s.removeEventListener("touchend", this.onTapUp);
        }
        onTapDown = (s)=>{
            let i = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - i.left) / i.width * 2 - 1, this.mouse.y = -((s.clientY - i.top) / i.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.downKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.downKeys(this.levelClass.players[1].player) : this.downKeys(this.levelClass.players[2].player));
        };
        onTapUp = (s)=>{
            let i = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - i.left) / i.width * 2 - 1, this.mouse.y = -((s.clientY - i.top) / i.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.upKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.upKeys(this.levelClass.players[1].player) : this.upKeys(this.levelClass.players[2].player));
        };
        onKeyDown = (s)=>{
            switch(s.code){
                case void 0:
                    this.isMobile || this.downKeys(this.levelClass.players[0].player);
                    break;
                case "KeyW":
                case "ArrowUp":
                    break;
                case "KeyZ":
                case "ArrowDown":
                    this.downKeys(this.levelClass.players[1].player);
                    break;
                case "KeyM":
                case "ArrowLeft":
                    this.downKeys(this.levelClass.players[2].player);
                    break;
            }
        };
        onKeyUp = (s)=>{
            switch(s.code){
                case void 0:
                    this.isMobile || this.upKeys(this.levelClass.players[0].player);
                    break;
                case "KeyW":
                case "ArrowUp":
                    break;
                case "KeyZ":
                case "ArrowDown":
                    this.upKeys(this.levelClass.players[1].player);
                    break;
                case "KeyM":
                case "ArrowLeft":
                    this.upKeys(this.levelClass.players[2].player);
                    break;
            }
        };
        downKeys(s) {
            s.userData.live && (s.userData.onGround ? (!s.userData.readyJump && this.audioClass.musicOn && s.userData.audio[0].play(), s.userData.readyJump = !0) : s.userData.canFly && (s.userData.readyJump = !0, !s.userData.readyJump && this.audioClass.musicOn && s.userData.audio[0].play()));
        }
        upKeys(s) {
            s.userData.live && (s.userData.canFly && !s.userData.onGround && s.userData.canFlyJumps > 0 && (s.userData.canFlyJumps--, s.userData.canFlyJumps == 0 && setTimeout(()=>{
                s.userData.canFly = !1, this.levelClass.boostHatModels[s.userData.canFlyNum].userData.fly = !1;
            }, 1e3)), s.userData.readyJump && s.userData.onGround ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), !s.userData.audio[1].isPlaying && this.audioClass.musicOn && s.userData.audio[1].play(), s.userData.onGround = !1) : s.userData.onGround || (s.userData.canFly ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), !s.userData.audio[1].isPlaying && this.audioClass.musicOn && s.userData.audio[1].play(), s.userData.onGround = !1, s.userData.hatBoost--, s.userData.hatBoost == 0 && (s.userData.canFly = !1, setTimeout(()=>{
                this.levelClass.boostHatModels[s.userData.numHatBoost].userData.fly = !1;
            }, 500))) : (s.userData.readyJump = !1, s.userData.audio[0].stop())));
        }
    }
    class le {
        constructor(s, i, a, t, e, o){
            this.scene = s, this.camera = i, this.renderer = a, this.paramsClass = t, this.isMobile = e, this.audioClass = o, this.ambientLight = new _t(11184810, 1), this.hemiLight = new Bt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ht(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Ys, this.dirLight.target = this.targetObject, this.helper = new Et(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.activeLightningLines = [], this.lightningMaterialBase = new Tt({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: ks,
                depthWrite: !1
            }), this.clock = new Bs, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 25, this.rainAreaHalfDepth = 22, this.rainTopY = 10, this.rainBottomY = -4, this.rainGeometry = new ws, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let i = 0; i < this.rainDropCount; i++){
                const a = i * 3;
                this.rainPositions[a + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[a + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[a + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[i] = 15 + Math.random() * 15, this.rainWindPhase[i] = Math.random() * Math.PI * 2;
            }
            const s = new Float32Array(this.rainDropCount * 3);
            for(let i = 0; i < this.rainDropCount; i++){
                const a = .8 + Math.random() * .2;
                s[i * 3 + 0] = .7 * a, s[i * 3 + 1] = .8 * a, s[i * 3 + 2] = 1 * a;
            }
            this.rainGeometry.setAttribute("position", new ls(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new ls(s, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new mt({
                color: 15658751,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .8,
                transparent: !0,
                opacity: .84,
                size: 9,
                sizeAttenuation: !1,
                depthWrite: !1,
                blending: ks
            }), this.rainPoints = new Is(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Ns(900, 500), this.water = new Ft(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new yt().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = xs;
                }),
                sunDirection: new p,
                sunColor: 16755370,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -2 : this.water.position.y = -2, this.sun = new p, this.sky = new Rt, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new Ds(new Ns(1e4, 1e4), new Vs({
                color: 526362,
                side: Gt,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const i = 1500, a = new Float32Array(i * 3), t = new Float32Array(i), e = new Float32Array(i * 3);
            for(let h = 0; h < i; h++){
                a[3 * h] = Math.random() * 600 - 300, a[3 * h + 1] = Math.random() * 150 - 100, a[3 * h + 2] = Math.random() * 300 - 500, t[h] = Math.random() * 2 + .7;
                const u = new ts().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                e[3 * h] = u.r, e[3 * h + 1] = u.g, e[3 * h + 2] = u.b;
            }
            const o = new ws;
            o.setAttribute("position", new ls(a, 3)), o.setAttribute("size", new ls(t, 1)), o.setAttribute("color", new ls(e, 3));
            const n = `
  attribute float size;
  varying vec3 vColor;
  varying float vRandom;

  void main() {
    vColor = color;
    vRandom = size;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = size * (300.0 / -mvPosition.z); // масштабирование по перспективе
    gl_Position = projectionMatrix * mvPosition;
  }
`, r = `
  uniform float opacity;
varying vec3 vColor;
varying float vRandom;
uniform float time;

void main() {
  float dist = distance(gl_PointCoord, vec2(0.5, 0.5));
  float alpha = smoothstep(0.5, 0.45, dist);

  // Мерцание (анимируем альфу)
  float twinkle = 0.7 + 0.5 * sin(time * 2.0 + vRandom * 10.0);

  // Главная строка: альфа теперь умножается на uniform opacity!
  gl_FragColor = vec4(vColor, alpha * twinkle * opacity);
}
`;
            this.materialStars = new It({
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
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: ks
            }), this.stars = new Is(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, i = Math.sign(s - this._prevCamX);
            this._prevCamX = i, this.stars.position.x = this.camera.position.x;
            const a = es.degToRad(90 - this.parameters.elevation), t = es.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, a, t), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), this.parameters.elevation < 2 && !this.rainStart && (this.rain = !0, this.startRain(), this.audioClass.musicOn && this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1, this.rain && this.parameters.elevation >= -3 && (this.audioClass.rainAudio.stop(), this.rainStart = !1, this.scene.remove(this.rainPoints), this.rain = !1))), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const e = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= e * .05, this.blackSky.material.opacity += e * .02, this.materialStars.uniforms.opacity.value += e * .008, this.camera.position.y < this.topLight && e < 0 ? (this.dirLight.intensity -= e * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= e * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= e * .05, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && e > 0 && (this.dirLight.intensity -= e * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= e * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= e * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && this.camera.position.y > 10 && (this.topLight = this.camera.position.y), this.prevCameraYSun = this.camera.position.y, this.camera.position.y > 30 ? this.night = !0 : this.night = !1;
            }
            this.materialStars.uniforms.time.value = performance.now() * .001;
        }
        waterUpdate() {
            performance.now() * .001, this.water.material.uniforms.time.value += .4 / 60;
        }
        async loadWorld() {
            await this.loadWaterSky(), await this.loadRain(), this.scene.add(this.hemiLight), this.scene.add(this.dirLight), this.scene.add(this.targetObject), this.scene.add(this.water);
        }
        updateLighting() {
            const s = performance.now();
            this.thunder && (s >= this.nextThunderFlashTimestampMs && (this.triggerThunderFlashNow(), this.scheduleNextThunderFlash(s)), s >= this.thunderEndTimestampMs && (this.thunder = !1, this.isThunderActive = !1)), this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);
            const i = 10;
            this.dirLight.shadow.camera.left = -i, this.dirLight.shadow.camera.right = i, this.dirLight.shadow.camera.top = i, this.dirLight.shadow.camera.bottom = -i, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let a = this.activeLightningLines.length - 1; a >= 0; a--){
                const t = this.activeLightningLines[a];
                t.userData.life -= this.deltaSeconds / 1.5, t.material.opacity *= .78, (t.userData.life <= 0 || t.material.opacity <= .02) && (this.scene.remove(t), t.geometry.dispose(), t.material.dispose(), this.activeLightningLines.splice(a, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const a = this.rainGeometry.getAttribute("position"), t = Math.sin(performance.now() * .0012) * .8, e = this.camera.position.x, o = this.camera.position.z;
                for(let n = 0; n < this.rainDropCount; n++){
                    const r = n * 3, h = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + t * .4;
                    this.rainPositions[r + 0] += h * this.deltaSeconds * 6, this.rainPositions[r + 1] -= this.rainVelocities[n] * (1 + Math.abs(t) * .3) * this.deltaSeconds, e + this.rainPositions[r + 0], o + this.rainPositions[r + 2], this.rainPositions[r + 1] < this.rainBottomY && (this.rainPositions[r + 1] = this.rainTopY, this.rainPositions[r + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[r + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[r + 0] > this.rainAreaHalfWidth && (this.rainPositions[r + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[r + 0] < -this.rainAreaHalfWidth && (this.rainPositions[r + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[r + 2] > this.rainAreaHalfDepth && (this.rainPositions[r + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[r + 2] < -this.rainAreaHalfDepth && (this.rainPositions[r + 2] += this.rainAreaHalfDepth * 2 - 35);
                }
                this.rainPoints.position.set(e, 0, o), a.needsUpdate = !0;
            }
            this.waterUpdate(), this.updateSky();
        }
        startRain() {
            this.rain && this.scene.add(this.rainPoints);
        }
        startThunder() {
            if (!this.thunder) return;
            const s = performance.now();
            this.isThunderActive = !0, this.thunderEndTimestampMs = s + 16e3, this.triggerThunderFlashNow(), this.scheduleNextThunderFlash(s);
        }
        triggerThunderFlashNow() {
            if (!this.thunder) return;
            const s = this.audioClass.thundersAudio;
            if (s && s.length > 0) {
                const i = s[this.currentThunderIndex % s.length].music;
                i.isPlaying && i.stop(), this.audioClass.musicOn && i.play(), this.currentThunderIndex++;
            }
            this.triggerLightningFlash(), this.lightningFade = 1;
        }
        scheduleNextThunderFlash(s) {
            const i = this.minThunderIntervalMs + Math.random() * (this.maxThunderIntervalMs - this.minThunderIntervalMs);
            this.nextThunderFlashTimestampMs = s + i;
        }
        stopThunderImmediately() {
            this.thunder = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0;
        }
        createLightningBolt(s, i, a) {
            const t = s + (Math.random() - .5) * 6, e = -4 + Math.random() * 3, o = a + (Math.random() - .5) * 6, n = t - s, r = e - i, h = o - a, u = Math.hypot(n, r, h) || 1, c = n / u, y = r / u, w = h / u, m = n / u, f = -(h / u), C = 0, is = m, g = Math.abs(y) > .9 ? new p(1, 0, 0) : new p(0, 1, 0), A = new p(c, y, w), q = new p().crossVectors(A, g).normalize(), v = new p().crossVectors(A, q).normalize(), j = 2 + Math.random() * 2, F = 1.2, T = Math.random() * Math.PI * 2, E = 3 + Math.random() * 2.5, G = .8, ps = Math.random() * Math.PI * 2, x = 28, P = 4, U = [];
            for(let D = 0; D <= x; D++){
                const k = D / x, S = 1 - k;
                let O = s + n * k, as = i + r * k, X = a + h * k;
                const V = Math.sin(k * Math.PI * j + T) * F * (.3 + .7 * S), K = Math.sin(k * Math.PI * E + ps) * G * (.3 + .7 * S), Z = (Math.random() - .5) * 2 * P * S, I = (Math.random() - .5) * 1.6 * P * S, R = Math.random() < .12 ? (Math.random() - .5) * 3.5 * S : 0;
                if (O += q.x * (V + Z + R) + v.x * (K + I * .7), as += q.y * (V + Z * .5) + v.y * (K + I * .5), X += q.z * (V + Z + R) + v.z * (K + I * .7), U.push(O, as, X), D > 3 && D < x - 3 && Math.random() < .22) {
                    const os = [], bs = 3 + Math.floor(Math.random() * 2), ns = .25 + Math.random() * .35;
                    let gs = O, fs = as, vs = X;
                    os.push(gs, fs, vs);
                    for(let Ss = 1; Ss <= bs; Ss++)gs += (Math.random() - .5) * P * ns, fs += -(.8 + Math.random() * .8) * ns, vs += (Math.random() - .5) * P * ns, os.push(gs, fs, vs);
                    const As = new ws;
                    As.setAttribute("position", new Qs(os, 3));
                    const cs = new st(As, this.lightningMaterialBase.clone());
                    cs.material.opacity = .6, cs.userData.life = .16 + Math.random() * .12, this.scene.add(cs), this.activeLightningLines.push(cs);
                }
            }
            const us = 2;
            for(let D = -1; D <= us; D++){
                const k = D === -1, S = k ? 0 : D % 2 === 0 ? 1 : -1, O = .55 + Math.random() * .45, as = .35, X = Math.random() * Math.PI * 2, V = [], K = U.length / 3;
                for(let R = 0; R < K; R++){
                    const os = R / (K - 1), bs = .35 + .85 * os, ns = Math.sin(os * Math.PI * 2 + X) * as * (.2 + .8 * os), gs = f * S * O * bs + is * ns * .3, fs = C * S * O * bs + ns * .05, vs = is * S * O * bs - f * ns * .3, As = R * 3 + 0, cs = R * 3 + 1, Ss = R * 3 + 2, Xs = U[As], Ks = U[cs], Zs = U[Ss];
                    k ? V.push(Xs + (Math.random() - .5) * .05, Ks + (Math.random() - .5) * .05, Zs + (Math.random() - .5) * .05) : V.push(Xs + gs + (Math.random() - .5) * .2, Ks + fs + (Math.random() - .5) * .2, Zs + vs + (Math.random() - .5) * .2);
                }
                const Z = new ws;
                Z.setAttribute("position", new Qs(V, 3));
                const I = new st(Z, this.lightningMaterialBase.clone());
                I.material.opacity = k ? .95 : .32, I.userData.life = .22 + Math.random() * .18, this.scene.add(I), this.activeLightningLines.push(I);
            }
        }
        triggerLightningFlash() {
            const s = this.camera.position.x + (Math.random() - .5) * 30, i = 34 + Math.random() * 6, a = -10 - Math.random() * 20;
            this.createLightningBolt(s, i, a);
        }
        makeRainStreakTexture() {
            const a = new Uint8Array(60);
            for(let e = 0; e < 15; e++){
                const o = Math.sin(e / 14 * Math.PI);
                for(let n = 0; n < 1; n++){
                    const r = (e * 1 + n) * 4;
                    a[r + 0] = 255, a[r + 1] = 255, a[r + 2] = 255, a[r + 3] = Math.round(o * 255);
                }
            }
            const t = new Nt(a, 1, 15, Wt);
            return t.needsUpdate = !0, t.magFilter = tt, t.minFilter = tt, t.wrapS = et, t.wrapT = et, t.rotation = Math.PI / 2, t.center.set(.5, .5), t;
        }
    }
    class he {
        constructor(s, i, a, t){
            this.initMatch = s, this.loadLevels = i, this.gameClass = a, this.audioClass = t, this.loadLevels(), this.mainMenu(this.initMatch), this.playersNum = 2, this.levelPlayersNum = 1;
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("together_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", async ()=>{
                this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((s, i, a)=>{
                s.addEventListener("click", ()=>{
                    this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, i + 1, !0);
                });
            }), document.querySelectorAll(".level_game_chels").forEach((s, i, a)=>{
                s.addEventListener("click", ()=>{
                    document.querySelectorAll(".level_game_chels").forEach((t)=>{
                        t.classList.remove("level_game_chels_active");
                    }), s.classList.add("level_game_chels_active"), this.levelPlayersNum = i + 1;
                });
            }), document.querySelector(".free_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(1, 2);
            }), document.querySelector(".free_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(1, 4, !1, !1);
            }), document.querySelector(".together_game_btn1_1").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(this.playersNum, 1);
            }), document.querySelector(".together_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(this.playersNum, 2);
            }), document.querySelector(".together_game_btn1_3").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(this.playersNum, 3, !1, !1);
            }), document.querySelector(".together_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(this.playersNum, 4, !1, !1);
            }), document.querySelectorAll(".together_game_chels").forEach((s, i, a)=>{
                s.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((t)=>{
                        t.classList.remove("together_game_chels_active");
                    }), s.classList.add("together_game_chels_active"), this.playersNum = i + 2;
                });
            });
        };
        toggleLoader(s) {
            s ? document.querySelector(".loader_screen").classList.remove("hidden_screen") : document.querySelector(".loader_screen").classList.add("hidden_screen");
        }
        hideScreen(s) {
            document.querySelector(`.${s}`).classList.add("hidden_screen");
        }
        showScreen(s) {
            document.querySelector(`.${s}`).classList.remove("hidden_screen");
        }
    }
    class de {
        constructor(){
            this.gameDir = "vert", this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class pe {
        constructor(s){
            this.camera = s, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(s) {
            if (s = Math.max(0, Math.floor(s)), s === this.shownFloat) return;
            const i = pt, a = performance.now(), t = 200;
            function e(o) {
                const n = Math.min(1, (o - a) / t), r = 1 - Math.pow(1 - n, 4), h = Math.round(i + (s - i) * r);
                ue.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(e) : pt = s;
            }
            requestAnimationFrame(e);
        }
    }
    const ue = document.getElementById("meters-float");
    let pt = 0;
    class ce {
        constructor(){
            this.gameStarting = !1, this.pause = !1, this.visible = !0, this.showGamePopup = !1;
        }
    }
    console.clear();
    let qs, me = new Bs, bt, Ls, Cs, J, M, z, Ps, W, ms, b = new ce;
    const Us = [
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available",
        "available"
    ];
    let ye = Us.length;
    const ds = new qt;
    ds.background = new ts(13230580);
    const gt = ee({
        scene: ds
    }), ft = ie({
        scene: ds
    }), _ = new Ut(25, window.innerWidth / window.innerHeight, .1, 2e3);
    _.position.y = 2;
    const _s = Qt();
    function Js() {
        const l = (window.visualViewport?.height || window.innerHeight) * .01;
        document.documentElement.style.setProperty("--vh", `${l}px`);
    }
    Js();
    window.addEventListener("resize", Js);
    window.addEventListener("orientationchange", Js);
    let Ts = new Ot;
    document.body.appendChild(Ts.dom);
    Ts.dom.style.top = "0px";
    Ts.dom.style.left = "48%";
    const H = new Vt;
    H.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(H.domElement);
    H.shadowMap.enabled = !0;
    H.shadowMap.type = Yt;
    H.outputColorSpace = Jt;
    H.toneMapping = Xt;
    H.toneMappingExposure = 1.05;
    vt();
    window.addEventListener("resize", vt, !1);
    function vt() {
        _s ? (_.aspect = document.body.offsetWidth / document.body.offsetHeight, _.updateProjectionMatrix(), H.setSize(innerWidth, innerHeight)) : (_.aspect = document.body.offsetWidth / document.body.offsetHeight, _.updateProjectionMatrix(), H.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    document.body.addEventListener("touchstart", function() {
        document.body.requestFullscreen().then(()=>{
            screen.orientation.lock("landscape");
        });
    }, !1);
    async function be() {
        ct(!0), z = new ne, await z.loadAudio(), Ls = new he(wt, xe, b, z), ct(!1);
    }
    await be();
    async function ge(l) {
        const s = await $t(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        qs = new s.World(new s.Vector3(0, -9.81, 0)), bt = new s.EventQueue(!0), J = new hs(qs, s), ms = new pe(_), Cs = new le(ds, _, H, W, _s, z), M = new oe(ds, z, J, H, _, _s, W, Cs, wt, ye, b, gt, ft);
        for(let i = 0; i < l; i++)M.players.push(new ae(ds, z, M, W, _, b));
        Ps = new re(M, _s, H, _, W, z), Ps.addKeyListeners();
    }
    async function fe() {
        await Cs.loadWorld(), z.musicOn && z.backAudio.play(), z.musicOn && z.oceanAudio.play();
    }
    async function ve(l) {
        await M.createLevel(l), await M.loadEnvironments(), await M.loadPlayers(), M.objs.grassPlanes.data.length > 0 && M.objs.grassPlanes.data.forEach((s, i)=>{
            M.objs.grassPlanes.data[i].userData.collide.setCollisionGroups(Hs([
                0
            ], [
                1
            ]));
        }), M.players.length > 0 && M.players.forEach((s, i)=>{
            M.players[i].player.userData.collider.setCollisionGroups(Hs([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function wt(l, s, i = !1) {
        we(), Ls.toggleLoader(!0), W = new de, await ge(l), M.gameNum = s, await fe(), await ve(i), setTimeout(()=>{
            Ls.showScreen("hud"), Ls.toggleLoader(!1), W.dataLoaded = !0, b.gameStarting = !0;
        }, 300);
    }
    function we() {
        _.position.y = 2, _.position.x = 0, H.toneMappingExposure = 1.05, Ps?.removedKeyListeners(), Cs = null, J = null, M = null, Ps = null, W = null, ms = null;
    }
    function je() {
        if (!b.gameStarting && !b.showGamePopup && (document.querySelector(".menu_in_game").classList.contains("hidden_screen") || document.querySelector(".menu_in_game").classList.add("hidden_screen")), (b.pause || b.gameStarting && !b.showGamePopup) && (document.querySelector(".menu_in_game").classList.contains("hidden_screen") && document.querySelector(".menu_in_game").classList.remove("hidden_screen"), b.pause ? document.querySelector(".sound_btn_wrap").classList.add("hidden_screen") : document.querySelector(".sound_btn_wrap").classList.remove("hidden_screen")), b.gameStarting && (gt.update(Es), ft.update(Es)), W.dataLoaded && b.gameStarting) {
            W.gameDir == "hor" ? ms.updateMetersFloat(_.position.x - ms.startX) : ms.updateMetersFloat(_.position.y - ms.startY), M.players.forEach((l, s, i)=>{
                l.playerMove();
            }), Cs.updateLighting(), M.levelAnimate(_), M.cameraMove(_), Ts.update();
            for(let l = 0, s = J.dynamicBodies.length; l < s; l++)J.dynamicBodies[l][0].position.copy(J.dynamicBodies[l][1].translation()), J.dynamicBodies[l][0].quaternion.copy(J.dynamicBodies[l][1].rotation());
            J.updateInstancedTransforms(), qs.step(bt), b.gameStarting && H.render(ds, _);
        }
    }
    let Gs = 0;
    const Es = 1 / 60, ut = .1;
    H.setAnimationLoop(()=>{
        if (W != null) {
            let l = me.getDelta();
            for(l > ut && (l = ut), Gs += l; Gs >= Es;)je(), Gs -= Es;
        }
    });
    async function xe() {
        const l = document.querySelector(".levels_blocks");
        if (!l) return;
        l.classList.add("levels_blocks--reenter"), l.innerHTML = "";
        const s = document.createDocumentFragment(), i = (o)=>{
            switch(o){
                case "completed":
                    return {
                        modifierClass: "levels_block--completed",
                        labelText: "Пройден",
                        ariaState: "уровень пройден"
                    };
                case "available":
                    return {
                        modifierClass: "levels_block--available",
                        labelText: "Доступен",
                        ariaState: "уровень доступен"
                    };
                default:
                    return {
                        modifierClass: "levels_block--locked",
                        labelText: "Закрыт",
                        ariaState: "уровень закрыт"
                    };
            }
        }, a = 40, t = 60, e = 600;
        for(let o = 0; o < Us.length; o++){
            const n = Us[o], { modifierClass: r, labelText: h, ariaState: u } = i(n), c = document.createElement("div");
            c.className = `levels_block ${r}`, c.setAttribute("data-level", String(o + 1)), c.setAttribute("role", "button"), c.setAttribute("tabindex", n === "locked" ? "-1" : "0"), c.setAttribute("aria-label", `Уровень ${o + 1}, ${u}`);
            const y = Math.min(t + o * a, e);
            c.style.setProperty("--show-delay", `${y}ms`);
            const w = document.createElement("div");
            w.className = "levels_block_number", w.textContent = String(o + 1);
            const m = document.createElement("div");
            m.className = "levels_block_status";
            const d = document.createElement("span");
            d.className = `status_chip ${n === "completed" ? "status_chip--completed" : n === "available" ? "status_chip--available" : "status_chip--locked"}`, d.textContent = h, m.append(d), c.append(w, m), c.addEventListener("click", ()=>{
                n !== "locked" && (document.querySelectorAll(".levels_block").forEach((f)=>f.classList.remove("active")), c.classList.add("active"), console.log(`Выбран уровень ${o + 1}`));
            }), c.addEventListener("keydown", (f)=>{
                n !== "locked" && (f.key === "Enter" || f.key === " ") && (f.preventDefault(), c.click());
            }), s.append(c);
        }
        l.append(s), requestAnimationFrame(()=>{
            l.classList.remove("levels_blocks--reenter"), l.querySelectorAll(".levels_block").forEach((o)=>{
                o.classList.add("levels_block--enter");
            });
        });
    }
    function ct(l) {
        l ? document.querySelector(".loader_screen").classList.remove("hidden_screen") : document.querySelector(".loader_screen").classList.add("hidden_screen");
    }
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "visible" ? (!b.pause && !b.showGamePopup && (b.gameStarting = !0, z.togglePauseAll(!b.gameStarting)), b.visible = !0) : (!b.pause && !b.showGamePopup ? (b.gameStarting = !1, z.togglePauseAll(!b.gameStarting)) : b.pause || z.togglePauseAll(!b.gameStarting), b.visible = !1);
    });
    document.querySelector(".pause_btn").addEventListener("click", ()=>{
        (b.pause || b.gameStarting) && (b.pause = !b.pause, b.pause ? (b.gameStarting = !1, z.togglePauseAll(!b.gameStarting), M.showPopupInGame()) : (b.gameStarting = !0, z.togglePauseAll(!b.gameStarting), M.hideScreen("popup_in_game")));
    });
    document.querySelector(".sound_btn").addEventListener("click", ()=>{
        const l = z.isMuted();
        z.toggleMute(!l);
    });
})();

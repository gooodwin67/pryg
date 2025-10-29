import { B as xs, a as ls, P as mt, N as xt, b as Ns, c as Ws, C as Us, M as Vs, d as Ms, V as p, e as bs, Q as Cs, f as jt, g as es, h as js, i as rs, G as qs, E as X, j as as, S as Dt, k as Pt, l as Zs, I as ss, D as ts, m as Mt, n as Bs, O as Ys, T as yt, R as Ds, o as Ls, A as Ct, p as At, q as St, r as ks, s as F, t as _t, u as Lt, v as B, w as kt, x as zt, H as Bt, y as Ht, z as Tt, L as Et, W as Ft, F as Rt, J as It, K as Gt, U as Qs, X as st, Y as Nt, Z as Wt, _ as tt, $ as et, a0 as qt, a1 as Ot, a2 as Ut, a3 as Vt, a4 as Yt, a5 as Jt, a6 as Xt } from "./three-B76v5LAa.js";
(async ()=>{
    (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload")) return;
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);
        new MutationObserver((e)=>{
            for (const a of e)if (a.type === "childList") for (const o of a.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function t(e) {
            const a = {};
            return e.integrity && (a.integrity = e.integrity), e.referrerPolicy && (a.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? a.credentials = "include" : e.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function i(e) {
            if (e.ep) return;
            e.ep = !0;
            const a = t(e);
            fetch(e.href, a);
        }
    })();
    const Kt = "modulepreload", $t = function(h, s) {
        return new URL(h, s).href;
    }, at = {}, Zt = function(s, t, i) {
        let e = Promise.resolve();
        if (t && t.length > 0) {
            let l = function(c) {
                return Promise.all(c.map((u)=>Promise.resolve(u).then((m)=>({
                            status: "fulfilled",
                            value: m
                        }), (m)=>({
                            status: "rejected",
                            reason: m
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = n?.nonce || n?.getAttribute("nonce");
            e = l(t.map((c)=>{
                if (c = $t(c, i), c in at) return;
                at[c] = !0;
                const u = c.endsWith(".css"), m = u ? '[rel="stylesheet"]' : "";
                if (!!i) for(let d = o.length - 1; d >= 0; d--){
                    const v = o[d];
                    if (v.href === c && (!u || v.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${c}"]${m}`)) return;
                const y = document.createElement("link");
                if (y.rel = u ? "stylesheet" : Kt, u || (y.as = "script"), y.crossOrigin = "", y.href = c, r && y.setAttribute("nonce", r), document.head.appendChild(y), u) return new Promise((d, v)=>{
                    y.addEventListener("load", d), y.addEventListener("error", ()=>v(new Error(`Unable to preload CSS for ${c}`)));
                });
            }));
        }
        function a(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return e.then((o)=>{
            for (const n of o || [])n.status === "rejected" && a(n.reason);
            return s().catch(a);
        });
    };
    function _(h, s) {
        return Math.random() * (s - h) + h;
    }
    function Qt() {
        let h = window.matchMedia || window.msMatchMedia;
        return h ? h("(pointer:coarse)").matches : !1;
    }
    function it(h) {
        return h.reduce((s, t)=>s | 1 << t, 0);
    }
    function Hs(h, s) {
        const t = it(h), i = it(s);
        return "0x" + ((t & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
    }
    function ot(h) {
        const s = h.collisionGroups(), t = s >>> 16 & 65535, i = s & 65535;
        function e(a) {
            const o = [];
            for(let n = 0; n < 16; n++)a & 1 << n && o.push(n);
            return o;
        }
        return [
            e(t),
            e(i)
        ];
    }
    function se(h) {
        return typeof h == "number" ? new p(h, h, h) : h?.isVector3 ? h : new p(h?.x ?? 1, h?.y ?? 1, h?.z ?? 1);
    }
    function nt(h) {
        return h?.userData?.id ?? h?.uuid ?? h?.id;
    }
    const te = new bs(new p(-.5, -.5, -.5), new p(.5, .5, .5)), rt = new jt, lt = new Cs;
    function ht(h) {
        if (h?.isObject3D) {
            if (h.updateMatrixWorld(!0), h.geometry?.isBufferGeometry) {
                const e = h.geometry;
                if (e.boundingBox || e.computeBoundingBox(), e.boundingBox) {
                    const a = e.boundingBox.clone();
                    return a.applyMatrix4(h.matrixWorld), a;
                }
            }
            return new bs().setFromObject(h);
        }
        const s = h.position ?? h.pos ?? new p, t = se(h.size ?? 1), i = h.quaternion?.isQuaternion ? h.quaternion : h.rotation?.isEuler ? lt.setFromEuler(h.rotation) : lt.set(0, 0, 0, 1);
        return rt.compose(s, i, t), te.clone().applyMatrix4(rt);
    }
    function q(h, s) {
        const t = ht(h), i = nt(h);
        for(let e = s.length - 1; e >= 0; e--){
            const a = s[e], o = nt(a);
            if (i !== void 0 && o !== void 0 && i === o) continue;
            if (ht(a).intersectsBox(t)) return a;
        }
        return null;
    }
    function dt(h) {
        h.traverse((t)=>{
            t.userData?.persistent || (t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((i)=>i.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose());
        });
        const s = [];
        for (const t of h.children)t.userData?.persistent || s.push(t);
        s.forEach((t)=>h.remove(t));
    }
    function ee({ scene: h, maxParticles: s = 800, gravity: t = -7.8, drag: i = 2, texture: e = null, pointSize: a = .66, blending: o = xt } = {}) {
        if (!h) throw new Error("createSplashSystem: scene is required");
        function n() {
            const x = document.createElement("canvas");
            x.width = x.height = 64;
            const I = x.getContext("2d"), R = I.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
            R.addColorStop(0, "rgba(255,255,255,1)"), R.addColorStop(1, "rgba(255,255,255,0)"), I.fillStyle = R, I.fillRect(0, 0, 64, 64);
            const E = new Us(x);
            return E.anisotropy = 1, E.needsUpdate = !0, E;
        }
        const r = e || n(), l = new Float32Array(s * 3), c = new Float32Array(s * 3), u = new Float32Array(s), m = new Float32Array(s), b = new Float32Array(s), y = new Uint8Array(s), d = new xs;
        d.setAttribute("position", new ls(l, 3)), d.setAttribute("aSize", new ls(b, 1));
        const v = new mt({
            map: r,
            size: a,
            transparent: !0,
            depthWrite: !1,
            blending: o,
            vertexColors: !1,
            sizeAttenuation: !0
        }), j = new Ns(d, v);
        j.userData.persistent = !0, j.frustumCulled = !1, h.add(j);
        let T = 0;
        function f() {
            for(let w = 0; w < s; w++){
                const x = (T + w) % s;
                if (!y[x]) return T = (x + 1) % s, x;
            }
            return -1;
        }
        function A(w, x, I, R, E) {
            const N = x * 3;
            w[N] = I, w[N + 1] = R, w[N + 2] = E;
        }
        return {
            trigger (w, x = 1, I = {}) {
                const { count: R = 42, spread: E = .35, up: N = 3, horiz: cs = 2.2, ttl: D = [
                    .35,
                    .8
                ], sizeJitter: M = .5 } = I, V = Math.max(1, Math.floor(R * x));
                for(let us = 0; us < V; us++){
                    const C = f();
                    if (C === -1) break;
                    const k = Math.sqrt(Math.random()) * E, S = Math.random() * Math.PI * 2, Y = k * Math.cos(S), is = k * Math.sin(S), $ = Math.sqrt(Math.random()), J = Math.cos(S) * cs * $ * (.6 + .4 * Math.random()), Z = Math.sin(S) * cs * $ * (.6 + .4 * Math.random()), Q = N * (.6 + .4 * Math.random()), W = D[0] + Math.random() * (D[1] - D[0]), G = (1 - M / 2 + Math.random() * M) * 1;
                    A(l, C, w.x + Y, w.y, w.z + is), A(c, C, J * x, Q * x, Z * x), u[C] = W, m[C] = 0, b[C] = G, y[C] = 1;
                }
                d.attributes.position.needsUpdate = !0, d.attributes.aSize.needsUpdate = !0;
            },
            update (w) {
                if (w <= 0) return;
                const x = t, I = Math.max(0, i);
                let R = !1;
                for(let D = 0; D < s; D++){
                    if (!y[D]) continue;
                    if (R = !0, m[D] += w, m[D] >= u[D]) {
                        y[D] = 0;
                        const S = D * 3;
                        l[S] = 1e9, l[S + 1] = 1e9, l[S + 2] = 1e9;
                        continue;
                    }
                    const M = D * 3;
                    c[M + 1] += x * w;
                    const V = c[M], us = c[M + 1], C = c[M + 2], k = Math.max(0, 1 - I * w);
                    c[M] = V * k, c[M + 1] = us * k, c[M + 2] = C * k, l[M] += c[M] * w, l[M + 1] += c[M + 1] * w, l[M + 2] += c[M + 2] * w;
                }
                R && (d.attributes.position.needsUpdate = !0);
                let E = 0, N = 0;
                for(let D = 0; D < s; D++)y[D] && (E++, N += 1 - m[D] / u[D]);
                const cs = E ? .25 + .75 * (N / E) : 1;
                v.size = a * cs;
            },
            get object3D () {
                return j;
            },
            dispose () {
                h.remove(j), d.dispose(), v.dispose(), e || r.dispose();
            }
        };
    }
    function ae({ scene: h, size: s = 1.5, ttl: t = .9 } = {}) {
        const i = new Ws(1, 1), e = (()=>{
            const b = document.createElement("canvas");
            b.width = b.height = 64;
            const y = b.getContext("2d");
            return y.clearRect(0, 0, 64, 64), y.strokeStyle = "rgba(255,255,255,0.9)", y.lineWidth = 3, y.beginPath(), y.arc(32, 32, 20, 0, Math.PI * 2), y.stroke(), new Us(b);
        })(), a = new Vs({
            map: e,
            transparent: !0,
            depthWrite: !1
        }), o = new Ms(i, a);
        o.visible = !1, o.userData.persistent = !0, h.add(o);
        let n = 0, r = !1;
        const l = new p;
        function c(b) {
            l.copy(b), n = 0, r = !0, o.visible = !0;
        }
        function u(b, y) {
            if (!r) return;
            if (n += b, n >= t) {
                r = !1, o.visible = !1;
                return;
            }
            o.position.set(l.x, l.y + .01, l.z), o.rotation.set(-Math.PI / 2, 0, 0);
            const d = n / t, v = s * (1 + 1.6 * d);
            o.scale.setScalar(v), a.opacity = 1 - d;
        }
        function m() {
            h.remove(o), i.dispose(), a.dispose(), e.dispose();
        }
        return {
            trigger: c,
            update: u,
            dispose: m,
            mesh: o
        };
    }
    class ie {
        constructor(s, t, i, e, a, o, n){
            this.dataClass = s, this.scene = t, this.audioClass = i, this.levelClass = e, this.paramsClass = a, this.camera = o, this.gameClass = n, this.playerHeight = .9, this.playerWidth = .5, this.player = new Ms(new es(this.playerWidth, this.playerHeight, this.playerWidth), new js({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !0, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.maxLives = 3, this.player.userData.lives = this.player.userData.maxLives, this.player.userData.bonusHeart = 0, this.player.userData.finish = !1, this.player.userData.splash = !1, this.playerModel, this.playerOut = new Ms(new es(this.playerWidth, this.playerHeight + .1, this.playerWidth), new rs({
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
            await new qs().loadAsync("models/players/player1.glb").then((i)=>{
                const e = i.scene;
                this.playerModel = e, this.playerModel.traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if (this.levelClass.levelsMode && (this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            }) : this.levelClass.players.every((s)=>s.player.userData.finish || s.player.userData.lives <= 0) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            })), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), q(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, t] = ot(this.player.userData.collider);
                t[0] == 0 && this.player.userData.collider.setCollisionGroups(Hs([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, t] = ot(this.player.userData.collider);
                t[0] != 0 && this.player.userData.collider.setCollisionGroups(Hs([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && q(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(q(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(q(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(q(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]))), q(this.player, this.levelClass.objs.topPlanes.data) || q(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, q(this.player, this.levelClass.objs.livesBlocks.data) && !q(this.player, this.levelClass.objs.livesBlocks.data).userData.taked && this.player.userData.lives < this.player.userData.maxLives && (this.player.userData.lives++, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]), this.reLiveField(), q(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(this.player.userData.body.translation().x, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY - this.levelClass.bounds.bottomY) / 2 * 1.7 && this.player.userData.live && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && (this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "inwater"
            ])), this.levelClass.splash.trigger(new p(this.player.position.x, this.player.position.y + 0, this.player.position.z), 2), this.levelClass.ring.trigger(new p(this.player.position.x, this.player.position.y + .1, this.player.position.z))), this.player.userData.splash = !0), this.player.position.y < -4 && this.gameClass.gameStarting) this.player.userData.splash = !1, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                "back"
            ]), !this.player.userData.finish && this.gameClass.pause, this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.player.userData.finish ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0, !0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.player.userData.lives < 1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.levelClass.levelsMode && (this.player.userData.lives = 0), this.player.userData.finish, this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.gameClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, t, i)=>{
                s.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.musicOn && this.audioClass.playMusic([
                "back"
            ])), (!this.player.userData.live || this.player.userData.finish) && (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((s)=>s.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.paramsClass.gameDir == "vert" ? this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + 1.1, this.player.userData.deadPos.z)) : this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + _(1.1, 3.1), this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1)), this.reLiveField();
            else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, t = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, e = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, l = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, l, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const c = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, c, .4);
                const u = this.player.userData.readyJump ? .6 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, u, .1),
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
                const s = this.levelClass.boostHatModels[this.player.userData.canFlyNum], t = this.player.userData.head;
                s.userData.originalScale || (s.userData.originalScale = s.scale.clone()), s.parent !== this.scene && this.scene.attach(s), this.playerModel.updateMatrixWorld(!0), t.updateWorldMatrix(!0, !1);
                const i = new p().setFromMatrixPosition(this.player.userData.head.matrixWorld), e = new Cs;
                this.player.userData.head.getWorldQuaternion(e);
                const a = new Cs().setFromEuler(new X(0, Math.PI / 2, 0)), o = e.clone().multiply(a), r = new p(.01, .14, .05).clone().applyQuaternion(o);
                s.quaternion.copy(o), s.position.copy(i).add(r), s.children[0].children[1].rotation.y += .4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
            } else {
                const s = this.player.userData.canFlyNum;
                if (s !== null && this.levelClass.boostHatModels[s]) {
                    const t = this.levelClass.boostHatModels[s];
                    t.userData.lastPos && (t.position.copy(t.userData.lastPos), t.quaternion.copy(t.userData.lastQuat)), t.userData.fly = !1, t.children[0].children[1].rotation.y += .02;
                }
            }
        }
        lerp(s, t, i) {
            return s + (t - s) * i;
        }
        playerAliving(s) {
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, s && (this.levelClass.reloadLevel(this.levelClass.players.findIndex((t, i, e)=>t.player == this.player)), this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.levelClass.levelsMode ? this.player.userData.lives = 1 : this.player.userData.lives = this.player.userData.maxLives, this.reLiveField()), setTimeout(()=>{
                this.gameClass.gameStarting = !0, this.player.userData.splash = !1;
            }, 100);
        }
        reLiveField() {
            let s = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((i, e, a)=>i.player == this.player)].children, t = document.querySelectorAll(".num_bonus_heart")[this.levelClass.players.findIndex((i, e, a)=>i.player == this.player)];
            for(let i = 0; i < s.length; i++)i > this.player.userData.lives - 1 ? s[i].classList.add("opacity_screen") : s[i].classList.contains("opacity_screen") && s[i].classList.remove("opacity_screen");
            this.player.userData.lives > 3 ? (t.classList.contains("opacity_screen") && t.classList.remove("opacity_screen"), t.textContent = this.player.userData.bonusHeart) : t.classList.contains("opacity_screen") || t.classList.add("opacity_screen");
        }
    }
    class oe {
        constructor(s, t, i, e, a, o, n, r, l, c, u, m, b){
            this.scene = s, this.audioClass = t, this.physicsClass = i, this.renderer = e, this.camera = a, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.initMatch = l, this.gameClass = u, this.splash = m, this.ring = b, this.dataClass = c, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = this.dataClass.allLevels, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new as(16777215), this._nightColor = new as(16771488);
            const y = new Dt, d = .01;
            y.moveTo(5 * d, 5 * d), y.bezierCurveTo(5 * d, 5 * d, 4 * d, 2 * d, 0 * d, 2 * d), y.bezierCurveTo(-6 * d, 2 * d, -6 * d, 7 * d, -6 * d, 7 * d), y.bezierCurveTo(-6 * d, 10 * d, -3 * d, 14 * d, 5 * d, 18 * d), y.bezierCurveTo(12 * d, 14 * d, 16 * d, 10 * d, 16 * d, 7 * d), y.bezierCurveTo(16 * d, 7 * d, 16 * d, 2 * d, 10 * d, 2 * d), y.bezierCurveTo(7 * d, 2 * d, 5 * d, 5 * d, 5 * d, 5 * d);
            const v = {
                depth: .22,
                bevelEnabled: !1,
                curveSegments: 12,
                steps: 1
            };
            this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (f, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new X(0, 0, 0),
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
                    geometryPlane: new es(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new js({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (f, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new X(0, 0, 0),
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
                    geometryPlaneTop: new es(this.planeWidth, .4, 1.2),
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
                    }, (f, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new X(0, 0, 0),
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
                    geometryPlaneGrass: new es(this.planeWidth, .5, this.planeDepth + .2),
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
                    }, (f, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new X(0, 0, 0),
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
                    geometryPlaneSensor: new es(this.planeWidth, .4, 1.2),
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
                    }, (f, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new es(.3, 1, .3),
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
                    }, (f, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new Zs(.32, 24, 16),
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
                    }, (f, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new Zs(.3),
                    materialBulb: new rs({
                        emissive: new as(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                },
                livesBlocks: {
                    data: Array.from({
                        length: this.count
                    }, (f, A)=>({
                            position: new p(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new p(0, 0, 0)
                            }
                        })),
                    geometryLivesBlock: new Pt(y, v),
                    materialLivesBlock: new rs({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new ss(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(ts), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new ss(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(ts), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new ss(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(ts), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new ss(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(ts), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new ss(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(ts), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new ss(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(ts), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new ss(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(ts), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new ss(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(ts), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (f)=>{
                f.uniforms.fresnelPower = {
                    value: 2.5
                }, f.fragmentShader = f.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const j = new Float32Array(this.count);
            for(let f = 0; f < this.count; f++)j[f] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Mt(j, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (f)=>{
                f.vertexShader = `
    attribute float aEmissive;
    varying float vEmissive;
  ` + f.vertexShader.replace("#include <begin_vertex>", `
      #include <begin_vertex>
      vEmissive = aEmissive;
    `), f.fragmentShader = `
    varying float vEmissive;
  ` + f.fragmentShader.replace("#include <lights_fragment_begin>", `
      #include <lights_fragment_begin>
      // усиливаем эмиссию в зависимости от инстанса
      totalEmissiveRadiance *= vEmissive;
    `);
            }, this.objs.bulbs.materialBulb.needsUpdate = !0;
            function T(f = 64) {
                const A = document.createElement("canvas");
                A.width = A.height = f;
                const U = A.getContext("2d"), w = U.createRadialGradient(f / 2, f / 2, 0, f / 2, f / 2, f / 2);
                w.addColorStop(0, "rgba(255, 235, 175, 1)"), w.addColorStop(1, "rgba(255, 235, 175, 0)"), U.fillStyle = w, U.fillRect(0, 0, f, f);
                const x = new Us(A);
                return x.anisotropy = 1, x.generateMipmaps = !1, x.needsUpdate = !0, x;
            }
            this._glowTex = T(), this._emissive = j, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Bs, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s : s ? new p(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new p(1, 1, 1);
        }
        apply(s, t, i) {
            let e = i.userData.invBaseSize;
            if (!e) {
                const r = i.geometry;
                r.computeBoundingBox();
                const l = new p;
                r.boundingBox.getSize(l), e = i.userData.invBaseSize = new p(1 / (l.x || 1), 1 / (l.y || 1), 1 / (l.z || 1));
            }
            this._dummy ||= new Ys;
            const a = this._dummy, o = t[s] || {}, n = this.toVec3(o.size);
            a.position.copy(o.position || new p), o.rotation ? a.rotation.copy(o.rotation) : a.rotation.set(0, 0, 0), a.scale.set(n.x * e.x, n.y * e.y, n.z * e.z), a.updateMatrix(), i.setMatrixAt(s, a.matrix);
        }
        async loadTexture() {
            const s = new yt;
            s.load("textures/plane.jpg", (t)=>{
                const i = new rs({
                    map: t,
                    transparent: !0,
                    opacity: 1
                });
                t.wrapS = Ds, t.wrapT = Ds, t.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = i;
            }, void 0, function(t) {
                console.error("An error happened.");
            }), s.load("textures/grass.jpg", (t)=>{
                const i = new rs({
                    map: t
                });
                t.wrapS = Ds, t.wrapT = Ds, t.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = i;
            }, void 0, function(t) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let s = new es(.5, .7, 1), t = new Vs({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new Ms(s, t), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = _(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((t, i, e)=>{
                document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
            }), s) {
                let t = -2.5, i = -5, e = !1;
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
                        this.gameNum = 4, this.birdYes = !1, this.count = 6, this.paramsClass.gameDir = "vert", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.cameraSpeed = .01, e = [
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
                        this.birdYes = !0, this.count = 5, this.paramsClass.gameDir = "hor", this.levelsNoFric = !0, this.randomNoFric = 0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.gameNum = 2, this.cameraSpeed = .01, e = [
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
                        this.gameNum = 3, this.birdYes = !1, this.count = 6, this.paramsClass.gameDir = "vert", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.cameraSpeed = .01, e = [
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
                        this.birdYes = !0, this.count = 10, this.paramsClass.gameDir = "hor", this.levelsNoFric = !1, this.randomNoFric = .5, this.randomAnimateHor = .5, this.randomAnimateVert = .5, this.gameNum = 1, this.cameraSpeed = .01, e = [
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
                    for(let a = 0; a < this.count; a++){
                        let o = _(this.planeWidth, this.planeWidth - 1), n = t + o / 2 + _(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = _(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e && (o = e[a]), a == 0 ? (this.objs.planes.data[a].size.x = this.planeWidth, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.planes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[a].size.x = this.planeWidth + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : a == 1 ? (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : a == this.count - 1 ? (e ? this.objs.planes.data[a].size.x = e[e.length - 1] - .2 : this.objs.planes.data[a].size.x = 5, this.objs.planes.data[a].size.y = this.planeHeight, e ? this.objs.topPlanes.data[a].size.x = e[e.length - 1] : this.objs.topPlanes.data[a].size.x = 5 + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, e ? this.objs.grassPlanes.data[a].size.x = e[e.length - 1] : this.objs.grassPlanes.data[a].size.x = 5 + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), a == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[a].position.x = 0, this.objs.planes.data[a].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = 0, this.objs.topPlanes.data[a].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = 0, this.objs.grassPlanes.data[a].position.y = r + this.planeHeight / 1.5) : a == 1 ? (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 8, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new Ls(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(a, this.objs.planes.data, this.objs.planes.plane), this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), t = n + o / 2;
                    }
                    for(let a = 0; a < this.count; a++)a > 1 && a < this.count - 1 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[a - 1].userData.moveHor && (this.objs.grassPlanes.data[a].userData.moveHor = {
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
                    this.birdYes = !1;
                    for(let a = 0; a < this.count; a++){
                        let o = _(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        e && (o = e[a]), this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[a].userData.direction = 1 : this.objs.grassPlanes.data[a].userData.direction = -1;
                        let n = i + _(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[a].position.y = n - 1.3, this.objs.grassPlanes.data[a].position.y = n, this.objs.sensorPlanes.data[a].position.y = n - .3, this.objs.topPlanes.data[a].size.y = .3, this.objs.grassPlanes.data[a].size.y = .7, this.objs.sensorPlanes.data[a].size.y = .9, a > 0 ? (this.objs.topPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.sensorPlanes.data[a].size.x = o + .7) : (this.objs.topPlanes.data[a].size.x = 10, this.objs.grassPlanes.data[a].size.x = 10, this.objs.sensorPlanes.data[a].size.x = 10), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 8, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.grassPlanes.data[a].userData.speed = _(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new Ls(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
            } else switch(this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let t = -2.5;
                    for(let e = 0; e < this.count; e++){
                        let a = _(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = t + a / 2 + _(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = _(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, e > this.count - 20 ? (this.objs.planes.data[e].size.x = .1, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = .2 + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = .2 + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e > 0 ? (this.objs.planes.data[e].size.x = a, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = a + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0) n = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5;
                        else if (e == 1) o = 6, this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5;
                        else if (e > 1 && (this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5, (e + 1) % 10 === 1)) {
                            let r = this.boostHatModel.clone();
                            r.position.x = o, r.position.y = this.objs.topPlanes.data[e].position.y + 2, r.rotation.y = -Math.PI / 2, r.userData.num = e, this.boostHatModels.push(r), this.boostHatMeshes.push(r.children[0].children[0].children[0]), this.boostHatCoords.push([
                                r.position.x,
                                r.position.y
                            ]), this.scene.add(r);
                        }
                        if (this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const r = new Ls(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), t = o + a / 2;
                    }
                    for(let e = 0; e < this.count; e++)e > 4 && e < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[e - 1].userData.moveHor && (this.objs.grassPlanes.data[e].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10), e > 7 && e < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[e - 1].userData.moveHor && !this.objs.grassPlanes.data[e - 1].userData.moveVert && (this.objs.grassPlanes.data[e].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10), this.objs.grassPlanes.data[e].position.y > this.maxHeight && (this.maxHeight = this.objs.grassPlanes.data[e].position.y), e > 7 && Math.random() < .1 && !this.objs.grassPlanes.data[e].userData.moveHor && !this.objs.grassPlanes.data[e].userData.moveVert && (this.objs.livesBlocks.data[e].position.x = this.objs.grassPlanes.data[e].position.x - this.objs.grassPlanes.data[e].size.x / 2 + this.objs.livesBlocks.data[e].size.x / 2, this.objs.livesBlocks.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.livesBlocks.data[e].size.y / 2 + .2, this.objs.livesBlocks.data[e].userData.startPos = this.objs.livesBlocks.data[e].position.clone()), this.apply(e, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.livesBlocks.livesBlock), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let i = -5;
                    this.birdYes = !1;
                    for(let e = 0; e < this.count; e++){
                        let a = _(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[e].userData.direction = 1 : this.objs.grassPlanes.data[e].userData.direction = -1;
                        let o = i + _(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[e].position.y = o - 1.3, this.objs.grassPlanes.data[e].position.y = o, this.objs.sensorPlanes.data[e].position.y = o - .3, this.objs.topPlanes.data[e].size.y = .3, this.objs.grassPlanes.data[e].size.y = .7, this.objs.sensorPlanes.data[e].size.y = .9, e > this.count - 20 && (this.objs.topPlanes.data[e].size.x = a / 8 + .1, this.objs.grassPlanes.data[e].size.x = a / 8 + .1, this.objs.sensorPlanes.data[e].size.x = a / 8 + .4), e > 0 ? (this.objs.topPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.sensorPlanes.data[e].size.x = a + .7) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), e > this.count - 10 ? this.objs.grassPlanes.data[e].userData.speed = _(10, 14) / 100 : this.objs.grassPlanes.data[e].userData.speed = _(6, 10) / 100, this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, (e + 1) % 7 === 0) {
                            let n = this.boostHatModel.clone();
                            n.position.x = _(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[e].position.y + .5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                                n.position.x,
                                n.position.y
                            ]), this.scene.add(n);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const n = new Ls(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), i = o;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
            this.players.forEach((t, i, e)=>{
                t.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y, (s || this.paramsClass.gameDir == "vert") && (t.player.userData.lives = 1, t.reLiveField());
            });
        }
        getHorizontalWorldBounds(s = 0) {
            const t = new p(-1, 0, .5), i = new p(1, 0, .5), e = new p(0, 1, .5), a = new p(0, -1, .5);
            if (t.unproject(this.camera), i.unproject(this.camera), e.unproject(this.camera), a.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = t.clone().sub(o).normalize(), r = i.clone().sub(o).normalize(), l = e.clone().sub(o).normalize(), c = a.clone().sub(o).normalize(), u = (s - o.z) / n.z, m = (s - o.z) / c.z, b = o.clone().add(n.multiplyScalar(u)), y = o.clone().add(r.multiplyScalar(u)), d = o.clone().add(l.multiplyScalar(m)), v = o.clone().add(c.multiplyScalar(m));
                this.bounds = {
                    leftX: b.x,
                    rightX: y.x,
                    topY: d.y,
                    bottomY: v.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let s = !1;
                for(let t = 0; t < this.objs.grassPlanes.data.length; t++){
                    const i = this.objs.grassPlanes.data[t], e = i.userData.body, a = i.userData.moveHor, o = i.userData.moveVert;
                    if (e && (a || o)) {
                        if (a) {
                            const n = e.translation(), r = a.x1 + a.w1 + i.size.x * .5, l = a.x2 - a.w2 - i.size.x * .5, c = i.userData.speed ?? .05;
                            n.x >= l && (i.userData.direction = -1), n.x <= r && (i.userData.direction = 1);
                            const u = i.userData.direction * c, m = n.x + u;
                            e.setNextKinematicTranslation({
                                x: m,
                                y: n.y,
                                z: n.z
                            }), i.position.x = m, this.objs.lamps.data[t].position.x = m, this.objs.plafons.data[t].position.x = m, this.objs.bulbs.data[t].position.x = m, this.objs.topPlanes.data[t].position.x = m;
                        } else if (o) {
                            const n = e.translation(), r = 2, l = .5, c = i.userData.speed ?? .03;
                            n.y >= r && (i.userData.direction = -1), n.y <= l && (i.userData.direction = 1);
                            const u = i.userData.direction * c, m = n.y + u;
                            e.setNextKinematicTranslation({
                                x: n.x,
                                y: m,
                                z: n.z
                            }), i.position.y = m, this.objs.lamps.data[t].position.y = m + this.objs.lamps.lampHeight, this.objs.plafons.data[t].position.y = m + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[t].position.y = m + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[t].position.y = m + .2;
                        }
                    }
                    for(let n = 0; n < this.objs.livesBlocks.data.length; n++)this.objs.livesBlocks.data[n].userData.taked ? this.objs.livesBlocks.data[n].position.y < 10 ? (this.objs.livesBlocks.data[n].position.y += .001, this.objs.livesBlocks.data[n].rotation.y += .004) : this.objs.livesBlocks.data[n].userData.taked = !1 : this.objs.livesBlocks.data[n].rotation.y += 4e-4, this.apply(n, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), s = !0;
                }
                s && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let s = 0; s < this.objs.grassPlanes.data.length; s++){
                    const t = this.objs.grassPlanes.data[s], i = this.objs.topPlanes.data[s];
                    this.objs.sensorPlanes.data[s], this.objs.lamps.data[s], this.objs.plafons.data[s], this.objs.bulbs.data[s];
                    const e = t.userData.body, a = t.userData.speed, o = e.translation();
                    o.x > this.bounds.rightX - t.size.x / 2 ? t.userData.direction = -1 : o.x < this.bounds.leftX + t.size.x / 2 && (t.userData.direction = 1);
                    const n = t.userData.direction * a, r = o.x + n;
                    s > 0 && e.setNextKinematicTranslation({
                        x: r,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[s].position.x = r, this.objs.lamps.data[s].position.x = r, this.objs.plafons.data[s].position.x = r, this.objs.bulbs.data[s].position.x = r, this.objs.topPlanes.data[s].position.x = r, this.objs.topPlanes.data[s].position.y = o.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i.position.set(r, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBirdModel() {
            await new qs().loadAsync("models/bird/bird.glb").then((i)=>{
                const e = i.scene, a = i.animations;
                e.scale.x = 2, e.scale.y = 2, e.scale.z = 2, e.position.y = 0, e.rotation.y = -Math.PI / 3, this.angryBirdModel = e, this.angryBirdModel.userData.mixer = new Ct(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(a[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Bs;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new qs().loadAsync("models/boosts/hat.glb").then((i)=>{
                const e = i.scene;
                this.boostHatModel = e, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
                const a = this.boostHatPropeller.children[0].material;
                a.emissive.set(16777215), a.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 17, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .035, this.boostHatModel.scale.y = .035, this.boostHatModel.scale.z = .035, this.boostHatModel.userData.fly = !1, this.boostHatModel.userData.num = 0;
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new as(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new as(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new as(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, t, i)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new p(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && !this.worldClass.thunder ? (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: _(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird, this.angryBird.userData.speed = _(8, 13) / 100, this.angryBird.userData.flying = !0) : this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && this.worldClass.thunder && (this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
                const i = this.camera.position.x - this.bounds.rightX / 1.3, e = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((a, o)=>{
                    a.pointLight;
                    const n = a.position.x >= i && a.position.x <= e, r = o;
                    if (n && !a.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        a.pointLight = l, a.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(a.glow);
                    }
                    if (a.pointLight) {
                        const l = a.pointLight;
                        l.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), a.glow.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 0);
                        const c = n ? this.lightIntensity : 0;
                        l.intensity = F.lerp(l.intensity, c, .15);
                        const u = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], u, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const m = .5 + this._emissive[r] * .8;
                        a.glow && a.glow.scale.setScalar(m);
                        const b = 1.1, y = this._emissive[r], d = 1 + b * y, v = this.objs.bulbs.baseSize, j = this.objs.bulbs.data[r];
                        j.userData._lastBulbFactor !== d && (j.size.set(v.x * d, v.y * d, v.z * d), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), j.userData._lastBulbFactor = d, s = !0), !n && l.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(l), a.pointLight = null, a.glow && (this.glowPool.push(a.glow), this.scene.remove(a.glow), a.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((e, a)=>{
                    const o = e.pointLight;
                    o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), e.pointLight = null, e.userData.light = !1, e.glow && (this.scene.remove(e.glow), this.glowPool.push(e.glow), e.glow = null))), this.objs.plafons.plafon.setColorAt(a, this._dayColor), i = !0, this._emissive && this._emissive.length > a && (this._emissive[a] = 0);
                    const n = 1.1, r = this._emissive[a], l = 1 + n * r, c = this.objs.bulbs.baseSize, u = this.objs.bulbs.data[a];
                    u.userData._lastBulbFactor !== l && (u.size.set(c.x * l, c.y * l, c.z * l), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), u.userData._lastBulbFactor = l, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const i = this.camera.position.y - this.bounds.topY / 1, e = this.camera.position.y + this.bounds.topY * .8;
                this.objs.plafons.data.forEach((a, o)=>{
                    a.pointLight;
                    const n = a.position.y >= i && a.position.y <= e, r = o;
                    if (n && !a.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        a.pointLight = l, a.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(a.glow);
                    }
                    if (a.pointLight) {
                        const l = a.pointLight;
                        l.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), a.glow.position.copy(a.position);
                        const c = n ? this.lightIntensity : 0;
                        l.intensity = F.lerp(l.intensity, c, .15);
                        const u = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], u, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const m = .8 + this._emissive[r] * .8;
                        a.glow && a.glow.scale.setScalar(m);
                        const b = 1, y = this._emissive[r], d = 1 + b * y, v = this.objs.bulbs.baseSize, j = this.objs.bulbs.data[r];
                        j.userData._lastBulbFactor !== d && (j.size.set(v.x * d, v.y * d, v.z * d), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), j.userData._lastBulbFactor = d, s = !0), !n && l.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(l), a.pointLight = null, a.glow && (this.glowPool.push(a.glow), this.scene.remove(a.glow), a.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((e, a)=>{
                    const o = e.pointLight;
                    !e.pointLight && this._emissive[a] === 0 || (o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), e.pointLight = null, e.userData.light = !1, e.glow && (this.scene.remove(e.glow), this.glowPool.push(e.glow), e.glow = null))), this.objs.plafons.plafon.setColorAt(a, this._dayColor), i = !0, this._emissive && this._emissive.length > a && (this._emissive[a] = 0));
                }), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed(s = !1) {
            let t;
            if (s ? t = this.players.filter((a, o, n)=>a.player.userData.live) : t = this.players, t.length === 0) return -1;
            let i = 0, e;
            this.paramsClass.gameDir == "vert" ? e = t[0].player.position.y : e = t[0].player.position.x;
            for(let a = 1; a < t.length; a++)t[a].player && t[a].player.userData.live && t[a].player.position && (this.paramsClass.gameDir == "vert" ? t[a].player.position.y > e && (e = t[a].player.position.y, i = a) : t[a].player.position.x > e && (e = t[a].player.position.x, i = a));
            return s ? this.players.indexOf(t[i], 0) : i;
        }
        async loadPlayers() {
            this.reloadLevel();
            for(let s = 0; s < this.players.length; s++){
                let t = this.players[s];
                this.levelsMode || t.reLiveField(), t.player.position.x = t.player.position.x - s * 1 + 1, this.physicsClass.addPhysicsToObject(t.player), this.paramsClass.gameDir == "vert" && (t.player.position.y = -0, t.player.userData.collider.setFriction(500)), await t.loadPlayerModel(), t.player.userData.startPos = t.player.position.clone(), this.scene.add(t.player), this.scene.add(t.playerOut), this.scene.add(t.playerModel), this.playerOuts.push(t.playerOut), s < this.players[0].playerColors.length ? t.head.children[0].material.color.set(this.players[0].playerColors[s]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), t.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > s ? t.player.userData.audio.push(this.audioClass.quacks[s].clone()) : t.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(s, t = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = (this.isMobile, 3), s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const i = Math.max(0, this.maxSpeed(!0));
                        if (i >= 0 && !this.worldClass.thunder || this.levelsMode) {
                            let e = 0;
                            this.players.length > 1 ? e = this.players[i].player.position.x : this.paramsClass.gameDir == "hor" && (e = this.players[i].player.position.x + this.bounds.rightX / 2);
                            const a = this.cam.maxBackJump;
                            e < this.cam.targetX - a ? this.cam.targetX = this.cam.targetX - a : this.cam.targetX = e;
                            const o = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .25, t);
                            s.position.x = o.newPos, this.cam.velX = o.newVel, s.position.y = (this.isMobile, 3), s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                        } else (this.worldClass.thunder || !this.levelsMode) && (this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 2), s.position.y = (this.isMobile, 3), s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0));
                        break;
                    }
                case 3:
                    this.gameClass.gameStarting && (s.position.y += this.cameraSpeed), s.position.x = 0, s.position.z = this.isMobile ? 20 : 32, this.cameraSpeed += 1e-6, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 4:
                    this.gameClass.gameStarting && (s.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), s.position.x = 0, s.position.z = this.isMobile ? 25 : 32, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
            }
        }
        damp(s, t, i, e) {
            return s + (t - s) * (1 - Math.exp(-i * e));
        }
        spring(s, t, i, e, a) {
            const o = 2 / e, n = o * a, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let l = s - t;
            const c = (i + o * l) * a, u = (i - o * c) * r;
            return {
                newPos: t + (l + c) * r,
                newVel: u
            };
        }
        showPopupInGame(s = !1, t = !1) {
            this.hideScreen("popup_game_btn_close"), this.hideScreen("menu_in_game"), this.gameClass.pause ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn1")) : (this.gameClass.showGamePopup = !0, this.levelsMode ? this.players.every((i)=>i.player.userData.finish) ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15"), this.players.forEach((i, e, a)=>{
                this.levelsMode == this.allLevels && (this.dataClass.table.player.bonusHeart[e] = 2), this.levelsMode + 1 > this.dataClass.table.player.levels[e] && (this.dataClass.table.player.levels[e] = this.levelsMode);
            }), this.dataClass.saveLocalData(), this.dataClass.loadLocalData(), this.dataClass.loadLevels(this.players.length - 1)) : (this.hideScreen("popup_game_btn15"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win")) : (!s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play())), this.showScreen("popup_in_game"), this.gameClass.gameStarting = !1;
        }
        reloadLevel(s = -1) {
            if (this.paramsClass.gameDir == "hor" && !this.levelsMode) {
                if (s >= 0) {
                    let t = this.players[s];
                    this.dataClass.table.player.bonusHeart[s] ? (t.player.userData.maxLives = 4, t.player.userData.lives = t.player.userData.maxLives, t.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[s], this.dataClass.table.player.bonusHeart[s]--, console.log(111)) : (t.player.userData.maxLives = 3, t.player.userData.lives = t.player.userData.maxLives);
                } else for(let t = 0; t < this.players.length; t++){
                    let i = this.players[t];
                    this.dataClass.table.player.bonusHeart[t] ? (i.player.userData.maxLives = 4, i.player.userData.lives = i.player.userData.maxLives, i.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[t], this.dataClass.table.player.bonusHeart[t]--, console.log(222)) : (i.player.userData.maxLives = 3, i.player.userData.lives = i.player.userData.maxLives), this.levelsMode || i.reLiveField();
                }
                this.dataClass.saveLocalData(), this.dataClass.loadLocalData();
            }
        }
        rebindButton(s, t) {
            const i = document.querySelector(s), e = i.cloneNode(!0);
            return i.parentNode.replaceChild(e, i), e.addEventListener("click", t), e;
        }
        menuInGame = ()=>{
            this.rebindButton(".popup_game_btn1", ()=>{
                this.boostHatModels.forEach((t, i, e)=>{
                    t.userData.fly = !1;
                });
                let s = [];
                this.players.forEach((t, i, e)=>{
                    s.push(t.player.position.x);
                }), this.players.forEach((t, i, e)=>{
                    t.playerAliving(!1), t.player.userData.lives = 1, t.player.position.x = Math.max(...s), this.camera.position.x = t.player.position.x;
                }), this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
            }), this.rebindButton(".popup_game_btn2", ()=>{
                this.audioClass.hardStopAll(), this.players.forEach((s, t, i)=>{
                    s.player.userData.live = !1, s.player.userData.body.setTranslation(new p(0, -5, 0)), s.player.userData.finish = !1, s.playerAliving(!0);
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((s, t, i)=>{
                    s.position.x = this.boostHatCoords[t][0], s.position.y = this.boostHatCoords[t][1], s.userData.fly = !1;
                });
                for(let s = 0; s < this.objs.livesBlocks.data.length; s++)this.objs.livesBlocks.data[s].position = this.objs.livesBlocks.data[s].userData.startPos, this.apply(s, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.audioClass.stopMusic([
                    "ocean"
                ]), this.audioClass.playMusic([
                    "ocean"
                ]), this.camera.position.x = 0, this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
            }), this.rebindButton(".popup_game_btn15", ()=>{
                this.audioClass.hardStopAll(), this.paramsClass.dataLoaded = !1, dt(this.scene), this.audioClass.stopMusic(0), setTimeout(()=>{
                    let s = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 777;
                    this.initMatch(this.players.length, this.gameNum, s, this.birdYes);
                }, 100), this.players.forEach((s, t, i)=>{
                    s.playerAliving(!0);
                }), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
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
        constructor(s, t){
            this.world = s, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Ys;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const t = s.geometry;
            t.computeBoundingBox();
            const i = new p;
            t.boundingBox.getSize(i);
            const e = new p(1 / (i.x || 1), 1 / (i.y || 1), 1 / (i.z || 1));
            return s.userData.invBase = e, e;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s.clone() : new p(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, t, i) {
            const e = hs._toVec3(i.size), a = hs._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = i.quaternion?.isQuaternion ? i.quaternion : new Cs, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), r = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(r, n), this.instancedBodies.push({
                mesh: s,
                index: t,
                size: e,
                body: n
            });
        }
        addInstancedStatic(s, t, i, e) {
            const a = hs._toVec3(e.size), o = hs._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = e.quaternion?.isQuaternion ? e.quaternion : new Cs, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), l = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            s[i].userData.body = r, s[i].userData.shape = l, s[i].userData.collide = this.world.createCollider(l, r), this.instancedBodies.push({
                mesh: t,
                index: i,
                size: a,
                body: r
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, t = new Set;
            for (const i of this.instancedBodies){
                const e = hs._ensureInvBase(i.mesh), a = i.body.translation(), o = i.body.rotation();
                s.position.set(a.x, a.y, a.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(i.size.x * e.x, i.size.y * e.y, i.size.z * e.z), s.updateMatrix(), i.mesh.setMatrixAt(i.index, s.matrix), t.add(i.mesh);
            }
            for (const i of t)i.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let t, i;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new bs().setFromObject(s);
                const a = Rs(s);
                s.rotation.copy(e), s.userData.size = a, s.userData.orgRotation = e, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = t, s.userData.shape = i;
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
                s.rotation.set(0, 0, 0), new bs().setFromObject(s);
                const a = Rs(s);
                s.rotation.copy(e), s.userData.size = a, s.userData.orgRotation = e, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(0).setFriction(.3), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, t);
                s.userData.body = t, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = t.handle, this.dynamicBodies.push([
                    s,
                    t,
                    s.id
                ]), s.userData.playerHandlesInside = new Set, this.allTops.push(s);
            } else if (s != null && s.userData.name.includes("bird")) {
                let t, i;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new bs().setFromObject(s);
                const a = Rs(s);
                s.rotation.copy(e), s.userData.size = a, s.userData.orgRotation = e, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(1).setFriction(0), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, t);
                s.userData.body = t, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = t.handle, this.dynamicBodies.push([
                    s,
                    t,
                    s.id
                ]);
            }
        }
    }
    const Fs = new p;
    function Rs(h) {
        if (h.isMesh && h.geometry) {
            const t = h.geometry;
            return t.boundingBox || t.computeBoundingBox(), t.boundingBox.getSize(Fs), Fs.multiply(h.scale), Fs.clone();
        }
        return new bs().setFromObject(h).getSize(new p);
    }
    class ne {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.looseAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicNowPlaying = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2, this._attached = !1, this.listener = new _t, this.musicOn = !0;
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
            const s = new Lt;
            await s.loadAsync("audio/back1.mp3").then((t)=>{
                this.backAudio = new B(this.listener), this.backAudio.setBuffer(t), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/back2.mp3").then((t)=>{
                this.backAudio2 = new B(this.listener), this.backAudio2.setBuffer(t), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/back3.mp3").then((t)=>{
                this.backAudio3 = new B(this.listener), this.backAudio3.setBuffer(t), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(.5), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/ocean.mp3").then((t)=>{
                this.oceanAudio = new B(this.listener), this.oceanAudio.setBuffer(t), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/inwater.mp3").then((t)=>{
                this.inwaterAudio = new B(this.listener), this.inwaterAudio.setBuffer(t), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/loose.mp3").then((t)=>{
                this.looseAudio = new B(this.listener), this.looseAudio.setBuffer(t), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/take.mp3").then((t)=>{
                this.takeAudio = new B(this.listener), this.takeAudio.setBuffer(t), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/ready-jump.mp3").then((t)=>{
                this.readyJumpAudio = new B(this.listener), this.readyJumpAudio.setBuffer(t), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(1e3), this.readyJumpAudio.setVolume(200), this.readyJumpAudio.setPlaybackRate(2), this.musics.push({
                    name: "readyJump",
                    music: this.readyJumpAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack1.mp3").then((t)=>{
                this.jumpAudio = new B(this.listener), this.jumpAudio.setBuffer(t), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(2e3), this.jumpAudio.setVolume(2), this.quacks.push(this.jumpAudio), this.musics.push({
                    name: "quack1",
                    music: this.jumpAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack2.mp3").then((t)=>{
                this.jumpAudio2 = new B(this.listener), this.jumpAudio2.setBuffer(t), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2), this.musics.push({
                    name: "quack2",
                    music: this.jumpAudio2
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack3.mp3").then((t)=>{
                this.jumpAudio3 = new B(this.listener), this.jumpAudio3.setBuffer(t), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3), this.musics.push({
                    name: "quack3",
                    music: this.jumpAudio3
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/rain.mp3").then((t)=>{
                this.rainAudio = new B(this.listener), this.rainAudio.setBuffer(t), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1.5), this.musics.push({
                    name: "rain",
                    music: this.rainAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/thunder.mp3").then((t)=>{
                this.thunderAudio = new B(this.listener), this.thunderAudio.setBuffer(t), this.thunderAudio.setLoop(!1), this.thunderAudio.setRefDistance(400), this.thunderAudio.setVolume(1), this.thundersAudio.push({
                    name: "thunder1",
                    music: this.thunderAudio
                }), this.musics.push({
                    name: "thunder1",
                    music: this.thunderAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/thunder2.mp3").then((t)=>{
                this.thunderAudio2 = new B(this.listener), this.thunderAudio2.setBuffer(t), this.thunderAudio2.setLoop(!1), this.thunderAudio2.setRefDistance(400), this.thunderAudio2.setVolume(1), this.thundersAudio.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                }), this.musics.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/thunder3.mp3").then((t)=>{
                this.thunderAudio3 = new B(this.listener), this.thunderAudio3.setBuffer(t), this.thunderAudio3.setLoop(!1), this.thunderAudio3.setRefDistance(400), this.thunderAudio3.setVolume(1), this.thundersAudio.push({
                    name: "thunder3",
                    music: this.thunderAudio3
                }), this.musics.push({
                    name: "thunder3",
                    music: this.thunderAudio3
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), this.musics.push({
                name: "back",
                music: this.backAudio
            });
        }
        stopMusic(s) {
            this.musicOn && (s == 0 ? this.musics.forEach((t, i, e)=>{
                t.music.stop();
            }) : s.forEach((t, i, e)=>{
                this.musics.find((a)=>a.name === t).music.stop();
            }));
        }
        pauseMusic(s) {
            this.musicOn && s.forEach((t, i, e)=>{
                this.musics.find((a)=>a.name === t).music.pause();
            });
        }
        playMusic(s) {
            s.forEach((t, i, e)=>{
                let a = this.musics.find((o)=>o.name === t).music;
                !a.isPlaying && this.musicOn && a.play();
            });
        }
        togglePauseAll(s) {
            this.musicOn && (s ? (this.musicNowPlaying = [], this.musics.forEach(({ music: t })=>{
                t.isPlaying && (t.pause(), this.musicNowPlaying.push(t));
            })) : this.musicNowPlaying && this.musicNowPlaying.length && (this.musicNowPlaying.forEach((t)=>{
                t.isPlaying || t.play();
            }), this.musicNowPlaying = []));
        }
        dayNight(s = !0, t = !1) {
            s && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>i.name === "back1").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>t ? i.name === "back3" : i.name === "back2").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class re {
        constructor(s, t, i, e, a, o){
            this.levelClass = s, this.isMobile = t, this.renderer = i, this.camera = e, this.paramsClass = a, this.audioClass = o, this.mouse = new p, this.raycaster = new kt;
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
            let t = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((s.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.downKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.downKeys(this.levelClass.players[1].player) : this.downKeys(this.levelClass.players[2].player));
        };
        onTapUp = (s)=>{
            let t = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((s.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.upKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.upKeys(this.levelClass.players[1].player) : this.upKeys(this.levelClass.players[2].player));
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
                case "KeyD":
                case "ArrowRight":
                    break;
                case "KeyP":
                    this.renderer.setPixelRatio(1);
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
        constructor(s, t, i, e, a, o){
            this.scene = s, this.camera = t, this.renderer = i, this.paramsClass = e, this.isMobile = a, this.audioClass = o, this.ambientLight = new zt(11184810, 1), this.hemiLight = new Bt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ht(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Ys, this.dirLight.target = this.targetObject, this.helper = new Tt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.isRainActive = !1, this.rainEndTimestampMs = 0, this.activeLightningLines = [], this.lightningMaterialBase = new Et({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: ks,
                depthWrite: !1
            }), this.clock = new Bs, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 25, this.rainAreaHalfDepth = 22, this.rainTopY = 10, this.rainBottomY = -4, this.rainGeometry = new xs, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let t = 0; t < this.rainDropCount; t++){
                const i = t * 3;
                this.rainPositions[i + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[i + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[i + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[t] = 15 + Math.random() * 15, this.rainWindPhase[t] = Math.random() * Math.PI * 2;
            }
            const s = new Float32Array(this.rainDropCount * 3);
            for(let t = 0; t < this.rainDropCount; t++){
                const i = .8 + Math.random() * .2;
                s[t * 3 + 0] = .7 * i, s[t * 3 + 1] = .8 * i, s[t * 3 + 2] = 1 * i;
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
            }), this.rainPoints = new Ns(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Ws(900, 500), this.water = new Ft(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new yt().load("textures/waternormals.jpg", function(l) {
                    l.wrapS = l.wrapT = Ds;
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
            }, this.blackSky = new Ms(new Ws(1e4, 1e4), new Vs({
                color: 526362,
                side: It,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const t = 1500, i = new Float32Array(t * 3), e = new Float32Array(t), a = new Float32Array(t * 3);
            for(let l = 0; l < t; l++){
                i[3 * l] = Math.random() * 600 - 300, i[3 * l + 1] = Math.random() * 150 - 100, i[3 * l + 2] = Math.random() * 300 - 500, e[l] = Math.random() * 2 + .7;
                const c = new as().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * l] = c.r, a[3 * l + 1] = c.g, a[3 * l + 2] = c.b;
            }
            const o = new xs;
            o.setAttribute("position", new ls(i, 3)), o.setAttribute("size", new ls(e, 1)), o.setAttribute("color", new ls(a, 3));
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
            this.materialStars = new Gt({
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
            }), this.stars = new Ns(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, t = Math.sign(s - this._prevCamX);
            this._prevCamX = t, this.stars.position.x = this.camera.position.x;
            const i = F.degToRad(90 - this.parameters.elevation), e = F.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, i, e), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1, this.rainStart = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), !this.rainStart && this.parameters.elevation < 2 && this.parameters.elevation > 1.5 && (this.rain = !0, this.startRain(), this.audioClass.musicOn && this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1)), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const a = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= a * .05, this.blackSky.material.opacity += a * .02, this.materialStars.uniforms.opacity.value += a * .008, this.camera.position.y < this.topLight && a < 0 ? (this.dirLight.intensity -= a * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= a * .05, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && a > 0 && (this.dirLight.intensity -= a * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= a * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && this.camera.position.y > 10 && (this.topLight = this.camera.position.y), this.prevCameraYSun = this.camera.position.y, this.camera.position.y > 30 ? this.night = !0 : this.night = !1;
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
            this.isRainActive && performance.now() >= this.rainEndTimestampMs && (this.scene.remove(this.rainPoints), this.isRainActive = !1, this.rain = !1, this.audioClass.musicOn && this.audioClass.rainAudio.stop());
            const s = performance.now();
            this.thunder && (s >= this.nextThunderFlashTimestampMs && (this.triggerThunderFlashNow(), this.scheduleNextThunderFlash(s)), s >= this.thunderEndTimestampMs && (this.thunder = !1, this.isThunderActive = !1)), this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);
            const t = 10;
            this.dirLight.shadow.camera.left = -t, this.dirLight.shadow.camera.right = t, this.dirLight.shadow.camera.top = t, this.dirLight.shadow.camera.bottom = -t, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let i = this.activeLightningLines.length - 1; i >= 0; i--){
                const e = this.activeLightningLines[i];
                e.userData.life -= this.deltaSeconds / 1.5, e.material.opacity *= .78, (e.userData.life <= 0 || e.material.opacity <= .02) && (this.scene.remove(e), e.geometry.dispose(), e.material.dispose(), this.activeLightningLines.splice(i, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const i = this.rainGeometry.getAttribute("position"), e = Math.sin(performance.now() * .0012) * .8, a = this.camera.position.x, o = this.camera.position.z;
                for(let n = 0; n < this.rainDropCount; n++){
                    const r = n * 3, l = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + e * .4;
                    this.rainPositions[r + 0] += l * this.deltaSeconds * 8, this.rainPositions[r + 1] -= this.rainVelocities[n] * (1 + Math.abs(e) * .3) * this.deltaSeconds, a + this.rainPositions[r + 0], o + this.rainPositions[r + 2], this.rainPositions[r + 1] < this.rainBottomY && (this.rainPositions[r + 1] = this.rainTopY, this.rainPositions[r + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[r + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[r + 0] > this.rainAreaHalfWidth && (this.rainPositions[r + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[r + 0] < -this.rainAreaHalfWidth && (this.rainPositions[r + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[r + 2] > this.rainAreaHalfDepth && (this.rainPositions[r + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[r + 2] < -this.rainAreaHalfDepth && (this.rainPositions[r + 2] += this.rainAreaHalfDepth * 2 - 35);
                }
                this.rainPoints.position.set(a, 0, o), i.needsUpdate = !0;
            }
            this.waterUpdate(), this.updateSky();
        }
        startRain() {
            if (this.isRainActive) return;
            this.scene.add(this.rainPoints), this.isRainActive = !0;
            const s = performance.now();
            this.rainEndTimestampMs = s + 7e4;
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
            this.thunder = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0;
        }
        createLightningBolt(s, t, i) {
            const e = s + (Math.random() - .5) * 6, a = -4 + Math.random() * 3, o = i + (Math.random() - .5) * 6, n = e - s, r = a - t, l = o - i, c = Math.hypot(n, r, l) || 1, u = n / c, m = r / c, b = l / c, y = n / c, v = -(l / c), j = 0, T = y, f = Math.abs(m) > .9 ? new p(1, 0, 0) : new p(0, 1, 0), A = new p(u, m, b), U = new p().crossVectors(A, f).normalize(), w = new p().crossVectors(A, U).normalize(), x = 2 + Math.random() * 2, I = 1.2, R = Math.random() * Math.PI * 2, E = 3 + Math.random() * 2.5, N = .8, cs = Math.random() * Math.PI * 2, D = 28, M = 4, V = [];
            for(let C = 0; C <= D; C++){
                const k = C / D, S = 1 - k;
                let Y = s + n * k, is = t + r * k, $ = i + l * k;
                const J = Math.sin(k * Math.PI * x + R) * I * (.3 + .7 * S), Z = Math.sin(k * Math.PI * E + cs) * N * (.3 + .7 * S), Q = (Math.random() - .5) * 2 * M * S, W = (Math.random() - .5) * 1.6 * M * S, G = Math.random() < .12 ? (Math.random() - .5) * 3.5 * S : 0;
                if (Y += U.x * (J + Q + G) + w.x * (Z + W * .7), is += U.y * (J + Q * .5) + w.y * (Z + W * .5), $ += U.z * (J + Q + G) + w.z * (Z + W * .7), V.push(Y, is, $), C > 3 && C < D - 3 && Math.random() < .22) {
                    const os = [], fs = 3 + Math.floor(Math.random() * 2), ns = .25 + Math.random() * .35;
                    let gs = Y, vs = is, ws = $;
                    os.push(gs, vs, ws);
                    for(let _s = 1; _s <= fs; _s++)gs += (Math.random() - .5) * M * ns, vs += -(.8 + Math.random() * .8) * ns, ws += (Math.random() - .5) * M * ns, os.push(gs, vs, ws);
                    const Ss = new xs;
                    Ss.setAttribute("position", new Qs(os, 3));
                    const ms = new st(Ss, this.lightningMaterialBase.clone());
                    ms.material.opacity = .6, ms.userData.life = .16 + Math.random() * .12, this.scene.add(ms), this.activeLightningLines.push(ms);
                }
            }
            const us = 2;
            for(let C = -1; C <= us; C++){
                const k = C === -1, S = k ? 0 : C % 2 === 0 ? 1 : -1, Y = .55 + Math.random() * .45, is = .35, $ = Math.random() * Math.PI * 2, J = [], Z = V.length / 3;
                for(let G = 0; G < Z; G++){
                    const os = G / (Z - 1), fs = .35 + .85 * os, ns = Math.sin(os * Math.PI * 2 + $) * is * (.2 + .8 * os), gs = v * S * Y * fs + T * ns * .3, vs = j * S * Y * fs + ns * .05, ws = T * S * Y * fs - v * ns * .3, Ss = G * 3 + 0, ms = G * 3 + 1, _s = G * 3 + 2, Xs = V[Ss], Ks = V[ms], $s = V[_s];
                    k ? J.push(Xs + (Math.random() - .5) * .05, Ks + (Math.random() - .5) * .05, $s + (Math.random() - .5) * .05) : J.push(Xs + gs + (Math.random() - .5) * .2, Ks + vs + (Math.random() - .5) * .2, $s + ws + (Math.random() - .5) * .2);
                }
                const Q = new xs;
                Q.setAttribute("position", new Qs(J, 3));
                const W = new st(Q, this.lightningMaterialBase.clone());
                W.material.opacity = k ? .95 : .32, W.userData.life = .22 + Math.random() * .18, this.scene.add(W), this.activeLightningLines.push(W);
            }
        }
        triggerLightningFlash() {
            const s = this.camera.position.x + (Math.random() - .5) * 30, t = 34 + Math.random() * 6, i = -10 - Math.random() * 20;
            this.createLightningBolt(s, t, i);
        }
        makeRainStreakTexture() {
            const i = new Uint8Array(320);
            for(let a = 0; a < 40; a++){
                const o = Math.pow(Math.sin(a / 39 * Math.PI), 1.5);
                for(let n = 0; n < 2; n++){
                    const r = (a * 2 + n) * 4;
                    i[r + 0] = 255, i[r + 1] = 255, i[r + 2] = 255, i[r + 3] = Math.round(o * 255);
                }
            }
            const e = new Nt(i, 2, 40, Wt);
            return e.needsUpdate = !0, e.magFilter = tt, e.minFilter = tt, e.wrapS = et, e.wrapT = et, e.rotation = Math.PI / 2, e.center.set(.5, .5), e;
        }
    }
    class he {
        constructor(s, t, i, e, a){
            this.initMatch = s, this.loadLevels = t, this.gameClass = i, this.audioClass = e, this.dataClass = a, this.playersNum = 1, this.levelPlayersNum = 1, this.mainMenu(this.initMatch), this.loadRecsData();
        }
        loadRecsData() {
            this.dataClass.loadLocalData();
            let s = this.dataClass.masTables, t = document.querySelectorAll(".rec_table_small"), i = "free_game_my_rec", e = "";
            t[0].innerHTML = "", t[1].innerHTML = "", s.forEach((a, o, n)=>{
                s[o].forEach((r, l, c)=>{
                    s[o][l].findIndex((u)=>u.name === "Мой рекорд") < 3 ? t[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == l + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${s[o][l][0].name == "Мой рекорд" ? i : e}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][l][0].name}</span>
                <div><span class='place_rec'>${s[o][l][0].rec}</span><span>м</span></div>
            </div>
            <div class='green_back two_place ${s[o][l][1].name == "Мой рекорд" ? i : e}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][l][1].name}</span>
                <div><span class='place_rec'>${s[o][l][1].rec}</span><span>м</span></div>
            </div>
            <div class='blue_back three_place ${s[o][l][2].name == "Мой рекорд" ? i : e}'>
                <span class='place_num'>3</span>
                <span class='rec_table_small_name'>${s[o][l][2].name}</span>
                <div><span class='place_rec'>${s[o][l][2].rec}</span><span>м</span></div>
            </div>
          </div>
        `) : t[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == l + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][l][0].name}</span>
                <div><span class='place_rec'>${s[o][l][0].rec}</span><span>м</span></div>
            </div>
            <div class='green_back two_place}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][l][1].name}</span>
                <div><span class='place_rec'>${s[o][l][1].rec}</span><span>м</span></div>
            </div>
            <div class='blue_back three_place ${i}'>
                <span class='place_num'>${s[o][l][3].pos}</span>
                <span class='rec_table_small_name'>${s[o][l][3].name}</span>
                <div><span class='place_rec'>${s[o][l][3].rec}</span><span>м</span></div>
            </div>
          </div>
        `);
                });
            });
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", async ()=>{
                this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            });
            const s = document.querySelector(".levels_blocks");
            s.addEventListener("click", (t)=>{
                const i = t.target.closest(".levels_block");
                if (!i || i.classList.contains("levels_block--locked")) return;
                const e = Number(i.dataset.level) || 1;
                s.querySelectorAll(".levels_block").forEach((a)=>a.classList.remove("active")), i.classList.add("active"), this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, e, !0);
            }), document.querySelectorAll(".level_game_chels").forEach((t, i, e)=>{
                t.addEventListener("click", ()=>{
                    this.levelPlayersNum != i + 1 && (document.querySelectorAll(".level_game_chels").forEach((a)=>{
                        a.classList.remove("level_game_chels_active");
                    }), t.classList.add("level_game_chels_active"), this.levelPlayersNum = i + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
                });
            }), document.querySelector(".free_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 2);
            }), document.querySelector(".free_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 4, !1, !1);
            }), document.querySelectorAll(".free_game_chels").forEach((t, i)=>{
                t.addEventListener("click", ()=>{
                    document.querySelectorAll(".free_game_chels").forEach((l)=>{
                        l.classList.remove("free_game_chels_active");
                    }), t.classList.add("free_game_chels_active");
                    const e = i + 1, a = document.querySelectorAll(".rec_table_small"), o = [];
                    a.forEach((l)=>{
                        const c = l.querySelector(".rec_table_small_block:not(.hidden_screen)");
                        c && (o.push(c), c.getBoundingClientRect(), c.classList.add("anim-out"));
                    });
                    let n = 0;
                    const r = ()=>{
                        if (n++, n < o.length) return;
                        this.playersNum = e, this.loadRecsData();
                        const l = [];
                        document.querySelectorAll(".rec_table_small").forEach((c)=>{
                            const u = c.querySelector(".rec_table_small_block:not(.hidden_screen)");
                            u && (u.classList.add("anim-in"), l.push(u));
                        }), requestAnimationFrame(()=>{
                            l.forEach((u)=>{
                                u.getBoundingClientRect(), u.classList.add("anim-play");
                            });
                            const c = (u)=>{
                                u.classList.remove("anim-in", "anim-play"), u.removeEventListener("transitionend", c);
                            };
                            l.forEach((u)=>u.addEventListener("transitionend", ()=>c(u), {
                                    once: !0
                                }));
                        });
                    };
                    o.length === 0 ? (this.playersNum = e, this.loadRecsData()) : o.forEach((l)=>{
                        l.addEventListener("transitionend", ()=>{
                            l.classList.remove("anim-out"), l.removeEventListener("transitionend", r), r();
                        }, {
                            once: !0
                        });
                    });
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
            const t = pt, i = performance.now(), e = 200;
            function a(o) {
                const n = Math.min(1, (o - i) / e), r = 1 - Math.pow(1 - n, 4), l = Math.round(t + (s - t) * r);
                ce.textContent = String(l).padStart(3, "0"), n < 1 ? requestAnimationFrame(a) : pt = s;
            }
            requestAnimationFrame(a);
        }
    }
    const ce = document.getElementById("meters-float");
    let pt = 0;
    class ue {
        constructor(){
            this.gameStarting = !1, this.pause = !1, this.visible = !0, this.showGamePopup = !1;
        }
    }
    class me {
        constructor(){
            this.levelsStatus = [
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
            ], this.allLevels = 10, this.table = {
                player: {
                    levels: [
                        9,
                        9,
                        9
                    ],
                    bonusHat: [
                        !1,
                        !1,
                        !1
                    ],
                    bonusHeart: [
                        3,
                        0,
                        9
                    ]
                },
                hor: [
                    [
                        {
                            pos: 0,
                            name: "Мой рекорд",
                            rec: 1
                        },
                        {
                            pos: 1,
                            name: "",
                            rec: 5
                        },
                        {
                            pos: 2,
                            name: "",
                            rec: 4
                        },
                        {
                            pos: 3,
                            name: "",
                            rec: 2
                        }
                    ],
                    [
                        {
                            pos: 0,
                            name: "Мой рекорд",
                            rec: 6
                        },
                        {
                            pos: 1,
                            name: "",
                            rec: 5
                        },
                        {
                            pos: 2,
                            name: "",
                            rec: 4
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
                            name: "Мой рекорд",
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
                            name: "Мой рекорд",
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
                            name: "Мой рекорд",
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
                            name: "Мой рекорд",
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
            }, this.masTables = [];
        }
        async clearData() {
            localStorage.clear();
        }
        async saveLocalData() {
            localStorage.setItem("table", JSON.stringify(this.table));
        }
        async loadLocalData() {
            localStorage.getItem("table") !== null ? this.table = JSON.parse(localStorage.getItem("table", this.table)) : localStorage.setItem("table", JSON.stringify(this.table));
            let s = this.table.hor[0].sort((n, r)=>r.rec - n.rec), t = this.table.hor[1].sort((n, r)=>r.rec - n.rec), i = this.table.hor[2].sort((n, r)=>r.rec - n.rec), e = this.table.vert[0].sort((n, r)=>r.rec - n.rec), a = this.table.vert[1].sort((n, r)=>r.rec - n.rec), o = this.table.vert[2].sort((n, r)=>r.rec - n.rec);
            this.masTables = [
                [
                    s,
                    t,
                    i
                ],
                [
                    e,
                    a,
                    o
                ]
            ];
            for(let n = 0; n < 3; n++)for(let r = 0; r < this.allLevels; r++)r < this.table.player.levels[n] ? this.levelsStatus[n][r] = "completed" : r == this.table.player.levels[n] ? this.levelsStatus[n][r] = "available" : this.levelsStatus[n][r] = "locked";
        }
        async loadLevels(s) {
            const t = document.querySelector(".levels_blocks");
            if (!t) return;
            t.classList.add("levels_blocks--reenter"), t.innerHTML = "";
            const i = document.createDocumentFragment(), e = (r)=>{
                switch(console.log(r), r){
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
            }, a = 40, o = 60, n = 600;
            for(let r = 0; r < this.levelsStatus[s].length; r++){
                const l = this.levelsStatus[s][r], { modifierClass: c, labelText: u, ariaState: m } = e(l), b = document.createElement("div");
                b.className = `levels_block ${c}`, b.setAttribute("data-level", String(r + 1)), b.setAttribute("role", "button"), b.setAttribute("tabindex", l === "locked" ? "-1" : "0"), b.setAttribute("aria-label", `Уровень ${r + 1}, ${m}`);
                const y = Math.min(o + r * a, n);
                b.style.setProperty("--show-delay", `${y}ms`);
                const d = document.createElement("div");
                d.className = "levels_block_number", d.textContent = String(r + 1);
                const v = document.createElement("div");
                v.className = "levels_block_status";
                const j = document.createElement("span");
                j.className = `status_chip ${l === "completed" ? "status_chip--completed" : l === "available" ? "status_chip--available" : "status_chip--locked"}`, j.textContent = u, v.append(j), b.append(d, v), b.addEventListener("click", ()=>{
                    l !== "locked" && (document.querySelectorAll(".levels_block").forEach((T)=>T.classList.remove("active")), b.classList.add("active"), console.log(`Выбран уровень ${r + 1}`));
                }), b.addEventListener("keydown", (T)=>{
                    l !== "locked" && (T.key === "Enter" || T.key === " ") && (T.preventDefault(), b.click());
                }), i.append(b);
            }
            t.append(i), requestAnimationFrame(()=>{
                t.classList.remove("levels_blocks--reenter"), t.querySelectorAll(".levels_block").forEach((r)=>{
                    r.classList.add("levels_block--enter");
                });
            });
        }
        replayLevelsEnterAnimation() {
            const s = document.querySelector(".levels_blocks");
            if (!s) return;
            Array.from(s.querySelectorAll(".levels_block")).forEach((i)=>{
                i.classList.remove("levels_block--enter"), i.offsetWidth, i.classList.add("levels_block--enter");
            });
        }
    }
    console.clear();
    let Os, ye = new Bs, bt, zs, As, K, P, L, Ps, O, ys, ds, g = new ue;
    const ps = new qt;
    ps.background = new as(13230580);
    const ft = ee({
        scene: ps
    }), gt = ae({
        scene: ps
    }), z = new Ot(25, window.innerWidth / window.innerHeight, .1, 2e3);
    z.position.y = 2;
    const be = 16 / 9, fe = F.degToRad(25), ge = 2 * Math.atan(Math.tan(fe / 2) * be), Is = Qt();
    function Js() {
        const h = (window.visualViewport?.height || window.innerHeight) * .01;
        document.documentElement.style.setProperty("--vh", `${h}px`);
    }
    Js();
    window.addEventListener("resize", Js);
    window.addEventListener("orientationchange", Js);
    let Es = new Ut;
    document.body.appendChild(Es.dom);
    Es.dom.style.top = "0px";
    Es.dom.style.left = "48%";
    const H = new Vt({
        antialias: !1
    });
    H.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    H.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(H.domElement);
    H.shadowMap.enabled = !0;
    H.shadowMap.type = Yt;
    H.outputColorSpace = Jt;
    H.toneMapping = Xt;
    H.toneMappingExposure = 1.05;
    function vt() {
        const h = document.body.offsetWidth, s = document.body.offsetHeight, t = h / s;
        let i = 2.5 * Math.atan(Math.tan(ge / 2) / t);
        const e = F.degToRad(12), a = F.degToRad(70);
        i = F.clamp(i, e, a), z.fov = F.radToDeg(i), z.aspect = t, z.updateProjectionMatrix(), H.setSize(h, s);
    }
    window.addEventListener("resize", vt);
    vt();
    document.body.addEventListener("touchstart", function() {
        document.body.requestFullscreen().then(()=>{
            screen.orientation.lock("landscape");
        });
    }, !1);
    async function ve() {
        ut(!0), ds = new me, await ds.loadLocalData(), await ds.loadLevels(0), L = new ne, await L.loadAudio(), zs = new he(wt, ds.loadLevels, g, L, ds), ut(!1);
    }
    await ve();
    async function we(h) {
        const s = await Zt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Os = new s.World(new s.Vector3(0, -9.81, 0)), bt = new s.EventQueue(!0), K = new hs(Os, s), ys = new pe(z), As = new le(ps, z, H, O, Is, L), P = new oe(ps, L, K, H, z, Is, O, As, wt, ds, g, ft, gt);
        for(let t = 0; t < h; t++)P.players.push(new ie(ds, ps, L, P, O, z, g));
        Ps = new re(P, Is, H, z, O, L), Ps.addKeyListeners();
    }
    async function xe() {
        await As.loadWorld(), L.musicOn && L.backAudio.play(), L.musicOn && L.oceanAudio.play();
    }
    async function je(h) {
        await P.createLevel(h), await P.loadEnvironments(), await P.loadPlayers(), P.objs.grassPlanes.data.length > 0 && P.objs.grassPlanes.data.forEach((s, t)=>{
            P.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(Hs([
                0
            ], [
                1
            ]));
        }), P.players.length > 0 && P.players.forEach((s, t)=>{
            P.players[t].player.userData.collider.setCollisionGroups(Hs([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function wt(h, s, t = !1) {
        De(), zs.toggleLoader(!0), O = new de, await we(h), P.gameNum = s, await xe(), await je(t), setTimeout(()=>{
            zs.showScreen("hud"), zs.toggleLoader(!1), O.dataLoaded = !0, g.gameStarting = !0;
        }, 300);
    }
    function De() {
        z.position.y = 2, z.position.x = 0, H.toneMappingExposure = 1.05, Ps?.removedKeyListeners(), As = null, K = null, P = null, Ps = null, O = null, ys = null;
    }
    function Pe() {
        if (g.gameStarting && document.querySelector(".menu_in_game").classList.contains("hidden_screen") && P.showScreen("menu_in_game"), g.gameStarting && (ft.update(Ts), gt.update(Ts)), O.dataLoaded && g.gameStarting) {
            O.gameDir == "hor" ? ys.updateMetersFloat(z.position.x - ys.startX) : ys.updateMetersFloat(z.position.y - ys.startY), P.players.forEach((h, s, t)=>{
                h.playerMove();
            }), As.updateLighting(), P.levelAnimate(z), P.cameraMove(z), Es.update();
            for(let h = 0, s = K.dynamicBodies.length; h < s; h++)K.dynamicBodies[h][0].position.copy(K.dynamicBodies[h][1].translation()), K.dynamicBodies[h][0].quaternion.copy(K.dynamicBodies[h][1].rotation());
            K.updateInstancedTransforms(), Os.step(bt), g.gameStarting && H.render(ps, z);
        }
    }
    let Gs = 0;
    const Ts = 1 / 60, ct = .1;
    H.setAnimationLoop(()=>{
        if (O != null) {
            let h = ye.getDelta();
            for(h > ct && (h = ct), Gs += h; Gs >= Ts;)Pe(), Gs -= Ts;
        }
    });
    function ut(h) {
        h ? document.querySelector(".loader_screen").classList.remove("hidden_screen") : document.querySelector(".loader_screen").classList.add("hidden_screen");
    }
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "visible" ? (!g.pause && !g.showGamePopup && (g.gameStarting = !0, L.togglePauseAll(!g.gameStarting)), g.visible = !0) : (!g.pause && !g.showGamePopup ? (g.gameStarting = !1, L.togglePauseAll(!g.gameStarting)) : g.pause || L.togglePauseAll(!g.gameStarting), g.visible = !1);
    });
    document.querySelector(".pause_btn").addEventListener("click", ()=>{
        !g.pause && g.gameStarting && (g.pause = !g.pause, g.pause && (P.showPopupInGame(), g.gameStarting = !1, L.togglePauseAll(!g.gameStarting), P.showScreen("popup_game_btn_close")));
    });
    document.querySelector(".popup_game_btn_close").addEventListener("click", ()=>{
        (g.pause || g.gameStarting) && (g.pause = !g.pause, g.gameStarting = !0, L.togglePauseAll(!g.gameStarting), P.hideScreen("popup_in_game"), P.hideScreen("popup_game_btn_close"));
    });
    document.querySelector(".sound_btn").addEventListener("click", ()=>{
        const h = L.isMuted();
        L.toggleMute(!h);
    });
})();

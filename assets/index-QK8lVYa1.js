import { B as ws, a as ls, P as yt, N as xt, b as Ns, c as Ws, C as Vs, M as Ys, d as Ds, V as p, e as ys, Q as Ms, f as Pt, g as ts, h as js, i as rs, G as Os, E as J, j as es, S as Dt, k as Mt, l as Qs, I as Q, D as ss, m as Ct, n as Ls, O as Js, T as bt, R as xs, o as zs, A as At, p as St, q as zt, r as _s, s as E, t as _t, u as kt, v as B, w as Lt, x as Bt, H as Ht, y as Tt, z as Et, L as Ft, W as Rt, F as Gt, J as It, K as Nt, U as st, X as tt, Y as Wt, Z as Ot, _ as et, $ as at, a0 as qt, a1 as Ut, a2 as Vt, a3 as Yt, a4 as Jt, a5 as Xt, a6 as Kt } from "./three-B76v5LAa.js";
(async ()=>{
    (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload")) return;
        for (const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);
        new MutationObserver((t)=>{
            for (const a of t)if (a.type === "childList") for (const o of a.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function e(t) {
            const a = {};
            return t.integrity && (a.integrity = t.integrity), t.referrerPolicy && (a.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? a.credentials = "include" : t.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function i(t) {
            if (t.ep) return;
            t.ep = !0;
            const a = e(t);
            fetch(t.href, a);
        }
    })();
    const $t = "modulepreload", Zt = function(l, s) {
        return new URL(l, s).href;
    }, it = {}, Qt = function(s, e, i) {
        let t = Promise.resolve();
        if (e && e.length > 0) {
            let h = function(c) {
                return Promise.all(c.map((u)=>Promise.resolve(u).then((y)=>({
                            status: "fulfilled",
                            value: y
                        }), (y)=>({
                            status: "rejected",
                            reason: y
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = n?.nonce || n?.getAttribute("nonce");
            t = h(e.map((c)=>{
                if (c = Zt(c, i), c in it) return;
                it[c] = !0;
                const u = c.endsWith(".css"), y = u ? '[rel="stylesheet"]' : "";
                if (!!i) for(let d = o.length - 1; d >= 0; d--){
                    const f = o[d];
                    if (f.href === c && (!u || f.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${c}"]${y}`)) return;
                const m = document.createElement("link");
                if (m.rel = u ? "stylesheet" : $t, u || (m.as = "script"), m.crossOrigin = "", m.href = c, r && m.setAttribute("nonce", r), document.head.appendChild(m), u) return new Promise((d, f)=>{
                    m.addEventListener("load", d), m.addEventListener("error", ()=>f(new Error(`Unable to preload CSS for ${c}`)));
                });
            }));
        }
        function a(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return t.then((o)=>{
            for (const n of o || [])n.status === "rejected" && a(n.reason);
            return s().catch(a);
        });
    };
    function z(l, s) {
        return Math.random() * (s - l) + l;
    }
    function se() {
        let l = window.matchMedia || window.msMatchMedia;
        return l ? l("(pointer:coarse)").matches : !1;
    }
    function ot(l) {
        return l.reduce((s, e)=>s | 1 << e, 0);
    }
    function Bs(l, s) {
        const e = ot(l), i = ot(s);
        return "0x" + ((e & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
    }
    function nt(l) {
        const s = l.collisionGroups(), e = s >>> 16 & 65535, i = s & 65535;
        function t(a) {
            const o = [];
            for(let n = 0; n < 16; n++)a & 1 << n && o.push(n);
            return o;
        }
        return [
            t(e),
            t(i)
        ];
    }
    function te(l) {
        return typeof l == "number" ? new p(l, l, l) : l?.isVector3 ? l : new p(l?.x ?? 1, l?.y ?? 1, l?.z ?? 1);
    }
    function rt(l) {
        return l?.userData?.id ?? l?.uuid ?? l?.id;
    }
    const ee = new ys(new p(-.5, -.5, -.5), new p(.5, .5, .5)), lt = new Pt, ht = new Ms;
    function dt(l) {
        if (l?.isObject3D) {
            if (l.updateMatrixWorld(!0), l.geometry?.isBufferGeometry) {
                const t = l.geometry;
                if (t.boundingBox || t.computeBoundingBox(), t.boundingBox) {
                    const a = t.boundingBox.clone();
                    return a.applyMatrix4(l.matrixWorld), a;
                }
            }
            return new ys().setFromObject(l);
        }
        const s = l.position ?? l.pos ?? new p, e = te(l.size ?? 1), i = l.quaternion?.isQuaternion ? l.quaternion : l.rotation?.isEuler ? ht.setFromEuler(l.rotation) : ht.set(0, 0, 0, 1);
        return lt.compose(s, i, e), ee.clone().applyMatrix4(lt);
    }
    function W(l, s) {
        const e = dt(l), i = rt(l);
        for(let t = s.length - 1; t >= 0; t--){
            const a = s[t], o = rt(a);
            if (i !== void 0 && o !== void 0 && i === o) continue;
            if (dt(a).intersectsBox(e)) return a;
        }
        return null;
    }
    function pt(l) {
        l.traverse((e)=>{
            e.userData?.persistent || (e.geometry && e.geometry.dispose(), e.material && (Array.isArray(e.material) ? e.material.forEach((i)=>i.dispose()) : e.material.dispose()), e.material && e.material.map && e.material.map.dispose());
        });
        const s = [];
        for (const e of l.children)e.userData?.persistent || s.push(e);
        s.forEach((e)=>l.remove(e));
    }
    function ae({ scene: l, maxParticles: s = 800, gravity: e = -7.8, drag: i = 2, texture: t = null, pointSize: a = .66, blending: o = xt } = {}) {
        if (!l) throw new Error("createSplashSystem: scene is required");
        function n() {
            const j = document.createElement("canvas");
            j.width = j.height = 64;
            const R = j.getContext("2d"), F = R.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
            F.addColorStop(0, "rgba(255,255,255,1)"), F.addColorStop(1, "rgba(255,255,255,0)"), R.fillStyle = F, R.fillRect(0, 0, 64, 64);
            const T = new Vs(j);
            return T.anisotropy = 1, T.needsUpdate = !0, T;
        }
        const r = t || n(), h = new Float32Array(s * 3), c = new Float32Array(s * 3), u = new Float32Array(s), y = new Float32Array(s), w = new Float32Array(s), m = new Uint8Array(s), d = new ws;
        d.setAttribute("position", new ls(h, 3)), d.setAttribute("aSize", new ls(w, 1));
        const f = new yt({
            map: r,
            size: a,
            transparent: !0,
            depthWrite: !1,
            blending: o,
            vertexColors: !1,
            sizeAttenuation: !0
        }), C = new Ns(d, f);
        C.userData.persistent = !0, C.frustumCulled = !1, l.add(C);
        let as = 0;
        function g() {
            for(let v = 0; v < s; v++){
                const j = (as + v) % s;
                if (!m[j]) return as = (j + 1) % s, j;
            }
            return -1;
        }
        function A(v, j, R, F, T) {
            const I = j * 3;
            v[I] = R, v[I + 1] = F, v[I + 2] = T;
        }
        return {
            trigger (v, j = 1, R = {}) {
                const { count: F = 42, spread: T = .35, up: I = 3, horiz: ps = 2.2, ttl: x = [
                    .35,
                    .8
                ], sizeJitter: P = .5 } = R, U = Math.max(1, Math.floor(F * j));
                for(let cs = 0; cs < U; cs++){
                    const D = g();
                    if (D === -1) break;
                    const k = Math.sqrt(Math.random()) * T, S = Math.random() * Math.PI * 2, V = k * Math.cos(S), is = k * Math.sin(S), K = Math.sqrt(Math.random()), Y = Math.cos(S) * ps * K * (.6 + .4 * Math.random()), $ = Math.sin(S) * ps * K * (.6 + .4 * Math.random()), Z = I * (.6 + .4 * Math.random()), N = x[0] + Math.random() * (x[1] - x[0]), G = (1 - P / 2 + Math.random() * P) * 1;
                    A(h, D, v.x + V, v.y, v.z + is), A(c, D, Y * j, Z * j, $ * j), u[D] = N, y[D] = 0, w[D] = G, m[D] = 1;
                }
                d.attributes.position.needsUpdate = !0, d.attributes.aSize.needsUpdate = !0;
            },
            update (v) {
                if (v <= 0) return;
                const j = e, R = Math.max(0, i);
                let F = !1;
                for(let x = 0; x < s; x++){
                    if (!m[x]) continue;
                    if (F = !0, y[x] += v, y[x] >= u[x]) {
                        m[x] = 0;
                        const S = x * 3;
                        h[S] = 1e9, h[S + 1] = 1e9, h[S + 2] = 1e9;
                        continue;
                    }
                    const P = x * 3;
                    c[P + 1] += j * v;
                    const U = c[P], cs = c[P + 1], D = c[P + 2], k = Math.max(0, 1 - R * v);
                    c[P] = U * k, c[P + 1] = cs * k, c[P + 2] = D * k, h[P] += c[P] * v, h[P + 1] += c[P + 1] * v, h[P + 2] += c[P + 2] * v;
                }
                F && (d.attributes.position.needsUpdate = !0);
                let T = 0, I = 0;
                for(let x = 0; x < s; x++)m[x] && (T++, I += 1 - y[x] / u[x]);
                const ps = T ? .25 + .75 * (I / T) : 1;
                f.size = a * ps;
            },
            get object3D () {
                return C;
            },
            dispose () {
                l.remove(C), d.dispose(), f.dispose(), t || r.dispose();
            }
        };
    }
    function ie({ scene: l, size: s = 1.5, ttl: e = .9 } = {}) {
        const i = new Ws(1, 1), t = (()=>{
            const w = document.createElement("canvas");
            w.width = w.height = 64;
            const m = w.getContext("2d");
            return m.clearRect(0, 0, 64, 64), m.strokeStyle = "rgba(255,255,255,0.9)", m.lineWidth = 3, m.beginPath(), m.arc(32, 32, 20, 0, Math.PI * 2), m.stroke(), new Vs(w);
        })(), a = new Ys({
            map: t,
            transparent: !0,
            depthWrite: !1
        }), o = new Ds(i, a);
        o.visible = !1, o.userData.persistent = !0, l.add(o);
        let n = 0, r = !1;
        const h = new p;
        function c(w) {
            h.copy(w), n = 0, r = !0, o.visible = !0;
        }
        function u(w, m) {
            if (!r) return;
            if (n += w, n >= e) {
                r = !1, o.visible = !1;
                return;
            }
            o.position.set(h.x, h.y + .01, h.z), o.rotation.set(-Math.PI / 2, 0, 0);
            const d = n / e, f = s * (1 + 1.6 * d);
            o.scale.setScalar(f), a.opacity = 1 - d;
        }
        function y() {
            l.remove(o), i.dispose(), a.dispose(), t.dispose();
        }
        return {
            trigger: c,
            update: u,
            dispose: y,
            mesh: o
        };
    }
    class oe {
        constructor(s, e, i, t, a, o){
            this.scene = s, this.audioClass = e, this.levelClass = i, this.paramsClass = t, this.camera = a, this.gameClass = o, this.playerHeight = .9, this.playerWidth = .5, this.player = new Ds(new ts(this.playerWidth, this.playerHeight, this.playerWidth), new js({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.player.userData.finish = !1, this.player.userData.splash = !1, this.playerModel, this.playerOut = new Ds(new ts(this.playerWidth, this.playerHeight + .1, this.playerWidth), new rs({
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
            await new Os().loadAsync("models/players/player1.glb").then((i)=>{
                const t = i.scene;
                this.playerModel = t, this.playerModel.traverse(function(a) {
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
            })), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), W(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, e] = nt(this.player.userData.collider);
                e[0] == 0 && this.player.userData.collider.setCollisionGroups(Bs([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, e] = nt(this.player.userData.collider);
                e[0] != 0 && this.player.userData.collider.setCollisionGroups(Bs([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && W(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(W(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(W(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(W(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]))), W(this.player, this.levelClass.objs.topPlanes.data) || W(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, W(this.player, this.levelClass.objs.livesBlocks.data) && !W(this.player, this.levelClass.objs.livesBlocks.data).userData.taked && this.player.userData.lives < 3 && (this.player.userData.lives++, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]), this.reLiveField(), W(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(0, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY - this.levelClass.bounds.bottomY) / 2 * 1.7 && this.player.userData.live && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && (this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "inwater"
            ])), this.levelClass.splash.trigger(new p(this.player.position.x, this.player.position.y + 0, this.player.position.z), 2), this.levelClass.ring.trigger(new p(this.player.position.x, this.player.position.y + .1, this.player.position.z))), this.player.userData.splash = !0), this.player.position.y < -4 && this.gameClass.gameStarting) this.player.userData.splash = !1, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                "back"
            ]), !this.player.userData.finish && this.gameClass.pause, this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.player.userData.finish ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0, !0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.player.userData.lives < 1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.levelClass.levelsMode && (this.player.userData.lives = 0), this.player.userData.finish, this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.gameClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, e, i)=>{
                s.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.musicOn && this.audioClass.playMusic([
                "back"
            ])), (!this.player.userData.live || this.player.userData.finish) && (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((s)=>s.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.paramsClass.gameDir == "vert" ? this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + 1.1, this.player.userData.deadPos.z)) : this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + z(1.1, 3.1), this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1)), this.reLiveField();
            else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, e = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, t = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
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
                const s = this.levelClass.boostHatModels[this.player.userData.canFlyNum], e = this.player.userData.head;
                s.userData.originalScale || (s.userData.originalScale = s.scale.clone()), s.parent !== this.scene && this.scene.attach(s), this.playerModel.updateMatrixWorld(!0), e.updateWorldMatrix(!0, !1);
                const i = new p().setFromMatrixPosition(this.player.userData.head.matrixWorld), t = new Ms;
                this.player.userData.head.getWorldQuaternion(t);
                const a = new Ms().setFromEuler(new J(0, Math.PI / 2, 0)), o = t.clone().multiply(a), r = new p(.01, .14, .05).clone().applyQuaternion(o);
                s.quaternion.copy(o), s.position.copy(i).add(r), s.children[0].children[1].rotation.y += .4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
            } else {
                const s = this.player.userData.canFlyNum;
                if (s !== null && this.levelClass.boostHatModels[s]) {
                    const e = this.levelClass.boostHatModels[s];
                    e.userData.lastPos && (e.position.copy(e.userData.lastPos), e.quaternion.copy(e.userData.lastQuat)), e.userData.fly = !1, e.children[0].children[1].rotation.y += .02;
                }
            }
        }
        lerp(s, e, i) {
            return s + (e - s) * i;
        }
        playerAliving(s) {
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, s && (this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.levelClass.levelsMode ? this.player.userData.lives = 1 : this.player.userData.lives = 3, this.reLiveField()), setTimeout(()=>{
                this.gameClass.gameStarting = !0, this.player.userData.splash = !1;
            }, 100);
        }
        reLiveField() {
            let s = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((e, i, t)=>e.player == this.player)].children;
            for(let e = 0; e < s.length; e++)e > this.player.userData.lives - 1 ? s[e].classList.add("hidden_screen") : s[e].classList.contains("hidden_screen") && s[e].classList.remove("hidden_screen");
        }
    }
    class ne {
        constructor(s, e, i, t, a, o, n, r, h, c, u, y, w){
            this.scene = s, this.audioClass = e, this.physicsClass = i, this.renderer = t, this.camera = a, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.initMatch = h, this.gameClass = u, this.splash = y, this.ring = w, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = c, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new es(16777215), this._nightColor = new es(16771488);
            const m = new Dt, d = .01;
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
                            rotation: new J(0, 0, 0),
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
                    geometryPlane: new ts(this.planeWidth, this.planeHeight, this.planeDepth),
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
                            rotation: new J(0, 0, 0),
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
                    geometryPlaneTop: new ts(this.planeWidth, .4, 1.2),
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
                            rotation: new J(0, 0, 0),
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
                    geometryPlaneGrass: new ts(this.planeWidth, .5, this.planeDepth + .2),
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
                            rotation: new J(0, 0, 0),
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
                    geometryPlaneSensor: new ts(this.planeWidth, .4, 1.2),
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
                            rotation: new J(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new ts(.3, 1, .3),
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
                            rotation: new J(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new Qs(.32, 24, 16),
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
                            rotation: new J(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new Qs(.3),
                    materialBulb: new rs({
                        emissive: new es(16770979),
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
                            rotation: new J(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new p(0, 0, 0)
                            }
                        })),
                    geometryLivesBlock: new Mt(m, f),
                    materialLivesBlock: new rs({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new Q(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(ss), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new Q(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(ss), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new Q(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(ss), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new Q(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(ss), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new Q(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(ss), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new Q(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(ss), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new Q(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(ss), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new Q(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(ss), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (g)=>{
                g.uniforms.fresnelPower = {
                    value: 2.5
                }, g.fragmentShader = g.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const C = new Float32Array(this.count);
            for(let g = 0; g < this.count; g++)C[g] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Ct(C, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (g)=>{
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
            function as(g = 64) {
                const A = document.createElement("canvas");
                A.width = A.height = g;
                const q = A.getContext("2d"), v = q.createRadialGradient(g / 2, g / 2, 0, g / 2, g / 2, g / 2);
                v.addColorStop(0, "rgba(255, 235, 175, 1)"), v.addColorStop(1, "rgba(255, 235, 175, 0)"), q.fillStyle = v, q.fillRect(0, 0, g, g);
                const j = new Vs(A);
                return j.anisotropy = 1, j.generateMipmaps = !1, j.needsUpdate = !0, j;
            }
            this._glowTex = as(), this._emissive = C, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Ls, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s : s ? new p(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new p(1, 1, 1);
        }
        apply(s, e, i) {
            let t = i.userData.invBaseSize;
            if (!t) {
                const r = i.geometry;
                r.computeBoundingBox();
                const h = new p;
                r.boundingBox.getSize(h), t = i.userData.invBaseSize = new p(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new Js;
            const a = this._dummy, o = e[s] || {}, n = this.toVec3(o.size);
            a.position.copy(o.position || new p), o.rotation ? a.rotation.copy(o.rotation) : a.rotation.set(0, 0, 0), a.scale.set(n.x * t.x, n.y * t.y, n.z * t.z), a.updateMatrix(), i.setMatrixAt(s, a.matrix);
        }
        async loadTexture() {
            const s = new bt;
            s.load("textures/plane.jpg", (e)=>{
                const i = new rs({
                    map: e,
                    transparent: !0,
                    opacity: 1
                });
                e.wrapS = xs, e.wrapT = xs, e.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = i;
            }, void 0, function(e) {
                console.error("An error happened.");
            }), s.load("textures/grass.jpg", (e)=>{
                const i = new rs({
                    map: e
                });
                e.wrapS = xs, e.wrapT = xs, e.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = i;
            }, void 0, function(e) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let s = new ts(.5, .7, 1), e = new Ys({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new Ds(s, e), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = z(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((e, i, t)=>{
                document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
            }), s) {
                let e = -2.5, i = -5, t = !1;
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
                    for(let a = 0; a < this.count; a++){
                        let o = z(this.planeWidth, this.planeWidth - 1), n = e + o / 2 + z(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = z(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (t && (o = t[a]), a == 0 ? (this.objs.planes.data[a].size.x = this.planeWidth, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.planes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[a].size.x = this.planeWidth + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : a == 1 ? (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : a == this.count - 1 ? (t ? this.objs.planes.data[a].size.x = t[t.length - 1] - .2 : this.objs.planes.data[a].size.x = 5, this.objs.planes.data[a].size.y = this.planeHeight, t ? this.objs.topPlanes.data[a].size.x = t[t.length - 1] : this.objs.topPlanes.data[a].size.x = 5 + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, t ? this.objs.grassPlanes.data[a].size.x = t[t.length - 1] : this.objs.grassPlanes.data[a].size.x = 5 + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), a == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[a].position.x = 0, this.objs.planes.data[a].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = 0, this.objs.topPlanes.data[a].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = 0, this.objs.grassPlanes.data[a].position.y = r + this.planeHeight / 1.5) : a == 1 ? (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 8, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new zs(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(a, this.objs.planes.data, this.objs.planes.plane), this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), e = n + o / 2;
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
                        let o = z(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        t && (o = t[a]), this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[a].userData.direction = 1 : this.objs.grassPlanes.data[a].userData.direction = -1;
                        let n = i + z(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[a].position.y = n - 1.3, this.objs.grassPlanes.data[a].position.y = n, this.objs.sensorPlanes.data[a].position.y = n - .3, this.objs.topPlanes.data[a].size.y = .3, this.objs.grassPlanes.data[a].size.y = .7, this.objs.sensorPlanes.data[a].size.y = .9, a > 0 ? (this.objs.topPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.sensorPlanes.data[a].size.x = o + .7) : (this.objs.topPlanes.data[a].size.x = 10, this.objs.grassPlanes.data[a].size.x = 10, this.objs.sensorPlanes.data[a].size.x = 10), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 8, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.grassPlanes.data[a].userData.speed = z(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new zs(16247464, 0, 4);
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
                    let e = -2.5;
                    for(let t = 0; t < this.count; t++){
                        let a = z(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = e + a / 2 + z(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = z(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (t > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, t > this.count - 20 ? (this.objs.planes.data[t].size.x = .1, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = .2 + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = .2 + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : t > 0 ? (this.objs.planes.data[t].size.x = a, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = a + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = a + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[t].size.x = this.planeWidth, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = this.planeWidth + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), t == 0) n = 1 - this.planeHeight / 1.5, this.objs.planes.data[t].position.x = 0, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = 0, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = 0, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5;
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
                        this.apply(t, this.objs.planes.data, this.objs.planes.plane), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), e = o + a / 2;
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
                    let i = -5;
                    this.birdYes = !1;
                    for(let t = 0; t < this.count; t++){
                        let a = z(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[t].userData.direction = 1 : this.objs.grassPlanes.data[t].userData.direction = -1;
                        let o = i + z(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[t].position.y = o - 1.3, this.objs.grassPlanes.data[t].position.y = o, this.objs.sensorPlanes.data[t].position.y = o - .3, this.objs.topPlanes.data[t].size.y = .3, this.objs.grassPlanes.data[t].size.y = .7, this.objs.sensorPlanes.data[t].size.y = .9, t > this.count - 20 && (this.objs.topPlanes.data[t].size.x = a / 8 + .1, this.objs.grassPlanes.data[t].size.x = a / 8 + .1, this.objs.sensorPlanes.data[t].size.x = a / 8 + .4), t > 0 ? (this.objs.topPlanes.data[t].size.x = a + .3, this.objs.grassPlanes.data[t].size.x = a + .3, this.objs.sensorPlanes.data[t].size.x = a + .7) : (this.objs.topPlanes.data[t].size.x = 10, this.objs.grassPlanes.data[t].size.x = 10, this.objs.sensorPlanes.data[t].size.x = 10), t > this.count - 10 ? this.objs.grassPlanes.data[t].userData.speed = z(10, 14) / 100 : this.objs.grassPlanes.data[t].userData.speed = z(6, 10) / 100, this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, (t + 1) % 7 === 0) {
                            let n = this.boostHatModel.clone();
                            n.position.x = z(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[t].position.y + .5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                                n.position.x,
                                n.position.y
                            ]), this.scene.add(n);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const n = new zs(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), i = o;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
            this.players.forEach((e, i, t)=>{
                e.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y, s && (e.player.userData.lives = 1, e.reLiveField());
            });
        }
        getHorizontalWorldBounds(s = 0) {
            const e = new p(-1, 0, .5), i = new p(1, 0, .5), t = new p(0, 1, .5), a = new p(0, -1, .5);
            if (e.unproject(this.camera), i.unproject(this.camera), t.unproject(this.camera), a.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = e.clone().sub(o).normalize(), r = i.clone().sub(o).normalize(), h = t.clone().sub(o).normalize(), c = a.clone().sub(o).normalize(), u = (s - o.z) / n.z, y = (s - o.z) / c.z, w = o.clone().add(n.multiplyScalar(u)), m = o.clone().add(r.multiplyScalar(u)), d = o.clone().add(h.multiplyScalar(y)), f = o.clone().add(c.multiplyScalar(y));
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
                for(let e = 0; e < this.objs.grassPlanes.data.length; e++){
                    const i = this.objs.grassPlanes.data[e], t = i.userData.body, a = i.userData.moveHor, o = i.userData.moveVert;
                    if (t && (a || o)) {
                        if (a) {
                            const n = t.translation(), r = a.x1 + a.w1 + i.size.x * .5, h = a.x2 - a.w2 - i.size.x * .5, c = i.userData.speed ?? .05;
                            n.x >= h && (i.userData.direction = -1), n.x <= r && (i.userData.direction = 1);
                            const u = i.userData.direction * c, y = n.x + u;
                            t.setNextKinematicTranslation({
                                x: y,
                                y: n.y,
                                z: n.z
                            }), i.position.x = y, this.objs.lamps.data[e].position.x = y, this.objs.plafons.data[e].position.x = y, this.objs.bulbs.data[e].position.x = y, this.objs.topPlanes.data[e].position.x = y;
                        } else if (o) {
                            const n = t.translation(), r = 2, h = .5, c = i.userData.speed ?? .03;
                            n.y >= r && (i.userData.direction = -1), n.y <= h && (i.userData.direction = 1);
                            const u = i.userData.direction * c, y = n.y + u;
                            t.setNextKinematicTranslation({
                                x: n.x,
                                y,
                                z: n.z
                            }), i.position.y = y, this.objs.lamps.data[e].position.y = y + this.objs.lamps.lampHeight, this.objs.plafons.data[e].position.y = y + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[e].position.y = y + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[e].position.y = y + .2;
                        }
                    }
                    for(let n = 0; n < this.objs.livesBlocks.data.length; n++)this.objs.livesBlocks.data[n].userData.taked ? this.objs.livesBlocks.data[n].position.y < 10 ? (this.objs.livesBlocks.data[n].position.y += .001, this.objs.livesBlocks.data[n].rotation.y += .004) : this.objs.livesBlocks.data[n].userData.taked = !1 : this.objs.livesBlocks.data[n].rotation.y += 4e-4, this.apply(n, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), s = !0;
                }
                s && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let s = 0; s < this.objs.grassPlanes.data.length; s++){
                    const e = this.objs.grassPlanes.data[s], i = this.objs.topPlanes.data[s];
                    this.objs.sensorPlanes.data[s], this.objs.lamps.data[s], this.objs.plafons.data[s], this.objs.bulbs.data[s];
                    const t = e.userData.body, a = e.userData.speed, o = t.translation();
                    o.x > this.bounds.rightX - e.size.x / 2 ? e.userData.direction = -1 : o.x < this.bounds.leftX + e.size.x / 2 && (e.userData.direction = 1);
                    const n = e.userData.direction * a, r = o.x + n;
                    s > 0 && t.setNextKinematicTranslation({
                        x: r,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[s].position.x = r, this.objs.lamps.data[s].position.x = r, this.objs.plafons.data[s].position.x = r, this.objs.bulbs.data[s].position.x = r, this.objs.topPlanes.data[s].position.x = r, this.objs.topPlanes.data[s].position.y = o.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i.position.set(r, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBirdModel() {
            await new Os().loadAsync("models/bird/bird.glb").then((i)=>{
                const t = i.scene, a = i.animations;
                t.scale.x = 2, t.scale.y = 2, t.scale.z = 2, t.position.y = 0, t.rotation.y = -Math.PI / 3, this.angryBirdModel = t, this.angryBirdModel.userData.mixer = new At(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(a[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Ls;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new Os().loadAsync("models/boosts/hat.glb").then((i)=>{
                const t = i.scene;
                this.boostHatModel = t, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new es(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new es(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new es(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, e, i)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new p(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && !this.worldClass.thunder ? (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: z(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird, this.angryBird.userData.speed = z(8, 13) / 100, this.angryBird.userData.flying = !0) : this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && this.worldClass.thunder && (this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const s = new St(new zt({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: _s
            }));
            return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
        }
        lampsAnimate() {
            let s = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
                this.lampsAnimate.did = !1;
                const i = this.camera.position.x - this.bounds.rightX / 1.3, t = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((a, o)=>{
                    a.pointLight;
                    const n = a.position.x >= i && a.position.x <= t, r = o;
                    if (n && !a.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        a.pointLight = h, a.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(a.glow);
                    }
                    if (a.pointLight) {
                        const h = a.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), a.glow.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 0);
                        const c = n ? this.lightIntensity : 0;
                        h.intensity = E.lerp(h.intensity, c, .15);
                        const u = n ? 1 : 0;
                        this._emissive[r] = E.lerp(this._emissive[r], u, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const y = .5 + this._emissive[r] * .8;
                        a.glow && a.glow.scale.setScalar(y);
                        const w = 1.1, m = this._emissive[r], d = 1 + w * m, f = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[r];
                        C.userData._lastBulbFactor !== d && (C.size.set(f.x * d, f.y * d, f.z * d), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = d, s = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), a.pointLight = null, a.glow && (this.glowPool.push(a.glow), this.scene.remove(a.glow), a.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((t, a)=>{
                    const o = t.pointLight;
                    o && (o.intensity = E.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), t.pointLight = null, t.userData.light = !1, t.glow && (this.scene.remove(t.glow), this.glowPool.push(t.glow), t.glow = null))), this.objs.plafons.plafon.setColorAt(a, this._dayColor), i = !0, this._emissive && this._emissive.length > a && (this._emissive[a] = 0);
                    const n = 1.1, r = this._emissive[a], h = 1 + n * r, c = this.objs.bulbs.baseSize, u = this.objs.bulbs.data[a];
                    u.userData._lastBulbFactor !== h && (u.size.set(c.x * h, c.y * h, c.z * h), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), u.userData._lastBulbFactor = h, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const i = this.camera.position.y - this.bounds.topY / 1, t = this.camera.position.y + this.bounds.topY * .8;
                this.objs.plafons.data.forEach((a, o)=>{
                    a.pointLight;
                    const n = a.position.y >= i && a.position.y <= t, r = o;
                    if (n && !a.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        a.pointLight = h, a.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(a.glow);
                    }
                    if (a.pointLight) {
                        const h = a.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), a.glow.position.copy(a.position);
                        const c = n ? this.lightIntensity : 0;
                        h.intensity = E.lerp(h.intensity, c, .15);
                        const u = n ? 1 : 0;
                        this._emissive[r] = E.lerp(this._emissive[r], u, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const y = .8 + this._emissive[r] * .8;
                        a.glow && a.glow.scale.setScalar(y);
                        const w = 1, m = this._emissive[r], d = 1 + w * m, f = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[r];
                        C.userData._lastBulbFactor !== d && (C.size.set(f.x * d, f.y * d, f.z * d), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = d, s = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), a.pointLight = null, a.glow && (this.glowPool.push(a.glow), this.scene.remove(a.glow), a.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((t, a)=>{
                    const o = t.pointLight;
                    !t.pointLight && this._emissive[a] === 0 || (o && (o.intensity = E.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), t.pointLight = null, t.userData.light = !1, t.glow && (this.scene.remove(t.glow), this.glowPool.push(t.glow), t.glow = null))), this.objs.plafons.plafon.setColorAt(a, this._dayColor), i = !0, this._emissive && this._emissive.length > a && (this._emissive[a] = 0));
                }), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed(s = !1) {
            let e;
            if (s ? e = this.players.filter((a, o, n)=>a.player.userData.live) : e = this.players, e.length === 0) return -1;
            let i = 0, t;
            this.paramsClass.gameDir == "vert" ? t = e[0].player.position.y : t = e[0].player.position.x;
            for(let a = 1; a < e.length; a++)e[a].player && e[a].player.userData.live && e[a].player.position && (this.paramsClass.gameDir == "vert" ? e[a].player.position.y > t && (t = e[a].player.position.y, i = a) : e[a].player.position.x > t && (t = e[a].player.position.x, i = a));
            return s ? this.players.indexOf(e[i], 0) : i;
        }
        async loadPlayers() {
            for(let s = 0; s < this.players.length; s++){
                let e = this.players[s];
                e.player.position.x = e.player.position.x - s * 1 + 1, this.physicsClass.addPhysicsToObject(e.player), this.paramsClass.gameDir == "vert" && (e.player.position.y = -0, e.player.userData.collider.setFriction(500)), await e.loadPlayerModel(), e.player.userData.startPos = e.player.position.clone(), this.scene.add(e.player), this.scene.add(e.playerOut), this.scene.add(e.playerModel), this.playerOuts.push(e.playerOut), s < this.players[0].playerColors.length ? e.head.children[0].material.color.set(this.players[0].playerColors[s]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), e.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > s ? e.player.userData.audio.push(this.audioClass.quacks[s].clone()) : e.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(s, e = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = (this.isMobile, 3), s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const i = Math.max(0, this.maxSpeed(!0));
                        if (i >= 0 && !this.worldClass.thunder || this.levelsMode) {
                            let t = 0;
                            this.players.length > 1 ? t = this.players[i].player.position.x : this.paramsClass.gameDir == "hor" && (t = this.players[i].player.position.x + this.bounds.rightX / 2);
                            const a = this.cam.maxBackJump;
                            t < this.cam.targetX - a ? this.cam.targetX = this.cam.targetX - a : this.cam.targetX = t;
                            const o = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .25, e);
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
        damp(s, e, i, t) {
            return s + (e - s) * (1 - Math.exp(-i * t));
        }
        spring(s, e, i, t, a) {
            const o = 2 / t, n = o * a, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = s - e;
            const c = (i + o * h) * a, u = (i - o * c) * r;
            return {
                newPos: e + (h + c) * r,
                newVel: u
            };
        }
        showPopupInGame(s = !1, e = !1) {
            this.gameClass.pause ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn1")) : (this.gameClass.showGamePopup = !0, this.levelsMode ? this.players.every((i)=>i.player.userData.finish) ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15")) : (this.hideScreen("popup_game_btn15"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win")) : (!s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play())), this.showScreen("popup_in_game"), this.gameClass.gameStarting = !1;
        }
        rebindButton(s, e) {
            const i = document.querySelector(s), t = i.cloneNode(!0);
            return i.parentNode.replaceChild(t, i), t.addEventListener("click", e), t;
        }
        menuInGame = ()=>{
            this.rebindButton(".popup_game_btn1", ()=>{
                this.boostHatModels.forEach((e, i, t)=>{
                    e.userData.fly = !1;
                });
                let s = [];
                this.players.forEach((e, i, t)=>{
                    s.push(e.player.position.x);
                }), this.players.forEach((e, i, t)=>{
                    e.playerAliving(!1), e.player.userData.lives = 1, e.player.position.x = Math.max(...s);
                }), this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
            }), this.rebindButton(".popup_game_btn2", ()=>{
                this.audioClass.hardStopAll(), this.players.forEach((s, e, i)=>{
                    s.player.userData.live = !1, s.player.userData.body.setTranslation(new p(0, -5, 0)), s.player.userData.finish = !1, s.playerAliving(!0);
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((s, e, i)=>{
                    s.position.x = this.boostHatCoords[e][0], s.position.y = this.boostHatCoords[e][1], s.userData.fly = !1;
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
                this.audioClass.hardStopAll(), this.paramsClass.dataLoaded = !1, pt(this.scene), this.audioClass.stopMusic(0), setTimeout(()=>{
                    let s = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 777;
                    this.initMatch(this.players.length, this.gameNum, s, this.birdYes);
                }, 100), this.players.forEach((s, e, i)=>{
                    s.playerAliving(!0);
                }), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
            }), this.rebindButton(".popup_game_btn3", ()=>{
                this.audioClass.hardStopAll(), this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.paramsClass.dataLoaded = !1, pt(this.scene), this.audioClass.stopMusic(0);
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
        constructor(s, e){
            this.world = s, this.RAPIER = e, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Js;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const e = s.geometry;
            e.computeBoundingBox();
            const i = new p;
            e.boundingBox.getSize(i);
            const t = new p(1 / (i.x || 1), 1 / (i.y || 1), 1 / (i.z || 1));
            return s.userData.invBase = t, t;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s.clone() : new p(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, e, i) {
            const t = hs._toVec3(i.size), a = hs._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = i.quaternion?.isQuaternion ? i.quaternion : new Ms, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), r = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(r, n), this.instancedBodies.push({
                mesh: s,
                index: e,
                size: t,
                body: n
            });
        }
        addInstancedStatic(s, e, i, t) {
            const a = hs._toVec3(t.size), o = hs._toVec3(t.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = t.quaternion?.isQuaternion ? t.quaternion : new Ms, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            s[i].userData.body = r, s[i].userData.shape = h, s[i].userData.collide = this.world.createCollider(h, r), this.instancedBodies.push({
                mesh: e,
                index: i,
                size: a,
                body: r
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, e = new Set;
            for (const i of this.instancedBodies){
                const t = hs._ensureInvBase(i.mesh), a = i.body.translation(), o = i.body.rotation();
                s.position.set(a.x, a.y, a.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(i.size.x * t.x, i.size.y * t.y, i.size.z * t.z), s.updateMatrix(), i.mesh.setMatrixAt(i.index, s.matrix), e.add(i.mesh);
            }
            for (const i of e)i.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let e, i;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new ys().setFromObject(s);
                const a = Fs(s);
                s.rotation.copy(t), s.userData.size = a, s.userData.orgRotation = t, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = e, s.userData.shape = i;
                let o = e;
                i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(i, e);
                s.userData.collider = n, s.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    s,
                    e,
                    s.id
                ]);
            } else if (s != null && s.userData.name.includes("tops")) {
                let e, i;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new ys().setFromObject(s);
                const a = Fs(s);
                s.rotation.copy(t), s.userData.size = a, s.userData.orgRotation = t, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(0).setFriction(.3), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, e);
                s.userData.body = e, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = e.handle, this.dynamicBodies.push([
                    s,
                    e,
                    s.id
                ]), s.userData.playerHandlesInside = new Set, this.allTops.push(s);
            } else if (s != null && s.userData.name.includes("bird")) {
                let e, i;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new ys().setFromObject(s);
                const a = Fs(s);
                s.rotation.copy(t), s.userData.size = a, s.userData.orgRotation = t, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(1).setFriction(0), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, e);
                s.userData.body = e, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = e.handle, this.dynamicBodies.push([
                    s,
                    e,
                    s.id
                ]);
            }
        }
    }
    const Es = new p;
    function Fs(l) {
        if (l.isMesh && l.geometry) {
            const e = l.geometry;
            return e.boundingBox || e.computeBoundingBox(), e.boundingBox.getSize(Es), Es.multiply(l.scale), Es.clone();
        }
        return new ys().setFromObject(l).getSize(new p);
    }
    class re {
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
            const s = new kt;
            await s.loadAsync("audio/back1.mp3").then((e)=>{
                this.backAudio = new B(this.listener), this.backAudio.setBuffer(e), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/back2.mp3").then((e)=>{
                this.backAudio2 = new B(this.listener), this.backAudio2.setBuffer(e), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/back3.mp3").then((e)=>{
                this.backAudio3 = new B(this.listener), this.backAudio3.setBuffer(e), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(.5), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/ocean.mp3").then((e)=>{
                this.oceanAudio = new B(this.listener), this.oceanAudio.setBuffer(e), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/inwater.mp3").then((e)=>{
                this.inwaterAudio = new B(this.listener), this.inwaterAudio.setBuffer(e), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/loose.mp3").then((e)=>{
                this.looseAudio = new B(this.listener), this.looseAudio.setBuffer(e), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/take.mp3").then((e)=>{
                this.takeAudio = new B(this.listener), this.takeAudio.setBuffer(e), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/ready-jump.mp3").then((e)=>{
                this.readyJumpAudio = new B(this.listener), this.readyJumpAudio.setBuffer(e), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(1e3), this.readyJumpAudio.setVolume(200), this.readyJumpAudio.setPlaybackRate(2), this.musics.push({
                    name: "readyJump",
                    music: this.readyJumpAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack1.mp3").then((e)=>{
                this.jumpAudio = new B(this.listener), this.jumpAudio.setBuffer(e), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(2e3), this.jumpAudio.setVolume(2), this.quacks.push(this.jumpAudio), this.musics.push({
                    name: "quack1",
                    music: this.jumpAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack2.mp3").then((e)=>{
                this.jumpAudio2 = new B(this.listener), this.jumpAudio2.setBuffer(e), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2), this.musics.push({
                    name: "quack2",
                    music: this.jumpAudio2
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack3.mp3").then((e)=>{
                this.jumpAudio3 = new B(this.listener), this.jumpAudio3.setBuffer(e), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3), this.musics.push({
                    name: "quack3",
                    music: this.jumpAudio3
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/rain.mp3").then((e)=>{
                this.rainAudio = new B(this.listener), this.rainAudio.setBuffer(e), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1), this.musics.push({
                    name: "rain",
                    music: this.rainAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/thunder.mp3").then((e)=>{
                this.thunderAudio = new B(this.listener), this.thunderAudio.setBuffer(e), this.thunderAudio.setLoop(!1), this.thunderAudio.setRefDistance(400), this.thunderAudio.setVolume(1), this.thundersAudio.push({
                    name: "thunder1",
                    music: this.thunderAudio
                }), this.musics.push({
                    name: "thunder1",
                    music: this.thunderAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/thunder2.mp3").then((e)=>{
                this.thunderAudio2 = new B(this.listener), this.thunderAudio2.setBuffer(e), this.thunderAudio2.setLoop(!1), this.thunderAudio2.setRefDistance(400), this.thunderAudio2.setVolume(1), this.thundersAudio.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                }), this.musics.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/thunder3.mp3").then((e)=>{
                this.thunderAudio3 = new B(this.listener), this.thunderAudio3.setBuffer(e), this.thunderAudio3.setLoop(!1), this.thunderAudio3.setRefDistance(400), this.thunderAudio3.setVolume(1), this.thundersAudio.push({
                    name: "thunder3",
                    music: this.thunderAudio3
                }), this.musics.push({
                    name: "thunder3",
                    music: this.thunderAudio3
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), this.musics.push({
                name: "back",
                music: this.backAudio
            });
        }
        stopMusic(s) {
            this.musicOn && (s == 0 ? this.musics.forEach((e, i, t)=>{
                e.music.stop();
            }) : s.forEach((e, i, t)=>{
                this.musics.find((a)=>a.name === e).music.stop();
            }));
        }
        pauseMusic(s) {
            this.musicOn && s.forEach((e, i, t)=>{
                this.musics.find((a)=>a.name === e).music.pause();
            });
        }
        playMusic(s) {
            s.forEach((e, i, t)=>{
                let a = this.musics.find((o)=>o.name === e).music;
                !a.isPlaying && this.musicOn && a.play();
            });
        }
        togglePauseAll(s) {
            this.musicOn && (s ? (this.musicNowPlaying = [], this.musics.forEach(({ music: e })=>{
                e.isPlaying && (e.pause(), this.musicNowPlaying.push(e));
            })) : this.musicNowPlaying && this.musicNowPlaying.length && (this.musicNowPlaying.forEach((e)=>{
                e.isPlaying || e.play();
            }), this.musicNowPlaying = []));
        }
        dayNight(s = !0, e = !1) {
            s && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>i.name === "back1").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>e ? i.name === "back3" : i.name === "back2").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class le {
        constructor(s, e, i, t, a, o){
            this.levelClass = s, this.isMobile = e, this.renderer = i, this.camera = t, this.paramsClass = a, this.audioClass = o, this.mouse = new p, this.raycaster = new Lt;
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
            let e = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - e.left) / e.width * 2 - 1, this.mouse.y = -((s.clientY - e.top) / e.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.downKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.downKeys(this.levelClass.players[1].player) : this.downKeys(this.levelClass.players[2].player));
        };
        onTapUp = (s)=>{
            let e = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - e.left) / e.width * 2 - 1, this.mouse.y = -((s.clientY - e.top) / e.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.upKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.upKeys(this.levelClass.players[1].player) : this.upKeys(this.levelClass.players[2].player));
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
    class he {
        constructor(s, e, i, t, a, o){
            this.scene = s, this.camera = e, this.renderer = i, this.paramsClass = t, this.isMobile = a, this.audioClass = o, this.ambientLight = new Bt(11184810, 1), this.hemiLight = new Ht(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Tt(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Js, this.dirLight.target = this.targetObject, this.helper = new Et(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.activeLightningLines = [], this.lightningMaterialBase = new Ft({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: _s,
                depthWrite: !1
            }), this.clock = new Ls, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 25, this.rainAreaHalfDepth = 22, this.rainTopY = 10, this.rainBottomY = -4, this.rainGeometry = new ws, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let e = 0; e < this.rainDropCount; e++){
                const i = e * 3;
                this.rainPositions[i + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[i + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[i + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[e] = 15 + Math.random() * 15, this.rainWindPhase[e] = Math.random() * Math.PI * 2;
            }
            const s = new Float32Array(this.rainDropCount * 3);
            for(let e = 0; e < this.rainDropCount; e++){
                const i = .8 + Math.random() * .2;
                s[e * 3 + 0] = .7 * i, s[e * 3 + 1] = .8 * i, s[e * 3 + 2] = 1 * i;
            }
            this.rainGeometry.setAttribute("position", new ls(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new ls(s, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new yt({
                color: 15658751,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .8,
                transparent: !0,
                opacity: .84,
                size: 9,
                sizeAttenuation: !1,
                depthWrite: !1,
                blending: _s
            }), this.rainPoints = new Ns(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Ws(900, 500), this.water = new Rt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new bt().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = xs;
                }),
                sunDirection: new p,
                sunColor: 16755370,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -2 : this.water.position.y = -2, this.sun = new p, this.sky = new Gt, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new Ds(new Ws(1e4, 1e4), new Ys({
                color: 526362,
                side: It,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const e = 1500, i = new Float32Array(e * 3), t = new Float32Array(e), a = new Float32Array(e * 3);
            for(let h = 0; h < e; h++){
                i[3 * h] = Math.random() * 600 - 300, i[3 * h + 1] = Math.random() * 150 - 100, i[3 * h + 2] = Math.random() * 300 - 500, t[h] = Math.random() * 2 + .7;
                const c = new es().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * h] = c.r, a[3 * h + 1] = c.g, a[3 * h + 2] = c.b;
            }
            const o = new ws;
            o.setAttribute("position", new ls(i, 3)), o.setAttribute("size", new ls(t, 1)), o.setAttribute("color", new ls(a, 3));
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
            this.materialStars = new Nt({
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
                blending: _s
            }), this.stars = new Ns(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, e = Math.sign(s - this._prevCamX);
            this._prevCamX = e, this.stars.position.x = this.camera.position.x;
            const i = E.degToRad(90 - this.parameters.elevation), t = E.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, i, t), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), this.parameters.elevation < 2 && !this.rainStart && (this.rain = !0, this.startRain(), this.audioClass.musicOn && this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1, this.rain && this.parameters.elevation >= -3 && (this.audioClass.rainAudio.stop(), this.rainStart = !1, this.scene.remove(this.rainPoints), this.rain = !1))), this.paramsClass.gameDir == "vert") {
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
            const s = performance.now();
            this.thunder && (s >= this.nextThunderFlashTimestampMs && (this.triggerThunderFlashNow(), this.scheduleNextThunderFlash(s)), s >= this.thunderEndTimestampMs && (this.thunder = !1, this.isThunderActive = !1)), this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);
            const e = 10;
            this.dirLight.shadow.camera.left = -e, this.dirLight.shadow.camera.right = e, this.dirLight.shadow.camera.top = e, this.dirLight.shadow.camera.bottom = -e, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let i = this.activeLightningLines.length - 1; i >= 0; i--){
                const t = this.activeLightningLines[i];
                t.userData.life -= this.deltaSeconds / 1.5, t.material.opacity *= .78, (t.userData.life <= 0 || t.material.opacity <= .02) && (this.scene.remove(t), t.geometry.dispose(), t.material.dispose(), this.activeLightningLines.splice(i, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const i = this.rainGeometry.getAttribute("position"), t = Math.sin(performance.now() * .0012) * .8, a = this.camera.position.x, o = this.camera.position.z;
                for(let n = 0; n < this.rainDropCount; n++){
                    const r = n * 3, h = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + t * .4;
                    this.rainPositions[r + 0] += h * this.deltaSeconds * 6, this.rainPositions[r + 1] -= this.rainVelocities[n] * (1 + Math.abs(t) * .3) * this.deltaSeconds, a + this.rainPositions[r + 0], o + this.rainPositions[r + 2], this.rainPositions[r + 1] < this.rainBottomY && (this.rainPositions[r + 1] = this.rainTopY, this.rainPositions[r + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[r + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[r + 0] > this.rainAreaHalfWidth && (this.rainPositions[r + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[r + 0] < -this.rainAreaHalfWidth && (this.rainPositions[r + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[r + 2] > this.rainAreaHalfDepth && (this.rainPositions[r + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[r + 2] < -this.rainAreaHalfDepth && (this.rainPositions[r + 2] += this.rainAreaHalfDepth * 2 - 35);
                }
                this.rainPoints.position.set(a, 0, o), i.needsUpdate = !0;
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
                const e = s[this.currentThunderIndex % s.length].music;
                e.isPlaying && e.stop(), this.audioClass.musicOn && e.play(), this.currentThunderIndex++;
            }
            this.triggerLightningFlash(), this.lightningFade = 1;
        }
        scheduleNextThunderFlash(s) {
            const e = this.minThunderIntervalMs + Math.random() * (this.maxThunderIntervalMs - this.minThunderIntervalMs);
            this.nextThunderFlashTimestampMs = s + e;
        }
        stopThunderImmediately() {
            this.thunder = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0;
        }
        createLightningBolt(s, e, i) {
            const t = s + (Math.random() - .5) * 6, a = -4 + Math.random() * 3, o = i + (Math.random() - .5) * 6, n = t - s, r = a - e, h = o - i, c = Math.hypot(n, r, h) || 1, u = n / c, y = r / c, w = h / c, m = n / c, f = -(h / c), C = 0, as = m, g = Math.abs(y) > .9 ? new p(1, 0, 0) : new p(0, 1, 0), A = new p(u, y, w), q = new p().crossVectors(A, g).normalize(), v = new p().crossVectors(A, q).normalize(), j = 2 + Math.random() * 2, R = 1.2, F = Math.random() * Math.PI * 2, T = 3 + Math.random() * 2.5, I = .8, ps = Math.random() * Math.PI * 2, x = 28, P = 4, U = [];
            for(let D = 0; D <= x; D++){
                const k = D / x, S = 1 - k;
                let V = s + n * k, is = e + r * k, K = i + h * k;
                const Y = Math.sin(k * Math.PI * j + F) * R * (.3 + .7 * S), $ = Math.sin(k * Math.PI * T + ps) * I * (.3 + .7 * S), Z = (Math.random() - .5) * 2 * P * S, N = (Math.random() - .5) * 1.6 * P * S, G = Math.random() < .12 ? (Math.random() - .5) * 3.5 * S : 0;
                if (V += q.x * (Y + Z + G) + v.x * ($ + N * .7), is += q.y * (Y + Z * .5) + v.y * ($ + N * .5), K += q.z * (Y + Z + G) + v.z * ($ + N * .7), U.push(V, is, K), D > 3 && D < x - 3 && Math.random() < .22) {
                    const os = [], bs = 3 + Math.floor(Math.random() * 2), ns = .25 + Math.random() * .35;
                    let gs = V, fs = is, vs = K;
                    os.push(gs, fs, vs);
                    for(let Ss = 1; Ss <= bs; Ss++)gs += (Math.random() - .5) * P * ns, fs += -(.8 + Math.random() * .8) * ns, vs += (Math.random() - .5) * P * ns, os.push(gs, fs, vs);
                    const As = new ws;
                    As.setAttribute("position", new st(os, 3));
                    const us = new tt(As, this.lightningMaterialBase.clone());
                    us.material.opacity = .6, us.userData.life = .16 + Math.random() * .12, this.scene.add(us), this.activeLightningLines.push(us);
                }
            }
            const cs = 2;
            for(let D = -1; D <= cs; D++){
                const k = D === -1, S = k ? 0 : D % 2 === 0 ? 1 : -1, V = .55 + Math.random() * .45, is = .35, K = Math.random() * Math.PI * 2, Y = [], $ = U.length / 3;
                for(let G = 0; G < $; G++){
                    const os = G / ($ - 1), bs = .35 + .85 * os, ns = Math.sin(os * Math.PI * 2 + K) * is * (.2 + .8 * os), gs = f * S * V * bs + as * ns * .3, fs = C * S * V * bs + ns * .05, vs = as * S * V * bs - f * ns * .3, As = G * 3 + 0, us = G * 3 + 1, Ss = G * 3 + 2, Ks = U[As], $s = U[us], Zs = U[Ss];
                    k ? Y.push(Ks + (Math.random() - .5) * .05, $s + (Math.random() - .5) * .05, Zs + (Math.random() - .5) * .05) : Y.push(Ks + gs + (Math.random() - .5) * .2, $s + fs + (Math.random() - .5) * .2, Zs + vs + (Math.random() - .5) * .2);
                }
                const Z = new ws;
                Z.setAttribute("position", new st(Y, 3));
                const N = new tt(Z, this.lightningMaterialBase.clone());
                N.material.opacity = k ? .95 : .32, N.userData.life = .22 + Math.random() * .18, this.scene.add(N), this.activeLightningLines.push(N);
            }
        }
        triggerLightningFlash() {
            const s = this.camera.position.x + (Math.random() - .5) * 30, e = 34 + Math.random() * 6, i = -10 - Math.random() * 20;
            this.createLightningBolt(s, e, i);
        }
        makeRainStreakTexture() {
            const i = new Uint8Array(60);
            for(let a = 0; a < 15; a++){
                const o = Math.sin(a / 14 * Math.PI);
                for(let n = 0; n < 1; n++){
                    const r = (a * 1 + n) * 4;
                    i[r + 0] = 255, i[r + 1] = 255, i[r + 2] = 255, i[r + 3] = Math.round(o * 255);
                }
            }
            const t = new Wt(i, 1, 15, Ot);
            return t.needsUpdate = !0, t.magFilter = et, t.minFilter = et, t.wrapS = at, t.wrapT = at, t.rotation = Math.PI / 2, t.center.set(.5, .5), t;
        }
    }
    class de {
        constructor(s, e, i, t, a){
            this.initMatch = s, this.loadLevels = e, this.gameClass = i, this.audioClass = t, this.dataClass = a, this.loadLevels(), this.mainMenu(this.initMatch), this.playersNum = 1, this.levelPlayersNum = 1, this.loadRecsData();
        }
        loadRecsData() {
            this.dataClass.loadLocalData();
            let s = this.dataClass.masTables, e = document.querySelectorAll(".rec_table_small"), i = "free_game_my_rec", t = "";
            e[0].innerHTML = "", e[1].innerHTML = "", s.forEach((a, o, n)=>{
                s[o].forEach((r, h, c)=>{
                    s[o][h].findIndex((u)=>u.name === "Мой рекорд") < 3 ? e[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == h + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${s[o][h][0].name == "Мой рекорд" ? i : t}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][h][0].name}</span>
                <div><span class='place_rec'>${s[o][h][0].rec}</span><span>м</span></div>
            </div>
            <div class='green_back two_place ${s[o][h][1].name == "Мой рекорд" ? i : t}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][h][1].name}</span>
                <div><span class='place_rec'>${s[o][h][1].rec}</span><span>м</span></div>
            </div>
            <div class='blue_back three_place ${s[o][h][2].name == "Мой рекорд" ? i : t}'>
                <span class='place_num'>3</span>
                <span class='rec_table_small_name'>${s[o][h][2].name}</span>
                <div><span class='place_rec'>${s[o][h][2].rec}</span><span>м</span></div>
            </div>
          </div>
        `) : e[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == h + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][h][0].name}</span>
                <div><span class='place_rec'>${s[o][h][0].rec}</span><span>м</span></div>
            </div>
            <div class='green_back two_place}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][h][1].name}</span>
                <div><span class='place_rec'>${s[o][h][1].rec}</span><span>м</span></div>
            </div>
            <div class='blue_back three_place ${i}'>
                <span class='place_num'>${s[o][h][3].pos}</span>
                <span class='rec_table_small_name'>${s[o][h][3].name}</span>
                <div><span class='place_rec'>${s[o][h][3].rec}</span><span>м</span></div>
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
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((s, e, i)=>{
                s.addEventListener("click", ()=>{
                    this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, e + 1, !0);
                });
            }), document.querySelectorAll(".level_game_chels").forEach((s, e, i)=>{
                s.addEventListener("click", ()=>{
                    document.querySelectorAll(".level_game_chels").forEach((t)=>{
                        t.classList.remove("level_game_chels_active");
                    }), s.classList.add("level_game_chels_active"), this.levelPlayersNum = e + 1;
                });
            }), document.querySelector(".free_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 2);
            }), document.querySelector(".free_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 4, !1, !1);
            }), document.querySelectorAll(".free_game_chels").forEach((s, e, i)=>{
                s.addEventListener("click", ()=>{
                    document.querySelectorAll(".free_game_chels").forEach((t)=>{
                        t.classList.remove("free_game_chels_active");
                    }), s.classList.add("free_game_chels_active"), this.playersNum = e + 1, this.loadRecsData();
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
    class pe {
        constructor(){
            this.gameDir = "vert", this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class ce {
        constructor(s){
            this.camera = s, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(s) {
            if (s = Math.max(0, Math.floor(s)), s === this.shownFloat) return;
            const e = ct, i = performance.now(), t = 200;
            function a(o) {
                const n = Math.min(1, (o - i) / t), r = 1 - Math.pow(1 - n, 4), h = Math.round(e + (s - e) * r);
                ue.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(a) : ct = s;
            }
            requestAnimationFrame(a);
        }
    }
    const ue = document.getElementById("meters-float");
    let ct = 0;
    class me {
        constructor(){
            this.gameStarting = !1, this.pause = !1, this.visible = !0, this.showGamePopup = !1;
        }
    }
    class ye {
        constructor(){
            this.table00 = {
                player: {
                    hor: [
                        0,
                        0,
                        0
                    ],
                    vert: [
                        0,
                        0,
                        0
                    ],
                    levels: 0,
                    bonusHat: !1
                },
                hor: [
                    [
                        {
                            pos: 0,
                            name: "Мой рекорд",
                            rec: 2
                        },
                        {
                            pos: 1,
                            name: "Александр Динозавров1",
                            rec: 135
                        },
                        {
                            pos: 2,
                            name: "Федор Смолов1",
                            rec: 12
                        },
                        {
                            pos: 3,
                            name: "Птиродактиль Птиродактилев1",
                            rec: 24
                        }
                    ],
                    [
                        {
                            pos: 0,
                            name: "Мой рекорд",
                            rec: 2
                        },
                        {
                            pos: 1,
                            name: "Александр Динозавров2",
                            rec: 135
                        },
                        {
                            pos: 2,
                            name: "Федор Смолов2",
                            rec: 12
                        },
                        {
                            pos: 3,
                            name: "Птиродактиль Птиродактилев2",
                            rec: 24
                        }
                    ],
                    [
                        {
                            pos: 0,
                            name: "Мой рекорд",
                            rec: 2
                        },
                        {
                            pos: 1,
                            name: "Александр Динозавров3",
                            rec: 135
                        },
                        {
                            pos: 2,
                            name: "Федор Смолов3",
                            rec: 12
                        },
                        {
                            pos: 3,
                            name: "Птиродактиль Птиродактилев3",
                            rec: 24
                        }
                    ]
                ],
                vert: [
                    [
                        {
                            pos: 0,
                            name: "Мой рекорд",
                            rec: 2
                        },
                        {
                            pos: 1,
                            name: "0Александр Динозавров1",
                            rec: 135
                        },
                        {
                            pos: 2,
                            name: "0Федор Смолов1",
                            rec: 12
                        },
                        {
                            pos: 3,
                            name: "0Птиродактиль Птиродактилев1",
                            rec: 24
                        }
                    ],
                    [
                        {
                            pos: 0,
                            name: "0Мой рекорд",
                            rec: 2
                        },
                        {
                            pos: 1,
                            name: "0Александр Динозавров2",
                            rec: 135
                        },
                        {
                            pos: 2,
                            name: "0Федор Смолов2",
                            rec: 12
                        },
                        {
                            pos: 3,
                            name: "0Птиродактиль Птиродактилев2",
                            rec: 24
                        }
                    ],
                    [
                        {
                            pos: 0,
                            name: "0Мой рекорд",
                            rec: 2
                        },
                        {
                            pos: 1,
                            name: "0Александр Динозавров3",
                            rec: 135
                        },
                        {
                            pos: 2,
                            name: "0Федор Смолов3",
                            rec: 12
                        },
                        {
                            pos: 3,
                            name: "0Птиродактиль Птиродактилев3",
                            rec: 24
                        }
                    ]
                ]
            }, this.table = {
                player: {
                    levels: 0,
                    bonusHat: !1
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
            this.clearData(), localStorage.getItem("table") !== null ? this.table = localStorage.getItem("table", JSON.stringify(this.table)) : localStorage.setItem("table", JSON.stringify(this.table));
            let s = this.table.hor[0].sort((n, r)=>r.rec - n.rec), e = this.table.hor[1].sort((n, r)=>r.rec - n.rec), i = this.table.hor[2].sort((n, r)=>r.rec - n.rec), t = this.table.vert[0].sort((n, r)=>r.rec - n.rec), a = this.table.vert[1].sort((n, r)=>r.rec - n.rec), o = this.table.vert[2].sort((n, r)=>r.rec - n.rec);
            this.masTables = [
                [
                    s,
                    e,
                    i
                ],
                [
                    t,
                    a,
                    o
                ]
            ];
        }
    }
    console.clear();
    let qs, be = new Ls, gt, ks, Cs, X, M, _, Ps, O, ms, Rs, b = new me;
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
    let ge = Us.length;
    const ds = new qt;
    ds.background = new es(13230580);
    const ft = ae({
        scene: ds
    }), vt = ie({
        scene: ds
    }), L = new Ut(25, window.innerWidth / window.innerHeight, .1, 2e3);
    L.position.y = 2;
    const fe = 16 / 9, ve = E.degToRad(25), we = 2 * Math.atan(Math.tan(ve / 2) * fe), Gs = se();
    function Xs() {
        const l = (window.visualViewport?.height || window.innerHeight) * .01;
        document.documentElement.style.setProperty("--vh", `${l}px`);
    }
    Xs();
    window.addEventListener("resize", Xs);
    window.addEventListener("orientationchange", Xs);
    let Ts = new Vt;
    document.body.appendChild(Ts.dom);
    Ts.dom.style.top = "0px";
    Ts.dom.style.left = "48%";
    const H = new Yt({
        antialias: !0
    });
    H.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    H.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(H.domElement);
    H.shadowMap.enabled = !0;
    H.shadowMap.type = Jt;
    H.outputColorSpace = Xt;
    H.toneMapping = Kt;
    H.toneMappingExposure = 1.05;
    function wt() {
        const l = document.body.offsetWidth, s = document.body.offsetHeight, e = l / s;
        let i = 2.5 * Math.atan(Math.tan(we / 2) / e);
        const t = E.degToRad(12), a = E.degToRad(70);
        i = E.clamp(i, t, a), L.fov = E.radToDeg(i), L.aspect = e, L.updateProjectionMatrix(), H.setSize(l, s);
    }
    window.addEventListener("resize", wt);
    wt();
    document.body.addEventListener("touchstart", function() {
        document.body.requestFullscreen().then(()=>{
            screen.orientation.lock("landscape");
        });
    }, !1);
    async function je() {
        mt(!0), Rs = new ye, await Rs.loadLocalData(), _ = new re, await _.loadAudio(), ks = new de(jt, Ae, b, _, Rs), mt(!1);
    }
    await je();
    async function xe(l) {
        const s = await Qt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        qs = new s.World(new s.Vector3(0, -9.81, 0)), gt = new s.EventQueue(!0), X = new hs(qs, s), ms = new ce(L), Cs = new he(ds, L, H, O, Gs, _), M = new ne(ds, _, X, H, L, Gs, O, Cs, jt, ge, b, ft, vt);
        for(let e = 0; e < l; e++)M.players.push(new oe(ds, _, M, O, L, b));
        Ps = new le(M, Gs, H, L, O, _), Ps.addKeyListeners();
    }
    async function Pe() {
        await Cs.loadWorld(), _.musicOn && _.backAudio.play(), _.musicOn && _.oceanAudio.play();
    }
    async function De(l) {
        await M.createLevel(l), await M.loadEnvironments(), await M.loadPlayers(), M.objs.grassPlanes.data.length > 0 && M.objs.grassPlanes.data.forEach((s, e)=>{
            M.objs.grassPlanes.data[e].userData.collide.setCollisionGroups(Bs([
                0
            ], [
                1
            ]));
        }), M.players.length > 0 && M.players.forEach((s, e)=>{
            M.players[e].player.userData.collider.setCollisionGroups(Bs([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function jt(l, s, e = !1) {
        Me(), ks.toggleLoader(!0), O = new pe, await xe(l), M.gameNum = s, await Pe(), await De(e), setTimeout(()=>{
            ks.showScreen("hud"), ks.toggleLoader(!1), O.dataLoaded = !0, b.gameStarting = !0;
        }, 300);
    }
    function Me() {
        L.position.y = 2, L.position.x = 0, H.toneMappingExposure = 1.05, Ps?.removedKeyListeners(), Cs = null, X = null, M = null, Ps = null, O = null, ms = null;
    }
    function Ce() {
        if (!b.gameStarting && !b.showGamePopup && (document.querySelector(".menu_in_game").classList.contains("hidden_screen") || document.querySelector(".menu_in_game").classList.add("hidden_screen")), (b.pause || b.gameStarting && !b.showGamePopup) && (document.querySelector(".menu_in_game").classList.contains("hidden_screen") && document.querySelector(".menu_in_game").classList.remove("hidden_screen"), b.pause ? document.querySelector(".sound_btn_wrap").classList.add("hidden_screen") : document.querySelector(".sound_btn_wrap").classList.remove("hidden_screen")), b.gameStarting && (ft.update(Hs), vt.update(Hs)), O.dataLoaded && b.gameStarting) {
            O.gameDir == "hor" ? ms.updateMetersFloat(L.position.x - ms.startX) : ms.updateMetersFloat(L.position.y - ms.startY), M.players.forEach((l, s, e)=>{
                l.playerMove();
            }), Cs.updateLighting(), M.levelAnimate(L), M.cameraMove(L), Ts.update();
            for(let l = 0, s = X.dynamicBodies.length; l < s; l++)X.dynamicBodies[l][0].position.copy(X.dynamicBodies[l][1].translation()), X.dynamicBodies[l][0].quaternion.copy(X.dynamicBodies[l][1].rotation());
            X.updateInstancedTransforms(), qs.step(gt), b.gameStarting && H.render(ds, L);
        }
    }
    let Is = 0;
    const Hs = 1 / 60, ut = .1;
    H.setAnimationLoop(()=>{
        if (O != null) {
            let l = be.getDelta();
            for(l > ut && (l = ut), Is += l; Is >= Hs;)Ce(), Is -= Hs;
        }
    });
    async function Ae() {
        const l = document.querySelector(".levels_blocks");
        if (!l) return;
        l.classList.add("levels_blocks--reenter"), l.innerHTML = "";
        const s = document.createDocumentFragment(), e = (o)=>{
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
        }, i = 40, t = 60, a = 600;
        for(let o = 0; o < Us.length; o++){
            const n = Us[o], { modifierClass: r, labelText: h, ariaState: c } = e(n), u = document.createElement("div");
            u.className = `levels_block ${r}`, u.setAttribute("data-level", String(o + 1)), u.setAttribute("role", "button"), u.setAttribute("tabindex", n === "locked" ? "-1" : "0"), u.setAttribute("aria-label", `Уровень ${o + 1}, ${c}`);
            const y = Math.min(t + o * i, a);
            u.style.setProperty("--show-delay", `${y}ms`);
            const w = document.createElement("div");
            w.className = "levels_block_number", w.textContent = String(o + 1);
            const m = document.createElement("div");
            m.className = "levels_block_status";
            const d = document.createElement("span");
            d.className = `status_chip ${n === "completed" ? "status_chip--completed" : n === "available" ? "status_chip--available" : "status_chip--locked"}`, d.textContent = h, m.append(d), u.append(w, m), u.addEventListener("click", ()=>{
                n !== "locked" && (document.querySelectorAll(".levels_block").forEach((f)=>f.classList.remove("active")), u.classList.add("active"), console.log(`Выбран уровень ${o + 1}`));
            }), u.addEventListener("keydown", (f)=>{
                n !== "locked" && (f.key === "Enter" || f.key === " ") && (f.preventDefault(), u.click());
            }), s.append(u);
        }
        l.append(s), requestAnimationFrame(()=>{
            l.classList.remove("levels_blocks--reenter"), l.querySelectorAll(".levels_block").forEach((o)=>{
                o.classList.add("levels_block--enter");
            });
        });
    }
    function mt(l) {
        l ? document.querySelector(".loader_screen").classList.remove("hidden_screen") : document.querySelector(".loader_screen").classList.add("hidden_screen");
    }
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "visible" ? (!b.pause && !b.showGamePopup && (b.gameStarting = !0, _.togglePauseAll(!b.gameStarting)), b.visible = !0) : (!b.pause && !b.showGamePopup ? (b.gameStarting = !1, _.togglePauseAll(!b.gameStarting)) : b.pause || _.togglePauseAll(!b.gameStarting), b.visible = !1);
    });
    document.querySelector(".pause_btn").addEventListener("click", ()=>{
        (b.pause || b.gameStarting) && (b.pause = !b.pause, b.pause ? (b.gameStarting = !1, _.togglePauseAll(!b.gameStarting), M.showPopupInGame()) : (b.gameStarting = !0, _.togglePauseAll(!b.gameStarting), M.hideScreen("popup_in_game")));
    });
    document.querySelector(".sound_btn").addEventListener("click", ()=>{
        const l = _.isMuted();
        _.toggleMute(!l);
    });
})();

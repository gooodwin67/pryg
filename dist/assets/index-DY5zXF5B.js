import { B as Ds, a as hs, P as me, N as De, b as Os, c as Ws, C as Ys, M as Js, d as Cs, V as u, e as ys, Q as Ms, f as xe, g as as, h as xs, i as rs, G as Us, E as X, j as is, S as Pe, k as je, l as se, I as es, D as ts, m as Ce, n as Es, O as Ks, T as ye, R as Ps, o as zs, A as Me, p as _e, q as Ae, r as Bs, s as R, t as Se, u as Le, v as E, w as ke, x as ze, H as Be, y as Ee, z as He, L as Te, W as Fe, F as Re, J as Ne, K as Ie, U as ee, X as te, Y as Ge, Z as qe, _ as ae, $ as ie, a0 as Oe, a1 as We, a2 as Ue, a3 as Ve, a4 as Ye, a5 as Je, a6 as Ke } from "./three-B76v5LAa.js";
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
    const Xe = "modulepreload", $e = function(h, s) {
        return new URL(h, s).href;
    }, oe = {}, Ze = function(s, t, i) {
        let e = Promise.resolve();
        if (t && t.length > 0) {
            let r = function(d) {
                return Promise.all(d.map((b)=>Promise.resolve(b).then((m)=>({
                            status: "fulfilled",
                            value: m
                        }), (m)=>({
                            status: "rejected",
                            reason: m
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), l = n?.nonce || n?.getAttribute("nonce");
            e = r(t.map((d)=>{
                if (d = $e(d, i), d in oe) return;
                oe[d] = !0;
                const b = d.endsWith(".css"), m = b ? '[rel="stylesheet"]' : "";
                if (!!i) for(let y = o.length - 1; y >= 0; y--){
                    const p = o[y];
                    if (p.href === d && (!b || p.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${d}"]${m}`)) return;
                const c = document.createElement("link");
                if (c.rel = b ? "stylesheet" : Xe, b || (c.as = "script"), c.crossOrigin = "", c.href = d, l && c.setAttribute("nonce", l), document.head.appendChild(c), b) return new Promise((y, p)=>{
                    c.addEventListener("load", y), c.addEventListener("error", ()=>p(new Error(`Unable to preload CSS for ${d}`)));
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
    function S(h, s) {
        return Math.random() * (s - h) + h;
    }
    function Qe() {
        let h = window.matchMedia || window.msMatchMedia;
        return h ? h("(pointer:coarse)").matches : !1;
    }
    function ne(h) {
        return h.reduce((s, t)=>s | 1 << t, 0);
    }
    function Hs(h, s) {
        const t = ne(h), i = ne(s);
        return "0x" + ((t & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
    }
    function le(h) {
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
    function st(h) {
        return typeof h == "number" ? new u(h, h, h) : h?.isVector3 ? h : new u(h?.x ?? 1, h?.y ?? 1, h?.z ?? 1);
    }
    function re(h) {
        return h?.userData?.id ?? h?.uuid ?? h?.id;
    }
    const et = new ys(new u(-.5, -.5, -.5), new u(.5, .5, .5)), he = new xe, de = new Ms;
    function ce(h) {
        if (h?.isObject3D) {
            if (h.updateMatrixWorld(!0), h.geometry?.isBufferGeometry) {
                const e = h.geometry;
                if (e.boundingBox || e.computeBoundingBox(), e.boundingBox) {
                    const a = e.boundingBox.clone();
                    return a.applyMatrix4(h.matrixWorld), a;
                }
            }
            return new ys().setFromObject(h);
        }
        const s = h.position ?? h.pos ?? new u, t = st(h.size ?? 1), i = h.quaternion?.isQuaternion ? h.quaternion : h.rotation?.isEuler ? de.setFromEuler(h.rotation) : de.set(0, 0, 0, 1);
        return he.compose(s, i, t), et.clone().applyMatrix4(he);
    }
    function V(h, s) {
        const t = ce(h), i = re(h);
        for(let e = s.length - 1; e >= 0; e--){
            const a = s[e], o = re(a);
            if (i !== void 0 && o !== void 0 && i === o) continue;
            if (ce(a).intersectsBox(t)) return a;
        }
        return null;
    }
    function Fs(h) {
        h.traverse((t)=>{
            t.userData?.persistent || (t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((i)=>i.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose());
        });
        const s = [];
        for (const t of h.children)t.userData?.persistent || s.push(t);
        s.forEach((t)=>h.remove(t));
    }
    function tt({ scene: h, maxParticles: s = 800, gravity: t = -7.8, drag: i = 2, texture: e = null, pointSize: a = .66, blending: o = De } = {}) {
        if (!h) throw new Error("createSplashSystem: scene is required");
        function n() {
            const P = document.createElement("canvas");
            P.width = P.height = 64;
            const B = P.getContext("2d"), N = B.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
            N.addColorStop(0, "rgba(255,255,255,1)"), N.addColorStop(1, "rgba(255,255,255,0)"), B.fillStyle = N, B.fillRect(0, 0, 64, 64);
            const F = new Ys(P);
            return F.anisotropy = 1, F.needsUpdate = !0, F;
        }
        const l = e || n(), r = new Float32Array(s * 3), d = new Float32Array(s * 3), b = new Float32Array(s), m = new Float32Array(s), f = new Float32Array(s), c = new Uint8Array(s), y = new Ds;
        y.setAttribute("position", new hs(r, 3)), y.setAttribute("aSize", new hs(f, 1));
        const p = new me({
            map: l,
            size: a,
            transparent: !0,
            depthWrite: !1,
            blending: o,
            vertexColors: !1,
            sizeAttenuation: !0
        }), x = new Os(y, p);
        x.userData.persistent = !0, x.frustumCulled = !1, h.add(x);
        let L = 0;
        function O() {
            for(let w = 0; w < s; w++){
                const P = (L + w) % s;
                if (!c[P]) return L = (P + 1) % s, P;
            }
            return -1;
        }
        function g(w, P, B, N, F) {
            const W = P * 3;
            w[W] = B, w[W + 1] = N, w[W + 2] = F;
        }
        return {
            trigger (w, P = 1, B = {}) {
                const { count: N = 42, spread: F = .35, up: W = 3, horiz: ps = 2.2, ttl: j = [
                    .35,
                    .8
                ], sizeJitter: _ = .5 } = B, Y = Math.max(1, Math.floor(N * P));
                for(let us = 0; us < Y; us++){
                    const A = O();
                    if (A === -1) break;
                    const z = Math.sqrt(Math.random()) * F, k = Math.random() * Math.PI * 2, J = z * Math.cos(k), os = z * Math.sin(k), Z = Math.sqrt(Math.random()), K = Math.cos(k) * ps * Z * (.6 + .4 * Math.random()), Q = Math.sin(k) * ps * Z * (.6 + .4 * Math.random()), ss = W * (.6 + .4 * Math.random()), U = j[0] + Math.random() * (j[1] - j[0]), q = (1 - _ / 2 + Math.random() * _) * 1;
                    g(r, A, w.x + J, w.y, w.z + os), g(d, A, K * P, ss * P, Q * P), b[A] = U, m[A] = 0, f[A] = q, c[A] = 1;
                }
                y.attributes.position.needsUpdate = !0, y.attributes.aSize.needsUpdate = !0;
            },
            update (w) {
                if (w <= 0) return;
                const P = t, B = Math.max(0, i);
                let N = !1;
                for(let j = 0; j < s; j++){
                    if (!c[j]) continue;
                    if (N = !0, m[j] += w, m[j] >= b[j]) {
                        c[j] = 0;
                        const k = j * 3;
                        r[k] = 1e9, r[k + 1] = 1e9, r[k + 2] = 1e9;
                        continue;
                    }
                    const _ = j * 3;
                    d[_ + 1] += P * w;
                    const Y = d[_], us = d[_ + 1], A = d[_ + 2], z = Math.max(0, 1 - B * w);
                    d[_] = Y * z, d[_ + 1] = us * z, d[_ + 2] = A * z, r[_] += d[_] * w, r[_ + 1] += d[_ + 1] * w, r[_ + 2] += d[_ + 2] * w;
                }
                N && (y.attributes.position.needsUpdate = !0);
                let F = 0, W = 0;
                for(let j = 0; j < s; j++)c[j] && (F++, W += 1 - m[j] / b[j]);
                const ps = F ? .25 + .75 * (W / F) : 1;
                p.size = a * ps;
            },
            get object3D () {
                return x;
            },
            dispose () {
                h.remove(x), y.dispose(), p.dispose(), e || l.dispose();
            }
        };
    }
    function at({ scene: h, size: s = 1.5, ttl: t = .9 } = {}) {
        const i = new Ws(1, 1), e = (()=>{
            const f = document.createElement("canvas");
            f.width = f.height = 64;
            const c = f.getContext("2d");
            return c.clearRect(0, 0, 64, 64), c.strokeStyle = "rgba(255,255,255,0.9)", c.lineWidth = 3, c.beginPath(), c.arc(32, 32, 20, 0, Math.PI * 2), c.stroke(), new Ys(f);
        })(), a = new Js({
            map: e,
            transparent: !0,
            depthWrite: !1
        }), o = new Cs(i, a);
        o.visible = !1, o.userData.persistent = !0, h.add(o);
        let n = 0, l = !1;
        const r = new u;
        function d(f) {
            r.copy(f), n = 0, l = !0, o.visible = !0;
        }
        function b(f, c) {
            if (!l) return;
            if (n += f, n >= t) {
                l = !1, o.visible = !1;
                return;
            }
            o.position.set(r.x, r.y + .01, r.z), o.rotation.set(-Math.PI / 2, 0, 0);
            const y = n / t, p = s * (1 + 1.6 * y);
            o.scale.setScalar(p), a.opacity = 1 - y;
        }
        function m() {
            h.remove(o), i.dispose(), a.dispose(), e.dispose();
        }
        return {
            trigger: d,
            update: b,
            dispose: m,
            mesh: o
        };
    }
    class it {
        constructor(s, t, i, e, a, o, n){
            this.dataClass = s, this.scene = t, this.audioClass = i, this.levelClass = e, this.paramsClass = a, this.camera = o, this.gameClass = n, this.playerHeight = .9, this.playerWidth = .5, this.player = new Cs(new as(this.playerWidth, this.playerHeight, this.playerWidth), new xs({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.score, this.player.userData.maxLives = 3, this.player.userData.lives = this.player.userData.maxLives, this.player.userData.bonusHeart = 0, this.player.userData.finish = !1, this.player.userData.splash = !1, this.playerModel, this.playerOut = new Cs(new as(this.playerWidth, this.playerHeight + .1, this.playerWidth), new rs({
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
            await new Us().loadAsync("models/players/player1.glb").then((i)=>{
                const e = i.scene;
                this.playerModel = e, this.playerModel.traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if (this.levelClass.levelsMode && this.dataClass.levelCoopMode == "coop" ? this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new u(0, -5, 0));
            }) : this.levelClass.players.every((s)=>s.player.userData.finish || s.player.userData.lives <= 0) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new u(0, -5, 0));
            }) : this.levelClass.levelsMode && this.dataClass.levelCoopMode == "contest" && this.levelClass.players.some((s)=>s.player.userData.finish) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new u(0, -5, 0));
            }), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), V(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, t] = le(this.player.userData.collider);
                t[0] == 0 && this.player.userData.collider.setCollisionGroups(Hs([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, t] = le(this.player.userData.collider);
                t[0] != 0 && this.player.userData.collider.setCollisionGroups(Hs([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && V(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(V(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(V(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(V(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]))), V(this.player, this.levelClass.objs.topPlanes.data) || V(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, V(this.player, this.levelClass.objs.livesBlocks.data) && !V(this.player, this.levelClass.objs.livesBlocks.data).userData.taked && this.player.userData.lives < this.player.userData.maxLives && (this.player.userData.lives++, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]), this.reLiveField(), V(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new u(this.player.userData.body.translation().x, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY - this.levelClass.bounds.bottomY) / 2 * 1.7 && this.player.userData.live && this.levelClass.scoreClass.score > 8 && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new u(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && (this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.musicOn && this.dataClass.levelCoopMode == "coop" ? this.audioClass.playMusic([
                "inwater"
            ]) : this.audioClass.musicOn && this.dataClass.levelCoopMode == "contest" && !this.levelClass.players.some((s)=>s.player.userData.finish) && this.audioClass.playMusic([
                "inwater"
            ])), this.levelClass.splash.trigger(new u(this.player.position.x, this.player.position.y + 0, this.player.position.z), 2), this.levelClass.ring.trigger(new u(this.player.position.x, this.player.position.y + .1, this.player.position.z))), this.player.userData.splash = !0), this.player.position.y < -4 && this.gameClass.gameStarting) {
                if (this.player.userData.splash = !1, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                    "back"
                ]), !this.player.userData.finish && this.gameClass.pause, this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.player.userData.finish ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0, !0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.player.userData.lives < 1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.levelClass.levelsMode && (this.player.userData.lives = 0), this.player.userData.finish, this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.gameClass.gameStarting && (this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.pauseMusic([
                    "rain"
                ]), this.dataClass.levelCoopMode == "coop" ? (this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : this.dataClass.levelCoopMode == "contest" && (this.levelClass.players.some((s)=>s.player.userData.finish) ? (this.levelClass.showPopupInGame(!1, !0), this.levelClass.players.forEach((s, t, i)=>{
                    s.player.userData.finish && (this.dataClass.table.levelsStatusContest[this.levelClass.levelsMode - 1] = t + 1, console.log(this.dataClass.table.levelsStatusContest), this.dataClass.saveLocalData(), this.dataClass.loadLevelsContest(), this.dataClass.loadLocalData());
                })) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0))), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, t, i)=>{
                    s.userData.fly = !1;
                }), this.playerAliving(!1), this.audioClass.musicOn && this.audioClass.playMusic([
                    "back"
                ]), this.audioClass.musicOn && this.levelClass.worldClass.rain && this.audioClass.playMusic([
                    "rain"
                ])), !this.player.userData.live || this.player.userData.finish) {
                    if (this.player.userData.body.setLinvel(new u(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos) {
                        const s = this.levelClass.objs.grassPlanes.data;
                        for(let t = 0; t < s.length - 1; t++){
                            const i = s[t];
                            if (i.position.x >= this.player.position.x - 1 && !i.userData.moveHor && !i.userData.moveVert) {
                                this.player.userData.deadPos = i.position;
                                break;
                            }
                        }
                        this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position);
                    }
                    this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                        x: 0,
                        y: 0,
                        z: 0
                    }, !0), this.paramsClass.gameDir == "vert" ? this.player.userData.body.setTranslation(new u(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y, this.player.userData.deadPos.z)) : this.player.userData.body.setTranslation(new u(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + S(1.1, 3.1), this.player.userData.deadPos.z)), this.player.userData.deadPos = new u(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1);
                }
                this.reLiveField();
            } else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, t = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, e = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, l = this.player.userData.readyJump ? .75 : 1.18, r = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, l, .1), this.head.position.z = this.lerp(this.head.position.z, r, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const d = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, d, .4);
                const b = this.player.userData.readyJump ? .6 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, b, .1),
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
                const i = new u().setFromMatrixPosition(this.player.userData.head.matrixWorld), e = new Ms;
                this.player.userData.head.getWorldQuaternion(e);
                const a = new Ms().setFromEuler(new X(0, Math.PI / 2, 0)), o = e.clone().multiply(a), l = new u(.01, .14, .05).clone().applyQuaternion(o);
                s.quaternion.copy(o), s.position.copy(i).add(l), s.children[0].children[1].rotation.y += .4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
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
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, s && (this.levelClass.reloadLevel(this.levelClass.players.findIndex((t, i, e)=>t.player == this.player)), this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.levelClass.levelsMode ? this.player.userData.lives = 1 : this.player.userData.lives = this.player.userData.maxLives, this.reLiveField(), this.player.userData.score = 0), setTimeout(()=>{
                this.gameClass.gameStarting = !0, this.player.userData.splash = !1;
            }, 100);
        }
        reLiveField() {
            let s = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((i, e, a)=>i.player == this.player)].children, t = document.querySelectorAll(".num_bonus_heart")[this.levelClass.players.findIndex((i, e, a)=>i.player == this.player)];
            for(let i = 0; i < s.length; i++)i > this.player.userData.lives - 1 ? s[i].classList.add("opacity_my-screen") : s[i].classList.contains("opacity_my-screen") && s[i].classList.remove("opacity_my-screen");
            this.player.userData.lives > 3 ? (t.classList.contains("opacity_my-screen") && t.classList.remove("opacity_my-screen"), t.textContent = this.player.userData.bonusHeart) : t.classList.contains("opacity_my-screen") || t.classList.add("opacity_my-screen");
        }
    }
    class ot {
        constructor(s, t, i, e, a, o, n, l, r, d, b, m, f, c){
            this.scene = s, this.audioClass = t, this.physicsClass = i, this.renderer = e, this.camera = a, this.isMobile = o, this.paramsClass = n, this.worldClass = l, this.initMatch = r, this.gameClass = b, this.splash = m, this.ring = f, this.dataClass = d, this.scoreClass = c, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = this.dataClass.allLevels, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new is(16777215), this._nightColor = new is(16771488);
            const y = new Pe, p = .01;
            y.moveTo(5 * p, 5 * p), y.bezierCurveTo(5 * p, 5 * p, 4 * p, 2 * p, 0 * p, 2 * p), y.bezierCurveTo(-6 * p, 2 * p, -6 * p, 7 * p, -6 * p, 7 * p), y.bezierCurveTo(-6 * p, 10 * p, -3 * p, 14 * p, 5 * p, 18 * p), y.bezierCurveTo(12 * p, 14 * p, 16 * p, 10 * p, 16 * p, 7 * p), y.bezierCurveTo(16 * p, 7 * p, 16 * p, 2 * p, 10 * p, 2 * p), y.bezierCurveTo(7 * p, 2 * p, 5 * p, 5 * p, 5 * p, 5 * p);
            const x = {
                depth: .22,
                bevelEnabled: !1,
                curveSegments: 12,
                steps: 1
            };
            this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (g, C)=>({
                            position: new u(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new u(1, 1, 1),
                            size: new u(1, 1, 1),
                            userData: {
                                name: "plane",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlane: new as(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new xs({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, C)=>({
                            position: new u(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new u(1, 1, 1),
                            size: new u(1, 1, 1),
                            userData: {
                                name: "topSensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneTop: new as(this.planeWidth, .4, 1.2),
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
                    }, (g, C)=>({
                            position: new u(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new u(1, 1, 1),
                            size: new u(1, 1, 1),
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
                    geometryPlaneGrass: new as(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new xs({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, C)=>({
                            position: new u(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new u(1, 1, 1),
                            size: new u(1, 1, 1),
                            userData: {
                                name: "sensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneSensor: new as(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new xs({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (g, C)=>({
                            position: new u(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new u(1, 1, 1),
                            size: new u(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new as(.3, 1, .3),
                    materialLamp: new xs({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (g, C)=>({
                            position: new u(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new u(1, 1, 1),
                            size: new u(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new se(.32, 24, 16),
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
                    }, (g, C)=>({
                            position: new u(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new u(1, 1, 1),
                            size: new u(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new se(.3),
                    materialBulb: new rs({
                        emissive: new is(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                },
                livesBlocks: {
                    data: Array.from({
                        length: this.count
                    }, (g, C)=>({
                            position: new u(0, -10, 0),
                            rotation: new X(0, 0, 0),
                            scale: new u(1, 1, 1),
                            size: new u(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new u(0, 0, 0)
                            }
                        })),
                    geometryLivesBlock: new je(y, x),
                    materialLivesBlock: new rs({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new es(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(ts), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new es(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(ts), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new es(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(ts), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new es(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(ts), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new es(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(ts), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new es(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(ts), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new es(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(ts), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new es(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(ts), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (g)=>{
                g.uniforms.fresnelPower = {
                    value: 2.5
                }, g.fragmentShader = g.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const L = new Float32Array(this.count);
            for(let g = 0; g < this.count; g++)L[g] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Ce(L, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (g)=>{
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
            function O(g = 64) {
                const C = document.createElement("canvas");
                C.width = C.height = g;
                const w = C.getContext("2d"), P = w.createRadialGradient(g / 2, g / 2, 0, g / 2, g / 2, g / 2);
                P.addColorStop(0, "rgba(255, 235, 175, 1)"), P.addColorStop(1, "rgba(255, 235, 175, 0)"), w.fillStyle = P, w.fillRect(0, 0, g, g);
                const B = new Ys(C);
                return B.anisotropy = 1, B.generateMipmaps = !1, B.needsUpdate = !0, B;
            }
            this._glowTex = O(), this._emissive = L, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new u(-1, 0, 0), this.rightEdge = new u(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Es, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new u(s, s, s) : s?.isVector3 ? s : s ? new u(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new u(1, 1, 1);
        }
        apply(s, t, i) {
            let e = i.userData.invBaseSize;
            if (!e) {
                const l = i.geometry;
                l.computeBoundingBox();
                const r = new u;
                l.boundingBox.getSize(r), e = i.userData.invBaseSize = new u(1 / (r.x || 1), 1 / (r.y || 1), 1 / (r.z || 1));
            }
            this._dummy ||= new Ks;
            const a = this._dummy, o = t[s] || {}, n = this.toVec3(o.size);
            a.position.copy(o.position || new u), o.rotation ? a.rotation.copy(o.rotation) : a.rotation.set(0, 0, 0), a.scale.set(n.x * e.x, n.y * e.y, n.z * e.z), a.updateMatrix(), i.setMatrixAt(s, a.matrix);
        }
        async loadTexture() {
            const s = new ye;
            s.load("textures/plane.jpg", (t)=>{
                const i = new rs({
                    map: t,
                    transparent: !0,
                    opacity: 1
                });
                t.wrapS = Ps, t.wrapT = Ps, t.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = i;
            }, void 0, function(t) {
                console.error("An error happened.");
            }), s.load("textures/grass.jpg", (t)=>{
                const i = new rs({
                    map: t
                });
                t.wrapS = Ps, t.wrapT = Ps, t.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = i;
            }, void 0, function(t) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let s = new as(.5, .7, 1), t = new Js({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new Cs(s, t), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = S(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((t, i, e)=>{
                document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
            }), s) {
                this.isMobile ? this.getHorizontalWorldBounds() : this.getHorizontalWorldBounds(-7);
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
                        let o = S(this.planeWidth, this.planeWidth - 1), n = t + o / 2 + S(this.fixedDistanceHor.min, this.fixedDistanceHor.max), l = S(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e && (o = e[a]), a == 0 ? (this.objs.planes.data[a].size.x = this.planeWidth, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.planes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[a].size.x = this.planeWidth + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : a == 1 ? (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : a == this.count - 1 ? (e ? this.objs.planes.data[a].size.x = e[e.length - 1] - .2 : this.objs.planes.data[a].size.x = 5, this.objs.planes.data[a].size.y = this.planeHeight, e ? this.objs.topPlanes.data[a].size.x = e[e.length - 1] : this.objs.topPlanes.data[a].size.x = 5 + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, e ? this.objs.grassPlanes.data[a].size.x = e[e.length - 1] : this.objs.grassPlanes.data[a].size.x = 5 + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), a == 0 ? (l = 1 - this.planeHeight / 1.5, this.objs.planes.data[a].position.x = 0, this.objs.planes.data[a].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = 0, this.objs.topPlanes.data[a].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = 0, this.objs.grassPlanes.data[a].position.y = l + this.planeHeight / 1.5) : a == 1 ? (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = l + this.planeHeight / 1.5) : (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = l + this.planeHeight / 1.5), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 8, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.lights.length < this.lightsCount) {
                            const r = new zs(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
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
                        let o = S(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        e && (o = e[a]), this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[a].userData.direction = 1 : this.objs.grassPlanes.data[a].userData.direction = -1;
                        let n = i + S(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[a].position.y = n - 1.3, this.objs.grassPlanes.data[a].position.y = n, this.objs.sensorPlanes.data[a].position.y = n - .3, this.objs.topPlanes.data[a].size.y = .3, this.objs.grassPlanes.data[a].size.y = .7, this.objs.sensorPlanes.data[a].size.y = .9, a > 0 ? (this.objs.topPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.sensorPlanes.data[a].size.x = o + .7) : (this.objs.topPlanes.data[a].size.x = 10, this.objs.grassPlanes.data[a].size.x = 10, this.objs.sensorPlanes.data[a].size.x = 10), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 8, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.grassPlanes.data[a].userData.speed = S(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const l = new zs(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.isMobile ? this.getHorizontalWorldBounds() : this.getHorizontalWorldBounds(-7);
            } else switch(this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let t = -2.5;
                    for(let e = 0; e < this.count; e++){
                        let a = S(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = t + a / 2 + S(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = S(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, e > this.count - 20 ? (this.objs.planes.data[e].size.x = .1, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = .2 + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = .2 + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e > 0 ? (this.objs.planes.data[e].size.x = a, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = a + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (n = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5) : e == 1 ? (o = 6, this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5) : e > 1 && (this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new zs(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), t = o + a / 2;
                    }
                    for(let e = 0; e < this.count; e++)if (e > 4 && e < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[e - 1].userData.moveHor && (this.objs.grassPlanes.data[e].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10), e > 7 && e < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[e - 1].userData.moveHor && !this.objs.grassPlanes.data[e - 1].userData.moveVert && (this.objs.grassPlanes.data[e].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10), this.objs.grassPlanes.data[e].position.y > this.maxHeight && (this.maxHeight = this.objs.grassPlanes.data[e].position.y), e > 7 && Math.random() < .1 && !this.objs.grassPlanes.data[e].userData.moveHor && !this.objs.grassPlanes.data[e].userData.moveVert && (this.objs.livesBlocks.data[e].position.x = this.objs.grassPlanes.data[e].position.x - this.objs.grassPlanes.data[e].size.x / 2 + this.objs.livesBlocks.data[e].size.x / 2, this.objs.livesBlocks.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.livesBlocks.data[e].size.y / 2 + .2, this.objs.livesBlocks.data[e].userData.startPos = this.objs.livesBlocks.data[e].position.clone()), this.apply(e, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock), e > 2 && (e + 1) % 10 === 1) {
                        let a = this.boostHatModel.clone();
                        a.position.x = this.objs.grassPlanes.data[e].position.x, a.position.y = this.objs.topPlanes.data[e].position.y + 2, a.rotation.y = -Math.PI / 2, a.userData.num = e, this.boostHatModels.push(a), this.boostHatMeshes.push(a.children[0].children[0].children[0]), this.boostHatCoords.push([
                            a.position.x,
                            a.position.y
                        ]), this.scene.add(a);
                    }
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.livesBlocks.livesBlock), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let i = -5;
                    this.birdYes = !1;
                    for(let e = 0; e < this.count; e++){
                        let a = S(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[e].userData.direction = 1 : this.objs.grassPlanes.data[e].userData.direction = -1;
                        let o = i + S(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[e].position.y = o - 1.3, this.objs.grassPlanes.data[e].position.y = o, this.objs.sensorPlanes.data[e].position.y = o - .3, this.objs.topPlanes.data[e].size.y = .3, this.objs.grassPlanes.data[e].size.y = .7, this.objs.sensorPlanes.data[e].size.y = .9, e > this.count - 20 && (this.objs.topPlanes.data[e].size.x = a / 8 + .1, this.objs.grassPlanes.data[e].size.x = a / 8 + .1, this.objs.sensorPlanes.data[e].size.x = a / 8 + .4), e > 0 ? (this.objs.topPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.sensorPlanes.data[e].size.x = a + .7) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), e > this.count - 10 ? this.objs.grassPlanes.data[e].userData.speed = S(10, 14) / 100 : this.objs.grassPlanes.data[e].userData.speed = S(6, 10) / 100, this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, (e + 1) % 7 === 0) {
                            let n = this.boostHatModel.clone();
                            n.position.x = S(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[e].position.y + .5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                                n.position.x,
                                n.position.y
                            ]), this.scene.add(n);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const n = new zs(16247464, 0, 4);
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
            const t = new u(-1, 0, .5), i = new u(1, 0, .5), e = new u(0, 1, .5), a = new u(0, -1, .5);
            if (t.unproject(this.camera), i.unproject(this.camera), e.unproject(this.camera), a.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = t.clone().sub(o).normalize(), l = i.clone().sub(o).normalize(), r = e.clone().sub(o).normalize(), d = a.clone().sub(o).normalize(), b = (s - o.z) / n.z, m = (s - o.z) / d.z, f = o.clone().add(n.multiplyScalar(b)), c = o.clone().add(l.multiplyScalar(b)), y = o.clone().add(r.multiplyScalar(m)), p = o.clone().add(d.multiplyScalar(m));
                this.bounds = {
                    leftX: f.x,
                    rightX: c.x,
                    topY: y.y,
                    bottomY: p.y
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
                            const n = e.translation(), l = a.x1 + a.w1 + i.size.x * .5, r = a.x2 - a.w2 - i.size.x * .5, d = i.userData.speed ?? .05;
                            n.x >= r && (i.userData.direction = -1), n.x <= l && (i.userData.direction = 1);
                            const b = i.userData.direction * d, m = n.x + b;
                            e.setNextKinematicTranslation({
                                x: m,
                                y: n.y,
                                z: n.z
                            }), i.position.x = m, this.objs.lamps.data[t].position.x = m, this.objs.plafons.data[t].position.x = m, this.objs.bulbs.data[t].position.x = m, this.objs.topPlanes.data[t].position.x = m;
                        } else if (o) {
                            const n = e.translation(), l = 2, r = .5, d = i.userData.speed ?? .03;
                            n.y >= l && (i.userData.direction = -1), n.y <= r && (i.userData.direction = 1);
                            const b = i.userData.direction * d, m = n.y + b;
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
                    const n = t.userData.direction * a, l = o.x + n;
                    s > 0 && e.setNextKinematicTranslation({
                        x: l,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[s].position.x = l, this.objs.lamps.data[s].position.x = l, this.objs.plafons.data[s].position.x = l, this.objs.bulbs.data[s].position.x = l, this.objs.topPlanes.data[s].position.x = l, this.objs.topPlanes.data[s].position.y = o.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i.position.set(l, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBirdModel() {
            await new Us().loadAsync("models/bird/bird.glb").then((i)=>{
                const e = i.scene, a = i.animations;
                e.scale.x = 2, e.scale.y = 2, e.scale.z = 2, e.position.y = 0, e.rotation.y = -Math.PI / 3, this.angryBirdModel = e, this.angryBirdModel.userData.mixer = new Me(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(a[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Es;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new Us().loadAsync("models/boosts/hat.glb").then((i)=>{
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new is(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new is(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new is(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.paramsClass.gameDir == "hor" ? this.scoreClass.updateMetersFloat(null, this.players, "hor") : this.scoreClass.updateMetersFloat(null, this.players, "vert"), this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, t, i)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new u(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && !this.worldClass.thunder ? (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: S(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + S(this.distanceToBird, this.distanceToBird + 10), this.angryBird.userData.speed = S(8, 13) / 100, this.angryBird.userData.flying = !0) : this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && this.worldClass.thunder && (this.birdFlyingMark = this.birdFlyingMark + S(this.distanceToBird, this.distanceToBird + 10)), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const s = new _e(new Ae({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: Bs
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
                    const n = a.position.x >= i && a.position.x <= e, l = o;
                    if (n && !a.pointLight && this.lights.length > 0) {
                        const r = this.lights.shift();
                        a.pointLight = r, a.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(a.glow);
                    }
                    if (a.pointLight) {
                        const r = a.pointLight;
                        r.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), a.glow.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 0);
                        const d = n ? this.lightIntensity : 0;
                        r.intensity = R.lerp(r.intensity, d, .15);
                        const b = n ? 1 : 0;
                        this._emissive[l] = R.lerp(this._emissive[l], b, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const m = .5 + this._emissive[l] * .8;
                        a.glow && a.glow.scale.setScalar(m);
                        const f = 1.1, c = this._emissive[l], y = 1 + f * c, p = this.objs.bulbs.baseSize, x = this.objs.bulbs.data[l];
                        x.userData._lastBulbFactor !== y && (x.size.set(p.x * y, p.y * y, p.z * y), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), x.userData._lastBulbFactor = y, s = !0), !n && r.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(r), a.pointLight = null, a.glow && (this.glowPool.push(a.glow), this.scene.remove(a.glow), a.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((e, a)=>{
                    const o = e.pointLight;
                    o && (o.intensity = R.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), e.pointLight = null, e.userData.light = !1, e.glow && (this.scene.remove(e.glow), this.glowPool.push(e.glow), e.glow = null))), this.objs.plafons.plafon.setColorAt(a, this._dayColor), i = !0, this._emissive && this._emissive.length > a && (this._emissive[a] = 0);
                    const n = 1.1, l = this._emissive[a], r = 1 + n * l, d = this.objs.bulbs.baseSize, b = this.objs.bulbs.data[a];
                    b.userData._lastBulbFactor !== r && (b.size.set(d.x * r, d.y * r, d.z * r), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), b.userData._lastBulbFactor = r, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const t = this.camera.position.y - this.bounds.topY / 1, i = this.camera.position.y + this.bounds.topY * .8;
                this.objs.plafons.data.forEach((e, a)=>{
                    e.pointLight;
                    const o = e.position.y >= t && e.position.y <= i, n = a;
                    if (o && !e.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        e.pointLight = l, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const l = e.pointLight;
                        l.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 2), e.glow.position.copy(e.position);
                        const r = o ? this.lightIntensity : 0;
                        l.intensity = R.lerp(l.intensity, r, .15);
                        const d = o ? 1 : 0;
                        this._emissive[n] = R.lerp(this._emissive[n], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const b = .8 + this._emissive[n] * .8;
                        e.glow && e.glow.scale.setScalar(b);
                        const m = 1, f = this._emissive[n], c = 1 + m * f, y = this.objs.bulbs.baseSize, p = this.objs.bulbs.data[n];
                        p.userData._lastBulbFactor !== c && (p.size.set(y.x * c, y.y * c, y.z * c), this.apply(n, this.objs.bulbs.data, this.objs.bulbs.bulb), p.userData._lastBulbFactor = c, s = !0), !o && l.intensity <= .01 && this._emissive[n] <= .02 && (this.lights.push(l), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let t = !1;
                this.objs.plafons.data.forEach((i, e)=>{
                    const a = i.pointLight;
                    !i.pointLight && this._emissive[e] === 0 || (a && (a.intensity = R.lerp(a.intensity, 0, 1), a.intensity <= .01 && (a.intensity = 0, this.lights.push(a), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), t = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0));
                }), t && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
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
                            this.players.filter((n)=>n.player.userData.live).length != 1 ? e = this.players[i].player.position.x : this.paramsClass.gameDir == "hor" && (e = this.players[i].player.position.x + this.bounds.rightX / 2);
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
                    this.gameClass.gameStarting && this.players[this.maxSpeed()].player.userData.body.linvel().y > -20 && (s.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), s.position.x = 0, s.position.z = this.isMobile ? 20 : 32, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
            }
        }
        damp(s, t, i, e) {
            return s + (t - s) * (1 - Math.exp(-i * e));
        }
        spring(s, t, i, e, a) {
            const o = 2 / e, n = o * a, l = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let r = s - t;
            const d = (i + o * r) * a, b = (i - o * d) * l;
            return {
                newPos: t + (r + d) * l,
                newVel: b
            };
        }
        showPopupInGame(s = !1, t = !1) {
            this.hideScreen("popup_game_btn_close"), this.hideScreen("menu_in_game"), this.audioClass.oceanAudio.isPlaying && this.audioClass.oceanAudio.stop(), this.audioClass.rainAudio.isPlaying && this.audioClass.rainAudio.stop(), this.gameClass.pause ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn15"), this.hideScreen("popup_game_btn1"), this.levelsMode && this.showScreen("popup_game_btn4")) : (this.gameClass.showGamePopup = !0, this.levelsMode ? this.players.every((i)=>i.player.userData.finish) && this.dataClass.levelCoopMode == "coop" || this.players.some((i)=>i.player.userData.finish) && this.dataClass.levelCoopMode == "contest" ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.audioClass.winAudio.isPlaying && this.audioClass.winAudio.stop(), this.audioClass.musicOn && this.audioClass.winAudio.play(), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15"), this.hideScreen("popup_game_btn4"), this.dataClass.levelCoopMode == "coop" && this.players.forEach((i, e, a)=>{
                this.levelsMode == this.allLevels && (this.dataClass.table.player.bonusHeart[e] = 2), this.levelsMode + 1 > this.dataClass.table.player.levels[e] && (this.dataClass.table.player.levels[e] = this.levelsMode);
            }), this.dataClass.saveLocalData(), this.dataClass.loadLocalData(), this.dataClass.loadLevels(this.players.length - 1)) : (this.hideScreen("popup_game_btn15"), this.showScreen("popup_game_btn4"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win")) : (!s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play(), this.scoreClass.score + 1 > this.scoreClass.myRec && (this.dataClass.saveLocalData(), this.dataClass.loadLocalData()))), this.showScreen("popup_in_game"), this.gameClass.gameStarting = !1;
        }
        reloadLevel(s = -1) {
            if (this.paramsClass.gameDir == "hor" && !this.levelsMode) {
                if (s >= 0) {
                    let t = this.players[s];
                    this.dataClass.table.player.bonusHeart[s] ? (t.player.userData.maxLives = 4, t.player.userData.lives = t.player.userData.maxLives, t.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[s], this.dataClass.table.player.bonusHeart[s]--) : (t.player.userData.maxLives = 3, t.player.userData.lives = t.player.userData.maxLives);
                } else {
                    let t = [
                        0,
                        -1,
                        1
                    ];
                    for(let i = 0; i < this.players.length; i++){
                        let e = this.players[i], a = Math.floor(Math.random() * t.length);
                        this.levelsMode ? e.player.position.x = t[a] : (e.reLiveField(), e.player.position.x = e.player.position.x - i * .3 + 1), t.splice(a, 1), this.dataClass.table.player.bonusHeart[i] ? (e.player.userData.maxLives = 4, e.player.userData.lives = e.player.userData.maxLives, e.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[i], this.dataClass.table.player.bonusHeart[i]--) : (e.player.userData.maxLives = 3, e.player.userData.lives = e.player.userData.maxLives), this.levelsMode || e.reLiveField();
                    }
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
                this.audioClass.oceanAudio.isPlaying || this.audioClass.oceanAudio.play(), this.boostHatModels.forEach((t, i, e)=>{
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
                let s = [
                    0,
                    -1,
                    1
                ];
                this.audioClass.hardStopAll(), this.players.forEach((t, i, e)=>{
                    if (t.player.userData.live = !1, t.player.userData.score = 0, t.player.userData._lastMeterPos = null, t.player.userData._wasLive = !1, t.player.userData.body.setTranslation(new u(0, -5, 0)), t.player.userData.finish = !1, t.playerAliving(!0), this.levelsMode) {
                        let a = this.players[i], o = Math.floor(Math.random() * s.length);
                        a.player.userData.startPos.x = s[o], s.splice(o, 1);
                    } else t.player.position.x = t.player.position.x - i * 1 + 1;
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((t, i, e)=>{
                    t.position.x = this.boostHatCoords[i][0], t.position.y = this.boostHatCoords[i][1], t.userData.fly = !1;
                });
                for(let t = 0; t < this.objs.livesBlocks.data.length; t++)this.objs.livesBlocks.data[t].position = this.objs.livesBlocks.data[t].userData.startPos, this.apply(t, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
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
                this.audioClass.hardStopAll(), this.paramsClass.dataLoaded = !1, Fs(this.scene), this.audioClass.stopMusic(0), setTimeout(()=>{
                    let s = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 777;
                    this.initMatch(this.players.length, this.gameNum, s, this.birdYes);
                }, 100), this.players.forEach((s, t, i)=>{
                    s.playerAliving(!0);
                }), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
            }), this.rebindButton(".popup_game_btn3", ()=>{
                this.audioClass.hardStopAll(), this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.paramsClass.dataLoaded = !1, Fs(this.scene), this.audioClass.stopMusic(0), this.dataClass.gameInit = !1;
            }), this.rebindButton(".popup_game_btn4", ()=>{
                this.audioClass.hardStopAll(), this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game"), this.dataClass.levelCoopMode == "contest" ? this.showScreen("levels_game_screen_contest") : this.showScreen("levels_game_screen"), this.paramsClass.dataLoaded = !1, Fs(this.scene), this.audioClass.stopMusic(0), this.dataClass.gameInit = !1;
            });
        };
        hideScreen(s) {
            document.querySelector(`.${s}`).classList.add("hidden_screen");
        }
        showScreen(s) {
            document.querySelector(`.${s}`).classList.remove("hidden_screen");
        }
    }
    class ds {
        constructor(s, t){
            this.world = s, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Ks;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const t = s.geometry;
            t.computeBoundingBox();
            const i = new u;
            t.boundingBox.getSize(i);
            const e = new u(1 / (i.x || 1), 1 / (i.y || 1), 1 / (i.z || 1));
            return s.userData.invBase = e, e;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new u(s, s, s) : s?.isVector3 ? s.clone() : new u(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, t, i) {
            const e = ds._toVec3(i.size), a = ds._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = i.quaternion?.isQuaternion ? i.quaternion : new Ms, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), l = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(l, n), this.instancedBodies.push({
                mesh: s,
                index: t,
                size: e,
                body: n
            });
        }
        addInstancedStatic(s, t, i, e) {
            const a = ds._toVec3(e.size), o = ds._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = e.quaternion?.isQuaternion ? e.quaternion : new Ms, l = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), r = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            s[i].userData.body = l, s[i].userData.shape = r, s[i].userData.collide = this.world.createCollider(r, l), this.instancedBodies.push({
                mesh: t,
                index: i,
                size: a,
                body: l
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, t = new Set;
            for (const i of this.instancedBodies){
                const e = ds._ensureInvBase(i.mesh), a = i.body.translation(), o = i.body.rotation();
                s.position.set(a.x, a.y, a.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(i.size.x * e.x, i.size.y * e.y, i.size.z * e.z), s.updateMatrix(), i.mesh.setMatrixAt(i.index, s.matrix), t.add(i.mesh);
            }
            for (const i of t)i.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let t, i;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new ys().setFromObject(s);
                const a = Ns(s);
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
                s.rotation.set(0, 0, 0), new ys().setFromObject(s);
                const a = Ns(s);
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
                s.rotation.set(0, 0, 0), new ys().setFromObject(s);
                const a = Ns(s);
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
    const Rs = new u;
    function Ns(h) {
        if (h.isMesh && h.geometry) {
            const t = h.geometry;
            return t.boundingBox || t.computeBoundingBox(), t.boundingBox.getSize(Rs), Rs.multiply(h.scale), Rs.clone();
        }
        return new ys().setFromObject(h).getSize(new u);
    }
    class nt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.looseAudio, this.winAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicNowPlaying = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2, this._attached = !1, this.listener = new Se, this.musicOn = !0;
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
            const s = new Le;
            await s.loadAsync("audio/back1.mp3").then((t)=>{
                this.backAudio = new E(this.listener), this.backAudio.setBuffer(t), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/back2.mp3").then((t)=>{
                this.backAudio2 = new E(this.listener), this.backAudio2.setBuffer(t), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/back3.mp3").then((t)=>{
                this.backAudio3 = new E(this.listener), this.backAudio3.setBuffer(t), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(.5), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/ocean.mp3").then((t)=>{
                this.oceanAudio = new E(this.listener), this.oceanAudio.setBuffer(t), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/inwater.mp3").then((t)=>{
                this.inwaterAudio = new E(this.listener), this.inwaterAudio.setBuffer(t), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/loose.mp3").then((t)=>{
                this.looseAudio = new E(this.listener), this.looseAudio.setBuffer(t), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/win.mp3").then((t)=>{
                this.winAudio = new E(this.listener), this.winAudio.setBuffer(t), this.winAudio.setLoop(!1), this.winAudio.setRefDistance(200), this.winAudio.setVolume(2), this.musics.push({
                    name: "win",
                    music: this.winAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/take.mp3").then((t)=>{
                this.takeAudio = new E(this.listener), this.takeAudio.setBuffer(t), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/ready-jump.mp3").then((t)=>{
                this.readyJumpAudio = new E(this.listener), this.readyJumpAudio.setBuffer(t), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(1e3), this.readyJumpAudio.setVolume(200), this.readyJumpAudio.setPlaybackRate(2), this.musics.push({
                    name: "readyJump",
                    music: this.readyJumpAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack1.mp3").then((t)=>{
                this.jumpAudio = new E(this.listener), this.jumpAudio.setBuffer(t), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(2e3), this.jumpAudio.setVolume(2), this.quacks.push(this.jumpAudio), this.musics.push({
                    name: "quack1",
                    music: this.jumpAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack2.mp3").then((t)=>{
                this.jumpAudio2 = new E(this.listener), this.jumpAudio2.setBuffer(t), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2), this.musics.push({
                    name: "quack2",
                    music: this.jumpAudio2
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack3.mp3").then((t)=>{
                this.jumpAudio3 = new E(this.listener), this.jumpAudio3.setBuffer(t), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3), this.musics.push({
                    name: "quack3",
                    music: this.jumpAudio3
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/rain.mp3").then((t)=>{
                this.rainAudio = new E(this.listener), this.rainAudio.setBuffer(t), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1.5), this.musics.push({
                    name: "rain",
                    music: this.rainAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/thunder.mp3").then((t)=>{
                this.thunderAudio = new E(this.listener), this.thunderAudio.setBuffer(t), this.thunderAudio.setLoop(!1), this.thunderAudio.setRefDistance(400), this.thunderAudio.setVolume(1), this.thundersAudio.push({
                    name: "thunder1",
                    music: this.thunderAudio
                }), this.musics.push({
                    name: "thunder1",
                    music: this.thunderAudio
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/thunder2.mp3").then((t)=>{
                this.thunderAudio2 = new E(this.listener), this.thunderAudio2.setBuffer(t), this.thunderAudio2.setLoop(!1), this.thunderAudio2.setRefDistance(400), this.thunderAudio2.setVolume(1), this.thundersAudio.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                }), this.musics.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                });
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/thunder3.mp3").then((t)=>{
                this.thunderAudio3 = new E(this.listener), this.thunderAudio3.setBuffer(t), this.thunderAudio3.setLoop(!1), this.thunderAudio3.setRefDistance(400), this.thunderAudio3.setVolume(1), this.thundersAudio.push({
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
    class lt {
        constructor(s, t, i, e, a, o){
            this.levelClass = s, this.isMobile = t, this.renderer = i, this.camera = e, this.paramsClass = a, this.audioClass = o, this.mouse = new u, this.raycaster = new ke;
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
    class rt {
        constructor(s, t, i, e, a, o){
            this.scene = s, this.camera = t, this.renderer = i, this.paramsClass = e, this.isMobile = a, this.audioClass = o, this.ambientLight = new ze(11184810, 1), this.hemiLight = new Be(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ee(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Ks, this.dirLight.target = this.targetObject, this.helper = new He(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.isRainActive = !1, this.rainEndTimestampMs = 0, this.activeLightningLines = [], this.lightningMaterialBase = new Te({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: Bs,
                depthWrite: !1
            }), this.clock = new Es, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 10, this.rainAreaHalfDepth = 22, this.rainTopY = 7, this.rainBottomY = -2, this.rainGeometry = new Ds, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let t = 0; t < this.rainDropCount; t++){
                const i = t * 3;
                this.rainPositions[i + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[i + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[i + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[t] = 10 + Math.random() * 10, this.rainWindPhase[t] = Math.random() * Math.PI * 20;
            }
            const s = new Float32Array(this.rainDropCount * 3);
            for(let t = 0; t < this.rainDropCount; t++){
                const i = .8 + Math.random() * .2;
                s[t * 3 + 0] = .7 * i, s[t * 3 + 1] = .8 * i, s[t * 3 + 2] = 1 * i;
            }
            this.rainGeometry.setAttribute("position", new hs(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new hs(s, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new me({
                color: 8947916,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .79,
                transparent: !0,
                opacity: .96,
                size: .18,
                sizeAttenuation: !0,
                depthWrite: !0,
                blending: Bs
            }), this.rainPoints = new Os(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Ws(900, 500), this.water = new Fe(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new ye().load("textures/waternormals.jpg", function(r) {
                    r.wrapS = r.wrapT = Ps;
                }),
                sunDirection: new u,
                sunColor: 16755370,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -2 : this.water.position.y = -2, this.sun = new u, this.sky = new Re, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new Cs(new Ws(1e4, 1e4), new Js({
                color: 526362,
                side: Ne,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const t = 1500, i = new Float32Array(t * 3), e = new Float32Array(t), a = new Float32Array(t * 3);
            for(let r = 0; r < t; r++){
                i[3 * r] = Math.random() * 600 - 300, i[3 * r + 1] = Math.random() * 150 - 100, i[3 * r + 2] = Math.random() * 300 - 500, e[r] = Math.random() * 2 + .7;
                const d = new is().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * r] = d.r, a[3 * r + 1] = d.g, a[3 * r + 2] = d.b;
            }
            const o = new Ds;
            o.setAttribute("position", new hs(i, 3)), o.setAttribute("size", new hs(e, 1)), o.setAttribute("color", new hs(a, 3));
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
`, l = `
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
            this.materialStars = new Ie({
                uniforms: {
                    time: {
                        value: 0
                    },
                    opacity: {
                        value: 0
                    }
                },
                vertexShader: n,
                fragmentShader: l,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: Bs
            }), this.stars = new Os(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, t = Math.sign(s - this._prevCamX);
            this._prevCamX = t, this.stars.position.x = this.camera.position.x;
            const i = R.degToRad(90 - this.parameters.elevation), e = R.degToRad(this.parameters.azimuth);
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
                    const l = n * 3, r = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + e * .4;
                    this.rainPositions[l + 0] += r * this.deltaSeconds * 8, this.rainPositions[l + 1] -= this.rainVelocities[n] * (1 + Math.abs(e) * .3) * this.deltaSeconds, a + this.rainPositions[l + 0], o + this.rainPositions[l + 2], this.rainPositions[l + 1] < this.rainBottomY && (this.rainPositions[l + 1] = this.rainTopY, this.rainPositions[l + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[l + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[l + 0] > this.rainAreaHalfWidth && (this.rainPositions[l + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[l + 0] < -this.rainAreaHalfWidth && (this.rainPositions[l + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[l + 2] > this.rainAreaHalfDepth && (this.rainPositions[l + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[l + 2] < -this.rainAreaHalfDepth && (this.rainPositions[l + 2] += this.rainAreaHalfDepth * 2 - 35);
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
            const e = s + (Math.random() - .5) * 6, a = -4 + Math.random() * 3, o = i + (Math.random() - .5) * 6, n = e - s, l = a - t, r = o - i, d = Math.hypot(n, l, r) || 1, b = n / d, m = l / d, f = r / d, c = n / d, p = -(r / d), x = 0, L = c, O = Math.abs(m) > .9 ? new u(1, 0, 0) : new u(0, 1, 0), g = new u(b, m, f), C = new u().crossVectors(g, O).normalize(), w = new u().crossVectors(g, C).normalize(), P = 2 + Math.random() * 2, B = 1.2, N = Math.random() * Math.PI * 2, F = 3 + Math.random() * 2.5, W = .8, ps = Math.random() * Math.PI * 2, j = 28, _ = 4, Y = [];
            for(let A = 0; A <= j; A++){
                const z = A / j, k = 1 - z;
                let J = s + n * z, os = t + l * z, Z = i + r * z;
                const K = Math.sin(z * Math.PI * P + N) * B * (.3 + .7 * k), Q = Math.sin(z * Math.PI * F + ps) * W * (.3 + .7 * k), ss = (Math.random() - .5) * 2 * _ * k, U = (Math.random() - .5) * 1.6 * _ * k, q = Math.random() < .12 ? (Math.random() - .5) * 3.5 * k : 0;
                if (J += C.x * (K + ss + q) + w.x * (Q + U * .7), os += C.y * (K + ss * .5) + w.y * (Q + U * .5), Z += C.z * (K + ss + q) + w.z * (Q + U * .7), Y.push(J, os, Z), A > 3 && A < j - 3 && Math.random() < .22) {
                    const ns = [], fs = 3 + Math.floor(Math.random() * 2), ls = .25 + Math.random() * .35;
                    let gs = J, vs = os, ws = Z;
                    ns.push(gs, vs, ws);
                    for(let ks = 1; ks <= fs; ks++)gs += (Math.random() - .5) * _ * ls, vs += -(.8 + Math.random() * .8) * ls, ws += (Math.random() - .5) * _ * ls, ns.push(gs, vs, ws);
                    const Ls = new Ds;
                    Ls.setAttribute("position", new ee(ns, 3));
                    const ms = new te(Ls, this.lightningMaterialBase.clone());
                    ms.material.opacity = .6, ms.userData.life = .16 + Math.random() * .12, this.scene.add(ms), this.activeLightningLines.push(ms);
                }
            }
            const us = 2;
            for(let A = -1; A <= us; A++){
                const z = A === -1, k = z ? 0 : A % 2 === 0 ? 1 : -1, J = .55 + Math.random() * .45, os = .35, Z = Math.random() * Math.PI * 2, K = [], Q = Y.length / 3;
                for(let q = 0; q < Q; q++){
                    const ns = q / (Q - 1), fs = .35 + .85 * ns, ls = Math.sin(ns * Math.PI * 2 + Z) * os * (.2 + .8 * ns), gs = p * k * J * fs + L * ls * .3, vs = x * k * J * fs + ls * .05, ws = L * k * J * fs - p * ls * .3, Ls = q * 3 + 0, ms = q * 3 + 1, ks = q * 3 + 2, $s = Y[Ls], Zs = Y[ms], Qs = Y[ks];
                    z ? K.push($s + (Math.random() - .5) * .05, Zs + (Math.random() - .5) * .05, Qs + (Math.random() - .5) * .05) : K.push($s + gs + (Math.random() - .5) * .2, Zs + vs + (Math.random() - .5) * .2, Qs + ws + (Math.random() - .5) * .2);
                }
                const ss = new Ds;
                ss.setAttribute("position", new ee(K, 3));
                const U = new te(ss, this.lightningMaterialBase.clone());
                U.material.opacity = z ? .95 : .32, U.userData.life = .22 + Math.random() * .18, this.scene.add(U), this.activeLightningLines.push(U);
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
                    const l = (a * 2 + n) * 4;
                    i[l + 0] = 255, i[l + 1] = 255, i[l + 2] = 255, i[l + 3] = Math.round(o * 255);
                }
            }
            const e = new Ge(i, 2, 40, qe);
            return e.needsUpdate = !0, e.magFilter = ae, e.minFilter = ae, e.wrapS = ie, e.wrapT = ie, e.rotation = Math.PI / 2, e.center.set(.5, .5), e;
        }
    }
    class ht {
        constructor(s, t, i, e, a){
            this.initMatch = s, this.loadLevels = t, this.gameClass = i, this.audioClass = e, this.dataClass = a, this.playersNum = 1, this.levelPlayersNum = 1, this.mainMenu(this.initMatch), this.loadRecsData();
        }
        loadRecsData() {
            this.dataClass.loadLocalData();
            let s = this.dataClass.masTables, t = document.querySelectorAll(".rec_table_small"), i = "free_game_my_rec", e = "";
            t[0].innerHTML = "", t[1].innerHTML = "", s.forEach((a, o, n)=>{
                s[o].forEach((l, r, d)=>{
                    s[o][r].findIndex((b)=>b.name === "Мой рекорд") < 3 ? t[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == r + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${s[o][r][0].name == "Мой рекорд" ? i : e}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][r][0].name}</span>
                <div><span class='place_rec'>${s[o][r][0].rec}</span><span>м</span></div>
            </div>
            <div class='green_back two_place ${s[o][r][1].name == "Мой рекорд" ? i : e}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][r][1].name}</span>
                <div><span class='place_rec'>${s[o][r][1].rec}</span><span>м</span></div>
            </div>
            <div class='blue_back three_place ${s[o][r][2].name == "Мой рекорд" ? i : e}'>
                <span class='place_num'>3</span>
                <span class='rec_table_small_name'>${s[o][r][2].name}</span>
                <div><span class='place_rec'>${s[o][r][2].rec}</span><span>м</span></div>
            </div>
          </div>
        `) : t[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == r + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][r][0].name}</span>
                <div><span class='place_rec'>${s[o][r][0].rec}</span><span>м</span></div>
            </div>
            <div class='green_back two_place}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][r][1].name}</span>
                <div><span class='place_rec'>${s[o][r][1].rec}</span><span>м</span></div>
            </div>
            <div class='blue_back three_place ${i}'>
                <span class='place_num'>${s[o][r][3].pos}</span>
                <span class='rec_table_small_name'>${s[o][r][3].name}</span>
                <div><span class='place_rec'>${s[o][r][3].rec}</span><span>м</span></div>
            </div>
          </div>
        `);
                });
            });
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", async ()=>{
                this.dataClass.levelCoopMode = "coop", this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", async ()=>{
                this.dataClass.levelCoopMode = "contest", this.levelPlayersNum = 2, this.hideScreen("main_screen"), this.showScreen("levels_game_screen_contest");
            }), document.querySelectorAll(".arrow_back").forEach((i, e, a)=>{
                i.addEventListener("click", ()=>{
                    i.parentElement.parentElement.classList.add("hidden_screen"), this.showScreen("main_screen");
                });
            });
            const s = document.querySelector(".levels_blocks");
            s.addEventListener("click", (i)=>{
                const e = i.target.closest(".levels_block");
                if (!e || e.classList.contains("levels_block--locked")) return;
                const a = Number(e.dataset.level) || 1;
                s.querySelectorAll(".levels_block").forEach((o)=>o.classList.remove("active")), e.classList.add("active"), this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, a, !0);
            });
            const t = document.querySelector(".levels_blocks_contest");
            t.addEventListener("click", (i)=>{
                const e = i.target.closest(".levels_block");
                if (!e) return;
                const a = Number(e.dataset.level) || 1;
                t.querySelectorAll(".levels_block").forEach((o)=>o.classList.remove("active")), e.classList.add("active"), this.hideScreen("levels_game_screen_contest"), this.initMatch(this.levelPlayersNum, 1, a, !0);
            }), document.querySelectorAll(".level_game_chels").forEach((i, e, a)=>{
                i.addEventListener("click", ()=>{
                    this.levelPlayersNum != e + 1 && (document.querySelectorAll(".level_game_chels").forEach((o)=>{
                        o.classList.remove("level_game_chels_active");
                    }), i.classList.add("level_game_chels_active"), this.levelPlayersNum = e + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
                });
            }), document.querySelectorAll(".level_game_chels_contest").forEach((i, e, a)=>{
                i.addEventListener("click", ()=>{
                    this.levelPlayersNum != e + 2 && (console.log(this.levelPlayersNum), console.log(e), document.querySelectorAll(".level_game_chels_contest").forEach((o)=>{
                        o.classList.remove("level_game_chels_contest_active");
                    }), i.classList.add("level_game_chels_contest_active"), this.levelPlayersNum = e + 2, this.dataClass.loadLevelsContest(this.levelPlayersNum - 2));
                });
            }), document.querySelector(".free_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 2);
            }), document.querySelector(".free_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 4, !1, !1);
            }), document.querySelectorAll(".free_game_chels").forEach((i, e)=>{
                i.addEventListener("click", ()=>{
                    document.querySelectorAll(".free_game_chels").forEach((d)=>{
                        d.classList.remove("free_game_chels_active");
                    }), i.classList.add("free_game_chels_active");
                    const a = e + 1, o = document.querySelectorAll(".rec_table_small"), n = [];
                    o.forEach((d)=>{
                        const b = d.querySelector(".rec_table_small_block:not(.hidden_screen)");
                        b && (n.push(b), b.getBoundingClientRect(), b.classList.add("anim-out"));
                    });
                    let l = 0;
                    const r = ()=>{
                        if (l++, l < n.length) return;
                        this.playersNum = a, this.loadRecsData();
                        const d = [];
                        document.querySelectorAll(".rec_table_small").forEach((b)=>{
                            const m = b.querySelector(".rec_table_small_block:not(.hidden_screen)");
                            m && (m.classList.add("anim-in"), d.push(m));
                        }), requestAnimationFrame(()=>{
                            d.forEach((m)=>{
                                m.getBoundingClientRect(), m.classList.add("anim-play");
                            });
                            const b = (m)=>{
                                m.classList.remove("anim-in", "anim-play"), m.removeEventListener("transitionend", b);
                            };
                            d.forEach((m)=>m.addEventListener("transitionend", ()=>b(m), {
                                    once: !0
                                }));
                        });
                    };
                    n.length === 0 ? (this.playersNum = a, this.loadRecsData()) : n.forEach((d)=>{
                        d.addEventListener("transitionend", ()=>{
                            d.classList.remove("anim-out"), d.removeEventListener("transitionend", r), r();
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
    class dt {
        constructor(){
            this.gameDir = "vert", this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class ct {
        constructor(s, t){
            this.camera = s, this.dataClass = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y, this.metersFloatEl = document.getElementById("meters-float"), this.myRecField = document.getElementById("myRecord"), this.worldRecField = document.getElementById("worldRecord"), this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3), this.worldRec = 0, this.myRec = 0;
        }
        loadRecsToHud(s = 0, t = 0) {
            this.worldRec = this.dataClass.masTables[s][t][0].rec, this.myRec = this.dataClass.masTables[s][t].find((i)=>i.pos == 0).rec, this.myRecField.textContent = this.myRec, this.worldRecField.textContent = this.worldRec;
        }
        updateMetersFloat(s, t, i = "hor") {
            const e = i === "vert" ? "y" : "x", a = 1e-4;
            for (const m of t){
                const f = m?.player;
                if (!f) continue;
                const c = f.userData || (f.userData = {});
                c.score == null && (c.score = 0);
                let y = f.position?.[e] ?? 0;
                if (c._lastMeterPos == null && (c._lastMeterPos = y), i !== "vert" && c._wasLive === !1 && c.live && (c._lastMeterPos = y), c.live) {
                    const p = y - c._lastMeterPos, x = p > a ? p : 0;
                    x !== 0 && (c.score += x, c._lastMeterPos = y);
                }
                c.score === 0 && (c._lastMeterPos = y), c._wasLive = !!c.live;
            }
            this.playerPanels || (this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3));
            let o = 0;
            for(let m = 0; m < 3; m++){
                const f = this.playerPanels[m], c = t[m]?.player, y = Math.max(0, Math.floor(c?.userData?.score || 0));
                o += y, f && (f.textContent = String(y).padStart(3, "0"));
            }
            const n = Math.max(0, Math.floor(o));
            if (n === Is) return;
            const l = Is, r = performance.now(), d = 50, b = (m)=>{
                const f = Math.min(1, (m - r) / d), c = 1 - Math.pow(1 - f, 4), y = Math.round(l + (n - l) * c);
                this.score = y, this.score > this.myRec && (this.myRec = this.score, this.myRecField && (this.myRecField.textContent = this.myRec)), this.score > this.worldRec && (this.worldRec = this.score, this.worldRecField && (this.worldRecField.textContent = this.worldRec)), this.metersFloatEl && (this.metersFloatEl.textContent = String(y).padStart(3, "0")), f < 1 ? requestAnimationFrame(b) : Is = n;
            };
            requestAnimationFrame(b);
        }
    }
    let Is = 0;
    class pt {
        constructor(){
            this.gameStarting = !1, this.pause = !1, this.visible = !0, this.showGamePopup = !1;
        }
    }
    class ut {
        constructor(){
            this.gameInit = !1, this.names = [
                "Билли",
                "Вилли",
                "Дилли"
            ], this.levelsStatus = [
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
                updateDate: 11125,
                levelsStatusContest: [
                    1,
                    2,
                    0,
                    3,
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
            console.log(this.table.levelsStatusContest), localStorage.setItem("table", JSON.stringify(this.table));
        }
        async loadLocalData() {
            localStorage.getItem("table") !== null ? JSON.parse(localStorage.getItem("table", this.table)).updateDate != this.table.updateDate ? (this.clearData(), localStorage.setItem("table", JSON.stringify(this.table))) : this.table = JSON.parse(localStorage.getItem("table", this.table)) : localStorage.setItem("table", JSON.stringify(this.table));
            let s = this.table.hor[0].sort((n, l)=>l.rec - n.rec), t = this.table.hor[1].sort((n, l)=>l.rec - n.rec), i = this.table.hor[2].sort((n, l)=>l.rec - n.rec), e = this.table.vert[0].sort((n, l)=>l.rec - n.rec), a = this.table.vert[1].sort((n, l)=>l.rec - n.rec), o = this.table.vert[2].sort((n, l)=>l.rec - n.rec);
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
            for(let n = 0; n < 3; n++)for(let l = 0; l < this.allLevels; l++)l < this.table.player.levels[n] ? this.levelsStatus[n][l] = "completed" : l == this.table.player.levels[n] ? this.levelsStatus[n][l] = "available" : this.levelsStatus[n][l] = "locked";
        }
        async loadLevels(s) {
            const t = document.querySelector(".levels_blocks");
            if (!t) return;
            t.classList.add("levels_blocks--reenter"), t.innerHTML = "";
            const i = document.createDocumentFragment(), e = (l)=>{
                switch(l){
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
            for(let l = 0; l < this.levelsStatus[s].length; l++){
                const r = this.levelsStatus[s][l], { modifierClass: d, labelText: b, ariaState: m } = e(r), f = document.createElement("div");
                f.className = `levels_block ${d}`, f.setAttribute("data-level", String(l + 1)), f.setAttribute("role", "button"), f.setAttribute("tabindex", r === "locked" ? "-1" : "0"), f.setAttribute("aria-label", `Уровень ${l + 1}, ${m}`);
                const c = Math.min(o + l * a, n);
                f.style.setProperty("--show-delay", `${c}ms`);
                const y = document.createElement("div");
                y.className = "levels_block_number", y.textContent = String(l + 1);
                const p = document.createElement("div");
                p.className = "levels_block_status";
                const x = document.createElement("span");
                x.className = `status_chip ${r === "completed" ? "status_chip--completed" : r === "available" ? "status_chip--available" : "status_chip--locked"}`, x.textContent = b, p.append(x), f.append(y, p), f.addEventListener("click", ()=>{
                    r !== "locked" && (document.querySelectorAll(".levels_block").forEach((L)=>L.classList.remove("active")), f.classList.add("active"), console.log(`Выбран уровень ${l + 1}`));
                }), f.addEventListener("keydown", (L)=>{
                    r !== "locked" && (L.key === "Enter" || L.key === " ") && (L.preventDefault(), f.click());
                }), i.append(f);
            }
            t.append(i), requestAnimationFrame(()=>{
                t.classList.remove("levels_blocks--reenter"), t.querySelectorAll(".levels_block").forEach((l)=>{
                    l.classList.add("levels_block--enter");
                });
            });
        }
        loadLevelsContest() {
            const s = document.querySelector(".levels_blocks_contest");
            if (!s) return;
            s.classList.add("levels_blocks--reenter"), s.innerHTML = "";
            const t = document.createDocumentFragment(), i = 40, e = 60, a = 600;
            for(let o = 0; o < this.allLevels; o++){
                const n = o + 1, l = this.table.levelsStatusContest?.[o] ?? 0, r = document.createElement("div");
                r.className = "levels_block levels_block--contest", r.setAttribute("data-level", n), r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"), r.setAttribute("aria-label", `Уровень ${n}, значение ${l}`);
                const d = Math.min(e + o * i, a);
                r.style.setProperty("--show-delay", `${d}ms`), l && r.classList.add(`level_player${l}`);
                const b = document.createElement("div");
                b.className = "levels_block_number", b.textContent = String(n);
                const m = document.createElement("div");
                m.className = "levels_block_status", l && (m.textContent = this.names[l - 1]), r.append(b, m), r.addEventListener("click", ()=>{
                    document.querySelectorAll(".levels_block").forEach((f)=>f.classList.remove("active")), r.classList.add("active"), console.log(`Выбран уровень ${n} (значение: ${l})`);
                }), r.addEventListener("keydown", (f)=>{
                    (f.key === "Enter" || f.key === " ") && (f.preventDefault(), r.click());
                }), t.append(r);
            }
            s.append(t), requestAnimationFrame(()=>{
                s.classList.remove("levels_blocks--reenter"), s.querySelectorAll(".levels_block").forEach((o)=>{
                    o.classList.add("levels_block--enter");
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
    let Vs, mt = new Es, be, _s, bs, $, D, M, js, G, As, I, v = new pt;
    const cs = new Oe;
    cs.background = new is(13230580);
    const fe = tt({
        scene: cs
    }), ge = at({
        scene: cs
    }), T = new We(25, window.innerWidth / window.innerHeight, .1, 2e3);
    T.position.y = 2;
    const yt = 16 / 9, bt = R.degToRad(25), ft = 2 * Math.atan(Math.tan(bt / 2) * yt), Gs = Qe();
    function Xs() {
        const h = (window.visualViewport?.height || window.innerHeight) * .01;
        document.documentElement.style.setProperty("--vh", `${h}px`);
    }
    Xs();
    window.addEventListener("resize", Xs);
    window.addEventListener("orientationchange", Xs);
    let Ss = new Ue;
    document.body.appendChild(Ss.dom);
    Ss.dom.style.top = "0px";
    Ss.dom.style.left = "548%";
    const H = new Ve({
        antialias: !1
    });
    H.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    H.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(H.domElement);
    H.shadowMap.enabled = !0;
    H.shadowMap.type = Ye;
    H.outputColorSpace = Je;
    H.toneMapping = Ke;
    H.toneMappingExposure = 1.05;
    function ve() {
        const h = document.body.offsetWidth, s = document.body.offsetHeight, t = h / s;
        let i = 2.5 * Math.atan(Math.tan(ft / 2) / t);
        const e = R.degToRad(12), a = R.degToRad(70);
        i = R.clamp(i, e, a), T.fov = R.radToDeg(i), T.aspect = t, T.updateProjectionMatrix(), H.setSize(h, s);
    }
    window.addEventListener("resize", ve);
    ve();
    document.body.addEventListener("touchstart", function() {
        document.body.requestFullscreen().then(()=>{
            screen.orientation.lock("landscape");
        });
    }, !1);
    async function gt() {
        ue(!0), I = new ut, await I.loadLocalData(), await I.loadLevels(0), await I.loadLevelsContest(), M = new nt, await M.loadAudio(), _s = new ht(we, I.loadLevels, v, M, I), ue(!1);
    }
    await gt();
    async function vt(h) {
        const s = await Ze(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Vs = new s.World(new s.Vector3(0, -9.81, 0)), be = new s.EventQueue(!0), $ = new ds(Vs, s), As = new ct(T, I), bs = new rt(cs, T, H, G, Gs, M), D = new ot(cs, M, $, H, T, Gs, G, bs, we, I, v, fe, ge, As);
        for(let t = 0; t < h; t++)D.players.push(new it(I, cs, M, D, G, T, v));
        js = new lt(D, Gs, H, T, G, M), js.addKeyListeners();
    }
    async function wt() {
        await bs.loadWorld(), M.musicOn && M.backAudio.play(), M.musicOn && M.oceanAudio.play();
    }
    async function Dt(h) {
        await D.createLevel(h), await D.loadEnvironments(), await D.loadPlayers(), D.objs.grassPlanes.data.length > 0 && D.objs.grassPlanes.data.forEach((s, t)=>{
            D.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(Hs([
                0
            ], [
                1
            ]));
        }), D.players.length > 0 && D.players.forEach((s, t)=>{
            D.players[t].player.userData.collider.setCollisionGroups(Hs([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function we(h, s, t = !1) {
        xt(), _s.toggleLoader(!0), G = new dt, await vt(h), D.gameNum = s, await wt(), await Dt(t), G.gameDir === "hor" ? As.loadRecsToHud(0, D.players.length - 1) : As.loadRecsToHud(1, D.players.length - 1), G.dataLoaded = !0, v.gameStarting = !0, I.gameInit = !0, setTimeout(()=>{
            _s.toggleLoader(!1);
        }, 300);
    }
    function xt() {
        T.position.y = 2, T.position.x = 0, H.toneMappingExposure = 1.05, js?.removedKeyListeners(), bs = null, $ = null, D = null, js = null, G = null, As = null;
    }
    function Pt() {
        if (v.gameStarting && document.querySelector(".menu_in_game").classList.contains("hidden_screen") && G.dataLoaded && D.showScreen("menu_in_game"), I.gameInit && !D.levelsMode && document.querySelector(".hud").classList.contains("hidden_screen") && G.dataLoaded ? _s.showScreen("hud") : !I.gameInit && !document.querySelector(".hud").classList.contains("hidden_screen") && _s.hideScreen("hud"), v.gameStarting && (fe.update(Ts), ge.update(Ts)), G.dataLoaded && v.gameStarting) {
            Ss.dom.style.left = "48%", D.players.forEach((h, s, t)=>{
                h.playerMove();
            }), bs.updateLighting(), D.levelAnimate(T), D.cameraMove(T), Ss.update();
            for(let h = 0, s = $.dynamicBodies.length; h < s; h++)$.dynamicBodies[h][0].position.copy($.dynamicBodies[h][1].translation()), $.dynamicBodies[h][0].quaternion.copy($.dynamicBodies[h][1].rotation());
            $.updateInstancedTransforms(), Vs.step(be), v.gameStarting && H.render(cs, T);
        }
    }
    let qs = 0;
    const Ts = 1 / 60, pe = .1;
    H.setAnimationLoop(()=>{
        if (G != null) {
            let h = mt.getDelta();
            for(h > pe && (h = pe), qs += h; qs >= Ts;)Pt(), qs -= Ts;
        }
    });
    function ue(h) {
        const s = document.querySelector(".loader_screen");
        s && (h ? s.classList.remove("hidden_screen") : s.classList.add("hidden_screen"));
    }
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "visible" ? (!v.pause && !v.showGamePopup && (v.gameStarting = !0, M.togglePauseAll(!v.gameStarting)), v.visible = !0) : (!v.pause && !v.showGamePopup ? (v.gameStarting = !1, M.togglePauseAll(!v.gameStarting)) : v.pause || M.togglePauseAll(!v.gameStarting), v.visible = !1);
    });
    document.querySelector(".pause_btn").addEventListener("click", ()=>{
        !v.pause && v.gameStarting && (v.pause = !v.pause, v.pause && (D.showPopupInGame(), v.gameStarting = !1, M.togglePauseAll(!v.gameStarting), D.showScreen("popup_game_btn_close")));
    });
    document.querySelector(".popup_game_btn_close").addEventListener("click", ()=>{
        (v.pause || v.gameStarting) && (v.pause = !v.pause, v.gameStarting = !0, M.togglePauseAll(!v.gameStarting), bs.rain && !M.rainAudio.isPlaying && M.rainAudio.play(), M.oceanAudio.isPlaying || M.oceanAudio.play(), D.hideScreen("popup_in_game"), D.hideScreen("popup_game_btn_close"));
    });
    document.querySelector(".sound_btn_wrap").addEventListener("click", ()=>{
        const h = M.isMuted();
        M.toggleMute(!h);
    });
    function jt() {
        const h = [
            ".free_game_screen",
            ".levels_game_screen",
            ".levels_game_screen_contest",
            ".main_screen"
        ];
        let s = null, t = null, i = null, e = !1, a = 0, o = 0;
        const n = ()=>{
            for (const c of h){
                const y = document.querySelector(c);
                if (y && !y.classList.contains("hidden_screen")) return y;
            }
            return null;
        }, l = ()=>{
            const c = n();
            c !== s && (s && s.removeEventListener("scroll", r, {
                passive: !0
            }), i && (i.removeEventListener("mousedown", d), i.removeEventListener("touchstart", d)), s = c, t = s ? s.querySelector(".scroll-progress") : null, i = t ? t.querySelector(".scroll-progress__bar") : null, s && s.addEventListener("scroll", r, {
                passive: !0
            }), i && (i.addEventListener("mousedown", d), i.addEventListener("touchstart", d)), r());
        }, r = ()=>{
            if (!s || !t || !i) return;
            const c = s.clientHeight, y = s.scrollHeight, p = s.scrollTop;
            if (y <= c + 1) {
                t.classList.remove("visible");
                return;
            }
            t.classList.add("visible");
            const x = t.getBoundingClientRect().height, O = Math.max(c / y * x, 24), g = y - c, C = x - O, w = g > 0 ? p / g * C : 0;
            i.style.height = `${O}px`, i.style.top = `${w}px`;
        }, d = (c)=>{
            !s || !i || (e = !0, a = c.touches ? c.touches[0].clientY : c.clientY, o = s.scrollTop, document.body.style.userSelect = "none", c.preventDefault());
        }, b = (c)=>{
            if (!e || !s || !i || !t) return;
            const p = (c.touches ? c.touches[0].clientY : c.clientY) - a, x = t.getBoundingClientRect().height, L = s.clientHeight, O = s.scrollHeight, g = Math.max(1, x - i.offsetHeight), C = (O - L) / g;
            s.scrollTop = o + p * C;
        }, m = ()=>{
            e = !1, document.body.style.userSelect = "";
        };
        window.addEventListener("resize", ()=>{
            l(), r();
        }), window.addEventListener("mousemove", b, {
            passive: !1
        }), window.addEventListener("touchmove", b, {
            passive: !1
        }), window.addEventListener("mouseup", m), window.addEventListener("touchend", m), new MutationObserver(()=>{
            l();
        }).observe(document.body, {
            attributes: !0,
            subtree: !0,
            attributeFilter: [
                "class"
            ]
        }), l();
    }
    jt();
    (function() {
        const s = "_screen", t = (e)=>{
            if (e instanceof Element && e.classList && e.className.includes(s)) {
                if (e.classList.contains("fadeable") || e.classList.add("fadeable"), !e.dataset.displayOrig) {
                    const a = getComputedStyle(e);
                    e.dataset.displayOrig = a.display !== "none" ? a.display : "block";
                }
                e.classList.contains("hidden_screen") && (e.style.display = "none");
            }
        };
        document.querySelectorAll('[class*="_screen"]').forEach(t), new MutationObserver((e)=>{
            for (const a of e)if (a.type === "childList" && a.addedNodes.forEach((o)=>{
                o instanceof Element && (o.matches?.('[class*="_screen"]') && t(o), o.querySelectorAll?.('[class*="_screen"]').forEach(t));
            }), a.type === "attributes" && a.attributeName === "class") {
                const o = a.target;
                if (!(o instanceof Element) || !o.classList.contains("fadeable")) continue;
                if (!o.classList.contains("hidden_screen")) {
                    const n = o.dataset.displayOrig || "block";
                    o.style.display = n, o.offsetWidth;
                }
            }
        }).observe(document.body, {
            subtree: !0,
            childList: !0,
            attributes: !0,
            attributeFilter: [
                "class"
            ]
        }), document.body.addEventListener("transitionend", (e)=>{
            const a = e.target;
            a instanceof Element && a.classList.contains("fadeable") && e.propertyName === "opacity" && a.classList.contains("hidden_screen") && (a.style.display = "none");
        }, !0);
    })();
})();

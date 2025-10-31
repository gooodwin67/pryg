import { B as xs, a as rs, P as mt, N as xt, b as qs, c as Ws, C as Us, M as Ys, d as Cs, V as p, e as ms, Q as Ms, f as Dt, g as es, h as Ds, i as ls, G as Os, E as X, j as as, S as Pt, k as jt, l as Qs, I as ss, D as ts, m as Ct, n as Bs, O as Js, T as yt, R as Ps, o as ks, A as Mt, p as At, q as _t, r as zs, s as R, t as St, u as Lt, v as B, w as kt, x as zt, H as Bt, y as Ht, z as Et, L as Tt, W as Ft, F as Rt, J as It, K as Nt, U as st, X as tt, Y as Gt, Z as qt, _ as et, $ as at, a0 as Wt, a1 as Ot, a2 as Vt, a3 as Ut, a4 as Yt, a5 as Jt, a6 as Xt } from "./three-B76v5LAa.js";
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
    const Kt = "modulepreload", $t = function(h, s) {
        return new URL(h, s).href;
    }, it = {}, Zt = function(s, e, i) {
        let t = Promise.resolve();
        if (e && e.length > 0) {
            let r = function(d) {
                return Promise.all(d.map((m)=>Promise.resolve(m).then((u)=>({
                            status: "fulfilled",
                            value: u
                        }), (u)=>({
                            status: "rejected",
                            reason: u
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), l = n?.nonce || n?.getAttribute("nonce");
            t = r(e.map((d)=>{
                if (d = $t(d, i), d in it) return;
                it[d] = !0;
                const m = d.endsWith(".css"), u = m ? '[rel="stylesheet"]' : "";
                if (!!i) for(let y = o.length - 1; y >= 0; y--){
                    const c = o[y];
                    if (c.href === d && (!m || c.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${d}"]${u}`)) return;
                const f = document.createElement("link");
                if (f.rel = m ? "stylesheet" : Kt, m || (f.as = "script"), f.crossOrigin = "", f.href = d, l && f.setAttribute("nonce", l), document.head.appendChild(f), m) return new Promise((y, c)=>{
                    f.addEventListener("load", y), f.addEventListener("error", ()=>c(new Error(`Unable to preload CSS for ${d}`)));
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
    function A(h, s) {
        return Math.random() * (s - h) + h;
    }
    function Qt() {
        let h = window.matchMedia || window.msMatchMedia;
        return h ? h("(pointer:coarse)").matches : !1;
    }
    function ot(h) {
        return h.reduce((s, e)=>s | 1 << e, 0);
    }
    function Hs(h, s) {
        const e = ot(h), i = ot(s);
        return "0x" + ((e & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
    }
    function nt(h) {
        const s = h.collisionGroups(), e = s >>> 16 & 65535, i = s & 65535;
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
    function se(h) {
        return typeof h == "number" ? new p(h, h, h) : h?.isVector3 ? h : new p(h?.x ?? 1, h?.y ?? 1, h?.z ?? 1);
    }
    function lt(h) {
        return h?.userData?.id ?? h?.uuid ?? h?.id;
    }
    const te = new ms(new p(-.5, -.5, -.5), new p(.5, .5, .5)), rt = new Dt, ht = new Ms;
    function dt(h) {
        if (h?.isObject3D) {
            if (h.updateMatrixWorld(!0), h.geometry?.isBufferGeometry) {
                const t = h.geometry;
                if (t.boundingBox || t.computeBoundingBox(), t.boundingBox) {
                    const a = t.boundingBox.clone();
                    return a.applyMatrix4(h.matrixWorld), a;
                }
            }
            return new ms().setFromObject(h);
        }
        const s = h.position ?? h.pos ?? new p, e = se(h.size ?? 1), i = h.quaternion?.isQuaternion ? h.quaternion : h.rotation?.isEuler ? ht.setFromEuler(h.rotation) : ht.set(0, 0, 0, 1);
        return rt.compose(s, i, e), te.clone().applyMatrix4(rt);
    }
    function V(h, s) {
        const e = dt(h), i = lt(h);
        for(let t = s.length - 1; t >= 0; t--){
            const a = s[t], o = lt(a);
            if (i !== void 0 && o !== void 0 && i === o) continue;
            if (dt(a).intersectsBox(e)) return a;
        }
        return null;
    }
    function Fs(h) {
        h.traverse((e)=>{
            e.userData?.persistent || (e.geometry && e.geometry.dispose(), e.material && (Array.isArray(e.material) ? e.material.forEach((i)=>i.dispose()) : e.material.dispose()), e.material && e.material.map && e.material.map.dispose());
        });
        const s = [];
        for (const e of h.children)e.userData?.persistent || s.push(e);
        s.forEach((e)=>h.remove(e));
    }
    function ee({ scene: h, maxParticles: s = 800, gravity: e = -7.8, drag: i = 2, texture: t = null, pointSize: a = .66, blending: o = xt } = {}) {
        if (!h) throw new Error("createSplashSystem: scene is required");
        function n() {
            const D = document.createElement("canvas");
            D.width = D.height = 64;
            const z = D.getContext("2d"), I = z.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
            I.addColorStop(0, "rgba(255,255,255,1)"), I.addColorStop(1, "rgba(255,255,255,0)"), z.fillStyle = I, z.fillRect(0, 0, 64, 64);
            const F = new Us(D);
            return F.anisotropy = 1, F.needsUpdate = !0, F;
        }
        const l = t || n(), r = new Float32Array(s * 3), d = new Float32Array(s * 3), m = new Float32Array(s), u = new Float32Array(s), b = new Float32Array(s), f = new Uint8Array(s), y = new xs;
        y.setAttribute("position", new rs(r, 3)), y.setAttribute("aSize", new rs(b, 1));
        const c = new mt({
            map: l,
            size: a,
            transparent: !0,
            depthWrite: !1,
            blending: o,
            vertexColors: !1,
            sizeAttenuation: !0
        }), L = new qs(y, c);
        L.userData.persistent = !0, L.frustumCulled = !1, h.add(L);
        let H = 0;
        function bs() {
            for(let w = 0; w < s; w++){
                const D = (H + w) % s;
                if (!f[D]) return H = (D + 1) % s, D;
            }
            return -1;
        }
        function g(w, D, z, I, F) {
            const W = D * 3;
            w[W] = z, w[W + 1] = I, w[W + 2] = F;
        }
        return {
            trigger (w, D = 1, z = {}) {
                const { count: I = 42, spread: F = .35, up: W = 3, horiz: ps = 2.2, ttl: P = [
                    .35,
                    .8
                ], sizeJitter: C = .5 } = z, U = Math.max(1, Math.floor(I * D));
                for(let cs = 0; cs < U; cs++){
                    const M = bs();
                    if (M === -1) break;
                    const k = Math.sqrt(Math.random()) * F, S = Math.random() * Math.PI * 2, Y = k * Math.cos(S), is = k * Math.sin(S), $ = Math.sqrt(Math.random()), J = Math.cos(S) * ps * $ * (.6 + .4 * Math.random()), Z = Math.sin(S) * ps * $ * (.6 + .4 * Math.random()), Q = W * (.6 + .4 * Math.random()), O = P[0] + Math.random() * (P[1] - P[0]), q = (1 - C / 2 + Math.random() * C) * 1;
                    g(r, M, w.x + Y, w.y, w.z + is), g(d, M, J * D, Q * D, Z * D), m[M] = O, u[M] = 0, b[M] = q, f[M] = 1;
                }
                y.attributes.position.needsUpdate = !0, y.attributes.aSize.needsUpdate = !0;
            },
            update (w) {
                if (w <= 0) return;
                const D = e, z = Math.max(0, i);
                let I = !1;
                for(let P = 0; P < s; P++){
                    if (!f[P]) continue;
                    if (I = !0, u[P] += w, u[P] >= m[P]) {
                        f[P] = 0;
                        const S = P * 3;
                        r[S] = 1e9, r[S + 1] = 1e9, r[S + 2] = 1e9;
                        continue;
                    }
                    const C = P * 3;
                    d[C + 1] += D * w;
                    const U = d[C], cs = d[C + 1], M = d[C + 2], k = Math.max(0, 1 - z * w);
                    d[C] = U * k, d[C + 1] = cs * k, d[C + 2] = M * k, r[C] += d[C] * w, r[C + 1] += d[C + 1] * w, r[C + 2] += d[C + 2] * w;
                }
                I && (y.attributes.position.needsUpdate = !0);
                let F = 0, W = 0;
                for(let P = 0; P < s; P++)f[P] && (F++, W += 1 - u[P] / m[P]);
                const ps = F ? .25 + .75 * (W / F) : 1;
                c.size = a * ps;
            },
            get object3D () {
                return L;
            },
            dispose () {
                h.remove(L), y.dispose(), c.dispose(), t || l.dispose();
            }
        };
    }
    function ae({ scene: h, size: s = 1.5, ttl: e = .9 } = {}) {
        const i = new Ws(1, 1), t = (()=>{
            const b = document.createElement("canvas");
            b.width = b.height = 64;
            const f = b.getContext("2d");
            return f.clearRect(0, 0, 64, 64), f.strokeStyle = "rgba(255,255,255,0.9)", f.lineWidth = 3, f.beginPath(), f.arc(32, 32, 20, 0, Math.PI * 2), f.stroke(), new Us(b);
        })(), a = new Ys({
            map: t,
            transparent: !0,
            depthWrite: !1
        }), o = new Cs(i, a);
        o.visible = !1, o.userData.persistent = !0, h.add(o);
        let n = 0, l = !1;
        const r = new p;
        function d(b) {
            r.copy(b), n = 0, l = !0, o.visible = !0;
        }
        function m(b, f) {
            if (!l) return;
            if (n += b, n >= e) {
                l = !1, o.visible = !1;
                return;
            }
            o.position.set(r.x, r.y + .01, r.z), o.rotation.set(-Math.PI / 2, 0, 0);
            const y = n / e, c = s * (1 + 1.6 * y);
            o.scale.setScalar(c), a.opacity = 1 - y;
        }
        function u() {
            h.remove(o), i.dispose(), a.dispose(), t.dispose();
        }
        return {
            trigger: d,
            update: m,
            dispose: u,
            mesh: o
        };
    }
    class ie {
        constructor(s, e, i, t, a, o, n){
            this.dataClass = s, this.scene = e, this.audioClass = i, this.levelClass = t, this.paramsClass = a, this.camera = o, this.gameClass = n, this.playerHeight = .9, this.playerWidth = .5, this.player = new Cs(new es(this.playerWidth, this.playerHeight, this.playerWidth), new Ds({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.maxLives = 3, this.player.userData.lives = this.player.userData.maxLives, this.player.userData.bonusHeart = 0, this.player.userData.finish = !1, this.player.userData.splash = !1, this.playerModel, this.playerOut = new Cs(new es(this.playerWidth, this.playerHeight + .1, this.playerWidth), new ls({
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
            if (this.levelClass.levelsMode && this.dataClass.levelCoopMode == "coop" ? this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            }) : this.levelClass.players.every((s)=>s.player.userData.finish || s.player.userData.lives <= 0) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            }) : this.levelClass.levelsMode && this.dataClass.levelCoopMode == "contest" && this.levelClass.players.some((s)=>s.player.userData.finish) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            }), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), V(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, e] = nt(this.player.userData.collider);
                e[0] == 0 && this.player.userData.collider.setCollisionGroups(Hs([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, e] = nt(this.player.userData.collider);
                e[0] != 0 && this.player.userData.collider.setCollisionGroups(Hs([
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
            ]), this.reLiveField(), V(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(this.player.userData.body.translation().x, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY - this.levelClass.bounds.bottomY) / 2 * 1.7 && this.player.userData.live && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && (this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.musicOn && this.dataClass.levelCoopMode == "coop" ? this.audioClass.playMusic([
                "inwater"
            ]) : this.audioClass.musicOn && this.dataClass.levelCoopMode == "contest" && !this.levelClass.players.some((s)=>s.player.userData.finish) && this.audioClass.playMusic([
                "inwater"
            ])), this.levelClass.splash.trigger(new p(this.player.position.x, this.player.position.y + 0, this.player.position.z), 2), this.levelClass.ring.trigger(new p(this.player.position.x, this.player.position.y + .1, this.player.position.z))), this.player.userData.splash = !0), this.player.position.y < -4 && this.gameClass.gameStarting) {
                if (this.player.userData.splash = !1, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                    "back"
                ]), !this.player.userData.finish && this.gameClass.pause, this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.player.userData.finish ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0, !0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.player.userData.lives < 1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.levelClass.levelsMode && (this.player.userData.lives = 0), this.player.userData.finish, this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.gameClass.gameStarting && (this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.pauseMusic([
                    "rain"
                ]), this.dataClass.levelCoopMode == "coop" ? (this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : this.dataClass.levelCoopMode == "contest" && (this.levelClass.players.some((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0))), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, e, i)=>{
                    s.userData.fly = !1;
                }), this.playerAliving(!1), this.audioClass.musicOn && this.audioClass.playMusic([
                    "back"
                ]), this.audioClass.musicOn && this.levelClass.worldClass.rain && this.audioClass.playMusic([
                    "rain"
                ])), !this.player.userData.live || this.player.userData.finish) {
                    if (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos) {
                        const s = this.levelClass.objs.grassPlanes.data;
                        for(let e = 0; e < s.length - 1; e++){
                            const i = s[e];
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
                    }, !0), this.paramsClass.gameDir == "vert" ? this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + 1.1, this.player.userData.deadPos.z)) : this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + A(1.1, 3.1), this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1);
                }
                this.reLiveField();
            } else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, e = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, t = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, l = this.player.userData.readyJump ? .75 : 1.18, r = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, l, .1), this.head.position.z = this.lerp(this.head.position.z, r, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const d = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, d, .4);
                const m = this.player.userData.readyJump ? .6 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, m, .1),
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
                const a = new Ms().setFromEuler(new X(0, Math.PI / 2, 0)), o = t.clone().multiply(a), l = new p(.01, .14, .05).clone().applyQuaternion(o);
                s.quaternion.copy(o), s.position.copy(i).add(l), s.children[0].children[1].rotation.y += .4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
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
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, s && (this.levelClass.reloadLevel(this.levelClass.players.findIndex((e, i, t)=>e.player == this.player)), this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.levelClass.levelsMode ? this.player.userData.lives = 1 : this.player.userData.lives = this.player.userData.maxLives, this.reLiveField()), setTimeout(()=>{
                this.gameClass.gameStarting = !0, this.player.userData.splash = !1;
            }, 100);
        }
        reLiveField() {
            let s = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((i, t, a)=>i.player == this.player)].children, e = document.querySelectorAll(".num_bonus_heart")[this.levelClass.players.findIndex((i, t, a)=>i.player == this.player)];
            for(let i = 0; i < s.length; i++)i > this.player.userData.lives - 1 ? s[i].classList.add("opacity_screen") : s[i].classList.contains("opacity_screen") && s[i].classList.remove("opacity_screen");
            this.player.userData.lives > 3 ? (e.classList.contains("opacity_screen") && e.classList.remove("opacity_screen"), e.textContent = this.player.userData.bonusHeart) : e.classList.contains("opacity_screen") || e.classList.add("opacity_screen");
        }
    }
    class oe {
        constructor(s, e, i, t, a, o, n, l, r, d, m, u, b, f){
            this.scene = s, this.audioClass = e, this.physicsClass = i, this.renderer = t, this.camera = a, this.isMobile = o, this.paramsClass = n, this.worldClass = l, this.initMatch = r, this.gameClass = m, this.splash = u, this.ring = b, this.dataClass = d, this.scoreClass = f, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = this.dataClass.allLevels, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new as(16777215), this._nightColor = new as(16771488);
            const y = new Pt, c = .01;
            y.moveTo(5 * c, 5 * c), y.bezierCurveTo(5 * c, 5 * c, 4 * c, 2 * c, 0 * c, 2 * c), y.bezierCurveTo(-6 * c, 2 * c, -6 * c, 7 * c, -6 * c, 7 * c), y.bezierCurveTo(-6 * c, 10 * c, -3 * c, 14 * c, 5 * c, 18 * c), y.bezierCurveTo(12 * c, 14 * c, 16 * c, 10 * c, 16 * c, 7 * c), y.bezierCurveTo(16 * c, 7 * c, 16 * c, 2 * c, 10 * c, 2 * c), y.bezierCurveTo(7 * c, 2 * c, 5 * c, 5 * c, 5 * c, 5 * c);
            const L = {
                depth: .22,
                bevelEnabled: !1,
                curveSegments: 12,
                steps: 1
            };
            this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (g, _)=>({
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
                    materialPlane: new Ds({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, _)=>({
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
                    materialPlaneTop: new ls({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, _)=>({
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
                    materialPlaneGrass: new Ds({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, _)=>({
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
                    materialPlaneSensor: new Ds({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (g, _)=>({
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
                    materialLamp: new Ds({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (g, _)=>({
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
                    geometryPlafon: new Qs(.32, 24, 16),
                    materialPlafon: new ls({
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
                    }, (g, _)=>({
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
                    geometryBulb: new Qs(.3),
                    materialBulb: new ls({
                        emissive: new as(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                },
                livesBlocks: {
                    data: Array.from({
                        length: this.count
                    }, (g, _)=>({
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
                    geometryLivesBlock: new jt(y, L),
                    materialLivesBlock: new ls({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new ss(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(ts), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new ss(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(ts), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new ss(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(ts), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new ss(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(ts), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new ss(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(ts), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new ss(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(ts), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new ss(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(ts), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new ss(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(ts), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (g)=>{
                g.uniforms.fresnelPower = {
                    value: 2.5
                }, g.fragmentShader = g.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const H = new Float32Array(this.count);
            for(let g = 0; g < this.count; g++)H[g] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Ct(H, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (g)=>{
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
            function bs(g = 64) {
                const _ = document.createElement("canvas");
                _.width = _.height = g;
                const w = _.getContext("2d"), D = w.createRadialGradient(g / 2, g / 2, 0, g / 2, g / 2, g / 2);
                D.addColorStop(0, "rgba(255, 235, 175, 1)"), D.addColorStop(1, "rgba(255, 235, 175, 0)"), w.fillStyle = D, w.fillRect(0, 0, g, g);
                const z = new Us(_);
                return z.anisotropy = 1, z.generateMipmaps = !1, z.needsUpdate = !0, z;
            }
            this._glowTex = bs(), this._emissive = H, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Bs, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s : s ? new p(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new p(1, 1, 1);
        }
        apply(s, e, i) {
            let t = i.userData.invBaseSize;
            if (!t) {
                const l = i.geometry;
                l.computeBoundingBox();
                const r = new p;
                l.boundingBox.getSize(r), t = i.userData.invBaseSize = new p(1 / (r.x || 1), 1 / (r.y || 1), 1 / (r.z || 1));
            }
            this._dummy ||= new Js;
            const a = this._dummy, o = e[s] || {}, n = this.toVec3(o.size);
            a.position.copy(o.position || new p), o.rotation ? a.rotation.copy(o.rotation) : a.rotation.set(0, 0, 0), a.scale.set(n.x * t.x, n.y * t.y, n.z * t.z), a.updateMatrix(), i.setMatrixAt(s, a.matrix);
        }
        async loadTexture() {
            const s = new yt;
            s.load("textures/plane.jpg", (e)=>{
                const i = new ls({
                    map: e,
                    transparent: !0,
                    opacity: 1
                });
                e.wrapS = Ps, e.wrapT = Ps, e.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = i;
            }, void 0, function(e) {
                console.error("An error happened.");
            }), s.load("textures/grass.jpg", (e)=>{
                const i = new ls({
                    map: e
                });
                e.wrapS = Ps, e.wrapT = Ps, e.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = i;
            }, void 0, function(e) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let s = new es(.5, .7, 1), e = new Ys({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new Cs(s, e), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = A(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((e, i, t)=>{
                document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
            }), s) {
                this.getHorizontalWorldBounds(-7);
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
                        let o = A(this.planeWidth, this.planeWidth - 1), n = e + o / 2 + A(this.fixedDistanceHor.min, this.fixedDistanceHor.max), l = A(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (t && (o = t[a]), a == 0 ? (this.objs.planes.data[a].size.x = this.planeWidth, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.planes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[a].size.x = this.planeWidth + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : a == 1 ? (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : a == this.count - 1 ? (t ? this.objs.planes.data[a].size.x = t[t.length - 1] - .2 : this.objs.planes.data[a].size.x = 5, this.objs.planes.data[a].size.y = this.planeHeight, t ? this.objs.topPlanes.data[a].size.x = t[t.length - 1] : this.objs.topPlanes.data[a].size.x = 5 + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, t ? this.objs.grassPlanes.data[a].size.x = t[t.length - 1] : this.objs.grassPlanes.data[a].size.x = 5 + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), a == 0 ? (l = 1 - this.planeHeight / 1.5, this.objs.planes.data[a].position.x = 0, this.objs.planes.data[a].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = 0, this.objs.topPlanes.data[a].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = 0, this.objs.grassPlanes.data[a].position.y = l + this.planeHeight / 1.5) : a == 1 ? (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = l + this.planeHeight / 1.5) : (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = l + this.planeHeight / 1.5), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 8, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.lights.length < this.lightsCount) {
                            const r = new ks(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
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
                        let o = A(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        t && (o = t[a]), this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[a].userData.direction = 1 : this.objs.grassPlanes.data[a].userData.direction = -1;
                        let n = i + A(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[a].position.y = n - 1.3, this.objs.grassPlanes.data[a].position.y = n, this.objs.sensorPlanes.data[a].position.y = n - .3, this.objs.topPlanes.data[a].size.y = .3, this.objs.grassPlanes.data[a].size.y = .7, this.objs.sensorPlanes.data[a].size.y = .9, a > 0 ? (this.objs.topPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.sensorPlanes.data[a].size.x = o + .7) : (this.objs.topPlanes.data[a].size.x = 10, this.objs.grassPlanes.data[a].size.x = 10, this.objs.sensorPlanes.data[a].size.x = 10), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 8, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.grassPlanes.data[a].userData.speed = A(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const l = new ks(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
            } else switch(this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let e = -2.5;
                    for(let t = 0; t < this.count; t++){
                        let a = A(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = e + a / 2 + A(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = A(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (t > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, t > this.count - 20 ? (this.objs.planes.data[t].size.x = .1, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = .2 + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = .2 + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : t > 0 ? (this.objs.planes.data[t].size.x = a, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = a + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = a + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[t].size.x = this.planeWidth, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = this.planeWidth + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), t == 0 ? (n = 1 - this.planeHeight / 1.5, this.objs.planes.data[t].position.x = 0, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = 0, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = 0, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5) : t == 1 ? (o = 6, this.objs.planes.data[t].position.x = o, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = o, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = o, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5) : t > 1 && (this.objs.planes.data[t].position.x = o, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = o, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = o, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5), this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new ks(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(t, this.objs.planes.data, this.objs.planes.plane), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), e = o + a / 2;
                    }
                    for(let t = 0; t < this.count; t++)if (t > 4 && t < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[t - 1].userData.moveHor && (this.objs.grassPlanes.data[t].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[t - 1].position.x,
                        x2: this.objs.grassPlanes.data[t + 1].position.x,
                        w1: this.objs.grassPlanes.data[t - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[t + 1].size.x / 2
                    }, this.objs.planes.data[t].position.y = -10), t > 7 && t < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[t - 1].userData.moveHor && !this.objs.grassPlanes.data[t - 1].userData.moveVert && (this.objs.grassPlanes.data[t].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[t - 1].position.x,
                        x2: this.objs.grassPlanes.data[t + 1].position.x,
                        w1: this.objs.grassPlanes.data[t - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[t + 1].size.x / 2
                    }, this.objs.planes.data[t].position.y = -10), this.objs.grassPlanes.data[t].position.y > this.maxHeight && (this.maxHeight = this.objs.grassPlanes.data[t].position.y), t > 7 && Math.random() < .1 && !this.objs.grassPlanes.data[t].userData.moveHor && !this.objs.grassPlanes.data[t].userData.moveVert && (this.objs.livesBlocks.data[t].position.x = this.objs.grassPlanes.data[t].position.x - this.objs.grassPlanes.data[t].size.x / 2 + this.objs.livesBlocks.data[t].size.x / 2, this.objs.livesBlocks.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.livesBlocks.data[t].size.y / 2 + .2, this.objs.livesBlocks.data[t].userData.startPos = this.objs.livesBlocks.data[t].position.clone()), this.apply(t, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock), t > 2 && (t + 1) % 10 === 1) {
                        let a = this.boostHatModel.clone();
                        a.position.x = this.objs.grassPlanes.data[t].position.x, a.position.y = this.objs.topPlanes.data[t].position.y + 2, a.rotation.y = -Math.PI / 2, a.userData.num = t, this.boostHatModels.push(a), this.boostHatMeshes.push(a.children[0].children[0].children[0]), this.boostHatCoords.push([
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
                    for(let t = 0; t < this.count; t++){
                        let a = A(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[t].userData.direction = 1 : this.objs.grassPlanes.data[t].userData.direction = -1;
                        let o = i + A(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[t].position.y = o - 1.3, this.objs.grassPlanes.data[t].position.y = o, this.objs.sensorPlanes.data[t].position.y = o - .3, this.objs.topPlanes.data[t].size.y = .3, this.objs.grassPlanes.data[t].size.y = .7, this.objs.sensorPlanes.data[t].size.y = .9, t > this.count - 20 && (this.objs.topPlanes.data[t].size.x = a / 8 + .1, this.objs.grassPlanes.data[t].size.x = a / 8 + .1, this.objs.sensorPlanes.data[t].size.x = a / 8 + .4), t > 0 ? (this.objs.topPlanes.data[t].size.x = a + .3, this.objs.grassPlanes.data[t].size.x = a + .3, this.objs.sensorPlanes.data[t].size.x = a + .7) : (this.objs.topPlanes.data[t].size.x = 10, this.objs.grassPlanes.data[t].size.x = 10, this.objs.sensorPlanes.data[t].size.x = 10), t > this.count - 10 ? this.objs.grassPlanes.data[t].userData.speed = A(10, 14) / 100 : this.objs.grassPlanes.data[t].userData.speed = A(6, 10) / 100, this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, (t + 1) % 7 === 0) {
                            let n = this.boostHatModel.clone();
                            n.position.x = A(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[t].position.y + .5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                                n.position.x,
                                n.position.y
                            ]), this.scene.add(n);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const n = new ks(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), i = o;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
            this.players.forEach((e, i, t)=>{
                e.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y, (s || this.paramsClass.gameDir == "vert") && (e.player.userData.lives = 1, e.reLiveField());
            });
        }
        getHorizontalWorldBounds(s = 0) {
            const e = new p(-1, 0, .5), i = new p(1, 0, .5), t = new p(0, 1, .5), a = new p(0, -1, .5);
            if (e.unproject(this.camera), i.unproject(this.camera), t.unproject(this.camera), a.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = e.clone().sub(o).normalize(), l = i.clone().sub(o).normalize(), r = t.clone().sub(o).normalize(), d = a.clone().sub(o).normalize(), m = (s - o.z) / n.z, u = (s - o.z) / d.z, b = o.clone().add(n.multiplyScalar(m)), f = o.clone().add(l.multiplyScalar(m)), y = o.clone().add(r.multiplyScalar(u)), c = o.clone().add(d.multiplyScalar(u));
                this.bounds = {
                    leftX: b.x,
                    rightX: f.x,
                    topY: y.y,
                    bottomY: c.y
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
                            const n = t.translation(), l = a.x1 + a.w1 + i.size.x * .5, r = a.x2 - a.w2 - i.size.x * .5, d = i.userData.speed ?? .05;
                            n.x >= r && (i.userData.direction = -1), n.x <= l && (i.userData.direction = 1);
                            const m = i.userData.direction * d, u = n.x + m;
                            t.setNextKinematicTranslation({
                                x: u,
                                y: n.y,
                                z: n.z
                            }), i.position.x = u, this.objs.lamps.data[e].position.x = u, this.objs.plafons.data[e].position.x = u, this.objs.bulbs.data[e].position.x = u, this.objs.topPlanes.data[e].position.x = u;
                        } else if (o) {
                            const n = t.translation(), l = 2, r = .5, d = i.userData.speed ?? .03;
                            n.y >= l && (i.userData.direction = -1), n.y <= r && (i.userData.direction = 1);
                            const m = i.userData.direction * d, u = n.y + m;
                            t.setNextKinematicTranslation({
                                x: n.x,
                                y: u,
                                z: n.z
                            }), i.position.y = u, this.objs.lamps.data[e].position.y = u + this.objs.lamps.lampHeight, this.objs.plafons.data[e].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[e].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[e].position.y = u + .2;
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
                    const n = e.userData.direction * a, l = o.x + n;
                    s > 0 && t.setNextKinematicTranslation({
                        x: l,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[s].position.x = l, this.objs.lamps.data[s].position.x = l, this.objs.plafons.data[s].position.x = l, this.objs.bulbs.data[s].position.x = l, this.objs.topPlanes.data[s].position.x = l, this.objs.topPlanes.data[s].position.y = o.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i.position.set(l, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBirdModel() {
            await new Os().loadAsync("models/bird/bird.glb").then((i)=>{
                const t = i.scene, a = i.animations;
                t.scale.x = 2, t.scale.y = 2, t.scale.z = 2, t.position.y = 0, t.rotation.y = -Math.PI / 3, this.angryBirdModel = t, this.angryBirdModel.userData.mixer = new Mt(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(a[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Bs;
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new as(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new as(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new as(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.paramsClass.gameDir == "hor" ? this.players.length > 1 ? this.scoreClass.updateMetersFloat(this.camera.position.x - this.scoreClass.startX) : this.scoreClass.updateMetersFloat(this.camera.position.x - this.scoreClass.startX - 6) : this.scoreClass.updateMetersFloat(this.camera.position.y - this.scoreClass.startY), this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, e, i)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new p(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && !this.worldClass.thunder ? (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: A(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + A(this.distanceToBird, this.distanceToBird + 10), this.angryBird.userData.speed = A(8, 13) / 100, this.angryBird.userData.flying = !0) : this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && this.worldClass.thunder && (this.birdFlyingMark = this.birdFlyingMark + A(this.distanceToBird, this.distanceToBird + 10)), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const s = new At(new _t({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: zs
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
                    const n = a.position.x >= i && a.position.x <= t, l = o;
                    if (n && !a.pointLight && this.lights.length > 0) {
                        const r = this.lights.shift();
                        a.pointLight = r, a.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(a.glow);
                    }
                    if (a.pointLight) {
                        const r = a.pointLight;
                        r.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), a.glow.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 0);
                        const d = n ? this.lightIntensity : 0;
                        r.intensity = R.lerp(r.intensity, d, .15);
                        const m = n ? 1 : 0;
                        this._emissive[l] = R.lerp(this._emissive[l], m, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .5 + this._emissive[l] * .8;
                        a.glow && a.glow.scale.setScalar(u);
                        const b = 1.1, f = this._emissive[l], y = 1 + b * f, c = this.objs.bulbs.baseSize, L = this.objs.bulbs.data[l];
                        L.userData._lastBulbFactor !== y && (L.size.set(c.x * y, c.y * y, c.z * y), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), L.userData._lastBulbFactor = y, s = !0), !n && r.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(r), a.pointLight = null, a.glow && (this.glowPool.push(a.glow), this.scene.remove(a.glow), a.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((t, a)=>{
                    const o = t.pointLight;
                    o && (o.intensity = R.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), t.pointLight = null, t.userData.light = !1, t.glow && (this.scene.remove(t.glow), this.glowPool.push(t.glow), t.glow = null))), this.objs.plafons.plafon.setColorAt(a, this._dayColor), i = !0, this._emissive && this._emissive.length > a && (this._emissive[a] = 0);
                    const n = 1.1, l = this._emissive[a], r = 1 + n * l, d = this.objs.bulbs.baseSize, m = this.objs.bulbs.data[a];
                    m.userData._lastBulbFactor !== r && (m.size.set(d.x * r, d.y * r, d.z * r), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), m.userData._lastBulbFactor = r, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const e = this.camera.position.y - this.bounds.topY / 1, i = this.camera.position.y + this.bounds.topY * .8;
                this.objs.plafons.data.forEach((t, a)=>{
                    t.pointLight;
                    const o = t.position.y >= e && t.position.y <= i, n = a;
                    if (o && !t.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        t.pointLight = l, t.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(t.glow);
                    }
                    if (t.pointLight) {
                        const l = t.pointLight;
                        l.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 2), t.glow.position.copy(t.position);
                        const r = o ? this.lightIntensity : 0;
                        l.intensity = R.lerp(l.intensity, r, .15);
                        const d = o ? 1 : 0;
                        this._emissive[n] = R.lerp(this._emissive[n], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const m = .8 + this._emissive[n] * .8;
                        t.glow && t.glow.scale.setScalar(m);
                        const u = 1, b = this._emissive[n], f = 1 + u * b, y = this.objs.bulbs.baseSize, c = this.objs.bulbs.data[n];
                        c.userData._lastBulbFactor !== f && (c.size.set(y.x * f, y.y * f, y.z * f), this.apply(n, this.objs.bulbs.data, this.objs.bulbs.bulb), c.userData._lastBulbFactor = f, s = !0), !o && l.intensity <= .01 && this._emissive[n] <= .02 && (this.lights.push(l), t.pointLight = null, t.glow && (this.glowPool.push(t.glow), this.scene.remove(t.glow), t.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let e = !1;
                this.objs.plafons.data.forEach((i, t)=>{
                    const a = i.pointLight;
                    !i.pointLight && this._emissive[t] === 0 || (a && (a.intensity = R.lerp(a.intensity, 0, 1), a.intensity <= .01 && (a.intensity = 0, this.lights.push(a), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(t, this._dayColor), e = !0, this._emissive && this._emissive.length > t && (this._emissive[t] = 0));
                }), e && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
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
            this.reloadLevel();
            for(let s = 0; s < this.players.length; s++){
                let e = this.players[s];
                this.levelsMode || e.reLiveField(), e.player.position.x = e.player.position.x - s * 1 + 1, this.physicsClass.addPhysicsToObject(e.player), this.paramsClass.gameDir == "vert" && (e.player.position.y = -0, e.player.userData.collider.setFriction(500)), await e.loadPlayerModel(), e.player.userData.startPos = e.player.position.clone(), this.scene.add(e.player), this.scene.add(e.playerOut), this.scene.add(e.playerModel), this.playerOuts.push(e.playerOut), s < this.players[0].playerColors.length ? e.head.children[0].material.color.set(this.players[0].playerColors[s]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), e.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > s ? e.player.userData.audio.push(this.audioClass.quacks[s].clone()) : e.player.userData.audio.push(this.audioClass.quacks[0].clone());
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
                            this.players.filter((n)=>n.player.userData.live).length != 1 ? t = this.players[i].player.position.x : this.paramsClass.gameDir == "hor" && (t = this.players[i].player.position.x + this.bounds.rightX / 2);
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
            const o = 2 / t, n = o * a, l = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let r = s - e;
            const d = (i + o * r) * a, m = (i - o * d) * l;
            return {
                newPos: e + (r + d) * l,
                newVel: m
            };
        }
        showPopupInGame(s = !1, e = !1) {
            this.hideScreen("popup_game_btn_close"), this.hideScreen("menu_in_game"), this.audioClass.oceanAudio.isPlaying && this.audioClass.oceanAudio.stop(), this.audioClass.rainAudio.isPlaying && this.audioClass.rainAudio.stop(), this.gameClass.pause ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn1")) : (this.gameClass.showGamePopup = !0, this.levelsMode ? this.players.every((i)=>i.player.userData.finish) && this.dataClass.levelCoopMode == "coop" || this.players.some((i)=>i.player.userData.finish) && this.dataClass.levelCoopMode == "contest" ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.audioClass.winAudio.isPlaying && this.audioClass.winAudio.stop(), this.audioClass.musicOn && this.audioClass.winAudio.play(), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15"), this.dataClass.levelCoopMode == "coop" && this.players.forEach((i, t, a)=>{
                this.levelsMode == this.allLevels && (this.dataClass.table.player.bonusHeart[t] = 2), this.levelsMode + 1 > this.dataClass.table.player.levels[t] && (this.dataClass.table.player.levels[t] = this.levelsMode);
            }), this.dataClass.saveLocalData(), this.dataClass.loadLocalData(), this.dataClass.loadLevels(this.players.length - 1)) : (this.hideScreen("popup_game_btn15"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win")) : (!s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play(), this.scoreClass.score + 1 > this.scoreClass.myRec && (this.dataClass.saveLocalData(), this.dataClass.loadLocalData()))), this.showScreen("popup_in_game"), this.gameClass.gameStarting = !1;
        }
        reloadLevel(s = -1) {
            if (this.paramsClass.gameDir == "hor" && !this.levelsMode) {
                if (s >= 0) {
                    let e = this.players[s];
                    this.dataClass.table.player.bonusHeart[s] ? (e.player.userData.maxLives = 4, e.player.userData.lives = e.player.userData.maxLives, e.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[s], this.dataClass.table.player.bonusHeart[s]--) : (e.player.userData.maxLives = 3, e.player.userData.lives = e.player.userData.maxLives);
                } else {
                    let e = [
                        0,
                        -1,
                        1
                    ];
                    for(let i = 0; i < this.players.length; i++){
                        let t = this.players[i], a = Math.floor(Math.random() * e.length);
                        this.levelsMode ? t.player.position.x = e[a] : (t.reLiveField(), t.player.position.x = t.player.position.x - i * .3 + 1), e.splice(a, 1), this.dataClass.table.player.bonusHeart[i] ? (t.player.userData.maxLives = 4, t.player.userData.lives = t.player.userData.maxLives, t.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[i], this.dataClass.table.player.bonusHeart[i]--) : (t.player.userData.maxLives = 3, t.player.userData.lives = t.player.userData.maxLives), this.levelsMode || t.reLiveField();
                    }
                }
                this.dataClass.saveLocalData(), this.dataClass.loadLocalData();
            }
        }
        rebindButton(s, e) {
            const i = document.querySelector(s), t = i.cloneNode(!0);
            return i.parentNode.replaceChild(t, i), t.addEventListener("click", e), t;
        }
        menuInGame = ()=>{
            this.rebindButton(".popup_game_btn1", ()=>{
                this.audioClass.oceanAudio.isPlaying || this.audioClass.oceanAudio.play(), this.boostHatModels.forEach((e, i, t)=>{
                    e.userData.fly = !1;
                });
                let s = [];
                this.players.forEach((e, i, t)=>{
                    s.push(e.player.position.x);
                }), this.players.forEach((e, i, t)=>{
                    e.playerAliving(!1), e.player.userData.lives = 1, e.player.position.x = Math.max(...s), this.camera.position.x = e.player.position.x;
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
                this.audioClass.hardStopAll(), this.players.forEach((e, i, t)=>{
                    if (e.player.userData.live = !1, e.player.userData.body.setTranslation(new p(0, -5, 0)), e.player.userData.finish = !1, e.playerAliving(!0), this.levelsMode) {
                        let a = this.players[i], o = Math.floor(Math.random() * s.length);
                        a.player.userData.startPos.x = s[o], s.splice(o, 1);
                    } else e.player.position.x = e.player.position.x - i * 1 + 1;
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((e, i, t)=>{
                    e.position.x = this.boostHatCoords[i][0], e.position.y = this.boostHatCoords[i][1], e.userData.fly = !1;
                });
                for(let e = 0; e < this.objs.livesBlocks.data.length; e++)this.objs.livesBlocks.data[e].position = this.objs.livesBlocks.data[e].userData.startPos, this.apply(e, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
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
                }, 100), this.players.forEach((s, e, i)=>{
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
            })), l = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(l, n), this.instancedBodies.push({
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
            }), n = t.quaternion?.isQuaternion ? t.quaternion : new Ms, l = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), r = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            s[i].userData.body = l, s[i].userData.shape = r, s[i].userData.collide = this.world.createCollider(r, l), this.instancedBodies.push({
                mesh: e,
                index: i,
                size: a,
                body: l
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
                s.rotation.set(0, 0, 0), new ms().setFromObject(s);
                const a = Is(s);
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
                s.rotation.set(0, 0, 0), new ms().setFromObject(s);
                const a = Is(s);
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
                s.rotation.set(0, 0, 0), new ms().setFromObject(s);
                const a = Is(s);
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
    const Rs = new p;
    function Is(h) {
        if (h.isMesh && h.geometry) {
            const e = h.geometry;
            return e.boundingBox || e.computeBoundingBox(), e.boundingBox.getSize(Rs), Rs.multiply(h.scale), Rs.clone();
        }
        return new ms().setFromObject(h).getSize(new p);
    }
    class ne {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.looseAudio, this.winAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicNowPlaying = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2, this._attached = !1, this.listener = new St, this.musicOn = !0;
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
            }), await s.loadAsync("audio/win.mp3").then((e)=>{
                this.winAudio = new B(this.listener), this.winAudio.setBuffer(e), this.winAudio.setLoop(!1), this.winAudio.setRefDistance(200), this.winAudio.setVolume(2), this.musics.push({
                    name: "win",
                    music: this.winAudio
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
                this.rainAudio = new B(this.listener), this.rainAudio.setBuffer(e), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1.5), this.musics.push({
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
            this.levelClass = s, this.isMobile = e, this.renderer = i, this.camera = t, this.paramsClass = a, this.audioClass = o, this.mouse = new p, this.raycaster = new kt;
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
    class re {
        constructor(s, e, i, t, a, o){
            this.scene = s, this.camera = e, this.renderer = i, this.paramsClass = t, this.isMobile = a, this.audioClass = o, this.ambientLight = new zt(11184810, 1), this.hemiLight = new Bt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ht(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Js, this.dirLight.target = this.targetObject, this.helper = new Et(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.isRainActive = !1, this.rainEndTimestampMs = 0, this.activeLightningLines = [], this.lightningMaterialBase = new Tt({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: zs,
                depthWrite: !1
            }), this.clock = new Bs, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 10, this.rainAreaHalfDepth = 22, this.rainTopY = 7, this.rainBottomY = -2, this.rainGeometry = new xs, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let e = 0; e < this.rainDropCount; e++){
                const i = e * 3;
                this.rainPositions[i + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[i + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[i + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[e] = 10 + Math.random() * 10, this.rainWindPhase[e] = Math.random() * Math.PI * 20;
            }
            const s = new Float32Array(this.rainDropCount * 3);
            for(let e = 0; e < this.rainDropCount; e++){
                const i = .8 + Math.random() * .2;
                s[e * 3 + 0] = .7 * i, s[e * 3 + 1] = .8 * i, s[e * 3 + 2] = 1 * i;
            }
            this.rainGeometry.setAttribute("position", new rs(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new rs(s, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new mt({
                color: 8947916,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .75,
                transparent: !0,
                opacity: .81,
                size: .15,
                sizeAttenuation: !0,
                depthWrite: !0,
                blending: zs
            }), this.rainPoints = new qs(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Ws(900, 500), this.water = new Ft(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new yt().load("textures/waternormals.jpg", function(r) {
                    r.wrapS = r.wrapT = Ps;
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
            }, this.blackSky = new Cs(new Ws(1e4, 1e4), new Ys({
                color: 526362,
                side: It,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const e = 1500, i = new Float32Array(e * 3), t = new Float32Array(e), a = new Float32Array(e * 3);
            for(let r = 0; r < e; r++){
                i[3 * r] = Math.random() * 600 - 300, i[3 * r + 1] = Math.random() * 150 - 100, i[3 * r + 2] = Math.random() * 300 - 500, t[r] = Math.random() * 2 + .7;
                const d = new as().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * r] = d.r, a[3 * r + 1] = d.g, a[3 * r + 2] = d.b;
            }
            const o = new xs;
            o.setAttribute("position", new rs(i, 3)), o.setAttribute("size", new rs(t, 1)), o.setAttribute("color", new rs(a, 3));
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
                fragmentShader: l,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: zs
            }), this.stars = new qs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, e = Math.sign(s - this._prevCamX);
            this._prevCamX = e, this.stars.position.x = this.camera.position.x;
            const i = R.degToRad(90 - this.parameters.elevation), t = R.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, i, t), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1, this.rainStart = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), !this.rainStart && this.parameters.elevation < 2 && this.parameters.elevation > 1.5 && (this.rain = !0, this.startRain(), this.audioClass.musicOn && this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1)), this.paramsClass.gameDir == "vert") {
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
            const e = 10;
            this.dirLight.shadow.camera.left = -e, this.dirLight.shadow.camera.right = e, this.dirLight.shadow.camera.top = e, this.dirLight.shadow.camera.bottom = -e, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let i = this.activeLightningLines.length - 1; i >= 0; i--){
                const t = this.activeLightningLines[i];
                t.userData.life -= this.deltaSeconds / 1.5, t.material.opacity *= .78, (t.userData.life <= 0 || t.material.opacity <= .02) && (this.scene.remove(t), t.geometry.dispose(), t.material.dispose(), this.activeLightningLines.splice(i, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const i = this.rainGeometry.getAttribute("position"), t = Math.sin(performance.now() * .0012) * .8, a = this.camera.position.x, o = this.camera.position.z;
                for(let n = 0; n < this.rainDropCount; n++){
                    const l = n * 3, r = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + t * .4;
                    this.rainPositions[l + 0] += r * this.deltaSeconds * 8, this.rainPositions[l + 1] -= this.rainVelocities[n] * (1 + Math.abs(t) * .3) * this.deltaSeconds, a + this.rainPositions[l + 0], o + this.rainPositions[l + 2], this.rainPositions[l + 1] < this.rainBottomY && (this.rainPositions[l + 1] = this.rainTopY, this.rainPositions[l + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[l + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[l + 0] > this.rainAreaHalfWidth && (this.rainPositions[l + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[l + 0] < -this.rainAreaHalfWidth && (this.rainPositions[l + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[l + 2] > this.rainAreaHalfDepth && (this.rainPositions[l + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[l + 2] < -this.rainAreaHalfDepth && (this.rainPositions[l + 2] += this.rainAreaHalfDepth * 2 - 35);
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
            const t = s + (Math.random() - .5) * 6, a = -4 + Math.random() * 3, o = i + (Math.random() - .5) * 6, n = t - s, l = a - e, r = o - i, d = Math.hypot(n, l, r) || 1, m = n / d, u = l / d, b = r / d, f = n / d, c = -(r / d), L = 0, H = f, bs = Math.abs(u) > .9 ? new p(1, 0, 0) : new p(0, 1, 0), g = new p(m, u, b), _ = new p().crossVectors(g, bs).normalize(), w = new p().crossVectors(g, _).normalize(), D = 2 + Math.random() * 2, z = 1.2, I = Math.random() * Math.PI * 2, F = 3 + Math.random() * 2.5, W = .8, ps = Math.random() * Math.PI * 2, P = 28, C = 4, U = [];
            for(let M = 0; M <= P; M++){
                const k = M / P, S = 1 - k;
                let Y = s + n * k, is = e + l * k, $ = i + r * k;
                const J = Math.sin(k * Math.PI * D + I) * z * (.3 + .7 * S), Z = Math.sin(k * Math.PI * F + ps) * W * (.3 + .7 * S), Q = (Math.random() - .5) * 2 * C * S, O = (Math.random() - .5) * 1.6 * C * S, q = Math.random() < .12 ? (Math.random() - .5) * 3.5 * S : 0;
                if (Y += _.x * (J + Q + q) + w.x * (Z + O * .7), is += _.y * (J + Q * .5) + w.y * (Z + O * .5), $ += _.z * (J + Q + q) + w.z * (Z + O * .7), U.push(Y, is, $), M > 3 && M < P - 3 && Math.random() < .22) {
                    const os = [], fs = 3 + Math.floor(Math.random() * 2), ns = .25 + Math.random() * .35;
                    let gs = Y, vs = is, ws = $;
                    os.push(gs, vs, ws);
                    for(let Ls = 1; Ls <= fs; Ls++)gs += (Math.random() - .5) * C * ns, vs += -(.8 + Math.random() * .8) * ns, ws += (Math.random() - .5) * C * ns, os.push(gs, vs, ws);
                    const Ss = new xs;
                    Ss.setAttribute("position", new st(os, 3));
                    const us = new tt(Ss, this.lightningMaterialBase.clone());
                    us.material.opacity = .6, us.userData.life = .16 + Math.random() * .12, this.scene.add(us), this.activeLightningLines.push(us);
                }
            }
            const cs = 2;
            for(let M = -1; M <= cs; M++){
                const k = M === -1, S = k ? 0 : M % 2 === 0 ? 1 : -1, Y = .55 + Math.random() * .45, is = .35, $ = Math.random() * Math.PI * 2, J = [], Z = U.length / 3;
                for(let q = 0; q < Z; q++){
                    const os = q / (Z - 1), fs = .35 + .85 * os, ns = Math.sin(os * Math.PI * 2 + $) * is * (.2 + .8 * os), gs = c * S * Y * fs + H * ns * .3, vs = L * S * Y * fs + ns * .05, ws = H * S * Y * fs - c * ns * .3, Ss = q * 3 + 0, us = q * 3 + 1, Ls = q * 3 + 2, Ks = U[Ss], $s = U[us], Zs = U[Ls];
                    k ? J.push(Ks + (Math.random() - .5) * .05, $s + (Math.random() - .5) * .05, Zs + (Math.random() - .5) * .05) : J.push(Ks + gs + (Math.random() - .5) * .2, $s + vs + (Math.random() - .5) * .2, Zs + ws + (Math.random() - .5) * .2);
                }
                const Q = new xs;
                Q.setAttribute("position", new st(J, 3));
                const O = new tt(Q, this.lightningMaterialBase.clone());
                O.material.opacity = k ? .95 : .32, O.userData.life = .22 + Math.random() * .18, this.scene.add(O), this.activeLightningLines.push(O);
            }
        }
        triggerLightningFlash() {
            const s = this.camera.position.x + (Math.random() - .5) * 30, e = 34 + Math.random() * 6, i = -10 - Math.random() * 20;
            this.createLightningBolt(s, e, i);
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
            const t = new Gt(i, 2, 40, qt);
            return t.needsUpdate = !0, t.magFilter = et, t.minFilter = et, t.wrapS = at, t.wrapT = at, t.rotation = Math.PI / 2, t.center.set(.5, .5), t;
        }
    }
    class he {
        constructor(s, e, i, t, a){
            this.initMatch = s, this.loadLevels = e, this.gameClass = i, this.audioClass = t, this.dataClass = a, this.playersNum = 1, this.levelPlayersNum = 1, this.mainMenu(this.initMatch), this.loadRecsData();
        }
        loadRecsData() {
            this.dataClass.loadLocalData();
            let s = this.dataClass.masTables, e = document.querySelectorAll(".rec_table_small"), i = "free_game_my_rec", t = "";
            e[0].innerHTML = "", e[1].innerHTML = "", s.forEach((a, o, n)=>{
                s[o].forEach((l, r, d)=>{
                    s[o][r].findIndex((m)=>m.name === "Мой рекорд") < 3 ? e[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == r + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${s[o][r][0].name == "Мой рекорд" ? i : t}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][r][0].name}</span>
                <div><span class='place_rec'>${s[o][r][0].rec}</span><span>м</span></div>
            </div>
            <div class='green_back two_place ${s[o][r][1].name == "Мой рекорд" ? i : t}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][r][1].name}</span>
                <div><span class='place_rec'>${s[o][r][1].rec}</span><span>м</span></div>
            </div>
            <div class='blue_back three_place ${s[o][r][2].name == "Мой рекорд" ? i : t}'>
                <span class='place_num'>3</span>
                <span class='rec_table_small_name'>${s[o][r][2].name}</span>
                <div><span class='place_rec'>${s[o][r][2].rec}</span><span>м</span></div>
            </div>
          </div>
        `) : e[o].insertAdjacentHTML("beforeend", `
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
            });
            const s = document.querySelector(".levels_blocks");
            s.addEventListener("click", (i)=>{
                const t = i.target.closest(".levels_block");
                if (!t || t.classList.contains("levels_block--locked")) return;
                const a = Number(t.dataset.level) || 1;
                s.querySelectorAll(".levels_block").forEach((o)=>o.classList.remove("active")), t.classList.add("active"), this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, a, !0);
            });
            const e = document.querySelector(".levels_blocks_contest");
            e.addEventListener("click", (i)=>{
                const t = i.target.closest(".levels_block");
                if (!t) return;
                const a = Number(t.dataset.level) || 1;
                e.querySelectorAll(".levels_block").forEach((o)=>o.classList.remove("active")), t.classList.add("active"), this.hideScreen("levels_game_screen_contest"), this.initMatch(this.levelPlayersNum, 1, a, !0);
            }), document.querySelectorAll(".level_game_chels").forEach((i, t, a)=>{
                i.addEventListener("click", ()=>{
                    this.levelPlayersNum != t + 1 && (document.querySelectorAll(".level_game_chels").forEach((o)=>{
                        o.classList.remove("level_game_chels_active");
                    }), i.classList.add("level_game_chels_active"), this.levelPlayersNum = t + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
                });
            }), document.querySelectorAll(".level_game_chels_contest").forEach((i, t, a)=>{
                i.addEventListener("click", ()=>{
                    this.levelPlayersNum != t + 2 && (console.log(this.levelPlayersNum), console.log(t), document.querySelectorAll(".level_game_chels_contest").forEach((o)=>{
                        o.classList.remove("level_game_chels_contest_active");
                    }), i.classList.add("level_game_chels_contest_active"), this.levelPlayersNum = t + 2, this.dataClass.loadLevelsContest(this.levelPlayersNum - 2));
                });
            }), document.querySelector(".free_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 2);
            }), document.querySelector(".free_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 4, !1, !1);
            }), document.querySelectorAll(".free_game_chels").forEach((i, t)=>{
                i.addEventListener("click", ()=>{
                    document.querySelectorAll(".free_game_chels").forEach((d)=>{
                        d.classList.remove("free_game_chels_active");
                    }), i.classList.add("free_game_chels_active");
                    const a = t + 1, o = document.querySelectorAll(".rec_table_small"), n = [];
                    o.forEach((d)=>{
                        const m = d.querySelector(".rec_table_small_block:not(.hidden_screen)");
                        m && (n.push(m), m.getBoundingClientRect(), m.classList.add("anim-out"));
                    });
                    let l = 0;
                    const r = ()=>{
                        if (l++, l < n.length) return;
                        this.playersNum = a, this.loadRecsData();
                        const d = [];
                        document.querySelectorAll(".rec_table_small").forEach((m)=>{
                            const u = m.querySelector(".rec_table_small_block:not(.hidden_screen)");
                            u && (u.classList.add("anim-in"), d.push(u));
                        }), requestAnimationFrame(()=>{
                            d.forEach((u)=>{
                                u.getBoundingClientRect(), u.classList.add("anim-play");
                            });
                            const m = (u)=>{
                                u.classList.remove("anim-in", "anim-play"), u.removeEventListener("transitionend", m);
                            };
                            d.forEach((u)=>u.addEventListener("transitionend", ()=>m(u), {
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
    class de {
        constructor(){
            this.gameDir = "vert", this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class pe {
        constructor(s, e){
            this.camera = s, this.dataClass = e, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y, this.metersFloatEl = document.getElementById("meters-float"), this.myRecField = document.getElementById("myRecord"), this.worldRecField = document.getElementById("worldRecord"), this.worldRec = 0, this.myRec = 0;
        }
        loadRecsToHud(s = 0, e = 0) {
            this.worldRec = this.dataClass.masTables[s][e][0].rec, this.myRec = this.dataClass.masTables[s][e].find((i)=>i.pos == 0).rec, this.myRecField.textContent = this.myRec, this.worldRecField.textContent = this.worldRec;
        }
        updateMetersFloat(s) {
            if (s = Math.max(0, Math.floor(s)), s === this.shownFloat) return;
            const e = pt, i = performance.now(), t = 50, a = (o)=>{
                const n = Math.min(1, (o - i) / t), l = 1 - Math.pow(1 - n, 4), r = Math.round(e + (s - e) * l);
                this.score = r, this.score + 1 > this.myRec && (this.myRec = this.score, this.myRecField.textContent = this.myRec), this.score + 1 > this.worldRec && (this.worldRec = this.score, this.worldRecField.textContent = this.myRec), this.metersFloatEl.textContent = String(r).padStart(3, "0"), n < 1 ? requestAnimationFrame(a) : pt = s;
            };
            requestAnimationFrame(a);
        }
    }
    let pt = 0;
    class ce {
        constructor(){
            this.gameStarting = !1, this.pause = !1, this.visible = !0, this.showGamePopup = !1;
        }
    }
    class ue {
        constructor(){
            this.gameInit = !1, this.levelsStatus = [
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
            ], this.levelsStatusContest = [
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
            ], this.levelCoopMode = "coop", this.allLevels = 10, this.table = {
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
            this.clearData(), localStorage.getItem("table") !== null ? this.table = JSON.parse(localStorage.getItem("table", this.table)) : localStorage.setItem("table", JSON.stringify(this.table));
            let s = this.table.hor[0].sort((n, l)=>l.rec - n.rec), e = this.table.hor[1].sort((n, l)=>l.rec - n.rec), i = this.table.hor[2].sort((n, l)=>l.rec - n.rec), t = this.table.vert[0].sort((n, l)=>l.rec - n.rec), a = this.table.vert[1].sort((n, l)=>l.rec - n.rec), o = this.table.vert[2].sort((n, l)=>l.rec - n.rec);
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
            for(let n = 0; n < 3; n++)for(let l = 0; l < this.allLevels; l++)l < this.table.player.levels[n] ? this.levelsStatus[n][l] = "completed" : l == this.table.player.levels[n] ? this.levelsStatus[n][l] = "available" : this.levelsStatus[n][l] = "locked";
        }
        async loadLevels(s) {
            const e = document.querySelector(".levels_blocks");
            if (!e) return;
            e.classList.add("levels_blocks--reenter"), e.innerHTML = "";
            const i = document.createDocumentFragment(), t = (l)=>{
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
                const r = this.levelsStatus[s][l], { modifierClass: d, labelText: m, ariaState: u } = t(r), b = document.createElement("div");
                b.className = `levels_block ${d}`, b.setAttribute("data-level", String(l + 1)), b.setAttribute("role", "button"), b.setAttribute("tabindex", r === "locked" ? "-1" : "0"), b.setAttribute("aria-label", `Уровень ${l + 1}, ${u}`);
                const f = Math.min(o + l * a, n);
                b.style.setProperty("--show-delay", `${f}ms`);
                const y = document.createElement("div");
                y.className = "levels_block_number", y.textContent = String(l + 1);
                const c = document.createElement("div");
                c.className = "levels_block_status";
                const L = document.createElement("span");
                L.className = `status_chip ${r === "completed" ? "status_chip--completed" : r === "available" ? "status_chip--available" : "status_chip--locked"}`, L.textContent = m, c.append(L), b.append(y, c), b.addEventListener("click", ()=>{
                    r !== "locked" && (document.querySelectorAll(".levels_block").forEach((H)=>H.classList.remove("active")), b.classList.add("active"), console.log(`Выбран уровень ${l + 1}`));
                }), b.addEventListener("keydown", (H)=>{
                    r !== "locked" && (H.key === "Enter" || H.key === " ") && (H.preventDefault(), b.click());
                }), i.append(b);
            }
            e.append(i), requestAnimationFrame(()=>{
                e.classList.remove("levels_blocks--reenter"), e.querySelectorAll(".levels_block").forEach((l)=>{
                    l.classList.add("levels_block--enter");
                });
            });
        }
        loadLevelsContest() {
            const s = document.querySelector(".levels_blocks_contest");
            if (!s) return;
            s.classList.add("levels_blocks--reenter"), s.innerHTML = "";
            const e = document.createDocumentFragment(), i = 40, t = 60, a = 600;
            for(let o = 0; o < this.allLevels; o++){
                const n = o + 1, l = this.levelsStatusContest?.[o] ?? 0, r = document.createElement("div");
                r.className = "levels_block levels_block--contest", r.setAttribute("data-level", n), r.setAttribute("role", "button"), r.setAttribute("tabindex", "0"), r.setAttribute("aria-label", `Уровень ${n}, значение ${l}`);
                const d = Math.min(t + o * i, a);
                r.style.setProperty("--show-delay", `${d}ms`);
                const m = document.createElement("div");
                m.className = "levels_block_number", m.textContent = String(n);
                const u = document.createElement("div");
                u.className = "levels_block_status", u.textContent = String(l), r.append(m, u), r.addEventListener("click", ()=>{
                    document.querySelectorAll(".levels_block").forEach((b)=>b.classList.remove("active")), r.classList.add("active"), console.log(`Выбран уровень ${n} (значение: ${l})`);
                }), r.addEventListener("keydown", (b)=>{
                    (b.key === "Enter" || b.key === " ") && (b.preventDefault(), r.click());
                }), e.append(r);
            }
            s.append(e), requestAnimationFrame(()=>{
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
    let Vs, me = new Bs, bt, As, ys, K, x, j, js, G, _s, N, v = new ce;
    const ds = new Wt;
    ds.background = new as(13230580);
    const ft = ee({
        scene: ds
    }), gt = ae({
        scene: ds
    }), T = new Ot(25, window.innerWidth / window.innerHeight, .1, 2e3);
    T.position.y = 2;
    const ye = 16 / 9, be = R.degToRad(25), fe = 2 * Math.atan(Math.tan(be / 2) * ye), Ns = Qt();
    function Xs() {
        const h = (window.visualViewport?.height || window.innerHeight) * .01;
        document.documentElement.style.setProperty("--vh", `${h}px`);
    }
    Xs();
    window.addEventListener("resize", Xs);
    window.addEventListener("orientationchange", Xs);
    let Ts = new Vt;
    document.body.appendChild(Ts.dom);
    Ts.dom.style.top = "0px";
    Ts.dom.style.left = "48%";
    const E = new Ut({
        antialias: !1
    });
    E.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    E.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(E.domElement);
    E.shadowMap.enabled = !0;
    E.shadowMap.type = Yt;
    E.outputColorSpace = Jt;
    E.toneMapping = Xt;
    E.toneMappingExposure = 1.05;
    function vt() {
        const h = document.body.offsetWidth, s = document.body.offsetHeight, e = h / s;
        let i = 2.5 * Math.atan(Math.tan(fe / 2) / e);
        const t = R.degToRad(12), a = R.degToRad(70);
        i = R.clamp(i, t, a), T.fov = R.radToDeg(i), T.aspect = e, T.updateProjectionMatrix(), E.setSize(h, s);
    }
    window.addEventListener("resize", vt);
    vt();
    document.body.addEventListener("touchstart", function() {
        document.body.requestFullscreen().then(()=>{
            screen.orientation.lock("landscape");
        });
    }, !1);
    async function ge() {
        ut(!0), N = new ue, await N.loadLocalData(), await N.loadLevels(0), await N.loadLevelsContest(), j = new ne, await j.loadAudio(), As = new he(wt, N.loadLevels, v, j, N), ut(!1);
    }
    await ge();
    async function ve(h) {
        const s = await Zt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Vs = new s.World(new s.Vector3(0, -9.81, 0)), bt = new s.EventQueue(!0), K = new hs(Vs, s), _s = new pe(T, N), ys = new re(ds, T, E, G, Ns, j), x = new oe(ds, j, K, E, T, Ns, G, ys, wt, N, v, ft, gt, _s);
        for(let e = 0; e < h; e++)x.players.push(new ie(N, ds, j, x, G, T, v));
        js = new le(x, Ns, E, T, G, j), js.addKeyListeners();
    }
    async function we() {
        await ys.loadWorld(), j.musicOn && j.backAudio.play(), j.musicOn && j.oceanAudio.play();
    }
    async function xe(h) {
        await x.createLevel(h), await x.loadEnvironments(), await x.loadPlayers(), x.objs.grassPlanes.data.length > 0 && x.objs.grassPlanes.data.forEach((s, e)=>{
            x.objs.grassPlanes.data[e].userData.collide.setCollisionGroups(Hs([
                0
            ], [
                1
            ]));
        }), x.players.length > 0 && x.players.forEach((s, e)=>{
            x.players[e].player.userData.collider.setCollisionGroups(Hs([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function wt(h, s, e = !1) {
        De(), As.toggleLoader(!0), G = new de, await ve(h), x.gameNum = s, await we(), await xe(e), G.gameDir === "hor" ? _s.loadRecsToHud(0, x.players.length - 1) : _s.loadRecsToHud(1, x.players.length - 1), G.dataLoaded = !0, v.gameStarting = !0, N.gameInit = !0, setTimeout(()=>{
            As.toggleLoader(!1);
        }, 300);
    }
    function De() {
        T.position.y = 2, T.position.x = 0, E.toneMappingExposure = 1.05, js?.removedKeyListeners(), ys = null, K = null, x = null, js = null, G = null, _s = null;
    }
    function Pe() {
        if (v.gameStarting && document.querySelector(".menu_in_game").classList.contains("hidden_screen") && G.dataLoaded && x.showScreen("menu_in_game"), N.gameInit && !x.levelsMode && document.querySelector(".hud").classList.contains("hidden_screen") && G.dataLoaded ? As.showScreen("hud") : !N.gameInit && !document.querySelector(".hud").classList.contains("hidden_screen") && As.hideScreen("hud"), v.gameStarting && (ft.update(Es), gt.update(Es)), G.dataLoaded && v.gameStarting) {
            x.players.forEach((h, s, e)=>{
                h.playerMove();
            }), ys.updateLighting(), x.levelAnimate(T), x.cameraMove(T), Ts.update();
            for(let h = 0, s = K.dynamicBodies.length; h < s; h++)K.dynamicBodies[h][0].position.copy(K.dynamicBodies[h][1].translation()), K.dynamicBodies[h][0].quaternion.copy(K.dynamicBodies[h][1].rotation());
            K.updateInstancedTransforms(), Vs.step(bt), v.gameStarting && E.render(ds, T);
        }
    }
    let Gs = 0;
    const Es = 1 / 60, ct = .1;
    E.setAnimationLoop(()=>{
        if (G != null) {
            let h = me.getDelta();
            for(h > ct && (h = ct), Gs += h; Gs >= Es;)Pe(), Gs -= Es;
        }
    });
    function ut(h) {
        h ? document.querySelector(".loader_screen").classList.remove("hidden_screen") : document.querySelector(".loader_screen").classList.add("hidden_screen");
    }
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "visible" ? (!v.pause && !v.showGamePopup && (v.gameStarting = !0, j.togglePauseAll(!v.gameStarting)), v.visible = !0) : (!v.pause && !v.showGamePopup ? (v.gameStarting = !1, j.togglePauseAll(!v.gameStarting)) : v.pause || j.togglePauseAll(!v.gameStarting), v.visible = !1);
    });
    document.querySelector(".pause_btn").addEventListener("click", ()=>{
        !v.pause && v.gameStarting && (v.pause = !v.pause, v.pause && (x.showPopupInGame(), v.gameStarting = !1, j.togglePauseAll(!v.gameStarting), x.showScreen("popup_game_btn_close")));
    });
    document.querySelector(".popup_game_btn_close").addEventListener("click", ()=>{
        (v.pause || v.gameStarting) && (v.pause = !v.pause, v.gameStarting = !0, j.togglePauseAll(!v.gameStarting), ys.rain && !j.rainAudio.isPlaying && j.rainAudio.play(), j.oceanAudio.isPlaying || j.oceanAudio.play(), x.hideScreen("popup_in_game"), x.hideScreen("popup_game_btn_close"));
    });
    document.querySelector(".sound_btn").addEventListener("click", ()=>{
        const h = j.isMuted();
        j.toggleMute(!h);
    });
})();

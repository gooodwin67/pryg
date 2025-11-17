import { _ as Ee, __tla as __tla_0 } from "./index-CMow_74Q.js";
import { B as js, a as cs, P as De, N as Be, b as Qs, c as Fs, C as ae, M as As, d as ws, V as m, e as He, W as je, f as vs, Q as zs, g as Re, h as os, i as _s, j as us, G as se, E as Z, k as ns, D as _e, S as Fe, l as Ie, m as he, I as as, n as is, o as Ge, p as Ns, O as ie, R as Ss, q as Hs, r as Ne, s as qe, A as Rs, t as R, u as We, v as Ue, w as Ve, x as Oe, y as Ye, H as $e, z as Xe, F as Ke, L as Je, J as Ze, T as Se, K as Qe, U as st, X as de, Y as ce, Z as et, _ as tt, $ as pe, a0 as ue, a1 as at, a2 as it, a3 as ot, a4 as nt, a5 as lt, a6 as rt, a7 as ht, a8 as dt } from "./three-DOpQIdiv.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function L(r, s) {
        return Math.random() * (s - r) + r;
    }
    function ct() {
        let r = window.matchMedia || window.msMatchMedia;
        return r ? r("(pointer:coarse)").matches : !1;
    }
    function me(r) {
        return r.reduce((s, t)=>s | 1 << t, 0);
    }
    function Is(r, s) {
        const t = me(r), i = me(s);
        return "0x" + ((t & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
    }
    function ye(r) {
        const s = r.collisionGroups(), t = s >>> 16 & 65535, i = s & 65535;
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
    function pt(r) {
        return typeof r == "number" ? new m(r, r, r) : r?.isVector3 ? r : new m(r?.x ?? 1, r?.y ?? 1, r?.z ?? 1);
    }
    function be(r) {
        return r?.userData?.id ?? r?.uuid ?? r?.id;
    }
    const ut = new vs(new m(-.5, -.5, -.5), new m(.5, .5, .5)), fe = new Re, ge = new zs;
    function ve(r) {
        if (r?.isObject3D) {
            if (r.updateMatrixWorld(!0), r.geometry?.isBufferGeometry) {
                const e = r.geometry;
                if (e.boundingBox || e.computeBoundingBox(), e.boundingBox) {
                    const a = e.boundingBox.clone();
                    return a.applyMatrix4(r.matrixWorld), a;
                }
            }
            return new vs().setFromObject(r);
        }
        const s = r.position ?? r.pos ?? new m, t = pt(r.size ?? 1), i = r.quaternion?.isQuaternion ? r.quaternion : r.rotation?.isEuler ? ge.setFromEuler(r.rotation) : ge.set(0, 0, 0, 1);
        return fe.compose(s, i, t), ut.clone().applyMatrix4(fe);
    }
    function O(r, s) {
        const t = ve(r), i = be(r);
        for(let e = s.length - 1; e >= 0; e--){
            const a = s[e], o = be(a);
            if (i !== void 0 && o !== void 0 && i === o) continue;
            if (ve(a).intersectsBox(t)) return a;
        }
        return null;
    }
    function Ws(r) {
        r.traverse((t)=>{
            t.userData?.persistent || (t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((i)=>i.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose());
        });
        const s = [];
        for (const t of r.children)t.userData?.persistent || s.push(t);
        s.forEach((t)=>r.remove(t));
    }
    function mt({ scene: r, maxParticles: s = 800, gravity: t = -7.8, drag: i = 2, texture: e = null, pointSize: a = .66, blending: o = Be } = {}) {
        if (!r) throw new Error("createSplashSystem: scene is required");
        function n() {
            const M = document.createElement("canvas");
            M.width = M.height = 64;
            const H = M.getContext("2d"), B = H.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
            B.addColorStop(0, "rgba(255,255,255,1)"), B.addColorStop(1, "rgba(255,255,255,0)"), H.fillStyle = B, H.fillRect(0, 0, 64, 64);
            const z = new ae(M);
            return z.anisotropy = 1, z.needsUpdate = !0, z;
        }
        const l = e || n(), h = new Float32Array(s * 3), u = new Float32Array(s * 3), c = new Float32Array(s), d = new Float32Array(s), y = new Float32Array(s), p = new Uint8Array(s), f = new js;
        f.setAttribute("position", new cs(h, 3)), f.setAttribute("aSize", new cs(y, 1));
        const v = new De({
            map: l,
            size: a,
            transparent: !0,
            depthWrite: !1,
            blending: o,
            vertexColors: !1,
            sizeAttenuation: !0
        }), x = new Qs(f, v);
        x.userData.persistent = !0, x.frustumCulled = !1, x.position.set(0, -20, 0), r.add(x);
        let b = 0;
        function _() {
            for(let g = 0; g < s; g++){
                const M = (b + g) % s;
                if (!p[M]) return b = (M + 1) % s, M;
            }
            return -1;
        }
        function I(g, M, H, B, z) {
            const U = M * 3;
            g[U] = H, g[U + 1] = B, g[U + 2] = z;
        }
        return {
            trigger (g, M = 1, H = {}) {
                const { count: B = 42, spread: z = .35, up: U = 3, horiz: ys = 2.2, ttl: C = [
                    .35,
                    .8
                ], sizeJitter: j = .5 } = H, X = Math.max(1, Math.floor(B * M));
                for(let bs = 0; bs < X; bs++){
                    const S = _();
                    if (S === -1) break;
                    const E = Math.sqrt(Math.random()) * z, T = Math.random() * Math.PI * 2, K = E * Math.cos(T), rs = E * Math.sin(T), ss = Math.sqrt(Math.random()), J = Math.cos(T) * ys * ss * (.6 + .4 * Math.random()), es = Math.sin(T) * ys * ss * (.6 + .4 * Math.random()), ts = U * (.6 + .4 * Math.random()), V = C[0] + Math.random() * (C[1] - C[0]), W = (1 - j / 2 + Math.random() * j) * 1;
                    I(h, S, g.x + K, g.y, g.z + rs), I(u, S, J * M, ts * M, es * M), c[S] = V, d[S] = 0, y[S] = W, p[S] = 1;
                }
                f.attributes.position.needsUpdate = !0, f.attributes.aSize.needsUpdate = !0;
            },
            update (g) {
                if (g <= 0) return;
                const M = t, H = Math.max(0, i);
                let B = !1;
                for(let C = 0; C < s; C++){
                    if (!p[C]) continue;
                    if (B = !0, d[C] += g, d[C] >= c[C]) {
                        p[C] = 0;
                        const T = C * 3;
                        h[T] = 1e9, h[T + 1] = 1e9, h[T + 2] = 1e9;
                        continue;
                    }
                    const j = C * 3;
                    u[j + 1] += M * g;
                    const X = u[j], bs = u[j + 1], S = u[j + 2], E = Math.max(0, 1 - H * g);
                    u[j] = X * E, u[j + 1] = bs * E, u[j + 2] = S * E, h[j] += u[j] * g, h[j + 1] += u[j + 1] * g, h[j + 2] += u[j + 2] * g;
                }
                B && (f.attributes.position.needsUpdate = !0);
                let z = 0, U = 0;
                for(let C = 0; C < s; C++)p[C] && (z++, U += 1 - d[C] / c[C]);
                const ys = z ? .25 + .75 * (U / z) : 1;
                v.size = a * ys;
            },
            get object3D () {
                return x;
            },
            dispose () {
                r.remove(x), f.dispose(), v.dispose(), e || l.dispose();
            }
        };
    }
    function yt({ scene: r, size: s = 1.5, ttl: t = .9 } = {}) {
        const i = new Fs(1, 1), e = (()=>{
            const y = document.createElement("canvas");
            y.width = y.height = 64;
            const p = y.getContext("2d");
            return p.clearRect(0, 0, 64, 64), p.strokeStyle = "rgba(255,255,255,0.9)", p.lineWidth = 3, p.beginPath(), p.arc(32, 32, 20, 0, Math.PI * 2), p.stroke(), new ae(y);
        })(), a = new As({
            map: e,
            transparent: !0,
            depthWrite: !1
        }), o = new ws(i, a);
        o.visible = !1, o.userData.persistent = !0, r.add(o);
        let n = 0, l = !1;
        const h = new m;
        function u(y) {
            h.copy(y), n = 0, l = !0, o.visible = !0;
        }
        function c(y, p) {
            if (!l) return;
            if (n += y, n >= t) {
                l = !1, o.visible = !1;
                return;
            }
            o.position.set(h.x, h.y + .01, h.z), o.rotation.set(-Math.PI / 2, 0, 0);
            const f = n / t, v = s * (1 + 1.6 * f);
            o.scale.setScalar(v), a.opacity = 1 - f;
        }
        function d() {
            r.remove(o), i.dispose(), a.dispose(), e.dispose();
        }
        return {
            trigger: u,
            update: c,
            dispose: d,
            mesh: o
        };
    }
    function bt(r, s, t, i) {
        if (!r) return;
        const e = {
            position: r.position.clone(),
            quaternion: r.quaternion.clone()
        }, a = [];
        r.traverse((c)=>{
            (c.isMesh || c.isSkinnedMesh) && a.push({
                object3d: c,
                frustumCulled: c.frustumCulled,
                visible: c.visible,
                castShadow: c.castShadow,
                receiveShadow: c.receiveShadow
            });
        });
        const o = s.shadowMap?.enabled ?? !1;
        s.shadowMap && (s.shadowMap.enabled = !1), a.forEach(({ object3d: c })=>{
            c.frustumCulled = !1, c.visible = !0, c.castShadow = !1;
        });
        const n = t.getWorldDirection(new m).multiplyScalar(2.5), l = t.position.clone().add(n);
        l.z = t.position.z - 1.5, r.position.copy(l), r.updateMatrixWorld(!0), r.userData?.mixer && r.userData.mixer.update(1 / 60), s.compile(i, t);
        const h = s.getRenderTarget(), u = new je(1, 1, {
            depthBuffer: !1,
            stencilBuffer: !1
        });
        s.setRenderTarget(u), s.render(i, t), s.setRenderTarget(h), u.dispose(), r.position.copy(e.position), r.quaternion.copy(e.quaternion), a.forEach(({ object3d: c, frustumCulled: d, visible: y, castShadow: p, receiveShadow: f })=>{
            c.frustumCulled = d, c.visible = y, c.castShadow = p, c.receiveShadow = f;
        }), s.shadowMap && (s.shadowMap.enabled = o);
    }
    function ft(r, s, t) {
        const i = r.localClippingEnabled, e = r.clippingPlanes ? r.clippingPlanes.slice() : [];
        r.localClippingEnabled = !0, r.clippingPlanes = [
            new He(new m(0, 1, 0), -1e9)
        ], r.compile(s, t), r.clippingPlanes = e, r.localClippingEnabled = i;
    }
    function gt(r, s, t, i) {
        if (!r) return;
        const e = s.getRenderTarget(), a = !!s.shadowMap, o = a ? s.shadowMap.autoUpdate : !1;
        a && (s.shadowMap.autoUpdate = !1);
        const n = r.visible;
        r.visible = !0;
        const l = new je(1, 1, {
            depthBuffer: !1,
            stencilBuffer: !1
        });
        s.setRenderTarget(l), s.render(t, i), s.setRenderTarget(e), l.dispose(), r.visible = n, a && (s.shadowMap.autoUpdate = o, s.shadowMap.needsUpdate = !0);
    }
    class vt {
        constructor(s, t, i, e, a, o, n){
            this.dataClass = s, this.scene = t, this.audioClass = i, this.levelClass = e, this.paramsClass = a, this.camera = o, this.gameClass = n, this.playerHeight = .9, this.playerWidth = .5, this.player = new ws(new os(this.playerWidth, this.playerHeight, this.playerWidth), new _s({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.score, this.player.userData.maxLives = 3, this.player.userData.lives = this.player.userData.maxLives, this.player.userData.bonusHeart = 0, this.player.userData.finish = !1, this.player.userData.splash = !1, this.playerModel, this.playerOut = new ws(new os(this.playerWidth, this.playerHeight + .1, this.playerWidth), new us({
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
            await new se().loadAsync("models/players/player1.glb").then((i)=>{
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
                s.player.userData.body.setTranslation(new m(0, -5, 0));
            }) : this.levelClass.players.every((s)=>s.player.userData.finish || s.player.userData.lives <= 0) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new m(0, -5, 0));
            }) : this.levelClass.levelsMode && this.dataClass.levelCoopMode == "contest" && this.levelClass.players.some((s)=>s.player.userData.finish) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new m(0, -5, 0));
            }), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), O(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, t] = ye(this.player.userData.collider);
                t[0] == 0 && this.player.userData.collider.setCollisionGroups(Is([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, t] = ye(this.player.userData.collider);
                t[0] != 0 && this.player.userData.collider.setCollisionGroups(Is([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && O(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(O(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(O(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(O(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]))), O(this.player, this.levelClass.objs.topPlanes.data) || O(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, O(this.player, this.levelClass.objs.livesBlocks.data) && !O(this.player, this.levelClass.objs.livesBlocks.data).userData.taked && this.player.userData.lives < this.player.userData.maxLives && (this.player.userData.lives++, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]), this.reLiveField(), O(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.7 && this.player.userData.live && this.levelClass.canHorDie && this.levelClass.startAfterReset && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new m(this.player.userData.body.translation().x, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - 13 && this.player.userData.live && this.camera.position.y > 10 && this.levelClass.startAfterReset && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new m(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && (this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.musicOn && this.dataClass.levelCoopMode == "coop" ? this.audioClass.playMusic([
                "inwater"
            ]) : this.audioClass.musicOn && this.dataClass.levelCoopMode == "contest" && !this.levelClass.players.some((s)=>s.player.userData.finish) && this.audioClass.playMusic([
                "inwater"
            ])), this.levelClass.splash.trigger(new m(this.player.position.x, this.player.position.y + 20, this.player.position.z), 2), this.levelClass.ring.trigger(new m(this.player.position.x, this.player.position.y + .1, this.player.position.z))), this.player.userData.splash = !0), this.player.position.y < -4 && this.gameClass.gameStarting) {
                if (this.player.userData.splash = !1, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                    "back"
                ]), !this.player.userData.finish && this.gameClass.pause, this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.player.userData.finish ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0, !0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0), this.player.userData.lives < 1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.levelClass.levelsMode && (this.player.userData.lives = 0), this.player.userData.finish, this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.gameClass.gameStarting && (this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.pauseMusic([
                    "rain"
                ]), this.dataClass.levelCoopMode == "coop" ? (this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : this.dataClass.levelCoopMode == "contest" && (this.levelClass.players.some((s)=>s.player.userData.finish) ? (this.levelClass.showPopupInGame(!1, !0), this.levelClass.players.forEach((s, t, i)=>{
                    s.player.userData.finish && (this.dataClass.table.levelsStatusContest[this.levelClass.levelsMode - 1] = t + 1, this.dataClass.loadLevelsContest());
                })) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0))), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, t, i)=>{
                    s.userData.fly = !1;
                }), this.playerAliving(!1), this.audioClass.musicOn && this.audioClass.playMusic([
                    "back"
                ]), this.audioClass.musicOn && this.levelClass.worldClass.rain && this.audioClass.playMusic([
                    "rain"
                ])), !this.player.userData.live || this.player.userData.finish) {
                    if (this.player.userData.body.setLinvel(new m(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos) {
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
                    }, !0), this.paramsClass.gameDir == "vert" ? this.player.userData.body.setTranslation(new m(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y, this.player.userData.deadPos.z)) : this.player.userData.body.setTranslation(new m(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + L(1.1, 3.1), this.player.userData.deadPos.z)), this.player.userData.deadPos = new m(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1);
                }
                this.reLiveField();
            } else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, t = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, e = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, l = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, l, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const u = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, u, .4);
                const c = this.player.userData.readyJump ? .71 : 0;
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
                const s = this.levelClass.boostHatModels[this.player.userData.canFlyNum], t = this.player.userData.head;
                s.userData.originalScale || (s.userData.originalScale = s.scale.clone()), s.parent !== this.scene && this.scene.attach(s), this.playerModel.updateMatrixWorld(!0), t.updateWorldMatrix(!0, !1);
                const i = new m().setFromMatrixPosition(this.player.userData.head.matrixWorld), e = new zs;
                this.player.userData.head.getWorldQuaternion(e);
                const a = new zs().setFromEuler(new Z(0, Math.PI / 2, 0)), o = e.clone().multiply(a), l = new m(.01, .14, .05).clone().applyQuaternion(o);
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
    const Gs = {
        ru: {
            ui: {
                langToggle: "EN"
            },
            title: "УТИНАЯ БРАТВА",
            modes: {
                champ: {
                    title: "Чемпионат",
                    desc: "Установите лучшее время (1,2,3 игрока)"
                },
                coop: {
                    title: "Прохождение",
                    desc: "Совместное прохождение уровней"
                },
                versus: {
                    title: "Соревнование",
                    desc: "Определите лучшего в прохождении"
                }
            },
            free: {
                playersTitle: "Сколько игроков",
                gameChoice: "Выбор игры",
                tip1: "Для каждого количества игроков своя таблица рекордов",
                tip2: "Учитывается пройденный путь каждого игрока в команде",
                tip3: "Управление одной кнопкой. 1й игрок мышкой, 2й и 3й кнопками",
                ocean: "Океан",
                space: "Космос"
            },
            levels: {
                playersTitle: "Сколько игроков",
                levelChoice: "Выбор уровня",
                tip1: "Проходите уровни разным количеством игроков",
                tip2: "Каждый раз, проходя 10й уровень, игрок получает 4 сердечко в режиме 'Чемпионат' на несколько попыток. 10 уровень всегда разный!",
                tip3: "Для прохождения уровня все игроки должны дойти до финиша",
                status: {
                    completed: "Пройден",
                    available: "Доступен",
                    locked: "Закрыт",
                    completedAria: "уровень пройден",
                    availableAria: "уровень доступен",
                    lockedAria: "уровень закрыт"
                }
            },
            contest: {
                playersTitle: "Сколько игроков",
                levelChoice: "Выбор уровня",
                random: "Случайный уровень",
                tip1: "Соревнуйтесь друг с другом. Побеждает тот, кто первый доберется до финиша",
                tip2: "Цвет уровня окрашивается в цвет победителя",
                tip3: "Цель - окрасить все уровни в свои цвета",
                player1: "Билли",
                player2: "Вилли",
                player3: "Дилли"
            },
            players: {
                billy: "Билли",
                willy: "Вилли",
                dilly: "Дилли",
                lives: "Жизни:"
            },
            hud: {
                metersLabel: "м",
                records: "Рекорды:",
                mine: "Мой:",
                world: "Мировой:",
                secPlayer: "Я",
                thirdPlayer: "Ь"
            },
            popup: {
                continue: "Продолжить +",
                next: "Следующий уровень",
                restart: "Начать заново",
                levelSelect: "Выбор уровня",
                exit: "Выйти в меню"
            },
            loader: {
                loading: "Загрузка..."
            },
            leaderboard: {
                mine: "Мой рекорд"
            },
            auth: {
                title: "Авторизуйтесь для участия в рекордах",
                cta: "Войти"
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
                    desc: "Find out who’s fastest"
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
                tip2: "The level gets dyed in the winner’s color",
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
    function we(r, s) {
        return s.split(".").reduce((t, i)=>t && t[i], r);
    }
    function Us(r = "ru", s = document) {
        const t = Gs[r] || Gs.ru;
        if (s.querySelectorAll("[data-i18n]").forEach((e)=>{
            const a = e.dataset.i18n, o = we(t, a);
            o != null && (e.textContent = o);
        }), document.documentElement.lang = r, localStorage.setItem("locale", r), document.getElementById("lang-toggle")) {
            const e = document.getElementById("flag");
            we(t, "ui.langToggle") === "ru" || r === "ru" ? (e.classList.remove("us"), e.classList.add("ru"), e.src = "images/ru.svg") : (e.classList.remove("ru"), e.classList.add("us"), e.src = "images/us.svg");
        }
    }
    function wt(r, s) {
        if (s != null) Us(s);
        else {
            const i = localStorage.getItem("locale") || "ru";
            Us(i);
        }
        const t = document.getElementById("lang-toggle");
        document.getElementById("flag"), t && t.addEventListener("click", ()=>{
            const e = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
            Us(e), r();
        });
    }
    function k(r, s = "") {
        const t = localStorage.getItem("locale") || "ru", i = Gs[t] || Gs.ru;
        return r.split(".").reduce((a, o)=>a && a[o], i) ?? s;
    }
    const xt = new Set([
        "Мой рекорд",
        "My record"
    ]), xe = (r)=>r?.isMine === !0 || r?.name === k("hud.mineRecord", "Мой рекорд") || xt.has(r?.name);
    class Mt {
        constructor(s, t, i, e, a, o, n, l, h, u, c, d, y, p, f, v){
            this.scene = s, this.audioClass = t, this.physicsClass = i, this.renderer = e, this.camera = a, this.isMobile = o, this.paramsClass = n, this.worldClass = l, this.initMatch = h, this.gameClass = c, this.splash = d, this.ring = y, this.dataClass = u, this.scoreClass = p, this.menuClass = f, this.assetsManager = v, this.playersLoaded = !1, this.cameraSpeed = .01, this.score300ChampHorSent = !1, this.score100ChampVertSent = !1, this.levelsPlayedTracked = new Set, this.levelsContestPlayedTracked = new Set, this.hardHorReachedSent = !1, this.hardVertReachedSent = !1, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = this.dataClass.allLevels, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new ns(16777215), this._nightColor = new ns(16771488), this.mksWidth = 100, this.mksHeight = 100, this.geometryPlane = new Fs(this.mksWidth, this.mksHeight), this.materialPlane = new As({
                color: 0,
                side: _e
            }), this.mks = new ws(this.geometryPlane, this.materialPlane), this.mks.position.z = -550, this.mks.position.x = 100, this.isMobile ? this.mks.position.y = 120 : this.mks.position.y = 140, this.mks.layers.set(1), this.startAfterReset = !0;
            const x = new Fe, b = .01;
            x.moveTo(5 * b, 5 * b), x.bezierCurveTo(5 * b, 5 * b, 4 * b, 2 * b, 0 * b, 2 * b), x.bezierCurveTo(-6 * b, 2 * b, -6 * b, 7 * b, -6 * b, 7 * b), x.bezierCurveTo(-6 * b, 10 * b, -3 * b, 14 * b, 5 * b, 18 * b), x.bezierCurveTo(12 * b, 14 * b, 16 * b, 10 * b, 16 * b, 7 * b), x.bezierCurveTo(16 * b, 7 * b, 16 * b, 2 * b, 10 * b, 2 * b), x.bezierCurveTo(7 * b, 2 * b, 5 * b, 5 * b, 5 * b, 5 * b);
            const _ = {
                depth: .22,
                bevelEnabled: !1,
                curveSegments: 12,
                steps: 1
            };
            this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (g, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new Z(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(1, 1, 1),
                            userData: {
                                name: "plane",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlane: new os(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new _s({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new Z(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(1, 1, 1),
                            userData: {
                                name: "topSensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneTop: new os(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new us({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new Z(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(1, 1, 1),
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
                    geometryPlaneGrass: new os(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new _s({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (g, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new Z(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(1, 1, 1),
                            userData: {
                                name: "sensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneSensor: new os(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new _s({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (g, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new Z(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new os(.3, 1, .3),
                    materialLamp: new _s({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (g, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new Z(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new he(.32, 24, 16),
                    materialPlafon: new us({
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
                    }, (g, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new Z(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new he(.3),
                    materialBulb: new us({
                        emissive: new ns(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                },
                livesBlocks: {
                    data: Array.from({
                        length: this.count
                    }, (g, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new Z(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new m(0, -10, 0)
                            }
                        })),
                    geometryLivesBlock: new Ie(x, _),
                    materialLivesBlock: new us({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new as(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(is), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new as(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(is), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new as(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(is), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new as(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(is), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new as(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(is), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new as(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(is), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new as(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(is), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new as(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(is), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (g)=>{
                g.uniforms.fresnelPower = {
                    value: 2.5
                }, g.fragmentShader = g.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const I = new Float32Array(this.count);
            for(let g = 0; g < this.count; g++)I[g] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Ge(I, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (g)=>{
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
            function q(g = 64) {
                const M = document.createElement("canvas");
                M.width = M.height = g;
                const H = M.getContext("2d"), B = H.createRadialGradient(g / 2, g / 2, 0, g / 2, g / 2, g / 2);
                B.addColorStop(0, "rgba(255, 235, 175, 1)"), B.addColorStop(1, "rgba(255, 235, 175, 0)"), H.fillStyle = B, H.fillRect(0, 0, g, g);
                const z = new ae(M);
                return z.anisotropy = 1, z.generateMipmaps = !1, z.needsUpdate = !0, z;
            }
            this._glowTex = q(), this._emissive = I, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new m(-1, 0, 0), this.rightEdge = new m(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velocityX: 0,
                smoothTime: .28,
                targetFilterLambda: 8,
                lookAheadSeconds: .2,
                lookAheadMax: 3,
                maxBackJump: 800
            }, this.dt = new Ns, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new m(s, s, s) : s?.isVector3 ? s : s ? new m(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new m(1, 1, 1);
        }
        apply(s, t, i) {
            let e = i.userData.invBaseSize;
            if (!e) {
                const l = i.geometry;
                l.computeBoundingBox();
                const h = new m;
                l.boundingBox.getSize(h), e = i.userData.invBaseSize = new m(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new ie;
            const a = this._dummy, o = t[s] || {}, n = this.toVec3(o.size);
            a.position.copy(o.position || new m), o.rotation ? a.rotation.copy(o.rotation) : a.rotation.set(0, 0, 0), a.scale.set(n.x * e.x, n.y * e.y, n.z * e.z), a.updateMatrix(), i.setMatrixAt(s, a.matrix);
        }
        async loadTexture() {
            (()=>{
                let s = this.assetsManager.plane.texture, t = this.assetsManager.plane.material;
                s.wrapS = Ss, s.wrapT = Ss, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = t;
            })(), (()=>{
                let s = this.assetsManager.planeGrass.texture, t = this.assetsManager.planeGrass.material;
                s.wrapS = Ss, s.wrapT = Ss, s.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = t;
            })(), (()=>{
                this.assetsManager.mks.texture;
                let s = this.assetsManager.mks.material;
                this.mks.material = s;
            })();
        }
        async loadBarriers() {
            let s = new os(.5, .5, 1), t = new As({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new ws(s, t), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = L(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, document.querySelector(".lev_hud span").textContent = s, await this.loadTexture(), await this.loadBarriers(), this.boostHatModel = this.assetsManager.boostHatModel, this.boostHatPropeller = this.assetsManager.boostHatPropeller, this.boostHatMesh = this.assetsManager.boostHatMesh, this.birdYes && (this.angryBirdModel = this.assetsManager.angryBirdModel, this.scene.add(this.angryBirdModel), bt(this.angryBirdModel, this.renderer, this.camera, this.scene)), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((t, i, e)=>{
                document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
            }), this.getHorizontalWorldBounds(), this.cameraMove(this.camera), s) {
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
                        let o = L(this.planeWidth, this.planeWidth - 1), n = t + o / 2 + L(this.fixedDistanceHor.min, this.fixedDistanceHor.max), l = L(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e && (o = e[a]), a == 0 ? (this.objs.planes.data[a].size.x = this.planeWidth, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.planes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[a].size.x = this.planeWidth + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : a == 1 ? (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : a == this.count - 1 ? (e ? this.objs.planes.data[a].size.x = e[e.length - 1] - .2 : this.objs.planes.data[a].size.x = 5, this.objs.planes.data[a].size.y = this.planeHeight, e ? this.objs.topPlanes.data[a].size.x = e[e.length - 1] : this.objs.topPlanes.data[a].size.x = 5 + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, e ? this.objs.grassPlanes.data[a].size.x = e[e.length - 1] : this.objs.grassPlanes.data[a].size.x = 5 + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), a == 0 ? (l = 1 - this.planeHeight / 1.5, this.objs.planes.data[a].position.x = 0, this.objs.planes.data[a].position.y = l + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[a].position.x = 0, this.objs.topPlanes.data[a].position.y = l + this.planeHeight / 1.5 + .2 - 1.5, this.objs.grassPlanes.data[a].position.x = 0, this.objs.grassPlanes.data[a].position.y = l + this.planeHeight / 1.5 - 1.5) : a == 1 ? (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = l + this.planeHeight / 1.5) : (this.objs.planes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = l + this.planeHeight / 1.5), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 4, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new Hs(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
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
                        let o = L(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        e && (o = e[a]), this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[a].userData.direction = 1 : this.objs.grassPlanes.data[a].userData.direction = -1;
                        let n = i + L(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[a].position.y = n - 1.3, this.objs.grassPlanes.data[a].position.y = n, this.objs.sensorPlanes.data[a].position.y = n - .3, this.objs.topPlanes.data[a].size.y = .3, this.objs.grassPlanes.data[a].size.y = .7, this.objs.sensorPlanes.data[a].size.y = .9, a > 0 ? (this.objs.topPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.sensorPlanes.data[a].size.x = o + .7) : (this.objs.topPlanes.data[a].size.x = 10, this.objs.grassPlanes.data[a].size.x = 10, this.objs.sensorPlanes.data[a].size.x = 10), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 4, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.grassPlanes.data[a].userData.speed = L(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const l = new Hs(16247464, 0, 4);
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
                        let a = L(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = t + a / 2 + L(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = L(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, e > this.count - 20 ? (this.objs.planes.data[e].size.x = .1, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = .2 + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = .2 + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e > 0 ? (this.objs.planes.data[e].size.x = a, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = a + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (n = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = n + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2 - 1.5, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5 - 1.5) : e == 1 ? (o = 6, this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5) : e > 1 && (this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 4, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new Hs(16247464, 0, 4);
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
                        let a = L(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[e].userData.direction = 1 : this.objs.grassPlanes.data[e].userData.direction = -1;
                        let o = i + L(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[e].position.y = o - 1.3, this.objs.grassPlanes.data[e].position.y = o, this.objs.sensorPlanes.data[e].position.y = o - .3, this.objs.topPlanes.data[e].size.y = .3, this.objs.grassPlanes.data[e].size.y = .7, this.objs.sensorPlanes.data[e].size.y = .9, e > this.count - 20 && (this.objs.topPlanes.data[e].size.x = a / 8 + .1, this.objs.grassPlanes.data[e].size.x = a / 8 + .1, this.objs.sensorPlanes.data[e].size.x = a / 8 + .4), e > 0 ? (this.objs.topPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.sensorPlanes.data[e].size.x = a + .7) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), e > this.count - 10 ? this.objs.grassPlanes.data[e].userData.speed = L(10, 14) / 100 : this.objs.grassPlanes.data[e].userData.speed = L(6, 10) / 100, this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 4, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, (e + 1) % 7 === 0) {
                            let n = this.boostHatModel.clone();
                            n.position.x = L(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[e].position.y + .5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                                n.position.x,
                                n.position.y
                            ]), this.scene.add(n);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const n = new Hs(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), i = o;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.scene.add(this.mks);
                    break;
            }
            this.players.forEach((t, i, e)=>{
                t.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y, (s || this.paramsClass.gameDir == "vert") && (t.player.userData.lives = 1, t.reLiveField());
            });
        }
        getHorizontalWorldBounds(s = 0) {
            const t = new m(-1, 0, .5), i = new m(1, 0, .5), e = new m(0, 1, .5), a = new m(0, -1, .5);
            if (t.unproject(this.camera), i.unproject(this.camera), e.unproject(this.camera), a.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = t.clone().sub(o).normalize(), l = i.clone().sub(o).normalize(), h = e.clone().sub(o).normalize(), u = a.clone().sub(o).normalize(), c = (s - o.z) / n.z, d = (s - o.z) / u.z, y = o.clone().add(n.multiplyScalar(c)), p = o.clone().add(l.multiplyScalar(c)), f = o.clone().add(h.multiplyScalar(d)), v = o.clone().add(u.multiplyScalar(d));
                this.bounds = {
                    leftX: y.x,
                    rightX: p.x,
                    topY: f.y,
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
                            const n = e.translation(), l = a.x1 + a.w1 + i.size.x * .5, h = a.x2 - a.w2 - i.size.x * .5, u = i.userData.speed ?? .05;
                            n.x >= h && (i.userData.direction = -1), n.x <= l && (i.userData.direction = 1);
                            const c = i.userData.direction * u, d = n.x + c;
                            e.setNextKinematicTranslation({
                                x: d,
                                y: n.y,
                                z: n.z
                            }), i.position.x = d, this.objs.lamps.data[t].position.x = d, this.objs.plafons.data[t].position.x = d, this.objs.bulbs.data[t].position.x = d, this.objs.topPlanes.data[t].position.x = d;
                        } else if (o) {
                            const n = e.translation(), l = 2, h = .5, u = i.userData.speed ?? .03;
                            n.y >= l && (i.userData.direction = -1), n.y <= h && (i.userData.direction = 1);
                            const c = i.userData.direction * u, d = n.y + c;
                            e.setNextKinematicTranslation({
                                x: n.x,
                                y: d,
                                z: n.z
                            }), i.position.y = d, this.objs.lamps.data[t].position.y = d + this.objs.lamps.lampHeight, this.objs.plafons.data[t].position.y = d + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[t].position.y = d + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[t].position.y = d + .2;
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
        async loadEnvironments() {
            for(let s = 0; s < this.objs.grassPlanes.data.length; s++)this.paramsClass.gameDir == "hor" && (this.physicsClass.addInstancedStatic(this.objs.planes.data, this.objs.planes.plane, s, {
                position: this.objs.planes.data[s].position,
                size: this.objs.planes.data[s].size,
                collide: "123"
            }), this.apply(s, this.objs.planes.data, this.objs.planes.plane)), this.physicsClass.addInstancedStatic(this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass, s, {
                position: this.objs.grassPlanes.data[s].position,
                size: this.objs.grassPlanes.data[s].size,
                collide: "123"
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new ns(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new ns(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new ns(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            if (!this.levelsMode) if (this.paramsClass.gameDir == "hor") {
                if (this.scoreClass.updateMetersFloat(null, this.players, "hor"), !this.hardHorReachedSent) {
                    const s = this.count - 10, t = this.objs.grassPlanes.data[s]?.position.x ?? 1 / 0;
                    this.players.some((e)=>{
                        const a = e?.player;
                        return a ? a.position.x >= t : !1;
                    }) && (this.hardHorReachedSent = !0, ym(105298813, "reachGoal", `champ_hor_hard_${this.players.length}`));
                }
                !this.score300ChampHorSent && this.scoreClass.score >= 300 && (this.score300ChampHorSent = !0, ym(105298813, "reachGoal", `score300_champ_hor_${this.players.length}`));
            } else {
                if (this.scoreClass.updateMetersFloat(null, this.players, "vert"), !this.hardVertReachedSent) {
                    const s = this.count - 10, t = this.objs.grassPlanes.data[s]?.position.y ?? 1 / 0;
                    this.players.some((e)=>{
                        const a = e?.player;
                        return a ? a.position.y >= t : !1;
                    }) && (this.hardVertReachedSent = !0, ym(105298813, "reachGoal", `champ_vert_hard_${this.players.length}`));
                }
                !this.score100ChampVertSent && this.scoreClass.score >= 100 && (this.score100ChampVertSent = !0, ym(105298813, "reachGoal", `score100_champ_vert_${this.players.length}`));
            }
            this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, t, i)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.set(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && !this.worldClass.thunder ? (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: L(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + L(this.distanceToBird, this.distanceToBird + 10), this.angryBird.userData.speed = L(8, 13) / 100, this.angryBird.userData.flying = !0) : this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && this.worldClass.thunder && (this.birdFlyingMark = this.birdFlyingMark + L(this.distanceToBird, this.distanceToBird + 10)), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const s = new Ne(new qe({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: Rs
            }));
            return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
        }
        lampsAnimate() {
            let s = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
                this.lampsAnimate.did = !1;
                const t = this.camera.position.x - this.bounds.rightX / 1.3, i = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((e, a)=>{
                    e.pointLight;
                    const o = e.position.x >= t && e.position.x <= i, n = a;
                    if (o && !e.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        e.pointLight = l, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const l = e.pointLight;
                        l.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 2), e.glow.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 0);
                        const h = o ? this.lightIntensity : 0;
                        l.intensity = R.lerp(l.intensity, h, .15);
                        const u = o ? 1 : 0;
                        this._emissive[n] = R.lerp(this._emissive[n], u, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .5 + this._emissive[n] * .8;
                        e.glow && e.glow.scale.setScalar(c);
                        const d = 1.1, y = this._emissive[n], p = 1 + d * y, f = this.objs.bulbs.baseSize, v = this.objs.bulbs.data[n];
                        v.userData._lastBulbFactor !== p && (v.size.set(f.x * p, f.y * p, f.z * p), this.apply(n, this.objs.bulbs.data, this.objs.bulbs.bulb), v.userData._lastBulbFactor = p, s = !0), !o && l.intensity <= .01 && this._emissive[n] <= .02 && (this.lights.push(l), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let t = !1;
                this.objs.plafons.data.forEach((i, e)=>{
                    const a = i.pointLight;
                    if (a) {
                        const c = this.objs.lamps.data[e].position;
                        a.position.set(c.x, c.y + 1, c.z + 2), i.glow && i.glow.position.set(c.x, c.y + 1, c.z), a.intensity = R.lerp(a.intensity, 0, .2), a.intensity <= .01 && (a.intensity = 0, this.lights.push(a), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null));
                    }
                    this.objs.plafons.plafon.setColorAt(e, this._dayColor), t = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0);
                    const o = 1.1, n = this._emissive[e], l = 1 + o * n, h = this.objs.bulbs.baseSize, u = this.objs.bulbs.data[e];
                    u.userData._lastBulbFactor !== l && (u.size.set(h.x * l, h.y * l, h.z * l), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), u.userData._lastBulbFactor = l, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), t && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
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
                        const h = o ? this.lightIntensity : 0;
                        l.intensity = R.lerp(l.intensity, h, .15);
                        const u = o ? 1 : 0;
                        this._emissive[n] = R.lerp(this._emissive[n], u, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .8 + this._emissive[n] * .8;
                        e.glow && e.glow.scale.setScalar(c);
                        const d = 1, y = this._emissive[n], p = 1 + d * y, f = this.objs.bulbs.baseSize, v = this.objs.bulbs.data[n];
                        v.userData._lastBulbFactor !== p && (v.size.set(f.x * p, f.y * p, f.z * p), this.apply(n, this.objs.bulbs.data, this.objs.bulbs.bulb), v.userData._lastBulbFactor = p, s = !0), !o && l.intensity <= .01 && this._emissive[n] <= .02 && (this.lights.push(l), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
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
            this.playersLoaded = !0;
        }
        cameraMove(s, t) {
            const i = Math.min(.033, Math.max(.001, t || .016666666666666666));
            switch(this.gameNum){
                case 1:
                    this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = this.isMobile ? 2.5 : 3, s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const e = Math.max(0, this.maxSpeed(!0));
                        if (e >= 0 && !this.worldClass.thunder || this.levelsMode) {
                            let o = 0;
                            this.players.filter((y)=>y.player.userData.live).length === 1 ? this.paramsClass.gameDir === "hor" && (o = this.players[e].player.position.x + this.bounds.rightX / 2) : o = this.players[e].player.position.x;
                            let l = 0;
                            const h = this.players[e]?.player?.userData?.body || this.players[e]?.player?.userData?.collider;
                            h && h.linvel && (l = h.linvel().x || 0);
                            const u = R.clamp(l * this.cam.lookAheadSeconds, -this.cam.lookAheadMax, this.cam.lookAheadMax), c = o + u;
                            this.cam.targetX = this.dampScalar(this.cam.targetX, c, this.cam.targetFilterLambda, i), this.cam.targetX < s.position.x - this.cam.maxBackJump && (this.cam.targetX = s.position.x - this.cam.maxBackJump);
                            const d = this.smoothDamp(s.position.x, this.cam.targetX, this.cam.velocityX, this.cam.smoothTime, 1 / 0, i);
                            s.position.x = d.newPos, this.cam.velocityX = d.newVel, s.position.y = this.isMobile ? 2.5 : 3, s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
                        } else this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 2), s.position.y = (this.isMobile, 3), s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
                        break;
                    }
                case 3:
                    this.gameClass.gameStarting && (s.position.y += this.cameraSpeed), s.position.x = 0, s.position.z = this.isMobile ? 25 : 35, this.cameraSpeed += 1e-6, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 4:
                    this.gameClass.gameStarting && this.playersLoaded && this.players[this.maxSpeed()].player.userData.body.linvel().y > -20 && (s.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), s.position.x = 0, s.position.z = this.isMobile ? 25 : 35, s.lookAt(s.position.x, s.position.y - 2, 0), this.mks.material.opacity = this.worldClass.blackSky.material.opacity, s.position.y > 20 && (this.mks.position.x -= .02);
                    break;
            }
        }
        damp(s, t, i, e) {
            return s + (t - s) * (1 - Math.exp(-i * e));
        }
        spring(s, t, i, e, a) {
            const o = 2 / e, n = o * a, l = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = s - t;
            const u = (i + o * h) * a, c = (i - o * u) * l;
            return {
                newPos: t + (h + u) * l,
                newVel: c
            };
        }
        smoothDamp(s, t, i, e, a, o) {
            e = Math.max(1e-6, e);
            const l = 2 / e, h = l * o, u = 1 / (1 + h + .48 * h * h + .235 * h * h * h);
            let c = s - t;
            const d = (a > 0 ? a : 1 / 0) * e;
            c = R.clamp(c, -d, d);
            const y = (i + l * c) * o, p = (i - l * y) * u;
            return {
                newPos: t + (c + y) * u,
                newVel: p
            };
        }
        dampScalar(s, t, i, e) {
            const a = 1 - Math.exp(-i * e);
            return s + (t - s) * a;
        }
        async showPopupInGame(s = !1, t = !1) {
            this.hideScreen("popup_game_btn_close"), this.hideScreen("menu_in_game"), this.startAfterReset = !1;
            let i = 0;
            if (this.scoreClass.score > this.scoreClass.myRec && (this.scoreClass.myRec = this.scoreClass.score, i++), this.scoreClass.score > this.scoreClass.worldRec && (this.scoreClass.worldRec = this.scoreClass.score, i++), i) {
                if (this.paramsClass.gameDir === "hor") {
                    const n = this.dataClass.table.hor[this.players.length - 1].find(xe);
                    n && (n.rec = this.scoreClass.score), await this.dataClass.submitMyScore(ysdk, `ocean${this.players.length}`, this.scoreClass.score);
                } else if (this.paramsClass.gameDir === "vert") {
                    const n = this.dataClass.table.vert[this.players.length - 1].find(xe);
                    n && (n.rec = this.scoreClass.score), await this.dataClass.submitMyScore(ysdk, `space${this.players.length}`, this.scoreClass.score);
                }
                await this.dataClass.saveTableToCloud();
                const e = this.paramsClass.gameDir === "hor" ? "hor" : "vert", a = this.players.length - 1;
                this.dataClass.updateLocalTop3(e, a, this.scoreClass.myRec), await this.dataClass.refreshMineLabels(), this.menuClass.loadRecsData(), this.paramsClass.gameDir === "hor" ? this.scoreClass.loadRecsToHud(0, this.players.length - 1) : this.scoreClass.loadRecsToHud(1, this.players.length - 1);
            }
            if (this.audioClass.oceanAudio.isPlaying && this.audioClass.oceanAudio.stop(), this.audioClass.rainAudio.isPlaying && this.audioClass.rainAudio.stop(), this.gameClass.pause) document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn15"), this.hideScreen("popup_game_btn1"), this.levelsMode ? this.showScreen("popup_game_btn4") : this.hideScreen("popup_game_btn4");
            else if (this.gameClass.showGamePopup = !0, !this.levelsMode) !s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play();
            else if (this.players.every((e)=>e.player.userData.finish) && this.dataClass.levelCoopMode == "coop" || this.players.some((e)=>e.player.userData.finish) && this.dataClass.levelCoopMode == "contest") {
                if (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.audioClass.winAudio.isPlaying && this.audioClass.winAudio.stop(), this.audioClass.musicOn && this.audioClass.winAudio.play(), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15"), this.hideScreen("popup_game_btn4"), this.dataClass.levelCoopMode == "coop") {
                    let e = !1, a = !1;
                    this.levelsPlayedTracked.has(this.levelsMode) || (this.levelsPlayedTracked.add(this.levelsMode), ym(105298813, "reachGoal", `level_coop_${this.levelsMode}_${this.players.length}`)), this.players.forEach((o, n, l)=>{
                        this.levelsMode == this.allLevels && (this.dataClass.table.player.bonusHeart[n] = 10, e = !0), this.levelsMode + 1 > this.dataClass.table.player.levels[n] && (this.dataClass.table.player.levels[n] = this.levelsMode, a = !0);
                    }), (e || a) && (await this.dataClass.saveTableToCloud(), await this.dataClass.loadTableFromCloud(), await this.dataClass.loadLevels(this.players.length - 1));
                } else this.dataClass.levelCoopMode == "contest" && (this.levelsContestPlayedTracked.has(this.levelsMode) || (this.levelsContestPlayedTracked.add(this.levelsMode), ym(105298813, "reachGoal", `level_contest_${this.levelsMode}_${this.players.length}`)), this.players.forEach(async (e, a, o)=>{
                    e.player.userData.finish && this.dataClass.table.levelsStatusContest[this.levelsMode - 1] != a + 1 && (this.dataClass.table.levelsStatusContest[this.levelsMode - 1] = a + 1, await this.dataClass.saveTableToCloud());
                }));
                this.dataClass.loadLevels(this.players.length - 1);
            } else this.hideScreen("popup_game_btn15"), this.showScreen("popup_game_btn4"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win");
            this.showScreen("popup_in_game"), this.gameClass.gameStarting = !1;
        }
        async reloadLevel(s = -1) {
            if (this.paramsClass.gameDir == "hor" && !this.levelsMode) {
                let t = !1;
                if (s >= 0) {
                    let i = this.players[s];
                    this.dataClass.table.player.bonusHeart[s] ? (i.player.userData.maxLives = 4, i.player.userData.lives = i.player.userData.maxLives, i.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[s], this.dataClass.table.player.bonusHeart[s]--, t = !0) : (i.player.userData.maxLives = 3, i.player.userData.lives = i.player.userData.maxLives);
                } else {
                    let i = [
                        0,
                        -1,
                        1
                    ];
                    for(let e = 0; e < this.players.length; e++){
                        let a = this.players[e], o = Math.floor(Math.random() * i.length);
                        this.levelsMode ? a.player.position.x = i[o] : (a.reLiveField(), a.player.position.x = a.player.position.x - e * .3 + 1), i.splice(o, 1), this.dataClass.table.player.bonusHeart[e] ? (a.player.userData.maxLives = 4, a.player.userData.lives = a.player.userData.maxLives, a.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[e], this.dataClass.table.player.bonusHeart[e]--, t = !0) : (a.player.userData.maxLives = 3, a.player.userData.lives = a.player.userData.maxLives), this.levelsMode || a.reLiveField();
                    }
                }
                t && await this.dataClass.saveTableToCloud();
            }
        }
        rebindButton(s, t) {
            const i = document.querySelector(s), e = i.cloneNode(!0);
            return i.parentNode.replaceChild(e, i), e.addEventListener("click", t), e;
        }
        menuInGame = ()=>{
            async function s() {
                return new Promise((t)=>{
                    ysdk.adv.showFullscreenAdv({
                        callbacks: {
                            onOpen: ()=>console.log("Ad opened"),
                            onClose: (i)=>{
                                console.log("Ad closed", i), t(i);
                            },
                            onError: (i)=>{
                                console.warn("Ad error", i), t(!1);
                            }
                        }
                    });
                });
            }
            this.rebindButton(".popup_game_btn1", async ()=>{
                ysdk.adv.showRewardedVideo({
                    callbacks: {
                        onOpen: ()=>{
                            console.log("Video ad open.");
                        },
                        onRewarded: ()=>{
                            console.log("Rewarded!"), this.audioClass.oceanAudio.isPlaying || this.audioClass.oceanAudio.play(), this.boostHatModels.forEach((i, e, a)=>{
                                i.userData.fly = !1;
                            });
                            let t = [];
                            this.players.forEach((i, e, a)=>{
                                t.push(i.player.position.x);
                            }), this.players.forEach((i, e, a)=>{
                                i.playerAliving(!1), i.player.userData.lives = 1, i.player.position.x = Math.max(...t), this.camera.position.x = i.player.position.x;
                            }), this.audioClass.pauseMusic([
                                "back"
                            ]), this.audioClass.playMusic([
                                "back"
                            ]), this.levelsMode || (this.canShowAds = !1), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
                        },
                        onClose: ()=>{
                            console.log("Video ad closed.");
                        },
                        onError: (t)=>{
                            console.log("Error while open video ad:", t);
                        }
                    }
                });
            }), this.rebindButton(".popup_game_btn2", async ()=>{
                this.audioClass.hardStopAll(), await s();
                let t = [
                    0,
                    -1,
                    1
                ];
                this.players.forEach((i, e, a)=>{
                    if (i.player.userData.live = !1, i.player.userData.score = 0, i.player.userData._lastMeterPos = null, i.player.userData._wasLive = !1, i.player.userData.body.setTranslation(new m(0, -5, 0)), i.player.userData.finish = !1, i.playerAliving(!0), this.levelsMode) {
                        let o = this.players[e], n = Math.floor(Math.random() * t.length);
                        o.player.userData.startPos.x = t[n], t.splice(n, 1);
                    } else i.player.position.x = i.player.position.x - e * 1 + 1;
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((i, e, a)=>{
                    i.position.x = this.boostHatCoords[e][0], i.position.y = this.boostHatCoords[e][1], i.userData.fly = !1;
                });
                for(let i = 0; i < this.objs.livesBlocks.data.length; i++)this.objs.livesBlocks.data[i].position = this.objs.livesBlocks.data[i].userData.startPos, this.apply(i, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.audioClass.stopMusic([
                    "ocean"
                ]), this.audioClass.playMusic([
                    "ocean"
                ]), this.camera.position.x = 0, this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game"), setTimeout(()=>{
                    this.startAfterReset = !0;
                }, 3e3);
            }), this.rebindButton(".popup_game_btn15", async ()=>{
                this.audioClass.hardStopAll(), await s(), this.paramsClass.dataLoaded = !1, Ws(this.scene), this.audioClass.stopMusic(0), setTimeout(()=>{
                    let t = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 1;
                    t == this.allLevels && this.hideScreen("popup_game_btn15"), this.initMatch(this.players.length, this.gameNum, t, this.birdYes);
                }, 100), setTimeout(()=>{
                    this.players.forEach((t, i, e)=>{
                        t.playerAliving(!0);
                    });
                }, 100), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
            }), this.rebindButton(".popup_game_btn3", async ()=>{
                this.audioClass.hardStopAll(), await s(), this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.paramsClass.dataLoaded = !1, Ws(this.scene), this.audioClass.stopMusic(0), this.dataClass.gameInit = !1;
            }), this.rebindButton(".popup_game_btn4", async ()=>{
                this.audioClass.hardStopAll(), await s(), this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game"), this.dataClass.levelCoopMode == "contest" ? this.showScreen("levels_game_screen_contest") : this.showScreen("levels_game_screen"), this.paramsClass.dataLoaded = !1, Ws(this.scene), this.audioClass.stopMusic(0), this.dataClass.gameInit = !1;
            });
        };
        hideScreen(s) {
            document.querySelector(`.${s}`).classList.add("hidden_screen");
        }
        showScreen(s) {
            document.querySelector(`.${s}`).classList.remove("hidden_screen");
        }
    }
    class ps {
        constructor(s, t){
            this.world = s, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new ie;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const t = s.geometry;
            t.computeBoundingBox();
            const i = new m;
            t.boundingBox.getSize(i);
            const e = new m(1 / (i.x || 1), 1 / (i.y || 1), 1 / (i.z || 1));
            return s.userData.invBase = e, e;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new m(s, s, s) : s?.isVector3 ? s.clone() : new m(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, t, i) {
            const e = ps._toVec3(i.size), a = ps._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = i.quaternion?.isQuaternion ? i.quaternion : new zs, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
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
            const a = ps._toVec3(e.size), o = ps._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = e.quaternion?.isQuaternion ? e.quaternion : new zs, l = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            s[i].userData.body = l, s[i].userData.shape = h, s[i].userData.collide = this.world.createCollider(h, l), this.instancedBodies.push({
                mesh: t,
                index: i,
                size: a,
                body: l
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, t = new Set;
            for (const i of this.instancedBodies){
                const e = ps._ensureInvBase(i.mesh), a = i.body.translation(), o = i.body.rotation();
                s.position.set(a.x, a.y, a.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(i.size.x * e.x, i.size.y * e.y, i.size.z * e.z), s.updateMatrix(), i.mesh.setMatrixAt(i.index, s.matrix), t.add(i.mesh);
            }
            for (const i of t)i.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let t, i;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new vs().setFromObject(s);
                const a = Os(s);
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
                s.rotation.set(0, 0, 0), new vs().setFromObject(s);
                const a = Os(s);
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
                s.rotation.set(0, 0, 0), new vs().setFromObject(s);
                const a = Os(s);
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
    const Vs = new m;
    function Os(r) {
        if (r.isMesh && r.geometry) {
            const t = r.geometry;
            return t.boundingBox || t.computeBoundingBox(), t.boundingBox.getSize(Vs), Vs.multiply(r.scale), Vs.clone();
        }
        return new vs().setFromObject(r).getSize(new m);
    }
    class Pt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.looseAudio, this.winAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicNowPlaying = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2, this._attached = !1, this.listener = new We, this.musicOn = !0;
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
            const s = new Ue, t = [
                {
                    key: "backAudio",
                    name: "back1",
                    path: "audio/back1.mp3",
                    loop: !0,
                    ref: 100,
                    vol: 2
                },
                {
                    key: "backAudio2",
                    name: "back2",
                    path: "audio/back2.mp3",
                    loop: !0,
                    ref: 100,
                    vol: 2
                },
                {
                    key: "backAudio3",
                    name: "back3",
                    path: "audio/back3.mp3",
                    loop: !0,
                    ref: 100,
                    vol: .5
                },
                {
                    key: "oceanAudio",
                    name: "ocean",
                    path: "audio/ocean.mp3",
                    loop: !0,
                    ref: 100,
                    vol: .4
                },
                {
                    key: "inwaterAudio",
                    name: "inwater",
                    path: "audio/inwater.mp3",
                    loop: !1,
                    ref: 200,
                    vol: 1
                },
                {
                    key: "looseAudio",
                    name: "loose",
                    path: "audio/loose.mp3",
                    loop: !1,
                    ref: 200,
                    vol: 1
                },
                {
                    key: "winAudio",
                    name: "win",
                    path: "audio/win.mp3",
                    loop: !1,
                    ref: 200,
                    vol: 2
                },
                {
                    key: "takeAudio",
                    name: "take",
                    path: "audio/take.mp3",
                    loop: !1,
                    ref: 200,
                    vol: 2
                },
                {
                    key: "readyJumpAudio",
                    name: "readyJump",
                    path: "audio/ready-jump.mp3",
                    loop: !1,
                    ref: 1e3,
                    vol: 200,
                    rate: 2
                },
                {
                    key: "jumpAudio",
                    name: "quack1",
                    path: "audio/quack1.mp3",
                    loop: !1,
                    ref: 2e3,
                    vol: 2,
                    quack: !0
                },
                {
                    key: "jumpAudio2",
                    name: "quack2",
                    path: "audio/quack2.mp3",
                    loop: !1,
                    ref: 400,
                    vol: .3,
                    quack: !0
                },
                {
                    key: "jumpAudio3",
                    name: "quack3",
                    path: "audio/quack3.mp3",
                    loop: !1,
                    ref: 400,
                    vol: .3,
                    quack: !0
                },
                {
                    key: "rainAudio",
                    name: "rain",
                    path: "audio/rain.mp3",
                    loop: !0,
                    ref: 400,
                    vol: 1.5
                },
                {
                    key: "thunderAudio",
                    name: "thunder1",
                    path: "audio/thunder.mp3",
                    loop: !1,
                    ref: 400,
                    vol: 1,
                    thunder: !0
                },
                {
                    key: "thunderAudio2",
                    name: "thunder2",
                    path: "audio/thunder2.mp3",
                    loop: !1,
                    ref: 400,
                    vol: 1,
                    thunder: !0
                },
                {
                    key: "thunderAudio3",
                    name: "thunder3",
                    path: "audio/thunder3.mp3",
                    loop: !1,
                    ref: 400,
                    vol: 1,
                    thunder: !0
                }
            ];
            (await Promise.all(t.map((e)=>s.loadAsync(e.path).catch((a)=>(console.error(`Ошибка при загрузке ${e.path}:`, a), null))))).forEach((e, a)=>{
                const o = t[a];
                if (!e) return;
                const n = new Ve(this.listener);
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
            ]), this.musics.find((i)=>i.name === "back").music.setVolume(2), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>i.name === "back1").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music.setVolume(2), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>t ? i.name === "back3" : i.name === "back2").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class Ct {
        constructor(s, t, i, e, a, o){
            this.levelClass = s, this.isMobile = t, this.renderer = i, this.camera = e, this.paramsClass = a, this.audioClass = o, this.mouse = new m, this.raycaster = new Oe;
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
                    this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
                    break;
                case "KeyM":
                case "ArrowLeft":
                    this.levelClass.players.length > 2 && this.upKeys(this.levelClass.players[2].player);
                    break;
            }
        };
        downKeys(s) {
            s.userData.live && (s.userData.onGround ? (!s.userData.readyJump && this.audioClass.musicOn && s.userData.audio[0].play(), s.userData.readyJump = !0) : s.userData.canFly && (!s.userData.readyJump && this.audioClass.musicOn && s.userData.audio[0].play(), s.userData.readyJump = !0));
        }
        upKeys(s) {
            s.userData.live && (s.userData.canFly && !s.userData.onGround && s.userData.canFlyJumps > 0 && (s.userData.canFlyJumps--, s.userData.canFlyJumps == 0 && setTimeout(()=>{
                s.userData.canFly = !1, this.levelClass.boostHatModels[s.userData.canFlyNum].userData.fly = !1;
            }, 1e3)), s.userData.readyJump && s.userData.onGround ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), !s.userData.audio[1].isPlaying && this.audioClass.musicOn && s.userData.audio[1].play(), s.userData.onGround = !1) : s.userData.onGround || (s.userData.canFly ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), !s.userData.audio[1].isPlaying && this.audioClass.musicOn && s.userData.audio[1].play(), s.userData.onGround = !1, s.userData.hatBoost--, s.userData.hatBoost == 0 && (s.userData.canFly = !1, setTimeout(()=>{
                this.levelClass.boostHatModels[s.userData.numHatBoost].userData.fly = !1;
            }, 500))) : (s.userData.readyJump = !1, s.userData.audio[0].stop())));
        }
    }
    class Dt {
        constructor(s, t, i, e, a, o){
            this.scene = s, this.camera = t, this.renderer = i, this.paramsClass = e, this.isMobile = a, this.audioClass = o, this.ambientLight = new Ye(11184810, 1), this.hemiLight = new $e(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Xe(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new ie, this.dirLight.target = this.targetObject, this.helper = new Ke(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.isRainActive = !1, this.rainEndTimestampMs = 0, this.activeLightningLines = [], this.lightningMaterialBase = new Je({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: Rs,
                depthWrite: !1
            }), this.clock = new Ns, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 10, this.rainAreaHalfDepth = 22, this.rainTopY = 7, this.rainBottomY = -2, this.rainGeometry = new js, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
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
            this.rainGeometry.setAttribute("position", new cs(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new cs(s, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new De({
                color: 8947916,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .79,
                transparent: !0,
                opacity: .96,
                size: .18,
                sizeAttenuation: !0,
                depthWrite: !0,
                blending: Rs
            }), this.rainPoints = new Qs(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Fs(900, 500), this.water = new Ze(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new Se().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = Ss;
                }),
                sunDirection: new m,
                sunColor: 16755370,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -2 : this.water.position.y = -2, this.sun = new m, this.sky = new Qe, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new ws(new Fs(1e4, 1e4), new As({
                color: 526362,
                side: _e,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const t = 1500, i = new Float32Array(t * 3), e = new Float32Array(t), a = new Float32Array(t * 3);
            for(let h = 0; h < t; h++){
                i[3 * h] = Math.random() * 600 - 300, i[3 * h + 1] = Math.random() * 150 - 100, i[3 * h + 2] = Math.random() * 300 - 500, e[h] = Math.random() * 2 + .7;
                const u = new ns().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * h] = u.r, a[3 * h + 1] = u.g, a[3 * h + 2] = u.b;
            }
            const o = new js;
            o.setAttribute("position", new cs(i, 3)), o.setAttribute("size", new cs(e, 1)), o.setAttribute("color", new cs(a, 3));
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
                fragmentShader: l,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: Rs
            }), this.stars = new Qs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
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
            await this.loadWaterSky(), await this.loadRain(), this.scene.add(this.hemiLight), this.scene.add(this.dirLight), this.scene.add(this.targetObject), this.scene.add(this.water), ft(this.renderer, this.scene, this.camera), gt(this.water, this.renderer, this.scene, this.camera);
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
                    const l = n * 3, h = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + e * .4;
                    this.rainPositions[l + 0] += h * this.deltaSeconds * 8, this.rainPositions[l + 1] -= this.rainVelocities[n] * (1 + Math.abs(e) * .3) * this.deltaSeconds, a + this.rainPositions[l + 0], o + this.rainPositions[l + 2], this.rainPositions[l + 1] < this.rainBottomY && (this.rainPositions[l + 1] = this.rainTopY, this.rainPositions[l + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[l + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[l + 0] > this.rainAreaHalfWidth && (this.rainPositions[l + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[l + 0] < -this.rainAreaHalfWidth && (this.rainPositions[l + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[l + 2] > this.rainAreaHalfDepth && (this.rainPositions[l + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[l + 2] < -this.rainAreaHalfDepth && (this.rainPositions[l + 2] += this.rainAreaHalfDepth * 2 - 35);
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
            const e = s + (Math.random() - .5) * 6, a = -4 + Math.random() * 3, o = i + (Math.random() - .5) * 6, n = e - s, l = a - t, h = o - i, u = Math.hypot(n, l, h) || 1, c = n / u, d = l / u, y = h / u, p = n / u, v = -(h / u), x = 0, b = p, _ = Math.abs(d) > .9 ? new m(1, 0, 0) : new m(0, 1, 0), I = new m(c, d, y), q = new m().crossVectors(I, _).normalize(), g = new m().crossVectors(I, q).normalize(), M = 2 + Math.random() * 2, H = 1.2, B = Math.random() * Math.PI * 2, z = 3 + Math.random() * 2.5, U = .8, ys = Math.random() * Math.PI * 2, C = 28, j = 4, X = [];
            for(let S = 0; S <= C; S++){
                const E = S / C, T = 1 - E;
                let K = s + n * E, rs = t + l * E, ss = i + h * E;
                const J = Math.sin(E * Math.PI * M + B) * H * (.3 + .7 * T), es = Math.sin(E * Math.PI * z + ys) * U * (.3 + .7 * T), ts = (Math.random() - .5) * 2 * j * T, V = (Math.random() - .5) * 1.6 * j * T, W = Math.random() < .12 ? (Math.random() - .5) * 3.5 * T : 0;
                if (K += q.x * (J + ts + W) + g.x * (es + V * .7), rs += q.y * (J + ts * .5) + g.y * (es + V * .5), ss += q.z * (J + ts + W) + g.z * (es + V * .7), X.push(K, rs, ss), S > 3 && S < C - 3 && Math.random() < .22) {
                    const hs = [], Ms = 3 + Math.floor(Math.random() * 2), ds = .25 + Math.random() * .35;
                    let Ps = K, Cs = rs, Ds = ss;
                    hs.push(Ps, Cs, Ds);
                    for(let Bs = 1; Bs <= Ms; Bs++)Ps += (Math.random() - .5) * j * ds, Cs += -(.8 + Math.random() * .8) * ds, Ds += (Math.random() - .5) * j * ds, hs.push(Ps, Cs, Ds);
                    const Es = new js;
                    Es.setAttribute("position", new de(hs, 3));
                    const fs = new ce(Es, this.lightningMaterialBase.clone());
                    fs.material.opacity = .6, fs.userData.life = .16 + Math.random() * .12, this.scene.add(fs), this.activeLightningLines.push(fs);
                }
            }
            const bs = 2;
            for(let S = -1; S <= bs; S++){
                const E = S === -1, T = E ? 0 : S % 2 === 0 ? 1 : -1, K = .55 + Math.random() * .45, rs = .35, ss = Math.random() * Math.PI * 2, J = [], es = X.length / 3;
                for(let W = 0; W < es; W++){
                    const hs = W / (es - 1), Ms = .35 + .85 * hs, ds = Math.sin(hs * Math.PI * 2 + ss) * rs * (.2 + .8 * hs), Ps = v * T * K * Ms + b * ds * .3, Cs = x * T * K * Ms + ds * .05, Ds = b * T * K * Ms - v * ds * .3, Es = W * 3 + 0, fs = W * 3 + 1, Bs = W * 3 + 2, ne = X[Es], le = X[fs], re = X[Bs];
                    E ? J.push(ne + (Math.random() - .5) * .05, le + (Math.random() - .5) * .05, re + (Math.random() - .5) * .05) : J.push(ne + Ps + (Math.random() - .5) * .2, le + Cs + (Math.random() - .5) * .2, re + Ds + (Math.random() - .5) * .2);
                }
                const ts = new js;
                ts.setAttribute("position", new de(J, 3));
                const V = new ce(ts, this.lightningMaterialBase.clone());
                V.material.opacity = E ? .95 : .32, V.userData.life = .22 + Math.random() * .18, this.scene.add(V), this.activeLightningLines.push(V);
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
            const e = new et(i, 2, 40, tt);
            return e.needsUpdate = !0, e.magFilter = pe, e.minFilter = pe, e.wrapS = ue, e.wrapT = ue, e.rotation = Math.PI / 2, e.center.set(.5, .5), e;
        }
    }
    function Ys(r) {
        if (!r) return !1;
        if (r.isMine === !0) return !0;
        const s = k("leaderboard.mine", "Мой рекорд");
        return r.name === s;
    }
    class jt {
        constructor(s, t, i, e, a){
            this.initMatch = s, this.loadLevels = t, this.gameClass = i, this.audioClass = e, this.dataClass = a, this.playersNum = 1, this.levelPlayersNum = 1, this.mainMenu(this.initMatch), this.loadRecsData();
        }
        loadRecsData() {
            let s = this.dataClass.masTables, t = document.querySelectorAll(".rec_table_small"), i = "free_game_my_rec", e = "";
            t[0].innerHTML = "", t[1].innerHTML = "", s.forEach((a, o, n)=>{
                s[o].forEach((l, h, u)=>{
                    const c = k("leaderboard.mine", "Мой рекорд");
                    s[o][h].findIndex((d)=>d && d.name === c) < 3 ? t[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == h + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${Ys(s[o][h][0]) ? i : e}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][h][0].name}</span>
                <div><span class='place_rec'>${s[o][h][0].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='green_back two_place ${Ys(s[o][h][1]) ? i : e}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][h][1].name}</span>
                <div><span class='place_rec'>${s[o][h][1].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='blue_back three_place ${Ys(s[o][h][2]) ? i : e}'>
                <span class='place_num'>${s[o][h][2]?.pos > 2 ? s[o][h][2]?.pos : 3}</span>
                <span class='rec_table_small_name'>${s[o][h][2].name}</span>
                <div><span class='place_rec'>${s[o][h][2].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
          </div>
        `) : t[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == h + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][h][0].name}</span>
                <div><span class='place_rec'>${s[o][h][0].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='green_back two_place}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][h][1].name}</span>
                <div><span class='place_rec'>${s[o][h][1].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='blue_back three_place ${i}'>
            <span class='place_num'>${s[o][h][2]?.pos > 2 ? s[o][h][2]?.pos : 3}</span>
                <span class='rec_table_small_name'>${s[o][h][3].name}</span>
                <div><span class='place_rec'>${s[o][h][3].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
          </div>
        `);
                });
            });
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.loadRecsData(), this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", async ()=>{
                this.dataClass.levelCoopMode = "coop", document.querySelector(".popup_game_btn1").classList.contains("hidden_screen") || document.querySelector(".popup_game_btn1").classList.add("hidden_screen"), document.querySelectorAll(".levels_game_screen .level_game_chels").forEach((i, e, a)=>{
                    i.classList.contains("level_game_chels_active") && (this.levelPlayersNum = e + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
                }), this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", async ()=>{
                this.dataClass.levelCoopMode = "contest", document.querySelector(".popup_game_btn1").classList.contains("hidden_screen") || document.querySelector(".popup_game_btn1").classList.add("hidden_screen"), document.querySelectorAll(".levels_game_screen_contest .level_game_chels_contest").forEach((i, e, a)=>{
                    i.classList.contains("level_game_chels_contest_active") && (this.levelPlayersNum = e + 2);
                }), this.hideScreen("main_screen"), this.showScreen("levels_game_screen_contest");
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
            }), document.querySelector(".contest_game_btn").addEventListener("click", (i)=>{
                const e = Math.floor(Math.random() * this.dataClass.allLevels);
                this.hideScreen("levels_game_screen_contest"), this.initMatch(this.levelPlayersNum, 1, e, !0);
            }), document.querySelectorAll(".level_game_chels").forEach((i, e, a)=>{
                i.addEventListener("click", ()=>{
                    this.levelPlayersNum != e + 1 && (document.querySelectorAll(".level_game_chels").forEach((o)=>{
                        o.classList.remove("level_game_chels_active");
                    }), i.classList.add("level_game_chels_active"), this.levelPlayersNum = e + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
                });
            }), document.querySelectorAll(".level_game_chels_contest").forEach((i, e, a)=>{
                i.addEventListener("click", ()=>{
                    this.levelPlayersNum != e + 2 && (document.querySelectorAll(".level_game_chels_contest").forEach((o)=>{
                        o.classList.remove("level_game_chels_contest_active");
                    }), i.classList.add("level_game_chels_contest_active"), this.levelPlayersNum = e + 2);
                });
            }), document.querySelector(".free_game_btn1_2").addEventListener("click", ()=>{
                ym(105298813, "reachGoal", "play_ocean"), this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 2);
            }), document.querySelector(".free_game_btn1_4").addEventListener("click", ()=>{
                ym(105298813, "reachGoal", "play_space"), this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 4, !1, !1);
            }), document.querySelectorAll(".free_game_chels").forEach((i, e)=>{
                i.addEventListener("click", ()=>{
                    document.querySelectorAll(".free_game_chels").forEach((u)=>{
                        u.classList.remove("free_game_chels_active");
                    }), i.classList.add("free_game_chels_active");
                    const a = e + 1, o = document.querySelectorAll(".rec_table_small"), n = [];
                    o.forEach((u)=>{
                        const c = u.querySelector(".rec_table_small_block:not(.hidden_screen)");
                        c && (n.push(c), c.getBoundingClientRect(), c.classList.add("anim-out"));
                    });
                    let l = 0;
                    const h = ()=>{
                        if (l++, l < n.length) return;
                        this.playersNum = a, this.loadRecsData();
                        const u = [];
                        document.querySelectorAll(".rec_table_small").forEach((c)=>{
                            const d = c.querySelector(".rec_table_small_block:not(.hidden_screen)");
                            d && (d.classList.add("anim-in"), u.push(d));
                        }), requestAnimationFrame(()=>{
                            u.forEach((d)=>{
                                d.getBoundingClientRect(), d.classList.add("anim-play");
                            });
                            const c = (d)=>{
                                d.classList.remove("anim-in", "anim-play"), d.removeEventListener("transitionend", c);
                            };
                            u.forEach((d)=>d.addEventListener("transitionend", ()=>c(d), {
                                    once: !0
                                }));
                        });
                    };
                    n.length === 0 ? (this.playersNum = a, this.loadRecsData()) : n.forEach((u)=>{
                        u.addEventListener("transitionend", ()=>{
                            u.classList.remove("anim-out"), u.removeEventListener("transitionend", h), h();
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
    class _t {
        constructor(){
            this.gameDir = "hor", this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class St {
        constructor(s, t){
            this.camera = s, this.dataClass = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y, this.metersFloatEl = document.getElementById("meters-float"), this.myRecField = document.getElementById("myRecord"), this.worldRecField = document.getElementById("worldRecord"), this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3), this.worldRec = 0, this.myRec = 0;
        }
        loadRecsToHud(s = 0, t = 0) {
            const i = this.dataClass.masTables?.[s]?.[t] || [];
            this.worldRec = Number(i?.[0]?.rec) || 0;
            const e = k("leaderboard.mine", "Мой рекорд");
            let a = i.find((o)=>o && o.name === e && o.pos !== 0);
            if (!a && i?.[3]?.name === e && (a = i[3]), !a) {
                const o = s === 0 ? "hor" : "vert";
                a = this.dataClass.table?.[o]?.[t]?.[0] || {
                    rec: 0
                };
            }
            this.myRec = Number(a.rec) || 0, this.myRecField && (this.myRecField.textContent = this.myRec), this.worldRecField && (this.worldRecField.textContent = this.worldRec);
        }
        updateMetersFloat(s, t, i = "hor") {
            const e = i === "vert" ? "y" : "x", a = 1e-4;
            for (const d of t){
                const y = d?.player;
                if (!y) continue;
                const p = y.userData || (y.userData = {});
                p.score == null && (p.score = 0);
                let f = y.position?.[e] ?? 0;
                if (p._lastMeterPos == null && (p._lastMeterPos = f), i !== "vert" && p._wasLive === !1 && p.live && (p._lastMeterPos = f), p.live) {
                    const v = f - p._lastMeterPos, x = v > a ? v : 0;
                    x !== 0 && (p.score += x, p._lastMeterPos = f);
                }
                p.score === 0 && (p._lastMeterPos = f), p._wasLive = !!p.live;
            }
            this.playerPanels || (this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3));
            let o = 0;
            for(let d = 0; d < 3; d++){
                const y = this.playerPanels[d], p = t[d]?.player, f = Math.max(0, Math.floor(p?.userData?.score || 0));
                o += f, y && (y.textContent = String(f).padStart(3, "0"));
            }
            const n = Math.max(0, Math.floor(o));
            if (n === $s) return;
            const l = $s, h = performance.now(), u = 50, c = (d)=>{
                const y = Math.min(1, (d - h) / u), p = 1 - Math.pow(1 - y, 4), f = Math.round(l + (n - l) * p);
                this.score = f, this.metersFloatEl && (this.metersFloatEl.textContent = String(f).padStart(3, "0")), y < 1 ? requestAnimationFrame(c) : $s = n;
            };
            requestAnimationFrame(c);
        }
    }
    let $s = 0;
    class Lt {
        constructor(){
            this.gameStarting = !1, this.pause = !1, this.visible = !0, this.showGamePopup = !1;
        }
    }
    class kt {
        constructor(){
            this.gameInit = !1, this.yandexPlayer = {
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
                        !1,
                        !1,
                        !1
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
            }, this.masTables = [], this.mainScore = 0, this.localStorageKey = "gameData", this.disableSelection = ()=>{
                document.querySelectorAll(".levels_block, .status_chip, .levels_block_number").forEach((t)=>{
                    t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.style.webkitTapHighlightColor = "transparent", t.draggable = !1;
                });
            };
        }
        async clearData() {
            localStorage.clear();
        }
        getMineLabel() {
            return k("leaderboard.mine", "Мой рекорд");
        }
        refreshMineLabels() {
            const s = this.getMineLabel(), t = new Set([
                "Мой рекорд",
                "My record"
            ]), i = (e)=>{
                if (e) {
                    e[0] && (e[0].name = s);
                    for(let a = 1; a <= 3; a++){
                        const o = e[a];
                        o && (o.isMe === !0 || t.has(o.name)) && (o.name = s, o.isMe = !0);
                    }
                }
            };
            [
                "hor",
                "vert"
            ].forEach((e)=>{
                if (this.table[e]) for(let a = 0; a < 3; a++)i(this.table[e][a]);
            }), this.processDataAfterLoad();
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
                            labelText: k("levels.status.completed", "Пройден"),
                            ariaState: k("levels.status.completedAria", "уровень пройден")
                        };
                    case "available":
                        return {
                            modifierClass: "levels_block--available",
                            labelText: k("levels.status.available", "Доступен"),
                            ariaState: k("levels.status.availableAria", "уровень доступен")
                        };
                    default:
                        return {
                            modifierClass: "levels_block--locked",
                            labelText: k("levels.status.locked", "Закрыт"),
                            ariaState: k("levels.status.lockedAria", "уровень закрыт")
                        };
                }
            }, a = 40, o = 60, n = 600;
            for(let l = 0; l < this.levelsStatus[s].length; l++){
                const h = this.levelsStatus[s][l], { modifierClass: u, labelText: c, ariaState: d } = e(h), y = l === 9, p = document.createElement("div");
                p.className = `levels_block ${u}${y ? " levels_block--super" : ""}`, p.setAttribute("data-level", String(l + 1)), p.setAttribute("role", "button"), p.setAttribute("tabindex", h === "locked" ? "-1" : "0"), p.setAttribute("aria-label", `Уровень ${l + 1}, ${d}${y ? ", бонусный уровень" : ""}`);
                const f = Math.min(o + l * a, n);
                p.style.setProperty("--show-delay", `${f}ms`);
                const v = document.createElement("div");
                if (v.className = "levels_block_number", v.textContent = String(l + 1), y) {
                    const _ = document.createElement("div");
                    _.className = "level_reward_icon", _.innerHTML = "+❤️", p.appendChild(_);
                }
                const x = document.createElement("div");
                x.className = "levels_block_status";
                const b = document.createElement("span");
                b.className = `status_chip ${h === "completed" ? "status_chip--completed" : h === "available" ? "status_chip--available" : "status_chip--locked"}`, b.setAttribute("data-i18n", `levels.status.${h}`), b.textContent = c, x.appendChild(b), p.append(v, x), p.addEventListener("click", ()=>{
                    h !== "locked" && (document.querySelectorAll(".levels_block").forEach((_)=>_.classList.remove("active")), p.classList.add("active"));
                }), p.addEventListener("keydown", (_)=>{
                    h !== "locked" && (_.key === "Enter" || _.key === " ") && (_.preventDefault(), p.click());
                }), i.appendChild(p);
            }
            t.append(i), requestAnimationFrame(()=>{
                t.classList.remove("levels_blocks--reenter"), t.querySelectorAll(".levels_block").forEach((l)=>{
                    l.classList.add("levels_block--enter"), l.classList.contains("levels_block--super") && l.addEventListener("animationend", (h)=>{
                        h.animationName === "level-tile-in" && l.classList.add("levels_block--enter-done");
                    });
                });
            }), this.disableSelection();
        }
        async loadLevelsContest() {
            const s = document.querySelector(".levels_blocks_contest");
            if (!s) return;
            s.classList.add("levels_blocks--reenter"), s.innerHTML = "";
            const t = document.createDocumentFragment(), i = 40, e = 60, a = 600;
            for(let o = 0; o < this.allLevels; o++){
                const n = o + 1, l = this.table.levelsStatusContest?.[o] ?? 0, h = document.createElement("div");
                h.className = "levels_block levels_block--contest", h.setAttribute("data-level", n), h.setAttribute("role", "button"), h.setAttribute("tabindex", "0"), h.setAttribute("aria-label", `Уровень ${n}, значение ${l}`);
                const u = Math.min(e + o * i, a);
                h.style.setProperty("--show-delay", `${u}ms`), l && h.classList.add(`level_player${l}`);
                const c = document.createElement("div");
                c.className = "levels_block_number", c.textContent = String(n);
                const d = document.createElement("div");
                d.className = "levels_block_status", l ? (d.setAttribute("data-i18n", `contest.player${l}`), d.textContent = k(`contest.player${l}`)) : d.textContent = "";
                const y = l ? k(`contest.player${l}`) : "";
                d.textContent = y, h.append(c, d), h.addEventListener("click", ()=>{
                    document.querySelectorAll(".levels_block").forEach((p)=>p.classList.remove("active")), h.classList.add("active");
                }), h.addEventListener("keydown", (p)=>{
                    (p.key === "Enter" || p.key === " ") && (p.preventDefault(), h.click());
                }), t.append(h);
            }
            s.append(t), requestAnimationFrame(()=>{
                s.classList.remove("levels_blocks--reenter"), s.querySelectorAll(".levels_block").forEach((o)=>{
                    o.classList.add("levels_block--enter");
                });
            }), this.disableSelection();
        }
        replayLevelsEnterAnimation() {
            const s = document.querySelector(".levels_blocks");
            if (!s) return;
            Array.from(s.querySelectorAll(".levels_block")).forEach((i)=>{
                i.classList.remove("levels_block--enter"), i.offsetWidth, i.classList.add("levels_block--enter");
            });
        }
        processDataAfterLoad() {
            const s = (t)=>{
                const i = this.getMineLabel(), e = [
                    t[1],
                    t[2],
                    t[3]
                ].map((h, u)=>h ? {
                        pos: h.pos,
                        name: h.name,
                        rec: h.rec
                    } : {
                        pos: u + 1,
                        name: "",
                        rec: 0
                    }), a = e.some((h)=>h && h.name === i), o = Number(t?.[0]?.rec) || 0, n = t?.[3]?.name === i && Number(t[3].rec) || 0, l = Math.max(o, n);
                if (a) return e;
                {
                    const h = {
                        pos: t?.[3]?.name === i && t[3].pos || 0,
                        name: i,
                        rec: l
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
            for(let t = 0; t < 3; t++)for(let i = 0; i < this.allLevels; i++)i < this.table.player.levels[t] ? this.levelsStatus[t][i] = "completed" : i == this.table.player.levels[t] ? this.levelsStatus[t][i] = "available" : this.levelsStatus[t][i] = "locked";
        }
        async initYandexPlayer({ force: s = !1 } = {}) {
            try {
                (!this.yandexPlayer.player || s) && (this.yandexPlayer.player = await ysdk.getPlayer()), this.yandexPlayer.isAuthorized = await this.yandexPlayer.player.isAuthorized();
            } catch  {
                this.yandexPlayer.isAuthorized = !1;
            }
            const t = document.querySelector(".autoriz");
            t && (this.yandexPlayer.isAuthorized && console.log("авторизовались"), t.classList.toggle("hidden_screen", this.yandexPlayer.isAuthorized === !0), this.yandexPlayer.isAuthorized === !0 && (t.setAttribute("aria-hidden", "true"), t.style.display = "none"));
        }
        async loadTableFromCloud() {
            await this.initYandexPlayer();
            try {
                const s = await this.yandexPlayer.player.getData([
                    "table"
                ]);
                s && s.table && typeof s.table == "object" ? this.table = s.table : (console.log("Первый вход: создаём новую table"), this.table = this.createDefaultTable(), await this.saveTableToCloud());
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
                        !1,
                        !1,
                        !1
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
        async saveTableToCloud({ flush: s = !1 } = {}) {
            await this.initYandexPlayer();
            try {
                await this.yandexPlayer.player.setData({
                    table: this.table
                }, s);
            } catch (t) {
                console.warn("Cloud save failed:", t);
            }
        }
        leaderboardsPartIds = [
            "ocean1",
            "ocean2",
            "ocean3",
            "space1",
            "space2",
            "space3"
        ];
        leaderboardPlacement = {
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
        ensureRowsForLeaderboards() {
            const s = ()=>[
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
            for(let t = 0; t < 3; t++)(!Array.isArray(this.table.hor[t]) || this.table.hor[t].length !== 4) && (this.table.hor[t] = s()), (!Array.isArray(this.table.vert[t]) || this.table.vert[t].length !== 4) && (this.table.vert[t] = s());
        }
        applyLocalMyBestToTop3() {
            this.yandexPlayer?.isAuthorized || [
                "hor",
                "vert"
            ].forEach((s)=>{
                for(let t = 0; t < 3; t++){
                    const i = this.table?.[s]?.[t];
                    if (!i) continue;
                    const e = Number(i?.[0]?.rec) || 0;
                    e > 0 && this.updateLocalTop3(s, t, e);
                }
            });
        }
        async loadLeaderboardsTop3(s) {
            await this.initYandexPlayer(), this.ensureRowsForLeaderboards();
            const t = !!this.yandexPlayer.isAuthorized, i = t && this.yandexPlayer.player?.getUniqueID ? this.yandexPlayer.player.getUniqueID() : null, e = async (a)=>{
                try {
                    const n = ((await s.leaderboards.getEntries(a, {
                        quantityTop: 3,
                        includeUser: !1,
                        quantityAround: 0
                    })).entries || []).map((d)=>({
                            uid: d.player?.uniqueID || null,
                            name: d.player?.publicName || "Anon",
                            rec: typeof d.score == "number" ? d.score : 0,
                            pos: d.rank || 0
                        }));
                    let l = null;
                    if (t && await s.isAvailableMethod("leaderboards.getPlayerEntry")) try {
                        l = await s.leaderboards.getPlayerEntry(a);
                    } catch  {
                        l = null;
                    }
                    let h = [];
                    if (t && l && i) {
                        const d = l.rank || 0, y = typeof l.score == "number" ? l.score : 0;
                        if (n.some((v)=>v.uid === i)) h = n.slice(0, 3).map((v)=>({
                                pos: v.pos,
                                name: v.uid === i ? this.getMineLabel() : v.name,
                                rec: v.rec,
                                isMe: v.uid === i
                            }));
                        else {
                            const v = n.filter((b)=>b.uid !== i).slice(0, 2).map((b)=>({
                                    pos: b.pos,
                                    name: b.name,
                                    rec: b.rec
                                })), x = {
                                pos: d,
                                name: this.getMineLabel(),
                                rec: y,
                                isMe: !0
                            };
                            h = [
                                ...v,
                                x
                            ];
                        }
                        const f = this.leaderboardPlacement[a];
                        if (f) {
                            const v = f.group === "hor" ? this.table.hor[f.row] : this.table.vert[f.row];
                            v && v[0] && (v[0].rec = y);
                        }
                    } else h = n.slice(0, 3).map((d)=>({
                            pos: d.pos,
                            name: d.name,
                            rec: d.rec
                        }));
                    const u = this.leaderboardPlacement[a];
                    if (!u) return;
                    const c = u.group === "hor" ? this.table.hor[u.row] : this.table.vert[u.row];
                    for(let d = 1; d <= 3; d++){
                        const y = h[d - 1] || {
                            pos: d,
                            name: "",
                            rec: 0
                        };
                        c[d] = {
                            pos: y.pos,
                            name: y.name,
                            rec: y.rec,
                            isMe: !!y.isMe
                        };
                    }
                    if (t && !h.some((y)=>y.isMe || y?.name === this.getMineLabel()) && l && i) {
                        const y = l.rank || 0, p = typeof l.score == "number" ? l.score : 0;
                        c[3] = {
                            pos: y,
                            name: this.getMineLabel(),
                            rec: p
                        };
                    }
                } catch (o) {
                    console.warn(`Leaderboard ${a} load failed:`, o);
                    const n = this.leaderboardPlacement[a];
                    if (!n) return;
                    const l = n.group === "hor" ? this.table.hor[n.row] : this.table.vert[n.row];
                    for(let h = 1; h <= 3; h++)l[h] = {
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
                ].reduce((n, l)=>{
                    const h = Number(l?.[0]?.rec) || 0, u = l?.[3]?.name === o && Number(l[3].rec) || 0;
                    return n + Math.max(h, u);
                }, 0), setTimeout(async ()=>{
                    try {
                        await s.leaderboards.setScore(t, e);
                    } catch (n) {
                        console.warn("setScore (part) failed:", n);
                    }
                }, 0), setTimeout(async ()=>{
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
            const e = this.getMineLabel(), a = this.table?.[s]?.[t];
            if (!a) return;
            const o = (c, d)=>({
                    pos: c?.pos ?? d,
                    name: c?.name ?? "",
                    rec: Number(c?.rec) || 0,
                    isMe: !!c?.isMe || c?.name === e
                }), n = Number(i) || 0;
            a[0] = a[0] || {
                pos: 0,
                name: e,
                rec: 0
            }, a[0].name = e, a[0].rec = Math.max(Number(a[0].rec) || 0, n);
            let l = [
                o(a[1], 1),
                o(a[2], 2),
                o(a[3], 3)
            ];
            const h = l.findIndex((c)=>c.isMe), u = Math.max(n, Number(a[0].rec) || 0);
            if (h >= 0) l[h].name = e, l[h].isMe = !0, l[h].rec = Math.max(l[h].rec, u), l = l.sort((c, d)=>d.rec - c.rec).slice(0, 3);
            else {
                const c = l[2]?.rec || 0;
                if (u > c) l.push({
                    pos: 0,
                    name: e,
                    rec: u,
                    isMe: !0
                }), l = l.sort((d, y)=>y.rec - d.rec).slice(0, 3);
                else {
                    const d = l.filter((v)=>!v.isMe).sort((v, x)=>x.rec - v.rec), y = d[0] || {
                        pos: 1,
                        name: "",
                        rec: 0
                    }, p = d[1] || {
                        pos: 2,
                        name: "",
                        rec: 0
                    }, f = {
                        pos: a[3]?.pos || 0,
                        name: e,
                        rec: u,
                        isMe: !0
                    };
                    l = [
                        y,
                        p,
                        f
                    ];
                }
            }
            for(let c = 1; c <= 3; c++){
                const d = l[c - 1] || {
                    pos: c,
                    name: "",
                    rec: 0
                };
                a[c] = {
                    pos: d.pos,
                    name: d.name,
                    rec: d.rec,
                    isMe: !!d.isMe
                };
            }
            this.processDataAfterLoad();
        }
    }
    class At {
        constructor(){
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
            const s = new Se, [t, i, e] = await Promise.all([
                s.loadAsync("textures/plane.jpg"),
                s.loadAsync("textures/grass.jpg"),
                s.loadAsync("textures/mks.png")
            ]);
            this.plane.texture = t, this.plane.material = new us({
                map: t,
                transparent: !0,
                opacity: 1
            }), this.planeGrass.texture = i, this.planeGrass.material = new us({
                map: i
            }), this.mks.texture = e, this.mks.material = new As({
                map: e,
                transparent: !0,
                opacity: 0
            });
        }
        async loadModels() {
            await new se().loadAsync("models/bird/bird.glb").then((i)=>{
                const e = i.scene, a = i.animations;
                e.scale.x = 2, e.scale.y = 2, e.scale.z = 2, e.position.y = 0, e.rotation.y = -Math.PI / 3, this.angryBirdModel = e, this.angryBirdModel.userData.mixer = new at(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(a[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Ns, this.angryBirdModel.traverse((n)=>{
                    (n.isMesh || n.isSkinnedMesh) && (n.castShadow = !1, n.receiveShadow = !1, n.geometry && !n.geometry.boundingSphere && n.geometry.computeBoundingSphere());
                });
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1;
            });
        }
        async loadBoostsModel() {
            await new se().loadAsync("models/boosts/hat.glb").then((i)=>{
                const e = i.scene;
                this.boostHatModel = e, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
                const a = this.boostHatPropeller.children[0].material;
                a.emissive.set(16777215), a.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 17, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .035, this.boostHatModel.scale.y = .035, this.boostHatModel.scale.z = .035, this.boostHatModel.userData.fly = !1, this.boostHatModel.userData.num = 0;
            });
        }
    }
    document.addEventListener("contextmenu", (r)=>(r.preventDefault(), !1), {
        capture: !0
    });
    document.addEventListener("selectstart", (r)=>(r.preventDefault(), !1), {
        capture: !0
    });
    document.addEventListener("dragstart", (r)=>(r.preventDefault(), !1), {
        capture: !0
    });
    document.addEventListener("touchstart", (r)=>{
        r.touches.length > 1 && r.preventDefault();
    }, {
        passive: !1
    });
    let oe;
    document.addEventListener("touchstart", (r)=>{
        oe = setTimeout(()=>{
            r.preventDefault();
        }, 500);
    }, {
        passive: !1
    });
    document.addEventListener("touchend", ()=>{
        clearTimeout(oe);
    });
    document.addEventListener("touchmove", ()=>{
        clearTimeout(oe);
    });
    document.addEventListener("dblclick", (r)=>(r.preventDefault(), !1), {
        capture: !0
    });
    (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (r)=>{
        r.preventDefault();
    }, {
        passive: !1
    });
    let ee, zt = new Ns, Le, ls, xs, Q, P, D, Ls, N, Ts, A, gs, Xs = !1, Ks = !1, w = new Lt;
    const ms = new it;
    ms.background = new ns(13230580);
    const ke = mt({
        scene: ms
    }), Ae = yt({
        scene: ms
    }), G = new ot(25, window.innerWidth / window.innerHeight, .1, 2e3);
    G.position.y = 2;
    const Tt = 16 / 9, Et = R.degToRad(25), Bt = 2 * Math.atan(Math.tan(Et / 2) * Tt), Js = ct();
    function qs() {
        const r = (window.visualViewport?.height || window.innerHeight) * .01;
        document.documentElement.style.setProperty("--vh", `${r}px`);
    }
    qs();
    window.addEventListener("resize", qs);
    window.addEventListener("orientationchange", qs);
    window.visualViewport?.addEventListener("resize", qs);
    new nt;
    const F = new lt({
        antialias: !1
    });
    F.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    F.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(F.domElement);
    F.shadowMap.enabled = !0;
    F.shadowMap.type = rt;
    F.outputColorSpace = ht;
    F.toneMapping = dt;
    F.toneMappingExposure = 1.05;
    function ze() {
        const r = document.body.offsetWidth, s = document.body.offsetHeight, t = r / s;
        let i = 2 * Math.atan(Math.tan(Bt / 2) / t);
        const e = R.degToRad(4), a = R.degToRad(90);
        i = R.clamp(i, e, a), G.fov = R.radToDeg(i), G.aspect = t, G.updateProjectionMatrix(), F.setSize(r, s);
    }
    window.addEventListener("resize", ze);
    ze();
    let $ = document.querySelector(".loader_line");
    async function Ht() {
        te(!0), A = new kt;
        const r = ysdk.environment.i18n.lang.toLowerCase();
        wt(()=>A.refreshMineLabels(), r), gs = new At, await gs.loadModels(), await gs.loadBoostsModel(), $.setAttribute("style", "width:30%"), await gs.loadTexture(), await Ft(), $.setAttribute("style", "width:30%"), D = new Pt, await D.loadAudio(), $.setAttribute("style", "width:60%"), await A.loadTableFromCloud(), await A.loadLeaderboardsTop3(ysdk), await A.loadLevels(0), await A.loadLevelsContest(), $.setAttribute("style", "width:100%"), ls = new jt(Te, A.loadLevels, w, D, A), ysdk.features.LoadingAPI.ready(), ysdk.features.GameplayAPI.stop(), te(!1), $.setAttribute("style", "width:0%");
    }
    (async function() {
        try {
            await Ht();
        } catch (s) {
            te(!1), Rt(s);
        }
    })();
    function Rt(r) {
        let s = "Init error";
        r && (r.message ? s += ": " + r.message : s += ": " + String(r));
        const t = document.createElement("div");
        t.className = "debug_error_overlay", t.textContent = "Ошибка загрузки, перезагрузите страницу" + s, document.body.appendChild(t);
    }
    async function Ft() {
        [
            "images/back-win.jpg",
            "images/back-loose.jpg",
            "images/back-dead.jpg",
            "images/main.jpg"
        ].forEach((r)=>{
            const s = new Image;
            s.decoding = "async", s.src = r;
        });
    }
    async function It(r) {
        const s = await Ee(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        ee = new s.World(new s.Vector3(0, -9.81, 0)), Le = new s.EventQueue(!0), Q = new ps(ee, s), Ts = new St(G, A), xs = new Dt(ms, G, F, N, Js, D), P = new Mt(ms, D, Q, F, G, Js, N, xs, Te, A, w, ke, Ae, Ts, ls, gs);
        for(let t = 0; t < r; t++)P.players.push(new vt(A, ms, D, P, N, G, w, gs));
        Ls = new Ct(P, Js, F, G, N, D), Ls.addKeyListeners();
    }
    async function Gt() {
        await xs.loadWorld(), D.musicOn && D.backAudio.play(), D.musicOn && D.oceanAudio.play();
    }
    async function Nt(r) {
        await P.createLevel(r), await P.loadPlayers(), await P.loadEnvironments(), P.objs.grassPlanes.data.length > 0 && P.objs.grassPlanes.data.forEach((s, t)=>{
            P.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(Is([
                0
            ], [
                1
            ]));
        }), P.players.length > 0 && P.players.forEach((s, t)=>{
            P.players[t].player.userData.collider.setCollisionGroups(Is([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function Te(r, s, t = !1) {
        qt(), ls.toggleLoader(!0), N = new _t, await It(r), $.setAttribute("style", "width:30%"), P.gameNum = s, await Gt(), $.setAttribute("style", "width:60%"), await Nt(t), $.setAttribute("style", "width:90%"), N.gameDir === "hor" ? Ts.loadRecsToHud(0, P.players.length - 1) : Ts.loadRecsToHud(1, P.players.length - 1), N.dataLoaded = !0, w.gameStarting = !0, A.gameInit = !0, $.setAttribute("style", "width:100%"), setTimeout(()=>{
            ls.toggleLoader(!1), $.setAttribute("style", "width:0%");
        }, 1e3);
    }
    function qt() {
        G.position.y = 2, G.position.x = 0, F.toneMappingExposure = 1.05, Ls?.removedKeyListeners(), xs = null, Q = null, P = null, Ls = null, N = null, Ts = null;
    }
    function Wt(r) {
        if (w.gameStarting && document.querySelector(".menu_in_game").classList.contains("hidden_screen") && N.dataLoaded && P.showScreen("menu_in_game"), A.gameInit && w.gameStarting && !P.levelsMode && document.querySelector(".hud").classList.contains("hidden_screen") && N.dataLoaded ? (ls.showScreen("hud"), ls.hideScreen("level_hud_wrap")) : !A.gameInit && !document.querySelector(".hud").classList.contains("hidden_screen") && (ls.hideScreen("hud"), ls.showScreen("level_hud_wrap")), A.gameInit && w.gameStarting && P.levelsMode && !document.querySelector(".player_panel_rec").classList.contains("hidden_screen") ? document.querySelectorAll(".player_panel_rec").forEach((s, t, i)=>{
            s.classList.add("hidden_screen");
        }) : A.gameInit && w.gameStarting && !P.levelsMode && document.querySelector(".player_panel_rec").classList.contains("hidden_screen") && document.querySelectorAll(".player_panel_rec").forEach((s, t, i)=>{
            s.classList.remove("hidden_screen");
        }), w.gameStarting ? (ke.update(ks), Ae.update(ks), Xs || (ysdk.features.GameplayAPI.start(), Xs = !0, Ks = !1)) : Ks || (ysdk.features.GameplayAPI.stop(), Ks = !0, Xs = !1), N.dataLoaded && w.gameStarting) {
            P.players.forEach((s, t, i)=>{
                s.playerMove();
            }), xs.updateLighting(), P.levelAnimate(G), P.cameraMove(G, r);
            for(let s = 0, t = Q.dynamicBodies.length; s < t; s++)Q.dynamicBodies[s][0].position.copy(Q.dynamicBodies[s][1].translation()), Q.dynamicBodies[s][0].quaternion.copy(Q.dynamicBodies[s][1].rotation());
            Q.updateInstancedTransforms(), ee.step(Le), w.gameStarting && F.render(ms, G);
        }
    }
    let Zs = 0;
    const ks = 1 / 60, Me = .1;
    F.setAnimationLoop(()=>{
        if (N != null) {
            let r = zt.getDelta();
            for(r > Me && (r = Me), Zs += r; Zs >= ks;)Wt(ks), Zs -= ks;
        }
    });
    function te(r) {
        const s = document.querySelector(".loader_screen");
        s && (r ? s.classList.remove("hidden_screen") : s.classList.add("hidden_screen"));
    }
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "visible" ? (!w.pause && !w.showGamePopup && (w.gameStarting = !0, D.togglePauseAll(!w.gameStarting)), w.visible = !0) : (!w.pause && !w.showGamePopup ? (w.gameStarting = !1, D.togglePauseAll(!w.gameStarting)) : w.pause || D.togglePauseAll(!w.gameStarting), w.visible = !1);
    });
    document.querySelector(".autoriz_btn").addEventListener("click", async ()=>{
        try {
            await ysdk.auth.openAuthDialog();
        } catch  {}
        await A.initYandexPlayer({
            force: !0
        }), await A.loadTableFromCloud(), await A.loadLeaderboardsTop3(ysdk);
    });
    document.querySelector(".pause_btn_wrap").addEventListener("click", ()=>{
        !w.pause && w.gameStarting && (w.pause = !w.pause, w.pause && (P.showPopupInGame(), w.gameStarting = !1, D.togglePauseAll(!w.gameStarting), P.showScreen("popup_game_btn_close")));
    });
    document.querySelector(".popup_game_btn_close").addEventListener("click", ()=>{
        (w.pause || w.gameStarting) && (w.pause = !w.pause, w.gameStarting = !0, D.togglePauseAll(!w.gameStarting), xs.rain && !D.rainAudio.isPlaying && D.rainAudio.play(), D.oceanAudio.isPlaying || D.oceanAudio.play(), P.hideScreen("popup_in_game"), P.hideScreen("popup_game_btn_close"));
    });
    document.querySelector(".sound_btn_wrap").addEventListener("click", ()=>{
        const r = D.isMuted();
        D.toggleMute(!r), document.querySelector(".volume-icon__input").classList.toggle("volume_off");
    });
    function Ut() {
        const r = [
            ".free_game_screen",
            ".levels_game_screen",
            ".levels_game_screen_contest",
            ".main_screen"
        ];
        let s = null, t = null, i = null, e = !1, a = 0, o = 0;
        const n = ()=>{
            for (const p of r){
                const f = document.querySelector(p);
                if (f && !f.classList.contains("hidden_screen")) return f;
            }
            return null;
        }, l = ()=>{
            const p = n();
            p !== s && (s && s.removeEventListener("scroll", h, {
                passive: !0
            }), i && (i.removeEventListener("mousedown", u), i.removeEventListener("touchstart", u)), s = p, t = s ? s.querySelector(".scroll-progress") : null, i = t ? t.querySelector(".scroll-progress__bar") : null, s && s.addEventListener("scroll", h, {
                passive: !0
            }), i && (i.addEventListener("mousedown", u), i.addEventListener("touchstart", u)), h());
        }, h = ()=>{
            if (!s || !t || !i) return;
            const p = s.clientHeight, f = s.scrollHeight, v = s.scrollTop;
            if (f <= p + 1) {
                t.classList.remove("visible");
                return;
            }
            t.classList.add("visible");
            const x = t.getBoundingClientRect().height, _ = Math.max(p / f * x, 24), I = f - p, q = x - _, g = I > 0 ? v / I * q : 0;
            i.style.height = `${_}px`, i.style.top = `${g}px`;
        }, u = (p)=>{
            !s || !i || (e = !0, a = p.touches ? p.touches[0].clientY : p.clientY, o = s.scrollTop, document.body.style.userSelect = "none", p.preventDefault());
        }, c = (p)=>{
            if (!e || !s || !i || !t) return;
            const v = (p.touches ? p.touches[0].clientY : p.clientY) - a, x = t.getBoundingClientRect().height, b = s.clientHeight, _ = s.scrollHeight, I = Math.max(1, x - i.offsetHeight), q = (_ - b) / I;
            s.scrollTop = o + v * q;
        }, d = ()=>{
            e = !1, document.body.style.userSelect = "";
        };
        window.addEventListener("resize", ()=>{
            l(), h();
        }), window.addEventListener("mousemove", c, {
            passive: !1
        }), window.addEventListener("touchmove", c, {
            passive: !1
        }), window.addEventListener("mouseup", d), window.addEventListener("touchend", d), new MutationObserver(()=>{
            l();
        }).observe(document.body, {
            attributes: !0,
            subtree: !0,
            attributeFilter: [
                "class"
            ]
        }), l();
    }
    Ut();
    const Y = document.querySelector(".popup_in_game_wrap");
    if (Y) {
        let r = 0;
        Y.addEventListener("touchstart", function(t) {
            !t.touches || t.touches.length === 0 || (r = t.touches[0].clientY, Y.scrollTop);
        }, {
            passive: !0
        }), Y.addEventListener("touchmove", function(t) {
            if (!t.touches || t.touches.length === 0) return;
            if (!(Y.scrollHeight > Y.clientHeight)) {
                t.preventDefault();
                return;
            }
            const a = t.touches[0].clientY - r, o = Y.scrollTop <= 0, n = Y.scrollTop + Y.clientHeight >= Y.scrollHeight - 1, l = a > 0, h = a < 0;
            (o && l || n && h) && t.preventDefault();
        }, {
            passive: !1
        });
    }
    const Pe = document.querySelector(".popup_in_game");
    Pe && Pe.addEventListener("touchmove", function(r) {
        r.target.closest(".popup_in_game_wrap") || r.preventDefault();
    }, {
        passive: !1
    });
    const Ce = document.querySelector(".loader_screen");
    Ce && Ce.addEventListener("touchmove", function(r) {
        r.preventDefault();
    }, {
        passive: !1
    });
});

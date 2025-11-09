import { _ as ke, __tla as __tla_0 } from "./index-BdWQbFQX.js";
import { B as Cs, a as ds, P as De, N as Ae, b as Js, c as Hs, C as se, M as Ls, d as vs, V as p, e as ze, W as Be, f as gs, Q as ks, g as Ee, h as is, i as js, j as ps, G as Zs, E as J, k as os, D as Pe, S as Te, l as He, m as le, I as ts, n as as, o as Fe, p as Is, O as ee, R as _s, q as Es, r as Re, s as Ne, A as Ts, t as I, u as Ie, v as Ge, w as qe, x as We, y as Ue, H as Oe, z as Ve, F as Ye, L as $e, J as Ke, T as Me, K as Xe, U as Je, X as ne, Y as re, Z as Ze, _ as Qe, $ as he, a0 as de, a1 as st, a2 as et, a3 as tt, a4 as at, a5 as it, a6 as ot, a7 as lt, a8 as nt } from "./three-DOpQIdiv.js";
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
    function rt() {
        let r = window.matchMedia || window.msMatchMedia;
        return r ? r("(pointer:coarse)").matches : !1;
    }
    function ce(r) {
        return r.reduce((s, t)=>s | 1 << t, 0);
    }
    function Fs(r, s) {
        const t = ce(r), i = ce(s);
        return "0x" + ((t & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
    }
    function pe(r) {
        const s = r.collisionGroups(), t = s >>> 16 & 65535, i = s & 65535;
        function e(a) {
            const o = [];
            for(let l = 0; l < 16; l++)a & 1 << l && o.push(l);
            return o;
        }
        return [
            e(t),
            e(i)
        ];
    }
    function ht(r) {
        return typeof r == "number" ? new p(r, r, r) : r?.isVector3 ? r : new p(r?.x ?? 1, r?.y ?? 1, r?.z ?? 1);
    }
    function ue(r) {
        return r?.userData?.id ?? r?.uuid ?? r?.id;
    }
    const dt = new gs(new p(-.5, -.5, -.5), new p(.5, .5, .5)), me = new Ee, ye = new ks;
    function be(r) {
        if (r?.isObject3D) {
            if (r.updateMatrixWorld(!0), r.geometry?.isBufferGeometry) {
                const e = r.geometry;
                if (e.boundingBox || e.computeBoundingBox(), e.boundingBox) {
                    const a = e.boundingBox.clone();
                    return a.applyMatrix4(r.matrixWorld), a;
                }
            }
            return new gs().setFromObject(r);
        }
        const s = r.position ?? r.pos ?? new p, t = ht(r.size ?? 1), i = r.quaternion?.isQuaternion ? r.quaternion : r.rotation?.isEuler ? ye.setFromEuler(r.rotation) : ye.set(0, 0, 0, 1);
        return me.compose(s, i, t), dt.clone().applyMatrix4(me);
    }
    function V(r, s) {
        const t = be(r), i = ue(r);
        for(let e = s.length - 1; e >= 0; e--){
            const a = s[e], o = ue(a);
            if (i !== void 0 && o !== void 0 && i === o) continue;
            if (be(a).intersectsBox(t)) return a;
        }
        return null;
    }
    function qs(r) {
        r.traverse((t)=>{
            t.userData?.persistent || (t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((i)=>i.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose());
        });
        const s = [];
        for (const t of r.children)t.userData?.persistent || s.push(t);
        s.forEach((t)=>r.remove(t));
    }
    function ct({ scene: r, maxParticles: s = 800, gravity: t = -7.8, drag: i = 2, texture: e = null, pointSize: a = .66, blending: o = Ae } = {}) {
        if (!r) throw new Error("createSplashSystem: scene is required");
        function l() {
            const w = document.createElement("canvas");
            w.width = w.height = 64;
            const H = w.getContext("2d"), E = H.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
            E.addColorStop(0, "rgba(255,255,255,1)"), E.addColorStop(1, "rgba(255,255,255,0)"), H.fillStyle = E, H.fillRect(0, 0, 64, 64);
            const k = new se(w);
            return k.anisotropy = 1, k.needsUpdate = !0, k;
        }
        const n = e || l(), h = new Float32Array(s * 3), c = new Float32Array(s * 3), m = new Float32Array(s), u = new Float32Array(s), g = new Float32Array(s), d = new Uint8Array(s), f = new Cs;
        f.setAttribute("position", new ds(h, 3)), f.setAttribute("aSize", new ds(g, 1));
        const x = new De({
            map: n,
            size: a,
            transparent: !0,
            depthWrite: !1,
            blending: o,
            vertexColors: !1,
            sizeAttenuation: !0
        }), D = new Js(f, x);
        D.userData.persistent = !0, D.frustumCulled = !1, D.position.set(0, -20, 0), r.add(D);
        let b = 0;
        function _() {
            for(let y = 0; y < s; y++){
                const w = (b + y) % s;
                if (!d[w]) return b = (w + 1) % s, w;
            }
            return -1;
        }
        function R(y, w, H, E, k) {
            const U = w * 3;
            y[U] = H, y[U + 1] = E, y[U + 2] = k;
        }
        return {
            trigger (y, w = 1, H = {}) {
                const { count: E = 42, spread: k = .35, up: U = 3, horiz: ms = 2.2, ttl: M = [
                    .35,
                    .8
                ], sizeJitter: j = .5 } = H, $ = Math.max(1, Math.floor(E * w));
                for(let ys = 0; ys < $; ys++){
                    const S = _();
                    if (S === -1) break;
                    const z = Math.sqrt(Math.random()) * k, A = Math.random() * Math.PI * 2, K = z * Math.cos(A), ns = z * Math.sin(A), Q = Math.sqrt(Math.random()), X = Math.cos(A) * ms * Q * (.6 + .4 * Math.random()), ss = Math.sin(A) * ms * Q * (.6 + .4 * Math.random()), es = U * (.6 + .4 * Math.random()), O = M[0] + Math.random() * (M[1] - M[0]), W = (1 - j / 2 + Math.random() * j) * 1;
                    R(h, S, y.x + K, y.y, y.z + ns), R(c, S, X * w, es * w, ss * w), m[S] = O, u[S] = 0, g[S] = W, d[S] = 1;
                }
                f.attributes.position.needsUpdate = !0, f.attributes.aSize.needsUpdate = !0;
            },
            update (y) {
                if (y <= 0) return;
                const w = t, H = Math.max(0, i);
                let E = !1;
                for(let M = 0; M < s; M++){
                    if (!d[M]) continue;
                    if (E = !0, u[M] += y, u[M] >= m[M]) {
                        d[M] = 0;
                        const A = M * 3;
                        h[A] = 1e9, h[A + 1] = 1e9, h[A + 2] = 1e9;
                        continue;
                    }
                    const j = M * 3;
                    c[j + 1] += w * y;
                    const $ = c[j], ys = c[j + 1], S = c[j + 2], z = Math.max(0, 1 - H * y);
                    c[j] = $ * z, c[j + 1] = ys * z, c[j + 2] = S * z, h[j] += c[j] * y, h[j + 1] += c[j + 1] * y, h[j + 2] += c[j + 2] * y;
                }
                E && (f.attributes.position.needsUpdate = !0);
                let k = 0, U = 0;
                for(let M = 0; M < s; M++)d[M] && (k++, U += 1 - u[M] / m[M]);
                const ms = k ? .25 + .75 * (U / k) : 1;
                x.size = a * ms;
            },
            get object3D () {
                return D;
            },
            dispose () {
                r.remove(D), f.dispose(), x.dispose(), e || n.dispose();
            }
        };
    }
    function pt({ scene: r, size: s = 1.5, ttl: t = .9 } = {}) {
        const i = new Hs(1, 1), e = (()=>{
            const g = document.createElement("canvas");
            g.width = g.height = 64;
            const d = g.getContext("2d");
            return d.clearRect(0, 0, 64, 64), d.strokeStyle = "rgba(255,255,255,0.9)", d.lineWidth = 3, d.beginPath(), d.arc(32, 32, 20, 0, Math.PI * 2), d.stroke(), new se(g);
        })(), a = new Ls({
            map: e,
            transparent: !0,
            depthWrite: !1
        }), o = new vs(i, a);
        o.visible = !1, o.userData.persistent = !0, r.add(o);
        let l = 0, n = !1;
        const h = new p;
        function c(g) {
            h.copy(g), l = 0, n = !0, o.visible = !0;
        }
        function m(g, d) {
            if (!n) return;
            if (l += g, l >= t) {
                n = !1, o.visible = !1;
                return;
            }
            o.position.set(h.x, h.y + .01, h.z), o.rotation.set(-Math.PI / 2, 0, 0);
            const f = l / t, x = s * (1 + 1.6 * f);
            o.scale.setScalar(x), a.opacity = 1 - f;
        }
        function u() {
            r.remove(o), i.dispose(), a.dispose(), e.dispose();
        }
        return {
            trigger: c,
            update: m,
            dispose: u,
            mesh: o
        };
    }
    function ut(r, s, t, i) {
        const e = [];
        r.traverse((n)=>{
            (n.isMesh || n.isSkinnedMesh) && e.push([
                n,
                n.frustumCulled,
                n.visible
            ]);
        });
        const a = r.position.clone(), o = new Set;
        r.traverse((n)=>{
            (n.isMesh || n.isSkinnedMesh) && (Array.isArray(n.material) ? n.material : [
                n.material
            ]).forEach((c)=>{
                c && [
                    "map",
                    "normalMap",
                    "emissiveMap",
                    "metalnessMap",
                    "roughnessMap",
                    "aoMap",
                    "alphaMap",
                    "specularMap",
                    "displacementMap"
                ].forEach((m)=>{
                    c[m] && o.add(c[m]);
                });
            });
        });
        const l = t.getWorldDirection(new p).multiplyScalar(3);
        r.position.copy(t.position).add(l), r.traverse((n)=>{
            (n.isMesh || n.isSkinnedMesh) && (n.frustumCulled = !1, n.visible = !0);
        }), o.forEach((n)=>s.initTexture?.(n)), s.compile(i, t), r.position.copy(a), e.forEach(([n, h, c])=>{
            n.frustumCulled = h, n.visible = c;
        }), s.shadowMap && (s.shadowMap.needsUpdate = !0);
    }
    function mt(r, s, t) {
        const i = r.localClippingEnabled, e = r.clippingPlanes ? r.clippingPlanes.slice() : [];
        r.localClippingEnabled = !0, r.clippingPlanes = [
            new ze(new p(0, 1, 0), -1e9)
        ], r.compile(s, t), r.clippingPlanes = e, r.localClippingEnabled = i;
    }
    function yt(r, s, t, i) {
        if (!r) return;
        const e = s.getRenderTarget(), a = !!s.shadowMap, o = a ? s.shadowMap.autoUpdate : !1;
        a && (s.shadowMap.autoUpdate = !1);
        const l = r.visible;
        r.visible = !0;
        const n = new Be(1, 1, {
            depthBuffer: !1,
            stencilBuffer: !1
        });
        s.setRenderTarget(n), s.render(t, i), s.setRenderTarget(e), n.dispose(), r.visible = l, a && (s.shadowMap.autoUpdate = o, s.shadowMap.needsUpdate = !0);
    }
    class bt {
        constructor(s, t, i, e, a, o, l){
            this.dataClass = s, this.scene = t, this.audioClass = i, this.levelClass = e, this.paramsClass = a, this.camera = o, this.gameClass = l, this.playerHeight = .9, this.playerWidth = .5, this.player = new vs(new is(this.playerWidth, this.playerHeight, this.playerWidth), new js({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.score, this.player.userData.maxLives = 3, this.player.userData.lives = this.player.userData.maxLives, this.player.userData.bonusHeart = 0, this.player.userData.finish = !1, this.player.userData.splash = !1, this.playerModel, this.playerOut = new vs(new is(this.playerWidth, this.playerHeight + .1, this.playerWidth), new ps({
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
            await new Zs().loadAsync("models/players/player1.glb").then((i)=>{
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
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            }) : this.levelClass.players.every((s)=>s.player.userData.finish || s.player.userData.lives <= 0) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            }) : this.levelClass.levelsMode && this.dataClass.levelCoopMode == "contest" && this.levelClass.players.some((s)=>s.player.userData.finish) && this.levelClass.players.forEach((s)=>{
                s.player.userData.body.setTranslation(new p(0, -5, 0));
            }), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), V(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, t] = pe(this.player.userData.collider);
                t[0] == 0 && this.player.userData.collider.setCollisionGroups(Fs([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, t] = pe(this.player.userData.collider);
                t[0] != 0 && this.player.userData.collider.setCollisionGroups(Fs([
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
            ]), this.reLiveField(), V(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(this.player.userData.body.translation().x, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - 10 && this.player.userData.live && this.levelClass.scoreClass.score > 8 && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && (this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.musicOn && this.dataClass.levelCoopMode == "coop" ? this.audioClass.playMusic([
                "inwater"
            ]) : this.audioClass.musicOn && this.dataClass.levelCoopMode == "contest" && !this.levelClass.players.some((s)=>s.player.userData.finish) && this.audioClass.playMusic([
                "inwater"
            ])), this.levelClass.splash.trigger(new p(this.player.position.x, this.player.position.y + 20, this.player.position.z), 2), this.levelClass.ring.trigger(new p(this.player.position.x, this.player.position.y + .1, this.player.position.z))), this.player.userData.splash = !0), this.player.position.y < -4 && this.gameClass.gameStarting) {
                if (this.player.userData.splash = !1, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                    "back"
                ]), !this.player.userData.finish && this.gameClass.pause, this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.player.userData.finish ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0, !0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0), this.player.userData.lives < 1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.levelClass.levelsMode && (this.player.userData.lives = 0), this.player.userData.finish, this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.gameClass.gameStarting && (this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.pauseMusic([
                    "rain"
                ]), this.dataClass.levelCoopMode == "coop" ? (this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : this.dataClass.levelCoopMode == "contest" && (this.levelClass.players.some((s)=>s.player.userData.finish) ? (this.levelClass.showPopupInGame(!1, !0), this.levelClass.players.forEach((s, t, i)=>{
                    s.player.userData.finish && (this.dataClass.table.levelsStatusContest[this.levelClass.levelsMode - 1] = t + 1, this.dataClass.saveLocalData(), this.dataClass.loadLocalData(), this.dataClass.loadLevelsContest());
                })) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0))), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, t, i)=>{
                    s.userData.fly = !1;
                }), this.playerAliving(!1), this.audioClass.musicOn && this.audioClass.playMusic([
                    "back"
                ]), this.audioClass.musicOn && this.levelClass.worldClass.rain && this.audioClass.playMusic([
                    "rain"
                ])), !this.player.userData.live || this.player.userData.finish) {
                    if (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos) {
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
                    }, !0), this.paramsClass.gameDir == "vert" ? this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y, this.player.userData.deadPos.z)) : this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + L(1.1, 3.1), this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1);
                }
                this.reLiveField();
            } else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, t = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, e = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, l = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, n = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, n, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, l, .1);
                const c = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, c, .4);
                const m = this.player.userData.readyJump ? .71 : 0;
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
                const s = this.levelClass.boostHatModels[this.player.userData.canFlyNum], t = this.player.userData.head;
                s.userData.originalScale || (s.userData.originalScale = s.scale.clone()), s.parent !== this.scene && this.scene.attach(s), this.playerModel.updateMatrixWorld(!0), t.updateWorldMatrix(!0, !1);
                const i = new p().setFromMatrixPosition(this.player.userData.head.matrixWorld), e = new ks;
                this.player.userData.head.getWorldQuaternion(e);
                const a = new ks().setFromEuler(new J(0, Math.PI / 2, 0)), o = e.clone().multiply(a), n = new p(.01, .14, .05).clone().applyQuaternion(o);
                s.quaternion.copy(o), s.position.copy(i).add(n), s.children[0].children[1].rotation.y += .4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
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
    const Rs = {
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
                tip3: "Проходите 10 уровень в кооперативе, чтобы получить 4ю жизнь на 10 попыток в рекордах",
                ocean: "Океан",
                space: "Космос"
            },
            levels: {
                playersTitle: "Сколько игроков",
                levelChoice: "Выбор уровня",
                tip1: "Проходите уровни разным количеством игроков",
                tip2: "Каждый раз, проходя 10й уровень, игрок получает 4 сердечко в рекордах на несколько попыток. 10 уровень всегда разный!",
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
                tip3: "Beat level 10 in co-op to get the 4th heart for 10 championship attempts. 10 level always random!",
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
            }
        }
    };
    function fe(r, s) {
        return s.split(".").reduce((t, i)=>t && t[i], r);
    }
    function ge(r = "ru", s = document) {
        const t = Rs[r] || Rs.ru;
        if (s.querySelectorAll("[data-i18n]").forEach((e)=>{
            const a = e.dataset.i18n, o = fe(t, a);
            o != null && (e.textContent = o);
        }), document.documentElement.lang = r, localStorage.setItem("locale", r), document.getElementById("lang-toggle")) {
            const e = document.getElementById("flag");
            fe(t, "ui.langToggle") === "ru" || r === "ru" ? (e.classList.remove("us"), e.classList.add("ru"), e.src = "images/ru.svg") : (e.classList.remove("ru"), e.classList.add("us"), e.src = "images/us.svg");
        }
    }
    function ft() {
        const r = localStorage.getItem("locale") || "ru";
        ge(r);
        const s = document.getElementById("lang-toggle");
        document.getElementById("flag"), s && s.addEventListener("click", ()=>{
            const i = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
            ge(i);
        });
    }
    function T(r, s = "") {
        const t = localStorage.getItem("locale") || "ru", i = Rs[t] || Rs.ru;
        return r.split(".").reduce((a, o)=>a && a[o], i) ?? s;
    }
    const gt = new Set([
        "Мой рекорд",
        "My record"
    ]), ve = (r)=>r?.isMine === !0 || r?.name === T("hud.mineRecord", "Мой рекорд") || gt.has(r?.name);
    class vt {
        constructor(s, t, i, e, a, o, l, n, h, c, m, u, g, d, f, x){
            this.scene = s, this.audioClass = t, this.physicsClass = i, this.renderer = e, this.camera = a, this.isMobile = o, this.paramsClass = l, this.worldClass = n, this.initMatch = h, this.gameClass = m, this.splash = u, this.ring = g, this.dataClass = c, this.scoreClass = d, this.menuClass = f, this.assetsManager = x, this.playersLoaded = !1, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = this.dataClass.allLevels, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new os(16777215), this._nightColor = new os(16771488), this.mksWidth = 100, this.mksHeight = 100, this.geometryPlane = new Hs(this.mksWidth, this.mksHeight), this.materialPlane = new Ls({
                color: 0,
                side: Pe
            }), this.mks = new vs(this.geometryPlane, this.materialPlane), this.mks.position.z = -550, this.isMobile ? this.mks.position.y = 100 : this.mks.position.y = 140, this.mks.layers.set(1);
            const D = new Te, b = .01;
            D.moveTo(5 * b, 5 * b), D.bezierCurveTo(5 * b, 5 * b, 4 * b, 2 * b, 0 * b, 2 * b), D.bezierCurveTo(-6 * b, 2 * b, -6 * b, 7 * b, -6 * b, 7 * b), D.bezierCurveTo(-6 * b, 10 * b, -3 * b, 14 * b, 5 * b, 18 * b), D.bezierCurveTo(12 * b, 14 * b, 16 * b, 10 * b, 16 * b, 7 * b), D.bezierCurveTo(16 * b, 7 * b, 16 * b, 2 * b, 10 * b, 2 * b), D.bezierCurveTo(7 * b, 2 * b, 5 * b, 5 * b, 5 * b, 5 * b);
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
                    }, (y, w)=>({
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
                    geometryPlane: new is(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new js({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (y, w)=>({
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
                    geometryPlaneTop: new is(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new ps({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (y, w)=>({
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
                    geometryPlaneGrass: new is(this.planeWidth, .5, this.planeDepth + .2),
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
                    }, (y, w)=>({
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
                    geometryPlaneSensor: new is(this.planeWidth, .4, 1.2),
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
                    }, (y, w)=>({
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
                    geometryLamp: new is(.3, 1, .3),
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
                    }, (y, w)=>({
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
                    geometryPlafon: new le(.32, 24, 16),
                    materialPlafon: new ps({
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
                    }, (y, w)=>({
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
                    geometryBulb: new le(.3),
                    materialBulb: new ps({
                        emissive: new os(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                },
                livesBlocks: {
                    data: Array.from({
                        length: this.count
                    }, (y, w)=>({
                            position: new p(0, -10, 0),
                            rotation: new J(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new p(0, -10, 0)
                            }
                        })),
                    geometryLivesBlock: new He(D, _),
                    materialLivesBlock: new ps({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new ts(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(as), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new ts(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(as), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new ts(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(as), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new ts(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(as), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new ts(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(as), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new ts(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(as), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new ts(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(as), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new ts(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(as), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (y)=>{
                y.uniforms.fresnelPower = {
                    value: 2.5
                }, y.fragmentShader = y.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const R = new Float32Array(this.count);
            for(let y = 0; y < this.count; y++)R[y] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Fe(R, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (y)=>{
                y.vertexShader = `
    attribute float aEmissive;
    varying float vEmissive;
  ` + y.vertexShader.replace("#include <begin_vertex>", `
      #include <begin_vertex>
      vEmissive = aEmissive;
    `), y.fragmentShader = `
    varying float vEmissive;
  ` + y.fragmentShader.replace("#include <lights_fragment_begin>", `
      #include <lights_fragment_begin>
      // усиливаем эмиссию в зависимости от инстанса
      totalEmissiveRadiance *= vEmissive;
    `);
            }, this.objs.bulbs.materialBulb.needsUpdate = !0;
            function q(y = 64) {
                const w = document.createElement("canvas");
                w.width = w.height = y;
                const H = w.getContext("2d"), E = H.createRadialGradient(y / 2, y / 2, 0, y / 2, y / 2, y / 2);
                E.addColorStop(0, "rgba(255, 235, 175, 1)"), E.addColorStop(1, "rgba(255, 235, 175, 0)"), H.fillStyle = E, H.fillRect(0, 0, y, y);
                const k = new se(w);
                return k.anisotropy = 1, k.generateMipmaps = !1, k.needsUpdate = !0, k;
            }
            this._glowTex = q(), this._emissive = R, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Is, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s : s ? new p(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new p(1, 1, 1);
        }
        apply(s, t, i) {
            let e = i.userData.invBaseSize;
            if (!e) {
                const n = i.geometry;
                n.computeBoundingBox();
                const h = new p;
                n.boundingBox.getSize(h), e = i.userData.invBaseSize = new p(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new ee;
            const a = this._dummy, o = t[s] || {}, l = this.toVec3(o.size);
            a.position.copy(o.position || new p), o.rotation ? a.rotation.copy(o.rotation) : a.rotation.set(0, 0, 0), a.scale.set(l.x * e.x, l.y * e.y, l.z * e.z), a.updateMatrix(), i.setMatrixAt(s, a.matrix);
        }
        async loadTexture() {
            (()=>{
                let s = this.assetsManager.plane.texture, t = this.assetsManager.plane.material;
                s.wrapS = _s, s.wrapT = _s, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = t;
            })(), (()=>{
                let s = this.assetsManager.planeGrass.texture, t = this.assetsManager.planeGrass.material;
                s.wrapS = _s, s.wrapT = _s, s.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = t;
            })(), (()=>{
                this.assetsManager.mks.texture;
                let s = this.assetsManager.mks.material;
                this.mks.material = s;
            })();
        }
        async loadBarriers() {
            let s = new is(.5, .7, 1), t = new Ls({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new vs(s, t), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = L(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, document.querySelector(".lev_hud span").textContent = s, await this.loadTexture(), await this.loadBarriers(), this.boostHatModel = this.assetsManager.boostHatModel, this.boostHatPropeller = this.assetsManager.boostHatPropeller, this.boostHatMesh = this.assetsManager.boostHatMesh, this.birdYes && (this.angryBirdModel = this.assetsManager.angryBirdModel, this.scene.add(this.angryBirdModel), ut(this.angryBirdModel, this.renderer, this.camera, this.scene)), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((t, i, e)=>{
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
                        let o = L(this.planeWidth, this.planeWidth - 1), l = t + o / 2 + L(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = L(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e && (o = e[a]), a == 0 ? (this.objs.planes.data[a].size.x = this.planeWidth, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.planes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[a].size.x = this.planeWidth + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : a == 1 ? (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : a == this.count - 1 ? (e ? this.objs.planes.data[a].size.x = e[e.length - 1] - .2 : this.objs.planes.data[a].size.x = 5, this.objs.planes.data[a].size.y = this.planeHeight, e ? this.objs.topPlanes.data[a].size.x = e[e.length - 1] : this.objs.topPlanes.data[a].size.x = 5 + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, e ? this.objs.grassPlanes.data[a].size.x = e[e.length - 1] : this.objs.grassPlanes.data[a].size.x = 5 + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[a].size.x = o, this.objs.planes.data[a].size.y = this.planeHeight, this.objs.topPlanes.data[a].size.x = o + .3, this.objs.topPlanes.data[a].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[a].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), a == 0 ? (n = 1 - this.planeHeight / 1.5, this.objs.planes.data[a].position.x = 0, this.objs.planes.data[a].position.y = n + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[a].position.x = 0, this.objs.topPlanes.data[a].position.y = n + this.planeHeight / 1.5 + .2 - 1.5, this.objs.grassPlanes.data[a].position.x = 0, this.objs.grassPlanes.data[a].position.y = n + this.planeHeight / 1.5 - 1.5) : a == 1 ? (this.objs.planes.data[a].position.x = l + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = l + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = l + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = n + this.planeHeight / 1.5) : (this.objs.planes.data[a].position.x = l + this.fixedDistanceHor.min / 4, this.objs.planes.data[a].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[a].position.x = l + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[a].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[a].position.x = l + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[a].position.y = n + this.planeHeight / 1.5), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 4, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new Es(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(a, this.objs.planes.data, this.objs.planes.plane), this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), t = l + o / 2;
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
                        let l = i + L(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[a].position.y = l - 1.3, this.objs.grassPlanes.data[a].position.y = l, this.objs.sensorPlanes.data[a].position.y = l - .3, this.objs.topPlanes.data[a].size.y = .3, this.objs.grassPlanes.data[a].size.y = .7, this.objs.sensorPlanes.data[a].size.y = .9, a > 0 ? (this.objs.topPlanes.data[a].size.x = o + .3, this.objs.grassPlanes.data[a].size.x = o + .3, this.objs.sensorPlanes.data[a].size.x = o + .7) : (this.objs.topPlanes.data[a].size.x = 10, this.objs.grassPlanes.data[a].size.x = 10, this.objs.sensorPlanes.data[a].size.x = 10), this.objs.lamps.data[a].position.x = this.objs.grassPlanes.data[a].position.x, this.objs.lamps.data[a].position.z = -this.planeDepth / 4, this.objs.lamps.data[a].position.y = this.objs.grassPlanes.data[a].position.y + this.objs.grassPlanes.data[a].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.plafons.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.plafons.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.bulbs.data[a].position.x = this.objs.lamps.data[a].position.x, this.objs.bulbs.data[a].position.z = this.objs.lamps.data[a].position.z, this.objs.bulbs.data[a].position.y = this.objs.lamps.data[a].position.y + 1, this.objs.grassPlanes.data[a].userData.speed = L(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const n = new Es(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), i = l;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.isMobile ? this.getHorizontalWorldBounds() : this.getHorizontalWorldBounds(-7);
            } else switch(this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let t = -2.5;
                    for(let e = 0; e < this.count; e++){
                        let a = L(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = t + a / 2 + L(this.fixedDistanceHor.min, this.fixedDistanceHor.max), l = L(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, e > this.count - 20 ? (this.objs.planes.data[e].size.x = .1, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = .2 + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = .2 + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e > 0 ? (this.objs.planes.data[e].size.x = a, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = a + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (l = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = l + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = l + this.planeHeight / 1.5 + .2 - 1.5, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = l + this.planeHeight / 1.5 - 1.5) : e == 1 ? (o = 6, this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = l + this.planeHeight / 1.5) : e > 1 && (this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = l + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 4, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const n = new Es(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
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
                            let l = this.boostHatModel.clone();
                            l.position.x = L(this.bounds.leftX + 1, this.bounds.rightX - 1), l.position.y = this.objs.topPlanes.data[e].position.y + .5, this.boostHatModels.push(l), this.boostHatMeshes.push(l.children[0].children[0].children[0]), this.boostHatCoords.push([
                                l.position.x,
                                l.position.y
                            ]), this.scene.add(l);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const l = new Es(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
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
            const t = new p(-1, 0, .5), i = new p(1, 0, .5), e = new p(0, 1, .5), a = new p(0, -1, .5);
            if (t.unproject(this.camera), i.unproject(this.camera), e.unproject(this.camera), a.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, l = t.clone().sub(o).normalize(), n = i.clone().sub(o).normalize(), h = e.clone().sub(o).normalize(), c = a.clone().sub(o).normalize(), m = (s - o.z) / l.z, u = (s - o.z) / c.z, g = o.clone().add(l.multiplyScalar(m)), d = o.clone().add(n.multiplyScalar(m)), f = o.clone().add(h.multiplyScalar(u)), x = o.clone().add(c.multiplyScalar(u));
                this.bounds = {
                    leftX: g.x,
                    rightX: d.x,
                    topY: f.y,
                    bottomY: x.y
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
                            const l = e.translation(), n = a.x1 + a.w1 + i.size.x * .5, h = a.x2 - a.w2 - i.size.x * .5, c = i.userData.speed ?? .05;
                            l.x >= h && (i.userData.direction = -1), l.x <= n && (i.userData.direction = 1);
                            const m = i.userData.direction * c, u = l.x + m;
                            e.setNextKinematicTranslation({
                                x: u,
                                y: l.y,
                                z: l.z
                            }), i.position.x = u, this.objs.lamps.data[t].position.x = u, this.objs.plafons.data[t].position.x = u, this.objs.bulbs.data[t].position.x = u, this.objs.topPlanes.data[t].position.x = u;
                        } else if (o) {
                            const l = e.translation(), n = 2, h = .5, c = i.userData.speed ?? .03;
                            l.y >= n && (i.userData.direction = -1), l.y <= h && (i.userData.direction = 1);
                            const m = i.userData.direction * c, u = l.y + m;
                            e.setNextKinematicTranslation({
                                x: l.x,
                                y: u,
                                z: l.z
                            }), i.position.y = u, this.objs.lamps.data[t].position.y = u + this.objs.lamps.lampHeight, this.objs.plafons.data[t].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[t].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[t].position.y = u + .2;
                        }
                    }
                    for(let l = 0; l < this.objs.livesBlocks.data.length; l++)this.objs.livesBlocks.data[l].userData.taked ? this.objs.livesBlocks.data[l].position.y < 10 ? (this.objs.livesBlocks.data[l].position.y += .001, this.objs.livesBlocks.data[l].rotation.y += .004) : this.objs.livesBlocks.data[l].userData.taked = !1 : this.objs.livesBlocks.data[l].rotation.y += 4e-4, this.apply(l, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
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
                    const l = t.userData.direction * a, n = o.x + l;
                    s > 0 && e.setNextKinematicTranslation({
                        x: n,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[s].position.x = n, this.objs.lamps.data[s].position.x = n, this.objs.plafons.data[s].position.x = n, this.objs.bulbs.data[s].position.x = n, this.objs.topPlanes.data[s].position.x = n, this.objs.topPlanes.data[s].position.y = o.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i.position.set(n, o.y + .6, o.z);
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new os(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new os(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new os(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.levelsMode || (this.paramsClass.gameDir == "hor" ? this.scoreClass.updateMetersFloat(null, this.players, "hor") : this.scoreClass.updateMetersFloat(null, this.players, "vert")), this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, t, i)=>{
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
            const s = new Re(new Ne({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: Ts
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
                    const o = e.position.x >= t && e.position.x <= i, l = a;
                    if (o && !e.pointLight && this.lights.length > 0) {
                        const n = this.lights.shift();
                        e.pointLight = n, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const n = e.pointLight;
                        n.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), e.glow.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 0);
                        const h = o ? this.lightIntensity : 0;
                        n.intensity = I.lerp(n.intensity, h, .15);
                        const c = o ? 1 : 0;
                        this._emissive[l] = I.lerp(this._emissive[l], c, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const m = .5 + this._emissive[l] * .8;
                        e.glow && e.glow.scale.setScalar(m);
                        const u = 1.1, g = this._emissive[l], d = 1 + u * g, f = this.objs.bulbs.baseSize, x = this.objs.bulbs.data[l];
                        x.userData._lastBulbFactor !== d && (x.size.set(f.x * d, f.y * d, f.z * d), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), x.userData._lastBulbFactor = d, s = !0), !o && n.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(n), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let t = !1;
                this.objs.plafons.data.forEach((i, e)=>{
                    const a = i.pointLight;
                    if (a) {
                        const m = this.objs.lamps.data[e].position;
                        a.position.set(m.x, m.y + 1, m.z + 2), i.glow && i.glow.position.set(m.x, m.y + 1, m.z), a.intensity = I.lerp(a.intensity, 0, .2), a.intensity <= .01 && (a.intensity = 0, this.lights.push(a), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null));
                    }
                    this.objs.plafons.plafon.setColorAt(e, this._dayColor), t = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0);
                    const o = 1.1, l = this._emissive[e], n = 1 + o * l, h = this.objs.bulbs.baseSize, c = this.objs.bulbs.data[e];
                    c.userData._lastBulbFactor !== n && (c.size.set(h.x * n, h.y * n, h.z * n), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), c.userData._lastBulbFactor = n, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), t && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const t = this.camera.position.y - this.bounds.topY / 1, i = this.camera.position.y + this.bounds.topY * .8;
                this.objs.plafons.data.forEach((e, a)=>{
                    e.pointLight;
                    const o = e.position.y >= t && e.position.y <= i, l = a;
                    if (o && !e.pointLight && this.lights.length > 0) {
                        const n = this.lights.shift();
                        e.pointLight = n, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const n = e.pointLight;
                        n.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), e.glow.position.copy(e.position);
                        const h = o ? this.lightIntensity : 0;
                        n.intensity = I.lerp(n.intensity, h, .15);
                        const c = o ? 1 : 0;
                        this._emissive[l] = I.lerp(this._emissive[l], c, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const m = .8 + this._emissive[l] * .8;
                        e.glow && e.glow.scale.setScalar(m);
                        const u = 1, g = this._emissive[l], d = 1 + u * g, f = this.objs.bulbs.baseSize, x = this.objs.bulbs.data[l];
                        x.userData._lastBulbFactor !== d && (x.size.set(f.x * d, f.y * d, f.z * d), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), x.userData._lastBulbFactor = d, s = !0), !o && n.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(n), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let t = !1;
                this.objs.plafons.data.forEach((i, e)=>{
                    const a = i.pointLight;
                    !i.pointLight && this._emissive[e] === 0 || (a && (a.intensity = I.lerp(a.intensity, 0, 1), a.intensity <= .01 && (a.intensity = 0, this.lights.push(a), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), t = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0));
                }), t && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed(s = !1) {
            let t;
            if (s ? t = this.players.filter((a, o, l)=>a.player.userData.live) : t = this.players, t.length === 0) return -1;
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
        cameraMove(s, t = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = this.isMobile ? 2.5 : 3, s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const i = Math.max(0, this.maxSpeed(!0));
                        if (i >= 0 && !this.worldClass.thunder || this.levelsMode) {
                            let e = 0;
                            this.players.filter((l)=>l.player.userData.live).length != 1 ? e = this.players[i].player.position.x : this.paramsClass.gameDir == "hor" && (e = this.players[i].player.position.x + this.bounds.rightX / 2);
                            const a = this.cam.maxBackJump;
                            e < this.cam.targetX - a ? this.cam.targetX = this.cam.targetX - a : this.cam.targetX = e;
                            const o = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .35, t);
                            s.position.x = o.newPos, this.cam.velX = o.newVel, s.position.y = this.isMobile ? 2.5 : 3, s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
                        } else (this.worldClass.thunder || !this.levelsMode) && (this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 2), s.position.y = (this.isMobile, 3), s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0));
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
            const o = 2 / e, l = o * a, n = 1 / (1 + l + .48 * l * l + .235 * l * l * l);
            let h = s - t;
            const c = (i + o * h) * a, m = (i - o * c) * n;
            return {
                newPos: t + (h + c) * n,
                newVel: m
            };
        }
        async showPopupInGame(s = !1, t = !1) {
            this.hideScreen("popup_game_btn_close"), this.hideScreen("menu_in_game");
            let i = 0;
            if (this.scoreClass.score > this.scoreClass.myRec && (this.scoreClass.myRec = this.scoreClass.score, i++), this.scoreClass.score > this.scoreClass.worldRec && (this.scoreClass.worldRec = this.scoreClass.score, i++), i) {
                if (this.paramsClass.gameDir === "hor") {
                    const a = this.dataClass.table.hor[this.players.length - 1].find(ve);
                    a && (a.rec = this.scoreClass.score), await this.dataClass.saveResult(ysdk, `ocean${this.players.length}`, this.scoreClass.score);
                } else if (this.paramsClass.gameDir === "vert") {
                    const a = this.dataClass.table.vert[this.players.length - 1].find(ve);
                    a && (a.rec = this.scoreClass.score), await this.dataClass.saveResult(ysdk, `space${this.players.length}`, this.scoreClass.score);
                }
                this.dataClass.saveLocalData(), await this.dataClass.saveNetworkData(), this.dataClass.loadLocalData(), this.paramsClass.gameDir === "hor" ? this.scoreClass.loadRecsToHud(0, this.players.length - 1) : this.scoreClass.loadRecsToHud(1, this.players.length - 1), this.menuClass.loadRecsData();
            }
            if (this.audioClass.oceanAudio.isPlaying && this.audioClass.oceanAudio.stop(), this.audioClass.rainAudio.isPlaying && this.audioClass.rainAudio.stop(), this.gameClass.pause) document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn15"), this.hideScreen("popup_game_btn1"), this.levelsMode && this.showScreen("popup_game_btn4");
            else if (this.gameClass.showGamePopup = !0, !this.levelsMode) !s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play();
            else if (this.players.every((e)=>e.player.userData.finish) && this.dataClass.levelCoopMode == "coop" || this.players.some((e)=>e.player.userData.finish) && this.dataClass.levelCoopMode == "contest") {
                if (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.audioClass.winAudio.isPlaying && this.audioClass.winAudio.stop(), this.audioClass.musicOn && this.audioClass.winAudio.play(), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15"), this.hideScreen("popup_game_btn4"), this.dataClass.levelCoopMode == "coop") {
                    let e = !1, a = !1;
                    this.players.forEach((o, l, n)=>{
                        this.levelsMode == this.allLevels && (this.dataClass.table.player.bonusHeart[l] = 10, e = !0), this.levelsMode + 1 > this.dataClass.table.player.levels[l] && (this.dataClass.table.player.levels[l] = this.levelsMode, a = !0);
                    }), (e || a) && (this.dataClass.saveLocalData(), await this.dataClass.saveNetworkData());
                } else this.dataClass.levelCoopMode == "contest" && this.players.forEach(async (e, a, o)=>{
                    e.player.userData.finish && this.dataClass.table.levelsStatusContest[this.levelsMode - 1] != a + 1 && (this.dataClass.table.levelsStatusContest[this.levelsMode - 1] = a + 1, this.dataClass.saveLocalData(), await this.dataClass.saveNetworkData());
                });
                this.dataClass.loadLocalData(), this.dataClass.loadLevels(this.players.length - 1);
            } else this.hideScreen("popup_game_btn15"), this.showScreen("popup_game_btn4"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win");
            this.showScreen("popup_in_game"), this.gameClass.gameStarting = !1;
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
                this.audioClass.oceanAudio.isPlaying || this.audioClass.oceanAudio.play(), this.boostHatModels.forEach((i, e, a)=>{
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
            }), this.rebindButton(".popup_game_btn2", async ()=>{
                this.audioClass.hardStopAll(), await s();
                let t = [
                    0,
                    -1,
                    1
                ];
                this.players.forEach((i, e, a)=>{
                    if (i.player.userData.live = !1, i.player.userData.score = 0, i.player.userData._lastMeterPos = null, i.player.userData._wasLive = !1, i.player.userData.body.setTranslation(new p(0, -5, 0)), i.player.userData.finish = !1, i.playerAliving(!0), this.levelsMode) {
                        let o = this.players[e], l = Math.floor(Math.random() * t.length);
                        o.player.userData.startPos.x = t[l], t.splice(l, 1);
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
                ]), this.camera.position.x = 0, this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
            }), this.rebindButton(".popup_game_btn15", async ()=>{
                this.audioClass.hardStopAll(), await s(), this.paramsClass.dataLoaded = !1, qs(this.scene), this.audioClass.stopMusic(0), setTimeout(()=>{
                    let t = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 1;
                    t == this.allLevels && this.hideScreen("popup_game_btn15"), this.initMatch(this.players.length, this.gameNum, t, this.birdYes);
                }, 100), setTimeout(()=>{
                    this.players.forEach((t, i, e)=>{
                        t.playerAliving(!0);
                    });
                }, 100), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
            }), this.rebindButton(".popup_game_btn3", async ()=>{
                this.audioClass.hardStopAll(), await s(), this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.paramsClass.dataLoaded = !1, qs(this.scene), this.audioClass.stopMusic(0), this.dataClass.gameInit = !1;
            }), this.rebindButton(".popup_game_btn4", async ()=>{
                this.audioClass.hardStopAll(), await s(), this.gameClass.pause = !1, this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game"), this.dataClass.levelCoopMode == "contest" ? this.showScreen("levels_game_screen_contest") : this.showScreen("levels_game_screen"), this.paramsClass.dataLoaded = !1, qs(this.scene), this.audioClass.stopMusic(0), this.dataClass.gameInit = !1;
            });
        };
        hideScreen(s) {
            document.querySelector(`.${s}`).classList.add("hidden_screen");
        }
        showScreen(s) {
            document.querySelector(`.${s}`).classList.remove("hidden_screen");
        }
    }
    class cs {
        constructor(s, t){
            this.world = s, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new ee;
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
            const e = cs._toVec3(i.size), a = cs._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = i.quaternion?.isQuaternion ? i.quaternion : new ks, l = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), n = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(n, l), this.instancedBodies.push({
                mesh: s,
                index: t,
                size: e,
                body: l
            });
        }
        addInstancedStatic(s, t, i, e) {
            const a = cs._toVec3(e.size), o = cs._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), l = e.quaternion?.isQuaternion ? e.quaternion : new ks, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: l.x,
                y: l.y,
                z: l.z,
                w: l.w
            })), h = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            s[i].userData.body = n, s[i].userData.shape = h, s[i].userData.collide = this.world.createCollider(h, n), this.instancedBodies.push({
                mesh: t,
                index: i,
                size: a,
                body: n
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, t = new Set;
            for (const i of this.instancedBodies){
                const e = cs._ensureInvBase(i.mesh), a = i.body.translation(), o = i.body.rotation();
                s.position.set(a.x, a.y, a.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(i.size.x * e.x, i.size.y * e.y, i.size.z * e.z), s.updateMatrix(), i.mesh.setMatrixAt(i.index, s.matrix), t.add(i.mesh);
            }
            for (const i of t)i.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let t, i;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new gs().setFromObject(s);
                const a = Us(s);
                s.rotation.copy(e), s.userData.size = a, s.userData.orgRotation = e, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = t, s.userData.shape = i;
                let o = t;
                i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let l = this.world.createCollider(i, t);
                s.userData.collider = l, s.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    s,
                    t,
                    s.id
                ]);
            } else if (s != null && s.userData.name.includes("tops")) {
                let t, i;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new gs().setFromObject(s);
                const a = Us(s);
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
                s.rotation.set(0, 0, 0), new gs().setFromObject(s);
                const a = Us(s);
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
    const Ws = new p;
    function Us(r) {
        if (r.isMesh && r.geometry) {
            const t = r.geometry;
            return t.boundingBox || t.computeBoundingBox(), t.boundingBox.getSize(Ws), Ws.multiply(r.scale), Ws.clone();
        }
        return new gs().setFromObject(r).getSize(new p);
    }
    class wt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.looseAudio, this.winAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicNowPlaying = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2, this._attached = !1, this.listener = new Ie, this.musicOn = !0;
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
            const s = new Ge, t = [
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
                const l = new qe(this.listener);
                l.setBuffer(e), l.setLoop(o.loop), l.setRefDistance(o.ref), l.setVolume(o.vol), o.rate && l.setPlaybackRate(o.rate), this[o.key] = l, this.musics.push({
                    name: o.name,
                    music: l
                }), o.quack && this.quacks.push(l), o.thunder && this.thundersAudio.push({
                    name: o.name,
                    music: l
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
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>i.name === "back1").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>t ? i.name === "back3" : i.name === "back2").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class xt {
        constructor(s, t, i, e, a, o){
            this.levelClass = s, this.isMobile = t, this.renderer = i, this.camera = e, this.paramsClass = a, this.audioClass = o, this.mouse = new p, this.raycaster = new We;
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
            this.scene = s, this.camera = t, this.renderer = i, this.paramsClass = e, this.isMobile = a, this.audioClass = o, this.ambientLight = new Ue(11184810, 1), this.hemiLight = new Oe(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ve(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new ee, this.dirLight.target = this.targetObject, this.helper = new Ye(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.isRainActive = !1, this.rainEndTimestampMs = 0, this.activeLightningLines = [], this.lightningMaterialBase = new $e({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: Ts,
                depthWrite: !1
            }), this.clock = new Is, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 10, this.rainAreaHalfDepth = 22, this.rainTopY = 7, this.rainBottomY = -2, this.rainGeometry = new Cs, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
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
            this.rainGeometry.setAttribute("position", new ds(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new ds(s, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new De({
                color: 8947916,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .79,
                transparent: !0,
                opacity: .96,
                size: .18,
                sizeAttenuation: !0,
                depthWrite: !0,
                blending: Ts
            }), this.rainPoints = new Js(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Hs(900, 500), this.water = new Ke(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new Me().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = _s;
                }),
                sunDirection: new p,
                sunColor: 16755370,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -2 : this.water.position.y = -2, this.sun = new p, this.sky = new Xe, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new vs(new Hs(1e4, 1e4), new Ls({
                color: 526362,
                side: Pe,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const t = 1500, i = new Float32Array(t * 3), e = new Float32Array(t), a = new Float32Array(t * 3);
            for(let h = 0; h < t; h++){
                i[3 * h] = Math.random() * 600 - 300, i[3 * h + 1] = Math.random() * 150 - 100, i[3 * h + 2] = Math.random() * 300 - 500, e[h] = Math.random() * 2 + .7;
                const c = new os().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * h] = c.r, a[3 * h + 1] = c.g, a[3 * h + 2] = c.b;
            }
            const o = new Cs;
            o.setAttribute("position", new ds(i, 3)), o.setAttribute("size", new ds(e, 1)), o.setAttribute("color", new ds(a, 3));
            const l = `
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
`, n = `
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
            this.materialStars = new Je({
                uniforms: {
                    time: {
                        value: 0
                    },
                    opacity: {
                        value: 0
                    }
                },
                vertexShader: l,
                fragmentShader: n,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: Ts
            }), this.stars = new Js(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, t = Math.sign(s - this._prevCamX);
            this._prevCamX = t, this.stars.position.x = this.camera.position.x;
            const i = I.degToRad(90 - this.parameters.elevation), e = I.degToRad(this.parameters.azimuth);
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
            await this.loadWaterSky(), await this.loadRain(), this.scene.add(this.hemiLight), this.scene.add(this.dirLight), this.scene.add(this.targetObject), this.scene.add(this.water), mt(this.renderer, this.scene, this.camera), yt(this.water, this.renderer, this.scene, this.camera);
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
                for(let l = 0; l < this.rainDropCount; l++){
                    const n = l * 3, h = Math.sin(this.rainWindPhase[l] + performance.now() * .002) * .35 + e * .4;
                    this.rainPositions[n + 0] += h * this.deltaSeconds * 8, this.rainPositions[n + 1] -= this.rainVelocities[l] * (1 + Math.abs(e) * .3) * this.deltaSeconds, a + this.rainPositions[n + 0], o + this.rainPositions[n + 2], this.rainPositions[n + 1] < this.rainBottomY && (this.rainPositions[n + 1] = this.rainTopY, this.rainPositions[n + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[n + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[l] = Math.random() * Math.PI * 2), this.rainPositions[n + 0] > this.rainAreaHalfWidth && (this.rainPositions[n + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[n + 0] < -this.rainAreaHalfWidth && (this.rainPositions[n + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[n + 2] > this.rainAreaHalfDepth && (this.rainPositions[n + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[n + 2] < -this.rainAreaHalfDepth && (this.rainPositions[n + 2] += this.rainAreaHalfDepth * 2 - 35);
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
            const e = s + (Math.random() - .5) * 6, a = -4 + Math.random() * 3, o = i + (Math.random() - .5) * 6, l = e - s, n = a - t, h = o - i, c = Math.hypot(l, n, h) || 1, m = l / c, u = n / c, g = h / c, d = l / c, x = -(h / c), D = 0, b = d, _ = Math.abs(u) > .9 ? new p(1, 0, 0) : new p(0, 1, 0), R = new p(m, u, g), q = new p().crossVectors(R, _).normalize(), y = new p().crossVectors(R, q).normalize(), w = 2 + Math.random() * 2, H = 1.2, E = Math.random() * Math.PI * 2, k = 3 + Math.random() * 2.5, U = .8, ms = Math.random() * Math.PI * 2, M = 28, j = 4, $ = [];
            for(let S = 0; S <= M; S++){
                const z = S / M, A = 1 - z;
                let K = s + l * z, ns = t + n * z, Q = i + h * z;
                const X = Math.sin(z * Math.PI * w + E) * H * (.3 + .7 * A), ss = Math.sin(z * Math.PI * k + ms) * U * (.3 + .7 * A), es = (Math.random() - .5) * 2 * j * A, O = (Math.random() - .5) * 1.6 * j * A, W = Math.random() < .12 ? (Math.random() - .5) * 3.5 * A : 0;
                if (K += q.x * (X + es + W) + y.x * (ss + O * .7), ns += q.y * (X + es * .5) + y.y * (ss + O * .5), Q += q.z * (X + es + W) + y.z * (ss + O * .7), $.push(K, ns, Q), S > 3 && S < M - 3 && Math.random() < .22) {
                    const rs = [], xs = 3 + Math.floor(Math.random() * 2), hs = .25 + Math.random() * .35;
                    let Ds = K, Ps = ns, Ms = Q;
                    rs.push(Ds, Ps, Ms);
                    for(let Bs = 1; Bs <= xs; Bs++)Ds += (Math.random() - .5) * j * hs, Ps += -(.8 + Math.random() * .8) * hs, Ms += (Math.random() - .5) * j * hs, rs.push(Ds, Ps, Ms);
                    const zs = new Cs;
                    zs.setAttribute("position", new ne(rs, 3));
                    const bs = new re(zs, this.lightningMaterialBase.clone());
                    bs.material.opacity = .6, bs.userData.life = .16 + Math.random() * .12, this.scene.add(bs), this.activeLightningLines.push(bs);
                }
            }
            const ys = 2;
            for(let S = -1; S <= ys; S++){
                const z = S === -1, A = z ? 0 : S % 2 === 0 ? 1 : -1, K = .55 + Math.random() * .45, ns = .35, Q = Math.random() * Math.PI * 2, X = [], ss = $.length / 3;
                for(let W = 0; W < ss; W++){
                    const rs = W / (ss - 1), xs = .35 + .85 * rs, hs = Math.sin(rs * Math.PI * 2 + Q) * ns * (.2 + .8 * rs), Ds = x * A * K * xs + b * hs * .3, Ps = D * A * K * xs + hs * .05, Ms = b * A * K * xs - x * hs * .3, zs = W * 3 + 0, bs = W * 3 + 1, Bs = W * 3 + 2, ae = $[zs], ie = $[bs], oe = $[Bs];
                    z ? X.push(ae + (Math.random() - .5) * .05, ie + (Math.random() - .5) * .05, oe + (Math.random() - .5) * .05) : X.push(ae + Ds + (Math.random() - .5) * .2, ie + Ps + (Math.random() - .5) * .2, oe + Ms + (Math.random() - .5) * .2);
                }
                const es = new Cs;
                es.setAttribute("position", new ne(X, 3));
                const O = new re(es, this.lightningMaterialBase.clone());
                O.material.opacity = z ? .95 : .32, O.userData.life = .22 + Math.random() * .18, this.scene.add(O), this.activeLightningLines.push(O);
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
                for(let l = 0; l < 2; l++){
                    const n = (a * 2 + l) * 4;
                    i[n + 0] = 255, i[n + 1] = 255, i[n + 2] = 255, i[n + 3] = Math.round(o * 255);
                }
            }
            const e = new Ze(i, 2, 40, Qe);
            return e.needsUpdate = !0, e.magFilter = he, e.minFilter = he, e.wrapS = de, e.wrapT = de, e.rotation = Math.PI / 2, e.center.set(.5, .5), e;
        }
    }
    const Pt = new Set([
        "Мой рекорд",
        "My record"
    ]);
    function Os(r) {
        if (!r) return !1;
        if (r.isMine === !0) return !0;
        const s = T("hud.mineRecord", "Мой рекорд");
        return r.name === s || Pt.has(r.name);
    }
    class Mt {
        constructor(s, t, i, e, a){
            this.initMatch = s, this.loadLevels = t, this.gameClass = i, this.audioClass = e, this.dataClass = a, this.playersNum = 1, this.levelPlayersNum = 1, this.mainMenu(this.initMatch), this.loadRecsData();
        }
        loadRecsData() {
            let s = this.dataClass.masTables, t = document.querySelectorAll(".rec_table_small"), i = "free_game_my_rec", e = "";
            t[0].innerHTML = "", t[1].innerHTML = "", s.forEach((a, o, l)=>{
                s[o].forEach((n, h, c)=>{
                    s[o][h].findIndex((m)=>m.name === "Мой рекорд") < 3 ? t[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == h + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${Os(s[o][h][0]) ? i : e}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][h][0].name}</span>
                <div><span class='place_rec'>${s[o][h][0].rec}</span><span>${T("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='green_back two_place ${Os(s[o][h][1]) ? i : e}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][h][1].name}</span>
                <div><span class='place_rec'>${s[o][h][1].rec}</span><span>${T("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='blue_back three_place ${Os(s[o][h][2]) ? i : e}'>
                <span class='place_num'>3</span>
                <span class='rec_table_small_name'>${s[o][h][2].name}</span>
                <div><span class='place_rec'>${s[o][h][2].rec}</span><span>${T("hud.metersLabel", "м")}</span></div>
            </div>
          </div>
        `) : t[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == h + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][h][0].name}</span>
                <div><span class='place_rec'>${s[o][h][0].rec}</span><span>${T("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='green_back two_place}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][h][1].name}</span>
                <div><span class='place_rec'>${s[o][h][1].rec}</span><span>${T("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='blue_back three_place ${i}'>
                <span class='place_num'>${s[o][h][3].pos}</span>
                <span class='rec_table_small_name'>${s[o][h][3].name}</span>
                <div><span class='place_rec'>${s[o][h][3].rec}</span><span>${T("hud.metersLabel", "м")}</span></div>
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
                this.dataClass.levelCoopMode = "coop", document.querySelectorAll(".levels_game_screen .level_game_chels").forEach((i, e, a)=>{
                    i.classList.contains("level_game_chels_active") && (this.levelPlayersNum = e + 1);
                }), this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", async ()=>{
                this.dataClass.levelCoopMode = "contest", document.querySelectorAll(".levels_game_screen_contest .level_game_chels_contest").forEach((i, e, a)=>{
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
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 2);
            }), document.querySelector(".free_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 4, !1, !1);
            }), document.querySelectorAll(".free_game_chels").forEach((i, e)=>{
                i.addEventListener("click", ()=>{
                    document.querySelectorAll(".free_game_chels").forEach((c)=>{
                        c.classList.remove("free_game_chels_active");
                    }), i.classList.add("free_game_chels_active");
                    const a = e + 1, o = document.querySelectorAll(".rec_table_small"), l = [];
                    o.forEach((c)=>{
                        const m = c.querySelector(".rec_table_small_block:not(.hidden_screen)");
                        m && (l.push(m), m.getBoundingClientRect(), m.classList.add("anim-out"));
                    });
                    let n = 0;
                    const h = ()=>{
                        if (n++, n < l.length) return;
                        this.playersNum = a, this.loadRecsData();
                        const c = [];
                        document.querySelectorAll(".rec_table_small").forEach((m)=>{
                            const u = m.querySelector(".rec_table_small_block:not(.hidden_screen)");
                            u && (u.classList.add("anim-in"), c.push(u));
                        }), requestAnimationFrame(()=>{
                            c.forEach((u)=>{
                                u.getBoundingClientRect(), u.classList.add("anim-play");
                            });
                            const m = (u)=>{
                                u.classList.remove("anim-in", "anim-play"), u.removeEventListener("transitionend", m);
                            };
                            c.forEach((u)=>u.addEventListener("transitionend", ()=>m(u), {
                                    once: !0
                                }));
                        });
                    };
                    l.length === 0 ? (this.playersNum = a, this.loadRecsData()) : l.forEach((c)=>{
                        c.addEventListener("transitionend", ()=>{
                            c.classList.remove("anim-out"), c.removeEventListener("transitionend", h), h();
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
    class Ct {
        constructor(){
            this.gameDir = "hor", this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class jt {
        constructor(s, t){
            this.camera = s, this.dataClass = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y, this.metersFloatEl = document.getElementById("meters-float"), this.myRecField = document.getElementById("myRecord"), this.worldRecField = document.getElementById("worldRecord"), this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3), this.worldRec = 0, this.myRec = 0;
        }
        loadRecsToHud(s = 0, t = 0) {
            this.worldRec = this.dataClass.masTables[s][t][0].rec, this.myRec = this.dataClass.masTables[s][t].find((i)=>i.pos == 0).rec, this.myRecField.textContent = this.myRec, this.worldRecField.textContent = this.worldRec;
        }
        updateMetersFloat(s, t, i = "hor") {
            const e = i === "vert" ? "y" : "x", a = 1e-4;
            for (const u of t){
                const g = u?.player;
                if (!g) continue;
                const d = g.userData || (g.userData = {});
                d.score == null && (d.score = 0);
                let f = g.position?.[e] ?? 0;
                if (d._lastMeterPos == null && (d._lastMeterPos = f), i !== "vert" && d._wasLive === !1 && d.live && (d._lastMeterPos = f), d.live) {
                    const x = f - d._lastMeterPos, D = x > a ? x : 0;
                    D !== 0 && (d.score += D, d._lastMeterPos = f);
                }
                d.score === 0 && (d._lastMeterPos = f), d._wasLive = !!d.live;
            }
            this.playerPanels || (this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3));
            let o = 0;
            for(let u = 0; u < 3; u++){
                const g = this.playerPanels[u], d = t[u]?.player, f = Math.max(0, Math.floor(d?.userData?.score || 0));
                o += f, g && (g.textContent = String(f).padStart(3, "0"));
            }
            const l = Math.max(0, Math.floor(o));
            if (l === Vs) return;
            const n = Vs, h = performance.now(), c = 50, m = (u)=>{
                const g = Math.min(1, (u - h) / c), d = 1 - Math.pow(1 - g, 4), f = Math.round(n + (l - n) * d);
                this.score = f, this.metersFloatEl && (this.metersFloatEl.textContent = String(f).padStart(3, "0")), g < 1 ? requestAnimationFrame(m) : Vs = l;
            };
            requestAnimationFrame(m);
        }
    }
    let Vs = 0;
    class _t {
        constructor(){
            this.gameStarting = !1, this.pause = !1, this.visible = !0, this.showGamePopup = !1;
        }
    }
    class St {
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
                            rec: 2
                        },
                        {
                            pos: 1,
                            name: "Серж",
                            rec: 5
                        },
                        {
                            pos: 2,
                            name: "Коля",
                            rec: 4
                        },
                        {
                            pos: 3,
                            name: "Паша",
                            rec: 10
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
            }, this.masTables = [], this.localStorageKey = "gameData", this.disableSelection = ()=>{
                document.querySelectorAll(".levels_block, .status_chip, .levels_block_number").forEach((t)=>{
                    t.style.userSelect = "none", t.style.webkitUserSelect = "none", t.style.webkitTapHighlightColor = "transparent", t.draggable = !1;
                });
            };
        }
        async clearData() {
            localStorage.clear();
        }
        saveLocalData() {
            try {
                this.ensureVersionStamp(), localStorage.setItem(this.localStorageKey, JSON.stringify(this.table));
            } catch (s) {
                console.warn("Local save failed:", s);
            }
        }
        async loadLocalData() {
            try {
                const s = localStorage.getItem(this.localStorageKey);
                if (s) {
                    const t = JSON.parse(s);
                    t && typeof t == "object" && (this.table = t);
                }
            } catch (s) {
                console.warn("Local load failed:", s);
            }
            this.ensureVersionStamp(), this.processDataAfterLoad();
        }
        async loadNetworkDataAndMerge() {
            try {
                const s = await ysdk.getPlayer();
                this.yandexPlayer.player = s;
                const t = await s.getData([
                    "table"
                ]), i = t && t.table ? t.table : null;
                if (!i) {
                    await this.saveNetworkData({
                        flush: !1
                    });
                    return;
                }
                this.ensureVersionStamp(this.table), this.ensureVersionStamp(i), (i.meta.updatedAt || 0) > (this.table.meta.updatedAt || 0) ? (this.table = i, this.processDataAfterLoad(), this.saveLocalData()) : await this.saveNetworkData({
                    flush: !1
                });
            } catch (s) {
                console.warn("Cloud load/merge failed:", s);
            }
        }
        async saveNetworkData({ flush: s = !1 } = {}) {
            try {
                if (!this.yandexPlayer.player) return;
                this.ensureVersionStamp(), await this.yandexPlayer.player.setData({
                    table: this.table
                }, s);
            } catch (t) {
                console.warn("Cloud save failed:", t);
            }
        }
        ensureVersionStamp(s = this.table) {
            s.meta || (s.meta = {}), s.meta.updatedAt = Date.now();
        }
        processDataAfterLoad() {
            let s = this.table.hor[0].sort((l, n)=>n.rec - l.rec), t = this.table.hor[1].sort((l, n)=>n.rec - l.rec), i = this.table.hor[2].sort((l, n)=>n.rec - l.rec), e = this.table.vert[0].sort((l, n)=>n.rec - l.rec), a = this.table.vert[1].sort((l, n)=>n.rec - l.rec), o = this.table.vert[2].sort((l, n)=>n.rec - l.rec);
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
            for(let l = 0; l < 3; l++)for(let n = 0; n < this.allLevels; n++)n < this.table.player.levels[l] ? this.levelsStatus[l][n] = "completed" : n == this.table.player.levels[l] ? this.levelsStatus[l][n] = "available" : this.levelsStatus[l][n] = "locked";
        }
        async loadLevels(s) {
            const t = document.querySelector(".levels_blocks");
            if (!t) return;
            t.classList.add("levels_blocks--reenter"), t.innerHTML = "";
            const i = document.createDocumentFragment(), e = (n)=>{
                switch(n){
                    case "completed":
                        return {
                            modifierClass: "levels_block--completed",
                            labelText: T("levels.status.completed", "Пройден"),
                            ariaState: T("levels.status.completedAria", "уровень пройден")
                        };
                    case "available":
                        return {
                            modifierClass: "levels_block--available",
                            labelText: T("levels.status.available", "Доступен"),
                            ariaState: T("levels.status.availableAria", "уровень доступен")
                        };
                    default:
                        return {
                            modifierClass: "levels_block--locked",
                            labelText: T("levels.status.locked", "Закрыт"),
                            ariaState: T("levels.status.lockedAria", "уровень закрыт")
                        };
                }
            }, a = 40, o = 60, l = 600;
            for(let n = 0; n < this.levelsStatus[s].length; n++){
                const h = this.levelsStatus[s][n], { modifierClass: c, labelText: m, ariaState: u } = e(h), g = n === 9, d = document.createElement("div");
                d.className = `levels_block ${c}${g ? " levels_block--super" : ""}`, d.setAttribute("data-level", String(n + 1)), d.setAttribute("role", "button"), d.setAttribute("tabindex", h === "locked" ? "-1" : "0"), d.setAttribute("aria-label", `Уровень ${n + 1}, ${u}${g ? ", бонусный уровень" : ""}`);
                const f = Math.min(o + n * a, l);
                d.style.setProperty("--show-delay", `${f}ms`);
                const x = document.createElement("div");
                if (x.className = "levels_block_number", x.textContent = String(n + 1), g) {
                    const _ = document.createElement("div");
                    _.className = "level_reward_icon", _.innerHTML = "+❤️", d.appendChild(_);
                }
                const D = document.createElement("div");
                D.className = "levels_block_status";
                const b = document.createElement("span");
                b.className = `status_chip ${h === "completed" ? "status_chip--completed" : h === "available" ? "status_chip--available" : "status_chip--locked"}`, b.setAttribute("data-i18n", `levels.status.${h}`), b.textContent = m, D.appendChild(b), d.append(x, D), d.addEventListener("click", ()=>{
                    h !== "locked" && (document.querySelectorAll(".levels_block").forEach((_)=>_.classList.remove("active")), d.classList.add("active"));
                }), d.addEventListener("keydown", (_)=>{
                    h !== "locked" && (_.key === "Enter" || _.key === " ") && (_.preventDefault(), d.click());
                }), i.appendChild(d);
            }
            t.append(i), requestAnimationFrame(()=>{
                t.classList.remove("levels_blocks--reenter"), t.querySelectorAll(".levels_block").forEach((n)=>{
                    n.classList.add("levels_block--enter"), n.classList.contains("levels_block--super") && n.addEventListener("animationend", (h)=>{
                        h.animationName === "level-tile-in" && n.classList.add("levels_block--enter-done");
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
                const l = o + 1, n = this.table.levelsStatusContest?.[o] ?? 0, h = document.createElement("div");
                h.className = "levels_block levels_block--contest", h.setAttribute("data-level", l), h.setAttribute("role", "button"), h.setAttribute("tabindex", "0"), h.setAttribute("aria-label", `Уровень ${l}, значение ${n}`);
                const c = Math.min(e + o * i, a);
                h.style.setProperty("--show-delay", `${c}ms`), n && h.classList.add(`level_player${n}`);
                const m = document.createElement("div");
                m.className = "levels_block_number", m.textContent = String(l);
                const u = document.createElement("div");
                u.className = "levels_block_status", n ? (u.setAttribute("data-i18n", `contest.player${n}`), u.textContent = T(`contest.player${n}`)) : u.textContent = "";
                const g = n ? T(`contest.player${n}`) : "";
                u.textContent = g, h.append(m, u), h.addEventListener("click", ()=>{
                    document.querySelectorAll(".levels_block").forEach((d)=>d.classList.remove("active")), h.classList.add("active");
                }), h.addEventListener("keydown", (d)=>{
                    (d.key === "Enter" || d.key === " ") && (d.preventDefault(), h.click());
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
        leaderboardsPartIds = [
            "ocean1",
            "ocean2",
            "ocean3",
            "space1",
            "space2",
            "space3"
        ];
        leaderboardMainId = "main";
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
        initLeaderboardsStorage() {
            this.table || (this.table = {}), this.table.leaderboards || (this.table.leaderboards = {}), this.table.leaderboardsByPlayer || (this.table.leaderboardsByPlayer = {}), this.table.hor || (this.table.hor = [
                [],
                [],
                []
            ]), this.table.vert || (this.table.vert = [
                [],
                [],
                []
            ]);
            const s = ()=>[
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
                ];
            for(let t = 0; t < 3; t++)(!Array.isArray(this.table.hor[t]) || this.table.hor[t].length !== 4) && (this.table.hor[t] = s()), (!Array.isArray(this.table.vert[t]) || this.table.vert[t].length !== 4) && (this.table.vert[t] = s());
        }
        async loadLeaderboardsAtStart(s) {
            this.initLeaderboardsStorage();
            const t = this.leaderboardsPartIds.map(async (i)=>{
                const e = await this.readLeaderboardTop(s, i).catch(()=>[]), a = await this.readMyEntrySafe(s, i);
                this.table.leaderboards[i] = e, this.table.leaderboardsByPlayer.me || (this.table.leaderboardsByPlayer.me = {}), this.table.leaderboardsByPlayer.me[i] = a && typeof a.score == "number" ? a.score : 0;
                const o = this.getMyScoreForBoard(i), l = this.makeRowFromLeaderboard(e, o, "Мой рекорд");
                this.placeRow(i, l);
            });
            await Promise.all(t), this.saveLocalData?.(), await this.saveNetworkData?.({
                flush: !1
            });
        }
        getMyScoreForBoard(s) {
            if (this.playerData?.records && typeof this.playerData.records[s] == "number") return this.playerData.records[s];
            const t = this.table.leaderboardsByPlayer?.me?.[s];
            return typeof t == "number" ? t : 0;
        }
        makeRowFromLeaderboard(s, t, i) {
            const e = (s || []).slice(0, 3);
            for(; e.length < 3;)e.push({
                name: "",
                rec: 0
            });
            return [
                {
                    pos: 0,
                    name: i,
                    rec: typeof t == "number" ? t : 0
                },
                {
                    pos: 1,
                    name: e[0].name || "",
                    rec: typeof e[0].rec == "number" ? e[0].rec : 0
                },
                {
                    pos: 2,
                    name: e[1].name || "",
                    rec: typeof e[1].rec == "number" ? e[1].rec : 0
                },
                {
                    pos: 3,
                    name: e[2].name || "",
                    rec: typeof e[2].rec == "number" ? e[2].rec : 0
                }
            ];
        }
        placeRow(s, t) {
            const i = this.leaderboardPlacement[s];
            i && (i.group === "hor" ? this.table.hor[i.row] = t : i.group === "vert" && (this.table.vert[i.row] = t));
        }
        async readLeaderboardTop(s, t) {
            const e = ((await s.leaderboards.getEntries(t, {
                quantityTop: 10,
                includeUser: !0,
                quantityAround: 0
            })).entries || []).map((a)=>({
                    name: a.player?.publicName || "Anon",
                    rec: typeof a.score == "number" ? a.score : 0
                }));
            return e.sort((a, o)=>o.rec - a.rec), e;
        }
        async readMyEntrySafe(s, t) {
            try {
                return await s.leaderboards.getPlayerEntry(t);
            } catch  {
                return null;
            }
        }
        async saveResult(s, t, i) {
            this.playerData || (this.playerData = {}), this.playerData.records || (this.playerData.records = {}), this.table || (this.table = {}), this.table.leaderboardsByPlayer || (this.table.leaderboardsByPlayer = {
                me: {}
            });
            const e = typeof this.playerData.records[t] == "number" ? this.playerData.records[t] : 0, a = Math.max(e, Number(i) || 0);
            this.playerData.records[t] = a, this.table.leaderboardsByPlayer.me[t] = a;
            try {
                await s.isAvailableMethod("leaderboards.setScore") && await s.leaderboards.setScore(t, a);
            } catch  {}
            if (this.leaderboardPlacement && this.leaderboardPlacement[t]) {
                const o = this.leaderboardPlacement[t];
                o.group === "hor" && Array.isArray(this.table.hor?.[o.row]) && (this.table.hor[o.row][0].rec = a), o.group === "vert" && Array.isArray(this.table.vert?.[o.row]) && (this.table.vert[o.row][0].rec = a);
            }
            try {
                const o = this.leaderboardsPartIds.reduce((m, u)=>{
                    const g = typeof this.playerData.records[u] == "number" ? this.playerData.records[u] : 0;
                    return m + g;
                }, 0);
                await s.isAvailableMethod("leaderboards.setScore") && await s.leaderboards.setScore(this.leaderboardMainId, o), this.table.leaderboards || (this.table.leaderboards = {}), this.table.leaderboards[this.leaderboardMainId] || (this.table.leaderboards[this.leaderboardMainId] = []);
                const n = this.yandexPlayer?.player?.getName ? this.yandexPlayer.player.getName() : "Me", h = this.table.leaderboards[this.leaderboardMainId].findIndex((m)=>m.name === n), c = {
                    pos: 0,
                    name: n,
                    rec: o
                };
                h >= 0 ? this.table.leaderboards[this.leaderboardMainId][h] = c : this.table.leaderboards[this.leaderboardMainId].unshift(c);
            } catch  {}
            return this.saveLocalData?.(), await this.saveNetworkData?.({
                flush: !1
            }), a;
        }
    }
    class Lt {
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
            const s = new Me, [t, i, e] = await Promise.all([
                s.loadAsync("textures/plane.jpg"),
                s.loadAsync("textures/grass.jpg"),
                s.loadAsync("textures/mks.png")
            ]);
            this.plane.texture = t, this.plane.material = new ps({
                map: t,
                transparent: !0,
                opacity: 1
            }), this.planeGrass.texture = i, this.planeGrass.material = new ps({
                map: i
            }), this.mks.texture = e, this.mks.material = new Ls({
                map: e,
                transparent: !0,
                opacity: 0
            });
        }
        async loadModels() {
            await new Zs().loadAsync("models/bird/bird.glb").then((i)=>{
                const e = i.scene, a = i.animations;
                e.scale.x = 2, e.scale.y = 2, e.scale.z = 2, e.position.y = 0, e.rotation.y = -Math.PI / 3, this.angryBirdModel = e, this.angryBirdModel.userData.mixer = new st(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(a[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Is, this.angryBirdModel.traverse((l)=>{
                    (l.isMesh || l.isSkinnedMesh) && (l.castShadow = !1, l.receiveShadow = !1, l.geometry && !l.geometry.boundingSphere && l.geometry.computeBoundingSphere());
                });
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1;
            });
        }
        async loadBoostsModel() {
            await new Zs().loadAsync("models/boosts/hat.glb").then((i)=>{
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
    let te;
    document.addEventListener("touchstart", (r)=>{
        te = setTimeout(()=>{
            r.preventDefault();
        }, 500);
    }, {
        passive: !1
    });
    document.addEventListener("touchend", ()=>{
        clearTimeout(te);
    });
    document.addEventListener("touchmove", ()=>{
        clearTimeout(te);
    });
    document.addEventListener("dblclick", (r)=>(r.preventDefault(), !1), {
        capture: !0
    });
    (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (r)=>{
        r.preventDefault();
    }, {
        passive: !1
    });
    let Qs, kt = new Is, Ce, ls, ws, Z, P, C, Ss, G, As, B, fs, Ys = !1, $s = !1, v = new _t;
    const us = new et;
    us.background = new os(13230580);
    const je = ct({
        scene: us
    }), _e = pt({
        scene: us
    }), N = new tt(25, window.innerWidth / window.innerHeight, .1, 2e3);
    N.position.y = 2;
    const At = 16 / 9, zt = I.degToRad(25), Bt = 2 * Math.atan(Math.tan(zt / 2) * At), Ks = rt();
    function Gs() {
        const r = (window.visualViewport?.height || window.innerHeight) * .01;
        document.documentElement.style.setProperty("--vh", `${r}px`);
    }
    Gs();
    window.addEventListener("resize", Gs);
    window.addEventListener("orientationchange", Gs);
    window.visualViewport?.addEventListener("resize", Gs);
    new at;
    const F = new it({
        antialias: !1
    });
    F.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    F.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(F.domElement);
    F.shadowMap.enabled = !0;
    F.shadowMap.type = ot;
    F.outputColorSpace = lt;
    F.toneMapping = nt;
    F.toneMappingExposure = 1.05;
    function Se() {
        const r = document.body.offsetWidth, s = document.body.offsetHeight, t = r / s;
        let i = 2 * Math.atan(Math.tan(Bt / 2) / t);
        const e = I.degToRad(4), a = I.degToRad(90);
        i = I.clamp(i, e, a), N.fov = I.radToDeg(i), N.aspect = t, N.updateProjectionMatrix(), F.setSize(r, s);
    }
    window.addEventListener("resize", Se);
    Se();
    document.body.addEventListener("touchstart", function(r) {
        r.preventDefault(), document.body.requestFullscreen().then(()=>{
            screen.orientation.lock("landscape").catch(()=>{});
        }).catch(()=>{});
    }, {
        passive: !1,
        once: !0
    });
    let Y = document.querySelector(".loader_line");
    async function Et() {
        xe(!0), B = new St, ft(), fs = new Lt, await fs.loadModels(), await fs.loadBoostsModel(), Y.setAttribute("style", "width:30%"), await fs.loadTexture(), await Tt(), Y.setAttribute("style", "width:30%"), C = new wt, await C.loadAudio(), Y.setAttribute("style", "width:60%"), await B.loadLocalData(), await B.loadNetworkDataAndMerge(), await B.loadLevels(0), await B.loadLevelsContest(), Y.setAttribute("style", "width:100%"), ls = new Mt(Le, B.loadLevels, v, C, B), xe(!1), Y.setAttribute("style", "width:0%"), await B.loadLeaderboardsAtStart(ysdk), ysdk.features.LoadingAPI.ready(), ysdk.features.GameplayAPI.stop();
    }
    await Et();
    async function Tt() {
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
    async function Ht(r) {
        const s = await ke(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Qs = new s.World(new s.Vector3(0, -9.81, 0)), Ce = new s.EventQueue(!0), Z = new cs(Qs, s), As = new jt(N, B), ws = new Dt(us, N, F, G, Ks, C), P = new vt(us, C, Z, F, N, Ks, G, ws, Le, B, v, je, _e, As, ls, fs);
        for(let t = 0; t < r; t++)P.players.push(new bt(B, us, C, P, G, N, v, fs));
        Ss = new xt(P, Ks, F, N, G, C), Ss.addKeyListeners();
    }
    async function Ft() {
        await ws.loadWorld(), C.musicOn && C.backAudio.play(), C.musicOn && C.oceanAudio.play();
    }
    async function Rt(r) {
        await P.createLevel(r), await P.loadPlayers(), await P.loadEnvironments(), P.objs.grassPlanes.data.length > 0 && P.objs.grassPlanes.data.forEach((s, t)=>{
            P.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(Fs([
                0
            ], [
                1
            ]));
        }), P.players.length > 0 && P.players.forEach((s, t)=>{
            P.players[t].player.userData.collider.setCollisionGroups(Fs([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function Le(r, s, t = !1) {
        Nt(), ls.toggleLoader(!0), G = new Ct, await Ht(r), Y.setAttribute("style", "width:30%"), P.gameNum = s, await Ft(), Y.setAttribute("style", "width:60%"), await Rt(t), Y.setAttribute("style", "width:90%"), G.gameDir === "hor" ? As.loadRecsToHud(0, P.players.length - 1) : As.loadRecsToHud(1, P.players.length - 1), G.dataLoaded = !0, v.gameStarting = !0, B.gameInit = !0, Y.setAttribute("style", "width:100%"), setTimeout(()=>{
            ls.toggleLoader(!1), Y.setAttribute("style", "width:0%");
        }, 1e3);
    }
    function Nt() {
        N.position.y = 2, N.position.x = 0, F.toneMappingExposure = 1.05, Ss?.removedKeyListeners(), ws = null, Z = null, P = null, Ss = null, G = null, As = null;
    }
    function It() {
        if (v.gameStarting && document.querySelector(".menu_in_game").classList.contains("hidden_screen") && G.dataLoaded && P.showScreen("menu_in_game"), B.gameInit && v.gameStarting && !P.levelsMode && document.querySelector(".hud").classList.contains("hidden_screen") && G.dataLoaded ? (ls.showScreen("hud"), ls.hideScreen("level_hud_wrap")) : !B.gameInit && !document.querySelector(".hud").classList.contains("hidden_screen") && (ls.hideScreen("hud"), ls.showScreen("level_hud_wrap")), B.gameInit && v.gameStarting && P.levelsMode && !document.querySelector(".player_panel_rec").classList.contains("hidden_screen") ? document.querySelectorAll(".player_panel_rec").forEach((r, s, t)=>{
            r.classList.add("hidden_screen");
        }) : B.gameInit && v.gameStarting && !P.levelsMode && document.querySelector(".player_panel_rec").classList.contains("hidden_screen") && document.querySelectorAll(".player_panel_rec").forEach((r, s, t)=>{
            r.classList.remove("hidden_screen");
        }), v.gameStarting ? (je.update(Ns), _e.update(Ns), Ys || (ysdk.features.GameplayAPI.start(), Ys = !0, $s = !1)) : $s || (ysdk.features.GameplayAPI.stop(), $s = !0, Ys = !1), G.dataLoaded && v.gameStarting) {
            P.players.forEach((r, s, t)=>{
                r.playerMove();
            }), ws.updateLighting(), P.levelAnimate(N), P.cameraMove(N);
            for(let r = 0, s = Z.dynamicBodies.length; r < s; r++)Z.dynamicBodies[r][0].position.copy(Z.dynamicBodies[r][1].translation()), Z.dynamicBodies[r][0].quaternion.copy(Z.dynamicBodies[r][1].rotation());
            Z.updateInstancedTransforms(), Qs.step(Ce), v.gameStarting && F.render(us, N);
        }
    }
    let Xs = 0;
    const Ns = 1 / 60, we = .1;
    F.setAnimationLoop(()=>{
        if (G != null) {
            let r = kt.getDelta();
            for(r > we && (r = we), Xs += r; Xs >= Ns;)It(), Xs -= Ns;
        }
    });
    function xe(r) {
        const s = document.querySelector(".loader_screen");
        s && (r ? s.classList.remove("hidden_screen") : s.classList.add("hidden_screen"));
    }
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "visible" ? (!v.pause && !v.showGamePopup && (v.gameStarting = !0, C.togglePauseAll(!v.gameStarting)), v.visible = !0) : (!v.pause && !v.showGamePopup ? (v.gameStarting = !1, C.togglePauseAll(!v.gameStarting)) : v.pause || C.togglePauseAll(!v.gameStarting), v.visible = !1);
    });
    document.querySelector(".pause_btn_wrap").addEventListener("click", ()=>{
        !v.pause && v.gameStarting && (v.pause = !v.pause, v.pause && (P.showPopupInGame(), v.gameStarting = !1, C.togglePauseAll(!v.gameStarting), P.showScreen("popup_game_btn_close")));
    });
    document.querySelector(".popup_game_btn_close").addEventListener("click", ()=>{
        (v.pause || v.gameStarting) && (v.pause = !v.pause, v.gameStarting = !0, C.togglePauseAll(!v.gameStarting), ws.rain && !C.rainAudio.isPlaying && C.rainAudio.play(), C.oceanAudio.isPlaying || C.oceanAudio.play(), P.hideScreen("popup_in_game"), P.hideScreen("popup_game_btn_close"));
    });
    document.querySelector(".sound_btn_wrap").addEventListener("click", ()=>{
        const r = C.isMuted();
        C.toggleMute(!r), document.querySelector(".volume-icon__input").classList.toggle("volume_off");
    });
    function Gt() {
        const r = [
            ".free_game_screen",
            ".levels_game_screen",
            ".levels_game_screen_contest",
            ".main_screen"
        ];
        let s = null, t = null, i = null, e = !1, a = 0, o = 0;
        const l = ()=>{
            for (const d of r){
                const f = document.querySelector(d);
                if (f && !f.classList.contains("hidden_screen")) return f;
            }
            return null;
        }, n = ()=>{
            const d = l();
            d !== s && (s && s.removeEventListener("scroll", h, {
                passive: !0
            }), i && (i.removeEventListener("mousedown", c), i.removeEventListener("touchstart", c)), s = d, t = s ? s.querySelector(".scroll-progress") : null, i = t ? t.querySelector(".scroll-progress__bar") : null, s && s.addEventListener("scroll", h, {
                passive: !0
            }), i && (i.addEventListener("mousedown", c), i.addEventListener("touchstart", c)), h());
        }, h = ()=>{
            if (!s || !t || !i) return;
            const d = s.clientHeight, f = s.scrollHeight, x = s.scrollTop;
            if (f <= d + 1) {
                t.classList.remove("visible");
                return;
            }
            t.classList.add("visible");
            const D = t.getBoundingClientRect().height, _ = Math.max(d / f * D, 24), R = f - d, q = D - _, y = R > 0 ? x / R * q : 0;
            i.style.height = `${_}px`, i.style.top = `${y}px`;
        }, c = (d)=>{
            !s || !i || (e = !0, a = d.touches ? d.touches[0].clientY : d.clientY, o = s.scrollTop, document.body.style.userSelect = "none", d.preventDefault());
        }, m = (d)=>{
            if (!e || !s || !i || !t) return;
            const x = (d.touches ? d.touches[0].clientY : d.clientY) - a, D = t.getBoundingClientRect().height, b = s.clientHeight, _ = s.scrollHeight, R = Math.max(1, D - i.offsetHeight), q = (_ - b) / R;
            s.scrollTop = o + x * q;
        }, u = ()=>{
            e = !1, document.body.style.userSelect = "";
        };
        window.addEventListener("resize", ()=>{
            n(), h();
        }), window.addEventListener("mousemove", m, {
            passive: !1
        }), window.addEventListener("touchmove", m, {
            passive: !1
        }), window.addEventListener("mouseup", u), window.addEventListener("touchend", u), new MutationObserver(()=>{
            n();
        }).observe(document.body, {
            attributes: !0,
            subtree: !0,
            attributeFilter: [
                "class"
            ]
        }), n();
    }
    Gt();
    function qt(r) {
        let s = 0;
        document.addEventListener("visibilitychange", ()=>{
            if (document.visibilityState === "hidden") {
                const i = Date.now();
                if (i - s > 1500) {
                    s = i;
                    try {
                        r.saveLocalData(), r.saveNetworkData({
                            flush: !1
                        }).catch(()=>{});
                    } catch  {}
                }
            }
        }, {
            capture: !0
        });
        function t() {
            try {
                r.saveLocalData(), r.saveNetworkData({
                    flush: !0
                }).catch(()=>{});
            } catch  {}
        }
        window.addEventListener("pagehide", t, {
            capture: !0
        }), window.addEventListener("beforeunload", ()=>{
            try {
                r.saveLocalData();
            } catch  {}
        }, {
            capture: !0
        });
    }
    qt(B);
});

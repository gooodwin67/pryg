import { _ as ke, __tla as __tla_0 } from "./index-DIof5uIp.js";
import { B as Ds, a as ds, P as Me, N as Ae, b as Zs, c as Hs, C as ee, M as Ls, d as vs, V as m, e as ze, W as Be, f as fs, Q as ks, g as Te, h as is, i as js, j as ps, G as Qs, E as J, k as os, D as Pe, S as Ee, l as He, m as le, I as ts, n as as, o as Fe, p as Ns, O as te, R as _s, q as Ts, r as Re, s as Ie, A as Es, t as N, u as Ne, v as Ge, w as qe, x as We, y as Ue, H as Oe, z as Ve, F as Ye, L as $e, J as Ke, T as Ce, K as Xe, U as Je, X as re, Y as he, Z as Ze, _ as Qe, $ as de, a0 as ce, a1 as st, a2 as et, a3 as tt, a4 as at, a5 as it, a6 as ot, a7 as nt, a8 as lt } from "./three-DOpQIdiv.js";
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
    function pe(r) {
        return r.reduce((s, a)=>s | 1 << a, 0);
    }
    function Fs(r, s) {
        const a = pe(r), i = pe(s);
        return "0x" + ((a & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
    }
    function ue(r) {
        const s = r.collisionGroups(), a = s >>> 16 & 65535, i = s & 65535;
        function e(t) {
            const o = [];
            for(let n = 0; n < 16; n++)t & 1 << n && o.push(n);
            return o;
        }
        return [
            e(a),
            e(i)
        ];
    }
    function ht(r) {
        return typeof r == "number" ? new m(r, r, r) : r?.isVector3 ? r : new m(r?.x ?? 1, r?.y ?? 1, r?.z ?? 1);
    }
    function me(r) {
        return r?.userData?.id ?? r?.uuid ?? r?.id;
    }
    const dt = new fs(new m(-.5, -.5, -.5), new m(.5, .5, .5)), ye = new Te, be = new ks;
    function ge(r) {
        if (r?.isObject3D) {
            if (r.updateMatrixWorld(!0), r.geometry?.isBufferGeometry) {
                const e = r.geometry;
                if (e.boundingBox || e.computeBoundingBox(), e.boundingBox) {
                    const t = e.boundingBox.clone();
                    return t.applyMatrix4(r.matrixWorld), t;
                }
            }
            return new fs().setFromObject(r);
        }
        const s = r.position ?? r.pos ?? new m, a = ht(r.size ?? 1), i = r.quaternion?.isQuaternion ? r.quaternion : r.rotation?.isEuler ? be.setFromEuler(r.rotation) : be.set(0, 0, 0, 1);
        return ye.compose(s, i, a), dt.clone().applyMatrix4(ye);
    }
    function V(r, s) {
        const a = ge(r), i = me(r);
        for(let e = s.length - 1; e >= 0; e--){
            const t = s[e], o = me(t);
            if (i !== void 0 && o !== void 0 && i === o) continue;
            if (ge(t).intersectsBox(a)) return t;
        }
        return null;
    }
    function qs(r) {
        r.traverse((a)=>{
            a.userData?.persistent || (a.geometry && a.geometry.dispose(), a.material && (Array.isArray(a.material) ? a.material.forEach((i)=>i.dispose()) : a.material.dispose()), a.material && a.material.map && a.material.map.dispose());
        });
        const s = [];
        for (const a of r.children)a.userData?.persistent || s.push(a);
        s.forEach((a)=>r.remove(a));
    }
    function ct({ scene: r, maxParticles: s = 800, gravity: a = -7.8, drag: i = 2, texture: e = null, pointSize: t = .66, blending: o = Ae } = {}) {
        if (!r) throw new Error("createSplashSystem: scene is required");
        function n() {
            const M = document.createElement("canvas");
            M.width = M.height = 64;
            const H = M.getContext("2d"), T = H.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
            T.addColorStop(0, "rgba(255,255,255,1)"), T.addColorStop(1, "rgba(255,255,255,0)"), H.fillStyle = T, H.fillRect(0, 0, 64, 64);
            const A = new ee(M);
            return A.anisotropy = 1, A.needsUpdate = !0, A;
        }
        const l = e || n(), h = new Float32Array(s * 3), p = new Float32Array(s * 3), u = new Float32Array(s), d = new Float32Array(s), g = new Float32Array(s), c = new Uint8Array(s), f = new Ds;
        f.setAttribute("position", new ds(h, 3)), f.setAttribute("aSize", new ds(g, 1));
        const v = new Me({
            map: l,
            size: t,
            transparent: !0,
            depthWrite: !1,
            blending: o,
            vertexColors: !1,
            sizeAttenuation: !0
        }), x = new Zs(f, v);
        x.userData.persistent = !0, x.frustumCulled = !1, x.position.set(0, -20, 0), r.add(x);
        let y = 0;
        function _() {
            for(let b = 0; b < s; b++){
                const M = (y + b) % s;
                if (!c[M]) return y = (M + 1) % s, M;
            }
            return -1;
        }
        function R(b, M, H, T, A) {
            const U = M * 3;
            b[U] = H, b[U + 1] = T, b[U + 2] = A;
        }
        return {
            trigger (b, M = 1, H = {}) {
                const { count: T = 42, spread: A = .35, up: U = 3, horiz: ms = 2.2, ttl: C = [
                    .35,
                    .8
                ], sizeJitter: j = .5 } = H, $ = Math.max(1, Math.floor(T * M));
                for(let ys = 0; ys < $; ys++){
                    const S = _();
                    if (S === -1) break;
                    const B = Math.sqrt(Math.random()) * A, z = Math.random() * Math.PI * 2, K = B * Math.cos(z), ls = B * Math.sin(z), Q = Math.sqrt(Math.random()), X = Math.cos(z) * ms * Q * (.6 + .4 * Math.random()), ss = Math.sin(z) * ms * Q * (.6 + .4 * Math.random()), es = U * (.6 + .4 * Math.random()), O = C[0] + Math.random() * (C[1] - C[0]), W = (1 - j / 2 + Math.random() * j) * 1;
                    R(h, S, b.x + K, b.y, b.z + ls), R(p, S, X * M, es * M, ss * M), u[S] = O, d[S] = 0, g[S] = W, c[S] = 1;
                }
                f.attributes.position.needsUpdate = !0, f.attributes.aSize.needsUpdate = !0;
            },
            update (b) {
                if (b <= 0) return;
                const M = a, H = Math.max(0, i);
                let T = !1;
                for(let C = 0; C < s; C++){
                    if (!c[C]) continue;
                    if (T = !0, d[C] += b, d[C] >= u[C]) {
                        c[C] = 0;
                        const z = C * 3;
                        h[z] = 1e9, h[z + 1] = 1e9, h[z + 2] = 1e9;
                        continue;
                    }
                    const j = C * 3;
                    p[j + 1] += M * b;
                    const $ = p[j], ys = p[j + 1], S = p[j + 2], B = Math.max(0, 1 - H * b);
                    p[j] = $ * B, p[j + 1] = ys * B, p[j + 2] = S * B, h[j] += p[j] * b, h[j + 1] += p[j + 1] * b, h[j + 2] += p[j + 2] * b;
                }
                T && (f.attributes.position.needsUpdate = !0);
                let A = 0, U = 0;
                for(let C = 0; C < s; C++)c[C] && (A++, U += 1 - d[C] / u[C]);
                const ms = A ? .25 + .75 * (U / A) : 1;
                v.size = t * ms;
            },
            get object3D () {
                return x;
            },
            dispose () {
                r.remove(x), f.dispose(), v.dispose(), e || l.dispose();
            }
        };
    }
    function pt({ scene: r, size: s = 1.5, ttl: a = .9 } = {}) {
        const i = new Hs(1, 1), e = (()=>{
            const g = document.createElement("canvas");
            g.width = g.height = 64;
            const c = g.getContext("2d");
            return c.clearRect(0, 0, 64, 64), c.strokeStyle = "rgba(255,255,255,0.9)", c.lineWidth = 3, c.beginPath(), c.arc(32, 32, 20, 0, Math.PI * 2), c.stroke(), new ee(g);
        })(), t = new Ls({
            map: e,
            transparent: !0,
            depthWrite: !1
        }), o = new vs(i, t);
        o.visible = !1, o.userData.persistent = !0, r.add(o);
        let n = 0, l = !1;
        const h = new m;
        function p(g) {
            h.copy(g), n = 0, l = !0, o.visible = !0;
        }
        function u(g, c) {
            if (!l) return;
            if (n += g, n >= a) {
                l = !1, o.visible = !1;
                return;
            }
            o.position.set(h.x, h.y + .01, h.z), o.rotation.set(-Math.PI / 2, 0, 0);
            const f = n / a, v = s * (1 + 1.6 * f);
            o.scale.setScalar(v), t.opacity = 1 - f;
        }
        function d() {
            r.remove(o), i.dispose(), t.dispose(), e.dispose();
        }
        return {
            trigger: p,
            update: u,
            dispose: d,
            mesh: o
        };
    }
    function ut(r, s, a, i) {
        const e = [];
        r.traverse((l)=>{
            (l.isMesh || l.isSkinnedMesh) && e.push([
                l,
                l.frustumCulled,
                l.visible
            ]);
        });
        const t = r.position.clone(), o = new Set;
        r.traverse((l)=>{
            (l.isMesh || l.isSkinnedMesh) && (Array.isArray(l.material) ? l.material : [
                l.material
            ]).forEach((p)=>{
                p && [
                    "map",
                    "normalMap",
                    "emissiveMap",
                    "metalnessMap",
                    "roughnessMap",
                    "aoMap",
                    "alphaMap",
                    "specularMap",
                    "displacementMap"
                ].forEach((u)=>{
                    p[u] && o.add(p[u]);
                });
            });
        });
        const n = a.getWorldDirection(new m).multiplyScalar(3);
        r.position.copy(a.position).add(n), r.traverse((l)=>{
            (l.isMesh || l.isSkinnedMesh) && (l.frustumCulled = !1, l.visible = !0);
        }), o.forEach((l)=>s.initTexture?.(l)), s.compile(i, a), r.position.copy(t), e.forEach(([l, h, p])=>{
            l.frustumCulled = h, l.visible = p;
        }), s.shadowMap && (s.shadowMap.needsUpdate = !0);
    }
    function mt(r, s, a) {
        const i = r.localClippingEnabled, e = r.clippingPlanes ? r.clippingPlanes.slice() : [];
        r.localClippingEnabled = !0, r.clippingPlanes = [
            new ze(new m(0, 1, 0), -1e9)
        ], r.compile(s, a), r.clippingPlanes = e, r.localClippingEnabled = i;
    }
    function yt(r, s, a, i) {
        if (!r) return;
        const e = s.getRenderTarget(), t = !!s.shadowMap, o = t ? s.shadowMap.autoUpdate : !1;
        t && (s.shadowMap.autoUpdate = !1);
        const n = r.visible;
        r.visible = !0;
        const l = new Be(1, 1, {
            depthBuffer: !1,
            stencilBuffer: !1
        });
        s.setRenderTarget(l), s.render(a, i), s.setRenderTarget(e), l.dispose(), r.visible = n, t && (s.shadowMap.autoUpdate = o, s.shadowMap.needsUpdate = !0);
    }
    class bt {
        constructor(s, a, i, e, t, o, n){
            this.dataClass = s, this.scene = a, this.audioClass = i, this.levelClass = e, this.paramsClass = t, this.camera = o, this.gameClass = n, this.playerHeight = .9, this.playerWidth = .5, this.player = new vs(new is(this.playerWidth, this.playerHeight, this.playerWidth), new js({
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
            await new Qs().loadAsync("models/players/player1.glb").then((i)=>{
                const e = i.scene;
                this.playerModel = e, this.playerModel.traverse(function(t) {
                    t.isMesh && (t.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(t) {
                    t.isMesh && (t.castShadow = !0);
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
            }), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), V(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, a] = ue(this.player.userData.collider);
                a[0] == 0 && this.player.userData.collider.setCollisionGroups(Fs([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, a] = ue(this.player.userData.collider);
                a[0] != 0 && this.player.userData.collider.setCollisionGroups(Fs([
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
            ]), this.reLiveField(), V(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new m(this.player.userData.body.translation().x, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - 13 && this.player.userData.live && this.camera.position.y > 10 && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new m(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && (this.audioClass.stopMusic([
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
                ]), this.dataClass.levelCoopMode == "coop" ? (this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : this.dataClass.levelCoopMode == "contest" && (this.levelClass.players.some((s)=>s.player.userData.finish) ? (this.levelClass.showPopupInGame(!1, !0), this.levelClass.players.forEach((s, a, i)=>{
                    s.player.userData.finish && (this.dataClass.table.levelsStatusContest[this.levelClass.levelsMode - 1] = a + 1, this.dataClass.loadLevelsContest());
                })) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0))), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, a, i)=>{
                    s.userData.fly = !1;
                }), this.playerAliving(!1), this.audioClass.musicOn && this.audioClass.playMusic([
                    "back"
                ]), this.audioClass.musicOn && this.levelClass.worldClass.rain && this.audioClass.playMusic([
                    "rain"
                ])), !this.player.userData.live || this.player.userData.finish) {
                    if (this.player.userData.body.setLinvel(new m(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos) {
                        const s = this.levelClass.objs.grassPlanes.data;
                        for(let a = 0; a < s.length - 1; a++){
                            const i = s[a];
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
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, a = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, e = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, t = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, l = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, t, .1), this.head.position.y = this.lerp(this.head.position.y, l, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const p = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, p, .4);
                const u = this.player.userData.readyJump ? .71 : 0;
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
                const s = this.levelClass.boostHatModels[this.player.userData.canFlyNum], a = this.player.userData.head;
                s.userData.originalScale || (s.userData.originalScale = s.scale.clone()), s.parent !== this.scene && this.scene.attach(s), this.playerModel.updateMatrixWorld(!0), a.updateWorldMatrix(!0, !1);
                const i = new m().setFromMatrixPosition(this.player.userData.head.matrixWorld), e = new ks;
                this.player.userData.head.getWorldQuaternion(e);
                const t = new ks().setFromEuler(new J(0, Math.PI / 2, 0)), o = e.clone().multiply(t), l = new m(.01, .14, .05).clone().applyQuaternion(o);
                s.quaternion.copy(o), s.position.copy(i).add(l), s.children[0].children[1].rotation.y += .4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
            } else {
                const s = this.player.userData.canFlyNum;
                if (s !== null && this.levelClass.boostHatModels[s]) {
                    const a = this.levelClass.boostHatModels[s];
                    a.userData.lastPos && (a.position.copy(a.userData.lastPos), a.quaternion.copy(a.userData.lastQuat)), a.userData.fly = !1, a.children[0].children[1].rotation.y += .02;
                }
            }
        }
        lerp(s, a, i) {
            return s + (a - s) * i;
        }
        playerAliving(s) {
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, s && (this.levelClass.reloadLevel(this.levelClass.players.findIndex((a, i, e)=>a.player == this.player)), this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.levelClass.levelsMode ? this.player.userData.lives = 1 : this.player.userData.lives = this.player.userData.maxLives, this.reLiveField(), this.player.userData.score = 0), setTimeout(()=>{
                this.gameClass.gameStarting = !0, this.player.userData.splash = !1;
            }, 100);
        }
        reLiveField() {
            let s = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((i, e, t)=>i.player == this.player)].children, a = document.querySelectorAll(".num_bonus_heart")[this.levelClass.players.findIndex((i, e, t)=>i.player == this.player)];
            for(let i = 0; i < s.length; i++)i > this.player.userData.lives - 1 ? s[i].classList.add("opacity_my-screen") : s[i].classList.contains("opacity_my-screen") && s[i].classList.remove("opacity_my-screen");
            this.player.userData.lives > 3 ? (a.classList.contains("opacity_my-screen") && a.classList.remove("opacity_my-screen"), a.textContent = this.player.userData.bonusHeart) : a.classList.contains("opacity_my-screen") || a.classList.add("opacity_my-screen");
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
            },
            leaderboard: {
                mine: "Мой рекорд"
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
            },
            leaderboard: {
                mine: "My record"
            }
        }
    };
    function fe(r, s) {
        return s.split(".").reduce((a, i)=>a && a[i], r);
    }
    function Ws(r = "ru", s = document) {
        const a = Rs[r] || Rs.ru;
        if (s.querySelectorAll("[data-i18n]").forEach((e)=>{
            const t = e.dataset.i18n, o = fe(a, t);
            o != null && (e.textContent = o);
        }), document.documentElement.lang = r, localStorage.setItem("locale", r), document.getElementById("lang-toggle")) {
            const e = document.getElementById("flag");
            fe(a, "ui.langToggle") === "ru" || r === "ru" ? (e.classList.remove("us"), e.classList.add("ru"), e.src = "images/ru.svg") : (e.classList.remove("ru"), e.classList.add("us"), e.src = "images/us.svg");
        }
    }
    function gt(r, s) {
        if (s != null) Ws(s);
        else {
            const i = localStorage.getItem("locale") || "ru";
            Ws(i);
        }
        const a = document.getElementById("lang-toggle");
        document.getElementById("flag"), a && a.addEventListener("click", ()=>{
            const e = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
            Ws(e), r();
        });
    }
    function k(r, s = "") {
        const a = localStorage.getItem("locale") || "ru", i = Rs[a] || Rs.ru;
        return r.split(".").reduce((t, o)=>t && t[o], i) ?? s;
    }
    const ft = new Set([
        "Мой рекорд",
        "My record"
    ]), ve = (r)=>r?.isMine === !0 || r?.name === k("hud.mineRecord", "Мой рекорд") || ft.has(r?.name);
    class vt {
        constructor(s, a, i, e, t, o, n, l, h, p, u, d, g, c, f, v){
            this.scene = s, this.audioClass = a, this.physicsClass = i, this.renderer = e, this.camera = t, this.isMobile = o, this.paramsClass = n, this.worldClass = l, this.initMatch = h, this.gameClass = u, this.splash = d, this.ring = g, this.dataClass = p, this.scoreClass = c, this.menuClass = f, this.assetsManager = v, this.playersLoaded = !1, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = this.dataClass.allLevels, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new os(16777215), this._nightColor = new os(16771488), this.mksWidth = 100, this.mksHeight = 100, this.geometryPlane = new Hs(this.mksWidth, this.mksHeight), this.materialPlane = new Ls({
                color: 0,
                side: Pe
            }), this.mks = new vs(this.geometryPlane, this.materialPlane), this.mks.position.z = -550, this.isMobile ? this.mks.position.y = 100 : this.mks.position.y = 140, this.mks.layers.set(1);
            const x = new Ee, y = .01;
            x.moveTo(5 * y, 5 * y), x.bezierCurveTo(5 * y, 5 * y, 4 * y, 2 * y, 0 * y, 2 * y), x.bezierCurveTo(-6 * y, 2 * y, -6 * y, 7 * y, -6 * y, 7 * y), x.bezierCurveTo(-6 * y, 10 * y, -3 * y, 14 * y, 5 * y, 18 * y), x.bezierCurveTo(12 * y, 14 * y, 16 * y, 10 * y, 16 * y, 7 * y), x.bezierCurveTo(16 * y, 7 * y, 16 * y, 2 * y, 10 * y, 2 * y), x.bezierCurveTo(7 * y, 2 * y, 5 * y, 5 * y, 5 * y, 5 * y);
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
                    }, (b, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new J(0, 0, 0),
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
                    geometryPlane: new is(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new js({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (b, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new J(0, 0, 0),
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
                    }, (b, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new J(0, 0, 0),
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
                    }, (b, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new J(0, 0, 0),
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
                    }, (b, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new J(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(.1, 2, .1),
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
                    }, (b, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new J(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(.6, .6, .6),
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
                    }, (b, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new J(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(.3, .3, .3),
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
                    }, (b, M)=>({
                            position: new m(0, -10, 0),
                            rotation: new J(0, 0, 0),
                            scale: new m(1, 1, 1),
                            size: new m(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new m(0, -10, 0)
                            }
                        })),
                    geometryLivesBlock: new He(x, _),
                    materialLivesBlock: new ps({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new ts(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(as), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new ts(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(as), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new ts(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(as), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new ts(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(as), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new ts(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(as), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new ts(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(as), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new ts(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(as), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new ts(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(as), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (b)=>{
                b.uniforms.fresnelPower = {
                    value: 2.5
                }, b.fragmentShader = b.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const R = new Float32Array(this.count);
            for(let b = 0; b < this.count; b++)R[b] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Fe(R, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (b)=>{
                b.vertexShader = `
    attribute float aEmissive;
    varying float vEmissive;
  ` + b.vertexShader.replace("#include <begin_vertex>", `
      #include <begin_vertex>
      vEmissive = aEmissive;
    `), b.fragmentShader = `
    varying float vEmissive;
  ` + b.fragmentShader.replace("#include <lights_fragment_begin>", `
      #include <lights_fragment_begin>
      // усиливаем эмиссию в зависимости от инстанса
      totalEmissiveRadiance *= vEmissive;
    `);
            }, this.objs.bulbs.materialBulb.needsUpdate = !0;
            function q(b = 64) {
                const M = document.createElement("canvas");
                M.width = M.height = b;
                const H = M.getContext("2d"), T = H.createRadialGradient(b / 2, b / 2, 0, b / 2, b / 2, b / 2);
                T.addColorStop(0, "rgba(255, 235, 175, 1)"), T.addColorStop(1, "rgba(255, 235, 175, 0)"), H.fillStyle = T, H.fillRect(0, 0, b, b);
                const A = new ee(M);
                return A.anisotropy = 1, A.generateMipmaps = !1, A.needsUpdate = !0, A;
            }
            this._glowTex = q(), this._emissive = R, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new m(-1, 0, 0), this.rightEdge = new m(1, 0, 0), this.leftEdge.unproject(t), this.rightEdge.unproject(t), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Ns, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new m(s, s, s) : s?.isVector3 ? s : s ? new m(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new m(1, 1, 1);
        }
        apply(s, a, i) {
            let e = i.userData.invBaseSize;
            if (!e) {
                const l = i.geometry;
                l.computeBoundingBox();
                const h = new m;
                l.boundingBox.getSize(h), e = i.userData.invBaseSize = new m(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new te;
            const t = this._dummy, o = a[s] || {}, n = this.toVec3(o.size);
            t.position.copy(o.position || new m), o.rotation ? t.rotation.copy(o.rotation) : t.rotation.set(0, 0, 0), t.scale.set(n.x * e.x, n.y * e.y, n.z * e.z), t.updateMatrix(), i.setMatrixAt(s, t.matrix);
        }
        async loadTexture() {
            (()=>{
                let s = this.assetsManager.plane.texture, a = this.assetsManager.plane.material;
                s.wrapS = _s, s.wrapT = _s, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = a;
            })(), (()=>{
                let s = this.assetsManager.planeGrass.texture, a = this.assetsManager.planeGrass.material;
                s.wrapS = _s, s.wrapT = _s, s.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = a;
            })(), (()=>{
                this.assetsManager.mks.texture;
                let s = this.assetsManager.mks.material;
                this.mks.material = s;
            })();
        }
        async loadBarriers() {
            let s = new is(.5, .7, 1), a = new Ls({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new vs(s, a), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = L(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, document.querySelector(".lev_hud span").textContent = s, await this.loadTexture(), await this.loadBarriers(), this.boostHatModel = this.assetsManager.boostHatModel, this.boostHatPropeller = this.assetsManager.boostHatPropeller, this.boostHatMesh = this.assetsManager.boostHatMesh, this.birdYes && (this.angryBirdModel = this.assetsManager.angryBirdModel, this.scene.add(this.angryBirdModel), ut(this.angryBirdModel, this.renderer, this.camera, this.scene)), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((a, i, e)=>{
                document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
            }), this.getHorizontalWorldBounds(), this.cameraMove(this.camera), s) {
                this.isMobile ? this.getHorizontalWorldBounds() : this.getHorizontalWorldBounds(-7);
                let a = -2.5, i = -5, e = !1;
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
                    for(let t = 0; t < this.count; t++){
                        let o = L(this.planeWidth, this.planeWidth - 1), n = a + o / 2 + L(this.fixedDistanceHor.min, this.fixedDistanceHor.max), l = L(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e && (o = e[t]), t == 0 ? (this.objs.planes.data[t].size.x = this.planeWidth, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.planes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[t].size.x = this.planeWidth + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : t == 1 ? (this.objs.planes.data[t].size.x = o, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = o + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = o + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : t == this.count - 1 ? (e ? this.objs.planes.data[t].size.x = e[e.length - 1] - .2 : this.objs.planes.data[t].size.x = 5, this.objs.planes.data[t].size.y = this.planeHeight, e ? this.objs.topPlanes.data[t].size.x = e[e.length - 1] : this.objs.topPlanes.data[t].size.x = 5 + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, e ? this.objs.grassPlanes.data[t].size.x = e[e.length - 1] : this.objs.grassPlanes.data[t].size.x = 5 + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[t].size.x = o, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = o + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = o + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), t == 0 ? (l = 1 - this.planeHeight / 1.5, this.objs.planes.data[t].position.x = 0, this.objs.planes.data[t].position.y = l + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[t].position.x = 0, this.objs.topPlanes.data[t].position.y = l + this.planeHeight / 1.5 + .2 - 1.5, this.objs.grassPlanes.data[t].position.x = 0, this.objs.grassPlanes.data[t].position.y = l + this.planeHeight / 1.5 - 1.5) : t == 1 ? (this.objs.planes.data[t].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[t].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[t].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[t].position.y = l + this.planeHeight / 1.5) : (this.objs.planes.data[t].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[t].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[t].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[t].position.y = l + this.planeHeight / 1.5), this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 4, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new Ts(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(t, this.objs.planes.data, this.objs.planes.plane), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n + o / 2;
                    }
                    for(let t = 0; t < this.count; t++)t > 1 && t < this.count - 1 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[t - 1].userData.moveHor && (this.objs.grassPlanes.data[t].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[t - 1].position.x,
                        x2: this.objs.grassPlanes.data[t + 1].position.x,
                        w1: this.objs.grassPlanes.data[t - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[t + 1].size.x / 2
                    }, this.objs.planes.data[t].position.y = -10), t > 1 && t < this.count - 1 && Math.random() < this.randomAnimateVert && (this.objs.grassPlanes.data[t].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[t - 1].position.x,
                        x2: this.objs.grassPlanes.data[t + 1].position.x,
                        w1: this.objs.grassPlanes.data[t - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[t + 1].size.x / 2
                    }, this.objs.planes.data[t].position.y = -10);
                } else if (this.paramsClass.gameDir == "vert") {
                    this.birdYes = !1;
                    for(let t = 0; t < this.count; t++){
                        let o = L(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        e && (o = e[t]), this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[t].userData.direction = 1 : this.objs.grassPlanes.data[t].userData.direction = -1;
                        let n = i + L(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[t].position.y = n - 1.3, this.objs.grassPlanes.data[t].position.y = n, this.objs.sensorPlanes.data[t].position.y = n - .3, this.objs.topPlanes.data[t].size.y = .3, this.objs.grassPlanes.data[t].size.y = .7, this.objs.sensorPlanes.data[t].size.y = .9, t > 0 ? (this.objs.topPlanes.data[t].size.x = o + .3, this.objs.grassPlanes.data[t].size.x = o + .3, this.objs.sensorPlanes.data[t].size.x = o + .7) : (this.objs.topPlanes.data[t].size.x = 10, this.objs.grassPlanes.data[t].size.x = 10, this.objs.sensorPlanes.data[t].size.x = 10), this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 4, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.grassPlanes.data[t].userData.speed = L(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const l = new Ts(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.isMobile ? this.getHorizontalWorldBounds() : this.getHorizontalWorldBounds(-7);
            } else switch(this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let a = -2.5;
                    for(let e = 0; e < this.count; e++){
                        let t = L(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = a + t / 2 + L(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = L(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, e > this.count - 20 ? (this.objs.planes.data[e].size.x = .1, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = .2 + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = .2 + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e > 0 ? (this.objs.planes.data[e].size.x = t, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = t + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = t + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (n = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = n + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2 - 1.5, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5 - 1.5) : e == 1 ? (o = 6, this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5) : e > 1 && (this.objs.planes.data[e].position.x = o, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 4, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new Ts(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), a = o + t / 2;
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
                        let t = this.boostHatModel.clone();
                        t.position.x = this.objs.grassPlanes.data[e].position.x, t.position.y = this.objs.topPlanes.data[e].position.y + 2, t.rotation.y = -Math.PI / 2, t.userData.num = e, this.boostHatModels.push(t), this.boostHatMeshes.push(t.children[0].children[0].children[0]), this.boostHatCoords.push([
                            t.position.x,
                            t.position.y
                        ]), this.scene.add(t);
                    }
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.livesBlocks.livesBlock), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let i = -5;
                    this.birdYes = !1;
                    for(let e = 0; e < this.count; e++){
                        let t = L(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[e].userData.direction = 1 : this.objs.grassPlanes.data[e].userData.direction = -1;
                        let o = i + L(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[e].position.y = o - 1.3, this.objs.grassPlanes.data[e].position.y = o, this.objs.sensorPlanes.data[e].position.y = o - .3, this.objs.topPlanes.data[e].size.y = .3, this.objs.grassPlanes.data[e].size.y = .7, this.objs.sensorPlanes.data[e].size.y = .9, e > this.count - 20 && (this.objs.topPlanes.data[e].size.x = t / 8 + .1, this.objs.grassPlanes.data[e].size.x = t / 8 + .1, this.objs.sensorPlanes.data[e].size.x = t / 8 + .4), e > 0 ? (this.objs.topPlanes.data[e].size.x = t + .3, this.objs.grassPlanes.data[e].size.x = t + .3, this.objs.sensorPlanes.data[e].size.x = t + .7) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), e > this.count - 10 ? this.objs.grassPlanes.data[e].userData.speed = L(10, 14) / 100 : this.objs.grassPlanes.data[e].userData.speed = L(6, 10) / 100, this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 4, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, (e + 1) % 7 === 0) {
                            let n = this.boostHatModel.clone();
                            n.position.x = L(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[e].position.y + .5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                                n.position.x,
                                n.position.y
                            ]), this.scene.add(n);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const n = new Ts(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), i = o;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.scene.add(this.mks);
                    break;
            }
            this.players.forEach((a, i, e)=>{
                a.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y, (s || this.paramsClass.gameDir == "vert") && (a.player.userData.lives = 1, a.reLiveField());
            });
        }
        getHorizontalWorldBounds(s = 0) {
            const a = new m(-1, 0, .5), i = new m(1, 0, .5), e = new m(0, 1, .5), t = new m(0, -1, .5);
            if (a.unproject(this.camera), i.unproject(this.camera), e.unproject(this.camera), t.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = a.clone().sub(o).normalize(), l = i.clone().sub(o).normalize(), h = e.clone().sub(o).normalize(), p = t.clone().sub(o).normalize(), u = (s - o.z) / n.z, d = (s - o.z) / p.z, g = o.clone().add(n.multiplyScalar(u)), c = o.clone().add(l.multiplyScalar(u)), f = o.clone().add(h.multiplyScalar(d)), v = o.clone().add(p.multiplyScalar(d));
                this.bounds = {
                    leftX: g.x,
                    rightX: c.x,
                    topY: f.y,
                    bottomY: v.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let s = !1;
                for(let a = 0; a < this.objs.grassPlanes.data.length; a++){
                    const i = this.objs.grassPlanes.data[a], e = i.userData.body, t = i.userData.moveHor, o = i.userData.moveVert;
                    if (e && (t || o)) {
                        if (t) {
                            const n = e.translation(), l = t.x1 + t.w1 + i.size.x * .5, h = t.x2 - t.w2 - i.size.x * .5, p = i.userData.speed ?? .05;
                            n.x >= h && (i.userData.direction = -1), n.x <= l && (i.userData.direction = 1);
                            const u = i.userData.direction * p, d = n.x + u;
                            e.setNextKinematicTranslation({
                                x: d,
                                y: n.y,
                                z: n.z
                            }), i.position.x = d, this.objs.lamps.data[a].position.x = d, this.objs.plafons.data[a].position.x = d, this.objs.bulbs.data[a].position.x = d, this.objs.topPlanes.data[a].position.x = d;
                        } else if (o) {
                            const n = e.translation(), l = 2, h = .5, p = i.userData.speed ?? .03;
                            n.y >= l && (i.userData.direction = -1), n.y <= h && (i.userData.direction = 1);
                            const u = i.userData.direction * p, d = n.y + u;
                            e.setNextKinematicTranslation({
                                x: n.x,
                                y: d,
                                z: n.z
                            }), i.position.y = d, this.objs.lamps.data[a].position.y = d + this.objs.lamps.lampHeight, this.objs.plafons.data[a].position.y = d + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[a].position.y = d + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[a].position.y = d + .2;
                        }
                    }
                    for(let n = 0; n < this.objs.livesBlocks.data.length; n++)this.objs.livesBlocks.data[n].userData.taked ? this.objs.livesBlocks.data[n].position.y < 10 ? (this.objs.livesBlocks.data[n].position.y += .001, this.objs.livesBlocks.data[n].rotation.y += .004) : this.objs.livesBlocks.data[n].userData.taked = !1 : this.objs.livesBlocks.data[n].rotation.y += 4e-4, this.apply(n, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), s = !0;
                }
                s && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let s = 0; s < this.objs.grassPlanes.data.length; s++){
                    const a = this.objs.grassPlanes.data[s], i = this.objs.topPlanes.data[s];
                    this.objs.sensorPlanes.data[s], this.objs.lamps.data[s], this.objs.plafons.data[s], this.objs.bulbs.data[s];
                    const e = a.userData.body, t = a.userData.speed, o = e.translation();
                    o.x > this.bounds.rightX - a.size.x / 2 ? a.userData.direction = -1 : o.x < this.bounds.leftX + a.size.x / 2 && (a.userData.direction = 1);
                    const n = a.userData.direction * t, l = o.x + n;
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new os(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new os(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new os(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.levelsMode || (this.paramsClass.gameDir == "hor" ? this.scoreClass.updateMetersFloat(null, this.players, "hor") : this.scoreClass.updateMetersFloat(null, this.players, "vert")), this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, a, i)=>{
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
            const s = new Re(new Ie({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: Es
            }));
            return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
        }
        lampsAnimate() {
            let s = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.x - this.bounds.rightX / 1.3, i = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((e, t)=>{
                    e.pointLight;
                    const o = e.position.x >= a && e.position.x <= i, n = t;
                    if (o && !e.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        e.pointLight = l, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const l = e.pointLight;
                        l.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 2), e.glow.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 0);
                        const h = o ? this.lightIntensity : 0;
                        l.intensity = N.lerp(l.intensity, h, .15);
                        const p = o ? 1 : 0;
                        this._emissive[n] = N.lerp(this._emissive[n], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .5 + this._emissive[n] * .8;
                        e.glow && e.glow.scale.setScalar(u);
                        const d = 1.1, g = this._emissive[n], c = 1 + d * g, f = this.objs.bulbs.baseSize, v = this.objs.bulbs.data[n];
                        v.userData._lastBulbFactor !== c && (v.size.set(f.x * c, f.y * c, f.z * c), this.apply(n, this.objs.bulbs.data, this.objs.bulbs.bulb), v.userData._lastBulbFactor = c, s = !0), !o && l.intensity <= .01 && this._emissive[n] <= .02 && (this.lights.push(l), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((i, e)=>{
                    const t = i.pointLight;
                    if (t) {
                        const u = this.objs.lamps.data[e].position;
                        t.position.set(u.x, u.y + 1, u.z + 2), i.glow && i.glow.position.set(u.x, u.y + 1, u.z), t.intensity = N.lerp(t.intensity, 0, .2), t.intensity <= .01 && (t.intensity = 0, this.lights.push(t), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null));
                    }
                    this.objs.plafons.plafon.setColorAt(e, this._dayColor), a = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0);
                    const o = 1.1, n = this._emissive[e], l = 1 + o * n, h = this.objs.bulbs.baseSize, p = this.objs.bulbs.data[e];
                    p.userData._lastBulbFactor !== l && (p.size.set(h.x * l, h.y * l, h.z * l), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), p.userData._lastBulbFactor = l, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.y - this.bounds.topY / 1, i = this.camera.position.y + this.bounds.topY * .8;
                this.objs.plafons.data.forEach((e, t)=>{
                    e.pointLight;
                    const o = e.position.y >= a && e.position.y <= i, n = t;
                    if (o && !e.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        e.pointLight = l, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const l = e.pointLight;
                        l.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 2), e.glow.position.copy(e.position);
                        const h = o ? this.lightIntensity : 0;
                        l.intensity = N.lerp(l.intensity, h, .15);
                        const p = o ? 1 : 0;
                        this._emissive[n] = N.lerp(this._emissive[n], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .8 + this._emissive[n] * .8;
                        e.glow && e.glow.scale.setScalar(u);
                        const d = 1, g = this._emissive[n], c = 1 + d * g, f = this.objs.bulbs.baseSize, v = this.objs.bulbs.data[n];
                        v.userData._lastBulbFactor !== c && (v.size.set(f.x * c, f.y * c, f.z * c), this.apply(n, this.objs.bulbs.data, this.objs.bulbs.bulb), v.userData._lastBulbFactor = c, s = !0), !o && l.intensity <= .01 && this._emissive[n] <= .02 && (this.lights.push(l), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((i, e)=>{
                    const t = i.pointLight;
                    !i.pointLight && this._emissive[e] === 0 || (t && (t.intensity = N.lerp(t.intensity, 0, 1), t.intensity <= .01 && (t.intensity = 0, this.lights.push(t), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), a = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0));
                }), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed(s = !1) {
            let a;
            if (s ? a = this.players.filter((t, o, n)=>t.player.userData.live) : a = this.players, a.length === 0) return -1;
            let i = 0, e;
            this.paramsClass.gameDir == "vert" ? e = a[0].player.position.y : e = a[0].player.position.x;
            for(let t = 1; t < a.length; t++)a[t].player && a[t].player.userData.live && a[t].player.position && (this.paramsClass.gameDir == "vert" ? a[t].player.position.y > e && (e = a[t].player.position.y, i = t) : a[t].player.position.x > e && (e = a[t].player.position.x, i = t));
            return s ? this.players.indexOf(a[i], 0) : i;
        }
        async loadPlayers() {
            this.reloadLevel();
            for(let s = 0; s < this.players.length; s++){
                let a = this.players[s];
                this.levelsMode || a.reLiveField(), a.player.position.x = a.player.position.x - s * 1 + 1, this.physicsClass.addPhysicsToObject(a.player), this.paramsClass.gameDir == "vert" && (a.player.position.y = -0, a.player.userData.collider.setFriction(500)), await a.loadPlayerModel(), a.player.userData.startPos = a.player.position.clone(), this.scene.add(a.player), this.scene.add(a.playerOut), this.scene.add(a.playerModel), this.playerOuts.push(a.playerOut), s < this.players[0].playerColors.length ? a.head.children[0].material.color.set(this.players[0].playerColors[s]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), a.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > s ? a.player.userData.audio.push(this.audioClass.quacks[s].clone()) : a.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
            this.playersLoaded = !0;
        }
        cameraMove(s, a = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.gameClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = this.isMobile ? 2.5 : 3, s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const i = Math.max(0, this.maxSpeed(!0));
                        if (i >= 0 && !this.worldClass.thunder || this.levelsMode) {
                            let e = 0;
                            this.players.filter((n)=>n.player.userData.live).length != 1 ? e = this.players[i].player.position.x : this.paramsClass.gameDir == "hor" && (e = this.players[i].player.position.x + this.bounds.rightX / 2);
                            const t = this.cam.maxBackJump;
                            e < this.cam.targetX - t ? this.cam.targetX = this.cam.targetX - t : this.cam.targetX = e;
                            const o = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .35, a);
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
        damp(s, a, i, e) {
            return s + (a - s) * (1 - Math.exp(-i * e));
        }
        spring(s, a, i, e, t) {
            const o = 2 / e, n = o * t, l = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = s - a;
            const p = (i + o * h) * t, u = (i - o * p) * l;
            return {
                newPos: a + (h + p) * l,
                newVel: u
            };
        }
        async showPopupInGame(s = !1, a = !1) {
            this.hideScreen("popup_game_btn_close"), this.hideScreen("menu_in_game");
            let i = 0;
            if (this.scoreClass.score > this.scoreClass.myRec && (this.scoreClass.myRec = this.scoreClass.score, i++), this.scoreClass.score > this.scoreClass.worldRec && (this.scoreClass.worldRec = this.scoreClass.score, i++), i) {
                if (this.paramsClass.gameDir === "hor") {
                    const n = this.dataClass.table.hor[this.players.length - 1].find(ve);
                    n && (n.rec = this.scoreClass.score), await this.dataClass.submitMyScore(ysdk, `ocean${this.players.length}`, this.scoreClass.score);
                } else if (this.paramsClass.gameDir === "vert") {
                    const n = this.dataClass.table.vert[this.players.length - 1].find(ve);
                    n && (n.rec = this.scoreClass.score), await this.dataClass.submitMyScore(ysdk, `space${this.players.length}`, this.scoreClass.score);
                }
                await this.dataClass.saveTableToCloud();
                const e = this.paramsClass.gameDir === "hor" ? "hor" : "vert", t = this.players.length - 1;
                this.dataClass.updateLocalTop3(e, t, this.scoreClass.myRec), await this.dataClass.refreshMineLabels(), this.menuClass.loadRecsData(), this.paramsClass.gameDir === "hor" ? this.scoreClass.loadRecsToHud(0, this.players.length - 1) : this.scoreClass.loadRecsToHud(1, this.players.length - 1);
            }
            if (this.audioClass.oceanAudio.isPlaying && this.audioClass.oceanAudio.stop(), this.audioClass.rainAudio.isPlaying && this.audioClass.rainAudio.stop(), this.gameClass.pause) document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn15"), this.hideScreen("popup_game_btn1"), this.levelsMode && this.showScreen("popup_game_btn4");
            else if (this.gameClass.showGamePopup = !0, !this.levelsMode) !s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play();
            else if (this.players.every((e)=>e.player.userData.finish) && this.dataClass.levelCoopMode == "coop" || this.players.some((e)=>e.player.userData.finish) && this.dataClass.levelCoopMode == "contest") {
                if (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.audioClass.winAudio.isPlaying && this.audioClass.winAudio.stop(), this.audioClass.musicOn && this.audioClass.winAudio.play(), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15"), this.hideScreen("popup_game_btn4"), this.dataClass.levelCoopMode == "coop") {
                    let e = !1, t = !1;
                    this.players.forEach((o, n, l)=>{
                        this.levelsMode == this.allLevels && (this.dataClass.table.player.bonusHeart[n] = 10, e = !0), this.levelsMode + 1 > this.dataClass.table.player.levels[n] && (this.dataClass.table.player.levels[n] = this.levelsMode, t = !0);
                    }), (e || t) && (await this.dataClass.saveTableToCloud(), await this.dataClass.loadTableFromCloud(), await this.dataClass.loadLevels(this.players.length - 1));
                } else this.dataClass.levelCoopMode == "contest" && this.players.forEach(async (e, t, o)=>{
                    e.player.userData.finish && this.dataClass.table.levelsStatusContest[this.levelsMode - 1] != t + 1 && (this.dataClass.table.levelsStatusContest[this.levelsMode - 1] = t + 1, await this.dataClass.saveTableToCloud());
                });
                this.dataClass.loadLevels(this.players.length - 1);
            } else this.hideScreen("popup_game_btn15"), this.showScreen("popup_game_btn4"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win");
            this.showScreen("popup_in_game"), this.gameClass.gameStarting = !1;
        }
        async reloadLevel(s = -1) {
            if (this.paramsClass.gameDir == "hor" && !this.levelsMode) {
                let a = !1;
                if (s >= 0) {
                    let i = this.players[s];
                    this.dataClass.table.player.bonusHeart[s] ? (i.player.userData.maxLives = 4, i.player.userData.lives = i.player.userData.maxLives, i.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[s], this.dataClass.table.player.bonusHeart[s]--, a = !0) : (i.player.userData.maxLives = 3, i.player.userData.lives = i.player.userData.maxLives);
                } else {
                    let i = [
                        0,
                        -1,
                        1
                    ];
                    for(let e = 0; e < this.players.length; e++){
                        let t = this.players[e], o = Math.floor(Math.random() * i.length);
                        this.levelsMode ? t.player.position.x = i[o] : (t.reLiveField(), t.player.position.x = t.player.position.x - e * .3 + 1), i.splice(o, 1), this.dataClass.table.player.bonusHeart[e] ? (t.player.userData.maxLives = 4, t.player.userData.lives = t.player.userData.maxLives, t.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[e], this.dataClass.table.player.bonusHeart[e]--, a = !0) : (t.player.userData.maxLives = 3, t.player.userData.lives = t.player.userData.maxLives), this.levelsMode || t.reLiveField();
                    }
                }
                a && await this.dataClass.saveTableToCloud();
            }
        }
        rebindButton(s, a) {
            const i = document.querySelector(s), e = i.cloneNode(!0);
            return i.parentNode.replaceChild(e, i), e.addEventListener("click", a), e;
        }
        menuInGame = ()=>{
            async function s() {
                return new Promise((a)=>{
                    ysdk.adv.showFullscreenAdv({
                        callbacks: {
                            onOpen: ()=>console.log("Ad opened"),
                            onClose: (i)=>{
                                console.log("Ad closed", i), a(i);
                            },
                            onError: (i)=>{
                                console.warn("Ad error", i), a(!1);
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
                            console.log("Rewarded!"), this.audioClass.oceanAudio.isPlaying || this.audioClass.oceanAudio.play(), this.boostHatModels.forEach((i, e, t)=>{
                                i.userData.fly = !1;
                            });
                            let a = [];
                            this.players.forEach((i, e, t)=>{
                                a.push(i.player.position.x);
                            }), this.players.forEach((i, e, t)=>{
                                i.playerAliving(!1), i.player.userData.lives = 1, i.player.position.x = Math.max(...a), this.camera.position.x = i.player.position.x;
                            }), this.audioClass.pauseMusic([
                                "back"
                            ]), this.audioClass.playMusic([
                                "back"
                            ]), this.levelsMode || (this.canShowAds = !1), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
                        },
                        onClose: ()=>{
                            console.log("Video ad closed.");
                        },
                        onError: (a)=>{
                            console.log("Error while open video ad:", a);
                        }
                    }
                });
            }), this.rebindButton(".popup_game_btn2", async ()=>{
                this.audioClass.hardStopAll(), await s();
                let a = [
                    0,
                    -1,
                    1
                ];
                this.players.forEach((i, e, t)=>{
                    if (i.player.userData.live = !1, i.player.userData.score = 0, i.player.userData._lastMeterPos = null, i.player.userData._wasLive = !1, i.player.userData.body.setTranslation(new m(0, -5, 0)), i.player.userData.finish = !1, i.playerAliving(!0), this.levelsMode) {
                        let o = this.players[e], n = Math.floor(Math.random() * a.length);
                        o.player.userData.startPos.x = a[n], a.splice(n, 1);
                    } else i.player.position.x = i.player.position.x - e * 1 + 1;
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((i, e, t)=>{
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
                    let a = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 1;
                    a == this.allLevels && this.hideScreen("popup_game_btn15"), this.initMatch(this.players.length, this.gameNum, a, this.birdYes);
                }, 100), setTimeout(()=>{
                    this.players.forEach((a, i, e)=>{
                        a.playerAliving(!0);
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
        constructor(s, a){
            this.world = s, this.RAPIER = a, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new te;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const a = s.geometry;
            a.computeBoundingBox();
            const i = new m;
            a.boundingBox.getSize(i);
            const e = new m(1 / (i.x || 1), 1 / (i.y || 1), 1 / (i.z || 1));
            return s.userData.invBase = e, e;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new m(s, s, s) : s?.isVector3 ? s.clone() : new m(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, a, i) {
            const e = cs._toVec3(i.size), t = cs._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = i.quaternion?.isQuaternion ? i.quaternion : new ks, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.x, t.y, t.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), l = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(l, n), this.instancedBodies.push({
                mesh: s,
                index: a,
                size: e,
                body: n
            });
        }
        addInstancedStatic(s, a, i, e) {
            const t = cs._toVec3(e.size), o = cs._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = e.quaternion?.isQuaternion ? e.quaternion : new ks, l = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setFriction(1.6).setRestitution(0);
            s[i].userData.body = l, s[i].userData.shape = h, s[i].userData.collide = this.world.createCollider(h, l), this.instancedBodies.push({
                mesh: a,
                index: i,
                size: t,
                body: l
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, a = new Set;
            for (const i of this.instancedBodies){
                const e = cs._ensureInvBase(i.mesh), t = i.body.translation(), o = i.body.rotation();
                s.position.set(t.x, t.y, t.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(i.size.x * e.x, i.size.y * e.y, i.size.z * e.z), s.updateMatrix(), i.mesh.setMatrixAt(i.index, s.matrix), a.add(i.mesh);
            }
            for (const i of a)i.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let a, i;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new fs().setFromObject(s);
                const t = Os(s);
                s.rotation.copy(e), s.userData.size = t, s.userData.orgRotation = e, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = a, s.userData.shape = i;
                let o = a;
                i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(i, a);
                s.userData.collider = n, s.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]);
            } else if (s != null && s.userData.name.includes("tops")) {
                let a, i;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new fs().setFromObject(s);
                const t = Os(s);
                s.rotation.copy(e), s.userData.size = t, s.userData.orgRotation = e, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setMass(1).setRestitution(0).setFriction(.3), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, a);
                s.userData.body = a, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = a.handle, this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]), s.userData.playerHandlesInside = new Set, this.allTops.push(s);
            } else if (s != null && s.userData.name.includes("bird")) {
                let a, i;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new fs().setFromObject(s);
                const t = Os(s);
                s.rotation.copy(e), s.userData.size = t, s.userData.orgRotation = e, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setMass(1).setRestitution(1).setFriction(0), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, a);
                s.userData.body = a, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = a.handle, this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]);
            }
        }
    }
    const Us = new m;
    function Os(r) {
        if (r.isMesh && r.geometry) {
            const a = r.geometry;
            return a.boundingBox || a.computeBoundingBox(), a.boundingBox.getSize(Us), Us.multiply(r.scale), Us.clone();
        }
        return new fs().setFromObject(r).getSize(new m);
    }
    class wt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.looseAudio, this.winAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicNowPlaying = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2, this._attached = !1, this.listener = new Ne, this.musicOn = !0;
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
            const s = new Ge, a = [
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
            (await Promise.all(a.map((e)=>s.loadAsync(e.path).catch((t)=>(console.error(`Ошибка при загрузке ${e.path}:`, t), null))))).forEach((e, t)=>{
                const o = a[t];
                if (!e) return;
                const n = new qe(this.listener);
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
            this.musicOn && (s == 0 ? this.musics.forEach((a, i, e)=>{
                a.music.stop();
            }) : s.forEach((a, i, e)=>{
                this.musics.find((t)=>t.name === a).music.stop();
            }));
        }
        pauseMusic(s) {
            this.musicOn && s.forEach((a, i, e)=>{
                this.musics.find((t)=>t.name === a).music.pause();
            });
        }
        playMusic(s) {
            s.forEach((a, i, e)=>{
                let t = this.musics.find((o)=>o.name === a).music;
                !t.isPlaying && this.musicOn && t.play();
            });
        }
        togglePauseAll(s) {
            this.musicOn && (s ? (this.musicNowPlaying = [], this.musics.forEach(({ music: a })=>{
                a.isPlaying && (a.pause(), this.musicNowPlaying.push(a));
            })) : this.musicNowPlaying && this.musicNowPlaying.length && (this.musicNowPlaying.forEach((a)=>{
                a.isPlaying || a.play();
            }), this.musicNowPlaying = []));
        }
        dayNight(s = !0, a = !1) {
            s && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>i.name === "back1").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>a ? i.name === "back3" : i.name === "back2").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class xt {
        constructor(s, a, i, e, t, o){
            this.levelClass = s, this.isMobile = a, this.renderer = i, this.camera = e, this.paramsClass = t, this.audioClass = o, this.mouse = new m, this.raycaster = new We;
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
            let a = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - a.left) / a.width * 2 - 1, this.mouse.y = -((s.clientY - a.top) / a.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.downKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.downKeys(this.levelClass.players[1].player) : this.downKeys(this.levelClass.players[2].player));
        };
        onTapUp = (s)=>{
            let a = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - a.left) / a.width * 2 - 1, this.mouse.y = -((s.clientY - a.top) / a.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.levelClass.players.length == 1 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length == 2 ? this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.upKeys(this.levelClass.players[1].player) : this.levelClass.players.length == 3 && (this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.mouse.y < 0 ? this.upKeys(this.levelClass.players[1].player) : this.upKeys(this.levelClass.players[2].player));
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
    class Mt {
        constructor(s, a, i, e, t, o){
            this.scene = s, this.camera = a, this.renderer = i, this.paramsClass = e, this.isMobile = t, this.audioClass = o, this.ambientLight = new Ue(11184810, 1), this.hemiLight = new Oe(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ve(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new te, this.dirLight.target = this.targetObject, this.helper = new Ye(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.isRainActive = !1, this.rainEndTimestampMs = 0, this.activeLightningLines = [], this.lightningMaterialBase = new $e({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: Es,
                depthWrite: !1
            }), this.clock = new Ns, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 10, this.rainAreaHalfDepth = 22, this.rainTopY = 7, this.rainBottomY = -2, this.rainGeometry = new Ds, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let a = 0; a < this.rainDropCount; a++){
                const i = a * 3;
                this.rainPositions[i + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[i + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[i + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[a] = 10 + Math.random() * 10, this.rainWindPhase[a] = Math.random() * Math.PI * 20;
            }
            const s = new Float32Array(this.rainDropCount * 3);
            for(let a = 0; a < this.rainDropCount; a++){
                const i = .8 + Math.random() * .2;
                s[a * 3 + 0] = .7 * i, s[a * 3 + 1] = .8 * i, s[a * 3 + 2] = 1 * i;
            }
            this.rainGeometry.setAttribute("position", new ds(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new ds(s, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new Me({
                color: 8947916,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .79,
                transparent: !0,
                opacity: .96,
                size: .18,
                sizeAttenuation: !0,
                depthWrite: !0,
                blending: Es
            }), this.rainPoints = new Zs(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Hs(900, 500), this.water = new Ke(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new Ce().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = _s;
                }),
                sunDirection: new m,
                sunColor: 16755370,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -2 : this.water.position.y = -2, this.sun = new m, this.sky = new Xe, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
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
            const a = 1500, i = new Float32Array(a * 3), e = new Float32Array(a), t = new Float32Array(a * 3);
            for(let h = 0; h < a; h++){
                i[3 * h] = Math.random() * 600 - 300, i[3 * h + 1] = Math.random() * 150 - 100, i[3 * h + 2] = Math.random() * 300 - 500, e[h] = Math.random() * 2 + .7;
                const p = new os().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                t[3 * h] = p.r, t[3 * h + 1] = p.g, t[3 * h + 2] = p.b;
            }
            const o = new Ds;
            o.setAttribute("position", new ds(i, 3)), o.setAttribute("size", new ds(e, 1)), o.setAttribute("color", new ds(t, 3));
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
            this.materialStars = new Je({
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
                blending: Es
            }), this.stars = new Zs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, a = Math.sign(s - this._prevCamX);
            this._prevCamX = a, this.stars.position.x = this.camera.position.x;
            const i = N.degToRad(90 - this.parameters.elevation), e = N.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, i, e), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1, this.rainStart = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), !this.rainStart && this.parameters.elevation < 2 && this.parameters.elevation > 1.5 && (this.rain = !0, this.startRain(), this.audioClass.musicOn && this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1)), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const t = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= t * .05, this.blackSky.material.opacity += t * .02, this.materialStars.uniforms.opacity.value += t * .008, this.camera.position.y < this.topLight && t < 0 ? (this.dirLight.intensity -= t * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= t * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= t * .05, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && t > 0 && (this.dirLight.intensity -= t * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= t * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= t * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && this.camera.position.y > 10 && (this.topLight = this.camera.position.y), this.prevCameraYSun = this.camera.position.y, this.camera.position.y > 30 ? this.night = !0 : this.night = !1;
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
            const a = 10;
            this.dirLight.shadow.camera.left = -a, this.dirLight.shadow.camera.right = a, this.dirLight.shadow.camera.top = a, this.dirLight.shadow.camera.bottom = -a, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let i = this.activeLightningLines.length - 1; i >= 0; i--){
                const e = this.activeLightningLines[i];
                e.userData.life -= this.deltaSeconds / 1.5, e.material.opacity *= .78, (e.userData.life <= 0 || e.material.opacity <= .02) && (this.scene.remove(e), e.geometry.dispose(), e.material.dispose(), this.activeLightningLines.splice(i, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const i = this.rainGeometry.getAttribute("position"), e = Math.sin(performance.now() * .0012) * .8, t = this.camera.position.x, o = this.camera.position.z;
                for(let n = 0; n < this.rainDropCount; n++){
                    const l = n * 3, h = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + e * .4;
                    this.rainPositions[l + 0] += h * this.deltaSeconds * 8, this.rainPositions[l + 1] -= this.rainVelocities[n] * (1 + Math.abs(e) * .3) * this.deltaSeconds, t + this.rainPositions[l + 0], o + this.rainPositions[l + 2], this.rainPositions[l + 1] < this.rainBottomY && (this.rainPositions[l + 1] = this.rainTopY, this.rainPositions[l + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[l + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[l + 0] > this.rainAreaHalfWidth && (this.rainPositions[l + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[l + 0] < -this.rainAreaHalfWidth && (this.rainPositions[l + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[l + 2] > this.rainAreaHalfDepth && (this.rainPositions[l + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[l + 2] < -this.rainAreaHalfDepth && (this.rainPositions[l + 2] += this.rainAreaHalfDepth * 2 - 35);
                }
                this.rainPoints.position.set(t, 0, o), i.needsUpdate = !0;
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
                const a = s[this.currentThunderIndex % s.length].music;
                a.isPlaying && a.stop(), this.audioClass.musicOn && a.play(), this.currentThunderIndex++;
            }
            this.triggerLightningFlash(), this.lightningFade = 1;
        }
        scheduleNextThunderFlash(s) {
            const a = this.minThunderIntervalMs + Math.random() * (this.maxThunderIntervalMs - this.minThunderIntervalMs);
            this.nextThunderFlashTimestampMs = s + a;
        }
        stopThunderImmediately() {
            this.thunder = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0;
        }
        createLightningBolt(s, a, i) {
            const e = s + (Math.random() - .5) * 6, t = -4 + Math.random() * 3, o = i + (Math.random() - .5) * 6, n = e - s, l = t - a, h = o - i, p = Math.hypot(n, l, h) || 1, u = n / p, d = l / p, g = h / p, c = n / p, v = -(h / p), x = 0, y = c, _ = Math.abs(d) > .9 ? new m(1, 0, 0) : new m(0, 1, 0), R = new m(u, d, g), q = new m().crossVectors(R, _).normalize(), b = new m().crossVectors(R, q).normalize(), M = 2 + Math.random() * 2, H = 1.2, T = Math.random() * Math.PI * 2, A = 3 + Math.random() * 2.5, U = .8, ms = Math.random() * Math.PI * 2, C = 28, j = 4, $ = [];
            for(let S = 0; S <= C; S++){
                const B = S / C, z = 1 - B;
                let K = s + n * B, ls = a + l * B, Q = i + h * B;
                const X = Math.sin(B * Math.PI * M + T) * H * (.3 + .7 * z), ss = Math.sin(B * Math.PI * A + ms) * U * (.3 + .7 * z), es = (Math.random() - .5) * 2 * j * z, O = (Math.random() - .5) * 1.6 * j * z, W = Math.random() < .12 ? (Math.random() - .5) * 3.5 * z : 0;
                if (K += q.x * (X + es + W) + b.x * (ss + O * .7), ls += q.y * (X + es * .5) + b.y * (ss + O * .5), Q += q.z * (X + es + W) + b.z * (ss + O * .7), $.push(K, ls, Q), S > 3 && S < C - 3 && Math.random() < .22) {
                    const rs = [], xs = 3 + Math.floor(Math.random() * 2), hs = .25 + Math.random() * .35;
                    let Ms = K, Ps = ls, Cs = Q;
                    rs.push(Ms, Ps, Cs);
                    for(let Bs = 1; Bs <= xs; Bs++)Ms += (Math.random() - .5) * j * hs, Ps += -(.8 + Math.random() * .8) * hs, Cs += (Math.random() - .5) * j * hs, rs.push(Ms, Ps, Cs);
                    const zs = new Ds;
                    zs.setAttribute("position", new re(rs, 3));
                    const bs = new he(zs, this.lightningMaterialBase.clone());
                    bs.material.opacity = .6, bs.userData.life = .16 + Math.random() * .12, this.scene.add(bs), this.activeLightningLines.push(bs);
                }
            }
            const ys = 2;
            for(let S = -1; S <= ys; S++){
                const B = S === -1, z = B ? 0 : S % 2 === 0 ? 1 : -1, K = .55 + Math.random() * .45, ls = .35, Q = Math.random() * Math.PI * 2, X = [], ss = $.length / 3;
                for(let W = 0; W < ss; W++){
                    const rs = W / (ss - 1), xs = .35 + .85 * rs, hs = Math.sin(rs * Math.PI * 2 + Q) * ls * (.2 + .8 * rs), Ms = v * z * K * xs + y * hs * .3, Ps = x * z * K * xs + hs * .05, Cs = y * z * K * xs - v * hs * .3, zs = W * 3 + 0, bs = W * 3 + 1, Bs = W * 3 + 2, ie = $[zs], oe = $[bs], ne = $[Bs];
                    B ? X.push(ie + (Math.random() - .5) * .05, oe + (Math.random() - .5) * .05, ne + (Math.random() - .5) * .05) : X.push(ie + Ms + (Math.random() - .5) * .2, oe + Ps + (Math.random() - .5) * .2, ne + Cs + (Math.random() - .5) * .2);
                }
                const es = new Ds;
                es.setAttribute("position", new re(X, 3));
                const O = new he(es, this.lightningMaterialBase.clone());
                O.material.opacity = B ? .95 : .32, O.userData.life = .22 + Math.random() * .18, this.scene.add(O), this.activeLightningLines.push(O);
            }
        }
        triggerLightningFlash() {
            const s = this.camera.position.x + (Math.random() - .5) * 30, a = 34 + Math.random() * 6, i = -10 - Math.random() * 20;
            this.createLightningBolt(s, a, i);
        }
        makeRainStreakTexture() {
            const i = new Uint8Array(320);
            for(let t = 0; t < 40; t++){
                const o = Math.pow(Math.sin(t / 39 * Math.PI), 1.5);
                for(let n = 0; n < 2; n++){
                    const l = (t * 2 + n) * 4;
                    i[l + 0] = 255, i[l + 1] = 255, i[l + 2] = 255, i[l + 3] = Math.round(o * 255);
                }
            }
            const e = new Ze(i, 2, 40, Qe);
            return e.needsUpdate = !0, e.magFilter = de, e.minFilter = de, e.wrapS = ce, e.wrapT = ce, e.rotation = Math.PI / 2, e.center.set(.5, .5), e;
        }
    }
    function Vs(r) {
        if (!r) return !1;
        if (r.isMine === !0) return !0;
        const s = k("leaderboard.mine", "Мой рекорд");
        return r.name === s;
    }
    class Pt {
        constructor(s, a, i, e, t){
            this.initMatch = s, this.loadLevels = a, this.gameClass = i, this.audioClass = e, this.dataClass = t, this.playersNum = 1, this.levelPlayersNum = 1, this.mainMenu(this.initMatch), this.loadRecsData();
        }
        loadRecsData() {
            let s = this.dataClass.masTables, a = document.querySelectorAll(".rec_table_small"), i = "free_game_my_rec", e = "";
            a[0].innerHTML = "", a[1].innerHTML = "", console.log(s), s.forEach((t, o, n)=>{
                s[o].forEach((l, h, p)=>{
                    const u = k("leaderboard.mine", "Мой рекорд");
                    s[o][h].findIndex((d)=>d && d.name === u) < 3 ? a[o].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == h + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${Vs(s[o][h][0]) ? i : e}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[o][h][0].name}</span>
                <div><span class='place_rec'>${s[o][h][0].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='green_back two_place ${Vs(s[o][h][1]) ? i : e}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[o][h][1].name}</span>
                <div><span class='place_rec'>${s[o][h][1].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='blue_back three_place ${Vs(s[o][h][2]) ? i : e}'>
                <span class='place_num'>3</span>
                <span class='rec_table_small_name'>${s[o][h][2].name}</span>
                <div><span class='place_rec'>${s[o][h][2].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
          </div>
        `) : a[o].insertAdjacentHTML("beforeend", `
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
                <span class='place_num'>${s[o][h][3].pos}</span>
                <span class='rec_table_small_name'>${s[o][h][3].name}</span>
                <div><span class='place_rec'>${s[o][h][3].rec}</span><span>${k("hud.metersLabel", "м")}</span></div>
            </div>
          </div>
        `);
                });
            }), console.log(4);
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.loadRecsData(), this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", async ()=>{
                this.dataClass.levelCoopMode = "coop", document.querySelectorAll(".levels_game_screen .level_game_chels").forEach((i, e, t)=>{
                    i.classList.contains("level_game_chels_active") && (this.levelPlayersNum = e + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
                }), this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", async ()=>{
                this.dataClass.levelCoopMode = "contest", document.querySelectorAll(".levels_game_screen_contest .level_game_chels_contest").forEach((i, e, t)=>{
                    i.classList.contains("level_game_chels_contest_active") && (this.levelPlayersNum = e + 2);
                }), this.hideScreen("main_screen"), this.showScreen("levels_game_screen_contest");
            }), document.querySelectorAll(".arrow_back").forEach((i, e, t)=>{
                i.addEventListener("click", ()=>{
                    i.parentElement.parentElement.classList.add("hidden_screen"), this.showScreen("main_screen");
                });
            });
            const s = document.querySelector(".levels_blocks");
            s.addEventListener("click", (i)=>{
                const e = i.target.closest(".levels_block");
                if (!e || e.classList.contains("levels_block--locked")) return;
                const t = Number(e.dataset.level) || 1;
                s.querySelectorAll(".levels_block").forEach((o)=>o.classList.remove("active")), e.classList.add("active"), this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, t, !0);
            });
            const a = document.querySelector(".levels_blocks_contest");
            a.addEventListener("click", (i)=>{
                const e = i.target.closest(".levels_block");
                if (!e) return;
                const t = Number(e.dataset.level) || 1;
                a.querySelectorAll(".levels_block").forEach((o)=>o.classList.remove("active")), e.classList.add("active"), this.hideScreen("levels_game_screen_contest"), this.initMatch(this.levelPlayersNum, 1, t, !0);
            }), document.querySelector(".contest_game_btn").addEventListener("click", (i)=>{
                const e = Math.floor(Math.random() * this.dataClass.allLevels);
                this.hideScreen("levels_game_screen_contest"), this.initMatch(this.levelPlayersNum, 1, e, !0);
            }), document.querySelectorAll(".level_game_chels").forEach((i, e, t)=>{
                i.addEventListener("click", ()=>{
                    this.levelPlayersNum != e + 1 && (document.querySelectorAll(".level_game_chels").forEach((o)=>{
                        o.classList.remove("level_game_chels_active");
                    }), i.classList.add("level_game_chels_active"), this.levelPlayersNum = e + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
                });
            }), document.querySelectorAll(".level_game_chels_contest").forEach((i, e, t)=>{
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
                    document.querySelectorAll(".free_game_chels").forEach((p)=>{
                        p.classList.remove("free_game_chels_active");
                    }), i.classList.add("free_game_chels_active");
                    const t = e + 1, o = document.querySelectorAll(".rec_table_small"), n = [];
                    o.forEach((p)=>{
                        const u = p.querySelector(".rec_table_small_block:not(.hidden_screen)");
                        u && (n.push(u), u.getBoundingClientRect(), u.classList.add("anim-out"));
                    });
                    let l = 0;
                    const h = ()=>{
                        if (l++, l < n.length) return;
                        this.playersNum = t, this.loadRecsData();
                        const p = [];
                        document.querySelectorAll(".rec_table_small").forEach((u)=>{
                            const d = u.querySelector(".rec_table_small_block:not(.hidden_screen)");
                            d && (d.classList.add("anim-in"), p.push(d));
                        }), requestAnimationFrame(()=>{
                            p.forEach((d)=>{
                                d.getBoundingClientRect(), d.classList.add("anim-play");
                            });
                            const u = (d)=>{
                                d.classList.remove("anim-in", "anim-play"), d.removeEventListener("transitionend", u);
                            };
                            p.forEach((d)=>d.addEventListener("transitionend", ()=>u(d), {
                                    once: !0
                                }));
                        });
                    };
                    n.length === 0 ? (this.playersNum = t, this.loadRecsData()) : n.forEach((p)=>{
                        p.addEventListener("transitionend", ()=>{
                            p.classList.remove("anim-out"), p.removeEventListener("transitionend", h), h();
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
    class Dt {
        constructor(s, a){
            this.camera = s, this.dataClass = a, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y, this.metersFloatEl = document.getElementById("meters-float"), this.myRecField = document.getElementById("myRecord"), this.worldRecField = document.getElementById("worldRecord"), this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3), this.worldRec = 0, this.myRec = 0;
        }
        loadRecsToHud(s = 0, a = 0) {
            const i = this.dataClass.masTables?.[s]?.[a] || [];
            this.worldRec = Number(i?.[0]?.rec) || 0;
            const e = k("leaderboard.mine", "Мой рекорд");
            let t = i.find((o)=>o && o.name === e && o.pos !== 0);
            if (!t && i?.[3]?.name === e && (t = i[3]), !t) {
                const o = s === 0 ? "hor" : "vert";
                t = this.dataClass.table?.[o]?.[a]?.[0] || {
                    rec: 0
                };
            }
            this.myRec = Number(t.rec) || 0, this.myRecField && (this.myRecField.textContent = this.myRec), this.worldRecField && (this.worldRecField.textContent = this.worldRec);
        }
        updateMetersFloat(s, a, i = "hor") {
            const e = i === "vert" ? "y" : "x", t = 1e-4;
            for (const d of a){
                const g = d?.player;
                if (!g) continue;
                const c = g.userData || (g.userData = {});
                c.score == null && (c.score = 0);
                let f = g.position?.[e] ?? 0;
                if (c._lastMeterPos == null && (c._lastMeterPos = f), i !== "vert" && c._wasLive === !1 && c.live && (c._lastMeterPos = f), c.live) {
                    const v = f - c._lastMeterPos, x = v > t ? v : 0;
                    x !== 0 && (c.score += x, c._lastMeterPos = f);
                }
                c.score === 0 && (c._lastMeterPos = f), c._wasLive = !!c.live;
            }
            this.playerPanels || (this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3));
            let o = 0;
            for(let d = 0; d < 3; d++){
                const g = this.playerPanels[d], c = a[d]?.player, f = Math.max(0, Math.floor(c?.userData?.score || 0));
                o += f, g && (g.textContent = String(f).padStart(3, "0"));
            }
            const n = Math.max(0, Math.floor(o));
            if (n === Ys) return;
            const l = Ys, h = performance.now(), p = 50, u = (d)=>{
                const g = Math.min(1, (d - h) / p), c = 1 - Math.pow(1 - g, 4), f = Math.round(l + (n - l) * c);
                this.score = f, this.metersFloatEl && (this.metersFloatEl.textContent = String(f).padStart(3, "0")), g < 1 ? requestAnimationFrame(u) : Ys = n;
            };
            requestAnimationFrame(u);
        }
    }
    let Ys = 0;
    class jt {
        constructor(){
            this.gameStarting = !1, this.pause = !1, this.visible = !0, this.showGamePopup = !1;
        }
    }
    class _t {
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
            }, this.masTables = [], this.localStorageKey = "gameData", this.disableSelection = ()=>{
                document.querySelectorAll(".levels_block, .status_chip, .levels_block_number").forEach((a)=>{
                    a.style.userSelect = "none", a.style.webkitUserSelect = "none", a.style.webkitTapHighlightColor = "transparent", a.draggable = !1;
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
            const s = this.getMineLabel(), a = new Set([
                "Мой рекорд",
                "My record"
            ]), i = (e)=>{
                if (e) {
                    e[0] && (e[0].name = s);
                    for(let t = 1; t <= 3; t++){
                        const o = e[t];
                        o && (o.isMe === !0 || a.has(o.name)) && (o.name = s, o.isMe = !0);
                    }
                }
            };
            [
                "hor",
                "vert"
            ].forEach((e)=>{
                if (this.table[e]) for(let t = 0; t < 3; t++)i(this.table[e][t]);
            }), this.processDataAfterLoad();
        }
        async loadLevels(s) {
            const a = document.querySelector(".levels_blocks");
            if (!a) return;
            a.classList.add("levels_blocks--reenter"), a.innerHTML = "";
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
            }, t = 40, o = 60, n = 600;
            for(let l = 0; l < this.levelsStatus[s].length; l++){
                const h = this.levelsStatus[s][l], { modifierClass: p, labelText: u, ariaState: d } = e(h), g = l === 9, c = document.createElement("div");
                c.className = `levels_block ${p}${g ? " levels_block--super" : ""}`, c.setAttribute("data-level", String(l + 1)), c.setAttribute("role", "button"), c.setAttribute("tabindex", h === "locked" ? "-1" : "0"), c.setAttribute("aria-label", `Уровень ${l + 1}, ${d}${g ? ", бонусный уровень" : ""}`);
                const f = Math.min(o + l * t, n);
                c.style.setProperty("--show-delay", `${f}ms`);
                const v = document.createElement("div");
                if (v.className = "levels_block_number", v.textContent = String(l + 1), g) {
                    const _ = document.createElement("div");
                    _.className = "level_reward_icon", _.innerHTML = "+❤️", c.appendChild(_);
                }
                const x = document.createElement("div");
                x.className = "levels_block_status";
                const y = document.createElement("span");
                y.className = `status_chip ${h === "completed" ? "status_chip--completed" : h === "available" ? "status_chip--available" : "status_chip--locked"}`, y.setAttribute("data-i18n", `levels.status.${h}`), y.textContent = u, x.appendChild(y), c.append(v, x), c.addEventListener("click", ()=>{
                    h !== "locked" && (document.querySelectorAll(".levels_block").forEach((_)=>_.classList.remove("active")), c.classList.add("active"));
                }), c.addEventListener("keydown", (_)=>{
                    h !== "locked" && (_.key === "Enter" || _.key === " ") && (_.preventDefault(), c.click());
                }), i.appendChild(c);
            }
            a.append(i), requestAnimationFrame(()=>{
                a.classList.remove("levels_blocks--reenter"), a.querySelectorAll(".levels_block").forEach((l)=>{
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
            const a = document.createDocumentFragment(), i = 40, e = 60, t = 600;
            for(let o = 0; o < this.allLevels; o++){
                const n = o + 1, l = this.table.levelsStatusContest?.[o] ?? 0, h = document.createElement("div");
                h.className = "levels_block levels_block--contest", h.setAttribute("data-level", n), h.setAttribute("role", "button"), h.setAttribute("tabindex", "0"), h.setAttribute("aria-label", `Уровень ${n}, значение ${l}`);
                const p = Math.min(e + o * i, t);
                h.style.setProperty("--show-delay", `${p}ms`), l && h.classList.add(`level_player${l}`);
                const u = document.createElement("div");
                u.className = "levels_block_number", u.textContent = String(n);
                const d = document.createElement("div");
                d.className = "levels_block_status", l ? (d.setAttribute("data-i18n", `contest.player${l}`), d.textContent = k(`contest.player${l}`)) : d.textContent = "";
                const g = l ? k(`contest.player${l}`) : "";
                d.textContent = g, h.append(u, d), h.addEventListener("click", ()=>{
                    document.querySelectorAll(".levels_block").forEach((c)=>c.classList.remove("active")), h.classList.add("active");
                }), h.addEventListener("keydown", (c)=>{
                    (c.key === "Enter" || c.key === " ") && (c.preventDefault(), h.click());
                }), a.append(h);
            }
            s.append(a), requestAnimationFrame(()=>{
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
            const s = (a)=>{
                const i = this.getMineLabel(), e = [
                    a[1],
                    a[2],
                    a[3]
                ].map((h, p)=>h ? {
                        pos: h.pos,
                        name: h.name,
                        rec: h.rec
                    } : {
                        pos: p + 1,
                        name: "",
                        rec: 0
                    }), t = e.some((h)=>h && h.name === i), o = Number(a?.[0]?.rec) || 0, n = a?.[3]?.name === i && Number(a[3].rec) || 0, l = Math.max(o, n);
                if (t) return e;
                {
                    const h = {
                        pos: a?.[3]?.name === i && a[3].pos || 0,
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
            for(let a = 0; a < 3; a++)for(let i = 0; i < this.allLevels; i++)i < this.table.player.levels[a] ? this.levelsStatus[a][i] = "completed" : i == this.table.player.levels[a] ? this.levelsStatus[a][i] = "available" : this.levelsStatus[a][i] = "locked";
        }
        async initYandexPlayer() {
            this.yandexPlayer.player || (this.yandexPlayer.player = await ysdk.getPlayer());
        }
        async loadTableFromCloud() {
            await this.initYandexPlayer();
            try {
                const s = await this.yandexPlayer.player.getData([
                    "table"
                ]);
                s && s.table && typeof s.table == "object" ? (this.table = s.table, console.log(2)) : (console.log("Первый вход: создаём новую table"), this.table = this.createDefaultTable(), await this.saveTableToCloud());
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
                }, s), console.log(1);
            } catch (a) {
                console.warn("Cloud save failed:", a);
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
            for(let a = 0; a < 3; a++)(!Array.isArray(this.table.hor[a]) || this.table.hor[a].length !== 4) && (this.table.hor[a] = s()), (!Array.isArray(this.table.vert[a]) || this.table.vert[a].length !== 4) && (this.table.vert[a] = s());
        }
        async loadLeaderboardsTop3(s) {
            await this.initYandexPlayer(), this.ensureRowsForLeaderboards();
            const a = this.yandexPlayer?.player?.getUniqueID ? this.yandexPlayer.player.getUniqueID() : null, i = async (e)=>{
                try {
                    const [t, o] = await Promise.all([
                        s.leaderboards.getEntries(e, {
                            quantityTop: 3,
                            includeUser: !0,
                            quantityAround: 0
                        }),
                        s.leaderboards.getPlayerEntry(e).catch(()=>null)
                    ]), n = (t.entries || []).map((d)=>({
                            uid: d.player?.uniqueID || null,
                            name: d.player?.publicName || "Anon",
                            rec: typeof d.score == "number" ? d.score : 0,
                            pos: d.rank || 0
                        }));
                    n.sort((d, g)=>g.rec - d.rec);
                    let l = [];
                    if (o && a) {
                        const d = o.rank || 0, g = typeof o.score == "number" ? o.score : 0;
                        if (n.some((v)=>v.uid === a)) l = n.slice(0, 3).map((v)=>({
                                pos: (v.uid === a, v.pos),
                                name: v.uid === a ? this.getMineLabel() : v.name,
                                rec: v.rec,
                                isMe: v.uid === a
                            }));
                        else {
                            const v = n.filter((y)=>y.uid !== a).slice(0, 2).map((y)=>({
                                    pos: y.pos,
                                    name: y.name,
                                    rec: y.rec
                                })), x = {
                                pos: d || 0,
                                name: this.getMineLabel(),
                                rec: g,
                                isMe: !0
                            };
                            l = [
                                ...v,
                                x
                            ];
                        }
                        const f = this.leaderboardPlacement[e];
                        if (f) {
                            const v = f.group === "hor" ? this.table.hor[f.row] : this.table.vert[f.row];
                            v && v[0] && (v[0].rec = g);
                        }
                    } else l = n.slice(0, 3).map((d)=>({
                            pos: d.pos,
                            name: d.name,
                            rec: d.rec
                        }));
                    const h = this.leaderboardPlacement[e];
                    if (!h) return;
                    const p = h.group === "hor" ? this.table.hor[h.row] : this.table.vert[h.row];
                    for(let d = 0; d < 3; d++){
                        const g = l[d] || {
                            pos: d + 1,
                            name: "",
                            rec: 0
                        };
                        p[d + 1] = {
                            pos: g.pos,
                            name: g.name,
                            rec: g.rec,
                            isMe: !!g.isMe
                        };
                    }
                    if (!l.some((d)=>d.name === this.getMineLabel()) && o && a) {
                        const d = o.rank || 0, g = typeof o.score == "number" ? o.score : 0;
                        p[3] = {
                            pos: d,
                            name: this.getMineLabel(),
                            rec: g
                        };
                    }
                } catch (t) {
                    console.warn(`Leaderboard ${e} smart top-3 failed:`, t);
                    const o = this.leaderboardPlacement[e];
                    if (!o) return;
                    const n = o.group === "hor" ? this.table.hor[o.row] : this.table.vert[o.row];
                    for(let l = 1; l <= 3; l++)n[l] = {
                        pos: l,
                        name: "",
                        rec: 0
                    };
                }
            };
            await Promise.all(this.leaderboardsPartIds.map(i)), this.processDataAfterLoad();
        }
        async submitMyScore(s, a, i) {
            const e = Number(i) || 0;
            try {
                if (!await s.isAvailableMethod("leaderboards.setScore")) return;
                await s.leaderboards.setScore(a, e);
            } catch (t) {
                console.warn("Submit score failed:", t);
            }
        }
        updateLocalTop3(s, a, i) {
            const e = this.getMineLabel(), t = this.table?.[s]?.[a];
            if (!t) return;
            const o = (u, d)=>({
                    pos: u?.pos ?? d,
                    name: u?.name ?? "",
                    rec: Number(u?.rec) || 0,
                    isMe: !!u?.isMe || u?.name === e
                }), n = Number(i) || 0;
            t[0] = t[0] || {
                pos: 0,
                name: e,
                rec: 0
            }, t[0].name = e, t[0].rec = Math.max(Number(t[0].rec) || 0, n);
            let l = [
                o(t[1], 1),
                o(t[2], 2),
                o(t[3], 3)
            ];
            const h = l.findIndex((u)=>u.isMe), p = Math.max(n, Number(t[0].rec) || 0);
            if (h >= 0) l[h].name = e, l[h].isMe = !0, l[h].rec = Math.max(l[h].rec, p), l = l.sort((u, d)=>d.rec - u.rec).slice(0, 3);
            else {
                const u = l[2]?.rec || 0;
                if (p > u) l.push({
                    pos: 0,
                    name: e,
                    rec: p,
                    isMe: !0
                }), l = l.sort((d, g)=>g.rec - d.rec).slice(0, 3);
                else {
                    const d = l.filter((v)=>!v.isMe).sort((v, x)=>x.rec - v.rec), g = d[0] || {
                        pos: 1,
                        name: "",
                        rec: 0
                    }, c = d[1] || {
                        pos: 2,
                        name: "",
                        rec: 0
                    }, f = {
                        pos: t[3]?.pos || 0,
                        name: e,
                        rec: p,
                        isMe: !0
                    };
                    l = [
                        g,
                        c,
                        f
                    ];
                }
            }
            for(let u = 1; u <= 3; u++){
                const d = l[u - 1] || {
                    pos: u,
                    name: "",
                    rec: 0
                };
                t[u] = {
                    pos: d.pos,
                    name: d.name,
                    rec: d.rec,
                    isMe: !!d.isMe
                };
            }
            this.processDataAfterLoad();
        }
    }
    class St {
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
            const s = new Ce, [a, i, e] = await Promise.all([
                s.loadAsync("textures/plane.jpg"),
                s.loadAsync("textures/grass.jpg"),
                s.loadAsync("textures/mks.png")
            ]);
            this.plane.texture = a, this.plane.material = new ps({
                map: a,
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
            await new Qs().loadAsync("models/bird/bird.glb").then((i)=>{
                const e = i.scene, t = i.animations;
                e.scale.x = 2, e.scale.y = 2, e.scale.z = 2, e.position.y = 0, e.rotation.y = -Math.PI / 3, this.angryBirdModel = e, this.angryBirdModel.userData.mixer = new st(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(t[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Ns, this.angryBirdModel.traverse((n)=>{
                    (n.isMesh || n.isSkinnedMesh) && (n.castShadow = !1, n.receiveShadow = !1, n.geometry && !n.geometry.boundingSphere && n.geometry.computeBoundingSphere());
                });
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1;
            });
        }
        async loadBoostsModel() {
            await new Qs().loadAsync("models/boosts/hat.glb").then((i)=>{
                const e = i.scene;
                this.boostHatModel = e, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
                const t = this.boostHatPropeller.children[0].material;
                t.emissive.set(16777215), t.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 17, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .035, this.boostHatModel.scale.y = .035, this.boostHatModel.scale.z = .035, this.boostHatModel.userData.fly = !1, this.boostHatModel.userData.num = 0;
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
    let ae;
    document.addEventListener("touchstart", (r)=>{
        ae = setTimeout(()=>{
            r.preventDefault();
        }, 500);
    }, {
        passive: !1
    });
    document.addEventListener("touchend", ()=>{
        clearTimeout(ae);
    });
    document.addEventListener("touchmove", ()=>{
        clearTimeout(ae);
    });
    document.addEventListener("dblclick", (r)=>(r.preventDefault(), !1), {
        capture: !0
    });
    (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (r)=>{
        r.preventDefault();
    }, {
        passive: !1
    });
    let se, Lt = new Ns, De, ns, ws, Z, P, D, Ss, G, As, E, gs, $s = !1, Ks = !1, w = new jt;
    const us = new et;
    us.background = new os(13230580);
    const je = ct({
        scene: us
    }), _e = pt({
        scene: us
    }), I = new tt(25, window.innerWidth / window.innerHeight, .1, 2e3);
    I.position.y = 2;
    const kt = 16 / 9, At = N.degToRad(25), zt = 2 * Math.atan(Math.tan(At / 2) * kt), Xs = rt();
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
    F.outputColorSpace = nt;
    F.toneMapping = lt;
    F.toneMappingExposure = 1.05;
    function Se() {
        const r = document.body.offsetWidth, s = document.body.offsetHeight, a = r / s;
        let i = 2 * Math.atan(Math.tan(zt / 2) / a);
        const e = N.degToRad(4), t = N.degToRad(90);
        i = N.clamp(i, e, t), I.fov = N.radToDeg(i), I.aspect = a, I.updateProjectionMatrix(), F.setSize(r, s);
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
    async function Bt() {
        xe(!0), E = new _t;
        const r = ysdk.environment.i18n.lang.toLowerCase();
        gt(()=>E.refreshMineLabels(), r), gs = new St, await gs.loadModels(), await gs.loadBoostsModel(), Y.setAttribute("style", "width:30%"), await gs.loadTexture(), await Tt(), Y.setAttribute("style", "width:30%"), D = new wt, await D.loadAudio(), Y.setAttribute("style", "width:60%"), await E.loadTableFromCloud(), await E.loadLeaderboardsTop3(ysdk), await E.loadLevels(0), await E.loadLevelsContest(), Y.setAttribute("style", "width:100%"), ns = new Pt(Le, E.loadLevels, w, D, E), xe(!1), Y.setAttribute("style", "width:0%"), ysdk.features.LoadingAPI.ready(), ysdk.features.GameplayAPI.stop();
    }
    await Bt();
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
    async function Et(r) {
        const s = await ke(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        se = new s.World(new s.Vector3(0, -9.81, 0)), De = new s.EventQueue(!0), Z = new cs(se, s), As = new Dt(I, E), ws = new Mt(us, I, F, G, Xs, D), P = new vt(us, D, Z, F, I, Xs, G, ws, Le, E, w, je, _e, As, ns, gs);
        for(let a = 0; a < r; a++)P.players.push(new bt(E, us, D, P, G, I, w, gs));
        Ss = new xt(P, Xs, F, I, G, D), Ss.addKeyListeners();
    }
    async function Ht() {
        await ws.loadWorld(), D.musicOn && D.backAudio.play(), D.musicOn && D.oceanAudio.play();
    }
    async function Ft(r) {
        await P.createLevel(r), await P.loadPlayers(), await P.loadEnvironments(), P.objs.grassPlanes.data.length > 0 && P.objs.grassPlanes.data.forEach((s, a)=>{
            P.objs.grassPlanes.data[a].userData.collide.setCollisionGroups(Fs([
                0
            ], [
                1
            ]));
        }), P.players.length > 0 && P.players.forEach((s, a)=>{
            P.players[a].player.userData.collider.setCollisionGroups(Fs([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function Le(r, s, a = !1) {
        Rt(), ns.toggleLoader(!0), G = new Ct, await Et(r), Y.setAttribute("style", "width:30%"), P.gameNum = s, await Ht(), Y.setAttribute("style", "width:60%"), await Ft(a), Y.setAttribute("style", "width:90%"), G.gameDir === "hor" ? As.loadRecsToHud(0, P.players.length - 1) : As.loadRecsToHud(1, P.players.length - 1), G.dataLoaded = !0, w.gameStarting = !0, E.gameInit = !0, Y.setAttribute("style", "width:100%"), setTimeout(()=>{
            ns.toggleLoader(!1), Y.setAttribute("style", "width:0%");
        }, 1e3);
    }
    function Rt() {
        I.position.y = 2, I.position.x = 0, F.toneMappingExposure = 1.05, Ss?.removedKeyListeners(), ws = null, Z = null, P = null, Ss = null, G = null, As = null;
    }
    function It() {
        if (w.gameStarting && document.querySelector(".menu_in_game").classList.contains("hidden_screen") && G.dataLoaded && P.showScreen("menu_in_game"), E.gameInit && w.gameStarting && !P.levelsMode && document.querySelector(".hud").classList.contains("hidden_screen") && G.dataLoaded ? (ns.showScreen("hud"), ns.hideScreen("level_hud_wrap")) : !E.gameInit && !document.querySelector(".hud").classList.contains("hidden_screen") && (ns.hideScreen("hud"), ns.showScreen("level_hud_wrap")), E.gameInit && w.gameStarting && P.levelsMode && !document.querySelector(".player_panel_rec").classList.contains("hidden_screen") ? document.querySelectorAll(".player_panel_rec").forEach((r, s, a)=>{
            r.classList.add("hidden_screen");
        }) : E.gameInit && w.gameStarting && !P.levelsMode && document.querySelector(".player_panel_rec").classList.contains("hidden_screen") && document.querySelectorAll(".player_panel_rec").forEach((r, s, a)=>{
            r.classList.remove("hidden_screen");
        }), w.gameStarting ? (je.update(Is), _e.update(Is), $s || (ysdk.features.GameplayAPI.start(), $s = !0, Ks = !1)) : Ks || (ysdk.features.GameplayAPI.stop(), Ks = !0, $s = !1), G.dataLoaded && w.gameStarting) {
            P.players.forEach((r, s, a)=>{
                r.playerMove();
            }), ws.updateLighting(), P.levelAnimate(I), P.cameraMove(I);
            for(let r = 0, s = Z.dynamicBodies.length; r < s; r++)Z.dynamicBodies[r][0].position.copy(Z.dynamicBodies[r][1].translation()), Z.dynamicBodies[r][0].quaternion.copy(Z.dynamicBodies[r][1].rotation());
            Z.updateInstancedTransforms(), se.step(De), w.gameStarting && F.render(us, I);
        }
    }
    let Js = 0;
    const Is = 1 / 60, we = .1;
    F.setAnimationLoop(()=>{
        if (G != null) {
            let r = Lt.getDelta();
            for(r > we && (r = we), Js += r; Js >= Is;)It(), Js -= Is;
        }
    });
    function xe(r) {
        const s = document.querySelector(".loader_screen");
        s && (r ? s.classList.remove("hidden_screen") : s.classList.add("hidden_screen"));
    }
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "visible" ? (!w.pause && !w.showGamePopup && (w.gameStarting = !0, D.togglePauseAll(!w.gameStarting)), w.visible = !0) : (!w.pause && !w.showGamePopup ? (w.gameStarting = !1, D.togglePauseAll(!w.gameStarting)) : w.pause || D.togglePauseAll(!w.gameStarting), w.visible = !1);
    });
    document.querySelector(".pause_btn_wrap").addEventListener("click", ()=>{
        !w.pause && w.gameStarting && (w.pause = !w.pause, w.pause && (P.showPopupInGame(), w.gameStarting = !1, D.togglePauseAll(!w.gameStarting), P.showScreen("popup_game_btn_close")));
    });
    document.querySelector(".popup_game_btn_close").addEventListener("click", ()=>{
        (w.pause || w.gameStarting) && (w.pause = !w.pause, w.gameStarting = !0, D.togglePauseAll(!w.gameStarting), ws.rain && !D.rainAudio.isPlaying && D.rainAudio.play(), D.oceanAudio.isPlaying || D.oceanAudio.play(), P.hideScreen("popup_in_game"), P.hideScreen("popup_game_btn_close"));
    });
    document.querySelector(".sound_btn_wrap").addEventListener("click", ()=>{
        const r = D.isMuted();
        D.toggleMute(!r), document.querySelector(".volume-icon__input").classList.toggle("volume_off");
    });
    function Nt() {
        const r = [
            ".free_game_screen",
            ".levels_game_screen",
            ".levels_game_screen_contest",
            ".main_screen"
        ];
        let s = null, a = null, i = null, e = !1, t = 0, o = 0;
        const n = ()=>{
            for (const c of r){
                const f = document.querySelector(c);
                if (f && !f.classList.contains("hidden_screen")) return f;
            }
            return null;
        }, l = ()=>{
            const c = n();
            c !== s && (s && s.removeEventListener("scroll", h, {
                passive: !0
            }), i && (i.removeEventListener("mousedown", p), i.removeEventListener("touchstart", p)), s = c, a = s ? s.querySelector(".scroll-progress") : null, i = a ? a.querySelector(".scroll-progress__bar") : null, s && s.addEventListener("scroll", h, {
                passive: !0
            }), i && (i.addEventListener("mousedown", p), i.addEventListener("touchstart", p)), h());
        }, h = ()=>{
            if (!s || !a || !i) return;
            const c = s.clientHeight, f = s.scrollHeight, v = s.scrollTop;
            if (f <= c + 1) {
                a.classList.remove("visible");
                return;
            }
            a.classList.add("visible");
            const x = a.getBoundingClientRect().height, _ = Math.max(c / f * x, 24), R = f - c, q = x - _, b = R > 0 ? v / R * q : 0;
            i.style.height = `${_}px`, i.style.top = `${b}px`;
        }, p = (c)=>{
            !s || !i || (e = !0, t = c.touches ? c.touches[0].clientY : c.clientY, o = s.scrollTop, document.body.style.userSelect = "none", c.preventDefault());
        }, u = (c)=>{
            if (!e || !s || !i || !a) return;
            const v = (c.touches ? c.touches[0].clientY : c.clientY) - t, x = a.getBoundingClientRect().height, y = s.clientHeight, _ = s.scrollHeight, R = Math.max(1, x - i.offsetHeight), q = (_ - y) / R;
            s.scrollTop = o + v * q;
        }, d = ()=>{
            e = !1, document.body.style.userSelect = "";
        };
        window.addEventListener("resize", ()=>{
            l(), h();
        }), window.addEventListener("mousemove", u, {
            passive: !1
        }), window.addEventListener("touchmove", u, {
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
    Nt();
});

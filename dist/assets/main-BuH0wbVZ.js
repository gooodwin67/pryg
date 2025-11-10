import { _ as Ae, __tla as __tla_0 } from "./index-FkbGckJj.js";
import { B as js, a as ps, P as Pe, N as ze, b as Zs, c as Fs, C as ee, M as ks, d as ws, V as m, e as Be, W as Ee, f as vs, Q as As, g as Te, h as os, i as _s, j as us, G as Qs, E as Z, k as ns, D as Ce, S as He, l as Fe, m as le, I as as, n as is, o as Re, p as Gs, O as te, R as Ss, q as Ts, r as Ie, s as Ne, A as Hs, t as G, u as Ge, v as qe, w as We, x as Ue, y as Oe, H as Ve, z as Ye, F as $e, L as Ke, J as Xe, T as De, K as Je, U as Ze, X as re, Y as he, Z as Qe, _ as st, $ as de, a0 as pe, a1 as et, a2 as tt, a3 as at, a4 as it, a5 as ot, a6 as nt, a7 as lt, a8 as rt } from "./three-DOpQIdiv.js";
Promise.all([
    (()=>{
        try {
            return __tla_0;
        } catch  {}
    })()
]).then(async ()=>{
    function k(h, s) {
        return Math.random() * (s - h) + h;
    }
    function ht() {
        let h = window.matchMedia || window.msMatchMedia;
        return h ? h("(pointer:coarse)").matches : !1;
    }
    function ce(h) {
        return h.reduce((s, a)=>s | 1 << a, 0);
    }
    function Rs(h, s) {
        const a = ce(h), o = ce(s);
        return "0x" + ((a & 65535) << 16 | o & 65535).toString(16).padStart(8, "0");
    }
    function ue(h) {
        const s = h.collisionGroups(), a = s >>> 16 & 65535, o = s & 65535;
        function e(i) {
            const n = [];
            for(let l = 0; l < 16; l++)i & 1 << l && n.push(l);
            return n;
        }
        return [
            e(a),
            e(o)
        ];
    }
    function dt(h) {
        return typeof h == "number" ? new m(h, h, h) : h?.isVector3 ? h : new m(h?.x ?? 1, h?.y ?? 1, h?.z ?? 1);
    }
    function me(h) {
        return h?.userData?.id ?? h?.uuid ?? h?.id;
    }
    const pt = new vs(new m(-.5, -.5, -.5), new m(.5, .5, .5)), ye = new Te, be = new As;
    function ge(h) {
        if (h?.isObject3D) {
            if (h.updateMatrixWorld(!0), h.geometry?.isBufferGeometry) {
                const e = h.geometry;
                if (e.boundingBox || e.computeBoundingBox(), e.boundingBox) {
                    const i = e.boundingBox.clone();
                    return i.applyMatrix4(h.matrixWorld), i;
                }
            }
            return new vs().setFromObject(h);
        }
        const s = h.position ?? h.pos ?? new m, a = dt(h.size ?? 1), o = h.quaternion?.isQuaternion ? h.quaternion : h.rotation?.isEuler ? be.setFromEuler(h.rotation) : be.set(0, 0, 0, 1);
        return ye.compose(s, o, a), pt.clone().applyMatrix4(ye);
    }
    function Y(h, s) {
        const a = ge(h), o = me(h);
        for(let e = s.length - 1; e >= 0; e--){
            const i = s[e], n = me(i);
            if (o !== void 0 && n !== void 0 && o === n) continue;
            if (ge(i).intersectsBox(a)) return i;
        }
        return null;
    }
    function Ws(h) {
        h.traverse((a)=>{
            a.userData?.persistent || (a.geometry && a.geometry.dispose(), a.material && (Array.isArray(a.material) ? a.material.forEach((o)=>o.dispose()) : a.material.dispose()), a.material && a.material.map && a.material.map.dispose());
        });
        const s = [];
        for (const a of h.children)a.userData?.persistent || s.push(a);
        s.forEach((a)=>h.remove(a));
    }
    function ct({ scene: h, maxParticles: s = 800, gravity: a = -7.8, drag: o = 2, texture: e = null, pointSize: i = .66, blending: n = ze } = {}) {
        if (!h) throw new Error("createSplashSystem: scene is required");
        function l() {
            const M = document.createElement("canvas");
            M.width = M.height = 64;
            const H = M.getContext("2d"), T = H.createRadialGradient(64 / 2, 64 / 2, 0, 64 / 2, 64 / 2, 64 / 2);
            T.addColorStop(0, "rgba(255,255,255,1)"), T.addColorStop(1, "rgba(255,255,255,0)"), H.fillStyle = T, H.fillRect(0, 0, 64, 64);
            const A = new ee(M);
            return A.anisotropy = 1, A.needsUpdate = !0, A;
        }
        const r = e || l(), d = new Float32Array(s * 3), u = new Float32Array(s * 3), y = new Float32Array(s), p = new Float32Array(s), v = new Float32Array(s), c = new Uint8Array(s), f = new js;
        f.setAttribute("position", new ps(d, 3)), f.setAttribute("aSize", new ps(v, 1));
        const w = new Pe({
            map: r,
            size: i,
            transparent: !0,
            depthWrite: !1,
            blending: n,
            vertexColors: !1,
            sizeAttenuation: !0
        }), P = new Zs(f, w);
        P.userData.persistent = !0, P.frustumCulled = !1, P.position.set(0, -20, 0), h.add(P);
        let b = 0;
        function S() {
            for(let g = 0; g < s; g++){
                const M = (b + g) % s;
                if (!c[M]) return b = (M + 1) % s, M;
            }
            return -1;
        }
        function I(g, M, H, T, A) {
            const O = M * 3;
            g[O] = H, g[O + 1] = T, g[O + 2] = A;
        }
        return {
            trigger (g, M = 1, H = {}) {
                const { count: T = 42, spread: A = .35, up: O = 3, horiz: ys = 2.2, ttl: D = [
                    .35,
                    .8
                ], sizeJitter: _ = .5 } = H, K = Math.max(1, Math.floor(T * M));
                for(let bs = 0; bs < K; bs++){
                    const L = S();
                    if (L === -1) break;
                    const B = Math.sqrt(Math.random()) * A, z = Math.random() * Math.PI * 2, X = B * Math.cos(z), rs = B * Math.sin(z), ss = Math.sqrt(Math.random()), J = Math.cos(z) * ys * ss * (.6 + .4 * Math.random()), es = Math.sin(z) * ys * ss * (.6 + .4 * Math.random()), ts = O * (.6 + .4 * Math.random()), V = D[0] + Math.random() * (D[1] - D[0]), U = (1 - _ / 2 + Math.random() * _) * 1;
                    I(d, L, g.x + X, g.y, g.z + rs), I(u, L, J * M, ts * M, es * M), y[L] = V, p[L] = 0, v[L] = U, c[L] = 1;
                }
                f.attributes.position.needsUpdate = !0, f.attributes.aSize.needsUpdate = !0;
            },
            update (g) {
                if (g <= 0) return;
                const M = a, H = Math.max(0, o);
                let T = !1;
                for(let D = 0; D < s; D++){
                    if (!c[D]) continue;
                    if (T = !0, p[D] += g, p[D] >= y[D]) {
                        c[D] = 0;
                        const z = D * 3;
                        d[z] = 1e9, d[z + 1] = 1e9, d[z + 2] = 1e9;
                        continue;
                    }
                    const _ = D * 3;
                    u[_ + 1] += M * g;
                    const K = u[_], bs = u[_ + 1], L = u[_ + 2], B = Math.max(0, 1 - H * g);
                    u[_] = K * B, u[_ + 1] = bs * B, u[_ + 2] = L * B, d[_] += u[_] * g, d[_ + 1] += u[_ + 1] * g, d[_ + 2] += u[_ + 2] * g;
                }
                T && (f.attributes.position.needsUpdate = !0);
                let A = 0, O = 0;
                for(let D = 0; D < s; D++)c[D] && (A++, O += 1 - p[D] / y[D]);
                const ys = A ? .25 + .75 * (O / A) : 1;
                w.size = i * ys;
            },
            get object3D () {
                return P;
            },
            dispose () {
                h.remove(P), f.dispose(), w.dispose(), e || r.dispose();
            }
        };
    }
    function ut({ scene: h, size: s = 1.5, ttl: a = .9 } = {}) {
        const o = new Fs(1, 1), e = (()=>{
            const v = document.createElement("canvas");
            v.width = v.height = 64;
            const c = v.getContext("2d");
            return c.clearRect(0, 0, 64, 64), c.strokeStyle = "rgba(255,255,255,0.9)", c.lineWidth = 3, c.beginPath(), c.arc(32, 32, 20, 0, Math.PI * 2), c.stroke(), new ee(v);
        })(), i = new ks({
            map: e,
            transparent: !0,
            depthWrite: !1
        }), n = new ws(o, i);
        n.visible = !1, n.userData.persistent = !0, h.add(n);
        let l = 0, r = !1;
        const d = new m;
        function u(v) {
            d.copy(v), l = 0, r = !0, n.visible = !0;
        }
        function y(v, c) {
            if (!r) return;
            if (l += v, l >= a) {
                r = !1, n.visible = !1;
                return;
            }
            n.position.set(d.x, d.y + .01, d.z), n.rotation.set(-Math.PI / 2, 0, 0);
            const f = l / a, w = s * (1 + 1.6 * f);
            n.scale.setScalar(w), i.opacity = 1 - f;
        }
        function p() {
            h.remove(n), o.dispose(), i.dispose(), e.dispose();
        }
        return {
            trigger: u,
            update: y,
            dispose: p,
            mesh: n
        };
    }
    function mt(h, s, a, o) {
        const e = [];
        h.traverse((r)=>{
            (r.isMesh || r.isSkinnedMesh) && e.push([
                r,
                r.frustumCulled,
                r.visible
            ]);
        });
        const i = h.position.clone(), n = new Set;
        h.traverse((r)=>{
            (r.isMesh || r.isSkinnedMesh) && (Array.isArray(r.material) ? r.material : [
                r.material
            ]).forEach((u)=>{
                u && [
                    "map",
                    "normalMap",
                    "emissiveMap",
                    "metalnessMap",
                    "roughnessMap",
                    "aoMap",
                    "alphaMap",
                    "specularMap",
                    "displacementMap"
                ].forEach((y)=>{
                    u[y] && n.add(u[y]);
                });
            });
        });
        const l = a.getWorldDirection(new m).multiplyScalar(3);
        h.position.copy(a.position).add(l), h.traverse((r)=>{
            (r.isMesh || r.isSkinnedMesh) && (r.frustumCulled = !1, r.visible = !0);
        }), n.forEach((r)=>s.initTexture?.(r)), s.compile(o, a), h.position.copy(i), e.forEach(([r, d, u])=>{
            r.frustumCulled = d, r.visible = u;
        }), s.shadowMap && (s.shadowMap.needsUpdate = !0);
    }
    function yt(h, s, a) {
        const o = h.localClippingEnabled, e = h.clippingPlanes ? h.clippingPlanes.slice() : [];
        h.localClippingEnabled = !0, h.clippingPlanes = [
            new Be(new m(0, 1, 0), -1e9)
        ], h.compile(s, a), h.clippingPlanes = e, h.localClippingEnabled = o;
    }
    function bt(h, s, a, o) {
        if (!h) return;
        const e = s.getRenderTarget(), i = !!s.shadowMap, n = i ? s.shadowMap.autoUpdate : !1;
        i && (s.shadowMap.autoUpdate = !1);
        const l = h.visible;
        h.visible = !0;
        const r = new Ee(1, 1, {
            depthBuffer: !1,
            stencilBuffer: !1
        });
        s.setRenderTarget(r), s.render(a, o), s.setRenderTarget(e), r.dispose(), h.visible = l, i && (s.shadowMap.autoUpdate = n, s.shadowMap.needsUpdate = !0);
    }
    class gt {
        constructor(s, a, o, e, i, n, l){
            this.dataClass = s, this.scene = a, this.audioClass = o, this.levelClass = e, this.paramsClass = i, this.camera = n, this.gameClass = l, this.playerHeight = .9, this.playerWidth = .5, this.player = new ws(new os(this.playerWidth, this.playerHeight, this.playerWidth), new _s({
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
            await new Qs().loadAsync("models/players/player1.glb").then((o)=>{
                const e = o.scene;
                this.playerModel = e, this.playerModel.traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
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
            }), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), Y(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, a] = ue(this.player.userData.collider);
                a[0] == 0 && this.player.userData.collider.setCollisionGroups(Rs([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, a] = ue(this.player.userData.collider);
                a[0] != 0 && this.player.userData.collider.setCollisionGroups(Rs([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && Y(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(Y(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(Y(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(Y(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]))), Y(this.player, this.levelClass.objs.topPlanes.data) || Y(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, Y(this.player, this.levelClass.objs.livesBlocks.data) && !Y(this.player, this.levelClass.objs.livesBlocks.data).userData.taked && this.player.userData.lives < this.player.userData.maxLives && (this.player.userData.lives++, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.musicOn && this.audioClass.playMusic([
                "take"
            ]), this.reLiveField(), Y(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.paramsClass.gameDir == "hor" && this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new m(this.player.userData.body.translation().x, -5, 0))), this.paramsClass.gameDir == "vert" && this.player.position.y < this.camera.position.y - 10 && this.player.userData.live && this.levelClass.scoreClass.score > 8 && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new m(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 4 && this.camera.position.x < 8 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -2 && this.gameClass.gameStarting && (this.player.userData.splash || (!this.player.userData.finish && !this.gameClass.pause && this.player.userData.live && (this.audioClass.stopMusic([
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
                ]), this.dataClass.levelCoopMode == "coop" ? (this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : this.dataClass.levelCoopMode == "contest" && (this.levelClass.players.some((s)=>s.player.userData.finish) ? (this.levelClass.showPopupInGame(!1, !0), this.levelClass.players.forEach((s, a, o)=>{
                    s.player.userData.finish && (this.dataClass.table.levelsStatusContest[this.levelClass.levelsMode - 1] = a + 1, this.dataClass.saveLocalData(), this.dataClass.loadLocalData(), this.dataClass.loadLevelsContest());
                })) : this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0))), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, a, o)=>{
                    s.userData.fly = !1;
                }), this.playerAliving(!1), this.audioClass.musicOn && this.audioClass.playMusic([
                    "back"
                ]), this.audioClass.musicOn && this.levelClass.worldClass.rain && this.audioClass.playMusic([
                    "rain"
                ])), !this.player.userData.live || this.player.userData.finish) {
                    if (this.player.userData.body.setLinvel(new m(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos) {
                        const s = this.levelClass.objs.grassPlanes.data;
                        for(let a = 0; a < s.length - 1; a++){
                            const o = s[a];
                            if (o.position.x >= this.player.position.x - 1 && !o.userData.moveHor && !o.userData.moveVert) {
                                this.player.userData.deadPos = o.position;
                                break;
                            }
                        }
                        this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position);
                    }
                    this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                        x: 0,
                        y: 0,
                        z: 0
                    }, !0), this.paramsClass.gameDir == "vert" ? this.player.userData.body.setTranslation(new m(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y, this.player.userData.deadPos.z)) : this.player.userData.body.setTranslation(new m(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + k(1.1, 3.1), this.player.userData.deadPos.z)), this.player.userData.deadPos = new m(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1);
                }
                this.reLiveField();
            } else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, a = this.player.userData.readyJump ? -Math.PI / 2 : 0, o = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, e = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, i = this.player.userData.readyJump ? Math.PI / 8 : 0, n = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, l = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, d = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, o, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, i, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, d, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, l, .1);
                const u = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, u, .4);
                const y = this.player.userData.readyJump ? .71 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, y, .1),
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
                const o = new m().setFromMatrixPosition(this.player.userData.head.matrixWorld), e = new As;
                this.player.userData.head.getWorldQuaternion(e);
                const i = new As().setFromEuler(new Z(0, Math.PI / 2, 0)), n = e.clone().multiply(i), r = new m(.01, .14, .05).clone().applyQuaternion(n);
                s.quaternion.copy(n), s.position.copy(o).add(r), s.children[0].children[1].rotation.y += .4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
            } else {
                const s = this.player.userData.canFlyNum;
                if (s !== null && this.levelClass.boostHatModels[s]) {
                    const a = this.levelClass.boostHatModels[s];
                    a.userData.lastPos && (a.position.copy(a.userData.lastPos), a.quaternion.copy(a.userData.lastQuat)), a.userData.fly = !1, a.children[0].children[1].rotation.y += .02;
                }
            }
        }
        lerp(s, a, o) {
            return s + (a - s) * o;
        }
        playerAliving(s) {
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, s && (this.levelClass.reloadLevel(this.levelClass.players.findIndex((a, o, e)=>a.player == this.player)), this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.levelClass.levelsMode ? this.player.userData.lives = 1 : this.player.userData.lives = this.player.userData.maxLives, this.reLiveField(), this.player.userData.score = 0), setTimeout(()=>{
                this.gameClass.gameStarting = !0, this.player.userData.splash = !1;
            }, 100);
        }
        reLiveField() {
            let s = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((o, e, i)=>o.player == this.player)].children, a = document.querySelectorAll(".num_bonus_heart")[this.levelClass.players.findIndex((o, e, i)=>o.player == this.player)];
            for(let o = 0; o < s.length; o++)o > this.player.userData.lives - 1 ? s[o].classList.add("opacity_my-screen") : s[o].classList.contains("opacity_my-screen") && s[o].classList.remove("opacity_my-screen");
            this.player.userData.lives > 3 ? (a.classList.contains("opacity_my-screen") && a.classList.remove("opacity_my-screen"), a.textContent = this.player.userData.bonusHeart) : a.classList.contains("opacity_my-screen") || a.classList.add("opacity_my-screen");
        }
    }
    const Is = {
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
    function fe(h, s) {
        return s.split(".").reduce((a, o)=>a && a[o], h);
    }
    function ve(h = "ru", s = document) {
        const a = Is[h] || Is.ru;
        if (s.querySelectorAll("[data-i18n]").forEach((e)=>{
            const i = e.dataset.i18n, n = fe(a, i);
            n != null && (e.textContent = n);
        }), document.documentElement.lang = h, localStorage.setItem("locale", h), document.getElementById("lang-toggle")) {
            const e = document.getElementById("flag");
            fe(a, "ui.langToggle") === "ru" || h === "ru" ? (e.classList.remove("us"), e.classList.add("ru"), e.src = "images/ru.svg") : (e.classList.remove("ru"), e.classList.add("us"), e.src = "images/us.svg");
        }
    }
    function ft() {
        const h = localStorage.getItem("locale") || "ru";
        ve(h);
        const s = document.getElementById("lang-toggle");
        document.getElementById("flag"), s && s.addEventListener("click", ()=>{
            const o = (localStorage.getItem("locale") || "ru") === "ru" ? "en" : "ru";
            ve(o);
        });
    }
    function E(h, s = "") {
        const a = localStorage.getItem("locale") || "ru", o = Is[a] || Is.ru;
        return h.split(".").reduce((i, n)=>i && i[n], o) ?? s;
    }
    const vt = new Set([
        "Мой рекорд",
        "My record"
    ]), we = (h)=>h?.isMine === !0 || h?.name === E("hud.mineRecord", "Мой рекорд") || vt.has(h?.name);
    class wt {
        constructor(s, a, o, e, i, n, l, r, d, u, y, p, v, c, f, w){
            this.scene = s, this.audioClass = a, this.physicsClass = o, this.renderer = e, this.camera = i, this.isMobile = n, this.paramsClass = l, this.worldClass = r, this.initMatch = d, this.gameClass = y, this.splash = p, this.ring = v, this.dataClass = u, this.scoreClass = c, this.menuClass = f, this.assetsManager = w, this.playersLoaded = !1, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = this.dataClass.allLevels, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new ns(16777215), this._nightColor = new ns(16771488), this.mksWidth = 100, this.mksHeight = 100, this.geometryPlane = new Fs(this.mksWidth, this.mksHeight), this.materialPlane = new ks({
                color: 0,
                side: Ce
            }), this.mks = new ws(this.geometryPlane, this.materialPlane), this.mks.position.z = -550, this.isMobile ? this.mks.position.y = 100 : this.mks.position.y = 140, this.mks.layers.set(1);
            const P = new He, b = .01;
            P.moveTo(5 * b, 5 * b), P.bezierCurveTo(5 * b, 5 * b, 4 * b, 2 * b, 0 * b, 2 * b), P.bezierCurveTo(-6 * b, 2 * b, -6 * b, 7 * b, -6 * b, 7 * b), P.bezierCurveTo(-6 * b, 10 * b, -3 * b, 14 * b, 5 * b, 18 * b), P.bezierCurveTo(12 * b, 14 * b, 16 * b, 10 * b, 16 * b, 7 * b), P.bezierCurveTo(16 * b, 7 * b, 16 * b, 2 * b, 10 * b, 2 * b), P.bezierCurveTo(7 * b, 2 * b, 5 * b, 5 * b, 5 * b, 5 * b);
            const S = {
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
                    geometryPlafon: new le(.32, 24, 16),
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
                    geometryBulb: new le(.3),
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
                    geometryLivesBlock: new Fe(P, S),
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
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Re(I, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (g)=>{
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
            function W(g = 64) {
                const M = document.createElement("canvas");
                M.width = M.height = g;
                const H = M.getContext("2d"), T = H.createRadialGradient(g / 2, g / 2, 0, g / 2, g / 2, g / 2);
                T.addColorStop(0, "rgba(255, 235, 175, 1)"), T.addColorStop(1, "rgba(255, 235, 175, 0)"), H.fillStyle = T, H.fillRect(0, 0, g, g);
                const A = new ee(M);
                return A.anisotropy = 1, A.generateMipmaps = !1, A.needsUpdate = !0, A;
            }
            this._glowTex = W(), this._emissive = I, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new m(-1, 0, 0), this.rightEdge = new m(1, 0, 0), this.leftEdge.unproject(i), this.rightEdge.unproject(i), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Gs, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new m(s, s, s) : s?.isVector3 ? s : s ? new m(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new m(1, 1, 1);
        }
        apply(s, a, o) {
            let e = o.userData.invBaseSize;
            if (!e) {
                const r = o.geometry;
                r.computeBoundingBox();
                const d = new m;
                r.boundingBox.getSize(d), e = o.userData.invBaseSize = new m(1 / (d.x || 1), 1 / (d.y || 1), 1 / (d.z || 1));
            }
            this._dummy ||= new te;
            const i = this._dummy, n = a[s] || {}, l = this.toVec3(n.size);
            i.position.copy(n.position || new m), n.rotation ? i.rotation.copy(n.rotation) : i.rotation.set(0, 0, 0), i.scale.set(l.x * e.x, l.y * e.y, l.z * e.z), i.updateMatrix(), o.setMatrixAt(s, i.matrix);
        }
        async loadTexture() {
            (()=>{
                let s = this.assetsManager.plane.texture, a = this.assetsManager.plane.material;
                s.wrapS = Ss, s.wrapT = Ss, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = a;
            })(), (()=>{
                let s = this.assetsManager.planeGrass.texture, a = this.assetsManager.planeGrass.material;
                s.wrapS = Ss, s.wrapT = Ss, s.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = a;
            })(), (()=>{
                this.assetsManager.mks.texture;
                let s = this.assetsManager.mks.material;
                this.mks.material = s;
            })();
        }
        async loadBarriers() {
            let s = new os(.5, .7, 1), a = new ks({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new ws(s, a), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = k(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, document.querySelector(".lev_hud span").textContent = s, await this.loadTexture(), await this.loadBarriers(), this.boostHatModel = this.assetsManager.boostHatModel, this.boostHatPropeller = this.assetsManager.boostHatPropeller, this.boostHatMesh = this.assetsManager.boostHatMesh, this.birdYes && (this.angryBirdModel = this.assetsManager.angryBirdModel, this.scene.add(this.angryBirdModel), mt(this.angryBirdModel, this.renderer, this.camera, this.scene)), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((a, o, e)=>{
                document.querySelectorAll(".player_panel")[o].classList.remove("hidden_screen");
            }), this.getHorizontalWorldBounds(), this.cameraMove(this.camera), s) {
                this.isMobile ? this.getHorizontalWorldBounds() : this.getHorizontalWorldBounds(-7);
                let a = -2.5, o = -5, e = !1;
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
                    for(let i = 0; i < this.count; i++){
                        let n = k(this.planeWidth, this.planeWidth - 1), l = a + n / 2 + k(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = k(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e && (n = e[i]), i == 0 ? (this.objs.planes.data[i].size.x = this.planeWidth, this.objs.planes.data[i].size.y = this.planeHeight, this.objs.planes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[i].size.x = this.planeWidth + .3, this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[i].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : i == 1 ? (this.objs.planes.data[i].size.x = n, this.objs.planes.data[i].size.y = this.planeHeight, this.objs.topPlanes.data[i].size.x = n + .3, this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[i].size.x = n + .3, this.objs.grassPlanes.data[i].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : i == this.count - 1 ? (e ? this.objs.planes.data[i].size.x = e[e.length - 1] - .2 : this.objs.planes.data[i].size.x = 5, this.objs.planes.data[i].size.y = this.planeHeight, e ? this.objs.topPlanes.data[i].size.x = e[e.length - 1] : this.objs.topPlanes.data[i].size.x = 5 + .3, this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, e ? this.objs.grassPlanes.data[i].size.x = e[e.length - 1] : this.objs.grassPlanes.data[i].size.x = 5 + .3, this.objs.grassPlanes.data[i].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[i].size.x = n, this.objs.planes.data[i].size.y = this.planeHeight, this.objs.topPlanes.data[i].size.x = n + .3, this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[i].size.x = n + .3, this.objs.grassPlanes.data[i].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), i == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[i].position.x = 0, this.objs.planes.data[i].position.y = r + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[i].position.x = 0, this.objs.topPlanes.data[i].position.y = r + this.planeHeight / 1.5 + .2 - 1.5, this.objs.grassPlanes.data[i].position.x = 0, this.objs.grassPlanes.data[i].position.y = r + this.planeHeight / 1.5 - 1.5) : i == 1 ? (this.objs.planes.data[i].position.x = l + this.fixedDistanceHor.min / 4, this.objs.planes.data[i].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[i].position.x = l + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[i].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[i].position.x = l + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[i].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[i].position.x = l + this.fixedDistanceHor.min / 4, this.objs.planes.data[i].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[i].position.x = l + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[i].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[i].position.x = l + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[i].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[i].position.x = this.objs.grassPlanes.data[i].position.x, this.objs.lamps.data[i].position.z = -this.planeDepth / 4, this.objs.lamps.data[i].position.y = this.objs.grassPlanes.data[i].position.y + this.objs.grassPlanes.data[i].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[i].position.x = this.objs.lamps.data[i].position.x, this.objs.plafons.data[i].position.z = this.objs.lamps.data[i].position.z, this.objs.plafons.data[i].position.y = this.objs.lamps.data[i].position.y + 1, this.objs.bulbs.data[i].position.x = this.objs.lamps.data[i].position.x, this.objs.bulbs.data[i].position.z = this.objs.lamps.data[i].position.z, this.objs.bulbs.data[i].position.y = this.objs.lamps.data[i].position.y + 1, this.lights.length < this.lightsCount) {
                            const d = new Ts(16247464, 0, 4);
                            d.position.set(0, 0, 1.6), this.lights.push(d), this.scene.add(d);
                        }
                        this.apply(i, this.objs.planes.data, this.objs.planes.plane), this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb), a = l + n / 2;
                    }
                    for(let i = 0; i < this.count; i++)i > 1 && i < this.count - 1 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[i - 1].userData.moveHor && (this.objs.grassPlanes.data[i].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[i - 1].position.x,
                        x2: this.objs.grassPlanes.data[i + 1].position.x,
                        w1: this.objs.grassPlanes.data[i - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[i + 1].size.x / 2
                    }, this.objs.planes.data[i].position.y = -10), i > 1 && i < this.count - 1 && Math.random() < this.randomAnimateVert && (this.objs.grassPlanes.data[i].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[i - 1].position.x,
                        x2: this.objs.grassPlanes.data[i + 1].position.x,
                        w1: this.objs.grassPlanes.data[i - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[i + 1].size.x / 2
                    }, this.objs.planes.data[i].position.y = -10);
                } else if (this.paramsClass.gameDir == "vert") {
                    this.birdYes = !1;
                    for(let i = 0; i < this.count; i++){
                        let n = k(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        e && (n = e[i]), this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[i].userData.direction = 1 : this.objs.grassPlanes.data[i].userData.direction = -1;
                        let l = o + k(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[i].position.y = l - 1.3, this.objs.grassPlanes.data[i].position.y = l, this.objs.sensorPlanes.data[i].position.y = l - .3, this.objs.topPlanes.data[i].size.y = .3, this.objs.grassPlanes.data[i].size.y = .7, this.objs.sensorPlanes.data[i].size.y = .9, i > 0 ? (this.objs.topPlanes.data[i].size.x = n + .3, this.objs.grassPlanes.data[i].size.x = n + .3, this.objs.sensorPlanes.data[i].size.x = n + .7) : (this.objs.topPlanes.data[i].size.x = 10, this.objs.grassPlanes.data[i].size.x = 10, this.objs.sensorPlanes.data[i].size.x = 10), this.objs.lamps.data[i].position.x = this.objs.grassPlanes.data[i].position.x, this.objs.lamps.data[i].position.z = -this.planeDepth / 4, this.objs.lamps.data[i].position.y = this.objs.grassPlanes.data[i].position.y + this.objs.grassPlanes.data[i].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[i].position.x = this.objs.lamps.data[i].position.x, this.objs.plafons.data[i].position.z = this.objs.lamps.data[i].position.z, this.objs.plafons.data[i].position.y = this.objs.lamps.data[i].position.y + 1, this.objs.bulbs.data[i].position.x = this.objs.lamps.data[i].position.x, this.objs.bulbs.data[i].position.z = this.objs.lamps.data[i].position.z, this.objs.bulbs.data[i].position.y = this.objs.lamps.data[i].position.y + 1, this.objs.grassPlanes.data[i].userData.speed = k(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new Ts(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(i, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb), o = l;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.isMobile ? this.getHorizontalWorldBounds() : this.getHorizontalWorldBounds(-7);
            } else switch(this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let a = -2.5;
                    for(let e = 0; e < this.count; e++){
                        let i = k(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), n = a + i / 2 + k(this.fixedDistanceHor.min, this.fixedDistanceHor.max), l = k(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, e > this.count - 20 ? (this.objs.planes.data[e].size.x = .1, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = .2 + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = .2 + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e > 0 ? (this.objs.planes.data[e].size.x = i, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = i + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = i + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (l = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = l + this.planeHeight / 6 - 1.5, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = l + this.planeHeight / 1.5 + .2 - 1.5, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = l + this.planeHeight / 1.5 - 1.5) : e == 1 ? (n = 6, this.objs.planes.data[e].position.x = n, this.objs.planes.data[e].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = n, this.objs.topPlanes.data[e].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = n, this.objs.grassPlanes.data[e].position.y = l + this.planeHeight / 1.5) : e > 1 && (this.objs.planes.data[e].position.x = n, this.objs.planes.data[e].position.y = l + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = n, this.objs.topPlanes.data[e].position.y = l + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = n, this.objs.grassPlanes.data[e].position.y = l + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 4, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const r = new Ts(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n + i / 2;
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
                        let i = this.boostHatModel.clone();
                        i.position.x = this.objs.grassPlanes.data[e].position.x, i.position.y = this.objs.topPlanes.data[e].position.y + 2, i.rotation.y = -Math.PI / 2, i.userData.num = e, this.boostHatModels.push(i), this.boostHatMeshes.push(i.children[0].children[0].children[0]), this.boostHatCoords.push([
                            i.position.x,
                            i.position.y
                        ]), this.scene.add(i);
                    }
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.livesBlocks.livesBlock), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let o = -5;
                    this.birdYes = !1;
                    for(let e = 0; e < this.count; e++){
                        let i = k(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[e].userData.direction = 1 : this.objs.grassPlanes.data[e].userData.direction = -1;
                        let n = o + k(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[e].position.y = n - 1.3, this.objs.grassPlanes.data[e].position.y = n, this.objs.sensorPlanes.data[e].position.y = n - .3, this.objs.topPlanes.data[e].size.y = .3, this.objs.grassPlanes.data[e].size.y = .7, this.objs.sensorPlanes.data[e].size.y = .9, e > this.count - 20 && (this.objs.topPlanes.data[e].size.x = i / 8 + .1, this.objs.grassPlanes.data[e].size.x = i / 8 + .1, this.objs.sensorPlanes.data[e].size.x = i / 8 + .4), e > 0 ? (this.objs.topPlanes.data[e].size.x = i + .3, this.objs.grassPlanes.data[e].size.x = i + .3, this.objs.sensorPlanes.data[e].size.x = i + .7) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), e > this.count - 10 ? this.objs.grassPlanes.data[e].userData.speed = k(10, 14) / 100 : this.objs.grassPlanes.data[e].userData.speed = k(6, 10) / 100, this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 4, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, (e + 1) % 7 === 0) {
                            let l = this.boostHatModel.clone();
                            l.position.x = k(this.bounds.leftX + 1, this.bounds.rightX - 1), l.position.y = this.objs.topPlanes.data[e].position.y + .5, this.boostHatModels.push(l), this.boostHatMeshes.push(l.children[0].children[0].children[0]), this.boostHatCoords.push([
                                l.position.x,
                                l.position.y
                            ]), this.scene.add(l);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const l = new Ts(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), o = n;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.scene.add(this.mks);
                    break;
            }
            this.players.forEach((a, o, e)=>{
                a.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y, (s || this.paramsClass.gameDir == "vert") && (a.player.userData.lives = 1, a.reLiveField());
            });
        }
        getHorizontalWorldBounds(s = 0) {
            const a = new m(-1, 0, .5), o = new m(1, 0, .5), e = new m(0, 1, .5), i = new m(0, -1, .5);
            if (a.unproject(this.camera), o.unproject(this.camera), e.unproject(this.camera), i.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const n = this.camera.position, l = a.clone().sub(n).normalize(), r = o.clone().sub(n).normalize(), d = e.clone().sub(n).normalize(), u = i.clone().sub(n).normalize(), y = (s - n.z) / l.z, p = (s - n.z) / u.z, v = n.clone().add(l.multiplyScalar(y)), c = n.clone().add(r.multiplyScalar(y)), f = n.clone().add(d.multiplyScalar(p)), w = n.clone().add(u.multiplyScalar(p));
                this.bounds = {
                    leftX: v.x,
                    rightX: c.x,
                    topY: f.y,
                    bottomY: w.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let s = !1;
                for(let a = 0; a < this.objs.grassPlanes.data.length; a++){
                    const o = this.objs.grassPlanes.data[a], e = o.userData.body, i = o.userData.moveHor, n = o.userData.moveVert;
                    if (e && (i || n)) {
                        if (i) {
                            const l = e.translation(), r = i.x1 + i.w1 + o.size.x * .5, d = i.x2 - i.w2 - o.size.x * .5, u = o.userData.speed ?? .05;
                            l.x >= d && (o.userData.direction = -1), l.x <= r && (o.userData.direction = 1);
                            const y = o.userData.direction * u, p = l.x + y;
                            e.setNextKinematicTranslation({
                                x: p,
                                y: l.y,
                                z: l.z
                            }), o.position.x = p, this.objs.lamps.data[a].position.x = p, this.objs.plafons.data[a].position.x = p, this.objs.bulbs.data[a].position.x = p, this.objs.topPlanes.data[a].position.x = p;
                        } else if (n) {
                            const l = e.translation(), r = 2, d = .5, u = o.userData.speed ?? .03;
                            l.y >= r && (o.userData.direction = -1), l.y <= d && (o.userData.direction = 1);
                            const y = o.userData.direction * u, p = l.y + y;
                            e.setNextKinematicTranslation({
                                x: l.x,
                                y: p,
                                z: l.z
                            }), o.position.y = p, this.objs.lamps.data[a].position.y = p + this.objs.lamps.lampHeight, this.objs.plafons.data[a].position.y = p + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[a].position.y = p + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[a].position.y = p + .2;
                        }
                    }
                    for(let l = 0; l < this.objs.livesBlocks.data.length; l++)this.objs.livesBlocks.data[l].userData.taked ? this.objs.livesBlocks.data[l].position.y < 10 ? (this.objs.livesBlocks.data[l].position.y += .001, this.objs.livesBlocks.data[l].rotation.y += .004) : this.objs.livesBlocks.data[l].userData.taked = !1 : this.objs.livesBlocks.data[l].rotation.y += 4e-4, this.apply(l, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), s = !0;
                }
                s && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let s = 0; s < this.objs.grassPlanes.data.length; s++){
                    const a = this.objs.grassPlanes.data[s], o = this.objs.topPlanes.data[s];
                    this.objs.sensorPlanes.data[s], this.objs.lamps.data[s], this.objs.plafons.data[s], this.objs.bulbs.data[s];
                    const e = a.userData.body, i = a.userData.speed, n = e.translation();
                    n.x > this.bounds.rightX - a.size.x / 2 ? a.userData.direction = -1 : n.x < this.bounds.leftX + a.size.x / 2 && (a.userData.direction = 1);
                    const l = a.userData.direction * i, r = n.x + l;
                    s > 0 && e.setNextKinematicTranslation({
                        x: r,
                        y: n.y,
                        z: n.z
                    }), this.objs.sensorPlanes.data[s].position.x = r, this.objs.lamps.data[s].position.x = r, this.objs.plafons.data[s].position.x = r, this.objs.bulbs.data[s].position.x = r, this.objs.topPlanes.data[s].position.x = r, this.objs.topPlanes.data[s].position.y = n.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), o.position.set(r, n.y + .6, n.z);
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
            this.levelsMode || (this.paramsClass.gameDir == "hor" ? this.scoreClass.updateMetersFloat(null, this.players, "hor") : this.scoreClass.updateMetersFloat(null, this.players, "vert")), this.animateTops(), this.lampsAnimate(), this.gameClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, a, o)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.set(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && !this.worldClass.thunder ? (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: k(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + k(this.distanceToBird, this.distanceToBird + 10), this.angryBird.userData.speed = k(8, 13) / 100, this.angryBird.userData.flying = !0) : this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && this.worldClass.thunder && (this.birdFlyingMark = this.birdFlyingMark + k(this.distanceToBird, this.distanceToBird + 10)), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const s = new Ie(new Ne({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: Hs
            }));
            return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
        }
        lampsAnimate() {
            let s = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.x - this.bounds.rightX / 1.3, o = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((e, i)=>{
                    e.pointLight;
                    const n = e.position.x >= a && e.position.x <= o, l = i;
                    if (n && !e.pointLight && this.lights.length > 0) {
                        const r = this.lights.shift();
                        e.pointLight = r, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const r = e.pointLight;
                        r.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), e.glow.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 0);
                        const d = n ? this.lightIntensity : 0;
                        r.intensity = G.lerp(r.intensity, d, .15);
                        const u = n ? 1 : 0;
                        this._emissive[l] = G.lerp(this._emissive[l], u, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const y = .5 + this._emissive[l] * .8;
                        e.glow && e.glow.scale.setScalar(y);
                        const p = 1.1, v = this._emissive[l], c = 1 + p * v, f = this.objs.bulbs.baseSize, w = this.objs.bulbs.data[l];
                        w.userData._lastBulbFactor !== c && (w.size.set(f.x * c, f.y * c, f.z * c), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), w.userData._lastBulbFactor = c, s = !0), !n && r.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(r), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((o, e)=>{
                    const i = o.pointLight;
                    if (i) {
                        const y = this.objs.lamps.data[e].position;
                        i.position.set(y.x, y.y + 1, y.z + 2), o.glow && o.glow.position.set(y.x, y.y + 1, y.z), i.intensity = G.lerp(i.intensity, 0, .2), i.intensity <= .01 && (i.intensity = 0, this.lights.push(i), o.pointLight = null, o.userData.light = !1, o.glow && (this.scene.remove(o.glow), this.glowPool.push(o.glow), o.glow = null));
                    }
                    this.objs.plafons.plafon.setColorAt(e, this._dayColor), a = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0);
                    const n = 1.1, l = this._emissive[e], r = 1 + n * l, d = this.objs.bulbs.baseSize, u = this.objs.bulbs.data[e];
                    u.userData._lastBulbFactor !== r && (u.size.set(d.x * r, d.y * r, d.z * r), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), u.userData._lastBulbFactor = r, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.y - this.bounds.topY / 1, o = this.camera.position.y + this.bounds.topY * .8;
                this.objs.plafons.data.forEach((e, i)=>{
                    e.pointLight;
                    const n = e.position.y >= a && e.position.y <= o, l = i;
                    if (n && !e.pointLight && this.lights.length > 0) {
                        const r = this.lights.shift();
                        e.pointLight = r, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const r = e.pointLight;
                        r.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), e.glow.position.copy(e.position);
                        const d = n ? this.lightIntensity : 0;
                        r.intensity = G.lerp(r.intensity, d, .15);
                        const u = n ? 1 : 0;
                        this._emissive[l] = G.lerp(this._emissive[l], u, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const y = .8 + this._emissive[l] * .8;
                        e.glow && e.glow.scale.setScalar(y);
                        const p = 1, v = this._emissive[l], c = 1 + p * v, f = this.objs.bulbs.baseSize, w = this.objs.bulbs.data[l];
                        w.userData._lastBulbFactor !== c && (w.size.set(f.x * c, f.y * c, f.z * c), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), w.userData._lastBulbFactor = c, s = !0), !n && r.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(r), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((o, e)=>{
                    const i = o.pointLight;
                    !o.pointLight && this._emissive[e] === 0 || (i && (i.intensity = G.lerp(i.intensity, 0, 1), i.intensity <= .01 && (i.intensity = 0, this.lights.push(i), o.pointLight = null, o.userData.light = !1, o.glow && (this.scene.remove(o.glow), this.glowPool.push(o.glow), o.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), a = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0));
                }), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed(s = !1) {
            let a;
            if (s ? a = this.players.filter((i, n, l)=>i.player.userData.live) : a = this.players, a.length === 0) return -1;
            let o = 0, e;
            this.paramsClass.gameDir == "vert" ? e = a[0].player.position.y : e = a[0].player.position.x;
            for(let i = 1; i < a.length; i++)a[i].player && a[i].player.userData.live && a[i].player.position && (this.paramsClass.gameDir == "vert" ? a[i].player.position.y > e && (e = a[i].player.position.y, o = i) : a[i].player.position.x > e && (e = a[i].player.position.x, o = i));
            return s ? this.players.indexOf(a[o], 0) : o;
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
                        const o = Math.max(0, this.maxSpeed(!0));
                        if (o >= 0 && !this.worldClass.thunder || this.levelsMode) {
                            let e = 0;
                            this.players.filter((l)=>l.player.userData.live).length != 1 ? e = this.players[o].player.position.x : this.paramsClass.gameDir == "hor" && (e = this.players[o].player.position.x + this.bounds.rightX / 2);
                            const i = this.cam.maxBackJump;
                            e < this.cam.targetX - i ? this.cam.targetX = this.cam.targetX - i : this.cam.targetX = e;
                            const n = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .35, a);
                            s.position.x = n.newPos, this.cam.velX = n.newVel, s.position.y = this.isMobile ? 2.5 : 3, s.position.z = this.isMobile ? 25 : 30, s.lookAt(s.position.x, s.position.y - 2, 0);
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
        damp(s, a, o, e) {
            return s + (a - s) * (1 - Math.exp(-o * e));
        }
        spring(s, a, o, e, i) {
            const n = 2 / e, l = n * i, r = 1 / (1 + l + .48 * l * l + .235 * l * l * l);
            let d = s - a;
            const u = (o + n * d) * i, y = (o - n * u) * r;
            return {
                newPos: a + (d + u) * r,
                newVel: y
            };
        }
        async showPopupInGame(s = !1, a = !1) {
            this.hideScreen("popup_game_btn_close"), this.hideScreen("menu_in_game");
            let o = 0;
            if (this.scoreClass.score > this.scoreClass.myRec && (this.scoreClass.myRec = this.scoreClass.score, o++), this.scoreClass.score > this.scoreClass.worldRec && (this.scoreClass.worldRec = this.scoreClass.score, o++), o) {
                if (this.paramsClass.gameDir === "hor") {
                    const i = this.dataClass.table.hor[this.players.length - 1].find(we);
                    i && (i.rec = this.scoreClass.score), await this.dataClass.submitMyScore(ysdk, `ocean${this.players.length}`, this.scoreClass.score);
                } else if (this.paramsClass.gameDir === "vert") {
                    const i = this.dataClass.table.vert[this.players.length - 1].find(we);
                    i && (i.rec = this.scoreClass.score), await this.dataClass.submitMyScore(ysdk, `space${this.players.length}`, this.scoreClass.score);
                }
                await this.dataClass.saveTableToCloud(), await this.dataClass.loadTableFromCloud(), this.paramsClass.gameDir === "hor" ? this.scoreClass.loadRecsToHud(0, this.players.length - 1) : this.scoreClass.loadRecsToHud(1, this.players.length - 1), this.menuClass.loadRecsData();
            }
            if (this.audioClass.oceanAudio.isPlaying && this.audioClass.oceanAudio.stop(), this.audioClass.rainAudio.isPlaying && this.audioClass.rainAudio.stop(), this.gameClass.pause) document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.hideScreen("popup_game_btn15"), this.hideScreen("popup_game_btn1"), this.levelsMode && this.showScreen("popup_game_btn4");
            else if (this.gameClass.showGamePopup = !0, !this.levelsMode) !s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.musicOn && this.audioClass.looseAudio.play();
            else if (this.players.every((e)=>e.player.userData.finish) && this.dataClass.levelCoopMode == "coop" || this.players.some((e)=>e.player.userData.finish) && this.dataClass.levelCoopMode == "contest") {
                if (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.audioClass.winAudio.isPlaying && this.audioClass.winAudio.stop(), this.audioClass.musicOn && this.audioClass.winAudio.play(), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15"), this.hideScreen("popup_game_btn4"), this.dataClass.levelCoopMode == "coop") {
                    let e = !1, i = !1;
                    this.players.forEach((n, l, r)=>{
                        this.levelsMode == this.allLevels && (this.dataClass.table.player.bonusHeart[l] = 10, e = !0), this.levelsMode + 1 > this.dataClass.table.player.levels[l] && (this.dataClass.table.player.levels[l] = this.levelsMode, i = !0);
                    }), (e || i) && await this.dataClass.saveTableToCloud();
                } else this.dataClass.levelCoopMode == "contest" && this.players.forEach(async (e, i, n)=>{
                    e.player.userData.finish && this.dataClass.table.levelsStatusContest[this.levelsMode - 1] != i + 1 && (this.dataClass.table.levelsStatusContest[this.levelsMode - 1] = i + 1, await this.dataClass.saveTableToCloud());
                });
                this.dataClass.loadLevels(this.players.length - 1);
            } else this.hideScreen("popup_game_btn15"), this.showScreen("popup_game_btn4"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win");
            this.showScreen("popup_in_game"), this.gameClass.gameStarting = !1;
        }
        async reloadLevel(s = -1) {
            if (this.paramsClass.gameDir == "hor" && !this.levelsMode) {
                if (s >= 0) {
                    let a = this.players[s];
                    this.dataClass.table.player.bonusHeart[s] ? (a.player.userData.maxLives = 4, a.player.userData.lives = a.player.userData.maxLives, a.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[s], this.dataClass.table.player.bonusHeart[s]--) : (a.player.userData.maxLives = 3, a.player.userData.lives = a.player.userData.maxLives);
                } else {
                    let a = [
                        0,
                        -1,
                        1
                    ];
                    for(let o = 0; o < this.players.length; o++){
                        let e = this.players[o], i = Math.floor(Math.random() * a.length);
                        this.levelsMode ? e.player.position.x = a[i] : (e.reLiveField(), e.player.position.x = e.player.position.x - o * .3 + 1), a.splice(i, 1), this.dataClass.table.player.bonusHeart[o] ? (e.player.userData.maxLives = 4, e.player.userData.lives = e.player.userData.maxLives, e.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[o], this.dataClass.table.player.bonusHeart[o]--) : (e.player.userData.maxLives = 3, e.player.userData.lives = e.player.userData.maxLives), this.levelsMode || e.reLiveField();
                    }
                }
                await this.dataClass.saveTableToCloud();
            }
        }
        rebindButton(s, a) {
            const o = document.querySelector(s), e = o.cloneNode(!0);
            return o.parentNode.replaceChild(e, o), e.addEventListener("click", a), e;
        }
        menuInGame = ()=>{
            async function s() {
                return new Promise((a)=>{
                    ysdk.adv.showFullscreenAdv({
                        callbacks: {
                            onOpen: ()=>console.log("Ad opened"),
                            onClose: (o)=>{
                                console.log("Ad closed", o), a(o);
                            },
                            onError: (o)=>{
                                console.warn("Ad error", o), a(!1);
                            }
                        }
                    });
                });
            }
            this.rebindButton(".popup_game_btn1", async ()=>{
                this.audioClass.oceanAudio.isPlaying || this.audioClass.oceanAudio.play(), this.boostHatModels.forEach((o, e, i)=>{
                    o.userData.fly = !1;
                });
                let a = [];
                this.players.forEach((o, e, i)=>{
                    a.push(o.player.position.x);
                }), this.players.forEach((o, e, i)=>{
                    o.playerAliving(!1), o.player.userData.lives = 1, o.player.position.x = Math.max(...a), this.camera.position.x = o.player.position.x;
                }), this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1), this.gameClass.showGamePopup = !1, this.hideScreen("popup_in_game");
            }), this.rebindButton(".popup_game_btn2", async ()=>{
                this.audioClass.hardStopAll(), await s();
                let a = [
                    0,
                    -1,
                    1
                ];
                this.players.forEach((o, e, i)=>{
                    if (o.player.userData.live = !1, o.player.userData.score = 0, o.player.userData._lastMeterPos = null, o.player.userData._wasLive = !1, o.player.userData.body.setTranslation(new m(0, -5, 0)), o.player.userData.finish = !1, o.playerAliving(!0), this.levelsMode) {
                        let n = this.players[e], l = Math.floor(Math.random() * a.length);
                        n.player.userData.startPos.x = a[l], a.splice(l, 1);
                    } else o.player.position.x = o.player.position.x - e * 1 + 1;
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((o, e, i)=>{
                    o.position.x = this.boostHatCoords[e][0], o.position.y = this.boostHatCoords[e][1], o.userData.fly = !1;
                });
                for(let o = 0; o < this.objs.livesBlocks.data.length; o++)this.objs.livesBlocks.data[o].position = this.objs.livesBlocks.data[o].userData.startPos, this.apply(o, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
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
                this.audioClass.hardStopAll(), await s(), this.paramsClass.dataLoaded = !1, Ws(this.scene), this.audioClass.stopMusic(0), setTimeout(()=>{
                    let a = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 1;
                    a == this.allLevels && this.hideScreen("popup_game_btn15"), this.initMatch(this.players.length, this.gameNum, a, this.birdYes);
                }, 100), setTimeout(()=>{
                    this.players.forEach((a, o, e)=>{
                        a.playerAliving(!0);
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
    class cs {
        constructor(s, a){
            this.world = s, this.RAPIER = a, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new te;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const a = s.geometry;
            a.computeBoundingBox();
            const o = new m;
            a.boundingBox.getSize(o);
            const e = new m(1 / (o.x || 1), 1 / (o.y || 1), 1 / (o.z || 1));
            return s.userData.invBase = e, e;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new m(s, s, s) : s?.isVector3 ? s.clone() : new m(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, a, o) {
            const e = cs._toVec3(o.size), i = cs._toVec3(o.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = o.quaternion?.isQuaternion ? o.quaternion : new As, l = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(i.x, i.y, i.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), r = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(r, l), this.instancedBodies.push({
                mesh: s,
                index: a,
                size: e,
                body: l
            });
        }
        addInstancedStatic(s, a, o, e) {
            const i = cs._toVec3(e.size), n = cs._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), l = e.quaternion?.isQuaternion ? e.quaternion : new As, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(n.x, n.y, n.z).setRotation({
                x: l.x,
                y: l.y,
                z: l.z,
                w: l.w
            })), d = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(1.6).setRestitution(0);
            s[o].userData.body = r, s[o].userData.shape = d, s[o].userData.collide = this.world.createCollider(d, r), this.instancedBodies.push({
                mesh: a,
                index: o,
                size: i,
                body: r
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, a = new Set;
            for (const o of this.instancedBodies){
                const e = cs._ensureInvBase(o.mesh), i = o.body.translation(), n = o.body.rotation();
                s.position.set(i.x, i.y, i.z), s.quaternion.set(n.x, n.y, n.z, n.w), s.scale.set(o.size.x * e.x, o.size.y * e.y, o.size.z * e.z), s.updateMatrix(), o.mesh.setMatrixAt(o.index, s.matrix), a.add(o.mesh);
            }
            for (const o of a)o.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let a, o;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new vs().setFromObject(s);
                const i = Os(s);
                s.rotation.copy(e), s.userData.size = i, s.userData.orgRotation = e, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), o = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = a, s.userData.shape = o;
                let n = a;
                o.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let l = this.world.createCollider(o, a);
                s.userData.collider = l, s.userData.handle = n.handle, this.playersHandles.push(n.handle), this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]);
            } else if (s != null && s.userData.name.includes("tops")) {
                let a, o;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new vs().setFromObject(s);
                const i = Os(s);
                s.rotation.copy(e), s.userData.size = i, s.userData.orgRotation = e, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), o = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(1).setRestitution(0).setFriction(.3), o.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(o, a);
                s.userData.body = a, s.userData.collide = n, this.allWallBodyCollision.push(n), s.userData.handle = a.handle, this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]), s.userData.playerHandlesInside = new Set, this.allTops.push(s);
            } else if (s != null && s.userData.name.includes("bird")) {
                let a, o;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new vs().setFromObject(s);
                const i = Os(s);
                s.rotation.copy(e), s.userData.size = i, s.userData.orgRotation = e, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), o = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(1).setRestitution(1).setFriction(0), o.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(o, a);
                s.userData.body = a, s.userData.collide = n, this.allWallBodyCollision.push(n), s.userData.handle = a.handle, this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]);
            }
        }
    }
    const Us = new m;
    function Os(h) {
        if (h.isMesh && h.geometry) {
            const a = h.geometry;
            return a.boundingBox || a.computeBoundingBox(), a.boundingBox.getSize(Us), Us.multiply(h.scale), Us.clone();
        }
        return new vs().setFromObject(h).getSize(new m);
    }
    class xt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.looseAudio, this.winAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicNowPlaying = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2, this._attached = !1, this.listener = new Ge, this.musicOn = !0;
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
            const s = new qe, a = [
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
            (await Promise.all(a.map((e)=>s.loadAsync(e.path).catch((i)=>(console.error(`Ошибка при загрузке ${e.path}:`, i), null))))).forEach((e, i)=>{
                const n = a[i];
                if (!e) return;
                const l = new We(this.listener);
                l.setBuffer(e), l.setLoop(n.loop), l.setRefDistance(n.ref), l.setVolume(n.vol), n.rate && l.setPlaybackRate(n.rate), this[n.key] = l, this.musics.push({
                    name: n.name,
                    music: l
                }), n.quack && this.quacks.push(l), n.thunder && this.thundersAudio.push({
                    name: n.name,
                    music: l
                });
            }), this.backAudio && this.musics.push({
                name: "back",
                music: this.backAudio
            });
        }
        stopMusic(s) {
            this.musicOn && (s == 0 ? this.musics.forEach((a, o, e)=>{
                a.music.stop();
            }) : s.forEach((a, o, e)=>{
                this.musics.find((i)=>i.name === a).music.stop();
            }));
        }
        pauseMusic(s) {
            this.musicOn && s.forEach((a, o, e)=>{
                this.musics.find((i)=>i.name === a).music.pause();
            });
        }
        playMusic(s) {
            s.forEach((a, o, e)=>{
                let i = this.musics.find((n)=>n.name === a).music;
                !i.isPlaying && this.musicOn && i.play();
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
            s && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((o)=>o.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((o)=>o.name === "back").music = this.musics.find((o)=>o.name === "back1").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((o)=>o.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((o)=>o.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((o)=>o.name === "back").music = this.musics.find((o)=>a ? o.name === "back3" : o.name === "back2").music, this.musicOn && this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((o)=>o.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class Mt {
        constructor(s, a, o, e, i, n){
            this.levelClass = s, this.isMobile = a, this.renderer = o, this.camera = e, this.paramsClass = i, this.audioClass = n, this.mouse = new m, this.raycaster = new Ue;
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
    class Pt {
        constructor(s, a, o, e, i, n){
            this.scene = s, this.camera = a, this.renderer = o, this.paramsClass = e, this.isMobile = i, this.audioClass = n, this.ambientLight = new Oe(11184810, 1), this.hemiLight = new Ve(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ye(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new te, this.dirLight.target = this.targetObject, this.helper = new $e(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.isRainActive = !1, this.rainEndTimestampMs = 0, this.activeLightningLines = [], this.lightningMaterialBase = new Ke({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: Hs,
                depthWrite: !1
            }), this.clock = new Gs, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 10, this.rainAreaHalfDepth = 22, this.rainTopY = 7, this.rainBottomY = -2, this.rainGeometry = new js, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let a = 0; a < this.rainDropCount; a++){
                const o = a * 3;
                this.rainPositions[o + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[o + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[o + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[a] = 10 + Math.random() * 10, this.rainWindPhase[a] = Math.random() * Math.PI * 20;
            }
            const s = new Float32Array(this.rainDropCount * 3);
            for(let a = 0; a < this.rainDropCount; a++){
                const o = .8 + Math.random() * .2;
                s[a * 3 + 0] = .7 * o, s[a * 3 + 1] = .8 * o, s[a * 3 + 2] = 1 * o;
            }
            this.rainGeometry.setAttribute("position", new ps(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new ps(s, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new Pe({
                color: 8947916,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .79,
                transparent: !0,
                opacity: .96,
                size: .18,
                sizeAttenuation: !0,
                depthWrite: !0,
                blending: Hs
            }), this.rainPoints = new Zs(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Fs(900, 500), this.water = new Xe(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new De().load("textures/waternormals.jpg", function(d) {
                    d.wrapS = d.wrapT = Ss;
                }),
                sunDirection: new m,
                sunColor: 16755370,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -2 : this.water.position.y = -2, this.sun = new m, this.sky = new Je, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new ws(new Fs(1e4, 1e4), new ks({
                color: 526362,
                side: Ce,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const a = 1500, o = new Float32Array(a * 3), e = new Float32Array(a), i = new Float32Array(a * 3);
            for(let d = 0; d < a; d++){
                o[3 * d] = Math.random() * 600 - 300, o[3 * d + 1] = Math.random() * 150 - 100, o[3 * d + 2] = Math.random() * 300 - 500, e[d] = Math.random() * 2 + .7;
                const u = new ns().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                i[3 * d] = u.r, i[3 * d + 1] = u.g, i[3 * d + 2] = u.b;
            }
            const n = new js;
            n.setAttribute("position", new ps(o, 3)), n.setAttribute("size", new ps(e, 1)), n.setAttribute("color", new ps(i, 3));
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
            this.materialStars = new Ze({
                uniforms: {
                    time: {
                        value: 0
                    },
                    opacity: {
                        value: 0
                    }
                },
                vertexShader: l,
                fragmentShader: r,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: Hs
            }), this.stars = new Zs(n, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, a = Math.sign(s - this._prevCamX);
            this._prevCamX = a, this.stars.position.x = this.camera.position.x;
            const o = G.degToRad(90 - this.parameters.elevation), e = G.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, o, e), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1, this.rainStart = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), !this.rainStart && this.parameters.elevation < 2 && this.parameters.elevation > 1.5 && (this.rain = !0, this.startRain(), this.audioClass.musicOn && this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1)), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const i = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= i * .05, this.blackSky.material.opacity += i * .02, this.materialStars.uniforms.opacity.value += i * .008, this.camera.position.y < this.topLight && i < 0 ? (this.dirLight.intensity -= i * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= i * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= i * .05, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && i > 0 && (this.dirLight.intensity -= i * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= i * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= i * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && this.camera.position.y > 10 && (this.topLight = this.camera.position.y), this.prevCameraYSun = this.camera.position.y, this.camera.position.y > 30 ? this.night = !0 : this.night = !1;
            }
            this.materialStars.uniforms.time.value = performance.now() * .001;
        }
        waterUpdate() {
            performance.now() * .001, this.water.material.uniforms.time.value += .4 / 60;
        }
        async loadWorld() {
            await this.loadWaterSky(), await this.loadRain(), this.scene.add(this.hemiLight), this.scene.add(this.dirLight), this.scene.add(this.targetObject), this.scene.add(this.water), yt(this.renderer, this.scene, this.camera), bt(this.water, this.renderer, this.scene, this.camera);
        }
        updateLighting() {
            this.isRainActive && performance.now() >= this.rainEndTimestampMs && (this.scene.remove(this.rainPoints), this.isRainActive = !1, this.rain = !1, this.audioClass.musicOn && this.audioClass.rainAudio.stop());
            const s = performance.now();
            this.thunder && (s >= this.nextThunderFlashTimestampMs && (this.triggerThunderFlashNow(), this.scheduleNextThunderFlash(s)), s >= this.thunderEndTimestampMs && (this.thunder = !1, this.isThunderActive = !1)), this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);
            const a = 10;
            this.dirLight.shadow.camera.left = -a, this.dirLight.shadow.camera.right = a, this.dirLight.shadow.camera.top = a, this.dirLight.shadow.camera.bottom = -a, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let o = this.activeLightningLines.length - 1; o >= 0; o--){
                const e = this.activeLightningLines[o];
                e.userData.life -= this.deltaSeconds / 1.5, e.material.opacity *= .78, (e.userData.life <= 0 || e.material.opacity <= .02) && (this.scene.remove(e), e.geometry.dispose(), e.material.dispose(), this.activeLightningLines.splice(o, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const o = this.rainGeometry.getAttribute("position"), e = Math.sin(performance.now() * .0012) * .8, i = this.camera.position.x, n = this.camera.position.z;
                for(let l = 0; l < this.rainDropCount; l++){
                    const r = l * 3, d = Math.sin(this.rainWindPhase[l] + performance.now() * .002) * .35 + e * .4;
                    this.rainPositions[r + 0] += d * this.deltaSeconds * 8, this.rainPositions[r + 1] -= this.rainVelocities[l] * (1 + Math.abs(e) * .3) * this.deltaSeconds, i + this.rainPositions[r + 0], n + this.rainPositions[r + 2], this.rainPositions[r + 1] < this.rainBottomY && (this.rainPositions[r + 1] = this.rainTopY, this.rainPositions[r + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[r + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[l] = Math.random() * Math.PI * 2), this.rainPositions[r + 0] > this.rainAreaHalfWidth && (this.rainPositions[r + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[r + 0] < -this.rainAreaHalfWidth && (this.rainPositions[r + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[r + 2] > this.rainAreaHalfDepth && (this.rainPositions[r + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[r + 2] < -this.rainAreaHalfDepth && (this.rainPositions[r + 2] += this.rainAreaHalfDepth * 2 - 35);
                }
                this.rainPoints.position.set(i, 0, n), o.needsUpdate = !0;
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
        createLightningBolt(s, a, o) {
            const e = s + (Math.random() - .5) * 6, i = -4 + Math.random() * 3, n = o + (Math.random() - .5) * 6, l = e - s, r = i - a, d = n - o, u = Math.hypot(l, r, d) || 1, y = l / u, p = r / u, v = d / u, c = l / u, w = -(d / u), P = 0, b = c, S = Math.abs(p) > .9 ? new m(1, 0, 0) : new m(0, 1, 0), I = new m(y, p, v), W = new m().crossVectors(I, S).normalize(), g = new m().crossVectors(I, W).normalize(), M = 2 + Math.random() * 2, H = 1.2, T = Math.random() * Math.PI * 2, A = 3 + Math.random() * 2.5, O = .8, ys = Math.random() * Math.PI * 2, D = 28, _ = 4, K = [];
            for(let L = 0; L <= D; L++){
                const B = L / D, z = 1 - B;
                let X = s + l * B, rs = a + r * B, ss = o + d * B;
                const J = Math.sin(B * Math.PI * M + T) * H * (.3 + .7 * z), es = Math.sin(B * Math.PI * A + ys) * O * (.3 + .7 * z), ts = (Math.random() - .5) * 2 * _ * z, V = (Math.random() - .5) * 1.6 * _ * z, U = Math.random() < .12 ? (Math.random() - .5) * 3.5 * z : 0;
                if (X += W.x * (J + ts + U) + g.x * (es + V * .7), rs += W.y * (J + ts * .5) + g.y * (es + V * .5), ss += W.z * (J + ts + U) + g.z * (es + V * .7), K.push(X, rs, ss), L > 3 && L < D - 3 && Math.random() < .22) {
                    const hs = [], Ms = 3 + Math.floor(Math.random() * 2), ds = .25 + Math.random() * .35;
                    let Ps = X, Cs = rs, Ds = ss;
                    hs.push(Ps, Cs, Ds);
                    for(let Es = 1; Es <= Ms; Es++)Ps += (Math.random() - .5) * _ * ds, Cs += -(.8 + Math.random() * .8) * ds, Ds += (Math.random() - .5) * _ * ds, hs.push(Ps, Cs, Ds);
                    const Bs = new js;
                    Bs.setAttribute("position", new re(hs, 3));
                    const gs = new he(Bs, this.lightningMaterialBase.clone());
                    gs.material.opacity = .6, gs.userData.life = .16 + Math.random() * .12, this.scene.add(gs), this.activeLightningLines.push(gs);
                }
            }
            const bs = 2;
            for(let L = -1; L <= bs; L++){
                const B = L === -1, z = B ? 0 : L % 2 === 0 ? 1 : -1, X = .55 + Math.random() * .45, rs = .35, ss = Math.random() * Math.PI * 2, J = [], es = K.length / 3;
                for(let U = 0; U < es; U++){
                    const hs = U / (es - 1), Ms = .35 + .85 * hs, ds = Math.sin(hs * Math.PI * 2 + ss) * rs * (.2 + .8 * hs), Ps = w * z * X * Ms + b * ds * .3, Cs = P * z * X * Ms + ds * .05, Ds = b * z * X * Ms - w * ds * .3, Bs = U * 3 + 0, gs = U * 3 + 1, Es = U * 3 + 2, ie = K[Bs], oe = K[gs], ne = K[Es];
                    B ? J.push(ie + (Math.random() - .5) * .05, oe + (Math.random() - .5) * .05, ne + (Math.random() - .5) * .05) : J.push(ie + Ps + (Math.random() - .5) * .2, oe + Cs + (Math.random() - .5) * .2, ne + Ds + (Math.random() - .5) * .2);
                }
                const ts = new js;
                ts.setAttribute("position", new re(J, 3));
                const V = new he(ts, this.lightningMaterialBase.clone());
                V.material.opacity = B ? .95 : .32, V.userData.life = .22 + Math.random() * .18, this.scene.add(V), this.activeLightningLines.push(V);
            }
        }
        triggerLightningFlash() {
            const s = this.camera.position.x + (Math.random() - .5) * 30, a = 34 + Math.random() * 6, o = -10 - Math.random() * 20;
            this.createLightningBolt(s, a, o);
        }
        makeRainStreakTexture() {
            const o = new Uint8Array(320);
            for(let i = 0; i < 40; i++){
                const n = Math.pow(Math.sin(i / 39 * Math.PI), 1.5);
                for(let l = 0; l < 2; l++){
                    const r = (i * 2 + l) * 4;
                    o[r + 0] = 255, o[r + 1] = 255, o[r + 2] = 255, o[r + 3] = Math.round(n * 255);
                }
            }
            const e = new Qe(o, 2, 40, st);
            return e.needsUpdate = !0, e.magFilter = de, e.minFilter = de, e.wrapS = pe, e.wrapT = pe, e.rotation = Math.PI / 2, e.center.set(.5, .5), e;
        }
    }
    const Ct = new Set([
        "Мой рекорд",
        "My record"
    ]);
    function Vs(h) {
        if (!h) return !1;
        if (h.isMine === !0) return !0;
        const s = E("hud.mineRecord", "Мой рекорд");
        return h.name === s || Ct.has(h.name);
    }
    class Dt {
        constructor(s, a, o, e, i){
            this.initMatch = s, this.loadLevels = a, this.gameClass = o, this.audioClass = e, this.dataClass = i, this.playersNum = 1, this.levelPlayersNum = 1, this.mainMenu(this.initMatch), this.loadRecsData();
        }
        loadRecsData() {
            let s = this.dataClass.masTables, a = document.querySelectorAll(".rec_table_small"), o = "free_game_my_rec", e = "";
            a[0].innerHTML = "", a[1].innerHTML = "", s.forEach((i, n, l)=>{
                s[n].forEach((r, d, u)=>{
                    s[n][d].findIndex((y)=>y.name === "Мой рекорд") < 3 ? a[n].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == d + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place ${Vs(s[n][d][0]) ? o : e}'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[n][d][0].name}</span>
                <div><span class='place_rec'>${s[n][d][0].rec}</span><span>${E("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='green_back two_place ${Vs(s[n][d][1]) ? o : e}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[n][d][1].name}</span>
                <div><span class='place_rec'>${s[n][d][1].rec}</span><span>${E("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='blue_back three_place ${Vs(s[n][d][2]) ? o : e}'>
                <span class='place_num'>3</span>
                <span class='rec_table_small_name'>${s[n][d][2].name}</span>
                <div><span class='place_rec'>${s[n][d][2].rec}</span><span>${E("hud.metersLabel", "м")}</span></div>
            </div>
          </div>
        `) : a[n].insertAdjacentHTML("beforeend", `
          <div class='rec_table_small_block ${this.playersNum == d + 1 ? "" : "hidden_screen"}'>
            <div class='yellow_back one_place'>
                <span class='place_num'>1</span>
                <span class='rec_table_small_name'>${s[n][d][0].name}</span>
                <div><span class='place_rec'>${s[n][d][0].rec}</span><span>${E("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='green_back two_place}'>
                <span class='place_num'>2</span>
                <span class='rec_table_small_name'>${s[n][d][1].name}</span>
                <div><span class='place_rec'>${s[n][d][1].rec}</span><span>${E("hud.metersLabel", "м")}</span></div>
            </div>
            <div class='blue_back three_place ${o}'>
                <span class='place_num'>${s[n][d][3].pos}</span>
                <span class='rec_table_small_name'>${s[n][d][3].name}</span>
                <div><span class='place_rec'>${s[n][d][3].rec}</span><span>${E("hud.metersLabel", "м")}</span></div>
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
                this.dataClass.levelCoopMode = "coop", document.querySelectorAll(".levels_game_screen .level_game_chels").forEach((o, e, i)=>{
                    o.classList.contains("level_game_chels_active") && (this.levelPlayersNum = e + 1);
                }), this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", async ()=>{
                this.dataClass.levelCoopMode = "contest", document.querySelectorAll(".levels_game_screen_contest .level_game_chels_contest").forEach((o, e, i)=>{
                    o.classList.contains("level_game_chels_contest_active") && (this.levelPlayersNum = e + 2);
                }), this.hideScreen("main_screen"), this.showScreen("levels_game_screen_contest");
            }), document.querySelectorAll(".arrow_back").forEach((o, e, i)=>{
                o.addEventListener("click", ()=>{
                    o.parentElement.parentElement.classList.add("hidden_screen"), this.showScreen("main_screen");
                });
            });
            const s = document.querySelector(".levels_blocks");
            s.addEventListener("click", (o)=>{
                const e = o.target.closest(".levels_block");
                if (!e || e.classList.contains("levels_block--locked")) return;
                const i = Number(e.dataset.level) || 1;
                s.querySelectorAll(".levels_block").forEach((n)=>n.classList.remove("active")), e.classList.add("active"), this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, i, !0);
            });
            const a = document.querySelector(".levels_blocks_contest");
            a.addEventListener("click", (o)=>{
                const e = o.target.closest(".levels_block");
                if (!e) return;
                const i = Number(e.dataset.level) || 1;
                a.querySelectorAll(".levels_block").forEach((n)=>n.classList.remove("active")), e.classList.add("active"), this.hideScreen("levels_game_screen_contest"), this.initMatch(this.levelPlayersNum, 1, i, !0);
            }), document.querySelector(".contest_game_btn").addEventListener("click", (o)=>{
                const e = Math.floor(Math.random() * this.dataClass.allLevels);
                this.hideScreen("levels_game_screen_contest"), this.initMatch(this.levelPlayersNum, 1, e, !0);
            }), document.querySelectorAll(".level_game_chels").forEach((o, e, i)=>{
                o.addEventListener("click", ()=>{
                    this.levelPlayersNum != e + 1 && (document.querySelectorAll(".level_game_chels").forEach((n)=>{
                        n.classList.remove("level_game_chels_active");
                    }), o.classList.add("level_game_chels_active"), this.levelPlayersNum = e + 1, this.dataClass.loadLevels(this.levelPlayersNum - 1));
                });
            }), document.querySelectorAll(".level_game_chels_contest").forEach((o, e, i)=>{
                o.addEventListener("click", ()=>{
                    this.levelPlayersNum != e + 2 && (document.querySelectorAll(".level_game_chels_contest").forEach((n)=>{
                        n.classList.remove("level_game_chels_contest_active");
                    }), o.classList.add("level_game_chels_contest_active"), this.levelPlayersNum = e + 2);
                });
            }), document.querySelector(".free_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 2);
            }), document.querySelector(".free_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(this.playersNum, 4, !1, !1);
            }), document.querySelectorAll(".free_game_chels").forEach((o, e)=>{
                o.addEventListener("click", ()=>{
                    document.querySelectorAll(".free_game_chels").forEach((u)=>{
                        u.classList.remove("free_game_chels_active");
                    }), o.classList.add("free_game_chels_active");
                    const i = e + 1, n = document.querySelectorAll(".rec_table_small"), l = [];
                    n.forEach((u)=>{
                        const y = u.querySelector(".rec_table_small_block:not(.hidden_screen)");
                        y && (l.push(y), y.getBoundingClientRect(), y.classList.add("anim-out"));
                    });
                    let r = 0;
                    const d = ()=>{
                        if (r++, r < l.length) return;
                        this.playersNum = i, this.loadRecsData();
                        const u = [];
                        document.querySelectorAll(".rec_table_small").forEach((y)=>{
                            const p = y.querySelector(".rec_table_small_block:not(.hidden_screen)");
                            p && (p.classList.add("anim-in"), u.push(p));
                        }), requestAnimationFrame(()=>{
                            u.forEach((p)=>{
                                p.getBoundingClientRect(), p.classList.add("anim-play");
                            });
                            const y = (p)=>{
                                p.classList.remove("anim-in", "anim-play"), p.removeEventListener("transitionend", y);
                            };
                            u.forEach((p)=>p.addEventListener("transitionend", ()=>y(p), {
                                    once: !0
                                }));
                        });
                    };
                    l.length === 0 ? (this.playersNum = i, this.loadRecsData()) : l.forEach((u)=>{
                        u.addEventListener("transitionend", ()=>{
                            u.classList.remove("anim-out"), u.removeEventListener("transitionend", d), d();
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
    class jt {
        constructor(){
            this.gameDir = "hor", this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class _t {
        constructor(s, a){
            this.camera = s, this.dataClass = a, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y, this.metersFloatEl = document.getElementById("meters-float"), this.myRecField = document.getElementById("myRecord"), this.worldRecField = document.getElementById("worldRecord"), this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3), this.worldRec = 0, this.myRec = 0;
        }
        loadRecsToHud(s = 0, a = 0) {
            const o = this.dataClass.masTables?.[s]?.[a] || [];
            this.worldRec = Number(o?.[0]?.rec) || 0;
            const e = t("leaderboard.mine", "Мой рекорд");
            let i = o.find((n)=>n && n.name === e && n.pos !== 0);
            if (!i && o?.[3]?.name === e && (i = o[3]), !i) {
                const n = s === 0 ? "hor" : "vert";
                i = this.dataClass.table?.[n]?.[a]?.[0] || {
                    rec: 0
                };
            }
            this.myRec = Number(i.rec) || 0, this.myRecField && (this.myRecField.textContent = this.myRec), this.worldRecField && (this.worldRecField.textContent = this.worldRec);
        }
        updateMetersFloat(s, a, o = "hor") {
            const e = o === "vert" ? "y" : "x", i = 1e-4;
            for (const p of a){
                const v = p?.player;
                if (!v) continue;
                const c = v.userData || (v.userData = {});
                c.score == null && (c.score = 0);
                let f = v.position?.[e] ?? 0;
                if (c._lastMeterPos == null && (c._lastMeterPos = f), o !== "vert" && c._wasLive === !1 && c.live && (c._lastMeterPos = f), c.live) {
                    const w = f - c._lastMeterPos, P = w > i ? w : 0;
                    P !== 0 && (c.score += P, c._lastMeterPos = f);
                }
                c.score === 0 && (c._lastMeterPos = f), c._wasLive = !!c.live;
            }
            this.playerPanels || (this.playerPanels = Array.from(document.querySelectorAll(".player_panel_rec_num")).slice(0, 3));
            let n = 0;
            for(let p = 0; p < 3; p++){
                const v = this.playerPanels[p], c = a[p]?.player, f = Math.max(0, Math.floor(c?.userData?.score || 0));
                n += f, v && (v.textContent = String(f).padStart(3, "0"));
            }
            const l = Math.max(0, Math.floor(n));
            if (l === Ys) return;
            const r = Ys, d = performance.now(), u = 50, y = (p)=>{
                const v = Math.min(1, (p - d) / u), c = 1 - Math.pow(1 - v, 4), f = Math.round(r + (l - r) * c);
                this.score = f, this.metersFloatEl && (this.metersFloatEl.textContent = String(f).padStart(3, "0")), v < 1 ? requestAnimationFrame(y) : Ys = l;
            };
            requestAnimationFrame(y);
        }
    }
    let Ys = 0;
    class St {
        constructor(){
            this.gameStarting = !1, this.pause = !1, this.visible = !0, this.showGamePopup = !1;
        }
    }
    class Lt {
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
            return E("leaderboard.mine", this.getMineLabel());
        }
        saveLocalData() {}
        async loadLocalData() {
            this.processDataAfterLoad();
        }
        async loadLevels(s) {
            const a = document.querySelector(".levels_blocks");
            if (!a) return;
            a.classList.add("levels_blocks--reenter"), a.innerHTML = "";
            const o = document.createDocumentFragment(), e = (r)=>{
                switch(r){
                    case "completed":
                        return {
                            modifierClass: "levels_block--completed",
                            labelText: E("levels.status.completed", "Пройден"),
                            ariaState: E("levels.status.completedAria", "уровень пройден")
                        };
                    case "available":
                        return {
                            modifierClass: "levels_block--available",
                            labelText: E("levels.status.available", "Доступен"),
                            ariaState: E("levels.status.availableAria", "уровень доступен")
                        };
                    default:
                        return {
                            modifierClass: "levels_block--locked",
                            labelText: E("levels.status.locked", "Закрыт"),
                            ariaState: E("levels.status.lockedAria", "уровень закрыт")
                        };
                }
            }, i = 40, n = 60, l = 600;
            for(let r = 0; r < this.levelsStatus[s].length; r++){
                const d = this.levelsStatus[s][r], { modifierClass: u, labelText: y, ariaState: p } = e(d), v = r === 9, c = document.createElement("div");
                c.className = `levels_block ${u}${v ? " levels_block--super" : ""}`, c.setAttribute("data-level", String(r + 1)), c.setAttribute("role", "button"), c.setAttribute("tabindex", d === "locked" ? "-1" : "0"), c.setAttribute("aria-label", `Уровень ${r + 1}, ${p}${v ? ", бонусный уровень" : ""}`);
                const f = Math.min(n + r * i, l);
                c.style.setProperty("--show-delay", `${f}ms`);
                const w = document.createElement("div");
                if (w.className = "levels_block_number", w.textContent = String(r + 1), v) {
                    const S = document.createElement("div");
                    S.className = "level_reward_icon", S.innerHTML = "+❤️", c.appendChild(S);
                }
                const P = document.createElement("div");
                P.className = "levels_block_status";
                const b = document.createElement("span");
                b.className = `status_chip ${d === "completed" ? "status_chip--completed" : d === "available" ? "status_chip--available" : "status_chip--locked"}`, b.setAttribute("data-i18n", `levels.status.${d}`), b.textContent = y, P.appendChild(b), c.append(w, P), c.addEventListener("click", ()=>{
                    d !== "locked" && (document.querySelectorAll(".levels_block").forEach((S)=>S.classList.remove("active")), c.classList.add("active"));
                }), c.addEventListener("keydown", (S)=>{
                    d !== "locked" && (S.key === "Enter" || S.key === " ") && (S.preventDefault(), c.click());
                }), o.appendChild(c);
            }
            a.append(o), requestAnimationFrame(()=>{
                a.classList.remove("levels_blocks--reenter"), a.querySelectorAll(".levels_block").forEach((r)=>{
                    r.classList.add("levels_block--enter"), r.classList.contains("levels_block--super") && r.addEventListener("animationend", (d)=>{
                        d.animationName === "level-tile-in" && r.classList.add("levels_block--enter-done");
                    });
                });
            }), this.disableSelection();
        }
        async loadLevelsContest() {
            const s = document.querySelector(".levels_blocks_contest");
            if (!s) return;
            s.classList.add("levels_blocks--reenter"), s.innerHTML = "";
            const a = document.createDocumentFragment(), o = 40, e = 60, i = 600;
            for(let n = 0; n < this.allLevels; n++){
                const l = n + 1, r = this.table.levelsStatusContest?.[n] ?? 0, d = document.createElement("div");
                d.className = "levels_block levels_block--contest", d.setAttribute("data-level", l), d.setAttribute("role", "button"), d.setAttribute("tabindex", "0"), d.setAttribute("aria-label", `Уровень ${l}, значение ${r}`);
                const u = Math.min(e + n * o, i);
                d.style.setProperty("--show-delay", `${u}ms`), r && d.classList.add(`level_player${r}`);
                const y = document.createElement("div");
                y.className = "levels_block_number", y.textContent = String(l);
                const p = document.createElement("div");
                p.className = "levels_block_status", r ? (p.setAttribute("data-i18n", `contest.player${r}`), p.textContent = E(`contest.player${r}`)) : p.textContent = "";
                const v = r ? E(`contest.player${r}`) : "";
                p.textContent = v, d.append(y, p), d.addEventListener("click", ()=>{
                    document.querySelectorAll(".levels_block").forEach((c)=>c.classList.remove("active")), d.classList.add("active");
                }), d.addEventListener("keydown", (c)=>{
                    (c.key === "Enter" || c.key === " ") && (c.preventDefault(), d.click());
                }), a.append(d);
            }
            s.append(a), requestAnimationFrame(()=>{
                s.classList.remove("levels_blocks--reenter"), s.querySelectorAll(".levels_block").forEach((n)=>{
                    n.classList.add("levels_block--enter");
                });
            }), this.disableSelection();
        }
        replayLevelsEnterAnimation() {
            const s = document.querySelector(".levels_blocks");
            if (!s) return;
            Array.from(s.querySelectorAll(".levels_block")).forEach((o)=>{
                o.classList.remove("levels_block--enter"), o.offsetWidth, o.classList.add("levels_block--enter");
            });
        }
        processDataAfterLoad() {
            const s = (a)=>{
                const o = [
                    a[1],
                    a[2],
                    a[3]
                ].map((i, n)=>i ? {
                        pos: i.pos,
                        name: i.name,
                        rec: i.rec
                    } : {
                        pos: n + 1,
                        name: "",
                        rec: 0
                    });
                if (o.some((i)=>i && i.name === this.getMineLabel())) return o;
                {
                    const i = a[3] && a[3].name === this.getMineLabel() ? {
                        pos: a[3].pos,
                        name: this.getMineLabel(),
                        rec: a[3].rec
                    } : {
                        pos: 0,
                        name: this.getMineLabel(),
                        rec: a[0]?.rec || 0
                    };
                    return [
                        o[0],
                        o[1],
                        o[2],
                        i
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
            for(let a = 0; a < 3; a++)for(let o = 0; o < this.allLevels; o++)o < this.table.player.levels[a] ? this.levelsStatus[a][o] = "completed" : o == this.table.player.levels[a] ? this.levelsStatus[a][o] = "available" : this.levelsStatus[a][o] = "locked";
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
            const a = this.yandexPlayer?.player?.getUniqueID ? this.yandexPlayer.player.getUniqueID() : null, o = async (e)=>{
                try {
                    const [i, n] = await Promise.all([
                        s.leaderboards.getEntries(e, {
                            quantityTop: 3,
                            includeUser: !0,
                            quantityAround: 0
                        }),
                        s.leaderboards.getPlayerEntry(e).catch(()=>null)
                    ]), l = (i.entries || []).map((p)=>({
                            uid: p.player?.uniqueID || null,
                            name: p.player?.publicName || "Anon",
                            rec: typeof p.score == "number" ? p.score : 0,
                            pos: p.rank || 0
                        }));
                    l.sort((p, v)=>v.rec - p.rec);
                    let r = [];
                    if (n && a) {
                        const p = n.rank || 0, v = typeof n.score == "number" ? n.score : 0;
                        if (l.some((w)=>w.uid === a)) r = l.slice(0, 3).map((w)=>({
                                pos: (w.uid === a, w.pos),
                                name: w.uid === a ? this.getMineLabel() : w.name,
                                rec: w.rec
                            }));
                        else {
                            const w = l.filter((b)=>b.uid !== a).slice(0, 2).map((b)=>({
                                    pos: b.pos,
                                    name: b.name,
                                    rec: b.rec
                                })), P = {
                                pos: p || 0,
                                name: this.getMineLabel(),
                                rec: v
                            };
                            r = [
                                ...w,
                                P
                            ];
                        }
                        const f = this.leaderboardPlacement[e];
                        if (f) {
                            const w = f.group === "hor" ? this.table.hor[f.row] : this.table.vert[f.row];
                            w && w[0] && (w[0].rec = v);
                        }
                    } else r = l.slice(0, 3).map((p)=>({
                            pos: p.pos,
                            name: p.name,
                            rec: p.rec
                        }));
                    const d = this.leaderboardPlacement[e];
                    if (!d) return;
                    const u = d.group === "hor" ? this.table.hor[d.row] : this.table.vert[d.row];
                    for(let p = 0; p < 3; p++){
                        const v = r[p] || {
                            pos: p + 1,
                            name: "",
                            rec: 0
                        };
                        u[p + 1] = {
                            pos: v.pos,
                            name: v.name,
                            rec: v.rec
                        };
                    }
                    if (!r.some((p)=>p.name === this.getMineLabel()) && n && a) {
                        const p = n.rank || 0, v = typeof n.score == "number" ? n.score : 0;
                        u[3] = {
                            pos: p,
                            name: this.getMineLabel(),
                            rec: v
                        };
                    }
                } catch (i) {
                    console.warn(`Leaderboard ${e} smart top-3 failed:`, i);
                    const n = this.leaderboardPlacement[e];
                    if (!n) return;
                    const l = n.group === "hor" ? this.table.hor[n.row] : this.table.vert[n.row];
                    for(let r = 1; r <= 3; r++)l[r] = {
                        pos: r,
                        name: "",
                        rec: 0
                    };
                }
            };
            await Promise.all(this.leaderboardsPartIds.map(o)), this.processDataAfterLoad();
        }
        async submitMyScore(s, a, o) {
            const e = Number(o) || 0;
            try {
                if (!await s.isAvailableMethod("leaderboards.setScore")) return;
                await s.leaderboards.setScore(a, e);
            } catch (i) {
                console.warn("Submit score failed:", i);
            }
        }
    }
    class kt {
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
            const s = new De, [a, o, e] = await Promise.all([
                s.loadAsync("textures/plane.jpg"),
                s.loadAsync("textures/grass.jpg"),
                s.loadAsync("textures/mks.png")
            ]);
            this.plane.texture = a, this.plane.material = new us({
                map: a,
                transparent: !0,
                opacity: 1
            }), this.planeGrass.texture = o, this.planeGrass.material = new us({
                map: o
            }), this.mks.texture = e, this.mks.material = new ks({
                map: e,
                transparent: !0,
                opacity: 0
            });
        }
        async loadModels() {
            await new Qs().loadAsync("models/bird/bird.glb").then((o)=>{
                const e = o.scene, i = o.animations;
                e.scale.x = 2, e.scale.y = 2, e.scale.z = 2, e.position.y = 0, e.rotation.y = -Math.PI / 3, this.angryBirdModel = e, this.angryBirdModel.userData.mixer = new et(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(i[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Gs, this.angryBirdModel.traverse((l)=>{
                    (l.isMesh || l.isSkinnedMesh) && (l.castShadow = !1, l.receiveShadow = !1, l.geometry && !l.geometry.boundingSphere && l.geometry.computeBoundingSphere());
                });
                const n = this.angryBirdModel.children[0].children[0].material;
                n.emissive.set(16777215), n.emissiveIntensity = .1;
            });
        }
        async loadBoostsModel() {
            await new Qs().loadAsync("models/boosts/hat.glb").then((o)=>{
                const e = o.scene;
                this.boostHatModel = e, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
                const i = this.boostHatPropeller.children[0].material;
                i.emissive.set(16777215), i.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 17, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .035, this.boostHatModel.scale.y = .035, this.boostHatModel.scale.z = .035, this.boostHatModel.userData.fly = !1, this.boostHatModel.userData.num = 0;
            });
        }
    }
    document.addEventListener("contextmenu", (h)=>(h.preventDefault(), !1), {
        capture: !0
    });
    document.addEventListener("selectstart", (h)=>(h.preventDefault(), !1), {
        capture: !0
    });
    document.addEventListener("dragstart", (h)=>(h.preventDefault(), !1), {
        capture: !0
    });
    document.addEventListener("touchstart", (h)=>{
        h.touches.length > 1 && h.preventDefault();
    }, {
        passive: !1
    });
    let ae;
    document.addEventListener("touchstart", (h)=>{
        ae = setTimeout(()=>{
            h.preventDefault();
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
    document.addEventListener("dblclick", (h)=>(h.preventDefault(), !1), {
        capture: !0
    });
    (navigator.userAgent.includes("YaBrowser") || navigator.userAgent.includes("Yandex")) && document.addEventListener("touchstart", (h)=>{
        h.preventDefault();
    }, {
        passive: !1
    });
    let se, At = new Gs, je, ls, xs, Q, C, j, Ls, q, zs, F, fs, $s = !1, Ks = !1, x = new St;
    const ms = new tt;
    ms.background = new ns(13230580);
    const _e = ct({
        scene: ms
    }), Se = ut({
        scene: ms
    }), N = new at(25, window.innerWidth / window.innerHeight, .1, 2e3);
    N.position.y = 2;
    const zt = 16 / 9, Bt = G.degToRad(25), Et = 2 * Math.atan(Math.tan(Bt / 2) * zt), Xs = ht();
    function qs() {
        const h = (window.visualViewport?.height || window.innerHeight) * .01;
        document.documentElement.style.setProperty("--vh", `${h}px`);
    }
    qs();
    window.addEventListener("resize", qs);
    window.addEventListener("orientationchange", qs);
    window.visualViewport?.addEventListener("resize", qs);
    new it;
    const R = new ot({
        antialias: !1
    });
    R.setPixelRatio(Math.min(window.devicePixelRatio, 1));
    R.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(R.domElement);
    R.shadowMap.enabled = !0;
    R.shadowMap.type = nt;
    R.outputColorSpace = lt;
    R.toneMapping = rt;
    R.toneMappingExposure = 1.05;
    function Le() {
        const h = document.body.offsetWidth, s = document.body.offsetHeight, a = h / s;
        let o = 2 * Math.atan(Math.tan(Et / 2) / a);
        const e = G.degToRad(4), i = G.degToRad(90);
        o = G.clamp(o, e, i), N.fov = G.radToDeg(o), N.aspect = a, N.updateProjectionMatrix(), R.setSize(h, s);
    }
    window.addEventListener("resize", Le);
    Le();
    document.body.addEventListener("touchstart", function(h) {
        h.preventDefault(), document.body.requestFullscreen().then(()=>{
            screen.orientation.lock("landscape").catch(()=>{});
        }).catch(()=>{});
    }, {
        passive: !1,
        once: !0
    });
    let $ = document.querySelector(".loader_line");
    async function Tt() {
        Me(!0), F = new Lt, ft(), fs = new kt, await fs.loadModels(), await fs.loadBoostsModel(), $.setAttribute("style", "width:30%"), await fs.loadTexture(), await Ht(), $.setAttribute("style", "width:30%"), j = new xt, await j.loadAudio(), $.setAttribute("style", "width:60%"), await F.loadTableFromCloud(), await F.loadLeaderboardsTop3(ysdk), await F.loadLevels(0), await F.loadLevelsContest(), $.setAttribute("style", "width:100%"), ls = new Dt(ke, F.loadLevels, x, j, F), Me(!1), $.setAttribute("style", "width:0%"), ysdk.features.LoadingAPI.ready(), ysdk.features.GameplayAPI.stop();
    }
    await Tt();
    async function Ht() {
        [
            "images/back-win.jpg",
            "images/back-loose.jpg",
            "images/back-dead.jpg",
            "images/main.jpg"
        ].forEach((h)=>{
            const s = new Image;
            s.decoding = "async", s.src = h;
        });
    }
    async function Ft(h) {
        const s = await Ae(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        se = new s.World(new s.Vector3(0, -9.81, 0)), je = new s.EventQueue(!0), Q = new cs(se, s), zs = new _t(N, F), xs = new Pt(ms, N, R, q, Xs, j), C = new wt(ms, j, Q, R, N, Xs, q, xs, ke, F, x, _e, Se, zs, ls, fs);
        for(let a = 0; a < h; a++)C.players.push(new gt(F, ms, j, C, q, N, x, fs));
        Ls = new Mt(C, Xs, R, N, q, j), Ls.addKeyListeners();
    }
    async function Rt() {
        await xs.loadWorld(), j.musicOn && j.backAudio.play(), j.musicOn && j.oceanAudio.play();
    }
    async function It(h) {
        await C.createLevel(h), await C.loadPlayers(), await C.loadEnvironments(), C.objs.grassPlanes.data.length > 0 && C.objs.grassPlanes.data.forEach((s, a)=>{
            C.objs.grassPlanes.data[a].userData.collide.setCollisionGroups(Rs([
                0
            ], [
                1
            ]));
        }), C.players.length > 0 && C.players.forEach((s, a)=>{
            C.players[a].player.userData.collider.setCollisionGroups(Rs([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function ke(h, s, a = !1) {
        Nt(), ls.toggleLoader(!0), q = new jt, await Ft(h), $.setAttribute("style", "width:30%"), C.gameNum = s, await Rt(), $.setAttribute("style", "width:60%"), await It(a), $.setAttribute("style", "width:90%"), q.gameDir === "hor" ? zs.loadRecsToHud(0, C.players.length - 1) : zs.loadRecsToHud(1, C.players.length - 1), q.dataLoaded = !0, x.gameStarting = !0, F.gameInit = !0, $.setAttribute("style", "width:100%"), setTimeout(()=>{
            ls.toggleLoader(!1), $.setAttribute("style", "width:0%");
        }, 1e3);
    }
    function Nt() {
        N.position.y = 2, N.position.x = 0, R.toneMappingExposure = 1.05, Ls?.removedKeyListeners(), xs = null, Q = null, C = null, Ls = null, q = null, zs = null;
    }
    function Gt() {
        if (x.gameStarting && document.querySelector(".menu_in_game").classList.contains("hidden_screen") && q.dataLoaded && C.showScreen("menu_in_game"), F.gameInit && x.gameStarting && !C.levelsMode && document.querySelector(".hud").classList.contains("hidden_screen") && q.dataLoaded ? (ls.showScreen("hud"), ls.hideScreen("level_hud_wrap")) : !F.gameInit && !document.querySelector(".hud").classList.contains("hidden_screen") && (ls.hideScreen("hud"), ls.showScreen("level_hud_wrap")), F.gameInit && x.gameStarting && C.levelsMode && !document.querySelector(".player_panel_rec").classList.contains("hidden_screen") ? document.querySelectorAll(".player_panel_rec").forEach((h, s, a)=>{
            h.classList.add("hidden_screen");
        }) : F.gameInit && x.gameStarting && !C.levelsMode && document.querySelector(".player_panel_rec").classList.contains("hidden_screen") && document.querySelectorAll(".player_panel_rec").forEach((h, s, a)=>{
            h.classList.remove("hidden_screen");
        }), x.gameStarting ? (_e.update(Ns), Se.update(Ns), $s || (ysdk.features.GameplayAPI.start(), $s = !0, Ks = !1)) : Ks || (ysdk.features.GameplayAPI.stop(), Ks = !0, $s = !1), q.dataLoaded && x.gameStarting) {
            C.players.forEach((h, s, a)=>{
                h.playerMove();
            }), xs.updateLighting(), C.levelAnimate(N), C.cameraMove(N);
            for(let h = 0, s = Q.dynamicBodies.length; h < s; h++)Q.dynamicBodies[h][0].position.copy(Q.dynamicBodies[h][1].translation()), Q.dynamicBodies[h][0].quaternion.copy(Q.dynamicBodies[h][1].rotation());
            Q.updateInstancedTransforms(), se.step(je), x.gameStarting && R.render(ms, N);
        }
    }
    let Js = 0;
    const Ns = 1 / 60, xe = .1;
    R.setAnimationLoop(()=>{
        if (q != null) {
            let h = At.getDelta();
            for(h > xe && (h = xe), Js += h; Js >= Ns;)Gt(), Js -= Ns;
        }
    });
    function Me(h) {
        const s = document.querySelector(".loader_screen");
        s && (h ? s.classList.remove("hidden_screen") : s.classList.add("hidden_screen"));
    }
    document.addEventListener("visibilitychange", function() {
        document.visibilityState === "visible" ? (!x.pause && !x.showGamePopup && (x.gameStarting = !0, j.togglePauseAll(!x.gameStarting)), x.visible = !0) : (!x.pause && !x.showGamePopup ? (x.gameStarting = !1, j.togglePauseAll(!x.gameStarting)) : x.pause || j.togglePauseAll(!x.gameStarting), x.visible = !1);
    });
    document.querySelector(".pause_btn_wrap").addEventListener("click", ()=>{
        !x.pause && x.gameStarting && (x.pause = !x.pause, x.pause && (C.showPopupInGame(), x.gameStarting = !1, j.togglePauseAll(!x.gameStarting), C.showScreen("popup_game_btn_close")));
    });
    document.querySelector(".popup_game_btn_close").addEventListener("click", ()=>{
        (x.pause || x.gameStarting) && (x.pause = !x.pause, x.gameStarting = !0, j.togglePauseAll(!x.gameStarting), xs.rain && !j.rainAudio.isPlaying && j.rainAudio.play(), j.oceanAudio.isPlaying || j.oceanAudio.play(), C.hideScreen("popup_in_game"), C.hideScreen("popup_game_btn_close"));
    });
    document.querySelector(".sound_btn_wrap").addEventListener("click", ()=>{
        const h = j.isMuted();
        j.toggleMute(!h), document.querySelector(".volume-icon__input").classList.toggle("volume_off");
    });
    function qt() {
        const h = [
            ".free_game_screen",
            ".levels_game_screen",
            ".levels_game_screen_contest",
            ".main_screen"
        ];
        let s = null, a = null, o = null, e = !1, i = 0, n = 0;
        const l = ()=>{
            for (const c of h){
                const f = document.querySelector(c);
                if (f && !f.classList.contains("hidden_screen")) return f;
            }
            return null;
        }, r = ()=>{
            const c = l();
            c !== s && (s && s.removeEventListener("scroll", d, {
                passive: !0
            }), o && (o.removeEventListener("mousedown", u), o.removeEventListener("touchstart", u)), s = c, a = s ? s.querySelector(".scroll-progress") : null, o = a ? a.querySelector(".scroll-progress__bar") : null, s && s.addEventListener("scroll", d, {
                passive: !0
            }), o && (o.addEventListener("mousedown", u), o.addEventListener("touchstart", u)), d());
        }, d = ()=>{
            if (!s || !a || !o) return;
            const c = s.clientHeight, f = s.scrollHeight, w = s.scrollTop;
            if (f <= c + 1) {
                a.classList.remove("visible");
                return;
            }
            a.classList.add("visible");
            const P = a.getBoundingClientRect().height, S = Math.max(c / f * P, 24), I = f - c, W = P - S, g = I > 0 ? w / I * W : 0;
            o.style.height = `${S}px`, o.style.top = `${g}px`;
        }, u = (c)=>{
            !s || !o || (e = !0, i = c.touches ? c.touches[0].clientY : c.clientY, n = s.scrollTop, document.body.style.userSelect = "none", c.preventDefault());
        }, y = (c)=>{
            if (!e || !s || !o || !a) return;
            const w = (c.touches ? c.touches[0].clientY : c.clientY) - i, P = a.getBoundingClientRect().height, b = s.clientHeight, S = s.scrollHeight, I = Math.max(1, P - o.offsetHeight), W = (S - b) / I;
            s.scrollTop = n + w * W;
        }, p = ()=>{
            e = !1, document.body.style.userSelect = "";
        };
        window.addEventListener("resize", ()=>{
            r(), d();
        }), window.addEventListener("mousemove", y, {
            passive: !1
        }), window.addEventListener("touchmove", y, {
            passive: !1
        }), window.addEventListener("mouseup", p), window.addEventListener("touchend", p), new MutationObserver(()=>{
            r();
        }).observe(document.body, {
            attributes: !0,
            subtree: !0,
            attributeFilter: [
                "class"
            ]
        }), r();
    }
    qt();
});

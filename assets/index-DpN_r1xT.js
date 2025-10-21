import { B as Z, V as p, Q as ps, M as mt, a as xs, b as T, c as rs, d as V, G as Ls, E as k, C as E, S as yt, e as bt, f as Rs, I as _, D as H, g as gt, h as Ps, O as Hs, T as et, R as ls, i as at, P as gs, A as ft, j as vt, k as wt, l as vs, m as F, n as jt, o as xt, p as Pt, q as j, r as Dt, s as Mt, H as Ct, t as At, u as zt, L as St, v as fs, w as ns, x as kt, y as Is, z as Gs, W as Lt, F as Bt, J as _t, K as Ht, N as Ns, U as Ws, X as Tt, Y as Et, Z as Us, _ as Vs, $ as Ft, a0 as Rt, a1 as It, a2 as Gt, a3 as Nt, a4 as Wt, a5 as Ut } from "./three-DAxnn8pU.js";
(async ()=>{
    (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload")) return;
        for (const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);
        new MutationObserver((t)=>{
            for (const e of t)if (e.type === "childList") for (const o of e.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function a(t) {
            const e = {};
            return t.integrity && (e.integrity = t.integrity), t.referrerPolicy && (e.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? e.credentials = "include" : t.crossOrigin === "anonymous" ? e.credentials = "omit" : e.credentials = "same-origin", e;
        }
        function i(t) {
            if (t.ep) return;
            t.ep = !0;
            const e = a(t);
            fetch(t.href, e);
        }
    })();
    const Vt = "modulepreload", qt = function(l, s) {
        return new URL(l, s).href;
    }, qs = {}, Ot = function(s, a, i) {
        let t = Promise.resolve();
        if (a && a.length > 0) {
            let h = function(m) {
                return Promise.all(m.map((c)=>Promise.resolve(c).then((d)=>({
                            status: "fulfilled",
                            value: d
                        }), (d)=>({
                            status: "rejected",
                            reason: d
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = n?.nonce || n?.getAttribute("nonce");
            t = h(a.map((m)=>{
                if (m = qt(m, i), m in qs) return;
                qs[m] = !0;
                const c = m.endsWith(".css"), d = c ? '[rel="stylesheet"]' : "";
                if (!!i) for(let y = o.length - 1; y >= 0; y--){
                    const u = o[y];
                    if (u.href === m && (!c || u.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${m}"]${d}`)) return;
                const b = document.createElement("link");
                if (b.rel = c ? "stylesheet" : Vt, c || (b.as = "script"), b.crossOrigin = "", b.href = m, r && b.setAttribute("nonce", r), document.head.appendChild(b), c) return new Promise((y, u)=>{
                    b.addEventListener("load", y), b.addEventListener("error", ()=>u(new Error(`Unable to preload CSS for ${m}`)));
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
    function v(l, s) {
        return Math.random() * (s - l) + l;
    }
    function Yt() {
        let l = window.matchMedia || window.msMatchMedia;
        return l ? l("(pointer:coarse)").matches : !1;
    }
    function Os(l) {
        return l.reduce((s, a)=>s | 1 << a, 0);
    }
    function Ds(l, s) {
        const a = Os(l), i = Os(s);
        return "0x" + ((a & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
    }
    function Ys(l) {
        const s = l.collisionGroups(), a = s >>> 16 & 65535, i = s & 65535;
        function t(e) {
            const o = [];
            for(let n = 0; n < 16; n++)e & 1 << n && o.push(n);
            return o;
        }
        return [
            t(a),
            t(i)
        ];
    }
    function Xt(l) {
        return typeof l == "number" ? new p(l, l, l) : l?.isVector3 ? l : new p(l?.x ?? 1, l?.y ?? 1, l?.z ?? 1);
    }
    function Xs(l) {
        return l?.userData?.id ?? l?.uuid ?? l?.id;
    }
    const Jt = new Z(new p(-.5, -.5, -.5), new p(.5, .5, .5)), Js = new mt, Ks = new ps;
    function Zs(l) {
        if (l?.isObject3D) {
            if (l.updateMatrixWorld(!0), l.geometry?.isBufferGeometry) {
                const t = l.geometry;
                if (t.boundingBox || t.computeBoundingBox(), t.boundingBox) {
                    const e = t.boundingBox.clone();
                    return e.applyMatrix4(l.matrixWorld), e;
                }
            }
            return new Z().setFromObject(l);
        }
        const s = l.position ?? l.pos ?? new p, a = Xt(l.size ?? 1), i = l.quaternion?.isQuaternion ? l.quaternion : l.rotation?.isEuler ? Ks.setFromEuler(l.rotation) : Ks.set(0, 0, 0, 1);
        return Js.compose(s, i, a), Jt.clone().applyMatrix4(Js);
    }
    function A(l, s) {
        const a = Zs(l), i = Xs(l);
        for(let t = s.length - 1; t >= 0; t--){
            const e = s[t], o = Xs(e);
            if (i !== void 0 && o !== void 0 && i === o) continue;
            if (Zs(e).intersectsBox(a)) return e;
        }
        return null;
    }
    function Qs(l) {
        for(l.traverse((s)=>{
            s.geometry && s.geometry.dispose(), s.material && (Array.isArray(s.material) ? s.material.forEach((a)=>a.dispose()) : s.material.dispose()), s.material && s.material.map && s.material.map.dispose();
        }); l.children.length > 0;)l.remove(l.children[0]);
    }
    class Kt {
        constructor(s, a, i, t, e){
            this.scene = s, this.audioClass = a, this.levelClass = i, this.paramsClass = t, this.camera = e, this.playerHeight = .9, this.playerWidth = .5, this.player = new xs(new T(this.playerWidth, this.playerHeight, this.playerWidth), new rs({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.player.userData.finish = !1, this.playerModel, this.playerOut = new xs(new T(this.playerWidth, this.playerHeight + .1, this.playerWidth), new V({
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
            await new Ls().loadAsync("models/players/player1.glb").then((i)=>{
                const t = i.scene;
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
            })), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), A(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, a] = Ys(this.player.userData.collider);
                a[0] == 0 && this.player.userData.collider.setCollisionGroups(Ds([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, a] = Ys(this.player.userData.collider);
                a[0] != 0 && this.player.userData.collider.setCollisionGroups(Ds([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && A(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(A(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(A(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(A(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.playMusic([
                "take"
            ]))), A(this.player, this.levelClass.objs.topPlanes.data) || A(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, A(this.player, this.levelClass.objs.livesBlocks.data) && !A(this.player, this.levelClass.objs.livesBlocks.data).userData.taked && this.player.userData.lives < 3 && (this.player.userData.lives++, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.playMusic([
                "take"
            ]), this.reLiveField(), A(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.paramsClass.gameDir == "hor" && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(0, -5, 0))), this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY - this.levelClass.bounds.bottomY) / 2 * 1.7 && this.player.userData.live && (this.player.userData.lives = 0, this.reLiveField(), this.player.userData.body.setTranslation(new p(0, -5, 0))), !this.levelClass.canHorDie && this.camera.position.x > 1 && this.camera.position.x < 12 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -4 && this.paramsClass.gameStarting) this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                "back"
            ]), this.player.userData.finish || this.audioClass.playMusic([
                "inwater"
            ]), this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.player.userData.finish ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!0, !0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.paramsClass.gameStarting = !1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.levelClass.levelsMode && (this.player.userData.lives = 0), this.audioClass.stopMusic([
                "inwater"
            ]), this.player.userData.finish || this.audioClass.playMusic([
                "inwater"
            ]), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.paramsClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.players.every((s)=>s.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0, this.paramsClass.gameStarting = !1)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, a, i)=>{
                s.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.playMusic([
                "back"
            ])), (!this.player.userData.live || this.player.userData.finish) && (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((s)=>s.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + 1.1, this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1)), this.reLiveField();
            else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, a = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, t = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, e = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, e, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const m = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, m, .4);
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
                const s = this.levelClass.boostHatModels[this.player.userData.canFlyNum], a = this.player.userData.head;
                s.userData.originalScale || (s.userData.originalScale = s.scale.clone()), s.parent !== this.scene && this.scene.attach(s), this.playerModel.updateMatrixWorld(!0), a.updateWorldMatrix(!0, !1);
                const i = new p().setFromMatrixPosition(this.player.userData.head.matrixWorld), t = new ps;
                this.player.userData.head.getWorldQuaternion(t);
                const e = new ps().setFromEuler(new k(0, Math.PI / 2, 0)), o = t.clone().multiply(e), r = new p(.01, .14, .05).clone().applyQuaternion(o);
                s.quaternion.copy(o), s.position.copy(i).add(r), s.children[0].children[1].rotation.y += .4, s.userData.lastPos = s.position.clone(), s.userData.lastQuat = s.quaternion.clone();
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
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, s && (this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.levelClass.levelsMode ? this.player.userData.lives = 1 : this.player.userData.lives = 3, this.reLiveField()), setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 100);
        }
        reLiveField() {
            let s = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((a, i, t)=>a.player == this.player)].children;
            for(let a = 0; a < s.length; a++)a > this.player.userData.lives - 1 ? s[a].classList.add("hidden_screen") : s[a].classList.contains("hidden_screen") && s[a].classList.remove("hidden_screen");
        }
    }
    class Zt {
        constructor(s, a, i, t, e, o, n, r, h, m){
            this.scene = s, this.audioClass = a, this.physicsClass = i, this.renderer = t, this.camera = e, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.initMatch = h, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = m, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new E(16777215), this._nightColor = new E(16771488);
            const c = new yt, d = .01;
            c.moveTo(5 * d, 5 * d), c.bezierCurveTo(5 * d, 5 * d, 4 * d, 2 * d, 0 * d, 2 * d), c.bezierCurveTo(-6 * d, 2 * d, -6 * d, 7 * d, -6 * d, 7 * d), c.bezierCurveTo(-6 * d, 10 * d, -3 * d, 14 * d, 5 * d, 18 * d), c.bezierCurveTo(12 * d, 14 * d, 16 * d, 10 * d, 16 * d, 7 * d), c.bezierCurveTo(16 * d, 7 * d, 16 * d, 2 * d, 10 * d, 2 * d), c.bezierCurveTo(7 * d, 2 * d, 5 * d, 5 * d, 5 * d, 5 * d);
            const P = {
                depth: .22,
                bevelEnabled: !1,
                curveSegments: 12,
                steps: 1
            };
            this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (u, g)=>({
                            position: new p(0, -10, 0),
                            rotation: new k(0, 0, 0),
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
                    geometryPlane: new T(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new rs({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (u, g)=>({
                            position: new p(0, -10, 0),
                            rotation: new k(0, 0, 0),
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
                    geometryPlaneTop: new T(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new V({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (u, g)=>({
                            position: new p(0, -10, 0),
                            rotation: new k(0, 0, 0),
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
                    geometryPlaneGrass: new T(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new rs({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (u, g)=>({
                            position: new p(0, -10, 0),
                            rotation: new k(0, 0, 0),
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
                    geometryPlaneSensor: new T(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new rs({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (u, g)=>({
                            position: new p(0, -10, 0),
                            rotation: new k(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new T(.3, 1, .3),
                    materialLamp: new rs({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (u, g)=>({
                            position: new p(0, -10, 0),
                            rotation: new k(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new Rs(.32, 24, 16),
                    materialPlafon: new V({
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
                    }, (u, g)=>({
                            position: new p(0, -10, 0),
                            rotation: new k(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new Rs(.3),
                    materialBulb: new V({
                        emissive: new E(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                },
                livesBlocks: {
                    data: Array.from({
                        length: this.count
                    }, (u, g)=>({
                            position: new p(0, -10, 0),
                            rotation: new k(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new p(0, 0, 0)
                            }
                        })),
                    geometryLivesBlock: new bt(c, P),
                    materialLivesBlock: new V({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new _(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(H), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new _(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(H), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new _(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(H), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new _(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(H), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new _(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(H), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new _(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(H), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new _(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(H), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new _(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(H), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (u)=>{
                u.uniforms.fresnelPower = {
                    value: 2.5
                }, u.fragmentShader = u.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const b = new Float32Array(this.count);
            for(let u = 0; u < this.count; u++)b[u] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new gt(b, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (u)=>{
                u.vertexShader = `
    attribute float aEmissive;
    varying float vEmissive;
  ` + u.vertexShader.replace("#include <begin_vertex>", `
      #include <begin_vertex>
      vEmissive = aEmissive;
    `), u.fragmentShader = `
    varying float vEmissive;
  ` + u.fragmentShader.replace("#include <lights_fragment_begin>", `
      #include <lights_fragment_begin>
      // усиливаем эмиссию в зависимости от инстанса
      totalEmissiveRadiance *= vEmissive;
    `);
            }, this.objs.bulbs.materialBulb.needsUpdate = !0;
            function y(u = 64) {
                const g = document.createElement("canvas");
                g.width = g.height = u;
                const O = g.getContext("2d"), Q = O.createRadialGradient(u / 2, u / 2, 0, u / 2, u / 2, u / 2);
                Q.addColorStop(0, "rgba(255, 235, 175, 1)"), Q.addColorStop(1, "rgba(255, 235, 175, 0)"), O.fillStyle = Q, O.fillRect(0, 0, u, u);
                const I = new jt(g);
                return I.anisotropy = 1, I.generateMipmaps = !1, I.needsUpdate = !0, I;
            }
            this._glowTex = y(), this._emissive = b, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(e), this.rightEdge.unproject(e), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Ps, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s : s ? new p(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new p(1, 1, 1);
        }
        apply(s, a, i) {
            let t = i.userData.invBaseSize;
            if (!t) {
                const r = i.geometry;
                r.computeBoundingBox();
                const h = new p;
                r.boundingBox.getSize(h), t = i.userData.invBaseSize = new p(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new Hs;
            const e = this._dummy, o = a[s] || {}, n = this.toVec3(o.size);
            e.position.copy(o.position || new p), o.rotation ? e.rotation.copy(o.rotation) : e.rotation.set(0, 0, 0), e.scale.set(n.x * t.x, n.y * t.y, n.z * t.z), e.updateMatrix(), i.setMatrixAt(s, e.matrix);
        }
        async loadTexture() {
            const s = new et;
            s.load("textures/plane.jpg", (a)=>{
                const i = new V({
                    map: a,
                    transparent: !0,
                    opacity: 1
                });
                a.wrapS = ls, a.wrapT = ls, a.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = i;
            }, void 0, function(a) {
                console.error("An error happened.");
            }), s.load("textures/grass.jpg", (a)=>{
                const i = new V({
                    map: a
                });
                a.wrapS = ls, a.wrapT = ls, a.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = i;
            }, void 0, function(a) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let s = new T(.5, .7, 1), a = new at({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new xs(s, a), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = v(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s) {
            if (this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((a, i, t)=>{
                document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
            }), s) {
                let a = -2.5, i = -5, t = !1;
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
                        let o = v(this.planeWidth, this.planeWidth - 1), n = a + o / 2 + v(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = v(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (t && (o = t[e]), e == 0 ? (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.planes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : e == 1 ? (this.objs.planes.data[e].size.x = o, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = o + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = o + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e == this.count - 1 ? (t ? this.objs.planes.data[e].size.x = t[t.length - 1] - .2 : this.objs.planes.data[e].size.x = 5, this.objs.planes.data[e].size.y = this.planeHeight, t ? this.objs.topPlanes.data[e].size.x = t[t.length - 1] : this.objs.topPlanes.data[e].size.x = 5 + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, t ? this.objs.grassPlanes.data[e].size.x = t[t.length - 1] : this.objs.grassPlanes.data[e].size.x = 5 + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = o, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = o + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = o + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = r + this.planeHeight / 1.5) : e == 1 ? (this.objs.planes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[e].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[e].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[e].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[e].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[e].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[e].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new gs(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n + o / 2;
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
                        let o = v(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        t && (o = t[e]), this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[e].userData.direction = 1 : this.objs.grassPlanes.data[e].userData.direction = -1;
                        let n = i + v(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[e].position.y = n - 1.3, this.objs.grassPlanes.data[e].position.y = n, this.objs.sensorPlanes.data[e].position.y = n - .3, this.objs.topPlanes.data[e].size.y = .3, this.objs.grassPlanes.data[e].size.y = .7, this.objs.sensorPlanes.data[e].size.y = .9, e > 0 ? (this.objs.topPlanes.data[e].size.x = o + .3, this.objs.grassPlanes.data[e].size.x = o + .3, this.objs.sensorPlanes.data[e].size.x = o + .7) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.grassPlanes.data[e].userData.speed = v(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new gs(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
            } else switch(this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let a = -2.5;
                    for(let t = 0; t < this.count; t++){
                        let e = v(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = a + e / 2 + v(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = v(-1.2, 1.2) - this.planeHeight / 1.5;
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
                            const r = new gs(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(t, this.objs.planes.data, this.objs.planes.plane), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), a = o + e / 2;
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
                        let e = v(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[t].userData.direction = 1 : this.objs.grassPlanes.data[t].userData.direction = -1;
                        let o = i + v(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[t].position.y = o - 1.3, this.objs.grassPlanes.data[t].position.y = o, this.objs.sensorPlanes.data[t].position.y = o - .3, this.objs.topPlanes.data[t].size.y = .3, this.objs.grassPlanes.data[t].size.y = .7, this.objs.sensorPlanes.data[t].size.y = .9, t > this.count - 20 && (this.objs.topPlanes.data[t].size.x = e / 8 + .1, this.objs.grassPlanes.data[t].size.x = e / 8 + .1, this.objs.sensorPlanes.data[t].size.x = e / 8 + .4), t > 0 ? (this.objs.topPlanes.data[t].size.x = e + .3, this.objs.grassPlanes.data[t].size.x = e + .3, this.objs.sensorPlanes.data[t].size.x = e + .7) : (this.objs.topPlanes.data[t].size.x = 10, this.objs.grassPlanes.data[t].size.x = 10, this.objs.sensorPlanes.data[t].size.x = 10), t > this.count - 10 ? this.objs.grassPlanes.data[t].userData.speed = v(10, 14) / 100 : this.objs.grassPlanes.data[t].userData.speed = v(6, 10) / 100, this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, (t + 1) % 7 === 0) {
                            let n = this.boostHatModel.clone();
                            n.position.x = v(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[t].position.y + .5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                                n.position.x,
                                n.position.y
                            ]), this.scene.add(n);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const n = new gs(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), i = o;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
            this.players.forEach((a, i, t)=>{
                a.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y, s && (a.player.userData.lives = 1, a.reLiveField());
            });
        }
        getHorizontalWorldBounds(s = 0) {
            const a = new p(-1, 0, .5), i = new p(1, 0, .5), t = new p(0, 1, .5), e = new p(0, -1, .5);
            if (a.unproject(this.camera), i.unproject(this.camera), t.unproject(this.camera), e.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = a.clone().sub(o).normalize(), r = i.clone().sub(o).normalize(), h = t.clone().sub(o).normalize(), m = e.clone().sub(o).normalize(), c = (s - o.z) / n.z, d = (s - o.z) / m.z, P = o.clone().add(n.multiplyScalar(c)), b = o.clone().add(r.multiplyScalar(c)), y = o.clone().add(h.multiplyScalar(d)), u = o.clone().add(m.multiplyScalar(d));
                this.bounds = {
                    leftX: P.x,
                    rightX: b.x,
                    topY: y.y,
                    bottomY: u.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let s = !1;
                for(let a = 0; a < this.objs.grassPlanes.data.length; a++){
                    const i = this.objs.grassPlanes.data[a], t = i.userData.body, e = i.userData.moveHor, o = i.userData.moveVert;
                    if (t && (e || o)) {
                        if (e) {
                            const n = t.translation(), r = e.x1 + e.w1 + i.size.x * .5, h = e.x2 - e.w2 - i.size.x * .5, m = i.userData.speed ?? .05;
                            n.x >= h && (i.userData.direction = -1), n.x <= r && (i.userData.direction = 1);
                            const c = i.userData.direction * m, d = n.x + c;
                            t.setNextKinematicTranslation({
                                x: d,
                                y: n.y,
                                z: n.z
                            }), i.position.x = d, this.objs.lamps.data[a].position.x = d, this.objs.plafons.data[a].position.x = d, this.objs.bulbs.data[a].position.x = d, this.objs.topPlanes.data[a].position.x = d;
                        } else if (o) {
                            const n = t.translation(), r = 2, h = .5, m = i.userData.speed ?? .03;
                            n.y >= r && (i.userData.direction = -1), n.y <= h && (i.userData.direction = 1);
                            const c = i.userData.direction * m, d = n.y + c;
                            t.setNextKinematicTranslation({
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
                    const t = a.userData.body, e = a.userData.speed, o = t.translation();
                    o.x > this.bounds.rightX - a.size.x / 2 ? a.userData.direction = -1 : o.x < this.bounds.leftX + a.size.x / 2 && (a.userData.direction = 1);
                    const n = a.userData.direction * e, r = o.x + n;
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
            await new Ls().loadAsync("models/bird/bird.glb").then((i)=>{
                const t = i.scene, e = i.animations;
                t.scale.x = 2, t.scale.y = 2, t.scale.z = 2, t.position.y = 0, t.rotation.y = -Math.PI / 3, this.angryBirdModel = t, this.angryBirdModel.userData.mixer = new ft(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(e[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Ps;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new Ls().loadAsync("models/boosts/hat.glb").then((i)=>{
                const t = i.scene;
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new E(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new E(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new E(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.paramsClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, a, i)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new p(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: v(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird, this.angryBird.userData.speed = v(8, 13) / 100, this.angryBird.userData.flying = !0), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const s = new vt(new wt({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: vs
            }));
            return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
        }
        lampsAnimate() {
            let s = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
                this.lampsAnimate.did = !1;
                const i = this.camera.position.x - this.bounds.rightX / 1.3, t = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((e, o)=>{
                    e.pointLight;
                    const n = e.position.x >= i && e.position.x <= t, r = o;
                    if (n && !e.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        e.pointLight = h, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const h = e.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), e.glow.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 0);
                        const m = n ? this.lightIntensity : 0;
                        h.intensity = F.lerp(h.intensity, m, .15);
                        const c = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], c, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const d = .5 + this._emissive[r] * .8;
                        e.glow && e.glow.scale.setScalar(d);
                        const P = 1.1, b = this._emissive[r], y = 1 + P * b, u = this.objs.bulbs.baseSize, g = this.objs.bulbs.data[r];
                        g.userData._lastBulbFactor !== y && (g.size.set(u.x * y, u.y * y, u.z * y), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), g.userData._lastBulbFactor = y, s = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((t, e)=>{
                    const o = t.pointLight;
                    o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), t.pointLight = null, t.userData.light = !1, t.glow && (this.scene.remove(t.glow), this.glowPool.push(t.glow), t.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), i = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0);
                    const n = 1.1, r = this._emissive[e], h = 1 + n * r, m = this.objs.bulbs.baseSize, c = this.objs.bulbs.data[e];
                    c.userData._lastBulbFactor !== h && (c.size.set(m.x * h, m.y * h, m.z * h), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), c.userData._lastBulbFactor = h, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const i = this.camera.position.y - this.bounds.topY / 2, t = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((e, o)=>{
                    e.pointLight;
                    const n = e.position.y >= i && e.position.y <= t, r = o;
                    if (n && !e.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        e.pointLight = h, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const h = e.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), e.glow.position.copy(e.position);
                        const m = n ? this.lightIntensity : 0;
                        h.intensity = F.lerp(h.intensity, m, .15);
                        const c = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], c, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const d = .8 + this._emissive[r] * .8;
                        e.glow && e.glow.scale.setScalar(d);
                        const P = 1, b = this._emissive[r], y = 1 + P * b, u = this.objs.bulbs.baseSize, g = this.objs.bulbs.data[r];
                        g.userData._lastBulbFactor !== y && (g.size.set(u.x * y, u.y * y, u.z * y), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), g.userData._lastBulbFactor = y, s = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((t, e)=>{
                    const o = t.pointLight;
                    !t.pointLight && this._emissive[e] === 0 || (o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), t.pointLight = null, t.userData.light = !1, t.glow && (this.scene.remove(t.glow), this.glowPool.push(t.glow), t.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), i = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0));
                }), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed(s = !1) {
            let a;
            if (s ? a = this.players.filter((e, o, n)=>e.player.userData.live) : a = this.players, a.length === 0) return -1;
            let i = 0, t;
            this.paramsClass.gameDir == "vert" ? t = a[0].player.position.y : t = a[0].player.position.x;
            for(let e = 1; e < a.length; e++)a[e].player && a[e].player.userData.live && a[e].player.position && (this.paramsClass.gameDir == "vert" ? a[e].player.position.y > t && (t = a[e].player.position.y, i = e) : a[e].player.position.x > t && (t = a[e].player.position.x, i = e));
            return s ? this.players.indexOf(a[i], 0) : i;
        }
        async loadPlayers() {
            for(let s = 0; s < this.players.length; s++){
                let a = this.players[s];
                a.player.position.x = a.player.position.x - s * 1 + 1, this.physicsClass.addPhysicsToObject(a.player), this.paramsClass.gameDir == "vert" && (a.player.position.y = -0, a.player.userData.collider.setFriction(500)), await a.loadPlayerModel(), a.player.userData.startPos = a.player.position.clone(), this.scene.add(a.player), this.scene.add(a.playerOut), this.scene.add(a.playerModel), this.playerOuts.push(a.playerOut), s < this.players[0].playerColors.length ? a.head.children[0].material.color.set(this.players[0].playerColors[s]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), a.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > s ? a.player.userData.audio.push(this.audioClass.quacks[s].clone()) : a.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(s, a = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.paramsClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = this.isMobile ? 4 : 3, s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const i = this.maxSpeed(!0);
                        if (i >= 0) {
                            let t = 0;
                            this.players.length > 1 ? t = this.players[i].player.position.x : this.paramsClass.gameDir == "hor" && (t = this.players[i].player.position.x);
                            const e = this.cam.maxBackJump;
                            t < this.cam.targetX - e ? this.cam.targetX = this.cam.targetX - e : this.cam.targetX = t;
                            const o = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .25, a);
                            s.position.x = o.newPos, this.cam.velX = o.newVel, s.position.y = this.isMobile ? 4 : 3, s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                        }
                        break;
                    }
                case 3:
                    this.getHorizontalWorldBounds(), this.paramsClass.gameStarting && (s.position.y += this.cameraSpeed), s.position.x = 0, s.position.z = this.isMobile ? 20 : 32, this.cameraSpeed += 1e-6, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 4:
                    this.getHorizontalWorldBounds(), this.paramsClass.gameStarting && (s.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), s.position.x = 0, s.position.z = this.isMobile ? 25 : 32, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
            }
        }
        damp(s, a, i, t) {
            return s + (a - s) * (1 - Math.exp(-i * t));
        }
        spring(s, a, i, t, e) {
            const o = 2 / t, n = o * e, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = s - a;
            const m = (i + o * h) * e, c = (i - o * m) * r;
            return {
                newPos: a + (h + m) * r,
                newVel: c
            };
        }
        showPopupInGame(s = !1, a = !1) {
            this.levelsMode ? this.players.every((i)=>i.player.userData.finish) ? (document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win"), this.levelsMode < this.allLevels && this.showScreen("popup_game_btn15")) : (this.hideScreen("popup_game_btn15"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win")) : (!s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.looseAudio.play()), this.showScreen("popup_in_game");
        }
        rebindButton(s, a) {
            const i = document.querySelector(s), t = i.cloneNode(!0);
            return i.parentNode.replaceChild(t, i), t.addEventListener("click", a), t;
        }
        menuInGame = ()=>{
            this.rebindButton(".popup_game_btn1", ()=>{
                this.hideScreen("popup_in_game"), this.boostHatModels.forEach((s, a, i)=>{
                    s.userData.fly = !1;
                }), this.players[0].playerAliving(!1), this.players[0].player.userData.lives = 1, this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1);
            }), this.rebindButton(".popup_game_btn2", ()=>{
                this.players.forEach((s, a, i)=>{
                    s.player.userData.finish = !1, s.playerAliving(!0);
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 0, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((s, a, i)=>{
                    s.position.x = this.boostHatCoords[a][0], s.position.y = this.boostHatCoords[a][1], s.userData.fly = !1;
                });
                for(let s = 0; s < this.objs.livesBlocks.data.length; s++)this.objs.livesBlocks.data[s].position = this.objs.livesBlocks.data[s].userData.startPos, this.apply(s, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.hideScreen("popup_in_game"), this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]);
            }), this.rebindButton(".popup_game_btn15", ()=>{
                this.paramsClass.dataLoaded = !1, Qs(this.scene), this.audioClass.stopMusic(0), this.hideScreen("popup_in_game"), setTimeout(()=>{
                    let s = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 777;
                    this.initMatch(this.players.length, this.gameNum, s, this.birdYes);
                }, 100), this.players.forEach((s, a, i)=>{
                    s.playerAliving(!0);
                });
            }), this.rebindButton(".popup_game_btn3", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((s, a, i)=>{
                    s.playerAliving(!0);
                }), this.paramsClass.dataLoaded = !1, Qs(this.scene), this.audioClass.stopMusic(0);
            });
        };
        hideScreen(s) {
            document.querySelector(`.${s}`).classList.add("hidden_screen");
        }
        showScreen(s) {
            document.querySelector(`.${s}`).classList.remove("hidden_screen");
        }
    }
    class q {
        constructor(s, a){
            this.world = s, this.RAPIER = a, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Hs;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const a = s.geometry;
            a.computeBoundingBox();
            const i = new p;
            a.boundingBox.getSize(i);
            const t = new p(1 / (i.x || 1), 1 / (i.y || 1), 1 / (i.z || 1));
            return s.userData.invBase = t, t;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s.clone() : new p(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, a, i) {
            const t = q._toVec3(i.size), e = q._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = i.quaternion?.isQuaternion ? i.quaternion : new ps, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.x, e.y, e.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), r = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(r, n), this.instancedBodies.push({
                mesh: s,
                index: a,
                size: t,
                body: n
            });
        }
        addInstancedStatic(s, a, i, t) {
            const e = q._toVec3(t.size), o = q._toVec3(t.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = t.quaternion?.isQuaternion ? t.quaternion : new ps, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(1.6).setRestitution(0);
            s[i].userData.body = r, s[i].userData.shape = h, s[i].userData.collide = this.world.createCollider(h, r), this.instancedBodies.push({
                mesh: a,
                index: i,
                size: e,
                body: r
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, a = new Set;
            for (const i of this.instancedBodies){
                const t = q._ensureInvBase(i.mesh), e = i.body.translation(), o = i.body.rotation();
                s.position.set(e.x, e.y, e.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(i.size.x * t.x, i.size.y * t.y, i.size.z * t.z), s.updateMatrix(), i.mesh.setMatrixAt(i.index, s.matrix), a.add(i.mesh);
            }
            for (const i of a)i.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let a, i;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new Z().setFromObject(s);
                const e = Ss(s);
                s.rotation.copy(t), s.userData.size = e, s.userData.orgRotation = t, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = a, s.userData.shape = i;
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
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new Z().setFromObject(s);
                const e = Ss(s);
                s.rotation.copy(t), s.userData.size = e, s.userData.orgRotation = t, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setMass(1).setRestitution(0).setFriction(.3), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, a);
                s.userData.body = a, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = a.handle, this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]), s.userData.playerHandlesInside = new Set, this.allTops.push(s);
            } else if (s != null && s.userData.name.includes("bird")) {
                let a, i;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new Z().setFromObject(s);
                const e = Ss(s);
                s.rotation.copy(t), s.userData.size = e, s.userData.orgRotation = t, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setMass(1).setRestitution(1).setFriction(0), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, a);
                s.userData.body = a, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = a.handle, this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]);
            }
        }
    }
    const zs = new p;
    function Ss(l) {
        if (l.isMesh && l.geometry) {
            const a = l.geometry;
            return a.boundingBox || a.computeBoundingBox(), a.boundingBox.getSize(zs), zs.multiply(l.scale), zs.clone();
        }
        return new Z().setFromObject(l).getSize(new p);
    }
    class Qt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2;
        }
        async loadAudio() {
            const s = new xt, a = new Pt;
            await a.loadAsync("audio/back1.mp3").then((i)=>{
                this.backAudio = new j(s), this.backAudio.setBuffer(i), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/back2.mp3").then((i)=>{
                this.backAudio2 = new j(s), this.backAudio2.setBuffer(i), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/back3.mp3").then((i)=>{
                this.backAudio3 = new j(s), this.backAudio3.setBuffer(i), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(.5), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/ocean.mp3").then((i)=>{
                this.oceanAudio = new j(s), this.oceanAudio.setBuffer(i), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/inwater.mp3").then((i)=>{
                this.inwaterAudio = new j(s), this.inwaterAudio.setBuffer(i), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/loose.mp3").then((i)=>{
                this.looseAudio = new j(s), this.looseAudio.setBuffer(i), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/take.mp3").then((i)=>{
                this.takeAudio = new j(s), this.takeAudio.setBuffer(i), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/ready-jump.mp3").then((i)=>{
                this.readyJumpAudio = new j(s), this.readyJumpAudio.setBuffer(i), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(10), this.readyJumpAudio.setVolume(2), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/quack1.mp3").then((i)=>{
                this.jumpAudio = new j(s), this.jumpAudio.setBuffer(i), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/quack2.mp3").then((i)=>{
                this.jumpAudio2 = new j(s), this.jumpAudio2.setBuffer(i), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/quack3.mp3").then((i)=>{
                this.jumpAudio3 = new j(s), this.jumpAudio3.setBuffer(i), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/rain.mp3").then((i)=>{
                this.rainAudio = new j(s), this.rainAudio.setBuffer(i), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1), this.musics.push({
                    name: "rain",
                    music: this.rainAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/thunder.mp3").then((i)=>{
                this.thunderAudio = new j(s), this.thunderAudio.setBuffer(i), this.thunderAudio.setLoop(!1), this.thunderAudio.setRefDistance(400), this.thunderAudio.setVolume(1), this.thundersAudio.push({
                    name: "thunder1",
                    music: this.thunderAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/thunder2.mp3").then((i)=>{
                this.thunderAudio2 = new j(s), this.thunderAudio2.setBuffer(i), this.thunderAudio2.setLoop(!1), this.thunderAudio2.setRefDistance(400), this.thunderAudio2.setVolume(1), this.thundersAudio.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await a.loadAsync("audio/thunder3.mp3").then((i)=>{
                this.thunderAudio3 = new j(s), this.thunderAudio3.setBuffer(i), this.thunderAudio3.setLoop(!1), this.thunderAudio3.setRefDistance(400), this.thunderAudio3.setVolume(1), this.thundersAudio.push({
                    name: "thunder3",
                    music: this.thunderAudio3
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), this.musics.push({
                name: "back",
                music: this.backAudio
            });
        }
        stopMusic(s) {
            s == 0 ? this.musics.forEach((a, i, t)=>{
                a.music.stop();
            }) : s.forEach((a, i, t)=>{
                this.musics.find((e)=>e.name === a).music.stop();
            });
        }
        pauseMusic(s) {
            s.forEach((a, i, t)=>{
                this.musics.find((e)=>e.name === a).music.pause();
            });
        }
        playMusic(s) {
            s.forEach((a, i, t)=>{
                let e = this.musics.find((o)=>o.name === a).music;
                e.isPlaying || e.play();
            });
        }
        dayNight(s = !0, a = !1) {
            s && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>i.name === "back1").music, this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>a ? i.name === "back3" : i.name === "back2").music, this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class $t {
        constructor(s, a, i, t, e){
            this.levelClass = s, this.isMobile = a, this.renderer = i, this.camera = t, this.paramsClass = e, this.mouse = new p, this.raycaster = new Dt;
        }
        addKeyListeners() {
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
        }
        removedKeyListeners() {
            window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("mousedown", this.onKeyDown), window.removeEventListener("mouseup", this.onKeyUp), document.removeEventListener("touchend", this.onTapUp), document.removeEventListener("touchstart", this.onTapDown);
        }
        onTapDown = (s)=>{
            let a = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - a.left) / a.width * 2 - 1, this.mouse.y = -((s.clientY - a.top) / a.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
        };
        onTapUp = (s)=>{
            let a = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - a.left) / a.width * 2 - 1, this.mouse.y = -((s.clientY - a.top) / a.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
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
                    this.levelClass.players.forEach((a, i, t)=>{
                        a.player.userData.playerAlive = !0;
                    });
                    break;
                case "KeyP":
                    this.paramsClass.gameStarting = !this.paramsClass.gameStarting;
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
            s.userData.live && (s.userData.onGround ? (s.userData.readyJump || s.userData.audio[0].play(), s.userData.readyJump = !0) : s.userData.canFly && (s.userData.readyJump = !0, s.userData.readyJump || s.userData.audio[0].play()));
        }
        upKeys(s) {
            s.userData.live && (s.userData.canFly && !s.userData.onGround && s.userData.canFlyJumps > 0 && (s.userData.canFlyJumps--, s.userData.canFlyJumps == 0 && setTimeout(()=>{
                s.userData.canFly = !1, this.levelClass.boostHatModels[s.userData.canFlyNum].userData.fly = !1;
            }, 1e3)), s.userData.readyJump && s.userData.onGround ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), s.userData.audio[1].isPlaying || s.userData.audio[1].play(), s.userData.onGround = !1) : s.userData.onGround || (s.userData.canFly ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), s.userData.audio[1].isPlaying || s.userData.audio[1].play(), s.userData.onGround = !1, s.userData.hatBoost--, s.userData.hatBoost == 0 && (s.userData.canFly = !1, setTimeout(()=>{
                this.levelClass.boostHatModels[s.userData.numHatBoost].userData.fly = !1;
            }, 500))) : (s.userData.readyJump = !1, s.userData.audio[0].stop())));
        }
    }
    class se {
        constructor(s, a, i, t, e, o){
            this.scene = s, this.camera = a, this.renderer = i, this.paramsClass = t, this.isMobile = e, this.audioClass = o, this.ambientLight = new Mt(11184810, 1), this.hemiLight = new Ct(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new At(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Hs, this.dirLight.target = this.targetObject, this.helper = new zt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.activeLightningLines = [], this.lightningMaterialBase = new St({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: vs,
                depthWrite: !1
            }), this.clock = new Ps, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 25, this.rainAreaHalfDepth = 22, this.rainTopY = 10, this.rainBottomY = -4, this.rainGeometry = new fs, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let a = 0; a < this.rainDropCount; a++){
                const i = a * 3;
                this.rainPositions[i + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[i + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[i + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[a] = 15 + Math.random() * 15, this.rainWindPhase[a] = Math.random() * Math.PI * 2;
            }
            const s = new Float32Array(this.rainDropCount * 3);
            for(let a = 0; a < this.rainDropCount; a++){
                const i = .8 + Math.random() * .2;
                s[a * 3 + 0] = .7 * i, s[a * 3 + 1] = .8 * i, s[a * 3 + 2] = 1 * i;
            }
            this.rainGeometry.setAttribute("position", new ns(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new ns(s, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new kt({
                color: 15658751,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .8,
                transparent: !0,
                opacity: .84,
                size: 9,
                sizeAttenuation: !1,
                depthWrite: !1,
                blending: vs
            }), this.rainPoints = new Is(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Gs(900, 500), this.water = new Lt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new et().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = ls;
                }),
                sunDirection: new p,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new p, this.sky = new Bt, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new xs(new Gs(1e4, 1e4), new at({
                color: 526362,
                side: _t,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const a = 1500, i = new Float32Array(a * 3), t = new Float32Array(a), e = new Float32Array(a * 3);
            for(let h = 0; h < a; h++){
                i[3 * h] = Math.random() * 600 - 300, i[3 * h + 1] = Math.random() * 150 - 100, i[3 * h + 2] = Math.random() * 300 - 500, t[h] = Math.random() * 2 + .7;
                const m = new E().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                e[3 * h] = m.r, e[3 * h + 1] = m.g, e[3 * h + 2] = m.b;
            }
            const o = new fs;
            o.setAttribute("position", new ns(i, 3)), o.setAttribute("size", new ns(t, 1)), o.setAttribute("color", new ns(e, 3));
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
            this.materialStars = new Ht({
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
                blending: vs
            }), this.stars = new Is(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, a = Math.sign(s - this._prevCamX);
            this._prevCamX = a, this.stars.position.x = this.camera.position.x;
            const i = F.degToRad(90 - this.parameters.elevation), t = F.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, i, t), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), this.parameters.elevation < 2 && !this.rainStart && (this.rain = !0, this.startRain(), this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1, this.rain && this.parameters.elevation >= -3 && (this.audioClass.rainAudio.stop(), this.rainStart = !1, this.scene.remove(this.rainPoints), this.rain = !1))), this.paramsClass.gameDir == "vert") {
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
            const a = 10;
            this.dirLight.shadow.camera.left = -a, this.dirLight.shadow.camera.right = a, this.dirLight.shadow.camera.top = a, this.dirLight.shadow.camera.bottom = -a, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let i = this.activeLightningLines.length - 1; i >= 0; i--){
                const t = this.activeLightningLines[i];
                t.userData.life -= this.deltaSeconds / 1.5, t.material.opacity *= .78, (t.userData.life <= 0 || t.material.opacity <= .02) && (this.scene.remove(t), t.geometry.dispose(), t.material.dispose(), this.activeLightningLines.splice(i, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const i = this.rainGeometry.getAttribute("position"), t = Math.sin(performance.now() * .0012) * .8, e = this.camera.position.x, o = this.camera.position.z;
                for(let n = 0; n < this.rainDropCount; n++){
                    const r = n * 3, h = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + t * .4;
                    this.rainPositions[r + 0] += h * this.deltaSeconds * 6, this.rainPositions[r + 1] -= this.rainVelocities[n] * (1 + Math.abs(t) * .3) * this.deltaSeconds, e + this.rainPositions[r + 0], o + this.rainPositions[r + 2], this.rainPositions[r + 1] < this.rainBottomY && (this.rainPositions[r + 1] = this.rainTopY, this.rainPositions[r + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[r + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[r + 0] > this.rainAreaHalfWidth && (this.rainPositions[r + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[r + 0] < -this.rainAreaHalfWidth && (this.rainPositions[r + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[r + 2] > this.rainAreaHalfDepth && (this.rainPositions[r + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[r + 2] < -this.rainAreaHalfDepth && (this.rainPositions[r + 2] += this.rainAreaHalfDepth * 2 - 35);
                }
                this.rainPoints.position.set(e, 0, o), i.needsUpdate = !0;
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
                const a = s[this.currentThunderIndex % s.length].music;
                a.isPlaying && a.stop(), a.play(), this.currentThunderIndex++;
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
            const t = s + (Math.random() - .5) * 6, e = -4 + Math.random() * 3, o = i + (Math.random() - .5) * 6, n = t - s, r = e - a, h = o - i, m = Math.hypot(n, r, h) || 1, c = n / m, d = r / m, P = h / m, b = n / m, u = -(h / m), g = 0, O = b, Q = Math.abs(d) > .9 ? new p(1, 0, 0) : new p(0, 1, 0), I = new p(c, d, P), cs = new p().crossVectors(I, Q).normalize(), Cs = new p().crossVectors(I, cs).normalize(), rt = 2 + Math.random() * 2, lt = 1.2, ht = Math.random() * Math.PI * 2, dt = 3 + Math.random() * 2.5, pt = .8, ut = Math.random() * Math.PI * 2, As = 28, ms = 4, $ = [];
            for(let M = 0; M <= As; M++){
                const C = M / As, z = 1 - C;
                let G = s + n * C, ss = a + r * C, ts = i + h * C;
                const N = Math.sin(C * Math.PI * rt + ht) * lt * (.3 + .7 * z), Y = Math.sin(C * Math.PI * dt + ut) * pt * (.3 + .7 * z), X = (Math.random() - .5) * 2 * ms * z, B = (Math.random() - .5) * 1.6 * ms * z, S = Math.random() < .12 ? (Math.random() - .5) * 3.5 * z : 0;
                if (G += cs.x * (N + X + S) + Cs.x * (Y + B * .7), ss += cs.y * (N + X * .5) + Cs.y * (Y + B * .5), ts += cs.z * (N + X + S) + Cs.z * (Y + B * .7), $.push(G, ss, ts), M > 3 && M < As - 3 && Math.random() < .22) {
                    const W = [], es = 3 + Math.floor(Math.random() * 2), U = .25 + Math.random() * .35;
                    let as = G, is = ss, os = ts;
                    W.push(as, is, os);
                    for(let bs = 1; bs <= es; bs++)as += (Math.random() - .5) * ms * U, is += -(.8 + Math.random() * .8) * U, os += (Math.random() - .5) * ms * U, W.push(as, is, os);
                    const ys = new fs;
                    ys.setAttribute("position", new Ns(W, 3));
                    const J = new Ws(ys, this.lightningMaterialBase.clone());
                    J.material.opacity = .6, J.userData.life = .16 + Math.random() * .12, this.scene.add(J), this.activeLightningLines.push(J);
                }
            }
            const ct = 2;
            for(let M = -1; M <= ct; M++){
                const C = M === -1, z = C ? 0 : M % 2 === 0 ? 1 : -1, G = .55 + Math.random() * .45, ss = .35, ts = Math.random() * Math.PI * 2, N = [], Y = $.length / 3;
                for(let S = 0; S < Y; S++){
                    const W = S / (Y - 1), es = .35 + .85 * W, U = Math.sin(W * Math.PI * 2 + ts) * ss * (.2 + .8 * W), as = u * z * G * es + O * U * .3, is = g * z * G * es + U * .05, os = O * z * G * es - u * U * .3, ys = S * 3 + 0, J = S * 3 + 1, bs = S * 3 + 2, Ts = $[ys], Es = $[J], Fs = $[bs];
                    C ? N.push(Ts + (Math.random() - .5) * .05, Es + (Math.random() - .5) * .05, Fs + (Math.random() - .5) * .05) : N.push(Ts + as + (Math.random() - .5) * .2, Es + is + (Math.random() - .5) * .2, Fs + os + (Math.random() - .5) * .2);
                }
                const X = new fs;
                X.setAttribute("position", new Ns(N, 3));
                const B = new Ws(X, this.lightningMaterialBase.clone());
                B.material.opacity = C ? .95 : .32, B.userData.life = .22 + Math.random() * .18, this.scene.add(B), this.activeLightningLines.push(B);
            }
        }
        triggerLightningFlash() {
            const s = this.camera.position.x + (Math.random() - .5) * 30, a = 34 + Math.random() * 6, i = -10 - Math.random() * 20;
            this.createLightningBolt(s, a, i);
        }
        makeRainStreakTexture() {
            const i = new Uint8Array(60);
            for(let e = 0; e < 15; e++){
                const o = Math.sin(e / 14 * Math.PI);
                for(let n = 0; n < 1; n++){
                    const r = (e * 1 + n) * 4;
                    i[r + 0] = 255, i[r + 1] = 255, i[r + 2] = 255, i[r + 3] = Math.round(o * 255);
                }
            }
            const t = new Tt(i, 1, 15, Et);
            return t.needsUpdate = !0, t.magFilter = Us, t.minFilter = Us, t.wrapS = Vs, t.wrapT = Vs, t.rotation = Math.PI / 2, t.center.set(.5, .5), t;
        }
    }
    class te {
        constructor(s, a){
            this.initMatch = s, this.loadLevels = a, this.loadLevels(), this.mainMenu(this.initMatch), this.playersNum = 2, this.levelPlayersNum = 1;
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("together_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", async ()=>{
                this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((s, a, i)=>{
                s.addEventListener("click", ()=>{
                    this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, a + 1, !0);
                });
            }), document.querySelectorAll(".level_game_chels").forEach((s, a, i)=>{
                s.addEventListener("click", ()=>{
                    document.querySelectorAll(".level_game_chels").forEach((t)=>{
                        t.classList.remove("level_game_chels_active");
                    }), s.classList.add("level_game_chels_active"), this.levelPlayersNum = a + 1;
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
            }), document.querySelectorAll(".together_game_chels").forEach((s, a, i)=>{
                s.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((t)=>{
                        t.classList.remove("together_game_chels_active");
                    }), s.classList.add("together_game_chels_active"), this.playersNum = a + 2;
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
    class ee {
        constructor(){
            this.gameDir = "vert", this.gameStarting = !1, this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class ae {
        constructor(s){
            this.camera = s, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(s) {
            if (s = Math.max(0, Math.floor(s)), s === this.shownFloat) return;
            const a = $s, i = performance.now(), t = 200;
            function e(o) {
                const n = Math.min(1, (o - i) / t), r = 1 - Math.pow(1 - n, 4), h = Math.round(a + (s - a) * r);
                ie.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(e) : $s = s;
            }
            requestAnimationFrame(e);
        }
    }
    const ie = document.getElementById("meters-float");
    let $s = 0;
    console.clear();
    let Bs, oe = new Ps, it, ws, us, L, f, R, hs, D, K;
    const _s = [
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
    let ne = _s.length;
    const ds = new Ft;
    ds.background = new E(13230580);
    const w = new Rt(25, window.innerWidth / window.innerHeight, .1, 2e3);
    w.position.y = 2;
    const js = Yt();
    let Ms = new It;
    document.body.appendChild(Ms.dom);
    Ms.dom.style.top = "0px";
    Ms.dom.style.left = "48%";
    const x = new Gt;
    x.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(x.domElement);
    x.shadowMap.enabled = !0;
    x.shadowMap.type = Nt;
    x.outputColorSpace = Wt;
    x.toneMapping = Ut;
    x.toneMappingExposure = 1.05;
    ot();
    window.addEventListener("resize", ot, !1);
    function ot() {
        js ? (w.aspect = document.body.offsetWidth / document.body.offsetHeight, w.updateProjectionMatrix(), x.setSize(innerWidth, innerHeight)) : (w.aspect = document.body.offsetWidth / document.body.offsetHeight, w.updateProjectionMatrix(), x.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function re(l) {
        const s = await Ot(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Bs = new s.World(new s.Vector3(0, -9.81, 0)), it = new s.EventQueue(!0), L = new q(Bs, s), K = new ae(w), R = new Qt, us = new se(ds, w, x, D, js, R), f = new Zt(ds, R, L, x, w, js, D, us, nt, ne);
        for(let a = 0; a < l; a++)f.players.push(new Kt(ds, R, f, D, w));
        hs = new $t(f, js, x, w, D), hs.addKeyListeners();
    }
    async function le() {
        await us.loadWorld(), await R.loadAudio(), R.backAudio.play(), R.oceanAudio.play();
    }
    async function he(l) {
        await f.createLevel(l), await f.loadEnvironments(), await f.loadPlayers(), f.objs.grassPlanes.data.length > 0 && f.objs.grassPlanes.data.forEach((s, a)=>{
            f.objs.grassPlanes.data[a].userData.collide.setCollisionGroups(Ds([
                0
            ], [
                1
            ]));
        }), f.players.length > 0 && f.players.forEach((s, a)=>{
            f.players[a].player.userData.collider.setCollisionGroups(Ds([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function nt(l, s, a = !1) {
        de(), ws.toggleLoader(!0), D = new ee, await re(l), f.gameNum = s, await le(), await he(a), setTimeout(()=>{
            ws.showScreen("hud"), ws.toggleLoader(!1), D.dataLoaded = !0, D.gameStarting = !0;
        }, 300);
    }
    ws = new te(nt, ue);
    function de() {
        w.position.y = 2, w.position.x = 0, x.toneMappingExposure = 1.05, hs?.removedKeyListeners(), us = null, L = null, f = null, R = null, hs = null, D = null, K = null;
    }
    function pe() {
        if (D.dataLoaded && D.gameStarting) {
            D.gameDir == "hor" ? K.updateMetersFloat(w.position.x - K.startX) : K.updateMetersFloat(w.position.y - K.startY), f.players.forEach((l, s, a)=>{
                l.playerMove();
            }), us.updateLighting(), f.levelAnimate(w), f.cameraMove(w), Ms.update();
            for(let l = 0, s = L.dynamicBodies.length; l < s; l++)L.dynamicBodies[l][0].position.copy(L.dynamicBodies[l][1].translation()), L.dynamicBodies[l][0].quaternion.copy(L.dynamicBodies[l][1].rotation());
            L.updateInstancedTransforms(), Bs.step(it), D.gameStarting && x.render(ds, w);
        }
    }
    let ks = 0;
    const st = 1 / 60, tt = .1;
    x.setAnimationLoop(()=>{
        if (D != null) {
            let l = oe.getDelta();
            for(l > tt && (l = tt), ks += l; ks >= st;)pe(), ks -= st;
        }
    });
    async function ue() {
        const l = document.querySelector(".levels_blocks");
        if (!l) return;
        l.classList.add("levels_blocks--reenter"), l.innerHTML = "";
        const s = document.createDocumentFragment(), a = (o)=>{
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
        }, i = 40, t = 60, e = 600;
        for(let o = 0; o < _s.length; o++){
            const n = _s[o], { modifierClass: r, labelText: h, ariaState: m } = a(n), c = document.createElement("div");
            c.className = `levels_block ${r}`, c.setAttribute("data-level", String(o + 1)), c.setAttribute("role", "button"), c.setAttribute("tabindex", n === "locked" ? "-1" : "0"), c.setAttribute("aria-label", `Уровень ${o + 1}, ${m}`);
            const d = Math.min(t + o * i, e);
            c.style.setProperty("--show-delay", `${d}ms`);
            const P = document.createElement("div");
            P.className = "levels_block_number", P.textContent = String(o + 1);
            const b = document.createElement("div");
            b.className = "levels_block_status";
            const y = document.createElement("span");
            y.className = `status_chip ${n === "completed" ? "status_chip--completed" : n === "available" ? "status_chip--available" : "status_chip--locked"}`, y.textContent = h, b.append(y), c.append(P, b), c.addEventListener("click", ()=>{
                n !== "locked" && (document.querySelectorAll(".levels_block").forEach((u)=>u.classList.remove("active")), c.classList.add("active"), console.log(`Выбран уровень ${o + 1}`));
            }), c.addEventListener("keydown", (u)=>{
                n !== "locked" && (u.key === "Enter" || u.key === " ") && (u.preventDefault(), c.click());
            }), s.append(c);
        }
        l.append(s), requestAnimationFrame(()=>{
            l.classList.remove("levels_blocks--reenter"), l.querySelectorAll(".levels_block").forEach((o)=>{
                o.classList.add("levels_block--enter");
            });
        });
    }
})();

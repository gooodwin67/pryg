import { B as Z, V as p, Q as ps, M as mt, a as xs, b as T, c as rs, d as q, G as Bs, E as S, C as E, S as yt, e as bt, f as Fs, I as _, D as H, g as gt, h as Ps, O as _s, T as et, R as ls, i as at, P as gs, A as ft, j as wt, k as jt, l as ws, m as F, n as vt, o as xt, p as Pt, q as v, r as Dt, s as Mt, H as Ct, t as At, u as zt, L as kt, v as fs, w as ns, x as St, y as Rs, z as Is, W as Bt, F as Lt, J as _t, K as Ht, N as Gs, U as Ws, X as Tt, Y as Et, Z as Ns, _ as Us, $ as Ft, a0 as Rt, a1 as It, a2 as Gt, a3 as Wt, a4 as Nt, a5 as Ut } from "./three-DAxnn8pU.js";
(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);
        new MutationObserver((i)=>{
            for (const s of i)if (s.type === "childList") for (const o of s.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function e(i) {
            const s = {};
            return i.integrity && (s.integrity = i.integrity), i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function a(i) {
            if (i.ep) return;
            i.ep = !0;
            const s = e(i);
            fetch(i.href, s);
        }
    })();
    const qt = "modulepreload", Vt = function(l, t) {
        return new URL(l, t).href;
    }, qs = {}, Ot = function(t, e, a) {
        let i = Promise.resolve();
        if (e && e.length > 0) {
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
            i = h(e.map((m)=>{
                if (m = Vt(m, a), m in qs) return;
                qs[m] = !0;
                const c = m.endsWith(".css"), d = c ? '[rel="stylesheet"]' : "";
                if (!!a) for(let y = o.length - 1; y >= 0; y--){
                    const u = o[y];
                    if (u.href === m && (!c || u.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${m}"]${d}`)) return;
                const b = document.createElement("link");
                if (b.rel = c ? "stylesheet" : qt, c || (b.as = "script"), b.crossOrigin = "", b.href = m, r && b.setAttribute("nonce", r), document.head.appendChild(b), c) return new Promise((y, u)=>{
                    b.addEventListener("load", y), b.addEventListener("error", ()=>u(new Error(`Unable to preload CSS for ${m}`)));
                });
            }));
        }
        function s(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return i.then((o)=>{
            for (const n of o || [])n.status === "rejected" && s(n.reason);
            return t().catch(s);
        });
    };
    function w(l, t) {
        return Math.random() * (t - l) + l;
    }
    function Xt() {
        let l = window.matchMedia || window.msMatchMedia;
        return l ? l("(pointer:coarse)").matches : !1;
    }
    function Vs(l) {
        return l.reduce((t, e)=>t | 1 << e, 0);
    }
    function Ds(l, t) {
        const e = Vs(l), a = Vs(t);
        return "0x" + ((e & 65535) << 16 | a & 65535).toString(16).padStart(8, "0");
    }
    function Os(l) {
        const t = l.collisionGroups(), e = t >>> 16 & 65535, a = t & 65535;
        function i(s) {
            const o = [];
            for(let n = 0; n < 16; n++)s & 1 << n && o.push(n);
            return o;
        }
        return [
            i(e),
            i(a)
        ];
    }
    function Yt(l) {
        return typeof l == "number" ? new p(l, l, l) : l?.isVector3 ? l : new p(l?.x ?? 1, l?.y ?? 1, l?.z ?? 1);
    }
    function Xs(l) {
        return l?.userData?.id ?? l?.uuid ?? l?.id;
    }
    const Jt = new Z(new p(-.5, -.5, -.5), new p(.5, .5, .5)), Ys = new mt, Js = new ps;
    function Ks(l) {
        if (l?.isObject3D) {
            if (l.updateMatrixWorld(!0), l.geometry?.isBufferGeometry) {
                const i = l.geometry;
                if (i.boundingBox || i.computeBoundingBox(), i.boundingBox) {
                    const s = i.boundingBox.clone();
                    return s.applyMatrix4(l.matrixWorld), s;
                }
            }
            return new Z().setFromObject(l);
        }
        const t = l.position ?? l.pos ?? new p, e = Yt(l.size ?? 1), a = l.quaternion?.isQuaternion ? l.quaternion : l.rotation?.isEuler ? Js.setFromEuler(l.rotation) : Js.set(0, 0, 0, 1);
        return Ys.compose(t, a, e), Jt.clone().applyMatrix4(Ys);
    }
    function A(l, t) {
        const e = Ks(l), a = Xs(l);
        for(let i = t.length - 1; i >= 0; i--){
            const s = t[i], o = Xs(s);
            if (a !== void 0 && o !== void 0 && a === o) continue;
            if (Ks(s).intersectsBox(e)) return s;
        }
        return null;
    }
    function Zs(l) {
        for(l.traverse((t)=>{
            t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((e)=>e.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose();
        }); l.children.length > 0;)l.remove(l.children[0]);
    }
    class Kt {
        constructor(t, e, a, i, s){
            this.scene = t, this.audioClass = e, this.levelClass = a, this.paramsClass = i, this.camera = s, this.playerHeight = .9, this.playerWidth = .5, this.player = new xs(new T(this.playerWidth, this.playerHeight, this.playerWidth), new rs({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.player.userData.finish = !1, this.playerModel, this.playerOut = new xs(new T(this.playerWidth, this.playerHeight + .1, this.playerWidth), new q({
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
            await new Bs().loadAsync("models/players/player1.glb").then((a)=>{
                const i = a.scene;
                this.playerModel = i, this.playerModel.traverse(function(s) {
                    s.isMesh && (s.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(s) {
                    s.isMesh && (s.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if (this.levelClass.levelsMode && (this.levelClass.players.every((t)=>t.player.userData.finish) ? this.levelClass.players.forEach((t)=>{
                t.player.userData.body.setTranslation(new p(0, -5, 0));
            }) : this.levelClass.players.every((t)=>t.player.userData.finish || t.player.userData.lives <= 0) && this.levelClass.players.forEach((t)=>{
                t.player.userData.body.setTranslation(new p(0, -5, 0)), this.player.userData.finish = !1;
            })), (this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround && this.player.userData.body.linvel().y < 0) && (this.player.userData.finish || (this.player.userData.finish = !0)), A(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [t, e] = Os(this.player.userData.collider);
                e[0] == 0 && this.player.userData.collider.setCollisionGroups(Ds([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, e] = Os(this.player.userData.collider);
                e[0] != 0 && this.player.userData.collider.setCollisionGroups(Ds([
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
            ]), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((t)=>!t.player.userData.live) && this.levelClass.players.every((t)=>t.player.userData.lives < 1) && this.paramsClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.players.every((t)=>t.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0, this.paramsClass.gameStarting = !1)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((t, e, a)=>{
                t.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.playMusic([
                "back"
            ])), (!this.player.userData.live || this.player.userData.finish) && (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((t)=>t.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + 1.1, this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1)), this.reLiveField();
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, e = this.player.userData.readyJump ? -Math.PI / 2 : 0, a = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, i = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, s = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, a, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, s, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
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
                const t = this.levelClass.boostHatModels[this.player.userData.canFlyNum], e = this.player.userData.head;
                t.userData.originalScale || (t.userData.originalScale = t.scale.clone()), t.parent !== this.scene && this.scene.attach(t), this.playerModel.updateMatrixWorld(!0), e.updateWorldMatrix(!0, !1);
                const a = new p().setFromMatrixPosition(this.player.userData.head.matrixWorld), i = new ps;
                this.player.userData.head.getWorldQuaternion(i);
                const s = new ps().setFromEuler(new S(0, Math.PI / 2, 0)), o = i.clone().multiply(s), r = new p(.01, .14, .05).clone().applyQuaternion(o);
                t.quaternion.copy(o), t.position.copy(a).add(r), t.children[0].children[1].rotation.y += .4, t.userData.lastPos = t.position.clone(), t.userData.lastQuat = t.quaternion.clone();
            } else {
                const t = this.player.userData.canFlyNum;
                if (t !== null && this.levelClass.boostHatModels[t]) {
                    const e = this.levelClass.boostHatModels[t];
                    e.userData.lastPos && (e.position.copy(e.userData.lastPos), e.quaternion.copy(e.userData.lastQuat)), e.userData.fly = !1, e.children[0].children[1].rotation.y += .02;
                }
            }
        }
        lerp(t, e, a) {
            return t + (e - t) * a;
        }
        playerAliving(t) {
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, t && (this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.player.userData.lives = 3, this.reLiveField()), setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 1);
        }
        reLiveField() {
            let t = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((e, a, i)=>e.player == this.player)].children;
            for(let e = 0; e < t.length; e++)e > this.player.userData.lives - 1 ? t[e].classList.add("hidden_screen") : t[e].classList.contains("hidden_screen") && t[e].classList.remove("hidden_screen");
        }
    }
    class Zt {
        constructor(t, e, a, i, s, o, n, r, h, m){
            this.scene = t, this.audioClass = e, this.physicsClass = a, this.renderer = i, this.camera = s, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.initMatch = h, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = m, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
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
                            rotation: new S(0, 0, 0),
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
                            rotation: new S(0, 0, 0),
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
                    materialPlaneTop: new q({
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
                            rotation: new S(0, 0, 0),
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
                            rotation: new S(0, 0, 0),
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
                            rotation: new S(0, 0, 0),
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
                            rotation: new S(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new Fs(.32, 24, 16),
                    materialPlafon: new q({
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
                            rotation: new S(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new Fs(.3),
                    materialBulb: new q({
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
                            rotation: new S(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new p(0, 0, 0)
                            }
                        })),
                    geometryLivesBlock: new bt(c, P),
                    materialLivesBlock: new q({
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
                const I = new vt(g);
                return I.anisotropy = 1, I.generateMipmaps = !1, I.needsUpdate = !0, I;
            }
            this._glowTex = y(), this._emissive = b, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(s), this.rightEdge.unproject(s), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new Ps, this.menuInGame();
        }
        toVec3(t) {
            return typeof t == "number" ? new p(t, t, t) : t?.isVector3 ? t : t ? new p(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new p(1, 1, 1);
        }
        apply(t, e, a) {
            let i = a.userData.invBaseSize;
            if (!i) {
                const r = a.geometry;
                r.computeBoundingBox();
                const h = new p;
                r.boundingBox.getSize(h), i = a.userData.invBaseSize = new p(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new _s;
            const s = this._dummy, o = e[t] || {}, n = this.toVec3(o.size);
            s.position.copy(o.position || new p), o.rotation ? s.rotation.copy(o.rotation) : s.rotation.set(0, 0, 0), s.scale.set(n.x * i.x, n.y * i.y, n.z * i.z), s.updateMatrix(), a.setMatrixAt(t, s.matrix);
        }
        async loadTexture() {
            const t = new et;
            t.load("textures/plane.jpg", (e)=>{
                const a = new q({
                    map: e,
                    transparent: !0,
                    opacity: 1
                });
                e.wrapS = ls, e.wrapT = ls, e.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = a;
            }, void 0, function(e) {
                console.error("An error happened.");
            }), t.load("textures/grass.jpg", (e)=>{
                const a = new q({
                    map: e
                });
                e.wrapS = ls, e.wrapT = ls, e.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = a;
            }, void 0, function(e) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let t = new T(.5, .7, 1), e = new at({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new xs(t, e), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = w(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(t, e) {
            if (this.levelsMode = t, this.maxHeight = 0, this.birdFlyingMark = 10, this.birdYes = e, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((a, i, s)=>{
                document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
            }), t) {
                let a = -2.5, i = -5;
                switch(t){
                    case 1:
                        this.birdYes = !1, this.count = 3, this.paramsClass.gameDir = "hor", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0;
                        break;
                    case 2:
                        this.gameNum = 4, this.birdYes = !1, this.count = 4, this.paramsClass.gameDir = "vert", this.randomAnimateHor = 0, this.randomAnimateVert = 0;
                        break;
                    case 3:
                        this.birdYes = !0, this.count = 5, this.paramsClass.gameDir = "hor", this.levelsNoFric = !0, this.randomAnimateHor = 1, this.randomAnimateVert = 0, this.gameNum = 2, this.cameraSpeed = .5;
                        break;
                    case 4:
                        this.gameNum = 4, this.birdYes = !0, this.count = 5, this.paramsClass.gameDir = "vert", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.cameraSpeed = .7;
                        break;
                }
                if (this.paramsClass.gameDir == "hor") {
                    for(let s = 0; s < this.count; s++){
                        let o = w(this.planeWidth, this.planeWidth - 1), n = a + o / 2 + w(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = w(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s == 0 ? (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.planes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : s == 1 ? (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : s == this.count - 1 ? (this.objs.planes.data[s].size.x = 5, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = 5 + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = 5 + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[s].position.x = 0, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = 0, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = 0, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : s == 1 ? (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new gs(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(s, this.objs.planes.data, this.objs.planes.plane), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n + o / 2;
                    }
                    for(let s = 0; s < this.count; s++)s > 4 && s < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[s - 1].userData.moveHor && (this.objs.grassPlanes.data[s].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[s - 1].position.x,
                        x2: this.objs.grassPlanes.data[s + 1].position.x,
                        w1: this.objs.grassPlanes.data[s - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[s + 1].size.x / 2
                    }, this.objs.planes.data[s].position.y = -10), s > 7 && s < this.count - 2 && Math.random() < this.randomAnimateVert && (this.objs.grassPlanes.data[s].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[s - 1].position.x,
                        x2: this.objs.grassPlanes.data[s + 1].position.x,
                        w1: this.objs.grassPlanes.data[s - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[s + 1].size.x / 2
                    }, this.objs.planes.data[s].position.y = -10);
                } else if (this.paramsClass.gameDir == "vert") {
                    this.birdYes = !1;
                    for(let s = 0; s < this.count; s++){
                        let o = w(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[s].userData.direction = 1 : this.objs.grassPlanes.data[s].userData.direction = -1;
                        let n = i + w(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = n - 1.3, this.objs.grassPlanes.data[s].position.y = n, this.objs.sensorPlanes.data[s].position.y = n - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > 0 ? (this.objs.topPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.sensorPlanes.data[s].size.x = o + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.grassPlanes.data[s].userData.speed = w(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new gs(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
            } else switch(this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let a = -2.5;
                    for(let s = 0; s < this.count; s++){
                        let o = w(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), n = a + o / 2 + w(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = w(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, s > this.count - 20 ? (this.objs.planes.data[s].size.x = .1, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = .2 + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = .2 + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : s > 0 ? (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s == 0) r = 1 - this.planeHeight / 1.5, this.objs.planes.data[s].position.x = 0, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = 0, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = 0, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5;
                        else if (s == 1) n = 6, this.objs.planes.data[s].position.x = n, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5;
                        else if (s > 1 && (this.objs.planes.data[s].position.x = n, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5, (s + 1) % 10 === 1)) {
                            let h = this.boostHatModel.clone();
                            h.position.x = n, h.position.y = this.objs.topPlanes.data[s].position.y + 2, h.rotation.y = -Math.PI / 2, h.userData.num = s, this.boostHatModels.push(h), this.boostHatMeshes.push(h.children[0].children[0].children[0]), this.boostHatCoords.push([
                                h.position.x,
                                h.position.y
                            ]), this.scene.add(h);
                        }
                        if (this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new gs(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(s, this.objs.planes.data, this.objs.planes.plane), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n + o / 2;
                    }
                    for(let s = 0; s < this.count; s++)s > 4 && s < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[s - 1].userData.moveHor && (this.objs.grassPlanes.data[s].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[s - 1].position.x,
                        x2: this.objs.grassPlanes.data[s + 1].position.x,
                        w1: this.objs.grassPlanes.data[s - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[s + 1].size.x / 2
                    }, this.objs.planes.data[s].position.y = -10), s > 7 && s < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[s - 1].userData.moveHor && !this.objs.grassPlanes.data[s - 1].userData.moveVert && (this.objs.grassPlanes.data[s].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[s - 1].position.x,
                        x2: this.objs.grassPlanes.data[s + 1].position.x,
                        w1: this.objs.grassPlanes.data[s - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[s + 1].size.x / 2
                    }, this.objs.planes.data[s].position.y = -10), this.objs.grassPlanes.data[s].position.y > this.maxHeight && (this.maxHeight = this.objs.grassPlanes.data[s].position.y), s > 7 && Math.random() < .1 && !this.objs.grassPlanes.data[s].userData.moveHor && !this.objs.grassPlanes.data[s].userData.moveVert && (this.objs.livesBlocks.data[s].position.x = this.objs.grassPlanes.data[s].position.x - this.objs.grassPlanes.data[s].size.x / 2 + this.objs.livesBlocks.data[s].size.x / 2, this.objs.livesBlocks.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.livesBlocks.data[s].size.y / 2 + .2, this.objs.livesBlocks.data[s].userData.startPos = this.objs.livesBlocks.data[s].position.clone()), this.apply(s, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.livesBlocks.livesBlock), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let i = -5;
                    this.birdYes = !1;
                    for(let s = 0; s < this.count; s++){
                        let o = w(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[s].userData.direction = 1 : this.objs.grassPlanes.data[s].userData.direction = -1;
                        let n = i + w(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = n - 1.3, this.objs.grassPlanes.data[s].position.y = n, this.objs.sensorPlanes.data[s].position.y = n - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > this.count - 20 && (this.objs.topPlanes.data[s].size.x = o / 8 + .1, this.objs.grassPlanes.data[s].size.x = o / 8 + .1, this.objs.sensorPlanes.data[s].size.x = o / 8 + .4), s > 0 ? (this.objs.topPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.sensorPlanes.data[s].size.x = o + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), s > this.count - 10 ? this.objs.grassPlanes.data[s].userData.speed = w(10, 14) / 100 : this.objs.grassPlanes.data[s].userData.speed = w(6, 10) / 100, this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, (s + 1) % 7 === 0) {
                            let r = this.boostHatModel.clone();
                            r.position.x = w(this.bounds.leftX + 1, this.bounds.rightX - 1), r.position.y = this.objs.topPlanes.data[s].position.y + .5, this.boostHatModels.push(r), this.boostHatMeshes.push(r.children[0].children[0].children[0]), this.boostHatCoords.push([
                                r.position.x,
                                r.position.y
                            ]), this.scene.add(r);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const r = new gs(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
            this.players.forEach((a, i, s)=>{
                a.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y;
            });
        }
        getHorizontalWorldBounds(t = 0) {
            const e = new p(-1, 0, .5), a = new p(1, 0, .5), i = new p(0, 1, .5), s = new p(0, -1, .5);
            if (e.unproject(this.camera), a.unproject(this.camera), i.unproject(this.camera), s.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = e.clone().sub(o).normalize(), r = a.clone().sub(o).normalize(), h = i.clone().sub(o).normalize(), m = s.clone().sub(o).normalize(), c = (t - o.z) / n.z, d = (t - o.z) / m.z, P = o.clone().add(n.multiplyScalar(c)), b = o.clone().add(r.multiplyScalar(c)), y = o.clone().add(h.multiplyScalar(d)), u = o.clone().add(m.multiplyScalar(d));
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
                let t = !1;
                for(let e = 0; e < this.objs.grassPlanes.data.length; e++){
                    const a = this.objs.grassPlanes.data[e], i = a.userData.body, s = a.userData.moveHor, o = a.userData.moveVert;
                    if (i && (s || o)) {
                        if (s) {
                            const n = i.translation(), r = s.x1 + s.w1 + a.size.x * .5, h = s.x2 - s.w2 - a.size.x * .5, m = a.userData.speed ?? .05;
                            n.x >= h && (a.userData.direction = -1), n.x <= r && (a.userData.direction = 1);
                            const c = a.userData.direction * m, d = n.x + c;
                            i.setNextKinematicTranslation({
                                x: d,
                                y: n.y,
                                z: n.z
                            }), a.position.x = d, this.objs.lamps.data[e].position.x = d, this.objs.plafons.data[e].position.x = d, this.objs.bulbs.data[e].position.x = d, this.objs.topPlanes.data[e].position.x = d;
                        } else if (o) {
                            const n = i.translation(), r = 2, h = .5, m = a.userData.speed ?? .03;
                            n.y >= r && (a.userData.direction = -1), n.y <= h && (a.userData.direction = 1);
                            const c = a.userData.direction * m, d = n.y + c;
                            i.setNextKinematicTranslation({
                                x: n.x,
                                y: d,
                                z: n.z
                            }), a.position.y = d, this.objs.lamps.data[e].position.y = d + this.objs.lamps.lampHeight, this.objs.plafons.data[e].position.y = d + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[e].position.y = d + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[e].position.y = d + .2;
                        }
                    }
                    for(let n = 0; n < this.objs.livesBlocks.data.length; n++)this.objs.livesBlocks.data[n].userData.taked ? this.objs.livesBlocks.data[n].position.y < 10 ? (this.objs.livesBlocks.data[n].position.y += .001, this.objs.livesBlocks.data[n].rotation.y += .004) : this.objs.livesBlocks.data[n].userData.taked = !1 : this.objs.livesBlocks.data[n].rotation.y += 4e-4, this.apply(n, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), t = !0;
                }
                t && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let t = 0; t < this.objs.grassPlanes.data.length; t++){
                    const e = this.objs.grassPlanes.data[t], a = this.objs.topPlanes.data[t];
                    this.objs.sensorPlanes.data[t], this.objs.lamps.data[t], this.objs.plafons.data[t], this.objs.bulbs.data[t];
                    const i = e.userData.body, s = e.userData.speed, o = i.translation();
                    o.x > this.bounds.rightX - e.size.x / 2 ? e.userData.direction = -1 : o.x < this.bounds.leftX + e.size.x / 2 && (e.userData.direction = 1);
                    const n = e.userData.direction * s, r = o.x + n;
                    t > 0 && i.setNextKinematicTranslation({
                        x: r,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[t].position.x = r, this.objs.lamps.data[t].position.x = r, this.objs.plafons.data[t].position.x = r, this.objs.bulbs.data[t].position.x = r, this.objs.topPlanes.data[t].position.x = r, this.objs.topPlanes.data[t].position.y = o.y + .4, this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), a.position.set(r, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBirdModel() {
            await new Bs().loadAsync("models/bird/bird.glb").then((a)=>{
                const i = a.scene, s = a.animations;
                i.scale.x = 2, i.scale.y = 2, i.scale.z = 2, i.position.y = 0, i.rotation.y = -Math.PI / 3, this.angryBirdModel = i, this.angryBirdModel.userData.mixer = new ft(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(s[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new Ps;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new Bs().loadAsync("models/boosts/hat.glb").then((a)=>{
                const i = a.scene;
                this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
                const s = this.boostHatPropeller.children[0].material;
                s.emissive.set(16777215), s.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 17, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .035, this.boostHatModel.scale.y = .035, this.boostHatModel.scale.z = .035, this.boostHatModel.userData.fly = !1, this.boostHatModel.userData.num = 0;
            });
        }
        async loadEnvironments() {
            for(let t = 0; t < this.objs.grassPlanes.data.length; t++)this.paramsClass.gameDir == "hor" && (this.physicsClass.addInstancedStatic(this.objs.planes.data, this.objs.planes.plane, t, {
                position: this.objs.planes.data[t].position,
                size: this.objs.planes.data[t].size,
                collide: "123"
            }), this.apply(t, this.objs.planes.data, this.objs.planes.plane)), this.physicsClass.addInstancedStatic(this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass, t, {
                position: this.objs.grassPlanes.data[t].position,
                size: this.objs.grassPlanes.data[t].size,
                collide: "123"
            }), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : this.objs.grassPlanes.data[t].userData.moveHor ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && t > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[t].userData.noFriction = !0, this.objs.grassPlanes.data[t].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(t, new E(13421806))), t > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(t, new E(16711680)), t == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(t, new E(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.paramsClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((t, e, a)=>{
                t.children[0].children[1].rotation.y += .05, this.worldClass.night && t.children[0].children[1].children[0].material.emissiveIntensity == 0 ? t.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && t.children[0].children[1].children[0].material.emissiveIntensity != 0 && (t.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new p(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: w(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird, this.angryBird.userData.speed = w(8, 13) / 100, this.angryBird.userData.flying = !0), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const t = new wt(new jt({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: ws
            }));
            return t.scale.set(10.4, 10.4, 10.4), t.renderOrder = 20, t;
        }
        lampsAnimate() {
            let t = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.x - this.bounds.rightX / 1.3, i = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((s, o)=>{
                    s.pointLight;
                    const n = s.position.x >= a && s.position.x <= i, r = o;
                    if (n && !s.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        s.pointLight = h, s.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(s.glow);
                    }
                    if (s.pointLight) {
                        const h = s.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), s.glow.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 0);
                        const m = n ? this.lightIntensity : 0;
                        h.intensity = F.lerp(h.intensity, m, .15);
                        const c = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], c, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const d = .5 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(d);
                        const P = 1.1, b = this._emissive[r], y = 1 + P * b, u = this.objs.bulbs.baseSize, g = this.objs.bulbs.data[r];
                        g.userData._lastBulbFactor !== y && (g.size.set(u.x * y, u.y * y, u.z * y), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), g.userData._lastBulbFactor = y, t = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((i, s)=>{
                    const o = i.pointLight;
                    o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), a = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0);
                    const n = 1.1, r = this._emissive[s], h = 1 + n * r, m = this.objs.bulbs.baseSize, c = this.objs.bulbs.data[s];
                    c.userData._lastBulbFactor !== h && (c.size.set(m.x * h, m.y * h, m.z * h), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), c.userData._lastBulbFactor = h, t = !0);
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.y - this.bounds.topY / 2, i = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((s, o)=>{
                    s.pointLight;
                    const n = s.position.y >= a && s.position.y <= i, r = o;
                    if (n && !s.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        s.pointLight = h, s.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(s.glow);
                    }
                    if (s.pointLight) {
                        const h = s.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), s.glow.position.copy(s.position);
                        const m = n ? this.lightIntensity : 0;
                        h.intensity = F.lerp(h.intensity, m, .15);
                        const c = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], c, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const d = .8 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(d);
                        const P = 1, b = this._emissive[r], y = 1 + P * b, u = this.objs.bulbs.baseSize, g = this.objs.bulbs.data[r];
                        g.userData._lastBulbFactor !== y && (g.size.set(u.x * y, u.y * y, u.z * y), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), g.userData._lastBulbFactor = y, t = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((i, s)=>{
                    const o = i.pointLight;
                    !i.pointLight && this._emissive[s] === 0 || (o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), a = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0));
                }), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed(t = !1) {
            let e;
            if (t ? e = this.players.filter((s, o, n)=>s.player.userData.live) : e = this.players, e.length === 0) return -1;
            let a = 0, i;
            this.paramsClass.gameDir == "vert" ? i = e[0].player.position.y : i = e[0].player.position.x;
            for(let s = 1; s < e.length; s++)e[s].player && e[s].player.userData.live && e[s].player.position && (this.paramsClass.gameDir == "vert" ? e[s].player.position.y > i && (i = e[s].player.position.y, a = s) : e[s].player.position.x > i && (i = e[s].player.position.x, a = s));
            return t ? this.players.indexOf(e[a], 0) : a;
        }
        async loadPlayers() {
            for(let t = 0; t < this.players.length; t++){
                let e = this.players[t];
                e.player.position.x = e.player.position.x - t * 1 + 1, this.physicsClass.addPhysicsToObject(e.player), this.paramsClass.gameDir == "vert" && (e.player.position.y = -0, e.player.userData.collider.setFriction(500)), await e.loadPlayerModel(), e.player.userData.startPos = e.player.position.clone(), this.scene.add(e.player), this.scene.add(e.playerOut), this.scene.add(e.playerModel), this.playerOuts.push(e.playerOut), t < this.players[0].playerColors.length ? e.head.children[0].material.color.set(this.players[0].playerColors[t]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), e.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > t ? e.player.userData.audio.push(this.audioClass.quacks[t].clone()) : e.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(t, e = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.paramsClass.gameStarting && (t.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, t.position.y = this.isMobile ? 4 : 3, t.position.z = this.isMobile ? 20 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const a = this.maxSpeed(!0);
                        if (a >= 0) {
                            let i = 0;
                            this.players.length > 1 ? i = this.players[a].player.position.x : this.paramsClass.gameDir == "hor" && (i = this.players[a].player.position.x + this.bounds.rightX / 2);
                            const s = this.cam.maxBackJump;
                            i < this.cam.targetX - s ? this.cam.targetX = this.cam.targetX - s : this.cam.targetX = i;
                            const o = this.spring(t.position.x, this.cam.targetX, this.cam.velX, .25, e);
                            t.position.x = o.newPos, this.cam.velX = o.newVel, t.position.y = this.isMobile ? 4 : 3, t.position.z = this.isMobile ? 20 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                        }
                        break;
                    }
                case 3:
                    this.getHorizontalWorldBounds(), this.paramsClass.gameStarting && (t.position.y += this.cameraSpeed), t.position.x = 0, t.position.z = this.isMobile ? 20 : 32, this.cameraSpeed += 1e-6, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 4:
                    this.getHorizontalWorldBounds(), this.paramsClass.gameStarting && (t.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), t.position.x = 0, t.position.z = this.isMobile ? 25 : 32, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
            }
        }
        damp(t, e, a, i) {
            return t + (e - t) * (1 - Math.exp(-a * i));
        }
        spring(t, e, a, i, s) {
            const o = 2 / i, n = o * s, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = t - e;
            const m = (a + o * h) * s, c = (a - o * m) * r;
            return {
                newPos: e + (h + m) * r,
                newVel: c
            };
        }
        showPopupInGame(t = !1, e = !1) {
            this.players.every((a)=>!a.player.userData.finish) ? (document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.looseAudio.play()) : (console.log(123), document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win")), e ? (this.hideScreen("popup_game_btn1"), this.levelsMode < this.allLevels ? this.showScreen("popup_game_btn15") : this.hideScreen("popup_game_btn15")) : !t || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), this.showScreen("popup_in_game");
        }
        rebindButton(t, e) {
            const a = document.querySelector(t), i = a.cloneNode(!0);
            return a.parentNode.replaceChild(i, a), i.addEventListener("click", e), i;
        }
        menuInGame = ()=>{
            this.rebindButton(".popup_game_btn1", ()=>{
                this.hideScreen("popup_in_game"), this.boostHatModels.forEach((t, e, a)=>{
                    t.userData.fly = !1;
                }), this.players[0].playerAliving(!1), this.players[0].player.userData.lives = 1, this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1);
            }), this.rebindButton(".popup_game_btn2", ()=>{
                this.players.forEach((t, e, a)=>{
                    t.player.userData.finish = !1, t.playerAliving(!0);
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 2, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((t, e, a)=>{
                    t.position.x = this.boostHatCoords[e][0], t.position.y = this.boostHatCoords[e][1], t.userData.fly = !1;
                });
                for(let t = 0; t < this.objs.livesBlocks.data.length; t++)this.objs.livesBlocks.data[t].position = this.objs.livesBlocks.data[t].userData.startPos, this.apply(t, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.hideScreen("popup_in_game"), this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]);
            }), this.rebindButton(".popup_game_btn15", ()=>{
                this.paramsClass.dataLoaded = !1, Zs(this.scene), this.audioClass.stopMusic(0), this.hideScreen("popup_in_game"), setTimeout(()=>{
                    let t = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 777;
                    this.initMatch(this.players.length, this.gameNum, t, this.birdYes);
                }, 100), this.players.forEach((t, e, a)=>{
                    t.playerAliving(!0);
                });
            }), this.rebindButton(".popup_game_btn3", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((t, e, a)=>{
                    t.playerAliving(!0);
                }), this.paramsClass.dataLoaded = !1, Zs(this.scene), this.audioClass.stopMusic(0);
            });
        };
        hideScreen(t) {
            document.querySelector(`.${t}`).classList.add("hidden_screen");
        }
        showScreen(t) {
            document.querySelector(`.${t}`).classList.remove("hidden_screen");
        }
    }
    class V {
        constructor(t, e){
            this.world = t, this.RAPIER = e, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new _s;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const e = t.geometry;
            e.computeBoundingBox();
            const a = new p;
            e.boundingBox.getSize(a);
            const i = new p(1 / (a.x || 1), 1 / (a.y || 1), 1 / (a.z || 1));
            return t.userData.invBase = i, i;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new p(t, t, t) : t?.isVector3 ? t.clone() : new p(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, e, a) {
            const i = V._toVec3(a.size), s = V._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = a.quaternion?.isQuaternion ? a.quaternion : new ps, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.x, s.y, s.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), r = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(r, n), this.instancedBodies.push({
                mesh: t,
                index: e,
                size: i,
                body: n
            });
        }
        addInstancedStatic(t, e, a, i) {
            const s = V._toVec3(i.size), o = V._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = i.quaternion?.isQuaternion ? i.quaternion : new ps, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setFriction(1.6).setRestitution(0);
            t[a].userData.body = r, t[a].userData.shape = h, t[a].userData.collide = this.world.createCollider(h, r), this.instancedBodies.push({
                mesh: e,
                index: a,
                size: s,
                body: r
            });
        }
        updateInstancedTransforms() {
            const t = this._dummy, e = new Set;
            for (const a of this.instancedBodies){
                const i = V._ensureInvBase(a.mesh), s = a.body.translation(), o = a.body.rotation();
                t.position.set(s.x, s.y, s.z), t.quaternion.set(o.x, o.y, o.z, o.w), t.scale.set(a.size.x * i.x, a.size.y * i.y, a.size.z * i.z), t.updateMatrix(), a.mesh.setMatrixAt(a.index, t.matrix), e.add(a.mesh);
            }
            for (const a of e)a.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let e, a;
                const i = t.rotation.clone();
                t.rotation.set(0, 0, 0), new Z().setFromObject(t);
                const s = ks(t);
                t.rotation.copy(i), t.userData.size = s, t.userData.orgRotation = i, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), t.userData.body = e, t.userData.shape = a;
                let o = e;
                a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(a, e);
                t.userData.collider = n, t.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    t,
                    e,
                    t.id
                ]);
            } else if (t != null && t.userData.name.includes("tops")) {
                let e, a;
                const i = t.rotation.clone();
                t.rotation.set(0, 0, 0), new Z().setFromObject(t);
                const s = ks(t);
                t.rotation.copy(i), t.userData.size = s, t.userData.orgRotation = i, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setMass(1).setRestitution(0).setFriction(.3), a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(a, e);
                t.userData.body = e, t.userData.collide = o, this.allWallBodyCollision.push(o), t.userData.handle = e.handle, this.dynamicBodies.push([
                    t,
                    e,
                    t.id
                ]), t.userData.playerHandlesInside = new Set, this.allTops.push(t);
            } else if (t != null && t.userData.name.includes("bird")) {
                let e, a;
                const i = t.rotation.clone();
                t.rotation.set(0, 0, 0), new Z().setFromObject(t);
                const s = ks(t);
                t.rotation.copy(i), t.userData.size = s, t.userData.orgRotation = i, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setMass(1).setRestitution(1).setFriction(0), a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(a, e);
                t.userData.body = e, t.userData.collide = o, this.allWallBodyCollision.push(o), t.userData.handle = e.handle, this.dynamicBodies.push([
                    t,
                    e,
                    t.id
                ]);
            }
        }
    }
    const zs = new p;
    function ks(l) {
        if (l.isMesh && l.geometry) {
            const e = l.geometry;
            return e.boundingBox || e.computeBoundingBox(), e.boundingBox.getSize(zs), zs.multiply(l.scale), zs.clone();
        }
        return new Z().setFromObject(l).getSize(new p);
    }
    class Qt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2;
        }
        async loadAudio() {
            const t = new xt, e = new Pt;
            await e.loadAsync("audio/back1.mp3").then((a)=>{
                this.backAudio = new v(t), this.backAudio.setBuffer(a), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/back2.mp3").then((a)=>{
                this.backAudio2 = new v(t), this.backAudio2.setBuffer(a), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/back3.mp3").then((a)=>{
                this.backAudio3 = new v(t), this.backAudio3.setBuffer(a), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(.5), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/ocean.mp3").then((a)=>{
                this.oceanAudio = new v(t), this.oceanAudio.setBuffer(a), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/inwater.mp3").then((a)=>{
                this.inwaterAudio = new v(t), this.inwaterAudio.setBuffer(a), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/loose.mp3").then((a)=>{
                this.looseAudio = new v(t), this.looseAudio.setBuffer(a), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/take.mp3").then((a)=>{
                this.takeAudio = new v(t), this.takeAudio.setBuffer(a), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/ready-jump.mp3").then((a)=>{
                this.readyJumpAudio = new v(t), this.readyJumpAudio.setBuffer(a), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(10), this.readyJumpAudio.setVolume(2), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/quack1.mp3").then((a)=>{
                this.jumpAudio = new v(t), this.jumpAudio.setBuffer(a), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/quack2.mp3").then((a)=>{
                this.jumpAudio2 = new v(t), this.jumpAudio2.setBuffer(a), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/quack3.mp3").then((a)=>{
                this.jumpAudio3 = new v(t), this.jumpAudio3.setBuffer(a), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/rain.mp3").then((a)=>{
                this.rainAudio = new v(t), this.rainAudio.setBuffer(a), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1), this.musics.push({
                    name: "rain",
                    music: this.rainAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/thunder.mp3").then((a)=>{
                this.thunderAudio = new v(t), this.thunderAudio.setBuffer(a), this.thunderAudio.setLoop(!1), this.thunderAudio.setRefDistance(400), this.thunderAudio.setVolume(1), this.thundersAudio.push({
                    name: "thunder1",
                    music: this.thunderAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/thunder2.mp3").then((a)=>{
                this.thunderAudio2 = new v(t), this.thunderAudio2.setBuffer(a), this.thunderAudio2.setLoop(!1), this.thunderAudio2.setRefDistance(400), this.thunderAudio2.setVolume(1), this.thundersAudio.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/thunder3.mp3").then((a)=>{
                this.thunderAudio3 = new v(t), this.thunderAudio3.setBuffer(a), this.thunderAudio3.setLoop(!1), this.thunderAudio3.setRefDistance(400), this.thunderAudio3.setVolume(1), this.thundersAudio.push({
                    name: "thunder3",
                    music: this.thunderAudio3
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), this.musics.push({
                name: "back",
                music: this.backAudio
            });
        }
        stopMusic(t) {
            t == 0 ? this.musics.forEach((e, a, i)=>{
                e.music.stop();
            }) : t.forEach((e, a, i)=>{
                this.musics.find((s)=>s.name === e).music.stop();
            });
        }
        pauseMusic(t) {
            t.forEach((e, a, i)=>{
                this.musics.find((s)=>s.name === e).music.pause();
            });
        }
        playMusic(t) {
            t.forEach((e, a, i)=>{
                let s = this.musics.find((o)=>o.name === e).music;
                s.isPlaying || s.play();
            });
        }
        dayNight(t = !0, e = !1) {
            t && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((a)=>a.name === "back").music = this.musics.find((a)=>a.name === "back1").music, this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)) : !t && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((a)=>a.name === "back").music = this.musics.find((a)=>e ? a.name === "back3" : a.name === "back2").music, this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class $t {
        constructor(t, e, a, i, s){
            this.levelClass = t, this.isMobile = e, this.renderer = a, this.camera = i, this.paramsClass = s, this.mouse = new p, this.raycaster = new Dt;
        }
        addKeyListeners() {
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
        }
        removedKeyListeners() {
            window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("mousedown", this.onKeyDown), window.removeEventListener("mouseup", this.onKeyUp), document.removeEventListener("touchend", this.onTapUp), document.removeEventListener("touchstart", this.onTapDown);
        }
        onTapDown = (t)=>{
            let e = this.renderer.domElement.getBoundingClientRect();
            t = t.changedTouches[0], this.mouse.x = (t.clientX - e.left) / e.width * 2 - 1, this.mouse.y = -((t.clientY - e.top) / e.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
        };
        onTapUp = (t)=>{
            let e = this.renderer.domElement.getBoundingClientRect();
            t = t.changedTouches[0], this.mouse.x = (t.clientX - e.left) / e.width * 2 - 1, this.mouse.y = -((t.clientY - e.top) / e.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
        };
        onKeyDown = (t)=>{
            switch(t.code){
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
                    this.levelClass.players.forEach((e, a, i)=>{
                        e.player.userData.playerAlive = !0;
                    });
                    break;
                case "KeyP":
                    this.paramsClass.gameStarting = !this.paramsClass.gameStarting;
            }
        };
        onKeyUp = (t)=>{
            switch(t.code){
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
        downKeys(t) {
            t.userData.live && (t.userData.onGround ? (t.userData.readyJump || t.userData.audio[0].play(), t.userData.readyJump = !0) : t.userData.canFly && (t.userData.readyJump = !0, t.userData.readyJump || t.userData.audio[0].play()));
        }
        upKeys(t) {
            t.userData.live && (t.userData.canFly && !t.userData.onGround && t.userData.canFlyJumps > 0 && (t.userData.canFlyJumps--, t.userData.canFlyJumps == 0 && setTimeout(()=>{
                t.userData.canFly = !1, this.levelClass.boostHatModels[t.userData.canFlyNum].userData.fly = !1;
            }, 1e3)), t.userData.readyJump && t.userData.onGround ? (t.userData.jumping = !0, t.userData.readyJump = !1, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = !1) : t.userData.onGround || (t.userData.canFly ? (t.userData.jumping = !0, t.userData.readyJump = !1, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = !1, t.userData.hatBoost--, t.userData.hatBoost == 0 && (t.userData.canFly = !1, setTimeout(()=>{
                this.levelClass.boostHatModels[t.userData.numHatBoost].userData.fly = !1;
            }, 500))) : (t.userData.readyJump = !1, t.userData.audio[0].stop())));
        }
    }
    class se {
        constructor(t, e, a, i, s, o){
            this.scene = t, this.camera = e, this.renderer = a, this.paramsClass = i, this.isMobile = s, this.audioClass = o, this.ambientLight = new Mt(11184810, 1), this.hemiLight = new Ct(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new At(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new _s, this.dirLight.target = this.targetObject, this.helper = new zt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.activeLightningLines = [], this.lightningMaterialBase = new kt({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: ws,
                depthWrite: !1
            }), this.clock = new Ps, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 25, this.rainAreaHalfDepth = 22, this.rainTopY = 10, this.rainBottomY = -4, this.rainGeometry = new fs, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let e = 0; e < this.rainDropCount; e++){
                const a = e * 3;
                this.rainPositions[a + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[a + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[a + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[e] = 15 + Math.random() * 15, this.rainWindPhase[e] = Math.random() * Math.PI * 2;
            }
            const t = new Float32Array(this.rainDropCount * 3);
            for(let e = 0; e < this.rainDropCount; e++){
                const a = .8 + Math.random() * .2;
                t[e * 3 + 0] = .7 * a, t[e * 3 + 1] = .8 * a, t[e * 3 + 2] = 1 * a;
            }
            this.rainGeometry.setAttribute("position", new ns(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new ns(t, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new St({
                color: 15658751,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .8,
                transparent: !0,
                opacity: .84,
                size: 9,
                sizeAttenuation: !1,
                depthWrite: !1,
                blending: ws
            }), this.rainPoints = new Rs(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Is(900, 500), this.water = new Bt(this.waterGeometry, {
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
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new p, this.sky = new Lt, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new xs(new Is(1e4, 1e4), new at({
                color: 526362,
                side: _t,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const e = 1500, a = new Float32Array(e * 3), i = new Float32Array(e), s = new Float32Array(e * 3);
            for(let h = 0; h < e; h++){
                a[3 * h] = Math.random() * 600 - 300, a[3 * h + 1] = Math.random() * 150 - 100, a[3 * h + 2] = Math.random() * 300 - 500, i[h] = Math.random() * 2 + .7;
                const m = new E().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                s[3 * h] = m.r, s[3 * h + 1] = m.g, s[3 * h + 2] = m.b;
            }
            const o = new fs;
            o.setAttribute("position", new ns(a, 3)), o.setAttribute("size", new ns(i, 1)), o.setAttribute("color", new ns(s, 3));
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
                blending: ws
            }), this.stars = new Rs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const t = this.camera.position.x, e = Math.sign(t - this._prevCamX);
            this._prevCamX = e, this.stars.position.x = this.camera.position.x;
            const a = F.degToRad(90 - this.parameters.elevation), i = F.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, a, i), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), this.parameters.elevation < 2 && !this.rainStart && (this.rain = !0, this.startRain(), this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1, this.rain && this.parameters.elevation >= -3 && (this.audioClass.rainAudio.stop(), this.rainStart = !1, this.scene.remove(this.rainPoints), this.rain = !1))), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const s = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= s * .05, this.blackSky.material.opacity += s * .02, this.materialStars.uniforms.opacity.value += s * .008, this.camera.position.y < this.topLight && s < 0 ? (this.dirLight.intensity -= s * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= s * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= s * .05, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && s > 0 && (this.dirLight.intensity -= s * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= s * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= s * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && this.camera.position.y > 10 && (this.topLight = this.camera.position.y), this.prevCameraYSun = this.camera.position.y, this.camera.position.y > 30 ? this.night = !0 : this.night = !1;
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
            const t = performance.now();
            this.thunder && (t >= this.nextThunderFlashTimestampMs && (this.triggerThunderFlashNow(), this.scheduleNextThunderFlash(t)), t >= this.thunderEndTimestampMs && (this.thunder = !1, this.isThunderActive = !1)), this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);
            const e = 10;
            this.dirLight.shadow.camera.left = -e, this.dirLight.shadow.camera.right = e, this.dirLight.shadow.camera.top = e, this.dirLight.shadow.camera.bottom = -e, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let a = this.activeLightningLines.length - 1; a >= 0; a--){
                const i = this.activeLightningLines[a];
                i.userData.life -= this.deltaSeconds / 1.5, i.material.opacity *= .78, (i.userData.life <= 0 || i.material.opacity <= .02) && (this.scene.remove(i), i.geometry.dispose(), i.material.dispose(), this.activeLightningLines.splice(a, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const a = this.rainGeometry.getAttribute("position"), i = Math.sin(performance.now() * .0012) * .8, s = this.camera.position.x, o = this.camera.position.z;
                for(let n = 0; n < this.rainDropCount; n++){
                    const r = n * 3, h = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + i * .4;
                    this.rainPositions[r + 0] += h * this.deltaSeconds * 6, this.rainPositions[r + 1] -= this.rainVelocities[n] * (1 + Math.abs(i) * .3) * this.deltaSeconds, s + this.rainPositions[r + 0], o + this.rainPositions[r + 2], this.rainPositions[r + 1] < this.rainBottomY && (this.rainPositions[r + 1] = this.rainTopY, this.rainPositions[r + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[r + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[r + 0] > this.rainAreaHalfWidth && (this.rainPositions[r + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[r + 0] < -this.rainAreaHalfWidth && (this.rainPositions[r + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[r + 2] > this.rainAreaHalfDepth && (this.rainPositions[r + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[r + 2] < -this.rainAreaHalfDepth && (this.rainPositions[r + 2] += this.rainAreaHalfDepth * 2 - 35);
                }
                this.rainPoints.position.set(s, 0, o), a.needsUpdate = !0;
            }
            this.waterUpdate(), this.updateSky();
        }
        startRain() {
            this.rain && this.scene.add(this.rainPoints);
        }
        startThunder() {
            if (!this.thunder) return;
            const t = performance.now();
            this.isThunderActive = !0, this.thunderEndTimestampMs = t + 16e3, this.triggerThunderFlashNow(), this.scheduleNextThunderFlash(t);
        }
        triggerThunderFlashNow() {
            if (!this.thunder) return;
            const t = this.audioClass.thundersAudio;
            if (t && t.length > 0) {
                const e = t[this.currentThunderIndex % t.length].music;
                e.isPlaying && e.stop(), e.play(), this.currentThunderIndex++;
            }
            this.triggerLightningFlash(), this.lightningFade = 1;
        }
        scheduleNextThunderFlash(t) {
            const e = this.minThunderIntervalMs + Math.random() * (this.maxThunderIntervalMs - this.minThunderIntervalMs);
            this.nextThunderFlashTimestampMs = t + e;
        }
        stopThunderImmediately() {
            this.thunder = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0;
        }
        createLightningBolt(t, e, a) {
            const i = t + (Math.random() - .5) * 6, s = -4 + Math.random() * 3, o = a + (Math.random() - .5) * 6, n = i - t, r = s - e, h = o - a, m = Math.hypot(n, r, h) || 1, c = n / m, d = r / m, P = h / m, b = n / m, u = -(h / m), g = 0, O = b, Q = Math.abs(d) > .9 ? new p(1, 0, 0) : new p(0, 1, 0), I = new p(c, d, P), cs = new p().crossVectors(I, Q).normalize(), Cs = new p().crossVectors(I, cs).normalize(), rt = 2 + Math.random() * 2, lt = 1.2, ht = Math.random() * Math.PI * 2, dt = 3 + Math.random() * 2.5, pt = .8, ut = Math.random() * Math.PI * 2, As = 28, ms = 4, $ = [];
            for(let M = 0; M <= As; M++){
                const C = M / As, z = 1 - C;
                let G = t + n * C, ss = e + r * C, ts = a + h * C;
                const W = Math.sin(C * Math.PI * rt + ht) * lt * (.3 + .7 * z), X = Math.sin(C * Math.PI * dt + ut) * pt * (.3 + .7 * z), Y = (Math.random() - .5) * 2 * ms * z, L = (Math.random() - .5) * 1.6 * ms * z, k = Math.random() < .12 ? (Math.random() - .5) * 3.5 * z : 0;
                if (G += cs.x * (W + Y + k) + Cs.x * (X + L * .7), ss += cs.y * (W + Y * .5) + Cs.y * (X + L * .5), ts += cs.z * (W + Y + k) + Cs.z * (X + L * .7), $.push(G, ss, ts), M > 3 && M < As - 3 && Math.random() < .22) {
                    const N = [], es = 3 + Math.floor(Math.random() * 2), U = .25 + Math.random() * .35;
                    let as = G, is = ss, os = ts;
                    N.push(as, is, os);
                    for(let bs = 1; bs <= es; bs++)as += (Math.random() - .5) * ms * U, is += -(.8 + Math.random() * .8) * U, os += (Math.random() - .5) * ms * U, N.push(as, is, os);
                    const ys = new fs;
                    ys.setAttribute("position", new Gs(N, 3));
                    const J = new Ws(ys, this.lightningMaterialBase.clone());
                    J.material.opacity = .6, J.userData.life = .16 + Math.random() * .12, this.scene.add(J), this.activeLightningLines.push(J);
                }
            }
            const ct = 2;
            for(let M = -1; M <= ct; M++){
                const C = M === -1, z = C ? 0 : M % 2 === 0 ? 1 : -1, G = .55 + Math.random() * .45, ss = .35, ts = Math.random() * Math.PI * 2, W = [], X = $.length / 3;
                for(let k = 0; k < X; k++){
                    const N = k / (X - 1), es = .35 + .85 * N, U = Math.sin(N * Math.PI * 2 + ts) * ss * (.2 + .8 * N), as = u * z * G * es + O * U * .3, is = g * z * G * es + U * .05, os = O * z * G * es - u * U * .3, ys = k * 3 + 0, J = k * 3 + 1, bs = k * 3 + 2, Hs = $[ys], Ts = $[J], Es = $[bs];
                    C ? W.push(Hs + (Math.random() - .5) * .05, Ts + (Math.random() - .5) * .05, Es + (Math.random() - .5) * .05) : W.push(Hs + as + (Math.random() - .5) * .2, Ts + is + (Math.random() - .5) * .2, Es + os + (Math.random() - .5) * .2);
                }
                const Y = new fs;
                Y.setAttribute("position", new Gs(W, 3));
                const L = new Ws(Y, this.lightningMaterialBase.clone());
                L.material.opacity = C ? .95 : .32, L.userData.life = .22 + Math.random() * .18, this.scene.add(L), this.activeLightningLines.push(L);
            }
        }
        triggerLightningFlash() {
            const t = this.camera.position.x + (Math.random() - .5) * 30, e = 34 + Math.random() * 6, a = -10 - Math.random() * 20;
            this.createLightningBolt(t, e, a);
        }
        makeRainStreakTexture() {
            const a = new Uint8Array(60);
            for(let s = 0; s < 15; s++){
                const o = Math.sin(s / 14 * Math.PI);
                for(let n = 0; n < 1; n++){
                    const r = (s * 1 + n) * 4;
                    a[r + 0] = 255, a[r + 1] = 255, a[r + 2] = 255, a[r + 3] = Math.round(o * 255);
                }
            }
            const i = new Tt(a, 1, 15, Et);
            return i.needsUpdate = !0, i.magFilter = Ns, i.minFilter = Ns, i.wrapS = Us, i.wrapT = Us, i.rotation = Math.PI / 2, i.center.set(.5, .5), i;
        }
    }
    class te {
        constructor(t, e){
            this.initMatch = t, this.loadLevels = e, this.loadLevels(), this.mainMenu(this.initMatch), this.playersNum = 2, this.levelPlayersNum = 1;
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("together_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", async ()=>{
                this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((t, e, a)=>{
                t.addEventListener("click", ()=>{
                    this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, e + 1, !0);
                });
            }), document.querySelectorAll(".level_game_chels").forEach((t, e, a)=>{
                t.addEventListener("click", ()=>{
                    document.querySelectorAll(".level_game_chels").forEach((i)=>{
                        i.classList.remove("level_game_chels_active");
                    }), t.classList.add("level_game_chels_active"), this.levelPlayersNum = e + 1;
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
            }), document.querySelectorAll(".together_game_chels").forEach((t, e, a)=>{
                t.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((i)=>{
                        i.classList.remove("together_game_chels_active");
                    }), t.classList.add("together_game_chels_active"), this.playersNum = e + 2;
                });
            });
        };
        toggleLoader(t) {
            t ? document.querySelector(".loader_screen").classList.remove("hidden_screen") : document.querySelector(".loader_screen").classList.add("hidden_screen");
        }
        hideScreen(t) {
            document.querySelector(`.${t}`).classList.add("hidden_screen");
        }
        showScreen(t) {
            document.querySelector(`.${t}`).classList.remove("hidden_screen");
        }
    }
    class ee {
        constructor(){
            this.gameDir = "vert", this.gameStarting = !1, this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class ae {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const e = Qs, a = performance.now(), i = 200;
            function s(o) {
                const n = Math.min(1, (o - a) / i), r = 1 - Math.pow(1 - n, 4), h = Math.round(e + (t - e) * r);
                ie.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(s) : Qs = t;
            }
            requestAnimationFrame(s);
        }
    }
    const ie = document.getElementById("meters-float");
    let Qs = 0;
    console.clear();
    let Ls, oe = new Ps, it, js, us, B, f, R, hs, D, K, ne = 4;
    const $s = [
        "completed",
        "completed",
        "completed",
        "available",
        "available",
        "locked",
        "locked",
        "locked",
        "locked",
        "locked",
        "locked",
        "locked"
    ], ds = new Ft;
    ds.background = new E(13230580);
    const j = new Rt(25, window.innerWidth / window.innerHeight, .1, 2e3);
    j.position.y = 2;
    const vs = Xt();
    let Ms = new It;
    document.body.appendChild(Ms.dom);
    Ms.dom.style.top = "0px";
    Ms.dom.style.left = "48%";
    const x = new Gt;
    x.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(x.domElement);
    x.shadowMap.enabled = !0;
    x.shadowMap.type = Wt;
    x.outputColorSpace = Nt;
    x.toneMapping = Ut;
    x.toneMappingExposure = 1.05;
    ot();
    window.addEventListener("resize", ot, !1);
    function ot() {
        vs ? (j.aspect = document.body.offsetWidth / document.body.offsetHeight, j.updateProjectionMatrix(), x.setSize(innerWidth, innerHeight)) : (j.aspect = document.body.offsetWidth / document.body.offsetHeight, j.updateProjectionMatrix(), x.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function re(l) {
        const t = await Ot(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Ls = new t.World(new t.Vector3(0, -9.81, 0)), it = new t.EventQueue(!0), B = new V(Ls, t), K = new ae(j), R = new Qt, us = new se(ds, j, x, D, vs, R), f = new Zt(ds, R, B, x, j, vs, D, us, nt, ne);
        for(let e = 0; e < l; e++)f.players.push(new Kt(ds, R, f, D, j));
        hs = new $t(f, vs, x, j, D), hs.addKeyListeners();
    }
    async function le() {
        await us.loadWorld(), await R.loadAudio(), R.backAudio.play(), R.oceanAudio.play();
    }
    async function he(l, t = t) {
        await f.createLevel(l, t = t), await f.loadEnvironments(), await f.loadPlayers(), f.objs.grassPlanes.data.length > 0 && f.objs.grassPlanes.data.forEach((e, a)=>{
            f.objs.grassPlanes.data[a].userData.collide.setCollisionGroups(Ds([
                0
            ], [
                1
            ]));
        }), f.players.length > 0 && f.players.forEach((e, a)=>{
            f.players[a].player.userData.collider.setCollisionGroups(Ds([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function nt(l, t, e = !1, a = !0) {
        de(), js.toggleLoader(!0), D = new ee, await re(l), f.gameNum = t, await le(), await he(e, a = a), setTimeout(()=>{
            js.showScreen("hud"), js.toggleLoader(!1), D.dataLoaded = !0, D.gameStarting = !0;
        }, 300);
    }
    js = new te(nt, ue);
    function de() {
        j.position.y = 2, j.position.x = 0, x.toneMappingExposure = 1.05, hs?.removedKeyListeners(), us = null, B = null, f = null, R = null, hs = null, D = null, K = null;
    }
    function pe() {
        if (D.dataLoaded && D.gameStarting) {
            D.gameDir == "hor" ? K.updateMetersFloat(j.position.x - K.startX) : K.updateMetersFloat(j.position.y - K.startY), f.players.forEach((l, t, e)=>{
                l.playerMove();
            }), us.updateLighting(), f.levelAnimate(j), f.cameraMove(j), Ms.update();
            for(let l = 0, t = B.dynamicBodies.length; l < t; l++)B.dynamicBodies[l][0].position.copy(B.dynamicBodies[l][1].translation()), B.dynamicBodies[l][0].quaternion.copy(B.dynamicBodies[l][1].rotation());
            B.updateInstancedTransforms(), Ls.step(it), D.gameStarting && x.render(ds, j);
        }
    }
    let Ss = 0;
    const st = 1 / 60, tt = .1;
    x.setAnimationLoop(()=>{
        if (D != null) {
            let l = oe.getDelta();
            for(l > tt && (l = tt), Ss += l; Ss >= st;)pe(), Ss -= st;
        }
    });
    async function ue() {
        const l = document.querySelector(".levels_blocks");
        if (!l) return;
        l.classList.add("levels_blocks--reenter"), l.innerHTML = "";
        const t = document.createDocumentFragment(), e = (o)=>{
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
        }, a = 40, i = 60, s = 600;
        for(let o = 0; o < $s.length; o++){
            const n = $s[o], { modifierClass: r, labelText: h, ariaState: m } = e(n), c = document.createElement("div");
            c.className = `levels_block ${r}`, c.setAttribute("data-level", String(o + 1)), c.setAttribute("role", "button"), c.setAttribute("tabindex", n === "locked" ? "-1" : "0"), c.setAttribute("aria-label", `Уровень ${o + 1}, ${m}`);
            const d = Math.min(i + o * a, s);
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
            }), t.append(c);
        }
        l.append(t), requestAnimationFrame(()=>{
            l.classList.remove("levels_blocks--reenter"), l.querySelectorAll(".levels_block").forEach((o)=>{
                o.classList.add("levels_block--enter");
            });
        });
    }
})();

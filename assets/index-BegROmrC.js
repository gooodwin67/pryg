import { B as Z, V as p, Q as ds, M as ct, a as xs, b as T, c as ns, d as U, G as Bs, E as B, C as E, S as mt, e as yt, f as Fs, I as _, D as H, g as bt, h as vs, O as Ls, T as tt, R as rs, i as et, P as bs, A as gt, j as ft, k as wt, l as fs, m as F, n as jt, o as xt, p as vt, q as j, r as Pt, s as Dt, H as Mt, t as Ct, u as At, L as zt, v as gs, w as os, x as St, y as Rs, z as Is, W as Bt, F as kt, J as Lt, K as _t, N as Gs, U as Ws, X as Ht, Y as Tt, Z as Ns, _ as Us, $ as Et, a0 as Ft, a1 as Rt, a2 as It, a3 as Gt, a4 as Wt, a5 as Nt } from "./three-DAxnn8pU.js";
(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);
        new MutationObserver((a)=>{
            for (const s of a)if (s.type === "childList") for (const o of s.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && e(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function i(a) {
            const s = {};
            return a.integrity && (s.integrity = a.integrity), a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? s.credentials = "include" : a.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function e(a) {
            if (a.ep) return;
            a.ep = !0;
            const s = i(a);
            fetch(a.href, s);
        }
    })();
    const Ut = "modulepreload", Vt = function(l, t) {
        return new URL(l, t).href;
    }, Vs = {}, qt = function(t, i, e) {
        let a = Promise.resolve();
        if (i && i.length > 0) {
            let h = function(u) {
                return Promise.all(u.map((d)=>Promise.resolve(d).then((m)=>({
                            status: "fulfilled",
                            value: m
                        }), (m)=>({
                            status: "rejected",
                            reason: m
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = n?.nonce || n?.getAttribute("nonce");
            a = h(i.map((u)=>{
                if (u = Vt(u, e), u in Vs) return;
                Vs[u] = !0;
                const d = u.endsWith(".css"), m = d ? '[rel="stylesheet"]' : "";
                if (!!e) for(let c = o.length - 1; c >= 0; c--){
                    const y = o[c];
                    if (y.href === u && (!d || y.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${u}"]${m}`)) return;
                const b = document.createElement("link");
                if (b.rel = d ? "stylesheet" : Ut, d || (b.as = "script"), b.crossOrigin = "", b.href = u, r && b.setAttribute("nonce", r), document.head.appendChild(b), d) return new Promise((c, y)=>{
                    b.addEventListener("load", c), b.addEventListener("error", ()=>y(new Error(`Unable to preload CSS for ${u}`)));
                });
            }));
        }
        function s(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return a.then((o)=>{
            for (const n of o || [])n.status === "rejected" && s(n.reason);
            return t().catch(s);
        });
    };
    function f(l, t) {
        return Math.random() * (t - l) + l;
    }
    function Ot() {
        let l = window.matchMedia || window.msMatchMedia;
        return l ? l("(pointer:coarse)").matches : !1;
    }
    function qs(l) {
        return l.reduce((t, i)=>t | 1 << i, 0);
    }
    function Ps(l, t) {
        const i = qs(l), e = qs(t);
        return "0x" + ((i & 65535) << 16 | e & 65535).toString(16).padStart(8, "0");
    }
    function Os(l) {
        const t = l.collisionGroups(), i = t >>> 16 & 65535, e = t & 65535;
        function a(s) {
            const o = [];
            for(let n = 0; n < 16; n++)s & 1 << n && o.push(n);
            return o;
        }
        return [
            a(i),
            a(e)
        ];
    }
    function Xt(l) {
        return typeof l == "number" ? new p(l, l, l) : l?.isVector3 ? l : new p(l?.x ?? 1, l?.y ?? 1, l?.z ?? 1);
    }
    function Xs(l) {
        return l?.userData?.id ?? l?.uuid ?? l?.id;
    }
    const Yt = new Z(new p(-.5, -.5, -.5), new p(.5, .5, .5)), Ys = new ct, Js = new ds;
    function Ks(l) {
        if (l?.isObject3D) {
            if (l.updateMatrixWorld(!0), l.geometry?.isBufferGeometry) {
                const a = l.geometry;
                if (a.boundingBox || a.computeBoundingBox(), a.boundingBox) {
                    const s = a.boundingBox.clone();
                    return s.applyMatrix4(l.matrixWorld), s;
                }
            }
            return new Z().setFromObject(l);
        }
        const t = l.position ?? l.pos ?? new p, i = Xt(l.size ?? 1), e = l.quaternion?.isQuaternion ? l.quaternion : l.rotation?.isEuler ? Js.setFromEuler(l.rotation) : Js.set(0, 0, 0, 1);
        return Ys.compose(t, e, i), Yt.clone().applyMatrix4(Ys);
    }
    function A(l, t) {
        const i = Ks(l), e = Xs(l);
        for(let a = t.length - 1; a >= 0; a--){
            const s = t[a], o = Xs(s);
            if (e !== void 0 && o !== void 0 && e === o) continue;
            if (Ks(s).intersectsBox(i)) return s;
        }
        return null;
    }
    function Zs(l) {
        for(l.traverse((t)=>{
            t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((i)=>i.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose();
        }); l.children.length > 0;)l.remove(l.children[0]);
    }
    class Jt {
        constructor(t, i, e, a, s){
            this.scene = t, this.audioClass = i, this.levelClass = e, this.paramsClass = a, this.camera = s, this.playerHeight = .9, this.playerWidth = .5, this.player = new xs(new T(this.playerWidth, this.playerHeight, this.playerWidth), new ns({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.player.userData.finish = !1, this.playerModel, this.playerOut = new xs(new T(this.playerWidth, this.playerHeight + .1, this.playerWidth), new U({
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
            await new Bs().loadAsync("models/players/player1.glb").then((e)=>{
                const a = e.scene;
                this.playerModel = a, this.playerModel.traverse(function(s) {
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
                const [t, i] = Os(this.player.userData.collider);
                i[0] == 0 && this.player.userData.collider.setCollisionGroups(Ps([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, i] = Os(this.player.userData.collider);
                i[0] != 0 && this.player.userData.collider.setCollisionGroups(Ps([
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
            ]), this.levelClass.players.every((t)=>t.player.userData.finish) ? this.levelClass.showPopupInGame(!1, !0) : this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0, this.paramsClass.gameStarting = !1)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((t, i, e)=>{
                t.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.playMusic([
                "back"
            ])), (!this.player.userData.live || this.player.userData.finish) && (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((t)=>t.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + 1.1, this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1)), this.reLiveField();
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, i = this.player.userData.readyJump ? -Math.PI / 2 : 0, e = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, a = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, s = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, s, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const u = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, u, .4);
                const d = this.player.userData.readyJump ? .6 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, d, .1),
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
                const t = this.levelClass.boostHatModels[this.player.userData.canFlyNum], i = this.player.userData.head;
                t.userData.originalScale || (t.userData.originalScale = t.scale.clone()), t.parent !== this.scene && this.scene.attach(t), this.playerModel.updateMatrixWorld(!0), i.updateWorldMatrix(!0, !1);
                const e = new p().setFromMatrixPosition(this.player.userData.head.matrixWorld), a = new ds;
                this.player.userData.head.getWorldQuaternion(a);
                const s = new ds().setFromEuler(new B(0, Math.PI / 2, 0)), o = a.clone().multiply(s), r = new p(.01, .14, .05).clone().applyQuaternion(o);
                t.quaternion.copy(o), t.position.copy(e).add(r), t.children[0].children[1].rotation.y += .4, t.userData.lastPos = t.position.clone(), t.userData.lastQuat = t.quaternion.clone();
            } else {
                const t = this.player.userData.canFlyNum;
                if (t !== null && this.levelClass.boostHatModels[t]) {
                    const i = this.levelClass.boostHatModels[t];
                    i.userData.lastPos && (i.position.copy(i.userData.lastPos), i.quaternion.copy(i.userData.lastQuat)), i.userData.fly = !1, i.children[0].children[1].rotation.y += .02;
                }
            }
        }
        lerp(t, i, e) {
            return t + (i - t) * e;
        }
        playerAliving(t) {
            this.paramsClass.allDie = !1, this.player.userData.playerAlive = !0, t && (this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.player.userData.lives = 3, this.reLiveField()), setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 1);
        }
        reLiveField() {
            let t = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((i, e, a)=>i.player == this.player)].children;
            for(let i = 0; i < t.length; i++)i > this.player.userData.lives - 1 ? t[i].classList.add("hidden_screen") : t[i].classList.contains("hidden_screen") && t[i].classList.remove("hidden_screen");
        }
    }
    class Kt {
        constructor(t, i, e, a, s, o, n, r, h){
            this.scene = t, this.audioClass = i, this.physicsClass = e, this.renderer = a, this.camera = s, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.initMatch = h, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.allLevels = 0, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new E(16777215), this._nightColor = new E(16771488);
            const u = new mt, d = .01;
            u.moveTo(5 * d, 5 * d), u.bezierCurveTo(5 * d, 5 * d, 4 * d, 2 * d, 0 * d, 2 * d), u.bezierCurveTo(-6 * d, 2 * d, -6 * d, 7 * d, -6 * d, 7 * d), u.bezierCurveTo(-6 * d, 10 * d, -3 * d, 14 * d, 5 * d, 18 * d), u.bezierCurveTo(12 * d, 14 * d, 16 * d, 10 * d, 16 * d, 7 * d), u.bezierCurveTo(16 * d, 7 * d, 16 * d, 2 * d, 10 * d, 2 * d), u.bezierCurveTo(7 * d, 2 * d, 5 * d, 5 * d, 5 * d, 5 * d);
            const m = {
                depth: .22,
                bevelEnabled: !1,
                curveSegments: 12,
                steps: 1
            };
            this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (c, y)=>({
                            position: new p(0, -10, 0),
                            rotation: new B(0, 0, 0),
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
                    materialPlane: new ns({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (c, y)=>({
                            position: new p(0, -10, 0),
                            rotation: new B(0, 0, 0),
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
                    materialPlaneTop: new U({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (c, y)=>({
                            position: new p(0, -10, 0),
                            rotation: new B(0, 0, 0),
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
                    materialPlaneGrass: new ns({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (c, y)=>({
                            position: new p(0, -10, 0),
                            rotation: new B(0, 0, 0),
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
                    materialPlaneSensor: new ns({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (c, y)=>({
                            position: new p(0, -10, 0),
                            rotation: new B(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new T(.3, 1, .3),
                    materialLamp: new ns({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (c, y)=>({
                            position: new p(0, -10, 0),
                            rotation: new B(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new Fs(.32, 24, 16),
                    materialPlafon: new U({
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
                    }, (c, y)=>({
                            position: new p(0, -10, 0),
                            rotation: new B(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new Fs(.3),
                    materialBulb: new U({
                        emissive: new E(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                },
                livesBlocks: {
                    data: Array.from({
                        length: this.count
                    }, (c, y)=>({
                            position: new p(0, -10, 0),
                            rotation: new B(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.4, .3, .1),
                            userData: {
                                name: "liveBlock",
                                taked: !1,
                                startPos: new p(0, 0, 0)
                            }
                        })),
                    geometryLivesBlock: new yt(u, m),
                    materialLivesBlock: new U({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new _(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(H), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new _(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(H), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new _(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(H), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new _(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(H), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new _(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(H), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new _(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(H), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new _(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(H), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new _(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(H), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (c)=>{
                c.uniforms.fresnelPower = {
                    value: 2.5
                }, c.fragmentShader = c.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const D = new Float32Array(this.count);
            for(let c = 0; c < this.count; c++)D[c] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new bt(D, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (c)=>{
                c.vertexShader = `
    attribute float aEmissive;
    varying float vEmissive;
  ` + c.vertexShader.replace("#include <begin_vertex>", `
      #include <begin_vertex>
      vEmissive = aEmissive;
    `), c.fragmentShader = `
    varying float vEmissive;
  ` + c.fragmentShader.replace("#include <lights_fragment_begin>", `
      #include <lights_fragment_begin>
      // усиливаем эмиссию в зависимости от инстанса
      totalEmissiveRadiance *= vEmissive;
    `);
            }, this.objs.bulbs.materialBulb.needsUpdate = !0;
            function b(c = 64) {
                const y = document.createElement("canvas");
                y.width = y.height = c;
                const v = y.getContext("2d"), q = v.createRadialGradient(c / 2, c / 2, 0, c / 2, c / 2, c / 2);
                q.addColorStop(0, "rgba(255, 235, 175, 1)"), q.addColorStop(1, "rgba(255, 235, 175, 0)"), v.fillStyle = q, v.fillRect(0, 0, c, c);
                const O = new jt(y);
                return O.anisotropy = 1, O.generateMipmaps = !1, O.needsUpdate = !0, O;
            }
            this._glowTex = b(), this._emissive = D, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(s), this.rightEdge.unproject(s), this.bounds, this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new vs, this.menuInGame();
        }
        toVec3(t) {
            return typeof t == "number" ? new p(t, t, t) : t?.isVector3 ? t : t ? new p(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new p(1, 1, 1);
        }
        apply(t, i, e) {
            let a = e.userData.invBaseSize;
            if (!a) {
                const r = e.geometry;
                r.computeBoundingBox();
                const h = new p;
                r.boundingBox.getSize(h), a = e.userData.invBaseSize = new p(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new Ls;
            const s = this._dummy, o = i[t] || {}, n = this.toVec3(o.size);
            s.position.copy(o.position || new p), o.rotation ? s.rotation.copy(o.rotation) : s.rotation.set(0, 0, 0), s.scale.set(n.x * a.x, n.y * a.y, n.z * a.z), s.updateMatrix(), e.setMatrixAt(t, s.matrix);
        }
        async loadTexture() {
            const t = new tt;
            t.load("textures/plane.jpg", (i)=>{
                const e = new U({
                    map: i,
                    transparent: !0,
                    opacity: 1
                });
                i.wrapS = rs, i.wrapT = rs, i.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = e;
            }, void 0, function(i) {
                console.error("An error happened.");
            }), t.load("textures/grass.jpg", (i)=>{
                const e = new U({
                    map: i
                });
                i.wrapS = rs, i.wrapT = rs, i.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = e;
            }, void 0, function(i) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let t = new T(.5, .7, 1), i = new et({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new xs(t, i), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = f(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(t, i) {
            if (this.levelsMode = t, this.maxHeight = 0, this.birdFlyingMark = 10, this.birdYes = i, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((e, a, s)=>{
                document.querySelectorAll(".player_panel")[a].classList.remove("hidden_screen");
            }), t) {
                let e = -2.5, a = -5;
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
                if (this.allLevels = 4, this.paramsClass.gameDir == "hor") {
                    for(let s = 0; s < this.count; s++){
                        let o = f(this.planeWidth, this.planeWidth - 1), n = e + o / 2 + f(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = f(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s == 0 ? (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.planes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : s == 1 ? (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : s == this.count - 1 ? (this.objs.planes.data[s].size.x = 5, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = 5 + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = 5 + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[s].position.x = 0, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = 0, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = 0, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : s == 1 ? (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new bs(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(s, this.objs.planes.data, this.objs.planes.plane), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), e = n + o / 2;
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
                        let o = f(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[s].userData.direction = 1 : this.objs.grassPlanes.data[s].userData.direction = -1;
                        let n = a + f(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = n - 1.3, this.objs.grassPlanes.data[s].position.y = n, this.objs.sensorPlanes.data[s].position.y = n - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > 0 ? (this.objs.topPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.sensorPlanes.data[s].size.x = o + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.grassPlanes.data[s].userData.speed = f(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new bs(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
            } else switch(this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let e = -2.5;
                    for(let s = 0; s < this.count; s++){
                        let o = f(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), n = e + o / 2 + f(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = f(-1.2, 1.2) - this.planeHeight / 1.5;
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
                            const h = new bs(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(s, this.objs.planes.data, this.objs.planes.plane), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), e = n + o / 2;
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
                    let a = -5;
                    this.birdYes = !1;
                    for(let s = 0; s < this.count; s++){
                        let o = f(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[s].userData.direction = 1 : this.objs.grassPlanes.data[s].userData.direction = -1;
                        let n = a + f(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = n - 1.3, this.objs.grassPlanes.data[s].position.y = n, this.objs.sensorPlanes.data[s].position.y = n - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > this.count - 20 && (this.objs.topPlanes.data[s].size.x = o / 8 + .1, this.objs.grassPlanes.data[s].size.x = o / 8 + .1, this.objs.sensorPlanes.data[s].size.x = o / 8 + .4), s > 0 ? (this.objs.topPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.sensorPlanes.data[s].size.x = o + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), s > this.count - 10 ? this.objs.grassPlanes.data[s].userData.speed = f(10, 14) / 100 : this.objs.grassPlanes.data[s].userData.speed = f(6, 10) / 100, this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, (s + 1) % 7 === 0) {
                            let r = this.boostHatModel.clone();
                            r.position.x = f(this.bounds.leftX + 1, this.bounds.rightX - 1), r.position.y = this.objs.topPlanes.data[s].position.y + .5, this.boostHatModels.push(r), this.boostHatMeshes.push(r.children[0].children[0].children[0]), this.boostHatCoords.push([
                                r.position.x,
                                r.position.y
                            ]), this.scene.add(r);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const r = new bs(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
            this.players.forEach((e, a, s)=>{
                e.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y;
            });
        }
        getHorizontalWorldBounds(t = 0) {
            const i = new p(-1, 0, .5), e = new p(1, 0, .5), a = new p(0, 1, .5), s = new p(0, -1, .5);
            if (i.unproject(this.camera), e.unproject(this.camera), a.unproject(this.camera), s.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = i.clone().sub(o).normalize(), r = e.clone().sub(o).normalize(), h = a.clone().sub(o).normalize(), u = s.clone().sub(o).normalize(), d = (t - o.z) / n.z, m = (t - o.z) / u.z, D = o.clone().add(n.multiplyScalar(d)), b = o.clone().add(r.multiplyScalar(d)), c = o.clone().add(h.multiplyScalar(m)), y = o.clone().add(u.multiplyScalar(m));
                this.bounds = {
                    leftX: D.x,
                    rightX: b.x,
                    topY: c.y,
                    bottomY: y.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let t = !1;
                for(let i = 0; i < this.objs.grassPlanes.data.length; i++){
                    const e = this.objs.grassPlanes.data[i], a = e.userData.body, s = e.userData.moveHor, o = e.userData.moveVert;
                    if (a && (s || o)) {
                        if (s) {
                            const n = a.translation(), r = s.x1 + s.w1 + e.size.x * .5, h = s.x2 - s.w2 - e.size.x * .5, u = e.userData.speed ?? .05;
                            n.x >= h && (e.userData.direction = -1), n.x <= r && (e.userData.direction = 1);
                            const d = e.userData.direction * u, m = n.x + d;
                            a.setNextKinematicTranslation({
                                x: m,
                                y: n.y,
                                z: n.z
                            }), e.position.x = m, this.objs.lamps.data[i].position.x = m, this.objs.plafons.data[i].position.x = m, this.objs.bulbs.data[i].position.x = m, this.objs.topPlanes.data[i].position.x = m;
                        } else if (o) {
                            const n = a.translation(), r = 2, h = .5, u = e.userData.speed ?? .03;
                            n.y >= r && (e.userData.direction = -1), n.y <= h && (e.userData.direction = 1);
                            const d = e.userData.direction * u, m = n.y + d;
                            a.setNextKinematicTranslation({
                                x: n.x,
                                y: m,
                                z: n.z
                            }), e.position.y = m, this.objs.lamps.data[i].position.y = m + this.objs.lamps.lampHeight, this.objs.plafons.data[i].position.y = m + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[i].position.y = m + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[i].position.y = m + .2;
                        }
                    }
                    for(let n = 0; n < this.objs.livesBlocks.data.length; n++)this.objs.livesBlocks.data[n].userData.taked ? this.objs.livesBlocks.data[n].position.y < 10 ? (this.objs.livesBlocks.data[n].position.y += .001, this.objs.livesBlocks.data[n].rotation.y += .004) : this.objs.livesBlocks.data[n].userData.taked = !1 : this.objs.livesBlocks.data[n].rotation.y += 4e-4, this.apply(n, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb), t = !0;
                }
                t && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let t = 0; t < this.objs.grassPlanes.data.length; t++){
                    const i = this.objs.grassPlanes.data[t], e = this.objs.topPlanes.data[t];
                    this.objs.sensorPlanes.data[t], this.objs.lamps.data[t], this.objs.plafons.data[t], this.objs.bulbs.data[t];
                    const a = i.userData.body, s = i.userData.speed, o = a.translation();
                    o.x > this.bounds.rightX - i.size.x / 2 ? i.userData.direction = -1 : o.x < this.bounds.leftX + i.size.x / 2 && (i.userData.direction = 1);
                    const n = i.userData.direction * s, r = o.x + n;
                    t > 0 && a.setNextKinematicTranslation({
                        x: r,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[t].position.x = r, this.objs.lamps.data[t].position.x = r, this.objs.plafons.data[t].position.x = r, this.objs.bulbs.data[t].position.x = r, this.objs.topPlanes.data[t].position.x = r, this.objs.topPlanes.data[t].position.y = o.y + .4, this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), e.position.set(r, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBirdModel() {
            await new Bs().loadAsync("models/bird/bird.glb").then((e)=>{
                const a = e.scene, s = e.animations;
                a.scale.x = 2, a.scale.y = 2, a.scale.z = 2, a.position.y = 0, a.rotation.y = -Math.PI / 3, this.angryBirdModel = a, this.angryBirdModel.userData.mixer = new gt(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(s[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new vs;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new Bs().loadAsync("models/boosts/hat.glb").then((e)=>{
                const a = e.scene;
                this.boostHatModel = a, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
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
            this.animateTops(), this.lampsAnimate(), this.paramsClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((t, i, e)=>{
                t.children[0].children[1].rotation.y += .05, this.worldClass.night && t.children[0].children[1].children[0].material.emissiveIntensity == 0 ? t.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && t.children[0].children[1].children[0].material.emissiveIntensity != 0 && (t.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new p(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: f(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird, this.angryBird.userData.speed = f(8, 13) / 100, this.angryBird.userData.flying = !0), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const t = new ft(new wt({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: fs
            }));
            return t.scale.set(10.4, 10.4, 10.4), t.renderOrder = 20, t;
        }
        lampsAnimate() {
            let t = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
                this.lampsAnimate.did = !1;
                const e = this.camera.position.x - this.bounds.rightX / 1.3, a = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((s, o)=>{
                    s.pointLight;
                    const n = s.position.x >= e && s.position.x <= a, r = o;
                    if (n && !s.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        s.pointLight = h, s.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(s.glow);
                    }
                    if (s.pointLight) {
                        const h = s.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), s.glow.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 0);
                        const u = n ? this.lightIntensity : 0;
                        h.intensity = F.lerp(h.intensity, u, .15);
                        const d = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const m = .5 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(m);
                        const D = 1.1, b = this._emissive[r], c = 1 + D * b, y = this.objs.bulbs.baseSize, v = this.objs.bulbs.data[r];
                        v.userData._lastBulbFactor !== c && (v.size.set(y.x * c, y.y * c, y.z * c), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), v.userData._lastBulbFactor = c, t = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let e = !1;
                this.objs.plafons.data.forEach((a, s)=>{
                    const o = a.pointLight;
                    o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), a.pointLight = null, a.userData.light = !1, a.glow && (this.scene.remove(a.glow), this.glowPool.push(a.glow), a.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), e = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0);
                    const n = 1.1, r = this._emissive[s], h = 1 + n * r, u = this.objs.bulbs.baseSize, d = this.objs.bulbs.data[s];
                    d.userData._lastBulbFactor !== h && (d.size.set(u.x * h, u.y * h, u.z * h), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), d.userData._lastBulbFactor = h, t = !0);
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), e && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const e = this.camera.position.y - this.bounds.topY / 2, a = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((s, o)=>{
                    s.pointLight;
                    const n = s.position.y >= e && s.position.y <= a, r = o;
                    if (n && !s.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        s.pointLight = h, s.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(s.glow);
                    }
                    if (s.pointLight) {
                        const h = s.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), s.glow.position.copy(s.position);
                        const u = n ? this.lightIntensity : 0;
                        h.intensity = F.lerp(h.intensity, u, .15);
                        const d = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const m = .8 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(m);
                        const D = 1, b = this._emissive[r], c = 1 + D * b, y = this.objs.bulbs.baseSize, v = this.objs.bulbs.data[r];
                        v.userData._lastBulbFactor !== c && (v.size.set(y.x * c, y.y * c, y.z * c), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), v.userData._lastBulbFactor = c, t = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let e = !1;
                this.objs.plafons.data.forEach((a, s)=>{
                    const o = a.pointLight;
                    !a.pointLight && this._emissive[s] === 0 || (o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), a.pointLight = null, a.userData.light = !1, a.glow && (this.scene.remove(a.glow), this.glowPool.push(a.glow), a.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), e = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0));
                }), e && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed(t = !1) {
            let i;
            if (t ? i = this.players.filter((s, o, n)=>s.player.userData.live) : i = this.players, i.length === 0) return -1;
            let e = 0, a;
            this.paramsClass.gameDir == "vert" ? a = i[0].player.position.y : a = i[0].player.position.x;
            for(let s = 1; s < i.length; s++)i[s].player && i[s].player.userData.live && i[s].player.position && (this.paramsClass.gameDir == "vert" ? i[s].player.position.y > a && (a = i[s].player.position.y, e = s) : i[s].player.position.x > a && (a = i[s].player.position.x, e = s));
            return t ? this.players.indexOf(i[e], 0) : e;
        }
        async loadPlayers() {
            for(let t = 0; t < this.players.length; t++){
                let i = this.players[t];
                i.player.position.x = i.player.position.x - t * 1 + 1, this.physicsClass.addPhysicsToObject(i.player), this.paramsClass.gameDir == "vert" && (i.player.position.y = -0, i.player.userData.collider.setFriction(500)), await i.loadPlayerModel(), i.player.userData.startPos = i.player.position.clone(), this.scene.add(i.player), this.scene.add(i.playerOut), this.scene.add(i.playerModel), this.playerOuts.push(i.playerOut), t < this.players[0].playerColors.length ? i.head.children[0].material.color.set(this.players[0].playerColors[t]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), i.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > t ? i.player.userData.audio.push(this.audioClass.quacks[t].clone()) : i.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(t, i = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.paramsClass.gameStarting && (t.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, t.position.y = this.isMobile ? 4 : 3, t.position.z = this.isMobile ? 20 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const e = this.maxSpeed(!0);
                        if (e >= 0) {
                            let a = 0;
                            this.players.length > 1 ? a = this.players[e].player.position.x : this.paramsClass.gameDir == "hor" && (a = this.players[e].player.position.x + this.bounds.rightX / 2);
                            const s = this.cam.maxBackJump;
                            a < this.cam.targetX - s ? this.cam.targetX = this.cam.targetX - s : this.cam.targetX = a;
                            const o = this.spring(t.position.x, this.cam.targetX, this.cam.velX, .25, i);
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
        damp(t, i, e, a) {
            return t + (i - t) * (1 - Math.exp(-e * a));
        }
        spring(t, i, e, a, s) {
            const o = 2 / a, n = o * s, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = t - i;
            const u = (e + o * h) * s, d = (e - o * u) * r;
            return {
                newPos: i + (h + u) * r,
                newVel: d
            };
        }
        showPopupInGame(t = !1, i = !1) {
            this.players.every((e)=>!e.player.userData.finish) ? (document.querySelector(".popup_in_game_wrap").classList.remove("popup_in_game_wrap_win"), this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.looseAudio.play()) : (console.log(123), document.querySelector(".popup_in_game_wrap").classList.add("popup_in_game_wrap_win")), i ? (this.hideScreen("popup_game_btn1"), this.levelsMode < this.allLevels ? this.showScreen("popup_game_btn15") : this.hideScreen("popup_game_btn15")) : !t || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), this.showScreen("popup_in_game");
        }
        rebindButton(t, i) {
            const e = document.querySelector(t), a = e.cloneNode(!0);
            return e.parentNode.replaceChild(a, e), a.addEventListener("click", i), a;
        }
        menuInGame = ()=>{
            this.rebindButton(".popup_game_btn1", ()=>{
                this.hideScreen("popup_in_game"), this.boostHatModels.forEach((t, i, e)=>{
                    t.userData.fly = !1;
                }), this.players[0].playerAliving(!1), this.players[0].player.userData.lives = 1, this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1);
            }), this.rebindButton(".popup_game_btn2", ()=>{
                this.players.forEach((t, i, e)=>{
                    t.player.userData.finish = !1, t.playerAliving(!0);
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.y = 2, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((t, i, e)=>{
                    t.position.x = this.boostHatCoords[i][0], t.position.y = this.boostHatCoords[i][1], t.userData.fly = !1;
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
                }, 100), this.players.forEach((t, i, e)=>{
                    t.playerAliving(!0);
                });
            }), this.rebindButton(".popup_game_btn3", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((t, i, e)=>{
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
        constructor(t, i){
            this.world = t, this.RAPIER = i, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Ls;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const i = t.geometry;
            i.computeBoundingBox();
            const e = new p;
            i.boundingBox.getSize(e);
            const a = new p(1 / (e.x || 1), 1 / (e.y || 1), 1 / (e.z || 1));
            return t.userData.invBase = a, a;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new p(t, t, t) : t?.isVector3 ? t.clone() : new p(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, i, e) {
            const a = V._toVec3(e.size), s = V._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = e.quaternion?.isQuaternion ? e.quaternion : new ds, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.x, s.y, s.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), r = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(r, n), this.instancedBodies.push({
                mesh: t,
                index: i,
                size: a,
                body: n
            });
        }
        addInstancedStatic(t, i, e, a) {
            const s = V._toVec3(a.size), o = V._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = a.quaternion?.isQuaternion ? a.quaternion : new ds, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setFriction(1.6).setRestitution(0);
            t[e].userData.body = r, t[e].userData.shape = h, t[e].userData.collide = this.world.createCollider(h, r), this.instancedBodies.push({
                mesh: i,
                index: e,
                size: s,
                body: r
            });
        }
        updateInstancedTransforms() {
            const t = this._dummy, i = new Set;
            for (const e of this.instancedBodies){
                const a = V._ensureInvBase(e.mesh), s = e.body.translation(), o = e.body.rotation();
                t.position.set(s.x, s.y, s.z), t.quaternion.set(o.x, o.y, o.z, o.w), t.scale.set(e.size.x * a.x, e.size.y * a.y, e.size.z * a.z), t.updateMatrix(), e.mesh.setMatrixAt(e.index, t.matrix), i.add(e.mesh);
            }
            for (const e of i)e.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let i, e;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new Z().setFromObject(t);
                const s = zs(t);
                t.rotation.copy(a), t.userData.size = s, t.userData.orgRotation = a, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), t.userData.body = i, t.userData.shape = e;
                let o = i;
                e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(e, i);
                t.userData.collider = n, t.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    t,
                    i,
                    t.id
                ]);
            } else if (t != null && t.userData.name.includes("tops")) {
                let i, e;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new Z().setFromObject(t);
                const s = zs(t);
                t.rotation.copy(a), t.userData.size = s, t.userData.orgRotation = a, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setMass(1).setRestitution(0).setFriction(.3), e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(e, i);
                t.userData.body = i, t.userData.collide = o, this.allWallBodyCollision.push(o), t.userData.handle = i.handle, this.dynamicBodies.push([
                    t,
                    i,
                    t.id
                ]), t.userData.playerHandlesInside = new Set, this.allTops.push(t);
            } else if (t != null && t.userData.name.includes("bird")) {
                let i, e;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new Z().setFromObject(t);
                const s = zs(t);
                t.rotation.copy(a), t.userData.size = s, t.userData.orgRotation = a, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setMass(1).setRestitution(1).setFriction(0), e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(e, i);
                t.userData.body = i, t.userData.collide = o, this.allWallBodyCollision.push(o), t.userData.handle = i.handle, this.dynamicBodies.push([
                    t,
                    i,
                    t.id
                ]);
            }
        }
    }
    const As = new p;
    function zs(l) {
        if (l.isMesh && l.geometry) {
            const i = l.geometry;
            return i.boundingBox || i.computeBoundingBox(), i.boundingBox.getSize(As), As.multiply(l.scale), As.clone();
        }
        return new Z().setFromObject(l).getSize(new p);
    }
    class Zt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2;
        }
        async loadAudio() {
            const t = new xt, i = new vt;
            await i.loadAsync("audio/back1.mp3").then((e)=>{
                this.backAudio = new j(t), this.backAudio.setBuffer(e), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/back2.mp3").then((e)=>{
                this.backAudio2 = new j(t), this.backAudio2.setBuffer(e), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/back3.mp3").then((e)=>{
                this.backAudio3 = new j(t), this.backAudio3.setBuffer(e), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(.5), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/ocean.mp3").then((e)=>{
                this.oceanAudio = new j(t), this.oceanAudio.setBuffer(e), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/inwater.mp3").then((e)=>{
                this.inwaterAudio = new j(t), this.inwaterAudio.setBuffer(e), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/loose.mp3").then((e)=>{
                this.looseAudio = new j(t), this.looseAudio.setBuffer(e), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/take.mp3").then((e)=>{
                this.takeAudio = new j(t), this.takeAudio.setBuffer(e), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/ready-jump.mp3").then((e)=>{
                this.readyJumpAudio = new j(t), this.readyJumpAudio.setBuffer(e), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(10), this.readyJumpAudio.setVolume(2), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/quack1.mp3").then((e)=>{
                this.jumpAudio = new j(t), this.jumpAudio.setBuffer(e), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/quack2.mp3").then((e)=>{
                this.jumpAudio2 = new j(t), this.jumpAudio2.setBuffer(e), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/quack3.mp3").then((e)=>{
                this.jumpAudio3 = new j(t), this.jumpAudio3.setBuffer(e), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/rain.mp3").then((e)=>{
                this.rainAudio = new j(t), this.rainAudio.setBuffer(e), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1), this.musics.push({
                    name: "rain",
                    music: this.rainAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/thunder.mp3").then((e)=>{
                this.thunderAudio = new j(t), this.thunderAudio.setBuffer(e), this.thunderAudio.setLoop(!1), this.thunderAudio.setRefDistance(400), this.thunderAudio.setVolume(1), this.thundersAudio.push({
                    name: "thunder1",
                    music: this.thunderAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/thunder2.mp3").then((e)=>{
                this.thunderAudio2 = new j(t), this.thunderAudio2.setBuffer(e), this.thunderAudio2.setLoop(!1), this.thunderAudio2.setRefDistance(400), this.thunderAudio2.setVolume(1), this.thundersAudio.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await i.loadAsync("audio/thunder3.mp3").then((e)=>{
                this.thunderAudio3 = new j(t), this.thunderAudio3.setBuffer(e), this.thunderAudio3.setLoop(!1), this.thunderAudio3.setRefDistance(400), this.thunderAudio3.setVolume(1), this.thundersAudio.push({
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
        stopMusic(t) {
            t == 0 ? this.musics.forEach((i, e, a)=>{
                i.music.stop();
            }) : t.forEach((i, e, a)=>{
                this.musics.find((s)=>s.name === i).music.stop();
            });
        }
        pauseMusic(t) {
            t.forEach((i, e, a)=>{
                this.musics.find((s)=>s.name === i).music.pause();
            });
        }
        playMusic(t) {
            t.forEach((i, e, a)=>{
                let s = this.musics.find((o)=>o.name === i).music;
                s.isPlaying || s.play();
            });
        }
        dayNight(t = !0, i = !1) {
            t && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((e)=>e.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((e)=>e.name === "back").music = this.musics.find((e)=>e.name === "back1").music, this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((e)=>e.name === "back").music.setVolume(this.timeToChange)) : !t && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((e)=>e.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((e)=>e.name === "back").music = this.musics.find((e)=>i ? e.name === "back3" : e.name === "back2").music, this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((e)=>e.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class Qt {
        constructor(t, i, e, a, s){
            this.levelClass = t, this.isMobile = i, this.renderer = e, this.camera = a, this.paramsClass = s, this.mouse = new p, this.raycaster = new Pt;
        }
        addKeyListeners() {
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
        }
        removedKeyListeners() {
            window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("mousedown", this.onKeyDown), window.removeEventListener("mouseup", this.onKeyUp), document.removeEventListener("touchend", this.onTapUp), document.removeEventListener("touchstart", this.onTapDown);
        }
        onTapDown = (t)=>{
            let i = this.renderer.domElement.getBoundingClientRect();
            t = t.changedTouches[0], this.mouse.x = (t.clientX - i.left) / i.width * 2 - 1, this.mouse.y = -((t.clientY - i.top) / i.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
        };
        onTapUp = (t)=>{
            let i = this.renderer.domElement.getBoundingClientRect();
            t = t.changedTouches[0], this.mouse.x = (t.clientX - i.left) / i.width * 2 - 1, this.mouse.y = -((t.clientY - i.top) / i.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
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
                    this.levelClass.players.forEach((i, e, a)=>{
                        i.player.userData.playerAlive = !0;
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
    class $t {
        constructor(t, i, e, a, s, o){
            this.scene = t, this.camera = i, this.renderer = e, this.paramsClass = a, this.isMobile = s, this.audioClass = o, this.ambientLight = new Dt(11184810, 1), this.hemiLight = new Mt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ct(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Ls, this.dirLight.target = this.targetObject, this.helper = new At(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.activeLightningLines = [], this.lightningMaterialBase = new zt({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: fs,
                depthWrite: !1
            }), this.clock = new vs, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 25, this.rainAreaHalfDepth = 22, this.rainTopY = 10, this.rainBottomY = -4, this.rainGeometry = new gs, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let i = 0; i < this.rainDropCount; i++){
                const e = i * 3;
                this.rainPositions[e + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[e + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[e + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[i] = 15 + Math.random() * 15, this.rainWindPhase[i] = Math.random() * Math.PI * 2;
            }
            const t = new Float32Array(this.rainDropCount * 3);
            for(let i = 0; i < this.rainDropCount; i++){
                const e = .8 + Math.random() * .2;
                t[i * 3 + 0] = .7 * e, t[i * 3 + 1] = .8 * e, t[i * 3 + 2] = 1 * e;
            }
            this.rainGeometry.setAttribute("position", new os(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new os(t, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new St({
                color: 15658751,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .8,
                transparent: !0,
                opacity: .84,
                size: 9,
                sizeAttenuation: !1,
                depthWrite: !1,
                blending: fs
            }), this.rainPoints = new Rs(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Is(900, 500), this.water = new Bt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new tt().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = rs;
                }),
                sunDirection: new p,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new p, this.sky = new kt, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new xs(new Is(1e4, 1e4), new et({
                color: 526362,
                side: Lt,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const i = 1500, e = new Float32Array(i * 3), a = new Float32Array(i), s = new Float32Array(i * 3);
            for(let h = 0; h < i; h++){
                e[3 * h] = Math.random() * 600 - 300, e[3 * h + 1] = Math.random() * 150 - 100, e[3 * h + 2] = Math.random() * 300 - 500, a[h] = Math.random() * 2 + .7;
                const u = new E().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                s[3 * h] = u.r, s[3 * h + 1] = u.g, s[3 * h + 2] = u.b;
            }
            const o = new gs;
            o.setAttribute("position", new os(e, 3)), o.setAttribute("size", new os(a, 1)), o.setAttribute("color", new os(s, 3));
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
            this.materialStars = new _t({
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
                blending: fs
            }), this.stars = new Rs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const t = this.camera.position.x, i = Math.sign(t - this._prevCamX);
            this._prevCamX = i, this.stars.position.x = this.camera.position.x;
            const e = F.degToRad(90 - this.parameters.elevation), a = F.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, e, a), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), this.parameters.elevation < 2 && !this.rainStart && (this.rain = !0, this.startRain(), this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1, this.rain && this.parameters.elevation >= -3 && (this.audioClass.rainAudio.stop(), this.rainStart = !1, this.scene.remove(this.rainPoints), this.rain = !1))), this.paramsClass.gameDir == "vert") {
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
            const i = 10;
            this.dirLight.shadow.camera.left = -i, this.dirLight.shadow.camera.right = i, this.dirLight.shadow.camera.top = i, this.dirLight.shadow.camera.bottom = -i, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let e = this.activeLightningLines.length - 1; e >= 0; e--){
                const a = this.activeLightningLines[e];
                a.userData.life -= this.deltaSeconds / 1.5, a.material.opacity *= .78, (a.userData.life <= 0 || a.material.opacity <= .02) && (this.scene.remove(a), a.geometry.dispose(), a.material.dispose(), this.activeLightningLines.splice(e, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const e = this.rainGeometry.getAttribute("position"), a = Math.sin(performance.now() * .0012) * .8, s = this.camera.position.x, o = this.camera.position.z;
                for(let n = 0; n < this.rainDropCount; n++){
                    const r = n * 3, h = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + a * .4;
                    this.rainPositions[r + 0] += h * this.deltaSeconds * 6, this.rainPositions[r + 1] -= this.rainVelocities[n] * (1 + Math.abs(a) * .3) * this.deltaSeconds, s + this.rainPositions[r + 0], o + this.rainPositions[r + 2], this.rainPositions[r + 1] < this.rainBottomY && (this.rainPositions[r + 1] = this.rainTopY, this.rainPositions[r + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[r + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[r + 0] > this.rainAreaHalfWidth && (this.rainPositions[r + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[r + 0] < -this.rainAreaHalfWidth && (this.rainPositions[r + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[r + 2] > this.rainAreaHalfDepth && (this.rainPositions[r + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[r + 2] < -this.rainAreaHalfDepth && (this.rainPositions[r + 2] += this.rainAreaHalfDepth * 2 - 35);
                }
                this.rainPoints.position.set(s, 0, o), e.needsUpdate = !0;
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
                const i = t[this.currentThunderIndex % t.length].music;
                i.isPlaying && i.stop(), i.play(), this.currentThunderIndex++;
            }
            this.triggerLightningFlash(), this.lightningFade = 1;
        }
        scheduleNextThunderFlash(t) {
            const i = this.minThunderIntervalMs + Math.random() * (this.maxThunderIntervalMs - this.minThunderIntervalMs);
            this.nextThunderFlashTimestampMs = t + i;
        }
        stopThunderImmediately() {
            this.thunder = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0;
        }
        createLightningBolt(t, i, e) {
            const a = t + (Math.random() - .5) * 6, s = -4 + Math.random() * 3, o = e + (Math.random() - .5) * 6, n = a - t, r = s - i, h = o - e, u = Math.hypot(n, r, h) || 1, d = n / u, m = r / u, D = h / u, b = n / u, y = -(h / u), v = 0, q = b, O = Math.abs(m) > .9 ? new p(1, 0, 0) : new p(0, 1, 0), _s = new p(d, m, D), us = new p().crossVectors(_s, O).normalize(), Ms = new p().crossVectors(_s, us).normalize(), nt = 2 + Math.random() * 2, rt = 1.2, lt = Math.random() * Math.PI * 2, ht = 3 + Math.random() * 2.5, dt = .8, pt = Math.random() * Math.PI * 2, Cs = 28, cs = 4, Q = [];
            for(let M = 0; M <= Cs; M++){
                const C = M / Cs, z = 1 - C;
                let I = t + n * C, $ = i + r * C, ss = e + h * C;
                const G = Math.sin(C * Math.PI * nt + lt) * rt * (.3 + .7 * z), X = Math.sin(C * Math.PI * ht + pt) * dt * (.3 + .7 * z), Y = (Math.random() - .5) * 2 * cs * z, L = (Math.random() - .5) * 1.6 * cs * z, S = Math.random() < .12 ? (Math.random() - .5) * 3.5 * z : 0;
                if (I += us.x * (G + Y + S) + Ms.x * (X + L * .7), $ += us.y * (G + Y * .5) + Ms.y * (X + L * .5), ss += us.z * (G + Y + S) + Ms.z * (X + L * .7), Q.push(I, $, ss), M > 3 && M < Cs - 3 && Math.random() < .22) {
                    const W = [], ts = 3 + Math.floor(Math.random() * 2), N = .25 + Math.random() * .35;
                    let es = I, is = $, as = ss;
                    W.push(es, is, as);
                    for(let ys = 1; ys <= ts; ys++)es += (Math.random() - .5) * cs * N, is += -(.8 + Math.random() * .8) * N, as += (Math.random() - .5) * cs * N, W.push(es, is, as);
                    const ms = new gs;
                    ms.setAttribute("position", new Gs(W, 3));
                    const J = new Ws(ms, this.lightningMaterialBase.clone());
                    J.material.opacity = .6, J.userData.life = .16 + Math.random() * .12, this.scene.add(J), this.activeLightningLines.push(J);
                }
            }
            const ut = 2;
            for(let M = -1; M <= ut; M++){
                const C = M === -1, z = C ? 0 : M % 2 === 0 ? 1 : -1, I = .55 + Math.random() * .45, $ = .35, ss = Math.random() * Math.PI * 2, G = [], X = Q.length / 3;
                for(let S = 0; S < X; S++){
                    const W = S / (X - 1), ts = .35 + .85 * W, N = Math.sin(W * Math.PI * 2 + ss) * $ * (.2 + .8 * W), es = y * z * I * ts + q * N * .3, is = v * z * I * ts + N * .05, as = q * z * I * ts - y * N * .3, ms = S * 3 + 0, J = S * 3 + 1, ys = S * 3 + 2, Hs = Q[ms], Ts = Q[J], Es = Q[ys];
                    C ? G.push(Hs + (Math.random() - .5) * .05, Ts + (Math.random() - .5) * .05, Es + (Math.random() - .5) * .05) : G.push(Hs + es + (Math.random() - .5) * .2, Ts + is + (Math.random() - .5) * .2, Es + as + (Math.random() - .5) * .2);
                }
                const Y = new gs;
                Y.setAttribute("position", new Gs(G, 3));
                const L = new Ws(Y, this.lightningMaterialBase.clone());
                L.material.opacity = C ? .95 : .32, L.userData.life = .22 + Math.random() * .18, this.scene.add(L), this.activeLightningLines.push(L);
            }
        }
        triggerLightningFlash() {
            const t = this.camera.position.x + (Math.random() - .5) * 30, i = 34 + Math.random() * 6, e = -10 - Math.random() * 20;
            this.createLightningBolt(t, i, e);
        }
        makeRainStreakTexture() {
            const e = new Uint8Array(60);
            for(let s = 0; s < 15; s++){
                const o = Math.sin(s / 14 * Math.PI);
                for(let n = 0; n < 1; n++){
                    const r = (s * 1 + n) * 4;
                    e[r + 0] = 255, e[r + 1] = 255, e[r + 2] = 255, e[r + 3] = Math.round(o * 255);
                }
            }
            const a = new Ht(e, 1, 15, Tt);
            return a.needsUpdate = !0, a.magFilter = Ns, a.minFilter = Ns, a.wrapS = Us, a.wrapT = Us, a.rotation = Math.PI / 2, a.center.set(.5, .5), a;
        }
    }
    class se {
        constructor(t){
            this.initMatch = t, this.mainMenu(this.initMatch), this.playersNum = 2, this.levelPlayersNum = 1;
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("together_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((t, i, e)=>{
                t.addEventListener("click", ()=>{
                    this.hideScreen("levels_game_screen"), this.initMatch(this.levelPlayersNum, 1, i + 1, !0);
                });
            }), document.querySelectorAll(".level_game_chels").forEach((t, i, e)=>{
                t.addEventListener("click", ()=>{
                    document.querySelectorAll(".level_game_chels").forEach((a)=>{
                        a.classList.remove("level_game_chels_active");
                    }), t.classList.add("level_game_chels_active"), this.levelPlayersNum = i + 1;
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
            }), document.querySelectorAll(".together_game_chels").forEach((t, i, e)=>{
                t.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((a)=>{
                        a.classList.remove("together_game_chels_active");
                    }), t.classList.add("together_game_chels_active"), this.playersNum = i + 2;
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
    class te {
        constructor(){
            this.gameDir = "vert", this.gameStarting = !1, this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class ee {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const i = Qs, e = performance.now(), a = 200;
            function s(o) {
                const n = Math.min(1, (o - e) / a), r = 1 - Math.pow(1 - n, 4), h = Math.round(i + (t - i) * r);
                ie.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(s) : Qs = t;
            }
            requestAnimationFrame(s);
        }
    }
    const ie = document.getElementById("meters-float");
    let Qs = 0;
    console.clear();
    let ks, ae = new vs, it, ws, ps, k, g, R, ls, P, K;
    const hs = new Et;
    hs.background = new E(13230580);
    const w = new Ft(25, window.innerWidth / window.innerHeight, .1, 2e3);
    w.position.y = 2;
    const js = Ot();
    let Ds = new Rt;
    document.body.appendChild(Ds.dom);
    Ds.dom.style.top = "0px";
    Ds.dom.style.left = "48%";
    const x = new It;
    x.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(x.domElement);
    x.shadowMap.enabled = !0;
    x.shadowMap.type = Gt;
    x.outputColorSpace = Wt;
    x.toneMapping = Nt;
    x.toneMappingExposure = 1.05;
    at();
    window.addEventListener("resize", at, !1);
    function at() {
        js ? (w.aspect = document.body.offsetWidth / document.body.offsetHeight, w.updateProjectionMatrix(), x.setSize(innerWidth, innerHeight)) : (w.aspect = document.body.offsetWidth / document.body.offsetHeight, w.updateProjectionMatrix(), x.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function oe(l) {
        const t = await qt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        ks = new t.World(new t.Vector3(0, -9.81, 0)), it = new t.EventQueue(!0), k = new V(ks, t), K = new ee(w), R = new Zt, ps = new $t(hs, w, x, P, js, R), g = new Kt(hs, R, k, x, w, js, P, ps, ot);
        for(let i = 0; i < l; i++)g.players.push(new Jt(hs, R, g, P, w));
        ls = new Qt(g, js, x, w, P), ls.addKeyListeners();
    }
    async function ne() {
        await ps.loadWorld(), await R.loadAudio(), R.backAudio.play(), R.oceanAudio.play();
    }
    async function re(l, t = t) {
        await g.createLevel(l, t = t), await g.loadEnvironments(), await g.loadPlayers(), g.objs.grassPlanes.data.length > 0 && g.objs.grassPlanes.data.forEach((i, e)=>{
            g.objs.grassPlanes.data[e].userData.collide.setCollisionGroups(Ps([
                0
            ], [
                1
            ]));
        }), g.players.length > 0 && g.players.forEach((i, e)=>{
            g.players[e].player.userData.collider.setCollisionGroups(Ps([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function ot(l, t, i = !1, e = !0) {
        le(), ws.toggleLoader(!0), P = new te, await oe(l), g.gameNum = t, await ne(), await re(i, e = e), setTimeout(()=>{
            ws.showScreen("hud"), ws.toggleLoader(!1), P.dataLoaded = !0, P.gameStarting = !0;
        }, 300);
    }
    ws = new se(ot);
    function le() {
        w.position.y = 2, w.position.x = 0, x.toneMappingExposure = 1.05, ls?.removedKeyListeners(), ps = null, k = null, g = null, R = null, ls = null, P = null, K = null;
    }
    function he() {
        if (P.dataLoaded && P.gameStarting) {
            P.gameDir == "hor" ? K.updateMetersFloat(w.position.x - K.startX) : K.updateMetersFloat(w.position.y - K.startY), g.players.forEach((l, t, i)=>{
                l.playerMove();
            }), ps.updateLighting(), g.levelAnimate(w), g.cameraMove(w), Ds.update();
            for(let l = 0, t = k.dynamicBodies.length; l < t; l++)k.dynamicBodies[l][0].position.copy(k.dynamicBodies[l][1].translation()), k.dynamicBodies[l][0].quaternion.copy(k.dynamicBodies[l][1].rotation());
            k.updateInstancedTransforms(), ks.step(it), P.gameStarting && x.render(hs, w);
        }
    }
    let Ss = 0;
    const $s = 1 / 60, st = .1;
    x.setAnimationLoop(()=>{
        if (P != null) {
            let l = ae.getDelta();
            for(l > st && (l = st), Ss += l; Ss >= $s;)he(), Ss -= $s;
        }
    });
})();

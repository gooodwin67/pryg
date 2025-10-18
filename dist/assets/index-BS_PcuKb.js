import { B as K, V as p, Q as hs, M as pt, a as ws, b as T, c as os, d as V, G as Ss, E as k, C as E, S as ut, e as ct, f as Es, I as H, D as _, g as mt, h as xs, O as Bs, T as $s, R as ns, i as st, P as ys, A as yt, j as bt, k as gt, l as gs, m as F, n as ft, o as jt, p as wt, q as w, r as xt, s as Pt, H as vt, t as Dt, u as Mt, L as Ct, v as bs, w as as, x as At, y as Fs, z as Rs, W as zt, F as St, J as kt, K as Bt, N as Is, U as Gs, X as Lt, Y as Ht, Z as Ws, _ as Us, $ as _t, a0 as Tt, a1 as Et, a2 as Ft, a3 as Rt, a4 as It, a5 as Gt } from "./three-DAxnn8pU.js";
(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);
        new MutationObserver((a)=>{
            for (const s of a)if (s.type === "childList") for (const o of s.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && i(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function e(a) {
            const s = {};
            return a.integrity && (s.integrity = a.integrity), a.referrerPolicy && (s.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? s.credentials = "include" : a.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin", s;
        }
        function i(a) {
            if (a.ep) return;
            a.ep = !0;
            const s = e(a);
            fetch(a.href, s);
        }
    })();
    const Wt = "modulepreload", Ut = function(h, t) {
        return new URL(h, t).href;
    }, Ns = {}, Nt = function(t, e, i) {
        let a = Promise.resolve();
        if (e && e.length > 0) {
            let l = function(d) {
                return Promise.all(d.map((y)=>Promise.resolve(y).then((c)=>({
                            status: "fulfilled",
                            value: c
                        }), (c)=>({
                            status: "rejected",
                            reason: c
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = n?.nonce || n?.getAttribute("nonce");
            a = l(e.map((d)=>{
                if (d = Ut(d, i), d in Ns) return;
                Ns[d] = !0;
                const y = d.endsWith(".css"), c = y ? '[rel="stylesheet"]' : "";
                if (!!i) for(let m = o.length - 1; m >= 0; m--){
                    const b = o[m];
                    if (b.href === d && (!y || b.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${d}"]${c}`)) return;
                const u = document.createElement("link");
                if (u.rel = y ? "stylesheet" : Wt, y || (u.as = "script"), u.crossOrigin = "", u.href = d, r && u.setAttribute("nonce", r), document.head.appendChild(u), y) return new Promise((m, b)=>{
                    u.addEventListener("load", m), u.addEventListener("error", ()=>b(new Error(`Unable to preload CSS for ${d}`)));
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
    function j(h, t) {
        return Math.random() * (t - h) + h;
    }
    function Vt() {
        let h = window.matchMedia || window.msMatchMedia;
        return h ? h("(pointer:coarse)").matches : !1;
    }
    function Vs(h) {
        return h.reduce((t, e)=>t | 1 << e, 0);
    }
    function Ps(h, t) {
        const e = Vs(h), i = Vs(t);
        return "0x" + ((e & 65535) << 16 | i & 65535).toString(16).padStart(8, "0");
    }
    function qs(h) {
        const t = h.collisionGroups(), e = t >>> 16 & 65535, i = t & 65535;
        function a(s) {
            const o = [];
            for(let n = 0; n < 16; n++)s & 1 << n && o.push(n);
            return o;
        }
        return [
            a(e),
            a(i)
        ];
    }
    function qt(h) {
        return typeof h == "number" ? new p(h, h, h) : h?.isVector3 ? h : new p(h?.x ?? 1, h?.y ?? 1, h?.z ?? 1);
    }
    function Os(h) {
        return h?.userData?.id ?? h?.uuid ?? h?.id;
    }
    const Ot = new K(new p(-.5, -.5, -.5), new p(.5, .5, .5)), Xs = new pt, Js = new hs;
    function Ys(h) {
        if (h?.isObject3D) {
            if (h.updateMatrixWorld(!0), h.geometry?.isBufferGeometry) {
                const a = h.geometry;
                if (a.boundingBox || a.computeBoundingBox(), a.boundingBox) {
                    const s = a.boundingBox.clone();
                    return s.applyMatrix4(h.matrixWorld), s;
                }
            }
            return new K().setFromObject(h);
        }
        const t = h.position ?? h.pos ?? new p, e = qt(h.size ?? 1), i = h.quaternion?.isQuaternion ? h.quaternion : h.rotation?.isEuler ? Js.setFromEuler(h.rotation) : Js.set(0, 0, 0, 1);
        return Xs.compose(t, i, e), Ot.clone().applyMatrix4(Xs);
    }
    function A(h, t) {
        const e = Ys(h), i = Os(h);
        for(let a = t.length - 1; a >= 0; a--){
            const s = t[a], o = Os(s);
            if (i !== void 0 && o !== void 0 && i === o) continue;
            if (Ys(s).intersectsBox(e)) return s;
        }
        return null;
    }
    function Xt(h) {
        for(h.traverse((t)=>{
            t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((e)=>e.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose();
        }); h.children.length > 0;)h.remove(h.children[0]);
    }
    class Jt {
        constructor(t, e, i, a, s){
            this.scene = t, this.audioClass = e, this.levelClass = i, this.paramsClass = a, this.camera = s, this.playerHeight = .9, this.playerWidth = .5, this.player = new ws(new T(this.playerWidth, this.playerHeight, this.playerWidth), new os({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.player.userData.finish = !1, this.playerModel, this.playerOut = new ws(new T(this.playerWidth, this.playerHeight + .1, this.playerWidth), new V({
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
            await new Ss().loadAsync("models/players/player1.glb").then((i)=>{
                const a = i.scene;
                this.playerModel = a, this.playerModel.traverse(function(s) {
                    s.isMesh && (s.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(s) {
                    s.isMesh && (s.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if ((this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround) && (this.player.userData.finish = !0), A(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [t, e] = qs(this.player.userData.collider);
                e[0] == 0 && this.player.userData.collider.setCollisionGroups(Ps([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, e] = qs(this.player.userData.collider);
                e[0] != 0 && this.player.userData.collider.setCollisionGroups(Ps([
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
            ]), this.reLiveField(), A(this.player, this.levelClass.objs.livesBlocks.data).userData.taked = !0), this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.paramsClass.gameDir == "hor" && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.levelClass.needDeath(this.player)), this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY) * 1.3 && this.player.userData.live && (this.player.userData.lives = 0, this.reLiveField(), this.levelClass.needDeath(this.player)), !this.levelClass.canHorDie && this.camera.position.x > 1 && this.camera.position.x < 12 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -4 && this.paramsClass.gameStarting) this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                "back"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.paramsClass.gameStarting = !1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((t)=>!t.player.userData.live) && this.levelClass.players.every((t)=>t.player.userData.lives < 1) && this.paramsClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0, this.paramsClass.gameStarting = !1)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((t, e, i)=>{
                t.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.playMusic([
                "back"
            ])), this.player.userData.live || (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((t)=>t.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + 1.1, this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1)), this.reLiveField();
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, e = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, a = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, s = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, l = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, i, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, s, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, l, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const d = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, d, .4);
                const y = this.player.userData.readyJump ? .6 : 0;
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
                const t = this.levelClass.boostHatModels[this.player.userData.canFlyNum], e = this.player.userData.head;
                t.userData.originalScale || (t.userData.originalScale = t.scale.clone()), t.parent !== this.scene && this.scene.attach(t), this.playerModel.updateMatrixWorld(!0), e.updateWorldMatrix(!0, !1);
                const i = new p().setFromMatrixPosition(this.player.userData.head.matrixWorld), a = new hs;
                this.player.userData.head.getWorldQuaternion(a);
                const s = new hs().setFromEuler(new k(0, Math.PI / 2, 0)), o = a.clone().multiply(s), r = new p(.01, .14, .05).clone().applyQuaternion(o);
                t.quaternion.copy(o), t.position.copy(i).add(r), t.children[0].children[1].rotation.y += .4, t.userData.lastPos = t.position.clone(), t.userData.lastQuat = t.quaternion.clone();
            } else {
                const t = this.player.userData.canFlyNum;
                if (t !== null && this.levelClass.boostHatModels[t]) {
                    const e = this.levelClass.boostHatModels[t];
                    e.userData.lastPos && (e.position.copy(e.userData.lastPos), e.quaternion.copy(e.userData.lastQuat)), e.userData.fly = !1, e.children[0].children[1].rotation.y += .02;
                }
            }
        }
        lerp(t, e, i) {
            return t + (e - t) * i;
        }
        playerAliving(t) {
            this.paramsClass.allDie = !1, t && (this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.player.userData.lives = 3, this.player.userData.finish = !1), this.player.userData.playerAlive = !0, setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 1);
        }
        reLiveField() {
            let t = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((e, i, a)=>e.player == this.player)].children;
            for(let e = 0; e < t.length; e++)e > this.player.userData.lives - 1 ? t[e].classList.add("hidden_screen") : t[e].classList.contains("hidden_screen") && t[e].classList.remove("hidden_screen");
        }
    }
    class Yt {
        constructor(t, e, i, a, s, o, n, r){
            this.scene = t, this.audioClass = e, this.physicsClass = i, this.renderer = a, this.camera = s, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 120, this._dayColor = new E(16777215), this._nightColor = new E(16771488);
            const l = new ut, d = .01;
            l.moveTo(5 * d, 5 * d), l.bezierCurveTo(5 * d, 5 * d, 4 * d, 2 * d, 0 * d, 2 * d), l.bezierCurveTo(-6 * d, 2 * d, -6 * d, 7 * d, -6 * d, 7 * d), l.bezierCurveTo(-6 * d, 10 * d, -3 * d, 14 * d, 5 * d, 18 * d), l.bezierCurveTo(12 * d, 14 * d, 16 * d, 10 * d, 16 * d, 7 * d), l.bezierCurveTo(16 * d, 7 * d, 16 * d, 2 * d, 10 * d, 2 * d), l.bezierCurveTo(7 * d, 2 * d, 5 * d, 5 * d, 5 * d, 5 * d);
            const y = {
                depth: .22,
                bevelEnabled: !1,
                curveSegments: 12,
                steps: 1
            };
            this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (u, m)=>({
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
                    materialPlane: new os({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (u, m)=>({
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
                    }, (u, m)=>({
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
                    materialPlaneGrass: new os({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (u, m)=>({
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
                    materialPlaneSensor: new os({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (u, m)=>({
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
                    materialLamp: new os({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (u, m)=>({
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
                    geometryPlafon: new Es(.32, 24, 16),
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
                    }, (u, m)=>({
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
                    geometryBulb: new Es(.3),
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
                    }, (u, m)=>({
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
                    geometryLivesBlock: new ct(l, y),
                    materialLivesBlock: new V({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new H(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(_), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new H(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(_), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new H(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(_), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new H(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(_), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new H(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(_), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new H(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(_), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new H(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(_), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new H(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(_), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI), this.objs.livesBlocks.geometryLivesBlock.center(), this.objs.livesBlocks.livesBlock.castShadow = !0, this.objs.plafons.materialPlafon.onBeforeCompile = (u)=>{
                u.uniforms.fresnelPower = {
                    value: 2.5
                }, u.fragmentShader = u.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const c = new Float32Array(this.count);
            for(let u = 0; u < this.count; u++)c[u] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new mt(c, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (u)=>{
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
            function D(u = 64) {
                const m = document.createElement("canvas");
                m.width = m.height = u;
                const b = m.getContext("2d"), P = b.createRadialGradient(u / 2, u / 2, 0, u / 2, u / 2, u / 2);
                P.addColorStop(0, "rgba(255, 235, 175, 1)"), P.addColorStop(1, "rgba(255, 235, 175, 0)"), b.fillStyle = P, b.fillRect(0, 0, u, u);
                const I = new ft(m);
                return I.anisotropy = 1, I.generateMipmaps = !1, I.needsUpdate = !0, I;
            }
            this._glowTex = D(), this._emissive = c, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(s), this.rightEdge.unproject(s), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new xs, this.menuInGame();
        }
        toVec3(t) {
            return typeof t == "number" ? new p(t, t, t) : t?.isVector3 ? t : t ? new p(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new p(1, 1, 1);
        }
        apply(t, e, i) {
            let a = i.userData.invBaseSize;
            if (!a) {
                const r = i.geometry;
                r.computeBoundingBox();
                const l = new p;
                r.boundingBox.getSize(l), a = i.userData.invBaseSize = new p(1 / (l.x || 1), 1 / (l.y || 1), 1 / (l.z || 1));
            }
            this._dummy ||= new Bs;
            const s = this._dummy, o = e[t] || {}, n = this.toVec3(o.size);
            s.position.copy(o.position || new p), o.rotation ? s.rotation.copy(o.rotation) : s.rotation.set(0, 0, 0), s.scale.set(n.x * a.x, n.y * a.y, n.z * a.z), s.updateMatrix(), i.setMatrixAt(t, s.matrix);
        }
        async loadTexture() {
            const t = new $s;
            t.load("textures/plane.jpg", (e)=>{
                const i = new V({
                    map: e,
                    transparent: !0,
                    opacity: 1
                });
                e.wrapS = ns, e.wrapT = ns, e.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = i;
            }, void 0, function(e) {
                console.error("An error happened.");
            }), t.load("textures/grass.jpg", (e)=>{
                const i = new V({
                    map: e
                });
                e.wrapS = ns, e.wrapT = ns, e.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = i;
            }, void 0, function(e) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let t = new T(.5, .7, 1), e = new st({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new ws(t, e), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = j(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(t, e) {
            if (this.levelsMode = t, this.maxHeight = 0, this.birdFlyingMark = 10, this.birdYes = e, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((i, a, s)=>{
                document.querySelectorAll(".player_panel")[a].classList.remove("hidden_screen");
            }), t) {
                this.players[0].player.userData.lives = 0;
                let i = -2.5, a = -5;
                switch(t){
                    case 1:
                        this.birdYes = !1, this.count = 3, this.paramsClass.gameDir = "hor", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0;
                        break;
                    case 2:
                        this.birdYes = !1, this.count = 4, this.paramsClass.gameDir = "vert", this.randomAnimateHor = 0, this.randomAnimateVert = 0, this.gameNum = 3;
                        break;
                }
                if (this.paramsClass.gameDir == "hor") {
                    for(let s = 0; s < this.count; s++){
                        let o = j(this.planeWidth, this.planeWidth - 1), n = i + o / 2 + j(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = j(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s == 0 ? (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.planes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : s == 1 ? (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : s == this.count - 1 ? (this.objs.planes.data[s].size.x = 5, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = 5 + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = 5 + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[s].position.x = 0, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = 0, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = 0, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : s == 1 ? (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new ys(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(s, this.objs.planes.data, this.objs.planes.plane), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n + o / 2;
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
                        let o = j(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[s].userData.direction = 1 : this.objs.grassPlanes.data[s].userData.direction = -1;
                        let n = a + j(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = n - 1.3, this.objs.grassPlanes.data[s].position.y = n, this.objs.sensorPlanes.data[s].position.y = n - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > 0 ? (this.objs.topPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.sensorPlanes.data[s].size.x = o + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.grassPlanes.data[s].userData.speed = j(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new ys(16247464, 0, 4);
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
                    let i = -2.5;
                    for(let s = 0; s < this.count; s++){
                        let o = j(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), n = i + o / 2 + j(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = j(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, s > this.count - 20 ? (this.objs.planes.data[s].size.x = .1, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = .2 + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = .2 + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : s > 0 ? (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s == 0) r = 1 - this.planeHeight / 1.5, this.objs.planes.data[s].position.x = 0, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = 0, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = 0, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5;
                        else if (s == 1) n = 6, this.objs.planes.data[s].position.x = n, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5;
                        else if (s > 1 && (this.objs.planes.data[s].position.x = n, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5, s > 7 && Math.random() < .1 && (this.objs.livesBlocks.data[s].position.x = n - this.objs.grassPlanes.data[s].size.x / 2 + this.objs.livesBlocks.data[s].size.x / 2, this.objs.livesBlocks.data[s].position.y = r + this.planeHeight / 1.5 + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.livesBlocks.data[s].size.y / 2 + .2, this.objs.livesBlocks.data[s].userData.startPos = this.objs.livesBlocks.data[s].position.clone()), (s + 1) % 10 === 1)) {
                            let l = this.boostHatModel.clone();
                            l.position.x = n, l.position.y = this.objs.topPlanes.data[s].position.y + 2, l.rotation.y = -Math.PI / 2, l.userData.num = s, this.boostHatModels.push(l), this.boostHatMeshes.push(l.children[0].children[0].children[0]), this.boostHatCoords.push([
                                l.position.x,
                                l.position.y
                            ]), this.scene.add(l);
                        }
                        if (this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new ys(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(s, this.objs.planes.data, this.objs.planes.plane), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i = n + o / 2;
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
                    }, this.objs.planes.data[s].position.y = -10), this.objs.grassPlanes.data[s].position.y > this.maxHeight && (this.maxHeight = this.objs.grassPlanes.data[s].position.y);
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.livesBlocks.livesBlock), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let a = -5;
                    this.birdYes = !1;
                    for(let s = 0; s < this.count; s++){
                        let o = j(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[s].userData.direction = 1 : this.objs.grassPlanes.data[s].userData.direction = -1;
                        let n = a + j(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = n - 1.3, this.objs.grassPlanes.data[s].position.y = n, this.objs.sensorPlanes.data[s].position.y = n - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > this.count - 20 && (this.objs.topPlanes.data[s].size.x = o / 8 + .1, this.objs.grassPlanes.data[s].size.x = o / 8 + .1, this.objs.sensorPlanes.data[s].size.x = o / 8 + .4), s > 0 ? (this.objs.topPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.sensorPlanes.data[s].size.x = o + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), s > this.count - 10 ? this.objs.grassPlanes.data[s].userData.speed = j(10, 14) / 100 : this.objs.grassPlanes.data[s].userData.speed = j(6, 10) / 100, this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, (s + 1) % 7 === 0) {
                            let r = this.boostHatModel.clone();
                            r.position.x = j(this.bounds.leftX + 1, this.bounds.rightX - 1), r.position.y = this.objs.topPlanes.data[s].position.y + .5, this.boostHatModels.push(r), this.boostHatMeshes.push(r.children[0].children[0].children[0]), this.boostHatCoords.push([
                                r.position.x,
                                r.position.y
                            ]), this.scene.add(r);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const r = new ys(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
            this.players.forEach((i, a, s)=>{
                i.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y;
            });
        }
        getHorizontalWorldBounds(t = 0) {
            const e = new p(-1, 0, .5), i = new p(1, 0, .5), a = new p(0, 1, .5), s = new p(0, -1, .5);
            if (e.unproject(this.camera), i.unproject(this.camera), a.unproject(this.camera), s.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = e.clone().sub(o).normalize(), r = i.clone().sub(o).normalize(), l = a.clone().sub(o).normalize(), d = s.clone().sub(o).normalize(), y = (t - o.z) / n.z, c = (t - o.z) / d.z, D = o.clone().add(n.multiplyScalar(y)), u = o.clone().add(r.multiplyScalar(y)), m = o.clone().add(l.multiplyScalar(c)), b = o.clone().add(d.multiplyScalar(c));
                this.bounds = {
                    leftX: D.x,
                    rightX: u.x,
                    topY: m.y,
                    bottomY: b.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let t = !1;
                for(let e = 0; e < this.objs.grassPlanes.data.length; e++){
                    const i = this.objs.grassPlanes.data[e], a = i.userData.body, s = i.userData.moveHor, o = i.userData.moveVert;
                    if (a && (s || o)) {
                        if (s) {
                            const n = a.translation(), r = s.x1 + s.w1 + i.size.x * .5, l = s.x2 - s.w2 - i.size.x * .5, d = i.userData.speed ?? .05;
                            n.x >= l && (i.userData.direction = -1), n.x <= r && (i.userData.direction = 1);
                            const y = i.userData.direction * d, c = n.x + y;
                            a.setNextKinematicTranslation({
                                x: c,
                                y: n.y,
                                z: n.z
                            }), i.position.x = c, this.objs.lamps.data[e].position.x = c, this.objs.plafons.data[e].position.x = c, this.objs.bulbs.data[e].position.x = c, this.objs.topPlanes.data[e].position.x = c;
                        } else if (o) {
                            const n = a.translation(), r = 2, l = .5, d = i.userData.speed ?? .03;
                            n.y >= r && (i.userData.direction = -1), n.y <= l && (i.userData.direction = 1);
                            const y = i.userData.direction * d, c = n.y + y;
                            a.setNextKinematicTranslation({
                                x: n.x,
                                y: c,
                                z: n.z
                            }), i.position.y = c, this.objs.lamps.data[e].position.y = c + this.objs.lamps.lampHeight, this.objs.plafons.data[e].position.y = c + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[e].position.y = c + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[e].position.y = c + .2;
                        }
                    }
                    for(let n = 0; n < this.objs.livesBlocks.data.length; n++)this.objs.livesBlocks.data[n].userData.taked ? this.objs.livesBlocks.data[n].position.y < 10 ? (this.objs.livesBlocks.data[n].position.y += .001, this.objs.livesBlocks.data[n].rotation.y += .004) : this.objs.livesBlocks.data[n].userData.taked = !1 : this.objs.livesBlocks.data[n].rotation.y += 4e-4, this.apply(n, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                    this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), t = !0;
                }
                t && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let t = 0; t < this.objs.grassPlanes.data.length; t++){
                    const e = this.objs.grassPlanes.data[t], i = this.objs.topPlanes.data[t];
                    this.objs.sensorPlanes.data[t], this.objs.lamps.data[t], this.objs.plafons.data[t], this.objs.bulbs.data[t];
                    const a = e.userData.body, s = e.userData.speed, o = a.translation();
                    o.x > this.bounds.rightX - e.size.x / 2 ? e.userData.direction = -1 : o.x < this.bounds.leftX + e.size.x / 2 && (e.userData.direction = 1);
                    const n = e.userData.direction * s, r = o.x + n;
                    t > 0 && a.setNextKinematicTranslation({
                        x: r,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[t].position.x = r, this.objs.lamps.data[t].position.x = r, this.objs.plafons.data[t].position.x = r, this.objs.bulbs.data[t].position.x = r, this.objs.topPlanes.data[t].position.x = r, this.objs.topPlanes.data[t].position.y = o.y + .4, this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), i.position.set(r, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBirdModel() {
            await new Ss().loadAsync("models/bird/bird.glb").then((i)=>{
                const a = i.scene, s = i.animations;
                a.scale.x = 2, a.scale.y = 2, a.scale.z = 2, a.position.y = 0, a.rotation.y = -Math.PI / 3, this.angryBirdModel = a, this.angryBirdModel.userData.mixer = new yt(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(s[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new xs;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new Ss().loadAsync("models/boosts/hat.glb").then((i)=>{
                const a = i.scene;
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
            this.animateTops(), this.lampsAnimate(), this.paramsClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((t, e, i)=>{
                t.children[0].children[1].rotation.y += .05, this.worldClass.night && t.children[0].children[1].children[0].material.emissiveIntensity == 0 ? t.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && t.children[0].children[1].children[0].material.emissiveIntensity != 0 && (t.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new p(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: j(this.maxHeight - 1.5, this.maxHeight + 1),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird, this.angryBird.userData.speed = j(8, 13) / 100, this.angryBird.userData.flying = !0), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const t = new bt(new gt({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: gs
            }));
            return t.scale.set(10.4, 10.4, 10.4), t.renderOrder = 20, t;
        }
        lampsAnimate() {
            let t = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night && !this.worldClass.thunder) {
                this.lampsAnimate.did = !1;
                const i = this.camera.position.x - this.bounds.rightX / 1.3, a = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((s, o)=>{
                    s.pointLight;
                    const n = s.position.x >= i && s.position.x <= a, r = o;
                    if (n && !s.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        s.pointLight = l, s.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(s.glow);
                    }
                    if (s.pointLight) {
                        const l = s.pointLight;
                        l.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), s.glow.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 0);
                        const d = n ? this.lightIntensity : 0;
                        l.intensity = F.lerp(l.intensity, d, .15);
                        const y = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], y, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .5 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(c);
                        const D = 1.1, u = this._emissive[r], m = 1 + D * u, b = this.objs.bulbs.baseSize, P = this.objs.bulbs.data[r];
                        P.userData._lastBulbFactor !== m && (P.size.set(b.x * m, b.y * m, b.z * m), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), P.userData._lastBulbFactor = m, t = !0), !n && l.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(l), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((a, s)=>{
                    const o = a.pointLight;
                    o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), a.pointLight = null, a.userData.light = !1, a.glow && (this.scene.remove(a.glow), this.glowPool.push(a.glow), a.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), i = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0);
                    const n = 1.1, r = this._emissive[s], l = 1 + n * r, d = this.objs.bulbs.baseSize, y = this.objs.bulbs.data[s];
                    y.userData._lastBulbFactor !== l && (y.size.set(d.x * l, d.y * l, d.z * l), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), y.userData._lastBulbFactor = l, t = !0);
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const i = this.camera.position.y - this.bounds.topY / 2, a = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((s, o)=>{
                    s.pointLight;
                    const n = s.position.y >= i && s.position.y <= a, r = o;
                    if (n && !s.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        s.pointLight = l, s.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(s.glow);
                    }
                    if (s.pointLight) {
                        const l = s.pointLight;
                        l.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), s.glow.position.copy(s.position);
                        const d = n ? this.lightIntensity : 0;
                        l.intensity = F.lerp(l.intensity, d, .15);
                        const y = n ? 1 : 0;
                        this._emissive[r] = F.lerp(this._emissive[r], y, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .8 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(c);
                        const D = 1, u = this._emissive[r], m = 1 + D * u, b = this.objs.bulbs.baseSize, P = this.objs.bulbs.data[r];
                        P.userData._lastBulbFactor !== m && (P.size.set(b.x * m, b.y * m, b.z * m), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), P.userData._lastBulbFactor = m, t = !0), !n && l.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(l), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((a, s)=>{
                    const o = a.pointLight;
                    !a.pointLight && this._emissive[s] === 0 || (o && (o.intensity = F.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), a.pointLight = null, a.userData.light = !1, a.glow && (this.scene.remove(a.glow), this.glowPool.push(a.glow), a.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), i = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0));
                }), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        needDeath(t = !1) {
            t && t.position.y > -1 ? (this.audioClass.playMusic([
                "inwater"
            ]), t.userData.body.setTranslation(new p(0, -5, 0)), t.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), t.userData.live = !1) : t || (this.audioClass.playMusic([
                "inwater"
            ]), this.players.forEach((e, i, a)=>{
                e.player.position.y > 0 && (e.player.userData.body.setTranslation(new p(0, -5, 0)), e.player.userData.body.setLinvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0), e.player.userData.live = !1);
            }));
        }
        resetLevel() {}
        maxSpeed(t = !1) {
            let e;
            if (t ? e = this.players.filter((s, o, n)=>s.player.userData.live) : e = this.players, e.length === 0) return -1;
            let i = 0, a;
            this.paramsClass.gameDir == "vert" ? a = e[0].player.position.y : a = e[0].player.position.x;
            for(let s = 1; s < e.length; s++)e[s].player && e[s].player.userData.live && e[s].player.position && (this.paramsClass.gameDir == "vert" ? e[s].player.position.y > a && (a = e[s].player.position.y, i = s) : e[s].player.position.x > a && (a = e[s].player.position.x, i = s));
            return t ? this.players.indexOf(e[i], 0) : i;
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
                        const i = this.maxSpeed(!0);
                        if (i >= 0) {
                            let a = 0;
                            this.players.length > 1 ? a = this.players[i].player.position.x : this.paramsClass.gameDir == "hor" && (a = this.players[i].player.position.x + this.bounds.rightX / 2);
                            const s = this.cam.maxBackJump;
                            a < this.cam.targetX - s ? this.cam.targetX = this.cam.targetX - s : this.cam.targetX = a;
                            const o = this.spring(t.position.x, this.cam.targetX, this.cam.velX, .25, e);
                            t.position.x = o.newPos, this.cam.velX = o.newVel, t.position.y = this.isMobile ? 4 : 3, t.position.z = this.isMobile ? 20 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                        }
                        break;
                    }
                case 3:
                    this.paramsClass.gameStarting && (t.position.y += this.cameraSpeed), t.position.x = 0, this.cameraSpeed += 1e-6, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 4:
                    this.paramsClass.gameStarting && (t.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), t.position.x = 0, t.position.z = this.isMobile ? 25 : 32, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
            }
        }
        damp(t, e, i, a) {
            return t + (e - t) * (1 - Math.exp(-i * a));
        }
        spring(t, e, i, a, s) {
            const o = 2 / a, n = o * s, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let l = t - e;
            const d = (i + o * l) * s, y = (i - o * d) * r;
            return {
                newPos: e + (l + d) * r,
                newVel: y
            };
        }
        showPopupInGame(t) {
            this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.looseAudio.play(), !t || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), this.showScreen("popup_in_game");
        }
        menuInGame = ()=>{
            document.querySelector(".popup_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.boostHatModels.forEach((t, e, i)=>{
                    t.userData.fly = !1;
                }), this.players[0].playerAliving(!1), this.players[0].player.userData.lives = 1, this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1);
            }), document.querySelector(".popup_game_btn2").addEventListener("click", ()=>{
                this.players.forEach((t, e, i)=>{
                    t.playerAliving(!0);
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.z = 7, this.camera.position.y = 2, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((t, e, i)=>{
                    t.position.x = this.boostHatCoords[e][0], t.position.y = this.boostHatCoords[e][1], t.userData.fly = !1;
                });
                for(let t = 0; t < this.objs.livesBlocks.data.length; t++)this.objs.livesBlocks.data[t].position = this.objs.livesBlocks.data[t].userData.startPos, this.apply(t, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
                this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = !0, this.hideScreen("popup_in_game"), this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]);
            }), document.querySelector(".popup_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((t, e, i)=>{
                    t.playerAliving(!0);
                }), this.paramsClass.dataLoaded = !1, Xt(this.scene), this.audioClass.stopMusic(0);
            });
        };
        hideScreen(t) {
            document.querySelector(`.${t}`).classList.add("hidden_screen");
        }
        showScreen(t) {
            document.querySelector(`.${t}`).classList.remove("hidden_screen");
        }
    }
    class q {
        constructor(t, e){
            this.world = t, this.RAPIER = e, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Bs;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const e = t.geometry;
            e.computeBoundingBox();
            const i = new p;
            e.boundingBox.getSize(i);
            const a = new p(1 / (i.x || 1), 1 / (i.y || 1), 1 / (i.z || 1));
            return t.userData.invBase = a, a;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new p(t, t, t) : t?.isVector3 ? t.clone() : new p(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, e, i) {
            const a = q._toVec3(i.size), s = q._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = i.quaternion?.isQuaternion ? i.quaternion : new hs, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.x, s.y, s.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), r = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(r, n), this.instancedBodies.push({
                mesh: t,
                index: e,
                size: a,
                body: n
            });
        }
        addInstancedStatic(t, e, i, a) {
            const s = q._toVec3(a.size), o = q._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = a.quaternion?.isQuaternion ? a.quaternion : new hs, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), l = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setFriction(1.6).setRestitution(0);
            t[i].userData.body = r, t[i].userData.shape = l, t[i].userData.collide = this.world.createCollider(l, r), this.instancedBodies.push({
                mesh: e,
                index: i,
                size: s,
                body: r
            });
        }
        updateInstancedTransforms() {
            const t = this._dummy, e = new Set;
            for (const i of this.instancedBodies){
                const a = q._ensureInvBase(i.mesh), s = i.body.translation(), o = i.body.rotation();
                t.position.set(s.x, s.y, s.z), t.quaternion.set(o.x, o.y, o.z, o.w), t.scale.set(i.size.x * a.x, i.size.y * a.y, i.size.z * a.z), t.updateMatrix(), i.mesh.setMatrixAt(i.index, t.matrix), e.add(i.mesh);
            }
            for (const i of e)i.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let e, i;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new K().setFromObject(t);
                const s = As(t);
                t.rotation.copy(a), t.userData.size = s, t.userData.orgRotation = a, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), t.userData.body = e, t.userData.shape = i;
                let o = e;
                i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(i, e);
                t.userData.collider = n, t.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    t,
                    e,
                    t.id
                ]);
            } else if (t != null && t.userData.name.includes("tops")) {
                let e, i;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new K().setFromObject(t);
                const s = As(t);
                t.rotation.copy(a), t.userData.size = s, t.userData.orgRotation = a, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setMass(1).setRestitution(0).setFriction(.3), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, e);
                t.userData.body = e, t.userData.collide = o, this.allWallBodyCollision.push(o), t.userData.handle = e.handle, this.dynamicBodies.push([
                    t,
                    e,
                    t.id
                ]), t.userData.playerHandlesInside = new Set, this.allTops.push(t);
            } else if (t != null && t.userData.name.includes("bird")) {
                let e, i;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new K().setFromObject(t);
                const s = As(t);
                t.rotation.copy(a), t.userData.size = s, t.userData.orgRotation = a, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setMass(1).setRestitution(1).setFriction(0), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(i, e);
                t.userData.body = e, t.userData.collide = o, this.allWallBodyCollision.push(o), t.userData.handle = e.handle, this.dynamicBodies.push([
                    t,
                    e,
                    t.id
                ]);
            }
        }
    }
    const Cs = new p;
    function As(h) {
        if (h.isMesh && h.geometry) {
            const e = h.geometry;
            return e.boundingBox || e.computeBoundingBox(), e.boundingBox.getSize(Cs), Cs.multiply(h.scale), Cs.clone();
        }
        return new K().setFromObject(h).getSize(new p);
    }
    class Kt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2;
        }
        async loadAudio() {
            const t = new jt, e = new wt;
            await e.loadAsync("audio/back1.mp3").then((i)=>{
                this.backAudio = new w(t), this.backAudio.setBuffer(i), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/back2.mp3").then((i)=>{
                this.backAudio2 = new w(t), this.backAudio2.setBuffer(i), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/back3.mp3").then((i)=>{
                this.backAudio3 = new w(t), this.backAudio3.setBuffer(i), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(.5), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/ocean.mp3").then((i)=>{
                this.oceanAudio = new w(t), this.oceanAudio.setBuffer(i), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/inwater.mp3").then((i)=>{
                this.inwaterAudio = new w(t), this.inwaterAudio.setBuffer(i), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/loose.mp3").then((i)=>{
                this.looseAudio = new w(t), this.looseAudio.setBuffer(i), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/take.mp3").then((i)=>{
                this.takeAudio = new w(t), this.takeAudio.setBuffer(i), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/ready-jump.mp3").then((i)=>{
                this.readyJumpAudio = new w(t), this.readyJumpAudio.setBuffer(i), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(10), this.readyJumpAudio.setVolume(2), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/quack1.mp3").then((i)=>{
                this.jumpAudio = new w(t), this.jumpAudio.setBuffer(i), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/quack2.mp3").then((i)=>{
                this.jumpAudio2 = new w(t), this.jumpAudio2.setBuffer(i), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/quack3.mp3").then((i)=>{
                this.jumpAudio3 = new w(t), this.jumpAudio3.setBuffer(i), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/rain.mp3").then((i)=>{
                this.rainAudio = new w(t), this.rainAudio.setBuffer(i), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1), this.musics.push({
                    name: "rain",
                    music: this.rainAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/thunder.mp3").then((i)=>{
                this.thunderAudio = new w(t), this.thunderAudio.setBuffer(i), this.thunderAudio.setLoop(!1), this.thunderAudio.setRefDistance(400), this.thunderAudio.setVolume(1), this.thundersAudio.push({
                    name: "thunder1",
                    music: this.thunderAudio
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/thunder2.mp3").then((i)=>{
                this.thunderAudio2 = new w(t), this.thunderAudio2.setBuffer(i), this.thunderAudio2.setLoop(!1), this.thunderAudio2.setRefDistance(400), this.thunderAudio2.setVolume(1), this.thundersAudio.push({
                    name: "thunder2",
                    music: this.thunderAudio2
                });
            }).catch((i)=>{
                console.error("Ошибка при загрузке аудио:", i);
            }), await e.loadAsync("audio/thunder3.mp3").then((i)=>{
                this.thunderAudio3 = new w(t), this.thunderAudio3.setBuffer(i), this.thunderAudio3.setLoop(!1), this.thunderAudio3.setRefDistance(400), this.thunderAudio3.setVolume(1), this.thundersAudio.push({
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
        stopMusic(t) {
            t == 0 ? this.musics.forEach((e, i, a)=>{
                e.music.stop();
            }) : t.forEach((e, i, a)=>{
                this.musics.find((s)=>s.name === e).music.stop();
            });
        }
        pauseMusic(t) {
            t.forEach((e, i, a)=>{
                this.musics.find((s)=>s.name === e).music.pause();
            });
        }
        playMusic(t) {
            t.forEach((e, i, a)=>{
                let s = this.musics.find((o)=>o.name === e).music;
                s.isPlaying || s.play();
            });
        }
        dayNight(t = !0, e = !1) {
            t && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>i.name === "back1").music, this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : !t && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((i)=>i.name === "back").music = this.musics.find((i)=>e ? i.name === "back3" : i.name === "back2").music, this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((i)=>i.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class Zt {
        constructor(t, e, i, a, s){
            this.levelClass = t, this.isMobile = e, this.renderer = i, this.camera = a, this.paramsClass = s, this.mouse = new p, this.raycaster = new xt;
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
                    this.levelClass.players.forEach((e, i, a)=>{
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
            t.userData.live && (t.userData.onGround || t.userData.canFly) && (t.userData.readyJump = !0, t.userData.audio[0].play());
        }
        upKeys(t) {
            t.userData.live && (t.userData.canFly && !t.userData.onGround && t.userData.canFlyJumps > 0 && (t.userData.canFlyJumps--, t.userData.canFlyJumps == 0 && setTimeout(()=>{
                t.userData.canFly = !1, this.levelClass.boostHatModels[t.userData.canFlyNum].userData.fly = !1;
            }, 1e3)), t.userData.readyJump && t.userData.onGround ? (t.userData.jumping = !0, t.userData.readyJump = !1, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = !1) : t.userData.onGround || (t.userData.canFly ? (t.userData.jumping = !0, t.userData.readyJump = !1, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = !1, t.userData.hatBoost--, t.userData.hatBoost == 0 && (t.userData.canFly = !1, setTimeout(()=>{
                this.levelClass.boostHatModels[t.userData.numHatBoost].userData.fly = !1;
            }, 500))) : (t.userData.readyJump = !1, t.userData.audio[0].stop())));
        }
    }
    class Qt {
        constructor(t, e, i, a, s, o){
            this.scene = t, this.camera = e, this.renderer = i, this.paramsClass = a, this.isMobile = s, this.audioClass = o, this.ambientLight = new Pt(11184810, 1), this.hemiLight = new vt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Dt(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Bs, this.dirLight.target = this.targetObject, this.helper = new Mt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.activeLightningLines = [], this.lightningMaterialBase = new Ct({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: gs,
                depthWrite: !1
            }), this.clock = new xs, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 25, this.rainAreaHalfDepth = 22, this.rainTopY = 10, this.rainBottomY = -4, this.rainGeometry = new bs, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let e = 0; e < this.rainDropCount; e++){
                const i = e * 3;
                this.rainPositions[i + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[i + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[i + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[e] = 15 + Math.random() * 15, this.rainWindPhase[e] = Math.random() * Math.PI * 2;
            }
            const t = new Float32Array(this.rainDropCount * 3);
            for(let e = 0; e < this.rainDropCount; e++){
                const i = .8 + Math.random() * .2;
                t[e * 3 + 0] = .7 * i, t[e * 3 + 1] = .8 * i, t[e * 3 + 2] = 1 * i;
            }
            this.rainGeometry.setAttribute("position", new as(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new as(t, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new At({
                color: 15658751,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .8,
                transparent: !0,
                opacity: .84,
                size: 9,
                sizeAttenuation: !1,
                depthWrite: !1,
                blending: gs
            }), this.rainPoints = new Fs(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Rs(900, 500), this.water = new zt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new $s().load("textures/waternormals.jpg", function(l) {
                    l.wrapS = l.wrapT = ns;
                }),
                sunDirection: new p,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new p, this.sky = new St, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new ws(new Rs(1e4, 1e4), new st({
                color: 526362,
                side: kt,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const e = 1500, i = new Float32Array(e * 3), a = new Float32Array(e), s = new Float32Array(e * 3);
            for(let l = 0; l < e; l++){
                i[3 * l] = Math.random() * 600 - 300, i[3 * l + 1] = Math.random() * 150 - 100, i[3 * l + 2] = Math.random() * 300 - 500, a[l] = Math.random() * 2 + .7;
                const d = new E().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                s[3 * l] = d.r, s[3 * l + 1] = d.g, s[3 * l + 2] = d.b;
            }
            const o = new bs;
            o.setAttribute("position", new as(i, 3)), o.setAttribute("size", new as(a, 1)), o.setAttribute("color", new as(s, 3));
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
            this.materialStars = new Bt({
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
                blending: gs
            }), this.stars = new Fs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const t = this.camera.position.x, e = Math.sign(t - this._prevCamX);
            this._prevCamX = e, this.stars.position.x = this.camera.position.x;
            const i = F.degToRad(90 - this.parameters.elevation), a = F.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, i, a), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), this.parameters.elevation < 2 && !this.rainStart && (this.rain = !0, this.startRain(), this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1, this.rain && this.parameters.elevation >= -3 && (this.audioClass.rainAudio.stop(), this.rainStart = !1, this.scene.remove(this.rainPoints), this.rain = !1))), this.paramsClass.gameDir == "vert") {
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
            for(let i = this.activeLightningLines.length - 1; i >= 0; i--){
                const a = this.activeLightningLines[i];
                a.userData.life -= this.deltaSeconds / 1.5, a.material.opacity *= .78, (a.userData.life <= 0 || a.material.opacity <= .02) && (this.scene.remove(a), a.geometry.dispose(), a.material.dispose(), this.activeLightningLines.splice(i, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const i = this.rainGeometry.getAttribute("position"), a = Math.sin(performance.now() * .0012) * .8, s = this.camera.position.x, o = this.camera.position.z;
                for(let n = 0; n < this.rainDropCount; n++){
                    const r = n * 3, l = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + a * .4;
                    this.rainPositions[r + 0] += l * this.deltaSeconds * 6, this.rainPositions[r + 1] -= this.rainVelocities[n] * (1 + Math.abs(a) * .3) * this.deltaSeconds, s + this.rainPositions[r + 0], o + this.rainPositions[r + 2], this.rainPositions[r + 1] < this.rainBottomY && (this.rainPositions[r + 1] = this.rainTopY, this.rainPositions[r + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[r + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[r + 0] > this.rainAreaHalfWidth && (this.rainPositions[r + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[r + 0] < -this.rainAreaHalfWidth && (this.rainPositions[r + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[r + 2] > this.rainAreaHalfDepth && (this.rainPositions[r + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[r + 2] < -this.rainAreaHalfDepth && (this.rainPositions[r + 2] += this.rainAreaHalfDepth * 2 - 35);
                }
                this.rainPoints.position.set(s, 0, o), i.needsUpdate = !0;
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
        createLightningBolt(t, e, i) {
            const a = t + (Math.random() - .5) * 6, s = -4 + Math.random() * 3, o = i + (Math.random() - .5) * 6, n = a - t, r = s - e, l = o - i, d = Math.hypot(n, r, l) || 1, y = n / d, c = r / d, D = l / d, u = n / d, b = -(l / d), P = 0, I = u, it = Math.abs(c) > .9 ? new p(1, 0, 0) : new p(0, 1, 0), Ls = new p(y, c, D), ps = new p().crossVectors(Ls, it).normalize(), Ds = new p().crossVectors(Ls, ps).normalize(), at = 2 + Math.random() * 2, ot = 1.2, nt = Math.random() * Math.PI * 2, rt = 3 + Math.random() * 2.5, lt = .8, ht = Math.random() * Math.PI * 2, Ms = 28, us = 4, Z = [];
            for(let M = 0; M <= Ms; M++){
                const C = M / Ms, z = 1 - C;
                let G = t + n * C, Q = e + r * C, $ = i + l * C;
                const W = Math.sin(C * Math.PI * at + nt) * ot * (.3 + .7 * z), O = Math.sin(C * Math.PI * rt + ht) * lt * (.3 + .7 * z), X = (Math.random() - .5) * 2 * us * z, L = (Math.random() - .5) * 1.6 * us * z, S = Math.random() < .12 ? (Math.random() - .5) * 3.5 * z : 0;
                if (G += ps.x * (W + X + S) + Ds.x * (O + L * .7), Q += ps.y * (W + X * .5) + Ds.y * (O + L * .5), $ += ps.z * (W + X + S) + Ds.z * (O + L * .7), Z.push(G, Q, $), M > 3 && M < Ms - 3 && Math.random() < .22) {
                    const U = [], ss = 3 + Math.floor(Math.random() * 2), N = .25 + Math.random() * .35;
                    let ts = G, es = Q, is = $;
                    U.push(ts, es, is);
                    for(let ms = 1; ms <= ss; ms++)ts += (Math.random() - .5) * us * N, es += -(.8 + Math.random() * .8) * N, is += (Math.random() - .5) * us * N, U.push(ts, es, is);
                    const cs = new bs;
                    cs.setAttribute("position", new Is(U, 3));
                    const J = new Gs(cs, this.lightningMaterialBase.clone());
                    J.material.opacity = .6, J.userData.life = .16 + Math.random() * .12, this.scene.add(J), this.activeLightningLines.push(J);
                }
            }
            const dt = 2;
            for(let M = -1; M <= dt; M++){
                const C = M === -1, z = C ? 0 : M % 2 === 0 ? 1 : -1, G = .55 + Math.random() * .45, Q = .35, $ = Math.random() * Math.PI * 2, W = [], O = Z.length / 3;
                for(let S = 0; S < O; S++){
                    const U = S / (O - 1), ss = .35 + .85 * U, N = Math.sin(U * Math.PI * 2 + $) * Q * (.2 + .8 * U), ts = b * z * G * ss + I * N * .3, es = P * z * G * ss + N * .05, is = I * z * G * ss - b * N * .3, cs = S * 3 + 0, J = S * 3 + 1, ms = S * 3 + 2, Hs = Z[cs], _s = Z[J], Ts = Z[ms];
                    C ? W.push(Hs + (Math.random() - .5) * .05, _s + (Math.random() - .5) * .05, Ts + (Math.random() - .5) * .05) : W.push(Hs + ts + (Math.random() - .5) * .2, _s + es + (Math.random() - .5) * .2, Ts + is + (Math.random() - .5) * .2);
                }
                const X = new bs;
                X.setAttribute("position", new Is(W, 3));
                const L = new Gs(X, this.lightningMaterialBase.clone());
                L.material.opacity = C ? .95 : .32, L.userData.life = .22 + Math.random() * .18, this.scene.add(L), this.activeLightningLines.push(L);
            }
        }
        triggerLightningFlash() {
            const t = this.camera.position.x + (Math.random() - .5) * 30, e = 34 + Math.random() * 6, i = -10 - Math.random() * 20;
            this.createLightningBolt(t, e, i);
        }
        makeRainStreakTexture() {
            const i = new Uint8Array(60);
            for(let s = 0; s < 15; s++){
                const o = Math.sin(s / 14 * Math.PI);
                for(let n = 0; n < 1; n++){
                    const r = (s * 1 + n) * 4;
                    i[r + 0] = 255, i[r + 1] = 255, i[r + 2] = 255, i[r + 3] = Math.round(o * 255);
                }
            }
            const a = new Lt(i, 1, 15, Ht);
            return a.needsUpdate = !0, a.magFilter = Ws, a.minFilter = Ws, a.wrapS = Us, a.wrapT = Us, a.rotation = Math.PI / 2, a.center.set(.5, .5), a;
        }
    }
    class $t {
        constructor(t){
            this.initMatch = t, this.mainMenu(this.initMatch), this.playersNum = 2;
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("together_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((t, e, i)=>{
                t.addEventListener("click", ()=>{
                    this.hideScreen("levels_game_screen"), this.initMatch(1, 1, e + 1, !0);
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
            }), document.querySelectorAll(".together_game_chels").forEach((t, e, i)=>{
                t.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((a)=>{
                        a.classList.remove("together_game_chels_active");
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
    class se {
        constructor(){
            this.gameDir = "vert", this.gameStarting = !1, this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class te {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const e = Ks, i = performance.now(), a = 200;
            function s(o) {
                const n = Math.min(1, (o - i) / a), r = 1 - Math.pow(1 - n, 4), l = Math.round(e + (t - e) * r);
                ee.textContent = String(l).padStart(3, "0"), n < 1 ? requestAnimationFrame(s) : Ks = t;
            }
            requestAnimationFrame(s);
        }
    }
    const ee = document.getElementById("meters-float");
    let Ks = 0;
    console.clear();
    let ks, ie = new xs, tt, fs, ds, B, f, R, rs, v, Y;
    const ls = new _t;
    ls.background = new E(13230580);
    const g = new Tt(25, window.innerWidth / window.innerHeight, .1, 2e3);
    g.position.z = 7;
    g.position.y = 2;
    const js = Vt();
    let vs = new Et;
    document.body.appendChild(vs.dom);
    vs.dom.style.top = "0px";
    vs.dom.style.left = "48%";
    const x = new Ft;
    x.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(x.domElement);
    x.shadowMap.enabled = !0;
    x.shadowMap.type = Rt;
    x.outputColorSpace = It;
    x.toneMapping = Gt;
    x.toneMappingExposure = 1.05;
    et();
    window.addEventListener("resize", et, !1);
    function et() {
        js ? (g.aspect = document.body.offsetWidth / document.body.offsetHeight, g.updateProjectionMatrix(), x.setSize(innerWidth, innerHeight)) : (g.aspect = document.body.offsetWidth / document.body.offsetHeight, g.updateProjectionMatrix(), x.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function ae(h) {
        const t = await Nt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        ks = new t.World(new t.Vector3(0, -9.81, 0)), tt = new t.EventQueue(!0), B = new q(ks, t), Y = new te(g), R = new Kt, ds = new Qt(ls, g, x, v, js, R), f = new Yt(ls, R, B, x, g, js, v, ds);
        for(let e = 0; e < h; e++)f.players.push(new Jt(ls, R, f, v, g));
        rs = new Zt(f, js, x, g, v), rs.addKeyListeners();
    }
    async function oe() {
        await ds.loadWorld(), await R.loadAudio(), R.backAudio.play(), R.oceanAudio.play();
    }
    async function ne(h, t = t) {
        await f.createLevel(h, t = t), await f.loadEnvironments(), await f.loadPlayers(), f.objs.grassPlanes.data.length > 0 && f.objs.grassPlanes.data.forEach((e, i)=>{
            f.objs.grassPlanes.data[i].userData.collide.setCollisionGroups(Ps([
                0
            ], [
                1
            ]));
        }), f.players.length > 0 && f.players.forEach((e, i)=>{
            f.players[i].player.userData.collider.setCollisionGroups(Ps([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function re(h, t, e = !1, i = !0) {
        le(), fs.toggleLoader(!0), v = new se, await ae(h), f.gameNum = t, await oe(), await ne(e, i = i), setTimeout(()=>{
            fs.showScreen("hud"), fs.toggleLoader(!1), v.dataLoaded = !0, v.gameStarting = !0;
        }, 300);
    }
    fs = new $t(re);
    function le() {
        g.position.z = 7, g.position.y = 2, g.position.x = 0, x.toneMappingExposure = 1.05, rs?.removedKeyListeners(), ds = null, B = null, f = null, R = null, rs = null, v = null, Y = null;
    }
    function he() {
        if (v.dataLoaded && v.gameStarting) {
            v.gameDir == "hor" ? Y.updateMetersFloat(g.position.x - Y.startX) : Y.updateMetersFloat(g.position.y - Y.startY), f.players.forEach((h, t, e)=>{
                h.player.userData.finish || h.playerMove();
            }), ds.updateLighting(), f.levelAnimate(g), f.cameraMove(g), vs.update();
            for(let h = 0, t = B.dynamicBodies.length; h < t; h++)B.dynamicBodies[h][0].position.copy(B.dynamicBodies[h][1].translation()), B.dynamicBodies[h][0].quaternion.copy(B.dynamicBodies[h][1].rotation());
            B.updateInstancedTransforms(), ks.step(tt), v.gameStarting && x.render(ls, g);
        }
    }
    let zs = 0;
    const Zs = 1 / 60, Qs = .1;
    x.setAnimationLoop(()=>{
        if (v != null) {
            let h = ie.getDelta();
            for(h > Qs && (h = Qs), zs += h; zs >= Zs;)he(), zs -= Zs;
        }
    });
})();

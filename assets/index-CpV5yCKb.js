import { B as Y, V as d, Q as zs, M as ht, a as fs, b as B, c as as, d as X, G as As, C as H, S as Ts, E as G, I, D as W, e as dt, f as ws, O as Ls, T as Zs, R as is, g as Qs, P as us, A as pt, h as ut, i as ct, j as ys, k, l as mt, m as yt, n as bt, o as P, p as gt, q as ft, H as wt, r as jt, s as xt, L as Pt, t as cs, u as ms, v as Dt, w as Fs, x as Rs, W as vt, y as Mt, z as Ct, F as zt, J as Gs, K as Is, N as At, U as St, X as Lt, Y as Bt, Z as Ht, _ as kt } from "./three-2JL-UK1q.js";
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
    const _t = "modulepreload", Et = function(l, t) {
        return new URL(l, t).href;
    }, Ws = {}, Tt = function(t, e, a) {
        let i = Promise.resolve();
        if (e && e.length > 0) {
            let h = function(u) {
                return Promise.all(u.map((p)=>Promise.resolve(p).then((c)=>({
                            status: "fulfilled",
                            value: c
                        }), (c)=>({
                            status: "rejected",
                            reason: c
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = n?.nonce || n?.getAttribute("nonce");
            i = h(e.map((u)=>{
                if (u = Et(u, a), u in Ws) return;
                Ws[u] = !0;
                const p = u.endsWith(".css"), c = p ? '[rel="stylesheet"]' : "";
                if (!!a) for(let m = o.length - 1; m >= 0; m--){
                    const f = o[m];
                    if (f.href === u && (!p || f.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${u}"]${c}`)) return;
                const y = document.createElement("link");
                if (y.rel = p ? "stylesheet" : _t, p || (y.as = "script"), y.crossOrigin = "", y.href = u, r && y.setAttribute("nonce", r), document.head.appendChild(y), p) return new Promise((m, f)=>{
                    y.addEventListener("load", m), y.addEventListener("error", ()=>f(new Error(`Unable to preload CSS for ${u}`)));
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
    function Ft() {
        let l = window.matchMedia || window.msMatchMedia;
        return l ? l("(pointer:coarse)").matches : !1;
    }
    function Us(l) {
        return l.reduce((t, e)=>t | 1 << e, 0);
    }
    function js(l, t) {
        const e = Us(l), a = Us(t);
        return "0x" + ((e & 65535) << 16 | a & 65535).toString(16).padStart(8, "0");
    }
    function Ns(l) {
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
    function Rt(l) {
        return typeof l == "number" ? new d(l, l, l) : l?.isVector3 ? l : new d(l?.x ?? 1, l?.y ?? 1, l?.z ?? 1);
    }
    function Vs(l) {
        return l?.userData?.id ?? l?.uuid ?? l?.id;
    }
    const Gt = new Y(new d(-.5, -.5, -.5), new d(.5, .5, .5)), qs = new ht, Os = new zs;
    function Xs(l) {
        if (l?.isObject3D) {
            if (l.updateMatrixWorld(!0), l.geometry?.isBufferGeometry) {
                const i = l.geometry;
                if (i.boundingBox || i.computeBoundingBox(), i.boundingBox) {
                    const s = i.boundingBox.clone();
                    return s.applyMatrix4(l.matrixWorld), s;
                }
            }
            return new Y().setFromObject(l);
        }
        const t = l.position ?? l.pos ?? new d, e = Rt(l.size ?? 1), a = l.quaternion?.isQuaternion ? l.quaternion : l.rotation?.isEuler ? Os.setFromEuler(l.rotation) : Os.set(0, 0, 0, 1);
        return qs.compose(t, a, e), Gt.clone().applyMatrix4(qs);
    }
    function U(l, t) {
        const e = Xs(l), a = Vs(l);
        for(let i = t.length - 1; i >= 0; i--){
            const s = t[i], o = Vs(s);
            if (a !== void 0 && o !== void 0 && a === o) continue;
            if (Xs(s).intersectsBox(e)) return s;
        }
        return null;
    }
    function It(l) {
        for(l.traverse((t)=>{
            t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((e)=>e.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose();
        }); l.children.length > 0;)l.remove(l.children[0]);
    }
    class Wt {
        constructor(t, e, a, i, s){
            this.scene = t, this.audioClass = e, this.levelClass = a, this.paramsClass = i, this.camera = s, this.playerHeight = .9, this.playerWidth = .5, this.player = new fs(new B(this.playerWidth, this.playerHeight, this.playerWidth), new as({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.player.userData.finish = !1, this.playerModel, this.playerOut = new fs(new B(this.playerWidth, this.playerHeight + .1, this.playerWidth), new X({
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
            await new As().loadAsync("models/players/player1.glb").then((a)=>{
                const i = a.scene;
                this.playerModel = i, this.playerModel.traverse(function(s) {
                    s.isMesh && (s.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(s) {
                    s.isMesh && (s.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if ((this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround) && console.log("finish"), U(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [t, e] = Ns(this.player.userData.collider);
                e[0] == 0 && this.player.userData.collider.setCollisionGroups(js([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, e] = Ns(this.player.userData.collider);
                e[0] != 0 && this.player.userData.collider.setCollisionGroups(js([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && U(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(U(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(U(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(U(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.playMusic([
                "take"
            ]))), this.player.userData.canFlyJumps && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].position.copy(new d(this.player.userData.head.getWorldPosition(new d).x - .03, this.player.userData.head.getWorldPosition(new d).y + .2, this.player.userData.head.getWorldPosition(new d).z + 0)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].children[0].children[1].rotation.y += .4), U(this.player, this.levelClass.objs.topPlanes.data) || U(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.paramsClass.gameDir == "hor" && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.levelClass.needDeath(this.player)), this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY) * 1.3 && this.player.userData.live && (this.player.userData.lives = 0, this.reLiveField(), this.levelClass.needDeath(this.player)), !this.levelClass.canHorDie && this.camera.position.x > 1 && this.camera.position.x < 12 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -4 && this.paramsClass.gameStarting) this.wor, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                "back"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.paramsClass.gameStarting = !1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (console.log(this.levelClass.gameNum), this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((t)=>!t.player.userData.live) && this.levelClass.players.every((t)=>t.player.userData.lives < 1) && this.paramsClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0, this.paramsClass.gameStarting = !1)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((t, e, a)=>{
                t.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.playMusic([
                "back"
            ])), this.player.userData.live || (this.player.userData.body.setLinvel(new d(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((t)=>t.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new d(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + .1, this.player.userData.deadPos.z)), this.player.userData.deadPos = new d(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1)), this.reLiveField();
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, e = this.player.userData.readyJump ? -Math.PI / 2 : 0, a = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, i = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, s = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, a, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, s, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const u = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, u, .4);
                const p = this.player.userData.readyJump ? .6 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, p, .1),
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
        }
        lerp(t, e, a) {
            return t + (e - t) * a;
        }
        playerAliving(t) {
            this.paramsClass.allDie = !1, t && (this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.player.userData.lives = 3), this.player.userData.playerAlive = !0, setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 100);
        }
        reLiveField() {
            let t = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((e, a, i)=>e.player == this.player)].children;
            for(let e = 0; e < t.length; e++)e > this.player.userData.lives - 1 ? t[e].classList.add("hidden_screen") : t[e].classList.contains("hidden_screen") && t[e].classList.remove("hidden_screen");
        }
    }
    class Ut {
        constructor(t, e, a, i, s, o, n, r){
            this.scene = t, this.audioClass = e, this.physicsClass = a, this.renderer = i, this.camera = s, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this._dayColor = new H(16777215), this._nightColor = new H(16771488), this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (p, c)=>({
                            position: new d(0, -10, 0),
                            rotation: new G(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(1, 1, 1),
                            userData: {
                                name: "plane",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlane: new B(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new as({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (p, c)=>({
                            position: new d(0, -10, 0),
                            rotation: new G(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(1, 1, 1),
                            userData: {
                                name: "topSensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneTop: new B(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new X({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (p, c)=>({
                            position: new d(0, -10, 0),
                            rotation: new G(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(1, 1, 1),
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
                    geometryPlaneGrass: new B(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new as({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (p, c)=>({
                            position: new d(0, -10, 0),
                            rotation: new G(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(1, 1, 1),
                            userData: {
                                name: "sensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneSensor: new B(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new as({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (p, c)=>({
                            position: new d(0, -10, 0),
                            rotation: new G(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new B(.3, 1, .3),
                    materialLamp: new as({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (p, c)=>({
                            position: new d(0, -10, 0),
                            rotation: new G(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new Ts(.32, 24, 16),
                    materialPlafon: new X({
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
                    }, (p, c)=>({
                            position: new d(0, -10, 0),
                            rotation: new G(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new Ts(.3),
                    materialBulb: new X({
                        emissive: new H(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                }
            }, this.objs.planes.plane = new I(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(W), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new I(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(W), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new I(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(W), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new I(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(W), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new I(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(W), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new I(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(W), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new I(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(W), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.plafons.materialPlafon.onBeforeCompile = (p)=>{
                p.uniforms.fresnelPower = {
                    value: 2.5
                }, p.fragmentShader = p.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const h = new Float32Array(this.count);
            for(let p = 0; p < this.count; p++)h[p] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new dt(h, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (p)=>{
                p.vertexShader = `
    attribute float aEmissive;
    varying float vEmissive;
  ` + p.vertexShader.replace("#include <begin_vertex>", `
      #include <begin_vertex>
      vEmissive = aEmissive;
    `), p.fragmentShader = `
    varying float vEmissive;
  ` + p.fragmentShader.replace("#include <lights_fragment_begin>", `
      #include <lights_fragment_begin>
      // усиливаем эмиссию в зависимости от инстанса
      totalEmissiveRadiance *= vEmissive;
    `);
            }, this.objs.bulbs.materialBulb.needsUpdate = !0;
            function u(p = 64) {
                const c = document.createElement("canvas");
                c.width = c.height = p;
                const x = c.getContext("2d"), y = x.createRadialGradient(p / 2, p / 2, 0, p / 2, p / 2, p / 2);
                y.addColorStop(0, "rgba(255, 235, 175, 1)"), y.addColorStop(1, "rgba(255, 235, 175, 0)"), x.fillStyle = y, x.fillRect(0, 0, p, p);
                const m = new mt(c);
                return m.anisotropy = 1, m.generateMipmaps = !1, m.needsUpdate = !0, m;
            }
            this._glowTex = u(), this._emissive = h, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new d(-1, 0, 0), this.rightEdge = new d(1, 0, 0), this.leftEdge.unproject(s), this.rightEdge.unproject(s), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new ws, this.menuInGame();
        }
        toVec3(t) {
            return typeof t == "number" ? new d(t, t, t) : t?.isVector3 ? t : t ? new d(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new d(1, 1, 1);
        }
        apply(t, e, a) {
            let i = a.userData.invBaseSize;
            if (!i) {
                const r = a.geometry;
                r.computeBoundingBox();
                const h = new d;
                r.boundingBox.getSize(h), i = a.userData.invBaseSize = new d(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new Ls;
            const s = this._dummy, o = e[t] || {}, n = this.toVec3(o.size);
            s.position.copy(o.position || new d), o.rotation ? s.rotation.copy(o.rotation) : s.rotation.set(0, 0, 0), s.scale.set(n.x * i.x, n.y * i.y, n.z * i.z), s.updateMatrix(), a.setMatrixAt(t, s.matrix);
        }
        async loadTexture() {
            const t = new Zs;
            t.load("textures/plane.jpg", (e)=>{
                const a = new X({
                    map: e,
                    transparent: !0,
                    opacity: 1
                });
                e.wrapS = is, e.wrapT = is, e.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = a;
            }, void 0, function(e) {
                console.error("An error happened.");
            }), t.load("textures/grass.jpg", (e)=>{
                const a = new X({
                    map: e
                });
                e.wrapS = is, e.wrapT = is, e.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = a;
            }, void 0, function(e) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let t = new B(.5, .7, 1), e = new Qs({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new fs(t, e), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = w(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(t, e) {
            if (this.levelsMode = t, this.maxHeight = 0, this.birdFlyingMark = 10, this.birdYes = e, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((a, i, s)=>{
                document.querySelectorAll(".player_panel")[i].classList.remove("hidden_screen");
            }), t) {
                this.players[0].player.userData.lives = 0;
                let a = -2.5, i = -5;
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
                        let o = w(this.planeWidth, this.planeWidth - 1), n = a + o / 2 + w(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = w(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s == 0 ? (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.planes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : s == 1 ? (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : s == this.count - 1 ? (this.objs.planes.data[s].size.x = 5, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = 5 + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = 5 + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[s].position.x = 0, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = 0, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = 0, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : s == 1 ? (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new us(16247464, 0, 4);
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
                            const r = new us(16247464, 0, 4);
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
                        if (s > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, s > this.count - 10 ? (this.objs.planes.data[s].size.x = .1, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = .2 + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = .2 + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : s > 0 ? (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s == 0) r = 1 - this.planeHeight / 1.5, this.objs.planes.data[s].position.x = 0, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = 0, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = 0, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5;
                        else if (s == 1) n = 6, this.objs.planes.data[s].position.x = n, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5;
                        else if (s > 1 && (this.objs.planes.data[s].position.x = n, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5, (s + 1) % 10 === 0)) {
                            let h = this.boostHatModel.clone();
                            h.position.x = n, h.position.y = this.objs.topPlanes.data[s].position.y + 2, h.rotation.y = -Math.PI / 2, h.userData.num = s, this.boostHatModels.push(h), this.boostHatMeshes.push(h.children[0].children[0].children[0]), this.boostHatCoords.push([
                                h.position.x,
                                h.position.y
                            ]), this.scene.add(h);
                        }
                        if (this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new us(16247464, 0, 4);
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
                    }, this.objs.planes.data[s].position.y = -10), this.objs.grassPlanes.data[s].position.y > this.maxHeight && (this.maxHeight = this.objs.grassPlanes.data[s].position.y);
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
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
                        if (this.objs.topPlanes.data[s].position.y = n - 1.3, this.objs.grassPlanes.data[s].position.y = n, this.objs.sensorPlanes.data[s].position.y = n - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > this.count - 10 && (this.objs.topPlanes.data[s].size.x = o / 8 + .1, this.objs.grassPlanes.data[s].size.x = o / 8 + .1, this.objs.sensorPlanes.data[s].size.x = o / 8 + .4), s > 0 ? (this.objs.topPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.sensorPlanes.data[s].size.x = o + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), s > this.count - 10 ? this.objs.grassPlanes.data[s].userData.speed = w(10, 14) / 100 : this.objs.grassPlanes.data[s].userData.speed = w(6, 10) / 100, this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, (s + 1) % 7 === 0) {
                            let r = this.boostHatModel.clone();
                            r.position.x = w(this.bounds.leftX + 1, this.bounds.rightX - 1), r.position.y = this.objs.topPlanes.data[s].position.y + .5, this.boostHatModels.push(r), this.boostHatMeshes.push(r.children[0].children[0].children[0]), this.boostHatCoords.push([
                                r.position.x,
                                r.position.y
                            ]), this.scene.add(r);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const r = new us(16247464, 0, 4);
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
            const e = new d(-1, 0, .5), a = new d(1, 0, .5), i = new d(0, 1, .5), s = new d(0, -1, .5);
            if (e.unproject(this.camera), a.unproject(this.camera), i.unproject(this.camera), s.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = e.clone().sub(o).normalize(), r = a.clone().sub(o).normalize(), h = i.clone().sub(o).normalize(), u = s.clone().sub(o).normalize(), p = (t - o.z) / n.z, c = (t - o.z) / u.z, x = o.clone().add(n.multiplyScalar(p)), y = o.clone().add(r.multiplyScalar(p)), m = o.clone().add(h.multiplyScalar(c)), f = o.clone().add(u.multiplyScalar(c));
                this.bounds = {
                    leftX: x.x,
                    rightX: y.x,
                    topY: m.y,
                    bottomY: f.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let t = !1;
                for(let e = 0; e < this.objs.grassPlanes.data.length; e++){
                    const a = this.objs.grassPlanes.data[e], i = a.userData.body, s = a.userData.moveHor, o = a.userData.moveVert;
                    if (!(!s && !o || !i)) {
                        if (s) {
                            const n = i.translation(), r = s.x1 + s.w1 + a.size.x * .5, h = s.x2 - s.w2 - a.size.x * .5, u = a.userData.speed ?? .05;
                            n.x >= h && (a.userData.direction = -1), n.x <= r && (a.userData.direction = 1);
                            const p = a.userData.direction * u, c = n.x + p;
                            i.setNextKinematicTranslation({
                                x: c,
                                y: n.y,
                                z: n.z
                            }), a.position.x = c, this.objs.lamps.data[e].position.x = c, this.objs.plafons.data[e].position.x = c, this.objs.bulbs.data[e].position.x = c, this.objs.topPlanes.data[e].position.x = c;
                        } else if (o) {
                            const n = i.translation(), r = 2, h = .5, u = a.userData.speed ?? .03;
                            n.y >= r && (a.userData.direction = -1), n.y <= h && (a.userData.direction = 1);
                            const p = a.userData.direction * u, c = n.y + p;
                            i.setNextKinematicTranslation({
                                x: n.x,
                                y: c,
                                z: n.z
                            }), a.position.y = c, this.objs.lamps.data[e].position.y = c + this.objs.lamps.lampHeight, this.objs.plafons.data[e].position.y = c + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[e].position.y = c + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[e].position.y = c + .2;
                        }
                        this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), t = !0;
                    }
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
            await new As().loadAsync("models/bird/bird.glb").then((a)=>{
                const i = a.scene, s = a.animations;
                i.scale.x = 2, i.scale.y = 2, i.scale.z = 2, i.position.y = 0, i.rotation.y = -Math.PI / 3, this.angryBirdModel = i, this.angryBirdModel.userData.mixer = new pt(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(s[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new ws;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new As().loadAsync("models/boosts/hat.glb").then((a)=>{
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
            }), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : this.objs.grassPlanes.data[t].userData.moveHor ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && t > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[t].userData.noFriction = !0, this.objs.grassPlanes.data[t].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(t, new H(13421806))), t > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(t, new H(16711680)), t == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(t, new H(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.paramsClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((t, e, a)=>{
                t.children[0].children[1].rotation.y += .05, this.worldClass.night && t.children[0].children[1].children[0].material.emissiveIntensity == 0 ? t.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && t.children[0].children[1].children[0].material.emissiveIntensity != 0 && (t.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new d(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && (this.angryBird.userData.body.setTranslation({
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
            const t = new ut(new ct({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: ys
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
                        const u = n ? this.lightIntensity : 0;
                        h.intensity = k.lerp(h.intensity, u, .15);
                        const p = n ? 1 : 0;
                        this._emissive[r] = k.lerp(this._emissive[r], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .5 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(c);
                        const x = 1.1, y = this._emissive[r], m = 1 + x * y, f = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[r];
                        C.userData._lastBulbFactor !== m && (C.size.set(f.x * m, f.y * m, f.z * m), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = m, t = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((i, s)=>{
                    const o = i.pointLight;
                    o && (o.intensity = k.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), a = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0);
                    const n = 1.1, r = this._emissive[s], h = 1 + n * r, u = this.objs.bulbs.baseSize, p = this.objs.bulbs.data[s];
                    p.userData._lastBulbFactor !== h && (p.size.set(u.x * h, u.y * h, u.z * h), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), p.userData._lastBulbFactor = h, t = !0);
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
                        const u = n ? this.lightIntensity : 0;
                        h.intensity = k.lerp(h.intensity, u, .15);
                        const p = n ? 1 : 0;
                        this._emissive[r] = k.lerp(this._emissive[r], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .8 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(c);
                        const x = 1, y = this._emissive[r], m = 1 + x * y, f = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[r];
                        C.userData._lastBulbFactor !== m && (C.size.set(f.x * m, f.y * m, f.z * m), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = m, t = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((i, s)=>{
                    const o = i.pointLight;
                    !i.pointLight && this._emissive[s] === 0 || (o && (o.intensity = k.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), a = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0));
                }), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        needDeath(t = !1) {
            t && t.position.y > -1 ? (this.audioClass.playMusic([
                "inwater"
            ]), t.userData.body.setTranslation(new d(0, -5, 0)), t.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), t.userData.live = !1) : t || (this.audioClass.playMusic([
                "inwater"
            ]), this.players.forEach((e, a, i)=>{
                e.player.position.y > 0 && (e.player.userData.body.setTranslation(new d(0, -5, 0)), e.player.userData.body.setLinvel({
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
                    this.paramsClass.gameStarting && (t.position.y += this.cameraSpeed), t.position.x = 0, this.cameraSpeed += 1e-6, console.log(this.bounds.rightX), t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 4:
                    this.paramsClass.gameStarting && (t.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), t.position.x = 0, t.position.z = this.isMobile ? 25 : 32, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
            }
        }
        damp(t, e, a, i) {
            return t + (e - t) * (1 - Math.exp(-a * i));
        }
        spring(t, e, a, i, s) {
            const o = 2 / i, n = o * s, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = t - e;
            const u = (a + o * h) * s, p = (a - o * u) * r;
            return {
                newPos: e + (h + u) * r,
                newVel: p
            };
        }
        showPopupInGame(t) {
            this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.looseAudio.play(), !t || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), this.showScreen("popup_in_game");
        }
        menuInGame = ()=>{
            document.querySelector(".popup_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.boostHatModels.forEach((t, e, a)=>{
                    t.userData.fly = !1;
                }), this.players[0].playerAliving(!1), this.players[0].player.userData.lives = 1, this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1);
            }), document.querySelector(".popup_game_btn2").addEventListener("click", ()=>{
                this.players.forEach((t, e, a)=>{
                    t.playerAliving(!0);
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.z = 7, this.camera.position.y = 2, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((t, e, a)=>{
                    t.position.x = this.boostHatCoords[e][0], t.position.y = this.boostHatCoords[e][1], t.userData.fly = !1;
                }), this.hideScreen("popup_in_game"), this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]);
            }), document.querySelector(".popup_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((t, e, a)=>{
                    t.playerAliving(!0);
                }), this.paramsClass.dataLoaded = !1, It(this.scene), this.audioClass.stopMusic(0);
            });
        };
        hideScreen(t) {
            document.querySelector(`.${t}`).classList.add("hidden_screen");
        }
        showScreen(t) {
            document.querySelector(`.${t}`).classList.remove("hidden_screen");
        }
    }
    class N {
        constructor(t, e){
            this.world = t, this.RAPIER = e, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Ls;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const e = t.geometry;
            e.computeBoundingBox();
            const a = new d;
            e.boundingBox.getSize(a);
            const i = new d(1 / (a.x || 1), 1 / (a.y || 1), 1 / (a.z || 1));
            return t.userData.invBase = i, i;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new d(t, t, t) : t?.isVector3 ? t.clone() : new d(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, e, a) {
            const i = N._toVec3(a.size), s = N._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = a.quaternion?.isQuaternion ? a.quaternion : new zs, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.x, s.y, s.z).setRotation({
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
            const s = N._toVec3(i.size), o = N._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = i.quaternion?.isQuaternion ? i.quaternion : new zs, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
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
                const i = N._ensureInvBase(a.mesh), s = a.body.translation(), o = a.body.rotation();
                t.position.set(s.x, s.y, s.z), t.quaternion.set(o.x, o.y, o.z, o.w), t.scale.set(a.size.x * i.x, a.size.y * i.y, a.size.z * i.z), t.updateMatrix(), a.mesh.setMatrixAt(a.index, t.matrix), e.add(a.mesh);
            }
            for (const a of e)a.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let e, a;
                const i = t.rotation.clone();
                t.rotation.set(0, 0, 0), new Y().setFromObject(t);
                const s = Ms(t);
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
                t.rotation.set(0, 0, 0), new Y().setFromObject(t);
                const s = Ms(t);
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
                t.rotation.set(0, 0, 0), new Y().setFromObject(t);
                const s = Ms(t);
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
    const vs = new d;
    function Ms(l) {
        if (l.isMesh && l.geometry) {
            const e = l.geometry;
            return e.boundingBox || e.computeBoundingBox(), e.boundingBox.getSize(vs), vs.multiply(l.scale), vs.clone();
        }
        return new Y().setFromObject(l).getSize(new d);
    }
    class Nt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.inwaterAudio, this.takeAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2;
        }
        async loadAudio() {
            const t = new yt, e = new bt;
            await e.loadAsync("audio/back1.mp3").then((a)=>{
                this.backAudio = new P(t), this.backAudio.setBuffer(a), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/back2.mp3").then((a)=>{
                this.backAudio2 = new P(t), this.backAudio2.setBuffer(a), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/back3.mp3").then((a)=>{
                this.backAudio3 = new P(t), this.backAudio3.setBuffer(a), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(.5), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/ocean.mp3").then((a)=>{
                this.oceanAudio = new P(t), this.oceanAudio.setBuffer(a), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/inwater.mp3").then((a)=>{
                this.inwaterAudio = new P(t), this.inwaterAudio.setBuffer(a), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/loose.mp3").then((a)=>{
                this.looseAudio = new P(t), this.looseAudio.setBuffer(a), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/take.mp3").then((a)=>{
                this.takeAudio = new P(t), this.takeAudio.setBuffer(a), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/ready-jump.mp3").then((a)=>{
                this.readyJumpAudio = new P(t), this.readyJumpAudio.setBuffer(a), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(10), this.readyJumpAudio.setVolume(2), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/quack1.mp3").then((a)=>{
                this.jumpAudio = new P(t), this.jumpAudio.setBuffer(a), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/quack2.mp3").then((a)=>{
                this.jumpAudio2 = new P(t), this.jumpAudio2.setBuffer(a), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/quack3.mp3").then((a)=>{
                this.jumpAudio3 = new P(t), this.jumpAudio3.setBuffer(a), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await e.loadAsync("audio/rain.mp3").then((a)=>{
                this.rainAudio = new P(t), this.rainAudio.setBuffer(a), this.rainAudio.setLoop(!0), this.rainAudio.setRefDistance(400), this.rainAudio.setVolume(1), this.musics.push({
                    name: "rain",
                    music: this.rainAudio
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
    class Vt {
        constructor(t, e, a, i, s){
            this.levelClass = t, this.isMobile = e, this.renderer = a, this.camera = i, this.paramsClass = s, this.mouse = new d, this.raycaster = new gt;
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
                    this.levelClass.needDeath(this.levelClass.players[1].player);
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
    class qt {
        constructor(t, e, a, i, s, o){
            this.scene = t, this.camera = e, this.renderer = a, this.paramsClass = i, this.isMobile = s, this.audioClass = o, this.ambientLight = new ft(11184810, 1), this.hemiLight = new wt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new jt(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Ls, this.dirLight.target = this.targetObject, this.helper = new xt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.rain = !1, this.rainStart = !1, this.activeLightningLines = [], this.lightningMaterialBase = new Pt({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: ys,
                depthWrite: !1
            }), this.clock = new ws, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1200, this.rainAreaHalfWidth = 25, this.rainAreaHalfDepth = 20, this.rainTopY = 10, this.rainBottomY = -8, this.rainGeometry = new cs, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let t = 0; t < this.rainDropCount; t++){
                const e = t * 3;
                this.rainPositions[e + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[e + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[e + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 40, this.rainVelocities[t] = 10 + Math.random() * 35, this.rainWindPhase[t] = Math.random() * Math.PI * 2;
            }
            this.rainGeometry.setAttribute("position", new ms(this.rainPositions, 3)), this.rainMaterial = new Dt({
                color: 6710988,
                size: .2,
                transparent: !0,
                opacity: .95,
                depthWrite: !1,
                blending: ys
            }), this.rainPoints = new Fs(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Rs(900, 500), this.water = new vt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new Zs().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = is;
                }),
                sunDirection: new d,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new d, this.sky = new Mt, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new fs(new Rs(1e4, 1e4), new Qs({
                color: 526362,
                side: Ct,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const e = 1500, a = new Float32Array(e * 3), i = new Float32Array(e), s = new Float32Array(e * 3);
            for(let h = 0; h < e; h++){
                a[3 * h] = Math.random() * 600 - 300, a[3 * h + 1] = Math.random() * 150 - 100, a[3 * h + 2] = Math.random() * 300 - 500, i[h] = Math.random() * 2 + .7;
                const u = new H().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                s[3 * h] = u.r, s[3 * h + 1] = u.g, s[3 * h + 2] = u.b;
            }
            const o = new cs;
            o.setAttribute("position", new ms(a, 3)), o.setAttribute("size", new ms(i, 1)), o.setAttribute("color", new ms(s, 3));
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
            this.materialStars = new zt({
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
                blending: ys
            }), this.stars = new Fs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const t = this.camera.position.x, e = Math.sign(t - this._prevCamX);
            this._prevCamX = e, this.stars.position.x = this.camera.position.x;
            const a = k.degToRad(90 - this.parameters.elevation), i = k.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, a, i), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), console.log(this.parameters.elevation), this.parameters.elevation < 0 && !this.rainStart && (this.rain = !0, this.startRain(), this.audioClass.stopMusic([
                "back"
            ]), this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -1.8 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : this.night = !1), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const n = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= n * .05, this.blackSky.material.opacity += n * .02, this.materialStars.uniforms.opacity.value += n * .008, this.camera.position.y < this.topLight && n < 0 ? (this.dirLight.intensity -= n * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= n * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= n * .05, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && n > 0 && (this.dirLight.intensity -= n * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= n * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= n * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && (this.topLight = this.camera.position.y), this.parameters.elevation = Math.max(-100, Math.min(100, this.parameters.elevation)), this.prevCameraYSun = this.camera.position.y, this.camera.position.y > 30 ? this.night = !0 : this.night = !1;
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
            this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);
            const t = 10;
            this.dirLight.shadow.camera.left = -t, this.dirLight.shadow.camera.right = t, this.dirLight.shadow.camera.top = t, this.dirLight.shadow.camera.bottom = -t, this.deltaSeconds = Math.min(this.clock.getDelta(), .033);
            for(let e = this.activeLightningLines.length - 1; e >= 0; e--){
                const a = this.activeLightningLines[e];
                a.userData.life -= this.deltaSeconds / 1.5, a.material.opacity *= .78, (a.userData.life <= 0 || a.material.opacity <= .02) && (this.scene.remove(a), a.geometry.dispose(), a.material.dispose(), this.activeLightningLines.splice(e, 1));
            }
            if (this.lightningFade > 0 && (this.lightningFade -= this.deltaSeconds * 1.7, this.lightningFade = Math.max(0, this.lightningFade), this.renderer.toneMappingExposure = .03 + this.lightningFade * .97), this.rain) {
                const e = this.rainGeometry.getAttribute("position"), a = Math.sin(performance.now() * .0012) * .8, i = this.camera.position.x, s = this.camera.position.z;
                for(let o = 0; o < this.rainDropCount; o++){
                    const n = o * 3, r = Math.sin(this.rainWindPhase[o] + performance.now() * .002) * .35 + a * .4;
                    this.rainPositions[n + 0] += r * this.deltaSeconds * 6, this.rainPositions[n + 1] -= this.rainVelocities[o] * (1 + Math.abs(a) * .3) * this.deltaSeconds, i + this.rainPositions[n + 0], s + this.rainPositions[n + 2], this.rainPositions[n + 1] < this.rainBottomY && (this.rainPositions[n + 1] = this.rainTopY, this.rainPositions[n + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[n + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 40, this.rainWindPhase[o] = Math.random() * Math.PI * 2), this.rainPositions[n + 0] > this.rainAreaHalfWidth && (this.rainPositions[n + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[n + 0] < -this.rainAreaHalfWidth && (this.rainPositions[n + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[n + 2] > this.rainAreaHalfDepth && (this.rainPositions[n + 2] -= this.rainAreaHalfDepth * 2 - 40), this.rainPositions[n + 2] < -this.rainAreaHalfDepth && (this.rainPositions[n + 2] += this.rainAreaHalfDepth * 2 - 40);
                }
                this.rainPoints.position.set(i, 0, s), e.needsUpdate = !0;
            }
            this.waterUpdate(), this.updateSky();
        }
        startRain() {
            this.rain && this.scene.add(this.rainPoints);
        }
        startThunder() {
            if (!this.thunder) return;
            const t = ()=>{
                if (!this.thunder) return;
                this.triggerLightningFlash(), this.lightningFade = 1;
                const e = 1e3 + Math.random() * 2e3;
                setTimeout(t, e);
            };
            t();
        }
        createLightningBolt(t, e, a) {
            const i = t + (Math.random() - .5) * 6, s = -4 + Math.random() * 3, o = a + (Math.random() - .5) * 6, n = i - t, r = s - e, h = o - a, u = Math.hypot(n, r, h) || 1, p = n / u, c = r / u, x = h / u, y = n / u, f = -(h / u), C = 0, Bs = y, tt = Math.abs(c) > .9 ? new d(1, 0, 0) : new d(0, 1, 0), Hs = new d(p, c, x), ls = new d().crossVectors(Hs, tt).normalize(), Ps = new d().crossVectors(Hs, ls).normalize(), et = 2 + Math.random() * 2, at = 1.2, it = Math.random() * Math.PI * 2, ot = 3 + Math.random() * 2.5, nt = .8, rt = Math.random() * Math.PI * 2, Ds = 28, hs = 4, K = [];
            for(let v = 0; v <= Ds; v++){
                const M = v / Ds, z = 1 - M;
                let E = t + n * M, Z = e + r * M, Q = a + h * M;
                const T = Math.sin(M * Math.PI * et + it) * at * (.3 + .7 * z), V = Math.sin(M * Math.PI * ot + rt) * nt * (.3 + .7 * z), q = (Math.random() - .5) * 2 * hs * z, L = (Math.random() - .5) * 1.6 * hs * z, A = Math.random() < .12 ? (Math.random() - .5) * 3.5 * z : 0;
                if (E += ls.x * (T + q + A) + Ps.x * (V + L * .7), Z += ls.y * (T + q * .5) + Ps.y * (V + L * .5), Q += ls.z * (T + q + A) + Ps.z * (V + L * .7), K.push(E, Z, Q), v > 3 && v < Ds - 3 && Math.random() < .22) {
                    const F = [], $ = 3 + Math.floor(Math.random() * 2), R = .25 + Math.random() * .35;
                    let ss = E, ts = Z, es = Q;
                    F.push(ss, ts, es);
                    for(let ps = 1; ps <= $; ps++)ss += (Math.random() - .5) * hs * R, ts += -(.8 + Math.random() * .8) * R, es += (Math.random() - .5) * hs * R, F.push(ss, ts, es);
                    const ds = new cs;
                    ds.setAttribute("position", new Gs(F, 3));
                    const O = new Is(ds, this.lightningMaterialBase.clone());
                    O.material.opacity = .6, O.userData.life = .16 + Math.random() * .12, this.scene.add(O), this.activeLightningLines.push(O);
                }
            }
            const lt = 2;
            for(let v = -1; v <= lt; v++){
                const M = v === -1, z = M ? 0 : v % 2 === 0 ? 1 : -1, E = .55 + Math.random() * .45, Z = .35, Q = Math.random() * Math.PI * 2, T = [], V = K.length / 3;
                for(let A = 0; A < V; A++){
                    const F = A / (V - 1), $ = .35 + .85 * F, R = Math.sin(F * Math.PI * 2 + Q) * Z * (.2 + .8 * F), ss = f * z * E * $ + Bs * R * .3, ts = C * z * E * $ + R * .05, es = Bs * z * E * $ - f * R * .3, ds = A * 3 + 0, O = A * 3 + 1, ps = A * 3 + 2, ks = K[ds], _s = K[O], Es = K[ps];
                    M ? T.push(ks + (Math.random() - .5) * .05, _s + (Math.random() - .5) * .05, Es + (Math.random() - .5) * .05) : T.push(ks + ss + (Math.random() - .5) * .2, _s + ts + (Math.random() - .5) * .2, Es + es + (Math.random() - .5) * .2);
                }
                const q = new cs;
                q.setAttribute("position", new Gs(T, 3));
                const L = new Is(q, this.lightningMaterialBase.clone());
                L.material.opacity = M ? .95 : .32, L.userData.life = .22 + Math.random() * .18, this.scene.add(L), this.activeLightningLines.push(L);
            }
        }
        triggerLightningFlash() {
            const t = this.camera.position.x + (Math.random() - .5) * 30, e = 34 + Math.random() * 6, a = -10 - Math.random() * 20;
            this.createLightningBolt(t, e, a);
        }
    }
    class Ot {
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
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((t, e, a)=>{
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
    class Xt {
        constructor(){
            this.gameDir = "vert", this.gameStarting = !1, this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class Jt {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const e = Js, a = performance.now(), i = 200;
            function s(o) {
                const n = Math.min(1, (o - a) / i), r = 1 - Math.pow(1 - n, 4), h = Math.round(e + (t - e) * r);
                Yt.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(s) : Js = t;
            }
            requestAnimationFrame(s);
        }
    }
    const Yt = document.getElementById("meters-float");
    let Js = 0;
    console.clear();
    let Ss, Kt = new ws, $s, bs, rs, S, g, _, os, D, J;
    const ns = new At;
    ns.background = new H(13230580);
    const b = new St(25, window.innerWidth / window.innerHeight, .1, 2e3);
    b.position.z = 7;
    b.position.y = 2;
    const gs = Ft();
    let xs = new Lt;
    document.body.appendChild(xs.dom);
    xs.dom.style.top = "0px";
    xs.dom.style.left = "48%";
    const j = new Bt;
    j.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(j.domElement);
    j.shadowMap.enabled = !1;
    j.outputColorSpace = Ht;
    j.toneMapping = kt;
    j.toneMappingExposure = 1.05;
    st();
    window.addEventListener("resize", st, !1);
    function st() {
        gs ? (b.aspect = document.body.offsetWidth / document.body.offsetHeight, b.updateProjectionMatrix(), j.setSize(innerWidth, innerHeight)) : (b.aspect = document.body.offsetWidth / document.body.offsetHeight, b.updateProjectionMatrix(), j.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function Zt(l) {
        const t = await Tt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Ss = new t.World(new t.Vector3(0, -9.81, 0)), $s = new t.EventQueue(!0), S = new N(Ss, t), J = new Jt(b), _ = new Nt, rs = new qt(ns, b, j, D, gs, _), g = new Ut(ns, _, S, j, b, gs, D, rs);
        for(let e = 0; e < l; e++)g.players.push(new Wt(ns, _, g, D, b));
        os = new Vt(g, gs, j, b, D), os.addKeyListeners();
    }
    async function Qt() {
        await rs.loadWorld(), await _.loadAudio(), _.backAudio.play(), _.oceanAudio.play();
    }
    async function $t(l, t = t) {
        await g.createLevel(l, t = t), await g.loadEnvironments(), await g.loadPlayers(), g.objs.grassPlanes.data.length > 0 && g.objs.grassPlanes.data.forEach((e, a)=>{
            g.objs.grassPlanes.data[a].userData.collide.setCollisionGroups(js([
                0
            ], [
                1
            ]));
        }), g.players.length > 0 && g.players.forEach((e, a)=>{
            g.players[a].player.userData.collider.setCollisionGroups(js([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function se(l, t, e = !1, a = !0) {
        te(), bs.toggleLoader(!0), D = new Xt, await Zt(l), g.gameNum = t, await Qt(), await $t(e, a = a), setTimeout(()=>{
            bs.showScreen("hud"), bs.toggleLoader(!1), D.dataLoaded = !0, D.gameStarting = !0;
        }, 300);
    }
    bs = new Ot(se);
    function te() {
        b.position.z = 7, b.position.y = 2, b.position.x = 0, j.toneMappingExposure = 1.05, os?.removedKeyListeners(), rs = null, S = null, g = null, _ = null, os = null, D = null, J = null;
    }
    function ee() {
        if (D.dataLoaded) {
            D.gameDir == "hor" ? J.updateMetersFloat(b.position.x - J.startX) : J.updateMetersFloat(b.position.y - J.startY), g.players.forEach((l, t, e)=>{
                l.playerMove();
            }), rs.updateLighting(), g.levelAnimate(b), g.cameraMove(b), xs.update();
            for(let l = 0, t = S.dynamicBodies.length; l < t; l++)S.dynamicBodies[l][0].position.copy(S.dynamicBodies[l][1].translation()), S.dynamicBodies[l][0].quaternion.copy(S.dynamicBodies[l][1].rotation());
            S.updateInstancedTransforms(), Ss.step($s), j.render(ns, b);
        }
    }
    let Cs = 0;
    const Ys = 1 / 60, Ks = .1;
    j.setAnimationLoop(()=>{
        if (D != null) {
            let l = Kt.getDelta();
            for(l > Ks && (l = Ks), Cs += l; Cs >= Ys;)ee(), Cs -= Ys;
        }
    });
})();

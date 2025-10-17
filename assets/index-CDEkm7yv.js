import { B as Y, V as d, Q as ls, M as pt, a as ws, b as _, c as as, d as N, G as Ss, E as S, C as T, S as Ms, I as k, D as H, e as ut, f as js, O as Bs, T as $s, R as os, g as st, P as ms, A as ct, h as mt, i as yt, j as bs, k as E, l as bt, m as gt, n as ft, o as j, p as wt, q as jt, H as xt, r as Pt, s as Dt, L as vt, t as ys, u as is, v as Mt, w as Fs, x as Rs, W as Ct, y as At, z as zt, F as St, J as Is, K as Gs, N as Lt, U as Bt, X as Ws, Y as Us, Z as kt, _ as Ht, $ as _t, a0 as Tt, a1 as Et, a2 as Ft, a3 as Rt } from "./three-CFgFKQNV.js";
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
    const It = "modulepreload", Gt = function(h, t) {
        return new URL(h, t).href;
    }, Ns = {}, Wt = function(t, i, e) {
        let a = Promise.resolve();
        if (i && i.length > 0) {
            let l = function(u) {
                return Promise.all(u.map((p)=>Promise.resolve(p).then((c)=>({
                            status: "fulfilled",
                            value: c
                        }), (c)=>({
                            status: "rejected",
                            reason: c
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = n?.nonce || n?.getAttribute("nonce");
            a = l(i.map((u)=>{
                if (u = Gt(u, e), u in Ns) return;
                Ns[u] = !0;
                const p = u.endsWith(".css"), c = p ? '[rel="stylesheet"]' : "";
                if (!!e) for(let m = o.length - 1; m >= 0; m--){
                    const f = o[m];
                    if (f.href === u && (!p || f.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${u}"]${c}`)) return;
                const y = document.createElement("link");
                if (y.rel = p ? "stylesheet" : It, p || (y.as = "script"), y.crossOrigin = "", y.href = u, r && y.setAttribute("nonce", r), document.head.appendChild(y), p) return new Promise((m, f)=>{
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
        return a.then((o)=>{
            for (const n of o || [])n.status === "rejected" && s(n.reason);
            return t().catch(s);
        });
    };
    function w(h, t) {
        return Math.random() * (t - h) + h;
    }
    function Ut() {
        let h = window.matchMedia || window.msMatchMedia;
        return h ? h("(pointer:coarse)").matches : !1;
    }
    function Vs(h) {
        return h.reduce((t, i)=>t | 1 << i, 0);
    }
    function xs(h, t) {
        const i = Vs(h), e = Vs(t);
        return "0x" + ((i & 65535) << 16 | e & 65535).toString(16).padStart(8, "0");
    }
    function qs(h) {
        const t = h.collisionGroups(), i = t >>> 16 & 65535, e = t & 65535;
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
    function Nt(h) {
        return typeof h == "number" ? new d(h, h, h) : h?.isVector3 ? h : new d(h?.x ?? 1, h?.y ?? 1, h?.z ?? 1);
    }
    function Os(h) {
        return h?.userData?.id ?? h?.uuid ?? h?.id;
    }
    const Vt = new Y(new d(-.5, -.5, -.5), new d(.5, .5, .5)), Xs = new pt, Js = new ls;
    function Ys(h) {
        if (h?.isObject3D) {
            if (h.updateMatrixWorld(!0), h.geometry?.isBufferGeometry) {
                const a = h.geometry;
                if (a.boundingBox || a.computeBoundingBox(), a.boundingBox) {
                    const s = a.boundingBox.clone();
                    return s.applyMatrix4(h.matrixWorld), s;
                }
            }
            return new Y().setFromObject(h);
        }
        const t = h.position ?? h.pos ?? new d, i = Nt(h.size ?? 1), e = h.quaternion?.isQuaternion ? h.quaternion : h.rotation?.isEuler ? Js.setFromEuler(h.rotation) : Js.set(0, 0, 0, 1);
        return Xs.compose(t, e, i), Vt.clone().applyMatrix4(Xs);
    }
    function U(h, t) {
        const i = Ys(h), e = Os(h);
        for(let a = t.length - 1; a >= 0; a--){
            const s = t[a], o = Os(s);
            if (e !== void 0 && o !== void 0 && e === o) continue;
            if (Ys(s).intersectsBox(i)) return s;
        }
        return null;
    }
    function qt(h) {
        for(h.traverse((t)=>{
            t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((i)=>i.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose();
        }); h.children.length > 0;)h.remove(h.children[0]);
    }
    class Ot {
        constructor(t, i, e, a, s){
            this.scene = t, this.audioClass = i, this.levelClass = e, this.paramsClass = a, this.camera = s, this.playerHeight = .9, this.playerWidth = .5, this.player = new ws(new _(this.playerWidth, this.playerHeight, this.playerWidth), new as({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.player.userData.finish = !1, this.playerModel, this.playerOut = new ws(new _(this.playerWidth, this.playerHeight + .1, this.playerWidth), new N({
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
            await new Ss().loadAsync("models/players/player1.glb").then((e)=>{
                const a = e.scene;
                this.playerModel = a, this.playerModel.traverse(function(s) {
                    s.isMesh && (s.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(s) {
                    s.isMesh && (s.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if ((this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround) && console.log("finish"), U(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [t, i] = qs(this.player.userData.collider);
                i[0] == 0 && this.player.userData.collider.setCollisionGroups(xs([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, i] = qs(this.player.userData.collider);
                i[0] != 0 && this.player.userData.collider.setCollisionGroups(xs([
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
            ]))), U(this.player, this.levelClass.objs.topPlanes.data) || U(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.paramsClass.gameDir == "hor" && this.levelClass.canHorDie && (this.player.userData.lives = 0, this.reLiveField(), this.levelClass.needDeath(this.player)), this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY) * 1.3 && this.player.userData.live && (this.player.userData.lives = 0, this.reLiveField(), this.levelClass.needDeath(this.player)), !this.levelClass.canHorDie && this.camera.position.x > 1 && this.camera.position.x < 12 && this.paramsClass.gameDir == "hor" && (this.levelClass.canHorDie = !0), this.player.position.y < -4 && this.paramsClass.gameStarting) this.wor, this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                "back"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.paramsClass.gameStarting = !1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (console.log(this.levelClass.gameNum), this.levelClass.gameNum == 2 || this.levelClass.gameNum == 1 ? this.player.userData.lives-- : (this.levelClass.gameNum == 4 || this.levelClass.gameNum == 3) && (this.player.userData.lives = 0), this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((t)=>!t.player.userData.live) && this.levelClass.players.every((t)=>t.player.userData.lives < 1) && this.paramsClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0, this.paramsClass.gameStarting = !1)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((t, i, e)=>{
                t.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.playMusic([
                "back"
            ])), this.player.userData.live || (this.player.userData.body.setLinvel(new d(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((t)=>t.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new d(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + .1, this.player.userData.deadPos.z)), this.player.userData.deadPos = new d(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1)), this.reLiveField();
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, i = this.player.userData.readyJump ? -Math.PI / 2 : 0, e = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, a = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, s = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, l = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, s, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, l, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
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
            if (this.player.userData.canFlyJumps) {
                const t = this.levelClass.boostHatModels[this.player.userData.canFlyNum];
                this.player.userData.head, t.userData.originalScale || (t.userData.originalScale = t.scale.clone()), t.parent !== this.scene && this.scene.attach(t);
                const i = new d().setFromMatrixPosition(this.player.userData.head.matrixWorld), e = new ls;
                this.player.userData.head.getWorldQuaternion(e);
                const a = new ls().setFromEuler(new S(0, Math.PI / 2, 0)), s = e.clone().multiply(a), n = new d(-.03, .2, .02).clone().applyQuaternion(s);
                t.quaternion.copy(s), t.position.copy(i).add(n), t.children[0].children[1].rotation.y += .4;
            }
        }
        lerp(t, i, e) {
            return t + (i - t) * e;
        }
        playerAliving(t) {
            this.paramsClass.allDie = !1, t && (this.levelClass.canHorDie = !1, this.player.userData.deadPos = this.player.userData.startPos, this.player.userData.lives = 3), this.player.userData.playerAlive = !0, setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 100);
        }
        reLiveField() {
            let t = document.querySelectorAll(".player_panel_bottom_lives")[this.levelClass.players.findIndex((i, e, a)=>i.player == this.player)].children;
            for(let i = 0; i < t.length; i++)i > this.player.userData.lives - 1 ? t[i].classList.add("hidden_screen") : t[i].classList.contains("hidden_screen") && t[i].classList.remove("hidden_screen");
        }
    }
    class Xt {
        constructor(t, i, e, a, s, o, n, r){
            this.scene = t, this.audioClass = i, this.physicsClass = e, this.renderer = a, this.camera = s, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.randomNoFric = .3, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.canHorDie = !1, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this._dayColor = new T(16777215), this._nightColor = new T(16771488), this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (p, c)=>({
                            position: new d(0, -10, 0),
                            rotation: new S(0, 0, 0),
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
                    geometryPlane: new _(this.planeWidth, this.planeHeight, this.planeDepth),
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
                            rotation: new S(0, 0, 0),
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
                    geometryPlaneTop: new _(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new N({
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
                            rotation: new S(0, 0, 0),
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
                    geometryPlaneGrass: new _(this.planeWidth, .5, this.planeDepth + .2),
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
                            rotation: new S(0, 0, 0),
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
                    geometryPlaneSensor: new _(this.planeWidth, .4, 1.2),
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
                            rotation: new S(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new _(.3, 1, .3),
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
                            rotation: new S(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new Ms(.32, 24, 16),
                    materialPlafon: new N({
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
                            rotation: new S(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new Ms(.3),
                    materialBulb: new N({
                        emissive: new T(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                },
                livesBlocks: {
                    data: Array.from({
                        length: this.count
                    }, (p, c)=>({
                            position: new d(0, -10, 0),
                            rotation: new S(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.3, .3, .3),
                            userData: {
                                name: "liveBlock"
                            }
                        })),
                    geometryLivesBlock: new Ms(.3),
                    materialLivesBlock: new N({
                        color: 16711680
                    }),
                    livesBlock: null
                }
            }, this.objs.planes.plane = new k(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(H), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new k(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(H), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new k(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(H), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new k(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(H), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new k(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(H), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new k(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(H), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new k(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(H), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.livesBlocks.livesBlock = new k(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count), this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(H), this.objs.livesBlocks.livesBlock.frustumCulled = !1, this.objs.plafons.materialPlafon.onBeforeCompile = (p)=>{
                p.uniforms.fresnelPower = {
                    value: 2.5
                }, p.fragmentShader = p.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const l = new Float32Array(this.count);
            for(let p = 0; p < this.count; p++)l[p] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new ut(l, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (p)=>{
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
                const P = c.getContext("2d"), y = P.createRadialGradient(p / 2, p / 2, 0, p / 2, p / 2, p / 2);
                y.addColorStop(0, "rgba(255, 235, 175, 1)"), y.addColorStop(1, "rgba(255, 235, 175, 0)"), P.fillStyle = y, P.fillRect(0, 0, p, p);
                const m = new bt(c);
                return m.anisotropy = 1, m.generateMipmaps = !1, m.needsUpdate = !0, m;
            }
            this._glowTex = u(), this._emissive = l, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new d(-1, 0, 0), this.rightEdge = new d(1, 0, 0), this.leftEdge.unproject(s), this.rightEdge.unproject(s), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new js, this.menuInGame();
        }
        toVec3(t) {
            return typeof t == "number" ? new d(t, t, t) : t?.isVector3 ? t : t ? new d(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new d(1, 1, 1);
        }
        apply(t, i, e) {
            let a = e.userData.invBaseSize;
            if (!a) {
                const r = e.geometry;
                r.computeBoundingBox();
                const l = new d;
                r.boundingBox.getSize(l), a = e.userData.invBaseSize = new d(1 / (l.x || 1), 1 / (l.y || 1), 1 / (l.z || 1));
            }
            this._dummy ||= new Bs;
            const s = this._dummy, o = i[t] || {}, n = this.toVec3(o.size);
            s.position.copy(o.position || new d), o.rotation ? s.rotation.copy(o.rotation) : s.rotation.set(0, 0, 0), s.scale.set(n.x * a.x, n.y * a.y, n.z * a.z), s.updateMatrix(), e.setMatrixAt(t, s.matrix);
        }
        async loadTexture() {
            const t = new $s;
            t.load("textures/plane.jpg", (i)=>{
                const e = new N({
                    map: i,
                    transparent: !0,
                    opacity: 1
                });
                i.wrapS = os, i.wrapT = os, i.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = e;
            }, void 0, function(i) {
                console.error("An error happened.");
            }), t.load("textures/grass.jpg", (i)=>{
                const e = new N({
                    map: i
                });
                i.wrapS = os, i.wrapT = os, i.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = e;
            }, void 0, function(i) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let t = new _(.5, .7, 1), i = new st({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new ws(t, i), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = w(8, 13) / 100, this.angryBird.userData.flying = !1, this.angryBird.position.y = -5, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(t, i) {
            if (this.levelsMode = t, this.maxHeight = 0, this.birdFlyingMark = 10, this.birdYes = i, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((e, a, s)=>{
                document.querySelectorAll(".player_panel")[a].classList.remove("hidden_screen");
            }), t) {
                this.players[0].player.userData.lives = 0;
                let e = -2.5, a = -5;
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
                        let o = w(this.planeWidth, this.planeWidth - 1), n = e + o / 2 + w(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = w(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s == 0 ? (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.planes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : s == 1 ? (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : s == this.count - 1 ? (this.objs.planes.data[s].size.x = 5, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = 5 + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = 5 + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s == 0 ? (r = 1 - this.planeHeight / 1.5, this.objs.planes.data[s].position.x = 0, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = 0, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = 0, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : s == 1 ? (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5) : (this.objs.planes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new ms(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
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
                        let o = w(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[s].userData.direction = 1 : this.objs.grassPlanes.data[s].userData.direction = -1;
                        let n = a + w(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = n - 1.3, this.objs.grassPlanes.data[s].position.y = n, this.objs.sensorPlanes.data[s].position.y = n - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > 0 ? (this.objs.topPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.sensorPlanes.data[s].size.x = o + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.grassPlanes.data[s].userData.speed = w(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new ms(16247464, 0, 4);
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
                        let o = w(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), n = e + o / 2 + w(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = w(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, s > this.count - 10 ? (this.objs.planes.data[s].size.x = .1, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = .2 + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = .2 + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : s > 0 ? (this.objs.planes.data[s].size.x = o, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = o + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s == 0) r = 1 - this.planeHeight / 1.5, this.objs.planes.data[s].position.x = 0, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = 0, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = 0, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5;
                        else if (s == 1) n = 6, this.objs.planes.data[s].position.x = n, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5;
                        else if (s > 1 && (this.objs.planes.data[s].position.x = n, this.objs.planes.data[s].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = n, this.objs.topPlanes.data[s].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = n, this.objs.grassPlanes.data[s].position.y = r + this.planeHeight / 1.5, Math.random() < .05 && (this.objs.livesBlocks.data[s].position.x = n - this.objs.grassPlanes.data[s].size.x / 2 + this.objs.livesBlocks.data[s].size.x / 2, this.objs.livesBlocks.data[s].position.y = r + this.planeHeight / 1.5 + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.livesBlocks.data[s].size.y / 2), (s + 1) % 10 === 0)) {
                            let l = this.boostHatModel.clone();
                            l.position.x = n, l.position.y = this.objs.topPlanes.data[s].position.y + 2, l.rotation.y = -Math.PI / 2, l.userData.num = s, this.boostHatModels.push(l), this.boostHatMeshes.push(l.children[0].children[0].children[0]), this.boostHatCoords.push([
                                l.position.x,
                                l.position.y
                            ]), this.scene.add(l);
                        }
                        if (this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new ms(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(s, this.objs.planes.data, this.objs.planes.plane), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), e = n + o / 2;
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
                        let o = w(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[s].userData.direction = 1 : this.objs.grassPlanes.data[s].userData.direction = -1;
                        let n = a + w(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = n - 1.3, this.objs.grassPlanes.data[s].position.y = n, this.objs.sensorPlanes.data[s].position.y = n - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > this.count - 10 && (this.objs.topPlanes.data[s].size.x = o / 8 + .1, this.objs.grassPlanes.data[s].size.x = o / 8 + .1, this.objs.sensorPlanes.data[s].size.x = o / 8 + .4), s > 0 ? (this.objs.topPlanes.data[s].size.x = o + .3, this.objs.grassPlanes.data[s].size.x = o + .3, this.objs.sensorPlanes.data[s].size.x = o + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), s > this.count - 10 ? this.objs.grassPlanes.data[s].userData.speed = w(10, 14) / 100 : this.objs.grassPlanes.data[s].userData.speed = w(6, 10) / 100, this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, (s + 1) % 7 === 0) {
                            let r = this.boostHatModel.clone();
                            r.position.x = w(this.bounds.leftX + 1, this.bounds.rightX - 1), r.position.y = this.objs.topPlanes.data[s].position.y + .5, this.boostHatModels.push(r), this.boostHatMeshes.push(r.children[0].children[0].children[0]), this.boostHatCoords.push([
                                r.position.x,
                                r.position.y
                            ]), this.scene.add(r);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const r = new ms(16247464, 0, 4);
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
            const i = new d(-1, 0, .5), e = new d(1, 0, .5), a = new d(0, 1, .5), s = new d(0, -1, .5);
            if (i.unproject(this.camera), e.unproject(this.camera), a.unproject(this.camera), s.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = i.clone().sub(o).normalize(), r = e.clone().sub(o).normalize(), l = a.clone().sub(o).normalize(), u = s.clone().sub(o).normalize(), p = (t - o.z) / n.z, c = (t - o.z) / u.z, P = o.clone().add(n.multiplyScalar(p)), y = o.clone().add(r.multiplyScalar(p)), m = o.clone().add(l.multiplyScalar(c)), f = o.clone().add(u.multiplyScalar(c));
                this.bounds = {
                    leftX: P.x,
                    rightX: y.x,
                    topY: m.y,
                    bottomY: f.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let t = !1;
                for(let i = 0; i < this.objs.grassPlanes.data.length; i++){
                    const e = this.objs.grassPlanes.data[i], a = e.userData.body, s = e.userData.moveHor, o = e.userData.moveVert;
                    if (!(!s && !o || !a)) {
                        if (s) {
                            const n = a.translation(), r = s.x1 + s.w1 + e.size.x * .5, l = s.x2 - s.w2 - e.size.x * .5, u = e.userData.speed ?? .05;
                            n.x >= l && (e.userData.direction = -1), n.x <= r && (e.userData.direction = 1);
                            const p = e.userData.direction * u, c = n.x + p;
                            a.setNextKinematicTranslation({
                                x: c,
                                y: n.y,
                                z: n.z
                            }), e.position.x = c, this.objs.lamps.data[i].position.x = c, this.objs.plafons.data[i].position.x = c, this.objs.bulbs.data[i].position.x = c, this.objs.topPlanes.data[i].position.x = c;
                        } else if (o) {
                            const n = a.translation(), r = 2, l = .5, u = e.userData.speed ?? .03;
                            n.y >= r && (e.userData.direction = -1), n.y <= l && (e.userData.direction = 1);
                            const p = e.userData.direction * u, c = n.y + p;
                            a.setNextKinematicTranslation({
                                x: n.x,
                                y: c,
                                z: n.z
                            }), e.position.y = c, this.objs.lamps.data[i].position.y = c + this.objs.lamps.lampHeight, this.objs.plafons.data[i].position.y = c + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[i].position.y = c + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[i].position.y = c + .2;
                        }
                        this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb), t = !0;
                    }
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
            await new Ss().loadAsync("models/bird/bird.glb").then((e)=>{
                const a = e.scene, s = e.animations;
                a.scale.x = 2, a.scale.y = 2, a.scale.z = 2, a.position.y = 0, a.rotation.y = -Math.PI / 3, this.angryBirdModel = a, this.angryBirdModel.userData.mixer = new ct(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(s[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new js;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1, this.birdYes && this.scene.add(this.angryBirdModel);
            });
        }
        async loadBoostsModel() {
            await new Ss().loadAsync("models/boosts/hat.glb").then((e)=>{
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
            }), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : this.objs.grassPlanes.data[t].userData.moveHor ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && t > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[t].userData.noFriction = !0, this.objs.grassPlanes.data[t].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(t, new T(13421806))), t > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(t, new T(16711680)), t == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(t, new T(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.paramsClass.gameStarting && (this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0)), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((t, i, e)=>{
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
            const t = new mt(new yt({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: bs
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
                        const l = this.lights.shift();
                        s.pointLight = l, s.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(s.glow);
                    }
                    if (s.pointLight) {
                        const l = s.pointLight;
                        l.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), s.glow.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 0);
                        const u = n ? this.lightIntensity : 0;
                        l.intensity = E.lerp(l.intensity, u, .15);
                        const p = n ? 1 : 0;
                        this._emissive[r] = E.lerp(this._emissive[r], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .5 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(c);
                        const P = 1.1, y = this._emissive[r], m = 1 + P * y, f = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[r];
                        C.userData._lastBulbFactor !== m && (C.size.set(f.x * m, f.y * m, f.z * m), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = m, t = !0), !n && l.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(l), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let e = !1;
                this.objs.plafons.data.forEach((a, s)=>{
                    const o = a.pointLight;
                    o && (o.intensity = E.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), a.pointLight = null, a.userData.light = !1, a.glow && (this.scene.remove(a.glow), this.glowPool.push(a.glow), a.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), e = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0);
                    const n = 1.1, r = this._emissive[s], l = 1 + n * r, u = this.objs.bulbs.baseSize, p = this.objs.bulbs.data[s];
                    p.userData._lastBulbFactor !== l && (p.size.set(u.x * l, u.y * l, u.z * l), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), p.userData._lastBulbFactor = l, t = !0);
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), e && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const e = this.camera.position.y - this.bounds.topY / 2, a = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((s, o)=>{
                    s.pointLight;
                    const n = s.position.y >= e && s.position.y <= a, r = o;
                    if (n && !s.pointLight && this.lights.length > 0) {
                        const l = this.lights.shift();
                        s.pointLight = l, s.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(s.glow);
                    }
                    if (s.pointLight) {
                        const l = s.pointLight;
                        l.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), s.glow.position.copy(s.position);
                        const u = n ? this.lightIntensity : 0;
                        l.intensity = E.lerp(l.intensity, u, .15);
                        const p = n ? 1 : 0;
                        this._emissive[r] = E.lerp(this._emissive[r], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .8 + this._emissive[r] * .8;
                        s.glow && s.glow.scale.setScalar(c);
                        const P = 1, y = this._emissive[r], m = 1 + P * y, f = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[r];
                        C.userData._lastBulbFactor !== m && (C.size.set(f.x * m, f.y * m, f.z * m), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = m, t = !0), !n && l.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(l), s.pointLight = null, s.glow && (this.glowPool.push(s.glow), this.scene.remove(s.glow), s.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let e = !1;
                this.objs.plafons.data.forEach((a, s)=>{
                    const o = a.pointLight;
                    !a.pointLight && this._emissive[s] === 0 || (o && (o.intensity = E.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), a.pointLight = null, a.userData.light = !1, a.glow && (this.scene.remove(a.glow), this.glowPool.push(a.glow), a.glow = null))), this.objs.plafons.plafon.setColorAt(s, this._dayColor), e = !0, this._emissive && this._emissive.length > s && (this._emissive[s] = 0));
                }), e && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
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
            ]), this.players.forEach((i, e, a)=>{
                i.player.position.y > 0 && (i.player.userData.body.setTranslation(new d(0, -5, 0)), i.player.userData.body.setLinvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0), i.player.userData.live = !1);
            }));
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
                    this.paramsClass.gameStarting && (t.position.y += this.cameraSpeed), t.position.x = 0, this.cameraSpeed += 1e-6, console.log(this.bounds.rightX), t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 4:
                    this.paramsClass.gameStarting && (t.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), t.position.x = 0, t.position.z = this.isMobile ? 25 : 32, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
            }
        }
        damp(t, i, e, a) {
            return t + (i - t) * (1 - Math.exp(-e * a));
        }
        spring(t, i, e, a, s) {
            const o = 2 / a, n = o * s, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let l = t - i;
            const u = (e + o * l) * s, p = (e - o * u) * r;
            return {
                newPos: i + (l + u) * r,
                newVel: p
            };
        }
        showPopupInGame(t) {
            this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.looseAudio.play(), !t || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), this.showScreen("popup_in_game");
        }
        menuInGame = ()=>{
            document.querySelector(".popup_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.boostHatModels.forEach((t, i, e)=>{
                    t.userData.fly = !1;
                }), this.players[0].playerAliving(!1), this.players[0].player.userData.lives = 1, this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1);
            }), document.querySelector(".popup_game_btn2").addEventListener("click", ()=>{
                this.players.forEach((t, i, e)=>{
                    t.playerAliving(!0);
                }), (this.gameNum == 1 || this.gameNum == 3) && (this.camera.position.z = 7, this.camera.position.y = 2, this.camera.position.x = 0, this.cameraSpeed = .01), this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((t, i, e)=>{
                    t.position.x = this.boostHatCoords[i][0], t.position.y = this.boostHatCoords[i][1], t.userData.fly = !1;
                }), this.hideScreen("popup_in_game"), this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]);
            }), document.querySelector(".popup_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((t, i, e)=>{
                    t.playerAliving(!0);
                }), this.paramsClass.dataLoaded = !1, qt(this.scene), this.audioClass.stopMusic(0);
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
            this.world = t, this.RAPIER = i, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Bs;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const i = t.geometry;
            i.computeBoundingBox();
            const e = new d;
            i.boundingBox.getSize(e);
            const a = new d(1 / (e.x || 1), 1 / (e.y || 1), 1 / (e.z || 1));
            return t.userData.invBase = a, a;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new d(t, t, t) : t?.isVector3 ? t.clone() : new d(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, i, e) {
            const a = V._toVec3(e.size), s = V._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = e.quaternion?.isQuaternion ? e.quaternion : new ls, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.x, s.y, s.z).setRotation({
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
            }), n = a.quaternion?.isQuaternion ? a.quaternion : new ls, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), l = this.RAPIER.ColliderDesc.cuboid(s.x / 2, s.y / 2, s.z / 2).setFriction(1.6).setRestitution(0);
            t[e].userData.body = r, t[e].userData.shape = l, t[e].userData.collide = this.world.createCollider(l, r), this.instancedBodies.push({
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
                t.rotation.set(0, 0, 0), new Y().setFromObject(t);
                const s = As(t);
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
                t.rotation.set(0, 0, 0), new Y().setFromObject(t);
                const s = As(t);
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
                t.rotation.set(0, 0, 0), new Y().setFromObject(t);
                const s = As(t);
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
    const Cs = new d;
    function As(h) {
        if (h.isMesh && h.geometry) {
            const i = h.geometry;
            return i.boundingBox || i.computeBoundingBox(), i.boundingBox.getSize(Cs), Cs.multiply(h.scale), Cs.clone();
        }
        return new Y().setFromObject(h).getSize(new d);
    }
    class Jt {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.rainAudio, this.thunderAudio, this.thunderAudio2, this.thunderAudio3, this.thundersAudio = [], this.inwaterAudio, this.takeAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.quacks = [], this.musics = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2;
        }
        async loadAudio() {
            const t = new gt, i = new ft;
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
    class Yt {
        constructor(t, i, e, a, s){
            this.levelClass = t, this.isMobile = i, this.renderer = e, this.camera = a, this.paramsClass = s, this.mouse = new d, this.raycaster = new wt;
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
    class Kt {
        constructor(t, i, e, a, s, o){
            this.scene = t, this.camera = i, this.renderer = e, this.paramsClass = a, this.isMobile = s, this.audioClass = o, this.ambientLight = new jt(11184810, 1), this.hemiLight = new xt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Pt(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Bs, this.dirLight.target = this.targetObject, this.helper = new Dt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x, this.thunder = !1, this.thunderStart = !1, this.isThunderActive = !1, this.thunderEndTimestampMs = 0, this.nextThunderFlashTimestampMs = 0, this.minThunderIntervalMs = 1e3, this.maxThunderIntervalMs = 3e3, this.currentThunderIndex = 0, this.rain = !1, this.rainStart = !1, this.activeLightningLines = [], this.lightningMaterialBase = new vt({
                color: 16777215,
                transparent: !0,
                opacity: 1,
                blending: bs,
                depthWrite: !1
            }), this.clock = new js, this.deltaSeconds, this.lightningFade = 0, this.rainDropCount = 1500, this.rainAreaHalfWidth = 25, this.rainAreaHalfDepth = 20, this.rainTopY = 10, this.rainBottomY = -4, this.rainGeometry = new ys, this.rainPositions = new Float32Array(this.rainDropCount * 3), this.rainVelocities = new Float32Array(this.rainDropCount), this.rainWindPhase = new Float32Array(this.rainDropCount);
        }
        async loadRain() {
            for(let i = 0; i < this.rainDropCount; i++){
                const e = i * 3;
                this.rainPositions[e + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[e + 1] = Math.random() * (this.rainTopY - this.rainBottomY) + this.rainBottomY, this.rainPositions[e + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainVelocities[i] = 15 + Math.random() * 25, this.rainWindPhase[i] = Math.random() * Math.PI * 2;
            }
            const t = new Float32Array(this.rainDropCount * 3);
            for(let i = 0; i < this.rainDropCount; i++){
                const e = .8 + Math.random() * .2;
                t[i * 3 + 0] = .7 * e, t[i * 3 + 1] = .8 * e, t[i * 3 + 2] = 1 * e;
            }
            this.rainGeometry.setAttribute("position", new is(this.rainPositions, 3)), this.rainGeometry.setAttribute("color", new is(t, 3)), this.rainStreakTex = this.makeRainStreakTexture(), this.rainMaterial = new Mt({
                color: 15658751,
                vertexColors: !0,
                map: this.rainStreakTex,
                alphaTest: .83,
                transparent: !0,
                opacity: .84,
                size: 10,
                sizeAttenuation: !1,
                depthWrite: !1,
                blending: bs
            }), this.rainPoints = new Fs(this.rainGeometry, this.rainMaterial), this.rainPoints.layers.set(1);
        }
        async loadWaterSky() {
            this.waterGeometry = new Rs(900, 500), this.water = new Ct(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new $s().load("textures/waternormals.jpg", function(l) {
                    l.wrapS = l.wrapT = os;
                }),
                sunDirection: new d,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new d, this.sky = new At, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new ws(new Rs(1e4, 1e4), new st({
                color: 526362,
                side: zt,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const i = 1500, e = new Float32Array(i * 3), a = new Float32Array(i), s = new Float32Array(i * 3);
            for(let l = 0; l < i; l++){
                e[3 * l] = Math.random() * 600 - 300, e[3 * l + 1] = Math.random() * 150 - 100, e[3 * l + 2] = Math.random() * 300 - 500, a[l] = Math.random() * 2 + .7;
                const u = new T().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                s[3 * l] = u.r, s[3 * l + 1] = u.g, s[3 * l + 2] = u.b;
            }
            const o = new ys;
            o.setAttribute("position", new is(e, 3)), o.setAttribute("size", new is(a, 1)), o.setAttribute("color", new is(s, 3));
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
            this.materialStars = new St({
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
                blending: bs
            }), this.stars = new Fs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const t = this.camera.position.x, i = Math.sign(t - this._prevCamX);
            this._prevCamX = i, this.stars.position.x = this.camera.position.x;
            const e = E.degToRad(90 - this.parameters.elevation), a = E.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, e, a), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 && !this.thunder ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : (this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 || this.thunder) && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .01), this.thunder && (this.blackSky.material.opacity = 0), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.thunder || (this.parameters.elevation += .003), this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.thunder || (this.parameters.elevation -= .003), this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.thunder || (this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), this.parameters.elevation < 2 && !this.rainStart && (this.rain = !0, this.startRain(), this.audioClass.rainAudio.play(), this.rainStart = !0), this.parameters.elevation < -4.1 && !this.thunderStart && (this.thunder = !0, this.startThunder(), this.thunderStart = !0), this.parameters.elevation < -2 ? this.night = !0 : (this.night = !1, this.thunderStart = !1, this.rain && this.parameters.elevation >= -1 && (this.audioClass.rainAudio.stop(), this.rainStart = !1, this.scene.remove(this.rainPoints), this.rain = !1))), this.paramsClass.gameDir == "vert") {
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
                    const r = n * 3, l = Math.sin(this.rainWindPhase[n] + performance.now() * .002) * .35 + a * .4;
                    this.rainPositions[r + 0] += l * this.deltaSeconds * 6, this.rainPositions[r + 1] -= this.rainVelocities[n] * (1 + Math.abs(a) * .3) * this.deltaSeconds, s + this.rainPositions[r + 0], o + this.rainPositions[r + 2], this.rainPositions[r + 1] < this.rainBottomY && (this.rainPositions[r + 1] = this.rainTopY, this.rainPositions[r + 0] = (Math.random() - .5) * this.rainAreaHalfWidth * 2, this.rainPositions[r + 2] = (Math.random() - .5) * this.rainAreaHalfDepth * 2 - 35, this.rainWindPhase[n] = Math.random() * Math.PI * 2), this.rainPositions[r + 0] > this.rainAreaHalfWidth && (this.rainPositions[r + 0] -= this.rainAreaHalfWidth * 2), this.rainPositions[r + 0] < -this.rainAreaHalfWidth && (this.rainPositions[r + 0] += this.rainAreaHalfWidth * 2), this.rainPositions[r + 2] > this.rainAreaHalfDepth && (this.rainPositions[r + 2] -= this.rainAreaHalfDepth * 2 - 35), this.rainPositions[r + 2] < -this.rainAreaHalfDepth && (this.rainPositions[r + 2] += this.rainAreaHalfDepth * 2 - 35);
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
            const a = t + (Math.random() - .5) * 6, s = -4 + Math.random() * 3, o = e + (Math.random() - .5) * 6, n = a - t, r = s - i, l = o - e, u = Math.hypot(n, r, l) || 1, p = n / u, c = r / u, P = l / u, y = n / u, f = -(l / u), C = 0, ks = y, it = Math.abs(c) > .9 ? new d(1, 0, 0) : new d(0, 1, 0), Hs = new d(p, c, P), ds = new d().crossVectors(Hs, it).normalize(), Ds = new d().crossVectors(Hs, ds).normalize(), at = 2 + Math.random() * 2, ot = 1.2, nt = Math.random() * Math.PI * 2, rt = 3 + Math.random() * 2.5, lt = .8, ht = Math.random() * Math.PI * 2, vs = 28, ps = 4, K = [];
            for(let v = 0; v <= vs; v++){
                const M = v / vs, A = 1 - M;
                let R = t + n * M, Z = i + r * M, Q = e + l * M;
                const I = Math.sin(M * Math.PI * at + nt) * ot * (.3 + .7 * A), q = Math.sin(M * Math.PI * rt + ht) * lt * (.3 + .7 * A), O = (Math.random() - .5) * 2 * ps * A, B = (Math.random() - .5) * 1.6 * ps * A, z = Math.random() < .12 ? (Math.random() - .5) * 3.5 * A : 0;
                if (R += ds.x * (I + O + z) + Ds.x * (q + B * .7), Z += ds.y * (I + O * .5) + Ds.y * (q + B * .5), Q += ds.z * (I + O + z) + Ds.z * (q + B * .7), K.push(R, Z, Q), v > 3 && v < vs - 3 && Math.random() < .22) {
                    const G = [], $ = 3 + Math.floor(Math.random() * 2), W = .25 + Math.random() * .35;
                    let ss = R, ts = Z, es = Q;
                    G.push(ss, ts, es);
                    for(let cs = 1; cs <= $; cs++)ss += (Math.random() - .5) * ps * W, ts += -(.8 + Math.random() * .8) * W, es += (Math.random() - .5) * ps * W, G.push(ss, ts, es);
                    const us = new ys;
                    us.setAttribute("position", new Is(G, 3));
                    const X = new Gs(us, this.lightningMaterialBase.clone());
                    X.material.opacity = .6, X.userData.life = .16 + Math.random() * .12, this.scene.add(X), this.activeLightningLines.push(X);
                }
            }
            const dt = 2;
            for(let v = -1; v <= dt; v++){
                const M = v === -1, A = M ? 0 : v % 2 === 0 ? 1 : -1, R = .55 + Math.random() * .45, Z = .35, Q = Math.random() * Math.PI * 2, I = [], q = K.length / 3;
                for(let z = 0; z < q; z++){
                    const G = z / (q - 1), $ = .35 + .85 * G, W = Math.sin(G * Math.PI * 2 + Q) * Z * (.2 + .8 * G), ss = f * A * R * $ + ks * W * .3, ts = C * A * R * $ + W * .05, es = ks * A * R * $ - f * W * .3, us = z * 3 + 0, X = z * 3 + 1, cs = z * 3 + 2, _s = K[us], Ts = K[X], Es = K[cs];
                    M ? I.push(_s + (Math.random() - .5) * .05, Ts + (Math.random() - .5) * .05, Es + (Math.random() - .5) * .05) : I.push(_s + ss + (Math.random() - .5) * .2, Ts + ts + (Math.random() - .5) * .2, Es + es + (Math.random() - .5) * .2);
                }
                const O = new ys;
                O.setAttribute("position", new Is(I, 3));
                const B = new Gs(O, this.lightningMaterialBase.clone());
                B.material.opacity = M ? .95 : .32, B.userData.life = .22 + Math.random() * .18, this.scene.add(B), this.activeLightningLines.push(B);
            }
        }
        triggerLightningFlash() {
            const t = this.camera.position.x + (Math.random() - .5) * 30, i = 34 + Math.random() * 6, e = -10 - Math.random() * 20;
            this.createLightningBolt(t, i, e);
        }
        makeRainStreakTexture() {
            const e = new Uint8Array(128);
            for(let s = 0; s < 32; s++){
                const o = Math.sin(s / 31 * Math.PI);
                for(let n = 0; n < 1; n++){
                    const r = (s * 1 + n) * 4;
                    e[r + 0] = 255, e[r + 1] = 255, e[r + 2] = 255, e[r + 3] = Math.round(o * 255);
                }
            }
            const a = new Lt(e, 1, 32, Bt);
            return a.needsUpdate = !0, a.magFilter = Ws, a.minFilter = Ws, a.wrapS = Us, a.wrapT = Us, a.rotation = Math.PI / 2, a.center.set(.5, .5), a;
        }
    }
    class Zt {
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
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((t, i, e)=>{
                t.addEventListener("click", ()=>{
                    this.hideScreen("levels_game_screen"), this.initMatch(1, 1, i + 1, !0);
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
    class Qt {
        constructor(){
            this.gameDir = "vert", this.gameStarting = !1, this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class $t {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const i = Ks, e = performance.now(), a = 200;
            function s(o) {
                const n = Math.min(1, (o - e) / a), r = 1 - Math.pow(1 - n, 4), l = Math.round(i + (t - i) * r);
                se.textContent = String(l).padStart(3, "0"), n < 1 ? requestAnimationFrame(s) : Ks = t;
            }
            requestAnimationFrame(s);
        }
    }
    const se = document.getElementById("meters-float");
    let Ks = 0;
    console.clear();
    let Ls, te = new js, tt, gs, hs, L, g, F, ns, D, J;
    const rs = new kt;
    rs.background = new T(13230580);
    const b = new Ht(25, window.innerWidth / window.innerHeight, .1, 2e3);
    b.position.z = 7;
    b.position.y = 2;
    const fs = Ut();
    let Ps = new _t;
    document.body.appendChild(Ps.dom);
    Ps.dom.style.top = "0px";
    Ps.dom.style.left = "48%";
    const x = new Tt;
    x.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(x.domElement);
    x.shadowMap.enabled = !0;
    x.shadowMap.type = Et;
    x.outputColorSpace = Ft;
    x.toneMapping = Rt;
    x.toneMappingExposure = 1.05;
    et();
    window.addEventListener("resize", et, !1);
    function et() {
        fs ? (b.aspect = document.body.offsetWidth / document.body.offsetHeight, b.updateProjectionMatrix(), x.setSize(innerWidth, innerHeight)) : (b.aspect = document.body.offsetWidth / document.body.offsetHeight, b.updateProjectionMatrix(), x.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function ee(h) {
        const t = await Wt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Ls = new t.World(new t.Vector3(0, -9.81, 0)), tt = new t.EventQueue(!0), L = new V(Ls, t), J = new $t(b), F = new Jt, hs = new Kt(rs, b, x, D, fs, F), g = new Xt(rs, F, L, x, b, fs, D, hs);
        for(let i = 0; i < h; i++)g.players.push(new Ot(rs, F, g, D, b));
        ns = new Yt(g, fs, x, b, D), ns.addKeyListeners();
    }
    async function ie() {
        await hs.loadWorld(), await F.loadAudio(), F.backAudio.play(), F.oceanAudio.play();
    }
    async function ae(h, t = t) {
        await g.createLevel(h, t = t), await g.loadEnvironments(), await g.loadPlayers(), g.objs.grassPlanes.data.length > 0 && g.objs.grassPlanes.data.forEach((i, e)=>{
            g.objs.grassPlanes.data[e].userData.collide.setCollisionGroups(xs([
                0
            ], [
                1
            ]));
        }), g.players.length > 0 && g.players.forEach((i, e)=>{
            g.players[e].player.userData.collider.setCollisionGroups(xs([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function oe(h, t, i = !1, e = !0) {
        ne(), gs.toggleLoader(!0), D = new Qt, await ee(h), g.gameNum = t, await ie(), await ae(i, e = e), setTimeout(()=>{
            gs.showScreen("hud"), gs.toggleLoader(!1), D.dataLoaded = !0, D.gameStarting = !0;
        }, 300);
    }
    gs = new Zt(oe);
    function ne() {
        b.position.z = 7, b.position.y = 2, b.position.x = 0, x.toneMappingExposure = 1.05, ns?.removedKeyListeners(), hs = null, L = null, g = null, F = null, ns = null, D = null, J = null;
    }
    function re() {
        if (D.dataLoaded) {
            D.gameDir == "hor" ? J.updateMetersFloat(b.position.x - J.startX) : J.updateMetersFloat(b.position.y - J.startY), g.players.forEach((h, t, i)=>{
                h.playerMove();
            }), hs.updateLighting(), g.levelAnimate(b), g.cameraMove(b), Ps.update();
            for(let h = 0, t = L.dynamicBodies.length; h < t; h++)L.dynamicBodies[h][0].position.copy(L.dynamicBodies[h][1].translation()), L.dynamicBodies[h][0].quaternion.copy(L.dynamicBodies[h][1].rotation());
            L.updateInstancedTransforms(), Ls.step(tt), x.render(rs, b);
        }
    }
    let zs = 0;
    const Zs = 1 / 60, Qs = .1;
    x.setAnimationLoop(()=>{
        if (D != null) {
            let h = te.getDelta();
            for(h > Qs && (h = Qs), zs += h; zs >= Zs;)re(), zs -= Zs;
        }
    });
})();

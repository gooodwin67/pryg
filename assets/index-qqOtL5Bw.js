import { B as R, V as d, Q as Z, M as xs, a as J, b as M, c as G, d as E, G as ss, C, S as is, E as S, I as L, D as k, e as Ps, f as ts, O as as, T as ys, R as I, g as bs, P as N, A as Ds, h as vs, i as Ms, j as gs, k as z, l as Cs, m as zs, n as As, o as x, p as Ss, q as Ls, H as ks, r as Bs, s as _s, t as os, W as Hs, u as Es, v as Ts, w as Rs, x as Y, y as Fs, z as Gs, F as Is, J as Us, K as Ws, L as Ns, N as qs, U as Vs, X as Os } from "./three-C-epTDnC.js";
(async ()=>{
    (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload")) return;
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);
        new MutationObserver((e)=>{
            for (const t of e)if (t.type === "childList") for (const o of t.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && a(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function i(e) {
            const t = {};
            return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
        }
        function a(e) {
            if (e.ep) return;
            e.ep = !0;
            const t = i(e);
            fetch(e.href, t);
        }
    })();
    const Js = "modulepreload", Xs = function(l, s) {
        return new URL(l, s).href;
    }, ns = {}, Ks = function(s, i, a) {
        let e = Promise.resolve();
        if (i && i.length > 0) {
            let h = function(c) {
                return Promise.all(c.map((p)=>Promise.resolve(p).then((u)=>({
                            status: "fulfilled",
                            value: u
                        }), (u)=>({
                            status: "rejected",
                            reason: u
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), r = n?.nonce || n?.getAttribute("nonce");
            e = h(i.map((c)=>{
                if (c = Xs(c, a), c in ns) return;
                ns[c] = !0;
                const p = c.endsWith(".css"), u = p ? '[rel="stylesheet"]' : "";
                if (!!a) for(let m = o.length - 1; m >= 0; m--){
                    const w = o[m];
                    if (w.href === c && (!p || w.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${c}"]${u}`)) return;
                const b = document.createElement("link");
                if (b.rel = p ? "stylesheet" : Js, p || (b.as = "script"), b.crossOrigin = "", b.href = c, r && b.setAttribute("nonce", r), document.head.appendChild(b), p) return new Promise((m, w)=>{
                    b.addEventListener("load", m), b.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${c}`)));
                });
            }));
        }
        function t(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return e.then((o)=>{
            for (const n of o || [])n.status === "rejected" && t(n.reason);
            return s().catch(t);
        });
    };
    function j(l, s) {
        return Math.random() * (s - l) + l;
    }
    function Ys() {
        let l = window.matchMedia || window.msMatchMedia;
        return l ? l("(pointer:coarse)").matches : !1;
    }
    function rs(l) {
        return l.reduce((s, i)=>s | 1 << i, 0);
    }
    function X(l, s) {
        const i = rs(l), a = rs(s);
        return "0x" + ((i & 65535) << 16 | a & 65535).toString(16).padStart(8, "0");
    }
    function ls(l) {
        const s = l.collisionGroups(), i = s >>> 16 & 65535, a = s & 65535;
        function e(t) {
            const o = [];
            for(let n = 0; n < 16; n++)t & 1 << n && o.push(n);
            return o;
        }
        return [
            e(i),
            e(a)
        ];
    }
    function Qs(l) {
        return typeof l == "number" ? new d(l, l, l) : l?.isVector3 ? l : new d(l?.x ?? 1, l?.y ?? 1, l?.z ?? 1);
    }
    function hs(l) {
        return l?.userData?.id ?? l?.uuid ?? l?.id;
    }
    const $s = new R(new d(-.5, -.5, -.5), new d(.5, .5, .5)), ds = new xs, ps = new Z;
    function us(l) {
        if (l?.isObject3D) {
            if (l.updateMatrixWorld(!0), l.geometry?.isBufferGeometry) {
                const e = l.geometry;
                if (e.boundingBox || e.computeBoundingBox(), e.boundingBox) {
                    const t = e.boundingBox.clone();
                    return t.applyMatrix4(l.matrixWorld), t;
                }
            }
            return new R().setFromObject(l);
        }
        const s = l.position ?? l.pos ?? new d, i = Qs(l.size ?? 1), a = l.quaternion?.isQuaternion ? l.quaternion : l.rotation?.isEuler ? ps.setFromEuler(l.rotation) : ps.set(0, 0, 0, 1);
        return ds.compose(s, a, i), $s.clone().applyMatrix4(ds);
    }
    function B(l, s) {
        const i = us(l), a = hs(l);
        for(let e = s.length - 1; e >= 0; e--){
            const t = s[e], o = hs(t);
            if (a !== void 0 && o !== void 0 && a === o) continue;
            if (us(t).intersectsBox(i)) return t;
        }
        return null;
    }
    function Zs(l) {
        for(l.traverse((s)=>{
            s.geometry && s.geometry.dispose(), s.material && (Array.isArray(s.material) ? s.material.forEach((i)=>i.dispose()) : s.material.dispose()), s.material && s.material.map && s.material.map.dispose();
        }); l.children.length > 0;)l.remove(l.children[0]);
    }
    class st {
        constructor(s, i, a, e, t){
            this.scene = s, this.audioClass = i, this.levelClass = a, this.paramsClass = e, this.camera = t, this.playerHeight = .9, this.playerWidth = .5, this.player = new J(new M(this.playerWidth, this.playerHeight, this.playerWidth), new G({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.player.userData.finish = !1, this.playerModel, this.playerOut = new J(new M(this.playerWidth, this.playerHeight + .1, this.playerWidth), new E({
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
            await new ss().loadAsync("models/players/player1.glb").then((a)=>{
                const e = a.scene;
                this.playerModel = e, this.playerModel.traverse(function(t) {
                    t.isMesh && (t.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(t) {
                    t.isMesh && (t.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if ((this.paramsClass.gameDir == "hor" && this.player.position.x > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.x - this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].size.x / 2 && this.player.userData.onGround || this.paramsClass.gameDir == "vert" && this.player.position.y > this.levelClass.objs.grassPlanes.data[this.levelClass.count - 1].position.y + .5 && this.player.userData.onGround) && console.log("finish"), B(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, i] = ls(this.player.userData.collider);
                i[0] == 0 && this.player.userData.collider.setCollisionGroups(X([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, i] = ls(this.player.userData.collider);
                i[0] != 0 && this.player.userData.collider.setCollisionGroups(X([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && B(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(B(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(B(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(B(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0, this.audioClass.takeAudio.isPlaying && this.audioClass.stopMusic([
                "take"
            ]), this.audioClass.playMusic([
                "take"
            ]))), this.player.userData.canFlyJumps && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].position.copy(new d(this.player.userData.head.getWorldPosition(new d).x - .03, this.player.userData.head.getWorldPosition(new d).y + .2, this.player.userData.head.getWorldPosition(new d).z + 0)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].children[0].children[1].rotation.y += .4), B(this.player, this.levelClass.objs.topPlanes.data) || B(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.paramsClass.gameDir == "hor" && (this.player.userData.lives = 0, this.levelClass.needDeath(this.player)), this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY) * 2 && this.player.userData.live && (this.player.userData.lives = 0, this.levelClass.needDeath(this.player)), this.player.position.y < -4) this.levelClass.players.length < 2 ? (this.player.userData.live && (this.audioClass.pauseMusic([
                "back"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.levelClass.levelsMode ? (this.player.userData.lives = 0, this.levelClass.showPopupInGame(!0), this.paramsClass.allDie = !0) : (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0), this.paramsClass.gameStarting = !1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.paramsClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.showPopupInGame(!1), this.paramsClass.allDie = !0, this.paramsClass.gameStarting = !1)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, i, a)=>{
                s.userData.fly = !1;
            }), this.playerAliving(!1), this.audioClass.playMusic([
                "back"
            ])), this.player.userData.live || (this.player.userData.body.setLinvel(new d(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((s)=>s.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new d(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + .3, this.player.userData.deadPos.z)), this.player.userData.deadPos = new d(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1));
            else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, i = this.player.userData.readyJump ? -Math.PI / 2 : 0, a = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, e = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, t = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, r = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, a, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, t, .1), this.head.position.y = this.lerp(this.head.position.y, r, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const c = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, c, .4);
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
        lerp(s, i, a) {
            return s + (i - s) * a;
        }
        playerAliving(s) {
            this.paramsClass.allDie = !1, s && (this.player.userData.deadPos = this.player.userData.startPos, this.player.userData.lives = 3), this.player.userData.playerAlive = !0, setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 100);
        }
    }
    class tt {
        constructor(s, i, a, e, t, o, n, r){
            this.scene = s, this.audioClass = i, this.physicsClass = a, this.renderer = e, this.camera = t, this.isMobile = o, this.paramsClass = n, this.worldClass = r, this.cameraSpeed = .01, this.levelsMode = !1, this.levelsNoFric = !1, this.randomNoFric = 0, this.randomAnimateHor = .2, this.randomAnimateVert = .2, this.canShowAds = !0, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.angryBird, this.birdFlyingMark = 10, this.distanceToBird = 20, this.angryBirdModel, this.maxHeight = 0, this.birdYes = !0, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this._dayColor = new C(16777215), this._nightColor = new C(16771488), this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (p, u)=>({
                            position: new d(0, 0, 0),
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
                    geometryPlane: new M(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new G({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (p, u)=>({
                            position: new d(0, 0, 0),
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
                    geometryPlaneTop: new M(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new E({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (p, u)=>({
                            position: new d(0, 0, 0),
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
                    geometryPlaneGrass: new M(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new G({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (p, u)=>({
                            position: new d(0, 0, 0),
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
                    geometryPlaneSensor: new M(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new G({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (p, u)=>({
                            position: new d(0, 0, 0),
                            rotation: new S(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new M(.3, 1, .3),
                    materialLamp: new G({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (p, u)=>({
                            position: new d(0, 0, 0),
                            rotation: new S(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new is(.32, 24, 16),
                    materialPlafon: new E({
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
                    }, (p, u)=>({
                            position: new d(0, 0, 0),
                            rotation: new S(0, 0, 0),
                            scale: new d(1, 1, 1),
                            size: new d(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new is(.3),
                    materialBulb: new E({
                        emissive: new C(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                }
            }, this.objs.planes.plane = new L(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(k), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new L(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(k), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new L(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(k), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new L(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(k), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new L(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(k), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new L(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(k), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new L(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(k), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.plafons.materialPlafon.onBeforeCompile = (p)=>{
                p.uniforms.fresnelPower = {
                    value: 2.5
                }, p.fragmentShader = p.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const h = new Float32Array(this.count);
            for(let p = 0; p < this.count; p++)h[p] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new Ps(h, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (p)=>{
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
            function c(p = 64) {
                const u = document.createElement("canvas");
                u.width = u.height = p;
                const D = u.getContext("2d"), b = D.createRadialGradient(p / 2, p / 2, 0, p / 2, p / 2, p / 2);
                b.addColorStop(0, "rgba(255, 235, 175, 1)"), b.addColorStop(1, "rgba(255, 235, 175, 0)"), D.fillStyle = b, D.fillRect(0, 0, p, p);
                const m = new Cs(u);
                return m.anisotropy = 1, m.generateMipmaps = !1, m.needsUpdate = !0, m;
            }
            this._glowTex = c(), this._emissive = h, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new d(-1, 0, 0), this.rightEdge = new d(1, 0, 0), this.leftEdge.unproject(t), this.rightEdge.unproject(t), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 800
            }, this.dt = new ts, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new d(s, s, s) : s?.isVector3 ? s : s ? new d(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new d(1, 1, 1);
        }
        apply(s, i, a) {
            let e = a.userData.invBaseSize;
            if (!e) {
                const r = a.geometry;
                r.computeBoundingBox();
                const h = new d;
                r.boundingBox.getSize(h), e = a.userData.invBaseSize = new d(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new as;
            const t = this._dummy, o = i[s] || {}, n = this.toVec3(o.size);
            t.position.copy(o.position || new d), o.rotation ? t.rotation.copy(o.rotation) : t.rotation.set(0, 0, 0), t.scale.set(n.x * e.x, n.y * e.y, n.z * e.z), t.updateMatrix(), a.setMatrixAt(s, t.matrix);
        }
        async loadTexture() {
            const s = new ys;
            s.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (i)=>{
                const a = new E({
                    map: i,
                    transparent: !0,
                    opacity: 1
                });
                i.wrapS = I, i.wrapT = I, i.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = a;
            }, void 0, function(i) {
                console.error("An error happened.");
            }), s.load("textures/123.jpg", (i)=>{
                const a = new E({
                    map: i
                });
                i.wrapS = I, i.wrapT = I, i.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = a;
            }, void 0, function(i) {
                console.error("An error happened.");
            });
        }
        async loadBarriers() {
            let s = new M(.5, .3, 1), i = new bs({
                color: 52224,
                transparent: !0,
                opacity: 0
            });
            this.angryBird = new J(s, i), this.angryBird.userData.name = "bird", this.angryBird.userData.speed = .1, this.angryBird.userData.flying = !1, this.angryBird.position.y = 20, this.physicsClass.addPhysicsToObject(this.angryBird);
        }
        async createLevel(s, i) {
            if (console.log("createlevel"), this.levelsMode = s, this.maxHeight = 0, this.birdFlyingMark = 10, this.birdYes = i, await this.loadTexture(), await this.loadBarriers(), await this.loadBoostsModel(), await this.loadBirdModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((a, e, t)=>{
                document.querySelectorAll(".player_panel")[e].classList.remove("hidden_screen");
            }), this.birdYes && this.scene.add(this.angryBirdModel), s) {
                this.players[0].player.userData.lives = 0;
                let a = -2.5;
                switch(s){
                    case 1:
                        this.birdYes = !1, this.count = 3, this.paramsClass.gameDir = "hor", this.levelsNoFric = !0, this.randomAnimateHor = 0, this.randomAnimateVert = 0;
                        break;
                    case 2:
                        this.birdYes = !0, this.count = 10, this.paramsClass.gameDir = "vert", this.randomAnimateHor = 0, this.randomAnimateVert = 0;
                        break;
                }
                if (this.paramsClass.gameDir == "hor") {
                    for(let e = 0; e < this.count; e++){
                        let t = j(this.planeWidth, this.planeWidth - 1), o = a + t / 2 + j(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = j(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e == 0 ? (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.planes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : e == 1 ? (this.objs.planes.data[e].size.x = t, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = t + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = t + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : e == this.count - 1 ? (this.objs.planes.data[e].size.x = 5, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = 5 + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = 5 + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = t, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = t + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = t + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (n = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5) : e == 1 ? (this.objs.planes.data[e].position.x = o + this.fixedDistanceHor.min / 4, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5) : (this.objs.planes.data[e].position.x = o + this.fixedDistanceHor.min / 4, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = o + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = o + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const r = new N(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), a = o + t / 2;
                    }
                    for(let e = 0; e < this.count; e++)e > 4 && e < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[e - 1].userData.moveHor && (this.objs.grassPlanes.data[e].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10), e > 7 && e < this.count - 2 && Math.random() < this.randomAnimateVert && (this.objs.grassPlanes.data[e].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10);
                } else if (this.paramsClass.gameDir == "vert") {
                    let e = -5;
                    this.birdYes = !1;
                    for(let t = 0; t < this.count; t++){
                        let o = j(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[t].userData.direction = 1 : this.objs.grassPlanes.data[t].userData.direction = -1;
                        let n = e + j(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[t].position.y = n - 1.3, this.objs.grassPlanes.data[t].position.y = n, this.objs.sensorPlanes.data[t].position.y = n - .3, this.objs.topPlanes.data[t].size.y = .3, this.objs.grassPlanes.data[t].size.y = .7, this.objs.sensorPlanes.data[t].size.y = .9, t > 0 ? (this.objs.topPlanes.data[t].size.x = o + .3, this.objs.grassPlanes.data[t].size.x = o + .3, this.objs.sensorPlanes.data[t].size.x = o + .7) : (this.objs.topPlanes.data[t].size.x = 10, this.objs.grassPlanes.data[t].size.x = 10, this.objs.sensorPlanes.data[t].size.x = 10), this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.grassPlanes.data[t].userData.speed = j(6, 10) / 100, this.lights.length < this.lightsCount) {
                            const r = new N(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), e = n;
                    }
                }
                this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.paramsClass.gameDir == "vert" && (this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0), this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.paramsClass.gameDir == "hor" && this.scene.add(this.objs.planes.plane), this.paramsClass.gameDir == "vert" && this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
            } else switch(this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let a = -2.5;
                    for(let t = 0; t < this.count; t++){
                        let o = j(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), n = a + o / 2 + j(this.fixedDistanceHor.min, this.fixedDistanceHor.max), r = j(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (t > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, t > this.count - 10 ? (this.objs.planes.data[t].size.x = .1, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = .2 + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = .2 + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : t > 0 ? (this.objs.planes.data[t].size.x = o, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = o + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = o + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[t].size.x = this.planeWidth, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = this.planeWidth + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), t == 0) r = 1 - this.planeHeight / 1.5, this.objs.planes.data[t].position.x = 0, this.objs.planes.data[t].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = 0, this.objs.topPlanes.data[t].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = 0, this.objs.grassPlanes.data[t].position.y = r + this.planeHeight / 1.5;
                        else if (t == 1) n = 6, this.objs.planes.data[t].position.x = n, this.objs.planes.data[t].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = n, this.objs.topPlanes.data[t].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = n, this.objs.grassPlanes.data[t].position.y = r + this.planeHeight / 1.5;
                        else if (t > 1 && (this.objs.planes.data[t].position.x = n, this.objs.planes.data[t].position.y = r + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = n, this.objs.topPlanes.data[t].position.y = r + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = n, this.objs.grassPlanes.data[t].position.y = r + this.planeHeight / 1.5, (t + 1) % 10 === 0)) {
                            let h = this.boostHatModel.clone();
                            h.position.x = n, h.position.y = this.objs.topPlanes.data[t].position.y + 2, h.rotation.y = -Math.PI / 2, h.userData.num = t, this.boostHatModels.push(h), this.boostHatMeshes.push(h.children[0].children[0].children[0]), this.boostHatCoords.push([
                                h.position.x,
                                h.position.y
                            ]), this.scene.add(h);
                        }
                        if (this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.lights.length < this.lightsCount) {
                            const h = new N(16247464, 0, 4);
                            h.position.set(0, 0, 1.6), this.lights.push(h), this.scene.add(h);
                        }
                        this.apply(t, this.objs.planes.data, this.objs.planes.plane), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), a = n + o / 2;
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
                    }, this.objs.planes.data[t].position.y = -10), this.objs.grassPlanes.data[t].position.y > this.maxHeight && (this.maxHeight = this.objs.grassPlanes.data[t].position.y);
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb), this.angryBird.position.y = 50, this.angryBird.position.x = 40, this.scene.add(this.angryBird);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let e = -5;
                    this.birdYes = !1;
                    for(let t = 0; t < this.count; t++){
                        let o = j(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[t].userData.direction = 1 : this.objs.grassPlanes.data[t].userData.direction = -1;
                        let n = e + j(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[t].position.y = n - 1.3, this.objs.grassPlanes.data[t].position.y = n, this.objs.sensorPlanes.data[t].position.y = n - .3, this.objs.topPlanes.data[t].size.y = .3, this.objs.grassPlanes.data[t].size.y = .7, this.objs.sensorPlanes.data[t].size.y = .9, t > this.count - 10 && (this.objs.topPlanes.data[t].size.x = o / 8 + .1, this.objs.grassPlanes.data[t].size.x = o / 8 + .1, this.objs.sensorPlanes.data[t].size.x = o / 8 + .4), t > 0 ? (this.objs.topPlanes.data[t].size.x = o + .3, this.objs.grassPlanes.data[t].size.x = o + .3, this.objs.sensorPlanes.data[t].size.x = o + .7) : (this.objs.topPlanes.data[t].size.x = 10, this.objs.grassPlanes.data[t].size.x = 10, this.objs.sensorPlanes.data[t].size.x = 10), t > this.count - 10 ? this.objs.grassPlanes.data[t].userData.speed = j(10, 14) / 100 : this.objs.grassPlanes.data[t].userData.speed = j(6, 10) / 100, this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, (t + 1) % 7 === 0) {
                            let r = this.boostHatModel.clone();
                            r.position.x = j(this.bounds.leftX + 1, this.bounds.rightX - 1), r.position.y = this.objs.topPlanes.data[t].position.y + .5, this.boostHatModels.push(r), this.boostHatMeshes.push(r.children[0].children[0].children[0]), this.boostHatCoords.push([
                                r.position.x,
                                r.position.y
                            ]), this.scene.add(r);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const r = new N(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), e = n;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
        }
        getHorizontalWorldBounds(s = 0) {
            const i = new d(-1, 0, .5), a = new d(1, 0, .5), e = new d(0, 1, .5), t = new d(0, -1, .5);
            if (i.unproject(this.camera), a.unproject(this.camera), e.unproject(this.camera), t.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = i.clone().sub(o).normalize(), r = a.clone().sub(o).normalize(), h = e.clone().sub(o).normalize(), c = t.clone().sub(o).normalize(), p = (s - o.z) / n.z, u = (s - o.z) / c.z, D = o.clone().add(n.multiplyScalar(p)), b = o.clone().add(r.multiplyScalar(p)), m = o.clone().add(h.multiplyScalar(u)), w = o.clone().add(c.multiplyScalar(u));
                this.bounds = {
                    leftX: D.x,
                    rightX: b.x,
                    topY: m.y,
                    bottomY: w.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let s = !1;
                for(let i = 0; i < this.objs.grassPlanes.data.length; i++){
                    const a = this.objs.grassPlanes.data[i], e = a.userData.body, t = a.userData.moveHor, o = a.userData.moveVert;
                    if (!(!t && !o || !e)) {
                        if (t) {
                            const n = e.translation(), r = t.x1 + t.w1 + a.size.x * .5, h = t.x2 - t.w2 - a.size.x * .5, c = a.userData.speed ?? .05;
                            n.x >= h && (a.userData.direction = -1), n.x <= r && (a.userData.direction = 1);
                            const p = a.userData.direction * c, u = n.x + p;
                            e.setNextKinematicTranslation({
                                x: u,
                                y: n.y,
                                z: n.z
                            }), a.position.x = u, this.objs.lamps.data[i].position.x = u, this.objs.plafons.data[i].position.x = u, this.objs.bulbs.data[i].position.x = u, this.objs.topPlanes.data[i].position.x = u;
                        } else if (o) {
                            const n = e.translation(), r = 2, h = .5, c = a.userData.speed ?? .03;
                            n.y >= r && (a.userData.direction = -1), n.y <= h && (a.userData.direction = 1);
                            const p = a.userData.direction * c, u = n.y + p;
                            e.setNextKinematicTranslation({
                                x: n.x,
                                y: u,
                                z: n.z
                            }), a.position.y = u, this.objs.lamps.data[i].position.y = u + this.objs.lamps.lampHeight, this.objs.plafons.data[i].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[i].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[i].position.y = u + .2;
                        }
                        this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb), s = !0;
                    }
                }
                s && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let s = 0; s < this.objs.grassPlanes.data.length; s++){
                    const i = this.objs.grassPlanes.data[s], a = this.objs.topPlanes.data[s];
                    this.objs.sensorPlanes.data[s], this.objs.lamps.data[s], this.objs.plafons.data[s], this.objs.bulbs.data[s];
                    const e = i.userData.body, t = i.userData.speed, o = e.translation();
                    o.x > this.bounds.rightX - i.size.x / 2 ? i.userData.direction = -1 : o.x < this.bounds.leftX + i.size.x / 2 && (i.userData.direction = 1);
                    const n = i.userData.direction * t, r = o.x + n;
                    s > 0 && e.setNextKinematicTranslation({
                        x: r,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[s].position.x = r, this.objs.lamps.data[s].position.x = r, this.objs.plafons.data[s].position.x = r, this.objs.bulbs.data[s].position.x = r, this.objs.topPlanes.data[s].position.x = r, this.objs.topPlanes.data[s].position.y = o.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), a.position.set(r, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBirdModel() {
            await new ss().loadAsync("models/bird/bird.glb").then((a)=>{
                const e = a.scene, t = a.animations;
                e.scale.x = 2, e.scale.y = 2, e.scale.z = 2, e.position.y = 20, e.rotation.y = -Math.PI / 3, this.angryBirdModel = e, this.angryBirdModel.userData.mixer = new Ds(this.angryBirdModel), this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(t[0]), this.angryBirdModel.userData.action.play(), this.angryBirdModel.userData.clock = new ts;
                const o = this.angryBirdModel.children[0].children[0].material;
                o.emissive.set(16777215), o.emissiveIntensity = .1;
            });
        }
        async loadBoostsModel() {
            await new ss().loadAsync("models/boosts/hat.glb").then((a)=>{
                const e = a.scene;
                this.boostHatModel = e, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
                const t = this.boostHatPropeller.children[0].material;
                t.emissive.set(16777215), t.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 17, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .035, this.boostHatModel.scale.y = .035, this.boostHatModel.scale.z = .035, this.boostHatModel.userData.fly = !1, this.boostHatModel.userData.num = 0;
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < this.randomNoFric && s > 2 && !this.levelsNoFric && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new C(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new C(16711680)), s == this.count - 1 && this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new C(65280));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.worldClass.night ? (this.paramsClass.gameDir == "hor" ? this.audioClass.dayNight(!1) : this.audioClass.dayNight(!1, "vert"), this.audioClass.dayNight(!1)) : this.audioClass.dayNight(!0), this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x && (this.canShowAds = !1), this.boostHatModels.forEach((s, i, a)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            }), this.angryBirdModel.position.copy(new d(this.angryBird.position.x, this.angryBird.position.y - .2, this.angryBird.position.z + .9)), this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta()), this.birdYes && (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && (this.angryBird.userData.body.setTranslation({
                x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                y: j(this.maxHeight - 1.5, this.maxHeight),
                z: this.angryBird.userData.body.translation().z
            }), this.birdFlyingMark = this.birdFlyingMark + this.distanceToBird, this.angryBird.userData.flying = !0), this.angryBird.userData.flying && (this.angryBird.userData.body.setNextKinematicTranslation({
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
            const s = new vs(new Ms({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: gs
            }));
            return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
        }
        lampsAnimate() {
            let s = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.x - this.bounds.rightX / 2, e = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((t, o)=>{
                    t.pointLight;
                    const n = t.position.x >= a && t.position.x <= e, r = o;
                    if (n && !t.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        t.pointLight = h, t.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(t.glow);
                    }
                    if (t.pointLight) {
                        const h = t.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), t.glow.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 0);
                        const c = n ? this.lightIntensity : 0;
                        h.intensity = z.lerp(h.intensity, c, .15);
                        const p = n ? 1 : 0;
                        this._emissive[r] = z.lerp(this._emissive[r], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .5 + this._emissive[r] * .8;
                        t.glow && t.glow.scale.setScalar(u);
                        const D = 1.1, b = this._emissive[r], m = 1 + D * b, w = this.objs.bulbs.baseSize, A = this.objs.bulbs.data[r];
                        A.userData._lastBulbFactor !== m && (A.size.set(w.x * m, w.y * m, w.z * m), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), A.userData._lastBulbFactor = m, s = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), t.pointLight = null, t.glow && (this.glowPool.push(t.glow), this.scene.remove(t.glow), t.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((e, t)=>{
                    const o = e.pointLight;
                    o && (o.intensity = z.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), e.pointLight = null, e.userData.light = !1, e.glow && (this.scene.remove(e.glow), this.glowPool.push(e.glow), e.glow = null))), this.objs.plafons.plafon.setColorAt(t, this._dayColor), a = !0, this._emissive && this._emissive.length > t && (this._emissive[t] = 0);
                    const n = 1.1, r = this._emissive[t], h = 1 + n * r, c = this.objs.bulbs.baseSize, p = this.objs.bulbs.data[t];
                    p.userData._lastBulbFactor !== h && (p.size.set(c.x * h, c.y * h, c.z * h), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), p.userData._lastBulbFactor = h, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const a = this.camera.position.y - this.bounds.topY / 2, e = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((t, o)=>{
                    t.pointLight;
                    const n = t.position.y >= a && t.position.y <= e, r = o;
                    if (n && !t.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        t.pointLight = h, t.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(t.glow);
                    }
                    if (t.pointLight) {
                        const h = t.pointLight;
                        h.position.set(this.objs.lamps.data[r].position.x, this.objs.lamps.data[r].position.y + 1, this.objs.lamps.data[r].position.z + 2), t.glow.position.copy(t.position);
                        const c = n ? this.lightIntensity : 0;
                        h.intensity = z.lerp(h.intensity, c, .15);
                        const p = n ? 1 : 0;
                        this._emissive[r] = z.lerp(this._emissive[r], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .8 + this._emissive[r] * .8;
                        t.glow && t.glow.scale.setScalar(u);
                        const D = 1, b = this._emissive[r], m = 1 + D * b, w = this.objs.bulbs.baseSize, A = this.objs.bulbs.data[r];
                        A.userData._lastBulbFactor !== m && (A.size.set(w.x * m, w.y * m, w.z * m), this.apply(r, this.objs.bulbs.data, this.objs.bulbs.bulb), A.userData._lastBulbFactor = m, s = !0), !n && h.intensity <= .01 && this._emissive[r] <= .02 && (this.lights.push(h), t.pointLight = null, t.glow && (this.glowPool.push(t.glow), this.scene.remove(t.glow), t.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let a = !1;
                this.objs.plafons.data.forEach((e, t)=>{
                    const o = e.pointLight;
                    !e.pointLight && this._emissive[t] === 0 || (o && (o.intensity = z.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), e.pointLight = null, e.userData.light = !1, e.glow && (this.scene.remove(e.glow), this.glowPool.push(e.glow), e.glow = null))), this.objs.plafons.plafon.setColorAt(t, this._dayColor), a = !0, this._emissive && this._emissive.length > t && (this._emissive[t] = 0));
                }), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        needDeath(s = !1) {
            s && s.position.y > -1 ? (this.audioClass.playMusic([
                "inwater"
            ]), s.userData.body.setTranslation(new d(0, -5, 0)), s.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), s.userData.live = !1) : s || (this.audioClass.playMusic([
                "inwater"
            ]), this.players.forEach((i, a, e)=>{
                i.player.position.y > 0 && (i.player.userData.body.setTranslation(new d(0, -5, 0)), i.player.userData.body.setLinvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0), i.player.userData.live = !1);
            }));
        }
        resetLevel() {}
        maxSpeed(s = !1) {
            let i;
            if (s ? i = this.players.filter((t, o, n)=>t.player.userData.live) : i = this.players, i.length === 0) return -1;
            let a = 0, e;
            this.paramsClass.gameDir == "vert" ? e = i[0].player.position.y : e = i[0].player.position.x;
            for(let t = 1; t < i.length; t++)i[t].player && i[t].player.userData.live && i[t].player.position && (this.paramsClass.gameDir == "vert" ? i[t].player.position.y > e && (e = i[t].player.position.y, a = t) : i[t].player.position.x > e && (e = i[t].player.position.x, a = t));
            return s ? this.players.indexOf(i[a], 0) : a;
        }
        async loadPlayers() {
            for(let s = 0; s < this.players.length; s++){
                let i = this.players[s];
                i.player.position.x = i.player.position.x - s * 1 + 1, this.physicsClass.addPhysicsToObject(i.player), this.paramsClass.gameDir == "vert" && (i.player.position.y = -0, i.player.userData.collider.setFriction(500)), await i.loadPlayerModel(), i.player.userData.startPos = i.player.position.clone(), this.scene.add(i.player), this.scene.add(i.playerOut), this.scene.add(i.playerModel), this.playerOuts.push(i.playerOut), s < this.players[0].playerColors.length ? i.head.children[0].material.color.set(this.players[0].playerColors[s]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), i.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > s ? i.player.userData.audio.push(this.audioClass.quacks[s].clone()) : i.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(s, i = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.paramsClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = this.isMobile ? 4 : 3, s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const a = this.maxSpeed(!0);
                        if (a >= 0) {
                            const e = this.players[a].player.position.x, t = this.cam.maxBackJump;
                            e < this.cam.targetX - t ? this.cam.targetX = this.cam.targetX - t : this.cam.targetX = e;
                            const o = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .25, i);
                            s.position.x = o.newPos, this.cam.velX = o.newVel, s.position.y = this.isMobile ? 4 : 3, s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                        }
                        break;
                    }
                case 3:
                    this.paramsClass.gameStarting && (s.position.y += this.cameraSpeed), s.position.x = 0, s.position.z = this.isMobile ? 20 : 22, this.cameraSpeed += 1e-6, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 4:
                    this.paramsClass.gameStarting && (s.position.y = this.players[this.maxSpeed()].player.position.y + 3.5), s.position.x = 0, s.position.z = (this.isMobile, 25), s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
            }
        }
        damp(s, i, a, e) {
            return s + (i - s) * (1 - Math.exp(-a * e));
        }
        spring(s, i, a, e, t) {
            const o = 2 / e, n = o * t, r = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = s - i;
            const c = (a + o * h) * t, p = (a - o * c) * r;
            return {
                newPos: i + (h + c) * r,
                newVel: p
            };
        }
        showPopupInGame(s) {
            this.audioClass.looseAudio.isPlaying && this.audioClass.looseAudio.stop(), this.audioClass.looseAudio.play(), !s || !this.canShowAds ? this.hideScreen("popup_game_btn1") : this.showScreen("popup_game_btn1"), this.showScreen("popup_in_game");
        }
        menuInGame = ()=>{
            document.querySelector(".popup_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.boostHatModels.forEach((s, i, a)=>{
                    s.userData.fly = !1;
                }), this.players[0].playerAliving(!1), this.audioClass.pauseMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]), this.levelsMode || (this.canShowAds = !1);
            }), document.querySelector(".popup_game_btn2").addEventListener("click", ()=>{
                this.players.forEach((s, i, a)=>{
                    s.playerAliving(!0);
                }), this.camera.position.z = 7, this.camera.position.y = 2, this.camera.position.x = 0, this.cameraSpeed = .01, this.canShowAds = !0, this.birdYes && setTimeout(()=>{
                    this.birdFlyingMark = 10, this.angryBird.userData.body.setTranslation({
                        x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird,
                        y: 20,
                        z: this.angryBird.userData.body.translation().z
                    }), this.angryBird.userData.flying = !1;
                }, 100), this.boostHatModels.forEach((s, i, a)=>{
                    s.position.x = this.boostHatCoords[i][0], s.position.y = this.boostHatCoords[i][1], s.userData.fly = !1;
                }), this.hideScreen("popup_in_game"), this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]);
            }), document.querySelector(".popup_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((s, i, a)=>{
                    s.playerAliving(!0);
                }), this.paramsClass.dataLoaded = !1, Zs(this.scene), this.audioClass.stopMusic(0);
            });
        };
        hideScreen(s) {
            document.querySelector(`.${s}`).classList.add("hidden_screen");
        }
        showScreen(s) {
            document.querySelector(`.${s}`).classList.remove("hidden_screen");
        }
    }
    class _ {
        constructor(s, i){
            this.world = s, this.RAPIER = i, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new as;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const i = s.geometry;
            i.computeBoundingBox();
            const a = new d;
            i.boundingBox.getSize(a);
            const e = new d(1 / (a.x || 1), 1 / (a.y || 1), 1 / (a.z || 1));
            return s.userData.invBase = e, e;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new d(s, s, s) : s?.isVector3 ? s.clone() : new d(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, i, a) {
            const e = _._toVec3(a.size), t = _._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = a.quaternion?.isQuaternion ? a.quaternion : new Z, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.x, t.y, t.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), r = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(r, n), this.instancedBodies.push({
                mesh: s,
                index: i,
                size: e,
                body: n
            });
        }
        addInstancedStatic(s, i, a, e) {
            const t = _._toVec3(e.size), o = _._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = e.quaternion?.isQuaternion ? e.quaternion : new Z, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setFriction(1.6).setRestitution(0);
            s[a].userData.body = r, s[a].userData.shape = h, s[a].userData.collide = this.world.createCollider(h, r), this.instancedBodies.push({
                mesh: i,
                index: a,
                size: t,
                body: r
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, i = new Set;
            for (const a of this.instancedBodies){
                const e = _._ensureInvBase(a.mesh), t = a.body.translation(), o = a.body.rotation();
                s.position.set(t.x, t.y, t.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(a.size.x * e.x, a.size.y * e.y, a.size.z * e.z), s.updateMatrix(), a.mesh.setMatrixAt(a.index, s.matrix), i.add(a.mesh);
            }
            for (const a of i)a.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let i, a;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new R().setFromObject(s);
                const t = $(s);
                s.rotation.copy(e), s.userData.size = t, s.userData.orgRotation = e, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = i, s.userData.shape = a;
                let o = i;
                a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(a, i);
                s.userData.collider = n, s.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    s,
                    i,
                    s.id
                ]);
            } else if (s != null && s.userData.name.includes("tops")) {
                let i, a;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new R().setFromObject(s);
                const t = $(s);
                s.rotation.copy(e), s.userData.size = t, s.userData.orgRotation = e, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setMass(1).setRestitution(0).setFriction(.3), a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(a, i);
                s.userData.body = i, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = i.handle, this.dynamicBodies.push([
                    s,
                    i,
                    s.id
                ]), s.userData.playerHandlesInside = new Set, this.allTops.push(s);
            } else if (s != null && s.userData.name.includes("bird")) {
                let i, a;
                const e = s.rotation.clone();
                s.rotation.set(0, 0, 0), new R().setFromObject(s);
                const t = $(s);
                s.rotation.copy(e), s.userData.size = t, s.userData.orgRotation = e, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setMass(1).setRestitution(1).setFriction(0), a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(a, i);
                s.userData.body = i, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = i.handle, this.dynamicBodies.push([
                    s,
                    i,
                    s.id
                ]);
            }
        }
    }
    const Q = new d;
    function $(l) {
        if (l.isMesh && l.geometry) {
            const i = l.geometry;
            return i.boundingBox || i.computeBoundingBox(), i.boundingBox.getSize(Q), Q.multiply(l.scale), Q.clone();
        }
        return new R().setFromObject(l).getSize(new d);
    }
    class et {
        constructor(){
            this.backAudio, this.backAudio2, this.backAudio3, this.oceanAudio, this.inwaterAudio, this.takeAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [], this.musics = [], this.musicDay = !0, this.musicNight = !1, this.timeToChange = 2;
        }
        async loadAudio() {
            const s = new zs, i = new As;
            await i.loadAsync("audio/back1.mp3").then((a)=>{
                this.backAudio = new x(s), this.backAudio.setBuffer(a), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back1",
                    music: this.backAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/back2.mp3").then((a)=>{
                this.backAudio2 = new x(s), this.backAudio2.setBuffer(a), this.backAudio2.setLoop(!0), this.backAudio2.setRefDistance(100), this.backAudio2.setVolume(2), this.musics.push({
                    name: "back2",
                    music: this.backAudio2
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/back3.mp3").then((a)=>{
                this.backAudio3 = new x(s), this.backAudio3.setBuffer(a), this.backAudio3.setLoop(!0), this.backAudio3.setRefDistance(100), this.backAudio3.setVolume(2), this.musics.push({
                    name: "back3",
                    music: this.backAudio3
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/ocean.wav").then((a)=>{
                this.oceanAudio = new x(s), this.oceanAudio.setBuffer(a), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/inwater.wav").then((a)=>{
                this.inwaterAudio = new x(s), this.inwaterAudio.setBuffer(a), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/loose.wav").then((a)=>{
                this.looseAudio = new x(s), this.looseAudio.setBuffer(a), this.looseAudio.setLoop(!1), this.looseAudio.setRefDistance(200), this.looseAudio.setVolume(1), this.musics.push({
                    name: "loose",
                    music: this.looseAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/take.wav").then((a)=>{
                this.takeAudio = new x(s), this.takeAudio.setBuffer(a), this.takeAudio.setLoop(!1), this.takeAudio.setRefDistance(200), this.takeAudio.setVolume(2), this.musics.push({
                    name: "take",
                    music: this.takeAudio
                });
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/ready-jump.wav").then((a)=>{
                this.readyJumpAudio = new x(s), this.readyJumpAudio.setBuffer(a), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(10), this.readyJumpAudio.setVolume(2), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/quack1.mp3").then((a)=>{
                this.jumpAudio = new x(s), this.jumpAudio.setBuffer(a), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/quack2.mp3").then((a)=>{
                this.jumpAudio2 = new x(s), this.jumpAudio2.setBuffer(a), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/quack3.mp3").then((a)=>{
                this.jumpAudio3 = new x(s), this.jumpAudio3.setBuffer(a), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), await i.loadAsync("audio/quack5.mp3").then((a)=>{
                this.jumpAudio4 = new x(s), this.jumpAudio4.setBuffer(a), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((a)=>{
                console.error("Ошибка при загрузке аудио:", a);
            }), this.musics.push({
                name: "back",
                music: this.backAudio
            });
        }
        stopMusic(s) {
            s == 0 ? this.musics.forEach((i, a, e)=>{
                i.music.stop();
            }) : s.forEach((i, a, e)=>{
                this.musics.find((t)=>t.name === i).music.stop();
            });
        }
        pauseMusic(s) {
            s.forEach((i, a, e)=>{
                this.musics.find((t)=>t.name === i).music.pause();
            });
        }
        playMusic(s) {
            s.forEach((i, a, e)=>{
                let t = this.musics.find((o)=>o.name === i).music;
                t.isPlaying || t.play();
            });
        }
        dayNight(s = !0, i = !1) {
            s && !this.musicDay ? this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), this.musics.find((a)=>a.name === "back").music = this.musics.find((a)=>a.name === "back1").music, this.playMusic([
                "back"
            ]), this.musicNight = !1, this.musicDay = !0, this.timeToChange = 2, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)) : !s && !this.musicNight && (this.timeToChange > 0 ? (this.timeToChange -= .01, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)) : (this.timeToChange = 0, this.stopMusic([
                "back"
            ]), console.log(i), this.musics.find((a)=>a.name === "back").music = this.musics.find((a)=>i ? a.name === "back3" : a.name === "back2").music, this.playMusic([
                "back"
            ]), this.musicNight = !0, this.musicDay = !1, this.timeToChange = 2, this.musics.find((a)=>a.name === "back").music.setVolume(this.timeToChange)));
        }
    }
    class at {
        constructor(s, i, a, e, t){
            this.levelClass = s, this.isMobile = i, this.renderer = a, this.camera = e, this.paramsClass = t, this.mouse = new d, this.raycaster = new Ss;
        }
        addKeyListeners() {
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
        }
        removedKeyListeners() {
            window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("mousedown", this.onKeyDown), window.removeEventListener("mouseup", this.onKeyUp), document.removeEventListener("touchend", this.onTapUp), document.removeEventListener("touchstart", this.onTapDown);
        }
        onTapDown = (s)=>{
            let i = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - i.left) / i.width * 2 - 1, this.mouse.y = -((s.clientY - i.top) / i.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
        };
        onTapUp = (s)=>{
            let i = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - i.left) / i.width * 2 - 1, this.mouse.y = -((s.clientY - i.top) / i.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
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
                    this.levelClass.players.forEach((i, a, e)=>{
                        i.player.userData.playerAlive = !0;
                    });
                    break;
                case "KeyP":
                    this.levelClass.needDeath(this.levelClass.players[1].player);
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
            s.userData.live && (s.userData.onGround || s.userData.canFly) && (s.userData.readyJump = !0, s.userData.audio[0].play());
        }
        upKeys(s) {
            s.userData.live && (s.userData.canFly && !s.userData.onGround && s.userData.canFlyJumps > 0 && (s.userData.canFlyJumps--, s.userData.canFlyJumps == 0 && setTimeout(()=>{
                s.userData.canFly = !1, this.levelClass.boostHatModels[s.userData.canFlyNum].userData.fly = !1;
            }, 1e3)), s.userData.readyJump && s.userData.onGround ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), s.userData.audio[1].isPlaying || s.userData.audio[1].play(), s.userData.onGround = !1) : s.userData.onGround || (s.userData.canFly ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), s.userData.audio[1].isPlaying || s.userData.audio[1].play(), s.userData.onGround = !1, s.userData.hatBoost--, s.userData.hatBoost == 0 && (s.userData.canFly = !1, setTimeout(()=>{
                this.levelClass.boostHatModels[s.userData.numHatBoost].userData.fly = !1;
            }, 500))) : (s.userData.readyJump = !1, s.userData.audio[0].stop())));
        }
    }
    class it {
        constructor(s, i, a, e, t){
            this.scene = s, this.camera = i, this.renderer = a, this.paramsClass = e, this.isMobile = t, this.ambientLight = new Ls(11184810, 1), this.hemiLight = new ks(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Bs(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new as, this.dirLight.target = this.targetObject, this.helper = new _s(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x;
        }
        async loadWaterSky() {
            this.waterGeometry = new os(900, 500), this.water = new Hs(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new ys().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = I;
                }),
                sunDirection: new d,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new d, this.sky = new Es, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new J(new os(1e4, 1e4), new bs({
                color: 526362,
                side: Ts,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const i = 1500, a = new Float32Array(i * 3), e = new Float32Array(i), t = new Float32Array(i * 3);
            for(let h = 0; h < i; h++){
                a[3 * h] = Math.random() * 600 - 300, a[3 * h + 1] = Math.random() * 150 - 100, a[3 * h + 2] = Math.random() * 300 - 500, e[h] = Math.random() * 2 + .7;
                const c = new C().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                t[3 * h] = c.r, t[3 * h + 1] = c.g, t[3 * h + 2] = c.b;
            }
            const o = new Rs;
            o.setAttribute("position", new Y(a, 3)), o.setAttribute("size", new Y(e, 1)), o.setAttribute("color", new Y(t, 3));
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
            this.materialStars = new Fs({
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
            }), this.stars = new Gs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, i = Math.sign(s - this._prevCamX);
            this._prevCamX = i, this.stars.position.x = this.camera.position.x;
            const a = z.degToRad(90 - this.parameters.elevation), e = z.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, a, e), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.parameters.elevation < -2 ? this.night = !0 : this.night = !1), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const n = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= n * .05, this.blackSky.material.opacity += n * .05, this.materialStars.uniforms.opacity.value += n * .01, this.camera.position.y < this.topLight && n < 0 ? (this.dirLight.intensity -= n * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= n * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= n * .05, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && n > 0 && (this.dirLight.intensity -= n * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= n * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= n * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && (this.topLight = this.camera.position.y), this.parameters.elevation = Math.max(-100, Math.min(100, this.parameters.elevation)), this.prevCameraYSun = this.camera.position.y, this.camera.position.y > 30 ? this.night = !0 : this.night = !1;
            }
            this.materialStars.uniforms.time.value = performance.now() * .001;
        }
        waterUpdate() {
            performance.now() * .001, this.water.material.uniforms.time.value += .4 / 60;
        }
        async loadWorld() {
            await this.loadWaterSky(), this.scene.add(this.hemiLight), this.scene.add(this.dirLight), this.scene.add(this.targetObject), this.scene.add(this.water);
        }
        updateLighting() {
            this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.camera.position.x, this.camera.position.y, 0);
            const s = 10;
            this.dirLight.shadow.camera.left = -s, this.dirLight.shadow.camera.right = s, this.dirLight.shadow.camera.top = s, this.dirLight.shadow.camera.bottom = -s, this.waterUpdate(), this.updateSky();
        }
    }
    class ot {
        constructor(s){
            this.initMatch = s, this.mainMenu(this.initMatch), this.playersNum = 2;
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("together_game_screen");
            }), document.querySelector(".new_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("levels_game_screen");
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((s, i, a)=>{
                s.addEventListener("click", ()=>{
                    this.hideScreen("levels_game_screen"), this.initMatch(1, 2, i + 1, !0);
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
            }), document.querySelectorAll(".together_game_chels").forEach((s, i, a)=>{
                s.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((e)=>{
                        e.classList.remove("together_game_chels_active");
                    }), s.classList.add("together_game_chels_active"), this.playersNum = i + 2;
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
    class nt {
        constructor(){
            this.gameDir = "vert", this.gameStarting = !1, this.allDie = !1, this.dataLoaded = !1;
        }
    }
    class rt {
        constructor(s){
            this.camera = s, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(s) {
            if (s = Math.max(0, Math.floor(s)), s === this.shownFloat) return;
            const i = cs, a = performance.now(), e = 200;
            function t(o) {
                const n = Math.min(1, (o - a) / e), r = 1 - Math.pow(1 - n, 4), h = Math.round(i + (s - i) * r);
                lt.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(t) : cs = s;
            }
            requestAnimationFrame(t);
        }
    }
    const lt = document.getElementById("meters-float");
    let cs = 0;
    console.clear();
    let es, fs = !1, q = 0, ms = 1 / 60, ht = new ts, js, V, W, v, g, H, U, P, T;
    const F = new Is;
    F.background = new C(13230580);
    const y = new Us(25, window.innerWidth / window.innerHeight, .1, 2e3);
    y.position.z = 7;
    y.position.y = 2;
    const O = Ys();
    let K = new Ws;
    document.body.appendChild(K.dom);
    K.dom.style.top = "0px";
    K.dom.style.left = "48%";
    const f = new Ns;
    f.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(f.domElement);
    f.shadowMap.enabled = !0;
    f.shadowMap.type = qs;
    f.outputColorSpace = Vs;
    f.toneMapping = Os;
    f.toneMappingExposure = 1.05;
    ws();
    window.addEventListener("resize", ws, !1);
    function ws() {
        O ? (y.aspect = document.body.offsetWidth / document.body.offsetHeight, y.updateProjectionMatrix(), f.setSize(innerWidth, innerHeight)) : (y.aspect = document.body.offsetWidth / document.body.offsetHeight, y.updateProjectionMatrix(), f.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function dt(l) {
        const s = await Ks(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        es = new s.World(new s.Vector3(0, -9.81, 0)), js = new s.EventQueue(!0), v = new _(es, s), T = new rt(y), H = new et, W = new it(F, y, f, P, O), g = new tt(F, H, v, f, y, O, P, W);
        for(let i = 0; i < l; i++)g.players.push(new st(F, H, g, P, y));
        U = new at(g, O, f, y, P), U.addKeyListeners();
    }
    async function pt() {
        await W.loadWorld(), await H.loadAudio(), H.backAudio.play(), H.oceanAudio.play();
    }
    async function ut(l, s = s) {
        await g.createLevel(l, s = s), await g.loadEnvironments(), await g.loadPlayers(), g.objs.grassPlanes.data.length > 0 && g.objs.grassPlanes.data.forEach((i, a)=>{
            g.objs.grassPlanes.data[a].userData.collide.setCollisionGroups(X([
                0
            ], [
                1
            ]));
        }), g.players.length > 0 && g.players.forEach((i, a)=>{
            g.players[a].player.userData.collider.setCollisionGroups(X([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function ct(l, s, i = !1, a = !0) {
        mt(), V.toggleLoader(!0), P = new nt, await dt(l), g.gameNum = s, await pt(), await ut(i, a = a), setTimeout(()=>{
            V.showScreen("hud"), V.toggleLoader(!1), P.dataLoaded = !0, P.gameStarting = !0, fs = !0;
        }, 300);
    }
    V = new ot(ct);
    function mt() {
        y.position.z = 7, y.position.y = 2, y.position.x = 0, f.toneMappingExposure = 1.05, U?.removedKeyListeners(), W = null, v = null, g = null, H = null, U = null, P = null, T = null;
    }
    function yt() {
        if (P.dataLoaded) {
            P.gameDir == "hor" ? T.updateMetersFloat(y.position.x - T.startX) : T.updateMetersFloat(y.position.y - T.startY), g.players.forEach((l, s, i)=>{
                l.playerMove();
            }), W.updateLighting(), g.levelAnimate(y), g.cameraMove(y), K.update();
            for(let l = 0, s = v.dynamicBodies.length; l < s; l++)v.dynamicBodies[l][0].position.copy(v.dynamicBodies[l][1].translation()), v.dynamicBodies[l][0].quaternion.copy(v.dynamicBodies[l][1].rotation());
            v.updateInstancedTransforms(), es.step(js), f.render(F, y);
        }
    }
    f.setAnimationLoop(()=>{
        q += ht.getDelta(), q > ms && fs && !P.allDie && (yt(), f.render(F, y), q = q % ms);
    });
})();

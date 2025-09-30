import { B as U, V as p, Q as $, M as ws, a as Q, b as H, c as F, d as B, G as cs, C as M, S as ts, E as S, I as L, D as A, e as xs, f as ms, O as ss, T as ys, R as G, P as K, g as Ps, h as Ds, A as bs, i as z, j as vs, k as Ms, l as zs, m as v, n as Cs, o as Ss, H as Ls, p as As, q as _s, r as es, W as Hs, s as Es, t as ks, u as Bs, v as Rs, w as X, x as Ts, y as Fs, z as Gs, F as Is, J as Us, K as Ws, L as qs, N as Ns, U as Os } from "./three-DjXYLer5.js";
(async ()=>{
    (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload")) return;
        for (const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);
        new MutationObserver((t)=>{
            for (const i of t)if (i.type === "childList") for (const o of i.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && e(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function a(t) {
            const i = {};
            return t.integrity && (i.integrity = t.integrity), t.referrerPolicy && (i.referrerPolicy = t.referrerPolicy), t.crossOrigin === "use-credentials" ? i.credentials = "include" : t.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
        }
        function e(t) {
            if (t.ep) return;
            t.ep = !0;
            const i = a(t);
            fetch(t.href, i);
        }
    })();
    const Js = "modulepreload", Vs = function(r, s) {
        return new URL(r, s).href;
    }, as = {}, Ks = function(s, a, e) {
        let t = Promise.resolve();
        if (a && a.length > 0) {
            let h = function(c) {
                return Promise.all(c.map((d)=>Promise.resolve(d).then((u)=>({
                            status: "fulfilled",
                            value: u
                        }), (u)=>({
                            status: "rejected",
                            reason: u
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), l = n?.nonce || n?.getAttribute("nonce");
            t = h(a.map((c)=>{
                if (c = Vs(c, e), c in as) return;
                as[c] = !0;
                const d = c.endsWith(".css"), u = d ? '[rel="stylesheet"]' : "";
                if (!!e) for(let m = o.length - 1; m >= 0; m--){
                    const j = o[m];
                    if (j.href === c && (!d || j.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${c}"]${u}`)) return;
                const b = document.createElement("link");
                if (b.rel = d ? "stylesheet" : Js, d || (b.as = "script"), b.crossOrigin = "", b.href = c, l && b.setAttribute("nonce", l), document.head.appendChild(b), d) return new Promise((m, j)=>{
                    b.addEventListener("load", m), b.addEventListener("error", ()=>j(new Error(`Unable to preload CSS for ${c}`)));
                });
            }));
        }
        function i(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return t.then((o)=>{
            for (const n of o || [])n.status === "rejected" && i(n.reason);
            return s().catch(i);
        });
    };
    function w(r, s) {
        return Math.random() * (s - r) + r;
    }
    function Xs() {
        let r = window.matchMedia || window.msMatchMedia;
        return r ? r("(pointer:coarse)").matches : !1;
    }
    function is(r) {
        return r.reduce((s, a)=>s | 1 << a, 0);
    }
    function J(r, s) {
        const a = is(r), e = is(s);
        return "0x" + ((a & 65535) << 16 | e & 65535).toString(16).padStart(8, "0");
    }
    function os(r) {
        const s = r.collisionGroups(), a = s >>> 16 & 65535, e = s & 65535;
        function t(i) {
            const o = [];
            for(let n = 0; n < 16; n++)i & 1 << n && o.push(n);
            return o;
        }
        return [
            t(a),
            t(e)
        ];
    }
    function Ys(r) {
        return typeof r == "number" ? new p(r, r, r) : r?.isVector3 ? r : new p(r?.x ?? 1, r?.y ?? 1, r?.z ?? 1);
    }
    function ns(r) {
        return r?.userData?.id ?? r?.uuid ?? r?.id;
    }
    const $s = new U(new p(-.5, -.5, -.5), new p(.5, .5, .5)), rs = new ws, ls = new $;
    function hs(r) {
        if (r?.isObject3D) {
            if (r.updateMatrixWorld(!0), r.geometry?.isBufferGeometry) {
                const t = r.geometry;
                if (t.boundingBox || t.computeBoundingBox(), t.boundingBox) {
                    const i = t.boundingBox.clone();
                    return i.applyMatrix4(r.matrixWorld), i;
                }
            }
            return new U().setFromObject(r);
        }
        const s = r.position ?? r.pos ?? new p, a = Ys(r.size ?? 1), e = r.quaternion?.isQuaternion ? r.quaternion : r.rotation?.isEuler ? ls.setFromEuler(r.rotation) : ls.set(0, 0, 0, 1);
        return rs.compose(s, e, a), $s.clone().applyMatrix4(rs);
    }
    function _(r, s) {
        const a = hs(r), e = ns(r);
        for(let t = s.length - 1; t >= 0; t--){
            const i = s[t], o = ns(i);
            if (e !== void 0 && o !== void 0 && e === o) continue;
            if (hs(i).intersectsBox(a)) return i;
        }
        return null;
    }
    function Qs(r) {
        for(r.traverse((s)=>{
            s.geometry && s.geometry.dispose(), s.material && (Array.isArray(s.material) ? s.material.forEach((a)=>a.dispose()) : s.material.dispose()), s.material && s.material.map && s.material.map.dispose();
        }); r.children.length > 0;)r.remove(r.children[0]);
    }
    class Zs {
        constructor(s, a, e, t, i){
            this.scene = s, this.audioClass = a, this.levelClass = e, this.paramsClass = t, this.camera = i, this.playerHeight = .9, this.playerWidth = .5, this.player = new Q(new H(this.playerWidth, this.playerHeight, this.playerWidth), new F({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.player.userData.lives = 3, this.playerModel, this.playerOut = new Q(new H(this.playerWidth, this.playerHeight + .1, this.playerWidth), new B({
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
            await new cs().loadAsync("models/players/player1.glb").then((e)=>{
                const t = e.scene;
                this.playerModel = t, this.playerModel.traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if (_(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, a] = os(this.player.userData.collider);
                a[0] == 0 && this.player.userData.collider.setCollisionGroups(J([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, a] = os(this.player.userData.collider);
                a[0] != 0 && this.player.userData.collider.setCollisionGroups(J([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && _(this.player, this.levelClass.boostHatMeshes) && !this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(_(this.player, this.levelClass.boostHatMeshes))].userData.fly && this.levelClass.boostHatMeshes.indexOf(_(this.player, this.levelClass.boostHatMeshes)) != this.player.userData.canFlyNum && (this.player.userData.canFly || (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(_(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0)), this.player.userData.canFlyJumps && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].position.copy(new p(this.player.userData.head.getWorldPosition(new p).x - .1, this.player.userData.head.getWorldPosition(new p).y + .2, this.player.userData.head.getWorldPosition(new p).z + 0)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].children[0].children[1].rotation.y += .4), _(this.player, this.levelClass.objs.topPlanes.data) || _(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.paramsClass.gameDir == "hor" && (this.player.userData.lives = 0, this.levelClass.needDeath(this.player)), this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY) * 2 && this.player.userData.live && (this.player.userData.lives = 0, this.levelClass.needDeath(this.player)), this.player.position.y < -4) this.levelClass.players.length < 2 ? (this.player.userData.live && (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.audioClass.pauseMusic([
                "back"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.levelClass.gameNum == 2 && this.player.userData.lives < 1 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.player.userData.lives < 1 && this.levelClass.showPopupInGame(!1), this.paramsClass.gameStarting = !1), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1) : (this.player.userData.live && (this.levelClass.gameNum == 2 ? this.player.userData.lives-- : this.levelClass.gameNum == 4 && (this.player.userData.lives = 0), this.audioClass.stopMusic([
                "inwater"
            ]), this.audioClass.playMusic([
                "inwater"
            ]), this.player.userData.canFlyJumps = 0, this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.levelClass.players.every((s)=>s.player.userData.lives < 1) && this.paramsClass.gameStarting && (this.audioClass.pauseMusic([
                "back"
            ]), this.levelClass.showPopupInGame(!1), this.paramsClass.gameStarting = !1)), this.player.userData.lives > 0 && (this.levelClass.boostHatModels.forEach((s, a, e)=>{
                s.userData.fly = !1;
            }), this.playerAliving(!1), console.log(this.player.userData.live), this.audioClass.playMusic([
                "back"
            ])), this.player.userData.live || (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((s)=>s.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x + (.1 + Math.random() * .2), this.player.userData.deadPos.y + .3, this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1));
            else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, a = this.player.userData.readyJump ? -Math.PI / 2 : 0, e = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, t = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, i = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, l = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, i, .1), this.head.position.y = this.lerp(this.head.position.y, l, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const c = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, c, .4);
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
        }
        lerp(s, a, e) {
            return s + (a - s) * e;
        }
        playerAliving(s) {
            s && (this.player.userData.deadPos = this.player.userData.startPos, this.player.userData.lives = 3), this.player.userData.playerAlive = !0, setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 100);
        }
    }
    class st {
        constructor(s, a, e, t, i, o, n, l){
            this.scene = s, this.audioClass = a, this.physicsClass = e, this.renderer = t, this.camera = i, this.isMobile = o, this.paramsClass = n, this.worldClass = l, this.cameraSpeed = .01, this.levelsMode = !1, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.boostHatCoords = [], this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 1, this.fixedDistanceHor = {
                min: 1,
                max: 4
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this._dayColor = new M(16777215), this._nightColor = new M(16771488), this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (d, u)=>({
                            position: new p(0, 0, 0),
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
                    geometryPlane: new H(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new F({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (d, u)=>({
                            position: new p(0, 0, 0),
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
                    geometryPlaneTop: new H(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new B({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (d, u)=>({
                            position: new p(0, 0, 0),
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
                    geometryPlaneGrass: new H(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new F({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (d, u)=>({
                            position: new p(0, 0, 0),
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
                    geometryPlaneSensor: new H(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new F({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (d, u)=>({
                            position: new p(0, 0, 0),
                            rotation: new S(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new H(.3, 1, .3),
                    materialLamp: new F({
                        color: 16777215,
                        transparent: !1,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (d, u)=>({
                            position: new p(0, 0, 0),
                            rotation: new S(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new ts(.32, 24, 16),
                    materialPlafon: new B({
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
                    }, (d, u)=>({
                            position: new p(0, 0, 0),
                            rotation: new S(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new ts(.3),
                    materialBulb: new B({
                        emissive: new M(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                }
            }, this.objs.planes.plane = new L(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(A), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new L(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(A), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new L(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(A), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new L(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(A), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new L(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(A), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new L(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(A), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new L(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(A), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.plafons.materialPlafon.onBeforeCompile = (d)=>{
                d.uniforms.fresnelPower = {
                    value: 2.5
                }, d.fragmentShader = d.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const h = new Float32Array(this.count);
            for(let d = 0; d < this.count; d++)h[d] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new xs(h, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (d)=>{
                d.vertexShader = `
    attribute float aEmissive;
    varying float vEmissive;
  ` + d.vertexShader.replace("#include <begin_vertex>", `
      #include <begin_vertex>
      vEmissive = aEmissive;
    `), d.fragmentShader = `
    varying float vEmissive;
  ` + d.fragmentShader.replace("#include <lights_fragment_begin>", `
      #include <lights_fragment_begin>
      // усиливаем эмиссию в зависимости от инстанса
      totalEmissiveRadiance *= vEmissive;
    `);
            }, this.objs.bulbs.materialBulb.needsUpdate = !0;
            function c(d = 64) {
                const u = document.createElement("canvas");
                u.width = u.height = d;
                const x = u.getContext("2d"), b = x.createRadialGradient(d / 2, d / 2, 0, d / 2, d / 2, d / 2);
                b.addColorStop(0, "rgba(255, 235, 175, 1)"), b.addColorStop(1, "rgba(255, 235, 175, 0)"), x.fillStyle = b, x.fillRect(0, 0, d, d);
                const m = new vs(u);
                return m.anisotropy = 1, m.generateMipmaps = !1, m.needsUpdate = !0, m;
            }
            this._glowTex = c(), this._emissive = h, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(i), this.rightEdge.unproject(i), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 8
            }, this.dt = new ms, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s : s ? new p(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new p(1, 1, 1);
        }
        apply(s, a, e) {
            let t = e.userData.invBaseSize;
            if (!t) {
                const l = e.geometry;
                l.computeBoundingBox();
                const h = new p;
                l.boundingBox.getSize(h), t = e.userData.invBaseSize = new p(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new ss;
            const i = this._dummy, o = a[s] || {}, n = this.toVec3(o.size);
            i.position.copy(o.position || new p), o.rotation ? i.rotation.copy(o.rotation) : i.rotation.set(0, 0, 0), i.scale.set(n.x * t.x, n.y * t.y, n.z * t.z), i.updateMatrix(), e.setMatrixAt(s, i.matrix);
        }
        async loadTexture() {
            const s = new ys;
            s.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (a)=>{
                const e = new B({
                    map: a,
                    transparent: !0,
                    opacity: 1
                });
                a.wrapS = G, a.wrapT = G, a.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = e;
            }, void 0, function(a) {
                console.error("An error happened.");
            }), s.load("textures/123.jpg", (a)=>{
                const e = new B({
                    map: a
                });
                a.wrapS = G, a.wrapT = G, a.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = e;
            }, void 0, function(a) {
                console.error("An error happened.");
            });
        }
        async createLevel(s) {
            if (this.levelsMode = s, await this.loadTexture(), await this.loadBoostsModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), document.querySelectorAll(".player_panel")[0].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[1].classList.add("hidden_screen"), document.querySelectorAll(".player_panel")[2].classList.add("hidden_screen"), this.players.forEach((a, e, t)=>{
                document.querySelectorAll(".player_panel")[e].classList.remove("hidden_screen");
            }), s) switch(this.players[0].player.userData.lives = 0, s){
                case 1:
                    this.count = 10, this.paramsClass.gameDir = "hor";
                    let a = -2.5;
                    for(let e = 0; e < this.count; e++){
                        let t = w(this.planeWidth, this.planeWidth - 1), i = a + t / 2 + w(this.fixedDistanceHor.min, this.fixedDistanceHor.max), o = w(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e == 0 ? (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.planes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2) : e == 1 ? (this.objs.planes.data[e].size.x = t, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = t + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = t + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = t, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = t + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = t + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e == 0 ? (o = 1 - this.planeHeight / 1.5, this.objs.planes.data[e].position.x = 0, this.objs.planes.data[e].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = 0, this.objs.topPlanes.data[e].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = 0, this.objs.grassPlanes.data[e].position.y = o + this.planeHeight / 1.5) : e == 1 ? (this.objs.planes.data[e].position.x = i + this.fixedDistanceHor.min / 4, this.objs.planes.data[e].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = i + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[e].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = i + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[e].position.y = o + this.planeHeight / 1.5) : (this.objs.planes.data[e].position.x = i + this.fixedDistanceHor.min / 4, this.objs.planes.data[e].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = i + this.fixedDistanceHor.min / 4, this.objs.topPlanes.data[e].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = i + this.fixedDistanceHor.min / 4, this.objs.grassPlanes.data[e].position.y = o + this.planeHeight / 1.5), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.objs.bulbs.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.bulbs.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.bulbs.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const n = new K(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), a = i + t / 2;
                    }
                    for(let e = 0; e < this.count; e++)e > 4 && e < this.count - 2 && Math.random() < .2 && !this.objs.grassPlanes.data[e - 1].userData.moveHor && (this.objs.grassPlanes.data[e].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10), e > 7 && e < this.count - 2 && Math.random() < .2 && !this.objs.grassPlanes.data[e - 1].userData.moveHor && !this.objs.grassPlanes.data[e - 1].userData.moveVert && (this.objs.grassPlanes.data[e].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[e - 1].position.x,
                        x2: this.objs.grassPlanes.data[e + 1].position.x,
                        w1: this.objs.grassPlanes.data[e - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[e + 1].size.x / 2
                    }, this.objs.planes.data[e].position.y = -10);
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
            else switch(this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let a = -2.5;
                    for(let t = 0; t < this.count; t++){
                        let i = w(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), o = a + i / 2 + w(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = w(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (t > 20 && (this.fixedDistanceHor.max = 6), this.minPlaneWidthTic += .1, t > this.count - 10 ? (this.objs.planes.data[t].size.x = .1, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = .2 + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = .2 + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : t > 0 ? (this.objs.planes.data[t].size.x = i, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = i + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = i + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[t].size.x = this.planeWidth, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = this.planeWidth + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), t == 0) n = 1 - this.planeHeight / 1.5, this.objs.planes.data[t].position.x = 0, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = 0, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = 0, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5;
                        else if (t == 1) o = 6, this.objs.planes.data[t].position.x = o, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = o, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = o, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5;
                        else if (t > 1 && (this.objs.planes.data[t].position.x = o, this.objs.planes.data[t].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = o, this.objs.topPlanes.data[t].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = o, this.objs.grassPlanes.data[t].position.y = n + this.planeHeight / 1.5, (t + 1) % 10 === 0)) {
                            let l = this.boostHatModel.clone();
                            l.position.x = o, l.position.y = this.objs.topPlanes.data[t].position.y + 2, l.rotation.y = -Math.PI / 2, l.userData.num = t, this.boostHatModels.push(l), this.boostHatMeshes.push(l.children[0].children[0].children[0]), this.boostHatCoords.push([
                                l.position.x,
                                l.position.y
                            ]), this.scene.add(l);
                        }
                        if (this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.lights.length < this.lightsCount) {
                            const l = new K(16247464, 0, 4);
                            l.position.set(0, 0, 1.6), this.lights.push(l), this.scene.add(l);
                        }
                        this.apply(t, this.objs.planes.data, this.objs.planes.plane), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), a = o + i / 2;
                    }
                    for(let t = 0; t < this.count; t++)t > 4 && t < this.count - 2 && Math.random() < .2 && !this.objs.grassPlanes.data[t - 1].userData.moveHor && (this.objs.grassPlanes.data[t].userData.moveHor = {
                        x1: this.objs.grassPlanes.data[t - 1].position.x,
                        x2: this.objs.grassPlanes.data[t + 1].position.x,
                        w1: this.objs.grassPlanes.data[t - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[t + 1].size.x / 2
                    }, this.objs.planes.data[t].position.y = -10), t > 7 && t < this.count - 2 && Math.random() < .2 && !this.objs.grassPlanes.data[t - 1].userData.moveHor && !this.objs.grassPlanes.data[t - 1].userData.moveVert && (this.objs.grassPlanes.data[t].userData.moveVert = {
                        x1: this.objs.grassPlanes.data[t - 1].position.x,
                        x2: this.objs.grassPlanes.data[t + 1].position.x,
                        w1: this.objs.grassPlanes.data[t - 1].size.x / 2,
                        w2: this.objs.grassPlanes.data[t + 1].size.x / 2
                    }, this.objs.planes.data[t].position.y = -10);
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let e = -5;
                    for(let t = 0; t < this.count; t++){
                        let i = w(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        this.minPlaneWidthTic += .1, Math.random() < .5 ? this.objs.grassPlanes.data[t].userData.direction = 1 : this.objs.grassPlanes.data[t].userData.direction = -1;
                        let o = e + w(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[t].position.y = o - 1.3, this.objs.grassPlanes.data[t].position.y = o, this.objs.sensorPlanes.data[t].position.y = o - .3, this.objs.topPlanes.data[t].size.y = .3, this.objs.grassPlanes.data[t].size.y = .7, this.objs.sensorPlanes.data[t].size.y = .9, t > this.count - 10 && (this.objs.topPlanes.data[t].size.x = i / 8 + .1, this.objs.grassPlanes.data[t].size.x = i / 8 + .1, this.objs.sensorPlanes.data[t].size.x = i / 8 + .4), t > 0 ? (this.objs.topPlanes.data[t].size.x = i + .3, this.objs.grassPlanes.data[t].size.x = i + .3, this.objs.sensorPlanes.data[t].size.x = i + .7) : (this.objs.topPlanes.data[t].size.x = 10, this.objs.grassPlanes.data[t].size.x = 10, this.objs.sensorPlanes.data[t].size.x = 10), t > this.count - 10 ? this.objs.grassPlanes.data[t].userData.speed = w(10, 14) / 100 : this.objs.grassPlanes.data[t].userData.speed = w(6, 10) / 100, this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, (t + 1) % 7 === 0) {
                            let n = this.boostHatModel.clone();
                            n.position.x = w(this.bounds.leftX + 1, this.bounds.rightX - 1), n.position.y = this.objs.topPlanes.data[t].position.y + .5, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.boostHatCoords.push([
                                n.position.x,
                                n.position.y
                            ]), this.scene.add(n);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const n = new K(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), e = o;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
        }
        getHorizontalWorldBounds(s = 0) {
            const a = new p(-1, 0, .5), e = new p(1, 0, .5), t = new p(0, 1, .5), i = new p(0, -1, .5);
            if (a.unproject(this.camera), e.unproject(this.camera), t.unproject(this.camera), i.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = a.clone().sub(o).normalize(), l = e.clone().sub(o).normalize(), h = t.clone().sub(o).normalize(), c = i.clone().sub(o).normalize(), d = (s - o.z) / n.z, u = (s - o.z) / c.z, x = o.clone().add(n.multiplyScalar(d)), b = o.clone().add(l.multiplyScalar(d)), m = o.clone().add(h.multiplyScalar(u)), j = o.clone().add(c.multiplyScalar(u));
                this.bounds = {
                    leftX: x.x,
                    rightX: b.x,
                    topY: m.y,
                    bottomY: j.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let s = !1;
                for(let a = 0; a < this.objs.grassPlanes.data.length; a++){
                    const e = this.objs.grassPlanes.data[a], t = e.userData.body, i = e.userData.moveHor, o = e.userData.moveVert;
                    if (!(!i && !o || !t)) {
                        if (i) {
                            const n = t.translation(), l = i.x1 + i.w1 + e.size.x * .5, h = i.x2 - i.w2 - e.size.x * .5, c = e.userData.speed ?? .05;
                            n.x >= h && (e.userData.direction = -1), n.x <= l && (e.userData.direction = 1);
                            const d = e.userData.direction * c, u = n.x + d;
                            t.setNextKinematicTranslation({
                                x: u,
                                y: n.y,
                                z: n.z
                            }), e.position.x = u, this.objs.lamps.data[a].position.x = u, this.objs.plafons.data[a].position.x = u, this.objs.bulbs.data[a].position.x = u, this.objs.topPlanes.data[a].position.x = u;
                        } else if (o) {
                            const n = t.translation(), l = 2, h = .5, c = e.userData.speed ?? .03;
                            n.y >= l && (e.userData.direction = -1), n.y <= h && (e.userData.direction = 1);
                            const d = e.userData.direction * c, u = n.y + d;
                            t.setNextKinematicTranslation({
                                x: n.x,
                                y: u,
                                z: n.z
                            }), e.position.y = u, this.objs.lamps.data[a].position.y = u + this.objs.lamps.lampHeight, this.objs.plafons.data[a].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[a].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[a].position.y = u + .2;
                        }
                        this.apply(a, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(a, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(a, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(a, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), s = !0;
                    }
                }
                s && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let s = 0; s < this.objs.grassPlanes.data.length; s++){
                    const a = this.objs.grassPlanes.data[s], e = this.objs.topPlanes.data[s];
                    this.objs.sensorPlanes.data[s], this.objs.lamps.data[s], this.objs.plafons.data[s], this.objs.bulbs.data[s];
                    const t = a.userData.body, i = a.userData.speed, o = t.translation();
                    o.x > this.bounds.rightX - a.size.x / 2 ? a.userData.direction = -1 : o.x < this.bounds.leftX + a.size.x / 2 && (a.userData.direction = 1);
                    const n = a.userData.direction * i, l = o.x + n;
                    s > 0 && t.setNextKinematicTranslation({
                        x: l,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[s].position.x = l, this.objs.lamps.data[s].position.x = l, this.objs.plafons.data[s].position.x = l, this.objs.bulbs.data[s].position.x = l, this.objs.topPlanes.data[s].position.x = l, this.objs.topPlanes.data[s].position.y = o.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), e.position.set(l, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBoostsModel() {
            await new cs().loadAsync("models/boosts/hat.glb").then((e)=>{
                const t = e.scene;
                this.boostHatModel = t, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
                const i = this.boostHatPropeller.children[0].material;
                i.emissive.set(16777215), i.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 17, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .035, this.boostHatModel.scale.y = .035, this.boostHatModel.scale.z = .035, this.boostHatModel.userData.fly = !1, this.boostHatModel.userData.num = 0;
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? (this.objs.grassPlanes.data[s].userData.collide.setFriction(500), s > this.count - 10 && this.objs.grassPlanes.planeGrass.setColorAt(s, new M(16711680))) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < .3 && s > 2 && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new M(13421806))), s > this.count - 10 && !this.levelsMode && this.objs.grassPlanes.planeGrass.setColorAt(s, new M(16711680));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.boostHatModels.forEach((s, a, e)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            });
        }
        makeGlowSprite() {
            const s = new Ps(new Ds({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: bs
            }));
            return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
        }
        lampsAnimate() {
            let s = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const e = this.camera.position.x - this.bounds.rightX / 2, t = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((i, o)=>{
                    i.pointLight;
                    const n = i.position.x >= e && i.position.x <= t, l = o;
                    if (n && !i.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        i.pointLight = h, i.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(i.glow);
                    }
                    if (i.pointLight) {
                        const h = i.pointLight;
                        h.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), i.glow.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 0);
                        const c = n ? this.lightIntensity : 0;
                        h.intensity = z.lerp(h.intensity, c, .15);
                        const d = n ? 1 : 0;
                        this._emissive[l] = z.lerp(this._emissive[l], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .5 + this._emissive[l] * .8;
                        i.glow && i.glow.scale.setScalar(u);
                        const x = 1.1, b = this._emissive[l], m = 1 + x * b, j = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[l];
                        C.userData._lastBulbFactor !== m && (C.size.set(j.x * m, j.y * m, j.z * m), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = m, s = !0), !n && h.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(h), i.pointLight = null, i.glow && (this.glowPool.push(i.glow), this.scene.remove(i.glow), i.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let e = !1;
                this.objs.plafons.data.forEach((t, i)=>{
                    const o = t.pointLight;
                    o && (o.intensity = z.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), t.pointLight = null, t.userData.light = !1, t.glow && (this.scene.remove(t.glow), this.glowPool.push(t.glow), t.glow = null))), this.objs.plafons.plafon.setColorAt(i, this._dayColor), e = !0, this._emissive && this._emissive.length > i && (this._emissive[i] = 0);
                    const n = 1.1, l = this._emissive[i], h = 1 + n * l, c = this.objs.bulbs.baseSize, d = this.objs.bulbs.data[i];
                    d.userData._lastBulbFactor !== h && (d.size.set(c.x * h, c.y * h, c.z * h), this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb), d.userData._lastBulbFactor = h, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), e && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const e = this.camera.position.y - this.bounds.topY / 2, t = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((i, o)=>{
                    i.pointLight;
                    const n = i.position.y >= e && i.position.y <= t, l = o;
                    if (n && !i.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        i.pointLight = h, i.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(i.glow);
                    }
                    if (i.pointLight) {
                        const h = i.pointLight;
                        h.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), i.glow.position.copy(i.position);
                        const c = n ? this.lightIntensity : 0;
                        h.intensity = z.lerp(h.intensity, c, .15);
                        const d = n ? 1 : 0;
                        this._emissive[l] = z.lerp(this._emissive[l], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .8 + this._emissive[l] * .8;
                        i.glow && i.glow.scale.setScalar(u);
                        const x = 1, b = this._emissive[l], m = 1 + x * b, j = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[l];
                        C.userData._lastBulbFactor !== m && (C.size.set(j.x * m, j.y * m, j.z * m), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = m, s = !0), !n && h.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(h), i.pointLight = null, i.glow && (this.glowPool.push(i.glow), this.scene.remove(i.glow), i.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let e = !1;
                this.objs.plafons.data.forEach((t, i)=>{
                    const o = t.pointLight;
                    !t.pointLight && this._emissive[i] === 0 || (o && (o.intensity = z.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), t.pointLight = null, t.userData.light = !1, t.glow && (this.scene.remove(t.glow), this.glowPool.push(t.glow), t.glow = null))), this.objs.plafons.plafon.setColorAt(i, this._dayColor), e = !0, this._emissive && this._emissive.length > i && (this._emissive[i] = 0));
                }), e && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        needDeath(s = !1) {
            s && s.position.y > -1 ? (this.audioClass.playMusic([
                "inwater"
            ]), s.userData.body.setTranslation(new p(0, -5, 0)), s.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), s.userData.live = !1) : s || (this.audioClass.playMusic([
                "inwater"
            ]), this.players.forEach((a, e, t)=>{
                a.player.position.y > 0 && (a.player.userData.body.setTranslation(new p(0, -5, 0)), a.player.userData.body.setLinvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0), a.player.userData.live = !1);
            }));
        }
        resetLevel() {}
        maxSpeed() {
            let s = this.players;
            if (s.length === 0) return -1;
            let a = 0, e;
            this.paramsClass.gameDir == "vert" ? e = s[0].player.position.y : e = s[0].player.position.x;
            for(let t = 1; t < s.length; t++)s[t].player && s[t].player.position ? this.paramsClass.gameDir == "vert" ? s[t].player.position.y > e && (e = s[t].player.position.y, a = t) : s[t].player.position.x > e && (e = s[t].player.position.x, a = t) : console.warn(`Player at index ${t} is missing player or position properties.`);
            return a;
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
                        const e = this.maxSpeed(this.players);
                        if (e >= 0) {
                            const t = this.players[e].player.position.x, i = this.cam.maxBackJump;
                            t < this.cam.targetX - i ? this.cam.targetX = this.cam.targetX - i : this.cam.targetX = t;
                            const o = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .25, a);
                            s.position.x - t < 1 && (s.position.x = o.newPos), this.cam.velX = o.newVel, s.position.y = this.isMobile ? 4 : 3, s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                        }
                        break;
                    }
                case 3:
                    this.paramsClass.gameStarting && (s.position.y += this.cameraSpeed), s.position.x = 0, s.position.z = this.isMobile ? 20 : 22, this.cameraSpeed += 1e-6, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 4:
                    this.paramsClass.gameStarting && (s.position.y = this.players[this.maxSpeed(this.players)].player.position.y + 3.5), s.position.x = 0, s.position.z = (this.isMobile, 25), s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
            }
        }
        damp(s, a, e, t) {
            return s + (a - s) * (1 - Math.exp(-e * t));
        }
        spring(s, a, e, t, i) {
            const o = 2 / t, n = o * i, l = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = s - a;
            const c = (e + o * h) * i, d = (e - o * c) * l;
            return {
                newPos: a + (h + c) * l,
                newVel: d
            };
        }
        showPopupInGame(s) {
            s ? this.showScreen("popup_game_btn1") : this.hideScreen("popup_game_btn1"), this.showScreen("popup_in_game");
        }
        menuInGame = ()=>{
            document.querySelector(".popup_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.boostHatModels.forEach((s, a, e)=>{
                    s.userData.fly = !1;
                }), this.players[0].playerAliving(!1), this.audioClass.playMusic([
                    "back"
                ]);
            }), document.querySelector(".popup_game_btn2").addEventListener("click", ()=>{
                this.players.forEach((s, a, e)=>{
                    s.playerAliving(!0);
                }), this.camera.position.z = 7, this.camera.position.y = 2, this.camera.position.x = 0, this.cameraSpeed = .01, this.boostHatModels.forEach((s, a, e)=>{
                    s.position.x = this.boostHatCoords[a][0], s.position.y = this.boostHatCoords[a][1], s.userData.fly = !1;
                }), this.hideScreen("popup_in_game"), this.audioClass.stopMusic([
                    "back"
                ]), this.audioClass.playMusic([
                    "back"
                ]);
            }), document.querySelector(".popup_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((s, a, e)=>{
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
    class E {
        constructor(s, a){
            this.world = s, this.RAPIER = a, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new ss;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const a = s.geometry;
            a.computeBoundingBox();
            const e = new p;
            a.boundingBox.getSize(e);
            const t = new p(1 / (e.x || 1), 1 / (e.y || 1), 1 / (e.z || 1));
            return s.userData.invBase = t, t;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s.clone() : new p(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, a, e) {
            const t = E._toVec3(e.size), i = E._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = e.quaternion?.isQuaternion ? e.quaternion : new $, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(i.x, i.y, i.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), l = this.RAPIER.ColliderDesc.cuboid(t.x / 2, t.y / 2, t.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(l, n), this.instancedBodies.push({
                mesh: s,
                index: a,
                size: t,
                body: n
            });
        }
        addInstancedStatic(s, a, e, t) {
            const i = E._toVec3(t.size), o = E._toVec3(t.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = t.quaternion?.isQuaternion ? t.quaternion : new $, l = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(1.6).setRestitution(0);
            s[e].userData.body = l, s[e].userData.shape = h, s[e].userData.collide = this.world.createCollider(h, l), this.instancedBodies.push({
                mesh: a,
                index: e,
                size: i,
                body: l
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, a = new Set;
            for (const e of this.instancedBodies){
                const t = E._ensureInvBase(e.mesh), i = e.body.translation(), o = e.body.rotation();
                s.position.set(i.x, i.y, i.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(e.size.x * t.x, e.size.y * t.y, e.size.z * t.z), s.updateMatrix(), e.mesh.setMatrixAt(e.index, s.matrix), a.add(e.mesh);
            }
            for (const e of a)e.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let a, e;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new U().setFromObject(s);
                const i = ps(s);
                s.rotation.copy(t), s.userData.size = i, s.userData.orgRotation = t, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = a, s.userData.shape = e;
                let o = a;
                e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(e, a);
                s.userData.collider = n, s.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]);
            } else if (s != null && s.userData.name.includes("tops")) {
                let a, e;
                const t = s.rotation.clone();
                s.rotation.set(0, 0, 0), new U().setFromObject(s);
                const i = ps(s);
                s.rotation.copy(t), s.userData.size = i, s.userData.orgRotation = t, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(1).setRestitution(0).setFriction(.3), e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(e, a);
                s.userData.body = a, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = a.handle, this.dynamicBodies.push([
                    s,
                    a,
                    s.id
                ]), s.userData.playerHandlesInside = new Set, this.allTops.push(s);
            }
        }
    }
    const Y = new p;
    function ps(r) {
        if (r.isMesh && r.geometry) {
            const a = r.geometry;
            return a.boundingBox || a.computeBoundingBox(), a.boundingBox.getSize(Y), Y.multiply(r.scale), Y.clone();
        }
        return new U().setFromObject(r).getSize(new p);
    }
    class tt {
        constructor(){
            this.backAudio, this.oceanAudio, this.inwaterAudio, this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [], this.musics = [];
        }
        async loadAudio() {
            const s = new Ms, a = new zs;
            await a.loadAsync("audio/back1.mp3").then((e)=>{
                this.backAudio = new v(s), this.backAudio.setBuffer(e), this.backAudio.setLoop(!0), this.backAudio.setRefDistance(100), this.backAudio.setVolume(2), this.musics.push({
                    name: "back",
                    music: this.backAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await a.loadAsync("audio/ocean.wav").then((e)=>{
                this.oceanAudio = new v(s), this.oceanAudio.setBuffer(e), this.oceanAudio.setLoop(!0), this.oceanAudio.setRefDistance(100), this.oceanAudio.setVolume(.4), this.musics.push({
                    name: "ocean",
                    music: this.oceanAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await a.loadAsync("audio/inwater.wav").then((e)=>{
                this.inwaterAudio = new v(s), this.inwaterAudio.setBuffer(e), this.inwaterAudio.setLoop(!1), this.inwaterAudio.setRefDistance(200), this.inwaterAudio.setVolume(1), this.musics.push({
                    name: "inwater",
                    music: this.inwaterAudio
                });
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await a.loadAsync("audio/ready-jump.wav").then((e)=>{
                this.readyJumpAudio = new v(s), this.readyJumpAudio.setBuffer(e), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await a.loadAsync("audio/quack1.mp3").then((e)=>{
                this.jumpAudio = new v(s), this.jumpAudio.setBuffer(e), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await a.loadAsync("audio/quack2.mp3").then((e)=>{
                this.jumpAudio2 = new v(s), this.jumpAudio2.setBuffer(e), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await a.loadAsync("audio/quack3.mp3").then((e)=>{
                this.jumpAudio3 = new v(s), this.jumpAudio3.setBuffer(e), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await a.loadAsync("audio/quack5.mp3").then((e)=>{
                this.jumpAudio4 = new v(s), this.jumpAudio4.setBuffer(e), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            });
        }
        stopMusic(s) {
            s == 0 ? this.musics.forEach((a, e, t)=>{
                a.music.stop();
            }) : s.forEach((a, e, t)=>{
                this.musics.find((i)=>i.name === a).music.stop();
            });
        }
        pauseMusic(s) {
            s.forEach((a, e, t)=>{
                this.musics.find((i)=>i.name === a).music.pause();
            });
        }
        playMusic(s) {
            s.forEach((a, e, t)=>{
                let i = this.musics.find((o)=>o.name === a).music;
                i.isPlaying || i.play();
            });
        }
    }
    class et {
        constructor(s, a, e, t, i){
            this.levelClass = s, this.isMobile = a, this.renderer = e, this.camera = t, this.paramsClass = i, this.mouse = new p, this.raycaster = new Cs;
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
                    this.levelClass.players.forEach((a, e, t)=>{
                        a.player.userData.playerAlive = !0;
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
    class at {
        constructor(s, a, e, t, i){
            this.scene = s, this.camera = a, this.renderer = e, this.paramsClass = t, this.isMobile = i, this.ambientLight = new Ss(11184810, 1), this.hemiLight = new Ls(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new As(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new ss, this.dirLight.target = this.targetObject, this.helper = new _s(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x;
        }
        async loadWaterSky() {
            this.waterGeometry = new es(900, 500), this.water = new Hs(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new ys().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = G;
                }),
                sunDirection: new p,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new p, this.sky = new Es, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new Q(new es(1e4, 1e4), new ks({
                color: 526362,
                side: Bs,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const a = 1500, e = new Float32Array(a * 3), t = new Float32Array(a), i = new Float32Array(a * 3);
            for(let h = 0; h < a; h++){
                e[3 * h] = Math.random() * 600 - 300, e[3 * h + 1] = Math.random() * 150 - 100, e[3 * h + 2] = Math.random() * 300 - 500, t[h] = Math.random() * 2 + .7;
                const c = new M().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                i[3 * h] = c.r, i[3 * h + 1] = c.g, i[3 * h + 2] = c.b;
            }
            const o = new Rs;
            o.setAttribute("position", new X(e, 3)), o.setAttribute("size", new X(t, 1)), o.setAttribute("color", new X(i, 3));
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
            this.materialStars = new Ts({
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
                blending: bs
            }), this.stars = new Fs(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, a = Math.sign(s - this._prevCamX);
            this._prevCamX = a, this.stars.position.x = this.camera.position.x;
            const e = z.degToRad(90 - this.parameters.elevation), t = z.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, e, t), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.parameters.elevation < -2 ? this.night = !0 : this.night = !1), this.paramsClass.gameDir == "vert") {
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
    class it {
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
            }), document.querySelectorAll(".levels_blocks .levels_block").forEach((s, a, e)=>{
                s.addEventListener("click", ()=>{
                    this.hideScreen("levels_game_screen"), this.initMatch(1, 2, a + 1);
                });
            }), document.querySelector(".free_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(1, 2);
            }), document.querySelector(".free_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(1, 4);
            }), document.querySelector(".together_game_btn1_1").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(this.playersNum, 1);
            }), document.querySelector(".together_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(this.playersNum, 2);
            }), document.querySelector(".together_game_btn1_3").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(this.playersNum, 3);
            }), document.querySelector(".together_game_btn1_4").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(this.playersNum, 4);
            }), document.querySelectorAll(".together_game_chels").forEach((s, a, e)=>{
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
    class ot {
        constructor(){
            this.gameDir = "vert", this.gameStarting = !1, this.dataLoaded = !1;
        }
    }
    class nt {
        constructor(s){
            this.camera = s, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(s) {
            if (s = Math.max(0, Math.floor(s)), s === this.shownFloat) return;
            const a = ds, e = performance.now(), t = 200;
            function i(o) {
                const n = Math.min(1, (o - e) / t), l = 1 - Math.pow(1 - n, 4), h = Math.round(a + (s - a) * l);
                rt.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(i) : ds = s;
            }
            requestAnimationFrame(i);
        }
    }
    const rt = document.getElementById("meters-float");
    let ds = 0;
    console.clear();
    let Z, gs = !1, q = 0, us = 1 / 60, lt = new ms, fs, N, W, D, g, k, I, P, R;
    const T = new Gs;
    T.background = new M(13230580);
    const y = new Is(25, window.innerWidth / window.innerHeight, .1, 2e3);
    y.position.z = 7;
    y.position.y = 2;
    const O = Xs();
    let V = new Us;
    document.body.appendChild(V.dom);
    V.dom.style.top = "0px";
    V.dom.style.left = "48%";
    const f = new Ws;
    f.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(f.domElement);
    f.shadowMap.enabled = !0;
    f.shadowMap.type = qs;
    f.outputColorSpace = Ns;
    f.toneMapping = Os;
    f.toneMappingExposure = 1.05;
    js();
    window.addEventListener("resize", js, !1);
    function js() {
        O ? (y.aspect = document.body.offsetWidth / document.body.offsetHeight, y.updateProjectionMatrix(), f.setSize(innerWidth, innerHeight)) : (y.aspect = document.body.offsetWidth / document.body.offsetHeight, y.updateProjectionMatrix(), f.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function ht(r) {
        const s = await Ks(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Z = new s.World(new s.Vector3(0, -9.81, 0)), fs = new s.EventQueue(!0), D = new E(Z, s), R = new nt(y), k = new tt, W = new at(T, y, f, P, O), g = new st(T, k, D, f, y, O, P, W);
        for(let a = 0; a < r; a++)g.players.push(new Zs(T, k, g, P, y));
        I = new et(g, O, f, y, P), I.addKeyListeners();
    }
    async function pt() {
        await W.loadWorld(), await k.loadAudio(), k.backAudio.play(), k.oceanAudio.play();
    }
    async function dt(r) {
        await g.createLevel(r), await g.loadEnvironments(), await g.loadPlayers(), g.objs.grassPlanes.data.length > 0 && g.objs.grassPlanes.data.forEach((s, a)=>{
            g.objs.grassPlanes.data[a].userData.collide.setCollisionGroups(J([
                0
            ], [
                1
            ]));
        }), g.players.length > 0 && g.players.forEach((s, a)=>{
            g.players[a].player.userData.collider.setCollisionGroups(J([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function ut(r, s, a = !1) {
        ct(), N.toggleLoader(!0), P = new ot, await ht(r), g.gameNum = s, await pt(), await dt(a), setTimeout(()=>{
            N.showScreen("hud"), N.toggleLoader(!1), P.dataLoaded = !0, P.gameStarting = !0, gs = !0;
        }, 300);
    }
    N = new it(ut);
    function ct() {
        y.position.z = 7, y.position.y = 2, y.position.x = 0, f.toneMappingExposure = 1.05, I?.removedKeyListeners(), W = null, D = null, g = null, k = null, I = null, P = null, R = null;
    }
    function mt() {
        if (P.dataLoaded) {
            P.gameDir == "hor" ? R.updateMetersFloat(y.position.x - R.startX) : R.updateMetersFloat(y.position.y - R.startY), g.players.forEach((r, s, a)=>{
                r.playerMove();
            }), W.updateLighting(), g.levelAnimate(y), g.cameraMove(y), V.update();
            for(let r = 0, s = D.dynamicBodies.length; r < s; r++)D.dynamicBodies[r][0].position.copy(D.dynamicBodies[r][1].translation()), D.dynamicBodies[r][0].quaternion.copy(D.dynamicBodies[r][1].rotation());
            D.updateInstancedTransforms(), Z.step(fs), f.render(T, y);
        }
    }
    f.setAnimationLoop(()=>{
        q += lt.getDelta(), q > us && gs && (mt(), f.render(T, y), q = q % us);
    });
})();

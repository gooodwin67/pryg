import { B as H, V as h, Q as X, M as yt, a as V, b, c as v, d as T, G as K, S as ft, E as M, I as P, D, C as ht, O as Q, T as pt, R as A, P as gt, e as B, f as F, A as bt, g as wt, h as S, i as xt, j as Mt, H as Pt, k as Dt, l as jt, m as $, W as vt, n as Ct, o as zt, p as St, q as Lt, r as U, s as At, t as Et, u as _t, v as Bt, w as Ht, x as kt, y as Rt, z as Gt, F as Tt, J as Wt } from "./three-CYd585tf.js";
(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);
        new MutationObserver((a)=>{
            for (const i of a)if (i.type === "childList") for (const o of i.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && e(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function s(a) {
            const i = {};
            return a.integrity && (i.integrity = a.integrity), a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? i.credentials = "include" : a.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
        }
        function e(a) {
            if (a.ep) return;
            a.ep = !0;
            const i = s(a);
            fetch(a.href, i);
        }
    })();
    const It = "modulepreload", Ft = function(n, t) {
        return new URL(n, t).href;
    }, Z = {}, qt = function(t, s, e) {
        let a = Promise.resolve();
        if (s && s.length > 0) {
            let l = function(d) {
                return Promise.all(d.map((y)=>Promise.resolve(y).then((x)=>({
                            status: "fulfilled",
                            value: x
                        }), (x)=>({
                            status: "rejected",
                            reason: x
                        }))));
            };
            const o = document.getElementsByTagName("link"), r = document.querySelector("meta[property=csp-nonce]"), p = r?.nonce || r?.getAttribute("nonce");
            a = l(s.map((d)=>{
                if (d = Ft(d, e), d in Z) return;
                Z[d] = !0;
                const y = d.endsWith(".css"), x = y ? '[rel="stylesheet"]' : "";
                if (!!e) for(let z = o.length - 1; z >= 0; z--){
                    const k = o[z];
                    if (k.href === d && (!y || k.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${d}"]${x}`)) return;
                const f = document.createElement("link");
                if (f.rel = y ? "stylesheet" : It, y || (f.as = "script"), f.crossOrigin = "", f.href = d, p && f.setAttribute("nonce", p), document.head.appendChild(f), y) return new Promise((z, k)=>{
                    f.addEventListener("load", z), f.addEventListener("error", ()=>k(new Error(`Unable to preload CSS for ${d}`)));
                });
            }));
        }
        function i(o) {
            const r = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (r.payload = o, window.dispatchEvent(r), !r.defaultPrevented) throw o;
        }
        return a.then((o)=>{
            for (const r of o || [])r.status === "rejected" && i(r.reason);
            return t().catch(i);
        });
    };
    function j(n, t) {
        return Math.random() * (t - n) + n;
    }
    function Ot() {
        let n = window.matchMedia || window.msMatchMedia;
        return n ? n("(pointer:coarse)").matches : !1;
    }
    function L(n, t) {
        n.geometry.computeBoundingBox(), t.forEach(function(a, i, o) {
            a.geometry.computeBoundingBox();
        }), n.updateMatrixWorld(), t.forEach(function(a, i, o) {
            a.updateMatrixWorld();
        });
        let s = n.geometry.boundingBox.clone();
        s.applyMatrix4(n.matrixWorld);
        var e = !1;
        for(let a = t.length - 1; a > -1; a--)if (t[a].userData.id == null || t[a].userData.id != n.uuid) {
            let i = t[a].geometry.boundingBox.clone();
            i.applyMatrix4(t[a].matrixWorld), i.intersectsBox(s) && (e = t[a]);
        }
        return e;
    }
    function tt(n) {
        return n.reduce((t, s)=>t | 1 << s, 0);
    }
    function q(n, t) {
        const s = tt(n), e = tt(t);
        return "0x" + ((s & 65535) << 16 | e & 65535).toString(16).padStart(8, "0");
    }
    function et(n) {
        const t = n.collisionGroups(), s = t >>> 16 & 65535, e = t & 65535;
        function a(i) {
            const o = [];
            for(let r = 0; r < 16; r++)i & 1 << r && o.push(r);
            return o;
        }
        return [
            a(s),
            a(e)
        ];
    }
    function Ut(n) {
        return typeof n == "number" ? new h(n, n, n) : n?.isVector3 ? n : new h(n?.x ?? 1, n?.y ?? 1, n?.z ?? 1);
    }
    function st(n) {
        return n?.userData?.id ?? n?.uuid ?? n?.id;
    }
    const Jt = new H(new h(-.5, -.5, -.5), new h(.5, .5, .5)), at = new yt, it = new X;
    function ot(n) {
        if (n?.isObject3D) {
            if (n.updateMatrixWorld(!0), n.geometry?.isBufferGeometry) {
                const a = n.geometry;
                if (a.boundingBox || a.computeBoundingBox(), a.boundingBox) {
                    const i = a.boundingBox.clone();
                    return i.applyMatrix4(n.matrixWorld), i;
                }
            }
            return new H().setFromObject(n);
        }
        const t = n.position ?? n.pos ?? new h, s = Ut(n.size ?? 1), e = n.quaternion?.isQuaternion ? n.quaternion : n.rotation?.isEuler ? it.setFromEuler(n.rotation) : it.set(0, 0, 0, 1);
        return at.compose(t, e, s), Jt.clone().applyMatrix4(at);
    }
    function R(n, t) {
        const s = ot(n), e = st(n);
        for(let a = t.length - 1; a >= 0; a--){
            const i = t[a], o = st(i);
            if (e !== void 0 && o !== void 0 && e === o) continue;
            if (ot(i).intersectsBox(s)) return i;
        }
        return null;
    }
    class Xt {
        constructor(t, s, e, a){
            this.scene = t, this.audioClass = s, this.levelClass = e, this.paramsClass = a, this.playerHeight = .8, this.playerWidth = .4, this.player = new V(new b(this.playerWidth, this.playerHeight, this.playerWidth), new v({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !0, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = !0, this.player.userData.startPos, this.playerModel, this.playerOut = new V(new b(this.playerWidth, this.playerHeight + .1, this.playerWidth), new T({
                color: 16776960,
                transparent: !0,
                opacity: 0
            })), this.playerOut.material.depthWrite = !1, this.playerOut.userData.id = this.player.uuid, this.leftHand, this.rightHand, this.head, this.headPosition, this.playerColors = [
                15904944,
                11596464,
                16052346,
                11579634
            ];
        }
        async loadPlayerModel() {
            await new K().loadAsync("models/players/player1.glb").then((e)=>{
                const a = e.scene;
                this.playerModel = a, this.playerModel.traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = .9, this.playerModel.scale.y = .9, this.playerModel.scale.z = .9;
            });
        }
        playerMove() {
            if (R(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [t, s] = et(this.player.userData.collider);
                s[0] == 0 && this.player.userData.collider.setCollisionGroups(q([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, s] = et(this.player.userData.collider);
                s[0] != 0 && this.player.userData.collider.setCollisionGroups(q([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if (R(this.player, this.levelClass.objs.topPlanes.data) || R(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), R(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].position.copy(new h(this.player.userData.head.getWorldPosition(new h).x - .05, this.player.userData.head.getWorldPosition(new h).y + .15, this.player.userData.head.getWorldPosition(new h).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -2 && (this.player.userData.live = !1), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, s = this.player.userData.readyJump ? -Math.PI / 2 : 0, e = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, a = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, i = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, r = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, p = this.player.userData.readyJump ? .75 : 1.18, l = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, s, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, i, .1), this.head.position.y = this.lerp(this.head.position.y, p, .1), this.head.position.z = this.lerp(this.head.position.z, l, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, r, .1);
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
        }
        lerp(t, s, e) {
            return t + (s - t) * e;
        }
    }
    class Vt {
        constructor(t, s, e, a, i, o, r, p){
            this.scene = t, this.audioClass = s, this.physicsClass = e, this.renderer = a, this.camera = i, this.isMobile = o, this.paramsClass = r, this.worldClass = p, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.fixedDistanceHor = {
                min: 2,
                max: 3
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (l, d)=>({
                            position: new h(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new h(1, 1, 1),
                            size: new h(1, 1, 1),
                            userData: {
                                name: "plane",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlane: new b(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new v({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (l, d)=>({
                            position: new h(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new h(1, 1, 1),
                            size: new h(1, 1, 1),
                            userData: {
                                name: "topSensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneTop: new b(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new T({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (l, d)=>({
                            position: new h(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new h(1, 1, 1),
                            size: new h(1, 1, 1),
                            userData: {
                                name: "tops",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneGrass: new b(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new v({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (l, d)=>({
                            position: new h(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new h(1, 1, 1),
                            size: new h(1, 1, 1),
                            userData: {
                                name: "sensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneSensor: new b(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new v({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (l, d)=>({
                            position: new h(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new h(1, 1, 1),
                            size: new h(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new b(.3, 1, .3),
                    materialLamp: new v({
                        color: 16777215,
                        transparent: !0,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (l, d)=>({
                            position: new h(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new h(1, 1, 1),
                            size: new h(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new ft(.3),
                    materialPlafon: new v({
                        color: 16051917,
                        transparent: !0,
                        opacity: .8
                    }),
                    plafon: null
                }
            }, this.objs.planes.plane = new P(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(D), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new P(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(D), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new P(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(D), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new P(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(D), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.lamps.lamp = new P(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(D), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new P(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(D), this.objs.plafons.plafon.frustumCulled = !1, this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new h(-1, 0, 0), this.rightEdge = new h(1, 0, 0), this.leftEdge.unproject(i), this.rightEdge.unproject(i), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 8
            }, this.dt = new ht;
        }
        toVec3(t) {
            return typeof t == "number" ? new h(t, t, t) : t?.isVector3 ? t : t ? new h(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new h(1, 1, 1);
        }
        apply(t, s, e) {
            let a = e.userData.invBaseSize;
            if (!a) {
                const p = e.geometry;
                p.computeBoundingBox();
                const l = new h;
                p.boundingBox.getSize(l), a = e.userData.invBaseSize = new h(1 / (l.x || 1), 1 / (l.y || 1), 1 / (l.z || 1));
            }
            this._dummy ||= new Q;
            const i = this._dummy, o = s[t] || {}, r = this.toVec3(o.size);
            i.position.copy(o.position || new h), o.rotation ? i.rotation.copy(o.rotation) : i.rotation.set(0, 0, 0), i.scale.set(r.x * a.x, r.y * a.y, r.z * a.z), i.updateMatrix(), e.setMatrixAt(t, i.matrix);
        }
        async loadTexture() {
            const t = new pt;
            t.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (s)=>{
                const e = new T({
                    map: s,
                    transparent: !0,
                    opacity: 1
                });
                s.wrapS = A, s.wrapT = A, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = e;
            }, void 0, function(s) {
                console.error("An error happened.");
            }), t.load("textures/123.jpg", (s)=>{
                const e = new T({
                    map: s
                });
                s.wrapS = A, s.wrapT = A, s.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = e;
            }, void 0, function(s) {
                console.error("An error happened.");
            });
        }
        async createLevel() {
            switch(await this.loadTexture(), await this.loadBoostsModel(), await this.loadEnvironmentModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let t = -2.5;
                    for(let e = 0; e < this.count; e++){
                        let a = j(this.planeWidth / 8, this.planeWidth - 1), i = t + a / 2 + j(this.fixedDistanceHor.min, this.fixedDistanceHor.max), o = j(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 0 ? (this.objs.planes.data[e].size.x = a, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = a + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e > 0 ? (this.objs.planes.data[e].position.x = i, this.objs.planes.data[e].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = i, this.objs.topPlanes.data[e].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = i, this.objs.grassPlanes.data[e].position.y = o + this.planeHeight / 1.5) : (this.objs.planes.data[e].position.x = -this.planeWidth / 2, this.objs.planes.data[e].position.y = -this.planeHeight / 2 + .5, this.objs.topPlanes.data[e].position.x = -this.planeWidth / 2, this.objs.topPlanes.data[e].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .4, this.objs.grassPlanes.data[e].position.x = -this.planeWidth / 2, this.objs.grassPlanes.data[e].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .3), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const r = new gt(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(e, this.objs.planes.data, this.objs.planes.plane), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), t = i + a / 2;
                    }
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let s = -5;
                    for(let e = 0; e < this.count; e++){
                        let a = j(this.bounds.rightX / 2, this.bounds.rightX / 8), i = s + j(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        this.objs.topPlanes.data[e].position.y = i - 1.3, this.objs.grassPlanes.data[e].position.y = i, this.objs.sensorPlanes.data[e].position.y = i - .5, this.objs.topPlanes.data[e].size.y = .3, this.objs.grassPlanes.data[e].size.y = .7, this.objs.sensorPlanes.data[e].size.y = .9, e > 0 ? (this.objs.topPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.sensorPlanes.data[e].size.x = a + .5) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), this.objs.grassPlanes.data[e].userData.speed = j(4, 8) / 100, this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), s = i;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor);
                    break;
            }
        }
        getHorizontalWorldBounds(t = 0) {
            const s = new h(-1, 0, .5), e = new h(1, 0, .5);
            if (s.unproject(this.camera), e.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const a = this.camera.position, i = s.clone().sub(a).normalize(), o = e.clone().sub(a).normalize(), r = (t - a.z) / i.z, p = a.clone().add(i.multiplyScalar(r)), l = a.clone().add(o.multiplyScalar(r));
                this.bounds = {
                    leftX: p.x,
                    rightX: l.x
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "vert") {
                for(let t = 0; t < this.objs.grassPlanes.data.length; t++){
                    const s = this.objs.grassPlanes.data[t], e = this.objs.topPlanes.data[t];
                    this.objs.sensorPlanes.data[t];
                    const a = s.userData.body, i = s.userData.speed, o = a.translation();
                    o.x > this.bounds.rightX - s.size.x / 2 ? s.userData.direction = -1 : o.x < this.bounds.leftX + s.size.x / 2 && (s.userData.direction = 1);
                    const r = s.userData.direction * i, p = o.x + r;
                    t > 0 && a.setNextKinematicTranslation({
                        x: p,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[t].position.x = p, this.objs.topPlanes.data[t].position.x = p, this.objs.topPlanes.data[t].position.y = o.y + .4, this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), e.position.set(p, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBoostsModel() {
            await new K().loadAsync("models/boosts/hat.glb").then((e)=>{
                const a = e.scene;
                this.boostHatModel = a, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .015, this.boostHatModel.scale.y = .015, this.boostHatModel.scale.z = .015, this.boostHatModel.userData.fly = !1;
            });
        }
        async loadEnvironmentModel() {
            await new K().loadAsync("models/environment/clouds.glb").then((e)=>{
                const a = e.scene;
                this.cloudModel = a, this.cloudModel.children.forEach((i, o, r)=>{
                    i.position.x = o * 3, i.position.y = 4, i.position.z = -25, i.scale.x = .9, i.scale.y = .9, i.scale.z = .9;
                });
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
            }), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : Math.random() < .3 && t > 1 && (this.objs.grassPlanes.data[t].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(t, new B(13421806)));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
            for(let t = 1; t < 10; t++)this.boostHatModel.clone(), this.paramsClass.gameDir == "vert";
            this.clouds.forEach((t, s, e)=>{
                this.scene.add(t);
            });
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.boostHatModels.forEach((t, s, e)=>{
                t.children[0].children[1].rotation.y += .05;
            });
        }
        lampsAnimate() {
            if (this.paramsClass.gameDir == "hor" && this.worldClass.night) {
                const t = this.camera.position.x - this.bounds.rightX / 2, s = this.camera.position.x + this.bounds.rightX * .8, e = .15, a = this.lightIntensity;
                let i = !1;
                this.objs.plafons.data.forEach((o, r)=>{
                    const p = o.position.x >= t && o.position.x <= s;
                    let l = o.pointLight || null;
                    if (p ? !l && this.lights.length > 0 && (l = this.lights.shift(), o.pointLight = l, o.userData.light = !0, this.objs.plafons.plafon.setColorAt(r, new B(16247464)), i = !0) : o.userData.light && (this.objs.plafons.plafon.setColorAt(r, new B(16247464)), i = !0), l) {
                        l.position.x = this.objs.lamps.data[r].position.x, l.position.y = this.objs.lamps.data[r].position.y + 1, l.position.z = this.objs.lamps.data[r].position.z;
                        const d = p ? a : 0;
                        l.intensity = F.lerp(l.intensity, d, e), l.intensity = F.clamp(l.intensity, 0, a), !p && l.intensity <= .01 && (this.lights.push(l), o.pointLight = null, o.userData.light = !1);
                    }
                }), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0);
            }
        }
        resetLevel() {
            if (this.paramsClass.gameDir == "hor") {
                for(let t = 0; t < this.count; t++)t < this.lightsCount ? (this.lights[t].position.set(this.objs.lamps.data[t].position.x, this.objs.lamps.data[t].position.y + 1, 1.6), this.bulbs[t].position.copy(new h(this.lights[t].position.x, this.lights[t].position.y, this.objs.lamps.data[t].position.z)), this.objs.lamps.data[t].userData.light = !0, this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp)) : (this.objs.lamps.data[t].userData.light = !1, this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp));
                this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0;
            }
        }
        maxSpeed() {
            let t = this.players;
            if (t.length === 0) return -1;
            let s = 0, e;
            this.paramsClass.gameDir == "vert" ? e = t[0].player.position.y : e = t[0].player.position.x;
            for(let a = 1; a < t.length; a++)t[a].player && t[a].player.position ? this.paramsClass.gameDir == "vert" ? t[a].player.position.y > e && (e = t[a].player.position.y, s = a) : t[a].player.position.x > e && (e = t[a].player.position.x, s = a) : console.warn(`Player at index ${a} is missing player or position properties.`);
            return s;
        }
        async loadPlayers() {
            for(let t = 0; t < this.players.length; t++){
                let s = this.players[t];
                s.player.position.x = s.player.position.x - t * 1, this.physicsClass.addPhysicsToObject(s.player), this.paramsClass.gameDir == "vert" && (s.player.position.y = -0, s.player.userData.collider.setFriction(500)), await s.loadPlayerModel(), s.player.userData.startPos = s.player.position.clone(), this.scene.add(s.player), this.scene.add(s.playerOut), this.scene.add(s.playerModel), this.playerOuts.push(s.playerOut), t < this.players[0].playerColors.length ? s.head.children[0].material.color.set(this.players[0].playerColors[t]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), s.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > t ? s.player.userData.audio.push(this.audioClass.quacks[t].clone()) : s.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(t, s = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    t.position.x += .03, t.position.y = this.isMobile ? 3.5 : 3, t.position.z = this.isMobile ? 13 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const e = this.maxSpeed(this.players);
                        if (e >= 0) {
                            const a = this.players[e].player.position.x, i = this.cam.maxBackJump;
                            a < this.cam.targetX - i ? this.cam.targetX = this.cam.targetX - i : this.cam.targetX = a;
                            const o = this.spring(t.position.x, this.cam.targetX, this.cam.velX, .95, s);
                            t.position.x = o.newPos, this.cam.velX = o.newVel, t.position.y = this.isMobile ? 3.5 : 3, t.position.z = this.isMobile ? 13 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                        }
                        break;
                    }
                case 3:
                    t.position.y += .01, t.position.x = 0, t.position.z = this.isMobile ? 20 : 22, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 4:
                    t.position.y = this.players[this.maxSpeed(this.players)].player.position.y + 3.5, t.position.x = 0, t.position.z = this.isMobile ? 15 : 22, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
            }
        }
        damp(t, s, e, a) {
            return t + (s - t) * (1 - Math.exp(-e * a));
        }
        spring(t, s, e, a, i) {
            const o = 2 / a, r = o * i, p = 1 / (1 + r + .48 * r * r + .235 * r * r * r);
            let l = t - s;
            const d = (e + o * l) * i, y = (e - o * d) * p;
            return {
                newPos: s + (l + d) * p,
                newVel: y
            };
        }
    }
    class w {
        constructor(t, s){
            this.world = t, this.RAPIER = s, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Q;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const s = t.geometry;
            s.computeBoundingBox();
            const e = new h;
            s.boundingBox.getSize(e);
            const a = new h(1 / (e.x || 1), 1 / (e.y || 1), 1 / (e.z || 1));
            return t.userData.invBase = a, a;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new h(t, t, t) : t?.isVector3 ? t.clone() : new h(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, s, e) {
            const a = w._toVec3(e.size), i = w._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = e.quaternion?.isQuaternion ? e.quaternion : new X, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(i.x, i.y, i.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), p = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(p, r), this.instancedBodies.push({
                mesh: t,
                index: s,
                size: a,
                body: r
            });
        }
        addInstancedStatic(t, s, e, a) {
            const i = w._toVec3(a.size), o = w._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), r = a.quaternion?.isQuaternion ? a.quaternion : new X, p = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: r.x,
                y: r.y,
                z: r.z,
                w: r.w
            })), l = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(1.6).setRestitution(0);
            t[e].userData.body = p, t[e].userData.shape = l, t[e].userData.collide = this.world.createCollider(l, p), this.instancedBodies.push({
                mesh: s,
                index: e,
                size: i,
                body: p
            });
        }
        updateInstancedTransforms() {
            const t = this._dummy, s = new Set;
            for (const e of this.instancedBodies){
                const a = w._ensureInvBase(e.mesh), i = e.body.translation(), o = e.body.rotation();
                t.position.set(i.x, i.y, i.z), t.quaternion.set(o.x, o.y, o.z, o.w), t.scale.set(e.size.x * a.x, e.size.y * a.y, e.size.z * a.z), t.updateMatrix(), e.mesh.setMatrixAt(e.index, t.matrix), s.add(e.mesh);
            }
            for (const e of s)e.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let s, e;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new H().setFromObject(t);
                const i = nt(t);
                t.rotation.copy(a), t.userData.size = i, t.userData.orgRotation = a, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(.6).setRestitution(0).setFriction(.4).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), t.userData.body = s, t.userData.shape = e;
                let o = s;
                e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let r = this.world.createCollider(e, s);
                t.userData.collider = r, t.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    t,
                    s,
                    t.id
                ]);
            } else if (t != null && t.userData.name.includes("tops")) {
                let s, e;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new H().setFromObject(t);
                const i = nt(t);
                t.rotation.copy(a), t.userData.size = i, t.userData.orgRotation = a, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(1).setRestitution(0).setFriction(.3), e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(e, s);
                t.userData.body = s, t.userData.collide = o, this.allWallBodyCollision.push(o), t.userData.handle = s.handle, this.dynamicBodies.push([
                    t,
                    s,
                    t.id
                ]), t.userData.playerHandlesInside = new Set, this.allTops.push(t);
            }
        }
    }
    const J = new h;
    function nt(n) {
        if (n.isMesh && n.geometry) {
            const s = n.geometry;
            return s.boundingBox || s.computeBoundingBox(), s.boundingBox.getSize(J), J.multiply(n.scale), J.clone();
        }
        return new H().setFromObject(n).getSize(new h);
    }
    class Kt {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const t = new bt, s = new wt;
            await s.loadAsync("audio/ready-jump.wav").then((e)=>{
                this.readyJumpAudio = new S(t), this.readyJumpAudio.setBuffer(e), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack1.mp3").then((e)=>{
                this.jumpAudio = new S(t), this.jumpAudio.setBuffer(e), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack2.mp3").then((e)=>{
                this.jumpAudio2 = new S(t), this.jumpAudio2.setBuffer(e), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack3.mp3").then((e)=>{
                this.jumpAudio3 = new S(t), this.jumpAudio3.setBuffer(e), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack5.mp3").then((e)=>{
                this.jumpAudio4 = new S(t), this.jumpAudio4.setBuffer(e), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            });
        }
    }
    class Nt {
        constructor(t, s, e, a){
            this.levelClass = t, this.isMobile = s, this.renderer = e, this.camera = a, this.camera = a, this.mouse = new h, this.raycaster = new xt, this.addKeyListeners();
        }
        addKeyListeners() {
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
        }
        onTapDown = (t)=>{
            let s = this.renderer.domElement.getBoundingClientRect();
            t = t.changedTouches[0], this.mouse.x = (t.clientX - s.left) / s.width * 2 - 1, this.mouse.y = -((t.clientY - s.top) / s.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
        };
        onTapUp = (t)=>{
            let s = this.renderer.domElement.getBoundingClientRect();
            t = t.changedTouches[0], this.mouse.x = (t.clientX - s.left) / s.width * 2 - 1, this.mouse.y = -((t.clientY - s.top) / s.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
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
                case "KeyD":
                case "ArrowRight":
                    this.levelClass.players.forEach((s, e, a)=>{
                        s.player.userData.live = !0;
                    });
                    break;
            }
        };
        downKeys(t) {
            t.userData.live && (t.userData.onGround || t.userData.canFly) && (t.userData.readyJump = !0, t.userData.audio[0].play());
        }
        upKeys(t) {
            t.userData.live && (t.userData.readyJump && t.userData.onGround ? (t.userData.jumping = !0, t.userData.readyJump = !1, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = !1) : t.userData.onGround || (t.userData.canFly ? (t.userData.jumping = !0, t.userData.readyJump = !1, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = !1, t.userData.hatBoost--, t.userData.hatBoost == 0 && (t.userData.canFly = !1, setTimeout(()=>{
                this.levelClass.boostHatModels[t.userData.numHatBoost].userData.fly = !1;
            }, 500))) : (t.userData.readyJump = !1, t.userData.audio[0].stop())));
        }
    }
    class Yt {
        constructor(t, s, e, a){
            this.scene = t, this.camera = s, this.renderer = e, this.paramsClass = a, this.ambientLight = new Mt(11184810, 1), this.hemiLight = new Pt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Dt(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Q, this.dirLight.target = this.targetObject, this.helper = new jt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x;
        }
        async loadWaterSky() {
            this.waterGeometry = new $(1e3, 500), this.water = new vt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new pt().load("textures/waternormals.jpg", function(l) {
                    l.wrapS = l.wrapT = A;
                }),
                sunDirection: new h,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = -2, this.sun = new h, this.sky = new Ct, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new V(new $(1e4, 1e4), new zt({
                color: 526362,
                side: St,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const s = 1500, e = new Float32Array(s * 3), a = new Float32Array(s), i = new Float32Array(s * 3);
            for(let l = 0; l < s; l++){
                e[3 * l] = Math.random() * 600 - 300, e[3 * l + 1] = Math.random() * 150 - 100, e[3 * l + 2] = Math.random() * 300 - 500, a[l] = Math.random() * 2 + .7;
                const d = new B().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                i[3 * l] = d.r, i[3 * l + 1] = d.g, i[3 * l + 2] = d.b;
            }
            const o = new Lt;
            o.setAttribute("position", new U(e, 3)), o.setAttribute("size", new U(a, 1)), o.setAttribute("color", new U(i, 3));
            const r = `
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
`, p = `
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
            this.materialStars = new At({
                uniforms: {
                    time: {
                        value: 0
                    },
                    opacity: {
                        value: 0
                    }
                },
                vertexShader: r,
                fragmentShader: p,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: Et
            }), this.stars = new _t(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const t = this.camera.position.x, s = Math.sign(t - this._prevCamX);
            this._prevCamX = s, this.stars.position.x = this.camera.position.x;
            const e = F.degToRad(90 - this.parameters.elevation), a = F.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, e, a), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.parameters.elevation < -2 ? this.night = !0 : this.night = !1), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const r = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= r * .05, this.blackSky.material.opacity += r * .05, this.materialStars.uniforms.opacity.value += r * .01, this.camera.position.y < this.topLight && r < 0 ? (this.dirLight.intensity -= r * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= r * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= r * .05, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && r > 0 && (this.dirLight.intensity -= r * .05, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= r * .05, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= r * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && (this.topLight = this.camera.position.y), this.parameters.elevation = Math.max(-100, Math.min(100, this.parameters.elevation)), this.prevCameraYSun = this.camera.position.y, this.camera.position.y > 30 ? this.night = !0 : this.night = !1;
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
            const t = 10;
            this.dirLight.shadow.camera.left = -t, this.dirLight.shadow.camera.right = t, this.dirLight.shadow.camera.top = t, this.dirLight.shadow.camera.bottom = -t, this.waterUpdate(), this.updateSky();
        }
    }
    class Qt {
        constructor(t){
            this.initMatch = t, this.mainMenu(this.initMatch), this.playersNum = 2;
        }
        mainMenu = ()=>{
            document.querySelector(".new_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("free_game_screen");
            }), document.querySelector(".new_game_btn2").addEventListener("click", ()=>{
                this.hideScreen("main_screen"), this.showScreen("together_game_screen");
            }), document.querySelector(".free_game_btn1_1").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(1, 1);
            }), document.querySelector(".free_game_btn1_2").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(1, 2);
            }), document.querySelector(".free_game_btn1_3").addEventListener("click", ()=>{
                this.hideScreen("free_game_screen"), this.initMatch(1, 3);
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
            }), document.querySelectorAll(".together_game_chels").forEach((t, s, e)=>{
                t.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((a)=>{
                        a.classList.remove("together_game_chels_active");
                    }), t.classList.add("together_game_chels_active"), this.playersNum = s + 2;
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
    class $t {
        constructor(){
            this.gameDir = "vert";
        }
    }
    class Zt {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const s = rt, e = performance.now(), a = 200;
            function i(o) {
                const r = Math.min(1, (o - e) / a), p = 1 - Math.pow(1 - r, 4), l = Math.round(s + (t - s) * p);
                te.textContent = String(l).padStart(3, "0"), r < 1 ? requestAnimationFrame(i) : rt = t;
            }
            requestAnimationFrame(i);
        }
    }
    const te = document.getElementById("meters-float");
    let rt = 0;
    console.clear();
    let N, dt = !1, G = 0, lt = 1 / 60, ee = new ht, ct, W, O, g, c, I, E, _;
    const C = new Bt;
    C.background = new B(13230580);
    const u = new Ht(25, window.innerWidth / window.innerHeight, .1, 2e3);
    u.position.z = 7;
    u.position.y = 2;
    const Y = Ot();
    let ut = new kt;
    document.body.appendChild(ut.dom);
    const m = new Rt;
    m.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(m.domElement);
    m.shadowMap.enabled = !0;
    m.shadowMap.type = Gt;
    m.outputColorSpace = Tt;
    m.toneMapping = Wt;
    m.toneMappingExposure = 1.05;
    mt();
    window.addEventListener("resize", mt, !1);
    function mt() {
        Y ? (u.aspect = document.body.offsetWidth / document.body.offsetHeight, u.updateProjectionMatrix(), m.setSize(innerWidth, innerHeight)) : (u.aspect = document.body.offsetWidth / document.body.offsetHeight, u.updateProjectionMatrix(), m.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function se(n) {
        E = new $t;
        const t = await qt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        N = new t.World(new t.Vector3(0, -9.81, 0)), ct = new t.EventQueue(!0), g = new w(N, t), _ = new Zt(u), I = new Kt, O = new Yt(C, u, m, E), c = new Vt(C, I, g, m, u, Y, E, O);
        for(let s = 0; s < n; s++)c.players.push(new Xt(C, I, c, E));
        new Nt(c, Y, m, u);
    }
    async function ae() {
        await O.loadWorld(), await I.loadAudio();
    }
    async function ie() {
        await c.createLevel(), await c.loadEnvironments(), await c.loadPlayers(), c.objs.grassPlanes.data.length > 0 && c.objs.grassPlanes.data.forEach((n, t)=>{
            c.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(q([
                0
            ], [
                1
            ]));
        }), c.players.length > 0 && c.players.forEach((n, t)=>{
            c.players[t].player.userData.collider.setCollisionGroups(q([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function oe(n, t) {
        W.toggleLoader(!0), await se(n), c.gameNum = t, await ae(), await ie(), setTimeout(()=>{
            W.showScreen("hud"), W.toggleLoader(!1), dt = !0;
        }, 300);
    }
    W = new Qt(oe);
    function ne() {
        if (dt) {
            E.gameDir == "hor" ? _.updateMetersFloat(u.position.x - _.startX) : _.updateMetersFloat(u.position.y - _.startY), c.players.forEach((n, t, s)=>{
                n.playerMove();
            }), O.updateLighting(), c.levelAnimate(u), c.cameraMove(u), ut.update();
            for(let n = 0, t = g.dynamicBodies.length; n < t; n++)g.dynamicBodies[n][0].position.copy(g.dynamicBodies[n][1].translation()), g.dynamicBodies[n][0].quaternion.copy(g.dynamicBodies[n][1].rotation());
            g.updateInstancedTransforms(), N.step(ct), m.render(C, u);
        }
    }
    m.setAnimationLoop(()=>{
        G += ee.getDelta(), G > lt && (ne(), m.render(C, u), G = G % lt);
    });
})();

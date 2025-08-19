import { B, V as l, Q as X, M as mt, a as U, b, c as v, d as G, G as J, S as yt, E as M, I as P, D, C as ht, O as K, T as pt, R as A, P as gt, e as N, A as ft, f as bt, g as S, h as wt, i as xt, H as Mt, j as Pt, k as Dt, l as Y, W as jt, m as vt, n as Ct, o as zt, p as St, q, r as Lt, s as At, t as Et, u as Q, v as _t, w as Bt, x as Ht, y as kt, z as Rt, F as Gt, J as Tt } from "./three-agrF_4bH.js";
(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const a of document.querySelectorAll('link[rel="modulepreload"]'))e(a);
        new MutationObserver((a)=>{
            for (const i of a)if (i.type === "childList") for (const n of i.addedNodes)n.tagName === "LINK" && n.rel === "modulepreload" && e(n);
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
    const Wt = "modulepreload", It = function(o, t) {
        return new URL(o, t).href;
    }, $ = {}, Ft = function(t, s, e) {
        let a = Promise.resolve();
        if (s && s.length > 0) {
            let h = function(d) {
                return Promise.all(d.map((y)=>Promise.resolve(y).then((x)=>({
                            status: "fulfilled",
                            value: x
                        }), (x)=>({
                            status: "rejected",
                            reason: x
                        }))));
            };
            const n = document.getElementsByTagName("link"), r = document.querySelector("meta[property=csp-nonce]"), p = r?.nonce || r?.getAttribute("nonce");
            a = h(s.map((d)=>{
                if (d = It(d, e), d in $) return;
                $[d] = !0;
                const y = d.endsWith(".css"), x = y ? '[rel="stylesheet"]' : "";
                if (!!e) for(let z = n.length - 1; z >= 0; z--){
                    const H = n[z];
                    if (H.href === d && (!y || H.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${d}"]${x}`)) return;
                const g = document.createElement("link");
                if (g.rel = y ? "stylesheet" : Wt, y || (g.as = "script"), g.crossOrigin = "", g.href = d, p && g.setAttribute("nonce", p), document.head.appendChild(g), y) return new Promise((z, H)=>{
                    g.addEventListener("load", z), g.addEventListener("error", ()=>H(new Error(`Unable to preload CSS for ${d}`)));
                });
            }));
        }
        function i(n) {
            const r = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (r.payload = n, window.dispatchEvent(r), !r.defaultPrevented) throw n;
        }
        return a.then((n)=>{
            for (const r of n || [])r.status === "rejected" && i(r.reason);
            return t().catch(i);
        });
    };
    function j(o, t) {
        return Math.random() * (t - o) + o;
    }
    function qt() {
        let o = window.matchMedia || window.msMatchMedia;
        return o ? o("(pointer:coarse)").matches : !1;
    }
    function L(o, t) {
        o.geometry.computeBoundingBox(), t.forEach(function(a, i, n) {
            a.geometry.computeBoundingBox();
        }), o.updateMatrixWorld(), t.forEach(function(a, i, n) {
            a.updateMatrixWorld();
        });
        let s = o.geometry.boundingBox.clone();
        s.applyMatrix4(o.matrixWorld);
        var e = !1;
        for(let a = t.length - 1; a > -1; a--)if (t[a].userData.id == null || t[a].userData.id != o.uuid) {
            let i = t[a].geometry.boundingBox.clone();
            i.applyMatrix4(t[a].matrixWorld), i.intersectsBox(s) && (e = t[a]);
        }
        return e;
    }
    function Z(o) {
        return o.reduce((t, s)=>t | 1 << s, 0);
    }
    function I(o, t) {
        const s = Z(o), e = Z(t);
        return "0x" + ((s & 65535) << 16 | e & 65535).toString(16).padStart(8, "0");
    }
    function tt(o) {
        const t = o.collisionGroups(), s = t >>> 16 & 65535, e = t & 65535;
        function a(i) {
            const n = [];
            for(let r = 0; r < 16; r++)i & 1 << r && n.push(r);
            return n;
        }
        return [
            a(s),
            a(e)
        ];
    }
    function Ot(o) {
        return typeof o == "number" ? new l(o, o, o) : o?.isVector3 ? o : new l(o?.x ?? 1, o?.y ?? 1, o?.z ?? 1);
    }
    function et(o) {
        return o?.userData?.id ?? o?.uuid ?? o?.id;
    }
    const Xt = new B(new l(-.5, -.5, -.5), new l(.5, .5, .5)), st = new mt, at = new X;
    function it(o) {
        if (o?.isObject3D) {
            if (o.updateMatrixWorld(!0), o.geometry?.isBufferGeometry) {
                const a = o.geometry;
                if (a.boundingBox || a.computeBoundingBox(), a.boundingBox) {
                    const i = a.boundingBox.clone();
                    return i.applyMatrix4(o.matrixWorld), i;
                }
            }
            return new B().setFromObject(o);
        }
        const t = o.position ?? o.pos ?? new l, s = Ot(o.size ?? 1), e = o.quaternion?.isQuaternion ? o.quaternion : o.rotation?.isEuler ? at.setFromEuler(o.rotation) : at.set(0, 0, 0, 1);
        return st.compose(t, e, s), Xt.clone().applyMatrix4(st);
    }
    function k(o, t) {
        const s = it(o), e = et(o);
        for(let a = t.length - 1; a >= 0; a--){
            const i = t[a], n = et(i);
            if (e !== void 0 && n !== void 0 && e === n) continue;
            if (it(i).intersectsBox(s)) return i;
        }
        return null;
    }
    class Ut {
        constructor(t, s, e, a){
            this.scene = t, this.audioClass = s, this.levelClass = e, this.paramsClass = a, this.playerHeight = .8, this.playerWidth = .4, this.player = new U(new b(this.playerWidth, this.playerHeight, this.playerWidth), new v({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !0, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = !0, this.player.userData.startPos, this.playerModel, this.playerOut = new U(new b(this.playerWidth, this.playerHeight + .1, this.playerWidth), new G({
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
            await new J().loadAsync("models/players/player1.glb").then((e)=>{
                const a = e.scene;
                this.playerModel = a, this.playerModel.traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = .9, this.playerModel.scale.y = .9, this.playerModel.scale.z = .9;
            });
        }
        playerMove() {
            if (k(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [t, s] = tt(this.player.userData.collider);
                s[0] == 0 && this.player.userData.collider.setCollisionGroups(I([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, s] = tt(this.player.userData.collider);
                s[0] != 0 && this.player.userData.collider.setCollisionGroups(I([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if (k(this.player, this.levelClass.objs.topPlanes.data) || k(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), k(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].position.copy(new l(this.player.userData.head.getWorldPosition(new l).x - .05, this.player.userData.head.getWorldPosition(new l).y + .15, this.player.userData.head.getWorldPosition(new l).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -2 && (this.player.userData.live = !1), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, s = this.player.userData.readyJump ? -Math.PI / 2 : 0, e = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, a = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, i = this.player.userData.readyJump ? Math.PI / 8 : 0, n = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, r = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, p = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, s, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, i, .1), this.head.position.y = this.lerp(this.head.position.y, p, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, r, .1);
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
    class Jt {
        constructor(t, s, e, a, i, n, r, p){
            this.scene = t, this.audioClass = s, this.physicsClass = e, this.renderer = a, this.camera = i, this.isMobile = n, this.paramsClass = r, this.worldClass = p, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.fixedDistanceHor = {
                min: 2,
                max: 3
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (h, d)=>({
                            position: new l(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(1, 1, 1),
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
                    }, (h, d)=>({
                            position: new l(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(1, 1, 1),
                            userData: {
                                name: "topSensor",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneTop: new b(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new G({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (h, d)=>({
                            position: new l(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(1, 1, 1),
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
                    }, (h, d)=>({
                            position: new l(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(1, 1, 1),
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
                    }, (h, d)=>({
                            position: new l(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(.1, 2, .1),
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
                    }, (h, d)=>({
                            position: new l(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1
                            }
                        })),
                    geometryPlafon: new yt(.3),
                    materialPlafon: new v({
                        color: 16247464,
                        transparent: !0,
                        opacity: .8
                    }),
                    plafon: null
                }
            }, this.objs.planes.plane = new P(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(D), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new P(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(D), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new P(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(D), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new P(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(D), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.lamps.lamp = new P(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(D), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new P(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(D), this.objs.plafons.plafon.frustumCulled = !1, this.lightsCount = 10, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new l(-1, 0, 0), this.rightEdge = new l(1, 0, 0), this.leftEdge.unproject(i), this.rightEdge.unproject(i), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 8
            }, this.dt = new ht;
        }
        toVec3(t) {
            return typeof t == "number" ? new l(t, t, t) : t?.isVector3 ? t : t ? new l(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new l(1, 1, 1);
        }
        apply(t, s, e) {
            let a = e.userData.invBaseSize;
            if (!a) {
                const p = e.geometry;
                p.computeBoundingBox();
                const h = new l;
                p.boundingBox.getSize(h), a = e.userData.invBaseSize = new l(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new K;
            const i = this._dummy, n = s[t] || {}, r = this.toVec3(n.size);
            i.position.copy(n.position || new l), n.rotation ? i.rotation.copy(n.rotation) : i.rotation.set(0, 0, 0), i.scale.set(r.x * a.x, r.y * a.y, r.z * a.z), i.updateMatrix(), e.setMatrixAt(t, i.matrix);
        }
        async loadTexture() {
            const t = new pt;
            t.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (s)=>{
                const e = new G({
                    map: s,
                    transparent: !0,
                    opacity: 1
                });
                s.wrapS = A, s.wrapT = A, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = e;
            }, void 0, function(s) {
                console.error("An error happened.");
            }), t.load("textures/123.jpg", (s)=>{
                const e = new G({
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
                        let a = j(this.planeWidth / 8, this.planeWidth - 1), i = t + a / 2 + j(this.fixedDistanceHor.min, this.fixedDistanceHor.max), n = j(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 0 ? (this.objs.planes.data[e].size.x = a, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = a + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e > 0 ? (this.objs.planes.data[e].position.x = i, this.objs.planes.data[e].position.y = n + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = i, this.objs.topPlanes.data[e].position.y = n + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = i, this.objs.grassPlanes.data[e].position.y = n + this.planeHeight / 1.5) : (this.objs.planes.data[e].position.x = -this.planeWidth / 2, this.objs.planes.data[e].position.y = -this.planeHeight / 2 + .5, this.objs.topPlanes.data[e].position.x = -this.planeWidth / 2, this.objs.topPlanes.data[e].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .4, this.objs.grassPlanes.data[e].position.x = -this.planeWidth / 2, this.objs.grassPlanes.data[e].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .3), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const r = new gt(16247464, 0, 4);
                            r.position.set(this.objs.lamps.data[e].position.x, this.objs.lamps.data[e].position.y + 1, 1.6), this.lights.push(r), this.scene.add(r), this.objs.lamps.data[e].userData.light = !0;
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
            const s = new l(-1, 0, .5), e = new l(1, 0, .5);
            if (s.unproject(this.camera), e.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const a = this.camera.position, i = s.clone().sub(a).normalize(), n = e.clone().sub(a).normalize(), r = (t - a.z) / i.z, p = a.clone().add(i.multiplyScalar(r)), h = a.clone().add(n.multiplyScalar(r));
                this.bounds = {
                    leftX: p.x,
                    rightX: h.x
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "vert") {
                for(let t = 0; t < this.objs.grassPlanes.data.length; t++){
                    const s = this.objs.grassPlanes.data[t], e = this.objs.topPlanes.data[t];
                    this.objs.sensorPlanes.data;
                    const a = s.userData.body, i = s.userData.speed, n = a.translation();
                    n.x > this.bounds.rightX - s.size.x / 2 ? s.userData.direction = -1 : n.x < this.bounds.leftX + s.size.x / 2 && (s.userData.direction = 1);
                    const r = s.userData.direction * i, p = n.x + r;
                    t > 0 && a.setNextKinematicTranslation({
                        x: p,
                        y: n.y,
                        z: n.z
                    }), this.objs.sensorPlanes.data[t].position.x = p, this.objs.topPlanes.data[t].position.x = p, this.objs.topPlanes.data[t].position.y = n.y + .4, this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), e.position.set(p, n.y + .6, n.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBoostsModel() {
            await new J().loadAsync("models/boosts/hat.glb").then((e)=>{
                const a = e.scene;
                this.boostHatModel = a, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .015, this.boostHatModel.scale.y = .015, this.boostHatModel.scale.z = .015, this.boostHatModel.userData.fly = !1;
            });
        }
        async loadEnvironmentModel() {
            await new J().loadAsync("models/environment/clouds.glb").then((e)=>{
                const a = e.scene;
                this.cloudModel = a, this.cloudModel.children.forEach((i, n, r)=>{
                    i.position.x = n * 3, i.position.y = 4, i.position.z = -25, i.scale.x = .9, i.scale.y = .9, i.scale.z = .9;
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
            }), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : Math.random() < .3 && t > 1 && (this.objs.grassPlanes.data[t].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(t, new N(13421806)));
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
            if (this.paramsClass.gameDir == "hor") {
                if (this.lights[Math.round(this.lights.length / 2)].position.x < this.camera.position.x) {
                    let t = this.lights.shift(), s = this.objs.lamps.data.findIndex((e)=>e.userData.light == !1);
                    this.objs.lamps.data[s] != null && (t.position.x = this.objs.lamps.data[s].position.x, t.position.y = this.objs.lamps.data[s].position.y + 1, this.lights.push(t), this.objs.lamps.data[s].userData.light = !0);
                }
                this.lights.forEach((t, s, e)=>{
                    this.worldClass.night && t.position.x < this.camera.position.x + this.bounds.rightX - this.bounds.rightX / 4 && t.position.x + this.bounds.rightX > this.camera.position.x + this.bounds.rightX / 4 ? t.intensity < this.lightIntensity && this.worldClass.night && (t.intensity += 1) : (!this.worldClass.night || t.position.x + this.bounds.rightX < this.camera.position.x + this.bounds.rightX / 4 || t.position.x + this.bounds.rightX > this.camera.position.x + this.bounds.rightX + this.bounds.rightX / 4) && t.intensity > 0 && (t.intensity -= 1);
                });
            }
        }
        resetLevel() {
            if (this.paramsClass.gameDir == "hor") {
                for(let t = 0; t < this.count; t++)t < this.lightsCount ? (this.lights[t].position.set(this.objs.lamps.data[t].position.x, this.objs.lamps.data[t].position.y + 1, 1.6), this.bulbs[t].position.copy(new l(this.lights[t].position.x, this.lights[t].position.y, this.objs.lamps.data[t].position.z)), this.objs.lamps.data[t].userData.light = !0, this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp)) : (this.objs.lamps.data[t].userData.light = !1, this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp));
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
                            const n = this.spring(t.position.x, this.cam.targetX, this.cam.velX, .95, s);
                            t.position.x = n.newPos, this.cam.velX = n.newVel, t.position.y = this.isMobile ? 3.5 : 3, t.position.z = this.isMobile ? 13 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
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
            const n = 2 / a, r = n * i, p = 1 / (1 + r + .48 * r * r + .235 * r * r * r);
            let h = t - s;
            const d = (e + n * h) * i, y = (e - n * d) * p;
            return {
                newPos: s + (h + d) * p,
                newVel: y
            };
        }
    }
    class w {
        constructor(t, s){
            this.world = t, this.RAPIER = s, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new K;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const s = t.geometry;
            s.computeBoundingBox();
            const e = new l;
            s.boundingBox.getSize(e);
            const a = new l(1 / (e.x || 1), 1 / (e.y || 1), 1 / (e.z || 1));
            return t.userData.invBase = a, a;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new l(t, t, t) : t?.isVector3 ? t.clone() : new l(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, s, e) {
            const a = w._toVec3(e.size), i = w._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = e.quaternion?.isQuaternion ? e.quaternion : new X, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(i.x, i.y, i.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), p = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(p, r), this.instancedBodies.push({
                mesh: t,
                index: s,
                size: a,
                body: r
            });
        }
        addInstancedStatic(t, s, e, a) {
            const i = w._toVec3(a.size), n = w._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), r = a.quaternion?.isQuaternion ? a.quaternion : new X, p = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(n.x, n.y, n.z).setRotation({
                x: r.x,
                y: r.y,
                z: r.z,
                w: r.w
            })), h = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(1.6).setRestitution(0);
            t[e].userData.body = p, t[e].userData.shape = h, t[e].userData.collide = this.world.createCollider(h, p), this.instancedBodies.push({
                mesh: s,
                index: e,
                size: i,
                body: p
            });
        }
        updateInstancedTransforms() {
            const t = this._dummy, s = new Set;
            for (const e of this.instancedBodies){
                const a = w._ensureInvBase(e.mesh), i = e.body.translation(), n = e.body.rotation();
                t.position.set(i.x, i.y, i.z), t.quaternion.set(n.x, n.y, n.z, n.w), t.scale.set(e.size.x * a.x, e.size.y * a.y, e.size.z * a.z), t.updateMatrix(), e.mesh.setMatrixAt(e.index, t.matrix), s.add(e.mesh);
            }
            for (const e of s)e.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let s, e;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new B().setFromObject(t);
                const i = ot(t);
                t.rotation.copy(a), t.userData.size = i, t.userData.orgRotation = a, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(.6).setRestitution(0).setFriction(.4).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), t.userData.body = s, t.userData.shape = e;
                let n = s;
                e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let r = this.world.createCollider(e, s);
                t.userData.collider = r, t.userData.handle = n.handle, this.playersHandles.push(n.handle), this.dynamicBodies.push([
                    t,
                    s,
                    t.id
                ]);
            } else if (t != null && t.userData.name.includes("tops")) {
                let s, e;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new B().setFromObject(t);
                const i = ot(t);
                t.rotation.copy(a), t.userData.size = i, t.userData.orgRotation = a, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(1).setRestitution(0).setFriction(.3), e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(e, s);
                t.userData.body = s, t.userData.collide = n, this.allWallBodyCollision.push(n), t.userData.handle = s.handle, this.dynamicBodies.push([
                    t,
                    s,
                    t.id
                ]), t.userData.playerHandlesInside = new Set, this.allTops.push(t);
            }
        }
    }
    const O = new l;
    function ot(o) {
        if (o.isMesh && o.geometry) {
            const s = o.geometry;
            return s.boundingBox || s.computeBoundingBox(), s.boundingBox.getSize(O), O.multiply(o.scale), O.clone();
        }
        return new B().setFromObject(o).getSize(new l);
    }
    class Vt {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const t = new ft, s = new bt;
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
    class Kt {
        constructor(t, s, e, a){
            this.levelClass = t, this.isMobile = s, this.renderer = e, this.camera = a, this.camera = a, this.mouse = new l, this.raycaster = new wt, this.addKeyListeners();
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
    class Nt {
        constructor(t, s, e, a){
            this.scene = t, this.camera = s, this.renderer = e, this.paramsClass = a, this.ambientLight = new xt(11184810, 1), this.hemiLight = new Mt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Pt(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new K, this.dirLight.target = this.targetObject, this.helper = new Dt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x;
        }
        async loadWaterSky() {
            this.waterGeometry = new Y(1e3, 500), this.water = new jt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new pt().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = A;
                }),
                sunDirection: new l,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = -2, this.sun = new l, this.sky = new vt, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new U(new Y(1e4, 1e4), new Ct({
                color: 526362,
                side: zt,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const s = 1500, e = new Float32Array(s * 3), a = new Float32Array(s), i = new Float32Array(s * 3);
            for(let h = 0; h < s; h++){
                e[3 * h] = Math.random() * 600 - 300, e[3 * h + 1] = Math.random() * 150 - 100, e[3 * h + 2] = Math.random() * 300 - 500, a[h] = Math.random() * 2 + .7;
                const d = new N().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                i[3 * h] = d.r, i[3 * h + 1] = d.g, i[3 * h + 2] = d.b;
            }
            const n = new St;
            n.setAttribute("position", new q(e, 3)), n.setAttribute("size", new q(a, 1)), n.setAttribute("color", new q(i, 3));
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
            this.materialStars = new Lt({
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
                blending: At
            }), this.stars = new Et(n, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const t = this.camera.position.x, s = Math.sign(t - this._prevCamX);
            this._prevCamX = s, this.stars.position.x = this.camera.position.x;
            const e = Q.degToRad(90 - this.parameters.elevation), a = Q.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, e, a), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.parameters.elevation < -2 ? this.night = !0 : this.night = !1), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const r = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= r * .01, this.blackSky.material.opacity += r * .01, this.materialStars.uniforms.opacity.value += r * .003, this.camera.position.y < this.topLight && r < 0 ? (this.dirLight.intensity -= r * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= r * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= r * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && r > 0 && (this.dirLight.intensity -= r * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= r * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= r * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && (this.topLight = this.camera.position.y), this.parameters.elevation = Math.max(-100, Math.min(100, this.parameters.elevation)), this.prevCameraYSun = this.camera.position.y;
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
    class Yt {
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
    class Qt {
        constructor(){
            this.gameDir = "vert";
        }
    }
    class $t {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const s = nt, e = performance.now(), a = 200;
            function i(n) {
                const r = Math.min(1, (n - e) / a), p = 1 - Math.pow(1 - r, 4), h = Math.round(s + (t - s) * p);
                Zt.textContent = String(h).padStart(3, "0"), r < 1 ? requestAnimationFrame(i) : nt = t;
            }
            requestAnimationFrame(i);
        }
    }
    const Zt = document.getElementById("meters-float");
    let nt = 0;
    console.clear();
    let V, dt = !1, R = 0, rt = 1 / 60, te = new ht, ct, T, F, f, c, W, E, _;
    const C = new _t;
    C.background = new N(13230580);
    const u = new Bt(25, window.innerWidth / window.innerHeight, .1, 2e3);
    u.position.z = 7;
    u.position.y = 2;
    const lt = qt();
    let ut = new Ht;
    document.body.appendChild(ut.dom);
    const m = new kt;
    m.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(m.domElement);
    m.shadowMap.enabled = !0;
    m.shadowMap.type = Rt;
    m.outputColorSpace = Gt;
    m.toneMapping = Tt;
    m.toneMappingExposure = 1.05;
    window.addEventListener("resize", ee, !1);
    function ee() {
        u.aspect = window.innerWidth / window.innerHeight, u.updateProjectionMatrix(), m.setSize(window.innerWidth, window.innerHeight);
    }
    async function se(o) {
        E = new Qt;
        const t = await Ft(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        V = new t.World(new t.Vector3(0, -9.81, 0)), ct = new t.EventQueue(!0), f = new w(V, t), _ = new $t(u), W = new Vt, F = new Nt(C, u, m, E), c = new Jt(C, W, f, m, u, lt, E, F);
        for(let s = 0; s < o; s++)c.players.push(new Ut(C, W, c, E));
        new Kt(c, lt, m, u);
    }
    async function ae() {
        await F.loadWorld(), await W.loadAudio();
    }
    async function ie() {
        await c.createLevel(), await c.loadEnvironments(), await c.loadPlayers(), c.objs.grassPlanes.data.length > 0 && c.objs.grassPlanes.data.forEach((o, t)=>{
            c.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(I([
                0
            ], [
                1
            ]));
        }), c.players.length > 0 && c.players.forEach((o, t)=>{
            c.players[t].player.userData.collider.setCollisionGroups(I([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function oe(o, t) {
        T.toggleLoader(!0), await se(o), c.gameNum = t, await ae(), await ie(), setTimeout(()=>{
            T.showScreen("hud"), T.toggleLoader(!1), dt = !0;
        }, 300);
    }
    T = new Yt(oe);
    function ne() {
        if (dt) {
            E.gameDir == "hor" ? _.updateMetersFloat(u.position.x - _.startX) : _.updateMetersFloat(u.position.y - _.startY), c.players.forEach((o, t, s)=>{
                o.playerMove();
            }), F.updateLighting(), c.levelAnimate(u), c.cameraMove(u), ut.update();
            for(let o = 0, t = f.dynamicBodies.length; o < t; o++)f.dynamicBodies[o][0].position.copy(f.dynamicBodies[o][1].translation()), f.dynamicBodies[o][0].quaternion.copy(f.dynamicBodies[o][1].rotation());
            f.updateInstancedTransforms(), V.step(ct), m.render(C, u);
        }
    }
    m.setAnimationLoop(()=>{
        R += te.getDelta(), R > rt && (ne(), m.render(C, u), R = R % rt);
    });
})();

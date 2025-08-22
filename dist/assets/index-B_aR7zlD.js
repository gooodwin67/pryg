import { B as k, V as l, Q as V, M as yt, a as X, b as M, c as A, d as E, G as K, S as Q, e as ft, C as P, E as b, I as w, D as x, f as pt, O as Y, T as dt, R as _, P as gt, g as F, A as bt, h as wt, i as S, j as xt, k as Mt, H as Pt, l as Dt, m as jt, n as $, W as vt, o as Ct, p as zt, q as St, r as Lt, s as U, t as At, u as Et, v as _t, w as Bt, x as Ht, y as kt, z as Rt, F as Gt, J as Tt, K as It } from "./three-DWrol_9a.js";
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
    const Wt = "modulepreload", Ft = function(r, t) {
        return new URL(r, t).href;
    }, Z = {}, qt = function(t, s, e) {
        let a = Promise.resolve();
        if (s && s.length > 0) {
            let h = function(p) {
                return Promise.all(p.map((y)=>Promise.resolve(y).then((j)=>({
                            status: "fulfilled",
                            value: j
                        }), (j)=>({
                            status: "rejected",
                            reason: j
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), d = n?.nonce || n?.getAttribute("nonce");
            a = h(s.map((p)=>{
                if (p = Ft(p, e), p in Z) return;
                Z[p] = !0;
                const y = p.endsWith(".css"), j = y ? '[rel="stylesheet"]' : "";
                if (!!e) for(let z = o.length - 1; z >= 0; z--){
                    const R = o[z];
                    if (R.href === p && (!y || R.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${p}"]${j}`)) return;
                const f = document.createElement("link");
                if (f.rel = y ? "stylesheet" : Wt, y || (f.as = "script"), f.crossOrigin = "", f.href = p, d && f.setAttribute("nonce", d), document.head.appendChild(f), y) return new Promise((z, R)=>{
                    f.addEventListener("load", z), f.addEventListener("error", ()=>R(new Error(`Unable to preload CSS for ${p}`)));
                });
            }));
        }
        function i(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return a.then((o)=>{
            for (const n of o || [])n.status === "rejected" && i(n.reason);
            return t().catch(i);
        });
    };
    function v(r, t) {
        return Math.random() * (t - r) + r;
    }
    function Ot() {
        let r = window.matchMedia || window.msMatchMedia;
        return r ? r("(pointer:coarse)").matches : !1;
    }
    function L(r, t) {
        r.geometry.computeBoundingBox(), t.forEach(function(a, i, o) {
            a.geometry.computeBoundingBox();
        }), r.updateMatrixWorld(), t.forEach(function(a, i, o) {
            a.updateMatrixWorld();
        });
        let s = r.geometry.boundingBox.clone();
        s.applyMatrix4(r.matrixWorld);
        var e = !1;
        for(let a = t.length - 1; a > -1; a--)if (t[a].userData.id == null || t[a].userData.id != r.uuid) {
            let i = t[a].geometry.boundingBox.clone();
            i.applyMatrix4(t[a].matrixWorld), i.intersectsBox(s) && (e = t[a]);
        }
        return e;
    }
    function tt(r) {
        return r.reduce((t, s)=>t | 1 << s, 0);
    }
    function q(r, t) {
        const s = tt(r), e = tt(t);
        return "0x" + ((s & 65535) << 16 | e & 65535).toString(16).padStart(8, "0");
    }
    function et(r) {
        const t = r.collisionGroups(), s = t >>> 16 & 65535, e = t & 65535;
        function a(i) {
            const o = [];
            for(let n = 0; n < 16; n++)i & 1 << n && o.push(n);
            return o;
        }
        return [
            a(s),
            a(e)
        ];
    }
    function Ut(r) {
        return typeof r == "number" ? new l(r, r, r) : r?.isVector3 ? r : new l(r?.x ?? 1, r?.y ?? 1, r?.z ?? 1);
    }
    function st(r) {
        return r?.userData?.id ?? r?.uuid ?? r?.id;
    }
    const Jt = new k(new l(-.5, -.5, -.5), new l(.5, .5, .5)), at = new yt, it = new V;
    function ot(r) {
        if (r?.isObject3D) {
            if (r.updateMatrixWorld(!0), r.geometry?.isBufferGeometry) {
                const a = r.geometry;
                if (a.boundingBox || a.computeBoundingBox(), a.boundingBox) {
                    const i = a.boundingBox.clone();
                    return i.applyMatrix4(r.matrixWorld), i;
                }
            }
            return new k().setFromObject(r);
        }
        const t = r.position ?? r.pos ?? new l, s = Ut(r.size ?? 1), e = r.quaternion?.isQuaternion ? r.quaternion : r.rotation?.isEuler ? it.setFromEuler(r.rotation) : it.set(0, 0, 0, 1);
        return at.compose(t, e, s), Jt.clone().applyMatrix4(at);
    }
    function G(r, t) {
        const s = ot(r), e = st(r);
        for(let a = t.length - 1; a >= 0; a--){
            const i = t[a], o = st(i);
            if (e !== void 0 && o !== void 0 && e === o) continue;
            if (ot(i).intersectsBox(s)) return i;
        }
        return null;
    }
    class Vt {
        constructor(t, s, e, a){
            this.scene = t, this.audioClass = s, this.levelClass = e, this.paramsClass = a, this.playerHeight = .8, this.playerWidth = .4, this.player = new X(new M(this.playerWidth, this.playerHeight, this.playerWidth), new A({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = !0, this.player.userData.startPos, this.playerModel, this.playerOut = new X(new M(this.playerWidth, this.playerHeight + .1, this.playerWidth), new E({
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
            if (G(this.player, this.levelClass.objs.sensorPlanes.data)) {
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
            if (G(this.player, this.levelClass.objs.topPlanes.data) || G(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), G(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].position.copy(new l(this.player.userData.head.getWorldPosition(new l).x - .05, this.player.userData.head.getWorldPosition(new l).y + .15, this.player.userData.head.getWorldPosition(new l).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(L(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -2 && (this.player.userData.live = !1), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, s = this.player.userData.readyJump ? -Math.PI / 2 : 0, e = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, a = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, i = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, d = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, s, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, i, .1), this.head.position.y = this.lerp(this.head.position.y, d, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const p = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, p, .4);
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
    class Xt {
        constructor(t, s, e, a, i, o, n, d){
            this.scene = t, this.audioClass = s, this.physicsClass = e, this.renderer = a, this.camera = i, this.isMobile = o, this.paramsClass = n, this.worldClass = d, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.fixedDistanceHor = {
                min: 2,
                max: 3
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (h, p)=>({
                            position: new l(0, 0, 0),
                            rotation: new b(0, 0, 0),
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
                    geometryPlane: new M(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new A({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (h, p)=>({
                            position: new l(0, 0, 0),
                            rotation: new b(0, 0, 0),
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
                    }, (h, p)=>({
                            position: new l(0, 0, 0),
                            rotation: new b(0, 0, 0),
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
                    geometryPlaneGrass: new M(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new A({
                        color: 52224,
                        transparent: !0,
                        opacity: 1
                    }),
                    planeGrass: null
                },
                sensorPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (h, p)=>({
                            position: new l(0, 0, 0),
                            rotation: new b(0, 0, 0),
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
                    geometryPlaneSensor: new M(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new A({
                        color: 65280,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeSensor: null
                },
                lamps: {
                    data: Array.from({
                        length: this.count
                    }, (h, p)=>({
                            position: new l(0, 0, 0),
                            rotation: new b(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new M(.3, 1, .3),
                    materialLamp: new A({
                        color: 16777215,
                        transparent: !0,
                        opacity: 1
                    }),
                    lamp: null
                },
                plafons: {
                    data: Array.from({
                        length: this.count
                    }, (h, p)=>({
                            position: new l(0, 0, 0),
                            rotation: new b(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new Q(.32, 24, 16),
                    materialPlafon: new ft({
                        transmission: .9,
                        thickness: .2,
                        roughness: .2,
                        clearcoat: 1,
                        clearcoatRoughness: .1,
                        ior: 1.45,
                        metalness: 0,
                        transparent: !0
                    }),
                    plafon: null
                },
                bulbs: {
                    data: Array.from({
                        length: this.count
                    }, (h, p)=>({
                            position: new l(0, 0, 0),
                            rotation: new b(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(.6, .6, .6),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new Q(.3),
                    materialBulb: new E({
                        emissive: new P(16770979),
                        emissiveIntensity: 0,
                        color: 2236962
                    }),
                    bulb: null
                }
            }, this.objs.planes.plane = new w(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(x), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new w(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(x), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new w(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(x), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new w(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(x), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.lamps.lamp = new w(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(x), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new w(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(x), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new w(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(x), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.plafons.materialPlafon.onBeforeCompile = (h)=>{
                h.uniforms.fresnelPower = {
                    value: 3
                }, h.fragmentShader = h.fragmentShader.replace("#include <output_fragment>", `
    // простейший френель
    float fresnel = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    vec3 col = outgoingLight + fresnel * 0.15; // мягкая подсветка краёв
    gl_FragColor = vec4( col, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0, this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new l(-1, 0, 0), this.rightEdge = new l(1, 0, 0), this.leftEdge.unproject(i), this.rightEdge.unproject(i), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 8
            }, this.dt = new pt;
        }
        toVec3(t) {
            return typeof t == "number" ? new l(t, t, t) : t?.isVector3 ? t : t ? new l(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new l(1, 1, 1);
        }
        apply(t, s, e) {
            let a = e.userData.invBaseSize;
            if (!a) {
                const d = e.geometry;
                d.computeBoundingBox();
                const h = new l;
                d.boundingBox.getSize(h), a = e.userData.invBaseSize = new l(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new Y;
            const i = this._dummy, o = s[t] || {}, n = this.toVec3(o.size);
            i.position.copy(o.position || new l), o.rotation ? i.rotation.copy(o.rotation) : i.rotation.set(0, 0, 0), i.scale.set(n.x * a.x, n.y * a.y, n.z * a.z), i.updateMatrix(), e.setMatrixAt(t, i.matrix);
        }
        async loadTexture() {
            const t = new dt;
            t.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (s)=>{
                const e = new E({
                    map: s,
                    transparent: !0,
                    opacity: 1
                });
                s.wrapS = _, s.wrapT = _, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = e;
            }, void 0, function(s) {
                console.error("An error happened.");
            }), t.load("textures/123.jpg", (s)=>{
                const e = new E({
                    map: s
                });
                s.wrapS = _, s.wrapT = _, s.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = e;
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
                        let a = v(this.planeWidth / 2, this.planeWidth - 1), i = t + a / 2 + v(this.fixedDistanceHor.min, this.fixedDistanceHor.max), o = v(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 0 ? (this.objs.planes.data[e].size.x = a, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = a + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[e].size.x = this.planeWidth, this.objs.planes.data[e].size.y = this.planeHeight, this.objs.topPlanes.data[e].size.x = this.planeWidth + .3, this.objs.topPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[e].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[e].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), e > 0 ? (this.objs.planes.data[e].position.x = i, this.objs.planes.data[e].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[e].position.x = i, this.objs.topPlanes.data[e].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[e].position.x = i, this.objs.grassPlanes.data[e].position.y = o + this.planeHeight / 1.5) : (this.objs.planes.data[e].position.x = -this.planeWidth / 2, this.objs.planes.data[e].position.y = -this.planeHeight / 2 + .5, this.objs.topPlanes.data[e].position.x = -this.planeWidth / 2, this.objs.topPlanes.data[e].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .4, this.objs.grassPlanes.data[e].position.x = -this.planeWidth / 2, this.objs.grassPlanes.data[e].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .3), this.objs.lamps.data[e].position.x = this.objs.grassPlanes.data[e].position.x, this.objs.lamps.data[e].position.z = -this.planeDepth / 8, this.objs.lamps.data[e].position.y = this.objs.grassPlanes.data[e].position.y + this.objs.grassPlanes.data[e].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[e].position.x = this.objs.lamps.data[e].position.x, this.objs.plafons.data[e].position.z = this.objs.lamps.data[e].position.z, this.objs.plafons.data[e].position.y = this.objs.lamps.data[e].position.y + 1, this.lights.length < this.lightsCount) {
                            const n = new gt(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
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
                        let a = v(this.bounds.rightX, this.bounds.rightX / 4), i = s + v(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        this.objs.topPlanes.data[e].position.y = i - 1.3, this.objs.grassPlanes.data[e].position.y = i, this.objs.sensorPlanes.data[e].position.y = i - .5, this.objs.topPlanes.data[e].size.y = .3, this.objs.grassPlanes.data[e].size.y = .7, this.objs.sensorPlanes.data[e].size.y = .9, e > 0 ? (this.objs.topPlanes.data[e].size.x = a + .3, this.objs.grassPlanes.data[e].size.x = a + .3, this.objs.sensorPlanes.data[e].size.x = a + .5) : (this.objs.topPlanes.data[e].size.x = 10, this.objs.grassPlanes.data[e].size.x = 10, this.objs.sensorPlanes.data[e].size.x = 10), this.objs.grassPlanes.data[e].userData.speed = v(4, 8) / 100, this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), s = i;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor);
                    break;
            }
        }
        getHorizontalWorldBounds(t = 0) {
            const s = new l(-1, 0, .5), e = new l(1, 0, .5);
            if (s.unproject(this.camera), e.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const a = this.camera.position, i = s.clone().sub(a).normalize(), o = e.clone().sub(a).normalize(), n = (t - a.z) / i.z, d = a.clone().add(i.multiplyScalar(n)), h = a.clone().add(o.multiplyScalar(n));
                this.bounds = {
                    leftX: d.x,
                    rightX: h.x
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
                    const n = s.userData.direction * i, d = o.x + n;
                    t > 0 && a.setNextKinematicTranslation({
                        x: d,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[t].position.x = d, this.objs.topPlanes.data[t].position.x = d, this.objs.topPlanes.data[t].position.y = o.y + .4, this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), e.position.set(d, o.y + .6, o.z);
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
                this.cloudModel = a, this.cloudModel.children.forEach((i, o, n)=>{
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
            }), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : Math.random() < .3 && t > 1 && (this.objs.grassPlanes.data[t].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(t, new P(13421806)));
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
                const e = this.lightIntensity;
                if (this.worldClass.night) {
                    const a = this.camera.position.x - this.bounds.rightX / 2, i = this.camera.position.x + this.bounds.rightX * .8;
                    let o = !1;
                    this.objs.plafons.data.forEach((n, d)=>{
                        const h = n.position.x >= a && n.position.x <= i;
                        let p = n.pointLight || null;
                        if (h ? !p && this.lights.length > 0 && (p = this.lights.shift(), n.pointLight = p, n.userData.light = !0, this.objs.plafons.plafon.setColorAt(d, new P(16247464)), o = !0) : n.userData.light && (this.objs.plafons.plafon.setColorAt(d, new P(16247464)), o = !0), p) {
                            p.position.x = this.objs.lamps.data[d].position.x, p.position.y = this.objs.lamps.data[d].position.y + 1, p.position.z = this.objs.lamps.data[d].position.z;
                            const y = h ? e : 0;
                            p.intensity = F.lerp(p.intensity, y, .05), p.intensity = F.clamp(p.intensity, 0, e), !h && p.intensity <= .01 && (this.lights.push(p), n.pointLight = null, n.userData.light = !1);
                        }
                    }), o && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0);
                } else {
                    let a = !1;
                    this.objs.plafons.data.forEach((i, o)=>{
                        const n = i.pointLight;
                        n && (n.intensity = Math.max(0, n.intensity - .2), n.intensity <= .01 && (this.lights.push(n), i.pointLight = null, i.userData.light = !1)), this.objs.plafons.plafon.setColorAt(o, new P(16247464)), a = !0;
                    }), a && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0);
                }
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
            const o = 2 / a, n = o * i, d = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = t - s;
            const p = (e + o * h) * i, y = (e - o * p) * d;
            return {
                newPos: s + (h + p) * d,
                newVel: y
            };
        }
    }
    class D {
        constructor(t, s){
            this.world = t, this.RAPIER = s, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Y;
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
            const a = D._toVec3(e.size), i = D._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = e.quaternion?.isQuaternion ? e.quaternion : new V, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(i.x, i.y, i.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), d = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(d, n), this.instancedBodies.push({
                mesh: t,
                index: s,
                size: a,
                body: n
            });
        }
        addInstancedStatic(t, s, e, a) {
            const i = D._toVec3(a.size), o = D._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = a.quaternion?.isQuaternion ? a.quaternion : new V, d = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(1.6).setRestitution(0);
            t[e].userData.body = d, t[e].userData.shape = h, t[e].userData.collide = this.world.createCollider(h, d), this.instancedBodies.push({
                mesh: s,
                index: e,
                size: i,
                body: d
            });
        }
        updateInstancedTransforms() {
            const t = this._dummy, s = new Set;
            for (const e of this.instancedBodies){
                const a = D._ensureInvBase(e.mesh), i = e.body.translation(), o = e.body.rotation();
                t.position.set(i.x, i.y, i.z), t.quaternion.set(o.x, o.y, o.z, o.w), t.scale.set(e.size.x * a.x, e.size.y * a.y, e.size.z * a.z), t.updateMatrix(), e.mesh.setMatrixAt(e.index, t.matrix), s.add(e.mesh);
            }
            for (const e of s)e.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let s, e;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new k().setFromObject(t);
                const i = nt(t);
                t.rotation.copy(a), t.userData.size = i, t.userData.orgRotation = a, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(.6).setRestitution(0).setFriction(.4).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), t.userData.body = s, t.userData.shape = e;
                let o = s;
                e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(e, s);
                t.userData.collider = n, t.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    t,
                    s,
                    t.id
                ]);
            } else if (t != null && t.userData.name.includes("tops")) {
                let s, e;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new k().setFromObject(t);
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
    const J = new l;
    function nt(r) {
        if (r.isMesh && r.geometry) {
            const s = r.geometry;
            return s.boundingBox || s.computeBoundingBox(), s.boundingBox.getSize(J), J.multiply(r.scale), J.clone();
        }
        return new k().setFromObject(r).getSize(new l);
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
            this.levelClass = t, this.isMobile = s, this.renderer = e, this.camera = a, this.camera = a, this.mouse = new l, this.raycaster = new xt, this.addKeyListeners();
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
            this.scene = t, this.camera = s, this.renderer = e, this.paramsClass = a, this.ambientLight = new Mt(11184810, 1), this.hemiLight = new Pt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Dt(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Y, this.dirLight.target = this.targetObject, this.helper = new jt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x;
        }
        async loadWaterSky() {
            this.waterGeometry = new $(1e3, 500), this.water = new vt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new dt().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = _;
                }),
                sunDirection: new l,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = -2, this.sun = new l, this.sky = new Ct, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new X(new $(1e4, 1e4), new zt({
                color: 526362,
                side: St,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const s = 1500, e = new Float32Array(s * 3), a = new Float32Array(s), i = new Float32Array(s * 3);
            for(let h = 0; h < s; h++){
                e[3 * h] = Math.random() * 600 - 300, e[3 * h + 1] = Math.random() * 150 - 100, e[3 * h + 2] = Math.random() * 300 - 500, a[h] = Math.random() * 2 + .7;
                const p = new P().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                i[3 * h] = p.r, i[3 * h + 1] = p.g, i[3 * h + 2] = p.b;
            }
            const o = new Lt;
            o.setAttribute("position", new U(e, 3)), o.setAttribute("size", new U(a, 1)), o.setAttribute("color", new U(i, 3));
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
`, d = `
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
                vertexShader: n,
                fragmentShader: d,
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
                const n = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= n * .01, this.blackSky.material.opacity += n * .01, this.materialStars.uniforms.opacity.value += n * .003, this.camera.position.y < this.topLight && n < 0 ? (this.dirLight.intensity -= n * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= n * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= n * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && n > 0 && (this.dirLight.intensity -= n * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= n * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= n * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && (this.topLight = this.camera.position.y), this.parameters.elevation = Math.max(-100, Math.min(100, this.parameters.elevation)), this.prevCameraYSun = this.camera.position.y;
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
                const n = Math.min(1, (o - e) / a), d = 1 - Math.pow(1 - n, 4), h = Math.round(s + (t - s) * d);
                te.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(i) : rt = t;
            }
            requestAnimationFrame(i);
        }
    }
    const te = document.getElementById("meters-float");
    let rt = 0;
    console.clear();
    let N, ct = !1, T = 0, lt = 1 / 60, ee = new pt, ut, I, O, g, c, W, B, H;
    const C = new Bt;
    C.background = new P(13230580);
    const u = new Ht(25, window.innerWidth / window.innerHeight, .1, 2e3);
    u.position.z = 7;
    u.position.y = 2;
    const ht = Ot();
    let mt = new kt;
    document.body.appendChild(mt.dom);
    const m = new Rt;
    m.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(m.domElement);
    m.shadowMap.enabled = !0;
    m.shadowMap.type = Gt;
    m.outputColorSpace = Tt;
    m.toneMapping = It;
    m.toneMappingExposure = 1.05;
    window.addEventListener("resize", se, !1);
    function se() {
        u.aspect = window.innerWidth / window.innerHeight, u.updateProjectionMatrix(), m.setSize(window.innerWidth, window.innerHeight);
    }
    async function ae(r) {
        B = new $t;
        const t = await qt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        N = new t.World(new t.Vector3(0, -9.81, 0)), ut = new t.EventQueue(!0), g = new D(N, t), H = new Zt(u), W = new Kt, O = new Yt(C, u, m, B), c = new Xt(C, W, g, m, u, ht, B, O);
        for(let s = 0; s < r; s++)c.players.push(new Vt(C, W, c, B));
        new Nt(c, ht, m, u);
    }
    async function ie() {
        await O.loadWorld(), await W.loadAudio();
    }
    async function oe() {
        await c.createLevel(), await c.loadEnvironments(), await c.loadPlayers(), c.objs.grassPlanes.data.length > 0 && c.objs.grassPlanes.data.forEach((r, t)=>{
            c.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(q([
                0
            ], [
                1
            ]));
        }), c.players.length > 0 && c.players.forEach((r, t)=>{
            c.players[t].player.userData.collider.setCollisionGroups(q([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function ne(r, t) {
        I.toggleLoader(!0), await ae(r), c.gameNum = t, await ie(), await oe(), setTimeout(()=>{
            I.showScreen("hud"), I.toggleLoader(!1), ct = !0;
        }, 300);
    }
    I = new Qt(ne);
    function re() {
        if (ct) {
            B.gameDir == "hor" ? H.updateMetersFloat(u.position.x - H.startX) : H.updateMetersFloat(u.position.y - H.startY), c.players.forEach((r, t, s)=>{
                r.playerMove();
            }), O.updateLighting(), c.levelAnimate(u), c.cameraMove(u), mt.update();
            for(let r = 0, t = g.dynamicBodies.length; r < t; r++)g.dynamicBodies[r][0].position.copy(g.dynamicBodies[r][1].translation()), g.dynamicBodies[r][0].quaternion.copy(g.dynamicBodies[r][1].rotation());
            g.updateInstancedTransforms(), N.step(ut), m.render(C, u);
        }
    }
    m.setAnimationLoop(()=>{
        T += ee.getDelta(), T > lt && (re(), m.render(C, u), T = T % lt);
    });
})();

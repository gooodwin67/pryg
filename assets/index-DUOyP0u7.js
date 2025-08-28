import { B as G, V as l, Q as V, M as ft, a as X, b as v, c as E, d as B, G as K, C as S, S as Z, e as bt, E as j, I as P, D as M, f as wt, g as ut, O as Y, T as ct, R as k, P as $, h as xt, i as b, A as jt, j as Pt, k as A, l as Mt, m as vt, H as Dt, n as Ct, o as zt, p as tt, W as St, q as Lt, r as At, s as _t, t as Et, u as q, v as Bt, w as kt, x as Ht, y as Rt, z as Gt, F as Tt, J as It, K as Ft, L as Wt, N as Ut } from "./three-BmMq32tu.js";
(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);
        new MutationObserver((e)=>{
            for (const a of e)if (a.type === "childList") for (const o of a.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function i(e) {
            const a = {};
            return e.integrity && (a.integrity = e.integrity), e.referrerPolicy && (a.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? a.credentials = "include" : e.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function s(e) {
            if (e.ep) return;
            e.ep = !0;
            const a = i(e);
            fetch(e.href, a);
        }
    })();
    const Ot = "modulepreload", qt = function(r, t) {
        return new URL(r, t).href;
    }, st = {}, Jt = function(t, i, s) {
        let e = Promise.resolve();
        if (i && i.length > 0) {
            let d = function(p) {
                return Promise.all(p.map((u)=>Promise.resolve(u).then((f)=>({
                            status: "fulfilled",
                            value: f
                        }), (f)=>({
                            status: "rejected",
                            reason: f
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), h = n?.nonce || n?.getAttribute("nonce");
            e = d(i.map((p)=>{
                if (p = qt(p, s), p in st) return;
                st[p] = !0;
                const u = p.endsWith(".css"), f = u ? '[rel="stylesheet"]' : "";
                if (!!s) for(let x = o.length - 1; x >= 0; x--){
                    const C = o[x];
                    if (C.href === p && (!u || C.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${p}"]${f}`)) return;
                const g = document.createElement("link");
                if (g.rel = u ? "stylesheet" : Ot, u || (g.as = "script"), g.crossOrigin = "", g.href = p, h && g.setAttribute("nonce", h), document.head.appendChild(g), u) return new Promise((x, C)=>{
                    g.addEventListener("load", x), g.addEventListener("error", ()=>C(new Error(`Unable to preload CSS for ${p}`)));
                });
            }));
        }
        function a(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return e.then((o)=>{
            for (const n of o || [])n.status === "rejected" && a(n.reason);
            return t().catch(a);
        });
    };
    function z(r, t) {
        return Math.random() * (t - r) + r;
    }
    function Vt() {
        let r = window.matchMedia || window.msMatchMedia;
        return r ? r("(pointer:coarse)").matches : !1;
    }
    function _(r, t) {
        r.geometry.computeBoundingBox(), t.forEach(function(e, a, o) {
            e.geometry.computeBoundingBox();
        }), r.updateMatrixWorld(), t.forEach(function(e, a, o) {
            e.updateMatrixWorld();
        });
        let i = r.geometry.boundingBox.clone();
        i.applyMatrix4(r.matrixWorld);
        var s = !1;
        for(let e = t.length - 1; e > -1; e--)if (t[e].userData.id == null || t[e].userData.id != r.uuid) {
            let a = t[e].geometry.boundingBox.clone();
            a.applyMatrix4(t[e].matrixWorld), a.intersectsBox(i) && (s = t[e]);
        }
        return s;
    }
    function et(r) {
        return r.reduce((t, i)=>t | 1 << i, 0);
    }
    function U(r, t) {
        const i = et(r), s = et(t);
        return "0x" + ((i & 65535) << 16 | s & 65535).toString(16).padStart(8, "0");
    }
    function it(r) {
        const t = r.collisionGroups(), i = t >>> 16 & 65535, s = t & 65535;
        function e(a) {
            const o = [];
            for(let n = 0; n < 16; n++)a & 1 << n && o.push(n);
            return o;
        }
        return [
            e(i),
            e(s)
        ];
    }
    function Xt(r) {
        return typeof r == "number" ? new l(r, r, r) : r?.isVector3 ? r : new l(r?.x ?? 1, r?.y ?? 1, r?.z ?? 1);
    }
    function at(r) {
        return r?.userData?.id ?? r?.uuid ?? r?.id;
    }
    const Kt = new G(new l(-.5, -.5, -.5), new l(.5, .5, .5)), ot = new ft, nt = new V;
    function rt(r) {
        if (r?.isObject3D) {
            if (r.updateMatrixWorld(!0), r.geometry?.isBufferGeometry) {
                const e = r.geometry;
                if (e.boundingBox || e.computeBoundingBox(), e.boundingBox) {
                    const a = e.boundingBox.clone();
                    return a.applyMatrix4(r.matrixWorld), a;
                }
            }
            return new G().setFromObject(r);
        }
        const t = r.position ?? r.pos ?? new l, i = Xt(r.size ?? 1), s = r.quaternion?.isQuaternion ? r.quaternion : r.rotation?.isEuler ? nt.setFromEuler(r.rotation) : nt.set(0, 0, 0, 1);
        return ot.compose(t, s, i), Kt.clone().applyMatrix4(ot);
    }
    function T(r, t) {
        const i = rt(r), s = at(r);
        for(let e = t.length - 1; e >= 0; e--){
            const a = t[e], o = at(a);
            if (s !== void 0 && o !== void 0 && s === o) continue;
            if (rt(a).intersectsBox(i)) return a;
        }
        return null;
    }
    class Nt {
        constructor(t, i, s, e){
            this.scene = t, this.audioClass = i, this.levelClass = s, this.paramsClass = e, this.playerHeight = .8, this.playerWidth = .4, this.player = new X(new v(this.playerWidth, this.playerHeight, this.playerWidth), new E({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !0, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = !0, this.player.userData.startPos, this.playerModel, this.playerOut = new X(new v(this.playerWidth, this.playerHeight + .1, this.playerWidth), new B({
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
            await new K().loadAsync("models/players/player1.glb").then((s)=>{
                const e = s.scene;
                this.playerModel = e, this.playerModel.traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = .9, this.playerModel.scale.y = .9, this.playerModel.scale.z = .9;
            });
        }
        playerMove() {
            if (T(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [t, i] = it(this.player.userData.collider);
                i[0] == 0 && this.player.userData.collider.setCollisionGroups(U([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, i] = it(this.player.userData.collider);
                i[0] != 0 && this.player.userData.collider.setCollisionGroups(U([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if (T(this.player, this.levelClass.objs.topPlanes.data) || T(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), T(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(_(this.player, this.levelClass.boostHatMeshes))].position.copy(new l(this.player.userData.head.getWorldPosition(new l).x - .05, this.player.userData.head.getWorldPosition(new l).y + .15, this.player.userData.head.getWorldPosition(new l).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(_(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(_(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(_(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(_(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -2 && (this.player.userData.live = !1), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, i = this.player.userData.readyJump ? -Math.PI / 2 : 0, s = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, e = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, h = this.player.userData.readyJump ? .75 : 1.18, d = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, h, .1), this.head.position.z = this.lerp(this.head.position.z, d, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const p = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, p, .4);
                const u = this.player.userData.readyJump ? .6 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, u, .1),
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
        lerp(t, i, s) {
            return t + (i - t) * s;
        }
    }
    class Yt {
        constructor(t, i, s, e, a, o, n, h){
            this.scene = t, this.audioClass = i, this.physicsClass = s, this.renderer = e, this.camera = a, this.isMobile = o, this.paramsClass = n, this.worldClass = h, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.fixedDistanceHor = {
                min: 2,
                max: 3
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this._dayColor = new S(16777215), this._nightColor = new S(16771488), this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (p, u)=>({
                            position: new l(0, 0, 0),
                            rotation: new j(0, 0, 0),
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
                    geometryPlane: new v(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new E({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (p, u)=>({
                            position: new l(0, 0, 0),
                            rotation: new j(0, 0, 0),
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
                    geometryPlaneTop: new v(this.planeWidth, .4, 1.2),
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
                    }, (p, u)=>({
                            position: new l(0, 0, 0),
                            rotation: new j(0, 0, 0),
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
                    geometryPlaneGrass: new v(this.planeWidth, .5, this.planeDepth + .2),
                    materialPlaneGrass: new E({
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
                            position: new l(0, 0, 0),
                            rotation: new j(0, 0, 0),
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
                    geometryPlaneSensor: new v(this.planeWidth, .4, 1.2),
                    materialPlaneSensor: new E({
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
                            position: new l(0, 0, 0),
                            rotation: new j(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new v(.3, 1, .3),
                    materialLamp: new E({
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
                            position: new l(0, 0, 0),
                            rotation: new j(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new Z(.32, 24, 16),
                    materialPlafon: new bt({
                        transmission: .9,
                        thickness: .3,
                        roughness: .2,
                        clearcoat: 0,
                        clearcoatRoughness: 10.9,
                        ior: 1.85,
                        metalness: 0,
                        transparent: !0
                    }),
                    plafon: null
                },
                bulbs: {
                    data: Array.from({
                        length: this.count
                    }, (p, u)=>({
                            position: new l(0, 0, 0),
                            rotation: new j(0, 0, 0),
                            scale: new l(1, 1, 1),
                            size: new l(.2, .2, .2),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new Z(.3),
                    materialBulb: new B({
                        emissive: new S(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                }
            }, this.objs.planes.plane = new P(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(M), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new P(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(M), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new P(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(M), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new P(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(M), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.lamps.lamp = new P(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(M), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new P(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(M), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new P(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(M), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.plafons.materialPlafon.onBeforeCompile = (p)=>{
                p.uniforms.fresnelPower = {
                    value: 3
                }, p.fragmentShader = p.fragmentShader.replace("#include <output_fragment>", `
    // простейший френель
    float fresnel = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    vec3 col = outgoingLight + fresnel * 0.15; // мягкая подсветка краёв
    gl_FragColor = vec4( col, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const d = new Float32Array(this.count);
            for(let p = 0; p < this.count; p++)d[p] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new wt(d, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (p)=>{
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
            }, this.objs.bulbs.materialBulb.needsUpdate = !0, this._emissive = d, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new l(-1, 0, 0), this.rightEdge = new l(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 8
            }, this.dt = new ut;
        }
        toVec3(t) {
            return typeof t == "number" ? new l(t, t, t) : t?.isVector3 ? t : t ? new l(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new l(1, 1, 1);
        }
        apply(t, i, s) {
            let e = s.userData.invBaseSize;
            if (!e) {
                const h = s.geometry;
                h.computeBoundingBox();
                const d = new l;
                h.boundingBox.getSize(d), e = s.userData.invBaseSize = new l(1 / (d.x || 1), 1 / (d.y || 1), 1 / (d.z || 1));
            }
            this._dummy ||= new Y;
            const a = this._dummy, o = i[t] || {}, n = this.toVec3(o.size);
            a.position.copy(o.position || new l), o.rotation ? a.rotation.copy(o.rotation) : a.rotation.set(0, 0, 0), a.scale.set(n.x * e.x, n.y * e.y, n.z * e.z), a.updateMatrix(), s.setMatrixAt(t, a.matrix);
        }
        async loadTexture() {
            const t = new ct;
            t.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (i)=>{
                const s = new B({
                    map: i,
                    transparent: !0,
                    opacity: 1
                });
                i.wrapS = k, i.wrapT = k, i.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = s;
            }, void 0, function(i) {
                console.error("An error happened.");
            }), t.load("textures/123.jpg", (i)=>{
                const s = new B({
                    map: i
                });
                i.wrapS = k, i.wrapT = k, i.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = s;
            }, void 0, function(i) {
                console.error("An error happened.");
            });
        }
        async createLevel() {
            switch(await this.loadTexture(), await this.loadBoostsModel(), await this.loadEnvironmentModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let t = -2.5;
                    for(let s = 0; s < this.count; s++){
                        let e = z(this.planeWidth / 2, this.planeWidth - 1), a = t + e / 2 + z(this.fixedDistanceHor.min, this.fixedDistanceHor.max), o = z(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s > 0 ? (this.objs.planes.data[s].size.x = e, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = e + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = e + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s > 0 ? (this.objs.planes.data[s].position.x = a, this.objs.planes.data[s].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = a, this.objs.topPlanes.data[s].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = a, this.objs.grassPlanes.data[s].position.y = o + this.planeHeight / 1.5) : (this.objs.planes.data[s].position.x = -this.planeWidth / 2, this.objs.planes.data[s].position.y = -this.planeHeight / 2 + .5, this.objs.topPlanes.data[s].position.x = -this.planeWidth / 2, this.objs.topPlanes.data[s].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .4, this.objs.grassPlanes.data[s].position.x = -this.planeWidth / 2, this.objs.grassPlanes.data[s].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .3), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const n = new $(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(s, this.objs.planes.data, this.objs.planes.plane), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), t = a + e / 2;
                    }
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let i = -5;
                    for(let s = 0; s < this.count; s++){
                        let e = z(this.bounds.rightX, this.bounds.rightX / 4), a = i + z(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = a - 1.3, this.objs.grassPlanes.data[s].position.y = a, this.objs.sensorPlanes.data[s].position.y = a - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > 0 ? (this.objs.topPlanes.data[s].size.x = e + .3, this.objs.grassPlanes.data[s].size.x = e + .3, this.objs.sensorPlanes.data[s].size.x = e + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), this.objs.grassPlanes.data[s].userData.speed = z(4, 8) / 100, this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const o = new $(16247464, 0, 4);
                            o.position.set(0, 0, 1.6), this.lights.push(o), this.scene.add(o);
                        }
                        this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), i = a;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
        }
        getHorizontalWorldBounds(t = 0) {
            const i = new l(-1, 0, .5), s = new l(1, 0, .5), e = new l(0, 1, .5), a = new l(0, -1, .5);
            if (i.unproject(this.camera), s.unproject(this.camera), e.unproject(this.camera), a.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = i.clone().sub(o).normalize(), h = s.clone().sub(o).normalize(), d = e.clone().sub(o).normalize(), p = a.clone().sub(o).normalize(), u = (t - o.z) / n.z, f = (t - o.z) / p.z, Q = o.clone().add(n.multiplyScalar(u)), g = o.clone().add(h.multiplyScalar(u)), x = o.clone().add(d.multiplyScalar(f)), C = o.clone().add(p.multiplyScalar(f));
                this.bounds = {
                    leftX: Q.x,
                    rightX: g.x,
                    topY: x.y,
                    bottomY: C.y
                }, console.log(this.bounds.topY), console.log(this.bounds.bottomY);
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "vert") {
                for(let t = 0; t < this.objs.grassPlanes.data.length; t++){
                    const i = this.objs.grassPlanes.data[t], s = this.objs.topPlanes.data[t];
                    this.objs.sensorPlanes.data[t], this.objs.lamps.data[t], this.objs.plafons.data[t], this.objs.bulbs.data[t];
                    const e = i.userData.body, a = i.userData.speed, o = e.translation();
                    o.x > this.bounds.rightX - i.size.x / 2 ? i.userData.direction = -1 : o.x < this.bounds.leftX + i.size.x / 2 && (i.userData.direction = 1);
                    const n = i.userData.direction * a, h = o.x + n;
                    t > 0 && e.setNextKinematicTranslation({
                        x: h,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[t].position.x = h, this.objs.lamps.data[t].position.x = h, this.objs.plafons.data[t].position.x = h, this.objs.bulbs.data[t].position.x = h, this.objs.topPlanes.data[t].position.x = h, this.objs.topPlanes.data[t].position.y = o.y + .4, this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), s.position.set(h, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBoostsModel() {
            await new K().loadAsync("models/boosts/hat.glb").then((s)=>{
                const e = s.scene;
                this.boostHatModel = e, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .015, this.boostHatModel.scale.y = .015, this.boostHatModel.scale.z = .015, this.boostHatModel.userData.fly = !1;
            });
        }
        async loadEnvironmentModel() {
            await new K().loadAsync("models/environment/clouds.glb").then((s)=>{
                const e = s.scene;
                this.cloudModel = e, this.cloudModel.children.forEach((a, o, n)=>{
                    a.position.x = o * 3, a.position.y = 4, a.position.z = -25, a.scale.x = .9, a.scale.y = .9, a.scale.z = .9;
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
            }), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : Math.random() < .3 && t > 1 && (this.objs.grassPlanes.data[t].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(t, new S(13421806)));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
            for(let t = 1; t < 10; t++)this.boostHatModel.clone(), this.paramsClass.gameDir == "vert";
            this.clouds.forEach((t, i, s)=>{
                this.scene.add(t);
            });
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.boostHatModels.forEach((t, i, s)=>{
                t.children[0].children[1].rotation.y += .05;
            });
        }
        makeGlowSprite() {
            const t = new xt(this.objs.plafons.materialPlafon);
            return t.scale.set(10.9, 10.9, 10), t.renderOrder = 2, t;
        }
        lampsAnimate() {
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const i = this.camera.position.x - this.bounds.rightX / 2, s = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((e, a)=>{
                    e.pointLight;
                    const o = e.position.x >= i && e.position.x <= s, n = a;
                    if (o && !e.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        e.pointLight = h, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const h = e.pointLight;
                        h.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 2);
                        const d = o ? this.lightIntensity : 0;
                        h.intensity = b.lerp(h.intensity, d, .15);
                        const p = o ? 1 : 0;
                        this._emissive[n] = b.lerp(this._emissive[n], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .5 + this._emissive[n] * .8;
                        e.glow && e.glow.scale.setScalar(u), !o && h.intensity <= .01 && this._emissive[n] <= .02 && (this.lights.push(h), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                });
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((s, e)=>{
                    const a = s.pointLight;
                    a && (a.intensity = b.lerp(a.intensity, 0, .2), a.intensity <= .01 && (a.intensity = 0, this.lights.push(a), s.pointLight = null, s.userData.light = !1, s.glow && (this.scene.remove(s.glow), this.glowPool.push(s.glow), s.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), i = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0);
                }), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const i = this.camera.position.y - this.bounds.topY / 2, s = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((e, a)=>{
                    e.pointLight;
                    const o = e.position.y >= i && e.position.y <= s, n = a;
                    if (o && !e.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        e.pointLight = h, e.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(e.glow);
                    }
                    if (e.pointLight) {
                        const h = e.pointLight;
                        h.position.set(this.objs.lamps.data[n].position.x, this.objs.lamps.data[n].position.y + 1, this.objs.lamps.data[n].position.z + 2);
                        const d = o ? this.lightIntensity : 0;
                        h.intensity = b.lerp(h.intensity, d, .15);
                        const p = o ? 1 : 0;
                        this._emissive[n] = b.lerp(this._emissive[n], p, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .5 + this._emissive[n] * .8;
                        e.glow && e.glow.scale.setScalar(u), !o && h.intensity <= .01 && this._emissive[n] <= .02 && (this.lights.push(h), e.pointLight = null, e.glow && (this.glowPool.push(e.glow), this.scene.remove(e.glow), e.glow = null));
                    }
                });
            } else {
                let i = !1;
                this.objs.plafons.data.forEach((s, e)=>{
                    const a = s.pointLight;
                    a && (a.intensity = b.lerp(a.intensity, 0, .2), a.intensity <= .01 && (a.intensity = 0, this.lights.push(a), s.pointLight = null, s.userData.light = !1, s.glow && (this.scene.remove(s.glow), this.glowPool.push(s.glow), s.glow = null))), this.objs.plafons.plafon.setColorAt(e, this._dayColor), i = !0, this._emissive && this._emissive.length > e && (this._emissive[e] = 0);
                }), i && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed() {
            let t = this.players;
            if (t.length === 0) return -1;
            let i = 0, s;
            this.paramsClass.gameDir == "vert" ? s = t[0].player.position.y : s = t[0].player.position.x;
            for(let e = 1; e < t.length; e++)t[e].player && t[e].player.position ? this.paramsClass.gameDir == "vert" ? t[e].player.position.y > s && (s = t[e].player.position.y, i = e) : t[e].player.position.x > s && (s = t[e].player.position.x, i = e) : console.warn(`Player at index ${e} is missing player or position properties.`);
            return i;
        }
        async loadPlayers() {
            for(let t = 0; t < this.players.length; t++){
                let i = this.players[t];
                i.player.position.x = i.player.position.x - t * 1, this.physicsClass.addPhysicsToObject(i.player), this.paramsClass.gameDir == "vert" && (i.player.position.y = -0, i.player.userData.collider.setFriction(500)), await i.loadPlayerModel(), i.player.userData.startPos = i.player.position.clone(), this.scene.add(i.player), this.scene.add(i.playerOut), this.scene.add(i.playerModel), this.playerOuts.push(i.playerOut), t < this.players[0].playerColors.length ? i.head.children[0].material.color.set(this.players[0].playerColors[t]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), i.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > t ? i.player.userData.audio.push(this.audioClass.quacks[t].clone()) : i.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(t, i = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    t.position.x += .03, t.position.y = this.isMobile ? 3.5 : 3, t.position.z = this.isMobile ? 13 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const s = this.maxSpeed(this.players);
                        if (s >= 0) {
                            const e = this.players[s].player.position.x, a = this.cam.maxBackJump;
                            e < this.cam.targetX - a ? this.cam.targetX = this.cam.targetX - a : this.cam.targetX = e;
                            const o = this.spring(t.position.x, this.cam.targetX, this.cam.velX, .95, i);
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
        damp(t, i, s, e) {
            return t + (i - t) * (1 - Math.exp(-s * e));
        }
        spring(t, i, s, e, a) {
            const o = 2 / e, n = o * a, h = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let d = t - i;
            const p = (s + o * d) * a, u = (s - o * p) * h;
            return {
                newPos: i + (d + p) * h,
                newVel: u
            };
        }
    }
    class D {
        constructor(t, i){
            this.world = t, this.RAPIER = i, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Y;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const i = t.geometry;
            i.computeBoundingBox();
            const s = new l;
            i.boundingBox.getSize(s);
            const e = new l(1 / (s.x || 1), 1 / (s.y || 1), 1 / (s.z || 1));
            return t.userData.invBase = e, e;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new l(t, t, t) : t?.isVector3 ? t.clone() : new l(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, i, s) {
            const e = D._toVec3(s.size), a = D._toVec3(s.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = s.quaternion?.isQuaternion ? s.quaternion : new V, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), h = this.RAPIER.ColliderDesc.cuboid(e.x / 2, e.y / 2, e.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(h, n), this.instancedBodies.push({
                mesh: t,
                index: i,
                size: e,
                body: n
            });
        }
        addInstancedStatic(t, i, s, e) {
            const a = D._toVec3(e.size), o = D._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = e.quaternion?.isQuaternion ? e.quaternion : new V, h = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), d = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            t[s].userData.body = h, t[s].userData.shape = d, t[s].userData.collide = this.world.createCollider(d, h), this.instancedBodies.push({
                mesh: i,
                index: s,
                size: a,
                body: h
            });
        }
        updateInstancedTransforms() {
            const t = this._dummy, i = new Set;
            for (const s of this.instancedBodies){
                const e = D._ensureInvBase(s.mesh), a = s.body.translation(), o = s.body.rotation();
                t.position.set(a.x, a.y, a.z), t.quaternion.set(o.x, o.y, o.z, o.w), t.scale.set(s.size.x * e.x, s.size.y * e.y, s.size.z * e.z), t.updateMatrix(), s.mesh.setMatrixAt(s.index, t.matrix), i.add(s.mesh);
            }
            for (const s of i)s.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let i, s;
                const e = t.rotation.clone();
                t.rotation.set(0, 0, 0), new G().setFromObject(t);
                const a = lt(t);
                t.rotation.copy(e), t.userData.size = a, t.userData.orgRotation = e, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(.6).setRestitution(0).setFriction(.4).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), t.userData.body = i, t.userData.shape = s;
                let o = i;
                s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(s, i);
                t.userData.collider = n, t.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    t,
                    i,
                    t.id
                ]);
            } else if (t != null && t.userData.name.includes("tops")) {
                let i, s;
                const e = t.rotation.clone();
                t.rotation.set(0, 0, 0), new G().setFromObject(t);
                const a = lt(t);
                t.rotation.copy(e), t.userData.size = a, t.userData.orgRotation = e, i = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(0).setFriction(.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(s, i);
                t.userData.body = i, t.userData.collide = o, this.allWallBodyCollision.push(o), t.userData.handle = i.handle, this.dynamicBodies.push([
                    t,
                    i,
                    t.id
                ]), t.userData.playerHandlesInside = new Set, this.allTops.push(t);
            }
        }
    }
    const J = new l;
    function lt(r) {
        if (r.isMesh && r.geometry) {
            const i = r.geometry;
            return i.boundingBox || i.computeBoundingBox(), i.boundingBox.getSize(J), J.multiply(r.scale), J.clone();
        }
        return new G().setFromObject(r).getSize(new l);
    }
    class Qt {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const t = new jt, i = new Pt;
            await i.loadAsync("audio/ready-jump.wav").then((s)=>{
                this.readyJumpAudio = new A(t), this.readyJumpAudio.setBuffer(s), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await i.loadAsync("audio/quack1.mp3").then((s)=>{
                this.jumpAudio = new A(t), this.jumpAudio.setBuffer(s), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await i.loadAsync("audio/quack2.mp3").then((s)=>{
                this.jumpAudio2 = new A(t), this.jumpAudio2.setBuffer(s), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await i.loadAsync("audio/quack3.mp3").then((s)=>{
                this.jumpAudio3 = new A(t), this.jumpAudio3.setBuffer(s), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await i.loadAsync("audio/quack5.mp3").then((s)=>{
                this.jumpAudio4 = new A(t), this.jumpAudio4.setBuffer(s), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            });
        }
    }
    class Zt {
        constructor(t, i, s, e){
            this.levelClass = t, this.isMobile = i, this.renderer = s, this.camera = e, this.camera = e, this.mouse = new l, this.raycaster = new Mt, this.addKeyListeners();
        }
        addKeyListeners() {
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
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
                    this.levelClass.players.forEach((i, s, e)=>{
                        i.player.userData.live = !0;
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
    class $t {
        constructor(t, i, s, e){
            this.scene = t, this.camera = i, this.renderer = s, this.paramsClass = e, this.ambientLight = new vt(11184810, 1), this.hemiLight = new Dt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Ct(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Y, this.dirLight.target = this.targetObject, this.helper = new zt(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x;
        }
        async loadWaterSky() {
            this.waterGeometry = new tt(1e3, 500), this.water = new St(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new ct().load("textures/waternormals.jpg", function(d) {
                    d.wrapS = d.wrapT = k;
                }),
                sunDirection: new l,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = -2, this.sun = new l, this.sky = new Lt, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new X(new tt(1e4, 1e4), new At({
                color: 526362,
                side: _t,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const i = 1500, s = new Float32Array(i * 3), e = new Float32Array(i), a = new Float32Array(i * 3);
            for(let d = 0; d < i; d++){
                s[3 * d] = Math.random() * 600 - 300, s[3 * d + 1] = Math.random() * 150 - 100, s[3 * d + 2] = Math.random() * 300 - 500, e[d] = Math.random() * 2 + .7;
                const p = new S().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * d] = p.r, a[3 * d + 1] = p.g, a[3 * d + 2] = p.b;
            }
            const o = new Et;
            o.setAttribute("position", new q(s, 3)), o.setAttribute("size", new q(e, 1)), o.setAttribute("color", new q(a, 3));
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
`, h = `
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
                fragmentShader: h,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: kt
            }), this.stars = new Ht(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const t = this.camera.position.x, i = Math.sign(t - this._prevCamX);
            this._prevCamX = i, this.stars.position.x = this.camera.position.x;
            const s = b.degToRad(90 - this.parameters.elevation), e = b.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, s, e), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.parameters.elevation < -2 ? this.night = !0 : this.night = !1), this.paramsClass.gameDir == "vert") {
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
            const t = 10;
            this.dirLight.shadow.camera.left = -t, this.dirLight.shadow.camera.right = t, this.dirLight.shadow.camera.top = t, this.dirLight.shadow.camera.bottom = -t, this.waterUpdate(), this.updateSky();
        }
    }
    class ts {
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
            }), document.querySelectorAll(".together_game_chels").forEach((t, i, s)=>{
                t.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((e)=>{
                        e.classList.remove("together_game_chels_active");
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
    class ss {
        constructor(){
            this.gameDir = "vert";
        }
    }
    class es {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const i = ht, s = performance.now(), e = 200;
            function a(o) {
                const n = Math.min(1, (o - s) / e), h = 1 - Math.pow(1 - n, 4), d = Math.round(i + (t - i) * h);
                is.textContent = String(d).padStart(3, "0"), n < 1 ? requestAnimationFrame(a) : ht = t;
            }
            requestAnimationFrame(a);
        }
    }
    const is = document.getElementById("meters-float");
    let ht = 0;
    console.clear();
    let N, mt = !1, I = 0, pt = 1 / 60, as = new ut, yt, F, O, w, c, W, H, R;
    const L = new Rt;
    L.background = new S(13230580);
    const m = new Gt(25, window.innerWidth / window.innerHeight, .1, 2e3);
    m.position.z = 7;
    m.position.y = 2;
    const dt = Vt();
    let gt = new Tt;
    document.body.appendChild(gt.dom);
    const y = new It;
    y.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(y.domElement);
    y.shadowMap.enabled = !0;
    y.shadowMap.type = Ft;
    y.outputColorSpace = Wt;
    y.toneMapping = Ut;
    y.toneMappingExposure = 1.05;
    window.addEventListener("resize", os, !1);
    function os() {
        m.aspect = window.innerWidth / window.innerHeight, m.updateProjectionMatrix(), y.setSize(window.innerWidth, window.innerHeight);
    }
    async function ns(r) {
        H = new ss;
        const t = await Jt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        N = new t.World(new t.Vector3(0, -9.81, 0)), yt = new t.EventQueue(!0), w = new D(N, t), R = new es(m), W = new Qt, O = new $t(L, m, y, H), c = new Yt(L, W, w, y, m, dt, H, O);
        for(let i = 0; i < r; i++)c.players.push(new Nt(L, W, c, H));
        new Zt(c, dt, y, m);
    }
    async function rs() {
        await O.loadWorld(), await W.loadAudio();
    }
    async function ls() {
        await c.createLevel(), await c.loadEnvironments(), await c.loadPlayers(), c.objs.grassPlanes.data.length > 0 && c.objs.grassPlanes.data.forEach((r, t)=>{
            c.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(U([
                0
            ], [
                1
            ]));
        }), c.players.length > 0 && c.players.forEach((r, t)=>{
            c.players[t].player.userData.collider.setCollisionGroups(U([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function hs(r, t) {
        F.toggleLoader(!0), await ns(r), c.gameNum = t, await rs(), await ls(), setTimeout(()=>{
            F.showScreen("hud"), F.toggleLoader(!1), mt = !0;
        }, 300);
    }
    F = new ts(hs);
    function ps() {
        if (mt) {
            H.gameDir == "hor" ? R.updateMetersFloat(m.position.x - R.startX) : R.updateMetersFloat(m.position.y - R.startY), c.players.forEach((r, t, i)=>{
                r.playerMove();
            }), O.updateLighting(), c.levelAnimate(m), c.cameraMove(m), gt.update();
            for(let r = 0, t = w.dynamicBodies.length; r < t; r++)w.dynamicBodies[r][0].position.copy(w.dynamicBodies[r][1].translation()), w.dynamicBodies[r][0].quaternion.copy(w.dynamicBodies[r][1].rotation());
            w.updateInstancedTransforms(), N.step(yt), y.render(L, m);
        }
    }
    y.setAnimationLoop(()=>{
        I += as.getDelta(), I > pt && (ps(), y.render(L, m), I = I % pt);
    });
})();

import { B as U, V as p, Q as X, M as js, a as Y, b as _, c as F, d as E, G as us, C as v, S as Z, E as S, I as z, D as L, e as xs, f as cs, O as Q, T as ms, R as T, P as ss, g as Ps, h as Ds, A as ys, i as M, j as vs, k as Ms, l as Cs, m as k, n as Ss, o as zs, H as Ls, p as _s, q as As, r as ts, W as Es, s as Hs, t as Bs, u as ks, v as Rs, w as K, x as Fs, y as Ts, z as Gs, F as Is, J as Us, K as Ws, L as qs, N as Ns, U as Os } from "./three-DjXYLer5.js";
(async ()=>{
    (function() {
        const s = document.createElement("link").relList;
        if (s && s.supports && s.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);
        new MutationObserver((i)=>{
            for (const a of i)if (a.type === "childList") for (const o of a.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && t(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function e(i) {
            const a = {};
            return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function t(i) {
            if (i.ep) return;
            i.ep = !0;
            const a = e(i);
            fetch(i.href, a);
        }
    })();
    const Js = "modulepreload", Ks = function(r, s) {
        return new URL(r, s).href;
    }, es = {}, Vs = function(s, e, t) {
        let i = Promise.resolve();
        if (e && e.length > 0) {
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
            i = h(e.map((c)=>{
                if (c = Ks(c, t), c in es) return;
                es[c] = !0;
                const d = c.endsWith(".css"), u = d ? '[rel="stylesheet"]' : "";
                if (!!t) for(let m = o.length - 1; m >= 0; m--){
                    const w = o[m];
                    if (w.href === c && (!d || w.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${c}"]${u}`)) return;
                const b = document.createElement("link");
                if (b.rel = d ? "stylesheet" : Js, d || (b.as = "script"), b.crossOrigin = "", b.href = c, l && b.setAttribute("nonce", l), document.head.appendChild(b), d) return new Promise((m, w)=>{
                    b.addEventListener("load", m), b.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${c}`)));
                });
            }));
        }
        function a(o) {
            const n = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (n.payload = o, window.dispatchEvent(n), !n.defaultPrevented) throw o;
        }
        return i.then((o)=>{
            for (const n of o || [])n.status === "rejected" && a(n.reason);
            return s().catch(a);
        });
    };
    function D(r, s) {
        return Math.random() * (s - r) + r;
    }
    function Xs() {
        let r = window.matchMedia || window.msMatchMedia;
        return r ? r("(pointer:coarse)").matches : !1;
    }
    function as(r) {
        return r.reduce((s, e)=>s | 1 << e, 0);
    }
    function J(r, s) {
        const e = as(r), t = as(s);
        return "0x" + ((e & 65535) << 16 | t & 65535).toString(16).padStart(8, "0");
    }
    function is(r) {
        const s = r.collisionGroups(), e = s >>> 16 & 65535, t = s & 65535;
        function i(a) {
            const o = [];
            for(let n = 0; n < 16; n++)a & 1 << n && o.push(n);
            return o;
        }
        return [
            i(e),
            i(t)
        ];
    }
    function Ys(r) {
        return typeof r == "number" ? new p(r, r, r) : r?.isVector3 ? r : new p(r?.x ?? 1, r?.y ?? 1, r?.z ?? 1);
    }
    function os(r) {
        return r?.userData?.id ?? r?.uuid ?? r?.id;
    }
    const $s = new U(new p(-.5, -.5, -.5), new p(.5, .5, .5)), ns = new js, rs = new X;
    function ls(r) {
        if (r?.isObject3D) {
            if (r.updateMatrixWorld(!0), r.geometry?.isBufferGeometry) {
                const i = r.geometry;
                if (i.boundingBox || i.computeBoundingBox(), i.boundingBox) {
                    const a = i.boundingBox.clone();
                    return a.applyMatrix4(r.matrixWorld), a;
                }
            }
            return new U().setFromObject(r);
        }
        const s = r.position ?? r.pos ?? new p, e = Ys(r.size ?? 1), t = r.quaternion?.isQuaternion ? r.quaternion : r.rotation?.isEuler ? rs.setFromEuler(r.rotation) : rs.set(0, 0, 0, 1);
        return ns.compose(s, t, e), $s.clone().applyMatrix4(ns);
    }
    function R(r, s) {
        const e = ls(r), t = os(r);
        for(let i = s.length - 1; i >= 0; i--){
            const a = s[i], o = os(a);
            if (t !== void 0 && o !== void 0 && t === o) continue;
            if (ls(a).intersectsBox(e)) return a;
        }
        return null;
    }
    function Qs(r) {
        for(r.traverse((s)=>{
            s.geometry && s.geometry.dispose(), s.material && (Array.isArray(s.material) ? s.material.forEach((e)=>e.dispose()) : s.material.dispose()), s.material && s.material.map && s.material.map.dispose();
        }); r.children.length > 0;)r.remove(r.children[0]);
    }
    class Zs {
        constructor(s, e, t, i, a){
            this.scene = s, this.audioClass = e, this.levelClass = t, this.paramsClass = i, this.camera = a, this.playerHeight = .9, this.playerWidth = .5, this.player = new Y(new _(this.playerWidth, this.playerHeight, this.playerWidth), new F({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.canFlyNum = null, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyJumpsMax = 3, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.playerModel, this.playerOut = new Y(new _(this.playerWidth, this.playerHeight + .1, this.playerWidth), new E({
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
            await new us().loadAsync("models/players/player1.glb").then((t)=>{
                const i = t.scene;
                this.playerModel = i, this.playerModel.traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if (R(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [s, e] = is(this.player.userData.collider);
                e[0] == 0 && this.player.userData.collider.setCollisionGroups(J([
                    1
                ], [
                    1
                ]));
            } else {
                const [s, e] = is(this.player.userData.collider);
                e[0] != 0 && this.player.userData.collider.setCollisionGroups(J([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if ((this.player.userData.body.linvel().x != 0 || this.player.userData.body.linvel().y != 0) && R(this.player, this.levelClass.boostHatMeshes) && !this.player.userData.canFly && this.player.userData.canFlyNum == null && (this.player.userData.canFly = !0, this.player.userData.canFlyJumps = this.player.userData.canFlyJumpsMax, this.player.userData.canFlyNum = this.levelClass.boostHatMeshes.indexOf(R(this.player, this.levelClass.boostHatMeshes)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !0), this.player.userData.canFlyJumps && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].position.copy(new p(this.player.userData.head.getWorldPosition(new p).x - .05, this.player.userData.head.getWorldPosition(new p).y + .2, this.player.userData.head.getWorldPosition(new p).z + .1)), this.levelClass.boostHatModels[this.player.userData.canFlyNum].children[0].children[1].rotation.y += .4), R(this.player, this.levelClass.objs.topPlanes.data) || R(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), this.player.position.x < this.camera.position.x - Math.abs(this.levelClass.bounds.leftX) * 1.2 && this.player.userData.live && this.paramsClass.gameDir == "hor" && this.levelClass.needDeath(this.player), this.player.position.y < this.camera.position.y - Math.abs(this.levelClass.bounds.topY) * 1.5 && this.player.userData.live && this.levelClass.needDeath(this.player), this.playerModel.position.y < -4) this.levelClass.players.length < 2 ? (this.player.userData.live && (this.levelClass.gameNum == 2 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.levelClass.showPopupInGame(!1), this.paramsClass.gameStarting = !1), this.player.userData.live = !1) : (this.player.userData.live && (this.player.userData.live = !1), this.levelClass.players.every((s)=>!s.player.userData.live) && this.paramsClass.gameStarting && (this.levelClass.showPopupInGame(!1), this.paramsClass.gameStarting = !1)), this.player.userData.live || (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.canFlyNum && (this.levelClass.boostHatModels[this.player.userData.canFlyNum].userData.fly = !1), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((s)=>s.position.x >= this.player.position.x - 5)?.position, this.player.userData.deadPos == null && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data[this.levelClass.objs.grassPlanes.data.length - 1].position)), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.canFlyJumps = 0, this.player.userData.canFlyNum = null, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x, this.player.userData.deadPos.y + .3, this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1));
            else {
                const s = this.player.userData.readyJump ? Math.PI / 2 : 0, e = this.player.userData.readyJump ? -Math.PI / 2 : 0, t = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, i = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, l = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, l, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
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
        lerp(s, e, t) {
            return s + (e - s) * t;
        }
        playerAliving(s) {
            s && (this.player.userData.deadPos = this.player.userData.startPos), this.player.userData.playerAlive = !0, setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 100);
        }
    }
    class st {
        constructor(s, e, t, i, a, o, n, l){
            this.scene = s, this.audioClass = e, this.physicsClass = t, this.renderer = i, this.camera = a, this.isMobile = o, this.paramsClass = n, this.worldClass = l, this.cameraSpeed = .01, this.boostHatModel, this.boostHatPropeller, this.boostHatMesh, this.boostHatModels = [], this.boostHatMeshes = [], this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.minPlaneWidthTic = 2, this.fixedDistanceHor = {
                min: 1,
                max: 6
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this._dayColor = new v(16777215), this._nightColor = new v(16771488), this.objs = {
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
                    geometryPlane: new _(this.planeWidth, this.planeHeight, this.planeDepth),
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
                    geometryPlaneTop: new _(this.planeWidth, .4, 1.2),
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
                    geometryPlaneGrass: new _(this.planeWidth, .5, this.planeDepth + .2),
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
                    geometryPlaneSensor: new _(this.planeWidth, .4, 1.2),
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
                    geometryLamp: new _(.3, 1, .3),
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
                    geometryPlafon: new Z(.32, 24, 16),
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
                    geometryBulb: new Z(.3),
                    materialBulb: new E({
                        emissive: new v(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                }
            }, this.objs.planes.plane = new z(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(L), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new z(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(L), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new z(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(L), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new z(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(L), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new z(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(L), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new z(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(L), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new z(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(L), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.plafons.materialPlafon.onBeforeCompile = (d)=>{
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
                const j = u.getContext("2d"), b = j.createRadialGradient(d / 2, d / 2, 0, d / 2, d / 2, d / 2);
                b.addColorStop(0, "rgba(255, 235, 175, 1)"), b.addColorStop(1, "rgba(255, 235, 175, 0)"), j.fillStyle = b, j.fillRect(0, 0, d, d);
                const m = new vs(u);
                return m.anisotropy = 1, m.generateMipmaps = !1, m.needsUpdate = !0, m;
            }
            this._glowTex = c(), this._emissive = h, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.players = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 8
            }, this.dt = new cs, this.menuInGame();
        }
        toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s : s ? new p(s.x ?? 1, s.y ?? 1, s.z ?? 1) : new p(1, 1, 1);
        }
        apply(s, e, t) {
            let i = t.userData.invBaseSize;
            if (!i) {
                const l = t.geometry;
                l.computeBoundingBox();
                const h = new p;
                l.boundingBox.getSize(h), i = t.userData.invBaseSize = new p(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new Q;
            const a = this._dummy, o = e[s] || {}, n = this.toVec3(o.size);
            a.position.copy(o.position || new p), o.rotation ? a.rotation.copy(o.rotation) : a.rotation.set(0, 0, 0), a.scale.set(n.x * i.x, n.y * i.y, n.z * i.z), a.updateMatrix(), t.setMatrixAt(s, a.matrix);
        }
        async loadTexture() {
            const s = new ms;
            s.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (e)=>{
                const t = new E({
                    map: e,
                    transparent: !0,
                    opacity: 1
                });
                e.wrapS = T, e.wrapT = T, e.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = t;
            }, void 0, function(e) {
                console.error("An error happened.");
            }), s.load("textures/123.jpg", (e)=>{
                const t = new E({
                    map: e
                });
                e.wrapS = T, e.wrapT = T, e.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = t;
            }, void 0, function(e) {
                console.error("An error happened.");
            });
        }
        async createLevel() {
            switch(await this.loadTexture(), await this.loadBoostsModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.paramsClass.gameDir = "hor";
                    let s = -2.5;
                    for(let t = 0; t < this.count; t++){
                        let i = D(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1), a = s + i / 2 + D(this.fixedDistanceHor.min, this.fixedDistanceHor.max), o = D(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (this.minPlaneWidthTic += .1, t > this.count - 10 ? (this.objs.planes.data[t].size.x = .1, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = .2 + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = .2 + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : t > 0 ? (this.objs.planes.data[t].size.x = i, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = i + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = i + .3, this.objs.grassPlanes.data[t].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[t].size.x = this.planeWidth, this.objs.planes.data[t].size.y = this.planeHeight, this.objs.topPlanes.data[t].size.x = this.planeWidth + .3, this.objs.topPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[t].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[t].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), t > this.count - 10) this.objs.planes.data[t].position.x = a + this.fixedDistanceHor.min * 2, this.objs.planes.data[t].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = a + this.fixedDistanceHor.min * 2, this.objs.topPlanes.data[t].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = a + this.fixedDistanceHor.min * 2, this.objs.grassPlanes.data[t].position.y = o + this.planeHeight / 1.5;
                        else if (t == 1) this.objs.planes.data[t].position.x = a / 1.2, this.objs.planes.data[t].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = a / 1.2, this.objs.topPlanes.data[t].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = a / 1.2, this.objs.grassPlanes.data[t].position.y = o + this.planeHeight / 1.5;
                        else if (t > 0) {
                            if (this.objs.planes.data[t].position.x = a, this.objs.planes.data[t].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[t].position.x = a, this.objs.topPlanes.data[t].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[t].position.x = a, this.objs.grassPlanes.data[t].position.y = o + this.planeHeight / 1.5, (t + 1) % 7 === 0) {
                                let n = this.boostHatModel.clone();
                                n.position.x = a, n.position.y = this.objs.topPlanes.data[t].position.y + 2, n.userData.num = t, this.boostHatModels.push(n), this.boostHatMeshes.push(n.children[0].children[0].children[0]), this.scene.add(n);
                            }
                        } else this.objs.planes.data[t].position.x = -this.planeWidth / 2, this.objs.planes.data[t].position.y = -this.planeHeight / 2 + .5, this.objs.topPlanes.data[t].position.x = -this.planeWidth / 2, this.objs.topPlanes.data[t].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .4, this.objs.grassPlanes.data[t].position.x = -this.planeWidth / 2, this.objs.grassPlanes.data[t].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .3;
                        if (this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.lights.length < this.lightsCount) {
                            const n = new ss(16247464, 0, 4);
                            n.position.set(0, 0, 1.6), this.lights.push(n), this.scene.add(n);
                        }
                        this.apply(t, this.objs.planes.data, this.objs.planes.plane), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), s = a + i / 2;
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
                        let i = D(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);
                        this.minPlaneWidthTic += .1;
                        let a = e + D(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[t].position.y = a - 1.3, this.objs.grassPlanes.data[t].position.y = a, this.objs.sensorPlanes.data[t].position.y = a - .3, this.objs.topPlanes.data[t].size.y = .3, this.objs.grassPlanes.data[t].size.y = .7, this.objs.sensorPlanes.data[t].size.y = .9, t > this.count - 10 && (this.objs.topPlanes.data[t].size.x = i / 8 + .1, this.objs.grassPlanes.data[t].size.x = i / 8 + .1, this.objs.sensorPlanes.data[t].size.x = i / 8 + .4), t > 0 ? (this.objs.topPlanes.data[t].size.x = i + .3, this.objs.grassPlanes.data[t].size.x = i + .3, this.objs.sensorPlanes.data[t].size.x = i + .7) : (this.objs.topPlanes.data[t].size.x = 10, this.objs.grassPlanes.data[t].size.x = 10, this.objs.sensorPlanes.data[t].size.x = 10), t > this.count - 10 ? this.objs.grassPlanes.data[t].userData.speed = D(8, 14) / 100 : this.objs.grassPlanes.data[t].userData.speed = D(4, 8) / 100, this.objs.lamps.data[t].position.x = this.objs.grassPlanes.data[t].position.x, this.objs.lamps.data[t].position.z = -this.planeDepth / 8, this.objs.lamps.data[t].position.y = this.objs.grassPlanes.data[t].position.y + this.objs.grassPlanes.data[t].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.plafons.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.plafons.data[t].position.y = this.objs.lamps.data[t].position.y + 1, this.objs.bulbs.data[t].position.x = this.objs.lamps.data[t].position.x, this.objs.bulbs.data[t].position.z = this.objs.lamps.data[t].position.z, this.objs.bulbs.data[t].position.y = this.objs.lamps.data[t].position.y + 1, (t + 1) % 7 === 0) {
                            let o = this.boostHatModel.clone();
                            o.position.x = D(this.bounds.leftX + 1, this.bounds.rightX - 1), o.position.y = this.objs.topPlanes.data[t].position.y + .5, this.boostHatModels.push(o), this.boostHatMeshes.push(o.children[0].children[0].children[0]), this.scene.add(o);
                        }
                        if (this.lights.length < this.lightsCount) {
                            const o = new ss(16247464, 0, 4);
                            o.position.set(0, 0, 1.6), this.lights.push(o), this.scene.add(o);
                        }
                        this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), e = a;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
        }
        getHorizontalWorldBounds(s = 0) {
            const e = new p(-1, 0, .5), t = new p(1, 0, .5), i = new p(0, 1, .5), a = new p(0, -1, .5);
            if (e.unproject(this.camera), t.unproject(this.camera), i.unproject(this.camera), a.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, n = e.clone().sub(o).normalize(), l = t.clone().sub(o).normalize(), h = i.clone().sub(o).normalize(), c = a.clone().sub(o).normalize(), d = (s - o.z) / n.z, u = (s - o.z) / c.z, j = o.clone().add(n.multiplyScalar(d)), b = o.clone().add(l.multiplyScalar(d)), m = o.clone().add(h.multiplyScalar(u)), w = o.clone().add(c.multiplyScalar(u));
                this.bounds = {
                    leftX: j.x,
                    rightX: b.x,
                    topY: m.y,
                    bottomY: w.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "hor") {
                let s = !1;
                for(let e = 0; e < this.objs.grassPlanes.data.length; e++){
                    const t = this.objs.grassPlanes.data[e], i = t.userData.body, a = t.userData.moveHor, o = t.userData.moveVert;
                    if (!(!a && !o || !i)) {
                        if (a) {
                            const n = i.translation(), l = a.x1 + a.w1 + t.size.x * .5, h = a.x2 - a.w2 - t.size.x * .5, c = t.userData.speed ?? .05;
                            n.x >= h && (t.userData.direction = -1), n.x <= l && (t.userData.direction = 1);
                            const d = t.userData.direction * c, u = n.x + d;
                            i.setNextKinematicTranslation({
                                x: u,
                                y: n.y,
                                z: n.z
                            }), t.position.x = u, this.objs.lamps.data[e].position.x = u, this.objs.plafons.data[e].position.x = u, this.objs.bulbs.data[e].position.x = u, this.objs.topPlanes.data[e].position.x = u;
                        } else if (o) {
                            const n = i.translation(), l = 2, h = .5, c = t.userData.speed ?? .03;
                            n.y >= l && (t.userData.direction = -1), n.y <= h && (t.userData.direction = 1);
                            const d = t.userData.direction * c, u = n.y + d;
                            i.setNextKinematicTranslation({
                                x: n.x,
                                y: u,
                                z: n.z
                            }), t.position.y = u, this.objs.lamps.data[e].position.y = u + this.objs.lamps.lampHeight, this.objs.plafons.data[e].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.bulbs.data[e].position.y = u + this.objs.lamps.lampHeight + 1, this.objs.topPlanes.data[e].position.y = u + .2;
                        }
                        this.apply(e, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(e, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(e, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(e, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(e, this.objs.bulbs.data, this.objs.bulbs.bulb), s = !0;
                    }
                }
                s && (this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            }
            if (this.paramsClass.gameDir == "vert") {
                for(let s = 0; s < this.objs.grassPlanes.data.length; s++){
                    const e = this.objs.grassPlanes.data[s], t = this.objs.topPlanes.data[s];
                    this.objs.sensorPlanes.data[s], this.objs.lamps.data[s], this.objs.plafons.data[s], this.objs.bulbs.data[s];
                    const i = e.userData.body, a = e.userData.speed, o = i.translation();
                    o.x > this.bounds.rightX - e.size.x / 2 ? e.userData.direction = -1 : o.x < this.bounds.leftX + e.size.x / 2 && (e.userData.direction = 1);
                    const n = e.userData.direction * a, l = o.x + n;
                    s > 0 && i.setNextKinematicTranslation({
                        x: l,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[s].position.x = l, this.objs.lamps.data[s].position.x = l, this.objs.plafons.data[s].position.x = l, this.objs.bulbs.data[s].position.x = l, this.objs.topPlanes.data[s].position.x = l, this.objs.topPlanes.data[s].position.y = o.y + .4, this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), t.position.set(l, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBoostsModel() {
            await new us().loadAsync("models/boosts/hat.glb").then((t)=>{
                const i = t.scene;
                this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];
                const a = this.boostHatPropeller.children[0].material;
                a.emissive.set(16777215), a.emissiveIntensity = 0, this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .03, this.boostHatModel.scale.y = .03, this.boostHatModel.scale.z = .03, this.boostHatModel.userData.fly = !1, this.boostHatModel.userData.num = 0;
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
            }), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? (this.objs.grassPlanes.data[s].userData.collide.setFriction(500), s > this.count - 10 && this.objs.grassPlanes.planeGrass.setColorAt(s, new v(16711680))) : this.objs.grassPlanes.data[s].userData.moveHor ? this.objs.grassPlanes.data[s].userData.collide.setFriction(500) : Math.random() < .3 && s > 2 && (this.objs.grassPlanes.data[s].userData.noFriction = !0, this.objs.grassPlanes.data[s].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(s, new v(13421806))), s > this.count - 10 && this.objs.grassPlanes.planeGrass.setColorAt(s, new v(16711680));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.boostHatModels.forEach((s, e, t)=>{
                s.children[0].children[1].rotation.y += .05, this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity == 0 ? s.children[0].children[1].children[0].material.emissiveIntensity = .1 : !this.worldClass.night && s.children[0].children[1].children[0].material.emissiveIntensity != 0 && (s.children[0].children[1].children[0].material.emissiveIntensity = 0);
            });
        }
        makeGlowSprite() {
            const s = new Ps(new Ds({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: ys
            }));
            return s.scale.set(10.4, 10.4, 10.4), s.renderOrder = 20, s;
        }
        lampsAnimate() {
            let s = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const t = this.camera.position.x - this.bounds.rightX / 2, i = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((a, o)=>{
                    a.pointLight;
                    const n = a.position.x >= t && a.position.x <= i, l = o;
                    if (n && !a.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        a.pointLight = h, a.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(a.glow);
                    }
                    if (a.pointLight) {
                        const h = a.pointLight;
                        h.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), a.glow.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 0);
                        const c = n ? this.lightIntensity : 0;
                        h.intensity = M.lerp(h.intensity, c, .15);
                        const d = n ? 1 : 0;
                        this._emissive[l] = M.lerp(this._emissive[l], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .5 + this._emissive[l] * .8;
                        a.glow && a.glow.scale.setScalar(u);
                        const j = 1.1, b = this._emissive[l], m = 1 + j * b, w = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[l];
                        C.userData._lastBulbFactor !== m && (C.size.set(w.x * m, w.y * m, w.z * m), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = m, s = !0), !n && h.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(h), a.pointLight = null, a.glow && (this.glowPool.push(a.glow), this.scene.remove(a.glow), a.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let t = !1;
                this.objs.plafons.data.forEach((i, a)=>{
                    const o = i.pointLight;
                    o && (o.intensity = M.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(a, this._dayColor), t = !0, this._emissive && this._emissive.length > a && (this._emissive[a] = 0);
                    const n = 1.1, l = this._emissive[a], h = 1 + n * l, c = this.objs.bulbs.baseSize, d = this.objs.bulbs.data[a];
                    d.userData._lastBulbFactor !== h && (d.size.set(c.x * h, c.y * h, c.z * h), this.apply(a, this.objs.bulbs.data, this.objs.bulbs.bulb), d.userData._lastBulbFactor = h, s = !0);
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), t && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const t = this.camera.position.y - this.bounds.topY / 2, i = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((a, o)=>{
                    a.pointLight;
                    const n = a.position.y >= t && a.position.y <= i, l = o;
                    if (n && !a.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        a.pointLight = h, a.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(a.glow);
                    }
                    if (a.pointLight) {
                        const h = a.pointLight;
                        h.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), a.glow.position.copy(a.position);
                        const c = n ? this.lightIntensity : 0;
                        h.intensity = M.lerp(h.intensity, c, .15);
                        const d = n ? 1 : 0;
                        this._emissive[l] = M.lerp(this._emissive[l], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const u = .8 + this._emissive[l] * .8;
                        a.glow && a.glow.scale.setScalar(u);
                        const j = 1, b = this._emissive[l], m = 1 + j * b, w = this.objs.bulbs.baseSize, C = this.objs.bulbs.data[l];
                        C.userData._lastBulbFactor !== m && (C.size.set(w.x * m, w.y * m, w.z * m), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), C.userData._lastBulbFactor = m, s = !0), !n && h.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(h), a.pointLight = null, a.glow && (this.glowPool.push(a.glow), this.scene.remove(a.glow), a.glow = null));
                    }
                }), s && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let t = !1;
                this.objs.plafons.data.forEach((i, a)=>{
                    const o = i.pointLight;
                    !i.pointLight && this._emissive[a] === 0 || (o && (o.intensity = M.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), i.pointLight = null, i.userData.light = !1, i.glow && (this.scene.remove(i.glow), this.glowPool.push(i.glow), i.glow = null))), this.objs.plafons.plafon.setColorAt(a, this._dayColor), t = !0, this._emissive && this._emissive.length > a && (this._emissive[a] = 0));
                }), t && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        needDeath(s = !1) {
            s && s.position.y > -1 ? (s.userData.body.setTranslation(new p(0, -5, 0)), s.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), s.userData.live = !1) : s || this.players.forEach((e, t, i)=>{
                e.player.position.y > 0 && (e.player.userData.body.setTranslation(new p(0, -5, 0)), e.player.userData.body.setLinvel({
                    x: 0,
                    y: 0,
                    z: 0
                }, !0), e.player.userData.live = !1);
            });
        }
        resetLevel() {}
        maxSpeed() {
            let s = this.players;
            if (s.length === 0) return -1;
            let e = 0, t;
            this.paramsClass.gameDir == "vert" ? t = s[0].player.position.y : t = s[0].player.position.x;
            for(let i = 1; i < s.length; i++)s[i].player && s[i].player.position ? this.paramsClass.gameDir == "vert" ? s[i].player.position.y > t && (t = s[i].player.position.y, e = i) : s[i].player.position.x > t && (t = s[i].player.position.x, e = i) : console.warn(`Player at index ${i} is missing player or position properties.`);
            return e;
        }
        async loadPlayers() {
            for(let s = 0; s < this.players.length; s++){
                let e = this.players[s];
                e.player.position.x = e.player.position.x - s * 1, this.physicsClass.addPhysicsToObject(e.player), this.paramsClass.gameDir == "vert" && (e.player.position.y = -0, e.player.userData.collider.setFriction(500)), await e.loadPlayerModel(), e.player.userData.startPos = e.player.position.clone(), this.scene.add(e.player), this.scene.add(e.playerOut), this.scene.add(e.playerModel), this.playerOuts.push(e.playerOut), s < this.players[0].playerColors.length ? e.head.children[0].material.color.set(this.players[0].playerColors[s]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), e.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > s ? e.player.userData.audio.push(this.audioClass.quacks[s].clone()) : e.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(s, e = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    this.paramsClass.gameStarting && (s.position.x += this.cameraSpeed * 3), this.cameraSpeed += 1e-6, s.position.y = this.isMobile ? 4 : 3, s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const t = this.maxSpeed(this.players);
                        if (t >= 0) {
                            const i = this.players[t].player.position.x, a = this.cam.maxBackJump;
                            i < this.cam.targetX - a ? this.cam.targetX = this.cam.targetX - a : this.cam.targetX = i;
                            const o = this.spring(s.position.x, this.cam.targetX, this.cam.velX, .25, e);
                            s.position.x - i < 1 && (s.position.x = o.newPos), this.cam.velX = o.newVel, s.position.y = this.isMobile ? 4 : 3, s.position.z = this.isMobile ? 20 : 25, s.lookAt(s.position.x, s.position.y - 2, 0);
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
        damp(s, e, t, i) {
            return s + (e - s) * (1 - Math.exp(-t * i));
        }
        spring(s, e, t, i, a) {
            const o = 2 / i, n = o * a, l = 1 / (1 + n + .48 * n * n + .235 * n * n * n);
            let h = s - e;
            const c = (t + o * h) * a, d = (t - o * c) * l;
            return {
                newPos: e + (h + c) * l,
                newVel: d
            };
        }
        showPopupInGame(s) {
            s ? this.showScreen("popup_game_btn1") : this.hideScreen("popup_game_btn1"), this.showScreen("popup_in_game");
        }
        menuInGame = ()=>{
            document.querySelector(".popup_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.players[0].playerAliving(!1);
            }), document.querySelector(".popup_game_btn2").addEventListener("click", ()=>{
                this.players.forEach((s, e, t)=>{
                    s.playerAliving(!0);
                }), this.camera.position.z = 7, this.camera.position.y = 2, this.camera.position.x = 0, this.cameraSpeed = .01, this.hideScreen("popup_in_game");
            }), document.querySelector(".popup_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((s, e, t)=>{
                    s.playerAliving(!0);
                }), this.paramsClass.dataLoaded = !1, Qs(this.scene);
            });
        };
        hideScreen(s) {
            document.querySelector(`.${s}`).classList.add("hidden_screen");
        }
        showScreen(s) {
            document.querySelector(`.${s}`).classList.remove("hidden_screen");
        }
    }
    class A {
        constructor(s, e){
            this.world = s, this.RAPIER = e, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new Q;
        }
        static _ensureInvBase(s) {
            if (s.userData.invBase) return s.userData.invBase;
            const e = s.geometry;
            e.computeBoundingBox();
            const t = new p;
            e.boundingBox.getSize(t);
            const i = new p(1 / (t.x || 1), 1 / (t.y || 1), 1 / (t.z || 1));
            return s.userData.invBase = i, i;
        }
        static _toVec3(s) {
            return typeof s == "number" ? new p(s, s, s) : s?.isVector3 ? s.clone() : new p(s?.x ?? 1, s?.y ?? 1, s?.z ?? 1);
        }
        addInstancedDynamic(s, e, t) {
            const i = A._toVec3(t.size), a = A._toVec3(t.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = t.quaternion?.isQuaternion ? t.quaternion : new X, n = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), l = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(l, n), this.instancedBodies.push({
                mesh: s,
                index: e,
                size: i,
                body: n
            });
        }
        addInstancedStatic(s, e, t, i) {
            const a = A._toVec3(i.size), o = A._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = i.quaternion?.isQuaternion ? i.quaternion : new X, l = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            s[t].userData.body = l, s[t].userData.shape = h, s[t].userData.collide = this.world.createCollider(h, l), this.instancedBodies.push({
                mesh: e,
                index: t,
                size: a,
                body: l
            });
        }
        updateInstancedTransforms() {
            const s = this._dummy, e = new Set;
            for (const t of this.instancedBodies){
                const i = A._ensureInvBase(t.mesh), a = t.body.translation(), o = t.body.rotation();
                s.position.set(a.x, a.y, a.z), s.quaternion.set(o.x, o.y, o.z, o.w), s.scale.set(t.size.x * i.x, t.size.y * i.y, t.size.z * i.z), s.updateMatrix(), t.mesh.setMatrixAt(t.index, s.matrix), e.add(t.mesh);
            }
            for (const t of e)t.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(s) {
            if (s != null && s.userData.name.includes("player")) {
                let e, t;
                const i = s.rotation.clone();
                s.rotation.set(0, 0, 0), new U().setFromObject(s);
                const a = hs(s);
                s.rotation.copy(i), s.userData.size = a, s.userData.orgRotation = i, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), t = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(.6).setRestitution(0).setFriction(.5).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), s.userData.body = e, s.userData.shape = t;
                let o = e;
                t.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(t, e);
                s.userData.collider = n, s.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    s,
                    e,
                    s.id
                ]);
            } else if (s != null && s.userData.name.includes("tops")) {
                let e, t;
                const i = s.rotation.clone();
                s.rotation.set(0, 0, 0), new U().setFromObject(s);
                const a = hs(s);
                s.rotation.copy(i), s.userData.size = a, s.userData.orgRotation = i, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(s.position.x, s.position.y, s.position.z).setRotation(s.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), t = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(0).setFriction(.3), t.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(t, e);
                s.userData.body = e, s.userData.collide = o, this.allWallBodyCollision.push(o), s.userData.handle = e.handle, this.dynamicBodies.push([
                    s,
                    e,
                    s.id
                ]), s.userData.playerHandlesInside = new Set, this.allTops.push(s);
            }
        }
    }
    const V = new p;
    function hs(r) {
        if (r.isMesh && r.geometry) {
            const e = r.geometry;
            return e.boundingBox || e.computeBoundingBox(), e.boundingBox.getSize(V), V.multiply(r.scale), V.clone();
        }
        return new U().setFromObject(r).getSize(new p);
    }
    class tt {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const s = new Ms, e = new Cs;
            await e.loadAsync("audio/ready-jump.wav").then((t)=>{
                this.readyJumpAudio = new k(s), this.readyJumpAudio.setBuffer(t), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await e.loadAsync("audio/quack1.mp3").then((t)=>{
                this.jumpAudio = new k(s), this.jumpAudio.setBuffer(t), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await e.loadAsync("audio/quack2.mp3").then((t)=>{
                this.jumpAudio2 = new k(s), this.jumpAudio2.setBuffer(t), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await e.loadAsync("audio/quack3.mp3").then((t)=>{
                this.jumpAudio3 = new k(s), this.jumpAudio3.setBuffer(t), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await e.loadAsync("audio/quack5.mp3").then((t)=>{
                this.jumpAudio4 = new k(s), this.jumpAudio4.setBuffer(t), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            });
        }
    }
    class et {
        constructor(s, e, t, i, a){
            this.levelClass = s, this.isMobile = e, this.renderer = t, this.camera = i, this.paramsClass = a, this.mouse = new p, this.raycaster = new Ss;
        }
        addKeyListeners() {
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
        }
        removedKeyListeners() {
            window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("mousedown", this.onKeyDown), window.removeEventListener("mouseup", this.onKeyUp), document.removeEventListener("touchend", this.onTapUp), document.removeEventListener("touchstart", this.onTapDown);
        }
        onTapDown = (s)=>{
            let e = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - e.left) / e.width * 2 - 1, this.mouse.y = -((s.clientY - e.top) / e.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
        };
        onTapUp = (s)=>{
            let e = this.renderer.domElement.getBoundingClientRect();
            s = s.changedTouches[0], this.mouse.x = (s.clientX - e.left) / e.width * 2 - 1, this.mouse.y = -((s.clientY - e.top) / e.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
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
                    this.levelClass.players.forEach((e, t, i)=>{
                        e.player.userData.playerAlive = !0;
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
                s.userData.canFly = !1, this.levelClass.boostHatModels[s.userData.canFlyNum].userData.fly = !1, s.userData.canFlyNum = null;
            }, 1e3)), s.userData.readyJump && s.userData.onGround ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), s.userData.audio[1].isPlaying || s.userData.audio[1].play(), s.userData.onGround = !1) : s.userData.onGround || (s.userData.canFly ? (s.userData.jumping = !0, s.userData.readyJump = !1, s.userData.audio[0].stop(), s.userData.audio[1].isPlaying || s.userData.audio[1].play(), s.userData.onGround = !1, s.userData.hatBoost--, s.userData.hatBoost == 0 && (s.userData.canFly = !1, setTimeout(()=>{
                this.levelClass.boostHatModels[s.userData.numHatBoost].userData.fly = !1;
            }, 500))) : (s.userData.readyJump = !1, s.userData.audio[0].stop())));
        }
    }
    class at {
        constructor(s, e, t, i, a){
            this.scene = s, this.camera = e, this.renderer = t, this.paramsClass = i, this.isMobile = a, this.ambientLight = new zs(11184810, 1), this.hemiLight = new Ls(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new _s(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Q, this.dirLight.target = this.targetObject, this.helper = new As(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x;
        }
        async loadWaterSky() {
            this.waterGeometry = new ts(900, 500), this.water = new Es(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new ms().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = T;
                }),
                sunDirection: new p,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.x = 200, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new p, this.sky = new Hs, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const s = this.sky.material.uniforms;
            s.turbidity.value = 1, s.rayleigh.value = 3, s.mieCoefficient.value = 5e-4, s.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new Y(new ts(1e4, 1e4), new Bs({
                color: 526362,
                side: ks,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const e = 1500, t = new Float32Array(e * 3), i = new Float32Array(e), a = new Float32Array(e * 3);
            for(let h = 0; h < e; h++){
                t[3 * h] = Math.random() * 600 - 300, t[3 * h + 1] = Math.random() * 150 - 100, t[3 * h + 2] = Math.random() * 300 - 500, i[h] = Math.random() * 2 + .7;
                const c = new v().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * h] = c.r, a[3 * h + 1] = c.g, a[3 * h + 2] = c.b;
            }
            const o = new Rs;
            o.setAttribute("position", new K(t, 3)), o.setAttribute("size", new K(i, 1)), o.setAttribute("color", new K(a, 3));
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
                fragmentShader: l,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: ys
            }), this.stars = new Ts(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const s = this.camera.position.x, e = Math.sign(s - this._prevCamX);
            this._prevCamX = e, this.stars.position.x = this.camera.position.x;
            const t = M.degToRad(90 - this.parameters.elevation), i = M.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, t, i), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.parameters.elevation < -2 ? this.night = !0 : this.night = !1), this.paramsClass.gameDir == "vert") {
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
            }), document.querySelectorAll(".together_game_chels").forEach((s, e, t)=>{
                s.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((i)=>{
                        i.classList.remove("together_game_chels_active");
                    }), s.classList.add("together_game_chels_active"), this.playersNum = e + 2;
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
            const e = ps, t = performance.now(), i = 200;
            function a(o) {
                const n = Math.min(1, (o - t) / i), l = 1 - Math.pow(1 - n, 4), h = Math.round(e + (s - e) * l);
                rt.textContent = String(h).padStart(3, "0"), n < 1 ? requestAnimationFrame(a) : ps = s;
            }
            requestAnimationFrame(a);
        }
    }
    const rt = document.getElementById("meters-float");
    let ps = 0;
    console.clear();
    let $, bs = !1, q = 0, ds = 1 / 60, lt = new cs, gs, N, W, P, g, G, I, x, H;
    const B = new Gs;
    B.background = new v(13230580);
    const y = new Is(25, window.innerWidth / window.innerHeight, .1, 2e3);
    y.position.z = 7;
    y.position.y = 2;
    const O = Xs();
    let fs = new Us;
    document.body.appendChild(fs.dom);
    const f = new Ws;
    f.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(f.domElement);
    f.shadowMap.enabled = !0;
    f.shadowMap.type = qs;
    f.outputColorSpace = Ns;
    f.toneMapping = Os;
    f.toneMappingExposure = 1.05;
    ws();
    window.addEventListener("resize", ws, !1);
    function ws() {
        O ? (y.aspect = document.body.offsetWidth / document.body.offsetHeight, y.updateProjectionMatrix(), f.setSize(innerWidth, innerHeight)) : (y.aspect = document.body.offsetWidth / document.body.offsetHeight, y.updateProjectionMatrix(), f.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function ht(r) {
        const s = await Vs(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        $ = new s.World(new s.Vector3(0, -9.81, 0)), gs = new s.EventQueue(!0), P = new A($, s), H = new nt(y), G = new tt, W = new at(B, y, f, x, O), g = new st(B, G, P, f, y, O, x, W);
        for(let e = 0; e < r; e++)g.players.push(new Zs(B, G, g, x, y));
        I = new et(g, O, f, y, x), I.addKeyListeners();
    }
    async function pt() {
        await W.loadWorld(), await G.loadAudio();
    }
    async function dt() {
        await g.createLevel(), await g.loadEnvironments(), await g.loadPlayers(), g.objs.grassPlanes.data.length > 0 && g.objs.grassPlanes.data.forEach((r, s)=>{
            g.objs.grassPlanes.data[s].userData.collide.setCollisionGroups(J([
                0
            ], [
                1
            ]));
        }), g.players.length > 0 && g.players.forEach((r, s)=>{
            g.players[s].player.userData.collider.setCollisionGroups(J([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function ut(r, s) {
        ct(), N.toggleLoader(!0), x = new ot, await ht(r), g.gameNum = s, await pt(), await dt(), setTimeout(()=>{
            N.showScreen("hud"), N.toggleLoader(!1), x.dataLoaded = !0, x.gameStarting = !0, bs = !0;
        }, 300);
    }
    N = new it(ut);
    function ct() {
        y.position.z = 7, y.position.y = 2, y.position.x = 0, f.toneMappingExposure = 1.05, I?.removedKeyListeners(), W = null, P = null, g = null, G = null, I = null, x = null, H = null;
    }
    function mt() {
        if (x.dataLoaded) {
            x.gameDir == "hor" ? H.updateMetersFloat(y.position.x - H.startX) : H.updateMetersFloat(y.position.y - H.startY), g.players.forEach((r, s, e)=>{
                r.playerMove();
            }), W.updateLighting(), g.levelAnimate(y), g.cameraMove(y), fs.update();
            for(let r = 0, s = P.dynamicBodies.length; r < s; r++)P.dynamicBodies[r][0].position.copy(P.dynamicBodies[r][1].translation()), P.dynamicBodies[r][0].quaternion.copy(P.dynamicBodies[r][1].rotation());
            P.updateInstancedTransforms(), $.step(gs), f.render(B, y);
        }
    }
    f.setAnimationLoop(()=>{
        q += lt.getDelta(), q > ds && bs && (mt(), f.render(B, y), q = q % ds);
    });
})();

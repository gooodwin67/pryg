import { B as W, V as p, Q as Y, M as vt, a as $, b as L, c as G, d as A, G as Q, C as E, S as st, E as M, I as S, D as C, e as jt, f as mt, O as tt, T as yt, R as T, P as et, g as Pt, h as Dt, A as gt, i as P, j as Mt, k as St, l as Ct, m as H, n as Lt, o as zt, H as _t, p as At, q as Et, r as it, W as Bt, s as kt, t as Ht, u as Rt, v as Gt, w as X, x as Tt, y as It, z as Ft, F as Wt, J as Ut, K as qt, L as Ot, N as Kt, U as Jt } from "./three-DjXYLer5.js";
(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);
        new MutationObserver((a)=>{
            for (const i of a)if (i.type === "childList") for (const o of i.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function e(a) {
            const i = {};
            return a.integrity && (i.integrity = a.integrity), a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy), a.crossOrigin === "use-credentials" ? i.credentials = "include" : a.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i;
        }
        function s(a) {
            if (a.ep) return;
            a.ep = !0;
            const i = e(a);
            fetch(a.href, i);
        }
    })();
    const Vt = "modulepreload", Xt = function(n, t) {
        return new URL(n, t).href;
    }, at = {}, Nt = function(t, e, s) {
        let a = Promise.resolve();
        if (e && e.length > 0) {
            let h = function(u) {
                return Promise.all(u.map((d)=>Promise.resolve(d).then((c)=>({
                            status: "fulfilled",
                            value: c
                        }), (c)=>({
                            status: "rejected",
                            reason: c
                        }))));
            };
            const o = document.getElementsByTagName("link"), r = document.querySelector("meta[property=csp-nonce]"), l = r?.nonce || r?.getAttribute("nonce");
            a = h(e.map((u)=>{
                if (u = Xt(u, s), u in at) return;
                at[u] = !0;
                const d = u.endsWith(".css"), c = d ? '[rel="stylesheet"]' : "";
                if (!!s) for(let m = o.length - 1; m >= 0; m--){
                    const w = o[m];
                    if (w.href === u && (!d || w.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${u}"]${c}`)) return;
                const g = document.createElement("link");
                if (g.rel = d ? "stylesheet" : Vt, d || (g.as = "script"), g.crossOrigin = "", g.href = u, l && g.setAttribute("nonce", l), document.head.appendChild(g), d) return new Promise((m, w)=>{
                    g.addEventListener("load", m), g.addEventListener("error", ()=>w(new Error(`Unable to preload CSS for ${u}`)));
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
    function _(n, t) {
        return Math.random() * (t - n) + n;
    }
    function Yt() {
        let n = window.matchMedia || window.msMatchMedia;
        return n ? n("(pointer:coarse)").matches : !1;
    }
    function R(n, t) {
        n.geometry.computeBoundingBox(), t.forEach(function(a, i, o) {
            a.geometry.computeBoundingBox();
        }), n.updateMatrixWorld(), t.forEach(function(a, i, o) {
            a.updateMatrixWorld();
        });
        let e = n.geometry.boundingBox.clone();
        e.applyMatrix4(n.matrixWorld);
        var s = !1;
        for(let a = t.length - 1; a > -1; a--)if (t[a].userData.id == null || t[a].userData.id != n.uuid) {
            let i = t[a].geometry.boundingBox.clone();
            i.applyMatrix4(t[a].matrixWorld), i.intersectsBox(e) && (s = t[a]);
        }
        return s;
    }
    function ot(n) {
        return n.reduce((t, e)=>t | 1 << e, 0);
    }
    function V(n, t) {
        const e = ot(n), s = ot(t);
        return "0x" + ((e & 65535) << 16 | s & 65535).toString(16).padStart(8, "0");
    }
    function nt(n) {
        const t = n.collisionGroups(), e = t >>> 16 & 65535, s = t & 65535;
        function a(i) {
            const o = [];
            for(let r = 0; r < 16; r++)i & 1 << r && o.push(r);
            return o;
        }
        return [
            a(e),
            a(s)
        ];
    }
    function $t(n) {
        return typeof n == "number" ? new p(n, n, n) : n?.isVector3 ? n : new p(n?.x ?? 1, n?.y ?? 1, n?.z ?? 1);
    }
    function rt(n) {
        return n?.userData?.id ?? n?.uuid ?? n?.id;
    }
    const Qt = new W(new p(-.5, -.5, -.5), new p(.5, .5, .5)), lt = new vt, ht = new Y;
    function pt(n) {
        if (n?.isObject3D) {
            if (n.updateMatrixWorld(!0), n.geometry?.isBufferGeometry) {
                const a = n.geometry;
                if (a.boundingBox || a.computeBoundingBox(), a.boundingBox) {
                    const i = a.boundingBox.clone();
                    return i.applyMatrix4(n.matrixWorld), i;
                }
            }
            return new W().setFromObject(n);
        }
        const t = n.position ?? n.pos ?? new p, e = $t(n.size ?? 1), s = n.quaternion?.isQuaternion ? n.quaternion : n.rotation?.isEuler ? ht.setFromEuler(n.rotation) : ht.set(0, 0, 0, 1);
        return lt.compose(t, s, e), Qt.clone().applyMatrix4(lt);
    }
    function q(n, t) {
        const e = pt(n), s = rt(n);
        for(let a = t.length - 1; a >= 0; a--){
            const i = t[a], o = rt(i);
            if (s !== void 0 && o !== void 0 && s === o) continue;
            if (pt(i).intersectsBox(e)) return i;
        }
        return null;
    }
    function Zt(n) {
        for(n.traverse((t)=>{
            t.geometry && t.geometry.dispose(), t.material && (Array.isArray(t.material) ? t.material.forEach((e)=>e.dispose()) : t.material.dispose()), t.material && t.material.map && t.material.map.dispose();
        }); n.children.length > 0;)n.remove(n.children[0]);
    }
    class ts {
        constructor(t, e, s, a){
            this.scene = t, this.audioClass = e, this.levelClass = s, this.paramsClass = a, this.playerHeight = .9, this.playerWidth = .5, this.player = new $(new L(this.playerWidth, this.playerHeight, this.playerWidth), new G({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = !0, this.player.userData.startPos, this.player.userData.deadPos, this.player.userData.playerAlive = !1, this.playerModel, this.playerOut = new $(new L(this.playerWidth, this.playerHeight + .1, this.playerWidth), new A({
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
            await new Q().loadAsync("models/players/player1.glb").then((s)=>{
                const a = s.scene;
                this.playerModel = a, this.playerModel.traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(i) {
                    i.isMesh && (i.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 1.3, this.playerModel.scale.y = 1.3, this.playerModel.scale.z = 1.3;
            });
        }
        playerMove() {
            if (q(this.player, this.levelClass.objs.sensorPlanes.data)) {
                const [t, e] = nt(this.player.userData.collider);
                e[0] == 0 && this.player.userData.collider.setCollisionGroups(V([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, e] = nt(this.player.userData.collider);
                e[0] != 0 && this.player.userData.collider.setCollisionGroups(V([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if (q(this.player, this.levelClass.objs.topPlanes.data) || q(this.player, this.levelClass.playerOuts) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), q(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(R(this.player, this.levelClass.boostHatMeshes))].position.copy(new p(this.player.userData.head.getWorldPosition(new p).x - .05, this.player.userData.head.getWorldPosition(new p).y + .15, this.player.userData.head.getWorldPosition(new p).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(R(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(R(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(R(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(R(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -4) this.levelClass.players.length < 2 ? (this.player.userData.live && (this.levelClass.gameNum == 2 ? this.levelClass.showPopupInGame(!0) : this.levelClass.gameNum == 4 && this.levelClass.showPopupInGame(!1)), this.player.userData.live = !1) : (this.player.userData.live && (this.player.userData.live = !1), this.levelClass.players.every((t)=>!t.player.userData.live) && this.paramsClass.gameStarting && (this.levelClass.showPopupInGame(!1), this.paramsClass.gameStarting = !1)), this.player.userData.live || (this.player.userData.body.setLinvel(new p(0, 0, 0)), this.player.userData.deadPos != this.player.userData.startPos && (this.player.userData.deadPos = this.levelClass.objs.grassPlanes.data.find((t)=>t.position.x >= this.player.position.x - 5)?.position), this.player.userData.playerAlive && (this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0), console.log(this.player.userData.deadPos), this.player.userData.body.setTranslation(new p(this.player.userData.deadPos.x, this.player.userData.deadPos.y + 1, this.player.userData.deadPos.z)), this.player.userData.deadPos = new p(0, 0, 0), this.player.userData.live = !0, this.player.userData.playerAlive = !1));
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, e = this.player.userData.readyJump ? -Math.PI / 2 : 0, s = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, a = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, i = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, r = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, l = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, e, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, i, .1), this.head.position.y = this.lerp(this.head.position.y, l, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, r, .1);
                const u = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, u, .4);
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
        lerp(t, e, s) {
            return t + (e - t) * s;
        }
        playerAliving(t) {
            t && (this.player.userData.deadPos = this.player.userData.startPos), this.player.userData.playerAlive = !0, setTimeout(()=>{
                this.paramsClass.gameStarting = !0;
            }, 100);
        }
    }
    class ss {
        constructor(t, e, s, a, i, o, r, l){
            this.scene = t, this.audioClass = e, this.physicsClass = s, this.renderer = a, this.camera = i, this.isMobile = o, this.paramsClass = r, this.worldClass = l, this.cameraSpeed = .01, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.fixedDistanceHor = {
                min: 1,
                max: 5
            }, this.fixedDistanceVert = {
                min: 3,
                max: 4
            }, this.count = 100, this._dayColor = new E(16777215), this._nightColor = new E(16771488), this.objs = {
                planes: {
                    data: Array.from({
                        length: this.count
                    }, (d, c)=>({
                            position: new p(0, 0, 0),
                            rotation: new M(0, 0, 0),
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
                    geometryPlane: new L(this.planeWidth, this.planeHeight, this.planeDepth),
                    materialPlane: new G({
                        color: 52224
                    }),
                    plane: null
                },
                topPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (d, c)=>({
                            position: new p(0, 0, 0),
                            rotation: new M(0, 0, 0),
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
                    geometryPlaneTop: new L(this.planeWidth, .4, 1.2),
                    materialPlaneTop: new A({
                        color: 13421568,
                        transparent: !0,
                        opacity: 0
                    }),
                    planeTop: null
                },
                grassPlanes: {
                    data: Array.from({
                        length: this.count
                    }, (d, c)=>({
                            position: new p(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(1, 1, 1),
                            userData: {
                                name: "tops",
                                collide: null,
                                body: null,
                                speed: null,
                                direction: 1
                            }
                        })),
                    geometryPlaneGrass: new L(this.planeWidth, .5, this.planeDepth + .2),
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
                    }, (d, c)=>({
                            position: new p(0, 0, 0),
                            rotation: new M(0, 0, 0),
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
                    geometryPlaneSensor: new L(this.planeWidth, .4, 1.2),
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
                    }, (d, c)=>({
                            position: new p(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.1, 2, .1),
                            userData: {
                                name: "lamp",
                                light: !1
                            }
                        })),
                    lampHeight: 1,
                    geometryLamp: new L(.3, 1, .3),
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
                    }, (d, c)=>({
                            position: new p(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.6, .6, .6),
                            userData: {
                                name: "plafon",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryPlafon: new st(.32, 24, 16),
                    materialPlafon: new A({
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
                    }, (d, c)=>({
                            position: new p(0, 0, 0),
                            rotation: new M(0, 0, 0),
                            scale: new p(1, 1, 1),
                            size: new p(.3, .3, .3),
                            userData: {
                                name: "bulb",
                                light: !1,
                                pointLight: null
                            }
                        })),
                    geometryBulb: new st(.3),
                    materialBulb: new A({
                        emissive: new E(16770979),
                        emissiveIntensity: 6,
                        color: 16777215
                    }),
                    bulb: null
                }
            }, this.objs.planes.plane = new S(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count), this.objs.planes.plane.instanceMatrix.setUsage(C), this.objs.planes.plane.receiveShadow = !0, this.objs.planes.plane.castShadow = !0, this.objs.planes.plane.frustumCulled = !1, this.objs.topPlanes.planeTop = new S(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count), this.objs.topPlanes.planeTop.instanceMatrix.setUsage(C), this.objs.topPlanes.planeTop.frustumCulled = !1, this.objs.grassPlanes.planeGrass = new S(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count), this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(C), this.objs.grassPlanes.planeGrass.userData.direction = 1, this.objs.grassPlanes.planeGrass.receiveShadow = !0, this.objs.grassPlanes.planeGrass.castShadow = !0, this.objs.grassPlanes.planeGrass.userData.name = "tops", this.objs.grassPlanes.planeGrass.frustumCulled = !1, this.objs.sensorPlanes.planeSensor = new S(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count), this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(C), this.objs.sensorPlanes.planeSensor.frustumCulled = !1, this.objs.sensorPlanes.planeSensor.visible = !1, this.objs.lamps.lamp = new S(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count), this.objs.lamps.lamp.instanceMatrix.setUsage(C), this.objs.lamps.lamp.frustumCulled = !1, this.objs.plafons.plafon = new S(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count), this.objs.plafons.plafon.instanceMatrix.setUsage(C), this.objs.plafons.plafon.frustumCulled = !1, this.objs.bulbs.bulb = new S(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count), this.objs.bulbs.bulb.instanceMatrix.setUsage(C), this.objs.bulbs.bulb.frustumCulled = !1, this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone(), this.objs.plafons.materialPlafon.onBeforeCompile = (d)=>{
                d.uniforms.fresnelPower = {
                    value: 2.5
                }, d.fragmentShader = d.fragmentShader.replace("#include <output_fragment>", `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `);
            }, this.objs.plafons.materialPlafon.needsUpdate = !0;
            const h = new Float32Array(this.count);
            for(let d = 0; d < this.count; d++)h[d] = 0;
            this.objs.bulbs.geometryBulb.setAttribute("aEmissive", new jt(h, 1)), this.objs.bulbs.materialBulb.onBeforeCompile = (d)=>{
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
            function u(d = 64) {
                const c = document.createElement("canvas");
                c.width = c.height = d;
                const x = c.getContext("2d"), g = x.createRadialGradient(d / 2, d / 2, 0, d / 2, d / 2, d / 2);
                g.addColorStop(0, "rgba(255, 235, 175, 1)"), g.addColorStop(1, "rgba(255, 235, 175, 0)"), x.fillStyle = g, x.fillRect(0, 0, d, d);
                const m = new Mt(c);
                return m.anisotropy = 1, m.generateMipmaps = !1, m.needsUpdate = !0, m;
            }
            this._glowTex = u(), this._emissive = h, this.glowPool = [], this.lightsCount = 5, this.lights = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.playerOuts = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new p(-1, 0, 0), this.rightEdge = new p(1, 0, 0), this.leftEdge.unproject(i), this.rightEdge.unproject(i), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.cam = {
                targetX: this.camera.position.x,
                velX: 0,
                followBackSpeed: 12,
                maxBackJump: 8
            }, this.dt = new mt, this.menuInGame();
        }
        toVec3(t) {
            return typeof t == "number" ? new p(t, t, t) : t?.isVector3 ? t : t ? new p(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new p(1, 1, 1);
        }
        apply(t, e, s) {
            let a = s.userData.invBaseSize;
            if (!a) {
                const l = s.geometry;
                l.computeBoundingBox();
                const h = new p;
                l.boundingBox.getSize(h), a = s.userData.invBaseSize = new p(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new tt;
            const i = this._dummy, o = e[t] || {}, r = this.toVec3(o.size);
            i.position.copy(o.position || new p), o.rotation ? i.rotation.copy(o.rotation) : i.rotation.set(0, 0, 0), i.scale.set(r.x * a.x, r.y * a.y, r.z * a.z), i.updateMatrix(), s.setMatrixAt(t, i.matrix);
        }
        async loadTexture() {
            const t = new yt;
            t.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (e)=>{
                const s = new A({
                    map: e,
                    transparent: !0,
                    opacity: 1
                });
                e.wrapS = T, e.wrapT = T, e.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.objs.planes.plane.material = s;
            }, void 0, function(e) {
                console.error("An error happened.");
            }), t.load("textures/123.jpg", (e)=>{
                const s = new A({
                    map: e
                });
                e.wrapS = T, e.wrapT = T, e.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.objs.grassPlanes.planeGrass.material = s;
            }, void 0, function(e) {
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
                        let a = _(this.planeWidth / 2, this.planeWidth - 1), i = t + a / 2 + _(this.fixedDistanceHor.min, this.fixedDistanceHor.max), o = _(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (s > 0 ? (this.objs.planes.data[s].size.x = a, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = a + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = a + .3, this.objs.grassPlanes.data[s].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth) : (this.objs.planes.data[s].size.x = this.planeWidth, this.objs.planes.data[s].size.y = this.planeHeight, this.objs.topPlanes.data[s].size.x = this.planeWidth + .3, this.objs.topPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.x = this.planeWidth + .3, this.objs.grassPlanes.data[s].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height, this.objs.grassPlanes.data[s].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth), s > 0 ? (this.objs.planes.data[s].position.x = i, this.objs.planes.data[s].position.y = o + this.planeHeight / 6, this.objs.topPlanes.data[s].position.x = i, this.objs.topPlanes.data[s].position.y = o + this.planeHeight / 1.5 + .2, this.objs.grassPlanes.data[s].position.x = i, this.objs.grassPlanes.data[s].position.y = o + this.planeHeight / 1.5) : (this.objs.planes.data[s].position.x = -this.planeWidth / 2, this.objs.planes.data[s].position.y = -this.planeHeight / 2 + .5, this.objs.topPlanes.data[s].position.x = -this.planeWidth / 2, this.objs.topPlanes.data[s].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .4, this.objs.grassPlanes.data[s].position.x = -this.planeWidth / 2, this.objs.grassPlanes.data[s].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + .3), this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const r = new et(16247464, 0, 4);
                            r.position.set(0, 0, 1.6), this.lights.push(r), this.scene.add(r);
                        }
                        this.apply(s, this.objs.planes.data, this.objs.planes.plane), this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), t = i + a / 2;
                    }
                    this.objs.planes.plane.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.planes.plane), this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let e = -5;
                    for(let s = 0; s < this.count; s++){
                        let a = _(this.bounds.rightX / 3, this.bounds.rightX / 2), i = e + _(this.fixedDistanceVert.min, this.fixedDistanceVert.max);
                        if (this.objs.topPlanes.data[s].position.y = i - 1.3, this.objs.grassPlanes.data[s].position.y = i, this.objs.sensorPlanes.data[s].position.y = i - .3, this.objs.topPlanes.data[s].size.y = .3, this.objs.grassPlanes.data[s].size.y = .7, this.objs.sensorPlanes.data[s].size.y = .9, s > 0 ? (this.objs.topPlanes.data[s].size.x = a + .3, this.objs.grassPlanes.data[s].size.x = a + .3, this.objs.sensorPlanes.data[s].size.x = a + .7) : (this.objs.topPlanes.data[s].size.x = 10, this.objs.grassPlanes.data[s].size.x = 10, this.objs.sensorPlanes.data[s].size.x = 10), this.objs.grassPlanes.data[s].userData.speed = _(4, 8) / 100, this.objs.lamps.data[s].position.x = this.objs.grassPlanes.data[s].position.x, this.objs.lamps.data[s].position.z = -this.planeDepth / 8, this.objs.lamps.data[s].position.y = this.objs.grassPlanes.data[s].position.y + this.objs.grassPlanes.data[s].size.y / 2 + this.objs.lamps.lampHeight - .2, this.objs.plafons.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.plafons.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.plafons.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.objs.bulbs.data[s].position.x = this.objs.lamps.data[s].position.x, this.objs.bulbs.data[s].position.z = this.objs.lamps.data[s].position.z, this.objs.bulbs.data[s].position.y = this.objs.lamps.data[s].position.y + 1, this.lights.length < this.lightsCount) {
                            const o = new et(16247464, 0, 4);
                            o.position.set(0, 0, 1.6), this.lights.push(o), this.scene.add(o);
                        }
                        this.apply(s, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(s, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.apply(s, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(s, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(s, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(s, this.objs.bulbs.data, this.objs.bulbs.bulb), e = i;
                    }
                    this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0, this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0, this.scene.add(this.objs.topPlanes.planeTop), this.scene.add(this.objs.grassPlanes.planeGrass), this.scene.add(this.objs.sensorPlanes.planeSensor), this.scene.add(this.objs.lamps.lamp), this.scene.add(this.objs.plafons.plafon), this.scene.add(this.objs.bulbs.bulb);
                    break;
            }
        }
        getHorizontalWorldBounds(t = 0) {
            const e = new p(-1, 0, .5), s = new p(1, 0, .5), a = new p(0, 1, .5), i = new p(0, -1, .5);
            if (e.unproject(this.camera), s.unproject(this.camera), a.unproject(this.camera), i.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const o = this.camera.position, r = e.clone().sub(o).normalize(), l = s.clone().sub(o).normalize(), h = a.clone().sub(o).normalize(), u = i.clone().sub(o).normalize(), d = (t - o.z) / r.z, c = (t - o.z) / u.z, x = o.clone().add(r.multiplyScalar(d)), g = o.clone().add(l.multiplyScalar(d)), m = o.clone().add(h.multiplyScalar(c)), w = o.clone().add(u.multiplyScalar(c));
                this.bounds = {
                    leftX: x.x,
                    rightX: g.x,
                    topY: m.y,
                    bottomY: w.y
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "vert") {
                for(let t = 0; t < this.objs.grassPlanes.data.length; t++){
                    const e = this.objs.grassPlanes.data[t], s = this.objs.topPlanes.data[t];
                    this.objs.sensorPlanes.data[t], this.objs.lamps.data[t], this.objs.plafons.data[t], this.objs.bulbs.data[t];
                    const a = e.userData.body, i = e.userData.speed, o = a.translation();
                    o.x > this.bounds.rightX - e.size.x / 2 ? e.userData.direction = -1 : o.x < this.bounds.leftX + e.size.x / 2 && (e.userData.direction = 1);
                    const r = e.userData.direction * i, l = o.x + r;
                    t > 0 && a.setNextKinematicTranslation({
                        x: l,
                        y: o.y,
                        z: o.z
                    }), this.objs.sensorPlanes.data[t].position.x = l, this.objs.lamps.data[t].position.x = l, this.objs.plafons.data[t].position.x = l, this.objs.bulbs.data[t].position.x = l, this.objs.topPlanes.data[t].position.x = l, this.objs.topPlanes.data[t].position.y = o.y + .4, this.apply(t, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor), this.apply(t, this.objs.topPlanes.data, this.objs.topPlanes.planeTop), this.apply(t, this.objs.lamps.data, this.objs.lamps.lamp), this.apply(t, this.objs.plafons.data, this.objs.plafons.plafon), this.apply(t, this.objs.bulbs.data, this.objs.bulbs.bulb), s.position.set(l, o.y + .6, o.z);
                }
                this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = !0, this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = !0, this.objs.lamps.lamp.instanceMatrix.needsUpdate = !0, this.objs.plafons.plafon.instanceMatrix.needsUpdate = !0, this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBoostsModel() {
            await new Q().loadAsync("models/boosts/hat.glb").then((s)=>{
                const a = s.scene;
                this.boostHatModel = a, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .015, this.boostHatModel.scale.y = .015, this.boostHatModel.scale.z = .015, this.boostHatModel.userData.fly = !1;
            });
        }
        async loadEnvironmentModel() {
            await new Q().loadAsync("models/environment/clouds.glb").then((s)=>{
                const a = s.scene;
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
            }), this.apply(t, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass), this.paramsClass.gameDir == "vert" ? this.objs.grassPlanes.data[t].userData.collide.setFriction(500) : Math.random() < .3 && t > 1 && (this.objs.grassPlanes.data[t].userData.collide.setFriction(0), this.objs.grassPlanes.planeGrass.setColorAt(t, new E(13421806)));
            this.paramsClass.gameDir == "hor" && (this.objs.planes.plane.instanceMatrix.needsUpdate = !0), this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = !0;
            for(let t = 1; t < 10; t++)this.boostHatModel.clone(), this.paramsClass.gameDir == "vert";
            this.clouds.forEach((t, e, s)=>{
                this.scene.add(t);
            });
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.boostHatModels.forEach((t, e, s)=>{
                t.children[0].children[1].rotation.y += .05;
            });
        }
        makeGlowSprite() {
            const t = new Pt(new Dt({
                map: this._glowTex,
                transparent: !0,
                depthWrite: !1,
                blending: gt
            }));
            return t.scale.set(10.4, 10.4, 10.4), t.renderOrder = 20, t;
        }
        lampsAnimate() {
            let t = !1;
            if (this.paramsClass.gameDir == "hor") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const s = this.camera.position.x - this.bounds.rightX / 2, a = this.camera.position.x + this.bounds.rightX * .8;
                this.objs.plafons.data.forEach((i, o)=>{
                    i.pointLight;
                    const r = i.position.x >= s && i.position.x <= a, l = o;
                    if (r && !i.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        i.pointLight = h, i.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(i.glow);
                    }
                    if (i.pointLight) {
                        const h = i.pointLight;
                        h.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), i.glow.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 0);
                        const u = r ? this.lightIntensity : 0;
                        h.intensity = P.lerp(h.intensity, u, .15);
                        const d = r ? 1 : 0;
                        this._emissive[l] = P.lerp(this._emissive[l], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .5 + this._emissive[l] * .8;
                        i.glow && i.glow.scale.setScalar(c);
                        const x = 1.1, g = this._emissive[l], m = 1 + x * g, w = this.objs.bulbs.baseSize, D = this.objs.bulbs.data[l];
                        D.userData._lastBulbFactor !== m && (D.size.set(w.x * m, w.y * m, w.z * m), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), D.userData._lastBulbFactor = m, t = !0), !r && h.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(h), i.pointLight = null, i.glow && (this.glowPool.push(i.glow), this.scene.remove(i.glow), i.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let s = !1;
                this.objs.plafons.data.forEach((a, i)=>{
                    const o = a.pointLight;
                    o && (o.intensity = P.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), a.pointLight = null, a.userData.light = !1, a.glow && (this.scene.remove(a.glow), this.glowPool.push(a.glow), a.glow = null))), this.objs.plafons.plafon.setColorAt(i, this._dayColor), s = !0, this._emissive && this._emissive.length > i && (this._emissive[i] = 0);
                    const r = 1.1, l = this._emissive[i], h = 1 + r * l, u = this.objs.bulbs.baseSize, d = this.objs.bulbs.data[i];
                    d.userData._lastBulbFactor !== h && (d.size.set(u.x * h, u.y * h, u.z * h), this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb), d.userData._lastBulbFactor = h, t = !0);
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0), s && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
            else if (this.paramsClass.gameDir == "vert") if (this.lightIntensity, this.worldClass.night) {
                this.lampsAnimate.did = !1;
                const s = this.camera.position.y - this.bounds.topY / 2, a = this.camera.position.y + this.bounds.topY * .2;
                this.objs.plafons.data.forEach((i, o)=>{
                    i.pointLight;
                    const r = i.position.y >= s && i.position.y <= a, l = o;
                    if (r && !i.pointLight && this.lights.length > 0) {
                        const h = this.lights.shift();
                        i.pointLight = h, i.glow = this.glowPool.pop() || this.makeGlowSprite(), this.scene.add(i.glow);
                    }
                    if (i.pointLight) {
                        const h = i.pointLight;
                        h.position.set(this.objs.lamps.data[l].position.x, this.objs.lamps.data[l].position.y + 1, this.objs.lamps.data[l].position.z + 2), i.glow.position.copy(i.position);
                        const u = r ? this.lightIntensity : 0;
                        h.intensity = P.lerp(h.intensity, u, .15);
                        const d = r ? 1 : 0;
                        this._emissive[l] = P.lerp(this._emissive[l], d, .18), this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0;
                        const c = .8 + this._emissive[l] * .8;
                        i.glow && i.glow.scale.setScalar(c);
                        const x = 1, g = this._emissive[l], m = 1 + x * g, w = this.objs.bulbs.baseSize, D = this.objs.bulbs.data[l];
                        D.userData._lastBulbFactor !== m && (D.size.set(w.x * m, w.y * m, w.z * m), this.apply(l, this.objs.bulbs.data, this.objs.bulbs.bulb), D.userData._lastBulbFactor = m, t = !0), !r && h.intensity <= .01 && this._emissive[l] <= .02 && (this.lights.push(h), i.pointLight = null, i.glow && (this.glowPool.push(i.glow), this.scene.remove(i.glow), i.glow = null));
                    }
                }), t && (this.objs.bulbs.bulb.instanceMatrix.needsUpdate = !0);
            } else {
                let s = !1;
                this.objs.plafons.data.forEach((a, i)=>{
                    const o = a.pointLight;
                    !a.pointLight && this._emissive[i] === 0 || (o && (o.intensity = P.lerp(o.intensity, 0, .2), o.intensity <= .01 && (o.intensity = 0, this.lights.push(o), a.pointLight = null, a.userData.light = !1, a.glow && (this.scene.remove(a.glow), this.glowPool.push(a.glow), a.glow = null))), this.objs.plafons.plafon.setColorAt(i, this._dayColor), s = !0, this._emissive && this._emissive.length > i && (this._emissive[i] = 0));
                }), s && (this.objs.plafons.plafon.instanceColor.needsUpdate = !0, this.objs.bulbs?.geometryBulb?.attributes?.aEmissive && (this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = !0));
            }
        }
        resetLevel() {}
        maxSpeed() {
            let t = this.players;
            if (t.length === 0) return -1;
            let e = 0, s;
            this.paramsClass.gameDir == "vert" ? s = t[0].player.position.y : s = t[0].player.position.x;
            for(let a = 1; a < t.length; a++)t[a].player && t[a].player.position ? this.paramsClass.gameDir == "vert" ? t[a].player.position.y > s && (s = t[a].player.position.y, e = a) : t[a].player.position.x > s && (s = t[a].player.position.x, e = a) : console.warn(`Player at index ${a} is missing player or position properties.`);
            return e;
        }
        async loadPlayers() {
            for(let t = 0; t < this.players.length; t++){
                let e = this.players[t];
                e.player.position.x = e.player.position.x - t * 1, this.physicsClass.addPhysicsToObject(e.player), this.paramsClass.gameDir == "vert" && (e.player.position.y = -0, e.player.userData.collider.setFriction(500)), await e.loadPlayerModel(), e.player.userData.startPos = e.player.position.clone(), this.scene.add(e.player), this.scene.add(e.playerOut), this.scene.add(e.playerModel), this.playerOuts.push(e.playerOut), t < this.players[0].playerColors.length ? e.head.children[0].material.color.set(this.players[0].playerColors[t]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), e.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > t ? e.player.userData.audio.push(this.audioClass.quacks[t].clone()) : e.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(t, e = this.dt.getDelta()) {
            switch(this.gameNum){
                case 1:
                    t.position.x += this.cameraSpeed * 3, this.cameraSpeed += 1e-6, t.position.y = this.isMobile ? 4 : 3, t.position.z = this.isMobile ? 20 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 2:
                    {
                        const s = this.maxSpeed(this.players);
                        if (s >= 0) {
                            const a = this.players[s].player.position.x, i = this.cam.maxBackJump;
                            a < this.cam.targetX - i ? this.cam.targetX = this.cam.targetX - i : this.cam.targetX = a;
                            const o = this.spring(t.position.x, this.cam.targetX, this.cam.velX, .95, e);
                            t.position.x = o.newPos, this.cam.velX = o.newVel, t.position.y = this.isMobile ? 4 : 3, t.position.z = this.isMobile ? 20 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                        }
                        break;
                    }
                case 3:
                    t.position.y += this.cameraSpeed, t.position.x = 0, t.position.z = this.isMobile ? 20 : 22, this.cameraSpeed += 1e-6, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 4:
                    t.position.y = this.players[this.maxSpeed(this.players)].player.position.y + 3.5, t.position.x = 0, t.position.z = (this.isMobile, 25), t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
            }
        }
        damp(t, e, s, a) {
            return t + (e - t) * (1 - Math.exp(-s * a));
        }
        spring(t, e, s, a, i) {
            const o = 2 / a, r = o * i, l = 1 / (1 + r + .48 * r * r + .235 * r * r * r);
            let h = t - e;
            const u = (s + o * h) * i, d = (s - o * u) * l;
            return {
                newPos: e + (h + u) * l,
                newVel: d
            };
        }
        showPopupInGame(t) {
            t ? this.showScreen("popup_game_btn1") : this.hideScreen("popup_game_btn1"), this.showScreen("popup_in_game");
        }
        menuInGame = ()=>{
            document.querySelector(".popup_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.players[0].playerAliving(!1);
            }), document.querySelector(".popup_game_btn2").addEventListener("click", ()=>{
                this.camera.position.z = 7, this.camera.position.y = 2, this.camera.position.x = 0, this.cameraSpeed = .01, this.hideScreen("popup_in_game"), this.players.forEach((t, e, s)=>{
                    t.playerAliving(!0);
                });
            }), document.querySelector(".popup_game_btn3").addEventListener("click", ()=>{
                this.hideScreen("popup_in_game"), this.showScreen("main_screen"), this.players.forEach((t, e, s)=>{
                    t.playerAliving(!0);
                }), this.paramsClass.dataLoaded = !1, Zt(this.scene);
            });
        };
        hideScreen(t) {
            document.querySelector(`.${t}`).classList.add("hidden_screen");
        }
        showScreen(t) {
            document.querySelector(`.${t}`).classList.remove("hidden_screen");
        }
    }
    class z {
        constructor(t, e){
            this.world = t, this.RAPIER = e, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new tt;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const e = t.geometry;
            e.computeBoundingBox();
            const s = new p;
            e.boundingBox.getSize(s);
            const a = new p(1 / (s.x || 1), 1 / (s.y || 1), 1 / (s.z || 1));
            return t.userData.invBase = a, a;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new p(t, t, t) : t?.isVector3 ? t.clone() : new p(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, e, s) {
            const a = z._toVec3(s.size), i = z._toVec3(s.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), o = s.quaternion?.isQuaternion ? s.quaternion : new Y, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(i.x, i.y, i.z).setRotation({
                x: o.x,
                y: o.y,
                z: o.z,
                w: o.w
            })), l = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(l, r), this.instancedBodies.push({
                mesh: t,
                index: e,
                size: a,
                body: r
            });
        }
        addInstancedStatic(t, e, s, a) {
            const i = z._toVec3(a.size), o = z._toVec3(a.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), r = a.quaternion?.isQuaternion ? a.quaternion : new Y, l = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(o.x, o.y, o.z).setRotation({
                x: r.x,
                y: r.y,
                z: r.z,
                w: r.w
            })), h = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(1.6).setRestitution(0);
            t[s].userData.body = l, t[s].userData.shape = h, t[s].userData.collide = this.world.createCollider(h, l), this.instancedBodies.push({
                mesh: e,
                index: s,
                size: i,
                body: l
            });
        }
        updateInstancedTransforms() {
            const t = this._dummy, e = new Set;
            for (const s of this.instancedBodies){
                const a = z._ensureInvBase(s.mesh), i = s.body.translation(), o = s.body.rotation();
                t.position.set(i.x, i.y, i.z), t.quaternion.set(o.x, o.y, o.z, o.w), t.scale.set(s.size.x * a.x, s.size.y * a.y, s.size.z * a.z), t.updateMatrix(), s.mesh.setMatrixAt(s.index, t.matrix), e.add(s.mesh);
            }
            for (const s of e)s.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let e, s;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new W().setFromObject(t);
                const i = dt(t);
                t.rotation.copy(a), t.userData.size = i, t.userData.orgRotation = a, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(.6).setRestitution(0).setFriction(.4).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), t.userData.body = e, t.userData.shape = s;
                let o = e;
                s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let r = this.world.createCollider(s, e);
                t.userData.collider = r, t.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    t,
                    e,
                    t.id
                ]);
            } else if (t != null && t.userData.name.includes("tops")) {
                let e, s;
                const a = t.rotation.clone();
                t.rotation.set(0, 0, 0), new W().setFromObject(t);
                const i = dt(t);
                t.rotation.copy(a), t.userData.size = i, t.userData.orgRotation = a, e = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setMass(1).setRestitution(0).setFriction(.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(s, e);
                t.userData.body = e, t.userData.collide = o, this.allWallBodyCollision.push(o), t.userData.handle = e.handle, this.dynamicBodies.push([
                    t,
                    e,
                    t.id
                ]), t.userData.playerHandlesInside = new Set, this.allTops.push(t);
            }
        }
    }
    const N = new p;
    function dt(n) {
        if (n.isMesh && n.geometry) {
            const e = n.geometry;
            return e.boundingBox || e.computeBoundingBox(), e.boundingBox.getSize(N), N.multiply(n.scale), N.clone();
        }
        return new W().setFromObject(n).getSize(new p);
    }
    class es {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const t = new St, e = new Ct;
            await e.loadAsync("audio/ready-jump.wav").then((s)=>{
                this.readyJumpAudio = new H(t), this.readyJumpAudio.setBuffer(s), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await e.loadAsync("audio/quack1.mp3").then((s)=>{
                this.jumpAudio = new H(t), this.jumpAudio.setBuffer(s), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await e.loadAsync("audio/quack2.mp3").then((s)=>{
                this.jumpAudio2 = new H(t), this.jumpAudio2.setBuffer(s), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await e.loadAsync("audio/quack3.mp3").then((s)=>{
                this.jumpAudio3 = new H(t), this.jumpAudio3.setBuffer(s), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await e.loadAsync("audio/quack5.mp3").then((s)=>{
                this.jumpAudio4 = new H(t), this.jumpAudio4.setBuffer(s), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            });
        }
    }
    class is {
        constructor(t, e, s, a, i){
            this.levelClass = t, this.isMobile = e, this.renderer = s, this.camera = a, this.paramsClass = i, this.mouse = new p, this.raycaster = new Lt;
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
            switch(console.log(123), t.code){
                case void 0:
                    this.isMobile || this.downKeys(this.levelClass.players[0].player);
                    break;
                case "KeyW":
                case "ArrowUp":
                    break;
                case "KeyZ":
                case "ArrowDown":
                    console.log(this.levelClass.players), this.downKeys(this.levelClass.players[1].player);
                    break;
                case "KeyM":
                case "ArrowLeft":
                    this.downKeys(this.levelClass.players[2].player);
                    break;
                case "KeyD":
                case "ArrowRight":
                    this.levelClass.players.forEach((e, s, a)=>{
                        e.player.userData.playerAlive = !0;
                    });
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
    class as {
        constructor(t, e, s, a, i){
            this.scene = t, this.camera = e, this.renderer = s, this.paramsClass = a, this.isMobile = i, this.ambientLight = new zt(11184810, 1), this.hemiLight = new _t(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new At(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new tt, this.dirLight.target = this.targetObject, this.helper = new Et(this.dirLight, 3), this.water, this.night = !1, this._prevCamX = this.camera.position.x;
        }
        async loadWaterSky() {
            this.waterGeometry = new it(1e3, 500), this.water = new Bt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new yt().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = T;
                }),
                sunDirection: new p,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.isMobile ? this.water.position.y = -5 : this.water.position.y = -2, this.sun = new p, this.sky = new kt, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const t = this.sky.material.uniforms;
            t.turbidity.value = 1, t.rayleigh.value = 3, t.mieCoefficient.value = 5e-4, t.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new $(new it(1e4, 1e4), new Ht({
                color: 526362,
                side: Rt,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const e = 1500, s = new Float32Array(e * 3), a = new Float32Array(e), i = new Float32Array(e * 3);
            for(let h = 0; h < e; h++){
                s[3 * h] = Math.random() * 600 - 300, s[3 * h + 1] = Math.random() * 150 - 100, s[3 * h + 2] = Math.random() * 300 - 500, a[h] = Math.random() * 2 + .7;
                const u = new E().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                i[3 * h] = u.r, i[3 * h + 1] = u.g, i[3 * h + 2] = u.b;
            }
            const o = new Gt;
            o.setAttribute("position", new X(s, 3)), o.setAttribute("size", new X(a, 1)), o.setAttribute("color", new X(i, 3));
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
            this.materialStars = new Tt({
                uniforms: {
                    time: {
                        value: 0
                    },
                    opacity: {
                        value: 0
                    }
                },
                vertexShader: r,
                fragmentShader: l,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: gt
            }), this.stars = new It(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            const t = this.camera.position.x, e = Math.sign(t - this._prevCamX);
            this._prevCamX = e, this.stars.position.x = this.camera.position.x;
            const s = P.degToRad(90 - this.parameters.elevation), a = P.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, s, a), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.parameters.elevation < -2 ? this.night = !0 : this.night = !1), this.paramsClass.gameDir == "vert") {
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
    class os {
        constructor(t){
            this.initMatch = t, this.mainMenu(this.initMatch), this.playersNum = 2;
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
            }), document.querySelectorAll(".together_game_chels").forEach((t, e, s)=>{
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
    class ns {
        constructor(){
            this.gameDir = "vert", this.gameStarting = !1, this.dataLoaded = !1;
        }
    }
    class rs {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const e = ut, s = performance.now(), a = 200;
            function i(o) {
                const r = Math.min(1, (o - s) / a), l = 1 - Math.pow(1 - r, 4), h = Math.round(e + (t - e) * l);
                ls.textContent = String(h).padStart(3, "0"), r < 1 ? requestAnimationFrame(i) : ut = t;
            }
            requestAnimationFrame(i);
        }
    }
    const ls = document.getElementById("meters-float");
    let ut = 0;
    console.clear();
    let Z, bt = !1, O = 0, ct = 1 / 60, hs = new mt, ft, K, U, j, b, I, F, v, B;
    const k = new Ft;
    k.background = new E(13230580);
    const y = new Wt(25, window.innerWidth / window.innerHeight, .1, 2e3);
    y.position.z = 7;
    y.position.y = 2;
    const J = Yt();
    let wt = new Ut;
    document.body.appendChild(wt.dom);
    const f = new qt;
    f.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(f.domElement);
    f.shadowMap.enabled = !0;
    f.shadowMap.type = Ot;
    f.outputColorSpace = Kt;
    f.toneMapping = Jt;
    f.toneMappingExposure = 1.05;
    xt();
    window.addEventListener("resize", xt, !1);
    function xt() {
        J ? (y.aspect = document.body.offsetWidth / document.body.offsetHeight, y.updateProjectionMatrix(), f.setSize(innerWidth, innerHeight)) : (y.aspect = document.body.offsetWidth / document.body.offsetHeight, y.updateProjectionMatrix(), f.setSize(document.body.offsetWidth, document.body.offsetHeight));
    }
    async function ps(n) {
        const t = await Nt(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        Z = new t.World(new t.Vector3(0, -9.81, 0)), ft = new t.EventQueue(!0), j = new z(Z, t), B = new rs(y), I = new es, U = new as(k, y, f, v, J), b = new ss(k, I, j, f, y, J, v, U);
        for(let e = 0; e < n; e++)b.players.push(new ts(k, I, b, v));
        F = new is(b, J, f, y, v), F.addKeyListeners();
    }
    async function ds() {
        await U.loadWorld(), await I.loadAudio();
    }
    async function us() {
        await b.createLevel(), await b.loadEnvironments(), await b.loadPlayers(), b.objs.grassPlanes.data.length > 0 && b.objs.grassPlanes.data.forEach((n, t)=>{
            b.objs.grassPlanes.data[t].userData.collide.setCollisionGroups(V([
                0
            ], [
                1
            ]));
        }), b.players.length > 0 && b.players.forEach((n, t)=>{
            b.players[t].player.userData.collider.setCollisionGroups(V([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function cs(n, t) {
        ms(), K.toggleLoader(!0), v = new ns, await ps(n), b.gameNum = t, await ds(), await us(), setTimeout(()=>{
            K.showScreen("hud"), K.toggleLoader(!1), v.dataLoaded = !0, v.gameStarting = !0, bt = !0;
        }, 300);
    }
    K = new os(cs);
    function ms() {
        y.position.z = 7, y.position.y = 2, y.position.x = 0, f.toneMappingExposure = 1.05, F?.removedKeyListeners(), U = null, j = null, b = null, I = null, F = null, v = null, B = null;
    }
    function ys() {
        if (v.dataLoaded) {
            v.gameDir == "hor" ? B.updateMetersFloat(y.position.x - B.startX) : B.updateMetersFloat(y.position.y - B.startY), b.players.forEach((n, t, e)=>{
                n.playerMove();
            }), U.updateLighting(), b.levelAnimate(y), b.cameraMove(y), wt.update();
            for(let n = 0, t = j.dynamicBodies.length; n < t; n++)j.dynamicBodies[n][0].position.copy(j.dynamicBodies[n][1].translation()), j.dynamicBodies[n][0].quaternion.copy(j.dynamicBodies[n][1].rotation());
            j.updateInstancedTransforms(), Z.step(ft), f.render(k, y);
        }
    }
    f.setAnimationLoop(()=>{
        O += hs.getDelta(), O > ct && bt && (ys(), f.render(k, y), O = O % ct);
    });
})();

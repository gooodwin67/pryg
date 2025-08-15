import { B as k, V as l, Q as K, M as ut, a as W, b as w, c as A, d as E, G as N, E as v, I as z, D as C, O as X, T as ht, R as _, P as yt, S as mt, C as Y, A as gt, e as ft, f as L, g as wt, h as xt, H as Mt, i as Dt, j as bt, k as j, W as Pt, l as vt, m as zt, n as Ct, o as Lt, p as O, q as St, r as At, s as Et, t as Q, u as _t, v as Bt, w as Ht, x as kt, y as Rt, z as Gt, F as It } from "./three-8Lw8lVxD.js";
(async ()=>{
    (function() {
        const t = document.createElement("link").relList;
        if (t && t.supports && t.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);
        new MutationObserver((i)=>{
            for (const a of i)if (a.type === "childList") for (const n of a.addedNodes)n.tagName === "LINK" && n.rel === "modulepreload" && e(n);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function s(i) {
            const a = {};
            return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function e(i) {
            if (i.ep) return;
            i.ep = !0;
            const a = s(i);
            fetch(i.href, a);
        }
    })();
    const Tt = "modulepreload", Wt = function(o, t) {
        return new URL(o, t).href;
    }, $ = {}, Ft = function(t, s, e) {
        let i = Promise.resolve();
        if (s && s.length > 0) {
            let h = function(d) {
                return Promise.all(d.map((m)=>Promise.resolve(m).then((b)=>({
                            status: "fulfilled",
                            value: b
                        }), (b)=>({
                            status: "rejected",
                            reason: b
                        }))));
            };
            const n = document.getElementsByTagName("link"), r = document.querySelector("meta[property=csp-nonce]"), p = r?.nonce || r?.getAttribute("nonce");
            i = h(s.map((d)=>{
                if (d = Wt(d, e), d in $) return;
                $[d] = !0;
                const m = d.endsWith(".css"), b = m ? '[rel="stylesheet"]' : "";
                if (!!e) for(let P = n.length - 1; P >= 0; P--){
                    const R = n[P];
                    if (R.href === d && (!m || R.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${d}"]${b}`)) return;
                const g = document.createElement("link");
                if (g.rel = m ? "stylesheet" : Tt, m || (g.as = "script"), g.crossOrigin = "", g.href = d, p && g.setAttribute("nonce", p), document.head.appendChild(g), m) return new Promise((P, R)=>{
                    g.addEventListener("load", P), g.addEventListener("error", ()=>R(new Error(`Unable to preload CSS for ${d}`)));
                });
            }));
        }
        function a(n) {
            const r = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (r.payload = n, window.dispatchEvent(r), !r.defaultPrevented) throw n;
        }
        return i.then((n)=>{
            for (const r of n || [])r.status === "rejected" && a(r.reason);
            return t().catch(a);
        });
    };
    function M(o, t) {
        return Math.random() * (t - o) + o;
    }
    function qt() {
        let o = window.matchMedia || window.msMatchMedia;
        return o ? o("(pointer:coarse)").matches : !1;
    }
    function S(o, t) {
        o.geometry.computeBoundingBox(), t.forEach(function(i, a, n) {
            i.geometry.computeBoundingBox();
        }), o.updateMatrixWorld(), t.forEach(function(i, a, n) {
            i.updateMatrixWorld();
        });
        let s = o.geometry.boundingBox.clone();
        s.applyMatrix4(o.matrixWorld);
        var e = !1;
        for(let i = t.length - 1; i > -1; i--)if (t[i].userData.id == null || t[i].userData.id != o.uuid) {
            let a = t[i].geometry.boundingBox.clone();
            a.applyMatrix4(t[i].matrixWorld), a.intersectsBox(s) && (e = t[i]);
        }
        return e;
    }
    function Z(o) {
        return o.reduce((t, s)=>t | 1 << s, 0);
    }
    function F(o, t) {
        const s = Z(o), e = Z(t);
        return "0x" + ((s & 65535) << 16 | e & 65535).toString(16).padStart(8, "0");
    }
    function tt(o) {
        const t = o.collisionGroups(), s = t >>> 16 & 65535, e = t & 65535;
        function i(a) {
            const n = [];
            for(let r = 0; r < 16; r++)a & 1 << r && n.push(r);
            return n;
        }
        return [
            i(s),
            i(e)
        ];
    }
    function Ot(o) {
        return typeof o == "number" ? new l(o, o, o) : o?.isVector3 ? o : new l(o?.x ?? 1, o?.y ?? 1, o?.z ?? 1);
    }
    function et(o) {
        return o?.userData?.id ?? o?.uuid ?? o?.id;
    }
    const Ut = new k(new l(-.5, -.5, -.5), new l(.5, .5, .5)), st = new ut, it = new K;
    function at(o) {
        if (o?.isObject3D) {
            if (o.updateMatrixWorld(!0), o.geometry?.isBufferGeometry) {
                const i = o.geometry;
                if (i.boundingBox || i.computeBoundingBox(), i.boundingBox) {
                    const a = i.boundingBox.clone();
                    return a.applyMatrix4(o.matrixWorld), a;
                }
            }
            return new k().setFromObject(o);
        }
        const t = o.position ?? o.pos ?? new l, s = Ot(o.size ?? 1), e = o.quaternion?.isQuaternion ? o.quaternion : o.rotation?.isEuler ? it.setFromEuler(o.rotation) : it.set(0, 0, 0, 1);
        return st.compose(t, e, s), Ut.clone().applyMatrix4(st);
    }
    function U(o, t) {
        const s = at(o), e = et(o);
        for(let i = t.length - 1; i >= 0; i--){
            const a = t[i], n = et(a);
            if (e !== void 0 && n !== void 0 && e === n) continue;
            if (at(a).intersectsBox(s)) return a;
        }
        return null;
    }
    class Jt {
        constructor(t, s, e, i){
            this.scene = t, this.audioClass = s, this.levelClass = e, this.paramsClass = i, this.playerHeight = .8, this.playerWidth = .4, this.player = new W(new w(this.playerWidth, this.playerHeight, this.playerWidth), new A({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.2, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = !0, this.player.userData.startPos, this.playerModel, this.playerOut = new W(new w(this.playerWidth, this.playerHeight + .1, this.playerWidth), new E({
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
            await new N().loadAsync("models/players/player1.glb").then((e)=>{
                const i = e.scene;
                this.playerModel = i, this.playerModel.traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = .9, this.playerModel.scale.y = .9, this.playerModel.scale.z = .9;
            });
        }
        playerMove() {
            if (U(this.player, this.levelClass.sensorPlanes)) {
                const [t, s] = tt(this.player.userData.collider);
                s[0] == 0 && this.player.userData.collider.setCollisionGroups(F([
                    1
                ], [
                    1
                ]));
            } else {
                const [t, s] = tt(this.player.userData.collider);
                s[0] != 0 && this.player.userData.collider.setCollisionGroups(F([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if (U(this.player, this.levelClass.topPlanes) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), U(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(S(this.player, this.levelClass.boostHatMeshes))].position.copy(new l(this.player.userData.head.getWorldPosition(new l).x - .05, this.player.userData.head.getWorldPosition(new l).y + .15, this.player.userData.head.getWorldPosition(new l).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(S(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(S(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(S(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(S(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -2 && (this.player.userData.live = !1), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            else {
                const t = this.player.userData.readyJump ? Math.PI / 2 : 0, s = this.player.userData.readyJump ? -Math.PI / 2 : 0, e = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, i = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, n = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, r = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, p = this.player.userData.readyJump ? .75 : 1.18, h = this.player.userData.readyJump ? .55 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, s, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, p, .1), this.head.position.z = this.lerp(this.head.position.z, h, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, r, .1);
                const d = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, d, .4);
                const m = this.player.userData.readyJump ? .6 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, m, .1),
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
    class Kt {
        constructor(t, s, e, i, a, n, r, p){
            this.scene = t, this.audioClass = s, this.physicsClass = e, this.renderer = i, this.camera = a, this.isMobile = n, this.paramsClass = r, this.worldClass = p, this.planeWidth = 4, this.planeHeight = 10, this.planeDepth = 1, this.count = 100, this.planes = Array.from({
                length: this.count
            }, (h, d)=>({
                    position: new l(0, 0, 0),
                    rotation: new v(0, 0, 0),
                    scale: new l(1, 1, 1),
                    size: new l(1, 1, 1),
                    userData: {
                        name: "plane"
                    }
                })), this.geometryPlane = new w(this.planeWidth, this.planeHeight, this.planeDepth), this.materialPlane = new A({
                color: 52224
            }), this.plane = new z(this.geometryPlane, this.materialPlane, this.count), this.plane.instanceMatrix.setUsage(C), this.plane.receiveShadow = !0, this.plane.castShadow = !0, this.topPlanes = Array.from({
                length: this.count
            }, (h, d)=>({
                    position: new l(0, 0, 0),
                    rotation: new v(0, 0, 0),
                    scale: new l(1, 1, 1),
                    size: new l(1, 1, 1),
                    userData: {
                        name: "topSensor",
                        collide: null,
                        body: null,
                        speed: null,
                        direction: 1
                    }
                })), this.geometryPlaneTop = new w(this.planeWidth, .4, 1.2), this.materialPlaneTop = new E({
                color: 13421568,
                transparent: !0,
                opacity: 0
            }), this.planeTop = new z(this.geometryPlaneTop, this.materialPlaneTop, this.count), this.planeTop.instanceMatrix.setUsage(C), this.grassPlanes = Array.from({
                length: this.count
            }, (h, d)=>({
                    position: new l(0, 0, 0),
                    rotation: new v(0, 0, 0),
                    scale: new l(1, 1, 1),
                    size: new l(1, 1, 1),
                    userData: {
                        name: "tops",
                        collide: null,
                        body: null,
                        speed: null,
                        direction: 1
                    }
                })), this.geometryPlaneGrass = new w(this.geometryPlane.parameters.width, .5, this.planeDepth + .2), this.materialPlaneGrass = new A({
                color: 52224,
                transparent: !0,
                opacity: 1
            }), this.planeGrass = new z(this.geometryPlaneGrass, this.materialPlaneGrass, this.count), this.planeGrass.instanceMatrix.setUsage(C), this.planeGrass.userData.direction = 1, this.planeGrass.receiveShadow = !0, this.planeGrass.castShadow = !0, this.planeGrass.userData.name = "tops", this.sensorPlanes = Array.from({
                length: this.count
            }, (h, d)=>({
                    position: new l(0, 0, 0),
                    rotation: new v(0, 0, 0),
                    scale: new l(1, 1, 1),
                    size: new l(1, 1, 1),
                    userData: {
                        name: "sensor",
                        collide: null,
                        body: null,
                        speed: null,
                        direction: 1
                    }
                })), this.geometryPlaneSensor = new w(this.planeWidth, .4, 1.2), this.materialPlaneSensor = new A({
                color: 65280,
                transparent: !0,
                opacity: 0
            }), this.planeSensor = new z(this.geometryPlaneSensor, this.materialPlaneSensor, this.count), this.planeSensor.instanceMatrix.setUsage(C), this.lamps = Array.from({
                length: this.count
            }, (h, d)=>({
                    position: new l(0, 0, 0),
                    rotation: new v(0, 0, 0),
                    scale: new l(1, 1, 1),
                    size: new l(.1, 2, .1),
                    userData: {
                        name: "lamp",
                        light: !1
                    }
                })), this.lampHeight = 1, this.geometryLamp = new w(.3, this.lampHeight, .3), this.materialLamp = new A({
                color: 16777215,
                transparent: !0,
                opacity: 1
            }), this.lamp = new z(this.geometryLamp, this.materialLamp, this.count), this.lamp.instanceMatrix.setUsage(C), this.lightsCount = 8, this.lights = [], this.bulbs = [], this.lightIntensity = 25, this.bulbEmissiveIntensity = .9, this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new l(-1, 0, 0), this.rightEdge = new l(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1;
        }
        toVec3(t) {
            return typeof t == "number" ? new l(t, t, t) : t?.isVector3 ? t : t ? new l(t.x ?? 1, t.y ?? 1, t.z ?? 1) : new l(1, 1, 1);
        }
        apply(t, s, e) {
            let i = e.userData.invBaseSize;
            if (!i) {
                const p = e.geometry;
                p.computeBoundingBox();
                const h = new l;
                p.boundingBox.getSize(h), i = e.userData.invBaseSize = new l(1 / (h.x || 1), 1 / (h.y || 1), 1 / (h.z || 1));
            }
            this._dummy ||= new X;
            const a = this._dummy, n = s[t] || {}, r = this.toVec3(n.size);
            a.position.copy(n.position || new l), n.rotation ? a.rotation.copy(n.rotation) : a.rotation.set(0, 0, 0), a.scale.set(r.x * i.x, r.y * i.y, r.z * i.z), a.updateMatrix(), e.setMatrixAt(t, a.matrix);
        }
        async loadTexture() {
            const t = new ht;
            t.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (s)=>{
                const e = new E({
                    map: s,
                    transparent: !0,
                    opacity: 1
                });
                s.wrapS = _, s.wrapT = _, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.plane.material = e;
            }, void 0, function(s) {
                console.error("An error happened.");
            }), t.load("textures/123.jpg", (s)=>{
                const e = new E({
                    map: s
                });
                s.wrapS = _, s.wrapT = _, s.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.planeGrass.material = e;
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
                        let i = M(this.planeWidth / 8, this.planeWidth - 1), a = M(2, 3), n = t + i / 2 + a, r = M(-1.2, 1.2) - this.planeHeight / 1.5;
                        if (e > 0 ? (this.planes[e].size.x = i, this.planes[e].size.y = this.planeHeight, this.topPlanes[e].size.x = i + .3, this.topPlanes[e].size.y = this.geometryPlaneTop.parameters.height, this.grassPlanes[e].size.x = i + .3, this.grassPlanes[e].size.y = this.geometryPlaneGrass.parameters.height, this.grassPlanes[e].size.z = this.geometryPlaneGrass.parameters.depth) : (this.planes[e].size.x = this.planeWidth, this.planes[e].size.y = this.planeHeight, this.topPlanes[e].size.x = this.planeWidth + .3, this.topPlanes[e].size.y = this.geometryPlaneTop.parameters.height, this.grassPlanes[e].size.x = this.planeWidth + .3, this.grassPlanes[e].size.y = this.geometryPlaneTop.parameters.height, this.grassPlanes[e].size.z = this.geometryPlaneGrass.parameters.depth), e > 0 ? (this.planes[e].position.x = n, this.planes[e].position.y = r + this.planeHeight / 6, this.topPlanes[e].position.x = n, this.topPlanes[e].position.y = r + this.planeHeight / 1.5 + .2, this.grassPlanes[e].position.x = n, this.grassPlanes[e].position.y = r + this.planeHeight / 1.5) : (this.planes[e].position.x = -this.planeWidth / 2, this.planes[e].position.y = -this.planeHeight / 2 + .5, this.topPlanes[e].position.x = -this.planeWidth / 2, this.topPlanes[e].position.y = this.geometryPlaneGrass.parameters.height / 2 + .4, this.grassPlanes[e].position.x = -this.planeWidth / 2, this.grassPlanes[e].position.y = this.geometryPlaneGrass.parameters.height / 2 + .3), this.lamps[e].position.x = this.grassPlanes[e].position.x, this.lamps[e].position.z = -this.planeDepth / 8, this.lamps[e].position.y = this.grassPlanes[e].position.y + this.grassPlanes[e].size.y / 2 + this.lampHeight - .2, this.lights.length < this.lightsCount) {
                            const p = new yt(16247464, 0, 4);
                            p.position.set(this.lamps[e].position.x, this.lamps[e].position.y + 1, 1.6), this.lights.push(p), this.scene.add(p);
                            const h = new W(new mt(.3), new E({
                                color: 16247464,
                                emissive: 16247464,
                                emissiveIntensity: .3
                            }));
                            h.position.copy(new l(p.position.x, p.position.y, this.lamps[e].position.z)), this.bulbs.push(h), this.scene.add(h), this.lamps[e].userData.light = !0;
                        }
                        this.apply(e, this.planes, this.plane), this.apply(e, this.topPlanes, this.planeTop), this.apply(e, this.grassPlanes, this.planeGrass), this.apply(e, this.lamps, this.lamp), t = n + i / 2;
                    }
                    this.plane.instanceMatrix.needsUpdate = !0, this.planeTop.instanceMatrix.needsUpdate = !0, this.planeGrass.instanceMatrix.needsUpdate = !0, this.lamp.instanceMatrix.needsUpdate = !0, this.scene.add(this.plane), this.scene.add(this.planeTop), this.scene.add(this.planeGrass), this.scene.add(this.lamp);
                    break;
                case 3:
                case 4:
                    this.paramsClass.gameDir = "vert";
                    let s = -5;
                    for(let e = 0; e < this.count; e++){
                        let i = M(this.bounds.rightX / 2, this.bounds.rightX / 8), a = M(3, 4), n = s + a;
                        this.topPlanes[e].position.y = n - 1.3, this.grassPlanes[e].position.y = n, this.sensorPlanes[e].position.y = n - .5, this.topPlanes[e].size.y = .3, this.grassPlanes[e].size.y = .7, this.sensorPlanes[e].size.y = .9, e > 0 ? (this.topPlanes[e].size.x = i + .3, this.grassPlanes[e].size.x = i + .3, this.sensorPlanes[e].size.x = i + .5) : (this.topPlanes[e].size.x = 10, this.grassPlanes[e].size.x = 10, this.sensorPlanes[e].size.x = 10), this.grassPlanes[e].userData.speed = M(4, 8) / 100, this.apply(e, this.topPlanes, this.planeTop), this.apply(e, this.grassPlanes, this.planeGrass), this.apply(e, this.sensorPlanes, this.planeSensor), s = n;
                    }
                    this.planeTop.instanceMatrix.needsUpdate = !0, this.planeGrass.instanceMatrix.needsUpdate = !0, this.planeSensor.instanceMatrix.needsUpdate = !0, this.scene.add(this.planeTop), this.scene.add(this.planeGrass), this.scene.add(this.planeSensor);
                    break;
            }
        }
        getHorizontalWorldBounds(t = 0) {
            const s = new l(-1, 0, .5), e = new l(1, 0, .5);
            if (s.unproject(this.camera), e.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const i = this.camera.position, a = s.clone().sub(i).normalize(), n = e.clone().sub(i).normalize(), r = (t - i.z) / a.z, p = i.clone().add(a.multiplyScalar(r)), h = i.clone().add(n.multiplyScalar(r));
                this.bounds = {
                    leftX: p.x,
                    rightX: h.x
                };
            }
        }
        animateTops() {
            if (this.paramsClass.gameDir == "vert") {
                for(let t = 0; t < this.grassPlanes.length; t++){
                    const s = this.grassPlanes[t], e = this.topPlanes[t];
                    this.sensorPlanes[t];
                    const i = s.userData.body, a = s.userData.speed, n = i.translation();
                    n.x > this.bounds.rightX - s.size.x / 2 ? s.userData.direction = -1 : n.x < this.bounds.leftX + s.size.x / 2 && (s.userData.direction = 1);
                    const r = s.userData.direction * a, p = n.x + r;
                    t > 0 && i.setNextKinematicTranslation({
                        x: p,
                        y: n.y,
                        z: n.z
                    }), this.sensorPlanes[t].position.x = p, this.topPlanes[t].position.x = p, this.topPlanes[t].position.y = n.y + .4, this.apply(t, this.sensorPlanes, this.planeSensor), this.apply(t, this.topPlanes, this.planeTop), e.position.set(p, n.y + .6, n.z);
                }
                this.planeSensor.instanceMatrix.needsUpdate = !0, this.planeTop.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBoostsModel() {
            await new N().loadAsync("models/boosts/hat.glb").then((e)=>{
                const i = e.scene;
                this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = -40, this.boostHatModel.scale.x = .015, this.boostHatModel.scale.y = .015, this.boostHatModel.scale.z = .015, this.boostHatModel.userData.fly = !1;
            });
        }
        async loadEnvironmentModel() {
            await new N().loadAsync("models/environment/clouds.glb").then((e)=>{
                const i = e.scene;
                this.cloudModel = i, this.cloudModel.children.forEach((a, n, r)=>{
                    a.position.x = n * 3, a.position.y = 4, a.position.z = -25, a.scale.x = .9, a.scale.y = .9, a.scale.z = .9;
                });
            });
        }
        async loadEnvironments() {
            for(let t = 0; t < this.grassPlanes.length; t++)this.paramsClass.gameDir == "hor" && (this.physicsClass.addInstancedStatic(this.grassPlanes, this.plane, t, {
                position: this.planes[t].position,
                size: this.planes[t].size,
                collide: "123"
            }), this.apply(t, this.planes, this.plane)), this.physicsClass.addInstancedStatic(this.grassPlanes, this.planeGrass, t, {
                position: this.grassPlanes[t].position,
                size: this.grassPlanes[t].size,
                collide: "123"
            }), this.apply(t, this.grassPlanes, this.planeGrass), this.paramsClass.gameDir == "vert" ? this.grassPlanes[t].userData.collide.setFriction(500) : Math.random() < .3 && t > 1 && (this.grassPlanes[t].userData.collide.setFriction(0), this.planeGrass.setColorAt(t, new Y(13421806)));
            this.paramsClass.gameDir == "hor" && (this.plane.instanceMatrix.needsUpdate = !0), this.planeGrass.instanceMatrix.needsUpdate = !0;
            for(let t = 1; t < 10; t++)this.boostHatModel.clone(), this.paramsClass.gameDir == "vert";
            this.clouds.forEach((t, s, e)=>{
                this.scene.add(t);
            });
        }
        changePosBlocks() {
            if (this.camera.position.x > this.grassPlanes[Math.round(this.grassPlanes.length / 2)].position.x) {
                let t = this.grassPlanes.shift();
                t.position.x = this.grassPlanes[this.grassPlanes.length - 1].position.x + 7, this.grassPlanes.push(t), this.apply(this.grassPlanes.length - 1, this.grassPlanes, this.planeGrass), this.planeGrass.instanceMatrix.needsUpdate = !0;
            }
        }
        levelAnimate() {
            this.animateTops(), this.lampsAnimate(), this.boostHatModels.forEach((t, s, e)=>{
                t.children[0].children[1].rotation.y += .05;
            });
        }
        lampsAnimate() {
            if (this.paramsClass.gameDir == "hor") {
                if (this.bulbs[Math.round(this.bulbs.length / 2)].position.x < this.camera.position.x) {
                    let t = this.bulbs.shift(), s = this.lights.shift(), e = this.lamps.findIndex((i)=>i.userData.light == !1);
                    this.lamps[e] != null && (t.position.x = this.lamps[e].position.x, t.position.y = this.grassPlanes[e].position.y + this.grassPlanes[e].size.y / 2 + this.lampHeight - .2 + 1, s.position.x = this.lamps[e].position.x, s.position.y = this.lamps[e].position.y + 1, this.bulbs.push(t), this.lights.push(s), this.lamps[e].userData.light = !0);
                }
                this.lights.forEach((t, s, e)=>{
                    this.worldClass.night && t.position.x < this.camera.position.x + this.bounds.rightX - this.bounds.rightX / 4 && t.position.x + this.bounds.rightX > this.camera.position.x + this.bounds.rightX / 4 ? (t.intensity < this.lightIntensity && this.worldClass.night && (t.intensity += 1), this.bulbs[s].material.emissiveIntensity < this.bulbEmissiveIntensity && this.worldClass.night && (this.bulbs[s].material.emissiveIntensity += .1)) : (!this.worldClass.night || t.position.x + this.bounds.rightX < this.camera.position.x + this.bounds.rightX / 4 || t.position.x + this.bounds.rightX > this.camera.position.x + this.bounds.rightX + this.bounds.rightX / 4) && (t.intensity > 0 && (t.intensity -= 1), this.bulbs[s].material.emissiveIntensity > .3 && (this.bulbs[s].material.emissiveIntensity -= .1));
                });
            }
        }
        resetLevel() {
            if (this.paramsClass.gameDir == "hor") for(let t = 0; t < this.count; t++)t < this.lightsCount ? (this.lights[t].position.set(this.lamps[t].position.x, this.lamps[t].position.y + 1, 1.6), this.bulbs[t].position.copy(new l(this.lights[t].position.x, this.lights[t].position.y, this.lamps[t].position.z)), this.lamps[t].userData.light = !0) : this.lamps[t].userData.light = !1;
        }
        maxSpeed() {
            let t = this.players;
            if (t.length === 0) return -1;
            let s = 0, e;
            this.paramsClass.gameDir == "vert" ? e = t[0].player.position.y : e = t[0].player.position.x;
            for(let i = 1; i < t.length; i++)t[i].player && t[i].player.position ? this.paramsClass.gameDir == "vert" ? t[i].player.position.y > e && (e = t[i].player.position.y, s = i) : t[i].player.position.x > e && (e = t[i].player.position.x, s = i) : console.warn(`Player at index ${i} is missing player or position properties.`);
            return s;
        }
        async loadPlayers() {
            for(let t = 0; t < this.players.length; t++){
                let s = this.players[t];
                s.player.position.x = s.player.position.x - t * 1, this.physicsClass.addPhysicsToObject(s.player), this.paramsClass.gameDir == "vert" && (s.player.position.y = -0, s.player.userData.collider.setFriction(500)), await s.loadPlayerModel(), s.player.userData.startPos = s.player.position.clone(), this.scene.add(s.player), this.scene.add(s.playerOut), this.scene.add(s.playerModel), this.topPlanes.push(s.playerOut), t < this.players[0].playerColors.length ? s.head.children[0].material.color.set(this.players[0].playerColors[t]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), s.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > t ? s.player.userData.audio.push(this.audioClass.quacks[t].clone()) : s.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(t) {
            switch(this.gameNum){
                case 1:
                    t.position.x += .03, t.position.y = this.isMobile ? 3.5 : 3, t.position.z = this.isMobile ? 13 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 2:
                    t.position.x = this.players[this.maxSpeed(this.players)].player.position.x, t.position.y = this.isMobile ? 3.5 : 3, t.position.z = this.isMobile ? 13 : 25, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 3:
                    t.position.y += .01, t.position.x = 0, t.position.z = this.isMobile ? 20 : 22, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
                case 4:
                    t.position.y = this.players[this.maxSpeed(this.players)].player.position.y + 3.5, t.position.x = 0, t.position.z = this.isMobile ? 15 : 22, t.lookAt(t.position.x, t.position.y - 2, 0);
                    break;
            }
        }
    }
    class x {
        constructor(t, s){
            this.world = t, this.RAPIER = s, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new X;
        }
        static _ensureInvBase(t) {
            if (t.userData.invBase) return t.userData.invBase;
            const s = t.geometry;
            s.computeBoundingBox();
            const e = new l;
            s.boundingBox.getSize(e);
            const i = new l(1 / (e.x || 1), 1 / (e.y || 1), 1 / (e.z || 1));
            return t.userData.invBase = i, i;
        }
        static _toVec3(t) {
            return typeof t == "number" ? new l(t, t, t) : t?.isVector3 ? t.clone() : new l(t?.x ?? 1, t?.y ?? 1, t?.z ?? 1);
        }
        addInstancedDynamic(t, s, e) {
            const i = x._toVec3(e.size), a = x._toVec3(e.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = e.quaternion?.isQuaternion ? e.quaternion : new K, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), p = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(p, r), this.instancedBodies.push({
                mesh: t,
                index: s,
                size: i,
                body: r
            });
        }
        addInstancedStatic(t, s, e, i) {
            const a = x._toVec3(i.size), n = x._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), r = i.quaternion?.isQuaternion ? i.quaternion : new K, p = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(n.x, n.y, n.z).setRotation({
                x: r.x,
                y: r.y,
                z: r.z,
                w: r.w
            })), h = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            t[e].userData.body = p, t[e].userData.shape = h, t[e].userData.collide = this.world.createCollider(h, p), this.instancedBodies.push({
                mesh: s,
                index: e,
                size: a,
                body: p
            });
        }
        updateInstancedTransforms() {
            const t = this._dummy, s = new Set;
            for (const e of this.instancedBodies){
                const i = x._ensureInvBase(e.mesh), a = e.body.translation(), n = e.body.rotation();
                t.position.set(a.x, a.y, a.z), t.quaternion.set(n.x, n.y, n.z, n.w), t.scale.set(e.size.x * i.x, e.size.y * i.y, e.size.z * i.z), t.updateMatrix(), e.mesh.setMatrixAt(e.index, t.matrix), s.add(e.mesh);
            }
            for (const e of s)e.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(t) {
            if (t != null && t.userData.name.includes("player")) {
                let s, e;
                const i = t.rotation.clone();
                t.rotation.set(0, 0, 0), new k().setFromObject(t);
                const a = ot(t);
                t.rotation.copy(i), t.userData.size = a, t.userData.orgRotation = i, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(.6).setRestitution(0).setFriction(.4).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), t.userData.body = s, t.userData.shape = e;
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
                const i = t.rotation.clone();
                t.rotation.set(0, 0, 0), new k().setFromObject(t);
                const a = ot(t);
                t.rotation.copy(i), t.userData.size = a, t.userData.orgRotation = i, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(t.position.x, t.position.y, t.position.z).setRotation(t.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), e = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(0).setFriction(.3), e.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(e, s);
                t.userData.body = s, t.userData.collide = n, this.allWallBodyCollision.push(n), t.userData.handle = s.handle, this.dynamicBodies.push([
                    t,
                    s,
                    t.id
                ]), t.userData.playerHandlesInside = new Set, this.allTops.push(t);
            }
        }
    }
    const J = new l;
    function ot(o) {
        if (o.isMesh && o.geometry) {
            const s = o.geometry;
            return s.boundingBox || s.computeBoundingBox(), s.boundingBox.getSize(J), J.multiply(o.scale), J.clone();
        }
        return new k().setFromObject(o).getSize(new l);
    }
    class Nt {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const t = new gt, s = new ft;
            await s.loadAsync("audio/ready-jump.wav").then((e)=>{
                this.readyJumpAudio = new L(t), this.readyJumpAudio.setBuffer(e), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack1.mp3").then((e)=>{
                this.jumpAudio = new L(t), this.jumpAudio.setBuffer(e), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack2.mp3").then((e)=>{
                this.jumpAudio2 = new L(t), this.jumpAudio2.setBuffer(e), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack3.mp3").then((e)=>{
                this.jumpAudio3 = new L(t), this.jumpAudio3.setBuffer(e), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            }), await s.loadAsync("audio/quack5.mp3").then((e)=>{
                this.jumpAudio4 = new L(t), this.jumpAudio4.setBuffer(e), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((e)=>{
                console.error("Ошибка при загрузке аудио:", e);
            });
        }
    }
    class Vt {
        constructor(t, s, e, i){
            this.levelClass = t, this.isMobile = s, this.renderer = e, this.camera = i, this.camera = i, this.mouse = new l, this.raycaster = new wt, this.addKeyListeners();
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
                    this.levelClass.players.forEach((s, e, i)=>{
                        s.player.userData.live = !0, this.levelClass.resetLevel();
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
    class Xt {
        constructor(t, s, e, i){
            this.scene = t, this.camera = s, this.renderer = e, this.paramsClass = i, this.ambientLight = new xt(11184810, 1), this.hemiLight = new Mt(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new Dt(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new X, this.dirLight.target = this.targetObject, this.helper = new bt(this.dirLight, 3), this.water, this.night = !1;
        }
        async loadWaterSky() {
            this.waterGeometry = new j(1e3, 500), this.water = new Pt(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new ht().load("textures/waternormals.jpg", function(h) {
                    h.wrapS = h.wrapT = _;
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
            }, this.blackSky = new W(new j(1e4, 1e4), new zt({
                color: 526362,
                side: Ct,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const s = 1500, e = new Float32Array(s * 3), i = new Float32Array(s), a = new Float32Array(s * 3);
            for(let h = 0; h < s; h++){
                e[3 * h] = Math.random() * 600 - 300, e[3 * h + 1] = Math.random() * 150 - 100, e[3 * h + 2] = Math.random() * 300 - 500, i[h] = Math.random() * 2 + .7;
                const d = new Y().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * h] = d.r, a[3 * h + 1] = d.g, a[3 * h + 2] = d.b;
            }
            const n = new Lt;
            n.setAttribute("position", new O(e, 3)), n.setAttribute("size", new O(i, 1)), n.setAttribute("color", new O(a, 3));
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
            this.materialStars = new St({
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
            this.stars.position.x = this.camera.position.x;
            const t = Q.degToRad(90 - this.parameters.elevation), s = Q.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, t, s), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.paramsClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.parameters.elevation < -2 ? this.night = !0 : this.night = !1), this.paramsClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const a = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= a * .01, this.blackSky.material.opacity += a * .01, this.materialStars.uniforms.opacity.value += a * .003, this.camera.position.y < this.topLight && a < 0 ? (this.dirLight.intensity -= a * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= a * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && a > 0 && (this.dirLight.intensity -= a * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= a * .01, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && (this.topLight = this.camera.position.y), this.parameters.elevation = Math.max(-100, Math.min(100, this.parameters.elevation)), this.prevCameraYSun = this.camera.position.y;
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
                    document.querySelectorAll(".together_game_chels").forEach((i)=>{
                        i.classList.remove("together_game_chels_active");
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
    class jt {
        constructor(){
            this.gameDir = "vert";
        }
    }
    class Qt {
        constructor(t){
            this.camera = t, this.score = 0, this.startX = this.camera.position.x, this.startY = this.camera.position.y;
        }
        updateMetersFloat(t) {
            if (t = Math.max(0, Math.floor(t)), t === this.shownFloat) return;
            const s = nt, e = performance.now(), i = 200;
            function a(n) {
                const r = Math.min(1, (n - e) / i), p = 1 - Math.pow(1 - r, 4), h = Math.round(s + (t - s) * p);
                $t.textContent = String(h).padStart(3, "0"), r < 1 ? requestAnimationFrame(a) : nt = t;
            }
            requestAnimationFrame(a);
        }
    }
    const $t = document.getElementById("meters-float");
    let nt = 0;
    console.clear();
    let V, pt = !1, G = 0, rt = 1 / 60, Zt = new It, dt, I, q, f, c, T, B, H;
    const D = new _t;
    D.background = new Y(13230580);
    const u = new Bt(25, window.innerWidth / window.innerHeight, .1, 2e3);
    u.position.z = 7;
    u.position.y = 2;
    const lt = qt();
    let ct = new Ht;
    document.body.appendChild(ct.dom);
    const y = new kt;
    y.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(y.domElement);
    y.shadowMap.enabled = !1;
    y.outputColorSpace = Rt;
    y.toneMapping = Gt;
    y.toneMappingExposure = 1.05;
    window.addEventListener("resize", te, !1);
    function te() {
        u.aspect = window.innerWidth / window.innerHeight, u.updateProjectionMatrix(), y.setSize(window.innerWidth, window.innerHeight);
    }
    async function ee(o) {
        B = new jt;
        const t = await Ft(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        V = new t.World(new t.Vector3(0, -9.81, 0)), dt = new t.EventQueue(!0), f = new x(V, t), H = new Qt(u), T = new Nt, q = new Xt(D, u, y, B), c = new Kt(D, T, f, y, u, lt, B, q);
        for(let s = 0; s < o; s++)c.players.push(new Jt(D, T, c, B));
        new Vt(c, lt, y, u);
    }
    async function se() {
        await q.loadWorld(), await T.loadAudio();
    }
    async function ie() {
        await c.createLevel(), await c.loadEnvironments(), await c.loadPlayers(), c.grassPlanes.length > 0 && c.grassPlanes.forEach((o, t)=>{
            c.grassPlanes[t].userData.collide.setCollisionGroups(F([
                0
            ], [
                1
            ]));
        }), c.players.length > 0 && c.players.forEach((o, t)=>{
            c.players[t].player.userData.collider.setCollisionGroups(F([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function ae(o, t) {
        I.toggleLoader(!0), await ee(o), c.gameNum = t, await se(), await ie(), setTimeout(()=>{
            I.showScreen("hud"), I.toggleLoader(!1), pt = !0;
        }, 300);
    }
    I = new Yt(ae);
    function oe() {
        if (pt) {
            B.gameDir == "hor" ? H.updateMetersFloat(u.position.x - H.startX) : H.updateMetersFloat(u.position.y - H.startY), c.players.forEach((o, t, s)=>{
                o.playerMove();
            }), q.updateLighting(), c.levelAnimate(u), c.cameraMove(u), ct.update();
            for(let o = 0, t = f.dynamicBodies.length; o < t; o++)f.dynamicBodies[o][0].position.copy(f.dynamicBodies[o][1].translation()), f.dynamicBodies[o][0].quaternion.copy(f.dynamicBodies[o][1].rotation());
            f.updateInstancedTransforms(), V.step(dt), y.render(D, u);
        }
    }
    y.setAnimationLoop(()=>{
        G += Zt.getDelta(), G > rt && (oe(), y.render(D, u), G = G % rt);
    });
})();

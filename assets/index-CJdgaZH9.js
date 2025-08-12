import { B as S, V as l, Q as F, M as de, a as q, b as x, c as H, d as R, G as O, E as A, I as E, D as _, O as K, T as oe, R as L, A as pe, e as ce, P, f as ue, g as ye, H as me, h as fe, i as ge, j as we, k as V, W as xe, S as Me, l as De, m as ve, C as ne, n as Pe, o as T, p as be, q as ze, r as Le, s as X, t as Se, u as Ce, v as Ae, w as Ee, x as _e, y as Be, z as He, F as Re, J as ke } from "./three-6ypYiLfH.js";
(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);
        new MutationObserver((i)=>{
            for (const a of i)if (a.type === "childList") for (const n of a.addedNodes)n.tagName === "LINK" && n.rel === "modulepreload" && t(n);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function s(i) {
            const a = {};
            return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function t(i) {
            if (i.ep) return;
            i.ep = !0;
            const a = s(i);
            fetch(i.href, a);
        }
    })();
    const Ge = "modulepreload", Te = function(o, e) {
        return new URL(o, e).href;
    }, j = {}, We = function(e, s, t) {
        let i = Promise.resolve();
        if (s && s.length > 0) {
            let d = function(c) {
                return Promise.all(c.map((m)=>Promise.resolve(m).then((D)=>({
                            status: "fulfilled",
                            value: D
                        }), (D)=>({
                            status: "rejected",
                            reason: D
                        }))));
            };
            const n = document.getElementsByTagName("link"), r = document.querySelector("meta[property=csp-nonce]"), h = r?.nonce || r?.getAttribute("nonce");
            i = d(s.map((c)=>{
                if (c = Te(c, t), c in j) return;
                j[c] = !0;
                const m = c.endsWith(".css"), D = m ? '[rel="stylesheet"]' : "";
                if (!!t) for(let v = n.length - 1; v >= 0; v--){
                    const C = n[v];
                    if (C.href === c && (!m || C.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${c}"]${D}`)) return;
                const f = document.createElement("link");
                if (f.rel = m ? "stylesheet" : Ge, m || (f.as = "script"), f.crossOrigin = "", f.href = c, h && f.setAttribute("nonce", h), document.head.appendChild(f), m) return new Promise((v, C)=>{
                    f.addEventListener("load", v), f.addEventListener("error", ()=>C(new Error(`Unable to preload CSS for ${c}`)));
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
            return e().catch(a);
        });
    };
    function b(o, e) {
        return Math.random() * (e - o) + o;
    }
    function Ie() {
        let o = window.matchMedia || window.msMatchMedia;
        return o ? o("(pointer:coarse)").matches : !1;
    }
    function z(o, e) {
        o.geometry.computeBoundingBox(), e.forEach(function(i, a, n) {
            i.geometry.computeBoundingBox();
        }), o.updateMatrixWorld(), e.forEach(function(i, a, n) {
            i.updateMatrixWorld();
        });
        let s = o.geometry.boundingBox.clone();
        s.applyMatrix4(o.matrixWorld);
        var t = !1;
        for(let i = e.length - 1; i > -1; i--)if (e[i].userData.id == null || e[i].userData.id != o.uuid) {
            let a = e[i].geometry.boundingBox.clone();
            a.applyMatrix4(e[i].matrixWorld), a.intersectsBox(s) && (t = e[i]);
        }
        return t;
    }
    function Y(o) {
        return o.reduce((e, s)=>e | 1 << s, 0);
    }
    function G(o, e) {
        const s = Y(o), t = Y(e);
        return "0x" + ((s & 65535) << 16 | t & 65535).toString(16).padStart(8, "0");
    }
    function Q(o) {
        const e = o.collisionGroups(), s = e >>> 16 & 65535, t = e & 65535;
        function i(a) {
            const n = [];
            for(let r = 0; r < 16; r++)a & 1 << r && n.push(r);
            return n;
        }
        return [
            i(s),
            i(t)
        ];
    }
    function Fe(o) {
        return typeof o == "number" ? new l(o, o, o) : o?.isVector3 ? o : new l(o?.x ?? 1, o?.y ?? 1, o?.z ?? 1);
    }
    function $(o) {
        return o?.userData?.id ?? o?.uuid ?? o?.id;
    }
    const qe = new S(new l(-.5, -.5, -.5), new l(.5, .5, .5)), Z = new de, ee = new F;
    function te(o) {
        if (o?.isObject3D) {
            if (o.updateMatrixWorld(!0), o.geometry?.isBufferGeometry) {
                const i = o.geometry;
                if (i.boundingBox || i.computeBoundingBox(), i.boundingBox) {
                    const a = i.boundingBox.clone();
                    return a.applyMatrix4(o.matrixWorld), a;
                }
            }
            return new S().setFromObject(o);
        }
        const e = o.position ?? o.pos ?? new l, s = Fe(o.size ?? 1), t = o.quaternion?.isQuaternion ? o.quaternion : o.rotation?.isEuler ? ee.setFromEuler(o.rotation) : ee.set(0, 0, 0, 1);
        return Z.compose(e, t, s), qe.clone().applyMatrix4(Z);
    }
    function W(o, e) {
        const s = te(o), t = $(o);
        for(let i = e.length - 1; i >= 0; i--){
            const a = e[i], n = $(a);
            if (t !== void 0 && n !== void 0 && t === n) continue;
            if (te(a).intersectsBox(s)) return a;
        }
        return null;
    }
    class Oe {
        constructor(e, s, t){
            this.scene = e, this.audioClass = s, this.levelClass = t, this.playerHeight = .7, this.playerWidth = .3, this.player = new q(new x(this.playerWidth, this.playerHeight, this.playerWidth), new H({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = 1.8, this.player.position.x = -.4, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !0, this.player.userData.hatBoost = 100, this.player.userData.numHatBoost = 100, this.player.userData.live = !0, this.player.userData.startPos, this.playerModel, this.playerOut = new q(new x(this.playerWidth, this.playerHeight + .1, this.playerWidth), new R({
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
            await new O().loadAsync("models/players/player1.glb").then((t)=>{
                const i = t.scene;
                this.playerModel = i, this.playerModel.traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = .7, this.playerModel.scale.y = .7, this.playerModel.scale.z = .7;
            });
        }
        playerMove() {
            if (W(this.player, this.levelClass.sensorPlanes)) {
                const [e, s] = Q(this.player.userData.collider);
                s[0] == 0 && this.player.userData.collider.setCollisionGroups(G([
                    1
                ], [
                    1
                ]));
            } else {
                const [e, s] = Q(this.player.userData.collider);
                s[0] != 0 && this.player.userData.collider.setCollisionGroups(G([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if (W(this.player, this.levelClass.topPlanes) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), W(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(z(this.player, this.levelClass.boostHatMeshes))].position.copy(new l(this.player.userData.head.getWorldPosition(new l).x - .05, this.player.userData.head.getWorldPosition(new l).y + .15, this.player.userData.head.getWorldPosition(new l).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(z(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(z(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(z(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(z(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -2 && (this.player.userData.live = !1), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            else {
                const e = this.player.userData.readyJump ? Math.PI / 2 : 0, s = this.player.userData.readyJump ? -Math.PI / 2 : 0, t = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, i = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, n = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, r = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, h = this.player.userData.readyJump ? .75 : 1.18, d = this.player.userData.readyJump ? .75 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, s, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, t, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, h, .1), this.head.position.z = this.lerp(this.head.position.z, d, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, r, .1);
                const c = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, c, .4);
                const m = this.player.userData.readyJump ? .7 : 0;
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
                    x: this.levelClass.gameDir == "hor" ? this.player.userData.playerPowerJump / 3 : 0,
                    y: this.player.userData.playerPowerJump / 1.4,
                    z: 0
                }, !0), this.player.userData.playerPowerJump = 1, this.player.userData.jumping = !1);
            }
        }
        lerp(e, s, t) {
            return e + (s - e) * t;
        }
    }
    class Je {
        constructor(e, s, t, i, a, n){
            this.scene = e, this.audioClass = s, this.physicsClass = t, this.renderer = i, this.camera = a, this.isMobile = n, this.planeWidth = 4, this.planeHeight = 10, this.count = 50, this.planes = Array.from({
                length: this.count
            }, (r, h)=>({
                    position: new l(0, 0, 0),
                    rotation: new A(0, 0, 0),
                    scale: new l(1, 1, 1),
                    size: new l(1, 1, 1),
                    userData: {
                        name: "plane"
                    }
                })), this.geometryPlane = new x(this.planeWidth, this.planeHeight, 1), this.materialPlane = new H({
                color: 52224
            }), this.plane = new E(this.geometryPlane, this.materialPlane, this.count), this.plane.instanceMatrix.setUsage(_), this.plane.receiveShadow = !0, this.plane.castShadow = !0, this.topPlanes = Array.from({
                length: this.count
            }, (r, h)=>({
                    position: new l(0, 0, 0),
                    rotation: new A(0, 0, 0),
                    scale: new l(1, 1, 1),
                    size: new l(1, 1, 1),
                    userData: {
                        name: "topSensor",
                        collide: null,
                        body: null,
                        speed: null,
                        direction: 1
                    }
                })), this.geometryPlaneTop = new x(this.planeWidth, .4, 1.2), this.materialPlaneTop = new R({
                color: 13421568,
                transparent: !0,
                opacity: 0
            }), this.planeTop = new E(this.geometryPlaneTop, this.materialPlaneTop, this.count), this.planeTop.instanceMatrix.setUsage(_), this.grassPlanes = Array.from({
                length: this.count
            }, (r, h)=>({
                    position: new l(0, 0, 0),
                    rotation: new A(0, 0, 0),
                    scale: new l(1, 1, 1),
                    size: new l(1, 1, 1),
                    userData: {
                        name: "tops",
                        collide: null,
                        body: null,
                        speed: null,
                        direction: 1
                    }
                })), this.geometryPlaneGrass = new x(this.geometryPlane.parameters.width, .5, 1.2), this.materialPlaneGrass = new H({
                color: 52224,
                transparent: !0,
                opacity: 1
            }), this.planeGrass = new E(this.geometryPlaneGrass, this.materialPlaneGrass, this.count), this.planeGrass.instanceMatrix.setUsage(_), this.planeGrass.userData.direction = 1, this.planeGrass.receiveShadow = !0, this.planeGrass.castShadow = !0, this.planeGrass.userData.name = "tops", this.sensorPlanes = Array.from({
                length: this.count
            }, (r, h)=>({
                    position: new l(0, 0, 0),
                    rotation: new A(0, 0, 0),
                    scale: new l(1, 1, 1),
                    size: new l(1, 1, 1),
                    userData: {
                        name: "sensor",
                        collide: null,
                        body: null,
                        speed: null,
                        direction: 1
                    }
                })), this.geometryPlaneSensor = new x(this.planeWidth, .4, 1.2), this.materialPlaneSensor = new H({
                color: 65280,
                transparent: !0,
                opacity: 0
            }), this.planeSensor = new E(this.geometryPlaneSensor, this.materialPlaneSensor, this.count), this.planeSensor.instanceMatrix.setUsage(_), this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new l(-1, 0, 0), this.rightEdge = new l(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.gameDir = "vert";
        }
        toVec3(e) {
            return typeof e == "number" ? new l(e, e, e) : e?.isVector3 ? e : e ? new l(e.x ?? 1, e.y ?? 1, e.z ?? 1) : new l(1, 1, 1);
        }
        apply(e, s, t) {
            let i = t.userData.invBaseSize;
            if (!i) {
                const h = t.geometry;
                h.computeBoundingBox();
                const d = new l;
                h.boundingBox.getSize(d), i = t.userData.invBaseSize = new l(1 / (d.x || 1), 1 / (d.y || 1), 1 / (d.z || 1));
            }
            this._dummy ||= new K;
            const a = this._dummy, n = s[e] || {}, r = this.toVec3(n.size);
            a.position.copy(n.position || new l), n.rotation ? a.rotation.copy(n.rotation) : a.rotation.set(0, 0, 0), a.scale.set(r.x * i.x, r.y * i.y, r.z * i.z), a.updateMatrix(), t.setMatrixAt(e, a.matrix);
        }
        async loadTexture() {
            const e = new oe;
            e.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (s)=>{
                const t = new R({
                    map: s,
                    transparent: !0,
                    opacity: 1
                });
                s.wrapS = L, s.wrapT = L, s.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.plane.material = t;
            }, void 0, function(s) {
                console.error("An error happened.");
            }), e.load("textures/123.jpg", (s)=>{
                const t = new R({
                    map: s
                });
                s.wrapS = L, s.wrapT = L, s.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.planeGrass.material = t;
            }, void 0, function(s) {
                console.error("An error happened.");
            });
        }
        async createLevel() {
            switch(await this.loadTexture(), await this.loadBoostsModel(), await this.loadEnvironmentModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.gameDir = "hor";
                    let e = -2.5;
                    for(let t = 0; t < this.count; t++){
                        let i = b(this.planeWidth / 8, this.planeWidth - 1), n = e + i / 2 + 2, r = b(-1, 1) - this.planeHeight / 2;
                        t > 0 ? (this.planes[t].size.x = i, this.planes[t].size.y = this.planeHeight, this.topPlanes[t].size.x = i + .3, this.topPlanes[t].size.y = this.geometryPlaneTop.parameters.height, this.grassPlanes[t].size.x = i + .3, this.grassPlanes[t].size.y = this.geometryPlaneGrass.parameters.height, this.grassPlanes[t].size.z = this.geometryPlaneGrass.parameters.depth) : (this.planes[t].size.x = this.planeWidth, this.planes[t].size.y = this.planeHeight, this.topPlanes[t].size.x = this.planeWidth + .3, this.topPlanes[t].size.y = this.geometryPlaneTop.parameters.height, this.grassPlanes[t].size.x = this.planeWidth + .3, this.grassPlanes[t].size.y = this.geometryPlaneTop.parameters.height, this.grassPlanes[t].size.z = this.geometryPlaneGrass.parameters.depth), t > 0 ? (this.planes[t].position.x = n, this.planes[t].position.y = r + this.planeHeight / 6, this.topPlanes[t].position.x = n, this.topPlanes[t].position.y = r + this.planeHeight / 1.5 + .2, this.grassPlanes[t].position.x = n, this.grassPlanes[t].position.y = r + this.planeHeight / 1.5) : (this.planes[t].position.x = -this.planeWidth / 2, this.planes[t].position.y = -this.planeHeight / 2 + 1.2, this.topPlanes[t].position.x = -this.planeWidth / 2, this.topPlanes[t].position.y = this.geometryPlaneGrass.parameters.height / 2 + 1.2, this.grassPlanes[t].position.x = -this.planeWidth / 2, this.grassPlanes[t].position.y = this.geometryPlaneGrass.parameters.height / 2 + 1), this.apply(t, this.planes, this.plane), this.apply(t, this.topPlanes, this.planeTop), this.apply(t, this.grassPlanes, this.planeGrass), e = n + i / 2;
                    }
                    this.plane.instanceMatrix.needsUpdate = !0, this.planeTop.instanceMatrix.needsUpdate = !0, this.planeGrass.instanceMatrix.needsUpdate = !0, this.scene.add(this.plane), this.scene.add(this.planeTop), this.scene.add(this.planeGrass);
                    break;
                case 3:
                case 4:
                    this.gameDir = "vert";
                    let s = -3;
                    for(let t = 0; t < this.count; t++){
                        let i = b(this.bounds.rightX / 2, this.bounds.rightX / 10), a = b(3, 4), n = s + a;
                        this.topPlanes[t].position.y = n - 1.3, this.grassPlanes[t].position.y = n, this.sensorPlanes[t].position.y = n - .5, this.topPlanes[t].size.y = .3, this.grassPlanes[t].size.y = .7, this.sensorPlanes[t].size.y = .9, t > 0 ? (this.topPlanes[t].size.x = i + .3, this.grassPlanes[t].size.x = i + .3, this.sensorPlanes[t].size.x = i + .5) : (this.topPlanes[t].size.x = 10, this.grassPlanes[t].size.x = 10, this.sensorPlanes[t].size.x = 10), this.grassPlanes[t].userData.speed = b(4, 10) / 100, this.apply(t, this.topPlanes, this.planeTop), this.apply(t, this.grassPlanes, this.planeGrass), this.apply(t, this.sensorPlanes, this.planeSensor), s = n;
                    }
                    this.planeTop.instanceMatrix.needsUpdate = !0, this.planeGrass.instanceMatrix.needsUpdate = !0, this.planeSensor.instanceMatrix.needsUpdate = !0, this.scene.add(this.planeTop), this.scene.add(this.planeGrass), this.scene.add(this.planeSensor);
                    break;
            }
        }
        getHorizontalWorldBounds(e = 0) {
            const s = new l(-1, 0, .5), t = new l(1, 0, .5);
            if (s.unproject(this.camera), t.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const i = this.camera.position, a = s.clone().sub(i).normalize(), n = t.clone().sub(i).normalize(), r = (e - i.z) / a.z, h = i.clone().add(a.multiplyScalar(r)), d = i.clone().add(n.multiplyScalar(r));
                this.bounds = {
                    leftX: h.x,
                    rightX: d.x
                };
            }
        }
        animateTops() {
            if (this.gameDir == "vert") {
                for(let e = 0; e < this.grassPlanes.length; e++){
                    const s = this.grassPlanes[e], t = this.topPlanes[e];
                    this.sensorPlanes[e];
                    const i = s.userData.body, a = s.userData.speed, n = i.translation();
                    n.x > this.bounds.rightX - s.size.x / 2 ? s.userData.direction = -1 : n.x < this.bounds.leftX + s.size.x / 2 && (s.userData.direction = 1);
                    const r = s.userData.direction * a, h = n.x + r;
                    e > 0 && i.setNextKinematicTranslation({
                        x: h,
                        y: n.y,
                        z: n.z
                    }), this.sensorPlanes[e].position.x = h, this.topPlanes[e].position.x = h, this.topPlanes[e].position.y = n.y + .4, this.apply(e, this.sensorPlanes, this.planeSensor), this.apply(e, this.topPlanes, this.planeTop), t.position.set(h, n.y + .6, n.z);
                }
                this.planeSensor.instanceMatrix.needsUpdate = !0, this.planeTop.instanceMatrix.needsUpdate = !0;
            }
        }
        async loadBoostsModel() {
            await new O().loadAsync("models/boosts/hat.glb").then((t)=>{
                const i = t.scene;
                this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = 4, this.boostHatModel.scale.x = .015, this.boostHatModel.scale.y = .015, this.boostHatModel.scale.z = .015, this.boostHatModel.userData.fly = !1;
            });
        }
        async loadEnvironmentModel() {
            await new O().loadAsync("models/environment/clouds.glb").then((t)=>{
                const i = t.scene;
                this.cloudModel = i, this.cloudModel.children.forEach((a, n, r)=>{
                    a.position.x = n * 3, a.position.y = 4, a.position.z = -25, a.scale.x = .9, a.scale.y = .9, a.scale.z = .9;
                });
            });
        }
        async loadEnvironments() {
            for(let e = 0; e < this.grassPlanes.length; e++)this.gameDir == "hor" && (this.physicsClass.addInstancedStatic(this.grassPlanes, this.plane, e, {
                position: this.planes[e].position,
                size: this.planes[e].size,
                collide: "123"
            }), this.apply(e, this.planes, this.plane)), this.physicsClass.addInstancedStatic(this.grassPlanes, this.planeGrass, e, {
                position: this.grassPlanes[e].position,
                size: this.grassPlanes[e].size,
                collide: "123"
            }), this.apply(e, this.grassPlanes, this.planeGrass), this.gameDir == "vert" && this.grassPlanes[e].userData.collide.setFriction(500);
            this.gameDir == "hor" && (this.plane.instanceMatrix.needsUpdate = !0), this.planeGrass.instanceMatrix.needsUpdate = !0;
            for(let e = 1; e < 10; e++){
                let s = this.boostHatModel.clone();
                this.gameDir == "vert" ? s.position.y = e * 3 : s.position.x = e * 3, this.scene.add(s), this.boostHatModels.push(s), this.boostHatMeshes.push(s.children[0].children[0].children[0]);
            }
            this.clouds.forEach((e, s, t)=>{
                this.scene.add(e);
            });
        }
        levelAnimate() {
            this.animateTops(), this.boostHatModels.forEach((e, s, t)=>{
                e.children[0].children[1].rotation.y += .05;
            });
        }
        maxSpeed() {
            let e = this.players;
            if (e.length === 0) return -1;
            let s = 0, t;
            this.gameDir == "vert" ? t = e[0].player.position.y : t = e[0].player.position.x;
            for(let i = 1; i < e.length; i++)e[i].player && e[i].player.position ? this.gameDir == "vert" ? e[i].player.position.y > t && (t = e[i].player.position.y, s = i) : e[i].player.position.x > t && (t = e[i].player.position.x, s = i) : console.warn(`Player at index ${i} is missing player or position properties.`);
            return s;
        }
        async loadPlayers() {
            for(let e = 0; e < this.players.length; e++){
                let s = this.players[e];
                s.player.position.x = s.player.position.x - e * 1, this.physicsClass.addPhysicsToObject(s.player), this.gameDir == "vert" && s.player.userData.collider.setFriction(500), await s.loadPlayerModel(), s.player.userData.startPos = s.player.position.clone(), this.scene.add(s.player), this.scene.add(s.playerOut), this.scene.add(s.playerModel), e < this.players[0].playerColors.length ? s.head.children[0].material.color.set(this.players[0].playerColors[e]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), s.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > e ? s.player.userData.audio.push(this.audioClass.quacks[e].clone()) : s.player.userData.audio.push(this.audioClass.quacks[0].clone());
            }
        }
        cameraMove(e) {
            switch(this.gameNum){
                case 1:
                    e.position.x += .03, e.position.y = this.isMobile ? 4.5 : 4, e.position.z = this.isMobile ? 13 : 19, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
                case 2:
                    e.position.x = this.players[this.maxSpeed(this.players)].player.position.x, e.position.y = this.isMobile ? 4.5 : 4, e.position.z = this.isMobile ? 13 : 19, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
                case 3:
                    e.position.y += .01, e.position.x = 0, e.position.z = this.isMobile ? 20 : 22, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
                case 4:
                    e.position.y = this.players[this.maxSpeed(this.players)].player.position.y + 3.5, e.position.x = 0, e.position.z = this.isMobile ? 15 : 22, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
            }
        }
    }
    class w {
        constructor(e, s){
            this.world = e, this.RAPIER = s, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [], this.instancedBodies = [], this._dummy = new K;
        }
        static _ensureInvBase(e) {
            if (e.userData.invBase) return e.userData.invBase;
            const s = e.geometry;
            s.computeBoundingBox();
            const t = new l;
            s.boundingBox.getSize(t);
            const i = new l(1 / (t.x || 1), 1 / (t.y || 1), 1 / (t.z || 1));
            return e.userData.invBase = i, i;
        }
        static _toVec3(e) {
            return typeof e == "number" ? new l(e, e, e) : e?.isVector3 ? e.clone() : new l(e?.x ?? 1, e?.y ?? 1, e?.z ?? 1);
        }
        addInstancedDynamic(e, s, t) {
            const i = w._toVec3(t.size), a = w._toVec3(t.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), n = t.quaternion?.isQuaternion ? t.quaternion : new F, r = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(a.x, a.y, a.z).setRotation({
                x: n.x,
                y: n.y,
                z: n.z,
                w: n.w
            })), h = this.RAPIER.ColliderDesc.cuboid(i.x / 2, i.y / 2, i.z / 2).setFriction(.6).setRestitution(.1);
            this.world.createCollider(h, r), this.instancedBodies.push({
                mesh: e,
                index: s,
                size: i,
                body: r
            });
        }
        addInstancedStatic(e, s, t, i) {
            const a = w._toVec3(i.size), n = w._toVec3(i.position ?? {
                x: 0,
                y: 0,
                z: 0
            }), r = i.quaternion?.isQuaternion ? i.quaternion : new F, h = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(n.x, n.y, n.z).setRotation({
                x: r.x,
                y: r.y,
                z: r.z,
                w: r.w
            })), d = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setFriction(1.6).setRestitution(0);
            e[t].userData.body = h, e[t].userData.shape = d, e[t].userData.collide = this.world.createCollider(d, h), this.instancedBodies.push({
                mesh: s,
                index: t,
                size: a,
                body: h
            });
        }
        updateInstancedTransforms() {
            const e = this._dummy, s = new Set;
            for (const t of this.instancedBodies){
                const i = w._ensureInvBase(t.mesh), a = t.body.translation(), n = t.body.rotation();
                e.position.set(a.x, a.y, a.z), e.quaternion.set(n.x, n.y, n.z, n.w), e.scale.set(t.size.x * i.x, t.size.y * i.y, t.size.z * i.z), e.updateMatrix(), t.mesh.setMatrixAt(t.index, e.matrix), s.add(t.mesh);
            }
            for (const t of s)t.instanceMatrix.needsUpdate = !0;
        }
        addPhysicsToObject(e) {
            if (e != null && e.userData.name.includes("player")) {
                let s, t;
                const i = e.rotation.clone();
                e.rotation.set(0, 0, 0), new S().setFromObject(e);
                const a = se(e);
                e.rotation.copy(i), e.userData.size = a, e.userData.orgRotation = i, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), t = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(.6).setRestitution(0).setFriction(.4).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), e.userData.body = s, e.userData.shape = t;
                let n = s;
                t.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let r = this.world.createCollider(t, s);
                e.userData.collider = r, e.userData.handle = n.handle, this.playersHandles.push(n.handle), this.dynamicBodies.push([
                    e,
                    s,
                    e.id
                ]);
            } else if (e != null && e.userData.name.includes("tops")) {
                let s, t;
                const i = e.rotation.clone();
                e.rotation.set(0, 0, 0), new S().setFromObject(e);
                const a = se(e);
                e.rotation.copy(i), e.userData.size = a, e.userData.orgRotation = i, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), t = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(0).setFriction(.3), t.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(t, s);
                e.userData.body = s, e.userData.collide = n, this.allWallBodyCollision.push(n), e.userData.handle = s.handle, this.dynamicBodies.push([
                    e,
                    s,
                    e.id
                ]), e.userData.playerHandlesInside = new Set, this.allTops.push(e);
            }
        }
    }
    const I = new l;
    function se(o) {
        if (o.isMesh && o.geometry) {
            const s = o.geometry;
            return s.boundingBox || s.computeBoundingBox(), s.boundingBox.getSize(I), I.multiply(o.scale), I.clone();
        }
        return new S().setFromObject(o).getSize(new l);
    }
    class Ue {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const e = new pe, s = new ce;
            await s.loadAsync("audio/ready-jump.wav").then((t)=>{
                this.readyJumpAudio = new P(e), this.readyJumpAudio.setBuffer(t), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack1.mp3").then((t)=>{
                this.jumpAudio = new P(e), this.jumpAudio.setBuffer(t), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack2.mp3").then((t)=>{
                this.jumpAudio2 = new P(e), this.jumpAudio2.setBuffer(t), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack3.mp3").then((t)=>{
                this.jumpAudio3 = new P(e), this.jumpAudio3.setBuffer(t), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            }), await s.loadAsync("audio/quack5.mp3").then((t)=>{
                this.jumpAudio4 = new P(e), this.jumpAudio4.setBuffer(t), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((t)=>{
                console.error("Ошибка при загрузке аудио:", t);
            });
        }
    }
    class Ke {
        constructor(e, s, t, i){
            this.levelClass = e, this.isMobile = s, this.renderer = t, this.camera = i, this.camera = i, this.mouse = new l, this.raycaster = new ue, this.addKeyListeners();
        }
        addKeyListeners() {
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
        }
        onTapDown = (e)=>{
            let s = this.renderer.domElement.getBoundingClientRect();
            e = e.changedTouches[0], this.mouse.x = (e.clientX - s.left) / s.width * 2 - 1, this.mouse.y = -((e.clientY - s.top) / s.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
        };
        onTapUp = (e)=>{
            let s = this.renderer.domElement.getBoundingClientRect();
            e = e.changedTouches[0], this.mouse.x = (e.clientX - s.left) / s.width * 2 - 1, this.mouse.y = -((e.clientY - s.top) / s.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
        };
        onKeyDown = (e)=>{
            switch(e.code){
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
        onKeyUp = (e)=>{
            switch(e.code){
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
                    this.levelClass.players.forEach((s, t, i)=>{
                        s.player.userData.live = !0;
                    });
                    break;
            }
        };
        downKeys(e) {
            e.userData.live && (e.userData.onGround || e.userData.canFly) && (e.userData.readyJump = !0, e.userData.audio[0].play());
        }
        upKeys(e) {
            e.userData.live && (e.userData.readyJump && e.userData.onGround ? (e.userData.jumping = !0, e.userData.readyJump = !1, e.userData.audio[0].stop(), e.userData.audio[1].isPlaying || e.userData.audio[1].play(), e.userData.onGround = !1) : e.userData.onGround || (e.userData.canFly ? (e.userData.jumping = !0, e.userData.readyJump = !1, e.userData.audio[0].stop(), e.userData.audio[1].isPlaying || e.userData.audio[1].play(), e.userData.onGround = !1, e.userData.hatBoost--, e.userData.hatBoost == 0 && (e.userData.canFly = !1, setTimeout(()=>{
                this.levelClass.boostHatModels[e.userData.numHatBoost].userData.fly = !1;
            }, 500))) : (e.userData.readyJump = !1, e.userData.audio[0].stop())));
        }
    }
    class Ne {
        constructor(e, s, t, i){
            this.scene = e, this.camera = s, this.levelClass = t, this.renderer = i, this.ambientLight = new ye(11184810, 1), this.hemiLight = new me(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new fe(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new K, this.dirLight.target = this.targetObject, this.helper = new ge(this.dirLight, 3), this.water;
            const a = 50, n = 50, r = 2;
            this.pointLight = new we(16777215, r, a, n), this.pointLight.position.set(30, 40, 0), this.pointLight.lookAt(0, 0, 0);
        }
        async loadWaterSky() {
            this.waterGeometry = new V(1e3, 500), this.water = new xe(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new oe().load("textures/waternormals.jpg", function(d) {
                    d.wrapS = d.wrapT = L;
                }),
                sunDirection: new l,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: .5,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = 0, this.sun = new l, this.sky = new Me, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const e = this.sky.material.uniforms;
            e.turbidity.value = 1, e.rayleigh.value = 3, e.mieCoefficient.value = 5e-4, e.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new q(new V(1e4, 1e4), new De({
                color: 526362,
                side: ve,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const s = 1500, t = new Float32Array(s * 3), i = new Float32Array(s), a = new Float32Array(s * 3);
            for(let d = 0; d < s; d++){
                t[3 * d] = Math.random() * 600 - 300, t[3 * d + 1] = Math.random() * 150 - 100, t[3 * d + 2] = Math.random() * 300 - 500, i[d] = Math.random() * 2 + .7;
                const c = new ne().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * d] = c.r, a[3 * d + 1] = c.g, a[3 * d + 2] = c.b;
            }
            const n = new Pe;
            n.setAttribute("position", new T(t, 3)), n.setAttribute("size", new T(i, 1)), n.setAttribute("color", new T(a, 3));
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
            this.materialStars = new be({
                uniforms: {
                    time: {
                        value: 0
                    },
                    opacity: {
                        value: 0
                    }
                },
                vertexShader: r,
                fragmentShader: h,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: ze
            }), this.stars = new Le(n, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            this.stars.position.x = this.camera.position.x;
            const e = X.degToRad(90 - this.parameters.elevation), s = X.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, e, s), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.levelClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure += 2e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= 3e-4, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure)))), this.levelClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const a = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= a * .01, this.blackSky.material.opacity += a * .01, this.materialStars.uniforms.opacity.value += a * .003, this.camera.position.y < this.topLight && a < 0 ? (this.dirLight.intensity -= a * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= a * .03, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))) : this.topLight && a > 0 && (this.dirLight.intensity -= a * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)), this.renderer.toneMappingExposure -= a * .03, this.renderer.toneMappingExposure = Math.max(.2, Math.min(1.05, this.renderer.toneMappingExposure))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && (this.topLight = this.camera.position.y), this.parameters.elevation = Math.max(-100, Math.min(100, this.parameters.elevation)), this.prevCameraYSun = this.camera.position.y;
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
            this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.x, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.y + 2, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.z);
            const e = 10;
            this.dirLight.shadow.camera.left = -e, this.dirLight.shadow.camera.right = e, this.dirLight.shadow.camera.top = e, this.dirLight.shadow.camera.bottom = -e, this.waterUpdate(), this.updateSky();
        }
    }
    class Ve {
        constructor(e){
            this.initMatch = e, this.mainMenu(this.initMatch), this.playersNum = 2;
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
            }), document.querySelectorAll(".together_game_chels").forEach((e, s, t)=>{
                e.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((i)=>{
                        i.classList.remove("together_game_chels_active");
                    }), e.classList.add("together_game_chels_active"), this.playersNum = s + 2;
                });
            });
        };
        toggleLoader(e) {
            e ? document.querySelector(".loader_screen").classList.remove("hidden_screen") : document.querySelector(".loader_screen").classList.add("hidden_screen");
        }
        hideScreen(e) {
            document.querySelector(`.${e}`).classList.add("hidden_screen");
        }
        showScreen(e) {
            document.querySelector(`.${e}`).classList.remove("hidden_screen");
        }
    }
    console.clear();
    let J, re = !1, B = 0, ie = 1 / 60, Xe = new ke, le, U, N, g, p, k;
    const M = new Se;
    M.background = new ne(13230580);
    const y = new Ce(25, window.innerWidth / window.innerHeight, .1, 2e3);
    y.position.z = 7;
    y.position.y = 2;
    const ae = Ie();
    let he = new Ae;
    document.body.appendChild(he.dom);
    const u = new Ee;
    u.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(u.domElement);
    u.shadowMap.enabled = !0;
    u.shadowMap.type = _e;
    u.outputColorSpace = Be;
    u.toneMapping = He;
    u.toneMappingExposure = 1.05;
    window.addEventListener("resize", je, !1);
    function je() {
        y.aspect = window.innerWidth / window.innerHeight, y.updateProjectionMatrix(), u.setSize(window.innerWidth, window.innerHeight);
    }
    new Re(y, u.domElement);
    async function Ye(o) {
        const e = await We(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        J = new e.World(new e.Vector3(0, -9.81, 0)), le = new e.EventQueue(!0), g = new w(J, e), k = new Ue, p = new Je(M, k, g, u, y, ae), N = new Ne(M, y, p, u);
        for(let s = 0; s < o; s++)p.players.push(new Oe(M, k, p));
        new Ke(p, ae, u, y);
    }
    async function Qe() {
        await N.loadWorld(), await k.loadAudio();
    }
    async function $e() {
        await p.createLevel(), await p.loadEnvironments(), await p.loadPlayers(), p.grassPlanes.length > 0 && p.grassPlanes.forEach((o, e)=>{
            p.grassPlanes[e].userData.collide.setCollisionGroups(G([
                0
            ], [
                1
            ]));
        }), p.players.length > 0 && p.players.forEach((o, e)=>{
            p.players[e].player.userData.collider.setCollisionGroups(G([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function Ze(o, e) {
        U.toggleLoader(!0), await Ye(o), p.gameNum = e, await Qe(), await $e(), U.toggleLoader(!1), re = !0;
    }
    U = new Ve(Ze);
    function et() {
        if (re) {
            p.players.forEach((o, e, s)=>{
                o.playerMove();
            }), N.updateLighting(), p.levelAnimate(y), p.cameraMove(y), he.update();
            for(let o = 0, e = g.dynamicBodies.length; o < e; o++)g.dynamicBodies[o][0].position.copy(g.dynamicBodies[o][1].translation()), g.dynamicBodies[o][0].quaternion.copy(g.dynamicBodies[o][1].rotation());
            g.updateInstancedTransforms(), J.step(le), u.render(M, y);
        }
    }
    u.setAnimationLoop(()=>{
        B += Xe.getDelta(), B > ie && (et(), u.render(M, y), B = B % ie);
    });
})();

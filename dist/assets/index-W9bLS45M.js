import { M as x, B as M, a as A, b as _, G as T, V as m, T as X, R as H, C as k, P as I, O as Y, I as ie, D as j, c as $, A as ae, d as oe, e as S, f as re, g as ne, H as le, h as he, i as de, j as ce, W as pe, S as ue, k as ye, l as Z, m as me, n as B, o as fe, p as ge, q as we, r as q, s as ve, t as Me, u as De, v as xe, w as Ce, x as Le } from "./three-BF5wo0WY.js";
(async ()=>{
    (function() {
        const e = document.createElement("link").relList;
        if (e && e.supports && e.supports("modulepreload")) return;
        for (const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);
        new MutationObserver((i)=>{
            for (const a of i)if (a.type === "childList") for (const o of a.addedNodes)o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function t(i) {
            const a = {};
            return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
        }
        function s(i) {
            if (i.ep) return;
            i.ep = !0;
            const a = t(i);
            fetch(i.href, a);
        }
    })();
    const be = "modulepreload", Pe = function(r, e) {
        return new URL(r, e).href;
    }, J = {}, Se = function(e, t, s) {
        let i = Promise.resolve();
        if (t && t.length > 0) {
            let l = function(d) {
                return Promise.all(d.map((y)=>Promise.resolve(y).then((w)=>({
                            status: "fulfilled",
                            value: w
                        }), (w)=>({
                            status: "rejected",
                            reason: w
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), h = n?.nonce || n?.getAttribute("nonce");
            i = l(t.map((d)=>{
                if (d = Pe(d, s), d in J) return;
                J[d] = !0;
                const y = d.endsWith(".css"), w = y ? '[rel="stylesheet"]' : "";
                if (!!s) for(let p = o.length - 1; p >= 0; p--){
                    const L = o[p];
                    if (L.href === d && (!y || L.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${d}"]${w}`)) return;
                const c = document.createElement("link");
                if (c.rel = y ? "stylesheet" : be, y || (c.as = "script"), c.crossOrigin = "", c.href = d, h && c.setAttribute("nonce", h), document.head.appendChild(c), y) return new Promise((p, L)=>{
                    c.addEventListener("load", p), c.addEventListener("error", ()=>L(new Error(`Unable to preload CSS for ${d}`)));
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
            return e().catch(a);
        });
    };
    function b(r, e) {
        return Math.random() * (e - r) + r;
    }
    function Ae() {
        let r = window.matchMedia || window.msMatchMedia;
        return r ? r("(pointer:coarse)").matches : !1;
    }
    function v(r, e) {
        r.geometry.computeBoundingBox(), e.forEach(function(i, a, o) {
            i.geometry.computeBoundingBox();
        }), r.updateMatrixWorld(), e.forEach(function(i, a, o) {
            i.updateMatrixWorld();
        });
        let t = r.geometry.boundingBox.clone();
        t.applyMatrix4(r.matrixWorld);
        var s = !1;
        for(let i = e.length - 1; i > -1; i--)if (e[i].userData.id == null || e[i].userData.id != r.uuid) {
            let a = e[i].geometry.boundingBox.clone();
            a.applyMatrix4(e[i].matrixWorld), a.intersectsBox(t) && (s = e[i]);
        }
        return s;
    }
    function K(r) {
        return r.reduce((e, t)=>e | 1 << t, 0);
    }
    function z(r, e) {
        const t = K(r), s = K(e);
        return "0x" + ((t & 65535) << 16 | s & 65535).toString(16).padStart(8, "0");
    }
    function N(r) {
        const e = r.collisionGroups(), t = e >>> 16 & 65535, s = e & 65535;
        function i(a) {
            const o = [];
            for(let n = 0; n < 16; n++)a & 1 << n && o.push(n);
            return o;
        }
        return [
            i(t),
            i(s)
        ];
    }
    class He {
        constructor(e, t, s){
            this.scene = e, this.audioClass = t, this.levelClass = s, this.playerHeight = .7, this.playerWidth = .3, this.player = new x(new M(this.playerWidth, this.playerHeight, this.playerWidth), new A({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = .8, this.player.position.x = -2, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !0, this.player.userData.hatBoost = 100, this.player.userData.numHatBoost = 100, this.player.userData.live = !0, this.player.userData.startPos, this.playerModel, this.playerOut = new x(new M(this.playerWidth, this.playerHeight + .1, this.playerWidth), new _({
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
            await new T().loadAsync("models/players/player1.glb").then((s)=>{
                const i = s.scene;
                this.playerModel = i, this.playerModel.traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = .7, this.playerModel.scale.y = .7, this.playerModel.scale.z = .7;
            });
        }
        playerMove() {
            if (v(this.player, this.levelClass.sensorPlanes)) {
                const [e, t] = N(this.player.userData.collider);
                t[0] == 0 && this.player.userData.collider.setCollisionGroups(z([
                    1
                ], [
                    1
                ]));
            } else {
                const [e, t] = N(this.player.userData.collider);
                t[0] != 0 && this.player.userData.collider.setCollisionGroups(z([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if (v(this.player, this.levelClass.topPlanes) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), v(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(v(this.player, this.levelClass.boostHatMeshes))].position.copy(new m(this.player.userData.head.getWorldPosition(new m).x - .05, this.player.userData.head.getWorldPosition(new m).y + .15, this.player.userData.head.getWorldPosition(new m).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(v(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(v(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(v(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(v(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -2 && (this.player.userData.live = !1), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            else {
                const e = this.player.userData.readyJump ? Math.PI / 2 : 0, t = this.player.userData.readyJump ? -Math.PI / 2 : 0, s = this.player.userData.body.linvel().y < -1 ? Math.PI / 1.5 : 0, i = this.player.userData.body.linvel().y < -1 ? -Math.PI / 1.5 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, o = this.player.userData.body.linvel().y < -.4 ? Math.PI / 7 : 0, n = this.player.userData.body.linvel().y > .4 ? Math.PI / -5.9 : 0, h = this.player.userData.readyJump ? .75 : 1.18, l = this.player.userData.readyJump ? .75 : .15;
                this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, s, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, i, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, .1), this.head.position.y = this.lerp(this.head.position.y, h, .1), this.head.position.z = this.lerp(this.head.position.z, l, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, o, .1), this.head.rotation.z = this.lerp(this.head.rotation.z, n, .1);
                const d = this.player.userData.onGround ? Math.PI : Math.PI / 1.2;
                this.playerModel.rotation.y = this.lerp(this.playerModel.rotation.y, d, .4);
                const y = this.player.userData.readyJump ? .7 : 0;
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
                    x: this.levelClass.gameDir == "hor" ? this.player.userData.playerPowerJump / 3 : 0,
                    y: this.player.userData.playerPowerJump / 1.4,
                    z: 0
                }, !0), this.player.userData.playerPowerJump = 1, this.player.userData.jumping = !1);
            }
        }
        lerp(e, t, s) {
            return e + (t - e) * s;
        }
    }
    class ke {
        constructor(e, t, s, i, a, o){
            this.scene = e, this.audioClass = t, this.physicsClass = s, this.renderer = i, this.camera = a, this.isMobile = o, this.planeWidth = 4, this.planeHeight = 10, this.geometryPlane = new M(this.planeWidth * 1.5, this.planeHeight, 1), this.materialPlane = new A({
                color: 52224
            }), this.plane = new x(this.geometryPlane, this.materialPlane), this.plane.receiveShadow = !0, this.plane.castShadow = !0, this.plane.position.y = -this.planeHeight / 2, this.plane.userData.name = "plane", this.planes = [], this.planeTop = new x(new M(this.geometryPlane.parameters.width, .4, 1.2), new _({
                color: 13421568,
                transparent: !0,
                opacity: 0
            })), this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + .1, this.planeTop.userData.direction = 1, this.topPlanes = [], this.planeGrass = new x(new M(this.geometryPlane.parameters.width, .3, 1.2), new A({
                color: 52224,
                transparent: !0,
                opacity: 0
            })), this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + .1, this.planeGrass.castShadow = !0, this.planeGrass.receiveShadow = !0, this.planeGrass.userData.name = "tops", this.planeGrass.userData.direction = 1, this.grassPlanes = [], this.planeSensor = new x(new M(this.geometryPlane.parameters.width, .4, 1.2), new A({
                color: 65280,
                transparent: !0,
                opacity: 0
            })), this.planeSensor.position.y = this.plane.position.y + this.planeHeight / 2 + .1, this.planeSensor.userData.name = "top_sensor", this.sensorPlanes = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new m(-1, 0, 0), this.rightEdge = new m(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.gameDir = "vert", this.grassTex = null, this.grassClusterCounts = {
                near: this.isMobile ? 100 : 1048,
                far: this.isMobile ? 8 : 16
            };
        }
        async loadTexture() {
            const e = new X;
            e.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (t)=>{
                const s = new _({
                    map: t,
                    transparent: !0,
                    opacity: 1
                });
                t.wrapS = H, t.wrapT = H, t.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.plane.material = s;
            }, void 0, function(t) {
                console.error("An error happened.");
            }), e.load("textures/123.jpg", (t)=>{
                new _({
                    map: t
                }), t.wrapS = H, t.wrapT = H, t.repeat.set(this.planeWidth / 1, this.planeHeight / 8);
            }, void 0, function(t) {
                console.error("An error happened.");
            }), e.load("textures/grass_atlas.png", (t)=>{
                t.wrapS = k, t.wrapT = k, this.grassTex = t;
            }, void 0, (t)=>console.error("Grass atlas error", t));
        }
        async createLevel() {
            switch(await this.loadTexture(), await this.loadBoostsModel(), await this.loadEnvironmentModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.gameDir = "hor";
                    let e = -2.5;
                    for(let s = 0; s < 50; s++){
                        let i = this.plane.clone(), a = this.planeTop.clone(), o = this.planeGrass.clone(), n = b(this.planeWidth / 8, this.planeWidth), h = b(2, 3), l = e + n / 2 + h, d = b(-1, 1) - this.planeHeight / 2;
                        s > 0 && (this.changeMeshWidth(i, n), this.changeMeshWidth(a, n + .3), this.changeMeshWidth(o, n + .3)), s > 0 ? (i.position.x = l, i.position.y = d + this.planeHeight / 6, a.position.x = l, a.position.y = d + this.planeHeight / 1.5 + .2, o.position.x = l, o.position.y = d + this.planeHeight / 1.5) : a.position.y = o.position.y + .2, this.planes.push(i), this.topPlanes.push(a), this.grassPlanes.push(o), this.createGrassClusterForPlatform(o), e = l + n / 2;
                    }
                    break;
                case 3:
                case 4:
                    this.gameDir = "vert";
                    let t = -4;
                    for(let s = 0; s < 50; s++){
                        let i = this.planeTop.clone(), a = this.planeGrass.clone(), o = this.planeSensor.clone();
                        a.userData.speed = b(4, 10) / 100;
                        let n = b(this.bounds.rightX / 2, this.bounds.rightX / 12), h = b(3, 4), l = t + h;
                        i.position.y = l, a.position.y = l, o.position.y = l, s > 0 ? (this.changeMeshWidth(i, n + .3), this.changeMeshWidth(a, n + .3), this.changeMeshWidth(o, n + .5)) : (this.changeMeshWidth(i, 10), this.changeMeshWidth(a, 10), this.changeMeshWidth(o, 10)), this.topPlanes.push(i), this.grassPlanes.push(a), this.sensorPlanes.push(o), this.createGrassClusterForPlatform(a), t = l;
                    }
                    break;
            }
        }
        createGrassClusterForPlatform(e) {
            if (!this.grassTex) return;
            const t = e.geometry.parameters.width * 1.04, s = e.geometry.parameters.depth * 1.24 || 1.2, i = e.geometry.parameters.height || .5, a = this.grassClusterCounts.near, o = Math.max(1, Math.floor(a / 4)), n = new I(.35, .7), h = (C, c)=>{
                const p = this.grassTex.clone();
                return p.wrapS = k, p.wrapT = k, p.repeat.set(.5, .5), p.offset.set(C * .5, (1 - c) * .5), p.needsUpdate = !0, new A({
                    map: p,
                    alphaTest: .5,
                    side: j,
                    depthWrite: !0,
                    transparent: !1
                });
            }, l = [
                h(0, 0),
                h(1, 0),
                h(0, 1),
                h(1, 1)
            ], d = i * .5 + .03 - .1, y = new Y, w = [];
            for(let C = 0; C < 4; C++){
                const c = new ie(n, l[C], o);
                c.frustumCulled = !0;
                for(let p = 0; p < o; p++){
                    const L = (Math.random() - .5) * (t * .95), se = (Math.random() - .5) * (s * .8) + .2;
                    y.position.set(L, d, se), y.rotation.y = Math.random() * Math.PI * 2, y.scale.setScalar(.8 + Math.random() * .4), y.updateMatrix(), c.setMatrixAt(p, y.matrix);
                }
                c.userData = {
                    baseCount: o,
                    farCount: Math.max(2, Math.floor(this.grassClusterCounts.far / 4))
                }, e.add(c), w.push(c);
            }
            e.userData.grassInst = w;
        }
        updateGrassLOD(e, t) {
            const s = new m;
            for (const i of t){
                const a = i.userData.grassInst;
                if (!a) continue;
                s.setFromMatrixPosition(i.matrixWorld);
                const o = e.position.distanceTo(s);
                let n = a[0].userData.baseCount;
                o > 50 && (n = a[0].userData.farCount), o > 65 && (n = 0);
                for (const h of a)h.count !== n && (h.count = n, h.visible = n > 0);
            }
        }
        getHorizontalWorldBounds(e = 0) {
            const t = new m(-1, 0, .5), s = new m(1, 0, .5);
            if (t.unproject(this.camera), s.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const i = this.camera.position, a = t.clone().sub(i).normalize(), o = s.clone().sub(i).normalize(), n = (e - i.z) / a.z, h = i.clone().add(a.multiplyScalar(n)), l = i.clone().add(o.multiplyScalar(n));
                this.bounds = {
                    leftX: h.x,
                    rightX: l.x
                };
            }
        }
        animateTops() {
            if (this.gameDir == "vert") for(let e = 0; e < this.grassPlanes.length; e++){
                const t = this.grassPlanes[e], s = this.topPlanes[e], i = t.userData.body, a = t.userData.speed, o = i.translation();
                o.x > this.bounds.rightX - t.userData.size.x / 2 ? t.userData.direction = -1 : o.x < this.bounds.leftX + t.userData.size.x / 2 && (t.userData.direction = 1);
                const n = t.userData.direction * a, h = o.x + n;
                e > 0 && i.setNextKinematicTranslation({
                    x: h,
                    y: o.y,
                    z: o.z
                }), this.sensorPlanes[e].position.set(h, o.y - .2, o.z), s.position.set(h, o.y + .6, o.z);
            }
        }
        changeMeshWidth(e, t) {
            e.geometry.dispose(), e.geometry = new M(t, e.geometry.parameters.height, e.geometry.parameters.depth);
        }
        async loadBoostsModel() {
            await new T().loadAsync("models/boosts/hat.glb").then((s)=>{
                const i = s.scene;
                this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = 4, this.boostHatModel.scale.x = .015, this.boostHatModel.scale.y = .015, this.boostHatModel.scale.z = .015, this.boostHatModel.userData.fly = !1;
            });
        }
        async loadEnvironmentModel() {
            await new T().loadAsync("models/environment/clouds.glb").then((s)=>{
                const i = s.scene;
                this.cloudModel = i, this.cloudModel.children.forEach((a, o, n)=>{
                    a.position.x = o * 3, a.position.y = 4, a.position.z = -25, a.scale.x = .9, a.scale.y = .9, a.scale.z = .9;
                });
            });
        }
        async loadEnvironments() {
            for(let e = 0; e < this.grassPlanes.length; e++)this.planes.length == this.grassPlanes.length && (this.scene.add(this.planes[e]), this.physicsClass.addPhysicsToObject(this.planes[e])), this.scene.add(this.grassPlanes[e]), this.physicsClass.addPhysicsToObject(this.grassPlanes[e]), this.gameDir == "vert" && (this.grassPlanes[e].userData.collide.setFriction(500), this.scene.add(this.sensorPlanes[e])), this.scene.add(this.topPlanes[e]);
            for(let e = 1; e < 10; e++){
                let t = this.boostHatModel.clone();
                this.gameDir == "vert" ? t.position.y = e * 3 : t.position.x = e * 3, this.scene.add(t), this.boostHatModels.push(t), this.boostHatMeshes.push(t.children[0].children[0].children[0]);
            }
            this.clouds.forEach((e, t, s)=>{
                this.scene.add(e);
            });
        }
        levelAnimate() {
            this.animateTops(), this.updateGrassLOD(this.camera, this.grassPlanes), this.boostHatModels.forEach((e, t, s)=>{
                e.children[0].children[1].rotation.y += .05;
            });
        }
        maxSpeed() {
            let e = this.players;
            if (e.length === 0) return -1;
            let t = 0, s;
            this.gameDir == "vert" ? s = e[0].player.position.y : s = e[0].player.position.x;
            for(let i = 1; i < e.length; i++)e[i].player && e[i].player.position ? this.gameDir == "vert" ? e[i].player.position.y > s && (s = e[i].player.position.y, t = i) : e[i].player.position.x > s && (s = e[i].player.position.x, t = i) : console.warn(`Player at index ${i} is missing player or position properties.`);
            return t;
        }
        async loadPlayers() {
            for(let e = 0; e < this.players.length; e++){
                let t = this.players[e];
                t.player.position.x = t.player.position.x + e * 1, this.physicsClass.addPhysicsToObject(t.player), this.gameDir == "vert" && t.player.userData.collider.setFriction(500), await t.loadPlayerModel(), t.player.userData.startPos = t.player.position.clone(), this.scene.add(t.player), this.scene.add(t.playerOut), this.scene.add(t.playerModel), this.topPlanes.push(t.playerOut), this.scene.add(t.playerModel), e < this.players[0].playerColors.length ? t.head.children[0].material.color.set(this.players[0].playerColors[e]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), t.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > e ? t.player.userData.audio.push(this.audioClass.quacks[e].clone()) : t.player.userData.audio.push(this.audioClass.quacks[0].clone());
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
    class Ee {
        constructor(e, t){
            this.world = e, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [];
        }
        addPhysicsToObject(e) {
            let t, s;
            const i = e.rotation.clone();
            e.rotation.set(0, 0, 0), new $().setFromObject(e);
            const a = _e(e);
            if (e.rotation.copy(i), e.userData.name.includes("player")) {
                e.userData.size = a, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(.6).setRestitution(0).setFriction(.4).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), e.userData.body = t, e.userData.shape = s;
                let o = t;
                s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(s, t);
                e.userData.collider = n, e.userData.handle = o.handle, this.playersHandles.push(o.handle), this.dynamicBodies.push([
                    e,
                    t,
                    e.id
                ]);
            } else if (e.userData.name.includes("plane")) {
                e.userData.size = a, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(10).setRestitution(0).setFriction(.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(s, t);
                this.allWallBodyCollision.push(o), e.userData.handle = t.handle, this.dynamicBodies.push([
                    e,
                    t,
                    e.id
                ]);
            } else if (e.userData.name.includes("tops")) {
                e.userData.size = a, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(a.x / 2, a.y / 2, a.z / 2).setMass(1).setRestitution(0).setFriction(.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let o = this.world.createCollider(s, t);
                e.userData.body = t, e.userData.collide = o, this.allWallBodyCollision.push(o), e.userData.handle = t.handle, this.dynamicBodies.push([
                    e,
                    t,
                    e.id
                ]), e.userData.playerHandlesInside = new Set, this.allTops.push(e);
            }
        }
    }
    const W = new m;
    function _e(r) {
        if (r.isMesh && r.geometry) {
            const t = r.geometry;
            return t.boundingBox || t.computeBoundingBox(), t.boundingBox.getSize(W), W.multiply(r.scale), W.clone();
        }
        return new $().setFromObject(r).getSize(new m);
    }
    class Re {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const e = new ae, t = new oe;
            await t.loadAsync("audio/ready-jump.wav").then((s)=>{
                this.readyJumpAudio = new S(e), this.readyJumpAudio.setBuffer(s), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack1.mp3").then((s)=>{
                this.jumpAudio = new S(e), this.jumpAudio.setBuffer(s), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack2.mp3").then((s)=>{
                this.jumpAudio2 = new S(e), this.jumpAudio2.setBuffer(s), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack3.mp3").then((s)=>{
                this.jumpAudio3 = new S(e), this.jumpAudio3.setBuffer(s), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack5.mp3").then((s)=>{
                this.jumpAudio4 = new S(e), this.jumpAudio4.setBuffer(s), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            });
        }
    }
    class ze {
        constructor(e, t, s, i){
            this.levelClass = e, this.isMobile = t, this.renderer = s, this.camera = i, this.camera = i, this.mouse = new m, this.raycaster = new re, this.addKeyListeners();
        }
        addKeyListeners() {
            window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
        }
        onTapDown = (e)=>{
            let t = this.renderer.domElement.getBoundingClientRect();
            e = e.changedTouches[0], this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
        };
        onTapUp = (e)=>{
            let t = this.renderer.domElement.getBoundingClientRect();
            e = e.changedTouches[0], this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
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
                    this.levelClass.players.forEach((t, s, i)=>{
                        t.player.userData.live = !0;
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
    class Be {
        constructor(e, t, s, i){
            this.scene = e, this.camera = t, this.levelClass = s, this.renderer = i, this.ambientLight = new ne(11184810, 1), this.hemiLight = new le(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new he(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.topLight = 1e3, this.targetObject = new Y, this.dirLight.target = this.targetObject, this.helper = new de(this.dirLight, 3), this.water;
            const a = 50, o = 50, n = 2;
            this.pointLight = new ce(16777215, n, a, o), this.pointLight.position.set(30, 40, 0), this.pointLight.lookAt(0, 0, 0);
        }
        async loadWaterSky() {
            this.waterGeometry = new I(1e4, 300), this.water = new pe(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new X().load("textures/waternormals.jpg", function(l) {
                    l.wrapS = l.wrapT = H;
                }),
                sunDirection: new m,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: 1,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = 0, this.sun = new m, this.sky = new ue, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const e = this.sky.material.uniforms;
            e.turbidity.value = 1, e.rayleigh.value = 3, e.mieCoefficient.value = 5e-4, e.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.blackSky = new x(new I(1e4, 1e4), new ye({
                color: 526362,
                side: j,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const t = 1500, s = new Float32Array(t * 3), i = new Float32Array(t), a = new Float32Array(t * 3);
            for(let l = 0; l < t; l++){
                s[3 * l] = Math.random() * 600 - 300, s[3 * l + 1] = Math.random() * 150 - 100, s[3 * l + 2] = Math.random() * 300 - 500, i[l] = Math.random() * 2 + .7;
                const d = new Z().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                a[3 * l] = d.r, a[3 * l + 1] = d.g, a[3 * l + 2] = d.b;
            }
            const o = new me;
            o.setAttribute("position", new B(s, 3)), o.setAttribute("size", new B(i, 1)), o.setAttribute("color", new B(a, 3));
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
            this.materialStars = new fe({
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
                blending: ge
            }), this.stars = new we(o, this.materialStars), this.stars.layers.set(1), this.scene.add(this.stars), this.camera.layers.enable(1);
        }
        updateSky() {
            this.stars.position.x = this.camera.position.x;
            const e = q.degToRad(90 - this.parameters.elevation), t = q.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, e, t), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.levelClass.gameDir == "hor" && (this.sun.y < -.07 && this.materialStars.uniforms.opacity.value < 1 ? (this.materialStars.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.materialStars.uniforms.opacity.value > 0 && (this.materialStars.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? this.parameters.top = !0 : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? (this.parameters.elevation += .003, this.dirLight.intensity += 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity += 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity))) : (this.parameters.elevation -= .003, this.dirLight.intensity -= 3e-4, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= 3e-4, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity)))), this.levelClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const a = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= a * .01, this.blackSky.material.opacity += a * .01, this.materialStars.uniforms.opacity.value += a * .003, this.camera.position.y < this.topLight && a < 0 ? (this.dirLight.intensity -= a * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity))) : this.topLight && a > 0 && (this.dirLight.intensity -= a * .03, this.dirLight.intensity = Math.max(.5, Math.min(2, this.dirLight.intensity)), this.hemiLight.intensity -= a * .03, this.hemiLight.intensity = Math.max(.5, Math.min(2, this.hemiLight.intensity))), this.dirLight.intensity > .55 && this.dirLight.intensity < .57 && (this.topLight = this.camera.position.y, console.log(this.topLight)), this.parameters.elevation = Math.max(-100, Math.min(100, this.parameters.elevation)), this.prevCameraYSun = this.camera.position.y;
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
    class We {
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
            }), document.querySelectorAll(".together_game_chels").forEach((e, t, s)=>{
                e.addEventListener("click", ()=>{
                    document.querySelectorAll(".together_game_chels").forEach((i)=>{
                        i.classList.remove("together_game_chels_active");
                    }), e.classList.add("together_game_chels_active"), this.playersNum = t + 2;
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
    let F, Q = !1, E = 0, U = 1 / 60, Te = new Le, ee, G, O, D, u, R;
    const P = new ve;
    P.background = new Z(13230580);
    const f = new Me(25, window.innerWidth / window.innerHeight, .1, 2e3);
    f.position.z = 7;
    f.position.y = 2;
    const V = Ae();
    let te = new De;
    document.body.appendChild(te.dom);
    const g = new xe;
    g.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(g.domElement);
    g.shadowMap.enabled = !0;
    g.shadowMap.type = Ce;
    window.addEventListener("resize", Ie, !1);
    function Ie() {
        f.aspect = window.innerWidth / window.innerHeight, f.updateProjectionMatrix(), g.setSize(window.innerWidth, window.innerHeight);
    }
    async function Fe(r) {
        const e = await Se(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        F = new e.World(new e.Vector3(0, -9.81, 0)), ee = new e.EventQueue(!0), D = new Ee(F, e), R = new Re, u = new ke(P, R, D, g, f, V), O = new Be(P, f, u, g);
        for(let t = 0; t < r; t++)u.players.push(new He(P, R, u));
        new ze(u, V, g, f);
    }
    async function Ge() {
        await O.loadWorld(), await R.loadAudio();
    }
    async function Oe() {
        await u.createLevel(), await u.loadEnvironments(), await u.loadPlayers(), u.grassPlanes.forEach((r, e)=>{
            u.grassPlanes[e].userData.collide.setCollisionGroups(z([
                0
            ], [
                1
            ]));
        }), u.players.forEach((r, e)=>{
            u.players[e].player.userData.collider.setCollisionGroups(z([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function qe(r, e) {
        G.toggleLoader(!0), await Fe(r), u.gameNum = e, await Ge(), await Oe(), G.toggleLoader(!1), Q = !0;
    }
    G = new We(qe);
    function Je() {
        if (Q) {
            u.players.forEach((r, e, t)=>{
                r.playerMove();
            }), O.updateLighting(), u.levelAnimate(f), u.cameraMove(f), te.update();
            for(let r = 0, e = D.dynamicBodies.length; r < e; r++)D.dynamicBodies[r][0].position.copy(D.dynamicBodies[r][1].translation()), D.dynamicBodies[r][0].quaternion.copy(D.dynamicBodies[r][1].rotation());
            F.step(ee), g.render(P, f);
        }
    }
    g.setAnimationLoop(()=>{
        E += Te.getDelta(), E > U && (Je(), g.render(P, f), E = E % U);
    });
})();

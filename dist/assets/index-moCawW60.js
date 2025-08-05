import { M as v, B as w, a as k, b as S, G as z, V as u, T as J, c as U, R as L, d as X, A as j, e as $, P as b, f as Y, g as Z, H as Q, D as ee, O as te, h as se, i as ie, W as ae, S as oe, j as re, k as T, l as ne, C as le, m as he, n as de, o as pe, p as ue, q as ce } from "./three-DTETHSlR.js";
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
    const ye = "modulepreload", me = function(r, e) {
        return new URL(r, e).href;
    }, G = {}, fe = function(e, t, s) {
        let i = Promise.resolve();
        if (t && t.length > 0) {
            let p = function(h) {
                return Promise.all(h.map((g)=>Promise.resolve(g).then((C)=>({
                            status: "fulfilled",
                            value: C
                        }), (C)=>({
                            status: "rejected",
                            reason: C
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), d = n?.nonce || n?.getAttribute("nonce");
            i = p(t.map((h)=>{
                if (h = me(h, s), h in G) return;
                G[h] = !0;
                const g = h.endsWith(".css"), C = g ? '[rel="stylesheet"]' : "";
                if (!!s) for(let P = o.length - 1; P >= 0; P--){
                    const A = o[P];
                    if (A.href === h && (!g || A.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${h}"]${C}`)) return;
                const m = document.createElement("link");
                if (m.rel = g ? "stylesheet" : ye, g || (m.as = "script"), m.crossOrigin = "", m.href = h, d && m.setAttribute("nonce", d), document.head.appendChild(m), g) return new Promise((P, A)=>{
                    m.addEventListener("load", P), m.addEventListener("error", ()=>A(new Error(`Unable to preload CSS for ${h}`)));
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
    function M(r, e) {
        return Math.random() * (e - r) + r;
    }
    function ge() {
        let r = window.matchMedia || window.msMatchMedia;
        return r ? r("(pointer:coarse)").matches : !1;
    }
    function f(r, e) {
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
    function O(r) {
        return r.reduce((e, t)=>e | 1 << t, 0);
    }
    function R(r, e) {
        const t = O(r), s = O(e);
        return "0x" + ((t & 65535) << 16 | s & 65535).toString(16).padStart(8, "0");
    }
    function F(r) {
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
    class we {
        constructor(e, t, s){
            this.scene = e, this.audioClass = t, this.levelClass = s, this.playerHeight = .7, this.playerWidth = .3, this.player = new v(new w(this.playerWidth, this.playerHeight, this.playerWidth), new k({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = .8, this.player.position.x = -2, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = !0, this.player.userData.startPos, this.playerModel, this.playerOut = new v(new w(this.playerWidth, this.playerHeight + .1, this.playerWidth), new S({
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
            await new z().loadAsync("models/players/player1.glb").then((s)=>{
                const i = s.scene;
                this.playerModel = i, this.playerModel.traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = .7, this.playerModel.scale.y = .7, this.playerModel.scale.z = .7;
            });
        }
        playerMove() {
            if (f(this.player, this.levelClass.sensorPlanes)) {
                const [e, t] = F(this.player.userData.collider);
                t[0] == 0 && this.player.userData.collider.setCollisionGroups(R([
                    1
                ], [
                    1
                ]));
            } else {
                const [e, t] = F(this.player.userData.collider);
                t[0] != 0 && this.player.userData.collider.setCollisionGroups(R([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if (f(this.player, this.levelClass.topPlanes) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), f(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(f(this.player, this.levelClass.boostHatMeshes))].position.copy(new u(this.player.userData.head.getWorldPosition(new u).x - .05, this.player.userData.head.getWorldPosition(new u).y + .15, this.player.userData.head.getWorldPosition(new u).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(f(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(f(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(f(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(f(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -2 && (this.player.userData.live = !1), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
                x: 0,
                y: 0,
                z: 0
            }, !0);
            else {
                const e = this.player.userData.readyJump ? Math.PI / 2 : 0, t = this.player.userData.readyJump ? -Math.PI / 2 : 0, s = this.player.userData.readyJump ? Math.PI / 8 : 0, i = this.player.userData.readyJump ? .75 : 1.18, a = this.player.userData.readyJump ? .75 : .15;
                this.player.userData.readyJump ? this.player.position.x - 1.25 : this.player.position.x, this.player.userData.readyJump ? this.player.position.y + .75 : this.player.position.y - this.playerHeight / 2, this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, .1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, .1), this.head.rotation.x = this.lerp(this.head.rotation.x, s, .1), this.head.position.y = this.lerp(this.head.position.y, i, .1), this.head.position.z = this.lerp(this.head.position.z, a, .1);
                const o = this.player.userData.readyJump ? .7 : 0;
                this.player.userData.body.setRotation({
                    w: this.player.userData.body.rotation().w,
                    x: this.lerp(this.player.userData.body.rotation().x, o, .1),
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
    class De {
        constructor(e, t, s, i, a, o){
            this.scene = e, this.audioClass = t, this.physicsClass = s, this.renderer = i, this.camera = a, this.isMobile = o, this.planeWidth = 4, this.planeHeight = 10, this.geometryPlane = new w(this.planeWidth * 1.5, this.planeHeight, 1), this.materialPlane = new S({
                color: 52224
            }), this.plane = new v(this.geometryPlane, this.materialPlane), this.plane.receiveShadow = !0, this.plane.position.y = -this.planeHeight / 2, this.plane.userData.name = "plane", this.planes = [], this.planeTop = new v(new w(this.geometryPlane.parameters.width, .6, 1.2), new S({
                color: 13421568,
                transparent: !0,
                opacity: 0
            })), this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + .1, this.planeTop.userData.direction = 1, this.topPlanes = [], this.planeGrass = new v(new w(this.geometryPlane.parameters.width, .2, 1.2), new k({
                color: 52224,
                transparent: !0,
                opacity: 1
            })), this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + .1, this.planeGrass.castShadow = !0, this.planeGrass.receiveShadow = !0, this.planeGrass.userData.name = "tops", this.planeGrass.userData.direction = 1, this.grassPlanes = [], this.planeSensor = new v(new w(this.geometryPlane.parameters.width, .4, 1.2), new k({
                color: 65280,
                transparent: !0,
                opacity: .5
            })), this.planeSensor.position.y = this.plane.position.y + this.planeHeight / 2 + .1, this.planeSensor.userData.name = "top_sensor", this.sensorPlanes = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new u(-1, 0, 0), this.rightEdge = new u(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.gameDir = "vert";
        }
        async loadTexture() {
            const e = new J;
            e.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (t)=>{
                const s = new U({
                    map: t,
                    transparent: !0,
                    opacity: 1
                });
                t.wrapS = L, t.wrapT = L, t.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.plane.material = s;
            }, void 0, function(t) {
                console.error("An error happened.");
            }), e.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (t)=>{
                const s = new S({
                    map: t
                });
                t.wrapS = L, t.wrapT = L, t.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.planeGrass.material = s;
            }, void 0, function(t) {
                console.error("An error happened.");
            });
        }
        async createLevel() {
            switch(await this.loadTexture(), await this.loadBoostsModel(), await this.loadEnvironmentModel(), this.cameraMove(this.camera), this.getHorizontalWorldBounds(), this.gameNum){
                case 1:
                case 2:
                    this.gameDir = "hor";
                    let e = -2.5;
                    for(let s = 0; s < 50; s++){
                        let i = this.plane.clone(), a = this.planeTop.clone(), o = this.planeGrass.clone(), n = M(this.planeWidth / 8, this.planeWidth), d = M(2, 4), p = e + n / 2 + d, h = M(-1, 1) - this.planeHeight / 2;
                        s > 0 && (this.changeMeshWidth(i, n), this.changeMeshWidth(a, n + .3), this.changeMeshWidth(o, n + .3)), s > 0 && (i.position.x = p), s > 0 && (i.position.y = h), s > 0 && (a.position.x = p), s > 0 && (a.position.y = h + this.planeHeight / 2 + .1), s > 0 && (o.position.x = p), s > 0 && (o.position.y = h + this.planeHeight / 2), this.planes.push(i), this.topPlanes.push(a), this.grassPlanes.push(o), e = p + n / 2;
                    }
                    break;
                case 3:
                case 4:
                    this.gameDir = "vert";
                    let t = -4;
                    for(let s = 0; s < 50; s++){
                        let i = this.planeTop.clone(), a = this.planeGrass.clone(), o = this.planeSensor.clone();
                        a.userData.speed = M(2, 10) / 100;
                        let n = M(this.bounds.rightX, this.bounds.rightX / 4), d = M(3, 4), p = t + d;
                        i.position.y = p, a.position.y = p, o.position.y = p, s > 0 ? (this.changeMeshWidth(i, n + .3), this.changeMeshWidth(a, n + .3), this.changeMeshWidth(o, n + .3)) : (this.changeMeshWidth(i, 20), this.changeMeshWidth(a, 20), this.changeMeshWidth(o, 20)), this.topPlanes.push(i), this.grassPlanes.push(a), this.sensorPlanes.push(o), t = p;
                    }
                    break;
            }
        }
        getHorizontalWorldBounds(e = 0) {
            const t = new u(-1, 0, .5), s = new u(1, 0, .5);
            if (t.unproject(this.camera), s.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const i = this.camera.position, a = t.clone().sub(i).normalize(), o = s.clone().sub(i).normalize(), n = (e - i.z) / a.z, d = i.clone().add(a.multiplyScalar(n)), p = i.clone().add(o.multiplyScalar(n));
                this.bounds = {
                    leftX: d.x,
                    rightX: p.x
                };
            }
        }
        animateTops() {
            if (this.gameDir == "vert") for(let e = 0; e < this.grassPlanes.length; e++){
                const t = this.grassPlanes[e], s = this.topPlanes[e], i = t.userData.body, a = t.userData.speed, o = i.translation();
                o.x > this.bounds.rightX - t.userData.size.x / 2 ? t.userData.direction = -1 : o.x < this.bounds.leftX + t.userData.size.x / 2 && (t.userData.direction = 1);
                const n = t.userData.direction * a, d = o.x + n;
                i.setNextKinematicTranslation({
                    x: d,
                    y: o.y,
                    z: o.z
                }), this.sensorPlanes[e].position.set(d, o.y - .3, o.z), s.position.set(d, o.y, o.z);
            }
        }
        changeMeshWidth(e, t) {
            e.geometry.dispose(), e.geometry = new w(t, e.geometry.parameters.height, e.geometry.parameters.depth);
        }
        async loadBoostsModel() {
            await new z().loadAsync("models/boosts/hat.glb").then((s)=>{
                const i = s.scene;
                this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = 4, this.boostHatModel.scale.x = .015, this.boostHatModel.scale.y = .015, this.boostHatModel.scale.z = .015, this.boostHatModel.userData.fly = !1;
            });
        }
        async loadEnvironmentModel() {
            await new z().loadAsync("models/environment/clouds.glb").then((s)=>{
                const i = s.scene;
                this.cloudModel = i, this.cloudModel.children.forEach((a, o, n)=>{
                    a.position.x = o * 3, a.position.y = 4, a.position.z = -25, a.scale.x = .9, a.scale.y = .9, a.scale.z = .9;
                });
            });
        }
        async loadEnvironments() {
            for(let e = 0; e < this.grassPlanes.length; e++)this.planes.length == this.grassPlanes.length && (this.scene.add(this.planes[e]), this.physicsClass.addPhysicsToObject(this.planes[e])), this.scene.add(this.grassPlanes[e]), this.physicsClass.addPhysicsToObject(this.grassPlanes[e]), this.gameDir == "vert" && this.grassPlanes[e].userData.collide.setFriction(500), this.scene.add(this.sensorPlanes[e]), this.scene.add(this.topPlanes[e]);
            for(let e = 1; e < 10; e++){
                let t = this.boostHatModel.clone();
                this.gameDir == "vert" ? t.position.y = e * 3 : t.position.x = e * 3, this.scene.add(t), this.boostHatModels.push(t), this.boostHatMeshes.push(t.children[0].children[0].children[0]);
            }
            this.clouds.forEach((e, t, s)=>{
                this.scene.add(e);
            });
        }
        levelAnimate() {
            this.animateTops(), this.boostHatModels.forEach((e, t, s)=>{
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
                    e.position.x += .03, e.position.y = this.isMobile ? 3 : 2, e.position.z = (this.isMobile, 17), e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
                case 2:
                    e.position.x = this.players[this.maxSpeed(this.players)].player.position.x, e.position.y = this.isMobile ? 3 : 2, e.position.z = (this.isMobile, 17), e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
                case 3:
                    e.position.y += .01, e.position.x = 0, e.position.z = this.isMobile ? 20 : 27, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
                case 4:
                    e.position.y = this.players[this.maxSpeed(this.players)].player.position.y + 2, e.position.x = 0, e.position.z = this.isMobile ? 20 : 27, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
            }
        }
    }
    class Me {
        constructor(e, t){
            this.world = e, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [];
        }
        addPhysicsToObject(e) {
            let t, s;
            const i = e.rotation.clone();
            e.rotation.set(0, 0, 0);
            const o = new X().setFromObject(e).getSize(new u);
            if (e.rotation.copy(i), e.userData.name.includes("player")) {
                e.userData.size = o, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(o.x / 2, o.y / 2, o.z / 2).setMass(.6).setRestitution(0).setFriction(.4).setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), e.userData.body = t, e.userData.shape = s;
                let n = t;
                s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let d = this.world.createCollider(s, t);
                e.userData.collider = d, e.userData.handle = n.handle, this.playersHandles.push(n.handle), this.dynamicBodies.push([
                    e,
                    t,
                    e.id
                ]);
            } else if (e.userData.name.includes("plane")) {
                e.userData.size = o, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(o.x / 2, o.y / 2, o.z / 2).setMass(10).setRestitution(0).setFriction(.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(s, t);
                this.allWallBodyCollision.push(n), e.userData.handle = t.handle, this.dynamicBodies.push([
                    e,
                    t,
                    e.id
                ]);
            } else if (e.userData.name.includes("tops")) {
                e.userData.size = o, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(!1).enabledRotations(!1, !1, !1).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(o.x / 2, o.y / 2, o.z / 2).setMass(1).setRestitution(0).setFriction(.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
                let n = this.world.createCollider(s, t);
                e.userData.body = t, e.userData.collide = n, this.allWallBodyCollision.push(n), e.userData.handle = t.handle, this.dynamicBodies.push([
                    e,
                    t,
                    e.id
                ]), e.userData.playerHandlesInside = new Set, this.allTops.push(e);
            }
        }
    }
    class ve {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const e = new j, t = new $;
            await t.loadAsync("audio/ready-jump.wav").then((s)=>{
                this.readyJumpAudio = new b(e), this.readyJumpAudio.setBuffer(s), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack1.mp3").then((s)=>{
                this.jumpAudio = new b(e), this.jumpAudio.setBuffer(s), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack2.mp3").then((s)=>{
                this.jumpAudio2 = new b(e), this.jumpAudio2.setBuffer(s), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack3.mp3").then((s)=>{
                this.jumpAudio3 = new b(e), this.jumpAudio3.setBuffer(s), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack5.mp3").then((s)=>{
                this.jumpAudio4 = new b(e), this.jumpAudio4.setBuffer(s), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            });
        }
    }
    class xe {
        constructor(e, t, s, i){
            this.levelClass = e, this.isMobile = t, this.renderer = s, this.camera = i, this.camera = i, this.mouse = new u, this.raycaster = new Y, this.addKeyListeners();
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
    class Ce {
        constructor(e, t, s, i){
            this.scene = e, this.camera = t, this.levelClass = s, this.renderer = i, this.ambientLight = new Z(11184810, 1), this.hemiLight = new Q(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new ee(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 10, this.targetObject = new te, this.dirLight.target = this.targetObject, this.helper = new se(this.dirLight, 3), this.water, this.waterGeometry = new ie(1e4, 1e4), this.water = new ae(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new J().load("textures/waternormals.jpg", function(o) {
                    o.wrapS = o.wrapT = L;
                }),
                sunDirection: new u,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: 1,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = -1.5, this.sun = new u, this.sky = new oe, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const a = this.sky.material.uniforms;
            a.turbidity.value = 1, a.rayleigh.value = 7, a.mieCoefficient.value = 5e-4, a.mieDirectionalG.value = .8, this.parameters = {
                elevation: 6,
                azimuth: 150,
                top: !1
            }, this.pmremGenerator = new re(this.renderer);
        }
        updateSun() {
            const e = T.degToRad(90 - this.parameters.elevation), t = T.degToRad(this.parameters.azimuth);
            this.sun.setFromSphericalCoords(1, e, t), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.parameters.elevation < -5 ? (this.parameters.azimuth = 150, this.parameters.top = !0) : this.parameters.elevation > 7 && (this.parameters.azimuth = 150, this.parameters.top = !1), this.parameters.top ? (this.parameters.azimuth += .03, this.parameters.elevation += .003) : (this.parameters.azimuth += .03, this.parameters.elevation -= .003);
        }
        waterUpdate() {
            performance.now() * .001, this.water.material.uniforms.time.value += .4 / 60;
        }
        loadWorld() {
            this.scene.add(this.hemiLight), this.scene.add(this.dirLight), this.scene.add(this.targetObject), this.scene.add(this.water);
        }
        updateLighting() {
            this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.x, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.y + 2, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.z);
            const e = 10;
            this.dirLight.shadow.camera.left = -e, this.dirLight.shadow.camera.right = e, this.dirLight.shadow.camera.top = e, this.dirLight.shadow.camera.bottom = -e, this.waterUpdate(), this.updateSun();
        }
    }
    class Pe {
        constructor(e){
            this.initMatch = e, this.mainMenu(this.initMatch);
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
            }), document.querySelector(".together_game_btn1").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(2, 1);
            }), document.querySelector(".together_game_btn2").addEventListener("click", ()=>{
                this.hideScreen("together_game_screen"), this.initMatch(3, 4);
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
    let _, K = !1, H = 0, I = 1 / 60, be = new ce, N, B, W, D, l, E;
    const x = new ne;
    x.background = new le(13230580);
    const c = new he(25, window.innerWidth / window.innerHeight, .1, 2e3);
    c.position.z = 7;
    c.position.y = 2;
    const q = ge();
    let V = new de;
    document.body.appendChild(V.dom);
    const y = new pe;
    y.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(y.domElement);
    y.shadowMap.enabled = !0;
    y.shadowMap.type = ue;
    window.addEventListener("resize", Le, !1);
    function Le() {
        c.aspect = window.innerWidth / window.innerHeight, c.updateProjectionMatrix(), y.setSize(window.innerWidth, window.innerHeight);
    }
    async function Ae(r) {
        const e = await fe(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        _ = new e.World(new e.Vector3(0, -9.81, 0)), N = new e.EventQueue(!0), D = new Me(_, e), E = new ve, l = new De(x, E, D, y, c, q), W = new Ce(x, c, l, y);
        for(let t = 0; t < r; t++)l.players.push(new we(x, E, l));
        new xe(l, q, y, c);
    }
    async function He() {
        await W.loadWorld(), await E.loadAudio();
    }
    async function Se() {
        await l.createLevel(), await l.loadEnvironments(), await l.loadPlayers(), l.grassPlanes.forEach((r, e)=>{
            l.grassPlanes[e].userData.collide.setCollisionGroups(R([
                0
            ], [
                1
            ]));
        }), l.players.forEach((r, e)=>{
            l.players[e].player.userData.collider.setCollisionGroups(R([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function Ee(r, e) {
        B.toggleLoader(!0), await Ae(r), l.gameNum = e, await He(), await Se(), B.toggleLoader(!1), K = !0;
    }
    B = new Pe(Ee);
    function Re() {
        if (K) {
            l.players.forEach((r, e, t)=>{
                r.playerMove();
            }), W.updateLighting(), l.levelAnimate(c), l.cameraMove(c), V.update();
            for(let r = 0, e = D.dynamicBodies.length; r < e; r++)D.dynamicBodies[r][0].position.copy(D.dynamicBodies[r][1].translation()), D.dynamicBodies[r][0].quaternion.copy(D.dynamicBodies[r][1].rotation());
            _.step(N), y.render(x, c);
        }
    }
    y.setAnimationLoop(()=>{
        H += be.getDelta(), H > I && (Re(), y.render(x, c), H = H % I);
    });
})();

import { M as x, B as D, a as z, b as E, G as B, V as y, T as V, c as U, R as L, d as Z, A as Q, e as ee, P as A, f as te, g as se, H as ie, D as ae, O as oe, h as re, i as F, W as ne, S as le, j as he, k as de, C as j, l as pe, m as R, n as ce, o as ue, p as ye, q as O, r as me, s as fe, t as ge, u as we, v as ve, w as De } from "./three-BE1_8W01.js";
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
    const Me = "modulepreload", xe = function(r, e) {
        return new URL(r, e).href;
    }, q = {}, Ce = function(e, t, s) {
        let i = Promise.resolve();
        if (t && t.length > 0) {
            let h = function(l) {
                return Promise.all(l.map((g)=>Promise.resolve(g).then((v)=>({
                            status: "fulfilled",
                            value: v
                        }), (v)=>({
                            status: "rejected",
                            reason: v
                        }))));
            };
            const o = document.getElementsByTagName("link"), n = document.querySelector("meta[property=csp-nonce]"), d = n?.nonce || n?.getAttribute("nonce");
            i = h(t.map((l)=>{
                if (l = xe(l, s), l in q) return;
                q[l] = !0;
                const g = l.endsWith(".css"), v = g ? '[rel="stylesheet"]' : "";
                if (!!s) for(let P = o.length - 1; P >= 0; P--){
                    const S = o[P];
                    if (S.href === l && (!g || S.rel === "stylesheet")) return;
                }
                else if (document.querySelector(`link[href="${l}"]${v}`)) return;
                const u = document.createElement("link");
                if (u.rel = g ? "stylesheet" : Me, g || (u.as = "script"), u.crossOrigin = "", u.href = l, d && u.setAttribute("nonce", d), document.head.appendChild(u), g) return new Promise((P, S)=>{
                    u.addEventListener("load", P), u.addEventListener("error", ()=>S(new Error(`Unable to preload CSS for ${l}`)));
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
    function C(r, e) {
        return Math.random() * (e - r) + r;
    }
    function be() {
        let r = window.matchMedia || window.msMatchMedia;
        return r ? r("(pointer:coarse)").matches : !1;
    }
    function w(r, e) {
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
    function I(r) {
        return r.reduce((e, t)=>e | 1 << t, 0);
    }
    function _(r, e) {
        const t = I(r), s = I(e);
        return "0x" + ((t & 65535) << 16 | s & 65535).toString(16).padStart(8, "0");
    }
    function J(r) {
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
    class Pe {
        constructor(e, t, s){
            this.scene = e, this.audioClass = t, this.levelClass = s, this.playerHeight = .7, this.playerWidth = .3, this.player = new x(new D(this.playerWidth, this.playerHeight, this.playerWidth), new z({
                color: 16711680,
                transparent: !0,
                opacity: 0
            })), this.player.material.depthWrite = !1, this.player.rotation.y = Math.PI, this.player.position.y = .8, this.player.position.x = -2, this.player.userData.name = "player", this.player.userData.readyJump = !1, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = !1, this.player.userData.audio = [], this.player.userData.canFly = !0, this.player.userData.hatBoost = 100, this.player.userData.numHatBoost = 100, this.player.userData.live = !0, this.player.userData.startPos, this.playerModel, this.playerOut = new x(new D(this.playerWidth, this.playerHeight + .1, this.playerWidth), new E({
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
            await new B().loadAsync("models/players/player1.glb").then((s)=>{
                const i = s.scene;
                this.playerModel = i, this.playerModel.traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.playerModel.children[0].traverse(function(a) {
                    a.isMesh && (a.castShadow = !0);
                }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = .7, this.playerModel.scale.y = .7, this.playerModel.scale.z = .7;
            });
        }
        playerMove() {
            if (w(this.player, this.levelClass.sensorPlanes)) {
                const [e, t] = J(this.player.userData.collider);
                t[0] == 0 && this.player.userData.collider.setCollisionGroups(_([
                    1
                ], [
                    1
                ]));
            } else {
                const [e, t] = J(this.player.userData.collider);
                t[0] != 0 && this.player.userData.collider.setCollisionGroups(_([
                    1
                ], [
                    0,
                    1
                ]));
            }
            if (w(this.player, this.levelClass.topPlanes) ? this.player.userData.onGround = !0 : this.player.userData.onGround = !1, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), w(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].position.copy(new y(this.player.userData.head.getWorldPosition(new y).x - .05, this.player.userData.head.getWorldPosition(new y).y + .15, this.player.userData.head.getWorldPosition(new y).z + .1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += .4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = !0, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].userData.fly = !0), this.playerModel.position.y < -2 && (this.player.userData.live = !1), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = !1, this.player.userData.canFly = !1, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = !1, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = !1, this.player.userData.body.setLinvel({
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
    class Ae {
        constructor(e, t, s, i, a, o){
            this.scene = e, this.audioClass = t, this.physicsClass = s, this.renderer = i, this.camera = a, this.isMobile = o, this.planeWidth = 4, this.planeHeight = 10, this.geometryPlane = new D(this.planeWidth * 1.5, this.planeHeight, 1), this.materialPlane = new E({
                color: 52224
            }), this.plane = new x(this.geometryPlane, this.materialPlane), this.plane.receiveShadow = !0, this.plane.position.y = -this.planeHeight / 2, this.plane.userData.name = "plane", this.planes = [], this.planeTop = new x(new D(this.geometryPlane.parameters.width, .4, 1.2), new E({
                color: 13421568,
                transparent: !0,
                opacity: 0
            })), this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + .1, this.planeTop.userData.direction = 1, this.topPlanes = [], this.planeGrass = new x(new D(this.geometryPlane.parameters.width, .5, 1.2), new z({
                color: 52224,
                transparent: !0,
                opacity: 1
            })), this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + .1, this.planeGrass.castShadow = !0, this.planeGrass.receiveShadow = !0, this.planeGrass.userData.name = "tops", this.planeGrass.userData.direction = 1, this.grassPlanes = [], this.planeSensor = new x(new D(this.geometryPlane.parameters.width, .4, 1.2), new z({
                color: 65280,
                transparent: !0,
                opacity: 0
            })), this.planeSensor.position.y = this.plane.position.y + this.planeHeight / 2 + .1, this.planeSensor.userData.name = "top_sensor", this.sensorPlanes = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new y(-1, 0, 0), this.rightEdge = new y(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.bounds, this.getHorizontalWorldBounds(), this.gameNum = 1, this.gameDir = "vert";
        }
        async loadTexture() {
            const e = new V;
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
                const s = new E({
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
                        let i = this.plane.clone(), a = this.planeTop.clone(), o = this.planeGrass.clone(), n = C(this.planeWidth / 8, this.planeWidth), d = C(2, 3), h = e + n / 2 + d, l = C(-1, 1) - this.planeHeight / 2;
                        s > 0 && (this.changeMeshWidth(i, n), this.changeMeshWidth(a, n + .3), this.changeMeshWidth(o, n + .3)), s > 0 ? (i.position.x = h, i.position.y = l + this.planeHeight / 6, a.position.x = h, a.position.y = l + this.planeHeight / 1.5 + .2, o.position.x = h, o.position.y = l + this.planeHeight / 1.5) : a.position.y = o.position.y + .2, this.planes.push(i), this.topPlanes.push(a), this.grassPlanes.push(o), e = h + n / 2;
                    }
                    break;
                case 3:
                case 4:
                    this.gameDir = "vert";
                    let t = -4;
                    for(let s = 0; s < 50; s++){
                        let i = this.planeTop.clone(), a = this.planeGrass.clone(), o = this.planeSensor.clone();
                        a.userData.speed = C(4, 10) / 100;
                        let n = C(this.bounds.rightX / 2, this.bounds.rightX / 12), d = C(3, 4), h = t + d;
                        i.position.y = h, a.position.y = h, o.position.y = h, s > 0 ? (this.changeMeshWidth(i, n + .3), this.changeMeshWidth(a, n + .3), this.changeMeshWidth(o, n + .5)) : (this.changeMeshWidth(i, 10), this.changeMeshWidth(a, 10), this.changeMeshWidth(o, 10)), this.topPlanes.push(i), this.grassPlanes.push(a), this.sensorPlanes.push(o), t = h;
                    }
                    break;
            }
        }
        getHorizontalWorldBounds(e = 0) {
            const t = new y(-1, 0, .5), s = new y(1, 0, .5);
            if (t.unproject(this.camera), s.unproject(this.camera), this.camera.isPerspectiveCamera) {
                const i = this.camera.position, a = t.clone().sub(i).normalize(), o = s.clone().sub(i).normalize(), n = (e - i.z) / a.z, d = i.clone().add(a.multiplyScalar(n)), h = i.clone().add(o.multiplyScalar(n));
                this.bounds = {
                    leftX: d.x,
                    rightX: h.x
                };
            }
        }
        animateTops() {
            if (this.gameDir == "vert") for(let e = 0; e < this.grassPlanes.length; e++){
                const t = this.grassPlanes[e], s = this.topPlanes[e], i = t.userData.body, a = t.userData.speed, o = i.translation();
                o.x > this.bounds.rightX - t.userData.size.x / 2 ? t.userData.direction = -1 : o.x < this.bounds.leftX + t.userData.size.x / 2 && (t.userData.direction = 1);
                const n = t.userData.direction * a, d = o.x + n;
                e > 0 && i.setNextKinematicTranslation({
                    x: d,
                    y: o.y,
                    z: o.z
                }), this.sensorPlanes[e].position.set(d, o.y - .2, o.z), s.position.set(d, o.y + .6, o.z);
            }
        }
        changeMeshWidth(e, t) {
            e.geometry.dispose(), e.geometry = new D(t, e.geometry.parameters.height, e.geometry.parameters.depth);
        }
        async loadBoostsModel() {
            await new B().loadAsync("models/boosts/hat.glb").then((s)=>{
                const i = s.scene;
                this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = 4, this.boostHatModel.scale.x = .015, this.boostHatModel.scale.y = .015, this.boostHatModel.scale.z = .015, this.boostHatModel.userData.fly = !1;
            });
        }
        async loadEnvironmentModel() {
            await new B().loadAsync("models/environment/clouds.glb").then((s)=>{
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
                    e.position.x += .03, e.position.y = this.isMobile ? 5 : 4, e.position.z = this.isMobile ? 17 : 19, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
                case 2:
                    e.position.x = this.players[this.maxSpeed(this.players)].player.position.x, e.position.y = this.isMobile ? 5 : 4, e.position.z = this.isMobile ? 17 : 19, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
                case 3:
                    e.position.y += .01, e.position.x = 0, e.position.z = this.isMobile ? 20 : 22, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
                case 4:
                    e.position.y = this.players[this.maxSpeed(this.players)].player.position.y + 2, e.position.x = 0, e.position.z = this.isMobile ? 20 : 22, e.lookAt(e.position.x, e.position.y - 2, 0);
                    break;
            }
        }
    }
    class Le {
        constructor(e, t){
            this.world = e, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [];
        }
        addPhysicsToObject(e) {
            let t, s;
            const i = e.rotation.clone();
            e.rotation.set(0, 0, 0);
            const o = new Z().setFromObject(e).getSize(new y);
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
    class Se {
        constructor(){
            this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
        }
        async loadAudio() {
            const e = new Q, t = new ee;
            await t.loadAsync("audio/ready-jump.wav").then((s)=>{
                this.readyJumpAudio = new A(e), this.readyJumpAudio.setBuffer(s), this.readyJumpAudio.setLoop(!1), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack1.mp3").then((s)=>{
                this.jumpAudio = new A(e), this.jumpAudio.setBuffer(s), this.jumpAudio.setLoop(!1), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(.3), this.quacks.push(this.jumpAudio);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack2.mp3").then((s)=>{
                this.jumpAudio2 = new A(e), this.jumpAudio2.setBuffer(s), this.jumpAudio2.setLoop(!1), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(.3), this.quacks.push(this.jumpAudio2);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack3.mp3").then((s)=>{
                this.jumpAudio3 = new A(e), this.jumpAudio3.setBuffer(s), this.jumpAudio3.setLoop(!1), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(.3), this.quacks.push(this.jumpAudio3);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            }), await t.loadAsync("audio/quack5.mp3").then((s)=>{
                this.jumpAudio4 = new A(e), this.jumpAudio4.setBuffer(s), this.jumpAudio4.setLoop(!1), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(.3), this.quacks.push(this.jumpAudio4);
            }).catch((s)=>{
                console.error("Ошибка при загрузке аудио:", s);
            });
        }
    }
    class He {
        constructor(e, t, s, i){
            this.levelClass = e, this.isMobile = t, this.renderer = s, this.camera = i, this.camera = i, this.mouse = new y, this.raycaster = new te, this.addKeyListeners();
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
    class Ee {
        constructor(e, t, s, i){
            this.scene = e, this.camera = t, this.levelClass = s, this.renderer = i, this.ambientLight = new se(11184810, 1), this.hemiLight = new ie(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(.095, 1, .75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new ae(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = !0, this.dirLight.shadow.camera.far = 100, this.targetObject = new oe, this.dirLight.target = this.targetObject, this.helper = new re(this.dirLight, 3), this.day = !1, this.water, this.waterGeometry = new F(1e4, 300), this.water = new ne(this.waterGeometry, {
                textureWidth: 500,
                textureHeight: 500,
                waterNormals: new V().load("textures/waternormals.jpg", function(c) {
                    c.wrapS = c.wrapT = L;
                }),
                sunDirection: new y,
                sunColor: 16777215,
                waterColor: 7759,
                distortionScale: 1,
                fog: this.scene.fog !== void 0
            }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = 0, this.sun = new y, this.sky = new le, this.sky.scale.setScalar(1e4), this.scene.add(this.sky);
            const a = this.sky.material.uniforms;
            a.turbidity.value = 1, a.rayleigh.value = 3, a.mieCoefficient.value = 5e-4, a.mieDirectionalG.value = .8, this.parameters = {
                elevation: 5,
                azimuth: 170,
                top: !1
            }, this.pmremGenerator = new he(this.renderer), this.blackSky = new x(new F(1e4, 1e4), new U({
                color: 526362,
                side: de,
                transparent: !0,
                opacity: 0
            })), this.blackSky.position.z = -1e3, this.scene.add(this.blackSky);
            const o = 1500, n = new Float32Array(o * 3), d = new Float32Array(o), h = new Float32Array(o * 3);
            for(let c = 0; c < o; c++){
                n[3 * c] = Math.random() * 600 - 300, n[3 * c + 1] = Math.random() * 150 - 100, n[3 * c + 2] = Math.random() * 300 - 500, d[c] = Math.random() * 2 + .7;
                const u = new j().setHSL(.5 + Math.random() * .1, .6 + Math.random() * .3, .85 + Math.random() * .15);
                h[3 * c] = u.r, h[3 * c + 1] = u.g, h[3 * c + 2] = u.b;
            }
            const l = new pe;
            l.setAttribute("position", new R(n, 3)), l.setAttribute("size", new R(d, 1)), l.setAttribute("color", new R(h, 3));
            const g = `
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
`, v = `
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
            this.material = new ce({
                uniforms: {
                    time: {
                        value: 0
                    },
                    opacity: {
                        value: 0
                    }
                },
                vertexShader: g,
                fragmentShader: v,
                transparent: !0,
                vertexColors: !0,
                depthWrite: !1,
                blending: ue
            }), this.stars = new ye(l, this.material), this.stars.layers.set(1), e.add(this.stars), t.layers.enable(1);
        }
        updateSun() {
            this.stars.position.x = this.camera.position.x;
            const e = O.degToRad(90 - this.parameters.elevation), t = O.degToRad(this.parameters.azimuth);
            if (this.sun.setFromSphericalCoords(1, e, t), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.levelClass.gameDir == "hor" && (this.sun.y < -.07 && this.material.uniforms.opacity.value < 1 ? (this.material.uniforms.opacity.value += .001, this.blackSky.material.opacity < .8 && (this.blackSky.material.opacity += .001)) : this.sun.y > -.07 && this.material.uniforms.opacity.value > 0 && (this.material.uniforms.opacity.value -= .001, this.blackSky.material.opacity -= .001), this.parameters.elevation < -8 ? (this.parameters.top = !0, this.day ? this.day = !1 : this.day = !0) : this.parameters.elevation > 6 && (this.parameters.top = !1), this.parameters.top ? this.parameters.elevation += .003 : this.parameters.elevation -= .003), this.levelClass.gameDir == "vert") {
                this.parameters.azimuth = 150, this.stars.position.y = this.camera.position.y, this.prevCameraYSun === void 0 && (this.prevCameraYSun = this.camera.position.y);
                const a = this.camera.position.y - this.prevCameraYSun;
                this.parameters.elevation -= a * .01, this.blackSky.material.opacity += a * .01, this.material.uniforms.opacity.value += a * .003, this.parameters.elevation = Math.max(-100, Math.min(100, this.parameters.elevation)), this.prevCameraYSun = this.camera.position.y;
            }
            this.material.uniforms.time.value = performance.now() * .001;
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
    class ke {
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
    let W, X = !1, H = 0, K = 1 / 60, _e = new De, Y, T, G, M, p, k;
    const b = new me;
    b.background = new j(13230580);
    const m = new fe(25, window.innerWidth / window.innerHeight, .1, 2e3);
    m.position.z = 7;
    m.position.y = 2;
    const N = be();
    let $ = new ge;
    document.body.appendChild($.dom);
    const f = new we;
    f.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(f.domElement);
    f.shadowMap.enabled = !0;
    f.shadowMap.type = ve;
    window.addEventListener("resize", Re, !1);
    function Re() {
        m.aspect = window.innerWidth / window.innerHeight, m.updateProjectionMatrix(), f.setSize(window.innerWidth, window.innerHeight);
    }
    async function ze(r) {
        const e = await Ce(()=>import("./@dimforge-BObwuXYQ.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), [], import.meta.url);
        W = new e.World(new e.Vector3(0, -9.81, 0)), Y = new e.EventQueue(!0), M = new Le(W, e), k = new Se, p = new Ae(b, k, M, f, m, N), G = new Ee(b, m, p, f);
        for(let t = 0; t < r; t++)p.players.push(new Pe(b, k, p));
        new He(p, N, f, m);
    }
    async function Be() {
        await G.loadWorld(), await k.loadAudio();
    }
    async function We() {
        await p.createLevel(), await p.loadEnvironments(), await p.loadPlayers(), p.grassPlanes.forEach((r, e)=>{
            p.grassPlanes[e].userData.collide.setCollisionGroups(_([
                0
            ], [
                1
            ]));
        }), p.players.forEach((r, e)=>{
            p.players[e].player.userData.collider.setCollisionGroups(_([
                1
            ], [
                0,
                1
            ]));
        });
    }
    async function Te(r, e) {
        T.toggleLoader(!0), await ze(r), p.gameNum = e, await Be(), await We(), T.toggleLoader(!1), X = !0;
    }
    T = new ke(Te);
    function Ge() {
        if (X) {
            p.players.forEach((r, e, t)=>{
                r.playerMove();
            }), G.updateLighting(), p.levelAnimate(m), p.cameraMove(m), $.update();
            for(let r = 0, e = M.dynamicBodies.length; r < e; r++)M.dynamicBodies[r][0].position.copy(M.dynamicBodies[r][1].translation()), M.dynamicBodies[r][0].quaternion.copy(M.dynamicBodies[r][1].rotation());
            W.step(Y), f.render(b, m);
        }
    }
    f.setAnimationLoop(()=>{
        H += _e.getDelta(), H > K && (Ge(), f.render(b, m), H = H % K);
    });
})();

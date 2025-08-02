var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { M as C, B as g, a as z, b, G as S, V as h, P as q, W as G, T as k, R as M, S as K, c as F, d as W, e as N, F as V, f as j, g as U, A as Y, h as X, i as v, j as Z, k as $, H as Q, D as ee, O as te, l as se, m as ie, C as ae, n as oe, o as re, p as le, q as ne, r as he } from "./three-Ce1CE8zR.js";
import { O as x } from "./@dimforge-D3Mqfikn.js";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const a of i) if (a.type === "childList") for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: true, subtree: true });
  function t(i) {
    const a = {};
    return i.integrity && (a.integrity = i.integrity), i.referrerPolicy && (a.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? a.credentials = "include" : i.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a;
  }
  function s(i) {
    if (i.ep) return;
    i.ep = true;
    const a = t(i);
    fetch(i.href, a);
  }
})();
function f(r, e) {
  return Math.random() * (e - r) + r;
}
function de() {
  let r = window.matchMedia || window.msMatchMedia;
  return r ? r("(pointer:coarse)").matches : false;
}
function y(r, e) {
  r.geometry.computeBoundingBox(), e.forEach(function(i, a, o) {
    i.geometry.computeBoundingBox();
  }), r.updateMatrixWorld(), e.forEach(function(i, a, o) {
    i.updateMatrixWorld();
  });
  let t = r.geometry.boundingBox.clone();
  t.applyMatrix4(r.matrixWorld);
  var s = false;
  for (let i = e.length - 1; i > -1; i--) if (e[i].userData.id == null || e[i].userData.id != r.uuid) {
    let a = e[i].geometry.boundingBox.clone();
    a.applyMatrix4(e[i].matrixWorld), a.intersectsBox(t) && (s = e[i]);
  }
  return s;
}
class pe {
  constructor(e, t, s) {
    this.scene = e, this.audioClass = t, this.levelClass = s, this.playerHeight = 0.7, this.playerWidth = 0.3, this.player = new C(new g(this.playerWidth, this.playerHeight, this.playerWidth), new z({ color: 16711680, transparent: true, opacity: 0 })), this.player.material.depthWrite = false, this.player.rotation.y = Math.PI, this.player.position.y = 0.8, this.player.position.x = -2, this.player.userData.name = "player", this.player.userData.readyJump = false, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = false, this.player.userData.audio = [], this.player.userData.canFly = false, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = true, this.player.userData.startPos, this.playerModel, this.playerOut = new C(new g(this.playerWidth, this.playerHeight + 0.1, this.playerWidth), new b({ color: 16776960, transparent: true, opacity: 0 })), this.playerOut.material.depthWrite = false, this.playerOut.userData.id = this.player.uuid, this.leftHand, this.rightHand, this.head, this.headPosition, this.playerColors = [15904944, 11596464, 16052346, 11579634];
  }
  async loadPlayerModel() {
    await new S().loadAsync("models/players/player1.glb").then((s) => {
      const i = s.scene;
      this.playerModel = i, this.playerModel.traverse(function(a) {
        a.isMesh && (a.castShadow = true);
      }), this.playerModel.children[0].traverse(function(a) {
        a.isMesh && (a.castShadow = true);
      }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 0.7, this.playerModel.scale.y = 0.7, this.playerModel.scale.z = 0.7;
    });
  }
  playerMove() {
    if (y(this.player, this.levelClass.topPlanes) ? this.player.userData.onGround = true : this.player.userData.onGround = false, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), y(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(y(this.player, this.levelClass.boostHatMeshes))].position.copy(new h(this.player.userData.head.getWorldPosition(new h()).x - 0.05, this.player.userData.head.getWorldPosition(new h()).y + 0.15, this.player.userData.head.getWorldPosition(new h()).z + 0.1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(y(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += 0.4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(y(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(y(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = true, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(y(this.player, this.levelClass.boostHatMeshes))].userData.fly = true), this.playerModel.position.y < -2 && (this.player.userData.live = false), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = false, this.player.userData.canFly = false, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = false, this.player.userData.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    else {
      const e = this.player.userData.readyJump ? Math.PI / 2 : 0, t = this.player.userData.readyJump ? -Math.PI / 2 : 0, s = this.player.userData.readyJump ? Math.PI / 8 : 0, i = this.player.userData.readyJump ? 0.75 : 1.18, a = this.player.userData.readyJump ? 0.75 : 0.15;
      this.player.userData.readyJump ? this.player.position.x - 1.25 : this.player.position.x, this.player.userData.readyJump ? this.player.position.y + 0.75 : this.player.position.y - this.playerHeight / 2, this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, 0.1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, 0.1), this.head.rotation.x = this.lerp(this.head.rotation.x, s, 0.1), this.head.position.y = this.lerp(this.head.position.y, i, 0.1), this.head.position.z = this.lerp(this.head.position.z, a, 0.1);
      const o = this.player.userData.readyJump ? 0.7 : 0;
      this.player.userData.body.setRotation({ w: this.player.userData.body.rotation().w, x: this.lerp(this.player.userData.body.rotation().x, o, 0.1), y: this.player.userData.body.rotation().y, z: this.player.userData.body.rotation().z }), this.player.userData.readyJump && this.player.userData.playerPowerJump < 8 && (this.player.userData.playerPowerJump += 0.2), this.player.userData.jumping && (this.player.userData.body.setLinvel({ x: 0, y: 0, z: 0 }, true), this.player.userData.body.applyImpulse({ x: this.levelClass.gameDir == "hor" ? this.player.userData.playerPowerJump / 3 : 0, y: this.player.userData.playerPowerJump / 1.4, z: 0 }, true), this.player.userData.playerPowerJump = 1, console.log(this.player.userData.body.linvel().x), this.player.userData.jumping = false);
    }
  }
  lerp(e, t, s) {
    return e + (t - e) * s;
  }
}
class ue {
  constructor(e, t, s, i, a) {
    this.scene = e, this.audioClass = t, this.physicsClass = s, this.renderer = i, this.camera = a, this.planeWidth = 4, this.planeHeight = 10, this.geometryPlane = new g(this.planeWidth * 1.5, this.planeHeight, 1), this.materialPlane = new b({ color: 52224 }), this.plane = new C(this.geometryPlane, this.materialPlane), this.plane.receiveShadow = true, this.plane.position.y = -this.planeHeight / 2, this.plane.userData.name = "plane", this.planes = [], this.planeTop = new C(new g(this.geometryPlane.parameters.width, 0.6, 1.2), new b({ color: 13421568, transparent: true, opacity: 0.1 })), this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.planeTop.userData.direction = 1, this.topPlanes = [], this.planeGrass = new C(new g(this.geometryPlane.parameters.width, 0.2, 1.2), new z({ color: 52224, transparent: true, opacity: 1 })), this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.planeGrass.castShadow = true, this.planeGrass.receiveShadow = true, this.planeGrass.userData.name = "tops", this.planeGrass.userData.direction = 1, this.grassPlanes = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.leftEdge = new h(-1, 0, 0), this.rightEdge = new h(1, 0, 0), this.leftEdge.unproject(a), this.rightEdge.unproject(a), this.water, this.waterGeometry = new q(1e4, 1e4), this.water = new G(this.waterGeometry, { textureWidth: 500, textureHeight: 500, waterNormals: new k().load("textures/waternormals.jpg", function(l) {
      l.wrapS = l.wrapT = M;
    }), sunDirection: new h(), sunColor: 16777215, waterColor: 7759, distortionScale: 1, fog: this.scene.fog !== void 0 }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = -1.5, this.sun = new h(), this.sky = new K(), this.sky.scale.setScalar(1e4);
    const o = this.sky.material.uniforms;
    o.turbidity.value = 1, o.rayleigh.value = 7, o.mieCoefficient.value = 5e-4, o.mieDirectionalG.value = 0.8, this.parameters = { elevation: 6, azimuth: 150, top: false }, this.pmremGenerator = new F(this.renderer), this.gameNum = 1, this.gameDir = "vert";
  }
  updateSun() {
    const e = W.degToRad(90 - this.parameters.elevation), t = W.degToRad(this.parameters.azimuth);
    this.sun.setFromSphericalCoords(1, e, t), this.sky.material.uniforms.sunPosition.value.copy(this.sun), this.water.material.uniforms.sunDirection.value.copy(this.sun).normalize(), this.scene.add(this.sky), this.parameters.elevation < -5 ? (this.parameters.azimuth = 150, this.parameters.top = true) : this.parameters.elevation > 7 && (this.parameters.azimuth = 150, this.parameters.top = false), this.parameters.top ? (this.parameters.azimuth += 0.01, this.parameters.elevation += 1e-3) : (this.parameters.azimuth += 0.01, this.parameters.elevation -= 1e-3);
  }
  waterUpdate() {
    this.updateSun(), performance.now() * 1e-3, this.water.material.uniforms.time.value += 0.4 / 60;
  }
  async loadTexture() {
    const e = new k();
    e.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (t) => {
      const s = new N({ map: t, transparent: true, opacity: 1 });
      t.wrapS = M, t.wrapT = M, t.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.plane.material = s;
    }, void 0, function(t) {
      console.error("An error happened.");
    }), e.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (t) => {
      const s = new b({ map: t });
      t.wrapS = M, t.wrapT = M, t.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.planeGrass.material = s;
    }, void 0, function(t) {
      console.error("An error happened.");
    });
  }
  async createLevel() {
    switch (await this.loadTexture(), await this.loadBoostsModel(), await this.loadEnvironmentModel(), this.gameNum) {
      case 1:
      case 2:
        this.gameDir = "hor";
        let e = -2.5;
        for (let s = 0; s < 50; s++) {
          let i = this.plane.clone(), a = this.planeTop.clone(), o = this.planeGrass.clone(), l = f(this.planeWidth / 8, this.planeWidth), u = f(2, 4), m = e + l / 2 + u, D = f(-1, 1) - this.planeHeight / 2;
          s > 0 && (this.changeMeshWidth(i, l), this.changeMeshWidth(a, l + 0.3), this.changeMeshWidth(o, l + 0.3)), s > 0 && (i.position.x = m), s > 0 && (i.position.y = D), s > 0 && (a.position.x = m), s > 0 && (a.position.y = D + this.planeHeight / 2 + 0.1), s > 0 && (o.position.x = m), s > 0 && (o.position.y = D + this.planeHeight / 2), this.planes.push(i), this.topPlanes.push(a), this.grassPlanes.push(o), e = m + l / 2;
        }
        break;
      case 3:
      case 4:
        this.gameDir = "vert";
        let t = -4;
        for (let s = 0; s < 50; s++) {
          let i = this.planeTop.clone(), a = this.planeGrass.clone();
          a.userData.speed = f(2, 10);
          let o = f(this.planeWidth / 8, this.planeWidth * 4), l = f(3, 4), u = t + l;
          i.position.y = u, a.position.y = u, s > 0 ? (this.changeMeshWidth(i, o + 0.3), this.changeMeshWidth(a, o + 0.3)) : (this.changeMeshWidth(i, 20), this.changeMeshWidth(a, 20)), this.topPlanes.push(i), this.grassPlanes.push(a), t = u;
        }
        break;
    }
  }
  animateTops() {
    if (this.gameDir == "vert") {
      console.log(window.innerWidth);
      for (let e = 0; e < this.grassPlanes.length; e++) this.topPlanes[e].position.copy(this.grassPlanes[e].position), this.grassPlanes[e].position.x > 7 ? this.grassPlanes[e].userData.direction = 0 : this.grassPlanes[e].position.x < -7 && (this.grassPlanes[e].userData.direction = 1), this.grassPlanes[e].userData.direction == 0 ? this.grassPlanes[e].userData.body.setLinvel({ x: -this.grassPlanes[e].userData.speed, y: 0, z: 0 }) : this.grassPlanes[e].userData.body.setLinvel({ x: this.grassPlanes[e].userData.speed, y: 0, z: 0 });
    }
  }
  changeMeshWidth(e, t) {
    e.geometry.dispose(), e.geometry = new g(t, e.geometry.parameters.height, e.geometry.parameters.depth);
  }
  async loadBoostsModel() {
    await new S().loadAsync("models/boosts/hat.glb").then((s) => {
      const i = s.scene;
      this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = 4, this.boostHatModel.scale.x = 0.015, this.boostHatModel.scale.y = 0.015, this.boostHatModel.scale.z = 0.015, this.boostHatModel.userData.fly = false;
    });
  }
  async loadEnvironmentModel() {
    await new S().loadAsync("models/environment/clouds.glb").then((s) => {
      const i = s.scene;
      this.cloudModel = i, this.cloudModel.children.forEach((a, o, l) => {
        a.position.x = o * 3, a.position.y = 4, a.position.z = -25, a.scale.x = 0.9, a.scale.y = 0.9, a.scale.z = 0.9;
      });
    });
  }
  async loadEnvironments() {
    for (let e = 0; e < this.grassPlanes.length; e++) this.planes.length == this.grassPlanes.length && (this.scene.add(this.planes[e]), this.physicsClass.addPhysicsToObject(this.planes[e])), this.scene.add(this.grassPlanes[e]), this.physicsClass.addPhysicsToObject(this.grassPlanes[e]), this.gameDir == "vert" && this.grassPlanes[e].userData.collide.setFriction(500), this.scene.add(this.topPlanes[e]);
    for (let e = 1; e < 10; e++) {
      let t = this.boostHatModel.clone();
      t.position.x = e * 3, this.scene.add(t), this.boostHatModels.push(t), this.boostHatMeshes.push(t.children[0].children[0].children[0]);
    }
    this.clouds.forEach((e, t, s) => {
      this.scene.add(e);
    }), this.scene.add(this.water);
  }
  levelAnimate(e) {
    this.animateTops(), this.boostHatModels.forEach((i, a, o) => {
      i.children[0].children[1].rotation.y += 0.05;
    });
    const t = new V(), s = new j();
    s.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), t.setFromProjectionMatrix(s), this.clouds.length > 0 && this.clouds[0].position.x < e.position.x && !t.intersectsObject(this.clouds[0]) && (this.clouds[0].position.copy(new h(this.clouds[this.clouds.length - 1].position.x + 10, this.clouds[this.clouds.length - 1].position.y, this.clouds[this.clouds.length - 1].position.z)), this.clouds.push(this.clouds.shift())), this.clouds.length > 0 && this.clouds.forEach((i, a, o) => {
      i.position.x -= 0.02;
    });
  }
  maxSpeed() {
    let e = this.players;
    if (e.length === 0) return -1;
    let t = 0, s = e[0].player.position.x;
    for (let i = 1; i < e.length; i++) e[i].player && e[i].player.position ? e[i].player.position.x > s && (s = e[i].player.position.x, t = i) : console.warn(`Player at index ${i} is missing player or position properties.`);
    return t;
  }
  async loadPlayers() {
    for (let e = 0; e < this.players.length; e++) {
      let t = this.players[e];
      t.player.position.x = t.player.position.x + e * 1, this.physicsClass.addPhysicsToObject(t.player), this.gameDir == "vert" && t.player.userData.collider.setFriction(500), await t.loadPlayerModel(), t.player.userData.startPos = t.player.position.clone(), this.scene.add(t.player), this.scene.add(t.playerOut), this.scene.add(t.playerModel), this.topPlanes.push(t.playerOut), this.scene.add(t.playerModel), e < this.players[0].playerColors.length ? t.head.children[0].material.color.set(this.players[0].playerColors[e]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), t.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > e ? t.player.userData.audio.push(this.audioClass.quacks[e].clone()) : t.player.userData.audio.push(this.audioClass.quacks[0].clone());
    }
  }
  cameraMove(e) {
    switch (console.log(this.rightEdge), this.gameNum) {
      case 1:
        e.position.x += 0.03, e.position.y = 2, e.position.z = 17, e.lookAt(e.position.x, e.position.y - 2, 0);
        break;
      case 2:
        e.position.x = this.players[this.maxSpeed(this.players)].player.position.x, e.position.y = 2, e.position.z = 17, e.lookAt(e.position.x, e.position.y - 2, 0);
        break;
      case 3:
        e.position.y += 0.01, e.position.x = 0, e.position.z = 27, e.lookAt(e.position.x, e.position.y - 2, 0);
        break;
      case 4:
        e.position.y = this.players[this.maxSpeed(this.players)].player.position.y, e.position.x = 0, e.position.z = 27, e.lookAt(e.position.x, e.position.y - 2, 0);
        break;
    }
  }
}
class ce {
  constructor(e, t) {
    this.world = e, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [], this.allTops = [];
  }
  addPhysicsToObject(e) {
    let t, s;
    const i = e.rotation.clone();
    e.rotation.set(0, 0, 0);
    const o = new U().setFromObject(e).getSize(new h());
    if (e.rotation.copy(i), e.userData.name.includes("player")) {
      e.userData.size = o, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(o.x / 2, o.y / 2, o.z / 2).setMass(0.6).setRestitution(0).setFriction(0.4), e.userData.body = t, e.userData.shape = s;
      let l = t;
      s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let u = this.world.createCollider(s, t);
      e.userData.collider = u, e.userData.handle = l.handle.toString(), this.playersHandles.push(l.handle), this.dynamicBodies.push([e, t, e.id]);
    } else if (e.userData.name.includes("plane")) {
      e.userData.size = o, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(o.x / 2, o.y / 2, o.z / 2).setMass(10).setRestitution(0).setFriction(0.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let l = this.world.createCollider(s, t);
      this.allWallBodyCollision.push(l), e.userData.handle = t.handle, this.dynamicBodies.push([e, t, e.id]);
    } else if (e.userData.name.includes("tops")) {
      e.userData.size = o, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(o.x / 2, o.y / 2, o.z / 2).setMass(1).setRestitution(0).setFriction(0.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let l = this.world.createCollider(s, t);
      e.userData.body = t, e.userData.collide = l, this.allWallBodyCollision.push(l), e.userData.handle = t.handle, this.dynamicBodies.push([e, t, e.id]), e.userData.playerHandlesInside = /* @__PURE__ */ new Set(), this.allTops.push(e);
    }
  }
}
class ye {
  constructor() {
    this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
  }
  async loadAudio() {
    const e = new Y(), t = new X();
    await t.loadAsync("audio/ready-jump.wav").then((s) => {
      this.readyJumpAudio = new v(e), this.readyJumpAudio.setBuffer(s), this.readyJumpAudio.setLoop(false), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    }), await t.loadAsync("audio/quack1.mp3").then((s) => {
      this.jumpAudio = new v(e), this.jumpAudio.setBuffer(s), this.jumpAudio.setLoop(false), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(0.3), this.quacks.push(this.jumpAudio);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    }), await t.loadAsync("audio/quack2.mp3").then((s) => {
      this.jumpAudio2 = new v(e), this.jumpAudio2.setBuffer(s), this.jumpAudio2.setLoop(false), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(0.3), this.quacks.push(this.jumpAudio2);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    }), await t.loadAsync("audio/quack3.mp3").then((s) => {
      this.jumpAudio3 = new v(e), this.jumpAudio3.setBuffer(s), this.jumpAudio3.setLoop(false), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(0.3), this.quacks.push(this.jumpAudio3);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    }), await t.loadAsync("audio/quack5.mp3").then((s) => {
      this.jumpAudio4 = new v(e), this.jumpAudio4.setBuffer(s), this.jumpAudio4.setLoop(false), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(0.3), this.quacks.push(this.jumpAudio4);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    });
  }
}
class me {
  constructor(e, t, s, i) {
    __publicField(this, "onTapDown", (e) => {
      let t = this.renderer.domElement.getBoundingClientRect();
      e = e.changedTouches[0], this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.downKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.downKeys(this.levelClass.players[1].player);
    });
    __publicField(this, "onTapUp", (e) => {
      let t = this.renderer.domElement.getBoundingClientRect();
      e = e.changedTouches[0], this.mouse.x = (e.clientX - t.left) / t.width * 2 - 1, this.mouse.y = -((e.clientY - t.top) / t.height) * 2 + 1, this.raycaster.setFromCamera(this.mouse, this.camera), this.mouse.x > 0 ? this.upKeys(this.levelClass.players[0].player) : this.levelClass.players.length > 1 && this.upKeys(this.levelClass.players[1].player);
    });
    __publicField(this, "onKeyDown", (e) => {
      switch (e.code) {
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
    });
    __publicField(this, "onKeyUp", (e) => {
      switch (e.code) {
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
          this.levelClass.players.forEach((t, s, i) => {
            t.player.userData.live = true;
          });
          break;
      }
    });
    this.levelClass = e, this.isMobile = t, this.renderer = s, this.camera = i, this.camera = i, this.mouse = new h(), this.raycaster = new Z(), this.addKeyListeners();
  }
  addKeyListeners() {
    window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("mousedown", this.onKeyDown), window.addEventListener("mouseup", this.onKeyUp), document.addEventListener("touchend", this.onTapUp), document.addEventListener("touchstart", this.onTapDown);
  }
  downKeys(e) {
    e.userData.live && (e.userData.onGround || e.userData.canFly) && (e.userData.readyJump = true, e.userData.audio[0].play());
  }
  upKeys(e) {
    e.userData.live && (e.userData.readyJump && e.userData.onGround ? (e.userData.jumping = true, e.userData.readyJump = false, e.userData.audio[0].stop(), e.userData.audio[1].isPlaying || e.userData.audio[1].play(), e.userData.onGround = false) : e.userData.onGround || (e.userData.canFly ? (e.userData.jumping = true, e.userData.readyJump = false, e.userData.audio[0].stop(), e.userData.audio[1].isPlaying || e.userData.audio[1].play(), e.userData.onGround = false, e.userData.hatBoost--, e.userData.hatBoost == 0 && (e.userData.canFly = false, setTimeout(() => {
      this.levelClass.boostHatModels[e.userData.numHatBoost].userData.fly = false;
    }, 500))) : (e.userData.readyJump = false, e.userData.audio[0].stop())));
  }
}
class fe {
  constructor(e, t, s) {
    this.scene = e, this.camera = t, this.levelClass = s, this.ambientLight = new $(11184810, 1), this.hemiLight = new Q(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(0.095, 1, 0.75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new ee(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = true, this.dirLight.shadow.camera.far = 10, this.targetObject = new te(), this.dirLight.target = this.targetObject, this.helper = new se(this.dirLight, 3);
  }
  loadWorld() {
    this.scene.add(this.hemiLight), this.scene.add(this.dirLight), this.scene.add(this.targetObject);
  }
  updateLighting() {
    this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10), this.dirLight.position.set(this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.x, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.y + 2, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.z);
    const e = 10;
    this.dirLight.shadow.camera.left = -e, this.dirLight.shadow.camera.right = e, this.dirLight.shadow.camera.top = e, this.dirLight.shadow.camera.bottom = -e;
  }
}
class ge {
  constructor(e) {
    __publicField(this, "mainMenu", () => {
      document.querySelector(".new_game_btn1").addEventListener("click", () => {
        this.hideScreen("main_screen"), this.showScreen("free_game_screen");
      }), document.querySelector(".new_game_btn2").addEventListener("click", () => {
        this.hideScreen("main_screen"), this.showScreen("together_game_screen");
      }), document.querySelector(".free_game_btn1_1").addEventListener("click", () => {
        this.hideScreen("free_game_screen"), this.initMatch(1, 1);
      }), document.querySelector(".free_game_btn1_2").addEventListener("click", () => {
        this.hideScreen("free_game_screen"), this.initMatch(1, 2);
      }), document.querySelector(".free_game_btn1_3").addEventListener("click", () => {
        this.hideScreen("free_game_screen"), this.initMatch(1, 3);
      }), document.querySelector(".free_game_btn1_4").addEventListener("click", () => {
        this.hideScreen("free_game_screen"), this.initMatch(1, 4);
      }), document.querySelector(".together_game_btn1").addEventListener("click", () => {
        this.hideScreen("together_game_screen"), this.initMatch(2, 1);
      }), document.querySelector(".together_game_btn2").addEventListener("click", () => {
        this.hideScreen("together_game_screen"), this.initMatch(2, 4);
      });
    });
    this.initMatch = e, this.mainMenu(this.initMatch);
  }
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
let A, _ = false, L = 0, B = 1 / 60, we = new he(), T, R, E, c, n, H;
const w = new ie();
w.background = new ae(13230580);
const d = new oe(25, window.innerWidth / window.innerHeight, 0.1, 2e3);
d.position.z = 7;
d.position.y = 2;
const De = de();
let O = new re();
document.body.appendChild(O.dom);
const p = new le();
p.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(p.domElement);
p.shadowMap.enabled = true;
p.shadowMap.type = ne;
window.addEventListener("resize", Me, false);
function Me() {
  d.aspect = window.innerWidth / window.innerHeight, d.updateProjectionMatrix(), p.setSize(window.innerWidth, window.innerHeight);
}
async function ve(r) {
  await x.init(), A = new x.World(new x.Vector3(0, -9.81, 0)), T = new x.EventQueue(true), c = new ce(A, x), A.physicsHooks = { filterContactPair: (e, t, s) => {
  } }, H = new ye(), n = new ue(w, H, c, p, d), E = new fe(w, d, n);
  for (let e = 0; e < r; e++) n.players.push(new pe(w, H, n));
  new me(n, De, p, d);
}
async function xe() {
  await E.loadWorld(), await H.loadAudio();
}
async function Ce() {
  await n.createLevel(), await n.loadEnvironments(), await n.loadPlayers();
}
async function Pe(r, e) {
  R.toggleLoader(true), await ve(r), n.gameNum = e, await xe(), await Ce(), R.toggleLoader(false), _ = true;
}
R = new ge(Pe);
function Le() {
  if (_) {
    n.waterUpdate(), n.players.forEach((r, e, t) => {
      r.playerMove();
    }), E.updateLighting(), n.levelAnimate(d), n.cameraMove(d);
    for (const r of n.players) {
      const e = r.player.userData.collider, t = r.player.userData.body;
      if (!e || !t || !n.gameDir == "vert") continue;
      const s = t.translation(), i = t.linvel();
      for (const a of c.allTops) {
        const o = a.userData.collide, l = a.position, u = s.y < l.y, m = i.y > 0, D = Math.abs(s.y - l.y) < 1, P = r.player.userData.handle.toString();
        u && m && D && (a.userData.playerHandlesInside.has(P) || a.userData.playerHandlesInside.add(P));
        const I = s.y > l.y + 0.5, J = i.y <= 0;
        I && J && a.userData.playerHandlesInside.delete(P), a.userData.playerHandlesInside.has(P) ? o.setSensor(true) : o.setSensor(false);
      }
    }
    O.update();
    for (let r = 0, e = c.dynamicBodies.length; r < e; r++) c.dynamicBodies[r][0].position.copy(c.dynamicBodies[r][1].translation()), c.dynamicBodies[r][0].quaternion.copy(c.dynamicBodies[r][1].rotation());
    A.step(T), p.render(w, d);
  }
}
p.setAnimationLoop(() => {
  L += we.getDelta(), L > B && (Le(), p.render(w, d), L = L % B);
});

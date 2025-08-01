var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { M, B as m, a as B, b as v, G as b, V as p, P as O, W as J, T as S, R as f, c as T, F as q, d as I, e as K, A as G, f as F, g as w, h as N, i as j, H as V, D as U, O as Y, j as X, S as Z, C as $, k as Q, l as ee, m as te, n as se, o as ie, p as ae } from "./three-ECWwR_F0.js";
import { O as g } from "./@dimforge-D3Mqfikn.js";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const a of i) if (a.type === "childList") for (const r of a.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
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
function D(o, e) {
  return Math.random() * (e - o) + o;
}
function oe() {
  let o = window.matchMedia || window.msMatchMedia;
  return o ? o("(pointer:coarse)").matches : false;
}
function c(o, e) {
  o.geometry.computeBoundingBox(), e.forEach(function(i, a, r) {
    i.geometry.computeBoundingBox();
  }), o.updateMatrixWorld(), e.forEach(function(i, a, r) {
    i.updateMatrixWorld();
  });
  let t = o.geometry.boundingBox.clone();
  t.applyMatrix4(o.matrixWorld);
  var s = false;
  for (let i = e.length - 1; i > -1; i--) if (e[i].userData.id == null || e[i].userData.id != o.uuid) {
    let a = e[i].geometry.boundingBox.clone();
    a.applyMatrix4(e[i].matrixWorld), a.intersectsBox(t) && (s = e[i]);
  }
  return s;
}
class re {
  constructor(e, t, s) {
    this.scene = e, this.audioClass = t, this.levelClass = s, this.playerHeight = 0.7, this.playerWidth = 0.3, this.player = new M(new m(this.playerWidth, this.playerHeight, this.playerWidth), new B({ color: 16711680, transparent: true, opacity: 0 })), this.player.material.depthWrite = false, this.player.rotation.y = Math.PI, this.player.position.y = 0.8, this.player.position.x = -2, this.player.userData.name = "player", this.player.userData.readyJump = false, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = false, this.player.userData.audio = [], this.player.userData.canFly = false, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = true, this.player.userData.startPos, this.playerModel, this.playerOut = new M(new m(this.playerWidth, this.playerHeight + 0.1, this.playerWidth), new v({ color: 16776960, transparent: true, opacity: 0 })), this.playerOut.material.depthWrite = false, this.playerOut.userData.id = this.player.uuid, this.leftHand, this.rightHand, this.head, this.headPosition, this.playerColors = [15904944, 11596464, 16052346, 11579634];
  }
  async loadPlayerModel() {
    await new b().loadAsync("models/players/player1.glb").then((s) => {
      const i = s.scene;
      this.playerModel = i, this.playerModel.traverse(function(a) {
        a.isMesh && (a.castShadow = true);
      }), this.playerModel.children[0].traverse(function(a) {
        a.isMesh && (a.castShadow = true);
      }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 0.7, this.playerModel.scale.y = 0.7, this.playerModel.scale.z = 0.7;
    });
  }
  playerMove() {
    if (c(this.player, this.levelClass.topPlanes) ? this.player.userData.onGround = true : this.player.userData.onGround = false, this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), c(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(c(this.player, this.levelClass.boostHatMeshes))].position.copy(new p(this.player.userData.head.getWorldPosition(new p()).x - 0.05, this.player.userData.head.getWorldPosition(new p()).y + 0.15, this.player.userData.head.getWorldPosition(new p()).z + 0.1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(c(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += 0.4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(c(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(c(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = true, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(c(this.player, this.levelClass.boostHatMeshes))].userData.fly = true), this.playerModel.position.y < -2 && (this.player.userData.live = false), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = false, this.player.userData.canFly = false, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = false, this.player.userData.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    else {
      const e = this.player.userData.readyJump ? Math.PI / 2 : 0, t = this.player.userData.readyJump ? -Math.PI / 2 : 0, s = this.player.userData.readyJump ? Math.PI / 8 : 0, i = this.player.userData.readyJump ? 0.75 : 1.18, a = this.player.userData.readyJump ? 0.75 : 0.15;
      this.player.userData.readyJump ? this.player.position.x - 1.25 : this.player.position.x, this.player.userData.readyJump ? this.player.position.y + 0.75 : this.player.position.y - this.playerHeight / 2, this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, 0.1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, t, 0.1), this.head.rotation.x = this.lerp(this.head.rotation.x, s, 0.1), this.head.position.y = this.lerp(this.head.position.y, i, 0.1), this.head.position.z = this.lerp(this.head.position.z, a, 0.1);
      const r = this.player.userData.readyJump ? 0.7 : 0;
      this.player.userData.body.setRotation({ w: this.player.userData.body.rotation().w, x: this.lerp(this.player.userData.body.rotation().x, r, 0.1), y: this.player.userData.body.rotation().y, z: this.player.userData.body.rotation().z }), this.player.userData.readyJump && this.player.userData.playerPowerJump < 8 && (this.player.userData.playerPowerJump += 0.2), this.player.userData.jumping && (this.player.userData.body.applyImpulse({ x: this.player.userData.playerPowerJump / 3, y: this.player.userData.playerPowerJump / 1.4, z: 0 }, true), this.player.userData.playerPowerJump = 1, this.player.userData.jumping = false);
    }
  }
  lerp(e, t, s) {
    return e + (t - e) * s;
  }
}
class le {
  constructor(e, t, s) {
    this.scene = e, this.audioClass = t, this.physicsClass = s, this.planeWidth = 4, this.planeHeight = 10, this.geometryPlane = new m(this.planeWidth * 1.5, this.planeHeight, 1), this.materialPlane = new v({ color: 52224 }), this.plane = new M(this.geometryPlane, this.materialPlane), this.plane.receiveShadow = true, this.plane.position.y = -this.planeHeight / 2, this.plane.userData.name = "plane", this.planes = [], this.planeTop = new M(new m(this.geometryPlane.parameters.width, 0.6, 1.2), new v({ color: 13421568, transparent: true, opacity: 0.5 })), this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.topPlanes = [], this.planeGrass = new M(new m(this.geometryPlane.parameters.width, 0.2, 1.2), new B({ color: 52224, transparent: true, opacity: 1 })), this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.planeGrass.castShadow = true, this.planeGrass.receiveShadow = true, this.planeGrass.userData.name = "tops", this.grassPlanes = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [], this.water, this.waterGeometry = new O(1e4, 1e4), this.water = new J(this.waterGeometry, { textureWidth: 500, textureHeight: 500, waterNormals: new S().load("textures/waternormals.jpg", function(i) {
      i.wrapS = i.wrapT = f;
    }), sunDirection: new p(), sunColor: 16777215, waterColor: 7759, distortionScale: 1, fog: this.scene.fog !== void 0 }), this.water.rotation.x = -Math.PI / 2, this.water.position.y = -1.5, this.gameNum = 1;
  }
  waterUpdate() {
    performance.now() * 1e-3, this.water.material.uniforms.time.value += 0.4 / 60;
  }
  async loadTexture() {
    const e = new S();
    e.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (t) => {
      const s = new T({ map: t, transparent: true, opacity: 1 });
      t.wrapS = f, t.wrapT = f, t.repeat.set(this.planeWidth / 4, this.planeHeight / 4), this.plane.material = s;
    }, void 0, function(t) {
      console.error("An error happened.");
    }), e.load("textures/povrezdennaa-tekstura-ili-fon.jpg", (t) => {
      const s = new v({ map: t });
      t.wrapS = f, t.wrapT = f, t.repeat.set(this.planeWidth / 1, this.planeHeight / 8), this.planeGrass.material = s;
    }, void 0, function(t) {
      console.error("An error happened.");
    });
  }
  async createLevel() {
    switch (await this.loadTexture(), await this.loadBoostsModel(), await this.loadEnvironmentModel(), this.gameNum) {
      case 1:
      case 2:
        let e = -2.5;
        for (let s = 0; s < 50; s++) {
          let i = this.plane.clone(), a = this.planeTop.clone(), r = this.planeGrass.clone(), l = D(this.planeWidth / 8, this.planeWidth), z = D(2, 4), x = e + l / 2 + z, A = D(-1, 1) - this.planeHeight / 2;
          s > 0 && (this.changeMeshWidth(i, l), this.changeMeshWidth(a, l + 0.3), this.changeMeshWidth(r, l + 0.3)), s > 0 && (i.position.x = x), s > 0 && (i.position.y = A), s > 0 && (a.position.x = x), s > 0 && (a.position.y = A + this.planeHeight / 2 + 0.1), s > 0 && (r.position.x = x), s > 0 && (r.position.y = A + this.planeHeight / 2), this.planes.push(i), this.topPlanes.push(a), this.grassPlanes.push(r), e = x + l / 2;
        }
        break;
      case 3:
      case 4:
        let t = 0;
        for (let s = 0; s < 50; s++) {
          let i = this.planeTop.clone(), a = this.planeGrass.clone();
          D(this.planeWidth / 8, this.planeWidth);
          let r = D(1, 2), l = t + r;
          s > 0 && (i.position.y = l), s > 0 && (a.position.y = l), this.topPlanes.push(i), this.grassPlanes.push(a), t = l;
        }
        break;
    }
  }
  changeMeshWidth(e, t) {
    e.geometry.dispose(), e.geometry = new m(t, e.geometry.parameters.height, e.geometry.parameters.depth);
  }
  async loadBoostsModel() {
    await new b().loadAsync("models/boosts/hat.glb").then((s) => {
      const i = s.scene;
      this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = 4, this.boostHatModel.scale.x = 0.015, this.boostHatModel.scale.y = 0.015, this.boostHatModel.scale.z = 0.015, this.boostHatModel.userData.fly = false;
    });
  }
  async loadEnvironmentModel() {
    await new b().loadAsync("models/environment/clouds.glb").then((s) => {
      const i = s.scene;
      this.cloudModel = i, this.cloudModel.children.forEach((a, r, l) => {
        a.position.x = r * 3, a.position.y = 4, a.position.z = -25, a.scale.x = 0.9, a.scale.y = 0.9, a.scale.z = 0.9, this.clouds.push(a);
      });
    });
  }
  async loadEnvironments() {
    for (let e = 0; e < this.grassPlanes.length; e++) this.planes.length == this.grassPlanes.length && (this.scene.add(this.planes[e]), this.physicsClass.addPhysicsToObject(this.planes[e])), this.scene.add(this.grassPlanes[e]), this.physicsClass.addPhysicsToObject(this.grassPlanes[e]), console.log(123), this.scene.add(this.topPlanes[e]);
    for (let e = 1; e < 10; e++) {
      let t = this.boostHatModel.clone();
      t.position.x = e * 3, this.scene.add(t), this.boostHatModels.push(t), this.boostHatMeshes.push(t.children[0].children[0].children[0]);
    }
    this.clouds.forEach((e, t, s) => {
      this.scene.add(e);
    }), this.scene.add(this.water);
  }
  levelAnimate(e) {
    this.boostHatModels.forEach((i, a, r) => {
      i.children[0].children[1].rotation.y += 0.05;
    });
    const t = new q(), s = new I();
    s.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), t.setFromProjectionMatrix(s), this.clouds[0].position.x < e.position.x && !t.intersectsObject(this.clouds[0]) && (this.clouds[0].position.copy(new p(this.clouds[this.clouds.length - 1].position.x + 10, this.clouds[this.clouds.length - 1].position.y, this.clouds[this.clouds.length - 1].position.z)), this.clouds.push(this.clouds.shift())), this.clouds.forEach((i, a, r) => {
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
      t.player.position.x = t.player.position.x + e * 1, this.physicsClass.addPhysicsToObject(t.player), await t.loadPlayerModel(), t.player.userData.startPos = t.player.position.clone(), this.scene.add(t.player), this.scene.add(t.playerOut), this.scene.add(t.playerModel), this.topPlanes.push(t.playerOut), this.scene.add(t.playerModel), e < this.players[0].playerColors.length ? t.head.children[0].material.color.set(this.players[0].playerColors[e]) : this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors), t.player.userData.audio.push(this.audioClass.readyJumpAudio.clone()), this.audioClass.quacks.length > e ? t.player.userData.audio.push(this.audioClass.quacks[e].clone()) : t.player.userData.audio.push(this.audioClass.quacks[0].clone());
    }
  }
  cameraMove(e) {
    switch (this.gameNum) {
      case 1:
        e.position.x += 0.03, e.position.y = 2, e.position.z = 17, e.lookAt(e.position.x, e.position.y - 2, 0);
        break;
      case 2:
        e.position.x = this.players[this.maxSpeed(this.players)].player.position.x, e.position.y = 2, e.position.z = 17, e.lookAt(e.position.x, e.position.y - 2, 0);
        break;
      case 3:
        e.position.y += 0.03, e.position.x = 0, e.position.z = 17, e.lookAt(e.position.x, e.position.y - 2, 0);
        break;
    }
  }
}
class ne {
  constructor(e, t) {
    this.world = e, this.RAPIER = t, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [];
  }
  addPhysicsToObject(e) {
    let t, s;
    const i = e.rotation.clone();
    e.rotation.set(0, 0, 0);
    const r = new K().setFromObject(e).getSize(new p());
    if (e.rotation.copy(i), e.userData.name.includes("player")) {
      e.userData.size = r, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(r.x / 2, r.y / 2, r.z / 2).setMass(0.6).setRestitution(0).setFriction(0.4), e.userData.body = t, e.userData.shape = s;
      let l = t;
      s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), this.world.createCollider(s, t), e.userData.handle = l.handle.toString(), this.playersHandles.push(l.handle), this.dynamicBodies.push([e, t, e.id]);
    } else if (e.userData.name.includes("plane")) {
      e.userData.size = r, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(r.x / 2, r.y / 2, r.z / 2).setMass(1).setRestitution(0).setFriction(0.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let l = this.world.createCollider(s, t);
      this.allWallBodyCollision.push(l), e.userData.handle = t.handle, this.dynamicBodies.push([e, t, e.id]);
    } else if (e.userData.name.includes("tops")) {
      e.userData.size = r, e.userData.orgRotation = i, t = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(r.x / 2, r.y / 2, r.z / 2).setMass(0.1).setRestitution(0).setFriction(0.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let l = this.world.createCollider(s, t);
      this.allWallBodyCollision.push(l), e.userData.handle = t.handle, this.dynamicBodies.push([e, t, e.id]);
    }
  }
}
class he {
  constructor() {
    this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
  }
  async loadAudio() {
    const e = new G(), t = new F();
    await t.loadAsync("audio/ready-jump.wav").then((s) => {
      this.readyJumpAudio = new w(e), this.readyJumpAudio.setBuffer(s), this.readyJumpAudio.setLoop(false), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    }), await t.loadAsync("audio/quack1.mp3").then((s) => {
      this.jumpAudio = new w(e), this.jumpAudio.setBuffer(s), this.jumpAudio.setLoop(false), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(0.3), this.quacks.push(this.jumpAudio);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    }), await t.loadAsync("audio/quack2.mp3").then((s) => {
      this.jumpAudio2 = new w(e), this.jumpAudio2.setBuffer(s), this.jumpAudio2.setLoop(false), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(0.3), this.quacks.push(this.jumpAudio2);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    }), await t.loadAsync("audio/quack3.mp3").then((s) => {
      this.jumpAudio3 = new w(e), this.jumpAudio3.setBuffer(s), this.jumpAudio3.setLoop(false), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(0.3), this.quacks.push(this.jumpAudio3);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    }), await t.loadAsync("audio/quack5.mp3").then((s) => {
      this.jumpAudio4 = new w(e), this.jumpAudio4.setBuffer(s), this.jumpAudio4.setLoop(false), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(0.3), this.quacks.push(this.jumpAudio4);
    }).catch((s) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", s);
    });
  }
}
class de {
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
    this.levelClass = e, this.isMobile = t, this.renderer = s, this.camera = i, this.camera = i, this.mouse = new p(), this.raycaster = new N(), this.addKeyListeners();
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
class pe {
  constructor(e, t, s) {
    this.scene = e, this.camera = t, this.levelClass = s, this.ambientLight = new j(11184810, 1), this.hemiLight = new V(16777215, 16777215, 2), this.hemiLight.groundColor.setHSL(0.095, 1, 0.75), this.hemiLight.position.set(0, 10, 0), this.dirLight = new U(16777215, 2), this.dirLight.position.set(0, 5, 5), this.dirLight.castShadow = true, this.dirLight.shadow.camera.far = 10, this.targetObject = new Y(), this.dirLight.target = this.targetObject, this.helper = new X(this.dirLight, 3);
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
class ue {
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
let P, W = false, C = 0, E = 1 / 60, ce = new ae(), _, H, R, y, n, L;
const u = new Z();
u.background = new $(13230580);
u.fog = new Q(u.background, 1, 53);
const h = new ee(25, window.innerWidth / window.innerHeight, 0.1, 2e3);
h.position.z = 7;
h.position.y = 2;
const ye = oe();
let k = new te();
document.body.appendChild(k.dom);
const d = new se();
d.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(d.domElement);
d.shadowMap.enabled = true;
d.shadowMap.type = ie;
window.addEventListener("resize", me, false);
function me() {
  h.aspect = window.innerWidth / window.innerHeight, h.updateProjectionMatrix(), d.setSize(window.innerWidth, window.innerHeight);
}
async function fe(o) {
  await g.init(), P = new g.World(new g.Vector3(0, -9.81, 0)), _ = new g.EventQueue(true), y = new ne(P, g), L = new he(), n = new le(u, L, y), R = new pe(u, h, n);
  for (let e = 0; e < o; e++) n.players.push(new re(u, L, n));
  new de(n, ye, d, h);
}
async function we() {
  await R.loadWorld(), await L.loadAudio();
}
async function ge() {
  await n.createLevel(), await n.loadEnvironments(), await n.loadPlayers();
}
async function De(o, e) {
  H.toggleLoader(true), await fe(o), n.gameNum = e, await we(), await ge(), H.toggleLoader(false), W = true;
}
H = new ue(De);
function Me() {
  if (W) {
    n.waterUpdate(), n.players.forEach((o, e, t) => {
      o.playerMove();
    }), R.updateLighting(), n.levelAnimate(h), n.cameraMove(h), k.update();
    for (let o = 0, e = y.dynamicBodies.length; o < e; o++) y.dynamicBodies[o][0].position.copy(y.dynamicBodies[o][1].translation()), y.dynamicBodies[o][0].quaternion.copy(y.dynamicBodies[o][1].rotation());
    P.step(_), d.render(u, h);
  }
}
d.setAnimationLoop(() => {
  C += ce.getDelta(), C > E && (Me(), d.render(u, h), C = C % E);
});

import { M as H, B as g, a as F, b as L, G as O, V as f, T as q, c as Y, R as A, F as Z, d as Q, e as $, A as ee, f as te, P as M, S as se, C as ae, g as ie, h as oe, i as re, W as ne, j as le, k as de, H as he, D as pe, O as ue, l as ce, m as ye, n as fe, o as me, p as we, q as ge } from "./three-BWLniET-.js";
import { O as x } from "./@dimforge-D3Mqfikn.js";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) a(i);
  new MutationObserver((i) => {
    for (const r of i) if (r.type === "childList") for (const n of r.addedNodes) n.tagName === "LINK" && n.rel === "modulepreload" && a(n);
  }).observe(document, { childList: true, subtree: true });
  function s(i) {
    const r = {};
    return i.integrity && (r.integrity = i.integrity), i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? r.credentials = "include" : i.crossOrigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin", r;
  }
  function a(i) {
    if (i.ep) return;
    i.ep = true;
    const r = s(i);
    fetch(i.href, r);
  }
})();
function z(t, e) {
  return Math.random() * (e - t) + t;
}
function De() {
  let t = window.matchMedia || window.msMatchMedia;
  return t ? t("(pointer:coarse)").matches : false;
}
function w(t, e) {
  t.geometry.computeBoundingBox(), e.forEach(function(i, r, n) {
    i.geometry.computeBoundingBox();
  }), t.updateMatrixWorld(), e.forEach(function(i, r, n) {
    i.updateMatrixWorld();
  });
  let s = t.geometry.boundingBox.clone();
  s.applyMatrix4(t.matrixWorld);
  var a = false;
  for (let i = e.length - 1; i > -1; i--) if (e[i].userData.id == null || e[i].userData.id != t.uuid) {
    let r = e[i].geometry.boundingBox.clone();
    r.applyMatrix4(e[i].matrixWorld), r.intersectsBox(s) && (a = e[i]);
  }
  return a;
}
class T {
  constructor(e, s, a) {
    this.scene = e, this.audioClass = s, this.levelClass = a, this.playerHeight = 0.7, this.playerWidth = 0.3, this.player = new H(new g(this.playerWidth, this.playerHeight, this.playerWidth), new F({ color: 16711680, transparent: true, opacity: 0 })), this.player.material.depthWrite = false, this.player.rotation.y = Math.PI, this.player.position.y = 0.8, this.player.position.x = -2, this.player.userData.name = "player", this.player.userData.readyJump = false, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = false, this.player.userData.audio = [], this.player.userData.canFly = false, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = true, this.player.userData.startPos, this.playerModel, this.playerOut = new H(new g(this.playerWidth, this.playerHeight + 0.1, this.playerWidth1), new L({ color: 16776960, transparent: true, opacity: 0 })), this.playerOut.material.depthWrite = false, this.playerOut.userData.id = this.player.uuid, this.leftHand, this.rightHand, this.head, this.headPosition;
  }
  async loadPlayerModel() {
    await new O().loadAsync("models/players/player1.glb").then((a) => {
      const i = a.scene;
      this.playerModel = i, this.playerModel.traverse(function(r) {
        r.isMesh && (r.castShadow = true);
      }), this.playerModel.children[0].traverse(function(r) {
        r.isMesh && (r.castShadow = true);
      }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 0.7, this.playerModel.scale.y = 0.7, this.playerModel.scale.z = 0.7;
    });
  }
  playerMove() {
    if (this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), w(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].position.copy(new f(this.player.userData.head.getWorldPosition(new f()).x - 0.05, this.player.userData.head.getWorldPosition(new f()).y + 0.15, this.player.userData.head.getWorldPosition(new f()).z + 0.1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += 0.4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = true, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].userData.fly = true), this.playerModel.position.y < -2 && (this.player.userData.live = false), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos), this.player.userData.readyJump = false, this.player.userData.canFly = false, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.onGround = false, this.player.userData.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
    else {
      const e = this.player.userData.readyJump ? Math.PI / 2 : 0, s = this.player.userData.readyJump ? -Math.PI / 2 : 0, a = this.player.userData.readyJump ? Math.PI / 8 : 0, i = this.player.userData.readyJump ? 0.75 : 1.18, r = this.player.userData.readyJump ? 0.75 : 0.15;
      this.player.userData.readyJump ? this.player.position.x - 1.25 : this.player.position.x, this.player.userData.readyJump ? this.player.position.y + 0.75 : this.player.position.y - this.playerHeight / 2, this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, 0.1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, s, 0.1), this.head.rotation.x = this.lerp(this.head.rotation.x, a, 0.1), this.head.position.y = this.lerp(this.head.position.y, i, 0.1), this.head.position.z = this.lerp(this.head.position.z, r, 0.1);
      const n = this.player.userData.readyJump ? 0.7 : 0;
      this.player.userData.body.setRotation({ w: this.player.userData.body.rotation().w, x: this.lerp(this.player.userData.body.rotation().x, n, 0.1), y: this.player.userData.body.rotation().y, z: this.player.userData.body.rotation().z }), this.player.userData.readyJump && this.player.userData.playerPowerJump < 8 && (this.player.userData.playerPowerJump += 0.2), this.player.userData.jumping && (this.player.userData.body.applyImpulse({ x: this.player.userData.playerPowerJump / 3, y: this.player.userData.playerPowerJump / 1.4, z: 0 }, true), this.player.userData.playerPowerJump = 1, this.player.userData.jumping = false);
    }
  }
  lerp(e, s, a) {
    return e + (s - e) * a;
  }
}
class Me {
  constructor() {
    this.planeWidth = 4, this.planeHeight = 10, this.geometryPlane = new g(this.planeWidth * 1.5, this.planeHeight, 1), this.materialPlane = new L({ color: 52224 }), this.plane = new H(this.geometryPlane, this.materialPlane), this.plane.receiveShadow = true, this.plane.position.y = -this.planeHeight / 2, this.plane.userData.name = "plane", this.planes = [], this.planeTop = new H(new g(this.geometryPlane.parameters.width, 0.6, 1.2), new L({ color: 13421568, transparent: true, opacity: 0 })), this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.topPlanes = [], this.planeGrass = new H(new g(this.geometryPlane.parameters.width, 0.2, 1.2), new F({ color: 52224, transparent: true, opacity: 1 })), this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.planeGrass.castShadow = true, this.planeGrass.receiveShadow = true, this.planeGrass.userData.name = "tops", this.grassPlanes = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [], this.backModel, this.backModels = [];
  }
  async createLevel() {
    await this.loadBoostsModel(), await this.loadEnvironmentModel();
    let e = -2.5;
    for (let s = 0; s < 50; s++) {
      let a = this.plane.clone(), i = this.planeTop.clone(), r = this.planeGrass.clone();
      const n = new q();
      n.load("textures/ground.jpg", (u) => {
        const W = new Y({ map: u });
        u.wrapS = A, u.wrapT = A, u.repeat.set(this.planeWidth / 2, this.planeHeight / 4), a.material = W;
      }, void 0, function(u) {
        console.error("An error happened.");
      }), n.load("textures/grass.jpg", (u) => {
        const W = new L({ map: u });
        u.wrapS = A, u.wrapT = A, u.repeat.set(this.planeWidth / 1, this.planeHeight / 8), r.material = W;
      }, void 0, function(u) {
        console.error("An error happened.");
      });
      let h = z(this.planeWidth / 4, this.planeWidth), I = z(2, 4), R = e + h / 2 + I, E = z(-1, 1) - this.planeHeight / 2;
      s > 0 && (this.changeMeshWidth(a, h), this.changeMeshWidth(i, h + 0.3), this.changeMeshWidth(r, h + 0.3)), s > 0 && (a.position.x = R), s > 0 && (a.position.y = E), s > 0 && (i.position.x = R), s > 0 && (i.position.y = E + this.planeHeight / 2 + 0.1), s > 0 && (r.position.x = R), s > 0 && (r.position.y = E + this.planeHeight / 2), this.planes.push(a), this.topPlanes.push(i), this.grassPlanes.push(r), e = R + h / 2;
    }
  }
  changeMeshWidth(e, s) {
    e.geometry.dispose(), e.geometry = new g(s, e.geometry.parameters.height, e.geometry.parameters.depth);
  }
  async loadBoostsModel() {
    await new O().loadAsync("models/boosts/hat.glb").then((a) => {
      const i = a.scene;
      this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = 4, this.boostHatModel.scale.x = 0.015, this.boostHatModel.scale.y = 0.015, this.boostHatModel.scale.z = 0.015, this.boostHatModel.userData.fly = false;
    });
  }
  async loadEnvironmentModel() {
    const e = new O();
    await e.loadAsync("models/environment/clouds.glb").then((i) => {
      const r = i.scene;
      this.cloudModel = r, this.cloudModel.children.forEach((n, h, I) => {
        n.position.x = h * 3, n.position.y = 3, n.position.z = -205, n.scale.x = 0.04, n.scale.y = 0.04, n.scale.z = 0.04, this.clouds.push(n);
      });
    }), await e.loadAsync("models/environment/back.glb").then((i) => {
      const r = i.scene;
      this.backModel = r, this.backModel.position.y = -20, this.backModel.position.z = -40;
    });
  }
  levelAnimate(e) {
    this.boostHatModels.forEach((i, r, n) => {
      i.children[0].children[1].rotation.y += 0.05;
    });
    const s = new Z(), a = new Q();
    a.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), s.setFromProjectionMatrix(a), this.clouds[0].position.x < e.position.x && !s.intersectsObject(this.clouds[0]) && (this.clouds[0].position.copy(new f(this.clouds[this.clouds.length - 1].position.x + 10, this.clouds[this.clouds.length - 1].position.y, this.clouds[this.clouds.length - 1].position.z)), this.clouds.push(this.clouds.shift())), this.clouds.forEach((i, r, n) => {
      i.position.x -= 0.04;
    });
  }
}
class xe {
  constructor(e, s) {
    this.world = e, this.RAPIER = s, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [];
  }
  addPhysicsToObject(e) {
    let s, a;
    const i = e.rotation.clone();
    e.rotation.set(0, 0, 0);
    const n = new $().setFromObject(e).getSize(new f());
    if (e.rotation.copy(i), e.userData.name.includes("player")) {
      e.userData.size = n, e.userData.orgRotation = i, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(n.x / 2, n.y / 2, n.z / 2).setMass(0.6).setRestitution(0).setFriction(0.4), e.userData.body = s, e.userData.shape = a;
      let h = s;
      a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), this.world.createCollider(a, s), e.userData.handle = h.handle.toString(), this.playersHandles.push(h.handle), this.dynamicBodies.push([e, s, e.id]);
    } else if (e.userData.name.includes("plane")) {
      e.userData.size = n, e.userData.orgRotation = i, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(n.x / 2, n.y / 2, n.z / 2).setMass(1).setRestitution(0).setFriction(0.3), a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let h = this.world.createCollider(a, s);
      this.allWallBodyCollision.push(h), e.userData.handle = s.handle, this.dynamicBodies.push([e, s, e.id]);
    } else if (e.userData.name.includes("tops")) {
      e.userData.size = n, e.userData.orgRotation = i, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(n.x / 2, n.y / 2, n.z / 2).setMass(0.1).setRestitution(0).setFriction(0.3), a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let h = this.world.createCollider(a, s);
      this.allWallBodyCollision.push(h), e.userData.handle = s.handle, this.dynamicBodies.push([e, s, e.id]);
    }
  }
}
class Ae {
  constructor() {
    this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
  }
  async loadAudio() {
    const e = new ee(), s = new te();
    await s.loadAsync("audio/ready-jump.wav").then((a) => {
      this.readyJumpAudio = new M(e), this.readyJumpAudio.setBuffer(a), this.readyJumpAudio.setLoop(false), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(30), this.readyJumpAudio.setPlaybackRate(2);
    }).catch((a) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", a);
    }), await s.loadAsync("audio/quack1.mp3").then((a) => {
      this.jumpAudio = new M(e), this.jumpAudio.setBuffer(a), this.jumpAudio.setLoop(false), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(0.3), this.quacks.push(this.jumpAudio);
    }).catch((a) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", a);
    }), await s.loadAsync("audio/quack2.mp3").then((a) => {
      this.jumpAudio2 = new M(e), this.jumpAudio2.setBuffer(a), this.jumpAudio2.setLoop(false), this.jumpAudio2.setRefDistance(400), this.jumpAudio2.setVolume(0.3), this.quacks.push(this.jumpAudio2);
    }).catch((a) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", a);
    }), await s.loadAsync("audio/quack3.mp3").then((a) => {
      this.jumpAudio3 = new M(e), this.jumpAudio3.setBuffer(a), this.jumpAudio3.setLoop(false), this.jumpAudio3.setRefDistance(400), this.jumpAudio3.setVolume(0.3), this.quacks.push(this.jumpAudio3);
    }).catch((a) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", a);
    }), await s.loadAsync("audio/quack5.mp3").then((a) => {
      this.jumpAudio4 = new M(e), this.jumpAudio4.setBuffer(a), this.jumpAudio4.setLoop(false), this.jumpAudio4.setRefDistance(400), this.jumpAudio4.setVolume(0.3), this.quacks.push(this.jumpAudio4);
    }).catch((a) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", a);
    });
  }
}
console.clear();
let S, V = false, v = 0, G = 1 / 60, He = new we(), m = new f(), j = new ge();
const l = new se();
l.background = new ae(13230580);
l.fog = new ie(l.background, 1, 300);
const d = new oe(25, window.innerWidth / window.innerHeight, 0.1, 2e3);
d.position.z = 7;
d.position.y = 2;
const K = De();
let N = new re();
document.body.appendChild(N.dom);
const c = new ne();
c.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(c.domElement);
c.shadowMap.enabled = true;
c.shadowMap.type = le;
window.addEventListener("resize", Pe, false);
function Pe() {
  d.aspect = window.innerWidth / window.innerHeight, d.updateProjectionMatrix(), c.setSize(window.innerWidth, window.innerHeight);
}
const be = new de(11184810, 1);
l.add(be);
const k = new he(16777215, 16777215, 2);
k.groundColor.setHSL(0.095, 1, 0.75);
k.position.set(0, 10, 0);
l.add(k);
const p = new pe(16777215, 2);
p.color.setHSL(0.1, 1, 0.95);
p.position.set(0, 5, 5);
p.castShadow = true;
p.shadow.camera.far = 10;
l.add(p);
const U = new ue();
l.add(U);
p.target = U;
new ce(p, 3);
function Ce() {
  p.target.position.set(o.players[B(o.players)].player.position.x - 4, -20, 10), p.position.set(o.players[B(o.players)].player.position.x, o.players[B(o.players)].player.position.y + 2, o.players[1].player.position.z);
  const t = 10;
  p.shadow.camera.left = -t, p.shadow.camera.right = t, p.shadow.camera.top = t, p.shadow.camera.bottom = -t;
}
new ye(d, c.domElement);
let J, y, o, D, C;
const Re = new fe(1e4, 1e4);
C = new me(Re, { textureWidth: 51, textureHeight: 51, waterNormals: new q().load("textures/waternormals.jpg", function(t) {
  t.wrapS = t.wrapT = A;
}), sunDirection: new f(), sunColor: 16777215, waterColor: 7759, distortionScale: 3.7, fog: l.fog !== void 0 });
C.rotation.x = -Math.PI / 2;
C.position.y = -30;
l.add(C);
function ve() {
  performance.now() * 1e-3, C.material.uniforms.time.value += 1 / 60;
}
async function Le() {
  await x.init(), S = new x.World(new x.Vector3(0, -9.81, 0)), J = new x.EventQueue(true), D = new Ae(), await D.loadAudio(), y = new xe(S, x), o = new Me(), o.players.push(new T(l, D, o)), o.players.push(new T(l, D, o));
}
async function Be() {
  await o.createLevel();
  for (let e = 0; e < o.planes.length; e++) l.add(o.planes[e]), y.addPhysicsToObject(o.planes[e]), l.add(o.grassPlanes[e]), y.addPhysicsToObject(o.grassPlanes[e]), l.add(o.topPlanes[e]);
  for (let e = 1; e < 10; e++) {
    let s = o.boostHatModel.clone();
    s.position.x = e * 3, l.add(s), o.boostHatModels.push(s), o.boostHatMeshes.push(s.children[0].children[0].children[0]);
  }
  o.clouds.forEach((e, s, a) => {
    l.add(e);
  });
  const t = [15904944, 11596464, 16052346, 11579634];
  for (let e = 0; e < o.players.length; e++) {
    let s = o.players[e];
    s.player.position.x = s.player.position.x + e * 1, y.addPhysicsToObject(s.player), await s.loadPlayerModel(), s.player.userData.startPos = s.player.position.clone(), l.add(s.player), l.add(s.playerOut), l.add(s.playerModel), o.topPlanes.push(s.playerOut), l.add(s.playerModel), e < t.length ? s.head.children[0].material.color.set(t[e]) : t.splice(t.length, 0, ...t), s.player.userData.audio.push(D.readyJumpAudio.clone()), s.player.userData.audio.push(D.quacks[e].clone());
  }
  V = true;
}
async function Ee() {
}
async function We() {
  await Le(), await Be(), await Ee();
}
We();
function B(t) {
  if (t.length === 0) return -1;
  let e = 0, s = t[0].player.position.x;
  for (let a = 1; a < t.length; a++) t[a].player && t[a].player.position ? t[a].player.position.x > s && (s = t[a].player.position.x, e = a) : console.warn(`Player at index ${a} is missing player or position properties.`);
  return e;
}
function ze() {
  if (V) {
    ve(), o.players.forEach((t, e, s) => {
      t.playerMove();
    }), Ce(), o.levelAnimate(d), d.position.x = o.players[B(o.players)].player.position.x, d.position.y = 3, d.position.z = 15, d.lookAt(d.position.x, d.position.y - 2, 0), o.players.forEach((t, e, s) => {
      w(t.player, o.topPlanes) ? t.player.userData.onGround = true : t.player.userData.onGround = false;
    }), J.drainCollisionEvents((t, e, s) => {
      allWallBodyCollision.forEach((a, i) => {
        e == a.handle;
      });
    }), N.update();
    for (let t = 0, e = y.dynamicBodies.length; t < e; t++) y.dynamicBodies[t][0].position.copy(y.dynamicBodies[t][1].translation()), y.dynamicBodies[t][0].quaternion.copy(y.dynamicBodies[t][1].rotation());
    S.step(J), c.render(l, d);
  }
}
c.setAnimationLoop(() => {
  v += He.getDelta(), v > G && (ze(), c.render(l, d), v = v % G);
});
window.addEventListener("keydown", X);
window.addEventListener("keyup", _);
window.addEventListener("mousedown", X);
window.addEventListener("mouseup", _);
document.addEventListener("touchend", Se);
document.addEventListener("touchstart", Oe);
function Oe(t) {
  let e = c.domElement.getBoundingClientRect();
  t = t.changedTouches[0], m.x = (t.clientX - e.left) / e.width * 2 - 1, m.y = -((t.clientY - e.top) / e.height) * 2 + 1, j.setFromCamera(m, d), m.x > 0 ? P(o.players[0].player) : P(o.players[1].player);
}
function Se(t) {
  let e = c.domElement.getBoundingClientRect();
  t = t.changedTouches[0], m.x = (t.clientX - e.left) / e.width * 2 - 1, m.y = -((t.clientY - e.top) / e.height) * 2 + 1, j.setFromCamera(m, d), m.x > 0 ? b(o.players[0].player) : b(o.players[1].player);
}
function X(t) {
  switch (t.code) {
    case void 0:
      K || P(o.players[0].player);
      break;
    case "KeyW":
    case "ArrowUp":
      break;
    case "KeyZ":
    case "ArrowDown":
      P(o.players[1].player);
      break;
    case "KeyM":
    case "ArrowLeft":
      P(o.players[2].player);
      break;
  }
}
function _(t) {
  switch (t.code) {
    case void 0:
      K || b(o.players[0].player);
      break;
    case "KeyW":
    case "ArrowUp":
      break;
    case "KeyZ":
    case "ArrowDown":
      b(o.players[1].player);
      break;
    case "KeyM":
    case "ArrowLeft":
      b(o.players[2].player);
      break;
    case "KeyD":
    case "ArrowRight":
      o.players.forEach((e, s, a) => {
        e.player.userData.live = true;
      });
      break;
  }
}
function P(t) {
  t.userData.live && (t.userData.onGround || t.userData.canFly) && (t.userData.readyJump = true, t.userData.audio[0].play());
}
function b(t) {
  t.userData.live && (t.userData.readyJump && t.userData.onGround ? (t.userData.jumping = true, t.userData.readyJump = false, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = false) : t.userData.onGround || (t.userData.canFly ? (t.userData.jumping = true, t.userData.readyJump = false, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = false, t.userData.hatBoost--, t.userData.hatBoost == 0 && (t.userData.canFly = false, setTimeout(() => {
    o.boostHatModels[t.userData.numHatBoost].userData.fly = false;
  }, 500))) : (t.userData.readyJump = false, t.userData.audio[0].stop())));
}

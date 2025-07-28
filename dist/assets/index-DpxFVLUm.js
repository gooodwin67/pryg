import { M as H, B as D, a as k, b as R, G as J, V as g, T as X, c as U, R as L, F as Y, d as _, e as Z, A as Q, f as $, P as M, S as ee, C as te, g as se, h as ae, W as ie, i as oe, j as re, H as ne, D as le, O as de, k as he, l as pe, m as ue } from "./three-DanR-C-L.js";
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
function ce() {
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
class C {
  constructor(e, s, a) {
    this.scene = e, this.audioClass = s, this.levelClass = a, this.playerHeight = 0.7, this.playerWidth = 0.3, this.player = new H(new D(this.playerWidth, this.playerHeight, this.playerWidth), new k({ color: 16711680, transparent: true, opacity: 0 })), this.player.material.depthWrite = false, this.player.rotation.y = Math.PI, this.player.position.y = 2, this.player.userData.name = "player", this.player.userData.readyJump = false, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = false, this.player.userData.audio = [], this.player.userData.canFly = false, this.player.userData.hatBoost = 0, this.player.userData.numHatBoost = 0, this.player.userData.live = true, this.player.userData.startPos, this.playerModel, this.playerOut = new H(new D(this.playerWidth, this.playerHeight + 0.1, this.playerWidth1), new R({ color: 16776960, transparent: true, opacity: 0 })), this.playerOut.material.depthWrite = false, this.playerOut.userData.id = this.player.uuid, this.leftHand, this.rightHand, this.head, this.headPosition;
  }
  async loadPlayerModel() {
    await new J().loadAsync("models/players/player1.glb").then((a) => {
      const i = a.scene;
      this.playerModel = i, this.playerModel.traverse(function(r) {
        r.isMesh && (r.castShadow = true);
      }), this.playerModel.children[0].traverse(function(r) {
        r.isMesh && (r.castShadow = true);
      }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.player.userData.head = this.head, this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 0.7, this.playerModel.scale.y = 0.7, this.playerModel.scale.z = 0.7;
    });
  }
  playerMove() {
    if (this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation), w(this.player, this.levelClass.boostHatMeshes) && (this.player.userData.canFly && (this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].position.copy(new g(this.player.userData.head.getWorldPosition(new g()).x - 0.05, this.player.userData.head.getWorldPosition(new g()).y + 0.15, this.player.userData.head.getWorldPosition(new g()).z + 0.1)), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].children[0].children[1].rotation.y += 0.4), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].userData.fly || (this.player.userData.numHatBoost = this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes)), this.player.userData.canFly = true, this.player.userData.hatBoost = 2), this.levelClass.boostHatModels[this.levelClass.boostHatMeshes.indexOf(w(this.player, this.levelClass.boostHatMeshes))].userData.fly = true), this.playerModel.position.y < -2 && (this.player.userData.live = false), !this.player.userData.live) this.player.userData.body.setTranslation(this.player.userData.startPos);
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
class ye {
  constructor() {
    this.planeWidth = 4, this.planeHeight = 10, this.geometryPlane = new D(this.planeWidth, this.planeHeight, 1), this.materialPlane = new R({ color: 52224 }), this.plane = new H(this.geometryPlane, this.materialPlane), this.plane.receiveShadow = true, this.plane.position.y = -this.planeHeight / 2, this.plane.userData.name = "plane", this.planes = [], this.planeTop = new H(new D(this.geometryPlane.parameters.width, 0.6, 0.2), new R({ color: 13421568, transparent: true, opacity: 0.5 })), this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.topPlanes = [], this.planeGrass = new H(new D(this.geometryPlane.parameters.width, 0.2, 1.2), new k({ color: 52224, transparent: true, opacity: 1 })), this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.planeGrass.castShadow = true, this.planeGrass.receiveShadow = true, this.planeGrass.userData.name = "plane", this.grassPlanes = [], this.boostHatModel, this.boostHatMesh, this.boostHatPropeller, this.boostHatModels = [], this.boostHatMeshes = [], this.players = [], this.cloudModel, this.clouds = [];
  }
  async createLevel() {
    await this.loadBoostsModel(), await this.loadEnvironmentModel();
    let e = -4.5;
    for (let s = 0; s < 50; s++) {
      let a = this.plane.clone(), i = this.planeTop.clone(), r = this.planeGrass.clone();
      const n = new X();
      n.load("textures/ground.jpg", (u) => {
        const O = new U({ map: u });
        u.wrapS = L, u.wrapT = L, u.repeat.set(this.planeWidth / 2, this.planeHeight / 4), a.material = O;
      }, void 0, function(u) {
        console.error("An error happened.");
      }), n.load("textures/grass.jpg", (u) => {
        const O = new R({ map: u });
        u.wrapS = L, u.wrapT = L, u.repeat.set(this.planeWidth / 1, this.planeHeight / 8), r.material = O;
      }, void 0, function(u) {
        console.error("An error happened.");
      });
      let p = z(this.planeWidth / 4, this.planeWidth), N = z(2, 4), b = e + p / 2 + N, W = z(-1, 1) - this.planeHeight / 2;
      s > 0 && (this.changeMeshWidth(a, p), this.changeMeshWidth(i, p + 0.3), this.changeMeshWidth(r, p + 0.3)), a.position.x = b, a.position.y = W, i.position.x = b, i.position.y = W + this.planeHeight / 2 + 0.1, r.position.x = b, r.position.y = W + this.planeHeight / 2, this.planes.push(a), this.topPlanes.push(i), this.grassPlanes.push(r), e = b + p / 2;
    }
  }
  changeMeshWidth(e, s) {
    e.geometry.dispose(), e.geometry = new D(s, e.geometry.parameters.height, e.geometry.parameters.depth);
  }
  async loadBoostsModel() {
    await new J().loadAsync("models/boosts/hat.glb").then((a) => {
      const i = a.scene;
      this.boostHatModel = i, this.boostHatPropeller = this.boostHatModel.children[0].children[1], this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0], this.boostHatModel.rotation.x = Math.PI / 13, this.boostHatModel.rotation.y = Math.PI / 2, this.boostHatModel.position.y = 2, this.boostHatModel.position.x = 4, this.boostHatModel.scale.x = 0.015, this.boostHatModel.scale.y = 0.015, this.boostHatModel.scale.z = 0.015, this.boostHatModel.userData.fly = false;
    });
  }
  async loadEnvironmentModel() {
    await new J().loadAsync("models/environment/clouds.glb").then((a) => {
      const i = a.scene;
      this.cloudModel = i, this.cloudModel.children.forEach((r, n, p) => {
        r.position.x = n * 3, r.position.y = 3, r.position.z = -15, r.scale.x = 4e-3, r.scale.y = 4e-3, r.scale.z = 4e-3, this.clouds.push(r);
      });
    });
  }
  levelAnimate(e) {
    this.boostHatModels.forEach((i, r, n) => {
      i.children[0].children[1].rotation.y += 0.05;
    });
    const s = new Y(), a = new _();
    a.multiplyMatrices(e.projectionMatrix, e.matrixWorldInverse), s.setFromProjectionMatrix(a), this.clouds[0].position.x < e.position.x && !s.intersectsObject(this.clouds[0]) && (this.clouds[0].position.copy(new g(this.clouds[this.clouds.length - 1].position.x + 10, this.clouds[this.clouds.length - 1].position.y, this.clouds[this.clouds.length - 1].position.z)), this.clouds.push(this.clouds.shift()));
  }
}
class fe {
  constructor(e, s) {
    this.world = e, this.RAPIER = s, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [];
  }
  addPhysicsToObject(e) {
    let s, a;
    const i = e.rotation.clone();
    e.rotation.set(0, 0, 0);
    const n = new Z().setFromObject(e).getSize(new g());
    if (e.rotation.copy(i), e.userData.name.includes("player")) {
      e.userData.size = n, e.userData.orgRotation = i, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(n.x / 2, n.y / 2, n.z / 2).setMass(0.6).setRestitution(0).setFriction(0.4), e.userData.body = s, e.userData.shape = a;
      let p = s;
      a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), this.world.createCollider(a, s), e.userData.handle = p.handle.toString(), this.playersHandles.push(p.handle), this.dynamicBodies.push([e, s, e.id]);
    } else if (e.userData.name.includes("plane")) {
      e.userData.size = n, e.userData.orgRotation = i, s = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), a = this.RAPIER.ColliderDesc.cuboid(n.x / 2, n.y / 2, n.z / 2).setMass(1).setRestitution(0).setFriction(0.3), a.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let p = this.world.createCollider(a, s);
      this.allWallBodyCollision.push(p), e.userData.handle = s.handle, this.dynamicBodies.push([e, s, e.id]);
    }
  }
}
class me {
  constructor() {
    this.readyJumpAudio, this.jumpAudio, this.jumpAudio2, this.jumpAudio3, this.jumpAudio4, this.quacks = [];
  }
  async loadAudio() {
    const e = new Q(), s = new $();
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
let S, j = false, v = 0, T = 1 / 60, we = new pe(), m = new g(), G = new ue();
const l = new ee();
l.background = new te(13230580);
const d = new se(25, window.innerWidth / window.innerHeight, 0.1, 2e3);
d.position.z = 7;
d.position.y = 2;
ce();
let F = new ae();
document.body.appendChild(F.dom);
const c = new ie();
c.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(c.domElement);
c.shadowMap.enabled = true;
c.shadowMap.type = oe;
window.addEventListener("resize", ge, false);
function ge() {
  d.aspect = window.innerWidth / window.innerHeight, d.updateProjectionMatrix(), c.setSize(window.innerWidth, window.innerHeight);
}
new re(11184810, 1);
const E = new ne(16777215, 16777215, 2);
E.color.setHSL(0.6, 1, 0.6);
E.groundColor.setHSL(0.095, 1, 0.75);
E.position.set(0, 10, 0);
l.add(E);
const h = new le(16777215, 2);
h.color.setHSL(0.1, 1, 0.95);
h.position.set(0, 5, 5);
h.castShadow = true;
h.shadow.camera.far = 10;
l.add(h);
const q = new de();
l.add(q);
h.target = q;
new he(h, 3);
function De() {
  h.target.position.set(o.players[B(o.players)].player.position.x - 4, -20, -10), h.position.set(o.players[B(o.players)].player.position.x, o.players[B(o.players)].player.position.y + 2, o.players[1].player.position.z);
  const t = 10;
  h.shadow.camera.left = -t, h.shadow.camera.right = t, h.shadow.camera.top = t, h.shadow.camera.bottom = -t;
}
let I, y, o, f;
async function Me() {
  await x.init(), S = new x.World(new x.Vector3(0, -9.81, 0)), I = new x.EventQueue(true), f = new me(), await f.loadAudio(), y = new fe(S, x), o = new ye(), o.players.push(new C(l, f, o)), o.players.push(new C(l, f, o)), o.players.push(new C(l, f, o)), o.players.push(new C(l, f, o));
}
async function xe() {
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
    y.addPhysicsToObject(s.player), await s.loadPlayerModel(), s.player.userData.startPos = s.player.position.clone(), l.add(s.player), l.add(s.playerOut), l.add(s.playerModel), o.topPlanes.push(s.playerOut), l.add(s.playerModel), e < t.length ? s.head.children[0].material.color.set(t[e]) : t.splice(t.length, 0, ...t), s.player.userData.audio.push(f.readyJumpAudio.clone()), s.player.userData.audio.push(f.quacks[e].clone());
  }
  j = true;
}
async function He() {
}
async function Ae() {
  await Me(), await xe(), await He();
}
Ae();
function B(t) {
  if (t.length === 0) return -1;
  let e = 0, s = t[0].player.position.x;
  for (let a = 1; a < t.length; a++) t[a].player && t[a].player.position ? t[a].player.position.x > s && (s = t[a].player.position.x, e = a) : console.warn(`Player at index ${a} is missing player or position properties.`);
  return e;
}
function Pe() {
  if (j) {
    o.players.forEach((t, e, s) => {
      t.playerMove();
    }), De(), o.levelAnimate(d), d.position.x = o.players[B(o.players)].player.position.x, d.position.y = 3, d.position.z = 15, d.lookAt(d.position.x, d.position.y - 2, 0), o.players.forEach((t, e, s) => {
      w(t.player, o.topPlanes) ? t.player.userData.onGround = true : t.player.userData.onGround = false;
    }), I.drainCollisionEvents((t, e, s) => {
      allWallBodyCollision.forEach((a, i) => {
        e == a.handle;
      });
    }), F.update();
    for (let t = 0, e = y.dynamicBodies.length; t < e; t++) y.dynamicBodies[t][0].position.copy(y.dynamicBodies[t][1].translation()), y.dynamicBodies[t][0].quaternion.copy(y.dynamicBodies[t][1].rotation());
    S.step(I), c.render(l, d);
  }
}
c.setAnimationLoop(() => {
  v += we.getDelta(), v > T && (Pe(), c.render(l, d), v = v % T);
});
window.addEventListener("keydown", V);
window.addEventListener("keyup", K);
window.addEventListener("mousedown", V);
window.addEventListener("mouseup", K);
document.addEventListener("touchend", Le);
document.addEventListener("touchstart", be);
function be(t) {
  let e = c.domElement.getBoundingClientRect();
  t = t.changedTouches[0], m.x = (t.clientX - e.left) / e.width * 2 - 1, m.y = -((t.clientY - e.top) / e.height) * 2 + 1, G.setFromCamera(m, d), m.x > 0 ? A(o.players[0].player) : A(o.players[1].player);
}
function Le(t) {
  let e = c.domElement.getBoundingClientRect();
  t = t.changedTouches[0], m.x = (t.clientX - e.left) / e.width * 2 - 1, m.y = -((t.clientY - e.top) / e.height) * 2 + 1, G.setFromCamera(m, d), m.x > 0 ? P(o.players[0].player) : P(o.players[1].player);
}
function V(t) {
  switch (t.code) {
    case void 0:
      t instanceof MouseEvent && A(o.players[0].player);
      break;
    case "KeyW":
    case "ArrowUp":
      break;
    case "KeyZ":
    case "ArrowDown":
      A(o.players[1].player);
      break;
    case "KeyM":
    case "ArrowLeft":
      A(o.players[2].player);
      break;
  }
}
function K(t) {
  switch (t.code) {
    case void 0:
      P(o.players[0].player);
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
function A(t) {
  (t.userData.onGround || t.userData.canFly) && (t.userData.readyJump = true, t.userData.audio[0].play());
}
function P(t) {
  t.userData.readyJump && t.userData.onGround ? (t.userData.jumping = true, t.userData.readyJump = false, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = false) : t.userData.onGround || (t.userData.canFly ? (t.userData.jumping = true, t.userData.readyJump = false, t.userData.audio[0].stop(), t.userData.audio[1].isPlaying || t.userData.audio[1].play(), t.userData.onGround = false, t.userData.hatBoost--, t.userData.hatBoost == 0 && (t.userData.canFly = false, o.boostHatModels[t.userData.numHatBoost].fly = false)) : (t.userData.readyJump = false, t.userData.audio[0].stop()));
}

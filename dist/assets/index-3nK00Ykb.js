import { M as x, B as g, a as T, b as H, G as X, T as U, c as Y, R as L, d as _, V as I, A as Z, e as Q, P as J, S as $, C as j, f as ee, g as te, W as ae, h as ie, i as se, H as oe, D as ne, O as re, j as le, k as de, l as pe } from "./three-BErVoyd7.js";
import { O as D } from "./@dimforge-D3Mqfikn.js";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const s of document.querySelectorAll('link[rel="modulepreload"]')) i(s);
  new MutationObserver((s) => {
    for (const o of s) if (o.type === "childList") for (const r of o.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: true, subtree: true });
  function a(s) {
    const o = {};
    return s.integrity && (o.integrity = s.integrity), s.referrerPolicy && (o.referrerPolicy = s.referrerPolicy), s.crossOrigin === "use-credentials" ? o.credentials = "include" : s.crossOrigin === "anonymous" ? o.credentials = "omit" : o.credentials = "same-origin", o;
  }
  function i(s) {
    if (s.ep) return;
    s.ep = true;
    const o = a(s);
    fetch(s.href, o);
  }
})();
function S(t, e) {
  return Math.random() * (e - t) + t;
}
function he() {
  let t = window.matchMedia || window.msMatchMedia;
  return t ? t("(pointer:coarse)").matches : false;
}
class z {
  constructor(e) {
    this.audioClass = e, this.playerHeight = 0.5, this.playerWidth = 0.3, this.player = new x(new g(this.playerWidth, this.playerHeight, this.playerWidth), new T({ color: 16711680, transparent: true, opacity: 0 })), this.player.material.depthWrite = false, this.player.rotation.y = Math.PI, this.player.position.y = 2, this.player.userData.name = "player", this.player.userData.readyJump = false, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = false, this.player.userData.audio = [], this.playerModel, this.playerOut = new x(new g(this.playerWidth, this.playerHeight + 0.1, this.playerWidth1), new H({ color: 16776960, transparent: true, opacity: 0 })), this.playerOut.material.depthWrite = false, this.playerOut.userData.id = this.player.uuid, this.leftHand, this.rightHand, this.head, this.headPosition;
  }
  async loadPlayerModel() {
    await new X().loadAsync("models/players/player1.glb").then((i) => {
      const s = i.scene;
      this.playerModel = s, this.playerModel.traverse(function(o) {
        o.isMesh && (o.castShadow = true);
      }), this.playerModel.children[0].traverse(function(o) {
        o.isMesh && (o.castShadow = true);
      }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 0.6, this.playerModel.scale.y = 0.6, this.playerModel.scale.z = 0.6;
    });
  }
  playerMove() {
    this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation);
    const e = this.player.userData.readyJump ? Math.PI / 2 : 0, a = this.player.userData.readyJump ? -Math.PI / 2 : 0, i = this.player.userData.readyJump ? Math.PI / 8 : 0, s = this.player.userData.readyJump ? 0.75 : 1.18, o = this.player.userData.readyJump ? 0.75 : 0.15;
    this.player.userData.readyJump ? this.player.position.x - 1.25 : this.player.position.x, this.player.userData.readyJump ? this.player.position.y + 0.75 : this.player.position.y - this.playerHeight / 2, this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, 0.1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, 0.1), this.head.rotation.x = this.lerp(this.head.rotation.x, i, 0.1), this.head.position.y = this.lerp(this.head.position.y, s, 0.1), this.head.position.z = this.lerp(this.head.position.z, o, 0.1);
    const r = this.player.userData.readyJump ? 0.7 : 0;
    this.player.userData.body.setRotation({ w: this.player.userData.body.rotation().w, x: this.lerp(this.player.userData.body.rotation().x, r, 0.1), y: this.player.userData.body.rotation().y, z: this.player.userData.body.rotation().z }), this.player.userData.readyJump && this.player.userData.playerPowerJump < 8 && (this.player.userData.playerPowerJump += 0.2), this.player.userData.jumping && (this.player.userData.body.applyImpulse({ x: this.player.userData.playerPowerJump / 3, y: this.player.userData.playerPowerJump / 1.4, z: 0 }, true), this.player.userData.playerPowerJump = 1, this.player.userData.jumping = false);
  }
  lerp(e, a, i) {
    return e + (a - e) * i;
  }
}
class ue {
  constructor() {
    this.planeWidth = 4, this.planeHeight = 10, this.geometryPlane = new g(this.planeWidth, this.planeHeight, 1), this.materialPlane = new H({ color: 52224 }), this.plane = new x(this.geometryPlane, this.materialPlane), this.plane.receiveShadow = true, this.plane.position.y = -this.planeHeight / 2, this.plane.userData.name = "plane", this.planes = [], this.planeTop = new x(new g(this.geometryPlane.parameters.width, 0.2, 0.2), new H({ color: 13421568, transparent: true, opacity: 0 })), this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.topPlanes = [], this.planeGrass = new x(new g(this.geometryPlane.parameters.width, 0.2, 1.2), new T({ color: 52224, transparent: true, opacity: 1 })), this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.planeGrass.castShadow = true, this.planeGrass.receiveShadow = true, this.planeGrass.userData.name = "plane", this.grassPlanes = [];
  }
  async createLevel() {
    let e = -4.5;
    for (let a = 0; a < 50; a++) {
      let i = this.plane.clone(), s = this.planeTop.clone(), o = this.planeGrass.clone();
      const r = new U();
      r.load("textures/ground.jpg", (h) => {
        const B = new Y({ map: h });
        h.wrapS = L, h.wrapT = L, h.repeat.set(this.planeWidth / 2, this.planeHeight / 4), i.material = B;
      }, void 0, function(h) {
        console.error("An error happened.");
      }), r.load("textures/grass.jpg", (h) => {
        const B = new H({ map: h });
        h.wrapS = L, h.wrapT = L, h.repeat.set(this.planeWidth / 1, this.planeHeight / 8), o.material = B;
      }, void 0, function(h) {
        console.error("An error happened.");
      });
      let u = S(this.planeWidth / 2, this.planeWidth), q = S(2, 4), A = e + u / 2 + q, E = S(-1, 1) - this.planeHeight / 2;
      this.changeMeshWidth(i, u), this.changeMeshWidth(s, u + 0.3), this.changeMeshWidth(o, u + 0.3), i.position.x = A, i.position.y = E, s.position.x = A, s.position.y = E + this.planeHeight / 2 + 0.1, o.position.x = A, o.position.y = E + this.planeHeight / 2, this.planes.push(i), this.topPlanes.push(s), this.grassPlanes.push(o), e = A + u / 2;
    }
  }
  changeMeshWidth(e, a) {
    e.geometry.dispose(), e.geometry = new g(a, e.geometry.parameters.height, e.geometry.parameters.depth);
  }
}
class ce {
  constructor(e, a) {
    this.world = e, this.RAPIER = a, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [];
  }
  addPhysicsToObject(e) {
    let a, i;
    const s = e.rotation.clone();
    e.rotation.set(0, 0, 0);
    const r = new _().setFromObject(e).getSize(new I());
    if (e.rotation.copy(s), e.userData.name.includes("player")) {
      e.userData.size = r, e.userData.orgRotation = s, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(r.x / 2, r.y / 2, r.z / 2).setMass(0.6).setRestitution(0).setFriction(0.4), e.userData.body = a, e.userData.shape = i;
      let u = a;
      i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), this.world.createCollider(i, a), e.userData.handle = u.handle.toString(), this.playersHandles.push(u.handle), this.dynamicBodies.push([e, a, e.id]);
    } else if (e.userData.name.includes("plane")) {
      e.userData.size = r, e.userData.orgRotation = s, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), i = this.RAPIER.ColliderDesc.cuboid(r.x / 2, r.y / 2, r.z / 2).setMass(1).setRestitution(0).setFriction(0.3), i.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let u = this.world.createCollider(i, a);
      this.allWallBodyCollision.push(u), e.userData.handle = a.handle, this.dynamicBodies.push([e, a, e.id]);
    }
  }
}
class ye {
  constructor() {
    this.readyJumpAudio, this.jumpAudio;
  }
  async loadAudio() {
    const e = new Z(), a = new Q();
    await a.loadAsync("audio/ready-jump.wav").then((i) => {
      this.readyJumpAudio = new J(e), this.readyJumpAudio.setBuffer(i), this.readyJumpAudio.setLoop(false), this.readyJumpAudio.setRefDistance(400), this.readyJumpAudio.setVolume(3), this.readyJumpAudio.setPlaybackRate(2);
    }).catch((i) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", i);
    }), await a.loadAsync("audio/quack.mp3").then((i) => {
      this.jumpAudio = new J(e), this.jumpAudio.setBuffer(i), this.jumpAudio.setLoop(false), this.jumpAudio.setRefDistance(400), this.jumpAudio.setVolume(3);
    }).catch((i) => {
      console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0430\u0443\u0434\u0438\u043E:", i);
    });
  }
}
console.clear();
let b, G = false, R = 0, O = 1 / 60, fe = new de(), m = new I(), k = new pe();
const p = new $();
p.background = new j(13230580);
const l = new ee(25, window.innerWidth / window.innerHeight, 0.1, 2e3);
l.position.z = 7;
l.position.y = 2;
he();
let K = new te();
document.body.appendChild(K.dom);
const y = new ae();
y.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(y.domElement);
y.shadowMap.enabled = true;
y.shadowMap.type = ie;
window.addEventListener("resize", me, false);
function me() {
  l.aspect = window.innerWidth / window.innerHeight, l.updateProjectionMatrix(), y.setSize(window.innerWidth, window.innerHeight);
}
new se(11184810, 1);
const C = new oe(16777215, 16777215, 2);
C.color.setHSL(0.6, 1, 0.6);
C.groundColor.setHSL(0.095, 1, 0.75);
C.position.set(0, 10, 0);
p.add(C);
const d = new ne(16777215, 2);
d.color.setHSL(0.1, 1, 0.95);
d.position.set(0, 5, 5);
d.castShadow = true;
d.shadow.camera.far = 10;
p.add(d);
const F = new re();
p.add(F);
d.target = F;
new le(d, 3);
function we() {
  d.target.position.set(n[W(n)].player.position.x - 4, -20, -10), d.position.set(n[W(n)].player.position.x, n[W(n)].player.position.y + 2, n[1].player.position.z);
  const t = 10;
  d.shadow.camera.left = -t, d.shadow.camera.right = t, d.shadow.camera.top = t, d.shadow.camera.bottom = -t;
}
let v, n = [], f, c, w;
async function ge() {
  await D.init(), b = new D.World(new D.Vector3(0, -9.81, 0)), v = new D.EventQueue(true), w = new ye(), await w.loadAudio(), f = new ce(b, D), c = new ue(), n.push(new z(w)), n.push(new z(w));
  const t = [15904944, 11596464, 16052346, 11579634];
  for (let e = 0; e < n.length; e++) {
    let a = n[e];
    f.addPhysicsToObject(a.player), await a.loadPlayerModel(), p.add(a.player), p.add(a.playerOut), p.add(a.playerModel), c.topPlanes.push(a.playerOut), p.add(a.playerModel), e < t.length ? a.head.children[0].material.color.set(t[e]) : t.splice(t.length, 0, ...t), a.player.userData.audio.push(w.readyJumpAudio.clone()), a.player.userData.audio.push(w.jumpAudio.clone());
  }
  G = true;
}
async function De() {
  await c.createLevel();
  for (let t = 0; t < c.planes.length; t++) p.add(c.planes[t]), f.addPhysicsToObject(c.planes[t]), p.add(c.grassPlanes[t]), f.addPhysicsToObject(c.grassPlanes[t]), p.add(c.topPlanes[t]);
}
async function xe() {
}
async function Pe() {
  await ge(), await De(), await xe();
}
Pe();
function W(t) {
  if (t.length === 0) return -1;
  let e = 0, a = t[0].player.position.x;
  for (let i = 1; i < t.length; i++) t[i].player && t[i].player.position ? t[i].player.position.x > a && (a = t[i].player.position.x, e = i) : console.warn(`Player at index ${i} is missing player or position properties.`);
  return e;
}
function Me() {
  if (G) {
    n.forEach((t, e, a) => {
      t.playerMove();
    }), we(), l.position.x = n[W(n)].player.position.x, l.position.y = 3, l.position.z = 15, l.lookAt(l.position.x, l.position.y - 2, 0), n.forEach((t, e, a) => {
      Re(t.player, c.topPlanes) ? t.player.userData.onGround = true : t.player.userData.onGround = false;
    }), v.drainCollisionEvents((t, e, a) => {
      allWallBodyCollision.forEach((i, s) => {
        e == i.handle;
      });
    }), K.update();
    for (let t = 0, e = f.dynamicBodies.length; t < e; t++) f.dynamicBodies[t][0].position.copy(f.dynamicBodies[t][1].translation()), f.dynamicBodies[t][0].quaternion.copy(f.dynamicBodies[t][1].rotation());
    b.step(v), y.render(p, l);
  }
}
y.setAnimationLoop(() => {
  R += fe.getDelta(), R > O && (Me(), y.render(p, l), R = R % O);
});
window.addEventListener("keydown", N);
window.addEventListener("keyup", V);
window.addEventListener("mousedown", N);
window.addEventListener("mouseup", V);
document.addEventListener("touchend", Le);
document.addEventListener("touchstart", Ae);
function Ae(t) {
  let e = y.domElement.getBoundingClientRect();
  t = t.changedTouches[0], m.x = (t.clientX - e.left) / e.width * 2 - 1, m.y = -((t.clientY - e.top) / e.height) * 2 + 1, k.setFromCamera(m, l), m.x > 0 ? P(n[0].player) : P(n[1].player);
}
function Le(t) {
  let e = y.domElement.getBoundingClientRect();
  t = t.changedTouches[0], m.x = (t.clientX - e.left) / e.width * 2 - 1, m.y = -((t.clientY - e.top) / e.height) * 2 + 1, k.setFromCamera(m, l), m.x > 0 ? M(n[0].player) : M(n[1].player);
}
function N(t) {
  switch (t.code) {
    case void 0:
      P(n[0].player);
      break;
    case "KeyW":
    case "ArrowUp":
      break;
    case "KeyZ":
    case "ArrowDown":
      P(n[1].player);
      break;
    case "KeyM":
    case "ArrowLeft":
      P(n[2].player);
      break;
  }
}
function V(t) {
  switch (t.code) {
    case void 0:
      M(n[0].player);
      break;
    case "KeyW":
    case "ArrowUp":
      break;
    case "KeyZ":
    case "ArrowDown":
      M(n[1].player);
      break;
    case "KeyM":
    case "ArrowLeft":
      M(n[2].player);
      break;
  }
}
function P(t) {
  t.userData.onGround && (t.userData.readyJump = true, t.userData.audio[0].play());
}
function M(t) {
  t.userData.readyJump && t.userData.onGround ? (t.userData.jumping = true, t.userData.readyJump = false, t.userData.audio[0].stop(), t.userData.audio[1].play(), t.userData.onGround = false) : t.userData.onGround || (t.userData.readyJump = false, t.userData.audio[0].stop());
}
function Re(t, e) {
  t.geometry.computeBoundingBox(), e.forEach(function(s, o, r) {
    s.geometry.computeBoundingBox();
  }), t.updateMatrixWorld(), e.forEach(function(s, o, r) {
    s.updateMatrixWorld();
  });
  let a = t.geometry.boundingBox.clone();
  a.applyMatrix4(t.matrixWorld);
  var i = false;
  for (let s = e.length - 1; s > -1; s--) if (e[s].userData.id == null || e[s].userData.id != t.uuid) {
    let o = e[s].geometry.boundingBox.clone();
    o.applyMatrix4(e[s].matrixWorld), o.intersectsBox(a) && (i = e[s]);
  }
  return i;
}

import { M as D, B as w, a as z, b as H, G as N, T as k, c as V, R as L, d as X, V as O, S as q, C as U, P as Y, e as _, W as Z, f as Q, A as $, H as j, D as ee, O as te, g as ae, h as ie } from "./three-YMJBMX3p.js";
import { O as g } from "./@dimforge-D3Mqfikn.js";
(function() {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const n of i) if (n.type === "childList") for (const r of n.addedNodes) r.tagName === "LINK" && r.rel === "modulepreload" && s(r);
  }).observe(document, { childList: true, subtree: true });
  function a(i) {
    const n = {};
    return i.integrity && (n.integrity = i.integrity), i.referrerPolicy && (n.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? n.credentials = "include" : i.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin", n;
  }
  function s(i) {
    if (i.ep) return;
    i.ep = true;
    const n = a(i);
    fetch(i.href, n);
  }
})();
function B(t, e) {
  return Math.random() * (e - t) + t;
}
function se() {
  let t = window.matchMedia || window.msMatchMedia;
  return t ? t("(pointer:coarse)").matches : false;
}
class b {
  constructor() {
    this.playerHeight = 0.5, this.playerWidth = 0.3, this.player = new D(new w(this.playerWidth, this.playerHeight, this.playerWidth), new z({ color: 16711680, transparent: true, opacity: 0 })), this.player.material.depthWrite = false, this.player.rotation.y = Math.PI, this.player.position.y = 2, this.player.userData.name = "player", this.player.userData.readyJump = false, this.player.userData.jumping = false, this.player.userData.playerPowerJump = 1, this.player.userData.body = 0, this.player.userData.onGround = false, this.playerModel, this.playerOut = new D(new w(this.playerWidth, this.playerHeight + 0.1, this.playerWidth1), new H({ color: 16776960, transparent: true, opacity: 0 })), this.playerOut.material.depthWrite = false, this.playerOut.userData.id = this.player.uuid, this.leftHand, this.rightHand, this.head, this.headPosition;
  }
  async loadPlayerModel() {
    await new N().loadAsync("models/players/player1.glb").then((s) => {
      const i = s.scene;
      this.playerModel = i, this.playerModel.traverse(function(n) {
        n.isMesh && (n.castShadow = true);
      }), this.playerModel.children[0].traverse(function(n) {
        n.isMesh && (n.castShadow = true);
      }), this.leftHand = this.playerModel.children[0].children[1], this.rightHand = this.playerModel.children[0].children[0], this.head = this.playerModel.children[0].children[2], this.playerModel.rotation.y = Math.PI, this.playerModel.scale.x = 0.6, this.playerModel.scale.y = 0.6, this.playerModel.scale.z = 0.6;
    });
  }
  playerMove() {
    this.playerModel.position.x = this.player.position.x, this.playerModel.position.y = this.player.position.y - this.playerHeight / 2, this.playerModel.position.z = this.player.position.z, this.playerOut.position.copy(this.player.position), this.playerOut.rotation.copy(this.player.rotation);
    const e = this.player.userData.readyJump ? Math.PI / 2 : 0, a = this.player.userData.readyJump ? -Math.PI / 2 : 0, s = this.player.userData.readyJump ? Math.PI / 8 : 0, i = this.player.userData.readyJump ? 0.75 : 1.18, n = this.player.userData.readyJump ? 0.75 : 0.15;
    this.player.userData.readyJump ? this.player.position.x - 1.25 : this.player.position.x, this.player.userData.readyJump ? this.player.position.y + 0.75 : this.player.position.y - this.playerHeight / 2, this.rightHand.rotation.z = this.lerp(this.rightHand.rotation.z, e, 0.1), this.leftHand.rotation.z = this.lerp(this.leftHand.rotation.z, a, 0.1), this.head.rotation.x = this.lerp(this.head.rotation.x, s, 0.1), this.head.position.y = this.lerp(this.head.position.y, i, 0.1), this.head.position.z = this.lerp(this.head.position.z, n, 0.1);
    const r = this.player.userData.readyJump ? 0.7 : 0;
    this.player.userData.body.setRotation({ w: this.player.userData.body.rotation().w, x: this.lerp(this.player.userData.body.rotation().x, r, 0.1), y: this.player.userData.body.rotation().y, z: this.player.userData.body.rotation().z }), this.player.userData.readyJump && this.player.userData.playerPowerJump < 8 && (this.player.userData.playerPowerJump += 0.2), this.player.userData.jumping && (this.player.userData.body.applyImpulse({ x: this.player.userData.playerPowerJump / 3, y: this.player.userData.playerPowerJump / 1.4, z: 0 }, true), this.player.userData.playerPowerJump = 1, this.player.userData.jumping = false);
  }
  lerp(e, a, s) {
    return e + (a - e) * s;
  }
}
class ne {
  constructor() {
    this.planeWidth = 4, this.planeHeight = 10, this.geometryPlane = new w(this.planeWidth, this.planeHeight, 1), this.materialPlane = new H({ color: 52224 }), this.plane = new D(this.geometryPlane, this.materialPlane), this.plane.receiveShadow = true, this.plane.position.y = -this.planeHeight / 2, this.plane.userData.name = "plane", this.planes = [], this.planeTop = new D(new w(this.geometryPlane.parameters.width, 0.2, 0.2), new H({ color: 13421568, transparent: true, opacity: 0 })), this.planeTop.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.topPlanes = [], this.planeGrass = new D(new w(this.geometryPlane.parameters.width, 0.2, 1.2), new z({ color: 52224, transparent: true, opacity: 1 })), this.planeGrass.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1, this.planeGrass.castShadow = true, this.planeGrass.receiveShadow = true, this.planeGrass.userData.name = "plane", this.grassPlanes = [];
  }
  async createLevel() {
    let e = -4.5;
    for (let a = 0; a < 50; a++) {
      let s = this.plane.clone(), i = this.planeTop.clone(), n = this.planeGrass.clone();
      const r = new k();
      r.load("textures/ground.jpg", (h) => {
        const C = new V({ map: h });
        h.wrapS = L, h.wrapT = L, h.repeat.set(this.planeWidth / 2, this.planeHeight / 4), s.material = C;
      }, void 0, function(h) {
        console.error("An error happened.");
      }), r.load("textures/grass.jpg", (h) => {
        const C = new H({ map: h });
        h.wrapS = L, h.wrapT = L, h.repeat.set(this.planeWidth / 1, this.planeHeight / 8), n.material = C;
      }, void 0, function(h) {
        console.error("An error happened.");
      });
      let c = B(this.planeWidth / 2, this.planeWidth), F = B(2, 4), P = e + c / 2 + F, E = B(-1, 1) - this.planeHeight / 2;
      this.changeMeshWidth(s, c), this.changeMeshWidth(i, c + 0.3), this.changeMeshWidth(n, c + 0.3), s.position.x = P, s.position.y = E, i.position.x = P, i.position.y = E + this.planeHeight / 2 + 0.1, n.position.x = P, n.position.y = E + this.planeHeight / 2, this.planes.push(s), this.topPlanes.push(i), this.grassPlanes.push(n), e = P + c / 2;
    }
  }
  changeMeshWidth(e, a) {
    e.geometry.dispose(), e.geometry = new w(a, e.geometry.parameters.height, e.geometry.parameters.depth);
  }
}
class oe {
  constructor(e, a) {
    this.world = e, this.RAPIER = a, this.dynamicBodies = [], this.allWallBodyCollision = [], this.playersHandles = [];
  }
  addPhysicsToObject(e) {
    let a, s;
    const i = e.rotation.clone();
    e.rotation.set(0, 0, 0);
    const r = new X().setFromObject(e).getSize(new O());
    if (e.rotation.copy(i), e.userData.name.includes("player")) {
      e.userData.size = r, e.userData.orgRotation = i, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(r.x / 2, r.y / 2, r.z / 2).setMass(0.6).setRestitution(0).setFriction(0.4), e.userData.body = a, e.userData.shape = s;
      let c = a;
      s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS), this.world.createCollider(s, a), e.userData.handle = c.handle.toString(), this.playersHandles.push(c.handle), this.dynamicBodies.push([e, a, e.id]);
    } else if (e.userData.name.includes("plane")) {
      e.userData.size = r, e.userData.orgRotation = i, a = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(e.position.x, e.position.y, e.position.z).setRotation(e.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2)), s = this.RAPIER.ColliderDesc.cuboid(r.x / 2, r.y / 2, r.z / 2).setMass(1).setRestitution(0).setFriction(0.3), s.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
      let c = this.world.createCollider(s, a);
      this.allWallBodyCollision.push(c), e.userData.handle = a.handle, this.dynamicBodies.push([e, a, e.id]);
    }
  }
}
console.clear();
let S, v = false, m = new O(), T = new ie();
const d = new q();
d.background = new U(13230580);
const l = new Y(25, window.innerWidth / window.innerHeight, 0.1, 2e3);
l.position.z = 7;
l.position.y = 2;
se();
let J = new _();
document.body.appendChild(J.dom);
const f = new Z();
f.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(f.domElement);
f.shadowMap.enabled = true;
f.shadowMap.type = Q;
window.addEventListener("resize", re, false);
function re() {
  l.aspect = window.innerWidth / window.innerHeight, l.updateProjectionMatrix(), f.setSize(window.innerWidth, window.innerHeight);
}
new $(11184810, 1);
const W = new j(16777215, 16777215, 2);
W.color.setHSL(0.6, 1, 0.6);
W.groundColor.setHSL(0.095, 1, 0.75);
W.position.set(0, 10, 0);
d.add(W);
const p = new ee(16777215, 2);
p.color.setHSL(0.1, 1, 0.95);
p.position.set(0, 5, 5);
p.castShadow = true;
p.shadow.camera.far = 10;
d.add(p);
const I = new te();
d.add(I);
p.target = I;
new ae(p, 3);
function le() {
  p.target.position.set(o[R(o)].player.position.x - 4, -20, -10), p.position.set(o[R(o)].player.position.x, o[R(o)].player.position.y + 2, o[1].player.position.z);
  const t = 10;
  p.shadow.camera.left = -t, p.shadow.camera.right = t, p.shadow.camera.top = t, p.shadow.camera.bottom = -t;
}
let A, o = [], u, y;
async function pe() {
  await g.init(), S = new g.World(new g.Vector3(0, -9.81, 0)), A = new g.EventQueue(true), u = new oe(S, g), y = new ne(), o.push(new b()), o.push(new b());
  const t = [15904944, 11596464, 16052346, 11579634];
  for (let e = 0; e < o.length; e++) {
    let a = o[e];
    u.addPhysicsToObject(a.player), await a.loadPlayerModel(), d.add(a.player), d.add(a.playerOut), d.add(a.playerModel), y.topPlanes.push(a.playerOut), d.add(a.playerModel), e < t.length ? a.head.children[0].material.color.set(t[e]) : t.splice(t.length, 0, ...t);
  }
  v = true;
}
async function de() {
  await y.createLevel();
  for (let t = 0; t < y.planes.length; t++) d.add(y.planes[t]), u.addPhysicsToObject(y.planes[t]), d.add(y.grassPlanes[t]), u.addPhysicsToObject(y.grassPlanes[t]), d.add(y.topPlanes[t]);
}
async function he() {
}
async function ce() {
  await pe(), await de(), await he();
}
ce();
function R(t) {
  if (t.length === 0) return -1;
  let e = 0, a = t[0].player.position.x;
  for (let s = 1; s < t.length; s++) t[s].player && t[s].player.position ? t[s].player.position.x > a && (a = t[s].player.position.x, e = s) : console.warn(`Player at index ${s} is missing player or position properties.`);
  return e;
}
function ye() {
  if (v) {
    o.forEach((t, e, a) => {
      t.playerMove();
    }), le(), l.position.x = o[R(o)].player.position.x, l.position.y = 3, l.position.z = 15, l.lookAt(l.position.x, l.position.y - 2, 0), o.forEach((t, e, a) => {
      me(t.player, y.topPlanes) ? t.player.userData.onGround = true : t.player.userData.onGround = false;
    }), A.drainCollisionEvents((t, e, a) => {
      allWallBodyCollision.forEach((s, i) => {
        e == s.handle;
      });
    }), J.update();
    for (let t = 0, e = u.dynamicBodies.length; t < e; t++) u.dynamicBodies[t][0].position.copy(u.dynamicBodies[t][1].translation()), u.dynamicBodies[t][0].quaternion.copy(u.dynamicBodies[t][1].rotation());
    S.step(A), f.render(d, l);
  }
}
f.setAnimationLoop(ye);
window.addEventListener("keydown", G);
window.addEventListener("keyup", K);
window.addEventListener("mousedown", G);
window.addEventListener("mouseup", K);
document.addEventListener("touchend", fe);
document.addEventListener("touchstart", ue);
function ue(t) {
  let e = f.domElement.getBoundingClientRect();
  t = t.changedTouches[0], m.x = (t.clientX - e.left) / e.width * 2 - 1, m.y = -((t.clientY - e.top) / e.height) * 2 + 1, T.setFromCamera(m, l), m.x > 0 ? x(o[0].player) : x(o[1].player);
}
function fe(t) {
  let e = f.domElement.getBoundingClientRect();
  t = t.changedTouches[0], m.x = (t.clientX - e.left) / e.width * 2 - 1, m.y = -((t.clientY - e.top) / e.height) * 2 + 1, T.setFromCamera(m, l), m.x > 0 ? M(o[0].player) : M(o[1].player);
}
function G(t) {
  switch (t.code) {
    case void 0:
      x(o[0].player);
      break;
    case "KeyW":
    case "ArrowUp":
      break;
    case "KeyZ":
    case "ArrowDown":
      x(o[1].player);
      break;
    case "KeyM":
    case "ArrowLeft":
      x(o[2].player);
      break;
  }
}
function K(t) {
  switch (t.code) {
    case void 0:
      M(o[0].player);
      break;
    case "KeyW":
    case "ArrowUp":
      break;
    case "KeyZ":
    case "ArrowDown":
      M(o[1].player);
      break;
    case "KeyM":
    case "ArrowLeft":
      M(o[2].player);
      break;
  }
}
function x(t) {
  t.userData.onGround && (t.userData.readyJump = true);
}
function M(t) {
  t.userData.readyJump && t.userData.onGround ? (t.userData.jumping = true, t.userData.readyJump = false, t.userData.onGround = false) : t.userData.onGround || (t.userData.readyJump = false);
}
function me(t, e) {
  t.geometry.computeBoundingBox(), e.forEach(function(i, n, r) {
    i.geometry.computeBoundingBox();
  }), t.updateMatrixWorld(), e.forEach(function(i, n, r) {
    i.updateMatrixWorld();
  });
  let a = t.geometry.boundingBox.clone();
  a.applyMatrix4(t.matrixWorld);
  var s = false;
  for (let i = e.length - 1; i > -1; i--) if (e[i].userData.id == null || e[i].userData.id != t.uuid) {
    let n = e[i].geometry.boundingBox.clone();
    n.applyMatrix4(e[i].matrixWorld), n.intersectsBox(a) && (s = e[i]);
  }
  return s;
}

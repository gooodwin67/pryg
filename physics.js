import * as THREE from "three";

export class PhysicsClass {
 constructor(world, RAPIER) {
  this.world = world;
  this.RAPIER = RAPIER;

  this.dynamicBodies = [];
  this.allWallBodyCollision = [];
  this.playersHandles = [];

  this.allTops = [];

 }




 addPhysicsToObject(obj) {
  let body;
  let shape;

  const originalRotation = obj.rotation.clone();
  obj.rotation.set(0, 0, 0);
  const box = new THREE.Box3().setFromObject(obj);
  const size = getMeshSizeIgnoringChildren(obj);
  obj.rotation.copy(originalRotation);

  if (obj.userData.name.includes('player')) {

   obj.userData.size = size;
   obj.userData.orgRotation = originalRotation;

   body = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.dynamic().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2.0));
   shape = this.RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2)
    .setMass(0.6)
    .setRestitution(0)
    .setFriction(0.4)
    .setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);

   obj.userData.body = body;
   obj.userData.shape = shape;

   let playerBody = body;
   let playerShape = shape;
   shape.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);

   let playerCollider = this.world.createCollider(shape, body)

   obj.userData.collider = playerCollider;

   obj.userData.handle = playerBody.handle;
   this.playersHandles.push(playerBody.handle)

   this.dynamicBodies.push([obj, body, obj.id])


   // const geometry = new THREE.BoxGeometry(size.x, size.y, size.z);
   // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5, wireframe: true });
   // const cube = new THREE.Mesh(geometry, material);
   // cube.position.set(obj.position.x, obj.position.y, obj.position.z)
   // cube.rotation.copy(originalRotation);
   // scene.add(cube);

  }
  else if (obj.userData.name.includes('plane')) {

   obj.userData.size = size;
   obj.userData.orgRotation = originalRotation;

   body = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2.0));
   shape = this.RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2).setMass(10).setRestitution(0.0).setFriction(0.3);
   shape.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
   let collide = this.world.createCollider(shape, body)
   this.allWallBodyCollision.push(collide);
   obj.userData.handle = body.handle;
   this.dynamicBodies.push([obj, body, obj.id])


  }
  else if (obj.userData.name.includes('tops')) {

   obj.userData.size = size;
   obj.userData.orgRotation = originalRotation;

   body = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(obj.position.x, obj.position.y, obj.position.z).setRotation(obj.quaternion).setCanSleep(false).enabledRotations(false, false, false).setLinearDamping(0).setAngularDamping(2.0));
   shape = this.RAPIER.ColliderDesc.cuboid(size.x / 2, size.y / 2, size.z / 2).setMass(1).setRestitution(0.0).setFriction(0.3);
   shape.setActiveEvents(this.RAPIER.ActiveEvents.COLLISION_EVENTS);
   let collide = this.world.createCollider(shape, body);
   obj.userData.body = body;
   obj.userData.collide = collide;
   this.allWallBodyCollision.push(collide);
   obj.userData.handle = body.handle;
   this.dynamicBodies.push([obj, body, obj.id])

   obj.userData.playerHandlesInside = new Set();
   this.allTops.push(obj);
  }
 }

}

const _tmpSize = new THREE.Vector3();

function getMeshSizeIgnoringChildren(obj) {
  // Если это Mesh с геометрией — берём только её bbox
  if (obj.isMesh && obj.geometry) {
    const geom = obj.geometry;
    if (!geom.boundingBox) geom.computeBoundingBox();
    const bb = geom.boundingBox; // локальный bbox
    bb.getSize(_tmpSize);
    // учитывать scale объекта
    _tmpSize.multiply(obj.scale);
    return _tmpSize.clone();
  }
  // иначе — как было (на случай групп или сложных объектов)
  const box = new THREE.Box3().setFromObject(obj);
  return box.getSize(new THREE.Vector3());
}
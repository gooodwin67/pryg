import * as THREE from "three";

export class AssetsManager {
 constructor() {

 }

 async loadTexture() {
  const loader = new THREE.TextureLoader();

  loader.load(
   'textures/plane.jpg',
   (texture) => {
    const material = new THREE.MeshStandardMaterial({
     map: texture,
     transparent: true,
     opacity: 1
    });
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(this.planeWidth / 4, this.planeHeight / 4);
    this.objs.planes.plane.material = material;
   },
   // onProgress callback currently not supported
   undefined,
   function (err) {
    console.error('An error happened.');
   }
  );

  loader.load(
   'textures/grass.jpg',
   (texture) => {
    const material = new THREE.MeshStandardMaterial({
     map: texture,

    });
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(this.planeWidth / 1, this.planeHeight / 8);
    this.objs.grassPlanes.planeGrass.material = material;
   },
   // onProgress callback currently not supported
   undefined,
   function (err) {
    console.error('An error happened.');
   }
  );

  loader.load(
   'textures/mks.png',
   (texture) => {
    const material = new THREE.MeshBasicMaterial({
     map: texture,
     transparent: true,
     opacity: 0,
    });
    // texture.wrapS = THREE.RepeatWrapping;
    // texture.wrapT = THREE.RepeatWrapping;
    // texture.repeat.set(this.mksWidth / 20, this.mksHeight / 20);
    this.mks.material = material;
   },
   // onProgress callback currently not supported
   undefined,
   function (err) {
    console.error('An error happened.');
   }
  );
 }


}
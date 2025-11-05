import * as THREE from "three";

export class AssetsManager {
 constructor() {

  this.plane = { texture: null, material: null }
  this.planeGrass = { texture: null, material: null }
  this.mks = { texture: null, material: null }


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


    this.plane.texture = texture;
    this.plane.material = material;
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


    this.planeGrass.texture = texture;
    this.planeGrass.material = material;
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

    this.mks.texture = texture;
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
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export class AssetsManager {
 constructor() {

  this.plane = { texture: null, material: null }
  this.planeGrass = { texture: null, material: null }
  this.mks = { texture: null, material: null }

  this.angryBirdModel;


  this.boostHatModel;
  this.boostHatPropeller;
  this.boostHatMesh;



 }

 async loadTexture() {
  const loader = new THREE.TextureLoader();
  const [planeTex, grassTex, mksTex] = await Promise.all([
   loader.loadAsync('textures/plane.jpg'),
   loader.loadAsync('textures/grass.jpg'),
   loader.loadAsync('textures/mks.png'),
  ]);

  this.plane.texture = planeTex;
  this.plane.material = new THREE.MeshStandardMaterial({ map: planeTex, transparent: true, opacity: 1 });

  this.planeGrass.texture = grassTex;
  this.planeGrass.material = new THREE.MeshStandardMaterial({ map: grassTex });

  this.mks.texture = mksTex;
  this.mks.material = new THREE.MeshBasicMaterial({ map: mksTex, transparent: true, opacity: 0 });
 }

 async loadModels() {
  const gltfLoader = new GLTFLoader();
  const url = 'models/bird/bird.glb';


  await gltfLoader.loadAsync(url).then((gltf) => {
   const root = gltf.scene;
   const anims = gltf.animations;

   root.scale.x = 2;
   root.scale.y = 2;
   root.scale.z = 2;
   root.position.y = 0;
   root.rotation.y = -Math.PI / 3;

   this.angryBirdModel = root;
   this.angryBirdModel.userData.mixer = new THREE.AnimationMixer(this.angryBirdModel);
   this.angryBirdModel.userData.action = this.angryBirdModel.userData.mixer.clipAction(anims[0]);
   this.angryBirdModel.userData.action.play();

   this.angryBirdModel.userData.clock = new THREE.Clock();

   const mat = this.angryBirdModel.children[0].children[0].material; // ваш MeshPhysicalMaterial
   mat.emissive.set(0xffffff);      // цвет «свечения»
   mat.emissiveIntensity = 0.1;     // яркость

  })
 }

 async loadBoostsModel() {
  const gltfLoader = new GLTFLoader();
  const url = 'models/boosts/hat.glb';


  await gltfLoader.loadAsync(url).then((gltf) => {
   const root = gltf.scene;
   this.boostHatModel = root;

   this.boostHatPropeller = this.boostHatModel.children[0].children[1]
   this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];

   // this.boostHatPropeller.children[0].material = new THREE.MeshBasicMaterial({ color: 0x000000 });

   const mat = this.boostHatPropeller.children[0].material; // ваш MeshPhysicalMaterial
   mat.emissive.set(0xffffff);      // цвет «свечения»
   mat.emissiveIntensity = 0.0;     // яркость


   this.boostHatModel.rotation.x = Math.PI / 17;
   this.boostHatModel.rotation.y = Math.PI / 2;
   this.boostHatModel.position.y = 2;
   this.boostHatModel.position.x = -40;
   this.boostHatModel.scale.x = 0.035;
   this.boostHatModel.scale.y = 0.035;
   this.boostHatModel.scale.z = 0.035;

   this.boostHatModel.userData.fly = false;
   this.boostHatModel.userData.num = 0;
  })
 }


}



import * as THREE from "three";

export class WorldClass {
  constructor(scene, camera, levelClass) {
    this.scene = scene;
    this.camera = camera;
    this.levelClass = levelClass;
    this.ambientLight = new THREE.AmbientLight(0xaaaaaa, 1); // soft white light


    this.hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 2);
    //hemiLight.color.setHSL(0.6, 0.6, 0.6);

    this.hemiLight.groundColor.setHSL(0.095, 1, 0.75);
    this.hemiLight.position.set(0, 10, 0);


    this.dirLight = new THREE.DirectionalLight(0xffffff, 2);
    //this.dirLight.color.setHSL(0.1, 1, 0.95);
    this.dirLight.position.set(0, 5, 5); // Измените позицию
    this.dirLight.castShadow = true;
    this.dirLight.shadow.camera.far = 10; // Убедитесь, что это значение достаточно велико


    this.targetObject = new THREE.Object3D();


    this.dirLight.target = this.targetObject;

    this.helper = new THREE.DirectionalLightHelper(this.dirLight, 3);




  }

  loadWorld() {
    //scene.add(ambientLight);
    this.scene.add(this.hemiLight);
    this.scene.add(this.dirLight);
    this.scene.add(this.targetObject);
    // scene.add(helper);
  }


  updateLighting() {

    this.dirLight.target.position.set(this.camera.position.x - 4, -20, 10);
    this.dirLight.position.set(this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.x, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.y + 2, this.levelClass.players[this.levelClass.maxSpeed(this.levelClass.players)].player.position.z);

    // // Обновление камеры теней
    const d = 10; // Размер камеры теней
    this.dirLight.shadow.camera.left = -d;
    this.dirLight.shadow.camera.right = d;
    this.dirLight.shadow.camera.top = d;
    this.dirLight.shadow.camera.bottom = -d;

    // dirLight.shadow.camera.far = 5000; // Убедитесь, что это значение достаточно велико
  }






}
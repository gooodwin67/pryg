import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { getRandomNumber } from './functions';

export class LevelClass {
  constructor(scene, audioClass, physicsClass, renderer, camera, isMobile, paramsClass, worldClass) {
    this.scene = scene;
    this.audioClass = audioClass;
    this.physicsClass = physicsClass;
    this.renderer = renderer;
    this.camera = camera;
    this.isMobile = isMobile;
    this.paramsClass = paramsClass;
    this.worldClass = worldClass;

    this.planeWidth = 4;
    this.planeHeight = 10;
    this.planeDepth = 1;

    this.fixedDistanceHor = { min: 2, max: 3 }
    this.fixedDistanceVert = { min: 3, max: 4 }

    this.count = 10;
    this.planes = Array.from({ length: this.count }, (_, i) => ({
      position: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      scale: new THREE.Vector3(1, 1, 1),
      size: new THREE.Vector3(1, 1, 1),
      userData: { name: 'plane', collide: null, body: null, speed: null, direction: 1 },
    }));
    this.geometryPlane = new THREE.BoxGeometry(this.planeWidth, this.planeHeight, this.planeDepth);
    this.materialPlane = new THREE.MeshPhongMaterial({ color: 0x00cc00 });

    // Создаём InstancedMesh
    this.plane = new THREE.InstancedMesh(this.geometryPlane, this.materialPlane, this.count);
    this.plane.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений

    this.plane.receiveShadow = true;
    this.plane.castShadow = true;
    this.plane.frustumCulled = false;






    this.topPlanes = Array.from({ length: this.count }, (_, i) => ({
      position: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      scale: new THREE.Vector3(1, 1, 1),
      size: new THREE.Vector3(1, 1, 1),
      userData: { name: 'topSensor', collide: null, body: null, speed: null, direction: 1 },
    }));
    this.geometryPlaneTop = new THREE.BoxGeometry(this.planeWidth, 0.4, 1.2);
    this.materialPlaneTop = new THREE.MeshStandardMaterial({ color: 0xcccc00, transparent: true, opacity: 0.0 })

    // Создаём InstancedMesh
    this.planeTop = new THREE.InstancedMesh(this.geometryPlaneTop, this.materialPlaneTop, this.count);
    this.planeTop.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.planeTop.frustumCulled = false;


    this.playerOuts = [];



    this.grassPlanes = Array.from({ length: this.count }, (_, i) => ({
      position: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      scale: new THREE.Vector3(1, 1, 1),
      size: new THREE.Vector3(1, 1, 1),
      userData: { name: 'tops', collide: null, body: null, speed: null, direction: 1 },
    }));

    this.geometryPlaneGrass = new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.5, this.planeDepth + 0.2);
    this.materialPlaneGrass = new THREE.MeshPhongMaterial({ color: 0x00cc00, transparent: true, opacity: 1 })

    // Создаём InstancedMesh
    this.planeGrass = new THREE.InstancedMesh(this.geometryPlaneGrass, this.materialPlaneGrass, this.count);
    this.planeGrass.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.planeGrass.userData.direction = 1;
    this.planeGrass.receiveShadow = true;
    this.planeGrass.castShadow = true;
    this.planeGrass.userData.name = 'tops';
    this.planeGrass.frustumCulled = false;











    this.sensorPlanes = Array.from({ length: this.count }, (_, i) => ({
      position: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      scale: new THREE.Vector3(1, 1, 1),
      size: new THREE.Vector3(1, 1, 1),
      userData: { name: 'sensor', collide: null, body: null, speed: null, direction: 1 },
    }));
    this.geometryPlaneSensor = new THREE.BoxGeometry(this.planeWidth, 0.4, 1.2);
    this.materialPlaneSensor = new THREE.MeshPhongMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 })

    // Создаём InstancedMesh
    this.planeSensor = new THREE.InstancedMesh(this.geometryPlaneSensor, this.materialPlaneSensor, this.count);
    this.planeSensor.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений


    this.planeSensor.frustumCulled = false;




    this.lamps = Array.from({ length: this.count }, (_, i) => ({
      position: new THREE.Vector3(0, 0, 0),
      rotation: new THREE.Euler(0, 0, 0),
      scale: new THREE.Vector3(1, 1, 1),
      size: new THREE.Vector3(0.1, 2, 0.1),
      userData: { name: 'lamp', light: false },
    }));
    this.lampHeight = 1;
    this.geometryLamp = new THREE.BoxGeometry(0.3, this.lampHeight, 0.3);
    this.materialLamp = new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 1.0 })

    // Создаём InstancedMesh
    this.lamp = new THREE.InstancedMesh(this.geometryLamp, this.materialLamp, this.count);
    this.lamp.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.lamp.frustumCulled = false;


    this.lightsCount = 10;
    this.lights = [];
    this.bulbs = [];

    this.lightIntensity = 25;
    this.bulbEmissiveIntensity = 0.9;




    // this.planeSensor = new THREE.Mesh(new THREE.BoxGeometry(this.geometryPlane.parameters.width, 0.4, 1.2), new THREE.MeshPhongMaterial({ color: 0x00ff00, transparent: true, opacity: 0.4 }));
    // this.planeSensor.position.y = this.plane.position.y + this.planeHeight / 2 + 0.1;
    // this.planeSensor.userData.name = 'top_sensor';

    // this.sensorPlanes = [];

    this.boostHatModel;
    this.boostHatMesh;
    this.boostHatPropeller;

    this.boostHatModels = [];
    this.boostHatMeshes = [];

    this.players = [];

    this.cloudModel;
    this.clouds = [];

    this.backModel;
    this.backModels = [];


    this.leftEdge = new THREE.Vector3(-1, 0, 0); // NDC: -1 по X (левый экран)
    this.rightEdge = new THREE.Vector3(1, 0, 0); // NDC: +1 по X (правый экран)

    this.leftEdge.unproject(camera);
    this.rightEdge.unproject(camera);

    this.bounds;
    this.getHorizontalWorldBounds()

    this.gameNum = 1;


    this.cam = {
      targetX: this.camera.position.x,
      velX: 0,             // для пружинки, если захочешь
      followBackSpeed: 12, // макс скорость назад (чтобы не "дергалось" при респауне)
      maxBackJump: 8,      // максимум, насколько цель может "откатить" за 1 кадр
    };

    this.dt = new THREE.Clock();




  }



  toVec3(v) {
    if (typeof v === "number") return new THREE.Vector3(v, v, v);
    if (v?.isVector3) return v;                          // <-- безопасная проверка
    if (v) return new THREE.Vector3(v.x ?? 1, v.y ?? 1, v.z ?? 1);
    return new THREE.Vector3(1, 1, 1);                   // <-- дефолт если size не задан
  }

  apply(i, mas, plane) {
    // 1) инвертированный базовый размер считаем ОДИН раз и кэшируем
    let invBaseSize = plane.userData.invBaseSize;
    if (!invBaseSize) {
      const geom = plane.geometry;                       // <-- используем геометрию инстанса
      geom.computeBoundingBox();
      const baseSize = new THREE.Vector3();
      geom.boundingBox.getSize(baseSize);
      invBaseSize = plane.userData.invBaseSize = new THREE.Vector3(
        1 / (baseSize.x || 1),                           // <-- защита от деления на 0
        1 / (baseSize.y || 1),
        1 / (baseSize.z || 1)
      );
    }

    // 2) dummy создадим один раз и переиспользуем
    this._dummy ||= new THREE.Object3D();
    const dummy = this._dummy;

    const it = mas[i] || {};
    const sz = this.toVec3(it.size);                     // может быть number | {x,y,z} | Vector3    

    dummy.position.copy(it.position || new THREE.Vector3());
    if (it.rotation) dummy.rotation.copy(it.rotation);   // <-- дефолт если не задано
    else dummy.rotation.set(0, 0, 0);

    // 3) size (физический) -> scale (относительно базовой геометрии)
    dummy.scale.set(sz.x * invBaseSize.x, sz.y * invBaseSize.y, sz.z * invBaseSize.z);

    dummy.updateMatrix();
    plane.setMatrixAt(i, dummy.matrix);
  }


  async loadTexture() {
    const loader = new THREE.TextureLoader();

    loader.load(
      'textures/povrezdennaa-tekstura-ili-fon.jpg',
      (texture) => {
        const material = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true,
          opacity: 1
        });
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(this.planeWidth / 4, this.planeHeight / 4);
        this.plane.material = material;
      },
      // onProgress callback currently not supported
      undefined,
      function (err) {
        console.error('An error happened.');
      }
    );

    loader.load(
      'textures/123.jpg',
      (texture) => {
        const material = new THREE.MeshStandardMaterial({
          map: texture,

        });
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(this.planeWidth / 1, this.planeHeight / 8);
        this.planeGrass.material = material;
      },
      // onProgress callback currently not supported
      undefined,
      function (err) {
        console.error('An error happened.');
      }
    );
  }

  async createLevel() {

    await this.loadTexture()
    await this.loadBoostsModel();
    await this.loadEnvironmentModel();

    this.cameraMove(this.camera);
    this.getHorizontalWorldBounds();

    switch (this.gameNum) {
      case 1:
      case 2:
        this.paramsClass.gameDir = 'hor'
        let previousX = -2.5; // Начальная позиция по оси X

        for (let i = 0; i < this.count; i++) {

          let randomW = getRandomNumber(this.planeWidth / 8, this.planeWidth - 1);
          let randomX = previousX + randomW / 2 + getRandomNumber(this.fixedDistanceHor.min, this.fixedDistanceHor.max);
          let randomY = getRandomNumber(-1.2, 1.2) - this.planeHeight / 1.5;

          if (i > 0) {
            this.planes[i].size.x = randomW;
            this.planes[i].size.y = this.planeHeight;

            this.topPlanes[i].size.x = randomW + 0.3;
            this.topPlanes[i].size.y = this.geometryPlaneTop.parameters.height;

            this.grassPlanes[i].size.x = randomW + 0.3;
            this.grassPlanes[i].size.y = this.geometryPlaneGrass.parameters.height;
            this.grassPlanes[i].size.z = this.geometryPlaneGrass.parameters.depth;

          }
          else {
            this.planes[i].size.x = this.planeWidth;
            this.planes[i].size.y = this.planeHeight;

            this.topPlanes[i].size.x = this.planeWidth + 0.3;
            this.topPlanes[i].size.y = this.geometryPlaneTop.parameters.height;


            this.grassPlanes[i].size.x = this.planeWidth + 0.3;
            this.grassPlanes[i].size.y = this.geometryPlaneTop.parameters.height;
            this.grassPlanes[i].size.z = this.geometryPlaneGrass.parameters.depth;
          }



          if (i > 0) {
            this.planes[i].position.x = randomX;
            this.planes[i].position.y = randomY + this.planeHeight / 6;

            this.topPlanes[i].position.x = randomX;
            this.topPlanes[i].position.y = randomY + this.planeHeight / 1.5 + 0.2;

            this.grassPlanes[i].position.x = randomX;
            this.grassPlanes[i].position.y = randomY + this.planeHeight / 1.5;

          }
          else {
            this.planes[i].position.x = -this.planeWidth / 2;
            this.planes[i].position.y = -this.planeHeight / 2 + 0.5;

            this.topPlanes[i].position.x = -this.planeWidth / 2;
            this.topPlanes[i].position.y = this.geometryPlaneGrass.parameters.height / 2 + 0.4;

            this.grassPlanes[i].position.x = -this.planeWidth / 2;
            this.grassPlanes[i].position.y = this.geometryPlaneGrass.parameters.height / 2 + 0.3;
          }

          this.lamps[i].position.x = this.grassPlanes[i].position.x;
          this.lamps[i].position.z = -this.planeDepth / 8;
          this.lamps[i].position.y = this.grassPlanes[i].position.y + this.grassPlanes[i].size.y / 2 + this.lampHeight - 0.2;


          if (this.lights.length < this.lightsCount) {
            const light = new THREE.PointLight(0xf7eaa8, 0, 4);
            light.position.set(this.lamps[i].position.x, this.lamps[i].position.y + 1, 1.6);
            this.lights.push(light)
            this.scene.add(light);

            const bulb = new THREE.Mesh(
              new THREE.SphereGeometry(0.3),
              new THREE.MeshStandardMaterial({ color: 0xf7eaa8, emissive: 0xf7eaa8, emissiveIntensity: 0.3 })
            );
            bulb.position.copy(new THREE.Vector3(light.position.x, light.position.y, this.lamps[i].position.z));
            this.bulbs.push(bulb)
            this.scene.add(bulb);

            this.lamps[i].userData.light = true;

          }


          this.apply(i, this.planes, this.plane);
          this.apply(i, this.topPlanes, this.planeTop);
          this.apply(i, this.grassPlanes, this.planeGrass);
          this.apply(i, this.lamps, this.lamp);
          previousX = randomX + randomW / 2;

        }


        this.plane.instanceMatrix.needsUpdate = true;
        this.planeTop.instanceMatrix.needsUpdate = true;
        this.planeGrass.instanceMatrix.needsUpdate = true;
        this.lamp.instanceMatrix.needsUpdate = true;


        this.scene.add(this.plane)
        this.scene.add(this.planeTop)
        this.scene.add(this.planeGrass)
        this.scene.add(this.lamp)


        break;

      case 3:
      case 4:

        this.paramsClass.gameDir = 'vert'
        let previousY = -5;

        for (let i = 0; i < this.count; i++) {

          let randomW = getRandomNumber(this.bounds.rightX / 2, this.bounds.rightX / 8);


          let randomY = previousY + getRandomNumber(this.fixedDistanceVert.min, this.fixedDistanceVert.max);

          this.topPlanes[i].position.y = randomY - 1.3;
          this.grassPlanes[i].position.y = randomY;
          this.sensorPlanes[i].position.y = randomY - 0.5;

          this.topPlanes[i].size.y = 0.3;
          this.grassPlanes[i].size.y = 0.7;
          this.sensorPlanes[i].size.y = 0.9;

          if (i > 0) {
            this.topPlanes[i].size.x = randomW + 0.3;
            this.grassPlanes[i].size.x = randomW + 0.3
            this.sensorPlanes[i].size.x = randomW + 0.5

          }
          else {
            this.topPlanes[i].size.x = 10;
            this.grassPlanes[i].size.x = 10;
            this.sensorPlanes[i].size.x = 10;
          }


          this.grassPlanes[i].userData.speed = getRandomNumber(4, 8) / 100;


          this.apply(i, this.topPlanes, this.planeTop);
          this.apply(i, this.grassPlanes, this.planeGrass);
          this.apply(i, this.sensorPlanes, this.planeSensor);

          previousY = randomY;

        }

        this.planeTop.instanceMatrix.needsUpdate = true;
        this.planeGrass.instanceMatrix.needsUpdate = true;
        this.planeSensor.instanceMatrix.needsUpdate = true;

        this.scene.add(this.planeTop)
        this.scene.add(this.planeGrass)
        this.scene.add(this.planeSensor)






        /*//////////////////////////////////////////////////////////////////////*/




        break;
    }
  }

  getHorizontalWorldBounds(z = 0) {
    const ndcLeft = new THREE.Vector3(-1, 0, 0.5); // левый край в NDC
    const ndcRight = new THREE.Vector3(1, 0, 0.5); // правый край в NDC

    // Преобразуем в мировые координаты
    ndcLeft.unproject(this.camera);
    ndcRight.unproject(this.camera);

    // Если платформа не на камере, проецируем на плоскость Z = нужная глубина
    if (this.camera.isPerspectiveCamera) {
      const cameraPos = this.camera.position;

      const dirLeft = ndcLeft.clone().sub(cameraPos).normalize();
      const dirRight = ndcRight.clone().sub(cameraPos).normalize();

      const distance = (z - cameraPos.z) / dirLeft.z;

      const worldLeft = cameraPos.clone().add(dirLeft.multiplyScalar(distance));
      const worldRight = cameraPos.clone().add(dirRight.multiplyScalar(distance));

      this.bounds = {
        leftX: worldLeft.x,
        rightX: worldRight.x
      };

    }

  }

  animateTops() {

    if (this.paramsClass.gameDir == 'vert') {

      for (let i = 0; i < this.grassPlanes.length; i++) {
        const grass = this.grassPlanes[i];
        const top = this.topPlanes[i];
        const sensor = this.sensorPlanes[i];
        const body = grass.userData.body;
        const speed = grass.userData.speed;

        const currentPos = body.translation();


        // Используем реальные границы экрана
        if (currentPos.x > this.bounds.rightX - grass.size.x / 2) {
          grass.userData.direction = -1;
        } else if (currentPos.x < this.bounds.leftX + grass.size.x / 2) {
          grass.userData.direction = 1;
        }

        const moveX = grass.userData.direction * speed;
        const newX = currentPos.x + moveX;


        if (i > 0) {
          body.setNextKinematicTranslation({
            x: newX,
            y: currentPos.y,
            z: currentPos.z
          });

        }



        this.sensorPlanes[i].position.x = newX;
        this.topPlanes[i].position.x = newX;
        this.topPlanes[i].position.y = currentPos.y + 0.4;






        this.apply(i, this.sensorPlanes, this.planeSensor);
        this.apply(i, this.topPlanes, this.planeTop);





        top.position.set(newX, currentPos.y + 0.6, currentPos.z);
      }
      this.planeSensor.instanceMatrix.needsUpdate = true;
      this.planeTop.instanceMatrix.needsUpdate = true;
    }
  }












  async loadBoostsModel() {
    const gltfLoader = new GLTFLoader();
    const url = 'models/boosts/hat.glb';


    await gltfLoader.loadAsync(url).then((gltf) => {
      const root = gltf.scene;
      this.boostHatModel = root;

      this.boostHatPropeller = this.boostHatModel.children[0].children[1]
      this.boostHatMesh = this.boostHatModel.children[0].children[0].children[0];

      this.boostHatModel.rotation.x = Math.PI / 13;
      this.boostHatModel.rotation.y = Math.PI / 2;
      this.boostHatModel.position.y = 2;
      this.boostHatModel.position.x = -40;
      this.boostHatModel.scale.x = 0.015;
      this.boostHatModel.scale.y = 0.015;
      this.boostHatModel.scale.z = 0.015;

      this.boostHatModel.userData.fly = false;
    })
  }








  async loadEnvironmentModel() {
    const gltfLoader = new GLTFLoader();


    const url = 'models/environment/clouds.glb';

    await gltfLoader.loadAsync(url).then((gltf) => {
      const root = gltf.scene;
      this.cloudModel = root;
      this.cloudModel.children.forEach((value, index, array) => {

        value.position.x = index * 3;
        value.position.y = 4;
        value.position.z = -25;
        value.scale.x = 0.9;
        value.scale.y = 0.9;
        value.scale.z = 0.9;
        //this.clouds.push(value)
      })

    })

    // const url2 = 'models/environment/back.glb';/////////////////////////////////////////////////////////////////////???

    // await gltfLoader.loadAsync(url2).then((gltf) => {
    //  const root = gltf.scene;
    //  this.backModel = root;

    //  this.backModel.position.y = -20;
    //  this.backModel.position.z = -40;

    //  // this.boostHatModel.rotation.x = Math.PI / 13;
    //  // this.boostHatModel.rotation.y = Math.PI / 2;
    //  // this.cloudModel.position.y = 3;
    //  // this.cloudModel.position.z = -15;
    //  // this.cloudModel.scale.x = 0.4;
    //  // this.cloudModel.scale.y = 0.4;
    //  // this.cloudModel.scale.z = 0.4;

    //  // this.clouds.push(this.cloudModel)
    // })
  }

  async loadEnvironments() {
    for (let i = 0; i < this.grassPlanes.length; i++) {

      if (this.paramsClass.gameDir == 'hor') {
        this.physicsClass.addInstancedStatic(this.planes, this.plane, i, {
          position: this.planes[i].position,
          size: this.planes[i].size,
          collide: '123'
        });
        this.apply(i, this.planes, this.plane);
      }

      this.physicsClass.addInstancedStatic(this.grassPlanes, this.planeGrass, i, {
        position: this.grassPlanes[i].position,
        size: this.grassPlanes[i].size,
        collide: '123'
      });
      this.apply(i, this.grassPlanes, this.planeGrass);



      if (this.paramsClass.gameDir == 'vert') {
        this.grassPlanes[i].userData.collide.setFriction(500);
      }
      else {
        if (Math.random() < 0.3 && i > 1) {
          this.grassPlanes[i].userData.collide.setFriction(0);
          this.planeGrass.setColorAt(i, new THREE.Color(0xccccee));
        }
      }


    }







    if (this.paramsClass.gameDir == 'hor') { this.plane.instanceMatrix.needsUpdate = true; }
    this.planeGrass.instanceMatrix.needsUpdate = true;

    for (let i = 1; i < 10; i++) {
      let newBoostHatModel = this.boostHatModel.clone();
      if (this.paramsClass.gameDir == 'vert') {
        //newBoostHatModel.position.y = i * 3;
      }
      else {
        //newBoostHatModel.position.x = i * 3;
      }
      // this.scene.add(newBoostHatModel);
      // this.boostHatModels.push(newBoostHatModel);
      // this.boostHatMeshes.push(newBoostHatModel.children[0].children[0].children[0]);
    }

    this.clouds.forEach((value, index, array) => {
      this.scene.add(value);
    })


  }


  changePosBlocks() {



    if (this.camera.position.x > this.grassPlanes[Math.round(this.grassPlanes.length / 2)].position.x) {
      let firstPlane = {
        grassPlanes: this.grassPlanes[1],
        planes: this.planes[1],
        topPlanes: this.topPlanes[1],
        lamps: this.lamps[1],
      }

      const lastG = this.grassPlanes[this.grassPlanes.length - 1];
      const movedG = firstPlane.grassPlanes;
      const gap = getRandomNumber(this.fixedDistanceHor.min, this.fixedDistanceHor.max);
      const newX = lastG.position.x + lastG.size.x * 0.5 + gap + movedG.size.x * 0.5;


      this.grassPlanes.splice(1, 1);
      this.planes.splice(1, 1);
      this.topPlanes.splice(1, 1);
      this.lamps.splice(1, 1);

      firstPlane.grassPlanes.userData.body.setTranslation({
        x: newX,
        y: firstPlane.grassPlanes.position.y,
        z: firstPlane.grassPlanes.position.z
      }, true);
      firstPlane.grassPlanes.position.x = newX

      firstPlane.planes.userData.body.setTranslation({
        x: newX,
        y: firstPlane.planes.position.y,
        z: firstPlane.planes.position.z
      }, true);
      firstPlane.planes.position.x = newX



      firstPlane.topPlanes.position.x = newX
      firstPlane.lamps.position.x = newX
      if (firstPlane.lamps.userData.light) firstPlane.lamps.userData.light = false;

      this.grassPlanes.push(firstPlane.grassPlanes)
      this.planes.push(firstPlane.planes)
      this.topPlanes.push(firstPlane.topPlanes)
      this.lamps.push(firstPlane.lamps)


      for (let i = 0; i < this.lamps.length; i++) {
        this.apply(i, this.grassPlanes, this.planeGrass);
        this.apply(i, this.planes, this.plane);
        this.apply(i, this.topPlanes, this.planeTop);
        this.apply(i, this.lamps, this.lamp);

      }


      this.planeGrass.instanceMatrix.needsUpdate = true;
      this.plane.instanceMatrix.needsUpdate = true;
      this.planeTop.instanceMatrix.needsUpdate = true;
      this.lamp.instanceMatrix.needsUpdate = true;


    }

  }


  levelAnimate() {
    this.animateTops();
    this.lampsAnimate();

    this.changePosBlocks();

    this.boostHatModels.forEach((value, index, array) => {
      value.children[0].children[1].rotation.y += 0.05;
    })

  }

  lampsAnimate() {



    if (this.paramsClass.gameDir == 'hor') {
      if (this.bulbs[Math.round(this.bulbs.length / 2)].position.x < this.camera.position.x) {
        let firstElBuld = this.bulbs.shift();
        let firstElLight = this.lights.shift();


        let nextLamp = this.lamps.findIndex((el) => el.userData.light == false)
        if (this.lamps[nextLamp] != undefined) {


          firstElBuld.position.x = this.lamps[nextLamp].position.x;
          firstElBuld.position.y = this.grassPlanes[nextLamp].position.y + this.grassPlanes[nextLamp].size.y / 2 + this.lampHeight - 0.2 + 1;

          firstElLight.position.x = this.lamps[nextLamp].position.x;
          firstElLight.position.y = this.lamps[nextLamp].position.y + 1;

          this.bulbs.push(firstElBuld);
          this.lights.push(firstElLight);

          this.lamps[nextLamp].userData.light = true;
        }
      }




      this.lights.forEach((value, index, array) => {
        if (this.worldClass.night && value.position.x < this.camera.position.x + this.bounds.rightX - this.bounds.rightX / 4 && value.position.x + this.bounds.rightX > this.camera.position.x + this.bounds.rightX / 4) {
          if (value.intensity < this.lightIntensity && this.worldClass.night) {
            value.intensity += 1
          }
          if (this.bulbs[index].material.emissiveIntensity < this.bulbEmissiveIntensity && this.worldClass.night) {
            this.bulbs[index].material.emissiveIntensity += 0.1;
          }
        }
        else if (!this.worldClass.night || value.position.x + this.bounds.rightX < this.camera.position.x + this.bounds.rightX / 4 || value.position.x + this.bounds.rightX > this.camera.position.x + this.bounds.rightX + this.bounds.rightX / 4) {

          if (value.intensity > 0) {
            value.intensity -= 1
          }
          if (this.bulbs[index].material.emissiveIntensity > 0.3) {
            this.bulbs[index].material.emissiveIntensity -= 0.1
          }
        }

      })

    }

  }

  resetLevel() {
    if (this.paramsClass.gameDir == 'hor') {
      for (let i = 0; i < this.count; i++) {
        if (i < this.lightsCount) {
          this.lights[i].position.set(this.lamps[i].position.x, this.lamps[i].position.y + 1, 1.6);
          this.bulbs[i].position.copy(new THREE.Vector3(this.lights[i].position.x, this.lights[i].position.y, this.lamps[i].position.z));
          this.lamps[i].userData.light = true;
          this.apply(i, this.lamps, this.lamp);
        }
        else {
          this.lamps[i].userData.light = false;
          this.apply(i, this.lamps, this.lamp);
        }
      }
      this.lamp.instanceMatrix.needsUpdate = true;
    }
  }



  maxSpeed() {
    let players = this.players;
    if (players.length === 0) return -1; // Если массив пустой, возвращаем -1

    let maxIndex = 0; // Начинаем с первого элемента
    let maxValue;
    if (this.paramsClass.gameDir == 'vert') {
      maxValue = players[0].player.position.y;
    }
    else {
      maxValue = players[0].player.position.x;
    }

    for (let i = 1; i < players.length; i++) {
      // Проверяем, существует ли player и его position
      if (players[i].player && players[i].player.position) {
        if (this.paramsClass.gameDir == 'vert') {
          if (players[i].player.position.y > maxValue) {
            maxValue = players[i].player.position.y; // Обновляем максимальное значение
            maxIndex = i; // Обновляем индекс максимального значения
          }
        }
        else {
          if (players[i].player.position.x > maxValue) {
            maxValue = players[i].player.position.x; // Обновляем максимальное значение
            maxIndex = i; // Обновляем индекс максимального значения
          }
        }
      } else {
        console.warn(`Player at index ${i} is missing player or position properties.`);
      }
    }

    return maxIndex; // Возвращаем индекс элемента с максимальным значением
  }


  async loadPlayers() {

    for (let i = 0; i < this.players.length; i++) {
      let player = this.players[i];
      player.player.position.x = player.player.position.x - i * 1;
      this.physicsClass.addPhysicsToObject(player.player);
      if (this.paramsClass.gameDir == 'vert') {
        player.player.position.y = -0;
        player.player.userData.collider.setFriction(500)
      }
      await player.loadPlayerModel();

      player.player.userData.startPos = player.player.position.clone();

      this.scene.add(player.player);
      this.scene.add(player.playerOut);
      this.scene.add(player.playerModel);

      this.playerOuts.push(player.playerOut);




      if (i < this.players[0].playerColors.length) {
        player.head.children[0].material.color.set(this.players[0].playerColors[i]);
      }
      else {
        this.players[0].playerColors.splice(this.players[0].playerColors.length, 0, ...this.players[0].playerColors);
      }

      player.player.userData.audio.push(this.audioClass.readyJumpAudio.clone())
      if (this.audioClass.quacks.length > i) player.player.userData.audio.push(this.audioClass.quacks[i].clone())
      else player.player.userData.audio.push(this.audioClass.quacks[0].clone())
    }
  }


  cameraMove(camera, dt = this.dt.getDelta()) {

    switch (this.gameNum) {
      case 1:
        camera.position.x += 0.03;
        camera.position.y = this.isMobile ? 3.5 : 3;
        camera.position.z = this.isMobile ? 13 : 25;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 2: {
        const leadIdx = this.maxSpeed(this.players);
        if (leadIdx >= 0) {
          const leadX = this.players[leadIdx].player.position.x;

          // Ограничим резкие откаты назад, если надо
          const maxBack = this.cam.maxBackJump;
          if (leadX < this.cam.targetX - maxBack) {
            this.cam.targetX = this.cam.targetX - maxBack;

          } else {
            this.cam.targetX = leadX;
          }

          // Пружинка по X
          const s = this.spring(
            camera.position.x,
            this.cam.targetX,
            this.cam.velX,
            0.95, // smoothTime: 0.25 сек до сходимости
            dt
          );
          camera.position.x = s.newPos;
          this.cam.velX = s.newVel;

          // Остальные координаты
          camera.position.y = this.isMobile ? 3.5 : 3;
          camera.position.z = this.isMobile ? 13 : 25;
          camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        }
        break;
      }
      case 3:
        camera.position.y += 0.01;
        camera.position.x = 0;
        camera.position.z = this.isMobile ? 20 : 22;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 4:
        camera.position.y = this.players[this.maxSpeed(this.players)].player.position.y + 3.5;
        camera.position.x = 0;
        camera.position.z = this.isMobile ? 15 : 22;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
    }

  }

  damp(current, target, lambda, dt) {
    // lambda ~ "скорость схождения": 6..12 обычно ок
    return current + (target - current) * (1 - Math.exp(-lambda * dt));
  }


  // Пружинка: возвращает новое значение и новую скорость
  spring(current, target, velocity, smoothTime, dt) {
    // smoothTime — чем меньше, тем быстрее догоняет (0.2..0.5 сек обычно ок)
    const omega = 2 / smoothTime;
    const x = omega * dt;
    const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);

    let change = current - target;
    const temp = (velocity + omega * change) * dt;
    const newVel = (velocity - omega * temp) * exp;
    const newPos = target + (change + temp) * exp;

    return { newPos, newVel };
  }

}










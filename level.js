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

    this.count = 100;



    this.objs = {
      planes: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, 0, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(1, 1, 1),
          userData: { name: 'plane', collide: null, body: null, speed: null, direction: 1 },
        })),
        geometryPlane: new THREE.BoxGeometry(this.planeWidth, this.planeHeight, this.planeDepth),
        materialPlane: new THREE.MeshPhongMaterial({ color: 0x00cc00 }),
        plane: null,
      },
      /*//////////////////////////////////////////////////////////////////////////////*/
      topPlanes: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, 0, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(1, 1, 1),
          userData: { name: 'topSensor', collide: null, body: null, speed: null, direction: 1 },
        })),
        geometryPlaneTop: new THREE.BoxGeometry(this.planeWidth, 0.4, 1.2),
        materialPlaneTop: new THREE.MeshStandardMaterial({ color: 0xcccc00, transparent: true, opacity: 0.0 }),
        planeTop: null,
      },
      /*//////////////////////////////////////////////////////////////////////////////*/
      grassPlanes: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, 0, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(1, 1, 1),
          userData: { name: 'tops', collide: null, body: null, speed: null, direction: 1 },
        })),
        geometryPlaneGrass: new THREE.BoxGeometry(this.planeWidth, 0.5, this.planeDepth + 0.2),
        materialPlaneGrass: new THREE.MeshPhongMaterial({ color: 0x00cc00, transparent: true, opacity: 1 }),
        planeGrass: null,
      },
      /*//////////////////////////////////////////////////////////////////////////////*/
      sensorPlanes: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, 0, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(1, 1, 1),
          userData: { name: 'sensor', collide: null, body: null, speed: null, direction: 1 },
        })),
        geometryPlaneSensor: new THREE.BoxGeometry(this.planeWidth, 0.4, 1.2),
        materialPlaneSensor: new THREE.MeshPhongMaterial({ color: 0x00ff00, transparent: true, opacity: 0.0 }),
        planeSensor: null,
      },
      /*//////////////////////////////////////////////////////////////////////////////*/
      lamps: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, 0, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(0.1, 2, 0.1),
          userData: { name: 'lamp', light: false },
        })),
        lampHeight: 1,
        geometryLamp: new THREE.BoxGeometry(0.3, 1, 0.3),
        materialLamp: new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: true, opacity: 1.0 }),
        lamp: null,
      },
      plafons: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, 0, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(0.6, 0.6, 0.6),
          userData: { name: 'plafon', light: false, pointLight: null },
        })),
        geometryPlafon: new THREE.SphereGeometry(0.3),
        materialPlafon: new THREE.MeshPhongMaterial({ color: 0xf4eecd, transparent: true, opacity: 0.8 }),
        plafon: null,
      },
      /*//////////////////////////////////////////////////////////////////////////////*/
    }

    this.objs.planes.plane = new THREE.InstancedMesh(this.objs.planes.geometryPlane, this.objs.planes.materialPlane, this.count);
    this.objs.planes.plane.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.objs.planes.plane.receiveShadow = true;
    this.objs.planes.plane.castShadow = true;
    this.objs.planes.plane.frustumCulled = false;

    this.objs.topPlanes.planeTop = new THREE.InstancedMesh(this.objs.topPlanes.geometryPlaneTop, this.objs.topPlanes.materialPlaneTop, this.count);
    this.objs.topPlanes.planeTop.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.objs.topPlanes.planeTop.frustumCulled = false;

    this.objs.grassPlanes.planeGrass = new THREE.InstancedMesh(this.objs.grassPlanes.geometryPlaneGrass, this.objs.grassPlanes.materialPlaneGrass, this.count);
    this.objs.grassPlanes.planeGrass.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.objs.grassPlanes.planeGrass.userData.direction = 1;
    this.objs.grassPlanes.planeGrass.receiveShadow = true;
    this.objs.grassPlanes.planeGrass.castShadow = true;
    this.objs.grassPlanes.planeGrass.userData.name = 'tops';
    this.objs.grassPlanes.planeGrass.frustumCulled = false;

    this.objs.sensorPlanes.planeSensor = new THREE.InstancedMesh(this.objs.sensorPlanes.geometryPlaneSensor, this.objs.sensorPlanes.materialPlaneSensor, this.count);
    this.objs.sensorPlanes.planeSensor.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.objs.sensorPlanes.planeSensor.frustumCulled = false;

    this.objs.lamps.lamp = new THREE.InstancedMesh(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count);
    this.objs.lamps.lamp.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.objs.lamps.lamp.frustumCulled = false;

    this.objs.plafons.plafon = new THREE.InstancedMesh(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count);
    this.objs.plafons.plafon.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.objs.plafons.plafon.frustumCulled = false;



    this.lightsCount = 5;
    this.lights = [];


    this.lightIntensity = 25;
    this.bulbEmissiveIntensity = 0.9;


    this.playerOuts = [];






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
        this.objs.planes.plane.material = material;
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
        this.objs.grassPlanes.planeGrass.material = material;
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
            this.objs.planes.data[i].size.x = randomW;
            this.objs.planes.data[i].size.y = this.planeHeight;

            this.objs.topPlanes.data[i].size.x = randomW + 0.3;
            this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height;

            this.objs.grassPlanes.data[i].size.x = randomW + 0.3;
            this.objs.grassPlanes.data[i].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height;
            this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth;

          }
          else {
            this.objs.planes.data[i].size.x = this.planeWidth;
            this.objs.planes.data[i].size.y = this.planeHeight;

            this.objs.topPlanes.data[i].size.x = this.planeWidth + 0.3;
            this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height;


            this.objs.grassPlanes.data[i].size.x = this.planeWidth + 0.3;
            this.objs.grassPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height;
            this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth;
          }



          if (i > 0) {
            this.objs.planes.data[i].position.x = randomX;
            this.objs.planes.data[i].position.y = randomY + this.planeHeight / 6;

            this.objs.topPlanes.data[i].position.x = randomX;
            this.objs.topPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 + 0.2;

            this.objs.grassPlanes.data[i].position.x = randomX;
            this.objs.grassPlanes.data[i].position.y = randomY + this.planeHeight / 1.5;

          }
          else {
            this.objs.planes.data[i].position.x = -this.planeWidth / 2;
            this.objs.planes.data[i].position.y = -this.planeHeight / 2 + 0.5;

            this.objs.topPlanes.data[i].position.x = -this.planeWidth / 2;
            this.objs.topPlanes.data[i].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + 0.4;

            this.objs.grassPlanes.data[i].position.x = -this.planeWidth / 2;
            this.objs.grassPlanes.data[i].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + 0.3;
          }

          this.objs.lamps.data[i].position.x = this.objs.grassPlanes.data[i].position.x;
          this.objs.lamps.data[i].position.z = -this.planeDepth / 8;
          this.objs.lamps.data[i].position.y = this.objs.grassPlanes.data[i].position.y + this.objs.grassPlanes.data[i].size.y / 2 + this.objs.lamps.lampHeight - 0.2;

          this.objs.plafons.data[i].position.x = this.objs.lamps.data[i].position.x;
          this.objs.plafons.data[i].position.z = this.objs.lamps.data[i].position.z;
          this.objs.plafons.data[i].position.y = this.objs.lamps.data[i].position.y + 1;


          if (this.lights.length < this.lightsCount) {

            const light = new THREE.PointLight(0xf7eaa8, 0, 4);
            // light.position.set(this.objs.lamps.data[i].position.x, this.objs.lamps.data[i].position.y + 1, 1.6);
            light.position.set(0, 0, 1.6);
            this.lights.push(light)
            this.scene.add(light);

            // this.objs.lamps.data[i].userData.light = true;

          }




          this.apply(i, this.objs.planes.data, this.objs.planes.plane);
          this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop);
          this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass);
          this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
          this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon);
          previousX = randomX + randomW / 2;




        }


        this.objs.planes.plane.instanceMatrix.needsUpdate = true;
        this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true;
        this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true;
        this.objs.lamps.lamp.instanceMatrix.needsUpdate = true;
        this.objs.plafons.plafon.instanceMatrix.needsUpdate = true;


        this.scene.add(this.objs.planes.plane)
        this.scene.add(this.objs.topPlanes.planeTop)
        this.scene.add(this.objs.grassPlanes.planeGrass)
        this.scene.add(this.objs.lamps.lamp)
        this.scene.add(this.objs.plafons.plafon)


        break;

      case 3:
      case 4:

        this.paramsClass.gameDir = 'vert'
        let previousY = -5;

        for (let i = 0; i < this.count; i++) {

          let randomW = getRandomNumber(this.bounds.rightX / 2, this.bounds.rightX / 8);


          let randomY = previousY + getRandomNumber(this.fixedDistanceVert.min, this.fixedDistanceVert.max);

          this.objs.topPlanes.data[i].position.y = randomY - 1.3;
          this.objs.grassPlanes.data[i].position.y = randomY;
          this.objs.sensorPlanes.data[i].position.y = randomY - 0.5;

          this.objs.topPlanes.data[i].size.y = 0.3;
          this.objs.grassPlanes.data[i].size.y = 0.7;
          this.objs.sensorPlanes.data[i].size.y = 0.9;

          if (i > 0) {
            this.objs.topPlanes.data[i].size.x = randomW + 0.3;
            this.objs.grassPlanes.data[i].size.x = randomW + 0.3
            this.objs.sensorPlanes.data[i].size.x = randomW + 0.5

          }
          else {
            this.objs.topPlanes.data[i].size.x = 10;
            this.objs.grassPlanes.data[i].size.x = 10;
            this.objs.sensorPlanes.data[i].size.x = 10;
          }


          this.objs.grassPlanes.data[i].userData.speed = getRandomNumber(4, 8) / 100;


          this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop);
          this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass);
          this.apply(i, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor);

          previousY = randomY;

        }

        this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true;
        this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true;
        this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = true;

        this.scene.add(this.objs.topPlanes.planeTop)
        this.scene.add(this.objs.grassPlanes.planeGrass)
        this.scene.add(this.objs.sensorPlanes.planeSensor)






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

      for (let i = 0; i < this.objs.grassPlanes.data.length; i++) {
        const grass = this.objs.grassPlanes.data[i];
        const top = this.objs.topPlanes.data[i];
        const sensor = this.objs.sensorPlanes.data[i];;
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



        this.objs.sensorPlanes.data[i].position.x = newX;
        this.objs.topPlanes.data[i].position.x = newX;
        this.objs.topPlanes.data[i].position.y = currentPos.y + 0.4;






        this.apply(i, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor);
        this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop);





        top.position.set(newX, currentPos.y + 0.6, currentPos.z);
      }
      this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = true;
      this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true;
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
    for (let i = 0; i < this.objs.grassPlanes.data.length; i++) {

      if (this.paramsClass.gameDir == 'hor') {
        this.physicsClass.addInstancedStatic(this.objs.planes.data, this.objs.planes.plane, i, {
          position: this.objs.planes.data[i].position,
          size: this.objs.planes.data[i].size,
          collide: '123'
        });
        this.apply(i, this.objs.planes.data, this.objs.planes.plane);
      }

      this.physicsClass.addInstancedStatic(this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass, i, {
        position: this.objs.grassPlanes.data[i].position,
        size: this.objs.grassPlanes.data[i].size,
        collide: '123'
      });
      this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass);



      if (this.paramsClass.gameDir == 'vert') {
        this.objs.grassPlanes.data[i].userData.collide.setFriction(500);
      }
      else {
        if (Math.random() < 0.3 && i > 1) {
          this.objs.grassPlanes.data[i].userData.collide.setFriction(0);
          this.objs.grassPlanes.planeGrass.setColorAt(i, new THREE.Color(0xccccee));
        }
      }


    }







    if (this.paramsClass.gameDir == 'hor') { this.objs.planes.plane.instanceMatrix.needsUpdate = true; }
    this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true;

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



  levelAnimate() {
    this.animateTops();
    this.lampsAnimate();

    //this.changePosBlocks();

    this.boostHatModels.forEach((value, index, array) => {
      value.children[0].children[1].rotation.y += 0.05;
    })

  }

  lampsAnimate() {


    if (this.paramsClass.gameDir == 'hor') {

      if (this.worldClass.night) {
        const left = this.camera.position.x - this.bounds.rightX / 2;
        const right = this.camera.position.x + this.bounds.rightX * 0.8;
        const fadeSpeed = 0.15;            // для lerp
        const maxI = this.lightIntensity;  // целевая яркость
        let colorsChanged = false;

        this.objs.plafons.data.forEach((plafon, index) => {
          const inZone = plafon.position.x >= left && plafon.position.x <= right;

          // если свет назначен — удобнее хранить прямо на объекте
          let light = plafon.pointLight || null;

          if (inZone) {
            // выделяем из пула при входе
            if (!light && this.lights.length > 0) {
              light = this.lights.shift();
              plafon.pointLight = light;
              plafon.userData.light = true;
              // цвет при активации
              this.objs.plafons.plafon.setColorAt(index, new THREE.Color(0xf7eaa8));
              colorsChanged = true;
            }
          } else {
            // вышли из зоны — оставляем свет, но гасим и потом вернём в пул
            if (plafon.userData.light) {
              // цвет при деактивации (можно сразу вернуть)
              this.objs.plafons.plafon.setColorAt(index, new THREE.Color(0xf7eaa8));
              colorsChanged = true;
            }
          }

          // если есть свет — поддерживаем позицию и плавно меняем интенсивность
          if (light) {
            // позицию лучше обновлять всегда, чтобы не отставал
            light.position.x = this.objs.lamps.data[index].position.x;
            light.position.y = this.objs.lamps.data[index].position.y + 1;
            light.position.z = this.objs.lamps.data[index].position.z; // если нужно по Z

            const target = inZone ? maxI : 0;
            // плавное приближение
            light.intensity = THREE.MathUtils.lerp(light.intensity, target, fadeSpeed);
            // клипуем
            light.intensity = THREE.MathUtils.clamp(light.intensity, 0, maxI);

            // когда почти погас — возвращаем в пул
            if (!inZone && light.intensity <= 0.01) {
              this.lights.push(light);
              plafon.pointLight = null;
              plafon.userData.light = false;
            }
          }
        });

        if (colorsChanged) {
          this.objs.plafons.plafon.instanceColor.needsUpdate = true;
        }
      }






    }

  }



  resetLevel() {
    if (this.paramsClass.gameDir == 'hor') {
      for (let i = 0; i < this.count; i++) {
        if (i < this.lightsCount) {
          this.lights[i].position.set(this.objs.lamps.data[i].position.x, this.objs.lamps.data[i].position.y + 1, 1.6);
          this.bulbs[i].position.copy(new THREE.Vector3(this.lights[i].position.x, this.lights[i].position.y, this.objs.lamps.data[i].position.z));
          this.objs.lamps.data[i].userData.light = true;
          this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
        }
        else {
          this.objs.lamps.data[i].userData.light = false;
          this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
        }
      }
      this.objs.lamps.lamp.instanceMatrix.needsUpdate = true;
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










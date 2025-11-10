import * as THREE from "three";
import { getRandomNumber, disposeScene, prewarmSkinnedModel } from './functions';
import { t } from './i18n.js';

const MY_REC_NAMES = new Set(["Мой рекорд", "My record"]);
const isMy = (row) => row?.isMine === true || row?.name === t('hud.mineRecord', 'Мой рекорд') || MY_REC_NAMES.has(row?.name);


export class LevelClass {
  constructor(scene, audioClass, physicsClass, renderer, camera, isMobile, paramsClass, worldClass, initMatch, dataClass, gameClass, splash, ring, scoreClass, menuClass, assetsManager) {
    this.scene = scene;
    this.audioClass = audioClass;
    this.physicsClass = physicsClass;
    this.renderer = renderer;
    this.camera = camera;
    this.isMobile = isMobile;
    this.paramsClass = paramsClass;
    this.worldClass = worldClass;
    this.initMatch = initMatch;
    this.gameClass = gameClass;
    this.splash = splash;
    this.ring = ring;
    this.dataClass = dataClass;
    this.scoreClass = scoreClass;
    this.menuClass = menuClass;
    this.assetsManager = assetsManager;

    this.playersLoaded = false;

    this.cameraSpeed = 0.01;

    this.levelsMode = false;
    this.levelsNoFric = false;
    this.allLevels = this.dataClass.allLevels;

    this.randomNoFric = 0.3;
    this.randomAnimateHor = 0.2;
    this.randomAnimateVert = 0.2;

    this.canShowAds = true;

    this.boostHatModel;
    this.boostHatPropeller;
    this.boostHatMesh;

    this.boostHatModels = [];
    this.boostHatMeshes = [];

    this.boostHatCoords = [];

    this.angryBird;
    this.birdFlyingMark = 10;
    this.distanceToBird = 20;
    this.angryBirdModel;
    this.maxHeight = 0;
    this.birdYes = true;

    this.canHorDie = false;

    this.planeWidth = 4;
    this.planeHeight = 10;
    this.planeDepth = 1;

    this.minPlaneWidthTic = 1;

    this.fixedDistanceHor = { min: 1, max: 4 }
    this.fixedDistanceVert = { min: 3, max: 4 }

    this.count = 120;

    this._dayColor = new THREE.Color(0xffffff);
    this._nightColor = new THREE.Color(0xffe9a0);


    this.mksWidth = 100;
    this.mksHeight = 100;



    this.geometryPlane = new THREE.PlaneGeometry(this.mksWidth, this.mksHeight);
    this.materialPlane = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
    this.mks = new THREE.Mesh(this.geometryPlane, this.materialPlane);
    this.mks.position.z = -550
    if (this.isMobile) this.mks.position.y = 100
    else this.mks.position.y = 140

    this.mks.layers.set(1);


    /*HEART*/
    const x = 0, y = 0;
    const heartShape = new THREE.Shape();

    const s = 0.01; // масштаб контура (подбери под свой мир)

    heartShape.moveTo(5 * s, 5 * s);
    heartShape.bezierCurveTo(5 * s, 5 * s, 4 * s, 2 * s, 0 * s, 2 * s);
    heartShape.bezierCurveTo(-6 * s, 2 * s, -6 * s, 7 * s, -6 * s, 7 * s);
    heartShape.bezierCurveTo(-6 * s, 10 * s, -3 * s, 14 * s, 5 * s, 18 * s);
    heartShape.bezierCurveTo(12 * s, 14 * s, 16 * s, 10 * s, 16 * s, 7 * s);
    heartShape.bezierCurveTo(16 * s, 7 * s, 16 * s, 2 * s, 10 * s, 2 * s);
    heartShape.bezierCurveTo(7 * s, 2 * s, 5 * s, 5 * s, 5 * s, 5 * s);

    // Экструзия: без фасок — супердёшево. Если нужно «глянцевее» — включи bevel ниже.
    const extrudeSettings = {
      depth: 0.22,
      bevelEnabled: false,   // самый дешёвый вариант
      curveSegments: 12,     // можно 10–12
      steps: 1
    };
    /*HEART*/


    this.objs = {
      planes: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, -10, 0),
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
          position: new THREE.Vector3(0, -10, 0),
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
          position: new THREE.Vector3(0, -10, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(1, 1, 1),
          userData: { name: 'tops', collide: null, body: null, speed: null, direction: 1, noFriction: false, moveHor: false, moveVert: false },
        })),
        geometryPlaneGrass: new THREE.BoxGeometry(this.planeWidth, 0.5, this.planeDepth + 0.2),
        materialPlaneGrass: new THREE.MeshPhongMaterial({ color: 0x00cc00, transparent: true, opacity: 1 }),
        planeGrass: null,
      },
      /*//////////////////////////////////////////////////////////////////////////////*/
      sensorPlanes: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, -10, 0),
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
          position: new THREE.Vector3(0, -10, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(0.1, 2, 0.1),
          userData: { name: 'lamp', light: false },
        })),
        lampHeight: 1,
        geometryLamp: new THREE.BoxGeometry(0.3, 1, 0.3),
        materialLamp: new THREE.MeshPhongMaterial({ color: 0xffffff, transparent: false, opacity: 1.0 }),
        lamp: null,
      },
      plafons: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, -10, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(0.6, 0.6, 0.6),
          userData: { name: 'plafon', light: false, pointLight: null },
        })),
        geometryPlafon: new THREE.SphereGeometry(0.32, 24, 16),
        materialPlafon: new THREE.MeshStandardMaterial({
          transparent: true,
          color: 0xffffff,
          opacity: 0.65,
          roughness: 0,
          metalness: 0.0,
          emissive: 0xffffff,
          // envMapIntensity: 0.5 // при наличии envMap


          // color: 0xffffff,
          //   transparent: true,
          //     opacity: 1,
          //       roughness: 0,
          //         metalness: 0.0,
          //           emissive: 0xffffff
        }),
        plafon: null,
      },
      bulbs: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, -10, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(0.3, 0.3, 0.3),
          userData: { name: 'bulb', light: false, pointLight: null },
        })),
        geometryBulb: new THREE.SphereGeometry(0.3),
        materialBulb: new THREE.MeshStandardMaterial({
          emissive: new THREE.Color(0xffe7a3),
          emissiveIntensity: 6.0,     // будем анимировать/задавать по инстансу
          color: 0xffffff,
        }),
        bulb: null,
      },
      livesBlocks: {
        data: Array.from({ length: this.count }, (_, i) => ({
          position: new THREE.Vector3(0, -10, 0),
          rotation: new THREE.Euler(0, 0, 0),
          scale: new THREE.Vector3(1, 1, 1),
          size: new THREE.Vector3(0.4, 0.3, 0.1),
          userData: { name: 'liveBlock', taked: false, startPos: new THREE.Vector3(0, -10, 0) },
        })),
        geometryLivesBlock: new THREE.ExtrudeGeometry(heartShape, extrudeSettings),
        materialLivesBlock: new THREE.MeshStandardMaterial({ color: 0xff0000 }),
        livesBlock: null,
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
    this.objs.sensorPlanes.planeSensor.visible = false;

    this.objs.lamps.lamp = new THREE.InstancedMesh(this.objs.lamps.geometryLamp, this.objs.lamps.materialLamp, this.count);
    this.objs.lamps.lamp.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.objs.lamps.lamp.frustumCulled = false;

    this.objs.plafons.plafon = new THREE.InstancedMesh(this.objs.plafons.geometryPlafon, this.objs.plafons.materialPlafon, this.count);
    this.objs.plafons.plafon.instanceMatrix.setUsage(THREE.DynamicDrawUsage); // на случай будущих обновлений
    this.objs.plafons.plafon.frustumCulled = false;

    this.objs.bulbs.bulb = new THREE.InstancedMesh(this.objs.bulbs.geometryBulb, this.objs.bulbs.materialBulb, this.count);
    this.objs.bulbs.bulb.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.objs.bulbs.bulb.frustumCulled = false;

    this.objs.bulbs.baseSize = this.objs.bulbs.data[0].size.clone();

    this.objs.livesBlocks.livesBlock = new THREE.InstancedMesh(this.objs.livesBlocks.geometryLivesBlock, this.objs.livesBlocks.materialLivesBlock, this.count);
    this.objs.livesBlocks.livesBlock.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
    this.objs.livesBlocks.livesBlock.frustumCulled = false;

    this.objs.livesBlocks.geometryLivesBlock.center();
    this.objs.livesBlocks.geometryLivesBlock.rotateZ(Math.PI); // ← разворот сердечка
    this.objs.livesBlocks.geometryLivesBlock.center();

    this.objs.livesBlocks.livesBlock.castShadow = true;







    this.objs.plafons.materialPlafon.onBeforeCompile = (shader) => {
      shader.uniforms.fresnelPower = { value: 2.5 };
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <output_fragment>',
        `
    float f = pow(1.0 - dot(normalize(vNormal), normalize(vViewPosition)), fresnelPower);
    gl_FragColor = vec4( outgoingLight + f * 0.15, diffuseColor.a );
    `
      );
    };
    this.objs.plafons.materialPlafon.needsUpdate = true;



    const emissiveArray = new Float32Array(this.count); // [0..1] на инстанс
    for (let i = 0; i < this.count; i++) emissiveArray[i] = 0.0;
    this.objs.bulbs.geometryBulb.setAttribute('aEmissive',
      new THREE.InstancedBufferAttribute(emissiveArray, 1));

    this.objs.bulbs.materialBulb.onBeforeCompile = (shader) => {
      shader.vertexShader = `
    attribute float aEmissive;
    varying float vEmissive;
  ` + shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
      #include <begin_vertex>
      vEmissive = aEmissive;
    `
      );
      shader.fragmentShader = `
    varying float vEmissive;
  ` + shader.fragmentShader.replace(
        '#include <lights_fragment_begin>',
        `
      #include <lights_fragment_begin>
      // усиливаем эмиссию в зависимости от инстанса
      totalEmissiveRadiance *= vEmissive;
    `
      );
    };
    this.objs.bulbs.materialBulb.needsUpdate = true;



    function makeRadialTexture(size = 64) {
      const cnv = document.createElement('canvas');
      cnv.width = cnv.height = size;
      const ctx = cnv.getContext('2d');
      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      g.addColorStop(0.0, 'rgba(255, 235, 175, 1)');
      g.addColorStop(1.0, 'rgba(255, 235, 175, 0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
      const tex = new THREE.CanvasTexture(cnv);
      tex.anisotropy = 1; tex.generateMipmaps = false; tex.needsUpdate = true;
      return tex;
    }

    this._glowTex = makeRadialTexture();







    this._emissive = emissiveArray;

    this.glowPool = [];



    this.lightsCount = 5;
    this.lights = [];


    this.lightIntensity = 25;
    this.bulbEmissiveIntensity = 0.9;


    this.playerOuts = [];







    this.players = [];


    this.backModel;
    this.backModels = [];


    this.leftEdge = new THREE.Vector3(-1, 0, 0); // NDC: -1 по X (левый экран)
    this.rightEdge = new THREE.Vector3(1, 0, 0); // NDC: +1 по X (правый экран)

    this.leftEdge.unproject(camera);
    this.rightEdge.unproject(camera);

    this.bounds;


    this.gameNum = 1;


    this.cam = {
      targetX: this.camera.position.x,
      velX: 0,             // для пружинки, если захочешь
      followBackSpeed: 12, // макс скорость назад (чтобы не "дергалось" при респауне)
      maxBackJump: 800,      // максимум, насколько цель может "откатить" за 1 кадр
    };

    this.dt = new THREE.Clock();

    this.menuInGame();


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

    (() => {
      let texture = this.assetsManager.plane.texture;
      let material = this.assetsManager.plane.material;

      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(this.planeWidth / 4, this.planeHeight / 4);
      this.objs.planes.plane.material = material;
    })();


    (() => {
      let texture = this.assetsManager.planeGrass.texture;
      let material = this.assetsManager.planeGrass.material;

      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(this.planeWidth / 1, this.planeHeight / 8);
      this.objs.grassPlanes.planeGrass.material = material;
    })();


    (() => {
      let texture = this.assetsManager.mks.texture;
      let material = this.assetsManager.mks.material;

      // texture.wrapS = THREE.RepeatWrapping;
      // texture.wrapT = THREE.RepeatWrapping;
      // texture.repeat.set(this.mksWidth / 20, this.mksHeight / 20);
      this.mks.material = material;
    })();







  }

  async loadBarriers() {
    let geometryBird = new THREE.BoxGeometry(0.5, 0.7, 1);
    let materialBird = new THREE.MeshBasicMaterial({ color: 0x00cc00, transparent: true, opacity: 0 });
    this.angryBird = new THREE.Mesh(geometryBird, materialBird);
    this.angryBird.userData.name = 'bird';
    this.angryBird.userData.speed = getRandomNumber(8, 13) / 100
    this.angryBird.userData.flying = false;
    this.angryBird.position.y = -5;
    //this.angryBird.position.x = this.birdFlyingMark + this.bounds.rightX + this.distanceToBird * 3

    this.physicsClass.addPhysicsToObject(this.angryBird);

  }

  async createLevel(levelsMode) {
    this.levelsMode = levelsMode;
    this.maxHeight = 0;
    this.birdFlyingMark = 10;

    document.querySelector('.lev_hud span').textContent = levelsMode;


    await this.loadTexture();
    await this.loadBarriers();

    this.boostHatModel = this.assetsManager.boostHatModel;
    this.boostHatPropeller = this.assetsManager.boostHatPropeller;
    this.boostHatMesh = this.assetsManager.boostHatMesh;


    if (this.birdYes) {
      this.angryBirdModel = this.assetsManager.angryBirdModel;
      this.scene.add(this.angryBirdModel);
      prewarmSkinnedModel(this.angryBirdModel, this.renderer, this.camera, this.scene);
    }








    document.querySelectorAll('.player_panel')[0].classList.add('hidden_screen');
    document.querySelectorAll('.player_panel')[1].classList.add('hidden_screen');
    document.querySelectorAll('.player_panel')[2].classList.add('hidden_screen');


    this.players.forEach((value, index, array) => {
      let panel = document.querySelectorAll('.player_panel');
      panel[index].classList.remove('hidden_screen');
    })


    this.getHorizontalWorldBounds();
    this.cameraMove(this.camera);


    if (levelsMode) {
      if (this.isMobile) this.getHorizontalWorldBounds();
      else this.getHorizontalWorldBounds(-7);
      //this.players[0].player.userData.lives = 0;
      let previousX = -2.5; // Начальная позиция по оси X
      let previousY = -5;
      let randomWLevel = false;
      let grassSpeed = false;

      switch (levelsMode) {
        case 1:
          this.birdYes = false;
          this.count = 3;
          this.paramsClass.gameDir = 'hor'
          this.levelsNoFric = true;
          this.randomAnimateHor = 0;
          this.randomAnimateVert = 0;
          this.gameNum = 2;
          this.cameraSpeed = 0.01;
          this.fixedDistanceHor.min = 1.5;
          break;
        case 2:
          this.gameNum = 4; ////////////////////////////////////////////////////////////////////////////////////////// 3 / 4 верт
          this.birdYes = false;
          this.count = 3;
          this.paramsClass.gameDir = 'vert'
          this.randomAnimateHor = 0;
          this.randomAnimateVert = 0;
          break;
        case 3:
          this.birdYes = true;
          this.count = 5;
          this.paramsClass.gameDir = 'hor'
          this.levelsNoFric = true;
          this.randomAnimateHor = 1;
          this.randomAnimateVert = 0;
          this.gameNum = 1;
          this.cameraSpeed = 0.01;
          this.fixedDistanceHor.min = 1.5;
          break;
        case 4:
          this.gameNum = 3;
          this.birdYes = true;
          this.count = 5;
          this.paramsClass.gameDir = 'vert'
          this.levelsNoFric = true;
          this.randomAnimateHor = 0;
          this.randomAnimateVert = 0;
          this.cameraSpeed = 0.01;
          break;
        case 5:
          this.birdYes = true;
          this.count = 7;
          this.paramsClass.gameDir = 'hor'
          this.levelsNoFric = false;
          this.randomNoFric = 1;
          this.randomAnimateHor = 1;
          this.randomAnimateVert = 0;
          this.gameNum = 1;
          this.cameraSpeed = 0.01;
          this.fixedDistanceHor.min = 1.5;
          break;
        case 6:
          this.birdYes = true;
          this.count = 9;
          this.paramsClass.gameDir = 'hor'
          this.levelsNoFric = false;
          this.randomNoFric = 1;
          this.randomAnimateHor = 0.5;
          this.randomAnimateVert = 1;
          this.gameNum = 2;
          this.cameraSpeed = 0.01;
          this.fixedDistanceHor.min = 1.5;
          break;
        case 7:
          this.gameNum = 4;
          this.birdYes = false;
          this.count = 6;
          this.paramsClass.gameDir = 'vert'
          this.levelsNoFric = true;
          this.randomAnimateHor = 0;
          this.randomAnimateVert = 0;
          this.cameraSpeed = 0.01;
          randomWLevel = [5, 6, 5, 6, 5, 6, 5, 6, 5, 6, 5, 6];
          grassSpeed = grassSpeed
          break;
        case 8:
          this.birdYes = true;
          this.count = 5;
          this.paramsClass.gameDir = 'hor'
          this.levelsNoFric = true;
          this.randomNoFric = 0;
          this.randomAnimateHor = 0;
          this.randomAnimateVert = 0;
          this.gameNum = 2;
          this.cameraSpeed = 0.01;
          randomWLevel = [3, 2, 2, 2, 1, 6, 5, 6, 5, 6, 5, 1];
          this.fixedDistanceHor.min = 2;
          break;
        case 9:
          this.gameNum = 3;
          this.birdYes = false;
          this.count = 6;
          this.paramsClass.gameDir = 'vert'
          this.levelsNoFric = true;
          this.randomAnimateHor = 0;
          this.randomAnimateVert = 0;
          this.cameraSpeed = 0.01;
          randomWLevel = [6, 4, 3, 2, 1, 6, 5, 6, 5, 6, 5, 6];
          grassSpeed = grassSpeed;
          break;
        case 10:
          this.birdYes = true;
          this.count = 10;
          this.paramsClass.gameDir = 'hor'
          this.levelsNoFric = false;
          this.randomNoFric = 0.5;
          this.randomAnimateHor = 0.5;
          this.randomAnimateVert = 0.5;
          this.gameNum = 1;
          this.cameraSpeed = 0.01;
          randomWLevel = [2, 2, 1, 1, 1, 1, 1, 1, 5, 6, 5, 0.5];
          this.fixedDistanceHor.min = 3;
          break;
      }


      if (this.paramsClass.gameDir == 'hor') {
        for (let i = 0; i < this.count; i++) {

          let randomW = getRandomNumber(this.planeWidth, this.planeWidth - 1);
          let randomX = previousX + randomW / 2 + getRandomNumber(this.fixedDistanceHor.min, this.fixedDistanceHor.max);
          let randomY = getRandomNumber(-1.2, 1.2) - this.planeHeight / 1.5;

          if (randomWLevel) randomW = randomWLevel[i];

          if (i == 0) {
            this.objs.planes.data[i].size.x = this.planeWidth;
            this.objs.planes.data[i].size.y = this.planeHeight;
            this.objs.planes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth;

            this.objs.topPlanes.data[i].size.x = this.planeWidth + 0.3;
            this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height;


            this.objs.grassPlanes.data[i].size.x = this.planeWidth + 0.3;
            this.objs.grassPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height;
            this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth * 1.2;
          }
          else if (i == 1) {
            this.objs.planes.data[i].size.x = randomW;
            this.objs.planes.data[i].size.y = this.planeHeight;

            this.objs.topPlanes.data[i].size.x = randomW + 0.3;
            this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height;

            this.objs.grassPlanes.data[i].size.x = randomW + 0.3;
            this.objs.grassPlanes.data[i].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height;
            this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth;
          }
          else if (i == this.count - 1) {
            !randomWLevel ? this.objs.planes.data[i].size.x = 5 : this.objs.planes.data[i].size.x = randomWLevel[randomWLevel.length - 1] - 0.2;
            this.objs.planes.data[i].size.y = this.planeHeight;

            !randomWLevel ? this.objs.topPlanes.data[i].size.x = 5 + 0.3 : this.objs.topPlanes.data[i].size.x = randomWLevel[randomWLevel.length - 1]; + 1;
            this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height;

            !randomWLevel ? this.objs.grassPlanes.data[i].size.x = 5 + 0.3 : this.objs.grassPlanes.data[i].size.x = randomWLevel[randomWLevel.length - 1]; + 1;
            this.objs.grassPlanes.data[i].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height;
            this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth;
          }
          else {
            this.objs.planes.data[i].size.x = randomW;
            this.objs.planes.data[i].size.y = this.planeHeight;

            this.objs.topPlanes.data[i].size.x = randomW + 0.3;
            this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height;

            this.objs.grassPlanes.data[i].size.x = randomW + 0.3;
            this.objs.grassPlanes.data[i].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height;
            this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth;

          }


          if (i == 0) {
            randomY = 1 - this.planeHeight / 1.5;
            this.objs.planes.data[i].position.x = 0;
            this.objs.planes.data[i].position.y = randomY + this.planeHeight / 6 - 1.5;

            this.objs.topPlanes.data[i].position.x = 0;
            this.objs.topPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 + 0.2 - 1.5;

            this.objs.grassPlanes.data[i].position.x = 0;
            this.objs.grassPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 - 1.5;









          }
          else if (i == 1) {
            this.objs.planes.data[i].position.x = randomX + this.fixedDistanceHor.min / 4;
            this.objs.planes.data[i].position.y = randomY + this.planeHeight / 6;

            this.objs.topPlanes.data[i].position.x = randomX + this.fixedDistanceHor.min / 4;
            this.objs.topPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 + 0.2;

            this.objs.grassPlanes.data[i].position.x = randomX + this.fixedDistanceHor.min / 4;
            this.objs.grassPlanes.data[i].position.y = randomY + this.planeHeight / 1.5;
          }
          else {
            this.objs.planes.data[i].position.x = randomX + this.fixedDistanceHor.min / 4;
            this.objs.planes.data[i].position.y = randomY + this.planeHeight / 6;

            this.objs.topPlanes.data[i].position.x = randomX + this.fixedDistanceHor.min / 4;
            this.objs.topPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 + 0.2;

            this.objs.grassPlanes.data[i].position.x = randomX + this.fixedDistanceHor.min / 4;
            this.objs.grassPlanes.data[i].position.y = randomY + this.planeHeight / 1.5;
          }

          this.objs.lamps.data[i].position.x = this.objs.grassPlanes.data[i].position.x;
          this.objs.lamps.data[i].position.z = -this.planeDepth / 4;
          this.objs.lamps.data[i].position.y = this.objs.grassPlanes.data[i].position.y + this.objs.grassPlanes.data[i].size.y / 2 + this.objs.lamps.lampHeight - 0.2;

          this.objs.plafons.data[i].position.x = this.objs.lamps.data[i].position.x;
          this.objs.plafons.data[i].position.z = this.objs.lamps.data[i].position.z;
          this.objs.plafons.data[i].position.y = this.objs.lamps.data[i].position.y + 1;

          this.objs.bulbs.data[i].position.x = this.objs.lamps.data[i].position.x;
          this.objs.bulbs.data[i].position.z = this.objs.lamps.data[i].position.z;
          this.objs.bulbs.data[i].position.y = this.objs.lamps.data[i].position.y + 1;


          if (this.lights.length < this.lightsCount) {

            const light = new THREE.PointLight(0xf7eaa8, 0, 4);
            light.position.set(0, 0, 1.6);
            this.lights.push(light)
            this.scene.add(light);
          }

          this.apply(i, this.objs.planes.data, this.objs.planes.plane);
          this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop);
          this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass);
          this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
          this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon);
          this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb);
          previousX = randomX + randomW / 2;
        }
        for (let i = 0; i < this.count; i++) {
          if (i > 1 && i < this.count - 1 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[i - 1].userData.moveHor) {
            this.objs.grassPlanes.data[i].userData.moveHor = {
              x1: this.objs.grassPlanes.data[i - 1].position.x,
              x2: this.objs.grassPlanes.data[i + 1].position.x,
              w1: this.objs.grassPlanes.data[i - 1].size.x / 2,
              w2: this.objs.grassPlanes.data[i + 1].size.x / 2,
            };
            this.objs.planes.data[i].position.y = -10;
          }
          if (i > 1 && i < this.count - 1 && Math.random() < this.randomAnimateVert) {

            this.objs.grassPlanes.data[i].userData.moveVert = {
              x1: this.objs.grassPlanes.data[i - 1].position.x,
              x2: this.objs.grassPlanes.data[i + 1].position.x,
              w1: this.objs.grassPlanes.data[i - 1].size.x / 2,
              w2: this.objs.grassPlanes.data[i + 1].size.x / 2,
            };
            this.objs.planes.data[i].position.y = -10;
          }

        }
      }
      else if (this.paramsClass.gameDir == 'vert') {


        this.birdYes = false;

        for (let i = 0; i < this.count; i++) {
          let randomW = getRandomNumber(this.bounds.rightX / this.minPlaneWidthTic, this.bounds.rightX / 5);

          if (randomWLevel) randomW = randomWLevel[i];

          this.minPlaneWidthTic += 0.1;

          if (Math.random() < 0.5) this.objs.grassPlanes.data[i].userData.direction = 1;
          else this.objs.grassPlanes.data[i].userData.direction = -1;



          let randomY = previousY + getRandomNumber(this.fixedDistanceVert.min, this.fixedDistanceVert.max);

          this.objs.topPlanes.data[i].position.y = randomY - 1.3;
          this.objs.grassPlanes.data[i].position.y = randomY;
          this.objs.sensorPlanes.data[i].position.y = randomY - 0.3;

          this.objs.topPlanes.data[i].size.y = 0.3;
          this.objs.grassPlanes.data[i].size.y = 0.7;
          this.objs.sensorPlanes.data[i].size.y = 0.9;


          if (i > 0) {
            this.objs.topPlanes.data[i].size.x = randomW + 0.3;
            this.objs.grassPlanes.data[i].size.x = randomW + 0.3
            this.objs.sensorPlanes.data[i].size.x = randomW + 0.7

          }
          else {
            this.objs.topPlanes.data[i].size.x = 10;
            this.objs.grassPlanes.data[i].size.x = 10;
            this.objs.sensorPlanes.data[i].size.x = 10;
          }



          this.objs.lamps.data[i].position.x = this.objs.grassPlanes.data[i].position.x;
          this.objs.lamps.data[i].position.z = -this.planeDepth / 4;
          this.objs.lamps.data[i].position.y = this.objs.grassPlanes.data[i].position.y + this.objs.grassPlanes.data[i].size.y / 2 + this.objs.lamps.lampHeight - 0.2;

          this.objs.plafons.data[i].position.x = this.objs.lamps.data[i].position.x;
          this.objs.plafons.data[i].position.z = this.objs.lamps.data[i].position.z;
          this.objs.plafons.data[i].position.y = this.objs.lamps.data[i].position.y + 1;

          this.objs.bulbs.data[i].position.x = this.objs.lamps.data[i].position.x;
          this.objs.bulbs.data[i].position.z = this.objs.lamps.data[i].position.z;
          this.objs.bulbs.data[i].position.y = this.objs.lamps.data[i].position.y + 1;

          this.objs.grassPlanes.data[i].userData.speed = getRandomNumber(6, 10) / 100;


          // if ((i + 1) % 7 === 0) {
          //   let newHat = this.boostHatModel.clone();
          //   newHat.position.x = getRandomNumber(this.bounds.leftX + 1, this.bounds.rightX - 1);
          //   newHat.position.y = this.objs.topPlanes.data[i].position.y + 0.5;
          //   this.boostHatModels.push(newHat)
          //   this.boostHatMeshes.push(newHat.children[0].children[0].children[0]);
          //   this.boostHatCoords.push([newHat.position.x, newHat.position.y]);
          //   this.scene.add(newHat);
          // }


          if (this.lights.length < this.lightsCount) {

            const light = new THREE.PointLight(0xf7eaa8, 0, 4);
            light.position.set(0, 0, 1.6);
            this.lights.push(light)
            this.scene.add(light);

          }


          this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop);
          this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass);
          this.apply(i, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor);
          this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
          this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon);
          this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb);

          previousY = randomY;

        }
      }



      if (this.paramsClass.gameDir == 'hor') this.objs.planes.plane.instanceMatrix.needsUpdate = true;
      if (this.paramsClass.gameDir == 'vert') this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = true;
      this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true;
      this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true;
      this.objs.lamps.lamp.instanceMatrix.needsUpdate = true;
      this.objs.plafons.plafon.instanceMatrix.needsUpdate = true;
      this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true;


      if (this.paramsClass.gameDir == 'hor') this.scene.add(this.objs.planes.plane)
      if (this.paramsClass.gameDir == 'vert') this.scene.add(this.objs.sensorPlanes.planeSensor)
      this.scene.add(this.objs.topPlanes.planeTop)
      this.scene.add(this.objs.grassPlanes.planeGrass)
      this.scene.add(this.objs.lamps.lamp)
      this.scene.add(this.objs.plafons.plafon)
      this.scene.add(this.objs.bulbs.bulb)


      if (this.isMobile) this.getHorizontalWorldBounds();
      else this.getHorizontalWorldBounds(-7);




    }


    else {
      this.getHorizontalWorldBounds();
      switch (this.gameNum) {

        case 1:
        case 2:
          this.paramsClass.gameDir = 'hor'
          let previousX = -2.5; // Начальная позиция по оси X

          for (let i = 0; i < this.count; i++) {

            let randomW = getRandomNumber(this.planeWidth / this.minPlaneWidthTic, this.planeWidth - 1);
            let randomX = previousX + randomW / 2 + getRandomNumber(this.fixedDistanceHor.min, this.fixedDistanceHor.max);
            let randomY = getRandomNumber(-1.2, 1.2) - this.planeHeight / 1.5;

            if (i > 20) this.fixedDistanceHor.max = 6;

            this.minPlaneWidthTic += 0.1;

            if (i > this.count - 20) {
              this.objs.planes.data[i].size.x = 0.1;
              this.objs.planes.data[i].size.y = this.planeHeight;

              this.objs.topPlanes.data[i].size.x = 0.2 + 0.3;
              this.objs.topPlanes.data[i].size.y = this.objs.topPlanes.geometryPlaneTop.parameters.height;

              this.objs.grassPlanes.data[i].size.x = 0.2 + 0.3;
              this.objs.grassPlanes.data[i].size.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height;
              this.objs.grassPlanes.data[i].size.z = this.objs.grassPlanes.geometryPlaneGrass.parameters.depth;
            }

            else if (i > 0) {
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


            if (i == 0) {
              randomY = 1 - this.planeHeight / 1.5;
              this.objs.planes.data[i].position.x = 0;
              this.objs.planes.data[i].position.y = randomY + this.planeHeight / 6 - 1.5;

              this.objs.topPlanes.data[i].position.x = 0;
              this.objs.topPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 + 0.2 - 1.5;

              this.objs.grassPlanes.data[i].position.x = 0;
              this.objs.grassPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 - 1.5;

            }

            else if (i == 1) {
              randomX = 6;
              this.objs.planes.data[i].position.x = randomX;
              this.objs.planes.data[i].position.y = randomY + this.planeHeight / 6;

              this.objs.topPlanes.data[i].position.x = randomX;
              this.objs.topPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 + 0.2;

              this.objs.grassPlanes.data[i].position.x = randomX;
              this.objs.grassPlanes.data[i].position.y = randomY + this.planeHeight / 1.5;

            }

            // else if (i > this.count - 10) {
            //   this.objs.planes.data[i].position.x = randomX + this.fixedDistanceHor.min * 2;
            //   this.objs.planes.data[i].position.y = randomY + this.planeHeight / 6;

            //   this.objs.topPlanes.data[i].position.x = randomX + this.fixedDistanceHor.min * 2;
            //   this.objs.topPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 + 0.2;

            //   this.objs.grassPlanes.data[i].position.x = randomX + this.fixedDistanceHor.min * 2;
            //   this.objs.grassPlanes.data[i].position.y = randomY + this.planeHeight / 1.5;
            // }

            // else if (i > 1 && i < 10) {
            //   this.objs.planes.data[i].position.x = randomX + this.fixedDistanceHor.min / 4;
            //   this.objs.planes.data[i].position.y = randomY + this.planeHeight / 6;

            //   this.objs.topPlanes.data[i].position.x = randomX + this.fixedDistanceHor.min / 4;
            //   this.objs.topPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 + 0.2;

            //   this.objs.grassPlanes.data[i].position.x = randomX + this.fixedDistanceHor.min / 4;
            //   this.objs.grassPlanes.data[i].position.y = randomY + this.planeHeight / 1.5;
            // }

            else if (i > 1) {
              this.objs.planes.data[i].position.x = randomX;
              this.objs.planes.data[i].position.y = randomY + this.planeHeight / 6;

              this.objs.topPlanes.data[i].position.x = randomX;
              this.objs.topPlanes.data[i].position.y = randomY + this.planeHeight / 1.5 + 0.2;

              this.objs.grassPlanes.data[i].position.x = randomX;
              this.objs.grassPlanes.data[i].position.y = randomY + this.planeHeight / 1.5;





            }

            // else {
            //   this.objs.planes.data[i].position.x = -this.planeWidth / 2;
            //   this.objs.planes.data[i].position.y = -this.planeHeight / 2 + 0.5;

            //   this.objs.topPlanes.data[i].position.x = -this.planeWidth / 2;
            //   this.objs.topPlanes.data[i].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + 0.4;

            //   this.objs.grassPlanes.data[i].position.x = -this.planeWidth / 2;
            //   this.objs.grassPlanes.data[i].position.y = this.objs.grassPlanes.geometryPlaneGrass.parameters.height / 2 + 0.3;
            // }



            this.objs.lamps.data[i].position.x = this.objs.grassPlanes.data[i].position.x;
            this.objs.lamps.data[i].position.z = -this.planeDepth / 4;
            this.objs.lamps.data[i].position.y = this.objs.grassPlanes.data[i].position.y + this.objs.grassPlanes.data[i].size.y / 2 + this.objs.lamps.lampHeight - 0.2;

            this.objs.plafons.data[i].position.x = this.objs.lamps.data[i].position.x;
            this.objs.plafons.data[i].position.z = this.objs.lamps.data[i].position.z;
            this.objs.plafons.data[i].position.y = this.objs.lamps.data[i].position.y + 1;

            this.objs.bulbs.data[i].position.x = this.objs.lamps.data[i].position.x;
            this.objs.bulbs.data[i].position.z = this.objs.lamps.data[i].position.z;
            this.objs.bulbs.data[i].position.y = this.objs.lamps.data[i].position.y + 1;




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
            this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb);
            previousX = randomX + randomW / 2;




          }

          for (let i = 0; i < this.count; i++) {
            if (i > 4 && i < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[i - 1].userData.moveHor) {
              this.objs.grassPlanes.data[i].userData.moveHor = {
                x1: this.objs.grassPlanes.data[i - 1].position.x,
                x2: this.objs.grassPlanes.data[i + 1].position.x,
                w1: this.objs.grassPlanes.data[i - 1].size.x / 2,
                w2: this.objs.grassPlanes.data[i + 1].size.x / 2,
              };
              this.objs.planes.data[i].position.y = -10;
            }
            if (i > 7 && i < this.count - 2 && Math.random() < this.randomAnimateHor && !this.objs.grassPlanes.data[i - 1].userData.moveHor && !this.objs.grassPlanes.data[i - 1].userData.moveVert) {

              this.objs.grassPlanes.data[i].userData.moveVert = {
                x1: this.objs.grassPlanes.data[i - 1].position.x,
                x2: this.objs.grassPlanes.data[i + 1].position.x,
                w1: this.objs.grassPlanes.data[i - 1].size.x / 2,
                w2: this.objs.grassPlanes.data[i + 1].size.x / 2,
              };
              this.objs.planes.data[i].position.y = -10;
            }
            if (this.objs.grassPlanes.data[i].position.y > this.maxHeight) this.maxHeight = this.objs.grassPlanes.data[i].position.y;


            if (i > 7 && Math.random() < 0.1 && !this.objs.grassPlanes.data[i].userData.moveHor && !this.objs.grassPlanes.data[i].userData.moveVert) {
              this.objs.livesBlocks.data[i].position.x = this.objs.grassPlanes.data[i].position.x - this.objs.grassPlanes.data[i].size.x / 2 + this.objs.livesBlocks.data[i].size.x / 2;
              this.objs.livesBlocks.data[i].position.y = this.objs.grassPlanes.data[i].position.y + this.objs.grassPlanes.data[i].size.y / 2 + this.objs.livesBlocks.data[i].size.y / 2 + 0.2;
              this.objs.livesBlocks.data[i].userData.startPos = this.objs.livesBlocks.data[i].position.clone();
            }
            this.apply(i, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);

            if (i > 2 && (i + 1) % 10 === 1) {
              let newHat = this.boostHatModel.clone();
              newHat.position.x = this.objs.grassPlanes.data[i].position.x;
              newHat.position.y = this.objs.topPlanes.data[i].position.y + 2;
              newHat.rotation.y = -Math.PI / 2;
              newHat.userData.num = i;
              this.boostHatModels.push(newHat)
              this.boostHatMeshes.push(newHat.children[0].children[0].children[0]);
              this.boostHatCoords.push([newHat.position.x, newHat.position.y]);
              this.scene.add(newHat);
            }

          }




          this.objs.planes.plane.instanceMatrix.needsUpdate = true;
          this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true;
          this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true;
          this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = true;
          this.objs.lamps.lamp.instanceMatrix.needsUpdate = true;
          this.objs.plafons.plafon.instanceMatrix.needsUpdate = true;
          this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true;


          this.scene.add(this.objs.planes.plane)
          this.scene.add(this.objs.topPlanes.planeTop)
          this.scene.add(this.objs.grassPlanes.planeGrass)
          this.scene.add(this.objs.livesBlocks.livesBlock)
          this.scene.add(this.objs.lamps.lamp)
          this.scene.add(this.objs.plafons.plafon)
          this.scene.add(this.objs.bulbs.bulb)

          this.angryBird.position.y = 50;
          this.angryBird.position.x = 40;
          this.scene.add(this.angryBird)


          break;

        case 3:
        case 4:

          this.paramsClass.gameDir = 'vert'
          let previousY = -5;
          this.birdYes = false;

          for (let i = 0; i < this.count; i++) {

            let randomW = getRandomNumber(7 / this.minPlaneWidthTic, 18 / this.minPlaneWidthTic);

            this.minPlaneWidthTic += 0.1;

            if (Math.random() < 0.5) this.objs.grassPlanes.data[i].userData.direction = 1;
            else this.objs.grassPlanes.data[i].userData.direction = -1;



            let randomY = previousY + getRandomNumber(this.fixedDistanceVert.min, this.fixedDistanceVert.max);

            this.objs.topPlanes.data[i].position.y = randomY - 1.3;
            this.objs.grassPlanes.data[i].position.y = randomY;
            this.objs.sensorPlanes.data[i].position.y = randomY - 0.3;

            this.objs.topPlanes.data[i].size.y = 0.3;
            this.objs.grassPlanes.data[i].size.y = 0.7;
            this.objs.sensorPlanes.data[i].size.y = 0.9;

            if (i > this.count - 20) {
              this.objs.topPlanes.data[i].size.x = randomW / 8 + 0.1;
              this.objs.grassPlanes.data[i].size.x = randomW / 8 + 0.1
              this.objs.sensorPlanes.data[i].size.x = randomW / 8 + 0.4

            }

            if (i > 0) {
              this.objs.topPlanes.data[i].size.x = randomW + 0.3;
              this.objs.grassPlanes.data[i].size.x = randomW + 0.3
              this.objs.sensorPlanes.data[i].size.x = randomW + 0.7

            }
            else {
              this.objs.topPlanes.data[i].size.x = 10;
              this.objs.grassPlanes.data[i].size.x = 10;
              this.objs.sensorPlanes.data[i].size.x = 10;
            }

            if (i > this.count - 10) {
              this.objs.grassPlanes.data[i].userData.speed = getRandomNumber(10, 14) / 100;
            }
            else {
              this.objs.grassPlanes.data[i].userData.speed = getRandomNumber(6, 10) / 100;
            }



            this.objs.lamps.data[i].position.x = this.objs.grassPlanes.data[i].position.x;
            this.objs.lamps.data[i].position.z = -this.planeDepth / 4;
            this.objs.lamps.data[i].position.y = this.objs.grassPlanes.data[i].position.y + this.objs.grassPlanes.data[i].size.y / 2 + this.objs.lamps.lampHeight - 0.2;

            this.objs.plafons.data[i].position.x = this.objs.lamps.data[i].position.x;
            this.objs.plafons.data[i].position.z = this.objs.lamps.data[i].position.z;
            this.objs.plafons.data[i].position.y = this.objs.lamps.data[i].position.y + 1;

            this.objs.bulbs.data[i].position.x = this.objs.lamps.data[i].position.x;
            this.objs.bulbs.data[i].position.z = this.objs.lamps.data[i].position.z;
            this.objs.bulbs.data[i].position.y = this.objs.lamps.data[i].position.y + 1;


            if ((i + 1) % 7 === 0) {
              let newHat = this.boostHatModel.clone();
              newHat.position.x = getRandomNumber(this.bounds.leftX + 1, this.bounds.rightX - 1);
              newHat.position.y = this.objs.topPlanes.data[i].position.y + 0.5;
              this.boostHatModels.push(newHat)
              this.boostHatMeshes.push(newHat.children[0].children[0].children[0]);
              this.boostHatCoords.push([newHat.position.x, newHat.position.y]);
              this.scene.add(newHat);
            }


            if (this.lights.length < this.lightsCount) {

              const light = new THREE.PointLight(0xf7eaa8, 0, 4);
              // light.position.set(this.objs.lamps.data[i].position.x, this.objs.lamps.data[i].position.y + 1, 1.6);
              light.position.set(0, 0, 1.6);
              this.lights.push(light)
              this.scene.add(light);

              // this.objs.lamps.data[i].userData.light = true;

            }


            this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop);
            this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass);
            this.apply(i, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor);
            this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
            this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon);
            this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb);

            previousY = randomY;

          }







          this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true;
          this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true;
          this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = true;
          this.objs.lamps.lamp.instanceMatrix.needsUpdate = true;
          this.objs.plafons.plafon.instanceMatrix.needsUpdate = true;
          this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true;

          this.scene.add(this.objs.topPlanes.planeTop)
          this.scene.add(this.objs.grassPlanes.planeGrass)
          this.scene.add(this.objs.sensorPlanes.planeSensor)
          this.scene.add(this.objs.lamps.lamp)
          this.scene.add(this.objs.plafons.plafon)
          this.scene.add(this.objs.bulbs.bulb)

          this.scene.add(this.mks)




          break;
      }
    }
    this.players.forEach((value, index, array) => {
      value.player.position.y = this.objs.grassPlanes.data[0].position.y + this.objs.grassPlanes.data[0].size.y;
      if (levelsMode || this.paramsClass.gameDir == 'vert') {
        value.player.userData.lives = 1;
        value.reLiveField();
      }
    })




  }

  getHorizontalWorldBounds(z = 0) {
    const ndcLeft = new THREE.Vector3(-1, 0, 0.5); // левый край в NDC
    const ndcRight = new THREE.Vector3(1, 0, 0.5); // правый край в NDC

    const ndcTop = new THREE.Vector3(0, 1, 0.5); // левый край в NDC
    const ndcBottom = new THREE.Vector3(0, -1, 0.5); // правый край в NDC

    // Преобразуем в мировые координаты
    ndcLeft.unproject(this.camera);
    ndcRight.unproject(this.camera);

    ndcTop.unproject(this.camera);
    ndcBottom.unproject(this.camera);

    // Если платформа не на камере, проецируем на плоскость Z = нужная глубина
    if (this.camera.isPerspectiveCamera) {
      const cameraPos = this.camera.position;

      const dirLeft = ndcLeft.clone().sub(cameraPos).normalize();
      const dirRight = ndcRight.clone().sub(cameraPos).normalize();

      const dirTop = ndcTop.clone().sub(cameraPos).normalize();
      const dirBottom = ndcBottom.clone().sub(cameraPos).normalize();

      const distance = (z - cameraPos.z) / dirLeft.z;

      const distance2 = (z - cameraPos.z) / dirBottom.z;

      const worldLeft = cameraPos.clone().add(dirLeft.multiplyScalar(distance));
      const worldRight = cameraPos.clone().add(dirRight.multiplyScalar(distance));

      const worldTop = cameraPos.clone().add(dirTop.multiplyScalar(distance2));
      const worldBottom = cameraPos.clone().add(dirBottom.multiplyScalar(distance2));

      // if (this.gameNum == 3 || this.gameNum == 4) {
      //   this.bounds = {
      //     leftX: worldLeft.x,
      //     rightX: worldRight.x,
      //     topY: 0,
      //     bottomY: 0
      //   };
      // }
      // else {
      this.bounds = {
        leftX: worldLeft.x,
        rightX: worldRight.x,
        topY: worldTop.y,
        bottomY: worldBottom.y
      };

      // }




    }

  }

  animateTops() {



    if (this.paramsClass.gameDir == 'hor') {
      let anyChanged = false;

      for (let i = 0; i < this.objs.grassPlanes.data.length; i++) {



        const grass = this.objs.grassPlanes.data[i];
        const body = grass.userData.body;     // должен быть после addInstancedKinematic
        const mh = grass.userData.moveHor;
        const mv = grass.userData.moveVert;


        if (body && (mh || mv)) {
          if (mh) {
            const cur = body.translation();
            // границы движения (между соседними платформами), с учётом половин их ширин
            const leftLimit = mh.x1 + mh.w1 + grass.size.x * 0.5;
            const rightLimit = mh.x2 - mh.w2 - grass.size.x * 0.5;

            // скорость — возьми фикс или из userData
            const speed = (grass.userData.speed ?? 0.05);
            if (cur.x >= rightLimit) grass.userData.direction = -1;
            if (cur.x <= leftLimit) grass.userData.direction = 1;

            const dx = grass.userData.direction * speed;
            const newX = cur.x + dx;

            // двигаем тело (кинематическое)
            body.setNextKinematicTranslation({ x: newX, y: cur.y, z: cur.z });

            // и обновляем графику от него
            grass.position.x = newX;

            this.objs.lamps.data[i].position.x = newX;
            this.objs.plafons.data[i].position.x = newX;
            this.objs.bulbs.data[i].position.x = newX;
            this.objs.topPlanes.data[i].position.x = newX;
          }
          else if (mv) {

            const cur = body.translation();
            const topLimit = 2;
            const bottomLimit = 0.5;

            const speed = (grass.userData.speed ?? 0.03);

            if (cur.y >= topLimit) grass.userData.direction = -1;
            if (cur.y <= bottomLimit) grass.userData.direction = 1;

            const dx = grass.userData.direction * speed;
            const newY = cur.y + dx;




            // двигаем тело (кинематическое)
            body.setNextKinematicTranslation({ x: cur.x, y: newY, z: cur.z });

            // и обновляем графику от него
            grass.position.y = newY;

            this.objs.lamps.data[i].position.y = newY + this.objs.lamps.lampHeight;
            this.objs.plafons.data[i].position.y = newY + this.objs.lamps.lampHeight + 1;
            this.objs.bulbs.data[i].position.y = newY + this.objs.lamps.lampHeight + 1;
            this.objs.topPlanes.data[i].position.y = newY + 0.2;


          }
        }

        for (let i = 0; i < this.objs.livesBlocks.data.length; i++) {

          if (this.objs.livesBlocks.data[i].userData.taked) {
            if (this.objs.livesBlocks.data[i].position.y < 10) {
              this.objs.livesBlocks.data[i].position.y += 0.001;
              this.objs.livesBlocks.data[i].rotation.y += 0.004;
            }
            else {
              this.objs.livesBlocks.data[i].userData.taked = false;
            }
          }

          else {
            this.objs.livesBlocks.data[i].rotation.y += 0.0004;
          }

          this.apply(i, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
        }

        this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = true;

        this.apply(i, this.objs.grassPlanes.data, this.objs.grassPlanes.planeGrass);
        this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop);
        this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
        this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon);
        this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb);
        anyChanged = true;
      }

      if (anyChanged) {
        this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true;
        this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true;
        this.objs.lamps.lamp.instanceMatrix.needsUpdate = true;
        this.objs.plafons.plafon.instanceMatrix.needsUpdate = true;
        this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true;
      }
    }

    if (this.paramsClass.gameDir == 'vert') {

      for (let i = 0; i < this.objs.grassPlanes.data.length; i++) {
        const grass = this.objs.grassPlanes.data[i];
        const top = this.objs.topPlanes.data[i];
        const sensor = this.objs.sensorPlanes.data[i];
        const lamps = this.objs.lamps.data[i];
        const plafons = this.objs.plafons.data[i];
        const bulbs = this.objs.bulbs.data[i];
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

        this.objs.lamps.data[i].position.x = newX;
        this.objs.plafons.data[i].position.x = newX;
        this.objs.bulbs.data[i].position.x = newX;

        this.objs.topPlanes.data[i].position.x = newX;
        this.objs.topPlanes.data[i].position.y = currentPos.y + 0.4;






        this.apply(i, this.objs.sensorPlanes.data, this.objs.sensorPlanes.planeSensor);
        this.apply(i, this.objs.topPlanes.data, this.objs.topPlanes.planeTop);
        this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
        this.apply(i, this.objs.plafons.data, this.objs.plafons.plafon);
        this.apply(i, this.objs.bulbs.data, this.objs.bulbs.bulb);





        top.position.set(newX, currentPos.y + 0.6, currentPos.z);
      }
      this.objs.sensorPlanes.planeSensor.instanceMatrix.needsUpdate = true;
      this.objs.topPlanes.planeTop.instanceMatrix.needsUpdate = true;
      this.objs.lamps.lamp.instanceMatrix.needsUpdate = true;
      this.objs.plafons.plafon.instanceMatrix.needsUpdate = true;
      this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true;
    }
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
        // if (i > this.count - 10) {
        //   this.objs.grassPlanes.planeGrass.setColorAt(i, new THREE.Color(0xff0000));
        // }
      }
      else {

        if (this.objs.grassPlanes.data[i].userData.moveHor) {

          this.objs.grassPlanes.data[i].userData.collide.setFriction(500);
        }
        else if (Math.random() < this.randomNoFric && i > 2 && !this.levelsNoFric) {

          this.objs.grassPlanes.data[i].userData.noFriction = true;
          this.objs.grassPlanes.data[i].userData.collide.setFriction(0);
          this.objs.grassPlanes.planeGrass.setColorAt(i, new THREE.Color(0xccccee));
        }
      }

      if (i > this.count - 10 && !this.levelsMode) {
        this.objs.grassPlanes.planeGrass.setColorAt(i, new THREE.Color(0xff0000));  //Красим последние 10 сложных блоков
      }
      if (i == this.count - 1 && this.levelsMode) {
        this.objs.grassPlanes.planeGrass.setColorAt(i, new THREE.Color(0x00ff00));
      }


    }


    if (this.paramsClass.gameDir == 'hor') { this.objs.planes.plane.instanceMatrix.needsUpdate = true; }
    this.objs.grassPlanes.planeGrass.instanceMatrix.needsUpdate = true;



  }



  levelAnimate() {



    // if (this.paramsClass.gameDir == 'hor') {
    //   if (this.players.length > 1) {
    //     this.scoreClass.updateMetersFloat(this.camera.position.x - this.scoreClass.startX, this.players);
    //   }
    //   else {
    //     this.scoreClass.updateMetersFloat(this.camera.position.x - this.scoreClass.startX - 6, this.players);
    //   }

    // }
    // else {
    //   this.scoreClass.updateMetersFloat(this.camera.position.y - this.scoreClass.startY, this.players);
    // }

    if (!this.levelsMode) {
      if (this.paramsClass.gameDir == 'hor') {
        this.scoreClass.updateMetersFloat(null, this.players, 'hor');
      } else {
        this.scoreClass.updateMetersFloat(null, this.players, 'vert');
      }
    }



    this.animateTops();
    this.lampsAnimate();
    if (this.gameClass.gameStarting) {
      if (this.worldClass.night) {
        if (this.paramsClass.gameDir == 'hor') this.audioClass.dayNight(false);
        else this.audioClass.dayNight(false, 'vert');
        this.audioClass.dayNight(false);
      }
      else {
        this.audioClass.dayNight(true);
      }
    }

    if (this.camera.position.x > this.objs.topPlanes.data[this.count - 2].position.x) {
      this.canShowAds = false;
    }


    this.boostHatModels.forEach((value, index, array) => {
      value.children[0].children[1].rotation.y += 0.05;

      if (this.worldClass.night && value.children[0].children[1].children[0].material.emissiveIntensity == 0) {
        value.children[0].children[1].children[0].material.emissiveIntensity = 0.1;
      }
      else if (!this.worldClass.night && value.children[0].children[1].children[0].material.emissiveIntensity != 0) {
        value.children[0].children[1].children[0].material.emissiveIntensity = 0.0;
      }
    })

    this.angryBirdModel.position.set(
      this.angryBird.position.x,
      this.angryBird.position.y - 0.2,
      this.angryBird.position.z + 0.9
    );
    this.angryBirdModel.userData.mixer.update(this.angryBirdModel.userData.clock.getDelta());

    if (this.birdYes) {

      if (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && !this.worldClass.thunder) {
        this.angryBird.userData.body.setTranslation({ x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird, y: getRandomNumber(this.maxHeight - 1.5, this.maxHeight + 1), z: this.angryBird.userData.body.translation().z });
        this.birdFlyingMark = this.birdFlyingMark + getRandomNumber(this.distanceToBird, this.distanceToBird + 10);
        this.angryBird.userData.speed = getRandomNumber(8, 13) / 100;
        this.angryBird.userData.flying = true;
      }
      else if (this.players[this.maxSpeed()].player.position.x > this.birdFlyingMark && !this.angryBird.userData.flying && this.worldClass.thunder) {
        this.birdFlyingMark = this.birdFlyingMark + getRandomNumber(this.distanceToBird, this.distanceToBird + 10);
      }

      if (this.angryBird.userData.flying) {
        this.angryBird.userData.body.setNextKinematicTranslation({ x: this.angryBird.userData.body.translation().x -= this.angryBird.userData.speed, y: this.angryBird.userData.body.translation().y, z: this.angryBird.userData.body.translation().z });
        if (this.angryBird.userData.body.translation().x < this.players[this.maxSpeed()].player.position.x - 20) {
          this.angryBird.userData.body.setTranslation({ x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird, y: 20, z: this.angryBird.userData.body.translation().z });
          this.angryBird.userData.flying = false;
        }
      }
    }


  }

  makeGlowSprite() {
    const s = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this._glowTex,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    }));
    s.scale.set(10.4, 10.4, 10.4); // базовый размер ореола (будем ещё масштабировать)
    s.renderOrder = 20;
    return s;
  }

  lampsAnimate() {

    let bulbDirty = false;

    if (this.paramsClass.gameDir == 'hor') {

      const fadeSpeed = 0.05;            // скорость lerp ночью
      const fadeOutSpeed = 0.2;          // скорость гашения днём (быстрее)
      const maxI = this.lightIntensity;  // целевая ночная яркость

      if (this.worldClass.night && !this.worldClass.thunder) {
        this.lampsAnimate.did = false
        const left = this.camera.position.x - this.bounds.rightX / 1.3;
        const right = this.camera.position.x + this.bounds.rightX * 0.8;
        let colorsChanged = false;

        this.objs.plafons.data.forEach((plafon, index) => {


          // если свет назначен — удобнее хранить прямо на объекте
          let light = plafon.pointLight || null;

          const inZone = plafon.position.x >= left && plafon.position.x <= right;
          const idx = index;

          if (inZone) {
            if (!plafon.pointLight && this.lights.length > 0) {
              const light = this.lights.shift();
              plafon.pointLight = light;
              // спрайт ореола
              plafon.glow = (this.glowPool.pop() || this.makeGlowSprite());
              this.scene.add(plafon.glow);

            }
          } else {
            // просто помечаем, гашение сделаем плавно ниже
          }

          if (plafon.pointLight) {
            const light = plafon.pointLight;
            // позиция света и спрайта
            light.position.set(this.objs.lamps.data[idx].position.x,
              this.objs.lamps.data[idx].position.y + 1,
              this.objs.lamps.data[idx].position.z + 2);

            plafon.glow.position.set(this.objs.lamps.data[idx].position.x,
              this.objs.lamps.data[idx].position.y + 1,
              this.objs.lamps.data[idx].position.z + 0);


            // целевая яркость
            const targetI = inZone ? this.lightIntensity : 0;
            light.intensity = THREE.MathUtils.lerp(light.intensity, targetI, 0.15);

            // эмиссия лампочки (0..1)
            const targetE = inZone ? 1.0 : 0.0;
            this._emissive[idx] = THREE.MathUtils.lerp(this._emissive[idx], targetE, 0.18);

            this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = true;

            // размер ореола в зависимости от яркости
            const s = 0.5 + this._emissive[idx] * 0.8;
            if (plafon.glow) plafon.glow.scale.setScalar(s);



            /*-------------------*/

            // на сколько максимум увеличиваем лампочку при полном свечении
            const maxGrow = 1.1; // +35% к базовому размеру
            const e = this._emissive[idx];        // 0..1, ты уже его сглаживаешь
            const factor = 1.0 + maxGrow * e;       // 1.0 .. 1.35

            const base = this.objs.bulbs.baseSize;
            const d = this.objs.bulbs.data[idx];

            // чтобы не дергать GPU лишний раз — обновляем только если реально изменилось
            if (d.userData._lastBulbFactor !== factor) {
              d.size.set(base.x * factor, base.y * factor, base.z * factor);
              this.apply(idx, this.objs.bulbs.data, this.objs.bulbs.bulb);
              d.userData._lastBulbFactor = factor;
              bulbDirty = true; // см. переменную ниже
            }



            /*-----------------*/

            // вернуть в пул, когда погас
            if (!inZone && light.intensity <= 0.01 && this._emissive[idx] <= 0.02) {
              this.lights.push(light);
              plafon.pointLight = null;

              if (plafon.glow) {
                this.glowPool.push(plafon.glow);
                this.scene.remove(plafon.glow);
                plafon.glow = null;
              }
            }
          }
        });

        if (bulbDirty) this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true;

        if (colorsChanged) {
          this.objs.plafons.plafon.instanceColor.needsUpdate = true;
        }
      }
      else {
        // каждый кадр днём гасим всё до нуля
        let colorsChanged = false;

        this.objs.plafons.data.forEach((plafon, index) => {
          const light = plafon.pointLight;

          if (light) {
            // подтягиваем к актуальной позиции лампы перед гашением
            const p = this.objs.lamps.data[index].position;
            light.position.set(p.x, p.y + 1, p.z + 2);
            if (plafon.glow) plafon.glow.position.set(p.x, p.y + 1, p.z);

            // теперь гасим
            light.intensity = THREE.MathUtils.lerp(light.intensity, 0, 0.2);
            if (light.intensity <= 0.01) {
              light.intensity = 0;
              this.lights.push(light);
              plafon.pointLight = null;
              plafon.userData.light = false;

              if (plafon.glow) {
                this.scene.remove(plafon.glow);
                this.glowPool.push(plafon.glow);
                plafon.glow = null;
              }
            }
          }

          // дневной цвет (если хочешь единоразово — оставь, вреда нет)
          this.objs.plafons.plafon.setColorAt(index, this._dayColor);
          colorsChanged = true;

          // обнуляем эмиссию КОРРЕКТНО
          if (this._emissive && this._emissive.length > index) {
            this._emissive[index] = 0;
          }
          // на сколько максимум увеличиваем лампочку при полном свечении
          const maxGrow = 1.1; // +35% к базовому размеру
          const e = this._emissive[index];        // 0..1, ты уже его сглаживаешь
          const factor = 1.0 + maxGrow * e;       // 1.0 .. 1.35

          const base = this.objs.bulbs.baseSize;
          const d = this.objs.bulbs.data[index];

          // чтобы не дергать GPU лишний раз — обновляем только если реально изменилось
          if (d.userData._lastBulbFactor !== factor) {
            d.size.set(base.x * factor, base.y * factor, base.z * factor);
            this.apply(index, this.objs.bulbs.data, this.objs.bulbs.bulb);
            d.userData._lastBulbFactor = factor;
            bulbDirty = true; // см. переменную ниже
          }
        });
        if (bulbDirty) this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true;
        if (colorsChanged) {
          this.objs.plafons.plafon.instanceColor.needsUpdate = true;
          if (this.objs.bulbs?.geometryBulb?.attributes?.aEmissive) {
            this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = true;
          }
        }
      }

    }
    else if (this.paramsClass.gameDir == 'vert') {

      const fadeSpeed = 0.05;            // скорость lerp ночью
      const fadeOutSpeed = 0.2;          // скорость гашения днём (быстрее)
      const maxI = this.lightIntensity;  // целевая ночная яркость



      if (this.worldClass.night) {
        this.lampsAnimate.did = false
        const left = this.camera.position.y - this.bounds.topY / 1;
        const right = this.camera.position.y + this.bounds.topY * 0.8;
        let colorsChanged = false;


        this.objs.plafons.data.forEach((plafon, index) => {


          // если свет назначен — удобнее хранить прямо на объекте
          let light = plafon.pointLight || null;

          const inZone = plafon.position.y >= left && plafon.position.y <= right;
          const idx = index;

          if (inZone) {
            if (!plafon.pointLight && this.lights.length > 0) {
              const light = this.lights.shift();
              plafon.pointLight = light;
              // спрайт ореола
              plafon.glow = (this.glowPool.pop() || this.makeGlowSprite());
              this.scene.add(plafon.glow);
            }
          } else {
            // просто помечаем, гашение сделаем плавно ниже
          }

          if (plafon.pointLight) {
            const light = plafon.pointLight;
            // позиция света и спрайта
            light.position.set(this.objs.lamps.data[idx].position.x,
              this.objs.lamps.data[idx].position.y + 1,
              this.objs.lamps.data[idx].position.z + 2);
            plafon.glow.position.copy(plafon.position);



            // целевая яркость
            const targetI = inZone ? this.lightIntensity : 0;
            light.intensity = THREE.MathUtils.lerp(light.intensity, targetI, 0.15);

            // эмиссия лампочки (0..1)
            const targetE = inZone ? 1.0 : 0.0;
            this._emissive[idx] = THREE.MathUtils.lerp(this._emissive[idx], targetE, 0.18);
            this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = true;

            // размер ореола в зависимости от яркости
            const s = 0.8 + this._emissive[idx] * 0.8;
            if (plafon.glow) plafon.glow.scale.setScalar(s);

            /*-------------------*/

            // на сколько максимум увеличиваем лампочку при полном свечении
            const maxGrow = 1.0; // +35% к базовому размеру
            const e = this._emissive[idx];        // 0..1, ты уже его сглаживаешь
            const factor = 1 + maxGrow * e;       // 1.0 .. 1.35

            const base = this.objs.bulbs.baseSize;
            const d = this.objs.bulbs.data[idx];

            // чтобы не дергать GPU лишний раз — обновляем только если реально изменилось
            if (d.userData._lastBulbFactor !== factor) {
              d.size.set(base.x * factor, base.y * factor, base.z * factor);
              this.apply(idx, this.objs.bulbs.data, this.objs.bulbs.bulb);
              d.userData._lastBulbFactor = factor;
              bulbDirty = true; // см. переменную ниже
            }



            /*-----------------*/

            // вернуть в пул, когда погас
            if (!inZone && light.intensity <= 0.01 && this._emissive[idx] <= 0.02) {
              this.lights.push(light);
              plafon.pointLight = null;

              if (plafon.glow) {
                this.glowPool.push(plafon.glow);
                this.scene.remove(plafon.glow);
                plafon.glow = null;
              }


            }
          }
        });
        if (bulbDirty) this.objs.bulbs.bulb.instanceMatrix.needsUpdate = true;
        if (colorsChanged) {
          this.objs.plafons.plafon.instanceColor.needsUpdate = true;
        }
      }
      else {
        // каждый кадр днём гасим всё до нуля
        let colorsChanged = false;


        this.objs.plafons.data.forEach((plafon, index) => {
          const light = plafon.pointLight;

          if (!plafon.pointLight && this._emissive[index] === 0) {
            return;
          }

          if (light) {
            // плавно к нулю (можно и быстрее, чем ночью)
            light.intensity = THREE.MathUtils.lerp(light.intensity, 0, 1);
            if (light.intensity <= 0.01) {
              light.intensity = 0;
              this.lights.push(light);
              plafon.pointLight = null;
              plafon.userData.light = false;

              // убрать ореол
              if (plafon.glow) {
                this.scene.remove(plafon.glow);
                this.glowPool.push(plafon.glow);
                plafon.glow = null;
              }

            }
          }

          // дневной цвет (если хочешь единоразово — оставь, вреда нет)
          this.objs.plafons.plafon.setColorAt(index, this._dayColor);
          colorsChanged = true;

          // обнуляем эмиссию КОРРЕКТНО
          if (this._emissive && this._emissive.length > index) {
            this._emissive[index] = 0;
          }
        });



        if (colorsChanged) {
          this.objs.plafons.plafon.instanceColor.needsUpdate = true;
          if (this.objs.bulbs?.geometryBulb?.attributes?.aEmissive) {
            this.objs.bulbs.geometryBulb.attributes.aEmissive.needsUpdate = true;
          }
        }
      }

    }

  }


  // needDeath(player = false) {

  //   if (player && player.position.y > -1) {
  //     this.audioClass.playMusic(['inwater']);
  //     player.userData.body.setTranslation(new THREE.Vector3(0, -5, 0));
  //     player.userData.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
  //     player.userData.live = false;
  //   }
  //   else if (!player) {
  //     this.audioClass.playMusic(['inwater']);
  //     this.players.forEach((value, index, array) => {
  //       if (value.player.position.y > 0) {
  //         value.player.userData.body.setTranslation(new THREE.Vector3(0, -5, 0));
  //         value.player.userData.body.setLinvel({ x: 0, y: 0, z: 0 }, true);
  //         value.player.userData.live = false;
  //       }
  //     })
  //   }
  // }



  resetLevel() {
    // if (this.paramsClass.gameDir == 'hor') {
    //   for (let i = 0; i < this.count; i++) {
    //     if (i < this.lightsCount) {
    //       this.lights[i].position.set(this.objs.lamps.data[i].position.x, this.objs.lamps.data[i].position.y + 1, 1.6);
    //       this.bulbs[i].position.copy(new THREE.Vector3(this.lights[i].position.x, this.lights[i].position.y, this.objs.lamps.data[i].position.z));
    //       this.objs.lamps.data[i].userData.light = true;
    //       this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
    //     }
    //     else {
    //       this.objs.lamps.data[i].userData.light = false;
    //       this.apply(i, this.objs.lamps.data, this.objs.lamps.lamp);
    //     }
    //   }
    //   this.objs.lamps.lamp.instanceMatrix.needsUpdate = true;
    // }
  }



  maxSpeed(cam = false) {
    let players;
    if (cam) players = this.players.filter((value, index, array) => { return value.player.userData.live });
    else players = this.players;

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
      if (players[i].player && players[i].player.userData.live && players[i].player.position) {
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
      }
      // } else {
      //   console.warn(`Player at index ${i} is missing player or position properties.`);
      // }
    }

    if (cam) return this.players.indexOf(players[maxIndex], 0);
    else return maxIndex;





  }


  async loadPlayers() {



    this.reloadLevel();


    for (let i = 0; i < this.players.length; i++) {
      let player = this.players[i];


      if (!this.levelsMode) player.reLiveField();



      player.player.position.x = player.player.position.x - i * 1 + 1;



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
    this.playersLoaded = true;
  }






  cameraMove(camera, dt = this.dt.getDelta()) {




    switch (this.gameNum) {
      case 1:
        if (this.gameClass.gameStarting) camera.position.x += this.cameraSpeed * 3;
        this.cameraSpeed += 0.000001;
        camera.position.y = this.isMobile ? 2.5 : 3;
        camera.position.z = this.isMobile ? 25 : 30;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 2: {
        const leadIdx = Math.max(0, this.maxSpeed(true));
        if ((leadIdx >= 0 && !this.worldClass.thunder) || this.levelsMode) {
          let leadX = 0;

          // if (this.players.length > 1) leadX = this.players[leadIdx].player.position.x;
          // else if (this.paramsClass.gameDir == 'hor') leadX = this.players[leadIdx].player.position.x + this.bounds.rightX / 2;


          if (this.players.filter(item => item.player.userData.live).length != 1) {
            leadX = this.players[leadIdx].player.position.x;
          }
          else if (this.paramsClass.gameDir == 'hor') {
            leadX = this.players[leadIdx].player.position.x + this.bounds.rightX / 2;


          }



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
            0.35, // smoothTime: 0.25 сек до сходимости
            dt
          );
          /*if (camera.position.x - leadX < 1) */camera.position.x = s.newPos;
          this.cam.velX = s.newVel;

          // Остальные координаты
          camera.position.y = this.isMobile ? 2.5 : 3; //3.5
          camera.position.z = this.isMobile ? 25 : 30; //13
          camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        }
        else if (this.worldClass.thunder || !this.levelsMode) {
          if (this.gameClass.gameStarting) camera.position.x += this.cameraSpeed * 2;
          camera.position.y = this.isMobile ? 3 : 3;
          camera.position.z = this.isMobile ? 25 : 30;
          camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        }

        break;
      }
      case 3:
        // this.getHorizontalWorldBounds();
        if (this.gameClass.gameStarting) camera.position.y += this.cameraSpeed;
        camera.position.x = 0;
        camera.position.z = this.isMobile ? 25 : 35;
        this.cameraSpeed += 0.000001;

        camera.lookAt(camera.position.x, camera.position.y - 2, 0);
        break;
      case 4:
        // this.getHorizontalWorldBounds();
        if (this.gameClass.gameStarting && this.playersLoaded) {
          if (this.players[this.maxSpeed()].player.userData.body.linvel().y > -20) {
            camera.position.y = this.players[this.maxSpeed()].player.position.y + 3.5;
          }
        }

        camera.position.x = 0;

        camera.position.z = this.isMobile ? 25 : 35;
        camera.lookAt(camera.position.x, camera.position.y - 2, 0);

        this.mks.material.opacity = this.worldClass.blackSky.material.opacity;

        if (camera.position.y > 20) {
          this.mks.position.x -= 0.02;
        }
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

  async showPopupInGame(showNext = false, levels = false) {
    this.hideScreen('popup_game_btn_close');
    this.hideScreen('menu_in_game');






    let newRec = 0;
    if (this.scoreClass.score > this.scoreClass.myRec) {
      this.scoreClass.myRec = this.scoreClass.score;
      newRec++
    }
    if (this.scoreClass.score > this.scoreClass.worldRec) {
      this.scoreClass.worldRec = this.scoreClass.score;
      newRec++
    }
    if (newRec) {

      if (this.paramsClass.gameDir === 'hor') {
        {
          const list = this.dataClass.table['hor'][this.players.length - 1];
          const row = list.find(isMy);
          if (row) row.rec = this.scoreClass.score;

          // await this.dataClass.saveResult(ysdk, `ocean${this.players.length}`, this.scoreClass.score);
          await this.dataClass.submitMyScore(ysdk, `ocean${this.players.length}`, this.scoreClass.score);
        }
      }
      else if (this.paramsClass.gameDir === 'vert') {
        {
          const list = this.dataClass.table['vert'][this.players.length - 1];
          const row = list.find(isMy);
          if (row) row.rec = this.scoreClass.score;

          // await this.dataClass.saveResult(ysdk, `space${this.players.length}`, this.scoreClass.score);
          await this.dataClass.submitMyScore(ysdk, `space${this.players.length}`, this.scoreClass.score);
        }
      }
      await this.dataClass.saveTableToCloud();
      await this.dataClass.loadTableFromCloud();

      // this.dataClass.loadLocalData();

      this.paramsClass.gameDir === 'hor' ? this.scoreClass.loadRecsToHud(0, this.players.length - 1) : this.scoreClass.loadRecsToHud(1, this.players.length - 1);

      this.menuClass.loadRecsData();
    }







    if (this.audioClass.oceanAudio.isPlaying) this.audioClass.oceanAudio.stop();
    if (this.audioClass.rainAudio.isPlaying) this.audioClass.rainAudio.stop();

    if (!this.gameClass.pause) {

      this.gameClass.showGamePopup = true;
      if (!this.levelsMode) {
        if (!showNext || !this.canShowAds) {
          this.hideScreen('popup_game_btn1')
        }
        else {
          this.showScreen('popup_game_btn1')
        }
        document.querySelector('.popup_in_game_wrap').classList.remove('popup_in_game_wrap_win');
        if (this.audioClass.looseAudio.isPlaying) this.audioClass.looseAudio.stop();
        if (this.audioClass.musicOn) this.audioClass.looseAudio.play();



      }
      else {
        if ((this.players.every(value => value.player.userData.finish) && this.dataClass.levelCoopMode == 'coop') || (this.players.some(value => value.player.userData.finish) && this.dataClass.levelCoopMode == 'contest')) {
          document.querySelector('.popup_in_game_wrap').classList.add('popup_in_game_wrap_win');

          if (this.audioClass.winAudio.isPlaying) this.audioClass.winAudio.stop();
          if (this.audioClass.musicOn) this.audioClass.winAudio.play();

          if (this.levelsMode < this.allLevels) this.showScreen('popup_game_btn15');

          this.hideScreen('popup_game_btn4');

          if (this.dataClass.levelCoopMode == 'coop') {
            let bonusHeart = false;
            let newLevel = false;
            this.players.forEach((value, index, array) => {
              if (this.levelsMode == this.allLevels) {
                this.dataClass.table.player.bonusHeart[index] = 10;
                bonusHeart = true;
              }

              if (this.levelsMode + 1 > this.dataClass.table.player.levels[index]) {
                this.dataClass.table.player.levels[index] = this.levelsMode;
                newLevel = true
              }

            })
            if (bonusHeart || newLevel) {
              await this.dataClass.saveTableToCloud();

            }
          }
          else if (this.dataClass.levelCoopMode == 'contest') {
            this.players.forEach(async (value, index, array) => {
              if (value.player.userData.finish) {
                if (this.dataClass.table.levelsStatusContest[this.levelsMode - 1] != index + 1) {

                  this.dataClass.table.levelsStatusContest[this.levelsMode - 1] = index + 1;
                  await this.dataClass.saveTableToCloud();

                }

              }
            })
          }


          // this.dataClass.loadLocalData();
          this.dataClass.loadLevels(this.players.length - 1)

        }
        else {
          this.hideScreen('popup_game_btn15');
          this.showScreen('popup_game_btn4');
          document.querySelector('.popup_in_game_wrap').classList.remove('popup_in_game_wrap_win');
        }
      }
    }
    else {
      document.querySelector('.popup_in_game_wrap').classList.add('popup_in_game_wrap_win');
      this.hideScreen('popup_game_btn15')
      this.hideScreen('popup_game_btn1')
      if (this.levelsMode) this.showScreen('popup_game_btn4');

    }





    this.showScreen('popup_in_game');
    this.gameClass.gameStarting = false;


  }

  async reloadLevel(clelNum = -1) {

    if (this.paramsClass.gameDir == 'hor' && !this.levelsMode) {
      if (clelNum >= 0) {
        let player = this.players[clelNum];
        if (this.dataClass.table.player.bonusHeart[clelNum]) {


          player.player.userData.maxLives = 4;
          player.player.userData.lives = player.player.userData.maxLives;
          player.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[clelNum];

          this.dataClass.table.player.bonusHeart[clelNum]--;

        }
        else {
          player.player.userData.maxLives = 3;
          player.player.userData.lives = player.player.userData.maxLives;
        }
      }
      else {

        let masPos = [0, -1, 1]


        for (let i = 0; i < this.players.length; i++) {
          let player = this.players[i];
          let randNum = Math.floor(Math.random() * masPos.length);

          if (!this.levelsMode) {
            player.reLiveField();

            player.player.position.x = player.player.position.x - i * 0.3 + 1;
          }
          else {
            player.player.position.x = masPos[randNum];
          }



          masPos.splice(randNum, 1)

          if (this.dataClass.table.player.bonusHeart[i]) {

            player.player.userData.maxLives = 4;
            player.player.userData.lives = player.player.userData.maxLives;
            player.player.userData.bonusHeart = this.dataClass.table.player.bonusHeart[i];

            this.dataClass.table.player.bonusHeart[i]--;


          }
          else {
            player.player.userData.maxLives = 3;
            player.player.userData.lives = player.player.userData.maxLives;
          }
          if (!this.levelsMode) player.reLiveField();

        }
      }

      await this.dataClass.saveTableToCloud();
      // this.dataClass.loadLocalData();
    }
  }

  rebindButton(selector, handler) {
    const oldButton = document.querySelector(selector);
    const newButton = oldButton.cloneNode(true); // клонирование удаляет все старые слушатели
    oldButton.parentNode.replaceChild(newButton, oldButton);
    newButton.addEventListener('click', handler);
    return newButton;
  }



  menuInGame = () => {



    async function showFullscreenAdvSafe() {
      return new Promise((resolve) => {
        ysdk.adv.showFullscreenAdv({
          callbacks: {
            onOpen: () => console.log('Ad opened'),
            onClose: (wasShown) => {
              console.log('Ad closed', wasShown);
              resolve(wasShown); // продолжаем выполнение
            },
            onError: (err) => {
              console.warn('Ad error', err);
              resolve(false); // всё равно продолжаем
            },
          },
        });
      });
    }

    this.rebindButton('.popup_game_btn1', async () => {

      if (!this.audioClass.oceanAudio.isPlaying) this.audioClass.oceanAudio.play();
      this.boostHatModels.forEach((value, index, array) => {
        value.userData.fly = false;
      })
      let mas = [];
      this.players.forEach((value, index, array) => {
        mas.push(value.player.position.x);
      })

      this.players.forEach((value, index, array) => {

        value.playerAliving(false);
        value.player.userData.lives = 1;
        value.player.position.x = Math.max(...mas);
        this.camera.position.x = value.player.position.x;
      })




      this.audioClass.pauseMusic(['back']);
      this.audioClass.playMusic(['back']);
      if (!this.levelsMode) this.canShowAds = false;
      this.gameClass.showGamePopup = false;

      this.hideScreen('popup_in_game');
    })

    this.rebindButton('.popup_game_btn2', async () => {




      this.audioClass.hardStopAll();
      await showFullscreenAdvSafe();



      let masPos = [0, -1, 1]

      this.players.forEach((value, index, array) => {
        value.player.userData.live = false;
        value.player.userData.score = 0;
        value.player.userData._lastMeterPos = null;
        value.player.userData._wasLive = false;
        value.player.userData.body.setTranslation(new THREE.Vector3(0, -5, 0));

        value.player.userData.finish = false;
        value.playerAliving(true);

        if (this.levelsMode) {
          let player = this.players[index];
          let randNum = Math.floor(Math.random() * masPos.length);
          player.player.userData.startPos.x = masPos[randNum];
          masPos.splice(randNum, 1)
        }
        else {
          value.player.position.x = value.player.position.x - index * 1 + 1;
        }
      })

      if (this.gameNum == 1 || this.gameNum == 3) {
        // this.camera.position.z = 7;
        this.camera.position.y = 0;
        this.camera.position.x = 0;
        this.cameraSpeed = 0.01;
      }

      this.canShowAds = true;

      if (this.birdYes) {
        setTimeout(() => {
          this.birdFlyingMark = 10;
          this.angryBird.userData.body.setTranslation({ x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird, y: 20, z: this.angryBird.userData.body.translation().z });
          this.angryBird.userData.flying = false;
        }, 100);
      }
      this.boostHatModels.forEach((value, index, array) => {
        value.position.x = this.boostHatCoords[index][0];
        value.position.y = this.boostHatCoords[index][1];
        value.userData.fly = false;
      })

      for (let i = 0; i < this.objs.livesBlocks.data.length; i++) {
        this.objs.livesBlocks.data[i].position = this.objs.livesBlocks.data[i].userData.startPos;
        this.apply(i, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
      }
      this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = true;


      this.audioClass.stopMusic(['back']);
      this.audioClass.playMusic(['back']);
      this.audioClass.stopMusic(['ocean']);
      this.audioClass.playMusic(['ocean']);

      this.camera.position.x = 0;



      this.gameClass.pause = false;
      this.gameClass.showGamePopup = false;

      this.hideScreen('popup_in_game');


    })
    this.rebindButton('.popup_game_btn15', async () => {

      this.audioClass.hardStopAll();
      await showFullscreenAdvSafe();
      this.paramsClass.dataLoaded = false;
      disposeScene(this.scene);
      this.audioClass.stopMusic(0);



      setTimeout(() => {
        let level = this.levelsMode < this.allLevels ? this.levelsMode + 1 : 1;

        if (level == this.allLevels) this.hideScreen('popup_game_btn15');

        this.initMatch(this.players.length, this.gameNum, level, this.birdYes);
      }, 100);
      setTimeout(() => {
        this.players.forEach((value, index, array) => {
          value.playerAliving(true);
        })
      }, 100);

      this.gameClass.showGamePopup = false;

      this.hideScreen('popup_in_game');

      // if (this.gameNum == 1 || this.gameNum == 3) {
      //   this.camera.position.z = 7;
      //   this.camera.position.y = 2;
      //   this.camera.position.x = 0;
      //   this.cameraSpeed = 0.01;
      // }
      // this.canShowAds = true;

      // if (this.birdYes) {
      //   setTimeout(() => {
      //     this.birdFlyingMark = 10;
      //     this.angryBird.userData.body.setTranslation({ x: this.birdFlyingMark + this.bounds.rightX + this.distanceToBird, y: 20, z: this.angryBird.userData.body.translation().z });
      //     this.angryBird.userData.flying = false;
      //   }, 100);
      // }
      // this.boostHatModels.forEach((value, index, array) => {
      //   value.position.x = this.boostHatCoords[index][0];
      //   value.position.y = this.boostHatCoords[index][1];
      //   value.userData.fly = false;
      // })

      // for (let i = 0; i < this.objs.livesBlocks.data.length; i++) {
      //   this.objs.livesBlocks.data[i].position = this.objs.livesBlocks.data[i].userData.startPos;
      //   this.apply(i, this.objs.livesBlocks.data, this.objs.livesBlocks.livesBlock);
      // }
      // this.objs.livesBlocks.livesBlock.instanceMatrix.needsUpdate = true;


      // this.audioClass.stopMusic(['back']);
      // this.audioClass.playMusic(['back']);

    })
    this.rebindButton('.popup_game_btn3', async () => {
      this.audioClass.hardStopAll();
      await showFullscreenAdvSafe();
      this.gameClass.pause = false;
      this.gameClass.showGamePopup = false;
      this.hideScreen('popup_in_game');
      this.showScreen('main_screen');
      // this.players.forEach((value, index, array) => {
      //   value.playerAliving(true);
      // })
      this.paramsClass.dataLoaded = false;
      disposeScene(this.scene);
      this.audioClass.stopMusic(0);
      this.dataClass.gameInit = false;

    })

    this.rebindButton('.popup_game_btn4', async () => {
      this.audioClass.hardStopAll();
      await showFullscreenAdvSafe();
      this.gameClass.pause = false;
      this.gameClass.showGamePopup = false;

      this.hideScreen('popup_in_game');

      if (this.dataClass.levelCoopMode == 'contest') {
        this.showScreen('levels_game_screen_contest');
      }
      else {
        this.showScreen('levels_game_screen');
      }

      this.paramsClass.dataLoaded = false;
      disposeScene(this.scene);
      this.audioClass.stopMusic(0);
      this.dataClass.gameInit = false;

    })
  }


  hideScreen(screen) {
    document.querySelector(`.${screen}`).classList.add('hidden_screen');
  }
  showScreen(screen) {
    document.querySelector(`.${screen}`).classList.remove('hidden_screen');
  }

}










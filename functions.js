import * as THREE from "three";


export function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}

export function detectDevice() {
    let isMobile = window.matchMedia || window.msMatchMedia;
    if (isMobile) {
        let match_mobile = isMobile("(pointer:coarse)");
        return match_mobile.matches;
    }
    return false;
}


export function detectCollisionCubes(object1, object2) {
    object1.geometry.computeBoundingBox();
    object2.geometry.computeBoundingBox();
    object1.updateMatrixWorld();
    object2.updateMatrixWorld();
    let box1 = object1.geometry.boundingBox.clone();
    box1.applyMatrix4(object1.matrixWorld);
    let box2 = object2.geometry.boundingBox.clone();
    box2.applyMatrix4(object2.matrixWorld);

    //if (box1.intersectsBox(box2)) $('.info').text(1);
    return box1.intersectsBox(box2);
}


export function detectCollisionCubeAndArray(object1, array) {
    object1.geometry.computeBoundingBox();

    array.forEach(function (item, index, array) {
        item.geometry.computeBoundingBox();
    });

    object1.updateMatrixWorld();
    array.forEach(function (item, index, array) {
        item.updateMatrixWorld();
    });

    let box1 = object1.geometry.boundingBox.clone();
    box1.applyMatrix4(object1.matrixWorld);

    var intersect = false;

    // array.forEach(function (item, index, array) {
    for (let i = array.length - 1; i > -1; i--) {

        if (array[i].userData.id == undefined || array[i].userData.id != object1.uuid) {
            let box2 = array[i].geometry.boundingBox.clone();
            box2.applyMatrix4(array[i].matrixWorld);

            if (box2.intersectsBox(box1)) {
                intersect = array[i];
            }
        }

    }
    // });



    //if (intersect.userData.id == object1.uuid) {
    // console.log(object1.uuid)
    // console.log(intersect.userData.id)
    //}



    return intersect;



}



export function groupArrayToMask(groupsArray) {
    // Например, [0, 2, 3] → 0b1101 = 13
    return groupsArray.reduce((mask, groupNum) => mask | (1 << groupNum), 0);
}

export function makeCollisionMaskFromArrays(membershipGroups, filterGroups) {
    const membership = groupArrayToMask(membershipGroups);
    const filter = groupArrayToMask(filterGroups);
    const mask = ((membership & 0xFFFF) << 16) | (filter & 0xFFFF);
    return '0x' + mask.toString(16).padStart(8, '0');
}

export function getObjectGroupInfo(collider) {
    // Получаем 32-битное число групп
    const collisionGroups = collider.collisionGroups();
    // Старшие 16 бит — membership, младшие 16 бит — filter
    const membershipMask = (collisionGroups >>> 16) & 0xFFFF;
    const filterMask = collisionGroups & 0xFFFF;

    function maskToGroupArray(mask) {
        const groups = [];
        for (let i = 0; i < 16; i++) {
            if (mask & (1 << i)) groups.push(i);
        }
        return groups;
    }

    return [maskToGroupArray(membershipMask), maskToGroupArray(filterMask)];
}



// number | {x,y,z} | THREE.Vector3 -> THREE.Vector3
function toVec3(v) {
    if (typeof v === "number") return new THREE.Vector3(v, v, v);
    if (v?.isVector3) return v;
    return new THREE.Vector3(v?.x ?? 1, v?.y ?? 1, v?.z ?? 1);
}

// берём некий идентификатор, чтобы можно было игнорить "самого себя"
function getAnyId(x) {
    return x?.userData?.id ?? x?.uuid ?? x?.id;
}

// AABB для любого источника:
// - THREE.Object3D: из geometry.boundingBox (или setFromObject как fallback)
// - Наш элемент: из size/rotation/quaternion/position (через матрицу)
const _unitBox = new THREE.Box3(
    new THREE.Vector3(-0.5, -0.5, -0.5),
    new THREE.Vector3(0.5, 0.5, 0.5)
);
const _mat = new THREE.Matrix4();
const _quat = new THREE.Quaternion();

function getAABB(src) {
    if (src?.isObject3D) {
        // Обновим матрицы и попробуем быстрый путь
        src.updateMatrixWorld(true);
        if (src.geometry?.isBufferGeometry) {
            const geom = src.geometry;
            if (!geom.boundingBox) geom.computeBoundingBox();
            if (geom.boundingBox) {
                const box = geom.boundingBox.clone();
                box.applyMatrix4(src.matrixWorld);
                return box;
            }
        }
        // Надёжный (чуть медленнее) fallback: по всему сабграфу
        return new THREE.Box3().setFromObject(src);
    }

    // Наш «данный» элемент
    const pos = src.position ?? src.pos ?? new THREE.Vector3();
    const size = toVec3(src.size ?? 1);
    const quat = src.quaternion?.isQuaternion
        ? src.quaternion
        : (src.rotation?.isEuler
            ? _quat.setFromEuler(src.rotation)
            : _quat.set(0, 0, 0, 1));

    _mat.compose(pos, quat, size);
    return _unitBox.clone().applyMatrix4(_mat); // AABB вращённого бокса в мире
}

/**
 * Проверка пересечения object1OrItem и элементов массива array.
 * Возвращает первый пересекающийся элемент массива или null.
 * Поддерживает элементы как THREE.Object3D, так и «наши» объекты-данные.
 */
export function detectCollisionCubeAndArrayInst(object1OrItem, array) {
    const box1 = getAABB(object1OrItem);
    const id1 = getAnyId(object1OrItem);

    // идём как в твоём коде — с конца к началу, чтобы совпадало по поведению
    for (let i = array.length - 1; i >= 0; i--) {
        const it = array[i];
        // пропускаем "самого себя", если id совпадает
        const id2 = getAnyId(it);
        if (id1 !== undefined && id2 !== undefined && id1 === id2) continue;

        const box2 = getAABB(it);
        if (box2.intersectsBox(box1)) {
            return it; // нашли первый пересекающийся
        }
    }
    return null;
}


export function disposeScene(scene) {
    scene.traverse((object) => {
        // Геометрия
        if (object.geometry) {
            object.geometry.dispose();
        }

        // Материалы
        if (object.material) {
            if (Array.isArray(object.material)) {
                object.material.forEach((m) => m.dispose());
            } else {
                object.material.dispose();
            }
        }

        // Текстуры
        if (object.material && object.material.map) {
            object.material.map.dispose();
        }
    });

    // Удалить всех детей
    while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
    }
}
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
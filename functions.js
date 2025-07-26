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
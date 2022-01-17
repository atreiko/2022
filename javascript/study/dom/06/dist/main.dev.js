"use strict";

var elem = document.querySelector('.lesson__item-list_blue');
elem.style.cssText = "\n  border: 1px solid black;\n"; // ======================================================

console.group('element styles:');
var elementStyles = getComputedStyle(elem);
console.log(elementStyles);
console.groupEnd();
console.group('element keys');

for (var key in elementStyles) {
  console.log(key);
}

console.groupEnd();
console.log(elementStyles.fontSize); // 16px
// ======================================================

var elementBeforeStyle = getComputedStyle(elem, 'after');
console.log(elementBeforeStyle.backgroundColor); // rgb(0, 0, 255)

var paddingLeft = parseInt(elementStyles.paddingLeft);
console.log(paddingLeft);
64;
elem.style.paddingRight = "".concat(paddingLeft, "px"); // 64px
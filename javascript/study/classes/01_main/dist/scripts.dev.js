"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function Car(brand, color) {
  _classCallCheck(this, Car);

  this.brand = brand;
  this.color = color;
};

var tesla = new Car('Tesla', 'Silver');
console.log(tesla);
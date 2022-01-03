"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Car =
/*#__PURE__*/
function () {
  function Car(brand, color) {
    _classCallCheck(this, Car);

    this.brand = brand;
    this.color = color;
  }

  _createClass(Car, [{
    key: "start",
    value: function start() {
      console.log("".concat(this.brand, " - ").concat(this.color, " - start"));
    }
  }, {
    key: "stop",
    value: function stop() {
      console.log("".concat(this.brand, " - STOP"));
    }
  }], [{
    key: "discount",
    value: function discount() {
      console.log('Общая скидка - 10%');
    }
  }]);

  return Car;
}();

var tesla = new Car('Tesla', 'Silver');
var nissan = new Car('Nissan', 'Red');
console.log(tesla.start()); // Tesla - Silver - start

console.log(nissan.stop()); // Nissan - STOP

console.log(Car.discount()); // Общая скидка - 10%
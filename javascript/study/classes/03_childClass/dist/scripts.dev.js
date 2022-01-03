"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Car =
/*#__PURE__*/
function () {
  function Car(brand) {
    _classCallCheck(this, Car);

    this.brand = brand;
    this.gasTank = 100;
    this.gasStation = [];
  }

  _createClass(Car, [{
    key: "getGas",
    value: function getGas() {
      this.gasTank += 10;
      var stamp = Date.now();
      var time = new Date(stamp);
      this.gasStation.push(time.toString());
      return this.gasTank;
    }
  }, {
    key: "drive",
    value: function drive() {
      this.gasTank -= 10;
      return this.gasTank;
    }
  }]);

  return Car;
}();

var nissan = new Car('Nissan');
console.log(nissan); // gasTank:100

nissan.drive();
console.log(nissan); // gasTank:90

nissan.getGas();
console.log(nissan); // gasTank:100

var HybridCar =
/*#__PURE__*/
function (_Car) {
  _inherits(HybridCar, _Car);

  function HybridCar(brand, model) {
    var _this;

    _classCallCheck(this, HybridCar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HybridCar).call(this, brand));
    _this.model = model;
    return _this;
  }

  _createClass(HybridCar, [{
    key: "autoParking",
    value: function autoParking() {
      this.gasTank -= 5;
      console.log('Automatic parking!');
    }
  }]);

  return HybridCar;
}(Car);

var lexus = new HybridCar('Lexus', 'CT200');
lexus.autoParking();
lexus.getGas();
console.log(lexus);
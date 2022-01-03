"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var template = document.createElement('template');
template.innerHTML = "\n    <style>\n\n        .tooltip-container {\n            display: inline-block;\n            position: relative;\n            z-index: 2;\n        }\n\n        svg {\n            width: 1em;\n            cursor: pointer;\n        }\n\n        .cancel {\n            display: none;\n        }\n\n        .notify-container {\n            position: absolute;\n            bottom: 125%;\n            background: #fff;\n            box-shadow: 5px 5px 10px rgba(0,0,0,0.1);\n            width: 300px;\n            font-size: .8em;\n            padding: 1em;\n            border-radius: .5em;\n            z-index: 9;\n            transform: scale(0);\n            transform-origin: bottom left;\n            transition: transform .5s cubic-bezier(0.860, 0.000, 0.070, 1.000);\n        }\n\n    </style>\n \n    <div class='tooltip-container'>\n        <svg class=\"alert\" enable-background=\"new 0 0 24 24\" id=\"Layer_1\" version=\"1.0\" viewBox=\"0 0 24 24\">\n            <path d=\"M13,17h-2v-2h2V17z M13,13h-2V7h2V13z\"/>\n            <g>\n                <path d=\"M12,4c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S7.6,4,12,4 M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10   C22,6.5,17.5,2,12,2L12,2z\"/>\n            </g>\n        </svg>\n\n        <svg class=\"cancel\" viewBox=\"0 0 48 48\">\n            <path d=\"M24 4c-11.05 0-20 8.95-20 20s8.95 20 20 20 20-8.95 20-20-8.95-20-20-20zm10 27.17l-2.83 2.83-7.17-7.17-7.17 7.17-2.83-2.83 7.17-7.17-7.17-7.17 2.83-2.83 7.17 7.17 7.17-7.17 2.83 2.83-7.17 7.17 7.17 7.17z\"/>\n            <path d=\"M0 0h48v48h-48z\" fill=\"none\"/>\n        </svg>\n\n        <div class=\"notify-container\">\n            <slot name=\"message\"/>\n        </div>\n    </div>\n";

var PopupNotify =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(PopupNotify, _HTMLElement);

  function PopupNotify() {
    var _this;

    _classCallCheck(this, PopupNotify);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PopupNotify).call(this));

    _this.attachShadow({
      mode: 'open'
    });

    _this.shadowRoot.appendChild(template.content.cloneNode(true));

    return _this;
  }

  _createClass(PopupNotify, [{
    key: "tooltip",
    value: function tooltip(expandState) {
      var tooltip = this.shadowRoot.querySelector('.notify-container');
      var alert = this.shadowRoot.querySelector('.alert');
      var cancel = this.shadowRoot.querySelector('.cancel');

      if (expandState) {
        tooltip.style.transform = 'scale(1)';
        alert.style.display = 'none';
        cancel.style.display = 'block';
        expandState = false;
      } else {
        tooltip.style.transform = 'scale(0)';
        cancel.style.display = 'none';
        alert.style.display = 'block';
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      this.shadowRoot.querySelector('.alert').addEventListener('click', function () {
        _this2.tooltip(true);
      });
      this.shadowRoot.querySelector('.cancel').addEventListener('click', function () {
        _this2.tooltip(false);
      });

      if (this.getAttribute('tip_background')) {
        this.shadowRoot.querySelector('.notify-container').style.background = this.getAttribute('tip_background');
      }

      if (this.getAttribute('tip_color')) {
        this.shadowRoot.querySelector('.notify-container').style.color = this.getAttribute('tip_color');
      }
    }
  }]);

  return PopupNotify;
}(_wrapNativeSuper(HTMLElement));

window.customElements.define('popup-notify', PopupNotify);
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Simple Substitution Cipher Helper
// A simple substitution cipher replaces one character from an alphabet with a character 
// from an alternate alphabet, where each character's position in an alphabet is mapped 
// to the alternate alphabet for encoding or decoding.
// var sub = new SubstitutionCipher(abc1, abc2);
// sub.encode("abc") // => "eta"
// sub.encode("xyz") // => "qxz"
// sub.encode("aeiou") // => "eirfg"
// sub.decode("eta") // => "abc"
// sub.decode("qxz") // => "xyz"
// sub.decode("eirfg") // => "aeiou"
var abc1 = "abcdefghijklmnopqrstuvwxyz";
var abc2 = "etaoinshrdlucmfwypvbgkjqxz";

var SubstitutionCipher =
/*#__PURE__*/
function () {
  function SubstitutionCipher(abc1, abc2) {
    _classCallCheck(this, SubstitutionCipher);

    this.abc1 = abc1;
    this.abc2 = abc2;
  }

  _createClass(SubstitutionCipher, [{
    key: "encode",
    value: function encode(str) {
      var result = [];

      for (var i = 0; i < str.length; i++) {
        if (!abc2.includes(str[i])) {
          result.push(str[i]);
        }

        for (var k = 0; k < abc1.length; k++) {
          if (str[i] === abc1[k]) {
            result.push(abc2[k]);
          }
        }
      }

      return result.join('');
    }
  }, {
    key: "decode",
    value: function decode(str) {
      var result = [];

      for (var i = 0; i < str.length; i++) {
        if (!abc1.includes(str[i])) {
          result.push(str[i]);
        }

        for (var k = 0; k < abc2.length; k++) {
          if (str[i] === abc2[k]) {
            result.push(abc1[k]);
          }
        }
      }

      return result.join('');
    }
  }]);

  return SubstitutionCipher;
}();

var sub = new SubstitutionCipher(abc1, abc2);
console.log(sub.encode('abc1'));
console.log(sub.decode('eta1'));
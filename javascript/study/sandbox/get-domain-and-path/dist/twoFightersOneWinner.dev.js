"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fighter = function Fighter(name, health, damagePerAttack) {
  _classCallCheck(this, Fighter);

  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;

  this.toString = function () {
    return this.name;
  };
};

var first = new Fighter('Artem', 1000, 100);
var second = new Fighter('Bill', 1200, 100);

var declareWinner = function declareWinner(fighter1, fighter2, firstAttacker) {
  var a = [fighter1, fighter2].find(function (v) {
    return v.name === firstAttacker;
  });
  var b = [fighter1, fighter2].find(function (v) {
    return v.name !== firstAttacker;
  });
  return Math.ceil(b.health / a.damagePerAttack) <= Math.ceil(a.health / b.damagePerAttack) ? a.name : b.name;
};

console.log(declareWinner(first, second, 'Artem'));
console.log(first);
console.log(second);
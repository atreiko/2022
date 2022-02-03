"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var people = [{
  name: 'Bill',
  money: 10000
}, {
  name: 'Jack',
  money: 100
}]; //todo Declarative approach

var getTotalFortuneOfTenRichest = function getTotalFortuneOfTenRichest(people) {
  return _toConsumableArray(people).sort(function (first, second) {
    return first.money - second.money;
  }).slice(0, 10).reduce(function (total, person) {
    return total + person.money;
  }, 0);
};

console.log(getTotalFortuneOfTenRichest(people)); //todo Alternative approach

var sortPeopleByMoney = function sortPeopleByMoney(people) {
  return _toConsumableArray(people).sort(function (first, second) {
    return first.money - second.money;
  });
};

var getTopOfPeople = function getTopOfPeople(people, count) {
  return people.slice(0, count);
};

var getTotalFortuneOfPeople = function getTotalFortuneOfPeople(people) {
  return people.reduce(function (total, person) {
    return total + person.money;
  }, 0);
};

var getTotalFortuneRichest = function getTotalFortuneRichest(people, count) {
  var sortedPeopleByMoney = sortPeopleByMoney(people);
  var topOfPeople = getTopOfPeople(sortedPeopleByMoney, count);
  return getTotalFortuneOfPeople(topOfPeople);
};

console.log(getTotalFortuneRichest(people));
"use strict";

var element = document.querySelector('.lesson__item-list_red');
var elementClassNames = element.className; // lesson__item-list lesson__item-list_red
// ======================================================

element.classList.add('active');
element.classList.remove('active');
element.classList.toggle('active');
element.classList.contains('active'); // ======================================================

var elem = document.querySelector('.lesson__item-list_blue');
elem.classList.add('active');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = elem.classList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var className = _step.value;
    console.log(className); // lesson__item-list
    // lesson__item-list_blue
    // active
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log(elem); // ======================================================
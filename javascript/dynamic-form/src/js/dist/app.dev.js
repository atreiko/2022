"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var flsFunctions = _interopRequireWildcard(require("./modules/functions.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

flsFunctions.isWebp();

function stepForm() {
  var steps = document.querySelectorAll('.form__step');
  var prevBtn = document.querySelector('.prev__step');
  var nextBtn = document.querySelector('.next__step');
  var form = document.querySelector('.steps__form');
  var stepNumbers = document.querySelectorAll('.step__number');
  var progress = document.querySelector('.progress__success');
  var finishBlock = document.querySelector('.finish');
  form.addEventListener('submit', function (e) {
    return e.preventDefault();
  });
  var formStepIndex = 0;
  prevBtn.addEventListener('click', function () {
    formStepIndex--;
    stepNumbers[formStepIndex + 1].classList.remove('active__number');
    updateFormSteps();
  });
  nextBtn.addEventListener('click', function () {
    if (formStepIndex < steps.length - 1) {
      formStepIndex++;
      updateFormSteps();
    }
  });

  function updateFormSteps() {
    steps.forEach(function (step) {
      step.classList.contains('active') && step.classList.remove('active');
    });
    steps[formStepIndex].classList.add('active');
    stepNumbers[formStepIndex].classList.add('active__number');

    if (formStepIndex === 0) {
      prevBtn.style.display = 'none';
    } else {
      prevBtn.style.display = 'block';
    }

    if (formStepIndex === steps.length - 1) {
      nextBtn.innerHTML = 'Finish';
      nextBtn.addEventListener('click', function () {
        finishBlock.style.display = 'block';
        form.style.display = 'none';
      });
    } else {
      nextBtn.innerHTML = 'Next';
    }

    var actives = document.querySelectorAll('.active__number');
    var percent = (actives.length - 1) / (stepNumbers.length - 1) * 100 + '%';
    progress.style.width = percent;
  }

  updateFormSteps();
}

if (document.querySelector('.form__step')) {
  stepForm();
}
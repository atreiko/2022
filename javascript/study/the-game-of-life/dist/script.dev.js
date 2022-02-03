"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var resolution = 10;
canvas.width = 700;
canvas.height = 700;
var COLS = canvas.width / resolution;
var ROWS = canvas.height / resolution;

function buildGrid() {
  return new Array(COLS).fill(null).map(function () {
    return new Array(ROWS).fill(null).map(function () {
      return Math.floor(Math.random() * 2);
    });
  });
}

var grid = buildGrid();
requestAnimationFrame(update);

function update() {
  grid = nextGen(grid);
  render(grid);
  requestAnimationFrame(update);
}

function nextGen(grid) {
  var nextGen = grid.map(function (arr) {
    return _toConsumableArray(arr);
  });

  for (var col = 0; col < grid.length; col++) {
    for (var row = 0; row < grid[col].length; row++) {
      var cell = grid[col][row];
      var numNeighbours = 0;

      for (var i = -1; i < 2; i++) {
        for (var j = -1; j < 2; j++) {
          if (i === 0 && j === 0) {
            continue;
          }

          var x_cell = col + i;
          var y_cell = row + j;

          if (x_cell >= 0 && y_cell >= 0 && x_cell < COLS & y_cell < ROWS) {
            var currentNeighbour = grid[col + i][row + j];
            numNeighbours += currentNeighbour;
          }
        }
      } // rules


      if (cell === 1 && numNeighbours < 2) {
        nextGen[col][row] = 0;
      } else if (cell === 1 && numNeighbours > 3) {
        nextGen[col][row] = 0;
      } else if (cell === 0 && numNeighbours === 3) {
        nextGen[col][row] = 1;
      }
    }
  }

  return nextGen;
}

function render(grid) {
  for (var col = 0; col < grid.length; col++) {
    for (var row = 0; row < grid[col].length; row++) {
      var cell = grid[col][row];
      ctx.beginPath();
      ctx.rect(col * resolution, row * resolution, resolution, resolution);
      ctx.fillStyle = cell ? 'black' : 'white';
      ctx.fill();
      ctx.stroke();
    }
  }
} // render(grid)


console.log();
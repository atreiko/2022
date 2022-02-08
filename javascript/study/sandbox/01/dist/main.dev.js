"use strict";

var str = "https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/";
var secondStr = "http://main.ru/this-path/";
var thirdStr = "http://meta.ua/this-path-this-path/";
var fourthStr = "http://myshop.shop/contacts/";
var empty = '';

function getDomainAndPath(str) {
  var threeSymbols = ['.net', '.com', '.xyz'];
  var twoSymbols = ['.ru', '.ua'];
  var fourSymbols = ['.shop'];
  var symbolsVariation = [threeSymbols, twoSymbols, fourSymbols];
  var errorMessage = 'The string is empty';
  if (str === '') return errorMessage;

  function detectDomain(str) {
    var startSlice = 0;
    var endSlice = 0;
    if (str.includes('https://')) startSlice = 8;
    if (str.includes('http://')) startSlice = 7;

    for (var i = 0; i < symbolsVariation.length; i++) {
      findSymbols(symbolsVariation[i]);
    }

    function findSymbols(arr) {
      for (var _i = 0; _i < arr.length; _i++) {
        if (str.includes(arr[_i])) {
          endSlice = str.indexOf(arr[_i]) + arr[_i].length;
        }
      }
    }

    return str.slice(startSlice, endSlice);
  }

  function detectPath(str) {
    var startSlice = null;
    var endSlice = str.slice(-1) === '/' ? str.length - 1 : str.length;
    var title = null;
    var gluedSymbols = [].concat(twoSymbols, threeSymbols, fourSymbols);

    for (var i = 0; i < gluedSymbols.length; i++) {
      if (str.includes(gluedSymbols[i])) {
        startSlice = str.indexOf(gluedSymbols[i]) + gluedSymbols[i].length;
      }
    }

    var transformString = str.slice(startSlice + 1, endSlice).split('').map(function (symbol) {
      return symbol.replace('-', ' ');
    }).join('');
    title = transformString.split(' ').map(function (elem) {
      return elem[0].toUpperCase() + elem.slice(1, elem.length);
    }).join(' ');
    return title;
  }

  return {
    domain: detectDomain(str),
    title: detectPath(str)
  };
}

console.log(getDomainAndPath(str));
console.log(getDomainAndPath(secondStr));
console.log(getDomainAndPath(thirdStr));
console.log(getDomainAndPath(fourthStr));
console.log(getDomainAndPath(empty));
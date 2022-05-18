"use strict";

/**
 * Напишите фун-цию, которая принимает строку и возвращает новую
 * в которой все повторяющиеся символы будут удалены
 */
var str = 'aABbCccAabcbba';

function removeDupes(str) {
  return Array.from(new Set(str.split(''))).join('');
}

console.log(removeDupes(str));
"use strict";

// Вы, наверное, знаете систему «лайков» из Facebook и других страниц. 
// Люди могут «лайкать» сообщения в блогах, изображения или другие элементы.
//  Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию, которая принимает массив, содержащий имена людей, которым понравился элемент. 
// Он должен возвращать отображаемый текст, как показано в примерах:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Примечание. Для 4 и более имен число "and 2 others"просто увеличивается.
var empty = [];
var _1 = ['Khamzat'];
var _2 = ['Khamzat', 'Gilbert'];
var _3 = ['Khamzat', 'Gilbert', 'Rafael'];
var _4 = ['Khamzat', 'Gilbert', 'Rafael', 'Michael'];
var _5 = ['Khamzat', 'Gilbert', 'Rafael', 'Michael', 'Bryce'];

function likes(names) {
  names = names || [];

  switch (names.length) {
    case 0:
      return 'no one likes this';
      break;

    case 1:
      return names[0] + ' likes this';
      break;

    case 2:
      return names[0] + ' and ' + names[1] + ' like this';
      break;

    case 3:
      return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';
      break;

    default:
      return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
  }
}

console.log(likes(_5));
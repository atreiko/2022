// Напишите функцию с именем, first_non_repeating_letterкоторая принимает 
// строковый ввод и возвращает первый символ, который не повторяется нигде в строке.

// Например, если задан ввод 'stress', функция должна вернуться 't', поскольку буква t 
// встречается в строке только один раз и появляется первой в строке.

//!
// В качестве дополнительной проблемы, прописные и строчные буквы считаются одним и тем же символом, 
// но функция должна возвращать правильный регистр для начальной буквы. 
// Например, ввод 'sTreSS'должен вернуться 'T'.

// Если строка содержит все повторяющиеся символы , 
// она должна вернуть пустую строку ( "") или None- см. Примеры тестов.

let str = 'stress'
let str2 = 's'

// console.log(str.lastIndexOf('s')); // 5
// console.log(str.indexOf('s'));     // 0

function firstNonRepeatingLetter(s) {
    if(s.length === 1) {
        return s
    }

    for(let i = 0; i <= s.length; i++) {
        let j = s.charAt(i)
        
        if(s.indexOf(j) == s.lastIndexOf(j)) {
            return j
        }
    }
    return ''
}
console.log(firstNonRepeatingLetter(str));
console.log(str2);


function firstNonRepeatingLetter2(s) {
    return [...s].filter((letter, index, array) => {
        return array.indexOf(letter) === array.lastIndexOf(letter)
    }).shift()
}
console.log(firstNonRepeatingLetter2(str));
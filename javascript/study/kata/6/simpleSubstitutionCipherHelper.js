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

const abc1 = "abcdefghijklmnopqrstuvwxyz";
const abc2 = "etaoinshrdlucmfwypvbgkjqxz";

class SubstitutionCipher {
  constructor(abc1, abc2) {
    this.abc1 = abc1
    this.abc2 = abc2
  }

  encode(str) {
    let result = []

    for(let i = 0; i < str.length; i++) {
      if(!abc2.includes(str[i])) {
        result.push(str[i])
      }
      for(let k = 0; k < abc1.length; k++) {
        if(str[i] === abc1[k]) {
          result.push(abc2[k]);
        }
      }
    }
    
    return result.join('')
  }

  decode(str) {
    let result = []

    for(let i = 0; i < str.length; i++) {
      if(!abc1.includes(str[i])) {
        result.push(str[i])
      }
      for(let k = 0; k < abc2.length; k++) {
        if(str[i] === abc2[k]) {
          result.push(abc1[k]);
        }
      }
    }

    return result.join('')
  }
}

const sub = new SubstitutionCipher(abc1, abc2)

console.log(sub.encode('abc1'));
console.log(sub.decode('eta1'));

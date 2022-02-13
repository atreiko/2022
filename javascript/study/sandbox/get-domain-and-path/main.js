const str = `https://inc4.net/what-can-cedefi-bring-to-the-crypto-industry/`;
const secondStr = `http://main.ru/this-path/`;
const thirdStr = `http://meta.ua/this-path-this-path/`;
const fourthStr = `http://myshop.shop/contacts/`;
const empty = '';

function getDomainAndPath(str) {
  const threeSymbols = [ '.net', '.com', '.xyz' ]
  const twoSymbols = [ '.ru', '.ua' ]
  const fourSymbols = [ '.shop' ]

  let symbolsVariation = [ threeSymbols, twoSymbols, fourSymbols ]
  const errorMessage = 'The string is empty';

  if (str === '') return errorMessage
  
  function detectDomain(str) {
  
    let startSlice = 0;
    let endSlice = 0;
  
    if (str.includes('https://')) startSlice = 8
    if (str.includes('http://')) startSlice = 7
  
    for (let i = 0; i < symbolsVariation.length; i++) {
      findSymbols(symbolsVariation[i])
    }
    
    function findSymbols(arr){
      for (let i = 0; i < arr.length; i++) {
        if (str.includes(arr[i])) {
          endSlice = str.indexOf(arr[i]) + arr[i].length
        }
      }
    }
  
    return str.slice(startSlice, endSlice)
  }
  
  function detectPath(str) {
    let startSlice = null;
    let endSlice = str.slice(-1) === '/' ? str.length - 1 : str.length
    let title = null;
  
    const gluedSymbols = [ ...twoSymbols, ...threeSymbols, ...fourSymbols ]
  
    for (let i = 0; i < gluedSymbols.length; i++) {
      if (str.includes(gluedSymbols[i])) {
        startSlice = str.indexOf(gluedSymbols[i]) + gluedSymbols[i].length
      }
    }
  
    const transformString = str
      .slice(startSlice + 1, endSlice)
      .split('')
      .map(symbol => symbol.replace('-', ' '))
      .join('')
  
      title = transformString
        .split(' ').map(elem  => elem[0].toUpperCase() + elem.slice(1, elem.length)).join(' ')
  
    return title
  }

  return {
    domain: detectDomain(str),
    title: detectPath(str)
  }
}

console.log(
  getDomainAndPath(str)
);
console.log(
  getDomainAndPath(secondStr)
);
console.log(
  getDomainAndPath(thirdStr)
);
console.log(
  getDomainAndPath(fourthStr)
);
console.log(
  getDomainAndPath(empty)
);









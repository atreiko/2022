

const hookahs = [
  {
    'title': 'Amy',
    'price': 4000,
    'full-set': false,
    'equipment': {
      'bowl': false,
      'pipe': true,
      'glass': true,
      'hose': true,
      'heat-control': true
    },
    'count': 4,
  },
  {
    'title': 'Kaya',
    'price': 6000,
    'full-set': true,
    'equipment': {
      'bowl': true,
      'pipe': true,
      'glass': true,
      'hose': true,
      'heat-control': true
    },
    'count': 1,
  },
  {
    'title': 'Khalil-Mamoon',
    'price': 2000,
    'full-set': false,
    'equipment': {
      'bowl': true,
      'pipe': true,
      'glass': true,
      'hose': true,
      'heat-control': true
    },
    'count': 6,
  },
  {
    'title': 'Starbuzz',
    'price': 5000,
    'full-set': false,
    'equipment': {
      'bowl': true,
      'pipe': true,
      'glass': false,
      'hose': true,
      'heat-control': false
    },
    'count': 7,
  }
]

const getTitles = (array) => {
  return [...array]
    .map(element => element.title)
}

const amountPipes = (array) => {
  return [...array]
    .reduce((val, acc) => val += acc.count, 0)
}

const purchaseCost = (array) => {
  return [...array]
    .map(element => {
      return element.count * element.price
    })
}

const budget = (callback, array) => {
  const count = callback(array).reduce((val, acc) => val += acc, 0)
  return count
}

console.log(
  budget(purchaseCost, hookahs)
);



const people = [
  {
    name: 'Bill',
    money: 10000,
  },
  {
    name: 'Jack',
    money: 100,
  }
]


//todo Declarative approach

const getTotalFortuneOfTenRichest = people => {
  return [...people]
    .sort((first, second) => first.money - second.money)
    .slice(0, 10)
    .reduce((total, person) => total + person.money, 0)
}


console.log(getTotalFortuneOfTenRichest(people) );


//todo Alternative approach

const sortPeopleByMoney = people => 
  [...people].sort((first, second) => first.money - second.money)

const getTopOfPeople = (people, count) => people.slice(0, count)

const  getTotalFortuneOfPeople = people =>
  people.reduce((total, person) => total + person.money, 0)

const getTotalFortuneRichest = (people, count) => {
  const sortedPeopleByMoney = sortPeopleByMoney(people)
  const topOfPeople = getTopOfPeople(sortedPeopleByMoney, count)

  return getTotalFortuneOfPeople(topOfPeople)
}


console.log(getTotalFortuneRichest(people));

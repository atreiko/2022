
class Fighter {
  constructor(name, health, damagePerAttack){
    this.name = name
    this.health = health
    this.damagePerAttack = damagePerAttack
    this.toString = function () {
      return this.name;
    };
  }

}

const first = new Fighter('Artem', 1000, 100)
const second = new Fighter('Bill', 1200, 100)

const declareWinner = (fighter1, fighter2, firstAttacker) => {
  const a = [fighter1, fighter2].find((v) => v.name === firstAttacker);
  const b = [fighter1, fighter2].find((v) => v.name !== firstAttacker);
  
  return Math.ceil(b.health / a.damagePerAttack) <= Math.ceil(a.health / b.damagePerAttack) ? a.name : b.name;
}

console.log(
  declareWinner(first, second, 'Artem')
)

console.log(first);
console.log(second);
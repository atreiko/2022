class Car {
    constructor(brand, color) {
        this.brand = brand
        this.color = color
    }

    start() {
        console.log(`${this.brand} - ${this.color} - start`);
    }

    stop() {
        console.log(`${this.brand} - STOP`)
    }

    static discount() {
        console.log('Общая скидка - 10%');
    }

    set rating(value) {
        this.score = value.toUpperCase()
    }

    get rating() {
        return this.score
    }
}

const tesla = new Car('Tesla', 'Silver')
const nissan = new Car('Nissan', 'Red')

console.log(tesla.start()); // Tesla - Silver - start
console.log(nissan.stop()); // Nissan - STOP

console.log(Car.discount()); // Общая скидка - 10%

tesla.rating = 'five'      // setter

console.log(tesla.rating); // getter

console.log(tesla);









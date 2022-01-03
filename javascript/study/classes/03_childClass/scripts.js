class Car {
    constructor(brand) {
        this.brand = brand
        this.gasTank = 100
        this.gasStation = []
    }

    getGas() {
        this.gasTank += 10

        const stamp = Date.now()
        const time = new Date(stamp)
        this.gasStation.push(time.toString())

        return this.gasTank
    }

    drive() {
        this.gasTank -= 10
        return this.gasTank
    }
}

const nissan = new Car('Nissan')
console.log(nissan); // gasTank:100

nissan.drive()
console.log(nissan); // gasTank:90

nissan.getGas()
console.log(nissan); // gasTank:100



class HybridCar extends Car {
    constructor(brand, model) {
        super(brand)
        this.model = model
    }

    autoParking() {
        this.gasTank -= 5
        console.log('Automatic parking!');
    }
}

const lexus = new HybridCar('Lexus', 'CT200')
lexus.autoParking()
lexus.getGas()
console.log(lexus);








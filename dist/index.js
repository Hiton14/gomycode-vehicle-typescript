"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log(`${this.make} ${this.model} engine started`);
    }
}
const cars = [
    new Car("Toyota", "Corolla", 2022),
    new Car("Mitsubishi", "Pajero", 2024),
    new Car("Honda", "Civic", 2016),
    new Car("Nissan", "Bluebird", 2020),
    new Car("Porshe", "Cayenne", 2025),
    new Car("Toyota", "Tx-Prado", 2022),
];
cars.forEach((car) => {
    console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, `);
    car.start();
    console.log("-----");
});

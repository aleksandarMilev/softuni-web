"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        return `Driving a ${this.brand}`;
    }
}
class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    drive() {
        return super.drive() + ` ${this.model}`;
    }
}
exports.Car = Car;

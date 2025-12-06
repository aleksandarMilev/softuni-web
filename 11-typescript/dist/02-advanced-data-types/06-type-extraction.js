"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let names = {
    fName: "John",
    lName: "Doe",
    age: 22,
    getPersonInfo() {
        return `${this.fName} ${this.lName}, age ${this.age}`;
    },
};
let location = {
    city: "Boston",
    street: "Nowhere street",
    number: 13,
    postalCode: 51225,
    getAddressInfo() {
        return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
    },
};
const createCombinedFunction = () => {
    return (person) => {
        console.log(`Hello, ${person.getPersonInfo()} from ${person.getAddressInfo()}`);
    };
};
let combinedFunction = createCombinedFunction();
combinedFunction(Object.assign({}, names, location));

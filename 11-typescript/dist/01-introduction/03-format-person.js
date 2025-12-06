"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatPerson = void 0;
const ageMinValue = 1;
const ageMaxValue = 110;
const isValidName = (name) => {
    return name.length > 0;
};
const isValidAge = (age) => {
    return age >= ageMinValue && age <= ageMaxValue;
};
const formatPerson = (person) => {
    const [name, age] = person;
    if (!isValidName(name)) {
        throw new Error("Name cannot be empty string.");
    }
    if (!isValidAge(age)) {
        throw new Error(`Age should be between ${ageMinValue} and ${ageMaxValue}.`);
    }
    return `Hello, my name is ${person[0]} and my age is ${person[1]}`;
};
exports.formatPerson = formatPerson;

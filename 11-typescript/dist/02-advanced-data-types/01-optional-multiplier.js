"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = void 0;
const multiply = (num1, num2, num3) => [num1, num2, num3]
    .filter((n) => n !== undefined)
    .map(toInt)
    .reduce((acc, curr) => acc * curr, 1);
exports.multiply = multiply;
const toInt = (value) => {
    const isNotString = typeof value !== "string";
    const isNotNumeric = typeof value !== "number";
    const isNotUndefined = typeof value !== undefined && typeof value !== null;
    if (isNotString && isNotNumeric && isNotUndefined) {
        throw new Error(`${value} should be from type string, number or undefined!`);
    }
    const isEmptyString = typeof value === "string" && value.trim() === "";
    if (isEmptyString) {
        throw new Error(`${value} can not be empty string!`);
    }
    const num = Number(value);
    if (isNaN(num)) {
        throw new Error(`${value} should be numeric representation!`);
    }
    const isNotInteger = !Number.isInteger(num);
    if (isNotInteger) {
        throw new Error(`${value} can not be float number representation!`);
    }
    return num;
};

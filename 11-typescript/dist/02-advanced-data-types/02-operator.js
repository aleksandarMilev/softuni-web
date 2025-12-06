"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operator = void 0;
const operator = (param, operation, operand) => {
    switch (operation) {
        case "Index":
            if (isStringOrStringArray(param)) {
                return param[operand];
            }
            throw new Error(`The ${param} argument should be from type string or string[] for the ${operation} operation!`);
        case "Length":
            if (isStringOrStringArray(param)) {
                return param.length % operand;
            }
            throw new Error(`The ${param} argument should be from type string or string[] for the ${operation} operation!`);
        case "Add":
            if (isStringOrNumber(param)) {
                return toNumber(param) + operand;
            }
            throw new Error(`The ${param} argument should be from type string or number for the ${operation} operation!`);
        default:
            throw new Error(`${operation} is invalid operation`);
    }
};
exports.operator = operator;
const isStringOrStringArray = (value) => {
    return (typeof value === "string" ||
        (Array.isArray(value) && value.every((v) => typeof v === "string")));
};
const isStringOrNumber = (value) => {
    return typeof value === "string" || typeof value === "number";
};
const toNumber = (value) => {
    const isEmptyString = typeof value === "string" && value.trim() === "";
    if (isEmptyString) {
        throw new Error(`${value} can not be empty string!`);
    }
    const num = Number(value);
    if (isNaN(num)) {
        throw new Error(`${value} should be numeric representation!`);
    }
    return num;
};

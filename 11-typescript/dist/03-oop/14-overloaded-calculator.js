"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Calculator_instances, _Calculator_power, _Calculator_log, _Calculator_add, _Calculator_subtract, _Calculator_multiply, _Calculator_divide;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
class Calculator {
    constructor() {
        _Calculator_instances.add(this);
    }
    calculate(operation, a, b, c, d) {
        switch (operation) {
            case "power":
                return __classPrivateFieldGet(this, _Calculator_instances, "m", _Calculator_power).call(this, a, b, c, d);
            case "log":
                return __classPrivateFieldGet(this, _Calculator_instances, "m", _Calculator_log).call(this, a, b, c, d);
            case "add":
                return __classPrivateFieldGet(this, _Calculator_instances, "m", _Calculator_add).call(this, a, b, c, d);
            case "subtract":
                return __classPrivateFieldGet(this, _Calculator_instances, "m", _Calculator_subtract).call(this, a, b, c, d);
            case "multiply":
                return __classPrivateFieldGet(this, _Calculator_instances, "m", _Calculator_multiply).call(this, a, b, c, d);
            case "divide":
                return __classPrivateFieldGet(this, _Calculator_instances, "m", _Calculator_divide).call(this, a, b, c, d);
        }
    }
}
exports.Calculator = Calculator;
_Calculator_instances = new WeakSet(), _Calculator_power = function _Calculator_power(a, b, c, d) {
    if (c !== undefined || d !== undefined) {
        throw new Error("Only two numbers allowed for powering!");
    }
    return a ** b;
}, _Calculator_log = function _Calculator_log(a, b, c, d) {
    if (c !== undefined || d !== undefined) {
        throw new Error("Only two numbers allowed for logarithms!");
    }
    return Math.log(a) / Math.log(b);
}, _Calculator_add = function _Calculator_add(a, b, c, d) {
    let result = a + b;
    if (c) {
        result += c;
    }
    if (d) {
        result += d;
    }
    return result;
}, _Calculator_subtract = function _Calculator_subtract(a, b, c, d) {
    let result = a - b;
    if (c) {
        result -= c;
    }
    if (d) {
        result -= d;
    }
    return result;
}, _Calculator_multiply = function _Calculator_multiply(a, b, c, d) {
    let result = a * b;
    if (c) {
        result *= c;
    }
    if (d) {
        result *= d;
    }
    return result;
}, _Calculator_divide = function _Calculator_divide(a, b, c, d) {
    if (b === 0 ||
        (c !== undefined && c === 0) ||
        (d !== undefined && d === 0)) {
        throw new Error("Divide by zero error!");
    }
    let result = a / b;
    if (c) {
        result /= c;
    }
    if (d) {
        result /= d;
    }
    return result;
};

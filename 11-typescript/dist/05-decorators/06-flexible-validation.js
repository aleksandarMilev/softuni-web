"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidated = void 0;
const minLength = (minLength) => {
    return function (_target, _propertyKey, descriptor) {
        const originalSet = descriptor.set;
        descriptor.set = function (value) {
            if (value.length < minLength) {
                throw new Error(`name must have a min length of ${minLength} characters`);
            }
            originalSet.call(this, value);
        };
        return descriptor;
    };
};
const range = (min, max) => {
    return function (_target, _propertyKey, descriptor) {
        const originalSet = descriptor.set;
        descriptor.set = function (value) {
            if (value < min || value > max) {
                throw new Error(`age must be between ${min} and ${max}`);
            }
            originalSet.call(this, value);
        };
        return descriptor;
    };
};
const matches = (regex) => {
    return function (_target, _propertyKey, descriptor) {
        const originalSet = descriptor.set;
        descriptor.set = function (value) {
            if (!regex.test(value)) {
                regex.lastIndex = 0;
                throw new Error(`password needs to match ${regex.toString()}`);
            }
            regex.lastIndex = 0;
            originalSet.call(this, value);
        };
        return descriptor;
    };
};
class UserValidated {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    set name(val) {
        this._name = val;
    }
    set age(val) {
        this._age = val;
    }
    set password(value) {
        this._password = value;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
}
exports.UserValidated = UserValidated;
__decorate([
    minLength(3)
], UserValidated.prototype, "name", null);
__decorate([
    range(1, 100)
], UserValidated.prototype, "age", null);
__decorate([
    matches(/^[a-zA-Z0-9]+$/g)
], UserValidated.prototype, "password", null);

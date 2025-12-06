"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Age = void 0;
const validate = (_target, _methodName, descriptor) => {
    const MIN_AGE = 1;
    const MAX_AGE = 200;
    const original = descriptor.set;
    descriptor.set = function (age) {
        if (age < MIN_AGE || age > MAX_AGE) {
            throw new Error(`Age should be more than ${MIN_AGE} and less than ${MAX_AGE}!`);
        }
        original?.call(this, age);
    };
    return descriptor;
};
class Age {
    constructor(age) {
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(val) {
        this._age = val;
    }
}
exports.Age = Age;
__decorate([
    validate
], Age.prototype, "age", null);

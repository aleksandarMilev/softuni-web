"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
const log = (_target, methodName, descriptor) => {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Function ${methodName} called with arguments: ${args.join(", ")}`);
        return original.apply(this, args);
    };
    return descriptor;
};
class Person {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
    static getFullName(fName, lName) {
        return `${fName}, ${lName}`;
    }
}
exports.Person = Person;
__decorate([
    log
], Person, "getFullName", null);

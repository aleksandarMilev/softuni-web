"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
class MockCensorService {
    constructor(censoredProperties) {
        this.censoredProperties = censoredProperties;
    }
    censorProperties(items) {
        let censoredItems = items.slice();
        censoredItems.forEach((i) => {
            this.censoredProperties.forEach((prop) => {
                delete i[prop];
            });
        });
        return censoredItems;
    }
}
const withCreatedAt = (ctor) => {
    return class extends ctor {
        constructor() {
            super(...arguments);
            this.createdAt = new Date();
        }
    };
};
let User = class User {
    constructor(name, age, creditCardNumber) {
        this.name = name;
        this.age = age;
        this.creditCardNumber = creditCardNumber;
    }
    getInfo() {
        return `${this.name}, Age: ${this.age} CreditCardNumber: ${this.creditCardNumber}`;
    }
};
User = __decorate([
    withCreatedAt
], User);
let Employee = class Employee {
    constructor(name, birthday, salary) {
        this.name = name;
        this.birthday = birthday;
        this.salary = salary;
    }
    getInfo() {
        return `${this.name}, Birthday: ${this.birthday?.toLocaleDateString()} Salary: ${this.salary}`;
    }
};
Employee = __decorate([
    withCreatedAt
], Employee);
const filterRecentAndCensor = (seconds, censorService, logMessage) => {
    const windowMs = seconds * 1000;
    return function (_target, methodName, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            if (logMessage) {
                console.log(logMessage.replace("{method}", methodName));
            }
            const allItems = original.apply(this, args);
            const now = Date.now();
            const recent = allItems.filter((item) => {
                const createdAt = item.createdAt;
                if (!createdAt) {
                    return false;
                }
                return now - createdAt.getTime() <= windowMs;
            });
            return censorService.censorProperties(recent);
        };
        return descriptor;
    };
};
let userCensorService = new MockCensorService(["creditCardNumber"]);
let employeeCensorService = new MockCensorService([
    "birthday",
    "salary",
]);
class UsersService {
    constructor(users, employees) {
        this._users = users;
        this._employees = employees;
    }
    addUser(user) {
        this._users.push(user);
    }
    addEmployee(employee) {
        this._employees.push(employee);
    }
    getUsers() {
        return this._users;
    }
    getEmployees() {
        return this._employees;
    }
}
exports.UsersService = UsersService;
__decorate([
    filterRecentAndCensor(5, userCensorService)
], UsersService.prototype, "getUsers", null);
__decorate([
    filterRecentAndCensor(10, employeeCensorService, "Method {method} called successfully")
], UsersService.prototype, "getEmployees", null);

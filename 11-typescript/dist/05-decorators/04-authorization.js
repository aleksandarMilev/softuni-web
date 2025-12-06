"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const authorize = (service) => {
    return function (_target, methodName, descriptor) {
        const original = descriptor.get;
        descriptor.get = function () {
            const hasAccess = service.canViewData(methodName);
            if (!hasAccess) {
                throw new Error("You are not authorized to view this information");
            }
            return original?.apply(this);
        };
        return descriptor;
    };
};
class MockAuthorizationService {
    constructor(userRole) {
        this.userRole = userRole;
    }
    canViewData(property) {
        switch (this.userRole) {
            case "Admin":
                return true;
            case "PersonalDataAdministrator":
                return ["name", "age"].includes(property);
            default:
                return false;
        }
    }
}
let service = new MockAuthorizationService("Guest");
class User {
    constructor(_name, _age, _creditCardNumber) {
        this._name = _name;
        this._age = _age;
        this._creditCardNumber = _creditCardNumber;
    }
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get creditCardNumber() {
        return this._creditCardNumber;
    }
}
exports.User = User;
__decorate([
    authorize(service)
], User.prototype, "name", null);
__decorate([
    authorize(service)
], User.prototype, "age", null);
__decorate([
    authorize(service)
], User.prototype, "creditCardNumber", null);

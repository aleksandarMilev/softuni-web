"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(username) {
        this._username = "";
        this.username = username;
    }
    get username() {
        return this._username;
    }
    set username(value) {
        if (value.length < 3) {
            throw new Error("Username must be at least 3 characters long");
        }
        this._username = value;
    }
}
exports.User = User;

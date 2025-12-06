"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            throw new Error(`Can not withdraw ${amount}! The current balance is ${this.balance}`);
        }
        this.balance -= amount;
    }
    getBalance() {
        return this.balance;
    }
}
exports.BankAccount = BankAccount;

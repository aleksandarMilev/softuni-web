export class BankAccount {
  constructor(private balance: number) {}

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount > this.balance) {
      throw new Error(
        `Can not withdraw ${amount}! The current balance is ${this.balance}`
      );
    }

    this.balance -= amount;
  }

  getBalance() {
    return this.balance;
  }
}

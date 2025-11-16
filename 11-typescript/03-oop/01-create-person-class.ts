export class Person {
  constructor(
    private readonly firstName: string,
    private readonly lastName: string,
    private readonly age: number
  ) {}

  introduce() {
    return `My name is ${this.firstName} ${this.lastName} and I am ${this.age} years old.`;
  }
}

export const createdOn = <T extends { new (...args: any[]): {} }>(
  constructor: T
) => {
  return class extends constructor {
    createdOn: Date = new Date();
  };
};

@createdOn
export class User {
  constructor(public name: string, public age: number) {}

  displayUserInfo() {
    console.log(`${this.name}, Age: ${this.age}`);
  }
}

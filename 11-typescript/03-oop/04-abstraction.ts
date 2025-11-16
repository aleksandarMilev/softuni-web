interface Animal {
  makeSound(): string;
}

export class Dog implements Animal {
  makeSound() {
    return "Woof";
  }
}

class Vehicle {
  constructor(protected readonly brand: string) {}

  drive() {
    return `Driving a ${this.brand}`;
  }
}

export class Car extends Vehicle {
  constructor(brand: string, private readonly model: string) {
    super(brand);
  }

  override drive() {
    return super.drive() + ` ${this.model}`;
  }
}

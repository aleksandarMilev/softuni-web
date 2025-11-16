abstract class Shape {
  constructor(protected readonly color: string) {}

  abstract getArea(): number;
}

export class Circle extends Shape {
  constructor(color: string, private readonly radius: number) {
    super(color);
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle extends Shape {
  constructor(
    color: string,
    private readonly sideA: number,
    private readonly sideB: number
  ) {
    super(color);
  }

  getArea() {
    return this.sideA * this.sideB;
  }
}

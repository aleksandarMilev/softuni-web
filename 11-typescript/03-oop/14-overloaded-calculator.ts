type Operation = "power" | "log" | "add" | "subtract" | "multiply" | "divide";

export class Calculator {
  calculate(operation: "power" | "log", a: number, b: number): number;
  calculate(
    operation: "add" | "subtract" | "multiply" | "divide",
    a: number,
    b: number
  ): number;
  calculate(
    operation: "add" | "subtract" | "multiply" | "divide",
    a: number,
    b: number,
    c: number
  ): number;
  calculate(
    operation: "add" | "subtract" | "multiply" | "divide",
    a: number,
    b: number,
    c: number,
    d: number
  ): number;

  calculate(
    operation: Operation,
    a: number,
    b: number,
    c?: number,
    d?: number
  ) {
    switch (operation) {
      case "power":
        return this.#power(a, b, c, d);
      case "log":
        return this.#log(a, b, c, d);
      case "add":
        return this.#add(a, b, c, d);
      case "subtract":
        return this.#subtract(a, b, c, d);
      case "multiply":
        return this.#multiply(a, b, c, d);
      case "divide":
        return this.#divide(a, b, c, d);
    }
  }

  #power(a: number, b: number, c?: number, d?: number) {
    if (c !== undefined || d !== undefined) {
      throw new Error("Only two numbers allowed for powering!");
    }

    return a ** b;
  }

  #log(a: number, b: number, c?: number, d?: number) {
    if (c !== undefined || d !== undefined) {
      throw new Error("Only two numbers allowed for logarithms!");
    }

    return Math.log(a) / Math.log(b);
  }

  #add(a: number, b: number, c?: number, d?: number) {
    let result = a + b;

    if (c) {
      result += c;
    }

    if (d) {
      result += d;
    }

    return result;
  }

  #subtract(a: number, b: number, c?: number, d?: number) {
    let result = a - b;

    if (c) {
      result -= c;
    }

    if (d) {
      result -= d;
    }

    return result;
  }

  #multiply(a: number, b: number, c?: number, d?: number) {
    let result = a * b;

    if (c) {
      result *= c;
    }

    if (d) {
      result *= d;
    }

    return result;
  }

  #divide(a: number, b: number, c?: number, d?: number) {
    if (
      b === 0 ||
      (c !== undefined && c === 0) ||
      (d !== undefined && d === 0)
    ) {
      throw new Error("Divide by zero error!");
    }

    let result = a / b;

    if (c) {
      result /= c;
    }

    if (d) {
      result /= d;
    }

    return result;
  }
}

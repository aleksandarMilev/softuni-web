const log = (
  _target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) => {
  const original = descriptor.value;
  descriptor.value = function (...args: string[]) {
    console.log(
      `Function ${methodName} called with arguments: ${args.join(", ")}`
    );

    return original.apply(this, args);
  };

  return descriptor;
};

export class Person {
  constructor(readonly fName: string, readonly lName: string) {}

  @log
  static getFullName(fName: string, lName: string) {
    return `${fName}, ${lName}`;
  }
}

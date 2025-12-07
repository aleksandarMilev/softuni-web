export function ApplyCommission(
  _target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.get;
  if (!original) {
    throw new Error(
      `@ApplyCommission can only be applied to properties with a getter. Property "${propertyKey}" has no getter.`
    );
  }

  descriptor.get = function () {
    const result = original.apply(this);
    if (typeof result !== "number") {
      throw new Error(
        `@ApplyCommission can only be used on getters that return number. ` +
          `Property "${propertyKey}" returned ${typeof result}.`
      );
    }

    return result * 1.2;
  };

  return descriptor;
}

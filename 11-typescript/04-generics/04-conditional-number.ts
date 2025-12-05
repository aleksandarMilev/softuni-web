type ConditionalValue<T> = T extends number
  ? number
  : T extends string
  ? string
  : never;

export const conditionalNumber = <T>(value: ConditionalValue<T>) =>
  console.log(value);

const IsOutOfRange = <T>(array: T[], index: number) =>
  index < 0 || index >= array.length;

export const swap = <T>(a: T[], aIndex: number, b: T[], bIndex: number) => {
  if (IsOutOfRange(a, aIndex)) {
    throw new Error();
  }

  if (IsOutOfRange(b, bIndex)) {
    throw new Error();
  }

  let tempA = a[aIndex]!;
  let tempB = b[bIndex]!;

  a[aIndex] = tempB;
  b[bIndex] = tempA;
};

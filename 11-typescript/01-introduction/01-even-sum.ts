type EvenSumChecker = (a: number, b: number, c: number) => boolean;

export const isEven: EvenSumChecker = (a, b, c) => (a + b + c) % 2 === 0;

type IsEven = (a: number, b: number, c: number) => boolean;

export const isEven: IsEven = (a, b, c) => (a + b + c) % 2 === 0;

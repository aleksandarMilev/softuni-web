"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = void 0;
const IsOutOfRange = (array, index) => index < 0 || index >= array.length;
const swap = (a, aIndex, b, bIndex) => {
    if (IsOutOfRange(a, aIndex)) {
        throw new Error();
    }
    if (IsOutOfRange(b, bIndex)) {
        throw new Error();
    }
    let tempA = a[aIndex];
    let tempB = b[bIndex];
    a[aIndex] = tempB;
    b[bIndex] = tempA;
};
exports.swap = swap;

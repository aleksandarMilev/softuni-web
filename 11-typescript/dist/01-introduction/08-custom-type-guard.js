"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonEmptyStringArray = void 0;
const isNonEmptyStringArray = (array) => {
    return (array !== null &&
        Array.isArray(array) &&
        array.length > 0 &&
        array.every((a) => typeof a === "string"));
};
exports.isNonEmptyStringArray = isNonEmptyStringArray;

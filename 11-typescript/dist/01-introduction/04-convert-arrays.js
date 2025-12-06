"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertArray = void 0;
const convertArray = (textArray) => {
    const separator = "";
    const text = textArray.join(separator);
    return [text, text.length];
};
exports.convertArray = convertArray;

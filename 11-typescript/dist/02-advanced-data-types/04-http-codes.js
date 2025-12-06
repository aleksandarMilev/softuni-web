"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printHttpInfo = void 0;
const printHttpInfo = (response) => {
    if (response.printChars) {
        return response.text.substring(0, response.printChars);
    }
    return response.text;
};
exports.printHttpInfo = printHttpInfo;

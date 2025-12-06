"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unknownResponse = void 0;
const unknownResponse = (responseObject) => {
    const hasValidValueProperty = responseObject !== null &&
        typeof responseObject === "object" &&
        "value" in responseObject &&
        typeof responseObject.value === "string";
    if (hasValidValueProperty) {
        return responseObject.value;
    }
    return "-";
};
exports.unknownResponse = unknownResponse;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
const validate = (user) => isValidId(user.id) &&
    isValidUsername(user.username) &&
    isValidPasswordHash(user.passwordHash) &&
    isValidStatus(user.status);
exports.validate = validate;
const isString = (str) => typeof str === "string";
const isValidId = (id) => {
    const isNumber = typeof id === "number";
    const MIN_VALUE = 100;
    if (isNumber && id > MIN_VALUE) {
        return true;
    }
    const ALLOWED_LENGTH = 14;
    if (isString(id) && id.length === ALLOWED_LENGTH) {
        return true;
    }
    return false;
};
const isValidUsername = (username) => {
    const MIN_LENGTH = 5;
    const MAX_LENGTH = 10;
    return username.length >= MIN_LENGTH && username.length <= MAX_LENGTH;
};
const isValidPasswordHash = (passwordHash) => {
    const ALLOWED_STRING_LENGTH = 20;
    if (isString(passwordHash) && passwordHash.length === ALLOWED_STRING_LENGTH) {
        return true;
    }
    const isStringArray = Array.isArray(passwordHash) && passwordHash.every(isString);
    const ALLOWED_ARRAY_LENGTH = 4;
    const ALLOWED_ARRAY_ELEMENT_LENGTH = 8;
    if (isStringArray &&
        passwordHash.length === ALLOWED_ARRAY_LENGTH &&
        passwordHash.every((h) => h.length === ALLOWED_ARRAY_ELEMENT_LENGTH)) {
        return true;
    }
    return false;
};
const isValidStatus = (status) => status === "Locked" || status === "Unlocked";

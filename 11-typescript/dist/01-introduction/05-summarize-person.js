"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizePerson = void 0;
const isValidName = (name) => {
    return name.length > 0;
};
const minAgeValue = 1;
const maxAgeValue = 110;
const isValidAge = (age) => {
    return age >= minAgeValue && age <= maxAgeValue;
};
const invalidArgErrorMessage = (argName) => {
    return `Invalid ${argName}.`;
};
const validateInput = (age, firstName, lastName) => {
    if (!isValidAge(age)) {
        throw new Error(invalidArgErrorMessage("age"));
    }
    if (!isValidName(firstName)) {
        throw new Error(invalidArgErrorMessage("firstName"));
    }
    if (!isValidName(lastName)) {
        throw new Error(invalidArgErrorMessage("lastName"));
    }
};
const getFullName = (middleName, firstName, lastName) => {
    const isValidMiddleName = middleName && isValidName(middleName);
    if (isValidMiddleName) {
        return `${firstName} ${middleName} ${lastName}`;
    }
    else {
        return `${firstName} ${lastName}`;
    }
};
const getHobbies = (hobbies) => {
    const hasHobbies = hobbies && hobbies.length > 0;
    if (hasHobbies) {
        return hobbies.join(", ");
    }
    else {
        return "-";
    }
};
const getWorkInfo = (workInfo) => {
    if (workInfo) {
        const [position, salary] = workInfo;
        return `${position} -> ${salary}`;
    }
    else {
        return "-";
    }
};
const summarizePerson = (id, firstName, lastName, age, middleName, hobbies, workInfo) => {
    validateInput(age, firstName, lastName);
    const fullName = getFullName(middleName, firstName, lastName);
    const hobbiesSummary = getHobbies(hobbies);
    const workInfoSummary = getWorkInfo(workInfo);
    return [id, fullName, age, hobbiesSummary, workInfoSummary];
};
exports.summarizePerson = summarizePerson;

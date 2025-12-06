"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDayOfWeek = void 0;
const dayMinValue = 1;
var Day;
(function (Day) {
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
    Day[Day["Sunday"] = 7] = "Sunday";
})(Day || (Day = {}));
const dayMaxValue = Object.keys(Day).filter((k) => isNaN(Number(k))).length;
const printDayOfWeek = (dayNumber) => {
    const paramIsOutOfRange = dayNumber < dayMinValue || dayNumber > dayMaxValue;
    if (paramIsOutOfRange) {
        throw new Error(`The dayNumber argument should be between ${dayMinValue} and ${dayMaxValue}.`);
    }
    return Day[dayNumber];
};
exports.printDayOfWeek = printDayOfWeek;

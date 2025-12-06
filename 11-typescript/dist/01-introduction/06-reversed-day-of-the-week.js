"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reversedDayOfWeek = void 0;
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
const reversedDayOfWeek = (day) => {
    const dayNumber = Day[day];
    if (!dayNumber) {
        throw new Error("Invalid day.");
    }
    return dayNumber;
};
exports.reversedDayOfWeek = reversedDayOfWeek;

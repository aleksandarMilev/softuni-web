"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fridayThe13th = void 0;
var Month;
(function (Month) {
    Month[Month["January"] = 0] = "January";
    Month[Month["February"] = 1] = "February";
    Month[Month["March"] = 2] = "March";
    Month[Month["April"] = 3] = "April";
    Month[Month["May"] = 4] = "May";
    Month[Month["June"] = 5] = "June";
    Month[Month["July"] = 6] = "July";
    Month[Month["August"] = 7] = "August";
    Month[Month["September"] = 8] = "September";
    Month[Month["October"] = 9] = "October";
    Month[Month["November"] = 10] = "November";
    Month[Month["December"] = 11] = "December";
})(Month || (Month = {}));
const format = (date) => {
    return `${date.getDay()}-${Month[date.getMonth()]}-${date.getFullYear()}`;
};
const fridayThe13th = (dates) => {
    const result = [];
    for (const date of dates) {
        if (date instanceof Date && date.getDay() === 5 && date.getDate() === 13) {
            result.push(format(date));
        }
    }
    return result;
};
exports.fridayThe13th = fridayThe13th;

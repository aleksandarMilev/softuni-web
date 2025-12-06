"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PlannedHoliday_instances, _PlannedHoliday_formatDate;
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayManager = exports.PlannedHoliday = void 0;
var TravelVacation;
(function (TravelVacation) {
    TravelVacation["Abroad"] = "Abroad";
    TravelVacation["InCountry"] = "InCountry";
})(TravelVacation || (TravelVacation = {}));
var MountainVacation;
(function (MountainVacation) {
    MountainVacation["Ski"] = "Ski";
    MountainVacation["Hiking"] = "Hiking";
})(MountainVacation || (MountainVacation = {}));
var BeachVacation;
(function (BeachVacation) {
    BeachVacation["Pool"] = "Pool";
    BeachVacation["Sea"] = "Sea";
    BeachVacation["ScubaDiving"] = "ScubaDiving";
})(BeachVacation || (BeachVacation = {}));
class PlannedHoliday {
    constructor(start, end) {
        _PlannedHoliday_instances.add(this);
        if (end < start) {
            throw new Error(PlannedHoliday.InvalidEndDate);
        }
        this._start = start;
        this._end = end;
    }
    set start(val) {
        if (val > this._end) {
            throw new Error(PlannedHoliday.InvalidStartDate);
        }
        this._start = val;
    }
    set end(val) {
        if (val < this._start) {
            throw new Error(PlannedHoliday.InvalidEndDate);
        }
        this._end = val;
    }
    getInfo() {
        return `Holiday: ${__classPrivateFieldGet(this, _PlannedHoliday_instances, "m", _PlannedHoliday_formatDate).call(this, this._start)} - ${__classPrivateFieldGet(this, _PlannedHoliday_instances, "m", _PlannedHoliday_formatDate).call(this, this._end)}`;
    }
}
exports.PlannedHoliday = PlannedHoliday;
_PlannedHoliday_instances = new WeakSet(), _PlannedHoliday_formatDate = function _PlannedHoliday_formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
PlannedHoliday.InvalidStartDate = "Start date cannot be after end date";
PlannedHoliday.InvalidEndDate = "End date cannot be before start date";
class HolidayManager {
    constructor() {
        this.connections = new Map();
    }
    reserveVacation(holiday, vacationType) {
        this.connections.set(holiday, vacationType);
    }
    listReservations() {
        let output = "";
        for (const [holiday, vacationType] of this.connections) {
            output += `${holiday.getInfo()} => ${vacationType}\n`;
        }
        return output.trim();
    }
}
exports.HolidayManager = HolidayManager;

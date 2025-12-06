"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var LoggingLevel;
(function (LoggingLevel) {
    LoggingLevel["Info"] = "Info";
    LoggingLevel["Error"] = "Error";
    LoggingLevel["Warning"] = "Warning";
    LoggingLevel["Debug"] = "Debug";
})(LoggingLevel || (LoggingLevel = {}));
var LoggingFormat;
(function (LoggingFormat) {
    LoggingFormat["Standard"] = "[%level][%date] %text";
    LoggingFormat["Minimal"] = "*%level* %text";
})(LoggingFormat || (LoggingFormat = {}));
class Logger {
    constructor(format) {
        this.format = format;
        this.cachedLogs = new Map();
    }
    log(logLevel, message) {
        const date = new Date().toISOString();
        const output = this.format
            .replace("%level", logLevel)
            .replace("%date", date)
            .replace("%text", message);
        console.log(output);
        const existing = this.cachedLogs.get(logLevel) ?? [];
        existing.push(output);
        this.cachedLogs.set(logLevel, existing);
    }
    getFormat() {
        return this.format;
    }
}
exports.Logger = Logger;

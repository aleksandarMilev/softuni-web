"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
class Counter {
    static increment() {
        Counter.count += 1;
    }
    static getCount() {
        return Counter.count;
    }
}
exports.Counter = Counter;
Counter.count = 0;

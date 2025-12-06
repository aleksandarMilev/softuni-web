"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountedSet = void 0;
class CountedSet {
    constructor() {
        this.items = new Map();
    }
    add(item) {
        const count = this.items.get(item) ?? 0;
        this.items.set(item, count + 1);
    }
    remove(item) {
        const count = this.items.get(item);
        if (!count || count === 0) {
            return;
        }
        this.items.set(item, count - 1);
    }
    contains(item) {
        const count = this.items.get(item);
        if (!count || count === 0) {
            return false;
        }
        return true;
    }
    getNumberOfCopies(item) {
        return this.items.get(item) ?? 0;
    }
}
exports.CountedSet = CountedSet;

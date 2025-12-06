"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DesignCourse = exports.ProgrammingCourse = void 0;
class Course {
    constructor(title, duration) {
        this.title = title;
        this.duration = duration;
    }
}
class ProgrammingCourse extends Course {
    constructor(title, duration, language) {
        super(title, duration);
        this.language = language;
    }
    getDescription() {
        return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`;
    }
}
exports.ProgrammingCourse = ProgrammingCourse;
class DesignCourse extends Course {
    constructor(title, duration, tools) {
        super(title, duration);
        this.tools = tools;
    }
    getDescription() {
        return `Design Course: ${this.title} using ${this.tools.join(", ")} - ${this.duration} hours`;
    }
}
exports.DesignCourse = DesignCourse;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignTask = void 0;
const assignTask = (user, task) => {
    if (task.assignedTo === undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
};
exports.assignTask = assignTask;

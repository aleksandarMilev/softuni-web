"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotifyOnSuccess = void 0;
const NotifyOnSuccess = (notificationType) => {
    return function (_target, methodName, descriptor) {
        const original = descriptor.value;
        descriptor.value = function (...args) {
            const result = original.apply(this, args);
            const isSuccessful = typeof result === "string" && !result.toLowerCase().startsWith("error");
            if (isSuccessful) {
                console.log(`[NOTIFY] Sending ${notificationType} notification for successful action "${methodName}".`);
            }
            return result;
        };
        return descriptor;
    };
};
exports.NotifyOnSuccess = NotifyOnSuccess;

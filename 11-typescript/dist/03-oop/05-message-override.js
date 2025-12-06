"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMSMessage = exports.EmailMessage = void 0;
class Message {
    send() {
        return "Sending message...";
    }
}
class EmailMessage extends Message {
    send() {
        return "Sending email...";
    }
}
exports.EmailMessage = EmailMessage;
class SMSMessage extends Message {
    send() {
        return "Sending SMS...";
    }
}
exports.SMSMessage = SMSMessage;

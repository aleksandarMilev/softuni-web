class Message {
  send() {
    return "Sending message...";
  }
}

export class EmailMessage extends Message {
  override send() {
    return "Sending email...";
  }
}

export class SMSMessage extends Message {
  override send() {
    return "Sending SMS...";
  }
}

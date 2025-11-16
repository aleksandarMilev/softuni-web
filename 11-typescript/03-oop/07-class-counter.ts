export class Counter {
  private static count = 0;

  static increment() {
    Counter.count += 1;
  }

  static getCount() {
    return Counter.count;
  }
}

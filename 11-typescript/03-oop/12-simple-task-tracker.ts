export class Task {
  constructor(
    private readonly title: string,
    private readonly description: string,
    private _createdBy: string,
    private completed: boolean = false
  ) {}

  get createdBy() {
    return this._createdBy;
  }

  toggleStatus() {
    this.completed = !this.completed;
  }

  getDetails() {
    const completedToString = this.completed ? "Completed" : "Pending";
    return `Task: ${this.title} - ${this.description} - ${completedToString}`;
  }

  static createSampleTasks() {
    return [
      new Task(
        "clean room",
        "i should clean my room, otherwise mom will kill me",
        "shanoshamanizam",
        false
      ),
      new Task(
        "learn TS",
        "i should learn TS, otherwise I will never find a job",
        "shanoshamanizam",
        true
      ),
    ];
  }
}

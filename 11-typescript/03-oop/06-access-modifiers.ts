export class Employee {
  constructor(
    readonly name: string,
    protected readonly position: string,
    private readonly salary: number
  ) {}

  getDetails() {
    return `Name: ${this.name}, Position: ${this.position}`;
  }

  showSalary() {
    return `Salary: $${this.salary}`;
  }
}

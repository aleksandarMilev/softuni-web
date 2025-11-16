abstract class Course {
  constructor(readonly title: string, readonly duration: number) {}

  abstract getDescription(): string;
}

export class ProgrammingCourse extends Course {
  constructor(
    title: string,
    duration: number,
    private readonly language: string
  ) {
    super(title, duration);
  }

  getDescription() {
    return `Programming Course: ${this.title} in ${this.language} - ${this.duration} hours`;
  }
}

export class DesignCourse extends Course {
  constructor(
    title: string,
    duration: number,
    private readonly tools: string[]
  ) {
    super(title, duration);
  }

  getDescription() {
    return `Design Course: ${this.title} using ${this.tools.join(", ")} - ${
      this.duration
    } hours`;
  }
}

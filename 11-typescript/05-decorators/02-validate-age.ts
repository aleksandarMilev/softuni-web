const validate = (
  _target: Object,
  _methodName: string,
  descriptor: PropertyDescriptor
) => {
  const MIN_AGE = 1;
  const MAX_AGE = 200;

  const original = descriptor.set;
  descriptor.set = function (age: number) {
    if (age < MIN_AGE || age > MAX_AGE) {
      throw new Error(
        `Age should be more than ${MIN_AGE} and less than ${MAX_AGE}!`
      );
    }

    original?.call(this, age);
  };

  return descriptor;
};

export class Age {
  private _age!: number;

  constructor(age: number) {
    this.age = age;
  }

  get age() {
    return this._age;
  }

  @validate
  set age(val: number) {
    this._age = val;
  }
}

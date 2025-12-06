const minLength = (minLength: number) => {
  return function (
    _target: Object,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalSet = descriptor.set!;
    descriptor.set = function (value: string) {
      if (value.length < minLength) {
        throw new Error(
          `name must have a min length of ${minLength} characters`
        );
      }

      originalSet.call(this, value);
    };

    return descriptor;
  };
};

const range = (min: number, max: number) => {
  return function (
    _target: Object,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalSet = descriptor.set!;
    descriptor.set = function (value: number) {
      if (value < min || value > max) {
        throw new Error(`age must be between ${min} and ${max}`);
      }

      originalSet.call(this, value);
    };

    return descriptor;
  };
};

const matches = (regex: RegExp) => {
  return function (
    _target: Object,
    _propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalSet = descriptor.set!;
    descriptor.set = function (value: string) {
      if (!regex.test(value)) {
        regex.lastIndex = 0;
        throw new Error(`password needs to match ${regex.toString()}`);
      }

      regex.lastIndex = 0;
      originalSet.call(this, value);
    };

    return descriptor;
  };
};

export class UserValidated {
  private _name!: string;
  private _age!: number;
  private _password!: string;

  constructor(name: string, age: number, password: string) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  @minLength(3)
  set name(val: string) {
    this._name = val;
  }

  @range(1, 100)
  set age(val: number) {
    this._age = val;
  }

  @matches(/^[a-zA-Z0-9]+$/g)
  set password(value: string) {
    this._password = value;
  }

  get name() {
    return this._name;
  }

  get age() {
    return this._age;
  }
}

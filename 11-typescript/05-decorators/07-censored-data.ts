class MockCensorService<T extends { [key: string]: any }> {
  constructor(private censoredProperties: string[]) {}

  censorProperties(items: T[]) {
    let censoredItems = items.slice();

    censoredItems.forEach((i) => {
      this.censoredProperties.forEach((prop) => {
        delete i[prop];
      });
    });

    return censoredItems;
  }
}

const withCreatedAt = <T extends { new (...args: any[]): {} }>(ctor: T) => {
  return class extends ctor {
    createdAt: Date = new Date();
  };
};

@withCreatedAt
class User {
  constructor(
    public name: string,
    public age: number,
    public creditCardNumber: string
  ) {}

  getInfo() {
    return `${this.name}, Age: ${this.age} CreditCardNumber: ${
      (this as any).creditCardNumber
    }`;
  }
}

@withCreatedAt
class Employee {
  constructor(
    public name: string,
    public birthday: Date,
    public salary: number
  ) {}

  getInfo() {
    return `${
      this.name
    }, Birthday: ${this.birthday?.toLocaleDateString()} Salary: ${this.salary}`;
  }
}

const filterRecentAndCensor = <T extends { [key: string]: any }>(
  seconds: number,
  censorService: MockCensorService<T>,
  logMessage?: string
) => {
  const windowMs = seconds * 1_000;

  return function (
    _target: Object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;
    descriptor.value = function (...args: any[]): T[] {
      if (logMessage) {
        console.log(logMessage.replace("{method}", methodName));
      }

      const allItems: T[] = original.apply(this, args);
      const now = Date.now();

      const recent = allItems.filter((item: any) => {
        const createdAt: Date | undefined = item.createdAt;
        if (!createdAt) {
          return false;
        }

        return now - createdAt.getTime() <= windowMs;
      });

      return censorService.censorProperties(recent);
    };

    return descriptor;
  };
};

let userCensorService = new MockCensorService<User>(["creditCardNumber"]);
let employeeCensorService = new MockCensorService<Employee>([
  "birthday",
  "salary",
]);

export class UsersService {
  private _users: User[];
  private _employees: Employee[];

  constructor(users: User[], employees: Employee[]) {
    this._users = users;
    this._employees = employees;
  }

  addUser(user: User) {
    this._users.push(user);
  }

  addEmployee(employee: Employee) {
    this._employees.push(employee);
  }

  @filterRecentAndCensor<User>(5, userCensorService)
  getUsers() {
    return this._users;
  }

  @filterRecentAndCensor<Employee>(
    10,
    employeeCensorService,
    "Method {method} called successfully"
  )
  getEmployees() {
    return this._employees;
  }
}

const authorize = (service: MockAuthorizationService) => {
  return function (
    _target: Object,
    methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.get;
    descriptor.get = function () {
      const hasAccess = service.canViewData(methodName);
      if (!hasAccess) {
        throw new Error("You are not authorized to view this information");
      }

      return original?.apply(this);
    };

    return descriptor;
  };
};

class MockAuthorizationService {
  constructor(
    private userRole: "Guest" | "PersonalDataAdministrator" | "Admin"
  ) {}

  canViewData(property: string) {
    switch (this.userRole) {
      case "Admin":
        return true;
      case "PersonalDataAdministrator":
        return ["name", "age"].includes(property);
      default:
        return false;
    }
  }
}

let service = new MockAuthorizationService("Guest");

export class User {
  constructor(
    private readonly _name: string,
    private readonly _age: number,
    private readonly _creditCardNumber: string
  ) {}

  @authorize(service)
  get name() {
    return this._name;
  }

  @authorize(service)
  get age() {
    return this._age;
  }

  @authorize(service)
  get creditCardNumber() {
    return this._creditCardNumber;
  }
}

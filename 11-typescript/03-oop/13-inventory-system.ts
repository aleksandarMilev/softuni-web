class Product {
  private static _productCount: number = 0;

  readonly id: number;

  constructor(private _name: string, private _price: number) {
    this.name = _name;
    this.price = _price;

    Product._productCount++;
    this.id = Product._productCount;
  }

  set name(value: string) {
    if (value.length < 1) {
      throw new Error("Name must contain at least 1 character");
    }

    this._name = value;
  }

  set price(value: number) {
    if (value <= 0) {
      throw new Error("Price must be positive");
    }

    this._price = value;
  }

  static get productCount(): number {
    return Product._productCount;
  }

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`;
  }
}

export class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  listProducts(): string {
    const items = this.products.map((p) => p.getDetails()).join("\n");
    return `${items}\nTotal products created: ${Product.productCount}`;
  }
}

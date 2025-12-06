"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inventory = void 0;
class Product {
    constructor(_name, _price) {
        this._name = _name;
        this._price = _price;
        this.name = _name;
        this.price = _price;
        Product._productCount++;
        this.id = Product._productCount;
    }
    set name(value) {
        if (value.length < 1) {
            throw new Error("Name must contain at least 1 character");
        }
        this._name = value;
    }
    set price(value) {
        if (value <= 0) {
            throw new Error("Price must be positive");
        }
        this._price = value;
    }
    static get productCount() {
        return Product._productCount;
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`;
    }
}
Product._productCount = 0;
class Inventory {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    listProducts() {
        const items = this.products.map((p) => p.getDetails()).join("\n");
        return `${items}\nTotal products created: ${Product.productCount}`;
    }
}
exports.Inventory = Inventory;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Circle = void 0;
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
exports.Circle = Circle;
class Rectangle extends Shape {
    constructor(color, sideA, sideB) {
        super(color);
        this.sideA = sideA;
        this.sideB = sideB;
    }
    getArea() {
        return this.sideA * this.sideB;
    }
}
exports.Rectangle = Rectangle;

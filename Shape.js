class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class");
        }
    }

    area() {
        throw new Error("Abstract method must be overridden");
    }

    perimeter() {
        throw new Error("Abstract method must be overridden");
    }
}

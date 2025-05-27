class Shape {
    area() {
        throw new Error("This method should be overridden.");
    }
}

class Rectangle extends Shape {
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }

    area() {  // calculate rectangle area
        return this.length * this.width;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {  // calculate circle area
        return 3.14 * this.radius * this.radius;
    }
}

const rectangle = new Rectangle(2, 3);
console.log(rectangle.area()); // Prints: 6

const circle = new Circle(5);
console.log(circle.area()); // Prints: 78.5

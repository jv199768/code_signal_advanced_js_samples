class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return 3.14 * (this.radius ** 2);
    }

    perimeter() {
        return 2 * 3.14 * this.radius;
    }
}

const rectangle = new Rectangle(2, 3); // A rectangle with sides 2 and 3
console.log(rectangle.area()); // Prints: 6
console.log(rectangle.perimeter()); // Prints: 10

const circle = new Circle(5); // A circle with a radius of 5
console.log(circle.area()); // Prints: 78.5
console.log(circle.perimeter()); // Prints: 31.4

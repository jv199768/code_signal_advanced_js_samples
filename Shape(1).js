class Shape {
    area(length, width, radius) {
        if (radius) {  // If the radius is provided, calculate the circle area
            return 3.14 * radius * radius;
        } else if (length && width) {  // if length and width are provided, calculate the rectangle area
            return length * width;
        } else {
            return "Invalid parameters";
        }
    }
}

const shape = new Shape();
console.log(shape.area(5, 2));  // Rectangle area
console.log(shape.area(null, null, 3));  // Circle area

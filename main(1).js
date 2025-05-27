// Importing the functions from shapes.js
import { calculateRectangleArea, calculateTriangleArea } from './shapes.js';

const rectangleArea = calculateRectangleArea(5, 4); // calculates rectangle area
const triangleArea = calculateTriangleArea(3, 4); // calculates triangle area

console.log(`Rectangle Area: ${rectangleArea}`); // Output: Rectangle Area: 20
console.log(`Triangle Area: ${triangleArea}`); // Output: Triangle Area: 6

// Create a deque
let deque = ["Apple", "Banana", "Cherry"];

// Rotate the deque
deque.unshift(deque.pop());  // Rotates to the right by one place

console.log(deque);  // Expects ["Cherry", "Apple", "Banana"]

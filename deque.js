// Create a deque and add items
let deque = [];
deque.push("Middle");
deque.push("Right end");
deque.unshift("Left end");

// Remove an item from the right
console.log(deque.pop());  // Expects "Right end"

// Remove an item from the left
console.log(deque.shift());  // Expects "Left end"

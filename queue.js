// Create a queue and enqueue items
let queue = [];
queue.push("Item 1");
queue.push("Item 2");

// Check if the queue is non-empty, then dequeue an item
if (queue.length > 0) {
    console.log(queue.shift());  // Expects "Item 1"
}

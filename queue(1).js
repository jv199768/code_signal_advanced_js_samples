class Queue {
    constructor() {
        // Initializing an empty queue
        this.buffer = [];
    }

    // Adding (enqueueing) an item to the queue
    enqueue(val) {
        this.buffer.unshift(val);
    }

    // Removing (dequeuing) an item from the queue
    dequeue() {
        return this.buffer.pop();
    }

    // Checking if the queue is empty
    isEmpty() {
        return this.buffer.length === 0;
    }

    // Checking the size (number of items) in the queue
    size() {
        return this.buffer.length;
    }
}

// Example usage:
const queue = new Queue();
queue.enqueue('order1');
queue.enqueue('order2');
console.log(queue.dequeue()); // Outputs 'order1'
console.log(queue.isEmpty()); // Outputs false
console.log(queue.size());    // Outputs 1

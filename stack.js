let stack = []; // A new empty stack

// Push operations
stack.push('John');
stack.push('Mary');
stack.push('Steve');

stack.pop(); // Pop operation removes 'Steve'
console.log(stack); // Outputs: ['John', 'Mary']
stack.push('Sam');
console.log(stack[stack.length - 1]); // Outputs: 'Sam'

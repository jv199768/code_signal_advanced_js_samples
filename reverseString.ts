function reverseString(inputString) {
    let stack = inputString.split('');
    
    let reversedString = '';
    while (stack.length > 0) {
        reversedString += stack.pop();
    }
    return reversedString;
}

console.log(reverseString('HELLO')); // Outputs: OLLEH

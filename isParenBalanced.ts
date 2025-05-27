function isParenBalanced(parenString) {
    let stack = [];
    let isBalanced = true;
    let index = 0;
    const openingParen = {')': '(', ']': '[', '}': '{'}; // a matching opening parenthesis for every closing one

    // Traversing all string characters
    while (index < parenString.length && isBalanced) {
        let paren = parenString[index];
        if (paren in openingParen) {
            if (stack.length === 0 || stack[stack.length - 1] !== openingParen[paren]) {
                isBalanced = false;
            } else {
                stack.pop();
            }
        } else if ("([{".includes(paren)) {
            stack.push(paren);
        }
        index++;
    }

    if (stack.length !== 0) {
        // If after traversing all characters, there is something left, it's bad
        isBalanced = false;
    }
    return isBalanced;
}

console.log(isParenBalanced("(())")); // Outputs: true
console.log(isParenBalanced("({[)}")); // Outputs: false

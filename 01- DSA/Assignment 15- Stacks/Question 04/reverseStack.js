function reverseStack(stack) {
  if (stack.length === 0) {
    return;
  }

  const top = stack.pop();
  reverseStack(stack);
  insertAtBottom(stack, top);
}

function insertAtBottom(stack, val) {
  if (stack.length === 0) {
    stack.push(val);
    return;
  }

  const top = stack.pop();
  insertAtBottom(stack, val);
  stack.push(top);
}

// Example usage:
const stack1 = [3, 2, 1, 7, 6];
reverseStack(stack1);
console.log(stack1); // Output: [6, 7, 1, 2, 3]

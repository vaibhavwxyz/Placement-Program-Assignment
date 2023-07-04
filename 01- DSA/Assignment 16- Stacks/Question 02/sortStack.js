function sortStack(stack) {
  const tempStack = [];

  while (stack.length > 0) {
    const temp = stack.pop();

    while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
      stack.push(tempStack.pop());
    }

    tempStack.push(temp);
  }

  return tempStack;
}

// Example usage:
const stack1 = [4, 2, 5, 1, 3];
console.log(sortStack(stack1)); // Output: [1, 2, 3, 4, 5]

const stack2 = [9, 4, 7, 2, 1, 6];
console.log(sortStack(stack2)); // Output: [1, 2, 4, 6, 7, 9]

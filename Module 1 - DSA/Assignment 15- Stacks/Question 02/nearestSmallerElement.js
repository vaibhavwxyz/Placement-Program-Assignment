function nearestSmallerElement(arr) {
  const stack = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result.push(-1);
    } else {
      result.push(stack[stack.length - 1]);
    }

    stack.push(arr[i]);
  }

  return result;
}

// Example usage:
const arr3 = [1, 6, 2];
console.log(nearestSmallerElement(arr3)); // Output: [-1, 1, 1]

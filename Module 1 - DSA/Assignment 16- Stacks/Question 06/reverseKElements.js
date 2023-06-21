function reverseKElements(queue, k) {
  const stack = [];

  for (let i = 0; i < k; i++) {
    stack.push(queue.shift());
  }

  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  for (let i = 0; i < queue.length - k; i++) {
    queue.push(queue.shift());
  }
}

// Example usage:
const queue1 = [1, 2, 3, 4, 5];
reverseKElements(queue1, 3);
console.log(queue1); // Output: [3, 2, 1, 4, 5]

const queue2 = [1, 2, 3, 4, 5, 6];
reverseKElements(queue2, 4);
console.log(queue2); // Output: [4, 3, 2, 1, 5, 6]

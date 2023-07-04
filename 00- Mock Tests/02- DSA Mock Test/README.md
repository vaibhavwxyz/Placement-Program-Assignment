# DSA Mock Test- 02 📕🚀

## 💡 Stack

> Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty.

### 🚀 Answer

```javascript
class Stack {
  constructor() {
    this.stack = [];
  }

  // Add an element to the top of the stack
  push(element) {
    this.stack.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.stack.pop();
  }

  // Check if the stack is empty
  isEmpty() {
    return this.stack.length === 0;
  }
}

// Usage example:
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30
console.log(stack.pop()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 10
console.log(stack.isEmpty()); // Output: true
console.log(stack.pop()); // Output: Stack is empty
```

## 💡 Queue

> Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty.

### 🚀 Answer

```javascript
class Queue {
  constructor() {
    this.queue = [];
  }

  // Add an element to the back of the queue
  enqueue(element) {
    this.queue.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.queue.shift();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }
}

// Usage example:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10
console.log(queue.dequeue()); // Output: 20
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 30
console.log(queue.isEmpty()); // Output: true
console.log(queue.dequeue()); // Output: Queue is empty
```

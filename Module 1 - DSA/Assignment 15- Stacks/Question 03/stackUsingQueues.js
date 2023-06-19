class Stack {
  constructor() {
    this.q1 = [];
    this.q2 = [];
  }

  push(val) {
    this.q2.push(val);

    while (this.q1.length > 0) {
      this.q2.push(this.q1.shift());
    }

    const temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
  }

  pop() {
    if (this.q1.length === 0) {
      return;
    }

    return this.q1.shift();
  }

  top() {
    if (this.q1.length === 0) {
      return -1;
    }

    return this.q1[0];
  }
}

// Example usage:
const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
stack.push(4);
console.log(stack.pop()); // Output: 4

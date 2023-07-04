class FrontMiddleBackQueue {
  constructor() {
    this.queue = [];
  }

  pushFront(val) {
    this.queue.unshift(val);
  }

  pushMiddle(val) {
    const mid = Math.floor(this.queue.length / 2);
    this.queue.splice(mid, 0, val);
  }

  pushBack(val) {
    this.queue.push(val);
  }

  popFront() {
    if (this.queue.length === 0) {
      return -1;
    }
    return this.queue.shift();
  }

  popMiddle() {
    if (this.queue.length === 0) {
      return -1;
    }
    const mid = Math.floor((this.queue.length - 1) / 2);
    return this.queue.splice(mid, 1)[0];
  }

  popBack() {
    if (this.queue.length === 0) {
      return -1;
    }
    return this.queue.pop();
  }
}

// Example usage:
const queue = new FrontMiddleBackQueue();
queue.pushFront(1);
queue.pushBack(2);
queue.pushMiddle(3);
queue.pushMiddle(4);
console.log(queue.popFront()); // Output: 1
console.log(queue.popMiddle()); // Output: 3
console.log(queue.popMiddle()); // Output: 4
console.log(queue.popBack()); // Output: 2
console.log(queue.popFront()); // Output: -1

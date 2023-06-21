class RecentCounter {
  constructor() {
    this.requests = [];
  }

  ping(t) {
    this.requests.push(t);

    while (this.requests[0] < t - 3000) {
      this.requests.shift();
    }

    return this.requests.length;
  }
}

// Example usage:
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(100)); // Output: 1
console.log(recentCounter.ping(300)); // Output: 2
console.log(recentCounter.ping(500)); // Output: 3
console.log(recentCounter.ping(700)); // Output: 4
console.log(recentCounter.ping(900)); // Output: 4

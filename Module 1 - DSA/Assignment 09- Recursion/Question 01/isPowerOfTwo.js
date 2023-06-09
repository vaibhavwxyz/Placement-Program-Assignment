function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }

  while (n % 2 === 0) {
    n = n / 2;
  }

  return n === 1;
}

// Example usage:
console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3)); // Output: false

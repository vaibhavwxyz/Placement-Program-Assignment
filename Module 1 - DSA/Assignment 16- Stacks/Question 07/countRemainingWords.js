function countRemainingWords(sequence) {
  const stack = [];

  for (let word of sequence) {
    if (stack.length > 0 && stack[stack.length - 1] === word) {
      stack.pop();
    } else {
      stack.push(word);
    }
  }

  return stack.length;
}

// Example usage:
const sequence1 = ["ab", "aa", "aa", "bcd", "ab"];
console.log(countRemainingWords(sequence1)); // Output: 3

const sequence2 = ["tom", "jerry", "jerry", "tom"];
console.log(countRemainingWords(sequence2)); // Output: 0

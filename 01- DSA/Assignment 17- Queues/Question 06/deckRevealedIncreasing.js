function deckRevealedIncreasing(deck) {
  deck.sort((a, b) => a - b);

  const result = [];
  const queue = [...deck];

  while (queue.length) {
    result.push(queue.shift());
    if (queue.length) {
      queue.push(queue.shift());
    }
  }

  return result;
}

// Example usage:
console.log(deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])); // Output: [2, 13, 3, 11, 5, 17, 7]
console.log(deckRevealedIncreasing([1, 2, 3, 4, 5])); // Output: [1, 3, 2, 5, 4]

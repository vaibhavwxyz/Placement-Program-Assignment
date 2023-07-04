function findTheWinner(n, k) {
  let winner = 0;

  for (let i = 2; i <= n; i++) {
    winner = (winner + k) % i;
  }

  return winner + 1;
}

// Example usage:
console.log(findTheWinner(5, 2)); // Output: 3
console.log(findTheWinner(6, 3)); // Output: 1

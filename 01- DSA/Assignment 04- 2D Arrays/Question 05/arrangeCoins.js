function arrangeCoins(n) {
  let stairs = 0;

  while (n >= 0) {
    stairs++;
    n -= stairs;
  }

  return stairs - 1;
}

const n = 5;
console.log(arrangeCoins(n)); // Output: 2

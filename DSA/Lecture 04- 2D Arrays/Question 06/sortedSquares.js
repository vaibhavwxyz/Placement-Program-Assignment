function sortedSquares(nums) {
  const result = [];

  for (const num of nums) {
    result.push(num * num);
  }

  result.sort((a, b) => a - b);

  return result;
}

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums)); // Output: [0, 1, 9, 16, 100]

function sortedSquares(nums) {
  const squaredArray = nums.map((num) => num * num);
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}

const nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums)); // Output: [0, 1, 9, 16, 100]

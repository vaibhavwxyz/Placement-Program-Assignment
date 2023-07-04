function shuffle(nums, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
}

const nums = [2, 5, 1, 3, 4, 7];
const n = 3;
console.log(shuffle(nums, n)); // Output: [2, 3, 5, 4, 1, 7]

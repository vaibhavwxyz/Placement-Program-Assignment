function maximumGap(nums) {
  if (nums.length < 2) {
    return 0;
  }

  nums.sort((a, b) => a - b);

  let maxGap = 0;
  for (let i = 1; i < nums.length; i++) {
    const gap = nums[i] - nums[i - 1];
    maxGap = Math.max(maxGap, gap);
  }

  return maxGap;
}

// Example usage:
console.log(maximumGap([3, 6, 9, 1]));
// Output: 3
console.log(maximumGap([10]));
// Output: 0

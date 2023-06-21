function maxSubarraySumCircular(nums) {
  const n = nums.length;

  let maxSum = -Infinity;
  let currentMax = 0;

  for (let i = 0; i < n; i++) {
    currentMax = Math.max(nums[i], currentMax + nums[i]);
    maxSum = Math.max(maxSum, currentMax);
  }

  let minSum = Infinity;
  let currentMin = 0;
  let totalSum = 0;

  for (let i = 0; i < n; i++) {
    currentMin = Math.min(nums[i], currentMin + nums[i]);
    minSum = Math.min(minSum, currentMin);
    totalSum += nums[i];
  }

  if (maxSum > 0) {
    return Math.max(maxSum, totalSum - minSum);
  } else {
    return maxSum;
  }
}

// Example usage:
console.log(maxSubarraySumCircular([1, -2, 3, -2])); // Output: 3
console.log(maxSubarraySumCircular([5, -3, 5])); // Output: 10

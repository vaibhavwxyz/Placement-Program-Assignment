function minDifference(nums, k) {
  const n = nums.length;

  if (n <= 4) {
    return 0; // If the array has 4 or fewer elements, the minimum score will always be 0
  }

  nums.sort((a, b) => a - b); // Sort the array in ascending order

  let minScore = nums[n - 1] - nums[0]; // Initialize the minimum score with the difference between the maximum and minimum elements

  for (let i = 0; i <= 3; i++) {
    // Try different combinations of changing the smallest 3 elements and the largest 3 elements
    const currentScore = nums[n - 4 + i] - nums[i];
    minScore = Math.min(minScore, currentScore);
  }

  return minScore;
}

// Test the function with the given example
const nums = [1];
const k = 0;
const minScore = minDifference(nums, k);
console.log(minScore); // Output: 0

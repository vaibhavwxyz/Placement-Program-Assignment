function arrayPairSum(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    // Take the minimum value of each pair and add it to the sum
    sum += nums[i];
  }

  return sum;
}

// Test the function with the given example
const nums = [1, 4, 3, 2];
const maxSum = arrayPairSum(nums);
console.log(maxSum); // Output: 4

function maximumProduct(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;

  // Compare the product of the two smallest numbers with the product of the two largest numbers and the largest number
  const option1 = nums[0] * nums[1] * nums[n - 1];
  const option2 = nums[n - 1] * nums[n - 2] * nums[n - 3];

  // Return the maximum of the two options
  return Math.max(option1, option2);
}

// Test the function with the given example
const nums = [1, 2, 3];
const maxProduct = maximumProduct(nums);
console.log(maxProduct); // Output: 6

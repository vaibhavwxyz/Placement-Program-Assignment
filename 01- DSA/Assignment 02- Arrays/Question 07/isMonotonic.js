function isMonotonic(nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }

    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
}

// Test the function with the given example
const nums = [1, 2, 2, 3];
const isMonotonicArray = isMonotonic(nums);
console.log(isMonotonicArray); // Output: true

function find132pattern(nums) {
  const stack = [];
  let s3 = -Infinity;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < s3) {
      return true;
    }

    while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
      s3 = stack.pop();
    }

    stack.push(nums[i]);
  }

  return false;
}

// Example usage:
console.log(find132pattern([1, 2, 3, 4]));
// Output: false
console.log(find132pattern([3, 1, 4, 2]));
// Output: true
console.log(find132pattern([-1, 3, 2, 0]));
// Output: true

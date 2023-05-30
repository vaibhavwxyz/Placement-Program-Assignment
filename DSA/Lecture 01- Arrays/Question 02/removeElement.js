const removeElement = (nums, val) => {
  let count = 0;

  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== val) {
      count += 1;
    } else {
      nums[index] = 0;
    }
  }

  nums.sort().reverse();
  return count;
};

let nums = [3, 2, 2, 3];
console.log(removeElement(nums, 3));
console.log(nums);

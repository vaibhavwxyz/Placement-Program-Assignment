function findDuplicates(nums) {
  const result = [];

  for (const num of nums) {
    const absNum = Math.abs(num);

    if (nums[absNum - 1] > 0) {
      nums[absNum - 1] *= -1;
    } else {
      result.push(absNum);
    }
  }

  return result;
}

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); // Output: [2, 3]

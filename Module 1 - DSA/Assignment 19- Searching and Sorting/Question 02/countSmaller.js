function countSmaller(nums) {
  const result = new Array(nums.length).fill(0);
  const sortedNums = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    const index = binarySearch(sortedNums, nums[i]);
    result[i] = index;
    sortedNums.splice(index, 0, nums[i]);
  }

  return result;
}

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

function searchRange(nums, target) {
  const first = findFirst(nums, target);
  const last = findLast(nums, target);

  return [first, last];
}

function findFirst(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let first = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    if (nums[mid] === target) {
      first = mid;
    }
  }

  return first;
}

function findLast(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let last = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    if (nums[mid] === target) {
      last = mid;
    }
  }

  return last;
}

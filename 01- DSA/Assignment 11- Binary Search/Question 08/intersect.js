function intersect(nums1, nums2) {
  const numCount = {};
  const result = [];

  for (const num of nums1) {
    numCount[num] = (numCount[num] || 0) + 1;
  }

  for (const num of nums2) {
    if (numCount[num] > 0) {
      result.push(num);
      numCount[num]--;
    }
  }

  return result;
}

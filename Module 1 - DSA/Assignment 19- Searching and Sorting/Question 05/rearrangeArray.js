function rearrangeArray(nums) {
  let positiveIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      [nums[i], nums[positiveIndex]] = [nums[positiveIndex], nums[i]];
      positiveIndex++;
    }
  }

  let positive = positiveIndex;
  let negative = 0;

  while (positive < nums.length && negative < positive && nums[negative] < 0) {
    [nums[negative], nums[positive]] = [nums[positive], nums[negative]];
    positive++;
    negative += 2;
  }

  return nums;
}

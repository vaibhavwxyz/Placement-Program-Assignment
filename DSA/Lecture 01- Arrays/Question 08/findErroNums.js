const findErrorNums = (nums) => {
  const n = nums.length;
  const countMap = new Map();

  let duplicate, missing;

  for (let num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  for (let i = 1; i <= n; i++) {
    const count = countMap.get(i) || 0;
    if (count === 2) {
      duplicate = i;
    } else if (count === 0) {
      missing = i;
    }
  }

  return [duplicate, missing];
};

let nums = [1, 2, 2, 4];
let result = findErrorNums(nums);
console.log(result); // Output: [2, 3]

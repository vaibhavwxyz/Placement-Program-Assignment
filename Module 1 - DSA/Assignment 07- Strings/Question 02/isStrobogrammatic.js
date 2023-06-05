function isStrobogrammatic(num) {
  const map = new Map([
    ["0", "0"],
    ["1", "1"],
    ["6", "9"],
    ["8", "8"],
    ["9", "6"],
  ]);

  let left = 0;
  let right = num.length - 1;

  while (left <= right) {
    if (!map.has(num[left]) || map.get(num[left]) !== num[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

const num = "69";
console.log(isStrobogrammatic(num)); // Output: true

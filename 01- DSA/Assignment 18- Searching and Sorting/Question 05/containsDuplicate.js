function containsDuplicate(nums) {
  const numSet = new Set();

  for (const num of nums) {
    if (numSet.has(num)) {
      return true;
    }

    numSet.add(num);
  }

  return false;
}

// Example usage:
console.log(containsDuplicate([1, 2, 3, 1]));
// Output: true
console.log(containsDuplicate([1, 2, 3, 4]));
// Output: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
// Output: true

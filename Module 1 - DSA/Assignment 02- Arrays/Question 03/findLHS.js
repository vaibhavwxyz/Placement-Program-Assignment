function findLHS(nums) {
  let maxLen = 0;

  // Create a frequency map of the numbers in the array
  const frequencyMap = new Map();
  for (const num of nums) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Check each number in the array
  for (const num of nums) {
    // Check if there is a number with a difference of 1 in the frequency map
    if (frequencyMap.has(num + 1)) {
      const currentLen = frequencyMap.get(num) + frequencyMap.get(num + 1);
      maxLen = Math.max(maxLen, currentLen);
    }
  }

  return maxLen;
}

// Test the function with the given example
const nums = [1, 3, 2, 2, 5, 2, 3, 7];
const longestSubsequence = findLHS(nums);
console.log(longestSubsequence); // Output: 5

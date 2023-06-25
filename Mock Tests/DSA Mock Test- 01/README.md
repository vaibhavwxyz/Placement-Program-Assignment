# DSA Mock Test- 01 📕🚀

## 💡 moveZeroes

> Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
>
> Note that you must do this in-place without making a copy of the array.
>
> **Example 1:**
>
> - Input: nums = [0, 1, 0, 3, 12]
> - Output: [1, 3, 12, 0, 0]
>
> **Example 2:**
>
> - Input: nums = [0]
> - Output: [0]
>
> **Constraints:**
>
> - a. 1 <= nums.length <= 10^4
> - b. -2^31 <= nums[i] <= 2^31 - 1

### 🚀 Answer

```javascript
const moveZeroes = (nums) => {
  let p = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[p] = nums[i];
      p++;
    }
  }

  for (let i = p; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
};

console.log(moveZeroes([0, 0, 1]));
```

## 💡 First Unique Character in a String

> Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
>
> **Example 1:**
>
> - Input: s = "leetcode"
> - Output: 0
>
> **Example 2:**
>
> - Input: s = "loveleetcode"
> - Output: 2
>
> **Example 3:**
>
> - Input: s = "aabb"
> - Output: -1
>
> **Constraints:**
>
> - a. 1 <= s.length <= 10^5
> - b. s consists of only lowercase English letters.

### 🚀 Answer

```javascript
function firstUniqChar(s) {
  const charCount = new Map();

  // Count the occurrences of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1; // No unique characters found
}

// Example usage:
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
```

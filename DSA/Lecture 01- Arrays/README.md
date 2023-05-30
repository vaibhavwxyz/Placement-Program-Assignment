# Assignment 01- Arrays

## 💡 Question 01

> Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
> You may assume that each input would have exactly one solution, and you may not use the same element twice.
>
> You can return the answer in any order.
>
> **Example:**
>
> - Input: nums = [2, 7, 11, 15], target = 9
> - Output: [0, 1]
>
> **Explanation:** Because nums[0] + nums[1] == 9, we return [0, 1]

### 🚀 Answer

```javascript
const twoSum = (nums, target) => {
  let ans = []; // to store the indices of the two numbers
  for (let i = 0; i < nums.length; i++) {
    // loop through each element in the array
    for (let j = i + 1; j < nums.length; j++) {
      // loop through the rest of the array to find the other number
      let sum = nums[i] + nums[j]; // calculate the sum of the two numbers
      if (sum === target) {
        // check if the sum equals the target value
        ans.push(i); // store the indices of the two numbers
        ans.push(j);
        return ans; // return the answer
      }
    }
  }
  return ans; // if no such numbers exist, return an empty array
};
```

## 💡 Question 02

> Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
>
> Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
>
> - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
> - Return k.
>
> **Example :**
>
> - Input: nums = [3, 2, 2, 3], val = 3
> - Output: 2, nums = [2, 2, _*, _*]
>
> **Explanation:** Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k (hence they are underscores)

### 🚀 Answer

```javascript
const removeElement = (nums, val) => {
  let count = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] !== val) {
      count += 1;
    } else {
      nums[index] = 0;
    }
  }

  nums.sort().reverse();

  return count;
};
```

## 💡 Question 03

> Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
>
> You must write an algorithm with O(log n) runtime complexity.
>
> **Example:**
>
> - Input: nums = [1, 3, 5, 6], target = 5
> - Output: 2

### 🚀 Answer

```javascript
const searchInsert = (nums, target) => {
  if (!nums) return 0;

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return left;
};
```

## 💡 Question 04

> You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
>
> Increment the large integer by one and return the resulting array of digits.
>
> **Example:**
>
> - Input: digits = [1, 2, 3]
> - Output: [1, 2, 4]
>
> **Explanation:**
>
> - The array represents the integer 123.
> - Incrementing by one gives 123 + 1 = 124.
> - Thus, the result should be [1, 2, 4].

### 🚀 Answer

```javascript
const plusOne = (digits) => {
  if (!digits) return 0;

  for (let index = digits.length - 1; index >= 0; index--) {
    digits[index]++;

    if (digits[index] === 10) {
      digits[index] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);

  return digits;
};
```

## 💡 Question 05

> You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
>
> Merge nums1 and nums2 into a single array sorted in non-decreasing order.
>
> The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
>
> **Example:**
>
> - Input: nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
> - Output: [1, 2, 2, 3, 5, 6]
>
> **Explanation:**
>
> - The arrays we are merging are [1, 2, 3] and [2, 5, 6].
> - The result of the merge is [1, 2, 2, 3, 5, 6] with the underlined elements coming from nums1.

### 🚀 Answer

```javascript
const merge = (nums1, m, nums2, n) => {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
```

## 💡 Question 06

> Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
>
> **Example:**
>
> - Input: nums = [1, 2, 3, 1]
> - Output: true

### 🚀 Answer

```javascript
const containsDuplicate = (nums) => {
  const set = new Set();

  for (let i of nums) {
    if (set.has(i)) {
      return true;
    }
    set.add(i);
  }
  return false;
};
```

## 💡 Question 07

> Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
>
> Note that you must do this in-place without making a copy of the array.
>
> **Example:**
>
> - Input: nums = [0, 1, 0, 3, 12]
> - Output: [1, 3, 12, 0, 0]

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
```

## 💡 Question 08

> You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.
>
> You are given an integer array nums representing the data status of this set after the error.
>
> Find the number that occurs twice and the number that is missing and return them in the form of an array.
>
> **Example:**
>
> - Input: nums = [1, 2, 2, 4]
> - Output: [2, 3]

### 🚀 Answer

```javascript
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
```

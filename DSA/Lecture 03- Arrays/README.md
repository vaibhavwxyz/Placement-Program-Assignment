# Assignment 03- Arrays

## 💡 Question 01

> Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to the target.
> Return the sum of the three integers.
>
> You may assume that each input would have exactly one solution.
>
> **Example:**
>
> - Input: nums = [-1,2,1,-4], target = 1
> - Output: 2
>
> **Explanation:** The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

### 🚀 Answer

```javascript
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b);
  let closestSum = Infinity;

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      if (sum === target) {
        return sum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}
```

## 💡 Question 02

Given an array nums of n integers, return an array of all the unique quadruplets
[nums[a], nums[b], nums[c], nums[d]] such that:
● 0 <= a, b, c, d < n
● a, b, c, and d are distinct.
● nums[a] + nums[b] + nums[c] + nums[d] == target

You may return the answer in any order.

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

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

> A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
>
> For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].
>
> The next permutation of an array of integers is the next lexicographically greater permutation of its integer. More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container.
>
> If such an arrangement is not possible, the array must be rearranged as the lowest possible order (i.e., sorted in ascending order).
>
> - For example, the next permutation of arr = [1,2,3] is [1,3,2].
> - Similarly, the next permutation of arr = [2,3,1] is [3,1,2].
> - While the next permutation of arr = [3,2,1] is [1,2,3] because [3,2,1] does not have a lexicographical larger rearrangement.
>
> Given an array of integers nums, find the next permutation of nums.
> The replacement must be in place and use only constant extra memory.
>
> **Example 1:**
>
> - Input: nums = [1,2,3]
> - Output: [1,3,2]

### 🚀 Answer

```javascript
function nextPermutation(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[i] >= nums[j]) {
      j--;
    }
    swap(nums, i, j);
  }

  reverse(nums, i + 1);
}

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}

function reverse(nums, start) {
  let i = start;
  let j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    i++;
    j--;
  }
}
```

## 💡 Question 04

> Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
>
> You must write an algorithm with O(log n) runtime complexity.
>
> **Example:**
>
> - Input: nums = [1,3,5,6], target = 5
> - Output: 2

### 🚀 Answer

```javascript
function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}
```

## 💡 Question 05

> You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
>
> Increment the large integer by one and return the resulting array of digits.
>
> **Example:**
>
> - Input: digits = [1,2,3]
> - Output: [1,2,4]
>
> **Explanation:**
>
> - The array represents the integer 123.
> - Incrementing by one gives 123 + 1 = 124.
> - Thus, the result should be [1,2,4].

### 🚀 Answer

```javascript
function plusOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    digits.unshift(carry);
  }

  return digits;
}
```

## 💡 Question 06

> Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
>
> You must implement a solution with a linear runtime complexity and use only constant extra space.
>
> **Example:**
>
> - Input: nums = [2,2,1]
> - Output: 1

### 🚀 Answer

```javascript
function singleNumber(nums) {
  let result = 0;

  for (const num of nums) {
    result ^= num;
  }

  return result;
}
```

## 💡 Question 07

> You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are within the inclusive range.
>
> A number x is considered missing if x is in the range [lower, upper] and x is not in nums.
>
> Return the shortest sorted list of ranges that exactly covers all the missing numbers. That is, no element of nums is included in any of the ranges, and each missing number is covered by one of the ranges.
>
> **Example:**
>
> - Input: nums = [0,1,3,50,75], lower = 0, upper = 99
> - Output: [[2,2],[4,49],[51,74],[76,99]]
>
> **Explanation:** The ranges are:
> [2,2] > [4,49] > [51,74] > [76,99]

### 🚀 Answer

```javascript
function findMissingRanges(nums, lower, upper) {
  const result = [];
  let start = lower;

  for (const num of nums) {
    if (num > start) {
      result.push(getRange(start, num - 1));
    }
    start = num + 1;
  }

  if (start <= upper) {
    result.push(getRange(start, upper));
  }

  return result;
}

function getRange(start, end) {
  return start === end ? `${start}` : `${start}->${end}`;
}
```

## 💡 Question 08

> Given an array of meeting time intervals where intervals[i] = [starti, endi], determine if a person could attend all meetings.
>
> **Example:**
>
> - Input: intervals = [[0,30],[5,10],[15,20]]
> - Output: false

### 🚀 Answer

```javascript
function canAttendMeetings(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}
```

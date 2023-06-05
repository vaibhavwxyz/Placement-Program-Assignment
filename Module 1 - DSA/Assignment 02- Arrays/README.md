# Assignment 02- Arrays

## 💡 Question 01

> Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
>
> You can return the answer in any order.
>
> **Example:**
>
> - Input: nums = [1, 4, 3, 2]
> - Output: 4
>
> **Explanation:** All possible pairings (ignoring the ordering of elements) are:
>
> 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
> 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
> 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
>    So the maximum possible sum is 4

### 🚀 Answer

```javascript
function arrayPairSum(nums) {
  // Sort the array in ascending order
  nums.sort((a, b) => a - b);

  let sum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    // Take the minimum value of each pair and add it to the sum
    sum += nums[i];
  }

  return sum;
}
```

## 💡 Question 02

> Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor.
>
> The doctor advised Alice to only eat n / 2 of the candies she has (n is always even). Alice likes her candies very much, and she wants to eat the maximum number of different types of candies while still following the doctor's advice.
>
> Given the integer array candyType of length n, return the maximum number of different types of candies she can eat if she only eats n / 2 of them.
>
> **Example:**
>
> - Input: candyType = [1, 1, 2, 2, 3, 3]
> - Output: 3
>
> **Explanation:** Alice can only eat 6 / 2 = 3 candies. Since there are only 3 types, she can eat one of each type.

### 🚀 Answer

```javascript
function distributeCandies(candyType) {
  // Calculate the maximum number of candies Alice can eat
  const maxEat = candyType.length / 2;

  // Create a Set to store the unique types of candies
  const candySet = new Set(candyType);

  // Return the minimum value between the number of unique candies and maxEat
  return Math.min(candySet.size, maxEat);
}
```

## 💡 Question 03

> We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
>
> Given an integer array nums, return the length of its longest harmonious subsequence
> among all its possible subsequences.
>
> A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.
>
> **Example:**
>
> - Input: nums = [1, 3, 2, 2, 5, 2, 3, 7]
> - Output: 5
>
> **Explanation:** The longest harmonious subsequence is [3, 2, 2, 2, 3].

### 🚀 Answer

```javascript
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
```

## 💡 Question 04

> You have a long flowerbed in which some of the plots are planted, and some are not.
> However, flowers cannot be planted in adjacent plots.
> Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.
>
> **Example:**
>
> - Input: flowerbed = [1, 0, 0, 0, 1], n = 1
> - Output: true

### 🚀 Answer

```javascript
function canPlaceFlowers(flowerbed, n) {
  let count = 0;
  let i = 0;

  while (i < flowerbed.length) {
    if (
      flowerbed[i] === 0 &&
      (i === 0 || flowerbed[i - 1] === 0) &&
      (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
    ) {
      flowerbed[i] = 1;
      count++;
    }

    if (count >= n) {
      return true;
    }

    i++;
  }

  return false;
}
```

## 💡 Question 05

> Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
>
> **Example:**
>
> - Input: nums = [1, 2, 3]
> - Output: 6

### 🚀 Answer

```javascript
function maximumProduct(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order

  const n = nums.length;

  // Compare the product of the two smallest numbers with the product of the two largest numbers and the largest number
  const option1 = nums[0] * nums[1] * nums[n - 1];
  const option2 = nums[n - 1] * nums[n - 2] * nums[n - 3];

  // Return the maximum of the two options
  return Math.max(option1, option2);
}
```

## 💡 Question 06

> Given an array of integers nums which is sorted in ascending order, and an integer target,
> write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
>
> You must write an algorithm with O(log n) runtime complexity.
>
> - Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
> - Output: 4
>
> **Explanation:** 9 exists in nums and its index is 4

### 🚀 Answer

```javascript
function search(nums, target) {
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

  return -1;
}
```

## 💡 Question 07

> An array is monotonic if it is either monotone increasing or monotone decreasing.
>
> An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is
> monotone decreasing if for all i <= j, nums[i] >= nums[j].
>
> Given an integer array nums, return true if the given array is monotonic, or false otherwise.
>
> **Example:**
>
> - Input: nums = [1, 2, 2, 3]
> - Output: true

### 🚀 Answer

```javascript
function isMonotonic(nums) {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      increasing = false;
    }

    if (nums[i] > nums[i - 1]) {
      decreasing = false;
    }
  }

  return increasing || decreasing;
}
```

## 💡 Question 08

> You are given an integer array nums and an integer k.
>
> In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.
>
> The score of nums is the difference between the maximum and minimum elements in nums.
>
> Return the minimum score of nums after applying the mentioned operation at most once for each index in it.
>
> **Example:**
>
> - Input: nums = [1], k = 0
> - Output: 0
>
> **Explanation:** The score is max(nums) - min(nums) = 1 - 1 = 0.

### 🚀 Answer

```javascript
function minDifference(nums, k) {
  const n = nums.length;

  if (n <= 4) {
    return 0; // If the array has 4 or fewer elements, the minimum score will always be 0
  }

  nums.sort((a, b) => a - b); // Sort the array in ascending order

  let minScore = nums[n - 1] - nums[0]; // Initialize the minimum score with the difference between the maximum and minimum elements

  for (let i = 0; i <= 3; i++) {
    // Try different combinations of changing the smallest 3 elements and the largest 3 elements
    const currentScore = nums[n - 4 + i] - nums[i];
    minScore = Math.min(minScore, currentScore);
  }

  return minScore;
}
```

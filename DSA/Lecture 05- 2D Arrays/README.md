# Assignment 05- 2D Arrays

## 💡 Question 01

> Convert 1D Array Into 2D Array
>
> You are given a **0-indexed** 1-dimensional (1D) integer array original, and two integers, m and n. You are tasked with creating a 2-dimensional (2D) array with  m rows and n columns using **all** the elements from original.
>
> The elements from indices 0 to n - 1 (**inclusive**) of original should form the first row of the constructed 2D array, the elements from indices n to 2 \* n - 1 (**inclusive**) should form the second row of the constructed 2D array, and so on.
>
> Return _an_ m x n _2D array constructed according to the above procedure, or an empty 2D array if it is impossible_.
>
> **Example:**
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fde7ec927-9e60-4545-9475-f3ee31116192%2FScreenshot_2023-05-29_004311.png?id=371a0653-5ed2-4a22-a9de-00d4d4c3479d&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=1410&userId=&cache=v2" style="height: 200px">
>
> - Input: original = [1,2,3,4], m = 2, n = 2
> - Output: [[1,2],[3,4]]
>
> **Explanation:**
>
> - The constructed 2D array should contain 2 rows and 2 columns.
> - The first group of n=2 elements in original, [1,2], becomes the first row in the constructed 2D array.
> - The second group of n=2 elements in original, [3,4], becomes the second row in the constructed 2D array.

### 🚀 Answer

```javascript
function convertTo2DArray(original, m, n) {
  const length = original.length;

  if (length !== m * n) {
    return [];
  }

  const result = [];

  for (let i = 0; i < m; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      row.push(original[i * n + j]);
    }

    result.push(row);
  }

  return result;
}
```

## 💡 Question 02

> You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.
>
> Given the integer n, return _the number of **complete rows** of the staircase you will build_.
>
> **Example:**
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4bd91cfa-d2b1-47b3-8197-a72e8dcfff4b%2Fv2.jpg?id=011c94c5-b725-4954-8821-3900e6c08ab4&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=510&userId=&cache=v2" style="height: 200px; width: 200px">
>
> - Input: n = 5
> - Output: 2
>
> - **Explanation:** Because the 3rd row is incomplete, we return 2.

### 🚀 Answer

```javascript
function countCompleteRows(n) {
  let completeRows = 0;
  let totalCoins = 0;

  for (let i = 1; i <= n; i++) {
    totalCoins += i;

    if (totalCoins <= n) {
      completeRows++;
    } else {
      break;
    }
  }

  return completeRows;
}
```

## 💡 Question 03

> Given an integer array nums sorted in **non-decreasing** order, return _an array of **the squares of each number** sorted in non-decreasing order_.
>
> **Example:**
>
> - Input: nums = [-4,-1,0,3,10]
> - Output: [0,1,9,16,100]
>
> **Explanation:**
>
> - After squaring, the array becomes [16,1,0,9,100].
> - After sorting, it becomes [0,1,9,16,100].

### 🚀 Answer

```javascript
function sortedSquares(nums) {
  const squaredArray = nums.map((num) => num * num);
  squaredArray.sort((a, b) => a - b);
  return squaredArray;
}
```

## 💡 Question 04

> Given two **0-indexed** integer arrays nums1 and nums2, return _a list_ answer _of size_ 2 _where:_
>
> - answer[0] _is a list of all **distinct** integers in_ nums1 _which are **not** present in_ nums2*.*
> - answer[1] _is a list of all **distinct** integers in_ nums2 _which are **not** present in_ nums1.
>
> **Note** that the integers in the lists may be returned in **any** order.
>
> **Example**
>
> - Input: nums1 = [1,2,3], nums2 = [2,4,6]
> - Output: [[1,3],[4,6]]
>
> **Explanation:**
>
> - For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
> - For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

### 🚀 Answer

```javascript
function findDistinctIntegers(nums1, nums2) {
  const distinctNums1 = nums1.filter((num) => !nums2.includes(num));
  const distinctNums2 = nums2.filter((num) => !nums1.includes(num));

  return [distinctNums1, distinctNums2];
}
```

## 💡 Question 05

> Given two integer arrays arr1 and arr2, and the integer d, _return the distance value between the two arrays_.
>
> The distance value is defined as the number of elements arr1[i] such that there is not any element arr2[j] where |arr1[i]-arr2[j]| <= d.
>
> **Example:**
>
> - Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2
> - Output: 2
>
> **Explanation:**
>
> **For arr1[0]=4 we have:**
>
> - |4-10|=6 > d=2
> - |4-9|=5 > d=2
> - |4-1|=3 > d=2
> - |4-8|=4 > d=2
>
> **For arr1[1]=5 we have:**
>
> - |5-10|=5 > d=2
> - |5-9|=4 > d=2
> - |5-1|=4 > d=2
> - |5-8|=3 > d=2
>
> **For arr1[2]=8 we have:**
>
> - |8-10|=2 <= d=2
> - |8-9|=1 <= d=2
> - |8-1|=7 > d=2
> - |8-8|=0 <= d=2

### 🚀 Answer

```javascript
function distanceValue(arr1, arr2, d) {
  let distance = 0;

  for (let i = 0; i < arr1.length; i++) {
    let valid = true;

    for (let j = 0; j < arr2.length; j++) {
      if (Math.abs(arr1[i] - arr2[j]) <= d) {
        valid = false;
        break;
      }
    }

    if (valid) {
      distance++;
    }
  }

  return distance;
}
```

## 💡 Question 06

> Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears **once** or **twice**, return _an array of all the integers that appears **twice**_.
>
> You must write an algorithm that runs in O(n) time and uses only constant extra space.
>
> **Example:**
>
> - Input: nums = [4,3,2,7,8,2,3,1]
> - Output: [2,3]

### 🚀 Answer

```javascript
function findDuplicates(nums) {
  const result = [];

  for (const num of nums) {
    const absNum = Math.abs(num);

    if (nums[absNum - 1] > 0) {
      nums[absNum - 1] *= -1;
    } else {
      result.push(absNum);
    }
  }

  return result;
}
```

## 💡 Question 07

> Suppose an array of length n sorted in ascending order is **rotated** between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:
>
> - [4,5,6,7,0,1,2] if it was rotated 4 times.
> - [0,1,2,4,5,6,7] if it was rotated 7 times.
>
> Notice that **rotating** an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
>
> Given the sorted rotated array nums of **unique** elements, return _the minimum element of this array_.
>
> You must write an algorithm that runs in O(log n) time.
>
> **Example:**
>
> - Input: nums = [3,4,5,1,2]
> - Output: 1
>
> - **Explanation:** The original array was [1,2,3,4,5] rotated 3 times.

### 🚀 Answer

```javascript
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return nums[left];
}
```

## 💡 Question 08

> An integer array original is transformed into a **doubled** array changed by appending **twice the value** of every element in original, and then randomly **shuffling** the resulting array.
>
> Given an array changed, return original _if_ changed _is a **doubled** array. If_ changed _is not a **doubled** array, return an empty array. The elements in_ original _may be returned in **any** order_.
>
> **Example:**
>
> - Input: changed = [1,3,4,2,6,8]
> - Output: [1,3,4]
>
> **Explanation:** One possible original array could be [1,3,4]:
>
> - Twice the value of 1 is 1 \* 2 = 2.
> - Twice the value of 3 is 3 \* 2 = 6.
> - Twice the value of 4 is 4 \* 2 = 8.
>
> Other original arrays could be [4,3,1] or [3,1,4].

### 🚀 Answer

```javascript
function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }

  const counts = new Map();

  for (const num of changed) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  const original = [];

  changed.sort((a, b) => a - b);

  for (const num of changed) {
    if (counts.get(num) === 0) {
      continue;
    }

    const doubledNum = num * 2;

    if (counts.get(doubledNum) === 0) {
      return [];
    }

    original.push(num);
    counts.set(num, counts.get(num) - 1);
    counts.set(doubledNum, counts.get(doubledNum) - 1);
  }

  return original;
}
```

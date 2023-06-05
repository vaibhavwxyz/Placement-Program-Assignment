# Assignment 04- 2D Arrays

## 💡 Question 01

> Given three integer arrays arr1, arr2 and arr3 **sorted** in **strictly increasing** order, return a sorted array of **only** the integers that appeared in **all** three arrays.
>
> **Example**
>
> - Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
> - Output: [1,5]
>
> **Explanation:** Only 1 and 5 appeared in the three arrays.

### 🚀 Answer

```javascript
function arraysIntersection(arr1, arr2, arr3) {
  const map = {};
  const result = [];

  for (const num of arr1) {
    map[num] = map[num] ? map[num] + 1 : 1;
  }

  for (const num of arr2) {
    if (map[num]) {
      map[num]++;
    }
  }

  for (const num of arr3) {
    if (map[num] === 2) {
      result.push(num);
    }
  }

  return result;
}
```

## 💡 Question 02

> Given two **0-indexed** integer arrays nums1 and nums2, return _a list_ answer _of size_ 2 _where:_
>
> - answer[0] _is a list of all **distinct** integers in_ nums1 _which are **not** present in_ nums2*.*
> - answer[1] _is a list of all **distinct** integers in_ nums2 _which are **not** present in_ nums1.
>
> **Note:** that the integers in the lists may be returned in **any** order.
>
> **Example:**
>
> - Input: nums1 = [1,2,3], nums2 = [2,4,6]
> - Output: [[1,3],[4,6]]
>
> **Explanation:**
>
> For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
>
> For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

### 🚀 Answer

```javascript
function findDisappearedNumbers(nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const answer = [[], []];

  for (const num of nums1) {
    if (!set2.has(num)) {
      answer[0].push(num);
    }
  }

  for (const num of nums2) {
    if (!set1.has(num)) {
      answer[1].push(num);
    }
  }

  return answer;
}
```

## 💡 Question 03

> Given a 2D integer array matrix, return _the **transpose** of_ matrix.
>
> The **transpose** of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.
>
> **Example**
>
> - Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
> - Output: [[1,4,7],[2,5,8],[3,6,9]]
>
> ![img](https://file.notion.so/f/s/a54805f4-c9b5-491c-a900-8e8a94062c79/iamge_v3.png?id=a588d9bb-578d-4c0f-b2fe-813f5225886b&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&expirationTimestamp=1685622146541&signature=qcZLVPFGrw2gNHKXpy3ZESoQuMtRF4LrfJJ1qVI5ibw&downloadName=iamge_v3.png)

### 🚀 Answer

```javascript
function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const row = [];
    for (let i = 0; i < rows; i++) {
      row.push(matrix[i][j]);
    }
    result.push(row);
  }

  return result;
}
```

## 💡 Question 04

> Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is **maximized**. Return _the maximized sum_.
>
> **Example:**
>
> - Input: nums = [1,4,3,2]
> - Output: 4
>
> **Explanation:** All possible pairings (ignoring the ordering of elements) are:
>
> 1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3
> 2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3
> 3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4
>
> So the maximum possible sum is 4.

### 🚀 Answer

```javascript
function arrayPairSum(nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < nums.length; i += 2) {
    sum += nums[i];
  }

  return sum;
}
```

## 💡 Question 05

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
> **Explanation:** Because the 3rd row is incomplete, we return 2.

### 🚀 Answer

```javascript
function arrangeCoins(n) {
  let stairs = 0;

  while (n >= 0) {
    stairs++;
    n -= stairs;
  }

  return stairs - 1;
}
```

## 💡 Question 06

> Given an integer array nums sorted in **non-decreasing** order, return _an array of **the squares of each number** sorted in non-decreasing order_.
>
> **Example:**
>
> - Input: nums = [-4,-1,0,3,10]
> - Output: [0,1,9,16,100]
>
> **Explanation:** After squaring, the array becomes [16,1,0,9,100].
> After sorting, it becomes [0,1,9,16,100]

### 🚀 Answer

```javascript
function sortedSquares(nums) {
  const result = [];

  for (const num of nums) {
    result.push(num * num);
  }

  result.sort((a, b) => a - b);

  return result;
}
```

## 💡 Question 07

> You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.
>
> Count and return _the number of maximum integers in the matrix after performing all the operations_
>
> **Example:**
>
> ![img](https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4d0890d0-7bc7-4f59-be8e-352d9f3c1c52%2Fq4.jpg?id=90aeb3cb-54bb-4240-9291-1fce694e3fe9&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=1020&userId=&cache=v2)
>
> - Input: m = 3, n = 3, ops = [[2,2],[3,3]]
> - Output: 4
>
> **Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.

### 🚀 Answer

```javascript
function maxCount(m, n, ops) {
  let minRow = m;
  let minCol = n;

  for (const op of ops) {
    minRow = Math.min(minRow, op[0]);
    minCol = Math.min(minCol, op[1]);
  }

  return minRow * minCol;
}
```

## 💡 Question 08

> Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
> _Return the array in the form_ [x1,y1,x2,y2,...,xn,yn].
>
> **Example:**
>
> - Input: nums = [2,5,1,3,4,7], n = 3
>
> - Output: [2,3,5,4,1,7]
>
> **Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

### 🚀 Answer

```javascript
function shuffle(nums, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i]);
    result.push(nums[i + n]);
  }

  return result;
}
```

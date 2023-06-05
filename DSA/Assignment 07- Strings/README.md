# Assignment 05- 2D Arrays

## 💡 Question 01

> A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:
>
> - s[i] == 'I' if perm[i] < perm[i + 1], and
> - s[i] == 'D' if perm[i] > perm[i + 1].
>
> Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.
>
> **Example:**
>
> - Input: s = "IDID"
> - Output:[0,4,1,3,2]

### 🚀 Answer

```javascript
function reconstructPermutation(s) {
  const n = s.length;
  const permutation = [];
  let low = 0;
  let high = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === "I") {
      permutation.push(low++);
    } else {
      permutation.push(high--);
    }
  }

  permutation.push(low);

  return permutation;
}
```

## 💡 Question 02

> You are given an m x n integer matrix matrix with the following two properties:
>
> - Each row is sorted in non-decreasing order.
> - The first integer of each row is greater than the last integer of the previous row.
>
> Given an integer target, return true _if_ target _is in_ matrix _or_ false _otherwise_.
>
> You must write a solution in O(log(m \* n)) time complexity.
>
> **Example:**
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe4b0271f-15f0-4744-826b-18500ccfcb75%2FScreenshot_2023-05-29_005303.png?id=18335e94-20ec-483d-96ef-563d86305ec3&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=840&userId=&cache=v2" style="height: 200px; width: 200px">
>
> - Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
> - Output: true

### 🚀 Answer

```javascript
function searchMatrix(matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;
  let low = 0;
  let high = m * n - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const row = Math.floor(mid / n);
    const col = mid % n;

    if (matrix[row][col] === target) {
      return true;
    } else if (matrix[row][col] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return false;
}
```

## 💡 Question 03

> Given an array of integers arr, return _true if and only if it is a valid mountain array_.
>
> Recall that arr is a mountain array if and only if:
>
> - arr.length >= 3
> - There exists some i with 0 < i < arr.length - 1 such that:
>   - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
>   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5565e778-ac57-4ced-85a2-ccb13268bdf6%2FScreenshot_2023-05-29_005352.png?id=8965a667-69ac-4fdc-af94-ff9a6a42de08&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=1600&userId=&cache=v2" style="height: 220px">
>
> **Example:**
>
> - Input: arr = [2,1]
> - Output: false

### 🚀 Answer

```javascript
function validMountainArray(arr) {
  const n = arr.length;
  let i = 0;

  while (i + 1 < n && arr[i] < arr[i + 1]) {
    i++;
  }

  if (i === 0 || i === n - 1) {
    return false;
  }

  while (i + 1 < n && arr[i] > arr[i + 1]) {
    i++;
  }

  return i === n - 1;
}
```

## 💡 Question 04

> Given a binary array nums, return _the maximum length of a contiguous subarray with an equal number of_ 0 _and_ 1.
>
> **Example:**
>
> - Input: nums = [0,1]
> - Output: 2
>
> **Explanation:**
>
> - [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

### 🚀 Answer

```javascript
function findMaxLength(nums) {
  const map = new Map();
  map.set(0, -1);
  let maxLength = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;

    if (map.has(count)) {
      maxLength = Math.max(maxLength, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return maxLength;
}
```

## 💡 Question 05

> The **product sum** of two equal-length arrays a and b is equal to the sum of a[i] \* b[i] for all 0 <= i < a.length (**0-indexed**).
>
> - For example, if a = [1,2,3,4] and b = [5,2,3,1], the **product sum** would be 1\*5 + 2\*2 + 3\*3 + 4\*1 = 22.
>
> Given two arrays nums1 and nums2 of length n, return _the **minimum product sum** if you are allowed to **rearrange** the **order** of the elements in_ nums1.
>
> **Example:**
>
> - Input: nums1 = [5,3,4,2], nums2 = [4,2,2,5]
> - Output: 40
>
> **Explanation:**
>
> We can rearrange nums1 to become [3,5,4,2]. The product sum of [3,5,4,2] and [4,2,2,5] is 3\*4 + 5\*2 + 4\*2 + 2\*5 = 40.

### 🚀 Answer

```javascript
function minProductSum(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => b - a);
  let minProductSum = 0;

  for (let i = 0; i < nums1.length; i++) {
    minProductSum += nums1[i] * nums2[i];
  }

  return minProductSum;
}
```

## 💡 Question 06

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

## 💡 Question 07

> Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
>
> **Example:**
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F00c8517f-7682-4e0b-bdd9-ce0e087f3f94%2FScreenshot_2023-05-29_005522.png?id=4c411eff-717a-4ce4-8727-1c101816bbad&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=670&userId=&cache=v2" style="height: 220px; width: 220px">
>
> - Input: n = 3
> - Output: [[1,2,3],[8,9,4],[7,6,5]]

### 🚀 Answer

```javascript
function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  let num = 1;

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
}
```

## 💡 Question 08

> Given two [sparse matrices](https://en.wikipedia.org/wiki/Sparse_matrix) mat1 of size m x k and mat2 of size k x n, return the result of mat1 x mat2. You may assume that multiplication is always possible.
>
> **Example:**
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fdf57e793-12bf-4104-a17b-4e6a88dc7955%2FScreenshot_2023-05-29_005557.png?id=bf7064e0-6a34-4089-bad4-dfd954e546c4&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=1320&userId=&cache=v2" style="height: 220px">
>
> - Input: mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]
> - Output: [[7,0,0],[-7,0,3]]

### 🚀 Answer

```javascript
function multiply(mat1, mat2) {
  const m = mat1.length;
  const k = mat1[0].length;
  const n = mat2[0].length;
  const result = Array.from({ length: m }, () => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      for (let l = 0; l < k; l++) {
        result[i][j] += mat1[i][l] * mat2[l][j];
      }
    }
  }

  return result;
}
```

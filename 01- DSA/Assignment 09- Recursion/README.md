# Assignment 09- Recursion

## 💡 Question 01

> Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.
>
> An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.
>
> **Example 1:**
>
> - Input: n = 1
> - Output: true
>
> **Example 2:**
>
> - Input: n = 16
> - Output: true
>
> **Example 3:**
>
> - Input: n = 3
> - Output: false

### 🚀 Answer

```javascript
function isPowerOfTwo(n) {
  if (n <= 0) {
    return false;
  }

  while (n % 2 === 0) {
    n = n / 2;
  }

  return n === 1;
}
```

## 💡 Question 02

> Given a number n, find the sum of the first natural numbers.
>
> **Example 1:**
>
> - Input: n = 3
> - Output: 6
>
> **Example 2:**
>
> - Input : 5
> - Output : 15

### 🚀 Answer

```javascript
function sumOfFirstNNumbers(n) {
  return (n * (n + 1)) / 2;
}
```

## 💡 Question 03

> Given a positive integer, N. Find the factorial of N.
>
> **Example 1:**
>
> - Input: N = 5
> - Output: 120
>
> **Example 2:**
>
> - Input: N = 4
> - Output: 24

### 🚀 Answer

```javascript
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
```

## 💡 Question 04

> Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.
>
> **Example 1 :**
>
> - Input: N = 5, P = 2
> - Output: 25
>
> **Example 2 :**
>
> - Input: N = 2, P = 5
> - Output: 32

### 🚀 Answer

```javascript
function power(base, exponent) {
  return Math.pow(base, exponent);
}
```

## 💡 Question 05

> Given an array of integers **arr**, the task is to find maximum element of that array using recursion.
>
> **Example 1:**
>
> - Input: arr = {1, 4, 3, -5, -4, 8, 6};
> - Output: 8
>
> **Example 2:**
>
> - Input: arr = {1, 4, 45, 6, 10, -8};
> - Output: 45

### 🚀 Answer

```javascript
function findMax(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const max = findMax(arr.slice(1));
  return arr[0] > max ? arr[0] : max;
}
```

## 💡 Question 06

> Given first term (a), common difference (d) and a integer N of the Arithmetic Progression series, the task is to find Nth term of the series.
>
> **Example 1:**
>
> - Input : a = 2 d = 1 N = 5
> - Output : 6
>   The 5th term of the series is : 6
>
> **Example 2:**
>
> - Input : a = 5 d = 2 N = 10
> - Output : 23
>   The 10th term of the series is : 23

### 🚀 Answer

```javascript
function nthTerm(a, d, n) {
  return a + (n - 1) * d;
}
```

## 💡 Question 07

> Given a string S, the task is to write a program to print all permutations of a given string.
>
> **Example 1:**
>
> **_Input:_**
>
> _S = “ABC”_
>
> **_Output:_**
>
> _“ABC”, “ACB”, “BAC”, “BCA”, “CBA”, “CAB”_
>
> **Example 2:**
>
> **_Input:_**
>
> _S = “XY”_
>
> **_Output:_**
>
> _“XY”, “YX”_

### 🚀 Answer

```javascript
function swap(str, i, j) {
  const charArray = str.split("");
  const temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

function generatePermutations(str, l, r, result) {
  if (l === r) {
    result.push(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      generatePermutations(str, l + 1, r, result);
      str = swap(str, l, i); // backtrack
    }
  }
}

function permutationsOfString(S) {
  const result = [];
  generatePermutations(S, 0, S.length - 1, result);
  return result;
}
```

## 💡 Question 08

> Given an array, find a product of all array elements.
>
> **Example 1:**
>
> - Input : arr[] = {1, 2, 3, 4, 5}
> - Output : 120
>
>   **Example 2:**
>
> - Input : arr[] = {1, 6, 3}
> - Output : 18

### 🚀 Answer

```javascript
function productOfArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}
```

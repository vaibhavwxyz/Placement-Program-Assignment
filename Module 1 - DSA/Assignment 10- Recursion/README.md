# Assignment 09- Recursion

## 💡 Question 01

> Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.
>
> An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.
>
> **Example 1:**
>
> - Input: n = 27
> - Output: true
>   **Explanation:** 27 = 33
>
> **Example 2:**
>
> - Input: n = 0
> - Output: false
>   **Explanation:** There is no x where 3x = 0.
>
> **Example 3:**
>
> - Input: n = -1
> - Output: false
>   **Explanation:** There is no x where 3x = (-1).

### 🚀 Answer

```javascript
function isPowerOfThree(n) {
  if (n <= 0) {
    return false;
  }
  while (n % 3 === 0) {
    n /= 3;
  }
  return n === 1;
}
```

## 💡 Question 02

> You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:
>
> - Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
> - Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
> - Keep repeating the steps again, alternating left to right and right to left, until a single number remains.
>
> Given the integer `n`, return *the last number that remains in* `arr`.
>
> **Example 1:**
>
> - Input: n = 9
> - Output: 6
>
>   **Explanation:**
>
> - arr = [1, 2,3, 4,5, 6,7, 8,9]
> - arr = [2,4, 6,8]
> - arr = [2, 6]
> - arr = [6]
>
> **Example 2:**
>
> - Input: n = 1
> - Output: 1

### 🚀 Answer

```javascript
function lastRemaining(n) {
  let leftToRight = true;
  let remaining = n;
  let step = 1;
  let head = 1;

  while (remaining > 1) {
    if (leftToRight || remaining % 2 === 1) {
      head += step;
    }
    remaining = Math.floor(remaining / 2);
    step *= 2;
    leftToRight = !leftToRight;
  }

  return head;
}
```

## 💡 Question 03

> Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.
>
> **Example 1:**
>
> - Input :  set = “abc”
> - Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}
>
> **Example 2:**
>
> - Input : set = “abcd”
> - Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }

### 🚀 Answer

```javascript
function generateSubsets(set) {
  const subsets = [];

  function backtrack(subset, index) {
    subsets.push(subset);

    for (let i = index; i < set.length; i++) {
      backtrack(subset + set[i], i + 1);
    }
  }

  backtrack("", 0);

  return subsets;
}
```

## 💡 Question 04

> Given a string calculate length of the string using recursion.
>
> **Examples:**
>
> - Input : str = "abcd"
> - Output :4
>
> - Input : str = "GEEKSFORGEEKS"
> - Output :13

### 🚀 Answer

```javascript
function calculateStringLength(str) {
  if (str === "") {
    return 0;
  }

  return 1 + calculateStringLength(str.slice(1));
}
```

## 💡 Question 05

> We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.
>
> **Examples:**
>
> Input : S = "abcab"
> Output : 7
> There are 15 substrings of "abcab"
> a, ab, abc, abca, abcab, b, bc, bca
> bcab, c, ca, cab, a, ab, b
> Out of the above substrings, there
> are 7 substrings : a, abca, b, bcab,
> c, a and b.
>
> Input : S = "aba"
> Output : 4
> The substrings are a, b, a and aba

### 🚀 Answer

```javascript
function countContiguousSubstrings(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < S.length; j++) {
      if (S[i] === S[j]) {
        count++;
      }
    }
  }

  return count;
}
```

## 💡 Question 06

> The [tower of Hanoi](https://en.wikipedia.org/wiki/Tower_of_Hanoi) is a famous puzzle where we have three rods and **N** disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs **N**. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.**Note:** The discs are arranged such that the **top disc is numbered 1** and the **bottom-most disc is numbered N**. Also, all the discs have **different sizes** and a bigger disc **cannot** be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.
>
> **Example 1:**
> Input: N = 2
> Output:
> move disk 1 from rod 1 to rod 2
> move disk 2 from rod 1 to rod 3
> move disk 1 from rod 2 to rod 3
> 3
> **Explanation:** For N=2 , steps will be as follows in the example and total 3 steps will be taken.
>
> **Example 2:**
>
> Input: N = 3
> Output:
> move disk 1 from rod 1 to rod 3
> move disk 2 from rod 1 to rod 2
> move disk 1 from rod 3 to rod 2
> move disk 3 from rod 1 to rod 3
> move disk 1 from rod 2 to rod 1
> move disk 2 from rod 2 to rod 3
> move disk 1 from rod 1 to rod 3
> 7
> **Explanation:** For N=3 , steps will be
> as follows in the example and total
> 7 steps will be taken.

### 🚀 Answer

```javascript
function towerOfHanoi(n) {
  function moveDisk(disk, source, destination) {
    console.log("Move disk", disk, "from rod", source, "to rod", destination);
  }

  function hanoiRecursive(n, source, auxiliary, destination) {
    if (n === 1) {
      moveDisk(n, source, destination);
      return 1;
    }

    const moves1 = hanoiRecursive(n - 1, source, destination, auxiliary);
    moveDisk(n, source, destination);
    const moves2 = hanoiRecursive(n - 1, auxiliary, source, destination);

    return moves1 + 1 + moves2;
  }

  return hanoiRecursive(n, 1, 2, 3);
}
```

## 💡 Question 07

> Given a string **str**, the task is to print all the permutations of **str**. A **permutation** is an arrangement of all or part of a set of objects, with regard to the order of the arrangement. For instance, the words ‘bat’ and ‘tab’ represents two distinct permutation (or arrangements) of a similar three letter word.
>
> **Examples:**
>
> - Input: str = “cd”
> - Output: cd dc
>
> - Input: str = “abb”
> - Output: abb abb bab bba bab bba

### 🚀 Answer

```javascript
function permutations(str) {
  const result = [];

  function permute(current, remaining) {
    if (remaining.length === 0) {
      result.push(current);
      return;
    }

    for (let i = 0; i < remaining.length; i++) {
      permute(
        current + remaining[i],
        remaining.slice(0, i) + remaining.slice(i + 1)
      );
    }
  }

  permute("", str);

  return result;
}
```

## 💡 Question 08

> Given a string, count total number of consonants in it. A consonant is an English alphabet character that is not vowel (a, e, i, o and u). Examples of constants are b, c, d, f, and g.
>
> **Examples:**
> Input : abc de
> Output : 3
> There are three consonants b, c and d.
>
> Input : geeksforgeeks portal
> Output : 12

### 🚀 Answer

```javascript
function countConsonants(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (!vowels.includes(char) && /[a-z]/.test(char)) {
      count++;
    }
  }

  return count;
}
```

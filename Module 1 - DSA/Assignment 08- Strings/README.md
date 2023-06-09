# Assignment 08- Strings

## 💡 Question 01

> Given two strings s1 and s2, return _the lowest **ASCII** sum of deleted characters to make two strings equal_.
>
> **Example:**
>
> - Input: s1 = "sea", s2 = "eat"
> - Output: 231
>
> **Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
>
> Deleting "t" from "eat" adds 116 to the sum.
>
> At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

### 🚀 Answer

```javascript
function minimumDeleteSum(s1, s2) {
  const m = s1.length;
  const n = s2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }

  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1),
          dp[i][j - 1] + s2.charCodeAt(j - 1)
        );
      }
    }
  }

  return dp[m][n];
}
```

## 💡 Question 02

> Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid\***.
>
> The following rules define a **valid** string:
>
> - Any left parenthesis '(' must have a corresponding right parenthesis ')'.
> - Any right parenthesis ')' must have a corresponding left parenthesis '('.
> - Left parenthesis '(' must go before the corresponding right parenthesis ')'.
> - '\*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".
>
> **Example:**
>
> - Input: s = "()"
> - Output: true

### 🚀 Answer

```javascript
function checkValidString(s) {
  let low = 0;
  let high = 0;

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      low++;
      high++;
    } else if (s.charAt(i) === ")") {
      if (low > 0) {
        low--;
      }
      high--;
    } else {
      if (low > 0) {
        low--;
      }
      high++;
    }

    if (high < 0) {
      return false;
    }
  }

  return low === 0;
}
```

## 💡 Question 03

> Given two strings word1 and word2, return _the minimum number of **steps** required to make_ word1 _and_ word2 _the same_.
>
> In one **step**, you can delete exactly one character in either string.
>
> **Example:**
>
> - Input: word1 = "sea", word2 = "eat"
> - Output: 2
>
> **Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

### 🚀 Answer

```javascript
function minSteps(word1, word2) {
  const m = word1.length;
  const n = word2.length;
  const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }

  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }

  return dp[m][n];
}
```

## 💡 Question 04

> You need to construct a binary tree from a string consisting of parenthesis and integers.
>
> The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
> You always start to construct the **left** child node of the parent first if it exists.
>
> <img src="https://pwskills.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbdbea2d1-34a4-4c4b-a450-ea6db7410c43%2FScreenshot_2023-05-29_010548.png?id=1b3741fb-5b89-45a9-98bd-4c1e9ecac1f2&table=block&spaceId=6fae2e0f-dedc-48e9-bc59-af2654c78209&width=1060&userId=&cache=v2" style="height: 220px">
>
> - Input: s = "4(2(3)(1))(6(5))"
> - Output: [4,2,6,3,1,5]

### 🚀 Answer

```javascript
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function constructBinaryTree(s) {
  if (!s) {
    return null;
  }

  const stack = [];
  let i = 0;

  while (i < s.length) {
    if (s.charAt(i) === "(") {
      i++;
      const value = "";
      while (i < s.length && s.charAt(i) !== "(" && s.charAt(i) !== ")") {
        value += s.charAt(i);
        i++;
      }
      const node = new TreeNode(parseInt(value));
      if (stack.length === 0) {
        stack.push(node);
      } else {
        const parent = stack[stack.length - 1];
        if (!parent.left) {
          parent.left = node;
        } else {
          parent.right = node;
        }
        stack.push(node);
      }
    } else if (s.charAt(i) === ")") {
      stack.pop();
      i++;
    }
  }

  return stack[0];
}

function inorderTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = [];
  let node = root;

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    node = stack.pop();
    result.push(node.val);
    node = node.right;
  }

  return result;
}
```

## 💡 Question 05

> Given an array of characters chars, compress it using the following algorithm:
>
> Begin with an empty string s. For each group of **consecutive repeating characters** in chars:
>
> - If the group's length is 1, append the character to s.
> - Otherwise, append the character followed by the group's length.
>
> The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
>
> After you are done **modifying the input array,** return _the new length of the array_.
>
> You must write an algorithm that uses only constant extra space.
>
> **Example:**
>
> - Input: chars = ["a","a","b","b","c","c","c"]
> - Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
>
> **Explanation:** The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

### 🚀 Answer

```javascript
function compress(chars) {
  let index = 0;
  let i = 0;

  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[i] === chars[j]) {
      j++;
    }

    chars[index++] = chars[i];
    const count = j - i;
    if (count > 1) {
      const countString = count.toString();
      for (let k = 0; k < countString.length; k++) {
        chars[index++] = countString.charAt(k);
      }
    }

    i = j;
  }

  return index;
}
```

## 💡 Question 06

> Given two strings s and p, return _an array of all the start indices of_ p*'s anagrams in* s. You may return the answer in **any order**.
>
> An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
>
> **Example:**
>
> - Input: s = "cbaebabacd", p = "abc"
> - Output: [0,6]
>
> **Explanation:**
>
> - The substring with start index = 0 is "cba", which is an anagram of "abc".
> - The substring with start index = 6 is "bac", which is an anagram of "abc".

### 🚀 Answer

```javascript
function findAnagrams(s, p) {
  const result = [];
  const charCount = Array(26).fill(0);
  let left = 0;
  let right = 0;
  let count = p.length;

  for (let i = 0; i < p.length; i++) {
    charCount[p.charCodeAt(i) - "a".charCodeAt(0)]++;
  }

  while (right < s.length) {
    if (charCount[s.charCodeAt(right) - "a".charCodeAt(0)] >= 1) {
      count--;
    }
    charCount[s.charCodeAt(right) - "a".charCodeAt(0)]--;
    right++;

    if (count === 0) {
      result.push(left);
    }

    if (right - left === p.length) {
      if (charCount[s.charCodeAt(left) - "a".charCodeAt(0)] >= 0) {
        count++;
      }
      charCount[s.charCodeAt(left) - "a".charCodeAt(0)]++;
      left++;
    }
  }

  return result;
}
```

## 💡 Question 07

> Given an encoded string, return its decoded string.
>
> The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
>
> You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].
>
> The test cases are generated so that the length of the output will never exceed 105.
>
> **Example:**
>
> - Input: s = "3[a]2[bc]"
> - Output: "aaabcbc"

### 🚀 Answer

```javascript
function decodeString(s) {
  const stack = [];
  let currentString = "";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (/\d/.test(char)) {
      count = count * 10 + parseInt(char);
    } else if (char === "[") {
      stack.push(currentString);
      stack.push(count);
      currentString = "";
      count = 0;
    } else if (char === "]") {
      const prevCount = stack.pop();
      const prevString = stack.pop();
      currentString = prevString + currentString.repeat(prevCount);
    } else {
      currentString += char;
    }
  }

  return currentString;
}
```

## 💡 Question 08

> Given two strings s and goal, return true _if you can swap two letters in_ s _so the result is equal to_ goal*, otherwise, return* false*.*
>
> Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].
>
> - For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
>
> **Example:**
>
> - Input: s = "ab", goal = "ba"
> - Output: true
>
> **Explanation:** You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

### 🚀 Answer

```javascript
function buddyStrings(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    const charCount = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      if (charCount[char.charCodeAt(0) - "a".charCodeAt(0)] > 0) {
        return true;
      }
      charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    return false;
  }

  const diff = [];
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) !== goal.charAt(i)) {
      diff.push(i);
    }
  }

  return (
    diff.length === 2 &&
    s.charAt(diff[0]) === goal.charAt(diff[1]) &&
    s.charAt(diff[1]) === goal.charAt(diff[0])
  );
}
```

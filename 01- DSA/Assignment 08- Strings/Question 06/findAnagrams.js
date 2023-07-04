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

// Example usage:
const s = "cbaebabacd";
const p = "abc";
const indices = findAnagrams(s, p);
console.log(indices); // Output: [0, 6]

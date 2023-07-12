function lengthOfLongestSubstring(s) {
  let maxLength = 0;
  let start = 0;
  const charMap = new Map();

  for (let end = 0; end < s.length; end++) {
    const currentChar = s[end];

    if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
      start = charMap.get(currentChar) + 1;
    }

    charMap.set(currentChar, end);
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

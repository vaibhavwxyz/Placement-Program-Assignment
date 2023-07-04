function firstNonRepeatingCharacter(s) {
  const charCount = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1;
}

// Example usage:
console.log(firstNonRepeatingCharacter("leetcode")); // Output: 0
console.log(firstNonRepeatingCharacter("loveleetcode")); // Output: 2

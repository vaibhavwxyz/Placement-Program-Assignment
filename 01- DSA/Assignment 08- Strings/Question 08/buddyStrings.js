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

// Example usage:
const s = "ab";
const goal = "ba";
const canSwap = buddyStrings(s, goal);
console.log(canSwap); // Output: true

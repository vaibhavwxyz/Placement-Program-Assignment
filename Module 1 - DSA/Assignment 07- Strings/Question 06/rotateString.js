function rotateString(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }

  if (s === goal) {
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    const rotatedString = s.slice(i) + s.slice(0, i);
    if (rotatedString === goal) {
      return true;
    }
  }

  return false;
}

const s = "abcde";
const goal = "cdeab";
console.log(rotateString(s, goal)); // Output: true

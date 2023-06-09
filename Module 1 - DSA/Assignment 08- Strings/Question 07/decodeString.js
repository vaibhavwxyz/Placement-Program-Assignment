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

// Example usage:
const s = "3[a]2[bc]";
const decodedString = decodeString(s);
console.log(decodedString); // Output: "aaabcbc"

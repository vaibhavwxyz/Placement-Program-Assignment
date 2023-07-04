function reverseString(str) {
  const stack = [];
  let result = "";

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}

// Example usage:
const str1 = "Hello, World!";
console.log(reverseString(str1)); // Output: "!dlroW ,olleH"

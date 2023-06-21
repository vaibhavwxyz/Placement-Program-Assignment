function reverseNumber(number) {
  const stack = [];
  const digits = number.toString().split("");

  for (let digit of digits) {
    stack.push(digit);
  }

  let reversedNumber = "";

  while (stack.length > 0) {
    reversedNumber += stack.pop();
  }

  return parseInt(reversedNumber);
}

// Example usage:
const number1 = 12345;
console.log(reverseNumber(number1)); // Output: 54321

const number2 = 987654321;
console.log(reverseNumber(number2)); // Output: 123456789

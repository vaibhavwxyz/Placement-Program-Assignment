function evaluatePostfixExpression(expression) {
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (!isNaN(char)) {
      stack.push(Number(char));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      let result;

      switch (char) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
      }

      stack.push(result);
    }
  }

  return stack.pop();
}

// Example usage:
const postfix1 = "231*+9-";
console.log(evaluatePostfixExpression(postfix1)); // Output: -4

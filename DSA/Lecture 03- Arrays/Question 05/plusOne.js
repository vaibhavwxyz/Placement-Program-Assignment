function plusOne(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + carry;
    digits[i] = sum % 10;
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    digits.unshift(carry);
  }

  return digits;
}

const digits = [1, 2, 3];
console.log(plusOne(digits)); // Output: [1, 2, 4]

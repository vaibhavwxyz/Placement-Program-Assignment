const plusOne = (digits) => {
  if (!digits) return 0;

  for (let index = digits.length - 1; index >= 0; index--) {
    digits[index]++;

    if (digits[index] === 10) {
      digits[index] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);

  return digits;
};

let digits = [1, 2, 3];
digits = plusOne(digits);
console.log(digits); // [1, 2, 4]

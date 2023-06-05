function addStrings(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;

    if (i >= 0) {
      sum += parseInt(num1[i]);
      i--;
    }

    if (j >= 0) {
      sum += parseInt(num2[j]);
      j--;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;
    result = sum + result;
  }

  return result;
}

const num1 = "11";
const num2 = "123";
console.log(addStrings(num1, num2)); // Output: "134"

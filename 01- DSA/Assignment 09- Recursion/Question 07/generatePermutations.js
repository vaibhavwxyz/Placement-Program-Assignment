function swap(str, i, j) {
  const charArray = str.split("");
  const temp = charArray[i];
  charArray[i] = charArray[j];
  charArray[j] = temp;
  return charArray.join("");
}

function generatePermutations(str, l, r, result) {
  if (l === r) {
    result.push(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      generatePermutations(str, l + 1, r, result);
      str = swap(str, l, i); // backtrack
    }
  }
}

function permutationsOfString(S) {
  const result = [];
  generatePermutations(S, 0, S.length - 1, result);
  return result;
}

// Example usage:
console.log(permutationsOfString("ABC")); // Output: ["ABC", "ACB", "BAC", "BCA", "CBA", "CAB"]
console.log(permutationsOfString("XY")); // Output: ["XY", "YX"]

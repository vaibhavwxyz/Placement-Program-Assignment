function reconstructPermutation(s) {
  const n = s.length;
  const permutation = [];
  let low = 0;
  let high = n;

  for (let i = 0; i < n; i++) {
    if (s[i] === "I") {
      permutation.push(low++);
    } else {
      permutation.push(high--);
    }
  }

  permutation.push(low);

  return permutation;
}

const s = "IDID";
console.log(reconstructPermutation(s)); // Output: [0, 4, 1, 3, 2]

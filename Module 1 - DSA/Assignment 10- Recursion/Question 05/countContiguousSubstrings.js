function countContiguousSubstrings(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < S.length; j++) {
      if (S[i] === S[j]) {
        count++;
      }
    }
  }

  return count;
}

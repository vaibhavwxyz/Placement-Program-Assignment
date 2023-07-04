function generateSubsets(set) {
  const subsets = [];

  function backtrack(subset, index) {
    subsets.push(subset);

    for (let i = index; i < set.length; i++) {
      backtrack(subset + set[i], i + 1);
    }
  }

  backtrack("", 0);

  return subsets;
}

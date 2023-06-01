function findOriginalArray(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }

  const counts = new Map();

  for (const num of changed) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  const original = [];

  changed.sort((a, b) => a - b);

  for (const num of changed) {
    if (counts.get(num) === 0) {
      continue;
    }

    const doubledNum = num * 2;

    if (counts.get(doubledNum) === 0) {
      return [];
    }

    original.push(num);
    counts.set(num, counts.get(num) - 1);
    counts.set(doubledNum, counts.get(doubledNum) - 1);
  }

  return original;
}

const changed = [1, 3, 4, 2, 6, 8];
console.log(findOriginalArray(changed)); // Output: [1, 3, 4]

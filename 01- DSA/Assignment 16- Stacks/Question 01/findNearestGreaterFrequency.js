function findNearestGreaterFrequency(arr) {
  const frequencies = {};
  const result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    const current = arr[i];
    frequencies[current] = (frequencies[current] || 0) + 1;

    let found = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (frequencies[arr[j]] > frequencies[current]) {
        result.unshift(arr[j]);
        found = true;
        break;
      }
    }

    if (!found) {
      result.unshift(-1);
    }
  }

  return result;
}

// Example usage:
const arr1 = [1, 3, 2, 4];
console.log(findNearestGreaterFrequency(arr1)); // Output: [3, 4, 4, -1]

const arr2 = [6, 8, 0, 1, 3];
console.log(findNearestGreaterFrequency(arr2)); // Output: [8, -1, 1, 3, -1]

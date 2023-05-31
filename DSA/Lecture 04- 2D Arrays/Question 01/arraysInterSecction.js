function arraysIntersection(arr1, arr2, arr3) {
  const map = {};
  const result = [];

  for (const num of arr1) {
    map[num] = map[num] ? map[num] + 1 : 1;
  }

  for (const num of arr2) {
    if (map[num]) {
      map[num]++;
    }
  }

  for (const num of arr3) {
    if (map[num] === 2) {
      result.push(num);
    }
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 5, 7, 9];
const arr3 = [1, 3, 4, 5, 8];
console.log(arraysIntersection(arr1, arr2, arr3)); // Output: [1, 5]

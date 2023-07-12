function findClosestElements(arr, k, x) {
  let left = 0;
  let right = arr.length - k;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const midElement = arr[mid];

    if (x - midElement > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr.slice(left, left + k);
}

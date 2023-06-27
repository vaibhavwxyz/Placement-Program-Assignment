function isLevelOrderBST(arr) {
  if (arr.length === 0) return true;

  const queue = [[arr[0], -Infinity, Infinity]];
  let i = 1;

  while (i < arr.length && queue.length > 0) {
    const [value, min, max] = queue.shift();

    if (value < min || value > max) {
      return false;
    }

    if (i < arr.length && arr[i] < value) {
      queue.push([arr[i], min, value - 1]);
    }

    i++;

    if (i < arr.length && arr[i] > value) {
      queue.push([arr[i], value + 1, max]);
    }

    i++;
  }

  return i === arr.length;
}

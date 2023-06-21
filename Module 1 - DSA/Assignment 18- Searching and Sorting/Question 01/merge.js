function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals = [];
  let currentInterval = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];

    if (start <= currentInterval[1]) {
      currentInterval[1] = Math.max(currentInterval[1], end);
    } else {
      mergedIntervals.push(currentInterval);
      currentInterval = intervals[i];
    }
  }

  mergedIntervals.push(currentInterval);

  return mergedIntervals;
}

// Example usage:
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
// Output: [[1, 6], [8, 10], [15, 18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
// Output: [[1, 5]]

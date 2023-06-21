function findMinArrowShots(points) {
  points.sort((a, b) => a[1] - b[1]);

  let arrows = 0;
  let prevEnd = -Infinity;

  for (const [start, end] of points) {
    if (start > prevEnd) {
      arrows++;
      prevEnd = end;
    }
  }

  return arrows;
}

// Example usage:
console.log(
  findMinArrowShots([
    [10, 16],
    [2, 8],
    [1, 6],
    [7, 12],
  ])
);
// Output: 2
console.log(
  findMinArrowShots([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
  ])
);
// Output: 4

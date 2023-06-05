function checkStraightLine(coordinates) {
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];
  const slope = (y1 - y0) / (x1 - x0);

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    const currentSlope = (y - y0) / (x - x0);

    if (currentSlope !== slope) {
      return false;
    }
  }

  return true;
}

const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
console.log(checkStraightLine(coordinates)); // Output: true

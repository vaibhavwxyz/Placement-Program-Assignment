function generateMatrix(n) {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  let left = 0,
    right = n - 1,
    top = 0,
    bottom = n - 1;
  let num = 1;

  while (num <= n * n) {
    for (let i = left; i <= right; i++) {
      matrix[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = num++;
    }
    left++;
  }

  return matrix;
}

const n = 3;
console.log(generateMatrix(n)); // Output: [[1, 2, 3], [8, 9, 4], [7, 6, 5]]

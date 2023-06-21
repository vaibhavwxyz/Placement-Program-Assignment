function isBadVersion(version) {
  // Assume this function is provided by the system
  // and returns whether the version is bad or not.
}

function firstBadVersion(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Example usage:
console.log(firstBadVersion(5, 4));
// Output: 4
console.log(firstBadVersion(1, 1));
// Output: 1

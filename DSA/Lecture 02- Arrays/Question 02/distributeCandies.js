function distributeCandies(candyType) {
  // Calculate the maximum number of candies Alice can eat
  const maxEat = candyType.length / 2;

  // Create a Set to store the unique types of candies
  const candySet = new Set(candyType);

  // Return the minimum value between the number of unique candies and maxEat
  return Math.min(candySet.size, maxEat);
}

// Test the function with the given example
const candyType = [1, 1, 2, 2, 3, 3];
const maxCandies = distributeCandies(candyType);
console.log(maxCandies); // Output: 3

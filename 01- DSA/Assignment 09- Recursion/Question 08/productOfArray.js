function productOfArray(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

// Example usage:
const arr1 = [1, 2, 3, 4, 5];
console.log(productOfArray(arr1)); // Output: 120

const arr2 = [1, 6, 3];
console.log(productOfArray(arr2)); // Output: 18

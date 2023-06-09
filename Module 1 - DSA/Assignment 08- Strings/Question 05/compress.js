function compress(chars) {
  let index = 0;
  let i = 0;

  while (i < chars.length) {
    let j = i;
    while (j < chars.length && chars[i] === chars[j]) {
      j++;
    }

    chars[index++] = chars[i];
    const count = j - i;
    if (count > 1) {
      const countString = count.toString();
      for (let k = 0; k < countString.length; k++) {
        chars[index++] = countString.charAt(k);
      }
    }

    i = j;
  }

  return index;
}

// Example usage:
const chars = ["a", "a", "b", "b", "c", "c", "c"];
const length = compress(chars);
console.log(length); // Output: 6
console.log(chars.slice(0, length)); // Output: ["a", "2", "b", "2", "c", "3"]

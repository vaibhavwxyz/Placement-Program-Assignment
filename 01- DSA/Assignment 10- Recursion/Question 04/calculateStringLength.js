function calculateStringLength(str) {
  if (str === "") {
    return 0;
  }

  return 1 + calculateStringLength(str.slice(1));
}

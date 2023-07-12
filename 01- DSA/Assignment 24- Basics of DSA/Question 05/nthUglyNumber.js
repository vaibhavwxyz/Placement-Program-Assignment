function nthUglyNumber(n) {
  const ugly = [1];
  let i2 = 0,
    i3 = 0,
    i5 = 0;

  while (ugly.length < n) {
    const nextMultipleOf2 = ugly[i2] * 2;
    const nextMultipleOf3 = ugly[i3] * 3;
    const nextMultipleOf5 = ugly[i5] * 5;

    const nextUglyNumber = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    ugly.push(nextUglyNumber);

    if (nextUglyNumber === nextMultipleOf2) i2++;
    if (nextUglyNumber === nextMultipleOf3) i3++;
    if (nextUglyNumber === nextMultipleOf5) i5++;
  }

  return ugly[n - 1];
}

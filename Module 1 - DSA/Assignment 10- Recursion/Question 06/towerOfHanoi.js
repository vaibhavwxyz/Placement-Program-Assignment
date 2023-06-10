function towerOfHanoi(n) {
  function moveDisk(disk, source, destination) {
    console.log("Move disk", disk, "from rod", source, "to rod", destination);
  }

  function hanoiRecursive(n, source, auxiliary, destination) {
    if (n === 1) {
      moveDisk(n, source, destination);
      return 1;
    }

    const moves1 = hanoiRecursive(n - 1, source, destination, auxiliary);
    moveDisk(n, source, destination);
    const moves2 = hanoiRecursive(n - 1, auxiliary, source, destination);

    return moves1 + 1 + moves2;
  }

  return hanoiRecursive(n, 1, 2, 3);
}

function countStudents(students, sandwiches) {
  const count = [0, 0];

  for (let pref of students) {
    count[pref]++;
  }

  for (let i = 0; i < sandwiches.length; i++) {
    if (count[sandwiches[i]] > 0) {
      count[sandwiches[i]]--;
    } else {
      return students.length - i;
    }
  }

  return 0;
}

// Example usage:
console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])); // Output: 0
console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])); // Output: 3

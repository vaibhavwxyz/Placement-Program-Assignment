function backspaceCompare(s, t) {
  return buildString(s) === buildString(t);
}

function buildString(str) {
  const result = [];

  for (let char of str) {
    if (char !== "#") {
      result.push(char);
    } else {
      result.pop();
    }
  }

  return result.join("");
}

const s = "ab#c";
const t = "ad#c";
console.log(backspaceCompare(s, t)); // Output: true

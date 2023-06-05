function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (
      (sMap.has(charS) && sMap.get(charS) !== charT) ||
      (tMap.has(charT) && tMap.get(charT) !== charS)
    ) {
      return false;
    }

    sMap.set(charS, charT);
    tMap.set(charT, charS);
  }

  return true;
}

const s = "egg";
const t = "add";
console.log(isIsomorphic(s, t)); // Output: true

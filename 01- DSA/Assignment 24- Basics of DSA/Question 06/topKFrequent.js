function topKFrequent(words, k) {
  const freqMap = new Map();

  for (let word of words) {
    freqMap.set(word, (freqMap.get(word) || 0) + 1);
  }

  const sortedWords = Array.from(freqMap.keys()).sort((a, b) => {
    const freqA = freqMap.get(a);
    const freqB = freqMap.get(b);

    if (freqA !== freqB) {
      return freqB - freqA;
    } else {
      return a.localeCompare(b);
    }
  });

  return sortedWords.slice(0, k);
}

const mergeWords = (word) => (nextWord) =>
  nextWord === undefined
    ? word
    : mergeWords(word + " " + nextWord);

console.log(mergeWords('Hello')());

console.log(
  mergeWords('There')('is')('no')('spoon.')()
);
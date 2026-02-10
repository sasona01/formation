
let sentence = "This dinner is bad !";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot < wordBad && wordNot !== -1) {
    console.log(sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3));
} else {
    console.log(sentence);
}
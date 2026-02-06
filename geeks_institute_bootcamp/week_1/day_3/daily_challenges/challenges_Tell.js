// ====== Daily Challenge 1

const form = document.getElementById("libform");
const storySpan = document.getElementById("story");

const nounInput = document.getElementById("noun");
const adjectiveInput = document.getElementById("adjective");
const personInput = document.getElementById("person");
const verbInput = document.getElementById("verb");
const placeInput = document.getElementById("place");


const stories = [
  (n, a, p, v, pl) => `One day, ${p} saw a very ${a} ${n} that decided to ${v} in ${pl}.`,
  (n, a, p, v, pl) => `${p} was walking in ${pl} when a ${a} ${n} suddenly ${v}.`,
  (n, a, p, v, pl) => `In ${pl}, ${p} found a ${n} so ${a} that it wanted to ${v}.`
];

const shuffleBtn = document.getElementById("shuffle");

shuffleBtn.addEventListener("click", function () {
  const noun = nounInput.value;
  const adjective = adjectiveInput.value;
  const person = personInput.value;
  const verb = verbInput.value;
  const place = placeInput.value;

  if (
    noun === "" ||
    adjective === "" ||
    person === "" ||
    verb === "" ||
    place === ""
  ) {
    return;
  }

  const randomIndex = Math.floor(Math.random() * stories.length);
  storySpan.textContent =
    stories[randomIndex](noun, adjective, person, verb, place);
});


// ====== Daily Challenge 2

// ====== Daily Challenge 3

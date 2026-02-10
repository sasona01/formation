let input = prompt("Enter several words separated by commas");

let words = input.split(",").map(word => word.trim());

let maxLength = 0;
for (let word of words) {
  if (word.length > maxLength) {
    maxLength = word.length;
  }
}

let stars = "*".repeat(maxLength + 4);

console.log(stars);

for (let word of words) {
  let spaces = " ".repeat(maxLength - word.length);
  console.log("* " + word + spaces + " *");
}

console.log(stars);

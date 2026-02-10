// ===== Exercise 1
// a = 3
// a = 0
// a = 5
// a = hello
// a = test
// a = 5
// a = 2
// ===== Exercise 2

const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints); // 10

// ===== Exercise 3
const isString = value => typeof value === "string";

console.log(isString("hello")); 
console.log(isString([1, 2, 4])); 

// ===== Exercise 4
const sum = (a, b) => a + b;

console.log(sum(3, 4)); 

// ===== Exercise 5

function kgToGrams(kg) {
    return kg * 1000;
}
console.log(kgToGrams(2));


const kgToGrams2 = function(kg) {
    return kg * 1000;
};
console.log(kgToGrams2(3));

const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(4));

// ===== Exercise 6

(function(children, partner, location, job) {
    document.body.innerHTML += 
    `You will be a ${job} in ${location}, 
    and married to ${partner} with ${children} kids.`;
})(2, "Emma", "Paris", "Developer");

// ===== Exercise 7
(function(username) {
    const nav = document.getElementById("navbar");

    const div = document.createElement("div");
    div.innerHTML = `
        <span>${username}</span>
        <img src="">
    `;

    nav.appendChild(div);
})("John");
// ===== Exercise 8
//parte 1
function makeJuice(size) {
    function addIngredients(ing1, ing2, ing3) {
        document.body.innerHTML += 
        `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.<br>`;
    }

    addIngredients("apple", "banana", "orange");
}

makeJuice("medium");
//parte 2
function makeJuice(size) {
    let ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        document.body.innerHTML += 
        `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
    }

    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "kiwi", "pineapple");

    displayJuice();
}

makeJuice("large");


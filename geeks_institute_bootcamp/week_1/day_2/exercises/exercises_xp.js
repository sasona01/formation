// ===== Exercise 1

function displayNumbersDivisible() {
  let sum = 0;
  let x = [];   // initialize the array
  let j = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      x[j] = i;
      j++;
      sum += i;
    }
  }

  console.log("Outcome :"+x.join(" "));
  console.log("Sum :"+ sum);
}
displayNumbersDivisible();
//5
function displayNumbersDivisible(y) {
  let sum1 = 0;
  let a = [];   // initialize the array
  let e = 0;

  for (let z = 0; z <= 500; z++) {
    if (z % y === 0) {
      a[e] = z;
      e++;
      sum1 += z;
    }
  }

  console.log("Outcome :"+a.join(" "));
  console.log("Sum :"+ sum1);
}
displayNumbersDivisible(45);*/
// ===== Exercise 2

const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
      stock[item]--; 
    }
  }

  return total;
}

console.log(myBill());

// ===== Exercise 3

function changeEnough(itemPrice, amountOfChange) {
  const values = [0.25, 0.10, 0.05, 0.01];
  let total = 0;

  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * values[i];
  }

  return total >= itemPrice;
}

console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));

// ===== Exercise 4

function hotelCost(nights) {
  return nights * 140;
}

function planeRideCost(destination) {
  if (destination === "London") return 183;
  if (destination === "Paris") return 220;
  return 300;
}

function rentalCarCost(days) {
  let cost = days * 40;
  if (days > 10) {
    cost *= 0.95;
  }
  return cost;
}

function totalVacationCost() {
  let nights;
  do {
    nights = Number(prompt("How many nights?"));
  } while (isNaN(nights) || nights <= 0);

  let destination;
  do {
    destination = prompt("Where are you going?");
  } while (!destination);

  let days;
  do {
    days = Number(prompt("How many car rental days?"));
  } while (isNaN(days) || days <= 0);

  const total =
    hotelCost(nights) +
    planeRideCost(destination) +
    rentalCarCost(days);

  alert(`Total vacation cost: $${total}`);
}

totalVacationCost();

// ===== Exercise 5// Récupérer le div
// Récupérer le div
const div = document.getElementById("container");
console.log(div);

// Récupérer les ul
const ul1 = document.getElementsByTagName("ul")[0];
const ul2 = document.getElementsByTagName("ul")[1];

// 1. Changer Pete en Richard
ul1.children[1].textContent = "Richard";

// 2. Supprimer le 2e li du 2e ul (Sarah)
ul2.children[1].remove();

// 3. Changer le premier li de chaque ul
ul1.children[0].textContent = "YourName";
ul2.children[0].textContent = "YourName";

// 4. Ajouter la classe student_list aux deux ul
ul1.classList.add("student_list");
ul2.classList.add("student_list");

// 5. Ajouter university et attendance au premier ul
ul1.classList.add("university", "attendance");

// 6. Style du div
div.style.backgroundColor = "lightblue";
div.style.padding = "10px";

// 7. Cacher Dan
ul2.children[1].style.display = "none";

// 8. Ajouter une bordure à Richard
ul1.children[1].style.border = "1px solid black";

// 9. Changer la taille de la police
document.body.style.fontSize = "18px";

// Bonus
if (div.style.backgroundColor === "lightblue") {
  alert("Hello YourName and David");
}

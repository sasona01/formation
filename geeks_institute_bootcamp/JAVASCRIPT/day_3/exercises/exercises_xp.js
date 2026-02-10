// ===== Exercise 1

const h1 = document.querySelector("h1");
console.log(h1);

const article = document.querySelector("article");
article.lastElementChild.remove();

const h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
  h3.style.display = "none";
});

const button = document.createElement("button");
button.textContent = "Bold Paragraphs";
document.body.appendChild(button);

button.addEventListener("click", function () {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach(p => {
    p.style.fontWeight = "bold";
  });
});

h1.addEventListener("mouseover", function () {
  h1.style.fontSize = Math.floor(Math.random() * 100) + "px";
});

const secondP = document.querySelectorAll("p")[1];
secondP.addEventListener("mouseover", function () {
  secondP.style.transition = "opacity 1s";
  secondP.style.opacity = "0";
});

// ===== Exercise 2
const form = document.querySelector("form");
console.log(form);

const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
console.log(fname, lname);

console.log(document.getElementsByName("firstname"));
console.log(document.getElementsByName("lastname"));

form.addEventListener("submit", function (event) {
  event.preventDefault(); 
  if (fname.value === "" || lname.value === "") {
    return;
  }

  const ul = document.querySelector(".usersAnswer");
  ul.innerHTML = "";

  const li1 = document.createElement("li");
  li1.textContent = fname.value;

  const li2 = document.createElement("li");
  li2.textContent = lname.value;

  ul.appendChild(li1);
  ul.appendChild(li2);
});

// ===== Exercise 3
let allBoldItems;

function getBoldItems() {
  allBoldItems = document.querySelectorAll("strong");
}

function highlight() {
  allBoldItems.forEach(item => {
    item.style.color = "blue";
  });
}

function returnItemsToDefault() {
  allBoldItems.forEach(item => {
    item.style.color = "black";
  });
}

getBoldItems();

const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", returnItemsToDefault);

// ===== Exercise 4
const form = document.getElementById("MyForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const radiusInput = document.getElementById("radius");
  const volumeInput = document.getElementById("volume");
  const errorMsg = document.getElementById("error");

  const radius = parseFloat(radiusInput.value);

  if (isNaN(radius) || radius <= 0) {
    errorMsg.textContent = "❌ Veuillez entrer un nombre valide";
    volumeInput.value = "";
    return;
  }

  errorMsg.textContent = "";

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volumeInput.value = volume.toFixed(2);
});



// ===== Exercise ...
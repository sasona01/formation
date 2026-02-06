// ===== Exercise 1

 const select = document.getElementById("genres");

console.log(select.value);

const option = document.createElement("option");
option.value = "classic";
option.textContent = "Classic";
option.selected = true;

select.appendChild(option);

console.log(select.value);

// ===== Exercise 2
const button = document.querySelector("input[type='button']");
const select = document.getElementById("colorSelect");

button.addEventListener("click", removecolor);

function removecolor() {
  select.remove(select.selectedIndex);
}

// ===== Exercise 3
let shoppingList = [];

const root = document.getElementById("root");

const form = document.createElement("form");

const input = document.createElement("input");
input.type = "text";

const addButton = document.createElement("button");
addButton.textContent = "AddItem";

form.appendChild(input);
form.appendChild(addButton);
root.appendChild(form);

const ul = document.createElement("ul");
root.appendChild(ul);

const clearButton = document.createElement("button");
clearButton.textContent = "ClearAll";
root.appendChild(clearButton);

form.addEventListener("submit", function (event) {
  event.preventDefault();
  addItem();
});

function addItem() {
  if (input.value === "") return;

  shoppingList.push(input.value);

  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);

  input.value = "";
}

clearButton.addEventListener("click", clearAll);

function clearAll() {
  shoppingList = [];
  ul.innerHTML = "";
}

// ===== Exercise 4

// ===== Exercise ...
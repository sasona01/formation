// ===== Exercise 1

let random = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i <= random; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ===== Exercise 2
function capitalize(str) {
  let even = "";
  let odd = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      even += str[i].toUpperCase();
      odd += str[i];
    } else {
      even += str[i];
      odd += str[i].toUpperCase();
    }
  }

  return [even, odd];
}

console.log(capitalize("abcdef"));

// ===== Exercise 3
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}

console.log(isPalindrome("madam")); 
console.log(isPalindrome("hello"));

// ===== Exercise 4
function biggestNumberInArray(arrayNumber) {
  if (arrayNumber.length === 0) {
    return 0;
  }

  let max = null;

  for (let item of arrayNumber) {
    if (typeof item === "number") {
      if (max === null || item > max) {
        max = item;
      }
    }
  }

  return max === null ? 0 : max;
}

// Examples
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(["a", 3, 4, 2])); // 4
console.log(biggestNumberInArray([])); // 0

// ===== Exercise 5
function uniqueArray(arr) {
  let newArray = [];

  for (let item of arr) {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  }

  return newArray;
}

console.log(uniqueArray([1,2,3,3,3,3,4,5]));
// ===== Exercise 6
function createCalendar(year, month) {
  const table = document.createElement("table");
  table.border = "1";

  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

 
  const headerRow = document.createElement("tr");
  for (let day of days) {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);

  
  let date = new Date(year, month - 1, 1);

  let startDay = (date.getDay() + 6) % 7;

  let row = document.createElement("tr");

  for (let i = 0; i < startDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  while (date.getMonth() === month - 1) {
    const td = document.createElement("td");
    td.textContent = date.getDate();
    row.appendChild(td);
he
    if (row.children.length === 7) {
      table.appendChild(row);
      row = document.createElement("tr");
    }

    date.setDate(date.getDate() + 1);
  }

  if (row.children.length > 0) {
    table.appendChild(row);
  }

  document.body.appendChild(table);
}


createCalendar(2012, 9);

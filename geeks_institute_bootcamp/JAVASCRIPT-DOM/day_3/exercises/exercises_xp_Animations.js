// ===== Exercise 2

let interval = null; 

function myMove() {
  if (interval !== null) {
    return; 
  }

  const box = document.getElementById("animate");
  const container = document.getElementById("container");

  let position = 0;

  interval = setInterval(function () {
    if (position >= container.clientWidth - box.clientWidth) {
      clearInterval(interval);
      interval = null;
    } else {
      position++;
      box.style.left = position + "px";
    }
  }, 1);
}


// ===== Exercise 1
//Part I
setTimeout(function() {
  alert("Hello World");
}, 2000);

//Part II
setTimeout(function() {
  const container = document.getElementById("container");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Hello World";
  container.appendChild(paragraph);
}, 2000);

//Part III
let myInterval = setInterval(function() {
  const container = document.getElementById("container");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Hello World";
  container.appendChild(paragraph);
  
  const paragraphs = container.getElementsByTagName("p");
  
  if (paragraphs.length >= 5) {
    clearInterval(myInterval);
  }
}, 2000);

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", function() {
  clearInterval(myInterval);
});
// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...
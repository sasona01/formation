// ===== Exercise 1
function myMove() {
  const box = document.getElementById("animate");
  const container = document.getElementById("container");

  let position = 0;

  const interval = setInterval(function () {
    if (position >= container.clientWidth - box.clientWidth) {
      clearInterval(interval);
    } else {
      position++;
      box.style.left = position + "px";
    }
  });
}

// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...
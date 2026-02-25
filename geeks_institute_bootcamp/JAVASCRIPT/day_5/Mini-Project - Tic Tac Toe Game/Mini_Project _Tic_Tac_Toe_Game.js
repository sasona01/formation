const board = document.getElementById("board");
const statusText = document.getElementById("status");

let cells = Array(9).fill("");
let player = "";
let ai = "";
let gameOver = false;

const winCombos = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[6,4,2]
];

// créer le board
for (let i = 0; i < 9; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  div.id = i;
  div.addEventListener("click", playerMove);
  board.appendChild(div);
}

// choisir X ou O
function choosePlayer(choice) {
  player = choice;
  ai = choice === "X" ? "O" : "X";
}

// joueur clique
function playerMove(e) {
  if (gameOver || e.target.textContent !== "") return;

  const index = e.target.id;
  makeMove(index, player);

  if (!checkGameEnd()) {
    setTimeout(aiMove, 300);
  }
}

// jouer un coup
function makeMove(index, symbol) {
  cells[index] = symbol;
  document.getElementById(index).textContent = symbol;
}

// IA
function aiMove() {
  let difficulty = document.getElementById("difficulty").value;

  let empty = cells
    .map((val, i) => val === "" ? i : null)
    .filter(v => v !== null);

  let move;

  if (difficulty === "easy") {
    // random
    move = empty[Math.floor(Math.random() * empty.length)];
  } else {
    // HARD → bloque joueur
    move = findBestMove() ?? empty[0];
  }

  makeMove(move, ai);
  checkGameEnd();
}

// IA intelligente (bloque ou gagne)
function findBestMove() {
  for (let combo of winCombos) {
    const [a,b,c] = combo;

    // gagner
    if (cells[a] === ai && cells[b] === ai && cells[c] === "") return c;
    if (cells[a] === ai && cells[c] === ai && cells[b] === "") return b;
    if (cells[b] === ai && cells[c] === ai && cells[a] === "") return a;

    // bloquer joueur
    if (cells[a] === player && cells[b] === player && cells[c] === "") return c;
    if (cells[a] === player && cells[c] === player && cells[b] === "") return b;
    if (cells[b] === player && cells[c] === player && cells[a] === "") return a;
  }
  return null;
}

// vérifier fin de jeu
function checkGameEnd() {
  for (let combo of winCombos) {
    const [a,b,c] = combo;

    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      statusText.textContent = cells[a] + " wins!";
      gameOver = true;
      document.getElementById("restart").style.display = "block";
      return true;
    }
  }

  if (!cells.includes("")) {
    statusText.textContent = "Tie game!";
    gameOver = true;
    document.getElementById("restart").style.display = "block";
    return true;
  }

  return false;
}

// restart
function restartGame() {
  cells = Array(9).fill("");
  gameOver = false;
  statusText.textContent = "";

  document.querySelectorAll(".cell").forEach(cell => {
    cell.textContent = "";
  });

  document.getElementById("restart").style.display = "none";
}
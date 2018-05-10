let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
let currentClass = "red";
let winner;
let redWins = 0;
let blackWins = 0;
let gameWon = false;
const edgeX = board[0].length - 3;
const edgeY = board.length - 3;
const resetOutputWrapper = document.getElementById("resetOutput");
const winnerOutput = document.getElementById("winnerOutput");
const redWinCountOutput = document.getElementById("redWinCount");
const blackWinCountOutput = document.getElementById("blackWinCount");
blackWinCountOutput.textContent = blackWins;
redWinCountOutput.textContent = redWins;
const columns = document.querySelectorAll(".column");
const resetBtn = document.createElement("button");
resetBtn.addEventListener("click", resetBoard);
resetBtn.id = "reset";
resetBtn.textContent += "Reset";
for (let col of columns) {
  col.addEventListener("click", handleClick);
}

function handleClick() {
  if (gameWon !== true) {
    currentClass === "red" ? (currentClass = "black") : (currentClass = "red");
    const disk = document.createElement("div");
    disk.classList = currentClass;
    const currentColumn = event.target;

    currentColumn.childElementCount < 6
      ? currentColumn.appendChild(disk)
      : alert("The Column Is Full!");

    const boardRowPosition = 6 - currentColumn.childElementCount; //

    board[boardRowPosition][currentColumn.dataset.id] = currentClass;

    if (checkMatches()) {
      winner = currentClass;
      gameWon = true;
      declareWinnerDelayed();
    } else {
      checkDrawDelayed();
    }
  } //end else
}
function declareWinner() {
  gameWon = true;
  const winnerCapitalized = capitalizeFirstLetter(winner);
  winnerOutput.textContent = `${winnerCapitalized} Is The Winner!`;
  winnerOutput.style.visibility = "visible";
  winner === "red" ? (redWins += 1) : (blackWins += 1);
  blackWinCountOutput.textContent = blackWins;
  redWinCountOutput.textContent = redWins;
  resetOutputWrapper.appendChild(resetBtn);
}

function declareWinnerDelayed() {
  const timeoutID = window.setTimeout(declareWinner, 635);
}

function checkMatches() {
  if (
    checkHorizontal() ||
    checkVertical() ||
    checkDiagonalRight() ||
    checkDiagonalLeft()
  ) {
    return true;
  }
}
function checkDraw() {
  for (let row of board) {
    if (row.includes(0)) {
      return;
    } else {
      winnerOutput.textContent = "Its a Draw!";
      winnerOutput.style.visibility = "visible";
      resetOutputWrapper.appendChild(resetBtn);
    }
  }
}
function checkDrawDelayed(){
  const timeoutID = window.setTimeout(checkDraw, 635);
}

function checkHorizontal() {
  for (let y in board) {
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (
          cell === board[y][x + 1] &&
          cell === board[y][x + 2] &&
          cell === board[y][x + 3]
        ) {
          return true;
        }
      }
    }
  }
}
function checkVertical() {
  for (let y = 0; y < edgeY; y++) {
    for (let x = 0; x < board[0].length; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (
          cell === board[y + 1][x] &&
          cell === board[y + 2][x] &&
          cell === board[y + 3][x]
        ) {
          return true;
        }
      }
    }
  }
}

function checkDiagonalRight() {
  for (let y = 0; y < edgeY; y++) {
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (
          cell === board[y + 1][x + 1] &&
          cell === board[y + 2][x + 2] &&
          cell === board[y + 3][x + 3]
        ) {
          return true;
        }
      }
    }
  }
}

function checkDiagonalLeft() {
  for (let y = 3; y < board.length; y++) {
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (
          cell === board[y - 1][x + 1] &&
          cell === board[y - 2][x + 2] &&
          cell === board[y - 3][x + 3]
        ) {
          return true;
        }
      }
    }
  }
}

function resetBoard() {
  for (col of columns) {
    while (col.firstChild) {
      col.removeChild(col.firstChild);
    }
  }

  while (resetOutputWrapper.firstChild) {
    resetOutputWrapper.removeChild(resetOutputWrapper.firstChild);
  }

  for (i = 0; i < board.length; i++) {
    board[i] = board[i].map(x => 0);
  }
  winnerOutput.style.visibility = "hidden";
  gameWon = false;
  winner = null;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

let gameBoard = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
let currentClass = "red";
let winner;
let currentColumn;
let disk;
let redWins = 0;
let blackWins = 0;
let gameWon = false;
const edgeX = gameBoard[0].length - 3;
const edgeY = gameBoard.length - 3;
const resetOutputWrapper = document.getElementById("resetOutput");
const winnerOutput = document.getElementById("winnerOutput");
const redWinCountOutput = document.getElementById("redWinCount");
const blackWinCountOutput = document.getElementById("blackWinCount");
blackWinCountOutput.textContent = blackWins;
redWinCountOutput.textContent = redWins;

const resetBtn = document.createElement("button");
resetBtn.addEventListener("click", resetBoard);
resetBtn.id = "reset";
resetBtn.textContent += "Reset";

const columns = document.querySelectorAll(".column");
for (let col of columns) {
  col.addEventListener("click", handleClick);
}

function handleClick() {
  if (gameWon !== true) {
    currentClass === "red" ? (currentClass = "black") : (currentClass = "red");
    disk = document.createElement("div");
    disk.classList = currentClass;

    currentColumn = event.target;

    currentColumn.childElementCount < 6
      ? currentColumn.appendChild(disk)
      : alert("The Column Is Full!");

    const boardRowPosition = 6 - currentColumn.childElementCount;

    gameBoard[boardRowPosition][currentColumn.dataset.id] = currentClass;
    checkMatches(gameBoard)
      ? ((winner = currentClass), (gameWon = true), declareWinnerDelayed())
      : checkDrawDelayed();
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

function checkMatches(board) {
  if (
    checkHorizontal(board) ||
    checkVertical(board) ||
    checkDiagonalRight(board) ||
    checkDiagonalLeft(board)
  ) {
    return true;
  } else {
    return false;
  }
}

function checkDraw() {
  for (let row of gameBoard) {
    if (row.includes(0)) {
      return;
    } else {
      winnerOutput.textContent = "Its a Draw!";
      winnerOutput.style.visibility = "visible";
      resetOutputWrapper.appendChild(resetBtn);
    }
  }
}

function checkDrawDelayed() {
  const timeoutID = window.setTimeout(checkDraw, 635);
}

function checkHorizontal(board) {
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

function checkVertical(board) {
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

function checkDiagonalRight(board) {
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

function checkDiagonalLeft(board) {
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

function resetBoard(board) {
  let pieces = [...document.getElementsByClassName("red")].concat([
    ...document.getElementsByClassName("black")
  ]);
  console.log(pieces);
  for (let appendedPiece of pieces) {
    appendedPiece.id === "mousePiece"
      ? null
      : ((appendedPiece.style.animation = "slideOut 1s"),
        appendedPiece.addEventListener("animationend", () => appendedPiece.remove())
      );
  }

  while (resetOutputWrapper.firstChild) {
    resetOutputWrapper.removeChild(resetOutputWrapper.firstChild);
  }

  for (i = 0; i < gameBoard.length; i++) {
    gameBoard[i] = gameBoard[i].map(x => 0);
  }
  winnerOutput.style.visibility = "hidden";
  gameWon = false;
  winner = null;
}


function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

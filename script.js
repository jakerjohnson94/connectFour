let board = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
let currentClass = "red";
let gameWon = false;
const edgeX = board[0].length - 3;
const edgeY = board.length - 3;
const outputWrapper = document.getElementById("output");
const outputDiv = document.createElement("div");
const columns = document.querySelectorAll(".colFlex");
const resetBtn = document.createElement("button");
resetBtn.addEventListener("click", resetBoard);
resetBtn.textContent = "Reset";
for (let col of columns) {
  col.addEventListener("click", handleClick);
}

function handleClick() {
  if (gameWon === true) {
    outputDiv.textContent =
      "Someone has won already. Reset the board to play again. ";
    outputWrapper.appendChild(outputDiv);
    outputWrapper.appendChild(resetBtn);
  } else {
    currentClass === "red" ? (currentClass = "black") : (currentClass = "red");
    const disk = document.createElement("div");
    disk.classList = currentClass;
    const currentColumn = event.target;

    currentColumn.childElementCount < 6
      ? currentColumn.appendChild(disk)
      : alert("too many discs in column");

    const boardRowPosition = 6 - currentColumn.childElementCount; //

    board[boardRowPosition][currentColumn.dataset.id - 1] = currentClass;

    if (checkMatches()) {
      outputDiv.textContent = `${currentClass} is the winner!`;
      outputWrapper.appendChild(outputDiv);
      gameWon = true;
      output.appendChild(resetBtn);
    }

  } //end else
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
  while (outputWrapper.firstChild) {
    outputWrapper.removeChild(outputWrapper.firstChild);
  }
  for (i = 0; i < board.length; i++) {
    //console.log(board[i])
    board[i] = board[i].map(x => 0);
  }
  gameWon = false;
}

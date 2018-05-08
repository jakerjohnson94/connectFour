let board = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
];
const edgeX = board[0].length - 3;
const edgeY = board.length - 3;
const out = document.getElementById('output');
let currentClass = 'red';

const columns = document.querySelectorAll("td");

for (let col of columns) {
  col.addEventListener("click", handleClick);
}

function handleClick(){
  currentClass === 'red' ? currentClass = 'black' : currentClass ='red';
  const disk = document.createElement('div');
  disk.classList = currentClass;
  const col = event.target;

  
  //
  col.childElementCount < 6 ?   col.appendChild(disk) : alert('too many discs in column');
  const boardRowPosition = 6 - col.childElementCount; //


  board[boardRowPosition][col.id - 1] = currentClass;
  console.log(board)
  console.log(boardRowPosition, (col.id - 1));
  checkMatches() ? out.textContent = `${currentClass} is the winner!` : null;
  //board[col.id][boardRowPosition] = 1;

 
 
}
function checkMatches(){
  if (checkHorizontal()|| checkVertical() || checkDiagonalRight() || checkDiagonalLeft()){

    return true
  }
}

function checkHorizontal() {
  for (let y in board) {
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (cell === board[y][x + 1] && cell === board[y][x + 2] && cell === board[y][x+3]) {
          console.log(`Horizontal match found at ${x + 1} : ${y + 1}`);
          return true;
        }
      }
    }
  }
}
function checkVertical() {
  for (let y = 0; y< edgeY; y++) {
    for (let x = 0; x < board[0].length; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (cell === board[y+1][x] && cell === board[y+2][x] && cell === board[y+3][x]) {
          console.log(`Vertical match found at ${x + 1} : ${y + 1}`);
          return true;
        }
      }
    }
  }
}

function checkDiagonalRight(){
  for (let y = 0; y< edgeY; y++) {
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (cell === board[y+1][x+1] && cell === board[y+2][x+2]&& cell === board[y+3][x+3]) {
          console.log(`Down-Right Diagonal match found at ${x + 1} : ${y + 1}`);
          return true;
        }
      }
    }
  }
}


function checkDiagonalLeft(){
  for (let y = 3; y< board.length; y++) {
    for (let x = 0; x < edgeX; x++) {
      let cell = board[y][x];

      if (cell !== 0) {
        if (cell === board[y-1][x+1] && cell === board[y-2][x+2] && cell === board[y-3][x+3]) {
          console.log(`Down-Left Diagonal match found at ${x + 1} : ${y + 1}`);
          return true;
        }
      }
    }
  }
}
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
const div = document.createElement('div');
let currentClass = 'red';
let gameWon = false;

const columns = document.querySelectorAll(".colFlex");
const reset = document.createElement('button');
reset.addEventListener('click', resetBoard);
reset.textContent = 'Reset';
// reset.id = 'reset';
for (let col of columns) {
  col.addEventListener("click", handleClick);
}
function resetBoard(){

 for (col of columns){
   while(col.firstChild){
     col.removeChild(col.firstChild);
   }
 }
 while(out.firstChild){
  out.removeChild(out.firstChild);
}
 for (i=0; i<board.length; i++){
   //console.log(board[i])
  board[i] = board[i].map(x=>0);
 }
 
  gameWon = false;
}
function handleClick(){
  if (gameWon === true){
    div.textContent = 'Someone has won already. Reset the board to play again. '
    out.appendChild(div);
    out.appendChild(reset);
  }else{
  currentClass === 'red' ? currentClass = 'black' : currentClass ='red';
  const disk = document.createElement('div');
  disk.classList = currentClass;
  const col = event.target;

  
  //
  col.childElementCount < 6 ?   col.appendChild(disk) : alert('too many discs in column');
  const boardRowPosition = 6 - col.childElementCount; //


  board[boardRowPosition][col.dataset.id - 1] = currentClass;

  if(checkMatches()){
    div.textContent = `${currentClass} is the winner!`;
    out.appendChild(div);
    gameWon = true;
    output.appendChild(reset);
  } 

  //board[col.id][boardRowPosition] = 1;
  }//end else
 
 
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
;
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

          return true;
        }
      }
    }
  }
}
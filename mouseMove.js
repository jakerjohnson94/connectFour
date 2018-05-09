const piece = document.getElementById('mousePiece');
piece.style.position = 'absolute';
document.addEventListener('mousemove', getMouse);

let piecePosition = {x:0, y:0};
let mouse = {x:0, y:0}

function getMouse(event){
  mouse.x = event.pageX;
  mouse.y = event.pageY;
}

function followMouse(){
  //find distance
  let distX = mouse.x - piecePosition.x;
  let distY = mouse.y - piecePosition.y;

  piecePosition.x += distX/5;
  piecePosition.y += distY/2;

  piece.style.left = piecePosition.x +'px';
  piece.style.top = piecePosition.y +'px';
}
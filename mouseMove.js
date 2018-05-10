const piece = document.getElementById('mousePiece');
const boardWrapper = document.getElementById('columnWrapper')
let wrapCoords = columnWrapper.getBoundingClientRect();
let wrapLeft = wrapCoords.left;
let wrapTop = wrapCoords.top;

piece.style.position = 'absolute';



document.addEventListener('mousemove', getMouse);

let piecePosition = {x:0, y:0};
let mouse = {x:0, y:0}

setInterval(followMouse, 50);
function getMouse(e){
  mouse.x = e.pageX;
  mouse.y = e.pageY;
}

function followMouse(){
  //find distance
  let distX = mouse.x - piecePosition.x - 33 ;
  let distY = mouse.y - piecePosition.y - 33 ;

  piecePosition.x += distX/3;
  piecePosition.y += distY/2;

  piece.style.left = piecePosition.x +'px';
  

  if(piecePosition.x > wrapCoords.left && piecePosition.x < wrapCoords.right && piecePosition.y < wrapCoords.bottom && piecePosition.y > wrapCoords.top){
    piece.style.top = (wrapCoords.top - 75) +'px';
  } else{
    piece.style.top = piecePosition.y +'px';
  }



  if(currentClass === 'Red'){
  piece.classList.remove('Red') 
  piece.classList.add('Black');
  }else if(currentClass === 'Black'){
  piece.classList.remove('Black');
  piece.classList.add('Red');
  }

 if( gameWon === true){
  piece.classList.remove('Black') 
  piece.classList.remove('Red')
 }
}
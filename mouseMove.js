const piece = document.getElementById('mousePiece');
const boardWrapper = document.getElementById('columnWrapper')
let wrapCoords = columnWrapper.getBoundingClientRect();


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

  piecePosition.x += distX/2;
  piecePosition.y += distY/3;

  piece.style.left = piecePosition.x +'px';
  

  if((piecePosition.x + 33) > wrapCoords.left
   && (piecePosition.x + 33) < wrapCoords.right 
   && (piecePosition.y ) < wrapCoords.bottom 
   && (piecePosition.y ) > wrapCoords.top)
   {
    piece.style.top = (wrapCoords.top - 54 ) +'px';
  } else{
    piece.style.top = piecePosition.y +'px';
  }



  if(currentClass === 'red'){
  piece.classList.remove('red') 
  piece.classList.add('black');
  }else if(currentClass === 'black'){
  piece.classList.remove('black');
  piece.classList.add('red');
  }

 if( gameWon === true){
  piece.classList.remove('black') 
  piece.classList.remove('red')
 }
}
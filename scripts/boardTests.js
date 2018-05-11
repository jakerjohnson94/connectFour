let testBoard1 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0]
];
const testBoard2 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];
let testBoard3 = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0]
];
let testBoard4 = [
  [1, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
let testBoard5 = [
  [1, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
let testBoard6 = [
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0]
];
boardTests();
function boardTests() {
  //happy paths
  let result = checkHorizontal(testBoard1);
  console.assert(result === true, {
    'Board Array: ': testBoard1,
    result: result,
    expected: 'true'
  });

  result = checkVertical(testBoard2);
  console.assert(result === true, {
    'Board Array: ': testBoard2,
    result: result,
    expected: 'true'
  });

  result = checkDiagonalLeft(testBoard3);
  console.assert(result === true, {
    'Board Array: ': testBoard3,
    result: result,
    expected: 'true'
  });

  result = checkDiagonalRight(testBoard4);
  console.assert(result === true, {
    'Board Array: ': testBoard4,
    result: result,
    expected: 'true'
  });

//lets get craaaazy with it
//top column omg lets see if it works
result = checkMatches(testBoard5);
  console.assert(result === true, {
    'Board Array: ': testBoard5,
    result: result,
    expected: 'true'
  });
  result = checkMatches(testBoard6);
  console.assert(result === true, {
    'Board Array: ': testBoard6,
    result: result,
    expected: 'true'
  });

}

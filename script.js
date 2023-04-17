let turn = 1;
let gameOver = false;
let square = '';
let winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let xArray = new Array(9);
let oArray = new Array(9);
let key = {'topleft':0,'topmid':1,'topright':2,'midleft':3,'midmid':4,'midright':5,'bottomleft':6,'bottommid':7,'bottomright':8};


function clickSquare(squareID) {
  if (xArray[key[squareID]] === 1 || oArray[key[squareID]] === 1) {
    return 'square already filled';
  }
  if (gameOver) {
    return 'game over';
  }
  let element = document.getElementById(squareID);
  turn % 2 === 1 ? element.src = "images/X Square.png" : element.src = "images/O Square.png";
  turn % 2 === 1 ? xArray[key[squareID]] = 1 : oArray[key[squareID]] = 1;
  checkForWin();
  turn++;
  if (turn === 10) {
    document.getElementById('win-statement').innerHTML = "Cat's Game!";
    gameOver = true;
  }
}

function checkForWin() {
  for (combo of winningCombos) {
    let xWin = true;
    let oWin = true;
    for (i of combo) {
      if (xArray[i] == undefined) {
        xWin = false;
      }
      if (oArray[i] == undefined) {
        oWin = false;
      }
    }
    if (xWin) {
      console.log('x wins!');
      document.getElementById('win-statement').innerHTML = "X Wins!";
      gameOver = true;
    }
    if (oWin) {
      console.log('o wins!');
      document.getElementById('win-statement').innerHTML = "O Wins!";
      gameOver = true;
    }
  }
}
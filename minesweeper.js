document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
    cells: [{ 
      row: 0,
      col: 0,
      isMine: true,
      hidden: true 
    }, 
    { 
      row: 0,
      col: 1,
      isMine: true,
      hidden: true 

    }, 
    { 
      row: 0,
      col: 2,
      isMine: false,
      hidden: true  
    }, 
    { 
      row: 1,
      col: 0,
      isMine: false,
      hidden: true  
    },
    { 
      row: 1,
      col: 1,
      isMine: true,
      hidden: true  
    }, 
    { 
      row: 1,
      col: 2,
      isMine: false,
      hidden: true  
    }, 
    { 
      row: 2,
      col: 0,
      isMine: true,
      hidden: true  
    }, 
    { 
      row: 2,
      col: 1,
      isMine: false,
      hidden: true  
    },
    { 
      row: 2,
      col: 2,
      isMine: false,
      hidden: true 
    }]
};

function startGame (cells) {

for (var i = 0; i < board.cells.length; i++) {                                  //for each iteration of the for loop, it will call the count surrounding mines function, for as long as the length of the board.cells array.
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])       //// assign the result of countSurroundingMines to a new property on each cell called surroundingMines
}
  console.log(board)

  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells.isMine === true && board.cells.isMarked === true) {
      lib.displayMessage('You win!')
    } else if (board.cells.isMine === false || board.cells.isMine === false) {
      startGame()
    }
  }
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
  for (var i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      count++
  }
}
  return count;
}
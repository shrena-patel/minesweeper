document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
    cells: [{ 
      row: 0,
      col: 0,
      isMine: true,
      hidden: true,
      isMarked: true 
    }, 
    { 
      row: 0,
      col: 1,
      isMine: true,
      hidden: true,
      isMarked: true 

    }, 
    { 
      row: 0,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: true  
    }, 
    { 
      row: 0,
      col: 3,
      isMine: false,
      hidden: true,
      isMarked: true 
    },
    { 
      row: 1,
      col: 0,
      isMine: false,
      hidden: true,
      isMarked: true  
    },
    { 
      row: 1,
      col: 1,
      isMine: true,
      hidden: true,
      isMarked: true  
    }, 
    { 
      row: 1,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: true  
    },
    { 
      row: 1,
      col: 3,
      isMine: true,
      hidden: true,
      isMarked: true 
    }, 
    { 
      row: 2,
      col: 0,
      isMine: true,
      hidden: true,
      isMarked: true  
    }, 
    { 
      row: 2,
      col: 1,
      isMine: false,
      hidden: true,
      isMarked: true  
    },
    { 
      row: 2,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: true 
    },
    { 
      row: 2,
      col: 3,
      isMine: true,
      hidden: true,
      isMarked: true 
    },
    { 
      row: 3,
      col: 0,
      isMine: false,
      hidden: true,
      isMarked: true 
    },
    { 
      row: 3,
      col: 1,
      isMine: false,
      hidden: true,
      isMarked: true 
    },
    { 
      row: 3,
      col: 2,
      isMine: false,
      hidden: true,
      isMarked: true 
    },
    { 
      row: 3,
      col: 3,
      isMine: false,
      hidden: true,
      isMarked: true 
    }
  ]
};

function startGame () {
  document.addEventListener('click', checkForWin)
  document.addEventListener('contextmenu', checkForWin)
for (var i = 0; i < board.cells.length; i++) {                                  //for each iteration of the for loop, it will call the count surrounding mines function, for as long as the length of the board.cells array.
  board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])       //// assign the result of countSurroundingMines to a new property on each cell called surroundingMines
}
  console.log(board)
  
 
  // Don't remove this function call: it makes the game work!
  lib.initBoard()

}


function checkForWin() {
  for (let i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true && board.cells[i].isMarked === true) {
      return;
    } else
      if (board.cells[i].isMine === false && board.cells[i].hidden === true) {
        return;
      }
  }
  lib.displayMessage('You win!');
  
  
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



/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// Hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space.)
// Take a look at solversSpec.js to see what the tests are expecting




// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n rooks placed such that none of them can attack each other.
// (If no solution, return an empty matrix.)
window.findNRooksSolution = function(n) {
  // var solution = new Board({'n': n});     // fixme
  var solution = makeEmptyBoardMatrix(n);
  var solutionBoard = new Board(solution);
  var found = false;
  //helper adds a piece to a possible position at rowIndex
  //if rowIndex == n
    //return
  //check if a piece could be put at given rowIndex, colIndex
  var helper = function(n, rowIndex, solutionBoard) {
    if(rowIndex === n) {
      solution = solutionBoard.allRowsCopy();
      found = true;
      return;
    }

    for(var colIndex = 0; colIndex < n && !found; colIndex++){
      solutionBoard.setPiece(rowIndex, colIndex, 1);
      if(solutionBoard.hasAnyRooksConflicts() === false) {
        helper(n, rowIndex + 1, solutionBoard);
      }
      solutionBoard.setPiece(rowIndex, colIndex, 0);
    }
  }

  helper(n, 0, solutionBoard);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// Return the number of nxn chessboards that exist, with n rooks placed such that none
// of them can attack each other.
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; // fixme
  var solutionBoard = new Board(makeEmptyBoardMatrix(n));

  var helper = function(n, rowIndex, solutionBoard) {
    if(rowIndex === n) {
      solutionCount++;
      return;
    }

    for(var colIndex = 0; colIndex < n; colIndex++){
      solutionBoard.setPiece(rowIndex, colIndex, 1);
      if(solutionBoard.hasAnyRooksConflicts() === false) {
        helper(n, rowIndex + 1, solutionBoard);
      }
      solutionBoard.setPiece(rowIndex, colIndex, 0);
    }
  }

  helper(n, 0, solutionBoard);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n queens placed such that none of them can attack each other.
// (If no solution, return an empty matrix.)
window.findNQueensSolution = function(n) {
  var solution = makeEmptyBoardMatrix(n);
  var solutionBoard = new Board(solution);
  var found = false;
  //helper adds a piece to a possible position at rowIndex
  //if rowIndex == n
    //return
  //check if a piece could be put at given rowIndex, colIndex
  var helper = function(n, rowIndex, solutionBoard) {
    if(rowIndex === n) {
      solution = solutionBoard.allRowsCopy();
      found = true;
      return;
    }

    for(var colIndex = 0; colIndex < n && !found; colIndex++){
      solutionBoard.setPiece(rowIndex, colIndex, 1);
      if(solutionBoard.hasAnyQueensConflicts() === false) {
        helper(n, rowIndex + 1, solutionBoard);
      }
      solutionBoard.setPiece(rowIndex, colIndex, 0);
    }
  }

  helper(n, 0, solutionBoard);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// Return the number of nxn chessboards that exist, with n queens placed such that none
// of them can attack each other.
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; // fixme
  var solutionBoard = new Board(makeEmptyBoardMatrix(n));

  var helper = function(n, rowIndex, solutionBoard) {
    if(rowIndex === n) {
      solutionCount++;
      return;
    }

    for(var colIndex = 0; colIndex < n; colIndex++){
      solutionBoard.setPiece(rowIndex, colIndex, 1);
      if(solutionBoard.hasAnyQueensConflicts() === false) {
        helper(n, rowIndex + 1, solutionBoard);
      }
      solutionBoard.setPiece(rowIndex, colIndex, 0);
    }
  }
  
  helper(n, 0, solutionBoard);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

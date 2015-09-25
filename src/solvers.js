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
  var board = new Board({"n" : n});
  var start = performance.now();
  function recurseSol(rowIndex){
    if(rowIndex>=n){
      return true;
    }
    for(var colIndex = 0; colIndex < n; colIndex++){
      board.togglePiece(rowIndex, colIndex);
      if(!board.hasColConflictAt(colIndex)){
        if(recurseSol(rowIndex+1)){
          return true;
        }
        board.togglePiece(rowIndex, colIndex);
      }else{
        board.togglePiece(rowIndex, colIndex);
      }
    }
    return false;
  }
  recurseSol(0);
  var end = performance.now();
  console.log("findNRooksSolution took "+ (end-start) + "milliseconds to finish for a board of size "+n);
  board = board.allRowsCopy();
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board;
};


// Return the number of nxn chessboards that exist, with n rooks placed such that none
// of them can attack each other.
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; // fixme
  var start = performance.now();
  var board = new Board({"n" : n});

  function recurseSol(rowIndex) {
    if(rowIndex >= n) {
      // window.displayBoard(board.allRowsCopy());
      solutionCount++;
      return;
    }

    for(var colIndex = 0; colIndex < n; colIndex++) {
      board.togglePiece(rowIndex, colIndex);
      if(!board.hasColConflictAt(colIndex)) {
        recurseSol(rowIndex + 1);
      }
      board.togglePiece(rowIndex, colIndex);
    }
  }

  recurseSol(0);
  var end = performance.now();
  console.log("countNRooksSolution took "+ (end-start) + "milliseconds to finish for a board of size "+n);
  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n queens placed such that none of them can attack each other.
// (If no solution, return an empty matrix.)
window.findNQueensSolution = function(n) {
  var board = new Board({"n" : n});
  var start = performance.now();
  function recurseSol(rowIndex){
    if(rowIndex>=n){
      return true;
    }
    for(var colIndex = 0; colIndex < n; colIndex++){
      board.togglePiece(rowIndex, colIndex);
      // if(!board.hasAnyQueensConflicts(rowIndex, colIndex)){
        if(!board.hasColConflictAt(colIndex) && 
         !board.hasMajorDiagonalConflictAt(board._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) &&
         !board.hasMinorDiagonalConflictAt(board._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))){
          if(recurseSol(rowIndex+1)){
            return true;
          }
          board.togglePiece(rowIndex, colIndex);
        }else{
          board.togglePiece(rowIndex, colIndex);
        }
      }
      return false;
    }
    recurseSol(0);
    var end = performance.now();
    console.log("findNQueensSolution took "+ (end-start) + "milliseconds to finish for a board of size "+n);
    board = board.allRowsCopy();
    console.log('Single solution for ' + n + ' queens:', JSON.stringify(board));
    return board;
  };


// Return the number of nxn chessboards that exist, with n queens placed such that none
// of them can attack each other.
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; // fixme
  var board = new Board({"n" : n});
  var start = performance.now();
  function recurseSol(rowIndex) {
    if(rowIndex >= n) {
      window.displayBoard(board.allRowsCopy());
      solutionCount++;
      return;
    }

    for(var colIndex = 0; colIndex < n; colIndex++) {
      board.togglePiece(rowIndex, colIndex);
      if(!board.hasColConflictAt(colIndex) && 
       !board.hasMajorDiagonalConflictAt(board._getFirstRowColumnIndexForMajorDiagonalOn(rowIndex, colIndex)) &&
       !board.hasMinorDiagonalConflictAt(board._getFirstRowColumnIndexForMinorDiagonalOn(rowIndex, colIndex))){
        recurseSol(rowIndex + 1);
    }
    board.togglePiece(rowIndex, colIndex);
  }
}

recurseSol(0);
var end = performance.now();
console.log("countNQueensSolution took "+ (end-start) + "milliseconds to finish for a board of size "+n);
console.log('Number of solutions for ' + n + ' queens:', solutionCount);
return solutionCount;
};

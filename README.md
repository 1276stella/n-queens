# n-queens

## The problem in a nutshell

Given an _n x n_ chessboard, how many different ways can you place _n_ queens, such that none of them can attack each other?

## For your consideration

Pondering the following questions (in order) will help you conceptualize a solution:

- [ ] Given an _n x n_ chessboard, how would you place _n_ rooks such that none of them can attack each other?
- [ ] Given an _n x n_ chessboard, how many different ways can you place _n_ rooks, such that none of them can attack each other?
- [ ] Given an _n x n_ chessboard, how would you place _n_ queens such that none of them can attack each other?
- [ ] Given an _n x n_ chessboard, how many different ways can you place _n_ queens, such that none of them can attack each other?

You'll run into some questions like this (but easier) during some interviews, and during
your day-to-day work. This repo is a playground for thinking about this kind of problem.

## Helpful Groundwork:

To get started, we've provided a visualizer for your algorithms. Most algorithm questions are posed abstractly,
but this Backbone app will help you see what's going on inside your code easier. We created it to help you
visualize the solution.

To make use of it, open `BoardViewer.html`. You'll have to implement the conflict detection functions in
`src/Board.js` (which are a portion of the full solution anyway).

## Basic Requirements:

Some of the helper functions in `src/Board.js` have been completed for you, and some have not. You should
only need to edit the functions listed below.

- [ ] Open `src/Board.js` and fix the incomplete helpers, such that the specs in `spec/BoardSpec.js` pass.
      To see if your specs are passing, open `SpecRunnner.html` and look at the 'Board' section. Doing so will help
      you understand the problem more thoroughly, and will make the visualizer start to show conflicts on the board
      when they are present.
  - [ ] **hasRowConflictAt()** - test if a specific row on this board contains a conflict
  - [ ] **hasAnyRowConflicts()** - test if any rows on this board contain conflicts
  - [ ] **hasColConflictAt()** - test if a specific column on this board contains a conflict
  - [ ] **hasAnyColConflicts()** - test if any columns on this board contain conflicts
  - [ ] **hasMajorDiagonalConflictAt()** - test if a specific major diagonal on this board contains a conflict
  - [ ] **hasAnyMajorDiagonalConflicts()** - test if any major diagonals on this board contain conflicts
  - [ ] **hasMinorDiagonalConflictAt()** - test if a specific minor diagonal on this board contains a conflict
  - [ ] **hasAnyMinorDiagonalConflicts()** - test if any minor diagonals on this board contain conflicts
- [ ] Fill in the functions in `src/solvers.js`. Fill them out so they accomplish the stated goals and pass the
      tests in `spec/solversSpec.js`!
  - [ ] **findNRooksSolution()** - returns a single solution to the n-rooks problem.
  - [ ] **countNRooksSolutions()** - returns a count of the total number of solutions to the n-rooks problem.
  - [ ] **findNQueensSolution()** - returns a single solution to the n-queens problem.
  - [ ] **countNQueensSolutions()** - returns a count of the total number of solutions to the n-queens problem.

## Helpful Info

- Don't reinvent the wheel where you don't have to. Use the Board constructor you build out in `src/Board.js` in your code. You can also access it within the Chrome console easily after opening `BoardViewer.html`
  - Create new board instances with that have access to all the helper methods you write (in `src/Board.js`) in your code
    - example: `var board = new Board({n:5})`
  - Note how the getPiece() and setPiece() convenience functions use the native getters that Backbone provides.
    - example: `board.get(3)` will return the 3rd row of the instance `board` (assuming you created that instance)
- **Rows** run horizontally, left to right
- **Columns** run vertically, top to bottom
- **Major Diagonals** run diagonally, top-left to bottom-right
- **Minor Diagonals** run diagonally, top-right to bottom-left
- The [rook] moves horizontally (along rows) or vertically (along columns), through any number of unoccupied squares.
- The [queen] moves horizontally (along rows), vertically (along columns), or diagonally (along major and minor diagonals).

![row](https://f.cloud.github.com/assets/1577682/1257423/0f26258e-2ba7-11e3-9808-b39041c2e1a2.png)
![column](https://f.cloud.github.com/assets/1577682/1257424/0f2e9dcc-2ba7-11e3-82fc-ff8fb7bfc324.png)
![major](https://f.cloud.github.com/assets/1577682/1257421/0ef7f588-2ba7-11e3-9cbc-577d3ad20bb1.png)
![minor](https://f.cloud.github.com/assets/1577682/1257422/0f127a66-2ba7-11e3-9196-221f65cf03e3.png)


## Extra credit:

- [ ] Identify the time complexity of the .hasAnyQueensConflicts() method
- [ ] Optimize your solvers. Here are some ideas:
    - [ ] Consider the memory usage of your solver:
        - Do you have to allocate and duplicate an entire board?
        - Can you re-use the board?
        - Can you get by with less information?
    - [ ] Consider what work you can avoid doing:
        - Do you do any work that you can tell will be fruitless earlier in the algorithm?
        - How much time is spent working on paths which are obviously wrong?
- [ ] Profile and improve your code. Notate changes in your commit messages.
- [ ] What symmetries can you exploit to optimize your solution?
- [ ] Implement a solution using bitwise operators
    - [ ] Read some of these additonal resources about bitwise operations:
        - [Wikipedia](http://en.wikipedia.org/wiki/Bitwise_operation)
        - [Tutorial](http://www.cprogramming.com/tutorial/bitwise_operators.html)
          - This tutorial is in C, another programming language where bitwise
            operators are more common, but is also applicable to javascript.
        - [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
    - [ ] Try devising your own bitshifting solution
    - [ ] Implement the algorithm found in this [academic paper]

## Nightmare Mode
- [ ] Parallelize your solution using HTML5 web workers

[Chess]:https://en.wikipedia.org/wiki/Chess
[rook]:https://en.wikipedia.org/wiki/Rook_(chess)
[queen]:https://en.wikipedia.org/wiki/Queen_(chess)
[academic paper]:http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.51.7113&rep=rep1&type=pdf

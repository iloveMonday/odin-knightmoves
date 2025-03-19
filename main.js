//adjacency list
//build queue

//knightMoves(start,end)
//returns all steps for shortest path

// let board = []

function buildGrid(size = 8) {
  let board = [];

  for (let i = 0; i < size; i++) {
    board.push([]);

    for (let j = 0; j < size; j++) {
      board[i].push([i,j]);
      // possibleMoves(board)
    }
  }

  return board;
}

function findNextMove(index, x, y) {
    if (index == 0) return [x+2, y+1];
    if (index == 1) return [x+1, y+2];
    if (index == 2) return [x-1, y+2];
    if (index == 3) return [x-2, y+1];
    if (index == 4) return [x-2, y-1];
    if (index == 5) return [x-1, y-2];
    if (index == 6) return [x+1, y-2];
    if (index == 7) return [x+2, y-1];
}


function possibleMoves(board, size = board.length) {
    let adjList = board

  for (i = 0; i < board.length; i++) {

    for (j = 0; j < size; j++) {
      if (i + 2 < size && j + 1 < size) {
        adjList[i][j].push([i + 2, j + 1]);
      }
      if (i + 2 < size && j - 1 >= 0) {
        adjList[i][j].push([i + 2, j - 1]);
      }
      if (i - 2 >= 0 && j + 1 < size) {
        adjList[i][j].push([i - 2, j + 1]);
      }
      if (i - 2 >= 0 && j - 1 >= 0) {
        adjList[i][j].push([i - 2, j - 1]);
      }
      if (i + 1 < size && j + 2 < size) {
        adjList[i][j].push([i + 1, j + 2]);
      }
      if (i + 1 < size && j - 2 >= 0) {
        adjList[i][j].push([i + 1, j - 2]);
      }
      if (i - 1 >= 0 && j + 2 < size) {
        adjList[i][j].push([i - 1, j + 2]);
      }
      if (i - 1 >= 0 && j - 2 >= 0) {
        adjList[i][j].push([i - 1, j - 2]);
      }
    }
  }
  return adjList;
}

// function findPosition(possMoves, position){
//     let board = possMoves;
//     return board[position[0]][position[1]]

// }

function findIndex(array, target){
    for (let i = 0; i < array.length; i++){
        if (array[i][0] === target[0] && array[i][1] === target[1]){
            return i;
        }
    }
}

// function buildInfoArray(board, startIndex){
//     let newArr = [];
//     for (let i = 0; i < board.length; i++){
//         newArr[i] = {
//             distance: null,
//             predecessor: null
//         }
//     }
//     newArr[startIndex].distance = 0;
//     return newArr;
// }






function test(start = [1,0], end = [0,2]) {
  let board = buildGrid();
  let moves = possibleMoves(buildGrid());
//   let moves = possibleMoves(board)
//   let startIndex = findPosition(moves, start)
    // let startIndex = findIndex(moves, start);
    // let  startIndex = start;
    // let bfsInfo = buildInfoArray(moves, startIndex)
    // let queue = [startIndex]

//   return startIndex;
// return board;
return moves;
}


///// THE QUEUE

let Queue = function() {
    this.items = [];
};
Queue.prototype.enqueue = function(obj) {
    this.items.push(obj);
};
Queue.prototype.dequeue = function() {
    return this.items.shift();
};
Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
};


///// BFS PROTOTYPE

let doBFS = function(board, start) {
    let bfsInfo = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++){
	    bfsInfo[i][j] = {
	        distance: null,
	        predecessor: null };
        }
    }

    bfsInfo[start].distance = 0;

    let queue = new Queue();
    queue.enqueue(start);
    //
    
    while (!queue.isEmpty()){
        let vert = queue.dequeue();
        
        for(let u = 0; u < board[vert].length; u++){
            let neighbor = board[vert][u];
            
            
            if (bfsInfo[neighbor].distance === null){
                bfsInfo[neighbor].distance = bfsInfo[vert].distance+1;
                bfsInfo[neighbor].predecessor = vert;
                queue.enqueue(neighbor);
            }
        }
    }
}







function knightMoves(start, end) {

}

// console.log(buildGrid());

console.log(test())
// console.log(knightMoves([0,0], [4,2]))

//[x]build a board
//[x]build possibleMoves that returns adjList as new array of board with all possible moves
//navigate to start array, save as var, same with end
//bfsInfo
// ---- function for finding next move, function for checking if it is on the board SEPARATE!
// build a queue - starting with startIndex
// variable u? with u != endIndex, u = queue.shift();
//once endIndex found, build constructPath function - see each item's predecessor - .reverse()

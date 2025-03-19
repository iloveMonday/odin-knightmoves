//adjacency list
//build queue

//knightMoves(start,end)
//returns all steps for shortest path

// let board = []

function buildGrid(size = 8) {
  let board = [];
  for (let i = 0; i < size; i++) {
    // board.push([]);
    for (let j = 0; j < size; j++) {
      board.push([i,j]);
    }
  }
  return board;
}

function findIndex(array, target){
    for (let i = 0; i < array.length; i++){
        if (array[i][0] === target[0] && array[i][1] === target[1]){
            return i;
        }
    }
}

function containsMove(array, target){
    if (array.find(element => element[0] === target[0]) &&
        array.find(element => element[1] === target[1])){
            return true;
        }
}

function findNextMove(index, x, y) {
    if (index == 0) return [x + 2, y + 1];
    if (index == 1) return [x + 1, y + 2];
    if (index == 2) return [x - 1, y + 2];
    if (index == 3) return [x - 2, y + 1];
    if (index == 4) return [x - 2, y - 1];
    if (index == 5) return [x - 1, y - 2];
    if (index == 6) return [x + 1, y - 2];
    if (index == 7) return [x + 2, y - 1];
}

function buildInfoArray(board, startIndex){
    let newArr = [];
    for (let i = 0; i < board.length; i++){
        newArr[i] = {
            distance: null,
            predecessor: null
        }
    }
    newArr[startIndex].distance = 0;
    return newArr;
}


function buildAdjList(board){
    let adjList = [];
    for (let i = 0; i < board.length; i++){
        let moves = [];
        for (let j = 0; j < 8; j++){
            let move = findNextMove(j, board[i][0], board[i][1]);
            if (containsMove(board, move)) {
                moves.push(findIndex(board, move));
            }
        }
        adjList[i] = moves;
    }
    return adjList;
}

function constructPath(board, infoArray, item, index, newArray){
    if (item.predecessor === null) return;
    if (item.predecessor != null) {
        newArray.push(board[index]);
        constructPath(board, infoArray[item.predecessor], item.predecessor, newArray);
    }
}



function knightMoves(start = [1,0], end = [5,5]) {
    let board = buildGrid();
    let startIndex = findIndex(board, start);
    let endIndex = findIndex(board, end);
    let bfsInfo = buildInfoArray(board, startIndex);
    let adjList = buildAdjList(board);
    let queue= [startIndex]; 
    let u;
//   return adjList;

    while (u != endIndex){
        //set first element of queue to u
        u = queue.shift();

        //iterate through each neighbor v of u
        for (let i=0; i<adjList[u].length; i++){
            let vIndex = adjList[u][i];
            //if the neighbor index is the end square, build & return path
            if (vIndex === endIndex){
                bfsInfo[vIndex].predecessor = u;
                let path = [];
                constructPath(board, bfsInfo, bfsInfo[vIndex], vIndex, path);
                result = path.reverse().splice(0,0, start);
                console.log(`You made it ${path.length - 1} moves! Here's your path dude: `);
                return path;
            } else {
                //update info for neighbor square and enqueue
                if (bfsInfo[vIndex].distance == null){
                    bfsInfo[vIndex].distance = bfsInfo[u].distance +1;
                    bfsInfo[vIndex].predecessor = u;
                    queue.push(vIndex);
                }
            }
        }
    }
  }





// console.log(buildGrid());

console.log(knightMoves())
// console.log(knightMoves([0,0], [4,2]))

//[x]build a board
//[x]build possibleMoves that returns adjList as new array of board with all possible moves
//navigate to start array, save as var, same with end
//bfsInfo
// ---- function for finding next move, function for checking if it is on the board SEPARATE!
// build a queue - starting with startIndex
// variable u? with u != endIndex, u = queue.shift();
//once endIndex found, build constructPath function - see each item's predecessor - .reverse()

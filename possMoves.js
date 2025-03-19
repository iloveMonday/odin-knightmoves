//[x]build a board that just has coordinate in an array of each location
//navigate to start array, save as var, do same for end
//bfsInfo
//adjList function is new array of gameboard with all possible moves
// ---- function for finding next move, function for checking if it is on the board SEPARATE!
// build a queue - starting with startIndex
// variable u? with u != endIndex, u = queue.shift();
//once endIndex found, build constructPath function - see each item's predecessor - .reverse()





function buildGrid(){
    let board = []

    for (let i = 0; i < 8; i++){
        board.push([]);

        for (let j = 0; j < 8; j++){
            board[i].push([i, j]);
        }
    }
    return board
}

function findArray(index, target){
    let space = []
    for (i = 0; i < index.length; i++){
        if (index[i] === target[0]){
            space.push(i);

            for (j=0; j < index[i].length; j++){
                if (index[i][1] === target[i][1]){
                    space.push(j);
                }
            }
        }
        return space;
    }
}


function test(){
    let board = buildGrid()
    let hey = findArray(board, [2,2])

    return hey;
}



function possibleMoves(){
    for (let j = 0; j < size; j++){
        board[i].push([]);

        if ((i+2 < size) && (j+1 < size)){
            board[i][j].push([i+2, j+1]);
        }
        if ((i+2 < size) && (j-1 >= 0)){
            board[i][j].push([i+2, j-1]);
        }
        if ((i-2 >= 0) && (j+1 < size)){
            board[i][j].push([i-2, j+1]);
        }
        if ((i-2 >= 0) && (j-1 >= 0)){
            board[i][j].push([i-2, j-1]);
        }
        if ((i+1 < size) && (j+2 < size)){
            board[i][j].push([i+1, j+2]);
        }
        if ((i+1 < size) && (j-2 >= 0)){
            board[i][j].push([i+1, j-2]);
        }
        if ((i-1 >= 0) && (j+2 < size)){
            board[i][j].push([i-1, j+2]);
        }
        if ((i-1 >= 0) && (j-2 >= 0)){
            board[i][j].push([i-1, j-2]);
        }
}
}


console.log(buildGrid())
console.log(test())







///// THE QUEUE

// let Queue = function() {
//     this.items = [];
// };
// Queue.prototype.enqueue = function(obj) {
//     this.items.push(obj);
// };
// Queue.prototype.dequeue = function() {
//     return this.items.shift();
// };
// Queue.prototype.isEmpty = function() {
//     return this.items.length === 0;
// };


///// BFS PROTOTYPE

// let doBFS = function(board, start) {
//     let bfsInfo = [];

//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board.length; j++){
// 	    bfsInfo[i][j] = {
// 	        distance: null,
// 	        predecessor: null };
//         }
//     }

//     bfsInfo[start].distance = 0;

//     let queue = new Queue();
//     queue.enqueue(start);
//     //
    
//     while (!queue.isEmpty()){
//         let vert = queue.dequeue();
        
//         for(let u = 0; u < board[vert].length; u++){
//             let neighbor = board[vert][u];
            
            
//             if (bfsInfo[neighbor].distance === null){
//                 bfsInfo[neighbor].distance = bfsInfo[vert].distance+1;
//                 bfsInfo[neighbor].predecessor = vert;
//                 queue.enqueue(neighbor);
//             }
//         }
//     }
// }
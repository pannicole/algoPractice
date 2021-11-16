/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  //check rows
  for(let row = 0; row < board.length; row++){
    if(!repeats(board[row])){
      return false
    }
  }
  //check columns
  for(let col = 0; col < board.length; col++){
    let newCol = []
    for(let i = 0; i < board.length; i++){
      newCol.push(board[i][col])
      }
    if(!repeats(newCol) ){
      return false
    }
  }

  let squares = [[0, 0], [3, 0], [6, 0], [0, 3], [3, 3], [6, 3], [0, 6], [3, 6], [6, 6]]
  //check squares
  for(let start in squares){
    let [x, y] = squares[start]
    let row = []
    for(let i = 0; i < 3; i++){
      for(let j = 0; j < 3; j++){
        row.push(board[i+x][j+y])
      }
    }
    if(!repeats(row)){
        return false
    }
  }


  return true
};

function repeats(array){
  let hash = {}
  let newArray = array.filter( (ele) => ele !== ".")
  for(let i = 0; i < newArray.length; i++){
    if(!hash[newArray[i]]){
      hash[newArray[i]] = 1
    } else {
      return false
    }
  }
  for(let j in Object.keys(hash)){
    if(j < 0 || j > 9){
      return false
    }
  }
  return true
}

// console.log(repeats([1, 1, 3, 4, 5, 6, 7]))
let board =
[[".","2",".",".",".",".",".",".","."]
,[".",".",".",".",".",".","5",".","1"]
,[".",".",".",".",".",".","8","1","3"]
,["4",".","9",".",".",".",".",".","."]
,[".",".",".",".",".",".",".",".","."]
,[".",".","2",".",".",".",".",".","."]
,["7",".","6",".",".",".",".",".","."]
,["9",".",".",".",".","4",".",".","."]
,[".",".",".",".",".",".",".",".","."]]

console.log(isValidSudoku(board))

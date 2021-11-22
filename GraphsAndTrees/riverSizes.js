function riverSizes(matrix) {
  let result = []
	for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[0].length; col++){
      let stack = []
      let riverSize = 0
      stack.push([row, col])
      while(stack.length){
        let [currRow, currCol] = stack.shift()
        if(matrix[currRow][currCol] === 1){
          riverSize++
          matrix[currRow][currCol] = 0
          if(currRow < matrix.length - 1){
            stack.push([currRow + 1, currCol])
          }
          if(currCol < matrix[0].length - 1){
            stack.push([currRow, currCol + 1])
          }
          if(currRow > 0){
            stack.push([currRow - 1, currCol])
          }
          if(currCol > 0){
            stack.push([currRow, currCol - 1])
          }
        }
      }
      if(riverSize > 0){
        result.push(riverSize)
      }
    }
  }
  return result
}

let matrix = [ [1, 0, 0], [1, 0, 0] , [0 ,0, 1]]
console.log(riverSizes(matrix))

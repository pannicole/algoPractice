function wallsAndGates(arr){
  const WALL = -1
  const GATE = 0
  const MAXROW = arr.length
  const MAXCOL = arr[0].length

  let gates = []
  for(let row = 0; row < MAXROW; row++){
    for(let col = 0; col < MAXCOL; col++){
      if(arr[row][col] === GATE) {
          gates.push([row, col])
      }
    }
  }
  let queue = gates
  while(queue.length > 0){
    let [currRow, currCol] = queue.shift()
    let spaces = canMoveTo(currRow, currCol, MAXROW, MAXCOL, arr)
    queue.push(...spaces)
  }
  return arr
}

function canMoveTo(row, col, maxRow, maxCol, arr){
  const INF = (2 ** 31) - 1
  let directions = [ [0, -1], [0, 1], [-1, 0], [1, 0] ]
  let children = []
  for(dir of directions){
    let nextRow = row + dir[0]
    let nextCol = col + dir[1]
    if(nextRow >= 0 && nextRow < maxRow && nextCol >= 0 && nextCol < maxCol){
      if(arr[nextRow][nextCol] === INF){
        children.push( [nextRow, nextCol])
        arr[nextRow][nextCol] = arr[row][col] + 1
      }
    }
  }
  return children
}



let arr =  [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]

// console.log(wallsAndGates(arr))

let arr2= []
console.log(arr2.length === 1)

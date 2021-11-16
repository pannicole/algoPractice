function grid (n, m, state) {
  let grid = []
  for (let i = 0; i < n; i++){
    grid.push(Array(m).fill(0))
  }

  for(cell in state){
    let [x, y] = state[cell]
    grid[x][y] = 1
  }

  return grid
}

//returns the number of live neighbors
function neighbors(grid, cell){
  let [x, y] = cell
  if(x < 0 || x >= grid.length){
    return 0
  }
  if(y < 0 || y >= grid[0].length){
    return 0
  }

  let numNeighbors = 0

  let minX = Math.max(0, x-1)
  let minY = Math.max(0, y-1)
  let maxX = Math.min(grid.length - 1, x+1)
  let maxY = Math.min(grid[0].length - 1, y+1)
  for(let i = minX; i <= maxX; i++){
    for(let j = minY; j <= maxY; j++){
      if(!(i == x && j == y)){
        numNeighbors += grid[i][j]
      }
    }
  }
  return numNeighbors

}

let initialState = [[1, 2], [2, 2], [3, 2]]
let gameGrid = grid(5, 5, initialState)

// neighbors(gameGrid, [0, 0])
// neighbors(gameGrid, [1, 1])
// neighbors(gameGrid, [4, 4])
// neighbors(gameGrid, [8, 3])
// neighbors(gameGrid, [3, 3])
// neighbors(gameGrid, [2, 1])


function conway(grid) {
  let newGrid = []
  for(let i = 0; i < grid.length; i++){
    let newRow = []
    for(let j = 0; j < grid[0].length; j++){
      let numNeighbors = neighbors(grid, [i, j])
      if(grid[i][j] === 1){
        if(numNeighbors >=  4 || numNeighbors < 2){
          newRow.push(0)
        } else{
          newRow.push(1)
        }
      } else{
        if(numNeighbors === 3){
          newRow.push(1)
        } else {
          newRow.push(0)
        }
      }
    }
    newGrid.push(newRow)
  }
  return newGrid
}

let next = conway(gameGrid)
conway(next)

// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.

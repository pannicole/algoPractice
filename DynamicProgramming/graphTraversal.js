function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.
  // create two dimensional array
  // start out with 1 x 1: [[0, 1], [1, 2]] and build up from there
  // the # of ways to that node is [i-1][j] + [i][j-1]
  let paths = []

  for(let i = 0; i < height; i++){
      paths.push(Array(width).fill(0))
  }

  for(let i = 0; i < height; i++){
    for(let j = 0; j < width; j++){
      console.log(paths)
      if(i === 0 && j === 0){
        paths[i][j] = 0
      } else if (i === 0 || j === 0) {
        paths[i][j] = 1
      } else {
        paths[i][j] = paths[i-1][j] + paths[i][j-1]
      }

    }
  }

  return paths[height - 1][width - 1];
}

console.log(numberOfWaysToTraverseGraph(3, 2))

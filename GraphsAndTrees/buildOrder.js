function buildOrder(projects, dependencies){
  let index = {}
  let numberOfDependencies = Array(projects.length).fill(0)
  let adjacencyMatrix = []
  for(let i = 0 ; i < projects.length; i ++){
    index[projects[i]] = i
    adjacencyMatrix.push(Array(projects.length).fill(0))
  }
  for(let j = 0; j < dependencies.length; j++){
    let p1 = index[dependencies[j][0]]
    let p2 = index[dependencies[j][1]]
    adjacencyMatrix[p1][p2] = 1
    numberOfDependencies[p2] += 1
  }
  console.log(numberOfDependencies)
  console.log(adjacencyMatrix)

  while(numberOfDependencies.includes(0)){
    let canComplete = numberOfDependencies.findIndex( (ele) => ele === 0)
    for( let i in adjacencyMatrix[canComplete]){
      console.log(adjacencyMatrix[canComplete][i])
    }
    numberOfDependencies.splice(canComplete, 1)
  }
}

let dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]
console.log(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], dependencies))

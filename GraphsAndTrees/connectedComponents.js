function connectedComponents(n, array){
  let visited = {}
  let output = 0
  let edges = {}
  for(edge of array){
    let [start, end] = edge
    edges[start] = edges[start] ? ([...edges[start], end]) : [end]
    edges[end] = edges[end] ? ([...edges[end], start]) : [start]
  }
  for(let node = 0; node < n; node++){
    if(!edges[node]){
      output++
      visited[node] = true
    }
    else if(!(node in visited)){
      dfs(node, edges, visited)
      output++
    }
  }
  return output
}
function dfs(node, edges, visited){
  let children = edges[node]
  visited[node] = true
  for(child of children){
    if(!visited[child]){
      dfs(child, edges, visited)
    }
  }
}

let n = 4
let edges = [ [2, 3], [1, 2], [1, 3] ]

console.log(connectedComponents(n, edges))

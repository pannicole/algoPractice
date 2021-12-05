function cycleInGraph(edges) {
	let visited = {}
	for(let node in edges){
		if(!visited[node]){
			if(dfs(node, edges, {}, visited)){
				return true
			}
		}
	}
  return false;
}


function dfs(node, edges, path, visited){
	if(path[node]){
		return true
	}
	path[node] = true
 	for(let neighbor of edges[node]){
		if(dfs(neighbor, edges, path, visited)){
			visited[node] = true
			return true
		}
	}
	visited[node] = true
	path[node] = false
	return false
}

function buildOrder(projects, dependencies){
  let graph = new Graph([...projects], [...dependencies])
  let order = []
  while(graph.nodesWithNoDependencies()){
    let nodeToRemove = graph.nodesWithNoDependencies()
    if(!nodeToRemove){
      return "No Build Order Possible"
    }
    if(graph.incomingEdges(nodeToRemove)){
      let edgesToRemove = [...graph.incomingEdges(nodeToRemove)]
      for(let i = 0; i < edgesToRemove.length; i++){
        graph.removeEdge(edgesToRemove[i] ,nodeToRemove)
      }
    }
    order.push(nodeToRemove)
    graph.deleteNode(nodeToRemove)
  }
  return (order.length == projects.length) ? order : "No Build Order Possible"
}

class Graph {
  constructor(nodes, dependencies){
    this.nodes = nodes
    this.outgoing = {}
    this.incoming = {}
    for (let i in dependencies){
      let key = dependencies[i][1]
      let value = dependencies[i][0]
      if(this.outgoing[key]){
        this.outgoing[key] = [... this.outgoing[key], value]
      } else{
        this.outgoing[key] = [value]
      }

      if(this.incoming[value]){
        this.incoming[value] = [... this.incoming[value], key]
      } else{
        this.incoming[value] = [key]
      }
    }
  }


  outgoingEdges = (node) => {
    return this.outgoing[node]
  }

  incomingEdges = (node) => {
    return this.incoming[node]
  }

  deleteNode = (node) => {
    delete this.outgoing[node]
    if(this.nodes.includes(node)){
      this.nodes.splice(this.nodes.findIndex( ele => ele == node), 1)
    }
  }

  removeEdge(nodeA, nodeB){
    this.incoming[nodeB] = this.incoming[nodeB].filter (ele => ele != nodeA)
    this.outgoing[nodeA] = this.outgoing[nodeA].filter (ele => ele != nodeB)
  }

  nodesWithNoDependencies() {
    for(let node in this.nodes){
      if(!this.outgoing[this.nodes[node]]){
        return this.nodes[node]
      }
      if(this.outgoing[this.nodes[node]].length == 0){
        return this.nodes[node]
      }
    }
    return false
  }
}

let dependencies = [['a', 'd'], ['f', 'b'], ['b', 'd'], ['f', 'a'], ['d', 'c']]
console.log(buildOrder(['a', 'b', 'c', 'd', 'e', 'f'], dependencies))

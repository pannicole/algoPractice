function dfs(root, target, path = []){
  if(root === target){
      return path
  }
  else if (root === null){
      return false
  }
  else {
      path = [...path, root]
      return dfs(root.left, target, path) || dfs(root.right, target, path)
  }
}

function bfs(root, target){
  let queue = [[root]]

  while(queue.length){
    let path = queue.shift()
    let node = path[path.length - 1]
    if( node === target){
      return path
    }
    if(node === null){
      continue
    }
    else {
      queue.push([...path, node.left])
      queue.push([...path, node.right])
    }
  }
  return path
}

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

node1.left = node3
node1.right = node2
node3.left = node7
node3.right = node4
node7.left = node5
node5.left = node6

console.log(bfs(node1, node2))

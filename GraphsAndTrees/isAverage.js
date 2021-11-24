class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function isAverage(tree){
  if(tree.left === null && tree.right === null){
    return true
  } else if(tree.left === null){
    return (tree.value === tree.right.value)
  } else if(tree.right === null){
    return (tree.value === tree.left.value)
  } else {
    let avg = (tree.left.value +  tree.right.value) / 2
    console.log(avg, tree.left.value, tree.right.value)
    return (avg === tree.value) && isAverage(tree.left) && isAverage(tree.right)
  }
}

let node1 = new Node(10)
let node2 = new Node(10)
let node3 = new Node(10)
let node4 = new Node(4)
let node5 = new Node(6)
let node6 = new Node(14)
let node7 = new Node(16)

node1.left = node2
node1.right = node3
// node2.left = node4
// node2.right = node5
// node3.left = node6
// node3.right = node7

console.log(isAverage(node1))

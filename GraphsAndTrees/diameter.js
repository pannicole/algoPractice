class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  let check = [tree]
  function recurse(tree){
    if(tree === null) {
      return 0
    }
    if(tree.left === null && tree.right === null){
      return 1
    } else {
      check.push(tree)
        return 1 + Math.max(recurse(tree.left), recurse(tree.right))
    }
  }

  let number = 0
  while(check.length > 0){
    let nodeToCheck = check.pop()
    let nodeToCheckPath = recurse(nodeToCheck.left) + recurse(nodeToCheck.right)
    number = (nodeToCheckPath > number) ? (nodeToCheckPath) : (number)
  }
  return number
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
// node5.left = node6

console.log(binaryTreeDiameter(node1))

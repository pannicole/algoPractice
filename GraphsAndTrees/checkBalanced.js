class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}


/**
 * @param {node} n
 * @returns {boolean} b
 */

function isBalanced(head) {
  let leftHeight = height(head.left)
  let rightHeight = height(head.right)
  return (Math.abs(leftHeight - rightHeight) < 2)

  function height(node){
    if(node == null){
      return 0
    } else if(node.left == null && node.right == null) {
      return 1
    } else if(node.right == null){
      return 1 + height(node.left)
    } else if(node.left == null){
      return 1 + height(node.right)
    } else {
      let left = 1 + height(node.left)
      let right = 1 + height(node.right)
      return (left > right) ? left : right
    }
  }
}


let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)
let node6 = new Node(6)
let node7 = new Node(7)

node4.left = node2
node4.right = node6
node2.left = node1
node2.right = node3
node6.left = node5
node6.right = node7

// console.log(node4)
console.log(isBalanced(node4))

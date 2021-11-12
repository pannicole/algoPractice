// Implement a function to check if a binary tree is a binary search tree
// in order traversal to get the value of each node in order
// if the array is sorted, then it is a BST

/**
 * @param {node} n
 * @returns {boolean}
 */

 class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}

class ListNode{
  constructor(value){
    this.value = value
    this.next = null
  }
}

function validateBST(n){
  let values = []
  inOrderTraversal(n)
  function inOrderTraversal(n){
    if(n.left){
      inOrderTraversal(n.left)
    }
    values.push(n.value)
    if(n.right){
      inOrderTraversal(n.right)
    }
  }

  for(let i= 0; i < values.length - 1; i++){
    if(values[i] > values[i+1]) {
      return false
    }
  }
  return true
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
console.log(validateBST(node4))

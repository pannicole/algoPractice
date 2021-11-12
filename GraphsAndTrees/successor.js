// Write an algorithm to find the "next" node of a given node in a binary search tree
// You may assume that each node has a link to its parent

/**
 * @param {node} n
 * @returns {node} next
 */

 class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }
}

class ListNode{
  constructor(value){
    this.value = value
    this.next = null
  }
}

function successor(n){
  if(n.parent == null && n.right == null){
    return "None"
  }
  if(n.right){
    let next = n.right
    while(next.left != null){
      next = next.left
    }
    return next.value
  } else {
    if(n.parent.value < n.value){
      let nextP = n.parent
      while (nextP != null && nextP.parent != null){
        if(nextP.parent.value < nextP.value){
          nextP = nextP.parent
        } else {
          return nextP.parent.value
        }
      }
      return "None"
    }
    return n.parent.value
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
node2.parent = node4
node4.right = node6
node6.parent = node4
node2.left = node1
node1.parent = node2
node2.right = node3
node3.parent = node2
node6.left = node5
node5.parent = node6
node6.right = node7
node7.parent = node6

// console.log(node4)

console.log(successor(node1))
console.log(successor(node2))
console.log(successor(node3))
console.log(successor(node4))
console.log(successor(node5))
console.log(successor(node6))
console.log(successor(node7))

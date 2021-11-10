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

/**
 * @param {array} l
 * @returns {node} n
 */

function listOfDepths(node) {
  let queue = [node]
  let linkedLists = []
  while(queue.length > 0){
    let children = []
    let listNext
    let first
    for(let i = 0; i < queue.length; i++){
      if(i==0){
        first = new ListNode(queue[0].value)
        listNext = first
      } else {
        let next = new ListNode(queue[i].value)
        listNext.next = next
        listNext = next
      }
      if (queue[i].left != null) {
        children.push(queue[i].left)
      }
      if (queue[i].right != null){
        children.push(queue[i].right)
      }
    }
    linkedLists.push(first)
    queue = children
  }
  return linkedLists
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
console.log(listOfDepths(node4))

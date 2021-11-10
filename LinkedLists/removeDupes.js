/**
 * @params {linkedlist} l
 */

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head
  }
}
function removeDupes(l) {
  let values = {}
  values[l.head.value] = 1
  let prev = l.head
  let curr = prev.next
  while(curr != null){
    if(values[curr.value]){
      prev.next = curr.next
      curr = curr.next
    } else {
      values[curr.value] = 1
      prev = curr
      curr = curr.next
    }
  }
  return l
}

let node1 = new Node(2)
let node2 = new Node(5)
let node3 = new Node(6)
let node4 = new Node(2)
let node5 = new Node(1)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
let list = new LinkedList(node1)

removeDupes(list)

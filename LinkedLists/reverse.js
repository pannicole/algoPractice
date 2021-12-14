// function reverse(head, prev){
//   if(!head || !head.next){
//     head.next = prev
//     return prev
//   }

//   let post = head.next
//   head.next = prev
//   reverse(post, head)
//   return post
// }



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

let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)
let node4 = new Node(4)
let node5 = new Node(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
let list = new LinkedList(node1, null)

reverse(node1)
console.log(node3)

function reverse(head){
  if(!head || !head.next){
    return head
  }
  let p = reverse(head.next)
  head.next.next = head
  head.next = null
  return p
}

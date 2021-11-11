// slow pointer and fast pointer
// if they meet, then there is a loop

//to get the node where the loop starts
//loop starts at point k and is LOOP_SIZE long
// after k steps, the slow pointer is at point k
// fast pointer is at 2k steps, so k into the loop
// fast pointer is LOOP_SIZE - k away from the slow pointer
// they will collide after LOOP_SIZE - k steps
// they will be k steps away from the start of the loop
// once they collide, move the slow pointer to the head
// the second collision is the start of the loop

/**
 * @params {linkedList} l
 *
 * Function returns true if linked list is palindrome
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

function startOfLoop(l) {
  let fast = slow = l.head
  let counter = 0
  while (fast != null && fast.next !=null){
    slow = slow.next
    fast = fast.next.next
    counter++
    if(fast == null){
      console.log('no loop')
      return 'No Loop'
    }
    else if (slow == fast){
      slow = l.head
      while(slow != fast){
        slow = slow.next
        fast = fast.next
      }
      console.log(slow.value)
      return slow.value
    }
  }
}

let node1 = new Node('a')
let node2 = new Node('b')
let node3 = new Node('c')
let node4 = new Node('d')
let node5 = new Node('e')
let node6 = new Node('f')
let node7 = new Node('g')
let node8 = new Node('h')


node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
node5.next = node6
node6.next = node7
node7.next = node8
node8.next = node5

let list = new LinkedList(node1)

startOfLoop(list)

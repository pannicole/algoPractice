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

// using a stack
function isPalindrome(l) {
  let stack = []
  let node = createStack = l.head

  while(createStack != null){
    stack = [createStack.value, ...stack]
    createStack = createStack.next
  }
  for(let i = 0; i < stack.length; i++){
    if(node.value !== stack[i]){
      return false
    }
    node = node.next
  }
  console.log(true)
  return true
}

// using fast/slow pointer
function isPalindromePointer(l){
  let fast = slow = l.head
  let stack = []
  while(fast != null && fast.next != null){
    stack = [slow.value, ...stack]
    slow = slow.next;
    fast = fast.next.next;
  }
  if( fast != null){
    slow = slow.next
  }

  let i = 0
  while(slow !=null){
    if(slow.value != stack[i]){
      console.log(false)
      return false
    }
    i++
    slow = slow.next
  }
  console.log(true)
  return true
}
//recurisvely
function isPalindromeRecursive(l){

}

let node1 = new Node(2)
let node2 = new Node(5)
let node3 = new Node(6)
let node4 = new Node(5)
let node5 = new Node(2)

node1.next = node2
node2.next = node3
node3.next = node4
// node4.next = node5
let list = new LinkedList(node1)

isPalindromePointer(list)

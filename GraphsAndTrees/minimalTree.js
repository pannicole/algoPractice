class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}


/**
 * @param {array} l
 * @returns {node} n
 */

function minimalTree(l) {
  if(l.length == 1){
    return new Node(l[0])
  }
  else if(l.length == 2){
    let larger = new Node(l[1])
    larger.left = new Node(l[0])
    return larger
  } else {
    let len = l.length
    let midpoint = parseInt(len / 2)
    let head = new Node(l[midpoint])
    head.left = minimalTree(l.slice(0, midpoint))
    head.right = minimalTree(l.slice(midpoint + 1,))
    return head
  }
}

console.log(minimalTree([1, 2, 3]))

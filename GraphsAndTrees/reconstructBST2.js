// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(preOrderTraversalValues) {
  let BST = makeBSTFromArray(preOrderTraversalValues)
  return BST
}

function makeBSTFromArray(array){
  if(!array.length){
    return null
  }
  let head = new BST(array[0])
  let i = 1;
  while(array[i] < head.value && i < array.length){
    i++
  }
  head.left = makeBSTFromArray(array.slice(1, i))
  head.right = makeBSTFromArray(array.slice(i))
  return head
}

let array = [10, 4, 2, 1, 5, 17, 19, 18 ]
console.log(reconstructBst(array))



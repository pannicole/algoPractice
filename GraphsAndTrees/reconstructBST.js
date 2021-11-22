// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBst(values) {
	let head = new BST(values[0])
	let i = 1
	let currNode = head
	let stack = [head]
	while(i < values.length){
		if(values[i] < currNode.value){
			currNode.left = new BST(values[i])
			currNode = currNode.left
			stack.push(currNode)
			i++
		} else {
			let last = stack.pop()
			if(last){
				while(values[i] > last.value){
          if(stack.length === 0){
            break
          }
          else if(values[i] < stack[stack.length - 1].value){
            break
          } else {
            last = stack.pop()
          }
				}
				last.right = new BST(values[i])
        stack.push(last.right)
				currNode = last.right
			}
			i++
		}
	}
	return head
}

console.log(reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]))

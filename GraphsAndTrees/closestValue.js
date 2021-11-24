function findClosestValueInBst(tree, target) {
  // Write your code here.
	let closest = tree.value
  let currDiff = Math.abs(target - closest)

	function traverseBST(tree, target){
		if(target < tree.value){
			if(tree.left){
				let newDiff = Math.abs(target - tree.left.value)
				closest = (newDiff > currDiff) ? (closest) : (tree.left.value)
        currDiff = (newDiff > currDiff) ? (currDiff) : (newDiff)
				traverseBST(tree.left, target)
			}
		}
		else if(target > tree.value){
			if(tree.right){
				let newDiff = Math.abs(target - tree.right.value)
				closest = (newDiff > currDiff) ? (closest) : (tree.right.value)
        currDiff = (newDiff > currDiff) ? (currDiff) : (newDiff)
				traverseBST(tree.right, target)
			}
		} else {
			closest = tree.value
		}
	}
	traverseBST(tree, target)
	return closest
}

class Node {
  constructor(value){
    this.value = value
    this.left = null
    this.right = null
  }
}


let target = 29749
let node1 = new Node(100)
let node2 = new Node(502)
let node3 = new Node(55000)
let node4 = new Node(1001)
let node5 = new Node(4500)
let node6 = new Node(204)
let node7 = new Node(205)
let node8 = new Node(207)
let node9 = new Node(206)
let node10 = new Node(203)
let node11 = new Node(5)

node1.left = node11
node1.right = node2
node3.left = node4
node4.right = node5
node2.right = node3
node2.left = node6

console.log(findClosestValueInBst(node1, target))

let array = [1, 2, 3, 4, 5]
let hi = array.unshift()
console.log(hi)

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array = [...array, this.name]
    let stack = [...this.children]
		while(stack.length){
			let currNode = stack.shift()
			array.push(currNode.name)
			stack = [...currNode.children, ...stack]
		}
		return array
  }
}

let A = new Node("A")
let B = new Node("B")
let C = new Node("C")
let D = new Node("D")
let E = new Node("E")
let F = new Node("F")
let G = new Node("G")
let H = new Node("H")
let I = new Node("I")
let J = new Node("J")
let K = new Node("K")

A.addChild("B")
A.addChild("C")
A.addChild("D")

A.children[0].addChild("E")
A.children[0].addChild("F")

A.children[2].addChild("G")
A.children[2].addChild("H")

A.children[0].children[1].addChild("I")
A.children[0].children[1].addChild("J")
A.children[2].children[0].addChild("K")

console.log(A.depthFirstSearch([]))


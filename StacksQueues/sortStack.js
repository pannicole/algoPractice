function sortStack(stack) {
  let top = stack.pop()
  if(stack.length < 1){
    stack.push(top)
    return stack
  }
  sortStack(stack)
  insert(stack, top)
  return stack
}

function insert(stack, value){
  if(stack.length === 0) {
    stack.push(value)
    return stack
  }
  let last = stack.pop()
  if(last < value){
    insert(stack, value)
    stack.push(last)
    return stack
  } else {
    stack.push(last)
    stack.push(value)
    return stack
  }
}

console.log(sortStack([4, 5, 2]))

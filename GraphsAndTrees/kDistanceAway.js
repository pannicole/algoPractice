var distanceK = function(root, target, k) {
  let path = dfs(root, target, [])
  let visited = path.map(ele => ele.val)
  let children = childrenKNodesAway(target, k, [target.val])

  let distance = k - 1
  let start = Math.max( 0, path.length - k -1)
  let number = path.length - 1
  for(let i = number - 1; i >= start; i--){
      let parent = path[i]
      let parentChildren = childrenKNodesAway(parent, distance, visited.slice(i))
      if(parentChildren.length) {
          children = [...children, ...parentChildren]
      }
      distance--
  }
  return children
};

function dfs(root, target, path){
  if (root === null){
      return false
  }
  else if(root === target){
  return [... path, root]
  }
  else {
      path = [...path, root]
      return dfs(root.left, target, path) || dfs(root.right, target, path)
  }
}

function childrenKNodesAway(target, k, visited){

  console.log('visited', visited)
  let queue = [target]
  while(k > 0){
      let children = []
      for(node of queue){
          if(node){
           if(node.left){
              if(!(visited.includes(node.left.val)) && node.left !== null){
                  children.push(node.left)
              }
          }
          if(node.right){
               if(!(visited.includes(node.right.val)) && node.right !== null){
                  children.push(node.right)
               }
          }
          }

      }
      queue = children
      k--
  }
  return queue.map( ele => ele.val)

}


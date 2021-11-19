function getPermutations(array) {
  let list = []
  function recurse(array, value){
    if(array.length === 2){
      return [[...value, array[0], array[1]], [...value, array[1], array[0]]]
    } else {
      for(let i=0; i < array.length; i++){
        let result = recurse([...array.slice(0, i), ...array.slice(i+1)], [...value, array[i]])
        if(result){
          list = [...list, ...result]
        }
      }
    }
  }
  if(array.length === 1){
    return array
  } else if(array.length === 2){
    return [[array[0], array[1]], [ array[1], array[0]]]
  } else {
    recurse(array, [])
  }

  return list
}

// Do not edit the line below.
console.log(getPermutations([1]))

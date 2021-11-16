function smallestDifference(one, two) {
  one.sort((first, second) => first - second)
	two.sort((first, second) => first - second)
  console.log(one, two)
  let i = 0;
  let j = 0;
  let smallest = [one[0], two[0]]
  let difference = Math.abs(one[0] - two[0])

  // let count = 0
  while( i < one.length || j < two.length){
    // count++
    // if(count >20){
    //   return false
    // }
    console.log(one[i], two[j])
    if(one[i] > two[j]){
      if(j < two.length){
        if(difference >= Math.abs(two[j] - one[i])){
          smallest = [one[i], two[j]]
          difference = Math.abs(one[i] - two[j])
        }
        j++
      }
      // else {
      //   if(i == one.length - 1){
      //     return smallest
      //   }
      //   i++
      // }

    } else {
      if(i < one.length){
        if(difference >= Math.abs(one[i] - two[j])){
          smallest = [one[i], two[j]]
          difference = Math.abs(one[i] - two[j])
        }
        i++
      }
      // else {
      //   if(j == two.length -1) {
      //     return smallest
      //   }
      //   j++
      // }
    }
  }
  return smallest
}


let array1 = [-1, 5, 10, 20, 28, 3]
let array2 = [26, 134, 135, 15, 17]

// let array1 = [-1, 5, 10, 20, 3]
// let array2 = [26, 134, 135, 15, 17]

// let array1 =  [240, 124, 86, 111, 2, 84, 954, 27, 89]
// let array2 =  [1, 3, 954, 19, 8]
console.log(smallestDifference(array1, array2))

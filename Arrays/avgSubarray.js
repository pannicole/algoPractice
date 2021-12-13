function averageSubarray(arr){
  let total = arr.reduce( (a, e) => a + e)
  let result = []

  for(let i = 0; i < arr.length; i++){
    for(let j = i; j < arr.length; j++){
      let subtotal = 0
      if(i === j ){
        subtotal = arr[i]
      } else {
        subtotal = arr.slice(i, j+1).reduce( (a, e) => a + e)
      }
      let average = subtotal / (j - i + 1)

      let rest = total - subtotal
      let restAverage = 0
      if(arr.length !== j - i + 1){
        restAverage = rest / (arr.length - (j - i + 1))
      }
      if (average > restAverage){
        result.push([i + 1, j + 1])
      }
    }
  }
  return result
}

console.log(averageSubarray([3, 4, 2]))

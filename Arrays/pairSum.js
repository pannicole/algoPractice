function numberOfWays(arr, k) {
  // Write your code here
  let counts = {}
  //counts = {1: 1, 2: 1, 3: 2, 4: 1}
  // unique = [1, 2, 3, 4]
  let unique = []
  for(let i = 0; i < arr.length; i++){
    if(counts[arr[i]]){
      counts[arr[i]]++
    } else {
      counts[arr[i]] = 1
      unique.push(arr[i])
    }
  }

  let total = 0
  for(let j = 0; j < unique.length; j++){
    if(k === (unique[j] * 2)){
      let n = counts[unique[j]]
      if(n >= 2){
        total += ((n * n ) - n ) / 2
      }
    } else {
      if(counts[k - unique[j]]){
        total += counts[unique[j]] * counts[k - unique[j]]
        counts[k - unique[j]] = 0
      }
    }
  }
  return total
}

console.log(numberOfWays([1, 5, 3, 3, 3], 6))

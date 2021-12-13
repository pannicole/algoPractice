
function query(N, Q){
  let SET = 1
  let GET = 2
  let array = Array(N + 1).fill(false)
  let results = []


  for(let i =0; i < Q.length; i++ ){
    let [type, value] = Q[i]
    if(type === SET){
      array[value] = true
    }
    else if (type === GET){
      if(array[value]){
        results.push(value)
      } else {
        let searchIndex = value + 1
        while(!array[searchIndex] && searchIndex <= N){
          searchIndex++
        }
        searchIndex = (searchIndex <= N) ? searchIndex : -1
        results.push(searchIndex)
      }
    }
  }
  return results
}


N = 5
// Q = 5
queries = [[2, 3], [1, 2], [2, 1], [2, 3], [2, 2]]
// output = [-1, 2, -1, 2]


console.log(query(N, queries))

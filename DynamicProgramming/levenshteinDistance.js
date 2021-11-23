function levenshteinDistance(str1, str2) {
  // just one difference:
	//	1) insertion/deletion: shorter string has all characters of longest string
	//  2) substitution: strings are same length, one character is different
	// need to create an array that holds the differences at each index
	// can shift str 1 to different start points of str 2

  let arr = []
  for(let i = 0; i < str1.length; i++){
    let row = []
    let s1 = str1.slice(0, i)
    for(let j  = 0; j < str2.length; j++){
      let s2 = str2.slice(0, j)
      if(s1 === s2){
        arr[i][j] = arr[i-1][j-1]
      }
      else{
        //str1 is shorter than str 2
        let next = Math.min(arr[i][j-1], arr[i-1][j-1], arr[i-1][j])
        arr[i][j] = next + 1
      }
      arr.push(row)
    }
  }
}

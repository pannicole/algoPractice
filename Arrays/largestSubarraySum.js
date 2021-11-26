function kadanesAlgorithm(array) {
  // create helper array, where index i represents
	// the largest subarray sum including that index
	// the largest subarray sum at that index is either
	// just the value at that index, or the value of helper[i-1] + i
	// max of that arary is the largest subarray sum

	let helper = Array(array.length - 1).fill(0)
	for(let i = 0; i < array.length; i++){
		if( i === 0){
			helper[0] = array[0]
		} else{
			helper[i] = (array[i] + helper[i-1] > array[i]) ? (array[i] + helper[i-1]) : (array[i])
		}
	}
  return Math.max(...helper)
}

console.log(kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]))

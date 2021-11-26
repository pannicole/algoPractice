function longestPeak(array) {
  let start = peak = end = 0
  let maxPeakLength = 0
  while(end < array.length - 1){
    while(array[end + 1] > array[end]){
      end++
      peak = end
    }
    if(peak > start){
      while(end < array.length - 1 && array[end + 1] < array[end]){
        end++
      }
      if(end > peak){
        maxPeakLength = (end - start + 1 > maxPeakLength) ? (end - start + 1) : (maxPeakLength)
      }
      start = end
      peak = end
    } else {
      start = peak = end + 1
      end++
    }
  }
  return maxPeakLength
}

// let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3]
// let array1 = [1, 2, 3]
let array2 = [5, 4, 3, 2, 1, 2, 3]
// let array3 = [1, 2, 3, 3, 2, 0, 10, 6, 5, 0, 2, 3]
// let array4 = [1, 1, 1, 1, 1]

// console.log(longestPeak(array)) //6
// console.log(longestPeak(array1)) //0
console.log(longestPeak(array2)) //0
// console.log(longestPeak(array3)) //5
// console.log(longestPeak(array4)) //0


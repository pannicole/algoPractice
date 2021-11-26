function isPalPlusOne(str){
  let left = 0
  let right = str.length - 1
  if(str.length < 2) {
    return true
  }
  while(left < right){
    if(str[left] === str[right]){
      left++
      right--
    } else {
      let skipLeft = isPalindrome(str.slice(left + 1, right + 1))
      let skipRight = isPalindrome(str.slice(left, right))
      return skipLeft || skipRight
    }
  }
  return true
}

function isPalindrome(str){
  let left = 0
  let right = str.length - 1
  while(left < right){
    if(str[left] === str[right]){
      left++
      right--
    } else {
      return false
    }
  }
  return true
}

console.log(isPalPlusOne(''))
console.log(isPalPlusOne('a'))
console.log(isPalPlusOne('abca'))
console.log(isPalPlusOne('abcbca'))
console.log(isPalPlusOne('abcdefghijlk'))
console.log(isPalPlusOne('abcba'))

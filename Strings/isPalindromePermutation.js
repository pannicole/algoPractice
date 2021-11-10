/**
 * @param {string} s
 *
 */

function isPalindromePermutation(s) {
  let str = s.replace(/ /g, '').toLowerCase()
  console.log(str)
  if(s.length <= 1){
    console.log(true)
    return true
  }
  let letterCount = {}
  for(let letter = 0; letter < str.length; letter ++){
    if(letterCount[str[letter]]){
      letterCount[str[letter]] += 1
    } else {
      letterCount[str[letter]] =1
    }
  }

  let even = (str.length % 2 === 0) ? (true) : (false)
  let oddCount = 0
  for(let letter in letterCount){
    if(letterCount[letter] % 2 != 0 ) {
      oddCount++
      if(even){
        console.log(false)
        return false
      } else {
        if(oddCount > 1){
          console.log(false)
          return false
        }
      }
    }
  }
  console.log(true)
  return true
}

isPalindromePermutation('Tact Coa')
isPalindromePermutation('cat')
isPalindromePermutation('')
isPalindromePermutation('iamapalindromepalindromeami')

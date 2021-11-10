/**
 *
 * @param {string} s
 * @return {boolean}
 *
 * Function to determine if a string has all unique characters
 */

function isUnique(s){
  let hash = {}
  for(let i = 0; i < s.length; i++){
    if(hash[s[i]]){
      console.log('false')
      return false
    } else {
      hash[s[i]] = 1
    }
  }
  console.log('true')
  return true
}

//test cases
isUnique('abcabc') // false
isUnique('') // true
isUnique('a') // true
isUnique('abcdefg') //true
isUnique('abcdefgg') //false

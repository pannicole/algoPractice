/**
 *
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 *
 * Function to determine if s1 and s2 are permutations of each other
 */

 function isPermutation(s1, s2){
   if(s1.length !== s2.length){
     console.log(false)
     return false
   }
  let s1Hash = {}
  let s2Hash = {}
  for(let i = 0; i < s1.length; i++){
    if(s1Hash[s1[i]]){
      s1Hash[s1[i]] = s1Hash[s1[i]] + 1
    } else {
      s1Hash[s1[i]] = 1
    }
  }
  for(let j = 0; j < s2.length; j++){
    if(s2Hash[s2[j]]){
      s2Hash[s2[j]] = s2Hash[s2[j]] + 1
    } else {
      s2Hash[s2[j]] = 1
    }
  }

  let letters = Object.keys(s1Hash)
  for(letter in letters){
    if(s1Hash[letters[letter]] != s2Hash[letters[letter]]){
      console.log(false)
      return false
    }
  }
  console.log(true)
  return true
}

//test cases
isPermutation('aabbcc',  'abcabc') // true
isPermutation('a', 'a') // true
isPermutation('a', 'b') // false
isPermutation('abcdefg', 'gfdecba') //true
isPermutation('aabbcc', 'abc') //false


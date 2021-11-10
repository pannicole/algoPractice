/**
 * @param {string} s
 * @return {number}
 * Given a string s, return the length shortest substring that is repeated
 * in s with no remainder.
 */
 var shortestRepeatingSubstring = function(s) {
   //construct longest proper prefix that is also suffix helper array
  let len = 0
  let start = 1
  let lps = [0]
  while(start < s.length){
    if(s[len] == s[start]){
      len++
      lps[start] = len
      start++
    } else {
      if( len != 0 ){
        len = lps[len - 1]
      } else{
        lps[start] = 0
        start++
      }
    }
  }
  let last = lps[lps.length - 1]
  console.log(( (s.length % (s.length - last) == 0) ? (s.length - last) : s.length))
  return ( (s.length % (s.length - last) == 0) ? (s.length - last) : s.length)

};

shortestRepeatingSubstring('abc')  // 3
shortestRepeatingSubstring('ababcabab') //9
shortestRepeatingSubstring('abcabcabcabc') //3
shortestRepeatingSubstring('ababababab')  //2
shortestRepeatingSubstring('aaaaabaaaa') //10
shortestRepeatingSubstring('abababab') //2

function reverseWordsInString(string) {
  // Write your code here.
  let stack = []
  let word = ''
  let spaces = ''
  let i = 0
  while(i < string.length){
    if(string[i] !== ' '){
      if(spaces.length > 0){
        stack.unshift(spaces)
        spaces = ''
      }
      word += string[i]
    } else {
      if(word !== ''){
        stack.unshift(word)
        word = ''
      }
        spaces += string[i]
    }
    if(i === string.length - 1){
      if(word){
        stack.unshift(word)
      }else {
        stack.unshift(spaces)
      }
    }
    i++
  }
  return stack.join('');
}

let word = 'hey i am    nicole'
console.log(reverseWordsInString(word))

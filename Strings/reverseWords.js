function reverseWordsInString(string) {
  // Write your code here.

  // how do i know if something is a word?
  // there is a whitespace after it
  // need to figure out what the words are, their order
  // and how many space came after in the original string

  // i can use a stack!
  // loop through the string
  // keept track of "word" variable
  // keep track of spaces variable
  // while loop:
  // if letter is not a space,
  //    append that letter to word
  //    if spaces > 0:
  //    reset spaces, push that onto the stack
  // if letter is a space:
  //    put word on the stack (if it is not '')
  //    reset word variable
  //    start counting the number of spaces
  // return the joined stack

  let stack = []
  let word = ''
  let spaces = ''
  let i = 0
  while(i < string.length){

    console.log(stack, word, spaces)
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
    i++
  }
  return stack.join('');
}

let word = 'hey i am    nicole'
console.log(reverseWordsInString(word))

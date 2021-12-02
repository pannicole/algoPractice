class WordDictionary {
  constructor(){
      this.trie = {}
  }
};

/**
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  node = this.trie
  for(let ch = 0; ch < word.length; ch++){
      if(!node[word[ch]]){
          node[word[ch]] = {}
      }
      node = node[word[ch]]
  }
  node['$'] = true
};

/**
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  function dfs(word, node){
      for(let ch = 0; ch < word.length; ch++){
          if(!node[word[ch]]){
              if( word[ch] === '.') {
                  for(x in node){
                      if(x !== "$" && dfs(word.slice(ch + 1), node[x])){
                          return true
                      }
                  }
              }
              return false
          } else {
              node = node[word[ch]]
          }
      }
      return (node['$']) ? true: false
  }
  return dfs(word, this.trie)
};

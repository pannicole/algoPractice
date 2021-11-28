var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {
      let start = 1
      let end = n
      if(n === 1){
          return start
      }

      while(start <= end){
        let mid = Math.floor( (start + end) / 2)
          let isBad = isBadVersion(mid)
          if(isBad){
              if(!isBadVersion(mid - 1)){
                  return mid
              } else {
                  end = mid - 1
              }
          } else {
              start = mid + 1
          }
      }
  };
};

function isBadVersion(n) {
  return (n > 3)
}

console.log(solution(isBadVersion)(5))

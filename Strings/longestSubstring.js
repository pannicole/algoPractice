/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let stringLength = s.length
    let left = right = 0
    let longest = 0
    let letterPositions= {}
    while(right < stringLength){
        let k = letterPositions[s[right]]
        if(k != undefined){
            if(k >= left){
                left = k + 1
            }
        }
        letterPositions[s[right]] = right
        right++
        longest = (right - left > longest) ? right-left :  longest
    }
    console.log(longest)
    return longest
};

lengthOfLongestSubstring("a") //1
lengthOfLongestSubstring("aaaa")  //1
lengthOfLongestSubstring("abababab") // 2
lengthOfLongestSubstring("abcabc") //3
lengthOfLongestSubstring("abcabcbb") //3
lengthOfLongestSubstring("pwwkew") //3

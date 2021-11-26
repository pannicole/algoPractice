// Add any extra import statements you may need here


// Add any helper functions you may need here


function minLengthSubstring(s, t) {
  // Write your code here
  let lettersInT = {}
  for(let i =0; i < t.length; i++){
    if(lettersInT[t[i]]){
      lettersInT[t[i]]++
    } else {
      lettersInT[t[i]] = 1
    }
  }
  let start = 0
  let end = 0
  let total = 0
  let minLength = -1

  while(end < s.length && start <= end){
    if(total != t.length){
      if(lettersInT[s[end]]){
        if(lettersInT[s[end]] > 0){
          lettersInT[s[end]]--
          total++
        }
      }
      end++
    } else {
      //increment start
      if(minLength === -1){
        minLength = (end - start)
      } else {
        minLength = (minLength > (end-start)) ? (end-start) : (minLength)
      }

      if(lettersInT[s[start]] === 0) {
        lettersInT[s[start]]++
        total--
      }
      start++
    }

  }
  return minLength
}


function printInteger(n) {
  var out = '[' + n + ']';
  return out;
}

var test_case_number = 1;

function check(expected, output) {
  var result = (expected == output);
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printInteger(expected);
    out += ' Your output: ';
    out += printInteger(output);
    console.log(out);
  }
  test_case_number++;
}

var s_1 = "dcbefdebce";
var t_1 = "fd";
var expected_1 = 2;
var output_1 = minLengthSubstring(s_1, t_1);
check(expected_1, output_1);

var s_2 = "bfbeadbcbcbfeaaeefcddcccbbbfaaafdbebedddf";
var t_2 = "cbccfafebccdccebdd";
var expected_2 = -1;
var output_2 = minLengthSubstring(s_2, t_2);
check(expected_2, output_2);

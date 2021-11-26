function rotationalCipher(input, rotationFactor) {
  // Write your code here
  let result = ''
  let a = 97
  let z = 122
  let A = 65
  let Z = 90
  let zero = 48
  let nine = 57
  for(let i = 0 ; i < input.length; i++){
    let curr = input.charCodeAt(i)
    if(curr <= z && curr >= a){
      result += String.fromCharCode( (curr - a + rotationFactor) % 26 + a)
    } else if (curr <= Z && curr >= A){
      result += String.fromCharCode( (curr - A + rotationFactor) % 26 + A)
    } else if( curr <= nine && curr > zero){
      result += String.fromCharCode( (curr - zero + rotationFactor) % 10 + zero)
    } else {
      result += input[i]
    }
  }
  return result;
}


function printString(str) {
  var out = '["' + str + '"]';
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
    out += printString(expected);
    out += ' Your output: ';
    out += printString(output);
    console.log(out);
  }
  test_case_number++;
}

var input_1 = "All-convoYs-9-be:Alert1.";
var rotationFactor_1 = 4;
var expected_1 = "Epp-gsrzsCw-3-fi:Epivx5.";
var output_1 = rotationalCipher(input_1, rotationFactor_1);
check(expected_1, output_1);

var input_2 = "abcdZXYzxy-999.@";
var rotationFactor_2 = 200;
var expected_2 = "stuvRPQrpq-999.@";
var output_2 = rotationalCipher(input_2, rotationFactor_2);
check(expected_2, output_2);

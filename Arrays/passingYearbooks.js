function findSignatureCounts(arr) {
  // Write your code here
  let visited = new Set()
  let result = Array(arr.length).fill(0)
  let root_indexes = Array(arr.length).fill(-1)

  for(let i = 0; i < arr.length; i++){
    let student = arr[i]
    if(visited.has(student)){
      continue
    }
    visited.add(student)

    result[i] = 1
    let next_i = student - 1
    while(next_i != i){
      result[i] += 1
      root_indexes[next_i] = i
      visited.add(arr[next_i])
      next_i = arr[next_i] - 1
    }
  }

  for(let i = 0; i < arr.length; i++){
    if(root_indexes[i] != -1){
      result[i] = result[root_indexes[i]]
    }
  }

  return result
}

function printintegerArray(array) {
  var size = array.length;
  var res = '';
  res += '[';
  var i = 0;
  for (i = 0; i < size; i++) {
    if (i !== 0) {
      res += ', ';
    }
    res += array[i];
  }
  res += ']';
  return res;
}

var test_case_number = 1;

function check(expected, output) {
  var expected_size = expected.length;
  var output_size = output.length;
  var result = true;
  if (expected_size != output_size) {
    result = false;
  }
  for (var i = 0; i < Math.min(expected_size, output_size); i++) {
    result &= (output[i] == expected[i]);
  }
  var rightTick = "\u2713";
  var wrongTick = "\u2717";
  if (result) {
    var out = rightTick + ' Test #' + test_case_number;
    console.log(out);
  }
  else {
    var out = '';
    out += wrongTick + ' Test #' + test_case_number + ': Expected ';
    out += printintegerArray(expected);
    out += ' Your output: ';
    out += printintegerArray(output);
    console.log(out);
  }
  test_case_number++;
}

var arr_1 = [2, 1];
var expected_1 = [2, 2];
var output_1 = findSignatureCounts(arr_1);
check(expected_1, output_1);

var arr_2 = [1, 2];
var expected_2 = [1, 1];
var output_2 = findSignatureCounts(arr_2);
check(expected_2, output_2);

var arr_3 = [1, 3, 4, 2];
var expected_3 = [1, 3, 3, 3];
var output_3 = findSignatureCounts(arr_3);
check(expected_3, output_3);

var arr_4 = [4, 3, 2, 5, 1];
var expected_4 = [3, 2, 2, 3, 3];
var output_4 = findSignatureCounts(arr_4);
check(expected_4, output_4);

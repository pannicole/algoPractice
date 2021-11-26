function shiftedArraySearch(arr, target) {
  const pivot = findPivot(arr);
  if(pivot === 0 || target >= arr[0]) {
    return binarySearch(arr, pivot, arr.length - 1, target);
  }
  return binarySearch(arr, 0, pivot - 1, target);
}

function binarySearch(arr, start, end, num) {
  while(start <= end) {
    let mid = Math.floor((end-start) / 2) + start;
    if(arr[mid] === num) {
      return mid;
    }
    else if(num > arr[mid] ) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }
  return -1; //in the case we don't find anything
}

function findPivot(arr) {
  let start = 0;
  let end = arr.length -1;
  while(start <= end) {
    let mid = Math.floor((end-start) / 2) + start;
    if(mid === 0 || arr[mid] < arr[mid - 1]) {
      return mid;
    }
    if(arr[mid] > arr[0]) {
      start = mid + 1;
    }
    else {
      end = mid - 1;
    }
  }
  return 0;
}

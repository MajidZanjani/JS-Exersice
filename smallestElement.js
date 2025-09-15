function nthSmallest(arr, pos) {
  //your code here
  var sortedArray = arr.sort((a, b) => a - b);
  var element = sortedArray[pos - 1];
  var foundIndex = arr.indexOf(element);

  return arr[foundIndex];
}

console.log(nthSmallest([-102, -16, -1, -2, -367, -9], 5));

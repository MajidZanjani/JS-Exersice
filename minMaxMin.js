function minMinMax(array) {
  // solution goes here!
  var smallest = Math.min(...array);
  var largest = Math.max(...array);
  var minimumAbsent = null;
  var i = smallest;
  while (!minimumAbsent) {
    i++;
    if (!array.includes(i)) {
      minimumAbsent = i;
      break;
    }
  }
  return [smallest, minimumAbsent, largest];
}

console.log(minMinMax([-1, 4, 5, -23, 24]));
console.log(minMinMax([1, 3, -3, -2, 8, -1]));
console.log(minMinMax([2, -4, 8, -5, 9, 7]));

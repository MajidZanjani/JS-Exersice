function upArray(arr) {
  if (
    !Array.isArray(arr) ||
    arr.length === 0 ||
    arr.some((a) => a < 0 || a > 9 || !Number.isInteger(a))
  ) {
    return null;
  }

  let result = arr.slice();

  // Start from the end and add 1
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] < 9) {
      result[i]++;
      return result;
    }
    result[i] = 0;
  }

  // If all digits were 9, add a leading 1
  result.unshift(1);
  return result;
}

const arr = [0, 0, 0, 8];
console.log(upArray(arr));

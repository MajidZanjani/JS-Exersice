function replaceZero(arr) {
  // your solution here

  var chains = [];

  for (let x = 0; x < arr.length; x++) {
    if (arr[x] === 0) {
      let len = 1;

      for (let i = x + 1; i < arr.length; i++) {
        if (arr[i] === 0) break;
        len++;
      }

      for (let i = x - 1; i > -1; i--) {
        if (arr[i] == 0) break;
        len++;
      }

      chains.push({
        pos: x,
        len: len,
      });
    }
  }

  var result = chains.reduce((prev, current) => {
    return prev.len > current.len ? prev : current;
  });

  return result.pos;
}

const arr = [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1];
console.log(replaceZero(arr));

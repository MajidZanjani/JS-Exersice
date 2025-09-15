function score(dice) {
  // Fill me in!
  var sum = 0;
  var nums = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  dice.forEach((x) => {
    nums[x] += 1;
  });

  for (let i = 1; i < 7; i++) {
    if (nums[i] >= 3) {
      if (i == 1) {
        sum += 1000;
        nums[i] -= 3;
      } else {
        sum += i * 100;
        nums[i] -= 3;
      }
    }
  }

  for (let i = 1; i < 7; i++) {
    if (i == 1 && nums[i] >= 1) sum += 100 * nums[i];
    if (i == 5 && nums[i] >= 1) sum += 50 * nums[i];
  }

  return sum;
}

console.log(score([2, 3, 4, 6, 2]));
console.log(score([4, 4, 4, 3, 3]));
console.log(score([2, 4, 4, 5, 4]));
console.log(score([1, 1, 2, 3, 6]));

function easyLine(n) {
  function binom(n, k) {
    let res = 1n;
    for (let i = 1n; i <= k; i++) {
      res = (res * (BigInt(n) - i + 1n)) / i;
    }
    return res;
  }

  // central binomial coefficient (2n choose n)
  let central = binom(2 * n, n);

  // log as a floating point number
  return Math.round(Math.log(Number(central)));
}

console.log(easyLine(50));

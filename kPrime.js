function countPrimeFactors(n) {
  let count = 0;
  let d = 2;
  console.log("number to check=> ", n);

  while (n > 1 && d * d <= n) {
    while (n % d === 0) {
      count++;
      console.log("n=> ", n, " d=> ", d);
      n /= d;
    }
    d++;
  }
  if (n > 1) {
    count++;
    console.log("final n=> ", n);
  } // if n is prime itself at the end
  console.log("----------------------------------------");
  return count;
}

function consecKprimes(k, arr) {
  // precompute factor counts
  const factors = arr.map((num) => countPrimeFactors(num));

  let count = 0;
  for (let i = 0; i < factors.length - 1; i++) {
    if (factors[i] === k && factors[i + 1] === k) {
      count++;
    }
  }
  return count;
}

let arr = [10005, 10030, 10026, 10008, 10016, 10028, 10004];
let k = 4;

console.log(consecKprimes(k, arr));

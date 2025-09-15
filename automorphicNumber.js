function automorphic(n) {
  const square = Math.pow(n, 2).toString();
  const number = n.toString();

  if (square.endsWith(number)) return "Automorphic";
  else return "Not!!";
}

console.log(automorphic(25));

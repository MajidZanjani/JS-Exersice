function validateBase(num, base) {
  // Happy coding!
  const baseArray = Array.from({ length: 10 }, (_, index) =>
    String(index)
  ).concat(
    Array.from({ length: 26 }, (_, index) => String.fromCharCode(65 + index))
  );

  const numArray = String(num).split("");
  let foundBase = 0;

  for (n of baseArray) {
    if (numArray.includes(n)) {
      foundBase = baseArray.indexOf(n);
    }
  }

  return foundBase >= base ? false : true;
}

const cases = [
  ["7623", 8, true],
  ["ABCDEF", 16, true],
  ["6124", 5, false],
  ["ABC", 12, false],
  ["Y", 34, false],
  ["2738", 8, false],
  ["0020", 10, true],
];
for (let [num, base, expected] of cases) {
  console.log(
    `Should return `,
    expected,
    ` for number: ${num}, base: ${base}`,
    validateBase(num, base)
  );
}

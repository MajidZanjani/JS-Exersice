class Stream {
  constructor(start, output, stepping) {
    this.start = start;
    this.output = output;
    this.stepping = stepping;
  }

  head() {
    return this.output(this.start);
  }

  tail() {
    return new Stream(this.stepping(this.start), this.output, this.stepping);
  }
}

// Example usage:
function increment(n) {
  return n + 1;
}
function id(n) {
  return n;
}
function sqr(n) {
  return n * n;
}

const naturalNumbers = new Stream(0, id, increment);

console.log(naturalNumbers.head()); // 0
console.log(naturalNumbers.tail().head()); // 1
console.log(naturalNumbers.tail().tail().head()); // 2

const squares = new Stream(0, sqr, increment);
console.log(squares.head()); // 0
console.log(squares.tail().head()); // 1
console.log(squares.tail().tail().head()); // 4

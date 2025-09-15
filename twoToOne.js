function longest(s1, s2) {
  var comb = s2 ? s1 + s2 : s1;
  comb = comb.split("").sort().join("");

  return (result = comb.split("").reduce((acc, char) => {
    if (acc[acc.length - 1] !== char) {
      acc += char;
    }
    return acc;
  }, ""));
}

console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
console.log(longest("inmanylanguages", "theresapairoffunctions"));

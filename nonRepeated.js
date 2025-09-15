function firstNonRepeatingLetter(s) {
  // Add your code here
  var s1 = s.toLowerCase();
  for (c of s1) {
    if (s1.split(c).length == 2) return s[s1.indexOf(c)];
  }
  return "";
}

console.log(firstNonRepeatingLetter("aTRabba"));

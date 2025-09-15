function isPangram(string) {
  let letters = [];
  for (let i = 97; i <= 122; i++) {
    // ASCII codes for 'a' to 'z'
    letters.push(String.fromCharCode(i));
  }

  let num = 0;
  // string = string.toLowerCase();

  letters.forEach((x) => {
    if (string.includes(x)) num++;
  });

  return num === 26;
}

console.log(isPangram("abbbbcddefghijklmnopQrstuvwxyz"));

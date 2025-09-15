function rot13(message) {
  var secret = "";

  for (x of message) {
    var asc = x.charCodeAt(0);
    console.log(x, asc);
    if (asc >= 65 && asc < 91) {
      asc += 13;
      if (asc > 90) asc = asc - 26;
      secret += String.fromCharCode(asc);
    } else if (asc >= 97 && asc < 123) {
      asc += 13;
      if (asc > 122) asc = asc - 26;
      secret += String.fromCharCode(asc);
    } else {
      secret += x;
    }
  }

  return secret;
}

console.log(rot13("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"));

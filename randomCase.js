function randomCase(x) {
  var out = "";

  for (let chr of x) {
    randChar(chr);
  }

  function randChar(chr) {
    var rnd = Math.floor(Math.random() * 2);
    out += rnd == 1 ? chr.toUpperCase() : chr.toLowerCase();
  }
  return out;
}

function spaceRemove(x) {
  return x.replaceAll(" ", "");
}

console.log(randomCase("dIKNrrpsKpfgs"));
console.log(spaceRemove("sdfsf asdfs    werw k"));

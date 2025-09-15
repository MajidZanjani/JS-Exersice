function blockPrint(input) {
  const alpha = {
    a: ["  A  ", " A A ", "A   A", "AAAAA", "A   A", "A   A", "A   A"],
    b: ["BBBB ", "B   B", "B   B", "BBBB ", "B   B", "B   B", "BBBB "],
    c: [" CCCC", "C    ", "C    ", "C    ", "C    ", "C    ", " CCCC"],
    d: ["DDDD ", "D   D", "D   D", "D   D", "D   D", "D   D", "DDDD "],
    e: ["EEEEE", "E    ", "E    ", "EEEEE", "E    ", "E    ", "EEEEE"],
    f: ["FFFFF", "F    ", "F    ", "FFFF ", "F    ", "F    ", "F    "],
    g: [" GGGG", "G    ", "G    ", "G  GG", "G   G", "G   G", " GGG "],
    h: ["H   H", "H   H", "H   H", "HHHHH", "H   H", "H   H", "H   H"],
    i: ["IIIII", "  I  ", "  I  ", "  I  ", "  I  ", "  I  ", "IIIII"],
    j: ["JJJJJ", "    J", "    J", "    J", "    J", "J   J", " JJJ "],
    k: ["K   K", "K  K ", "K K  ", "KK   ", "K K  ", "K  K ", "K   K"],
    l: ["L    ", "L    ", "L    ", "L    ", "L    ", "L    ", "LLLLL"],
    m: ["M   M", "MM MM", "M M M", "M   M", "M   M", "M   M", "M   M"],
    n: ["N   N", "NN  N", "N N N", "N  NN", "N   N", "N   N", "N   N"],
    o: [" OOO ", "O   O", "O   O", "O   O", "O   O", "O   O", " OOO "],
    p: ["PPPP ", "P   P", "P   P", "PPPP ", "P    ", "P    ", "P    "],
    q: [" QQQ ", "Q   Q", "Q   Q", "Q   Q", "Q Q Q", "Q  Q ", " QQ Q"],
    r: ["RRRR ", "R   R", "R   R", "RRRR ", "R R  ", "R  R ", "R   R"],
    s: [" SSSS", "S    ", "S    ", " SSS ", "    S", "    S", "SSSS "],
    t: ["TTTTT", "  T  ", "  T  ", "  T  ", "  T  ", "  T  ", "  T  "],
    u: ["U   U", "U   U", "U   U", "U   U", "U   U", "U   U", " UUU "],
    v: ["V   V", "V   V", "V   V", "V   V", " V V ", " V V ", "  V  "],
    w: ["W   W", "W   W", "W   W", "W   W", "W W W", "W W W", " W W "],
    x: ["X   X", "X   X", " X X ", "  X  ", " X X ", "X   X", "X   X"],
    y: ["Y   Y", "Y   Y", " Y Y ", "  Y  ", "  Y  ", "  Y  ", "  Y  "],
    z: ["ZZZZZ", "    Z", "   Z ", "  Z  ", " Z   ", "Z    ", "ZZZZZ"],
    " ": ["     ", "     ", "     ", "     ", "     ", "     ", "     "],
  };

  input = input.trim().toLowerCase();
  if (!input) return "";

  const lines = Array(7).fill("");

  for (let row = 0; row < 7; row++) {
    let line = "";
    for (let i = 0; i < input.length; i++) {
      const ch = input[i];
      const block = alpha[ch] || alpha[" "]; // fallback to space
      line += block[row];
      if (i !== input.length - 1) line += " "; // 1 space between letters
    }
    lines[row] = line.trimEnd(); // remove trailing spaces
  }

  return lines.join("\n");
}

var input = "test";
console.log(blockPrint(input));

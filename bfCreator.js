function create(a, b, c) {
  const go = (from, to) => {
    let d = to - from;
    return d > 0 ? `(${d})` : `(${d})`; // uses interpreter's (n) jump
  };

  let code = "";

  // Step 1: Zero c
  code += go(0, c) + "[-]";

  // Step 2: Copy a into c
  code += go(c, a) + "[-" + go(a, c) + "+" + go(c, a) + "]";

  // Step 3: Subtract b from c
  code += go(a, b) + "[-" + go(b, c) + "-" + go(c, b) + "]";

  // Step 4: If c > 0 ⇒ print '1', else print '0'
  // c contains (a-b). We branch depending on emptiness.
  // We'll use trick: Set output to "0" by default, then bump to "1" if c != 0.

  // Init c with '0' (48)
  code += go(b, c) + "[-]" + "+".repeat(48);

  // If c != 0, bump value to '1' (49)
  code += "[" + "+" + "[-]" + "]";

  // Print result
  code += ".";

  return code;
}

function create(a, b, c) {
  const go = (from, to) => {
    let d = to - from;
    return d > 0 ? `(${d})` : `(${d})`;
  };

  let code = "";

  code += go(0, c) + "[-]";
  code += go(c, a) + "[-" + go(a, c) + "+" + go(c, a) + "]";
  code += go(a, b) + "[-" + go(b, c) + "-" + go(c, b) + "]";
  code += go(b, c) + "[-]" + "+".repeat(48);
  code += "[" + "+" + "[-]" + "]";
  code += ".";

  return code;
}

console.log(create([0, 1, 2], 3, 6));

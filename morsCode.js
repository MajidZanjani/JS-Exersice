decodeMorse = function (morseCode) {
  // Your code here
  // You can use MORSE_CODE[morse]
  // var codes = morseCode.trim().split(" ");
  // var result = "";

  // for (let i = 0; i < codes.length; i++) {
  //   if (codes[i] === "") {
  //     if (codes[i + 1] != "") {
  //       codes.splice(i, 1);
  //     }
  //   }
  // }

  // codes = codes.map((item) => (item === "" ? "\u0020" : item));

  // codes.forEach(function (code) {
  //   result += MORSE_CODE[code];
  // });

  // return result;

  return morseCode
    .trim()
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map((code) => MORSE_CODE[code] || "")
        .join("")
    )
    .join(" ");
};

const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  ".-.-.-": ".",
  "--..--": ",",
  "..--..": "?",
  "-.-.--": "!",
  "-..-.": "/",
  "-.--.": "(",
  "-.--.-": ")",
  ".----.": "'",
  ".-..-.": '"',
  "---...": ":",
  "-.-.-.": ";",
  "-...-": "=",
  ".-.-.": "+",
  "-....-": "-",
  "..--.-": "_",
  "...-..-": "$",
  ".--.-.": "@",
  "...---...": "SOS",
};

console.log(decodeMorse("   .... . -.--   .--- ..- -.. ."));
console.log(decodeMorse("  .--- ..- -.. .  "));

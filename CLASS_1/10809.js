const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("");

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < alphabet.length; j++) {
    if (alphabet[j] == input[i]) {
      alphabet[j] = input.indexOf(input[i]);
    }
  }
}

for (let i = 0; i < alphabet.length; i++) {
  if (typeof alphabet[i] == "string") alphabet[i] = -1;
}

console.log(alphabet.join(" "));

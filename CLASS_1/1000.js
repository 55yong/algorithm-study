const filepath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [A, B] = require("fs")
  .readFileSync(filepath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(A + B);

const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const a = new Set();

input.forEach((e) => {
  a.add(e % 42);
});

console.log(a.size);

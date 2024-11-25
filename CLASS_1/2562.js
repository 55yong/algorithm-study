const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(Math.max(...input));
console.log(input.indexOf(Math.max(...input).toString()) + 1);

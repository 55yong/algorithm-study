const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let b = input[1].split(" ");

let min = Math.min(...b);
let max = Math.max(...b);

console.log(min, max);

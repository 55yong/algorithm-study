const fs = require("fs");
let [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

let result = b - 45;

if (result < 0) {
  a--;
  if (a < 0) {
    a = 23;
  }
  b = parseInt(b) + 15;
} else {
  b = result;
}

console.log(a, b);

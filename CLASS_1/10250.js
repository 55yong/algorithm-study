const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = input[0];
let h,
  w,
  n = 0;

let answer = [];

for (let i = 1; i <= t; i++) {
  [h, w, n] = input[i].split(" ");
  for (let j = 1; j <= parseInt(w); j++) {
    if (j < 10) {
      j = "0" + j;
    }
    for (let k = 1; k <= parseInt(h); k++) {
      answer.push(k + j.toString());
    }
  }
  console.log(answer[n - 1]);
  answer = [];
}

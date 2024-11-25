const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let T = input[0];
let P = [];

for (let i = 0; i < T; i++) {
  let a = input[i + 1].split(" ");
  let R = a[0];
  let S = a[1].split("");
  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < R; k++) {
      P.push(S[j]);
    }
  }
  console.log(P.join(""));
  P = [];
}

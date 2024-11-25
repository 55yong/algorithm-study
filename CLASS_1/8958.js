const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

const a = input[0];

for (let i = 1; i <= a; i++) {
  let answer = 0;
  let b = input[i].split("X");
  for (let j = 0; j < b.length; j++) {
    let c = b[j].split("");
    for (let k = 0; k < c.length; k++) {
      answer += k + 1;
    }
  }
  console.log(answer);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  let a = input[0].split(" ").map((i) => Number(i));
  let b = input[1].split(" ").map((i) => Number(i));
  let answer = "";

  for (let i = 0; i < a[0]; i++) {
    if (a[1] > b[i]) answer += b[i] + " ";
  }

  process.stdout.write(answer);
};

solution();

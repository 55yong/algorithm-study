const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  let [a, b] = input;

  console.log(a[b - 1]);
};

solution();

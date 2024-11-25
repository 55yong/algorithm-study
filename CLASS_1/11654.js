const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  console.log(input.join("\n").charCodeAt());
};

solution();

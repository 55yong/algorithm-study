const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = () => {
  const [a, b, c, d, e] = input.map((i) => Number(i));
  const sum = (a ** 2 + b ** 2 + c ** 2 + d ** 2 + e ** 2) % 10;

  console.log(sum);
};

solution();

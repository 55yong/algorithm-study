const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const [a, b] = input;
  const b1 = b.split("");
  let answer = 0;

  for (let i = 0; i < a; i++) {
    answer += parseInt(b1[i]);
  }
  console.log(answer);
};

solution();

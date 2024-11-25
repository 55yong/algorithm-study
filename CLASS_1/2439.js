const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const solution = () => {
  const answer = [];

  for (let i = 0; i < input; i++) {
    for (let j = i; j < input - 1; j++) {
      answer.push(" ");
    }
    for (let k = 0; k <= i; k++) {
      answer.push("*");
    }
    answer.push("\n");
  }

  console.log(answer.join(""));
};

solution();

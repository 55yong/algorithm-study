const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = () => {
  let answer = "";

  for (let i = 1; i <= input; i++) {
    answer += i + "\n";
  }

  process.stdout.write(answer);
};

solution();

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = () => {
  let answer = "";

  if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
    answer = "1\n";
  } else {
    answer = "0\n";
  }

  process.stdout.write(answer);
};

solution();

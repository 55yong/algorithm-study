const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  let a = input[0];
  let b = [];
  let answer = "";

  for (let i = 1; i <= a; i++) {
    b.push(input[i]);
  }

  b.forEach((e) => {
    const [a, b] = e.split(" ");
    answer += Number(a) + Number(b) + "\n";
  });

  process.stdout.write(answer);
};

solution();

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  let answer = [];
  let i = 0;

  while (true) {
    let a = input[i].split(" ");
    if (a[0] == "0" && a[1] == "0") break;
    answer.push(parseInt(a[0]) + parseInt(a[1]));
    i++;
  }

  console.log(answer.join("\n"));
};

solution();

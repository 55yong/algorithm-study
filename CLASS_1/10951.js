const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const solution = () => {
  let answer = [];

  input.forEach((e) => {
    let a = e.split(" ");
    answer.push(parseInt(a[0]) + parseInt(a[1]));
  });

  console.log(answer.join("\n"));
};

solution();

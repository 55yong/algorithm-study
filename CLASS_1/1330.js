const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = () => {
  const [a, b] = input.map((i) => Number(i));

  if (a > b) {
    console.log(">");
  } else if (a < b) {
    console.log("<");
  } else if (a == b) {
    console.log("==");
  }
};

solution();

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = () => {
  const a = Number(input);

  for (let i = 1; i < 10; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
  }
};

solution();

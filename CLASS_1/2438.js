const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = () => {
  const a = Number(input);

  for (let i = 0; i < a; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
};

solution();

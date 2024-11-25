const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const solution = () => {
  let answer = "";

  if (input >= 90) answer = "A";
  else if (input >= 80) answer = "B";
  else if (input >= 70) answer = "C";
  else if (input >= 60) answer = "D";
  else answer = "F";

  process.stdout.write(answer);
};

solution();

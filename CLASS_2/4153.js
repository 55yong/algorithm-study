const fs = require("fs");
const filepath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filepath).toString().trim().split("\n");

for (let line of input) {
  let values = line.split(" ").map((el) => parseInt(el));

  if (values[0] === 0) break;
  values.sort((a, b) => {
    return a - b;
  });

  if (values[0] * values[0] + values[1] * values[1] === values[2] * values[2]) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}

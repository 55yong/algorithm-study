const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let a = input[0] * input[1] * input[2];
let b = a.toString().split("");
let answer = new Array(10).fill(0);

for (let i = 0; i < b.length; i++) {
  switch (b[i]) {
    case "0":
      answer[0]++;
      break;
    case "1":
      answer[1]++;
      break;
    case "2":
      answer[2]++;
      break;
    case "3":
      answer[3]++;
      break;
    case "4":
      answer[4]++;
      break;
    case "5":
      answer[5]++;
      break;
    case "6":
      answer[6]++;
      break;
    case "7":
      answer[7]++;
      break;
    case "8":
      answer[8]++;
      break;
    case "9":
      answer[9]++;
      break;
  }
}

console.log(answer.join("\n"));

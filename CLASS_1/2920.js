const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const asc = [...input].sort();
const desc = [...input].sort((a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
});

if (JSON.stringify(input) === JSON.stringify(asc)) console.log("ascending");
else if (JSON.stringify(input) === JSON.stringify(desc))
  console.log("descending");
else console.log("mixed");

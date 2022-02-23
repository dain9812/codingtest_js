let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = input[0];

for (let i = 1; i <= n; i++) {
  let data = input[i];
  let score = 0;
  let length = 0;
  for (let c of data) {
    if (c == "O") {
      score += length + 1;
      length++;
    } else {
      length = 0;
    }
  }
  console.log(score);
}

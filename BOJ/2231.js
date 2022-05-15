let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let answer = 0;

for (let i = 1; i <= n; i++) {
  let arr = (i + "").split("");
  let sum = i + arr.reduce((sum, cur) => sum + Number(cur), 0);
  if (sum === n) {
    answer = i;
    break;
  }
}

console.log(answer);

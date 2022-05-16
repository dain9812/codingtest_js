let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let count = 1;
let answer = 666;

while (count !== n) {
  answer++;
  if (String(answer).includes(666)) count++;
}

console.log(answer);

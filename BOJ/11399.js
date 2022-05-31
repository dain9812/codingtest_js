let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.sort((a, b) => a - b);

let answer = 0;

arr.reduce((acc, cur) => {
  let sum = acc + cur;
  answer += sum;
  return sum;
}, 0);

console.log(answer);

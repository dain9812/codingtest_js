let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let primeNum = [];

for (let i of arr) {
  let num = [];
  for (let j = 2; j <= i; j++) {
    if (i % j === 0) num.push(j);
  }
  if (num.length === 1) primeNum.push(i);
}

console.log(primeNum.length);

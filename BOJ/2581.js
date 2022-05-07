let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let m = Number(input[0]);
let n = Number(input[1]);
let primeNum = [];

for (let i = m; i <= n; i++) {
  let arr = [];
  for (let j = 2; j <= i; j++) {
    if (i % j === 0) arr.push(j);
  }
  if (arr.length === 1) primeNum.push(i);
}

if (primeNum.length > 0) {
  let sum = 0;
  let min = Math.min(...primeNum);

  for (let n of primeNum) {
    sum += n;
  }

  console.log(sum);
  console.log(min);
} else {
  console.log(-1);
}

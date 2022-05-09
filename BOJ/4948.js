let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let max = Math.max(...input) * 2;
let primeNum = Array(max).fill(true);
primeNum[0] = false;
primeNum[1] = false;

for (let i = 2; i * i <= max; i++) {
  if (primeNum[i]) {
    for (let j = i * i; j <= max; j += i) {
      primeNum[j] = false;
    }
  }
}

for (let n of input) {
  let num = Number(n);
  let dnum = n * 2;
  if (num > 0) {
    let sum = 0;
    for (let i = num + 1; i <= dnum; i++) {
      if (primeNum[i] === true) {
        sum++;
      }
    }
    console.log(sum);
  }
}

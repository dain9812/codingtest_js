let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let upLeft = 0;
    if (j !== 0) upLeft = arr[i - 1][j - 1];
    let upRight = 0;
    if (j !== i) upRight = arr[i - 1][j];
    arr[i][j] = arr[i][j] + Math.max(upLeft, upRight);
  }
}

console.log(Math.max(...arr[n - 1]));

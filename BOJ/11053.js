let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let dp = Array(n).fill(0);
for (let i = 0; i < n; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j] && dp[j] > max) {
      max = dp[j];
    }
  }
  dp[i] = max + 1;
}

console.log(Math.max(...dp));

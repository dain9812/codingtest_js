let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let dp = [];

for (let i = 0; i < n; i++) {
  dp[i] = arr[i];
  if (dp[i] < dp[i - 1] + dp[i]) {
    dp[i] = dp[i - 1] + dp[i];
  }
}

console.log(Math.max(...dp));

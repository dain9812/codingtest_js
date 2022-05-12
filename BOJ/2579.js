let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input.shift();
let arr = [];
for (let i of input) {
  arr.push(Number(i));
}

let dp = [];
dp[0] = arr[0];
dp[1] = arr[0] + arr[1];
dp[2] = Math.max(arr[1] + arr[2], arr[0] + arr[2]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
}

console.log(dp[n - 1]);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());
let arr = input.map((e) => Number(e));

let dp = Array(n + 1).fill(0);
dp[1] = arr[0];
dp[2] = arr[0] + arr[1];
for (let i = 3; i <= n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    dp[i - 2] + arr[i - 1],
    dp[i - 3] + arr[i - 2] + arr[i - 1]
  );
}

console.log(dp[n]);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);

let dp = Array.from(Array(n + 1), () => new Array(10));
dp[1] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];
dp[2] = [1, 1, 2, 2, 2, 2, 2, 2, 2, 1];

for (let i = 3; i <= n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][j + 1] % 1000000000;
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][j - 1] % 1000000000;
    } else {
      dp[i][j] = (dp[i - 1][j + 1] + dp[i - 1][j - 1]) % 1000000000;
    }
  }
}

let sum = 0;
for (let i of dp[n]) {
  sum += i;
}

console.log(sum % 1000000000);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let d = new Array(k + 1).fill(10001);
d[0] = 0;
for (let i = 0; i < n; i++) {
  for (let j = arr[i]; j <= k; j++) {
    if (d[j - arr[i]] !== 10001) {
      d[j] = Math.min(d[j], d[j - arr[i]] + 1);
    }
  }
}

if (d[k] === 10001) console.log(-1);
else console.log(d[k]);

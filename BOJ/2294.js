let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let d = new Array(k + 1).fill(10001);
d[0] = 0;
for (let coin of arr) {
  for (let x = 0; x <= k - coin; x++) {
    // x원을 만들 수 있는지 확인
    if (d[x] !== 10001) {
      // x원을 만들 수 있다면, (x + coin)원도 만들 수 있음
      d[x + coin] = Math.min(d[x + coin], d[x] + 1);
    }
  }
}

if (d[k] === 10001) console.log(-1);
else console.log(d[k]);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);
let x = 1;
let arr = [];

for (let i = 0; i < t; i++) {
  arr.push([input[x], input[x + 1]]);
  x += 2;
}

let floor = [];
let sum = 0;

for (let data of arr) {
  let [k, n] = data.map(Number);
  for (let i = 0; i <= k; i++) {
    floor[i] = [];
    for (let j = 1; j <= n; j++) {
      if (i === 0) {
        floor[i].push(j);
      } else {
        sum += floor[i - 1][j - 1];
        floor[i].push(sum);
        if (j === n) sum = 0;
      }
    }
  }
  console.log(floor[k][n - 1]);
}

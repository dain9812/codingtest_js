let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let start = n;
let cycle = 0;

while (true) {
  n = n + "";
  if (n.length == 1) {
    n = "0" + n;
  }

  let sum = Number(n[0]) + Number(n[1]);
  n = Number(n[1]) * 10 + (sum % 10);

  cycle++;
  if (n == start) break;
}

console.log(cycle);

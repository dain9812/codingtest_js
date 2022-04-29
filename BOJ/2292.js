let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

let x = 1;
let sum = 1;

while (sum < n) {
  sum += 6 * x;
  x++;
}

console.log(x);

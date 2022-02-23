let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = input[0];
let score = input[1].split(" ").map(Number);
let max = Math.max(...score);

let result = 0;
for (let i of score) {
  result += (i / max) * 100;
}

console.log(result / n);

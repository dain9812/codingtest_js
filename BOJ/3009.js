let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let X = 0;
let Y = 0;

input.map((line) => {
  let [x, y] = line.split(" ").map(Number);
  X ^= x;
  Y ^= y;
});

console.log(X, Y);

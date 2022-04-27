let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b, c] = input[0].split(" ").map(Number);
let result = b - c > 0 ? -1 : Math.floor(a / (c - b)) + 1;

console.log(result);

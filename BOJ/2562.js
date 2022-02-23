let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = input.map(Number);
let max = Math.max(...n);
let i = n.indexOf(max) + 1;

console.log(max);
console.log(i);

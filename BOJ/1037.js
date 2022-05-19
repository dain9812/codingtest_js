let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());
let arr = input[0].split(" ").map(Number);
let answer = Math.max(...arr) * Math.min(...arr);

console.log(answer);

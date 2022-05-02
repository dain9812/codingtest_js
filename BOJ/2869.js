let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b, v] = input[0].split(" ").map(Number);
let day = 0;
day = Math.ceil((v - b) / (a - b));

console.log(day);

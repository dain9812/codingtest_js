let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [a, b] = input[0].split(" ").map(BigInt);
let sum = (a + b).toString();

console.log(sum);

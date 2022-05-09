let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let group = input[0].split("").map(Number);

let result = group.sort((a, b) => b - a);

console.log(result.join(""));

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

// g -> 전역 탐색
let word = input[0].replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, "r");

console.log(word.length);

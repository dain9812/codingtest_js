let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [x, y, w, h] = input[0].split(" ").map(Number);

let answer = Math.min(x, y, Math.abs(x - w), Math.abs(y - h));

console.log(answer);

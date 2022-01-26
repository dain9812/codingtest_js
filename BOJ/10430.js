let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");

let A = Number(line[0]);
let B = Number(line[1]);
let C = Number(line[2]);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let r = Number(input[0]);

let s1 = (r * r * Math.PI).toFixed(6);
let s2 = (r * r * 2).toFixed(6);

console.log(s1);
console.log(s2);

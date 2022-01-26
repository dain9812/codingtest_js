let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let result = "";

if (n <= 100 && n >= 90) result = "A";
else if (n <= 89 && n >= 80) result = "B";
else if (n <= 79 && n >= 70) result = "C";
else if (n <= 69 && n >= 60) result = "D";
else result = "F";

console.log(result);

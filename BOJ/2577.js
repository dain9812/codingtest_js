let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let multi = (a * b * c).toString().split("").map(Number);

let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0; i < multi.length; i++) {
  result[multi[i]] = result[multi[i]] + 1;
}

result.map((data) => console.log(data));

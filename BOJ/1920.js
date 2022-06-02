let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let nSet = new Set(input[1].split(" ").map(Number));
let m = Number(input[2]);
let mArr = input[3].split(" ").map(Number);

let answer = [];
mArr.forEach((m) => {
  if (nSet.has(m)) {
    answer.push("1");
  } else {
    answer.push("0");
  }
});

console.log(answer.join("\n"));

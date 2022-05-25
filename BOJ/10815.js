let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let m = Number(input[2]);

let nCard = new Set(input[1].split(" ").map(Number));
let mCard = input[3].split(" ").map(Number);

let answer = [];
mCard.forEach((v) => {
  if (nCard.has(v)) {
    answer.push("1");
  } else {
    answer.push("0");
  }
});

console.log(answer.join(" "));

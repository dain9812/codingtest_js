let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0];

for (let i = 1; i <= line; i++) {
  let a = Number(input[i].split(" ")[0]);
  let b = Number(input[i].split(" ")[1]);
  console.log(a + b);
}

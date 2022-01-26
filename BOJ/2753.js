let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let result;

if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) {
  result = 1;
} else {
  result = 0;
}

console.log(result);

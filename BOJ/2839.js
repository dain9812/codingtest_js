let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let roof = 0;
let result = 0;

while (true) {
  if (n % 5 === 0) {
    result = n / 5 + roof;
    break;
  } else if (n <= 0) {
    result = -1;
    break;
  }
  n -= 3;
  roof++;
}

console.log(result);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let i = 1;

while (true) {
  n -= i;
  if (n <= 0) {
    n += i;
    break;
  }
  i++;
}

if (i % 2 === 1) {
  console.log(`${i - (n - 1)}/${1 + (n - 1)}`);
} else {
  console.log(`${1 + (n - 1)}/${i - (n - 1)}`);
}

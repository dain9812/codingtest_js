let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let x = 2;

if (n !== 1) {
  while (true) {
    if (n % x === 0) {
      n = n / x;
      console.log(x);
      x = 2;
    } else {
      x++;
    }
    if (n === 1) break;
  }
}

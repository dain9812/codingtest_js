let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const n = Number(input[0]);

const factorial = (num) => {
  if (num === 0) {
    return 1;
  } else if (num <= 2) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
};

console.log(factorial(n));

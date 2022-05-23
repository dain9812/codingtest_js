let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = Number(input.shift());

let factorial = (n) => {
  let sum = 1;
  for (let i = 1; i <= n; i++) {
    sum *= i;
  }
  return sum;
};

let answer = [];
for (let line of input) {
  let bridge = 0;
  let [x, y] = line.split(" ").map(Number);
  bridge = factorial(y) / (factorial(x) * factorial(y - x));
  answer.push(parseInt(bridge + 0.5));
}

console.log(answer.join("\n"));

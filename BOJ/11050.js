let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);

let factorial = (x) => {
  let sum = 1;
  for (let i = 1; i <= x; i++) {
    sum *= i;
  }
  return sum;
};

// n! / (k! * (n-k)!)
let answer = factorial(n) / (factorial(k) * factorial(n - k));

console.log(answer);

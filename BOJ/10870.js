let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let arr = Array(n + 1).fill(0);

let fibo = (num) => {
  if (num === 1 || num === 0) return num;
  return fibo(num - 1) + fibo(num - 2);
};

console.log(fibo(n));

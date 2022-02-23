let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, x] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);

let result = "";
for (let i = 0; i < n; i++) {
  if (a[i] < x) {
    result += a[i] + " ";
  }
}

console.log(result);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input.shift().split(" ").map(Number);
let nameMap = new Map();
let numMap = new Map();
for (let i = 0; i < n; i++) {
  nameMap.set(i + 1, input[i]);
  numMap.set(input[i], i + 1);
}

let answer = "";
for (let i = n; i < input.length; i++) {
  if (isNaN(input[i])) {
    answer += numMap.get(input[i]) + "\n";
  } else {
    answer += nameMap.get(+input[i]) + "\n";
  }
}
console.log(answer);

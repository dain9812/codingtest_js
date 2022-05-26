let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let s = new Set();
let char = [];

for (let i = 1; i < input.length; i++) {
  if (i <= n) {
    s.add(input[i]);
  } else {
    char.push(input[i]);
  }
}

let answer = 0;
char.forEach((v) => {
  if (s.has(v)) answer += 1;
});

console.log(answer);

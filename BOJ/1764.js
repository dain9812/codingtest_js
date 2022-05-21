let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input.shift().split(" ").map(Number);

let nSet = new Set();
let mSet = new Set();

for (let i = 0; i < input.length; i++) {
  if (i < n) {
    nSet.add(input[i]);
  } else {
    mSet.add(input[i]);
  }
}

// has(val) Set 컬렉션 내에 val의 존재유무 판단
let answer = [];
mSet.forEach((name) => {
  if (nSet.has(name)) answer.push(name);
});
answer.sort();

console.log(answer.length + "\n" + answer.join("\n"));

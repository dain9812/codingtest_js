let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let setArr = [...new Set(arr)];
setArr.sort((a, b) => a - b);

let numMap = new Map();
for (let i = 0; i < setArr.length; i++) {
  numMap.set(setArr[i], i);
}

let answer = [];
for (let num of arr) {
  answer.push(numMap.get(num));
}

console.log(answer.join(" "));

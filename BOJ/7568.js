let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = Number(input.shift());
let arr = input.map((line) => line.split(" ").map(Number));
let answer = [];

for (let i = 0; i < n; i++) {
  let grade = 1;
  for (let j = 0; j < n; j++) {
    if (i !== j) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) grade++;
    }
  }
  answer.push(grade);
}

console.log(answer.join(" "));

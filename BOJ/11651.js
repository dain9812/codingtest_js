let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().split("\n");

let n = Number(input[0]);
let data = [];

for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  data.push([x, y]);
}

data.sort((a, b) => {
  if (a[1] != b[1]) {
    return a[1] - b[1]; // x좌표 기준 오름차순
  } else {
    return a[0] - b[0]; // x가 같으면 y좌표 기준 오름차순
  }
});

let answer = "";
for (let point of data) {
  answer += point[0] + " " + point[1] + "\n";
}
console.log(answer);

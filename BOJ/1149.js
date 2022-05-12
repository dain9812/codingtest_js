let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let n = input.shift();
let rgb = input.map((e) => e.split(" ").map(Number));

for (let i = 1; i < n; i++) {
  rgb[i][0] = Math.min(rgb[i - 1][1], rgb[i - 1][2]) + rgb[i][0];
  rgb[i][1] = Math.min(rgb[i - 1][0], rgb[i - 1][2]) + rgb[i][1];
  rgb[i][2] = Math.min(rgb[i - 1][0], rgb[i - 1][1]) + rgb[i][2];
}

console.log(Math.min(...rgb[n - 1]));

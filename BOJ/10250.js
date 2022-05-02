let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);
let arr = [];

for (let i = 1; i <= t; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let data of arr) {
  let [h, w, n] = data;
  w = 0;
  while (n > 0) {
    n -= h;
    w++;
  }
  n += h;
  console.log(n + "" + (w < 10 ? `0${w}` : w));
}

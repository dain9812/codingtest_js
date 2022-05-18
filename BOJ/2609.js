let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [x, y] = input[0].split(" ").map(Number);
let gcd = 1;
let gcdArr = [];
let count = 1;
let lcm = Math.min(x, y);

while (true) {
  if (Math.max(x, y) < gcd) break;
  if (x % gcd === 0 && y % gcd === 0) gcdArr.push(gcd);
  gcd++;
}

while (true) {
  if ((lcm * count) % x === 0 && (lcm * count) % y === 0) break;
  count++;
}

console.log(Math.max(...gcdArr));
console.log(lcm * count);

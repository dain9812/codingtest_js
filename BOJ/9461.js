let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let testCases = Number(input[0]);
let line = 1;
let d = new Array(101).fill(0);
d[1] = 1;
d[2] = 1;
d[3] = 1;

while (testCases--) {
  let n = Number(input[line]);

  for (let x = 4; x <= n; x++) {
    d[x] = d[x - 2] + d[x - 3];
  }

  console.log(d[n]);

  line++;
}

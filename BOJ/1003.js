let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = input.shift();

for (let i = 0; i < t; i++) {
  let n = input[i];
  let fibo = [
    [1, 0],
    [0, 1],
  ];

  for (let j = 2; j <= n; j++) {
    fibo[j] = [
      fibo[j - 1][0] + fibo[j - 2][0],
      fibo[j - 1][1] + fibo[j - 2][1],
    ];
  }

  console.log(fibo[n].join(" "));
}

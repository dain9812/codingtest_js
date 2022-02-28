let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, k] = input[0].split(" ").map(Number);

let result = 0;
for (let i = 0; i <= n; i++) {
  for (let j = 0; j < 60; j++) {
    for (let l = 0; l < 60; l++) {
      let time = i + "" + j + "" + l;
      if (time.includes(k) || (k == 0 && (i < 10 || j < 10 || l < 10)))
        result++;
    }
  }
}

console.log(result);

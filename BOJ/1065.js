let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

function d(n) {
  if (n < 100) {
    return true;
  } else {
    let str = n + "";
    let a = str[1] - str[0];
    for (let i = 1; i < str.length - 1; i++) {
      let d = str[i + 1] - str[i];
      if (a != d) return false;
    }
  }
  return true;
}

let n = Number(input[0]);
let result = 0;

for (let i = 1; i <= n; i++) {
  if (d(i)) {
    result += 1;
  }
}

console.log(result);

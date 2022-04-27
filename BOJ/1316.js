let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let result = 0;

for (let i = 1; i <= n; i++) {
  let words = {};
  let tf = true;
  for (let j = 0; j < input[i].length; j++) {
    if (!words[input[i][j]]) {
      words[input[i][j]] = 1;
    } else {
      if (input[i][j] === input[i][j - 1]) words[input[i][j]]++;
      else {
        tf = false;
        break;
      }
    }
  }
  if (tf) result++;
}

console.log(result);

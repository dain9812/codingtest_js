let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);

for (let i = 1; i <= n; i++) {
  let answer = "";
  let [t, s] = input[i].split(" ");
  for (let j = 0; j < s.length; j++) {
    answer += s[j].repeat(t);
  }
  console.log(answer);
}

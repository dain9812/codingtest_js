let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let t = Number(input.shift());

while (t) {
  let n = Number(input.shift());
  let arr = [];
  let cloth = [];
  for (let i = 0; i < n; i++) {
    arr.push(input.shift().split(" ")[1]);
  }

  arr.forEach((wear) => {
    if (!cloth[wear]) cloth[wear] = [];
    cloth[wear].push("o");
  });

  let answer = 1;
  for (let kind in cloth) {
    answer *= cloth[kind].length + 1;
  }
  console.log(answer - 1);
  t--;
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let word = input[0].split("");

let num = {
  2: "ABC",
  3: "DEF",
  4: "GHI",
  5: "JKL",
  6: "MNO",
  7: "PQRS",
  8: "TUV",
  9: "WXYZ",
};
let result = 0;

for (let i = 0; i < word.length; i++) {
  for (let j = 2; j <= 9; j++) {
    if (num[j].includes(word[i])) {
      result += j + 1;
    }
  }
}

console.log(result);

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let word = input[0].toUpperCase();
let count = new Array(26).fill(0);

for (let i = 0; i < word.length; i++) {
  count[word[i].charCodeAt() - 65] += 1;
}

let max = Math.max(...count);
let result = count.filter((c) => c === max);

result.length > 1
  ? console.log("?")
  : console.log(String.fromCharCode(count.findIndex((c) => c === max) + 65));

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let word = input[0];
let arr = [];

for (let i = 97; i <= 122; i++) {
  arr.push(word.indexOf(String.fromCharCode(i)));
}

arr = arr.join(" ");

console.log(arr);

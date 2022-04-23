let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let line = input[0].split(" ");
let [a, b] = line.map((n) => {
  let num = n.split("").reverse().join("");
  return num;
});

if (a < b) {
  console.log(b);
} else {
  console.log(a);
}

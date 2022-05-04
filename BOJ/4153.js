let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

for (line of input) {
  let value = line.split(" ").map(Number);
  if (value[0] === 0) break;
  value.sort((a, b) => a - b);
  let [a, b, c] = value;
  a * a + b * b === c * c ? console.log("right") : console.log("wrong");
}

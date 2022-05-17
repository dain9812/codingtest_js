let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let [x, y] = input[i].split(" ").map(Number);

  if (x === 0 && y === 0) {
    return;
  }

  if (x % y === 0) {
    console.log("multiple");
  } else if (y % x === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
}

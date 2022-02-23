let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let c = Number(input[0]);

for (let i = 1; i <= c; i++) {
  let data = input[i].split(" ").map(Number);
  let n = data[0];
  let result = 0;
  for (let j = 1; j <= data.length - 1; j++) {
    result += data[j];
  }
  result = result / (data.length - 1);
  let student = 0;
  for (let j = 1; j <= data.length - 1; j++) {
    if (data[j] > result) {
      student += 1;
    }
  }
  let sum = (student / n) * 100;
  sum = sum.toFixed(3);

  console.log(`${sum}%`);
}

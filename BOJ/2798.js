let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let result = 0;

for (let i = 0; i < n; i++) {
  for (let j = i + 1; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      if (arr[i] + arr[j] + arr[k] <= m && arr[i] + arr[j] + arr[k] > result) {
        result = arr[i] + arr[j] + arr[k];
      }
    }
  }
}

console.log(result);

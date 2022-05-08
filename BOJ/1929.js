let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [m, n] = input[0].split(" ").map(Number);
let isPrimeNum = Array(n + 1).fill(true);
isPrimeNum[1] = false;

for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
  if (isPrimeNum[i]) {
    let j = 2;
    while (i * j <= n) {
      isPrimeNum[i * j] = false;
      j++;
    }
  }
}

for (let i = m; i <= n; i++) {
  if (isPrimeNum[i]) {
    console.log(i);
  }
}

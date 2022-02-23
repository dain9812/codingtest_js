let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let data = [];

for (let i = 1; i <= n; i++) {
  data.push(input[i]);
}

// 집합(Set)으로 바꿔준 뒤에 다시 리스트로 돌려주기
data = [...new Set(data)];

function compare(a, b) {
  if (a.length == b.length) {
    // 사전순 정렬
    if (a < b) return -1;
    if (a > b) return 1;
    else return 0;
  } else return a.length - b.length;
}

data.sort(compare);

for (let x of data) console.log(x);

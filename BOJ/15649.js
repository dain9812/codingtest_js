let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let visited = new Array(n).fill(false);
let answer = [];
let dfs = (x) => {
  if (x === m) {
    console.log(answer.join(" "));
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      visited[i] = true;
      answer[x] = i;
      dfs(x + 1);
      visited[i] = false;
    }
  }
};

dfs(0);

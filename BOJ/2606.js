let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);

let graph = [];

for (let i = 0; i <= n; i++) graph.push([]);

for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let result = 0;
let visited = new Array(n + 1).fill(false);

function dfs(x) {
  visited[x] = true;
  result++;
  for (let i of graph[x]) {
    if (visited[i] === false) {
      dfs(i);
    }
  }
}

dfs(1);
console.log(result - 1);

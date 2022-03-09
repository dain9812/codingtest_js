let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let [n, m, v] = input[0].split(" ").map(Number);

let graph = [];
let visited = [];
let visited2 = [];
let dfs_graph = [];
let bfs_graph = [];

graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
visited = new Array(n + 1).fill(false);
visited2 = new Array(n + 1).fill(false);

for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x][y] = 1;
  graph[y][x] = 1;
}

function dfs(v) {
  visited[v] = true;
  dfs_graph.push(v);
  for (let i = 1; i < graph.length; i++) {
    if (graph[v][i] === 1 && visited[i] === false) dfs(i);
  }
}

function bfs(v) {
  let queue = [];
  queue.push(v);
  bfs_graph.push(v);

  while (queue.length !== 0) {
    let dequeue = queue.shift();
    visited2[dequeue] = true;
    for (let i = 1; i < graph.length; i++) {
      if (graph[dequeue][i] === 1 && visited2[i] === false) {
        visited2[i] = true;
        queue.push(i);
        bfs_graph.push(i);
      }
    }
  }
  return;
}

dfs(v);
bfs(v);

console.log(dfs_graph.join(" "));
console.log(bfs_graph.join(" "));

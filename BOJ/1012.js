let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let t = Number(input[0]);
let line = 1;

while (t--) {
  let [n, m, k] = input[line].split(" ").map(Number);
  let graph = [];
  let visited = [];

  // for(let i = 0; i < n; i++) {
  //   graph.push(new Array(m).fill(0));
  //   visited.push(new Array(m).fill(false));
  // }
  graph = Array.from(new Array(n), () => new Array(m).fill(0));
  visited = Array.from(new Array(n), () => new Array(m).fill(false));

  for (let i = line + 1; i <= line + k; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    graph[x][y] = 1;
  }

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  function dfs(x, y) {
    visited[x][y] = true;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (graph[nx][ny] === 1 && visited[nx][ny] === false) dfs(nx, ny);
    }
  }

  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 1 && visited[i][j] === false) {
        dfs(i, j);
        result++;
      }
    }
  }

  console.log(result);
  line += k + 1;
}

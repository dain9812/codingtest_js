let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let n = Number(input[0]);
let data = [];
let visited = [];

for (let i = 1; i <= n; i++) {
  let line = input[i].split("").map(Number);
  data.push(line);
  visited.push(new Array(n).fill(false));
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function dfs(x, y) {
  cnt++;
  visited[x][y] = true; // 방문 처리
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    // 맵의 범위를 벗어난 경우 무시
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    // 해당 위치가 집이면서, 아직 방문하지 않은 위치인 경우
    if (data[nx][ny] === 1 && visited[nx][ny] === false) {
      dfs(nx, ny);
    }
  }
}

let result = 0;
let resultList = [];
let cnt = 0; // 현재 단지에 포함된 집의 수
// 모든 위치를 확인하며
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    // 해당 위치가 집이며, 아직 방문하지 않은 경우 (해당 위치가 포함된 단지를 처리하지 않은 경우)
    if (data[i][j] === 1 && visited[i][j] === false) {
      dfs(i, j);
      result++;
      resultList.push(cnt); // 단지에 포함된 집의 수를 삽입
      cnt = 0;
    }
  }
}

console.log(result); // 단지의 수 출력
resultList.sort((a, b) => a - b);
for (let x of resultList) {
  console.log(x);
}

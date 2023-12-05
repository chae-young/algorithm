const fs = require('fs');
const input = fs.readFileSync(__dirname + '/11724_연결요소의개수.txt').toString().trim().split('\n');
const [N, M] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);
const visit = Array(N + 1).fill(false);

let answer = 0;

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);
  graph[u].push(v);
  graph[v].push(u);
}

function dfs(cur) {
    
  visit[cur] = true;
  for (const next of graph[cur]) {
    if (!visit[next]) {
      dfs(next);
    }
  }
}

for (let i = 1; i <= N; i++) {
  if (!visit[i]) {
    answer++;
    dfs(i);
  }
}

console.log(answer);





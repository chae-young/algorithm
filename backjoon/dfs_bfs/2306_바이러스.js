const fs = require('fs');
const input = fs.readFileSync(__dirname + '/2306_바이러스.txt').toString().trim().split('\n');
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [computer,twin, ...twinNumber] = input
twinNumber = twinNumber.map((v) => v.split(' ').map(Number));

// 1이랑 연결되어 있으면 바이러스 걸림.
const graph = Array.from({length : Number(computer) + 1 }, () => [])
let visit = Array.from({length : Number(computer) + 1 }, () => 0)
let answer = 0

function dfs(graph,visit,cur){
  if(visit[cur]){
      return;
  }
  visit[cur] = 1;
  answer++
  graph[cur].forEach((next) => dfs(graph,visit,next))
}

for(let i = 0; i < +twin; i++){
  const [first,second] = twinNumber[i];
  graph[first].push(second)
  graph[second].push(first)
}

dfs(graph,visit,1);
console.log(answer - 1)








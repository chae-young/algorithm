const fs = require('fs');
const input = fs.readFileSync(__dirname + '/1012_유기농배추.txt').toString().trim().split('\n');
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const T = +input.shift();
const inputArr = input.map((v) => v.split(" ").map(Number));
let farm;
let visit;

function dfs(x,y,n,m,farm,visit){
  if(x < 0 || x >= n || y < 0 || y >= m){
    return
  }
  if(farm[x][y] === 0 || visit[x][y] === true){
    return
  }
  visit[x][y] = true;
  dfs(x-1,y,n,m,farm,visit)
  dfs(x+1,y,n,m,farm,visit)
  dfs(x,y-1,n,m,farm,visit)
  dfs(x,y+1,n,m,farm,visit)
}


for(let i = 0; i < T; i++){
  let answer = 0;
  let [m,n,k] = inputArr.shift();

  farm = Array.from({length: n},() => Array(m).fill(0));
  visit = Array.from({length: n},() => Array(m).fill(false));
  
  while(k > 0){
    k--;
    const [x,y] = inputArr.shift();
    farm[y][x] = 1
  }

  for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
      if(farm[i][j] === 1 && visit[i][j] === false){
        dfs(i, j, n, m, farm, visit);
        answer++
      }
    }
  }

  console.log(answer)
}


/* let [N, ...struc] = input;
const town = [];
const visit = [];
let houseCount = 0; 

for(let i = 0; i < N; i++){
  town.push([]);
  visit.push([]);
  for(let k = 0; k < N; k++){
    town[i].push(struc[i][k])
    visit[i].push(0)
  }
}

let danjiCount = 0;
const danjiHouse = [] // 집의수

function dfs(x,y){
  // 유효하지 않은 위치면 리턴
  if(x < 0 || x >= N || y < 0 || y >= N){
    return;
  }
  // 집이없거나 방문한곳이면 종료
  if(town[x][y] === '0' || visit[x][y] === 1){
    return;
  }

  visit[x][y] = 1;
  houseCount++;

  dfs(x - 1,y)
  dfs(x + 1,y)
  dfs(x,y - 1)
  dfs(x,y + 1)
}
//이제 모든 위치를 순회하면서 단지를 찾고, 각 단지의 집의 수를 계산.
for(let i = 0; i < N; i++){
  for(let j = 0; j < N; j++){
    if(town[i][j] === '1' && visit[i][j] === 0){
       // 아직 방문하지 않은 집을 발견하면 새로운 단지 시작
      danjiCount++;
      houseCount = 0; 
      dfs(i,j)
      danjiHouse.push(houseCount)
    }
  }
}
danjiHouse.sort((a, b) => a - b);
danjiHouse.unshift(danjiCount)

console.log(danjiHouse.join('\n'))

 */





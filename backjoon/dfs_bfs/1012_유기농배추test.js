const fs = require('fs');
const input = fs.readFileSync(__dirname + '/1012_유기농배추.txt').toString().trim().split('\n');

const T = +input.shift();
const inputArr = input.map(v => v.split(' ').map(Number))

let farm;
let visit;
// 가로길이 m 세로길이 n 배추가 심어져있는 개수 k
// 배추의 위치 x y

function dfs(x,y,n,m,farm,visit){
    if(x < 0 || x >= n || y < 0 || y >= m){
        return
    }
    if(farm[x][y] === 0 || visit[x][y] === true){
        return
    }
    visit[x][y] = true;
    dfs(x-1,y,n,m,farm,visit);
    dfs(x+1,y,n,m,farm,visit);
    dfs(x,y-1,n,m,farm,visit);
    dfs(x,y+1,n,m,farm,visit);
}

// 테스트 케이스가 2개임.
for(let i = 0; i < T; i++){
    let answer = 0;
    let [m,n,k] = inputArr.shift();

    // 좌표를 그려준다.
    farm = Array.from({length: n}, () => Array(m).fill(0));
    visit = Array.from({length: n}, () => Array(m).fill(false));
    // 배추를 심어준다.
    while(k > 0){
        k--;
        const [x,y] = inputArr.shift()
        console.log(farm,x,y)
        farm[y][x] = 1
    }

    //탐색
    for(let i = 0; i < n; i++){
        for(let j = 0; i < m; j++){
            if(farm[i][j] === 1 && visit[i][j] === false){
                dfs(i,j,n,m,farm,visit);
                answer++
            }
        }
    }
}
console.log(farm)
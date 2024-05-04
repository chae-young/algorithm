const fs = require('fs');
let input = fs.readFileSync(__dirname + '/18111_마인크래프트.txt').toString().trim().split('\n');
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

//세로: n 가로:m 높이: b
const [N, M, B] = input.shift().split(' ').map(Number)
const arr = input.map(i => i.split(" ").map(Number));

let minTime = Infinity;
let minHeight = 0;

for (let targetHeight = 0; targetHeight <= 256; targetHeight++) {
    let time = 0;
    let inventory = B;
  
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < M; j++) {
        const currentHeight = arr[i][j];
  
        if (currentHeight < targetHeight) {
          // 현재 위치의 높이가 목표 높이보다 낮을 때
          const diff = targetHeight - currentHeight;
          time += diff; // 블록을 꺼내어 놓는 시간 추가
          inventory -= diff; // 인벤토리에서 블록을 꺼냄
        } else if (currentHeight > targetHeight) {
          // 현재 위치의 높이가 목표 높이보다 높을 때
          const diff = currentHeight - targetHeight;
          time += diff * 2; // 블록을 제거하는 시간 추가
          inventory += diff; // 인벤토리에 블록을 넣음
        }
      }
    }

    if (inventory >= 0 && time <= minTime) {
      minTime = time;
      minHeight = targetHeight;
    }
  }  

console.log(minTime,minHeight)






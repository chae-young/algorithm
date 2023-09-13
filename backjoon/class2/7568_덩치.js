const fs = require('fs');
const input = fs.readFileSync(__dirname + '/7568_덩치.txt').toString().trim().split('\n');
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [a,...b] = input
b = b.map(v => v.split(' ').map(Number));

// 내 덩치보다 큰사람이 있으면 k+1이다. 내덩치보다 큰사람이 몇명있냐?

let k = 0
const result = []

function findBig([mybody,myTall]){
  k = 0;
  for(let i = 0; i < b.length; i++){
    const [x,y] = b[i];
  
    if(mybody < x && myTall < y) {
      k++
    }
  }
  result.push(k+1)
}

for(let j = 0; j < b.length; j++){
  findBig(b[j])
}

console.log(result.join(' '))



/* 다른사람 풀이 */
const [N, ...A] = input;
const arr = A.map((s) => s.split(' ').map(Number));
let rank = [];

arr.forEach((a,i) =>{
  let cnt = 1;
  arr.forEach((b,j) => {
    if(i !== j && a[0] < b[0] && a[0] < b[1]) cnt++;
  })
  rank.push(cnt)
})

console.log(rank.join('\n'));

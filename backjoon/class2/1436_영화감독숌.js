const fs = require('fs');
const input = fs.readFileSync(__dirname + '/1436_영화감독숌.txt').toString().trim().split('\n')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

//666을 포할하는 숫자중에 N번째로 가장 작은수
const [n] = input[0].split(' ');

let count = 0;
let startNum = 666;
let strStartNum = ''

while(true){
    // 666을 포함하는 숫자
    strStartNum = String(startNum);
    if(strStartNum.includes('666')) count++
    if(count == n) break;
    startNum++   
}

console.log(startNum)

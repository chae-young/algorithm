const fs = require('fs');
const { type } = require('os');
const input = fs.readFileSync(__dirname + '/2231_분해합.txt').toString().trim();
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a,b] = input
let num = 0;
let flag = false

for(let i = 1; i <= Number(input); i++){
  const strNum = String(i);
  let decompositionSum = 0;
  let sum = 0;

  for(let j = 0; j < strNum.length; j++){
    decompositionSum += strNum[j] * 1;
    sum = i + decompositionSum
  }

  if(input == sum) {
    num = i;
    flag = true;
    break;
  }
}

console.log(num)



/* 반ㄹㅖ 20 */
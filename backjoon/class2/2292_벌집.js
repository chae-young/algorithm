const fs = require('fs');
const input = Number(fs.readFileSync(__dirname + '/2292_벌집.txt').toString().trim());
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a,b] = input

// 1번이면 1.
// 2번이면 7이하
// 3번이면 19이하
// 4번이면 37이하
// 5번이면 61이하

// let N = 1; 
// let count = 0;

// if(input === 1) return console.log(1)

// for(let i = 0; i <= 1000000000; i += 6){
//   const room = N += i;

//   count++

//   if(input <= room){
//     return console.log(count)
//   }
// }





/* 반ㄹㅖ 20 */

/* 풀아 */
let i = 1,
  sum = 1;

while (sum < input) {
  sum += 6 * i;
  console.log(sum,i)
  i++;
}

console.log(i);
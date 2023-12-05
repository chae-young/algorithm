const fs = require('fs');
let input = fs.readFileSync(__dirname + '/1541_잃어버린괄호.txt').toString().trim();
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


// let answer = 0;
// const sumArr = input.split('-')
// const sum = sumArr.filter(num => num.includes('+'))[0]?.split('+').reduce((acc,cur) =>  acc + Number(cur),0)
// const sub = sumArr.filter(num => !num.includes('+'));

// if(!sum){
//     answer = sub.reduce((acc,cur) => acc - Number(cur))
//     return console.log(answer)
// }

// answer = sub.reduce((acc,cur) => Number(cur) - sum,sum)
// console.log(answer)

const numbers = input.split('-').map((str) => str.split('+').map(Number).reduce((acc,cur) => acc + cur))


console.log(numbers.reduce((acc,cur) => acc -= cur))
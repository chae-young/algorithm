const fs = require('fs');
const input = fs.readFileSync(__dirname + '/11720_숫자의합.txt').toString().trim().split('\n')
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').split('\n');
const [a,num] = input;
let answer = 0;

for(let i = 0; i < num.length; i++){
    answer += num[i]*1
}

console.log(answer)
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/1152_단어의개수.txt').toString().trim().split(' ')
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').split('\n');
// const [a,b] = input
if(input[0] === '') return console.log(0)

console.log(input.length)
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/2475_검증수.txt').toString().trim().split(' ').map(Number)
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').split('\n');
// const [a,b] = input
const answer = input.reduce( (acc,curr) => acc + ((curr) ** 2) ) % 10

console.log(answer)
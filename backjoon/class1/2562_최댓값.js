const fs = require('fs');
const input = fs.readFileSync(__dirname + '/2562_최댓값.txt').toString().trim().split("\n");
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a,b] = input

const MaxNumber = Math.max(...input)
console.log(MaxNumber)
console.log(input.indexOf(MaxNumber+'')+1)
const fs = require('fs');
const input = fs.readFileSync(__dirname + '/문자와문자열.txt').toString().split(' ')
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const [a,b] = input

console.log(a[b-1])
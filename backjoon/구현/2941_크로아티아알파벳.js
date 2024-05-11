const fs = require('fs');
let input = fs.readFileSync(__dirname + '/2941_크로아티아알파벳.txt').toString().trim();
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const alphabet = ['c=','c-','dz=','d-','lj','nj','s=','z=']

let modifiedWrod = input;
alphabet.forEach(alpha => {
    modifiedWrod = modifiedWrod.replaceAll(alpha, 'X')
})

console.log(modifiedWrod.length)


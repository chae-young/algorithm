const fs = require('fs');
const input = require('fs').readFileSync('/dev/stdin').toString().trim()

const alphabet = ['c=','c-','dz=','d-','lj','nj','s=','z=']

let modifiedWrod = input;
alphabet.forEach(alpha => {
    modifiedWrod = modifiedWrod.replaceAll(alpha, 'X')
})

console.log(modifiedWrod.length)
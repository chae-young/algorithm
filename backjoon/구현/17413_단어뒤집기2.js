const fs = require('fs');
let input = fs.readFileSync(__dirname + '/17413_단어뒤집기2.txt').toString().trim();
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const parts = input.split(/(<[^<>]+>| +)/).filter(part => part !== '');
const answer = [];

for(let i = 0; i < parts.length; i++){
    if(parts[i][0] !== '<'){
        answer.push(parts[i].split('').reverse().join(''))
    }else{
        answer.push(parts[i])
    }
}


console.log(answer.join(''))
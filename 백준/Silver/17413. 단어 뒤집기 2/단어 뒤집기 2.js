const input = require('fs').readFileSync('/dev/stdin').toString().trim();
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
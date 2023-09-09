const fs = require('fs');
const input = fs.readFileSync(__dirname + '/11866_요세푸스문제.txt').toString().trim().split('\n')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [n,k] = input[0].split(' ');


const queue = [];
const answer = [];

for(let i = 0; i < n; i += 1) queue.push(i+1);

let count = 1;
while(queue.length){
    const shiftItem = queue.shift();
    if(count % k === 0){
        answer.push(shiftItem)
    }else{
        queue.push(shiftItem)
    }

    count += 1;
}

console.log(`<${answer.join(', ')}>`)

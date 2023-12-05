const fs = require('fs');
const input = fs.readFileSync(__dirname + '/1764_듣보잡.txt').toString().trim().split('\n');

const [n,m] = input.shift().split(' ').map(Number);
// let nArr = input.slice(0,n);
// let mArr = input.slice(-(input.length - 1 - n));
// const sum = [...nArr,...mArr]

// const map = new Map();
// const answer = []

// sum.forEach(name => {
//     if(map.has(name)){
//         map.set(name, map.get(name) + 1)
//     }else{
//         map.set(name, 1)
//     }
// })

// for(const name of map){
//     if(name[1] > 1){
//         answer.push(name[0])
//     }
// }

const nSet = new Set();
const mSet = new Set();

for(let i = 0; i <input.length; i++){
    if(i < n){
        nSet.add(input[i])
    }else{
        mSet.add(input[i])
    }
}

let answer = [];
mSet.forEach(item => {
    if(nSet.has(item)) answer.push(item)
})
answer.sort()
console.log(answer.length + '\n' + answer.sort().join('\n'));
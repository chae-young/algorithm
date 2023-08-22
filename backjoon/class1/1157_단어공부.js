const fs = require('fs');
const input = fs.readFileSync(__dirname + '/1157_단어공부.txt').toString().toUpperCase().trim().split('')
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a,b] = input

const map = new Map

for(let i = 0; i < input.length; i++){
    if(map.has(input[i])){
        map.set(input[i], map.get(input[i]) + 1 )
    }else{
        map.set(input[i], 1)
    }
}

let maxVal = 0
let maxKey = null
let check = 0


for(const val of map.values()){
    if(val > maxVal){
        maxVal = val
    }
}

for(const [key,val] of map){
    if(val === maxVal){
        check++
        maxKey = key
    }
}

console.log(check > 1 ? '?' : maxKey)

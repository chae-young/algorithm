const fs = require('fs');
const input = fs.readFileSync(__dirname + '/11399_ATM.txt').toString().trim().split('\n');

let [n,arr] = input;
let answer = 0;
const timeArr = []
arr = arr.split(' ').map(Number);

arr.sort((a,b) => a - b)

// arr.forEach((time) => {
//     answer += time;
//     timeArr.push(answer)
// })

// answer = timeArr.reduce((acc,cur) => acc+cur);
// console.log(answer)


/* 다른사람풀이로 리팩토링*/
arr.sort((a,b) => a - b)
console.log(
arr.reduce((acc,cur) => {
    answer += acc + cur
    return acc + cur
},0) 
)

console.log(answer)

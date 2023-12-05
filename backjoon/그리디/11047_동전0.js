const fs = require('fs');
let input = fs.readFileSync(__dirname + '/11047_동전0.txt').toString().trim().split('\n');
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// n종류로 k의 합을 만들려고한다. 이때 필요한 동전의 개수는??

let [n,k] = input.shift().split(' ').map(Number)
input = input.map(Number)
let count = 0;
input.reverse();

for(let i = 0; i < n; i++){
    const money = input[i];
    while(k >= money){
        k -= money;
        count++
    }
}
console.log(count)


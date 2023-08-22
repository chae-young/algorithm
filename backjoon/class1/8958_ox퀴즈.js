const fs = require('fs');
const input = fs.readFileSync(__dirname + '/8958_ox퀴즈.txt').toString().trim().split("\n");
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a,b] = input

//x를 만나면 리셋된다..
let [count,...score] = input
let sum = 0

for(let i = 0; i < count; i++){
    let k = 0;
    sum = 0
    for(let j = 0; j < score[i].length; j++){
        k++
        if(score[i][j] == 'O'){
            sum += k
        }else{
            sum + 0;
            k = 0
        }
    }
    console.log(sum)
}




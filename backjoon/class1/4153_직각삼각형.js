const fs = require('fs');
const input = fs.readFileSync(__dirname + '/4153_직각삼각형.txt').toString().trim().split('\n')
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ').split('\n');
// const [a,b] = input

for(let i = 0; i < input.length; i++){
    const arr = [input[i]].sort((a,b) => a - b);
    const [a,b,c] = arr[0].split(' ');
    
    if(a ** 2 + b ** 2 == c ** 2){
        console.log('right')
    }else{
        console.log('wrong')
    }
}

// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// input.splice(-1);
// var testcase = input.map((a) => a.split(" ").map(Number).sort((a,b)=>a-b));

// testcase.forEach((a) =>
//   a[0] * a[0] + a[1] * a[1] == a[2] * a[2]
//     ? console.log("right")
//     : console.log("wrong")
// );
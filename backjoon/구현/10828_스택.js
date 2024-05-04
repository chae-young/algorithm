const fs = require('fs');
let input = fs.readFileSync(__dirname + '/10828_스택.txt').toString().trim().split('\n');
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.shift()
const arr = []
let answer = []

input.forEach(el => {
    switch(el) {
        case 'pop':
            const stackPop = arr.pop();
            stackPop ? answer.push(stackPop) : answer.push(-1)
            break
        case 'size':
            answer.push(arr.length)
            break
        case 'empty':
            arr.length ? answer.push(0) : answer.push(1)
            break
        case 'top':
            const stackTop = arr[arr.length - 1]
            stackTop ? answer.push(stackTop) : answer.push(-1)
            break
        default:
            arr.push(el.split(' ')[1] * 1)
            break
    }
})

console.log(answer.join('\n'))


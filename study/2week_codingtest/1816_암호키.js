const fs = require('fs');
const input = fs.readFileSync(__dirname + '/1816_암호키.txt').toString().trim().split('\n').map(Number);
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a,b] = input

//소인수란? 약수중에서 소수 인수. -> 2,3,5,7,11
//약수 = 나누어 떨어지는 수
//소수 = 1과 자기자신 외에 약수를 가지지 않는수.

//s의 소인수 가 1000000 보다 크면 적절한 암호키..그렇지 못하면 적절하지 않은키....
//100만보다 작고 하나라도 나누어 떠러지면 틀린번호.

const [count,...temp] = input

for(let i = 0; i < count; i++){
    for(let j = 2; j < 1000001; j++){
        if(temp[i]%j == 0){
            console.log('NO');
            break
        }
        if(j == 1000000){
            console.log('YES');
            break;
        }
    }
}


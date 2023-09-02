const fs = require('fs');
const input = fs.readFileSync(__dirname + '/1259_팰린드롬수.txt').toString().trim().split('\n');
// const input = fs.readFileSync(__dirname + '/index1.txt').toString().split(' ')

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const [a,b] = input

// 뒤로 했을때 문자열이 서로 똑같다면. 팰린드롬수
// 하지만 0이 앞에 온다면 팰린드롬수가 아니다.
input.pop(); // 마지막 0자르기

for (let i = 0; i < input.length; i++) {
	let reverseStr = input[i].split("").reverse().join("");
	console.log(input[i] === reverseStr ? "yes" : "no");
}

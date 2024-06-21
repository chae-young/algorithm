const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/1920_수찾기.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const A = input[1].split(' ').map(Number);
const B = input[3].split(' ').map(Number);

/**
 * N개의 정수 A[1], A[2], …, A[N]이 주어져 있을 때, 이 안에 X라는 정수가 존재하는지 알아내는 프로그램을 작성하시오.
 * 주어진 문제는 여러 개의 정수들로 이루어진 배열에서 특정 정수들이 존재하는지 확인하는 프로그램을 작성하는 것입니다.

    입력
    1. 첫 번째 줄에는 자연수 N이 주어집니다. (1 ≤ N ≤ 100,000)
        * N은 배열 A의 원소 개수를 나타냅니다.
    2. 두 번째 줄에는 N개의 정수 A[1], A[2], …, A[N]이 주어집니다.
        * 이 정수들은 배열 A를 구성합니다.
    3. 세 번째 줄에는 자연수 M이 주어집니다. (1 ≤ M ≤ 100,000)
        * M은 확인할 숫자의 개수를 나타냅니다.
    4. 네 번째 줄에는 M개의 정수들이 주어집니다.
        * 이 정수들은 배열 A 안에 존재하는지 확인할 숫자들입니다.
    출력
    * M개의 줄에 각각의 정수가 배열 A에 존재하면 1을, 존재하지 않으면 0을 출력합니다.
*/

const aArr = new Set(A);
const answer = B.map((b) => (aArr.has(b) ? 1 : 0));
console.log(answer.join('\n'));

// ------------------------------------------------

// const A = input[1].split(' ').map(Number);
// const B = input[3].split(' ').map(Number);

// const aArr = new Set(A);
// const answer = B.map((b) => (aArr.has(b) ? 1 : 0));
// console.log(answer.join('\n'));



// const N = Number(input.shift());
// const arrA = input.shift().split(' ').map(v => Number(v));
// const M = Number(input.shift());
// const arrB = input.shift().split(' ').map(v => Number(v));

// //const NInput = input.map(v => Number(v));
// const result = []
// const setA = new Set(arrA);

// for(let i = 0; i < N; i++){
//     if(setA.has(arrB[i])){
//         result.push(1)
//     }else{
//         result.push(0)
//     }
// }

// console.log(result.join('\n'))
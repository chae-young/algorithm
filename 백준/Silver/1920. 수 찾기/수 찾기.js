const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const A = input[1].split(' ').map(Number);
const B = input[3].split(' ').map(Number);

const aArr = new Set(A);
const answer = B.map((b) => (aArr.has(b) ? 1 : 0));
console.log(answer.join('\n'));
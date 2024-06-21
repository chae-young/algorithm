const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/9375_패션왕신해빈.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

/*
첫째 줄에 테스트 케이스가 주어진다. 테스트 케이스는 최대 100이다.

각 테스트 케이스의 첫째 줄에는 해빈이가 가진 의상의 수 n(0 ≤ n ≤ 30)이 주어진다.
다음 n개에는 해빈이가 가진 의상의 이름과 의상의 종류가 공백으로 구분되어 주어진다. 같은 종류의 의상은 하나만 입을 수 있다.
모든 문자열은 1이상 20이하의 알파벳 소문자로 이루어져있으며 같은 이름을 가진 의상은 존재하지 않는다.


의상 종류별로 의상의 수를 세면:

headgear: 2 (hat, turban)
eyewear: 1 (sunglasses)
각 의상 종류별로 입거나 입지 않는 경우를 고려합니다:

headgear의 경우 3가지 (hat, turban, 아무것도 입지 않음)
eyewear의 경우 2가지 (sunglasses, 아무것도 입지 않음)
모든 조합의 수를 계산하면:

(2+1) * (1+1) = 3 * 2 = 6
알몸인 경우를 빼면:

총 6가지 조합 중에서 아무것도 입지 않는 1가지를 빼서 5가지가 됩니다.
*/

const testcase = parseInt(input.shift());
const result = [];

let index = 0;

for (let t = 0; t < testcase; t++) {
  const n = parseInt(input[index]);
  const obj = {};
  
  for (let i = 0; i < n; i++) {
    const [name, category] = input[index].split(' ');
    index++;
    
    if (obj[category] !== undefined) {
      obj[category]++;
    } else {
      obj[category] = 1;
    }
  }
  
  let combinations = 1;
  for (let key in obj) {
    combinations *= (obj[key] + 1);
  }
  
  result.push(combinations - 1);
}

// 결과 출력
result.forEach(res => console.log(res));

console.log(input)
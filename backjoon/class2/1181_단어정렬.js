const fs = require('fs');
const input = fs.readFileSync(__dirname + '/1181_단어정렬.txt').toString().trim().split('\n');
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// 길이가 짧은것 부터
// 길이가 같으면 사전순으로
// 중복된 단어는 제거. 하나만!
let [n,...word] = input;

word = [...new Set(word)]
word.sort()
word.sort((a,b) => a.length - b.length);

word.forEach(v => console.log(v))


/* 다른사람 풀이 */
const strArr = [...new Set(input.slice(1))];
const resultArr = strArr.sort((a,b) => {
    if(a.length === b.length) return a < b ? -1 : 1;
    return a.length - b.length
})

console.log(resultArr.join('\n'))
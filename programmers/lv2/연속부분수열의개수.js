// 원형수열의 연속하는 부분 수열의 합으로 만들 수 있는 수가 모두 몇가지인지?
// 원형수열: 처음과 끝이 연결된 형태의 수열(끊기는 부분이 x) 7,9,1,1,4,7

/* 
[7,9,1,1,4]
원형수열: 7,9,1,1,4,7,9,1,1,4

길이가 1: 1,4,7,9
길이가 2: 16,10,2,5,11
길이가 3: 17,11,6,12,20
길이가 4: 18,15,13,21
길이가 5: 22
*/

function solution(elements) {
    const n = elements.length;
    const set = new Set();

    for(let i = 0; i < n; i++){
        let currentSum = 0;
        for(let j = 0; j < n; j++){
            currentSum += elements[(i+j) % n]
        }
    }

    return set.size
}
// (i + j) % n와 같은 표현은 배열 내에서 인덱스를 주기적으로 순환하고자 할 때 흔히 사용되는 규칙. 이 규칙을 외워두면, 배열에서 일정한 주기로 반복되는 부분 배열의 합을 효과적으로 계산.
const elements = [7,9,1,1,4]
solution(elements)
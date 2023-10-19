function solution(n,a,b){
    let answer = 0;

    while(true){
        answer++
        if((b % 2 == 0 && b - a == 1) || (a - b == 1 && a % 2 == 0)) {
            return answer
        }
        a = Math.round(a / 2)
        b = Math.round(b / 2)
    }
}
/* 다른사람풀이 */
function solution(n,a,b)
{
    let answer = 0;
    while(a !== b) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        answer++;
    }

    return answer;
}

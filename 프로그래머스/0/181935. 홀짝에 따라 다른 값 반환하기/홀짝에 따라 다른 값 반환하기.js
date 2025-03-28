function solution(n) {
    const isOdd = n % 2 == 1
    const inCrement = isOdd ? 1 : 2
    let answer = 0;
    
    for(i = inCrement; i <= n; i+= 2) {
        if(isOdd) {
            answer += i;
        }else{
            answer += i ** 2;
        }
    }
    return answer;
} 




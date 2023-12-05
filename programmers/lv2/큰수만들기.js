function solution(number, k) {
    const minLen = number.length - k
    const half = [...number].slice(0,k)
    const firstMax = Math.max(...half);
    const firstMaxi = [...number].indexOf(firstMax+'')
    const numberArr = [...number];
    const restNumberArr = numberArr.slice(firstMaxi)
    const answer = [...restNumberArr];

    k -= numberArr.indexOf(firstMax+'')
    
    for(let i = 0 ; i < restNumberArr.length; i++){
        const current = restNumberArr[i];
        const next = restNumberArr[i + 1]

        if(current < next && k > 0){
            k--
            const index = answer.indexOf(current);
            answer.splice(index,1)
        }
    }
    
    if(answer.length > minLen) answer.pop()

    return answer.join('')
}

// 그리디문제인데 왜 스택으로 풀지..?
function solution2(number,k){
    let answer = [];
    for(let i = 0; i < number.length; i++){
        while(k > 0 && answer[answer.length - 1] < number[i]){
            answer.pop()
            k--;
        }
        answer.push(number[i])
    }
    answer = answer.join('').slice(0,number.length - k)
    return answer
}
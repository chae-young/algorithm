function solution(arr, divisor) {
    const answer = [];
    arr = arr.sort((a,b) => a - b)
    
    arr.forEach((v) => {
        if(v % divisor === 0){
            answer.push(v)
        }
    })
    
    if(answer.length === 0) answer.push(-1)
    
    return answer
}
function solution(arr, k) {
    const set = new Set(arr);
    const uniqueArr = [...set];
    const answer = [];
    
    for(let i = 0; i < k; i++) {
        if(uniqueArr[i] !== undefined) {
            answer.push(uniqueArr[i])
        }else{
            answer.push(-1)
        }
    }
    
    return answer
}
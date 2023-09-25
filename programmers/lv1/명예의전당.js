function solution(k, score) {
    let hall = [];
    const result = [];

    for(let i = 0; i < score.length; i++){
        if(hall.length < k){
            hall.push(score[i]);
        }else{
            if(hall[k-1] < score[i]){
                hall[k-1] = score[i]
            }
        }
        result.push(Math.min(...hall))        
        hall.sort((a,b) => b - a);
    }

    return result
}


/* 다른사람풀이 */
function solution(k, score) {
    const stack = [];
    return score.reduce((a,c) => {
        if(stack.length < k) {
            stack.push(c)
            stack.sort((a,b) => a - b)
        }else{
            stack.push(c)
            stack.sort((a,b) => a - b)
            stack.shift();
        }
        a.push(stack[0])
        return a
    },[])
}

solution(3,[10, 100, 20, 150, 1, 100, 200])
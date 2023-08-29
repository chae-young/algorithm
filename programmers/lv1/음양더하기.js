function solution(absolutes, signs) {
    let result = 0;
    
    const valueArr = absolutes.map((v,i) => {
        if(!signs[i]){
            v *= -1 
        }
        return v
    })
    
    for(const val of valueArr){
        result += val
    }
    
    return result
}


/* ----풀이---- */
let answer = 0;

for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
}
return answer;

console.log(solution([4,7,12], [true,false,true]))
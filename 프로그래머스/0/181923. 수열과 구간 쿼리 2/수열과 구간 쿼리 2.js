function solution(arr, queries) {
    const result = [];
    
    queries.forEach(q => {
        const s = q[0]
        const e = q[1]
        const k = q[2]
        
        const maxNumArr = arr.slice(s, e + 1).filter(num => k < num);
        const resultVal = maxNumArr.length == 0 ? -1 : Math.min(...maxNumArr);
        
        result.push(resultVal)
    })
    
    return result
}
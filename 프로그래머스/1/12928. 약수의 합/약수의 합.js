function solution(n) {
    const nums = Array.from({length: n}, (v,i) => i + 1)
    const result = nums.reduce((acc, cur) => {
       if(n % cur === 0) {
           return acc + cur
       }else {
           return acc
       }
    },0)
    
    return result;
}
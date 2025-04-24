function solution(n) {
   const arr = Array.from({length: n}, (_,index) => index + 1);
    return arr.filter(item => Number.isInteger(n/item) && item)
}
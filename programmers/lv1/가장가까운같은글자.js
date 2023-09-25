
function solution(s) {
    const hash = {};

    [...s].map((v,i) => {
        let result = hash[v] !== undefined ? i - hash[v]: -1;
        console.log(i)
        hash[v] = i
        return result
    })
}

console.log(solution("banana"))
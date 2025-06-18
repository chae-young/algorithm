function solution(dartResult) {
    const map = {
        S:1,
        D:2,
        T:3
    }
    
    let answer = [];
    const strArr = dartResult.match(/\d{1,2}[SDT][*#]?/g);

    strArr.forEach((str, idx) => {
        const [,score, bonus, option] = str.match(/(\d{1,2})([SDT])([*#]?)/);
        let sum = parseInt(score) ** map[bonus];

        if(option === '#') {
            sum *= -1
        }
        if(option === '*') {
            sum *= 2
            answer[idx - 1] = answer[idx - 1] * 2 
        }
        answer.push(sum)
    })
    
    return answer.reduce((acc,cur) => acc + cur, 0)
}
function solution(str1, str2) {
    const str2Leng = str2.length;
    let answer = ''
    
    for(let i = 0; i < str1.length; i++) {
        const capture = str1.slice(i,str2Leng + i);
        if(capture === str2) {
            answer = 1;
            return answer;
        }
    }
    answer = 2;
    return answer
}
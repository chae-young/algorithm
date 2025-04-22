function solution(my_string) {
    let answer = ''
    for(const str of my_string) {
        if(str.toUpperCase() === str) {
            answer += str.toLowerCase();
        }else {
            answer += str.toUpperCase();
        }
    }
    
    return answer
}
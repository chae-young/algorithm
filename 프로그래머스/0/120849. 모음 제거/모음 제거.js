function solution(my_string) {
    let answer = "";
    
    for(const str of my_string) {
        if(!/^[aeiouAEIOU]$/.test(str)) {
            answer += str
        }
    }

    return answer;
}
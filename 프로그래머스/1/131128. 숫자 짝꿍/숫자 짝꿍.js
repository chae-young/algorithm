function solution(X, Y) {
    const Ycount = {};
    for(const char of Y){
        if(!Ycount[char]){
            Ycount[char] = 0
        }
        Ycount[char]++
    }
    
    const answer = [];
    
    for(const char of X){
        if(Ycount[char] && Ycount[char] > 0){
            answer.push(char)
            Ycount[char]--;
        }
    }
    if (answer.length === 0) return "-1";

    if (answer.every(c => c === "0")) return "0";

    return answer.sort((a, b) => b - a).join('');
}

function solution(s, n) {
    const alpha = Array.from({ length: 26 }, (v, i) => String.fromCharCode(i + 97));
    let answer = ''

    function findAlpha(singleStr){
        let idx = alpha.indexOf(singleStr.toLowerCase());
        let alphaCase = singleStr != alpha[idx];

        if(idx == -1) {
            answer += " "
            return;
        }

        if(!alpha[idx+n]){
            idx = idx+n;
            answer += alphaCase ? alpha[idx-26].toUpperCase() : alpha[idx-26]
        }else{
            answer += alphaCase ? alpha[idx+n].toUpperCase() : alpha[idx+n]
        }
    }

    [...s].forEach((singleStr) => {
        findAlpha(singleStr)
    })

    return answer
}

/* 다른사람 풀이 */
// ['AB']
function solution2(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer = '';

    for(var i = 0; i < s.length; i++){
        var text = s[i];
        if(text == ' '){
            answer += ' ';
            continue;
        }

        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;

        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index]
    }
    console.log(answer)
    return answer;
}

solution2("AB",1)